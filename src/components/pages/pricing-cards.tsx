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

const PricingCards = ({pricing_cards = null}: Props) => {
  return (
    <div className="grid grid-cols-2 justify-center gap-4">
      {pricing_cards?.map((card, idx) => {
        return (
          <div
            id={`pricing-card-${idx + 1}`}
            key={card?._key}
            className="rounded-xl mx-auto p-4 border-4 my-4 border-gray-400 min-h-52 max-w-72"
          >
            <PortableText value={card.pricing_card} components={components} />
          </div>
        )
      })}
    </div>
  )
}

export default PricingCards
