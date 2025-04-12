import {getSeniorPortraits, senior} from '@/lib/api/categories'

import PageClient from './page.client'
import {getQueryClient} from '../../get-query-client'
import {dehydrate, HydrationBoundary} from '@tanstack/react-query'
import {Metadata} from 'next'
import {headers} from 'next/headers'
import Link from 'next/link'
import PricingCards from '@/components/pages/pricing-cards'

export const metadata: Metadata = {
  title: 'Senior Portrait Photography Pensacola | Shelley Bressman Photography',
  description:
    'Senior portrait photography in Pensacola by Shelley Bressman Photography captures your unique style and personality with professional, creative, and timeless images.',
  openGraph: {
    type: 'website',
    images: ['https://i.ibb.co/vCFHpPB/senior-og.jpg']
  }
}

export default async function Page() {
  // const queryClient = getQueryClient()
  const seniorPortraits = await getSeniorPortraits()
  // void queryClient.prefetchQuery(senior)
  const headersList = headers()
  const userAgent = (await headersList).get('user-agent') || ''
  const isMobile = /mobile/i.test(userAgent)

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold w-fit mx-auto text-center">Senior Portraits</h1>
      <Link href="/blog/cb76f642-bea9-49dc-880e-17c065df80bc">
        <h3 className="text-xl text-center my-4 text-blue-500 hover:text-blue-700 underline">
          Senior Portraits FAQ
        </h3>
      </Link>

      <PricingCards pricing_cards={seniorPortraits?.pricing_cards || []} />

      {/* <HydrationBoundary state={dehydrate(queryClient)}> */}
      <PageClient isMobile={isMobile} seniorPortraits={seniorPortraits} />
      {/* </HydrationBoundary> */}
    </div>
  )
}
