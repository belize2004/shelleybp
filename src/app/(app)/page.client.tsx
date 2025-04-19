'use client'

import Image from 'next/image'
import Masonry from 'react-masonry-css'

import {BlogCard} from '@/components/blog/card'
import {generalImageURL} from '@/lib/helpers'
import {useEffect, useRef, useState} from 'react'
import {createPortal} from 'react-dom'
import EnlargedImage from '@/components/pages/EnlargedImage'

interface PageClientProps {
  isMobile: boolean
  homeData?: any
}

export default function PageClient({isMobile, homeData = null}: PageClientProps) {
  const [enlargedImg, setEnlargedImg] = useState(null)

  const [posts, setPosts] = useState<any[]>([])
  const [start, setStart] = useState(0)
  const [totalItems, setTotalItems] = useState(posts.length)
  const [isFirstLoadComplete, setIsFirstLoadComplete] = useState(false)
  const [reachedEnd, setReachedEnd] = useState(false)
  const [loading, setLoading] = useState(false)
  const loaderRef = useRef<HTMLDivElement | null>(null)

  const fetchData = async () => {
    setLoading(true)
    const res = await fetch(`/api?start=${start}&limit=${isMobile ? 10 : 20}`)

    const data = await res?.json()
    if (data) {
      setTotalItems(data.galleryCount)
      setPosts((prev) => [...prev, ...data.gallery])
      setStart((prev) => prev + (isMobile ? 10 : 20))
    }
    if (!isFirstLoadComplete) {
      setIsFirstLoadComplete(true)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData() // Initial load
  }, [])

  useEffect(() => {
    if (posts.length === totalItems && isFirstLoadComplete) {
      setReachedEnd(true)
    }
  }, [posts, totalItems, isFirstLoadComplete])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && !reachedEnd) {
          fetchData()
        }
      },
      {threshold: 1}
    )

    const currentLoader = loaderRef.current
    if (currentLoader) observer.observe(currentLoader)

    return () => {
      if (currentLoader) observer.unobserve(currentLoader)
    }
  }, [loaderRef.current, loading])

  const breakpointColumnsObj = {
    default: 3,
    1440: 4,
    1100: 3,
    700: 2,
    500: 1
  }

  const imagesSorted = posts?.filter((image) => image.order)

  const imagesUnSorted = posts?.filter((image) => !image.order)

  const onCloseImage = () => {
    setEnlargedImg(null)
  }

  const ImageComponent = ({image, index}: {image: any; index: number}) => {
    const imgUrl = generalImageURL(image?.image)
    const dimension = image?.image?.asset?._ref?.split('-')[2]
    const width = dimension ? dimension.split('x')[0] : 1000
    const height = dimension ? dimension.split('x')[1] : 1000

    const onClick = () => {
      setEnlargedImg({alt: image?.image?.alt, src: imgUrl, onCloseImage})
    }

    return (
      <div key={`image${image?._key}`} className="mb-4">
        <Image
          onClick={onClick}
          src={imgUrl}
          width={width || 1000}
          height={height || 1000}
          alt={image?.image?.alt || 'Gallery image'}
          className={`rounded-xl w-full h-auto cursor-zoom-in`}
          priority={index < 4}
          loading={index < 4 ? 'eager' : 'lazy'}
        />
      </div>
    )
  }

  return (
    <>
      {enlargedImg && (
        <EnlargedImage src={enlargedImg?.src} alt={enlargedImg?.alt} zoomOut={onCloseImage} />
      )}
      {isMobile ? (
        // <div className="flex flex-col gap-4">
        //   {/* <Image
        //     src="/ratings.webp"
        //     width={2000}
        //     height={2000}
        //     alt="Ratings"
        //     className="my-8 w-full"
        //   /> */}
        //   {imagesSorted
        //     .sort((a, b) => a.order - b.order)
        //     .map((image, idx) => (
        //       <ImageComponent key={image.id} image={image} index={idx} />
        //     ))}
        //   {imagesUnSorted.map((image, idx) => (
        //     <ImageComponent key={image.id} image={image} index={idx} />
        //   ))}
        // </div>
        <Masonry
          breakpointCols={{
            default: 2,
            500: 2
          }}
          className="flex w-auto"
          columnClassName="bg-clip-padding px-2"
        >
          {/* {image && (
            <div key={`image${posts[0]._id}`} className="mb-4">
              <Image
                src={image}
                width={1000}
                height={1000}
                alt={posts[0].mainImage.alt || 'Gallery image'}
                className="rounded-xl w-full h-auto"
              />
            </div>
          )} */}
          {/* <Image
          src="/ratings.webp"
          width={2000}
          height={2000}
          alt="Ratings"
          className="my-8 w-full"
        /> */}

          {imagesSorted
            ?.sort((a, b) => a.order - b.order)
            ?.map((image, idx) => <ImageComponent key={image._key} image={image} index={idx} />)}
          {imagesUnSorted?.map((image, idx) => (
            <ImageComponent key={image._key} image={image} index={idx} />
          ))}
        </Masonry>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto"
          columnClassName="bg-clip-padding px-2"
        >
          {/* {image && (
            <div key={`image${posts[0]._id}`} className="mb-4">
              <Image
                src={image}
                width={1000}
                height={1000}
                alt={posts[0].mainImage.alt || 'Gallery image'}
                className="rounded-xl w-full h-auto"
              />
            </div>
          )} */}
          {/* <Image
            src="/ratings.webp"
            width={2000}
            height={2000}
            alt="Ratings"
            className="my-8 w-full"
          /> */}
          {imagesSorted
            ?.sort((a, b) => a.order - b.order)
            ?.map((image, idx) => <ImageComponent key={image._key} image={image} index={idx} />)}
          {imagesUnSorted?.map((image, idx) => (
            <ImageComponent key={image._key} image={image} index={idx} />
          ))}
        </Masonry>
      )}
      <div className="flex flex-col p-8 gap-8">
        {homeData?.blogs?.map((b) => <BlogCard key={b._id} blogPost={b} />)}
      </div>
      {reachedEnd ? null : (
        <div ref={loaderRef} className="col-span-full text-center py-8">
          {loading && <p>Loading more...</p>}
        </div>
      )}
    </>
  )
}
