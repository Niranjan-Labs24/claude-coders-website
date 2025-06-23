import Link from "next/link"
import type { FC } from "react"

export const Footer: FC = () => {
  return (
    <footer className="py-6 md:py-8 border-t border-gray-100 xl:fixed xl:bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-gray-500">© 2025 n8n developers. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-xs md:text-sm text-gray-500 hover:text-black transition-colors">
              About us
            </Link>
            <a href="#" className="text-xs md:text-sm text-gray-500 hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a
              href="https://linkedin.com/company/n8n-developers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm text-gray-500 hover:text-black transition-colors underline"
            >
              Join us on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
