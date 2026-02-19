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
  // { href: "/casestudies", label: "Case Studies" },
]

export const Header: FC = () => {
  const pathname = usePathname()

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/')

  return (
    <header className="py-4 md:py-6 px-2 sm:px-4 lg:px-6 border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Mobile Menu & Desktop Navigation */}
        <div className="flex-none w-12 md:flex-1 flex items-center">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant='outline' size='icon' className="border-0 [&_svg]:size-6 p-0 h-auto w-auto">
                  <Menu className="h-6 w-6" />
                </Button>
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
          
          <nav className="hidden md:flex items-center gap-10">
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
        </div>

        {/* Center Logo */}
        <div className="flex-1 md:flex-shrink-0 flex justify-start md:justify-center items-center px-4 md:px-8">
          <Link href="/">
            <Image 
              src={logo}
              alt="n8n developers logo" 
              width={140} 
              height={50}
              unoptimized
              className="object-contain h-8 md:h-12 w-auto" 
            />
          </Link>
        </div>

        {/* Right CTA */}
        <div className="flex-1 flex items-center justify-end">
          <Button
            asChild
            className="bg-[#FF7A59] hover:bg-[#ff6a42] text-white font-bold py-2.5 px-3 sm:px-4 md:py-6 md:px-8 rounded-xl transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black text-xs sm:text-sm md:text-lg"
          >
            <Link href={CADLENLY_URL} target="_blank">
              <span className="hidden sm:inline">Book free automation call</span>
              <span className="sm:hidden">Book free call</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
