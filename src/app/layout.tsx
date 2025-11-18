import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ThemeMenu from '@/components/Theme/ThemeMenu'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const title = 'Jorge Soriano | Web Scraping & Automation'

const description =
  "I help businesses automate repetitive work and extract clean, reliable data from the web using Python, Playwright, Scrapy and low-code tools. Web scraping, data pipelines and business automations."

//const url = process.env.NEXT_PUBLIC_SITE_URL
const url = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';


export const metadata: Metadata = {
  title,
  description,
  category: 'technology',
  metadataBase: new URL(url),
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: 'Jorge Soriano Portfolio',
    type: 'website',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@Basit_Miyanji',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${firaCode.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
        <ThemeMenu />
        <Footer />
      </body>
    </html>
  )
}
