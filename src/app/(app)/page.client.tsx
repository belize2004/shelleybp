'use client'

import Image from 'next/image'
import Masonry from 'react-masonry-css'
import {IMAGE_BASE_URL} from '@/lib/const'
import {useSuspenseQuery} from '@tanstack/react-query'
import {homeOptions} from '@/lib/api/home'
import {BlogCard} from '@/components/blog/card'
import {generalImageURL} from '@/lib/helpers'

interface PageClientProps {
  isMobile: boolean
  homeData?: any
}

export default function PageClient({isMobile, homeData = null}: PageClientProps) {
  const {data} = useSuspenseQuery(homeOptions)
  const breakpointColumnsObj = {
    default: 3,
    1440: 4,
    1100: 3,
    700: 2,
    500: 1
  }

  const imagesSorted = homeData?.gallery?.filter((image) => image.order)

  const imagesUnSorted = homeData?.gallery?.filter((image) => !image.order)

  const ImageComponent = ({image, index}: {image: any; index: number}) => {
    const imgUrl = generalImageURL(image?.image)
    const dimension = image.image.asset._ref.split('-')[2]
    const width = dimension ? dimension.split('x')[0] : 1000
    const height = dimension ? dimension.split('x')[1] : 1000
    return (
      <div key={`image${image._key}`} className="mb-4">
        <Image
          src={imgUrl}
          width={width || 1000}
          height={height || 1000}
          alt={image.image?.alt || 'Gallery image'}
          className="rounded-xl w-full h-auto"
          priority={index < 4}
          loading={index < 4 ? 'eager' : 'lazy'}
        />
      </div>
    )
  }

  return (
    <>
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
    </>
  )
}
