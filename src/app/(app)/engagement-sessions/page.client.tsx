'use client'

import {BlogCard} from '@/components/blog/card'
import {generalImageURL} from '@/lib/helpers'

import Image from 'next/image'
import Masonry from 'react-masonry-css'

interface PageClientProps {
  isMobile: boolean
  engagementSessions?: any
}

export default function PageClient({isMobile, engagementSessions = null}: PageClientProps) {
  const breakpointColumnsObj = {
    default: 3,
    1440: 4,
    1100: 3,
    700: 2,
    500: 1
  }

  return (
    <>
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

          {engagementSessions?.photos?.map((image, idx) => {
            const imgUrl = generalImageURL(image)
            const dimension = image.asset._ref.split('-')[2]
            const width = dimension ? dimension.split('x')[0] : 1200
            const height = dimension ? dimension.split('x')[1] : 120
            return (
              <div key={image._key} className="mb-4">
                <Image
                  src={imgUrl || '/placeholder.svg'}
                  width={width || 1200}
                  height={height || 120}
                  alt={image.title || 'Image'}
                  className="rounded-xl w-full h-auto" // Made image responsive
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

          {engagementSessions?.photos?.map((image, idx) => {
            const imgUrl = generalImageURL(image)
            const dimension = image.asset._ref.split('-')[2]
            const width = dimension ? dimension.split('x')[0] : 1200
            const height = dimension ? dimension.split('x')[1] : 120
            return (
              <div key={image._key} className="mb-4">
                {' '}
                {/* Changed margin to bottom only */}
                <Image
                  src={imgUrl || '/placeholder.svg'}
                  width={width || 1200}
                  height={height || 120}
                  alt={image.title || 'Image'}
                  className="rounded-xl w-full h-auto" // Made image responsive
                />
              </div>
            )
          })}
        </Masonry>
      )}

      <div className="flex flex-col p-8 gap-8">
        {engagementSessions?.blogs?.map((b) => <BlogCard key={b._id} blogPost={b} />)}
      </div>
    </>
  )
}
