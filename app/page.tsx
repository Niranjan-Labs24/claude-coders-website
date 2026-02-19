import type { FC } from "react"
import { Check, Activity, Star } from "lucide-react"
import Cadlenly from "./components/cadlenly"
import Image from "next/image"
import Link from "next/link"
import { CADLENLY_URL } from "./constants"

const LandingPage: FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 md:pt-6 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-[-0.03em] text-black leading-tight lg:leading-[63px]">
                Stop <span className="text-[#FF7A59]">wrestling workflows.</span><br />
                Let a dedicated n8n team handle it.
              </h1>
              <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed">
                We design, run, and maintain complex production-ready n8n automations for growing teams.
              </p>
            </div>

            {/* Benefits List */}
            <ul className="space-y-4 md:space-y-5">
              {[
                "Automation consultation to define the right workflows",
                "Production-ready n8n workflows, end to end",
                "Seamless integrations across your SaaS stack",
                "Fewer manual steps, fewer operational errors",
                "Clear ownership of critical automations",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-green-500 rounded-full p-0.5 flex-shrink-0">
                    <Check className="h-4 w-4 text-white font-bold" />
                  </div>
                  <span className="text-base md:text-xl font-medium text-black">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA and Trust Bar */}
            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
              <div className="space-y-2 text-center sm:text-left w-full sm:w-auto">
                <Link 
                  href={CADLENLY_URL}
                  target="_blank"
                  className="inline-block w-full sm:w-auto bg-[#FF7A59] hover:bg-[#ff6a42] text-white font-bold py-4 px-8 md:px-10 rounded-xl transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-2 border-black text-lg text-center"
                >
                  Book free automation call
                </Link>
                <p className="text-sm text-gray-500 flex items-center justify-center sm:justify-start gap-2">
                  <Activity className="h-4 w-4" /> 15-min discovery call
                </p>
              </div>

              {/* Rating Section */}
              <div className="flex flex-col items-center sm:items-start gap-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                      <Image
                        src={`/Rating/Frame 214722566${i+3 > 7 ? 4 : i+3}.png`}
                        alt="User avatar"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1 items-center sm:items-start">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-black">Trusted by founders and CMO's</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Booking Widget */}
          <div className="w-full">
            <Cadlenly />
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-[#FFF5F2] w-full border-t border-[#FFE7E0] py-8 md:py-16 min-h-[257px]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-8">
            {[
              {
                icon: "/icons/Frame 2147225439.png",
                title: "Dedicated team with our automation manager",
                desc: "No freelancers No handoffs",
              },
              {
                icon: "/icons/Frame 2147225439 (1).png",
                title: "Ongoing monitoring - Optional",
                desc: "We maintain what we build",
              },
              {
                icon: "/icons/Frame 2147225439 (2).png",
                title: "Flexible engagement for Quick growth",
                desc: "Scale up or pause anytime",
              },
              {
                icon: "/icons/Frame 2147225439 (3).png",
                title: "We work on Hourly blocks. Starts at $30 Per hour",
                desc: "No hidden fees or surprise",
              },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col gap-4 md:gap-6">
                <div className="p-2 md:p-3 bg-white rounded-xl w-fit shadow-sm border border-gray-100">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={24}
                    height={24}
                    className="h-5 w-5 md:h-6 md:w-6 object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider">{feature.desc}</p>
                  <h3 className="text-base md:text-xl font-bold text-black leading-tight">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
