import { AnimateIn } from './animate-in'

const points = [
  {
    label: 'Trades operator background',
    body: "We've managed service routes, dispatched technicians, chased receivables, and dealt with the seasonal cash flow grind. The financial red flags in these businesses aren't theoretical to us.",
  },
  {
    label: 'Accounting and finance degree — not a self-taught bookkeeper',
    body: 'The analysis is grounded in real financial accounting. We know how to read a balance sheet, recast earnings, and identify the adjustments that actually change your purchase price.',
  },
  {
    label: 'Fixed pricing, no scope creep',
    body: "You get a quote before we start. The price doesn't move unless the deal complexity is fundamentally different from what you described. No hourly billing. No surprises.",
  },
  {
    label: '5–7 day turnaround',
    body: "Deals move fast. We do too. You'll have a complete report before your exclusivity window closes — not two weeks after you needed it.",
  },
]

export default function WhyUs() {
  return (
    <section className="py-24 bg-zinc-900/40 border-t border-zinc-700/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn>
          <span className="font-mono text-[11px] text-amber-500 tracking-[0.2em] uppercase">
            / Why Footings
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            No &ldquo;decades of experience.&rdquo; No vague guarantees.
          </h2>
          <p className="mt-4 text-zinc-300 leading-relaxed max-w-xl">
            Here&apos;s what&apos;s actually true, and why it matters for your deal.
          </p>
        </AnimateIn>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {points.map((p, i) => (
            <AnimateIn key={i} delay={i * 80}>
              <div className="py-8 border-t border-zinc-700/60">
                <div className="text-sm font-semibold text-zinc-100 leading-snug">
                  {p.label}
                </div>
                <p className="mt-3 text-[15px] text-zinc-300 leading-relaxed">{p.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Trust bar */}
        <AnimateIn delay={200}>
          <div className="mt-12 pt-8 border-t border-zinc-700/60 flex flex-wrap gap-8 md:gap-12">
            {[
              { value: '$2,500', label: 'Starting price' },
              { value: '5–7 days', label: 'Report turnaround' },
              { value: '100%', label: 'Buy-side only — we never work for sellers' },
              { value: 'Fixed', label: 'Pricing, no hourly surprises' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-mono text-xl font-semibold text-zinc-100 tabular-nums">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
