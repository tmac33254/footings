import type { Metadata } from 'next'
import { ArrowRight, ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'EBITDA Normalization in Trades Business Acquisitions | Footings',
  description:
    'Owner compensation, personal vehicles, family payroll, one-time revenue — learn the most common EBITDA add-backs and adjustments buyers miss in HVAC, plumbing, and roofing acquisitions.',
  openGraph: {
    title: 'EBITDA Normalization in Trades Business Acquisitions',
    description:
      'The adjustments buyers miss — and why the seller\'s EBITDA number is almost always overstated.',
  },
}

export default function EbitdaNormalizationPage() {
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
            / EBITDA & Earnings
          </span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] animate-fade-up animate-delay-200">
            EBITDA Normalization in Trades Business Acquisitions
          </h1>
          <div className="mt-5 flex items-center gap-4 animate-fade-up animate-delay-300">
            <span className="text-sm text-zinc-500">10 min read</span>
            <span className="text-zinc-700">·</span>
            <div className="flex items-center gap-2">
              {['EBITDA', 'Normalization', 'Adjustments'].map((t) => (
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
              The seller&apos;s EBITDA number is almost never the right number. Not because sellers
              are lying — but because small business financials are built for tax minimization,
              not for sale. The process of correcting that is called normalization.
            </p>

            <p>
              Understanding normalization is one of the most important skills a trades business
              buyer can develop. It&apos;s the difference between paying $3.8 million for a business
              that earns what you think it earns — and paying $3.8 million for a business that
              earns significantly less.
            </p>

            <h2 className="text-xl font-bold text-zinc-100 tracking-tight mt-12 mb-4">
              What EBITDA normalization means
            </h2>

            <p>
              EBITDA stands for Earnings Before Interest, Taxes, Depreciation, and Amortization.
              It&apos;s a measure of operating profitability — the cash the business generates before
              financing and non-cash accounting items.
            </p>

            <p>
              &ldquo;Normalized&rdquo; EBITDA adjusts for items that distort the true picture:
              expenses that aren&apos;t really business costs, revenues that won&apos;t recur, and
              one-time events that inflate or deflate earnings in a given year.
            </p>

            <p>
              The goal is to arrive at a number that represents what the business will
              actually earn going forward under new ownership.
            </p>

            <h2 className="text-xl font-bold text-zinc-100 tracking-tight mt-12 mb-4">
              The most common adjustments in trades businesses
            </h2>

            <h3 className="text-base font-bold text-zinc-100 mt-8 mb-3">
              1. Owner compensation recast
            </h3>
            <p>
              This is the biggest adjustment in most trades acquisitions. The owner has been
              taking an artificially low (or high) salary relative to what it would actually
              cost to hire someone to do their job.
            </p>
            <p>
              If the owner is the primary technician and general manager of a $4M HVAC company,
              replacing their labor and management would cost $130,000–$180,000 in the market.
              If they&apos;ve been paying themselves $75,000, the difference reduces EBITDA. If
              they&apos;ve been paying themselves $300,000, the excess above market rate gets
              added back.
            </p>
            <div className="bg-zinc-900 border border-zinc-700 p-5 my-6">
              <div className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-3">
                Example
              </div>
              <div className="text-sm text-zinc-300 space-y-2">
                <div className="flex justify-between">
                  <span>Owner salary on P&L</span>
                  <span className="font-mono text-zinc-100">$60,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Market replacement cost</span>
                  <span className="font-mono text-zinc-100">$145,000</span>
                </div>
                <div className="flex justify-between border-t border-zinc-700/60 pt-2">
                  <span>Adjustment to EBITDA</span>
                  <span className="font-mono text-red-400">(85,000)</span>
                </div>
              </div>
            </div>

            <h3 className="text-base font-bold text-zinc-100 mt-8 mb-3">
              2. Personal expenses through the business
            </h3>
            <p>
              In owner-operated businesses, personal expenses often run through the P&amp;L. These
              are real deductions for tax purposes but they&apos;re not real business costs that a
              new owner would incur. Common examples:
            </p>
            <ul className="space-y-2 mt-4">
              {[
                'Personal vehicles (often listed as "fleet" or "company vehicles")',
                'Owner life, disability, and health insurance premiums',
                'Personal travel and entertainment',
                'Home office deductions',
                'Cell phones, equipment, subscriptions used personally',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-amber-500 text-xs mt-1.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              On a $3M revenue HVAC company, personal expenses run through the business might
              total $40,000–$80,000 annually. Buyers who miss this pay for it in the purchase
              price.
            </p>

            <h3 className="text-base font-bold text-zinc-100 mt-8 mb-3">
              3. Family members on payroll
            </h3>
            <p>
              Spouses, children, and relatives on the payroll — at wages above their economic
              contribution — are a common add-back. If the owner&apos;s spouse is listed as an
              &ldquo;office manager&rdquo; but primarily answers the phone a few hours per week,
              the excess compensation above market value adjusts EBITDA upward.
            </p>
            <p>
              This requires judgment. Not all family members on payroll are excess add-backs.
              A daughter who legitimately manages scheduling for 40 field technicians is
              providing real value at or below market. An analysis has to verify what the
              person actually does.
            </p>

            <h3 className="text-base font-bold text-zinc-100 mt-8 mb-3">
              4. One-time and non-recurring revenue
            </h3>
            <p>
              Revenue that won&apos;t repeat is not part of the business&apos;s earnings base. Common
              examples in trades businesses:
            </p>
            <ul className="space-y-2 mt-4">
              {[
                'Equipment sales or disposal (especially large HVAC system replacements)',
                'Insurance claim reimbursements',
                'Government grants or incentive programs (COVID funds, equipment rebates)',
                'Contract buyouts or termination payments',
                'Revenue from discontinued service lines',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-amber-500 text-xs mt-1.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              The distinction between one-time and recurring requires looking at multiple years
              of P&amp;Ls. A revenue line that appears in only one year, or that the owner
              can&apos;t convincingly explain as ongoing, should be excluded from normalized earnings.
            </p>

            <h3 className="text-base font-bold text-zinc-100 mt-8 mb-3">
              5. Non-recurring expenses
            </h3>
            <p>
              Adjustments can also work in reverse — eliminating one-time costs that depressed
              earnings in a given year. Examples: large legal settlements, one-time equipment
              repairs, startup costs for a new service line, or acquisition costs the business
              itself incurred. These are added back to show what normalized operations look like.
            </p>

            <h3 className="text-base font-bold text-zinc-100 mt-8 mb-3">
              6. Rent and related-party transactions
            </h3>
            <p>
              In many trades businesses, the owner also owns the building the company operates
              from. The lease rate may be above or below market, creating either an inflated
              expense (reduces EBITDA) or an understated one (inflates EBITDA). The analysis
              normalizes to a market-rate lease.
            </p>
            <p>
              If the buyer is purchasing the real estate alongside the business, this adjustment
              may not be material — but it&apos;s still worth identifying and documenting.
            </p>

            <h2 className="text-xl font-bold text-zinc-100 tracking-tight mt-12 mb-4">
              Why owner-operated trades businesses overstate earnings more than most
            </h2>

            <p>
              Trades businesses have several structural features that amplify normalization issues:
            </p>

            <p>
              <strong className="text-zinc-100">Cash transactions.</strong> HVAC, plumbing, and
              electrical businesses frequently deal in cash for small residential jobs. Cash
              transactions are easy to underreport to minimize taxes. Buyers should analyze
              bank deposits against P&amp;L revenue to check for consistency.
            </p>

            <p>
              <strong className="text-zinc-100">Owner is the business.</strong> The more
              owner-dependent the business is, the more likely the owner&apos;s personal costs and
              personal customer relationships are intertwined with the business. This complicates
              normalization because separating &ldquo;owner&rdquo; from &ldquo;business&rdquo; requires judgment calls.
            </p>

            <p>
              <strong className="text-zinc-100">Seasonal patterns.</strong> Heating and cooling
              businesses have significant revenue seasonality. Single-year EBITDA can look very
              different depending on which year&apos;s summer was hotter. A three-year average is
              often more representative than the most recent year — which sellers may choose
              specifically because it was exceptional.
            </p>

            <h2 className="text-xl font-bold text-zinc-100 tracking-tight mt-12 mb-4">
              How to read a normalization schedule
            </h2>

            <p>
              A normalization schedule is typically presented as a bridge from stated EBITDA
              to adjusted EBITDA. Each line item should include:
            </p>
            <ul className="space-y-2 mt-4">
              {[
                'The amount of the adjustment',
                'Which P&L line item it comes from',
                'The source or evidence for the adjustment',
                'Categorization (one-time vs. recurring, revenue vs. expense)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-amber-500 text-xs mt-1.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              When evaluating a seller-prepared add-back schedule (which often accompanies
              the CIM), the question to ask about every item is:{' '}
              <em className="text-zinc-200">
                is this an expense the new owner would actually incur?
              </em>{' '}
              If not, it&apos;s a legitimate add-back. If it would continue under new ownership,
              it&apos;s not.
            </p>

            <div className="border border-zinc-700/60 p-6 mt-10 bg-zinc-900/40">
              <div className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-3">
                Bottom Line
              </div>
              <p className="text-zinc-300 text-[15px] leading-relaxed">
                EBITDA normalization is not optional. In every trades acquisition, there are
                adjustments that change the earning picture — often materially. Buyers who
                rely on the seller&apos;s stated EBITDA are pricing the deal on a number that doesn&apos;t
                represent what they&apos;ll actually own. Get the normalization done before you
                agree to a price.
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
