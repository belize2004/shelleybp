'use client'

import {BlogCard} from '@/components/blog/card'
import EnlargedImage from '@/components/pages/EnlargedImage'
// import {senior} from '@/lib/api/categories'
// import {IMAGE_BASE_URL} from '@/lib/const'
import {generalImageURL} from '@/lib/helpers'

// import {useSuspenseQuery} from '@tanstack/react-query'
import Image from 'next/image'
import {useState} from 'react'
import Masonry from 'react-masonry-css'

interface PageClientProps {
  isMobile: boolean
  seniorPortraits?: any
}

export default function PageClient({isMobile, seniorPortraits = null}: PageClientProps) {
  const [enlargedImg, setEnlargedImg] = useState(null)
  // const {data} = useSuspenseQuery(senior)
  const breakpointColumnsObj = {
    default: 3,
    1440: 4,
    1100: 3,
    700: 2,
    500: 1
  }
  const onCloseImage = () => {
    setEnlargedImg(null)
  }
  return (
    <>
      {enlargedImg && (
        <EnlargedImage src={enlargedImg?.src} alt={enlargedImg?.alt} zoomOut={onCloseImage} />
      )}
      {isMobile ? (
        <Masonry
          breakpointCols={{
            default: 2,
            500: 2
          }}
          className="flex w-auto"
          columnClassName="bg-clip-padding px-2"
        >
          {/* <Image
      src="/ratings.webp"
      width={2000}
      height={2000}
      alt="Ratings"
      className="my-8 w-full"
    /> */}

          {seniorPortraits?.photos?.map((image, idx) => {
            const onClick = () => {
              setEnlargedImg({alt: image?.image?.alt || image?.title, src: imgUrl, onCloseImage})
            }

            const imgUrl = generalImageURL(image)
            const dimension = image?.asset?._ref?.split('-')[2]
            const width = dimension ? dimension?.split('x')[0] : 1200
            const height = dimension ? dimension?.split('x')[1] : 120
            return (
              <div key={image?._key} className="mb-4">
                <Image
                  src={imgUrl || '/placeholder.svg'}
                  onClick={onClick}
                  width={width || 1200}
                  height={height || 120}
                  alt={image?.title || 'Image'}
                  className="rounded-xl w-full h-auto cursor-zoom-in" // Made image responsive
                />
              </div>
            )
          })}
        </Masonry>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto"
          columnClassName="bg-clip-padding px-2"
        >
          {/* <Image
            src="/ratings.webp"
            width={2000}
            height={2000}
            alt="Ratings"
            className="my-8 w-full"
          /> */}

          {seniorPortraits?.photos?.map((image, idx) => {
            const onClick = () => {
              setEnlargedImg({alt: image?.image?.alt || image?.title, src: imgUrl, onCloseImage})
            }
            const imgUrl = generalImageURL(image)
            const dimension = image?.asset?._ref?.split('-')[2]
            const width = dimension ? dimension?.split('x')[0] : 1200
            const height = dimension ? dimension?.split('x')[1] : 120
            return (
              <div key={image?._key} className="mb-4">
                <Image
                  src={imgUrl || '/placeholder.svg'}
                  onClick={onClick}
                  width={width || 1200}
                  height={height || 120}
                  alt={image?.title || 'Image'}
                  className="rounded-xl w-full h-auto cursor-zoom-in" // Made image responsive
                />
              </div>
            )
          })}
        </Masonry>
      )}

      <div className="flex flex-col p-8 gap-8">
        {seniorPortraits?.blogs?.map((b) => <BlogCard key={b._id} blogPost={b} />)}
      </div>
    </>
  )
}
