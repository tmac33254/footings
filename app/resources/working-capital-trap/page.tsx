import type { Metadata } from 'next'
import { ArrowRight, ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'The Working Capital Trap: What HVAC and Plumbing Buyers Get Wrong',
  description:
    'Most buyers negotiate price and ignore working capital. Then they close, and the business runs out of cash in 60 days. This guide explains what working capital means in a trades acquisition and how to protect yourself.',
  openGraph: {
    title: 'The Working Capital Trap: What HVAC and Plumbing Buyers Get Wrong',
    description:
      'How to negotiate a working capital peg and avoid running out of cash after closing on a trades acquisition.',
  },
}

export default function WorkingCapitalTrapPage() {
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
            The Working Capital Trap: What HVAC and Plumbing Buyers Get Wrong
          </h1>
          <div className="mt-5 flex items-center gap-4 animate-fade-up animate-delay-300">
            <span className="text-sm text-zinc-400">9 min read</span>
            <span className="text-zinc-200">·</span>
            <div className="flex items-center gap-2">
              {['Working Capital', 'Closing', 'Cash Flow'].map((t) => (
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
              You spend six months negotiating the purchase price. You get the seller down
              $150,000. You close. Sixty days later the business can&apos;t make payroll.
              This is the working capital trap, and it catches more buyers than any other
              issue in a trades acquisition.
            </p>

            <p>
              This guide explains what working capital is in the context of a trades
              business, why sellers have a direct incentive to drain it before closing,
              and how to protect yourself with a properly structured working capital peg.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-12 mb-4">
              What working capital is
            </h2>

            <p>
              Working capital is current assets minus current liabilities. In plain English:
              it&apos;s the net short-term assets the business has available to fund day-to-day
              operations. The core components in a trades business:
            </p>

            <div className="bg-zinc-50 border border-zinc-200 p-6 my-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mb-3">
                    Current Assets
                  </div>
                  <div className="space-y-2">
                    {[
                      'Accounts receivable (work billed, not yet collected)',
                      'Inventory (parts, materials on hand)',
                      'Prepaid expenses',
                      'Cash',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1 shrink-0">+</span>
                        <span className="text-zinc-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mb-3">
                    Current Liabilities
                  </div>
                  <div className="space-y-2">
                    {[
                      'Accounts payable (materials, subs not yet paid)',
                      'Accrued payroll',
                      'Deferred revenue (deposits collected)',
                      'Short-term debt',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="text-red-400 mt-1 shrink-0">–</span>
                        <span className="text-zinc-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-zinc-200 flex justify-between text-sm">
                <span className="text-zinc-600 font-medium">Working Capital</span>
                <span className="font-mono text-zinc-900 font-semibold">Assets − Liabilities</span>
              </div>
            </div>

            <p>
              A business needs positive working capital to operate. If receivables drop or
              payables spike, the business has less cash available to fund the next payroll
              cycle, material purchases, and overhead. In a trades business with 30–60 day
              payment terms, a swing in working capital hits cash quickly.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-12 mb-4">
              Why sellers drain working capital before closing
            </h2>

            <p>
              Here&apos;s the misalignment: the purchase price in most deals is set as a
              multiple of EBITDA, with working capital transferred at closing. The seller
              gets to keep any cash above an agreed peg — which means they have a direct
              financial incentive to maximize collections and delay payments in the 60–90
              days before close.
            </p>

            <p>
              This can happen deliberately or simply through normal seller behavior:
            </p>

            <ul className="space-y-3 mt-4 list-none pl-0">
              {[
                'Aggressively collecting receivables in the final weeks before close',
                'Delaying payments to suppliers and subcontractors',
                'Reducing inventory to minimum levels',
                'Pulling forward revenue recognition on jobs in progress',
                'Stopping maintenance spend and vendor prepayments',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold text-xs mt-1.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              The result: the business closes with a lean balance sheet. You immediately
              inherit the vendor payables the seller delayed, the low inventory that needs
              restocking, and the reduced receivable pipeline — all while trying to make
              payroll and run the business you just bought.
            </p>

            <div className="border-l-2 border-amber-400 pl-6 py-2 my-8">
              <p className="text-zinc-800 text-[15px] leading-relaxed font-medium not-italic">
                &ldquo;The seller isn&apos;t being malicious — they&apos;re optimizing for the same thing
                you are. Without a peg, their incentives and yours are perfectly misaligned
                at the worst possible moment.&rdquo;
              </p>
            </div>

            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-12 mb-4">
              What a working capital peg is
            </h2>

            <p>
              A working capital peg is a contractually agreed minimum amount of working
              capital that must be in the business at closing. If the business closes with
              more than the peg, the buyer may owe the seller an additional payment. If
              it closes below the peg, the seller owes the buyer a dollar-for-dollar
              reduction in the purchase price.
            </p>

            <p>
              The peg is calculated from the historical normalized working capital of the
              business — typically an average of the prior 12 or 24 months, excluding any
              seasonal spikes and cleaning out non-recurring items. A quality of earnings
              report should always include a recommended working capital peg with this
              calculation shown.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-12 mb-4">
              How the peg calculation works in practice
            </h2>

            <div className="bg-zinc-50 border border-zinc-200 p-6 my-8">
              <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mb-4">
                Example — HVAC Company, $4.1M Revenue
              </div>
              <div className="space-y-3 text-sm">
                <div className="text-zinc-500 mb-2">
                  Trailing 12-month average working capital
                </div>
                {[
                  ['Average accounts receivable', '$312,000'],
                  ['Average inventory', '$88,000'],
                  ['Average prepaid expenses', '$14,000'],
                  ['Less: average accounts payable', '–$142,000'],
                  ['Less: average accrued liabilities', '–$67,000'],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between py-1 border-b border-zinc-100">
                    <span className="text-zinc-600">{label}</span>
                    <span className={`font-mono ${val.startsWith('–') ? 'text-red-500' : 'text-zinc-900'}`}>
                      {val}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between pt-2">
                  <span className="text-zinc-800 font-semibold">Recommended peg</span>
                  <span className="font-mono text-amber-600 font-bold">$205,000</span>
                </div>
                <div className="text-[12px] text-zinc-400 pt-1">
                  If closing balance is below $205K, seller reimburses the shortfall dollar-for-dollar.
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-12 mb-4">
              Seasonal businesses need special treatment
            </h2>

            <p>
              HVAC businesses in particular have pronounced seasonality — receivables spike
              after summer cooling season; they drop in winter. A flat trailing-twelve-month
              average peg can be wrong by $80,000–$150,000 depending on when the deal closes.
            </p>

            <p>
              For seasonal businesses, the peg should be calculated relative to the same
              point in the prior year, not just a trailing average. A deal closing in
              September should use last September&apos;s working capital as the reference — not
              February&apos;s, which will look very different for a cooling-heavy business.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-12 mb-4">
              The post-close cash reserve you&apos;ll need anyway
            </h2>

            <p>
              Even with a properly structured peg, plan to have operating reserves available
              on day one. The business&apos;s prior cash cycle was calibrated to how the seller
              ran it. You&apos;ll change things — vendor relationships, payment terms, staffing,
              how you handle deposits — and any change creates temporary cash friction.
            </p>

            <p>
              A reasonable reserve target for a trades acquisition is 60–90 days of fixed
              operating expenses: payroll, rent, insurance, and debt service. For most
              businesses in the $2–5M revenue range, that&apos;s $150,000–$350,000. If your
              lender requires this as a condition anyway, treat it as a minimum, not a target.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-12 mb-4">
              Red flags in the pre-close period
            </h2>

            <p>
              The 30–60 days before closing is when working capital manipulation is most
              likely. Watch for:
            </p>

            <ul className="space-y-3 mt-4 list-none pl-0">
              {[
                'A sudden spike in receivable collections relative to historical pace',
                'Vendor invoices going unpaid when they were normally current',
                'Inventory levels dropping without a corresponding decline in active jobs',
                'Unusually large customer deposits collected in the final weeks',
                'The seller asking to extend the close date as the balance sheet improves',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-red-400 font-bold text-xs mt-1.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              Request a final working capital statement 3–5 business days before closing
              and compare it to the trailing average. If it&apos;s materially different, that&apos;s
              a price reduction conversation, not a &ldquo;let&apos;s trust the seller&rdquo; moment.
            </p>

            <div className="border border-zinc-200 p-6 mt-10 bg-amber-50/60">
              <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mb-3">
                Bottom Line
              </div>
              <p className="text-zinc-700 text-[15px] leading-relaxed">
                Working capital is not a footnote to the purchase price — it&apos;s a parallel
                negotiation with real dollar consequences. Buyers who ignore it until
                closing discover that the business they paid for isn&apos;t quite the one they
                received. Get a working capital peg built into your LOI, have it calculated
                by someone independent of the seller, and monitor the balance sheet
                through close.
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
                href: '/resources/ebitda-normalization-trades',
                title: 'EBITDA Normalization in Trades Business Acquisitions',
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
