'use client'
import {useState} from 'react'
import Image from 'next/image'
import {Separator} from '../ui/separator'
import {Button} from '../ui/button'
import Link from 'next/link'
import {SidebarNav} from './side-bar-item'
import {MenuIcon, XIcon} from 'lucide-react'
import '@fontsource-variable/playwrite-nz'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="flex items-center p-4 bg-white w-full md:hidden gap-6 flex-col">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-col gap-2 items-center justify-center">
          <Image
            src="/logo.webp"
            width={260}
            height={60}
            alt="Logo"
            priority
            className="!max-w-[260px] !max-h-[60px]"
          />
        </div>

        <Button className="md:hidden text-black" onClick={toggleMenu} variant="ghost">
          {isOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
        </Button>
      </div>

      <div
        className={`${
          isOpen ? 'top-0' : '-top-[1000rem]'
        } fixed flex flex-col h-screen overflow-y-auto w-full gap-4 p-4 bg-white transition-opacity duration-300 ease-in-out z-0`}
      >
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col gap-2 items-center justify-center">
            <Image src="/logo.webp" width={260} height={60} alt="Logo" priority className="" />
          </div>

          <Button className="md:hidden text-black" onClick={toggleMenu} variant="ghost">
            {isOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
          </Button>
        </div>
        <Separator className="h-px bg-[#c7c7c7] w-full md:w-1/2" />
        <div className="flex flex-col w-full gap-2">
          <p className="text-[#797878] text-base md:text-left w-full z-10">
            Based in Pensacola Florida <br /> Published in the Wall Street Journal and Contemporary{' '}
            <br /> Christian Music Magazine
          </p>
        </div>

        <Separator className="h-px bg-[#c7c7c7] w-full md:w-1/2 mb-8" />
        <SidebarNav
          items={[
            {name: 'Home', href: '/'},
            {name: 'family portrait', href: '/family-portrait'},
            {name: 'Engagement Sessions', href: '/engagement-sessions'},
            {name: 'Senior Portraits', href: '/senior-portraits'},
            {name: 'contact', href: '/contact'},
            {name: 'about', href: '/about'},
            {name: 'in the press', href: '/press'},
            {name: 'Blog', href: '/blog'}
          ]}
        />
        <Separator className="h-px bg-[#c7c7c7] w-full md:w-1/2" />
        <Button className="text-lg bg-[#3898ec] font-bold w-fit mt-4 md:mt-0 z-10" asChild>
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
            className="w-60 mt-4 md:mt-0"
            style={{border: 0}}
            alt="Shelley Bressman Photography BBB Business Review"
          />
        </a>
        <Image
          src="/testmonial2.webp"
          width={300}
          height={200}
          alt="Testmonial"
          className="w-60 mt-4 md:mt-0"
        />
      </div>
    </nav>
  )
}
