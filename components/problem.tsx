import { AnimateIn } from './animate-in'

const problems = [
  {
    number: '01',
    title: 'Inflated EBITDA',
    description:
      "The seller's accountant runs personal vehicles, family payroll, and owner life insurance through the P&L. Owner compensation is understated by design. One-time revenues get presented as recurring. You don't catch it until you normalize the books — and by then, you've already agreed to a price built on fiction.",
    stat: '$235K',
    statLabel: 'avg. overstatement on a $1M EBITDA deal at 4× multiple',
  },
  {
    number: '02',
    title: 'Hidden Working Capital Traps',
    description:
      "The business needs cash to operate every single day — receivables, inventory, prepaid expenses, deposits. Sellers time the close to drain the account. Without a working capital peg negotiated into the LOI, you fund the gap yourself starting day one. Most buyers find out at the closing table.",
    stat: '$127K',
    statLabel: 'median working capital deficiency discovered post-LOI in SMB trades deals',
  },
  {
    number: '03',
    title: 'Owner-Dependent Revenue',
    description:
      "The owner shakes every hand, makes every service call, and holds every key account personally. When he walks, 30–40% of revenue walks with him. This doesn't show up in the financials. It shows up as churn — six months after you close, when it's too late to renegotiate anything.",
    stat: '38%',
    statLabel: 'average revenue tied to the seller personally in owner-operator trades businesses',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="section-dark geo-lines-dark py-28 relative overflow-hidden">

      {/* Decorative large background text */}
      <div
        className="absolute right-6 top-1/2 -translate-y-1/2 font-mono font-bold leading-none pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
        style={{
          fontSize: 'clamp(14rem, 22vw, 22rem)',
          color: 'rgba(245, 158, 11, 0.04)',
          letterSpacing: '-0.05em',
        }}
      >
        QoE
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn>
          <span className="font-mono text-[11px] text-amber-500 tracking-[0.2em] uppercase">
            / The Problem
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter max-w-2xl text-white leading-[1.05]">
            Three ways buyers overpay for trades businesses.
          </h2>
          <p className="mt-4 text-zinc-400 max-w-lg leading-relaxed text-[15px]">
            Every one of these is preventable. None of them show up in the CIM.
          </p>
        </AnimateIn>

        <div className="mt-16 space-y-0">
          {problems.map((p, i) => (
            <AnimateIn key={p.number} delay={i * 80}>
              <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-16 py-12 border-t border-zinc-800 items-start">

                {/* Left: dominant stat */}
                <div>
                  <div
                    className="font-mono font-bold text-amber-400 tabular-nums leading-none tracking-tight"
                    style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)' }}
                  >
                    {p.stat}
                  </div>
                  <div className="mt-3 text-xs text-zinc-600 leading-snug max-w-[200px]">
                    {p.statLabel}
                  </div>
                </div>

                {/* Right: number + title + description */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[11px] text-zinc-600 tracking-widest">
                      {p.number}
                    </span>
                    <div className="h-px w-6 bg-zinc-700" />
                    <h3 className="text-xl font-semibold text-white tracking-tight">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-[15px] max-w-2xl">
                    {p.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
          <div className="border-t border-zinc-800" />
        </div>
      </div>
    </section>
  )
}
