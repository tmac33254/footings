import type { Metadata } from 'next'
import { CheckCircle, ArrowRight, TrendUp, ChartLine, Wallet, UsersThree, SquaresFour } from '@phosphor-icons/react/dist/ssr'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import IntakeForm from '@/components/intake-form'
import { AnimateIn } from '@/components/animate-in'

export const metadata: Metadata = {
  title: 'Services — Quality of Earnings & Fractional CFO | Footings',
  description:
    'Fixed-fee Quality of Earnings reports and fractional CFO services for buyers of HVAC, plumbing, roofing, and other trades businesses. 5–7 day turnaround. Buy-side only.',
  openGraph: {
    title: 'Services — Footings Financial',
    description:
      'QoE reports from $2,500. Fractional CFO from $1,500/month. Built for buyers of trades businesses.',
  },
}

const qoeDeliverables = [
  'Normalized EBITDA reconciliation with full add-back schedule',
  'Seller Discretionary Earnings (SDE) recast',
  'Working capital analysis and recommended peg',
  'Customer concentration and revenue cohort review',
  'Red flag memo with deal-specific risk factors',
  'Recommended renegotiation points with dollar values attached',
]

const qoeNotIncluded = [
  'Legal review or contract drafting',
  'Third-party vendor verification',
  'Environmental or physical inspections',
  'Valuation opinion or fairness opinion',
]

const cfoInclusions = [
  {
    icon: TrendUp,
    label: 'Monthly close',
    description: 'Accurate books delivered by the 10th of every month. No surprises.',
  },
  {
    icon: ChartLine,
    label: 'Job costing',
    description: 'Know which jobs make money and which ones you should stop quoting.',
  },
  {
    icon: Wallet,
    label: 'Cash flow forecasting',
    description: '13-week rolling cash forecast so you never get caught short.',
  },
  {
    icon: UsersThree,
    label: 'Owner distribution planning',
    description: 'Take what the business can actually afford. Not a dollar more.',
  },
  {
    icon: SquaresFour,
    label: 'KPI dashboard',
    description: 'Revenue per tech, gross margin by service line, close rate, utilization.',
  },
]

const faqs = [
  {
    q: 'Do I need to be under LOI to use you?',
    a: "Not necessarily. If you're in active diligence or have sent an LOI, that's the ideal time. We can also work with buyers who are evaluating a deal pre-LOI if the seller is willing to share preliminary financials.",
  },
  {
    q: 'What financials do you need to start?',
    a: "Ideally: last 2–3 years of P&Ls, most recent balance sheet, tax returns, and any seller-provided add-back schedules. Partial financials are fine — we'll tell you exactly what's missing and what we can work with.",
  },
  {
    q: 'How is the price determined?',
    a: 'The quote depends on deal complexity — number of entities, years of history, and whether the financials are clean or messy. The range is $2,500–$4,000. Most straightforward single-entity deals come in at the lower end.',
  },
  {
    q: 'What if I need it faster than 5–7 days?',
    a: "Contact us when you submit. If we have capacity, we can discuss rush timelines. Be upfront about your exclusivity window.",
  },
  {
    q: 'Do you work with sellers?',
    a: 'No. We are 100% buy-side. We never prepare reports for sellers, broker packages, or listing purposes. This keeps our analysis fully independent.',
  },
]

export default function ServicesPage() {
  return (
    <main>
      <Nav />

      {/* Page hero */}
      <section className="blueprint-grid pt-24 pb-16 border-b border-zinc-700/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-fade-up animate-delay-100">
            <span className="font-mono text-[11px] text-amber-500 tracking-[0.2em] uppercase">
              / Services
            </span>
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] animate-fade-up animate-delay-200 max-w-2xl">
            Two services. One focus:{' '}
            <span className="text-amber-500">protecting buyers.</span>
          </h1>
          <p className="mt-5 text-zinc-300 text-lg leading-relaxed max-w-xl animate-fade-up animate-delay-300">
            We do pre-close due diligence and post-close financial management. That&apos;s it.
            No tax prep. No bookkeeping for businesses we didn&apos;t vet. No seller work.
          </p>
        </div>
      </section>

      {/* QoE Service */}
      <section id="qoe" className="py-24 border-b border-zinc-700/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">
            <AnimateIn>
              <span className="font-mono text-[11px] text-amber-500 tracking-[0.2em] uppercase">
                / Service 01
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
                Quality of Earnings Report
              </h2>
              <p className="mt-5 text-zinc-300 leading-relaxed">
                A buy-side QoE is the same type of analysis institutional buyers pay $25,000–$60,000
                for at large accounting firms. We do it for small trades deals at a price that
                actually makes sense for the acquisition size.
              </p>
              <p className="mt-4 text-zinc-300 leading-relaxed">
                The report normalizes the financials, flags what to push back on, and
                hands you a clear picture of what you&apos;re actually buying — before you sign
                anything.
              </p>

              <div className="mt-10 border border-zinc-700 p-6 space-y-4">
                <div className="flex items-end gap-3">
                  <span className="font-mono text-3xl font-semibold text-zinc-100 tabular-nums">
                    $2,500–$4,000
                  </span>
                  <span className="text-zinc-400 text-sm pb-0.5">flat fee</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <span className="font-mono text-amber-500">5–7</span>
                  <span>business days from receiving financials</span>
                </div>
                <div className="border-t border-zinc-700/60 pt-4 text-xs text-zinc-500">
                  Price depends on deal complexity and number of entities. Quote within 24 hours
                  of your intake submission.
                </div>
              </div>

              <a
                href="#intake"
                style={{
                  transition:
                    'background-color 150ms ease, transform 160ms cubic-bezier(0.23, 1, 0.32, 1)',
                }}
                className="mt-8 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 active:scale-[0.97] text-zinc-950 font-semibold text-sm px-6 py-3"
              >
                Get a Quote
                <ArrowRight weight="bold" size={15} />
              </a>
            </AnimateIn>

            <div className="space-y-8">
              <AnimateIn delay={100}>
                <div>
                  <div className="text-xs font-mono text-zinc-400 tracking-widest uppercase mb-5">
                    What&apos;s Included
                  </div>
                  <div className="space-y-0">
                    {qoeDeliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 py-3.5 border-t border-zinc-700/60">
                        <CheckCircle
                          size={15}
                          weight="fill"
                          className="text-amber-500 shrink-0 mt-0.5"
                        />
                        <span className="text-[15px] text-zinc-200 leading-snug">{item}</span>
                      </div>
                    ))}
                    <div className="border-t border-zinc-700/60" />
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={160}>
                <div>
                  <div className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-5">
                    Not Included
                  </div>
                  <div className="space-y-2">
                    {qoeNotIncluded.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-zinc-600 text-xs mt-1">—</span>
                        <span className="text-[14px] text-zinc-500 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={200}>
                <div className="p-4 border border-zinc-700/60 bg-zinc-900/50">
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    <span className="text-zinc-200 font-medium">What we need from you:</span> Last
                    2–3 years of P&amp;Ls, most recent balance sheet, tax returns if available, and
                    any seller-provided add-back schedules. Partial financials are fine to start.
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Fractional CFO Service */}
      <section id="fractional-cfo" className="py-24 border-b border-zinc-700/60 bg-zinc-900/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">
            <AnimateIn>
              <span className="font-mono text-[11px] text-amber-500 tracking-[0.2em] uppercase">
                / Service 02
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
                Fractional CFO — Post-Close
              </h2>
              <p className="mt-5 text-zinc-300 leading-relaxed">
                Closing is the easy part. Running a trades business you didn&apos;t build is
                harder. Most first-time buyers figure out their books are wrong six months in,
                when they&apos;ve already made expensive decisions on bad data.
              </p>
              <p className="mt-4 text-zinc-300 leading-relaxed">
                We stay on as your fractional CFO — handling the month-end close, building the
                dashboards, and making sure every financial decision you make is built on numbers
                that are actually right.
              </p>

              <div className="mt-10 border border-zinc-700 p-6 space-y-3">
                <div className="flex items-end gap-3">
                  <span className="font-mono text-3xl font-semibold text-zinc-100 tabular-nums">
                    $1,500–$2,500
                  </span>
                  <span className="text-zinc-400 text-sm pb-0.5">/ month</span>
                </div>
                <p className="text-xs text-zinc-500">
                  Scoped to business complexity. Month-to-month after the first 90 days.
                </p>
              </div>

              <a
                href="#intake"
                style={{
                  transition:
                    'border-color 150ms ease, color 150ms ease, transform 160ms cubic-bezier(0.23, 1, 0.32, 1)',
                }}
                className="mt-8 inline-flex items-center gap-2 border border-zinc-600 hover:border-amber-500/60 hover:text-amber-400 text-zinc-200 font-medium text-sm px-6 py-3 active:scale-[0.97]"
              >
                Ask about the retainer
              </a>
            </AnimateIn>

            <AnimateIn delay={120}>
              <div className="text-xs font-mono text-zinc-400 tracking-widest uppercase mb-5">
                What&apos;s Included
              </div>
              <div className="space-y-0">
                {cfoInclusions.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex items-start gap-5 py-5 border-t border-zinc-700/60">
                      <div className="shrink-0 w-9 h-9 flex items-center justify-center border border-zinc-700 text-amber-500">
                        <Icon size={16} weight="duotone" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-zinc-100">{item.label}</div>
                        <div className="mt-1 text-sm text-zinc-400 leading-snug">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  )
                })}
                <div className="border-t border-zinc-700/60" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Services FAQ */}
      <section className="py-24 border-b border-zinc-700/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
            <AnimateIn>
              <span className="font-mono text-[11px] text-amber-500 tracking-[0.2em] uppercase">
                / Common Questions
              </span>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight">
                Before you reach out.
              </h2>
            </AnimateIn>

            <AnimateIn delay={80}>
              <div className="space-y-0">
                {faqs.map((item, i) => (
                  <div key={i} className="py-6 border-t border-zinc-700/60">
                    <div className="text-base font-semibold text-zinc-100 mb-3">{item.q}</div>
                    <p className="text-[15px] text-zinc-300 leading-relaxed">{item.a}</p>
                  </div>
                ))}
                <div className="border-t border-zinc-700/60" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <IntakeForm />
      <Footer />
    </main>
  )
}
