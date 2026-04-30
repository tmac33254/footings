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

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://footings.co'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Footings — Financial Due Diligence for Trades Acquisitions',
    template: '%s | Footings',
  },
  description:
    "Buy-side Quality of Earnings reports for HVAC, plumbing, roofing, and other trades acquisitions. Fixed flat fee from $2,500. 5–7 business day turnaround. We catch inflated EBITDA, working capital gaps, and owner-dependent revenue before they become your problem.",
  keywords: [
    'quality of earnings trades business',
    'HVAC acquisition due diligence',
    'trades business QoE report',
    'buy-side due diligence SMB',
    'fractional CFO trades business',
    'EBITDA normalization small business',
    'how to buy HVAC business',
    'plumbing business acquisition',
    'roofing company acquisition',
    'SMB acquisition financial diligence',
  ],
  authors: [{ name: 'Footings Financial' }],
  creator: 'Footings Financial',
  publisher: 'Footings Financial',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Footings — Financial Due Diligence for Trades Acquisitions',
    description:
      'QoE reports and fractional CFO for buyers of trades businesses. Fixed pricing. 5–7 day turnaround. Buy-side only.',
    type: 'website',
    siteName: 'Footings',
    locale: 'en_US',
    url: BASE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Footings — Financial Due Diligence for Trades Acquisitions',
    description:
      'QoE reports and fractional CFO for buyers of HVAC, plumbing, roofing, and other trades businesses.',
    creator: '@footingsfinancial',
  },
  alternates: {
    canonical: BASE_URL,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Footings Financial',
  description:
    'Buy-side financial due diligence and fractional CFO services for buyers of trades businesses. Specializing in Quality of Earnings reports for HVAC, plumbing, roofing, electrical, and landscaping acquisitions.',
  url: BASE_URL,
  serviceType: [
    'Quality of Earnings Report',
    'Financial Due Diligence',
    'Fractional CFO',
    'Buy-Side Advisory',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  knowsAbout: [
    'Trades Business Acquisitions',
    'HVAC Business Acquisition',
    'Quality of Earnings',
    'EBITDA Normalization',
    'SMB Due Diligence',
    'Working Capital Analysis',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Due Diligence Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Quality of Earnings Report',
          description:
            'Buy-side QoE report for trades business acquisitions. Fixed flat fee, 5–7 business day turnaround.',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '2500',
          maxPrice: '4000',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fractional CFO',
          description:
            'Post-acquisition fractional CFO services for owner-operators of trades businesses.',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '1500',
          maxPrice: '2500',
          priceCurrency: 'USD',
          unitText: 'monthly',
        },
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-zinc-950 text-zinc-100 antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
