import type { Metadata } from 'next'
import { ArrowRight, ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'EBITDA Normalization in Trades Business Acquisitions',
  description:
    "The seller's EBITDA is almost always wrong — not because they're lying, but because small business books are prepared for taxes, not sale. This guide explains how normalization works and what adjustments to expect.",
  openGraph: {
    title: 'EBITDA Normalization in Trades Business Acquisitions',
    description:
      "How to read and recast a seller's EBITDA for HVAC, plumbing, roofing, and other trades acquisitions.",
  },
}

export default function EbitdaNormalizationPage() {
  return (
    <main>
      <Nav />

      {/* Article header */}
      <section className="blueprint-grid pt-20 pb-12 border-b border-zinc-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <a
            href="/resources"
            style={{ transition: 'color 150ms ease' }}
            className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-700 mb-8 group"
          >
            <ArrowLeft
              size={12}
              style={{ transition: 'transform 150ms cubic-bezier(0.23, 1, 0.32, 1)' }}
              className="group-hover:-translate-x-0.5"
            />
            All Resources
          </a>

          <div className="animate-fade-up animate-delay-100">
            <span className="font-mono text-[11px] text-amber-600 tracking-[0.2em] uppercase">
              / Due Diligence
            </span>
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] animate-fade-up animate-delay-200 text-zinc-900">
            EBITDA Normalization in Trades Business Acquisitions
          </h1>
          <div className="mt-5 flex items-center gap-4 animate-fade-up animate-delay-300">
            <span className="text-sm text-zinc-400">10 min read</span>
            <span className="text-zinc-200">·</span>
            <div className="flex items-center gap-2">
              {['EBITDA', 'Normalization', 'Adjustments'].map((t) => (
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
      </section>

      {/* Article body */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-zinc-700 text-[16px] leading-[1.75]">

            <p className="text-zinc-800 text-lg leading-relaxed font-medium">
              When a seller says their business earns $500,000 in EBITDA, that number is almost
              never what you&apos;ll actually earn as the new owner. That gap isn&apos;t fraud —
              it&apos;s the natural result of how small business books are kept. Normalization
              is how you close it.
            </p>

            <p>
              This guide explains what EBITDA normalization is, why it matters for trades
              business acquisitions specifically, and the most common adjustments you should
              expect to see — and push back on.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-12 mb-4">
              What normalization actually means
            </h2>

            <p>
              EBITDA normalization is the process of adjusting a business&apos;s reported earnings
              to reflect what a new owner would actually earn running the business at arm&apos;s
              length. You start with the seller&apos;s stated EBITDA and add or subtract items
              that are owner-specific, one-time, or otherwise not representative of ongoing
              operations.
            </p>

            <p>
              The result is called &ldquo;adjusted EBITDA&rdquo; or, for smaller businesses where the
              owner is also the operator, &ldquo;Seller Discretionary Earnings&rdquo; (SDE). SDE adds
              back the owner&apos;s total compensation (salary + distributions + benefits) and
              replaces it with a market-rate salary for whoever would actually run the business.
            </p>

            <div className="border-l-2 border-amber-400 pl-6 py-2 my-8">
              <p className="text-zinc-800 text-[15px] leading-relaxed font-medium not-italic">
                &ldquo;The seller&apos;s financials tell you what the business earned for them.
                Normalization tells you what it will earn for you.&rdquo;
              </p>
            </div>

            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-12 mb-4">
              Why trades businesses are especially prone to distortion
            </h2>

            <p>
              Most trades business owners — HVAC, plumbing, roofing, electrical — run their
              books to minimize their tax bill, not to present an accurate picture of business
              performance. This is rational and legal, but it creates a systematic gap between
              reported earnings and real earnings.
            </p>

            <p>
              Common patterns in trades businesses:
            </p>

            <ul className="space-y-3 mt-4 list-none pl-0">
              {[
                'The owner pays himself a below-market salary and takes distributions instead — reducing apparent labor costs artificially',
                'The business owns and expenses vehicles the owner also uses personally',
                'Family members are on payroll in roles that would either be eliminated or replaced at lower cost',
                'The owner defers capital expenditures in the year before a sale, making cash flow look stronger than it is',
                'Large one-time jobs are presented as part of recurring revenue without context',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold text-xs mt-1.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              None of these are inherently dishonest. But taken together, they can make a
              $300,000 EBITDA business look like a $500,000 EBITDA business — and that
              difference, at a 4× multiple, is $800,000 in purchase price.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-12 mb-4">
              The six standard normalization categories
            </h2>

            <h3 className="text-base font-bold text-zinc-900 mt-8 mb-3">
              1. Owner compensation recast
            </h3>
            <p>
              This is usually the largest single adjustment. The seller&apos;s total compensation
              (W-2 salary + owner draws + distributions + personal benefits paid through the
              business) gets added back to EBITDA, and a market-rate management salary is
              subtracted in its place. For a HVAC or plumbing company doing $2–5M in revenue,
              that replacement salary is typically $80,000–$120,000.
            </p>
            <p className="mt-4">
              If the owner is also the primary technician, the replacement cost may be higher —
              you&apos;re replacing both the manager and a skilled laborer.
            </p>

            <h3 className="text-base font-bold text-zinc-900 mt-8 mb-3">
              2. Personal expenses run through the business
            </h3>
            <p>
              Vehicle expenses are the most common — personal trucks, gas, insurance, and
              maintenance expensed through the company. Also watch for personal cell plans,
              travel and entertainment, home office deductions, owner&apos;s health and life
              insurance, and any personal subscription services.
            </p>
            <p className="mt-4">
              These get added back to EBITDA because they won&apos;t persist under new ownership.
              The business doesn&apos;t actually incur those costs — the owner was running them
              through for tax purposes.
            </p>

            <h3 className="text-base font-bold text-zinc-900 mt-8 mb-3">
              3. Non-recurring items
            </h3>
            <p>
              Any revenue or expense that won&apos;t repeat needs to be isolated and handled
              explicitly. Common examples: a large one-off commercial project, a one-time
              equipment sale, a legal settlement, a COVID-era grant, or an insurance payout.
              These are added back (if expense) or stripped out (if one-time revenue) to
              reveal the baseline operating performance.
            </p>

            <h3 className="text-base font-bold text-zinc-900 mt-8 mb-3">
              4. Related-party transactions
            </h3>
            <p>
              If the business rents its shop or warehouse from an LLC owned by the seller,
              the rent either above or below market needs to be adjusted. If a family
              member&apos;s company provides materials at a preferred rate, that needs to be
              normalized to what you&apos;d actually pay. Related-party transactions can inflate
              or deflate earnings, and they disappear entirely when you buy the business.
            </p>

            <h3 className="text-base font-bold text-zinc-900 mt-8 mb-3">
              5. Depreciation and amortization recast
            </h3>
            <p>
              EBITDA adds back D&amp;A by definition, but the treatment of owned equipment,
              vehicles, and any prior acquisition goodwill still needs to be understood.
              A business that has been aggressively expensing new equipment under Section 179
              may show lower profitability than its true cash-generating capacity — but will
              also face upcoming capex needs that the EBITDA doesn&apos;t reflect.
            </p>

            <h3 className="text-base font-bold text-zinc-900 mt-8 mb-3">
              6. Deferred maintenance and near-term capex
            </h3>
            <p>
              This is a downward adjustment — a subtraction from EBITDA, not an add-back.
              If the seller has been deferring maintenance on equipment, vehicles, or
              facilities in the 12–24 months before the sale, the cost of that deferred
              work becomes yours on day one. A thorough normalization flags it; a lazy
              one doesn&apos;t.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-12 mb-4">
              How to read the seller&apos;s add-back schedule
            </h2>

            <p>
              Most sellers or their brokers will provide an add-back schedule — a list of
              the adjustments they believe should be made to their stated EBITDA. This is
              useful as a starting point, but understand what it is: it&apos;s a marketing
              document. The seller has every incentive to include every possible add-back
              and minimize any downward adjustments.
            </p>

            <p>
              Common ways seller-provided add-backs are inflated:
            </p>

            <ul className="space-y-3 mt-4 list-none pl-0">
              {[
                'Recurring expenses presented as one-time ("this was an unusual year for fleet repairs")',
                'Owner compensation replaced at an unrealistically low market rate',
                'Revenue from a large client presented as stable when the relationship is personal to the owner',
                'Depreciation added back without acknowledging the real replacement capex schedule',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold text-xs mt-1.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              Every add-back should be supported by documentation. If the seller says
              $40,000 was a one-time equipment repair, you should be able to see the invoice
              and verify it doesn&apos;t appear in prior years.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-12 mb-4">
              A normalization example
            </h2>

            <div className="bg-zinc-50 border border-zinc-200 p-6 my-8">
              <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mb-4">
                Example — Plumbing Company, $3.2M Revenue
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-zinc-200 pb-3">
                  <span className="text-zinc-600">Seller-stated EBITDA</span>
                  <span className="font-mono text-zinc-900 font-semibold">$480,000</span>
                </div>
                {[
                  ['Owner compensation add-back (drew $220K vs. $95K market rate)', '+$125,000'],
                  ['Personal vehicles (2 trucks, personal use portion)', '+$28,000'],
                  ["Wife's salary (administrative, at market she wouldn't be hired)", '+$52,000'],
                  ['One-time insurance payout (roof damage)', '+$18,000'],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between py-1">
                    <span className="text-zinc-600 pr-4">{label}</span>
                    <span className="font-mono text-amber-600 shrink-0">{val}</span>
                  </div>
                ))}
                {[
                  ['Deferred fleet maintenance (4 vehicles past service intervals)', '–$34,000'],
                  ["Below-market rent from owner's LLC normalized to market", '–$24,000'],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between py-1">
                    <span className="text-zinc-600 pr-4">{label}</span>
                    <span className="font-mono text-red-500 shrink-0">{val}</span>
                  </div>
                ))}
                <div className="flex justify-between border-t border-zinc-200 pt-3 mt-2">
                  <span className="text-zinc-800 font-semibold">Adjusted EBITDA</span>
                  <span className="font-mono text-zinc-900 font-bold text-lg">$645,000</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-zinc-500 text-xs">Price difference at 4× multiple</span>
                  <span className="font-mono text-zinc-700 font-semibold">+$660,000</span>
                </div>
              </div>
            </div>

            <p>
              In this case the adjustments actually worked in the buyer&apos;s favor — the
              business earns more than the seller stated. But the same process can work in
              reverse: a seller presenting $480,000 EBITDA with aggressive add-backs might
              normalize down to $310,000, a $680,000 difference in supportable purchase price
              at a 4× multiple.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-12 mb-4">
              What to do when you disagree with an adjustment
            </h2>

            <p>
              Normalization is not purely mechanical — judgment calls are involved, and
              reasonable people can disagree on specific items. When you push back on an
              adjustment, come with documentation and a specific alternative.
            </p>

            <p>
              &ldquo;I don&apos;t accept this add-back&rdquo; is a negotiating position, not an argument.
              &ldquo;This expense appears in three of the last four years and cannot be characterized
              as non-recurring — I&apos;ve excluded it and adjusted the purchase price accordingly&rdquo;
              is an argument.
            </p>

            <p>
              The goal isn&apos;t to minimize the purchase price — it&apos;s to pay a price that
              reflects what you&apos;re actually buying. If the normalization reveals the business
              is more profitable than stated, that&apos;s useful information too. You want the
              real number, whatever it is.
            </p>

            <div className="border border-zinc-200 p-6 mt-10 bg-amber-50/60">
              <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mb-3">
                Bottom Line
              </div>
              <p className="text-zinc-700 text-[15px] leading-relaxed">
                EBITDA normalization is not optional — it&apos;s the foundation of any credible
                purchase price. Without it, you&apos;re paying a multiple of a number that doesn&apos;t
                reflect what you&apos;ll actually earn. A rigorous normalization, done independently
                by a buy-side analyst, is the single highest-leverage thing you can do before
                signing a purchase agreement.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related articles + CTA */}
      <section className="py-16 border-t border-zinc-200 bg-zinc-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="font-mono text-[11px] text-zinc-400 tracking-[0.2em] uppercase mb-6">
            Continue Reading
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              {
                href: '/resources/what-is-quality-of-earnings',
                title: "What Is a Quality of Earnings Report? A Buyer's Guide",
              },
              {
                href: '/resources/add-back-schedule',
                title: "How to Read a Seller's Add-Back Schedule (And When to Push Back)",
              },
            ].map((article) => (
              <a
                key={article.href}
                href={article.href}
                style={{ transition: 'border-color 150ms ease' }}
                className="group p-4 border border-zinc-200 hover:border-amber-400/60 bg-white block"
              >
                <div
                  style={{ transition: 'color 150ms ease' }}
                  className="text-sm font-semibold text-zinc-800 group-hover:text-amber-600 leading-snug"
                >
                  {article.title}
                </div>
                <div className="mt-2 flex items-center gap-1 text-xs text-zinc-400">
                  Read article
                  <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          <div className="border-t border-zinc-200 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-zinc-900">Ready to protect your deal?</div>
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
              className="shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 active:scale-[0.97] text-zinc-950 font-semibold text-sm px-6 py-2.5"
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
