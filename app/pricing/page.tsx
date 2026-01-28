"use client";

import { FC, useEffect, useState } from "react"
import { Check } from "lucide-react"
import Benefit from "./components/benefit"
import benefitItems from "./constants"
import FAQSection from "@/components/blog/FAQSection"
import PromotionBanner from "@/components/blog/PromotionBanner"

const PricingPage: FC = () => {
  const [starter, plus, pro] = benefitItems
  const [currency, setCurrency] = useState("USD")
  const [symbol, setSymbol] = useState("$")
  const [loading, setLoading] = useState(true)
  const [convertedPrices, setConvertedPrices] = useState([50, 40, 30])

  const originalPrices = [50, 40, 30]

  useEffect(() => {
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
  }, [])

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
        <div className="bg-white border-2 border-black rounded-3xl p-8 md:p-10 space-y-6 shadow-[6px_6px_0px_0px_rgba(128,128,128,1)]">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-black">Hourly Model</h2>
            <div className="space-y-2">
              {/* Price OVERFLOW HANDEL CODE HERE  */}
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-black break-words">
                {loading
                ? "Loading..."
                : `${new Intl.NumberFormat("en-US", { style: "currency", currency, minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(convertedPrices[0])}/hour`}
              </div>
              <div className="text-lg text-pink-500 font-medium">billed in 10-hour blocks</div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-semibold text-black">Ideal for</h3>
            <div className="space-y-3">
              {starter.labels.map((label) => (
                <Benefit key={label} label={label} />
              ))}
            </div>
          </div>
        </div>

        {/* Volume Package */}
        <div className="bg-white border-2 border-black rounded-3xl p-8 md:p-10 space-y-6 shadow-[6px_6px_0px_0px_rgba(128,128,128,1)]">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-black">Volume Package</h2>
            <div className="space-y-2">
              {/* Price OVERFLOW HANDEL CODE HERE  */}
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-black break-words">
                {loading
                ? "Loading..."
                : `${new Intl.NumberFormat("en-US", { style: "currency", currency, minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(convertedPrices[1])}/hour`}
              </div>
              <div className="text-lg text-pink-500 font-medium">billed in 50-hour blocks</div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-semibold text-black">Great for</h3>
            <div className="space-y-3">
              {plus.labels.map((label) => (
                <Benefit key={label} label={label} />
              ))}
            </div>
          </div>
        </div>

        {/* Monthly Retainer */}
        <div className="bg-white border-2 border-black rounded-3xl p-8 md:p-10 space-y-6 md:col-span-2 lg:col-span-1 shadow-[6px_6px_0px_0px_rgba(128,128,128,1)]">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-black">Monthly Retainer</h2>
            <div className="space-y-2">
              {/* Price OVERFLOW HANDEL CODE HERE  */}
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-black break-words">
                {loading
                ? "Loading..."
                : `${new Intl.NumberFormat("en-US", { style: "currency", currency, minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(convertedPrices[2])}/hour`}
              </div>
              <div className="text-lg text-pink-500 font-medium">billed in 100-hour blocks</div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-semibold text-black">Perfect for</h3>
            <div className="space-y-3">
              {pro.labels.map((label) => (
                <Benefit key={label} label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <FAQSection />
        <PromotionBanner />
      </div>
    </>
  )
}

export default PricingPage
