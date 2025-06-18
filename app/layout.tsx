import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "n8n developers | We are UBER for n8n developers",
  description:
    "Connect with vetted n8n experts for custom automation solutions. Join our elite network of freelance automation engineers.",
    generator: 'v0.dev'
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
          {children}
        </ThemeProvider>
      </body>
      <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="875d1f20-cdec-45f8-b918-0665e17654b0" type="text/javascript" async />
    </html>
  )
}
