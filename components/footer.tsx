import Link from "next/link"
import type { FC } from "react"
import { /*Instagram,*/ Linkedin, Twitter, Facebook } from "lucide-react"

export const Footer: FC = () => {
  return (
    <footer className="bg-white">
      <div className="border-t border-gray-100 mb-8"></div>
      <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[64px] 2xl:px-[80px] pb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex-[2] text-left w-full md:w-auto order-last md:order-none pl-0">
            <p className="font-manrope font-semibold text-[10px] xs:text-[12px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-relaxed tracking-[-2%] text-[#0000004D] whitespace-nowrap text-center md:text-left">
              © {new Date().getFullYear()} n8n developers. All rights reserved. {" "}
              <span>
                An initiative by{" "}
                <Link href="https://labs24.co" target="_blank" className="hover:text-black transition-colors">
                  Labs 24
                </Link>
              </span>
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center w-full md:w-auto">
            <Link href="/about" className="font-manrope font-semibold text-[16px] xl:text-[18px] 2xl:text-[20px] leading-relaxed tracking-[-0.02em] text-black hover:text-gray-600 transition-colors whitespace-nowrap">
              About us
            </Link>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 xl:gap-6 justify-end flex-1">
            {[
              { Icon: Linkedin, href: "https://linkedin.com/company/n8n-developers" },
              { Icon: Twitter, href: "https://x.com/n8ndevelopers" },
              { Icon: Facebook, href: "https://facebook.com" }
            ].map((social, i) => (
              <Link 
                key={i} 
                href={social.href}
                target="_blank"
                className="w-[30px] h-[30px] xl:w-[36px] xl:h-[36px] 2xl:w-[40px] 2xl:h-[40px] border border-gray-100 rounded-[8px] flex items-center justify-center text-black hover:border-black transition-all transform hover:scale-105 shadow-sm bg-white"
              >
                <social.Icon className="h-4 w-4 xl:h-5 xl:w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
