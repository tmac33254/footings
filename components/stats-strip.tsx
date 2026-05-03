import { AnimateIn } from './animate-in'

const stats = [
  { value: '$2,500', label: 'Starting fee', sub: 'flat, no hourly billing' },
  { value: '5–7', label: 'Business days', sub: 'from financials to report' },
  { value: '100%', label: 'Buy-side only', sub: 'we never work for sellers' },
  { value: 'Fixed', label: 'Pricing', sub: 'quote before we start' },
]

export default function StatsStrip() {
  return (
    <section className="section-amber py-16 relative overflow-hidden">
      {/* Subtle dot texture on amber */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <AnimateIn key={s.label} delay={i * 60}>
              <div
                className={`px-8 py-5 ${i !== 0 ? 'border-l border-amber-600/40' : ''} ${i >= 2 ? 'border-t border-amber-600/40 md:border-t-0' : ''} first:pl-0`}
              >
                <div
                  className="font-mono font-bold text-zinc-950 tabular-nums leading-none tracking-tight"
                  style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}
                >
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-semibold text-zinc-900">{s.label}</div>
                <div className="mt-0.5 text-xs text-amber-900/70">{s.sub}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
