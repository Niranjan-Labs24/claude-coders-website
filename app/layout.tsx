import type React from "react"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "@/app/globals.css"
import ChatbaseScript from "@/components/chatbase"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hire n8n Developers in 48 Hours | UBER for n8n Developers | AI Workflow Specialists | Free Consultation | Top 3% n8n developers",
  description:
    "Hire expert n8n developers instantly. Like UBER for n8n experts - get matched in 48 hours, pay only for what you need. 25+ successful projects. Book free consultation today.",
    generator: 'v0.dev',
     verification: {
    google: 'dvHTOSJR4zdlxAgVgmxbghvshaT34Zee1oA0hg_3Qc0'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ''} />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Header />
          <main className="lg:max-h-[calc(100vh-196px)] lg:overflow-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">{children}</main>
          <Footer />
        </ThemeProvider>
        <ChatbaseScript />
      </body>
      <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="875d1f20-cdec-45f8-b918-0665e17654b0" type="text/javascript" async />
    </html>
  )
}
