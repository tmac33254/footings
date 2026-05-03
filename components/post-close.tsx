import { TrendUp, ChartLine, Wallet, UsersThree, SquaresFour, ArrowRight } from '@phosphor-icons/react/dist/ssr'
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
    <section id="post-close" className="py-28 border-t border-zinc-200 bg-zinc-50 geo-lines relative overflow-hidden">

      {/* Decorative corner bracket */}
      <svg
        className="absolute left-0 top-0 pointer-events-none"
        aria-hidden="true"
        width="160"
        height="160"
        style={{ opacity: 0.07 }}
        viewBox="0 0 160 160"
      >
        <path d="M 80 0 L 0 0 L 0 80" fill="none" stroke="#F59E0B" strokeWidth="2" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">

          {/* Left */}
          <AnimateIn>
            <span className="font-mono text-[11px] text-amber-600 tracking-[0.2em] uppercase">
              / The Post-Close Layer
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 leading-[1.05]">
              Fractional CFO for the first 12 months — and beyond.
            </h2>
            <p className="mt-6 text-zinc-600 leading-relaxed text-[15px]">
              Closing is the easy part. Running a trades business you didn&apos;t build is
              harder. Most first-time buyers figure out their books are wrong six months
              in, when they&apos;ve already made expensive decisions on bad data.
            </p>
            <p className="mt-4 text-zinc-600 leading-relaxed text-[15px]">
              We stay on as your fractional CFO — handling the month-end close, building
              the dashboards, and making sure every financial decision you make is built on
              numbers that are actually right.
            </p>

            {/* Pricing card */}
            <div
              className="mt-10 border border-zinc-200 bg-white p-7 space-y-3"
              style={{ boxShadow: '0 4px 32px -4px rgba(0,0,0,0.06)' }}
            >
              <div className="h-0.5 w-10 bg-amber-500 mb-6" />
              <div className="flex items-end gap-3">
                <span className="font-mono text-4xl font-bold text-zinc-900 tabular-nums tracking-tight">
                  $1,500–$2,500
                </span>
                <span className="text-zinc-400 text-sm pb-1">/ month</span>
              </div>
              <p className="text-xs text-zinc-400">
                Scoped to business complexity. Month-to-month after the first 90 days.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#intake"
                style={{
                  transition: 'border-color 150ms ease, color 150ms ease, transform 160ms var(--ease-out)',
                }}
                className="inline-flex items-center gap-2 border border-zinc-300 hover:border-amber-500 hover:text-amber-600 text-zinc-600 font-medium text-sm px-6 py-3 active:scale-[0.97]"
              >
                Ask about the retainer
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100" />
              </a>
            </div>
          </AnimateIn>

          {/* Right: service list */}
          <AnimateIn delay={120}>
            <div className="space-y-0">
              {inclusions.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="flex items-start gap-5 py-5 border-t border-zinc-200 group"
                  >
                    <div
                      className="shrink-0 w-10 h-10 flex items-center justify-center border border-zinc-200 bg-white text-amber-500"
                      style={{
                        transition: 'border-color 150ms ease, background-color 150ms ease, transform 200ms var(--ease-out)',
                      }}
                    >
                      <Icon size={17} weight="duotone" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-zinc-900 tracking-tight">{item.label}</div>
                      <div className="mt-1 text-sm text-zinc-500 leading-snug">
                        {item.description}
                      </div>
                    </div>
                  </div>
                )
              })}
              <div className="border-t border-zinc-200" />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
