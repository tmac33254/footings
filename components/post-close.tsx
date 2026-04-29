import { TrendUp, ChartLine, Wallet, UsersThree, SquaresFour } from '@phosphor-icons/react/dist/ssr'
import { AnimateIn } from './animate-in'

const inclusions = [
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

export default function PostClose() {
  return (
    <section id="post-close" className="py-24 border-t border-zinc-700/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">
          {/* Left */}
          <AnimateIn>
            <span className="font-mono text-[11px] text-amber-500 tracking-[0.2em] uppercase">
              / The Post-Close Layer
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
              Fractional CFO for the first 12 months — and beyond.
            </h2>
            <p className="mt-5 text-zinc-300 leading-relaxed">
              Closing is the easy part. Running a trades business you didn&apos;t build is
              harder. Most first-time buyers figure out their books are wrong six months
              in, when they&apos;ve already made expensive decisions on bad data.
            </p>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              We stay on as your fractional CFO — handling the month-end close, building
              the dashboards, and making sure every financial decision you make is built on
              numbers that are actually right.
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

            <div className="mt-8">
              <a
                href="#intake"
                style={{
                  transition:
                    'border-color 150ms ease, color 150ms ease, transform 160ms cubic-bezier(0.23, 1, 0.32, 1)',
                }}
                className="inline-flex items-center gap-2 border border-zinc-600 hover:border-amber-500/60 hover:text-amber-400 text-zinc-200 font-medium text-sm px-6 py-3 active:scale-[0.97]"
              >
                Ask about the retainer
              </a>
            </div>
          </AnimateIn>

          {/* Right: service list */}
          <AnimateIn delay={120}>
            <div className="space-y-0">
              {inclusions.map((item, i) => {
                const Icon = item.icon
                return (
                  <AnimateIn key={i} delay={i * 60}>
                    <div className="flex items-start gap-5 py-5 border-t border-zinc-700/60">
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
                  </AnimateIn>
                )
              })}
              <div className="border-t border-zinc-700/60" />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
