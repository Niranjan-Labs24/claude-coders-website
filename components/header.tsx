'use client';

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { FC } from "react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet"
import { CADLENLY_URL } from "@/app/constants"

const logo = "/logo.webp"

const navLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/blogs", label: "Blog" },
  { href: "/casestudies", label: "Case Studies" },
]

export const Header: FC = () => {
  const pathname = usePathname()

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/')

  return (
    <header className="py-4 md:py-6 px-2 sm:px-4 lg:px-6 border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Navigation */}
        <nav className="hidden md:flex items-center gap-10 flex-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-lg font-semibold transition-colors relative pb-1 ${
                isActive(href)
                  ? 'text-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#FF7A59] after:rounded-full'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Center Logo */}
        <div className="flex-shrink-0 md:flex-1 flex justify-center">
          <Link href="/">
            <Image 
              src={logo}
              alt="n8n developers logo" 
              width={140} 
              height={50}
              unoptimized
              className="object-contain h-10 md:h-12 w-auto" 
            />
          </Link>
        </div>

        {/* Right CTA */}
        <div className="flex items-center justify-end flex-1 gap-4">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant='outline' size='icon' className="border-0 [&_svg]:size-6"><Menu /></Button>
              </SheetTrigger>
              <SheetContent side="top" className="flex flex-col items-center gap-6 pt-12">
                {navLinks.map(({ href, label }) => (
                  <SheetClose key={href} asChild>
                    <Link
                      href={href}
                      className={`text-xl font-semibold transition-colors ${
                        isActive(href) ? 'text-[#FF7A59]' : 'text-gray-700 hover:text-black'
                      }`}
                    >
                      {label}
                    </Link>
                  </SheetClose>
                ))}
              </SheetContent>
            </Sheet>
          </div>
          <Button
            asChild
            className="bg-[#FF7A59] hover:bg-[#ff6a42] text-white font-bold py-6 px-8 rounded-xl transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black text-lg"
          >
            <Link href={CADLENLY_URL} target="_blank">Book free automation call</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
