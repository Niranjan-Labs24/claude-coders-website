import { Check, Target, Code, Clock } from "lucide-react"
import type { FC } from "react"

const ComingSoonPage: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-4 md:py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="text-xl md:text-2xl font-bold">
              <span className="text-black">n8n</span>
              <div className="text-pink-500 text-xs md:text-sm font-medium">Developers</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-8 lg:gap-12 xl:gap-16">
          {/* Left Content */}
          <div className="xl:col-span-7 space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-black leading-tight">
                We're UBER for n8n developers
              </h1>
            </div>

            {/* For Businesses Section */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 md:h-5 md:w-5 text-pink-500 flex-shrink-0" />
                  <span className="text-base md:text-lg font-semibold text-black">For Businesses - </span>
                </div>
                <a
                  href="https://cal.com/niranjanvenugopal/n8n-developers-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg font-semibold text-pink-500 underline hover:no-underline"
                >
                  Book a free call
                </a>
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

            {/* For Developers Section */}
            <div className="space-y-3 md:space-y-4 pt-4 md:pt-6">
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4 md:h-5 md:w-5 text-pink-500" />
                <span className="text-base md:text-lg font-semibold text-black">For Developers</span>
              </div>

              <p className="text-base md:text-lg text-black font-semibold">Monetize Your Automation Skills</p>

              <p className="text-sm md:text-base text-black">Are you a pro at building smart workflows with n8n?</p>

              <div className="space-y-2 md:space-y-3">
                <p className="text-sm md:text-base text-black">
                  <a
                    href="https://tally.so/r/w4yWKB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 underline hover:no-underline font-medium"
                  >
                    Join our developer network
                  </a>{" "}
                  of freelance automation engineers.
                </p>
                <p className="text-sm md:text-base text-black">We bring the clients, you build the future.</p>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-black">Work on global projects</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-black">Set your own hours</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-black">get paid for what you love doing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Booking Widget with Embedded Cal.com */}
          <div className="xl:col-span-5 mt-8 xl:mt-0">
            <div className="relative max-w-md mx-auto xl:max-w-none">
              {/* Shadow/Offset Effect */}
              <div className="absolute top-1 left-1 md:top-2 md:left-2 w-full h-full bg-black rounded-lg"></div>

              {/* Main Widget */}
              <div className="relative bg-white border-2 border-black rounded-lg overflow-hidden">
                {/* Widget Header */}
                <div className="bg-white border-b border-black p-3 md:p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base md:text-lg font-semibold text-black">Book a Discovery Call</h3>
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-black" />
                  </div>
                </div>

                {/* Embedded Cal.com */}
                <div className="h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px]">
                  <iframe
                    src="https://cal.com/niranjanvenugopal/n8n-developers-discovery-call"
                    className="w-full h-full"
                    frameBorder="0"
                    title="Schedule a meeting with n8n developers"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 md:py-8 mt-12 md:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs md:text-sm text-gray-500 text-center md:text-left">
            © 2025 n8n developers. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default ComingSoonPage
