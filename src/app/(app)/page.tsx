import {headers} from 'next/headers'
import PageClient from './page.client'
import {getHomeData} from '@/lib/api/home'

import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Shelley Bressman Photography | Pensacola and Gulf Shores Photographer',
  description:
    'Discover Shelley Bressman’s professional photography in Pensacola, FL, specializing in real estate, interior design, portraits, and concert events with artistic flair.'
}

export default async function Home() {
  // const homeData = await getHomeData()

  const headersList = headers()
  const userAgent = (await headersList).get('user-agent') || ''
  const isMobile = /mobile/i.test(userAgent)

  return (
    <div className="p-4">
      <PageClient isMobile={isMobile} homeData={null} />
    </div>
  )
}
