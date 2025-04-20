import {getFamilyPhotography} from '@/lib/api/categories'

import PageClient from './page.client'

import {Metadata} from 'next'
import {headers} from 'next/headers'
import Link from 'next/link'
import PricingCards from '@/components/pages/pricing-cards'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Pensacola Family Photography | Shelley Bressman Photography',
  description:
    'Family Photography in Pensacola by Shelley Bressman Photography captures your unique style and personality with professional, creative, and timeless images.',
  openGraph: {
    type: 'website',
    images: ['https://i.ibb.co/vCFHpPB/senior-og.jpg']
  }
}

export default async function Page() {
  const pensacolaFamilyPhotography = await getFamilyPhotography()

  const headersList = headers()
  const userAgent = (await headersList).get('user-agent') || ''
  const isMobile = /mobile/i.test(userAgent)

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold w-fit mx-auto text-center">
        Pensacola Family Photography <br /> Let us tell your story
      </h1>
      <Link href="/blog/4ea5eb57-58e5-4b58-9d5a-a6cc0126cc7f">
        <h3 className="text-xl text-center my-4 text-blue-500 hover:text-blue-700 underline">
          Pensacola Family Photography FAQ
        </h3>
      </Link>
      <p className="text-xl text-center my-4">
        Pensacola, Perdido Key, Orange Beach, Gulf Shores, Fort Morgan and Navarre Includes 2
        photographers
      </p>

      <PricingCards pricing_cards={pensacolaFamilyPhotography?.pricing_cards || []} />
      <Image
        src="/ratings_updated.webp"
        width={4095}
        height={739}
        alt="Testmonial"
        className="w-full object-contain my-4"
        priority
      />

      <PageClient isMobile={isMobile} pensacolaFamilyPhotography={pensacolaFamilyPhotography} />
    </div>
  )
}
