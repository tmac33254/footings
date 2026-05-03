import { AnimateIn } from './animate-in'

const points = [
  {
    number: '01',
    label: 'Trades operator background',
    body: "We've managed service routes, dispatched technicians, chased receivables, and dealt with the seasonal cash flow grind. The financial red flags in these businesses aren't theoretical to us.",
  },
  {
    number: '02',
    label: 'Accounting and finance degree — not a self-taught bookkeeper',
    body: 'The analysis is grounded in real financial accounting. We know how to read a balance sheet, recast earnings, and identify the adjustments that actually change your purchase price.',
  },
  {
    number: '03',
    label: 'Fixed pricing, no scope creep',
    body: "You get a quote before we start. The price doesn't move unless the deal complexity is fundamentally different from what you described. No hourly billing. No surprises.",
  },
  {
    number: '04',
    label: '5–7 day turnaround',
    body: "Deals move fast. We do too. You'll have a complete report before your exclusivity window closes — not two weeks after you needed it.",
  },
]

export default function WhyUs() {
  return (
    <section className="py-28 border-t border-zinc-200 relative overflow-hidden">

      {/* Decorative large background text */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 font-mono font-bold leading-none pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
        style={{
          fontSize: 'clamp(12rem, 18vw, 18rem)',
          color: 'rgba(228, 228, 231, 0.5)',
          letterSpacing: '-0.06em',
        }}
      >
        WHY
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn>
          <span className="font-mono text-[11px] text-amber-600 tracking-[0.2em] uppercase">
            / Why Footings
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter max-w-2xl text-zinc-900 leading-[1.05]">
            No &ldquo;decades of experience.&rdquo; No vague guarantees.
          </h2>
          <p className="mt-4 text-zinc-500 leading-relaxed max-w-xl text-[15px]">
            Here&apos;s what&apos;s actually true, and why it matters for your deal.
          </p>
        </AnimateIn>

        <div className="mt-16 space-y-0">
          {points.map((p, i) => (
            <AnimateIn key={i} delay={i * 60}>
              <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-12 py-10 border-t border-zinc-200 group">
                <div className="font-mono text-[11px] text-zinc-300 tracking-widest pt-0.5">
                  {p.number}
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900 leading-snug tracking-tight group-hover:text-amber-600 transition-colors duration-150">
                    {p.label}
                  </h3>
                  <p className="mt-3 text-[15px] text-zinc-500 leading-relaxed max-w-2xl">
                    {p.body}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
          <div className="border-t border-zinc-200" />
        </div>
      </div>
    </section>
  )
}
