import type { FC } from "react"
import { Check, Target, Search, Zap, DollarSign } from "lucide-react"
import Cadlenly from "./components/cadlenly"
import { CADLENLY_URL } from "./constants"
import Link from "next/link"
import EmailForm from "./components/email-form"
import FAQSection from "@/components/blog/FAQSection"
import PromotionBanner from "@/components/blog/PromotionBanner"

const ComingSoonPage: FC = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-8 lg:gap-12 xl:gap-16">
      {/* Left Content */}
      <div className="xl:col-span-7 space-y-6 md:space-y-8">
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-black leading-tight">
            We're UBER for n8n developers
          </h1>
        </div>

        {/* For Businesses Section */}
        <div className="space-y-3 md:space-y-4 leading-7 tracking-wider py-8 my-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 md:h-5 md:w-5 text-pink-500 flex-shrink-0" />
              <span className="text-base md:text-lg font-semibold text-black">For Businesses - </span>
            </div>
            <Link
              href={CADLENLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg font-semibold text-pink-500 underline hover:no-underline"
            >
              Book a free call
            </Link>
          </div>

          <p className="text-base md:text-lg text-black font-semibold">
            Build, Scale, and Automate Without Hiring Full-Time
          </p>

          <div className="space-y-2 md:space-y-3">
            <p className="text-sm md:text-base text-black">Need a custom automation or n8n-powered backend?</p>
            <p className="text-sm md:text-base text-black">We match you with vetted n8n experts who can:</p>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-black">Design custom workflows</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-black">
                  Connect 100+ tools (CRM, WhatsApp, GSheets, APIs)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-black">
                  Automate operations, lead gen, reports & more
                </span>
              </div>
            </div>
          </div>
        </div>

      {/* Featured Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-4 border rounded-lg border-black">
            <Search className="h-5 w-5 text-gray-600" />
            <span className="text-sm font-medium text-black">Trusted</span>
          </div>
          <div className="flex items-center gap-3 p-4 border rounded-lg border-black">
            <Zap className="h-5 w-5 text-gray-600" />
            <span className="text-sm font-medium text-black">Flexible</span>
          </div>
          <div className="flex items-center gap-3 p-4 border rounded-lg border-black">
            <DollarSign className="h-5 w-5 text-gray-600" />
            <span className="text-sm font-medium text-black">On-demand</span>
          </div>
        </div>
        {/* Collect email form */}
       
      </div>
      {/* Embedded Cal.com */}
      <Cadlenly />

      <div className="xl:col-span-12 mt-12">
        <FAQSection />
        <PromotionBanner />
      </div>
    </div>
  )
}

export default ComingSoonPage
