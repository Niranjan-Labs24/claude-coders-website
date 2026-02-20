import Link from "next/link"
import type { FC } from "react"
import { /*Instagram,*/ Linkedin, Twitter, Facebook } from "lucide-react"

export const Footer: FC = () => {
  return (
    <footer className="py-6 md:py-8 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex-1 text-left w-full md:w-auto">
            <p className="text-sm md:text-base text-gray-500 font-medium">© 2025 n8n developers. All rights reserved.</p>
          </div>

       
          <div className="flex items-center gap-10 justify-center flex-1">
            <Link href="/about" className="text-base md:text-lg font-medium text-gray-700 hover:text-black transition-colors">
              About us
            </Link>
            <Link href="/privacy" className="text-base md:text-lg font-medium text-gray-700 hover:text-black transition-colors">
              PrivacyPolicy
            </Link>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-6 justify-end flex-1">
            {/* <Link href="https://instagram.com" target="_blank" className="p-2 text-gray-500 hover:text-black transition-colors transform hover:scale-110">
              <Instagram className="h-5 w-5 md:h-6 md:w-6" />
            </Link> */}
            <Link href="https://linkedin.com/company/n8n-developers" target="_blank" className="p-2 text-gray-500 hover:text-black transition-colors transform hover:scale-110">
              <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <Link href="https://x.com/n8ndevelopers" target="_blank" className="p-2 text-gray-500 hover:text-black transition-colors transform hover:scale-110">
              <Twitter className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <Link href="https://facebook.com" target="_blank" className="p-2 text-gray-500 hover:text-black transition-colors transform hover:scale-110">
              <Facebook className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
