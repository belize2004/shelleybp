import {getFamilyPortraits} from '@/lib/api/categories'

import PageClient from './page.client'

import {Metadata} from 'next'
import {headers} from 'next/headers'
import Link from 'next/link'
import PricingCards from '@/components/pages/pricing-cards'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Portrait Photographer Pensacola Florida',
  description:
    'Capture timeless moments with professional portrait photography by Shelley Bressman in Pensacola, Florida. Serving Pensacola Beach, Perdido Key, Orange Beach, Gulf Shores, and Fort Morgan, Alabama, Shelley creates stunning, personalized portraits for every occasion',

  openGraph: {
    type: 'website',
    images: ['https://i.ibb.co/DVZDyBP/family-og.png']
  }
}

export default async function Page() {
  const familyPortraits = await getFamilyPortraits()

  const headersList = headers()
  const userAgent = (await headersList).get('user-agent') || ''
  const isMobile = /mobile/i.test(userAgent)

  return (
    <div className="pt-8 px-4">
      <h1 className="text-4xl font-bold w-fit mx-auto text-center">
        Family Portrait Photography <br /> Let us tell your story
      </h1>
      <Link href="/blog/4ea5eb57-58e5-4b58-9d5a-a6cc0126cc7f">
        <h3 className="text-xl text-center my-4 text-blue-500 hover:text-blue-700 underline">
          Family Portrait FAQ
        </h3>
      </Link>
      <p className="text-xl text-center my-4">
        Pensacola, Perdido Key, Orange Beach, Gulf Shores, Fort Morgan and Navarre Includes 2
        photographers
      </p>

      <PricingCards pricing_cards={familyPortraits?.pricing_cards || []} />
      <Image
        src="/ratings.webp"
        width={398}
        height={224}
        alt="Testmonial"
        className="w-full my-4 md:mt-0"
        priority
      />
      <PageClient isMobile={isMobile} familyPortraits={familyPortraits} />
    </div>
  )
}
