import type {Metadata} from 'next'
import {Montserrat} from 'next/font/google'
import '../globals.css'
import {Sidebar} from '@/components/layout/side-bar'
import {Providers} from '../providers'
import {Navbar} from '@/components/layout/navbar'
import {GoogleTagManager} from '@next/third-parties/google'
// import { CSPostHogProvider } from './providers'

const mont = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Shelley Bressman Photography',
  description: 'Generated by create next app'
}

export default function AppLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-8J64RKE9D8" />
      <Providers>
        {/* <CSPostHogProvider> */}
        <body
          className={`${mont.className} antialiased bg-[#e1dcd8] flex h-screen max-h-screen  lg:overflow-hidden flex-col lg:flex-row`}
        >
          <aside className="lg:flex-grow-0 bg-white lg:h-screen overflow-y-auto">
            <Sidebar />
            <Navbar />
          </aside>
          <main className="grow h-screen lg:overflow-y-scroll flex-1">{children}</main>
        </body>
        {/* </CSPostHogProvider> */}
      </Providers>
    </html>
  )
}
