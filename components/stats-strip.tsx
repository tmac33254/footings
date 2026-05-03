import { AnimateIn } from './animate-in'

const stats = [
  { value: '$2,500', label: 'Starting fee', sub: 'flat, no hourly billing' },
  { value: '5–7', label: 'Business days', sub: 'from financials to report' },
  { value: '100%', label: 'Buy-side only', sub: 'we never work for sellers' },
  { value: 'Fixed', label: 'Pricing', sub: 'quote before we start' },
]

export default function StatsStrip() {
  return (
    <section className="py-20 border-y border-zinc-200 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <AnimateIn key={s.label} delay={i * 60}>
              <div
                className={`px-8 py-6 ${i !== 0 ? 'border-l border-zinc-200' : ''} ${i >= 2 ? 'border-t border-zinc-200 md:border-t-0' : ''} first:pl-0`}
              >
                <div
                  className="font-mono font-semibold text-amber-500 tabular-nums leading-none tracking-tight"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                >
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-semibold text-zinc-800">{s.label}</div>
                <div className="mt-0.5 text-xs text-zinc-400">{s.sub}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
