import {getEngagementSessions} from '@/lib/api/categories'
import PageClient from './page.client'

import {Metadata} from 'next'
import {headers} from 'next/headers'
import Link from 'next/link'
import PricingCards from '@/components/pages/pricing-cards'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Engagement Sessions Pensacola | Shelley Bressman Photography',
  description:
    'Engagement sessions in Pensacola by Shelley Bressman Photography beautifully capture your love story with professional, romantic, and timeless photography.',
  openGraph: {
    type: 'website',
    title: 'Engagement Sessions Pensacola | Shelley Bressman Photography',
    images: ['https://i.ibb.co/BTFs6zm/eng-og.jpg']
  }
}

export default async function Page() {
  const engagementSessions = await getEngagementSessions()

  const headersList = headers()
  const userAgent = (await headersList).get('user-agent') || ''
  const isMobile = /mobile/i.test(userAgent)

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold  w-fit mx-auto text-center">Engagement Sessions</h1>
      <Link href="/blog/c82d67ce-5de0-4ef0-920a-bf4b27f40810">
        <h3 className="text-xl text-center my-4 text-blue-500 hover:text-blue-700 underline">
          Engagement Session FAQ
        </h3>
      </Link>

      <PricingCards pricing_cards={engagementSessions?.pricing_cards || []} />
      <Image
        src="/ratings.webp"
        width={398}
        height={224}
        alt="Testmonial"
        className="w-full my-4 md:mt-0"
        priority
      />
      <PageClient isMobile={isMobile} engagementSessions={engagementSessions} />
    </div>
  )
}
