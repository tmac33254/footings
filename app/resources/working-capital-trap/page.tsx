import type { Metadata } from 'next'
import { ArrowRight, ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'The Working Capital Trap in Trades Business Acquisitions | Footings',
  description:
    "Most buyers negotiate the purchase price and ignore working capital. Then they close, and the business runs out of cash. Here's what working capital means in HVAC and plumbing acquisitions — and how to protect yourself.",
  openGraph: {
    title: 'The Working Capital Trap: What HVAC and Plumbing Buyers Get Wrong',
    description:
      'Why most trades business buyers get surprised at closing — and how a working capital peg protects you.',
  },
}

export default function WorkingCapitalTrapPage() {
  return (
    <main>
      <Nav />

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

          <span className="font-mono text-[11px] text-amber-500 tracking-[0.2em] uppercase block mb-4 animate-fade-up animate-delay-100">
            / Cash Flow & Working Capital
          </span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] animate-fade-up animate-delay-200">
            The Working Capital Trap: What HVAC and Plumbing Buyers Get Wrong
          </h1>
          <div className="mt-5 flex items-center gap-4 animate-fade-up animate-delay-300">
            <span className="text-sm text-zinc-500">9 min read</span>
            <span className="text-zinc-700">·</span>
            <div className="flex items-center gap-2">
              {['Working Capital', 'Closing', 'Cash Flow'].map((t) => (
                <span key={t} className="text-xs font-mono text-zinc-600 px-2 py-0.5 border border-zinc-800">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-zinc-300 text-[16px] leading-[1.75]">

            <p className="text-zinc-200 text-lg leading-relaxed font-medium">
              Most buyers negotiate the purchase price. Few negotiate working capital. Then
              they close, take the keys, and within 60 days find themselves funding payroll
              out of pocket. This is called the working capital trap — and it surprises first-time
              buyers in trades acquisitions more than almost anything else.
            </p>

            <h2 className="text-xl font-bold text-zinc-100 tracking-tight mt-12 mb-4">
              What working capital is
            </h2>

            <p>
              Working capital is the net short-term assets a business needs to operate
              day-to-day. The simplified formula is:
            </p>

            <div className="bg-zinc-900 border border-zinc-700 p-5 my-6 text-center">
              <div className="font-mono text-base text-zinc-100">
                Working Capital = Current Assets − Current Liabilities
              </div>
            </div>

            <p>
              Current assets include accounts receivable (money owed to the business), inventory
              (parts, equipment), and prepaid expenses. Current liabilities include accounts
              payable (money the business owes suppliers), accrued wages, and deferred revenue
              (service contracts paid in advance).
            </p>

            <p>
              For a trades business, working capital is the financial cushion that keeps the
              lights on between the time you pay employees and suppliers and the time customers
              actually pay you.
            </p>

            <h2 className="text-xl font-bold text-zinc-100 tracking-tight mt-12 mb-4">
              Why sellers have every incentive to drain it before closing
            </h2>

            <p>
              Here&apos;s the problem: unless working capital is explicitly addressed in the
              purchase agreement, the seller walks away with all of it.
            </p>

            <p>
              In the 60–90 days before closing, a motivated seller can:
            </p>

            <ul className="space-y-2 mt-4">
              {[
                'Collect receivables aggressively and delay depositing them to show a clean balance',
                'Stop paying suppliers (building AP that becomes your liability at close)',
                'Run through parts inventory without restocking',
                'Collect annual service contract renewals before close, deferring the revenue',
                'Distribute excess cash as owner distributions before the sale closes',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-amber-500 text-xs mt-1.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4">
              None of these are necessarily fraudulent. But collectively, they can leave the
              business with $80,000–$150,000 less working capital than it had when you
              evaluated it. You inherit the obligation to fund operations from day one.
            </p>

            <div className="border-l-2 border-amber-500/60 pl-6 py-2 my-8">
              <p className="text-zinc-200 text-[15px] leading-relaxed font-medium not-italic">
                &ldquo;The median working capital deficiency we find post-LOI in small trades deals is
                $127,000. Most buyers found out at the closing table.&rdquo;
              </p>
            </div>

            <h2 className="text-xl font-bold text-zinc-100 tracking-tight mt-12 mb-4">
              Why it hits HVAC and plumbing companies especially hard
            </h2>

            <p>
              Trades businesses have specific cash flow dynamics that make working capital
              issues particularly acute:
            </p>

            <p>
              <strong className="text-zinc-100">Seasonal revenue patterns.</strong> An HVAC
              company does most of its replacement revenue in summer. If the deal closes in
              February, receivables are at a seasonal low. But payables — for equipment ordered
              in the fall — may still be outstanding. The buyer takes over at the worst
              working capital moment of the year.
            </p>

            <p>
              <strong className="text-zinc-100">Service contract timing.</strong> Annual
              maintenance contracts are often collected in the spring. If the seller collects
              renewals in March and the deal closes in April, you inherit the labor obligation
              for those contracts without the cash to fund them.
            </p>

            <p>
              <strong className="text-zinc-100">Equipment-intensive inventory.</strong> HVAC
              companies carry significant parts inventory — refrigerant, coils, motors,
              condensing units. If the seller stops restocking in anticipation of the sale,
              inventory levels drop below what the business needs to operate efficiently.
              Technicians wait for parts; customers wait for repairs; revenue slows.
            </p>

            <h2 className="text-xl font-bold text-zinc-100 tracking-tight mt-12 mb-4">
              What a working capital peg is and how it works
            </h2>

            <p>
              A working capital peg is a minimum level of net working capital that the seller
              must deliver at close. It&apos;s negotiated into the purchase agreement as a closing
              condition.
            </p>

            <p>
              The mechanics:
            </p>

            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs text-amber-500 shrink-0 mt-1">01</span>
                <span>
                  The buyer and seller agree on a peg amount (e.g., $125,000) based on the
                  trailing 12-month average working capital.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs text-amber-500 shrink-0 mt-1">02</span>
                <span>
                  At close, the actual net working capital is calculated from the closing balance sheet.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs text-amber-500 shrink-0 mt-1">03</span>
                <span>
                  If NWC at close is below the peg, the purchase price is reduced dollar-for-dollar.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs text-amber-500 shrink-0 mt-1">04</span>
                <span>
                  If NWC exceeds the peg, some deals provide for a purchase price increase
                  (though this is less common in small deals).
                </span>
              </li>
            </ul>

            <div className="bg-zinc-900 border border-zinc-700 p-5 my-8">
              <div className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-4">
                Example
              </div>
              <div className="text-sm text-zinc-300 space-y-2">
                <div className="flex justify-between">
                  <span>Agreed purchase price</span>
                  <span className="font-mono text-zinc-100">$2,800,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Negotiated working capital peg</span>
                  <span className="font-mono text-zinc-100">$125,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Actual NWC at closing</span>
                  <span className="font-mono text-red-400">$47,000</span>
                </div>
                <div className="flex justify-between border-t border-zinc-700/60 pt-2">
                  <span>Shortfall</span>
                  <span className="font-mono text-red-400">(78,000)</span>
                </div>
                <div className="flex justify-between">
                  <span>Adjusted final price</span>
                  <span className="font-mono text-amber-400">$2,722,000</span>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-zinc-100 tracking-tight mt-12 mb-4">
              How to set the right peg
            </h2>

            <p>
              The peg should be based on the trailing 12-month average net working capital,
              calculated from monthly balance sheets. Using an average smooths out seasonal
              peaks and troughs — otherwise a buyer closing in summer might demand peak-season
              NWC levels that aren&apos;t representative of the business year-round.
            </p>

            <p>
              A few considerations:
            </p>

            <ul className="space-y-2 mt-4">
              {[
                "Don't peg to zero. Even if the seller says the business is \"cash-flow positive\" and doesn't need working capital, the timing risk is real.",
                "Request monthly balance sheets for the past 12–24 months. A single snapshot can be manipulated. Monthly data shows the pattern.",
                "Watch for unusually low AP at the time of sale — a common indicator the seller stopped paying suppliers.",
                'Deferred revenue (service contracts, annual maintenance agreements) should be included in liabilities when setting the peg.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-amber-500 text-xs mt-1.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold text-zinc-100 tracking-tight mt-12 mb-4">
              What buyers should ask before close
            </h2>

            <p>
              When you&apos;re reviewing a trades acquisition, these are the working capital questions
              to get answered:
            </p>

            <ul className="space-y-2 mt-4">
              {[
                "What is the normalized working capital based on the trailing 12-month monthly average?",
                "Can you provide monthly balance sheets for the past 24 months?",
                "What are the terms on open accounts payable — how current are they?",
                "Are there any large payables (equipment suppliers, insurance premiums) coming due in the 30 days after close?",
                "What service contract renewals are expected in the 60 days following close?",
                "Is inventory at normal levels? When was it last fully restocked?",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-amber-500 text-xs mt-1.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="border border-zinc-700/60 p-6 mt-10 bg-zinc-900/40">
              <div className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-3">
                Bottom Line
              </div>
              <p className="text-zinc-300 text-[15px] leading-relaxed">
                Working capital is not a technicality. It&apos;s the cash that keeps the business
                running after you take the keys. Every trades acquisition should have a working
                capital peg negotiated into the purchase agreement before close. Without one,
                you&apos;re accepting the risk that the seller drained the account and you&apos;ll fund
                operations out of pocket on day one.
              </p>
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 border-t border-zinc-700/60 bg-zinc-900/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="font-mono text-[11px] text-zinc-500 tracking-[0.2em] uppercase mb-6">
            Continue Reading
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              {
                href: '/resources/what-is-quality-of-earnings',
                title: "What Is a Quality of Earnings Report? A Buyer's Guide",
              },
              {
                href: '/resources/ebitda-normalization-trades',
                title: 'EBITDA Normalization in Trades Business Acquisitions',
              },
            ].map((article) => (
              <a
                key={article.href}
                href={article.href}
                style={{ transition: 'border-color 150ms ease' }}
                className="group p-4 border border-zinc-700/60 hover:border-amber-500/40 block"
              >
                <div style={{ transition: 'color 150ms ease' }} className="text-sm font-semibold text-zinc-200 group-hover:text-amber-400 leading-snug">
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
              <p className="mt-1 text-sm text-zinc-500">Fixed-fee QoE reports for trades business buyers.</p>
            </div>
            <a
              href="/#intake"
              style={{ transition: 'background-color 150ms ease, transform 160ms cubic-bezier(0.23, 1, 0.32, 1)' }}
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
