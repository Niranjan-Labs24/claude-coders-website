import { Button } from "@/components/ui/button"
import { Check, Target, Code2 } from "lucide-react"
import type { FC } from "react"

const ComingSoonPage: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div className="text-xl font-bold">
                <span className="text-black">n8n</span>
                <div className="text-pink-500 text-sm font-medium">Developers</div>
              </div>
            </div>
          </div>

          <div className="hidden sm:block">
            <Button asChild className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-sm">
              <a href="https://tally.so/r/w4yWKB" target="_blank" rel="noopener noreferrer">
                Join Developer Network
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black leading-tight">
                We are UBER for n8n developers
              </h1>
            </div>

            {/* For Businesses Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-pink-500" />
                <span className="text-lg font-semibold text-black">For Businesses - </span>
                <a
                  href="https://cal.com/niranjanvenugopal/n8n-developers-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-black underline hover:no-underline"
                >
                  Book A Free call
                </a>
              </div>

              <p className="text-lg text-black font-medium">Build, Scale, and Automate Without Hiring Full-Time</p>

              <div className="space-y-3">
                <p className="text-black">Need a custom automation or n8n-powered backend?</p>
                <p className="text-black">We match you with vetted n8n experts who can:</p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-black">Design custom workflows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-black">Connect 100+ tools (CRM, WhatsApp, GSheets, APIs)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-black">Automate operations, lead gen, reports & more</span>
                  </div>
                </div>
              </div>
            </div>

            {/* For Developers Section */}
            <div className="space-y-4 pt-6">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-pink-500" />
                <span className="text-lg font-semibold text-black">For Developers</span>
              </div>

              <p className="text-lg text-black font-medium">Monetize Your Automation Skills</p>

              <p className="text-black">Are you a pro at building smart workflows with n8n?</p>

              <div className="space-y-3">
                <p className="text-black">
                  <a
                    href="https://tally.so/r/w4yWKB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline font-medium"
                  >
                    Join our elite network
                  </a>{" "}
                  of freelance automation engineers.
                </p>
                <p className="text-black">We bring the clients, you build the future.</p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-black">Work on global projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-black">Set your own hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-black">Get paid for what you love doing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="sm:hidden pt-6">
              <Button asChild className="w-full bg-black text-white hover:bg-gray-800 py-3">
                <a href="https://tally.so/r/w4yWKB" target="_blank" rel="noopener noreferrer">
                  Join Developer Network
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Cal.com Embed */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden h-[600px] max-h-[80vh] sticky top-8">
              <iframe
                src="https://cal.com/niranjanvenugopal/n8n-developers-discovery-call"
                className="w-full h-full"
                frameBorder="0"
                title="Schedule a meeting with n8n developers"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} n8n developers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default ComingSoonPage
