import type { FC } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const AboutPage: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Page Title */}
        <div className="mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-tight">
            Democratizing Automation,
            <br />
            <span className="font-normal">One Workflow at a Time</span>
          </h1>
        </div>

        {/* Three Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Purpose Column */}
          <div className="bg-gray-100 p-8 md:p-10 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-black">Purpose</h2>
            <div className="space-y-4 text-base md:text-lg text-black leading-relaxed">
              <p>
                We believe automation should not be a luxury reserved for Fortune 500 companies with million-dollar IT
                budgets.
              </p>
              <p>
                <strong>n8nDevelopers.com</strong> exists to make powerful automation accessible to everyone from
                early-stage founders and scrappy teams to scale-ups and non-technical decision-makers.
              </p>
            </div>
          </div>

          {/* Solution Column */}
          <div className="bg-gray-100 p-8 md:p-10 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-black">Solution</h2>
            <div className="space-y-4 text-base md:text-lg text-black leading-relaxed">
              <p>
                By building a global network of n8n experts and offering flexible, affordable engagement models, we're
                removing the barriers to automation adoption:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>No need for in-house developers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>No long-term contracts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>No steep learning curves</span>
                </li>
              </ul>
              <p>We make it possible for any business, in any corner of the world, to automate with confidence.</p>
            </div>
          </div>

          {/* Result Column */}
          <div className="bg-gray-100 p-8 md:p-10 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-black">Result</h2>
            <div className="space-y-4 text-base md:text-lg text-black leading-relaxed">
              <p>
                This is how we democratize automation not just with tools, but with talent, process, and community. We
                envision a world where:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Every repetitive task can be offloaded.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Every team can focus on creativity and growth.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Every company, regardless of size, can operate like a tech-first company.</span>
                </li>
              </ul>
              <p>
                With n8nDevelopers.com, automation becomes not just possible but practical, affordable, and scalable.
              </p>
            </div>
          </div>
        </div>

        {/* Note Section */}
        <div className="bg-white p-6 md:p-8 border-l-4 border-gray-300">
          <p className="text-base md:text-lg text-black leading-relaxed">
            <strong>Note:</strong> We are not part of n8n GmbH, the creators of the n8n workflow automation tool.
            n8nDevelopers.com is an independent network of expert developers who specialize in building with n8n.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default AboutPage
