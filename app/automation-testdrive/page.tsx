import type { FC } from "react"
import Link from "next/link"
import Cadlenly from "../components/cadlenly/page"

const AutomationTestdrivePage: FC = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-8 lg:gap-12 xl:gap-16">
      {/* Left Content */}
      <div className="xl:col-span-7 space-y-8 md:space-y-10">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Automation Testdrive
            </span>
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 italic leading-relaxed">
            To win your Confidence (No Strings attached)
          </p>
        </div>
        {/* What Happens During Your Free Block */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌟</span>
            <h2 className="text-2xl md:text-3xl font-bold text-black">What Happens During Your Free Block?</h2>
          </div>
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-black leading-relaxed">
              Once we align on goals, we get to work, no fluff.
            </p>
            <p className="text-lg md:text-xl text-black leading-relaxed">
              Your free 10-hour block can be used to do any of these:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
                <span className="text-lg md:text-xl text-black">Build a working prototype or Proof of Concept</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
                <span className="text-lg md:text-xl text-black">
                  Integrate tools (e.g., HubSpot, WhatsApp, GSheets)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
                <span className="text-lg md:text-xl text-black">Fix broken workflows or improve performance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
                <span className="text-lg md:text-xl text-black">Demo real-world use cases tailored to you</span>
              </li>
            </ul>
            <p className="text-lg md:text-xl text-black leading-relaxed mt-6">
              Think of it as your automation test-drive, done by professionals.
            </p>
          </div>
        </div>
        {/* What Happens Next */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🚀</span>
            <h2 className="text-2xl md:text-3xl font-bold text-black">What Happens Next?</h2>
          </div>
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-black leading-relaxed">At the end of your free block:</p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
                <span className="text-lg md:text-xl text-black">
                  You receive working automations, reports, or APIs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
                <span className="text-lg md:text-xl text-black">
                  We share a transparent scope for scaling or adding features
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
                <span className="text-lg md:text-xl text-black">
                  You can buy hourly blocks, starting from just 10 hours
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
                <span className="text-lg md:text-xl text-black">
                  (No retainers, no lock-ins) -{" "}
                  <Link href="/pricing" className="underline hover:no-underline text-purple-600">
                    Click for Pricing
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Additional Info */}
        <div className="space-y-4 pt-6 border-t border-gray-200">
          <p className="text-lg md:text-xl font-semibold text-black">
            Still exploring? No worries. You walk away with insights, not invoices.
          </p>
          <p className="text-lg md:text-xl text-black">Liked our work? Love to get just your testimonial</p>
        </div>
      </div>
      {/* Right Content - Discovery Call Info */}
      <Cadlenly />
    </div>
  )
}
export default AutomationTestdrivePage