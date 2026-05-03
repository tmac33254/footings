import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

function QoeDocPreview() {
  return (
    <div
      className="font-mono text-xs border border-zinc-200 bg-white w-full max-w-[420px]"
      style={{
        transform: 'rotate(1.5deg)',
        boxShadow: '0 40px 100px -15px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.04)',
      }}
    >
      {/* Document header bar */}
      <div className="bg-zinc-900 px-4 py-2.5 flex items-center justify-between">
        <span className="text-amber-400 tracking-[0.15em] uppercase text-[10px] font-semibold">
          FOOTINGS
        </span>
        <span className="text-zinc-400 text-[10px]">QoE Report — DRAFT</span>
      </div>

      <div className="p-5 space-y-4">
        {/* Deal info */}
        <div className="space-y-1.5 text-[11px]">
          <div className="flex justify-between gap-4">
            <span className="text-zinc-400">Target</span>
            <span className="text-zinc-900 text-right font-medium">Apex HVAC Services, LLC</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-zinc-400">Asking Price</span>
            <span className="text-zinc-900 font-medium">$3,800,000</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-zinc-400">Industry</span>
            <span className="text-zinc-900 font-medium">HVAC / Mechanical</span>
          </div>
        </div>

        <div className="border-t border-zinc-100" />

        {/* EBITDA */}
        <div>
          <div className="text-[9px] uppercase tracking-[0.18em] text-zinc-400 mb-3">
            EBITDA Normalization
          </div>
          <div className="space-y-1.5 text-[11px]">
            <div className="flex justify-between gap-4">
              <span className="text-zinc-600">Seller-Stated EBITDA</span>
              <span className="text-zinc-900 font-medium">$847,293</span>
            </div>
            {[
              ['Owner comp add-back', '(124,500)'],
              ['Personal vehicle', '(18,200)'],
              ['One-time equipment', '(43,100)'],
              ['Non-recurring revenue', '(49,300)'],
            ].map(([label, val]) => (
              <div key={label} className="flex justify-between gap-4">
                <span className="text-zinc-400 pl-2">{label}</span>
                <span className="text-red-500">{val}</span>
              </div>
            ))}
            <div className="border-t border-zinc-100 my-1" />
            <div className="flex justify-between gap-4 font-semibold">
              <span className="text-zinc-900">Adjusted EBITDA</span>
              <span className="text-amber-600">$612,193</span>
            </div>
            <div className="flex justify-between gap-4 text-[10px]">
              <span className="text-zinc-400">Implied overstatement</span>
              <span className="text-red-500 font-medium">−27.7%</span>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-100" />

        {/* Red flags */}
        <div>
          <div className="text-[9px] uppercase tracking-[0.18em] text-amber-600 mb-2.5 font-semibold">
            Red Flags — 3 Identified
          </div>
          <div className="space-y-1.5 text-[11px] text-zinc-600">
            {[
              'Customer concentration: 34% (single client)',
              'Undisclosed accounts payable: $87,400',
              '6 accounts tied to seller personally',
            ].map((flag) => (
              <div key={flag} className="flex items-start gap-2">
                <span className="text-amber-500 font-bold shrink-0">!</span>
                <span>{flag}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-3">
          <div className="flex justify-between text-[11px]">
            <span className="text-zinc-400">Recommendation</span>
            <span className="text-amber-600 font-semibold">Renegotiate</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero-bg min-h-[100dvh] flex items-center relative overflow-hidden">

      {/* Architectural grid overlay — top-right quadrant */}
      <svg
        className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
        aria-hidden="true"
        style={{ opacity: 0.045 }}
      >
        <defs>
          <pattern id="hero-grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="#18181B" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* Diagonal accent line — lower right */}
      <svg
        className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none"
        aria-hidden="true"
        style={{ opacity: 0.06 }}
        viewBox="0 0 320 320"
      >
        <line x1="320" y1="0" x2="0" y2="320" stroke="#18181B" strokeWidth="1" />
        <line x1="320" y1="40" x2="40" y2="320" stroke="#18181B" strokeWidth="0.5" />
        <line x1="320" y1="80" x2="80" y2="320" stroke="#18181B" strokeWidth="0.5" />
      </svg>

      {/* Large decorative bracket — top left background */}
      <svg
        className="absolute left-0 top-24 pointer-events-none"
        aria-hidden="true"
        width="120"
        height="160"
        style={{ opacity: 0.07 }}
        viewBox="0 0 120 160"
      >
        <path d="M 60 10 L 20 10 L 20 150 L 60 150" fill="none" stroke="#F59E0B" strokeWidth="2" />
      </svg>

      {/* Fade out to page bg at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FAFAF8] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-center">

          {/* Left: copy */}
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] text-amber-600 tracking-[0.2em] uppercase animate-fade-up">
              / Financial Due Diligence
            </span>

            <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.0] text-balance animate-fade-up animate-delay-100 text-zinc-900">
              Don&apos;t close until you know what you&apos;re{' '}
              <em className="not-italic text-amber-500">actually buying.</em>
            </h1>

            <p className="mt-7 text-[17px] text-zinc-500 leading-relaxed max-w-xl animate-fade-up animate-delay-200">
              We catch inflated EBITDA, hidden liabilities, and owner-dependent revenue before
              they become your problem — with a full Quality of Earnings report in 5–7 business
              days.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-up animate-delay-300">
              <a
                href="#intake"
                style={{
                  transition: 'background-color 150ms ease, transform 160ms var(--ease-out)',
                }}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 active:scale-[0.97] text-zinc-950 font-semibold text-sm px-7 py-3.5"
              >
                Get My Quote
                <ArrowRight weight="bold" size={15} />
              </a>
              <a
                href="/sample-report"
                style={{ transition: 'color 150ms ease' }}
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-900 font-medium text-sm group"
              >
                See a Sample Report
                <ArrowRight
                  size={15}
                  style={{ transition: 'transform 150ms var(--ease-out)' }}
                  className="group-hover:translate-x-0.5"
                />
              </a>
            </div>

            {/* Trust badge */}
            <div className="mt-9 flex items-center gap-3 animate-fade-up animate-delay-400">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2 border border-zinc-200 bg-white shadow-sm">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"
                  style={{ animation: 'pulse-dot 2.5s ease-in-out infinite' }}
                />
                <span className="text-xs text-zinc-500 font-mono">
                  Currently quoting — 24hr response guaranteed
                </span>
              </div>
            </div>

            <p className="mt-5 text-xs text-zinc-400 leading-relaxed animate-fade-up animate-delay-400">
              Built by an accounting and finance grad who&apos;s run a service business — not a
              Big 4 robot.
            </p>
          </div>

          {/* Right: QoE doc preview — desktop */}
          <div
            className="justify-end animate-fade-up animate-delay-200 hidden lg:flex"
            aria-hidden="true"
          >
            <QoeDocPreview />
          </div>
        </div>

        {/* Mobile card */}
        <div className="lg:hidden mt-12 flex justify-center animate-fade-up animate-delay-300" aria-hidden="true">
          <QoeDocPreview />
        </div>
      </div>
    </section>
  )
}
