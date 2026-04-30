import type { Metadata } from 'next'
import { ArrowRight, ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: "What Is a Quality of Earnings Report? A Buyer's Guide | Footings",
  description:
    "A quality of earnings (QoE) report normalizes EBITDA, flags hidden risks, and tells you what a business is actually worth. This guide explains what's in one and why you need it before closing on a trades acquisition.",
  openGraph: {
    title: "What Is a Quality of Earnings Report? A Buyer's Guide",
    description:
      'Everything buyers of trades businesses need to know about QoE reports before signing an LOI.',
  },
}

export default function WhatIsQoePage() {
  return (
    <main>
      <Nav />

      {/* Article header */}
      <section className="blueprint-grid pt-20 pb-12 border-b border-zinc-700/60">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <a
            href="/resources"
            style={{ transition: 'color 150ms ease' }}
            className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-300 mb-8 group"
          >
            <ArrowLeft
              size={12}
              style={{ transition: 'transform 150ms cubic-bezier(0.23, 1, 0.32, 1)' }}
              className="group-hover:-translate-x-0.5"
            />
            All Resources
          </a>

          <div className="animate-fade-up animate-delay-100">
            <span className="font-mono text-[11px] text-amber-500 tracking-[0.2em] uppercase">
              / Due Diligence
            </span>
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] animate-fade-up animate-delay-200">
            What Is a Quality of Earnings Report? A Buyer&apos;s Guide
          </h1>
          <div className="mt-5 flex items-center gap-4 animate-fade-up animate-delay-300">
            <span className="text-sm text-zinc-500">8 min read</span>
            <span className="text-zinc-700">·</span>
            <div className="flex items-center gap-2">
              {['QoE Basics', 'EBITDA', 'Due Diligence'].map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-zinc-600 px-2 py-0.5 border border-zinc-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 prose-footings">
          <div className="space-y-8 text-zinc-300 text-[16px] leading-[1.75]">

            <p className="text-zinc-200 text-lg leading-relaxed font-medium">
              When private equity firms acquire businesses, they spend $25,000–$75,000 on a
              Quality of Earnings report before they sign anything. When individual buyers
              acquire small trades businesses, they usually skip it. That gap is where most
              acquisition mistakes are made.
            </p>

            <p>
              This guide explains what a QoE report is, what it looks for, and why it matters
              for buyers of HVAC, plumbing, roofing, electrical, and other trades businesses.
            </p>

            <h2 className="text-xl font-bold text-zinc-100 tracking-tight mt-12 mb-4">
              What a QoE report is (and isn&apos;t)
            </h2>

            <p>
              A Quality of Earnings report is an independent analysis of a business&apos;s financial
              performance, prepared by a third party for the buyer&apos;s benefit. The central
              question it answers:{' '}
              <em className="text-zinc-200">
                does this business actually earn what the seller says it earns?
              </em>
            </p>

            <p>
              It is not an audit. An audit verifies that the financials follow accounting rules.
              A QoE goes further — it looks at whether the reported earnings represent the real,
              sustainable earning power of the business after a change of ownership.
            </p>

            <p>
              It is also not a valuation. A QoE produces adjusted EBITDA or SDE, which a buyer
              then uses to apply a multiple and arrive at a purchase price. The QoE is the
              input; the valuation is the output.
            </p>

            <div className="border-l-2 border-amber-500/60 pl-6 py-2 my-8">
              <p className="text-zinc-200 text-[15px] leading-relaxed font-medium not-italic">
                &ldquo;The QoE answers whether the seller&apos;s EBITDA number is real — not just whether
                the books were kept correctly.&rdquo;
              </p>
            </div>

            <h2 className="text-xl font-bold text-zinc-100 tracking-tight mt-12 mb-4">
              What a QoE report covers
            </h2>

            <p>
              A thorough QoE covers five areas. Each one catches different types of problems.
            </p>

            <h3 className="text-base font-bold text-zinc-100 mt-8 mb-3">
              1. EBITDA normalization
            </h3>
            <p>
              This is the core of any QoE. The analyst takes the seller&apos;s stated EBITDA and
              adjusts it to reflect what the business would earn under new ownership. Common
              adjustments include:
            </p>
            <ul className="space-y-2 mt-4 list-none pl-0">
              {[
                'Owner compensation recast to market rate',
                'Personal expenses run through the business (vehicles, travel, insurance)',
                'Family members on payroll who don\'t work in the business',
                'One-time revenues presented as recurring',
                'Non-cash items like accelerated depreciation',
                'Rent to related parties above or below market',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold text-xs mt-1.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-base font-bold text-zinc-100 mt-8 mb-3">
              2. Working capital analysis
            </h3>
            <p>
              Working capital is the net short-term assets the business needs to operate. A QoE
              calculates what a normalized working capital level looks like and recommends a
              &ldquo;peg&rdquo; — a minimum amount that should be in the business at closing. Without a
              working capital peg, sellers have a direct incentive to drain receivables and
              build payables before the close date.
            </p>

            <h3 className="text-base font-bold text-zinc-100 mt-8 mb-3">
              3. Revenue quality and customer concentration
            </h3>
            <p>
              Not all revenue is equal. A QoE looks at how diversified the customer base is,
              how much revenue is under contract vs. one-time, and whether large customers have
              transferable agreements. A trades business where one property management company
              represents 35% of revenue is a very different risk profile than one with 500
              residential accounts.
            </p>

            <h3 className="text-base font-bold text-zinc-100 mt-8 mb-3">
              4. Owner dependency
            </h3>
            <p>
              The seller who built the business is often the reason the business works. Their
              relationships, reputation, and knowledge don&apos;t transfer automatically. A QoE
              flags which accounts are tied to the owner personally and what revenue is at risk
              when he or she leaves. This doesn&apos;t show up in the P&amp;L, but it&apos;s often the
              most significant risk in a small trades acquisition.
            </p>

            <h3 className="text-base font-bold text-zinc-100 mt-8 mb-3">
              5. Red flags and renegotiation points
            </h3>
            <p>
              The QoE doesn&apos;t just tell you what the numbers say — it tells you what to do
              about them. A good report ends with specific recommended actions: renegotiation
              points, closing conditions, and due diligence questions the buyer should raise
              before signing.
            </p>

            <h2 className="text-xl font-bold text-zinc-100 tracking-tight mt-12 mb-4">
              Why sellers&apos; numbers are almost always wrong
            </h2>

            <p>
              Most trades business owners don&apos;t prepare their books to be sold — they prepare
              them to minimize taxes. This creates a built-in gap between reported earnings and
              economic earnings. The adjustments in a QoE aren&apos;t accusations of fraud; they&apos;re
              corrections for how small business financials actually work.
            </p>

            <p>
              Consider a common scenario: an owner takes a $60,000 salary but draws another
              $80,000 in distributions, runs two personal vehicles through the business, and
              pays his wife $45,000 a year to answer the occasional phone call. The P&amp;L shows
              $400,000 in EBITDA. The real earning power of the business — what a new owner
              running it properly would generate — might be $220,000 after recasting
              compensation and removing personal expenses.
            </p>

            <p>
              That difference changes the value of the business by $720,000 at a 4× multiple.
            </p>

            <div className="bg-zinc-900 border border-zinc-700 p-6 my-8">
              <div className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-4">
                Example
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-zinc-500 mb-1">Seller-stated EBITDA</div>
                  <div className="font-mono text-zinc-100 text-xl font-semibold">$400,000</div>
                </div>
                <div>
                  <div className="text-zinc-500 mb-1">Adjusted EBITDA</div>
                  <div className="font-mono text-amber-400 text-xl font-semibold">$220,000</div>
                </div>
                <div>
                  <div className="text-zinc-500 mb-1">Purchase price (4× stated)</div>
                  <div className="font-mono text-zinc-100">$1,600,000</div>
                </div>
                <div>
                  <div className="text-zinc-500 mb-1">Supportable price (4× adjusted)</div>
                  <div className="font-mono text-amber-400">$880,000</div>
                </div>
                <div className="col-span-2 pt-3 border-t border-zinc-700/60">
                  <div className="text-zinc-500 mb-1">Overstatement</div>
                  <div className="font-mono text-red-400 font-semibold">$720,000</div>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-zinc-100 tracking-tight mt-12 mb-4">
              When to get a QoE
            </h2>

            <p>
              The right time to commission a QoE is after you&apos;ve signed an LOI and have
              exclusive access to financials, but before you&apos;ve committed to close. This gives
              you negotiating leverage if the analysis uncovers problems.
            </p>

            <p>
              Some buyers start earlier — during the diligence phase before an LOI — if the
              seller is willing to share preliminary financials. This can help you decide whether
              to make an offer at all, and at what price.
            </p>

            <p>
              What you should not do is close first and then figure out what you bought. The
              issues that QoE reports catch are almost always fixable at the negotiating table.
              They are rarely fixable after you&apos;ve signed the purchase agreement.
            </p>

            <h2 className="text-xl font-bold text-zinc-100 tracking-tight mt-12 mb-4">
              What a QoE costs — and what it saves
            </h2>

            <p>
              For a small trades business acquisition, a buy-side QoE typically costs
              $2,500–$6,000. At the top of that range, that&apos;s still less than 0.15% of a
              $4 million purchase price.
            </p>

            <p>
              The average EBITDA overstatement we find on a $1 million EBITDA deal at a 4×
              multiple is roughly $235,000. Even if the report only helped you negotiate 10%
              of that back, you&apos;ve made $23,500 on a $4,000 investment. More realistically,
              the findings give you price reduction leverage, closing conditions, and clarity
              on what you&apos;re actually buying.
            </p>

            <div className="border border-zinc-700/60 p-6 mt-10 bg-zinc-900/40">
              <div className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-3">
                Bottom Line
              </div>
              <p className="text-zinc-300 text-[15px] leading-relaxed">
                A Quality of Earnings report is not optional on a meaningful acquisition — it&apos;s the
                minimum standard for knowing what you&apos;re buying. For trades businesses specifically,
                where books are often prepared for tax purposes rather than sale, the gap between
                reported and actual earnings tends to be significant. Get the report before you close.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related articles + CTA */}
      <section className="py-16 border-t border-zinc-700/60 bg-zinc-900/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="font-mono text-[11px] text-zinc-500 tracking-[0.2em] uppercase mb-6">
            Continue Reading
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              {
                href: '/resources/ebitda-normalization-trades',
                title: 'EBITDA Normalization in Trades Business Acquisitions',
              },
              {
                href: '/resources/working-capital-trap',
                title: 'The Working Capital Trap: What HVAC and Plumbing Buyers Get Wrong',
              },
            ].map((article) => (
              <a
                key={article.href}
                href={article.href}
                style={{ transition: 'border-color 150ms ease' }}
                className="group p-4 border border-zinc-700/60 hover:border-amber-500/40 block"
              >
                <div
                  style={{ transition: 'color 150ms ease' }}
                  className="text-sm font-semibold text-zinc-200 group-hover:text-amber-400 leading-snug"
                >
                  {article.title}
                </div>
                <div className="mt-2 flex items-center gap-1 text-xs text-zinc-500">
                  Read article
                  <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          <div className="border-t border-zinc-700/60 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-zinc-100">Ready to protect your deal?</div>
              <p className="mt-1 text-sm text-zinc-500">
                Fixed-fee QoE reports for trades business buyers.
              </p>
            </div>
            <a
              href="/#intake"
              style={{
                transition:
                  'background-color 150ms ease, transform 160ms cubic-bezier(0.23, 1, 0.32, 1)',
              }}
              className="shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 active:scale-[0.97] text-zinc-950 font-semibold text-sm px-6 py-2.5"
            >
              Get a Quote
              <ArrowRight weight="bold" size={13} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
