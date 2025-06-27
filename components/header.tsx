import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { FC } from "react"

const logo = "/logo.webp"

export const Header: FC = () => {
  return (
    <header className="py-4 md:py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src={logo || "/placeholder.svg"} alt="n8n logo" width={109} height={61} className="object-contain object-left w-full h-11 xl:w-[109px] xl:h-[61px]" />
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/pricing" className="text-gray-600 hover:text-black transition-colors">
              Pricing
            </Link>
          </nav>
          <Button
            asChild
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white transition-colors"
          >
            <Link href="/join-developer">Join as Developer</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
