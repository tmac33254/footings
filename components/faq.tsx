'use client'

import { useState } from 'react'
import { Plus, Minus } from '@phosphor-icons/react'

const faqs = [
  {
    q: 'What financials do I need to send you?',
    a: "At minimum: the last 2–3 years of income statements, and the most recent balance sheet. Tax returns are helpful but not required to start. If the seller has provided an add-back schedule or adjusted EBITDA breakdown, include that too. If you only have partial financials, submit anyway — we'll tell you exactly what's missing and whether we can work with what's there.",
  },
  {
    q: "What if the seller won't share detailed financials?",
    a: "That's a red flag in itself. A seller who won't provide 3 years of P&Ls to a serious buyer under LOI is hiding something. We can still work with tax returns and limited data — but we'll tell you what we can and can't verify. If you're getting stonewalled, we'll note that in the report and recommend you factor it into your price.",
  },
  {
    q: 'Do I actually need this on a $400k deal?',
    a: "Yes. The risk-to-cost ratio gets worse, not better, on smaller deals. A $400k business with a 3x multiple is priced at $1.2M. An EBITDA overstatement of 20% means you're overpaying by $240k. Our report costs $2,500. The math isn't complicated. The businesses most likely to have messy books are smaller, owner-operated ones — exactly the $400k deal you're looking at.",
  },
  {
    q: 'How is this different from what my CPA does?',
    a: "Your CPA files your taxes and reviews your own books. They are not trained in buy-side financial due diligence, they don't know what normal looks like for a plumbing company in this market, and they will not give you renegotiation recommendations with dollar values attached. Quality of Earnings analysis is a specific discipline. Your CPA is the right person for a lot of things — this isn't one of them.",
  },
  {
    q: 'Do you work with SBA lenders?',
    a: "We don't provide lender-formatted QoE packages (that's a different, more expensive product). What we do provide can be shared with your lender and will give them confidence in the normalized numbers. If your SBA lender requires a formal CPA-stamped report, we'll tell you upfront. For most sub-$5M trades deals, our report is more than sufficient for the lender's underwriting.",
  },
  {
    q: 'What happens if you find serious problems?',
    a: "That's exactly what you're paying for. We document every issue clearly, quantify the dollar impact where possible, and give you a prioritized list of renegotiation points. Some buyers use the report to kill the deal. Some use it to renegotiate $200k off the price. Some close as planned but with a clear picture of what they're managing. The report gives you leverage — what you do with it is your call.",
  },
  {
    q: 'How long does the engagement actually take?',
    a: 'Once we have everything we need — signed engagement letter, full financials, access to any supporting docs — we deliver in 5–7 business days. The clock starts when we have complete materials, not when you sign. Most delays come from incomplete document packages. If you submit everything at once, we rarely miss the window.',
  },
  {
    q: 'Do you only work with first-time buyers?',
    a: "No. We work with first-time SMB buyers, experienced operators adding to a portfolio, and search funds doing bolt-on acquisitions. The due diligence need doesn't change based on your experience level — the businesses are messy regardless. Experienced buyers tend to find the most value in the report because they know exactly how to use the renegotiation points.",
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-t border-zinc-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-5 text-left group"
        aria-expanded={open}
      >
        <span
          style={{ transition: 'color 150ms ease' }}
          className="text-[15px] font-medium text-zinc-800 group-hover:text-zinc-900 leading-snug"
        >
          {q}
        </span>
        <span
          style={{ transition: 'color 150ms ease' }}
          className="shrink-0 text-zinc-400 group-hover:text-amber-500 mt-0.5"
        >
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      {/* CSS grid 0fr→1fr: perfect height animation, no hardcoded max-height */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: open ? '1fr' : '0fr',
          transition: 'grid-template-rows 280ms cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <p
            style={{ transition: 'opacity 200ms ease' }}
            className={`pb-6 text-[14px] text-zinc-600 leading-relaxed max-w-3xl ${
              open ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  return (
    <section id="faq" className="py-24 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
          {/* Left: label */}
          <div>
            <span className="font-mono text-[11px] text-amber-600 tracking-[0.2em] uppercase">
              / FAQ
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900">
              Questions worth asking before you wire the money.
            </h2>
          </div>

          {/* Right: accordion */}
          <div>
            {faqs.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
            <div className="border-t border-zinc-200" />
          </div>
        </div>
      </div>
    </section>
  )
}
