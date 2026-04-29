import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Footings — Financial Due Diligence for Trades Acquisitions',
  description:
    "Don't close on a trades business until you know what you're actually buying. Quality of Earnings reports and fractional CFO services for HVAC, plumbing, roofing, and electrical acquisitions.",
  keywords: [
    'quality of earnings',
    'trades business acquisition',
    'HVAC due diligence',
    'fractional CFO',
    'buy-side due diligence',
    'SMB acquisition',
  ],
  openGraph: {
    title: 'Footings — Financial Due Diligence for Trades Acquisitions',
    description:
      'QoE reports and fractional CFO for buyers of trades businesses. Fixed pricing. 5–7 day turnaround.',
    type: 'website',
    siteName: 'Footings',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Footings — Financial Due Diligence for Trades Acquisitions',
    description: 'QoE reports and fractional CFO for buyers of trades businesses.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-zinc-950 text-zinc-100 antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
