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
    <section className="py-24 border-t border-zinc-700/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn>
          <span className="font-mono text-[11px] text-amber-500 tracking-[0.2em] uppercase">
            / The Process
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            Four steps from LOI to answers.
          </h2>
        </AnimateIn>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block mt-16">
          {/* Connector line */}
          <div className="relative">
            <div className="absolute top-5 left-[2.5rem] right-[2.5rem] h-px bg-zinc-700/60" />
            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <AnimateIn key={step.number} delay={i * 100}>
                  <div className="relative pt-0">
                    {/* Node */}
                    <div className="relative z-10 w-10 h-10 flex items-center justify-center border border-zinc-700 bg-zinc-950 mb-6">
                      <span className="font-mono text-xs font-semibold text-amber-500">
                        {step.number}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-zinc-100 leading-snug">
                      {step.title}
                    </div>
                    <p className="mt-2.5 text-[13px] text-zinc-400 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden mt-12 space-y-0">
          {steps.map((step, i) => (
            <AnimateIn key={step.number} delay={i * 80}>
              <div className="relative flex gap-6 pb-10">
                {/* Vertical line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-0 w-px bg-zinc-700/60" />
                )}
                {/* Node */}
                <div className="relative z-10 w-10 h-10 shrink-0 flex items-center justify-center border border-zinc-700 bg-zinc-950">
                  <span className="font-mono text-xs font-semibold text-amber-500">
                    {step.number}
                  </span>
                </div>
                <div className="pt-2">
                  <div className="text-sm font-semibold text-zinc-100">{step.title}</div>
                  <p className="mt-2 text-[13px] text-zinc-400 leading-relaxed">{step.body}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
