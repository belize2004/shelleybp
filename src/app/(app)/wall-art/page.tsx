import PageClient from './page.client'

import {getWallArt} from '@/lib/api/categories'
import {headers} from 'next/headers'

export default async function Page() {
  const wallArt = await getWallArt()

  const headersList = headers()
  const userAgent = (await headersList).get('user-agent') || ''
  const isMobile = /mobile/i.test(userAgent)

  return (
    <div className="p-4">
      <PageClient isMobile={isMobile} wallArt={wallArt} />
    </div>
  )
}
