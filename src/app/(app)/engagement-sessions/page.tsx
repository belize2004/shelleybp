import {getEngagementSessions} from '@/lib/api/categories'
import PageClient from './page.client'

import {Metadata} from 'next'
import {headers} from 'next/headers'

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
      <PageClient isMobile={isMobile} engagementSessions={engagementSessions} />
    </div>
  )
}
