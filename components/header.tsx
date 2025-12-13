import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { FC } from "react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet"

const logo = "/logo.webp"

export const Header: FC = () => {
  return (
    <header className="shadow-md sm:shadow-none m-2 sm:m-0 py-4 md:py-6 px-4 sm:px-6 lg:px-8 border xl:border-b xl:border-gray-100 rounded-md sm:rounded-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src={logo || "/placeholder.svg"}
            alt="n8n logo" width={109} height={61}
            unoptimized
            className="object-contain object-left w-full h-11 xl:w-[109px] xl:h-[61px]" />
        </Link>

        <div className="flex items-center gap-2 xl:gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/pricing" className="text-gray-600 hover:text-black transition-colors">
              Pricing
            </Link>
            <Link href="/blogs" className="text-gray-600 hover:text-black transition-colors">
              Blog
            </Link>
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant='outline' size='icon' className="border-0 [&_svg]:size-6"><Menu /></Button>
              </SheetTrigger>
              <SheetContent side="top" className="flex flex-col items-center gap-6 pt-12">
                <SheetClose asChild>
                  <Link href="/about" className="text-lg font-medium text-gray-700 hover:text-black transition-colors">About Us</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/pricing" className="text-lg font-medium text-gray-700 hover:text-black transition-colors">Pricing</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/blogs" className="text-lg font-medium text-gray-700 hover:text-black transition-colors">Blog</Link>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
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
