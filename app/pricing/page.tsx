"use client";

import { FC, useEffect, useState } from "react"
import Link from "next/link"
import Benefit from "./components/benefit"
import { benefitItems } from "./constants"
import PricingFAQ from "./components/PricingFAQ"
import PromotionBanner from "@/components/blog/PromotionBanner"
import { CADLENLY_URL } from "@/app/constants"

const PricingPage: FC = () => {
  const [starter, plus, pro] = benefitItems
  const [currency, setCurrency] = useState("USD")
  const [symbol, setSymbol] = useState("$")
  const [loading, setLoading] = useState(true)
  const [convertedPrices, setConvertedPrices] = useState([50, 40, 30])

  const originalPrices = [50, 40, 30]

  useEffect(() => {
    document.body.classList.add("no-texture")
    
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then(async (data) => {
        let country = data.country 
        let userCurrency = "USD"
        let userSymbol = "$"

        if (country === "AU" || country === "AUS") {
          userCurrency = "AUD"
          userSymbol = "A$"
        } else if (country === "US") {
          userCurrency = "USD"
          userSymbol = "$"
        } else if (["DE", "FR", "ES", "IT", "GB", "NL", "BE", "AT", "CH", "SE", "NO", "DK", "FI", "PT", "IE", "GR", "CZ", "PL", "HU", "SK", "SI", "HR", "BA", "ME", "MK", "AL", "RS", "BG", "RO", "MD", "UA", "BY", "RU", "LT", "LV", "EE", "GE", "AM", "AZ"].includes(country)) {
          userCurrency = "EUR"
          userSymbol = "€"
        }

        setCurrency(userCurrency)
        setSymbol(userSymbol)

        if (userCurrency !== "USD") {
          const rateRes = await fetch(
            `https://api.exchangerate.host/live?access_key=afe686e60effa99aeec17bafaa86a824&base=USD&symbols=${userCurrency}`
          )
          const rateData = await rateRes.json()
          const rate = rateData.quotes[`USD${userCurrency}`]
          setConvertedPrices(originalPrices.map(p => Math.round(p * rate)))
        } else {
          setConvertedPrices(originalPrices.map(p => Math.round(p)));
        }
        setLoading(false)
      })
      .catch((err) => {
        setConvertedPrices(originalPrices)
        setLoading(false)
      })

    return () => {
      document.body.classList.remove("no-texture")
    }
  }, [])

  return (
    <div className="flex flex-col pt-4 md:pt-6">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight mb-6">
          <span className="text-[#FF7A59]">Pricing</span> that works for <br /> every need
        </h1>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Hourly Model */}
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-10 space-y-10 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-black">Hourly model</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-black">
                    {loading ? "$50" : `${symbol}${convertedPrices[0]}`}
                  </span>
                  <span className="text-sm font-bold text-[#FF7A59] lowercase tracking-wider">per hour</span>
                </div>
                <p className="text-lg font-bold text-gray-500">Billed in 10-hour blocks</p>
              </div>

              <Link 
                href={CADLENLY_URL}
                target="_blank"
                className="block w-full text-center py-4 bg-white border-2 border-black rounded-xl font-bold text-black hover:bg-gray-50 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95"
              >
                Get started
              </Link>

              <div className="space-y-5">
                <h4 className="text-sm font-bold text-black uppercase tracking-wider">Ideal for</h4>
                <div className="space-y-4">
                  {starter.labels.map((label) => (
                    <Benefit key={label} label={label} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Volume package */}
          <div className="bg-white border border-gray-100 rounded-[2.5rem] flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="bg-[#FFFAF8] p-8 md:p-10 space-y-8">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-black">Volume package</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-black">
                    {loading ? "$40" : `${symbol}${convertedPrices[1]}`}
                  </span>
                  <span className="text-sm font-bold text-[#FF7A59] lowercase tracking-wider">per hour</span>
                </div>
                <p className="text-lg font-bold text-gray-400">Billed in 50-hour blocks</p>
              </div>

              <Link 
                href={CADLENLY_URL}
                target="_blank"
                className="block w-full text-center py-4 bg-[#FF7A59] border-2 border-black rounded-xl font-bold text-white hover:bg-[#ff6a42] transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95"
              >
                Get started
              </Link>
            </div>

            <div className="p-8 md:p-10 space-y-5">
              <h4 className="text-sm font-bold text-black uppercase tracking-wider">Ideal for</h4>
              <div className="space-y-4">
                {plus.labels.map((label) => (
                  <Benefit key={label} label={label} />
                ))}
              </div>
            </div>
          </div>

          {/* Monthly Retainer */}
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-10 space-y-10 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-black">Monthly Retainer</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-black">
                    {loading ? "$30" : `${symbol}${convertedPrices[2]}`}
                  </span>
                  <span className="text-sm font-bold text-[#FF7A59] lowercase tracking-wider">per hour</span>
                </div>
                <p className="text-lg font-bold text-gray-500">Billed in 100-hour blocks</p>
              </div>

              <Link 
                href={CADLENLY_URL}
                target="_blank"
                className="block w-full text-center py-4 bg-white border-2 border-black rounded-xl font-bold text-black hover:bg-gray-50 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95"
              >
                Get started
              </Link>

              <div className="space-y-5">
                <h4 className="text-sm font-bold text-black uppercase tracking-wider">Ideal for</h4>
                <div className="space-y-4">
                  {pro.labels.map((label) => (
                    <Benefit key={label} label={label} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <PricingFAQ />

      {/* Promotion Banner */}
      <PromotionBanner />
    </div>
  )
}

export default PricingPage
