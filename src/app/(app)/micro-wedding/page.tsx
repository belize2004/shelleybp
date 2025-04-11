import {getMicroWeddings} from '@/lib/api/categories'
import PageClient from './page.client'

import {Metadata} from 'next'
import {headers} from 'next/headers'

export const metadata: Metadata = {
  title: 'Micro Wedding Pensacola Florida',
  description:
    'Capture your intimate micro wedding in Pensacola, Florida with Shelley Bressman Photography, specializing in beautiful, heartfelt moments by the beach and beyond.'
}

export default async function Page() {
  const microWeddings = await getMicroWeddings()

  const headersList = headers()
  const userAgent = (await headersList).get('user-agent') || ''
  const isMobile = /mobile/i.test(userAgent)

  return (
    <div className="p-4">
      <PageClient isMobile={isMobile} microWeddings={microWeddings} />
    </div>
  )
}
