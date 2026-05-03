import type { Metadata } from 'next'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Resources for Trades Business Buyers',
  description:
    'Guides on quality of earnings, EBITDA normalization, working capital traps, and financial due diligence for buyers of HVAC, plumbing, roofing, and other trades businesses.',
  openGraph: {
    title: 'Buyer Resources — Footings Financial',
    description:
      'Free guides on QoE reports, working capital, and due diligence for trades business acquisitions.',
  },
}

const articles = [
  {
    slug: 'what-is-quality-of-earnings',
    label: '01',
    title: "What Is a Quality of Earnings Report? A Buyer's Guide",
    description:
      "QoE reports are standard practice on large deals — but most small business buyers have never seen one. Here's what it is, what it does, and why you need one before signing an LOI.",
    readTime: '8 min read',
    topics: ['QoE Basics', 'EBITDA', 'Due Diligence'],
  },
  {
    slug: 'ebitda-normalization-trades',
    label: '02',
    title: 'EBITDA Normalization in Trades Business Acquisitions',
    description:
      "The seller's EBITDA number is almost always wrong — not because they're lying, but because the adjustments are real and expected. Here's how normalization works and what to look for.",
    readTime: '10 min read',
    topics: ['EBITDA', 'Normalization', 'Adjustments'],
  },
  {
    slug: 'working-capital-trap',
    label: '03',
    title: 'The Working Capital Trap: What HVAC and Plumbing Buyers Get Wrong',
    description:
      "Most buyers negotiate price and ignore working capital. Then they close, and the business runs out of cash in 60 days. Here's what working capital means and how to protect yourself.",
    readTime: '9 min read',
    topics: ['Working Capital', 'Closing', 'Cash Flow'],
  },
  {
    slug: 'add-back-schedule',
    label: '04',
    title: "How to Read a Seller's Add-Back Schedule (And When to Push Back)",
    description:
      "Sellers present add-backs as adjustments in your favor. Some are legitimate. Some inflate EBITDA by six figures. Here's how to tell the difference.",
    readTime: '11 min read',
    topics: ['Add-Backs', 'EBITDA', 'Negotiation'],
  },
]

export default function ResourcesPage() {
  return (
    <main>
      <Nav />

      {/* Header */}
      <section className="blueprint-grid pt-24 pb-16 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-fade-up animate-delay-100">
            <span className="font-mono text-[11px] text-amber-600 tracking-[0.2em] uppercase">
              / Resources
            </span>
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight animate-fade-up animate-delay-200 max-w-2xl text-zinc-900">
            Guides for buyers who want to understand what they&apos;re signing.
          </h1>
          <p className="mt-5 text-zinc-600 text-lg leading-relaxed max-w-xl animate-fade-up animate-delay-300">
            Practical, specific writing on financial due diligence for trades business
            acquisitions. No fluff. No ads.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-0">
            {articles.map((article) => (
              <a
                key={article.slug}
                href={`/resources/${article.slug}`}
                style={{ transition: 'background-color 150ms ease' }}
                className="group block py-10 border-t border-zinc-200 hover:bg-zinc-50 -mx-6 px-6 lg:-mx-8 lg:px-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-6 md:gap-12 items-start">
                  <div className="font-mono text-zinc-300 text-sm font-medium pt-1">
                    {article.label}
                  </div>

                  <div>
                    <h2
                      style={{ transition: 'color 150ms ease' }}
                      className="text-xl font-bold text-zinc-900 tracking-tight group-hover:text-amber-600 leading-snug"
                    >
                      {article.title}
                    </h2>
                    <p className="mt-3 text-zinc-500 leading-relaxed text-[15px] max-w-2xl">
                      {article.description}
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                      <span className="text-xs text-zinc-400">{article.readTime}</span>
                      <span className="text-zinc-200">·</span>
                      <div className="flex items-center gap-2">
                        {article.topics.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono text-zinc-400 px-2 py-0.5 border border-zinc-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center">
                    <ArrowRight
                      size={18}
                      weight="bold"
                      style={{
                        transition: 'transform 200ms cubic-bezier(0.23, 1, 0.32, 1), color 150ms ease',
                      }}
                      className="text-zinc-300 group-hover:text-amber-500 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </a>
            ))}
            <div className="border-t border-zinc-200" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-zinc-200 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <span className="font-mono text-[11px] text-amber-600 tracking-[0.2em] uppercase">
                / Have a Deal?
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900">
                Reading about it is a start. Knowing is better.
              </h2>
              <p className="mt-3 text-zinc-500 leading-relaxed max-w-lg">
                If you have a deal under LOI or in diligence, send us the basics and get a
                fixed-fee quote within 24 hours.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="/#intake"
                style={{
                  transition:
                    'background-color 150ms ease, transform 160ms cubic-bezier(0.23, 1, 0.32, 1)',
                }}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 active:scale-[0.97] text-zinc-950 font-semibold text-sm px-6 py-3"
              >
                Get a Quote
                <ArrowRight weight="bold" size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
