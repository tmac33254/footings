import { CheckCircle, ArrowRight } from '@phosphor-icons/react/dist/ssr'
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
    <section id="deliverables" className="py-28 bg-zinc-50 border-t border-zinc-200 geo-lines relative overflow-hidden">

      {/* Decorative corner bracket */}
      <svg
        className="absolute right-0 bottom-0 pointer-events-none"
        aria-hidden="true"
        width="200"
        height="200"
        style={{ opacity: 0.06 }}
        viewBox="0 0 200 200"
      >
        <path d="M 100 200 L 200 200 L 200 100" fill="none" stroke="#F59E0B" strokeWidth="2" />
        <path d="M 140 200 L 200 200 L 200 140" fill="none" stroke="#F59E0B" strokeWidth="1" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: context + pricing */}
          <AnimateIn>
            <span className="font-mono text-[11px] text-amber-600 tracking-[0.2em] uppercase">
              / What You Get
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 leading-[1.05]">
              Quality of Earnings — the buy-side version.
            </h2>
            <p className="mt-6 text-zinc-600 leading-relaxed text-[15px]">
              Big deals get full QoE reports from accounting firms. Most trades acquisitions
              don&apos;t. You get a broker&apos;s CIM, a tax return, and a handshake. We fix
              that.
            </p>
            <p className="mt-4 text-zinc-600 leading-relaxed text-[15px]">
              Our report normalizes the financials, flags the risks, and tells you exactly what
              you should push back on — before you sign anything.
            </p>

            {/* Pricing card — real depth */}
            <div
              className="mt-10 border border-zinc-200 bg-white p-7 space-y-4"
              style={{ boxShadow: '0 4px 32px -4px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.03)' }}
            >
              {/* Amber accent line at top */}
              <div className="h-0.5 w-10 bg-amber-500 mb-6" />
              <div className="flex items-end gap-3">
                <span className="font-mono text-4xl font-bold text-zinc-900 tabular-nums tracking-tight">
                  $2,500–$4,000
                </span>
                <span className="text-zinc-400 text-sm pb-1">flat fee</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-700">
                <span className="font-mono text-lg font-bold text-amber-500">5–7</span>
                <span className="text-zinc-500">business days from receiving financials</span>
              </div>
              <div className="border-t border-zinc-100 pt-4 text-xs text-zinc-400">
                Final price depends on deal complexity and number of entities. Quote provided
                within 24 hours of your submission.
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#intake"
                style={{
                  transition: 'background-color 150ms ease, transform 160ms var(--ease-out)',
                }}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 active:scale-[0.97] text-zinc-950 font-semibold text-sm px-7 py-3.5"
              >
                Get a Quote
                <ArrowRight weight="bold" size={14} />
              </a>
            </div>
          </AnimateIn>

          {/* Right: deliverables list */}
          <AnimateIn delay={120}>
            <div>
              <div className="text-xs font-mono text-zinc-400 tracking-widest uppercase mb-6">
                Report Deliverables
              </div>
              <div className="space-y-0">
                {deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-4 border-t border-zinc-200 group"
                    style={{ transition: 'background-color 150ms ease' }}
                  >
                    <CheckCircle
                      size={16}
                      weight="fill"
                      className="text-amber-500 shrink-0 mt-0.5"
                    />
                    <span className="text-[15px] text-zinc-700 leading-snug group-hover:text-zinc-900 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
                <div className="border-t border-zinc-200" />
              </div>
            </div>

            <div className="mt-8 p-5 border border-zinc-200 bg-white">
              <p className="text-xs text-zinc-500 leading-relaxed">
                <span className="text-zinc-900 font-semibold">What we need from you:</span>{' '}
                Last 2–3 years of P&amp;Ls, most recent balance sheet, tax returns if available,
                and any seller-provided add-back schedules. Partial financials are fine to start —
                we&apos;ll tell you exactly what&apos;s missing.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
