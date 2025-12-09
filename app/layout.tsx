import type React from "react"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { GoogleAnalytics } from "@next/third-parties/google"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "@/app/globals.css"
import ChatbaseScript from "@/components/chatbase"
import OfferBar from "@/components/OfferBar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "n8n Developers | Custom Workflow & Automation Solutions",
  description:
    "Hire expert n8n developers for workflow automation, integration, and custom solutions. Boost efficiency with tailored n8n services today.",
  keywords: "n8n Developers, n8n Workflow Automation, Hire n8n Experts",
  verification: {
    google: "dvHTOSJR4zdlxAgVgmxbghvshaT34Zee1oA0hg_3Qc0",
  },
  alternates: {
    canonical: "https://www.n8ndevelopers.com/",
  },

}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
     
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""} />

      <head>
       
        <title>n8n Developers | Custom Workflow & Automation Solutions</title>
        <meta
          name="title"
          content="n8n Developers | Custom Workflow & Automation Solutions"
        />
        <meta
          name="description"
          content="Hire expert n8n developers for workflow automation, integration, and custom solutions. Boost efficiency with tailored n8n services today."
        />
        <meta
          name="keywords"
          content="n8n Developers, n8n Workflow Automation, Hire n8n Experts"
        />
        <meta name="robots" content="index, follow" />

        <meta name="copyright" content="Copyright 2025" />
        <meta name="owner" content="https://www.n8ndevelopers.com/" />
        <meta name="author" content="https://www.n8ndevelopers.com/" />
        <meta name="rating" content="general" />
        <meta name="country" content="USA" />
        <meta name="City" content="USA" />
        <meta name="Language" content="english" />


        <link rel="preconnect" href="https://www.n8ndevelopers.com/" />

        <meta
          itemProp="title"
          content="n8n Developers | Custom Workflow & Automation Solutions"
        />
        <meta
          itemProp="description"
          content="Hire expert n8n developers for workflow automation, integration, and custom solutions. Boost efficiency with tailored n8n services today."
        />
        <meta
          itemProp="url"
          content="https://www.n8ndevelopers.com/"
        />

  
        <meta
          property="og:title"
          content="n8n Developers | Custom Workflow & Automation Solutions"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.n8ndevelopers.com/"
        />
        <meta
          property="og:description"
          content="Hire expert n8n developers for workflow automation, integration, and custom solutions. Boost efficiency with tailored n8n services today."
        />
        <meta property="og:site_name" content="n8n Developers" />
        <meta property="og:city" content="USA" />
        <meta property="og:Country" content="USA" />
        <link rel="publisher" href="https://www.n8ndevelopers.com/" />

        
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="n8n Developers | Custom Workflow & Automation Solutions"
        />
        <meta
          name="twitter:description"
          content="Hire expert n8n developers for workflow automation, integration, and custom solutions. Boost efficiency with tailored n8n services today."
        />
        <meta
          name="twitter:url"
          content="https://www.n8ndevelopers.com/"
        />
      </head>

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <OfferBar />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-24 xl:pb-32">
            {children}
          </main>
          <Footer />
        </ThemeProvider>

     
        <ChatbaseScript />

      
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="875d1f20-cdec-45f8-b918-0665e17654b0"
          type="text/javascript"
          async
        />
      </body>
    </html>
  )
}
