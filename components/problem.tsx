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
    <section id="problem" className="py-24 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn>
          <span className="font-mono text-[11px] text-amber-600 tracking-[0.2em] uppercase">
            / The Problem
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight max-w-2xl text-zinc-900">
            Three ways buyers overpay for trades businesses.
          </h2>
          <p className="mt-3 text-zinc-500 max-w-lg leading-relaxed text-[15px]">
            Every one of these is preventable. None of them show up in the CIM.
          </p>
        </AnimateIn>

        <div className="mt-16 space-y-0">
          {problems.map((p, i) => (
            <AnimateIn key={p.number} delay={i * 80}>
              <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 md:gap-16 py-12 border-t border-zinc-200 items-start">

                {/* Left: dominant stat */}
                <div>
                  <div
                    className="font-mono font-semibold text-amber-500 tabular-nums leading-none tracking-tight"
                    style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}
                  >
                    {p.stat}
                  </div>
                  <div className="mt-3 text-xs text-zinc-400 leading-snug max-w-[200px]">
                    {p.statLabel}
                  </div>
                </div>

                {/* Right: number + title + description */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[11px] text-zinc-400 tracking-widest">
                      {p.number}
                    </span>
                    <div className="h-px w-6 bg-zinc-300" />
                    <h3 className="text-xl font-semibold text-zinc-900 tracking-tight">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-zinc-600 leading-relaxed text-[15px] max-w-2xl">
                    {p.description}
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
