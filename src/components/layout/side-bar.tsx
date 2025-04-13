import Image from 'next/image'
import {Separator} from '../ui/separator'

import {Button} from '../ui/button'
import Link from 'next/link'
import {SidebarNav} from './side-bar-item'
import '@fontsource-variable/playwrite-nz'

export function Sidebar() {
  return (
    <main className="hidden md:flex flex-col py-8 px-4 bg-white h-full gap-6">
      <div className="flex flex-col gap-2 justify-center">
        <Image src="/logo.webp" width={300} height={64.84} alt="Logo" priority />
        <span
          style={{
            fontFamily: 'Playwrite NZ Variable'
          }}
          className="text-xl"
        >
          Portrait Photography
        </span>
        {/* <h1 className="text-sm font-semibold text-balance mx-auto w-fit text-center text-black flex flex-col gap-px">
          <span
           
          >
            Shelley and Blaine Bressman
          </span>
          
        </h1> */}
      </div>
      <Separator className="h-px bg-[#c7c7c7] w-1/2" />
      <p className="text-[#797878] text-base">
        Based in Pensacola Florida <br /> Published in the Wall Street <br />
        Journal and Contemporary <br /> Christian Music Magazine
      </p>
      <Separator className="h-px bg-[#c7c7c7] w-1/2" />
      <SidebarNav
        items={[
          {name: 'Home', href: '/'},
          // { name: "Interior design", href: "https://shelleyandblaine.com/interior-design" },
          // { name: "real estate", href: "https://shelleyandblaine.com/real-estate" },
          // { name: "short term rental", href: "/short-term-rental" },
          {name: 'family portrait', href: '/family-portrait'},
          // {name: 'family portrait pricing', href: '/blog/4ea5eb57-58e5-4b58-9d5a-a6cc0126cc7f'},
          {name: 'Engagement Sessions', href: '/engagement-sessions'},
          // {name: 'Engagement Sessions Pricing', href: '/blog/c82d67ce-5de0-4ef0-920a-bf4b27f40810'},
          {name: 'Senior Portraits', href: '/senior-portraits'},
          // {name: 'Senior Portrait Pricing', href: '/blog/cb76f642-bea9-49dc-880e-17c065df80bc'},
          // { name: "Micro Wedding", href: "/micro-wedding" },
          // { name: "WALL ART BY SHELLEY", href: "/wall-art" },
          // { name: "Website Design Service", href: "/website-design-service" },
          {name: 'contact', href: '/contact'},
          {name: 'about', href: '/about'},
          {name: 'in the press', href: '/press'},
          {name: 'Blog', href: '/blog'}
        ]}
      />
      <Separator className="h-px bg-[#c7c7c7] w-1/2" />

      <Button className="text-lg bg-[#3898ec] font-bold w-fit" asChild>
        <Link href="https://m.me/shelleyandblainephotography">Chat with me</Link>
      </Button>
      <a
        href="https://www.bbb.org/us/fl/pensacola/profile/photographer/shelley-bressman-photography-0683-90097858/#sealclick"
        target="_blank"
        rel="nofollow"
      >
        <Image
          src="http://seal-nwfl.bbb.org/seals/blue-seal-200-42-bbb-90097858.png"
          width={300}
          height={200}
          className="w-60"
          style={{border: 0}}
          alt="Shelley Bressman Photography BBB Business Review"
        />
      </a>

      <Image src="/testmonial2.webp" width={300} height={200} alt="Testmonial" className="w-60" />
    </main>
  )
}
