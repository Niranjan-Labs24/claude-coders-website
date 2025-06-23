import type { FC } from "react"
import { Check } from "lucide-react"

const PricingPage: FC = () => {
  return (
    <>
      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black leading-tight">
          Pricing <span className="font-normal">that works for every need</span>
        </h1>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {/* Hourly Model */}
        <div className="bg-white border-2 border-black rounded-3xl p-8 md:p-10 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-black">Hourly Model</h2>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-black">$50/hour</div>
              <div className="text-lg text-pink-500 font-medium">billed in 10-hour blocks</div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-semibold text-black">Ideal for</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-base md:text-lg text-black">Quick fixes</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-base md:text-lg text-black">Exploratory work</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-base md:text-lg text-black">New clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Volume Package */}
        <div className="bg-white border-2 border-black rounded-3xl p-8 md:p-10 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-black">Volume Package</h2>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-black">$30/hour</div>
              <div className="text-lg text-pink-500 font-medium">billed in 50-hour blocks</div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-semibold text-black">Great for</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-base md:text-lg text-black">Medium Sized builds</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-base md:text-lg text-black">Batch Tasking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Retainer */}
        <div className="bg-white border-2 border-black rounded-3xl p-8 md:p-10 space-y-6 md:col-span-2 lg:col-span-1">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-black">Monthly Retainer</h2>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-black">$25/hour</div>
              <div className="text-lg text-pink-500 font-medium">billed in 100-hour blocks</div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-semibold text-black">Perfect for</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-base md:text-lg text-black">Ongoing Support</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-base md:text-lg text-black">Updates & Priority access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PricingPage
