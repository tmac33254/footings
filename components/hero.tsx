import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

function QoeDocPreview() {
  return (
    <div className="font-mono text-xs border border-zinc-200 bg-white w-full max-w-[440px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12)]">
      {/* Header bar — dark for document feel */}
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
            <div className="flex justify-between gap-4">
              <span className="text-zinc-400 pl-2">Owner comp add-back</span>
              <span className="text-red-500">(124,500)</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-zinc-400 pl-2">Personal vehicle</span>
              <span className="text-red-500">(18,200)</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-zinc-400 pl-2">One-time equipment</span>
              <span className="text-red-500">(43,100)</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-zinc-400 pl-2">Non-recurring revenue</span>
              <span className="text-red-500">(49,300)</span>
            </div>
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
            <div className="flex items-start gap-2">
              <span className="text-amber-500 font-bold shrink-0">!</span>
              <span>Customer concentration: 34% (single client)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-500 font-bold shrink-0">!</span>
              <span>Undisclosed accounts payable: $87,400</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-500 font-bold shrink-0">!</span>
              <span>6 accounts tied to seller personally</span>
            </div>
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
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FAFAF8] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-20 items-center">
          {/* Left: copy */}
          <div className="max-w-2xl">
            {/* Supertitle — no delay, visible immediately */}
            <span className="font-mono text-[11px] text-amber-600 tracking-[0.2em] uppercase animate-fade-up">
              / Financial Due Diligence
            </span>

            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance animate-fade-up animate-delay-100 text-zinc-900">
              Don&apos;t close on a trades business until you know what you&apos;re{' '}
              <span className="text-amber-500">actually buying.</span>
            </h1>

            <p className="mt-6 text-lg text-zinc-600 leading-relaxed max-w-xl animate-fade-up animate-delay-200">
              We catch inflated EBITDA, hidden liabilities, and owner-dependent revenue before
              they become your problem — with a full Quality of Earnings report in 5–7 business
              days.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-up animate-delay-300">
              <a
                href="#intake"
                style={{
                  transition:
                    'background-color 150ms ease, transform 160ms cubic-bezier(0.23, 1, 0.32, 1)',
                }}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 active:scale-[0.97] text-zinc-950 font-semibold text-sm px-6 py-3"
              >
                Get My Quote
                <ArrowRight weight="bold" size={15} />
              </a>
              <a
                href="/sample-report"
                style={{ transition: 'color 150ms ease' }}
                className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 font-medium text-sm group"
              >
                See a Sample Report
                <ArrowRight
                  size={15}
                  style={{ transition: 'transform 150ms cubic-bezier(0.23, 1, 0.32, 1)' }}
                  className="group-hover:translate-x-0.5"
                />
              </a>
            </div>

            {/* Trust badge */}
            <div className="mt-8 flex items-center gap-3 animate-fade-up animate-delay-400">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-zinc-200 bg-white shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span className="text-xs text-zinc-500 font-mono">
                  Currently quoting deals — 24hr response guaranteed
                </span>
              </span>
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

        {/* Mobile: same card shown below the copy */}
        <div className="lg:hidden mt-12 flex justify-center animate-fade-up animate-delay-300" aria-hidden="true">
          <QoeDocPreview />
        </div>
      </div>
    </section>
  )
}
