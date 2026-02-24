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

const CustomMenuIcon = () => (
  <svg width="60" height="60" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="16" width="32" height="4" fill="black" rx="2" />
    <rect x="8" y="28" width="18" height="4" fill="black" rx="2" />
  </svg>
)

export const Header: FC = () => {
  const pathname = usePathname()

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/')

  const navLinks = [
    { href: "/pricing", label: "Pricing" },
    { href: "/blogs", label: "Blog" },
  ]

  return (
    <header className="py-4 md:py-6 px-2 sm:px-4 lg:px-6 border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Desktop Nav OR Mobile Logo */}
        <div className="flex-1 flex items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-[18px] font-semibold leading-[20px] tracking-[-0.02em] transition-colors relative pb-1 ${
                  isActive(href)
                    ? 'text-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#FF7A59] after:rounded-full'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Logo */}
          <div className="md:hidden">
            <Link href="/">
              <Image 
                src={logo}
                alt="n8n developers logo" 
                width={120} 
                height={40}
                unoptimized
                className="object-contain h-8 w-auto" 
              />
            </Link>
          </div>
        </div>

        {/* Center: Desktop Logo ONLY */}
        <div className="hidden md:flex flex-1 justify-center items-center px-8">
          <Link href="/">
            <Image 
              src={logo}
              alt="n8n developers logo" 
              width={140} 
              height={50}
              unoptimized
              className="object-contain h-12 w-auto" 
            />
          </Link>
        </div>

        {/* Right: Desktop CTA OR Mobile Hamburger */}
        <div className="flex-1 flex items-center justify-end">
          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-[#FF7442] hover:bg-[#ff6a42] text-white rounded-xl transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-[1px] border-black text-lg"
              style={{
                width: '253px',
                height: '60px',
                padding: '14px 35px',
                gap: '8px',
                opacity: 1,
              }}
            >
              <Link href={CADLENLY_URL} target="_blank">
                Book free automation call
              </Link>
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant='ghost' size='icon' className="p-0 h-auto w-auto hover:bg-transparent -mr-2 [&_svg]:size-10">
                  <CustomMenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="h-[50vh] flex flex-col p-0 border-none overflow-hidden">
                <div className="flex-none flex items-center justify-between px-6 py-4 border-b border-gray-50">
                  <Link href="/">
                    <Image 
                      src={logo}
                      alt="n8n developers logo" 
                      width={120} 
                      height={40}
                      unoptimized
                      className="object-contain h-8 w-auto" 
                    />
                  </Link>
                </div>
                
                <div className="flex-grow flex flex-col gap-3 px-8 py-4 overflow-y-auto">
                  {navLinks.map(({ href, label }) => (
                    <SheetClose key={href} asChild>
                      <Link
                        href={href}
                        className={`text-[18px] font-semibold leading-[20px] tracking-[-0.02em] transition-colors ${
                          isActive(href) ? 'text-black' : 'text-black hover:text-[#FF7A59]'
                        }`}
                      >
                        {label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <div className="flex-none px-6 pb-6 pt-2 h-auto flex flex-col items-center">
                  <SheetClose asChild>
                    <Link 
                      href={CADLENLY_URL} 
                      target="_blank"
                      className="inline-flex items-center justify-center bg-[#FF7442] hover:bg-[#ff6a42] text-white rounded-xl text-center transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-[1px] border-black text-base"
                      style={{
                        width: '253px',
                        height: '60px',
                        padding: '14px 35px',
                        gap: '8px',
                        opacity: 1,
                      }}
                    >
                      Book free automation call
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
