import {PortableText, PortableTextComponents} from 'next-sanity'
import React from 'react'

type Props = {pricing_cards?: any[]}

const components: PortableTextComponents = {
  marks: {
    link: ({value, children}) => {
      let href = value?.href || '#'

      // Normalize the URL: treat it as absolute unless it's a local path
      if (!href.startsWith('http://') && !href.startsWith('https://') && !href.startsWith('/')) {
        href = 'https://' + href
      }

      const isExternal = href.startsWith('http')

      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-blue-600 underline hover:text-blue-800"
        >
          {children}
        </a>
      )
    }
  }
}

const PricingCards = ({pricing_cards = []}: Props) => {
  const numCards = pricing_cards.length
  const isOddLength = numCards % 2 === 1

  return (
    <>
      <div
        className={`grid grid-cols-2 ${isOddLength && numCards > 2 ? 'lg:grid-cols-3' : ''} items-center gap-2`}
      >
        {pricing_cards?.map((card, idx) => {
          const isLast = idx === numCards - 1

          const centerClass = isLast && isOddLength ? 'lg:col-span-1 col-span-full' : ''
          return (
            <div
              id={`pricing-card-${idx + 1}`}
              key={card?._key}
              className={`rounded-xl mx-auto p-4 border-4 my-4 border-gray-400 min-h-52 ${centerClass}`}
            >
              <PortableText value={card?.pricing_card} components={components} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default PricingCards
