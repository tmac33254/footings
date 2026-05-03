import { AnimateIn } from './animate-in'

const steps = [
  {
    number: '01',
    title: 'Submit your deal',
    body: 'Fill out the intake form with the basics — industry, asking price, and what financials you have. Takes 3 minutes.',
  },
  {
    number: '02',
    title: 'Quote in 24 hours',
    body: "We review what you've sent and come back with a fixed-fee quote and exactly what we need to proceed.",
  },
  {
    number: '03',
    title: 'Sign + send financials',
    body: 'Sign the engagement letter, send the documents, and we start. Secure file transfer — no emailing spreadsheets.',
  },
  {
    number: '04',
    title: 'Report delivered',
    body: 'Full QoE report in your inbox within 5–7 business days. We walk you through every finding on a call.',
  },
]

export default function Process() {
  return (
    <section className="py-28 border-t border-zinc-200 geo-lines relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn>
          <span className="font-mono text-[11px] text-amber-600 tracking-[0.2em] uppercase">
            / The Process
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 leading-[1.05]">
            Four steps from LOI to answers.
          </h2>
        </AnimateIn>

        {/* Desktop: horizontal cards */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 mt-16">
          {steps.map((step, i) => (
            <AnimateIn key={step.number} delay={i * 100}>
              <div className="relative group card-lift bg-white border border-zinc-200 p-6 pt-14 overflow-hidden">
                {/* Big decorative number — amber tinted, atmospheric */}
                <div
                  className="absolute -top-4 -left-2 font-mono font-bold leading-none pointer-events-none select-none"
                  style={{
                    fontSize: '7rem',
                    color: 'rgba(245, 158, 11, 0.12)',
                    letterSpacing: '-0.05em',
                  }}
                  aria-hidden="true"
                >
                  {step.number}
                </div>

                {/* Connector line to next step */}
                {i < steps.length - 1 && (
                  <div className="absolute top-6 right-0 w-6 h-px bg-zinc-200 translate-x-6 hidden lg:block" />
                )}

                {/* Amber dot */}
                <div className="relative z-10 mb-5">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                </div>

                <div className="relative z-10">
                  <div className="text-sm font-bold text-zinc-900 leading-snug tracking-tight">
                    {step.title}
                  </div>
                  <p className="mt-2.5 text-[13px] text-zinc-500 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden mt-12 space-y-0">
          {steps.map((step, i) => (
            <AnimateIn key={step.number} delay={i * 80}>
              <div className="relative flex gap-5 pb-10">
                {i < steps.length - 1 && (
                  <div className="absolute left-3.5 top-8 bottom-0 w-px bg-zinc-200" />
                )}
                <div className="relative z-10 w-7 h-7 shrink-0 flex items-center justify-center border border-zinc-200 bg-white shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                </div>
                <div className="pt-0.5">
                  <div className="font-mono text-[10px] text-zinc-400 tracking-widest mb-1">
                    {step.number}
                  </div>
                  <div className="text-sm font-semibold text-zinc-900">{step.title}</div>
                  <p className="mt-2 text-[13px] text-zinc-500 leading-relaxed">{step.body}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
