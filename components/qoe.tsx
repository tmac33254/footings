import { CheckCircle } from '@phosphor-icons/react/dist/ssr'
import { AnimateIn } from './animate-in'

const deliverables = [
  'Normalized EBITDA reconciliation with full add-back schedule',
  'Seller Discretionary Earnings (SDE) recast',
  'Working capital analysis and recommended peg',
  'Customer concentration and revenue cohort review',
  'Red flag memo with deal-specific risk factors',
  'Recommended renegotiation points with dollar values attached',
]

export default function Qoe() {
  return (
    <section
      id="deliverables"
      className="py-24 bg-zinc-900/40 border-t border-zinc-700/60"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: context + pricing */}
          <AnimateIn>
            <span className="font-mono text-[11px] text-amber-500 tracking-[0.2em] uppercase">
              / What You Get
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
              Quality of Earnings — the buy-side version.
            </h2>
            <p className="mt-5 text-zinc-300 leading-relaxed">
              Big deals get full QoE reports from accounting firms. Most trades acquisitions
              don&apos;t. You get a broker&apos;s CIM, a tax return, and a handshake. We fix
              that.
            </p>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              Our report normalizes the financials, flags the risks, and tells you exactly what
              you should push back on — before you sign anything.
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
                Final price depends on deal complexity and number of entities. Quote provided
                within 24 hours of your submission.
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#intake"
                style={{
                  transition:
                    'background-color 150ms ease, transform 160ms cubic-bezier(0.23, 1, 0.32, 1)',
                }}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 active:scale-[0.97] text-zinc-950 font-semibold text-sm px-6 py-3"
              >
                Get a Quote
              </a>
            </div>
          </AnimateIn>

          {/* Right: deliverables list */}
          <AnimateIn delay={120}>
            <div className="space-y-0">
              <div className="text-xs font-mono text-zinc-400 tracking-widest uppercase mb-6">
                Report Deliverables
              </div>
              {deliverables.map((item, i) => (
                <AnimateIn key={i} delay={i * 30}>
                  <div className="flex items-start gap-4 py-4 border-t border-zinc-700/60">
                    <CheckCircle
                      size={16}
                      weight="fill"
                      className="text-amber-500 shrink-0 mt-0.5"
                    />
                    <span className="text-[15px] text-zinc-200 leading-snug">{item}</span>
                  </div>
                </AnimateIn>
              ))}
              <div className="border-t border-zinc-700/60" />
            </div>

            <div className="mt-8 p-4 border border-zinc-700/60 bg-zinc-900/50">
              <p className="text-xs text-zinc-400 leading-relaxed">
                <span className="text-zinc-200 font-medium">What we need from you:</span> Last
                2–3 years of P&amp;Ls, most recent balance sheet, tax returns if available, and
                any seller-provided add-back schedules. Partial financials are fine to start —
                we&apos;ll tell you exactly what&apos;s missing.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
