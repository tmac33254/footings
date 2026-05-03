import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: "How to Read a Seller's Add-Back Schedule (And When to Push Back)",
  description:
    "Sellers present add-backs as adjustments in your favor — and some are legitimate. Others inflate EBITDA by six figures. This guide explains how to tell the difference and when to push back.",
  openGraph: {
    title: "How to Read a Seller's Add-Back Schedule (And When to Push Back)",
    description:
      "A buyer's guide to evaluating add-back schedules in trades business acquisitions.",
  },
}

export default function AddBackSchedulePage() {
  return (
    <main>
      <Nav />

      {/* Article header */}
      <section className="blueprint-grid pt-20 pb-12 border-b border-zinc-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <a
            href="/resources"
            style={{ transition: 'color 150ms ease' }}
            className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-700 mb-8 group"
          >
            <ArrowLeft
              size={12}
              style={{ transition: 'transform 150ms cubic-bezier(0.23, 1, 0.32, 1)' }}
              className="group-hover:-translate-x-0.5"
            />
            All Resources
          </a>

          <div className="animate-fade-up animate-delay-100">
            <span className="font-mono text-[11px] text-amber-600 tracking-[0.2em] uppercase">
              / Due Diligence
            </span>
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] animate-fade-up animate-delay-200 text-zinc-900">
            How to Read a Seller&apos;s Add-Back Schedule (And When to Push Back)
          </h1>
          <div className="mt-5 flex items-center gap-4 animate-fade-up animate-delay-300">
            <span className="text-sm text-zinc-400">11 min read</span>
            <span className="text-zinc-200">·</span>
            <div className="flex items-center gap-2">
              {['Add-Backs', 'EBITDA', 'Negotiation'].map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-zinc-400 px-2 py-0.5 border border-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-zinc-700 text-[16px] leading-[1.75]">

            <p className="text-zinc-800 text-lg leading-relaxed font-medium">
              The seller&apos;s add-back schedule is the document that gets buyers into the most
              trouble. On its surface it looks like the seller is helping you — they&apos;re
              identifying expenses that inflate costs and showing you why the business is
              worth more than the P&amp;L suggests. Sometimes that&apos;s true. Often it isn&apos;t.
            </p>

            <p>
              This guide walks through how to read an add-back schedule, which categories
              deserve scrutiny, and how to evaluate each line item before you accept it
              as real.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-12 mb-4">
              What an add-back schedule is
            </h2>

            <p>
              An add-back schedule is a list of adjustments the seller believes should be
              made to their reported EBITDA or net income. Each line item is an expense
              in the P&amp;L that the seller argues is either (a) owner-specific and won&apos;t
              persist under new ownership, (b) one-time and not representative of ongoing
              operations, or (c) non-cash.
            </p>

            <p>
              Adding these back increases the stated EBITDA, which in turn supports a
              higher purchase price. The seller and their broker have prepared this document
              as part of the marketing package. Treat it as a starting position, not
              settled fact.
            </p>

            <div className="border-l-2 border-amber-400 pl-6 py-2 my-8">
              <p className="text-zinc-800 text-[15px] leading-relaxed font-medium not-italic">
                &ldquo;An add-back schedule is a document prepared by someone who wants to sell
                the business at the highest possible price. That doesn&apos;t make it wrong —
                it makes it something you verify.&rdquo;
              </p>
            </div>

            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-12 mb-4">
              The three types of add-backs
            </h2>

            <h3 className="text-base font-bold text-zinc-900 mt-8 mb-3">
              Type 1 — Clearly legitimate
            </h3>
            <p>
              These are adjustments that virtually every buyer and analyst would agree on.
              They&apos;re real, well-documented, and reflect the genuine difference between
              how an owner-operator runs the books vs. how the business operates economically.
            </p>
            <ul className="space-y-2 mt-4 list-none pl-0">
              {[
                'Owner salary add-back with a documented market-rate replacement (clearly legitimate if the replacement rate is reasonable)',
                'Depreciation and amortization (definitional — EBITDA adds these back)',
                'One-time legal fees from a specific, documented, resolved dispute',
                'Personal health insurance for the owner run through the business',
                'A vehicle the owner uses exclusively for personal travel, documented',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold text-xs mt-1.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-base font-bold text-zinc-900 mt-8 mb-3">
              Type 2 — Requires verification
            </h3>
            <p>
              These might be legitimate, but they require supporting documentation before
              you accept them. Without backup, you&apos;re taking the seller&apos;s word.
            </p>
            <ul className="space-y-2 mt-4 list-none pl-0">
              {[
                '"One-time" equipment repairs (how often does this recur? check prior years)',
                'Owner vehicle expenses (how many vehicles? what percentage was personal?)',
                'Travel and entertainment (was this purely personal or partly business?)',
                'Family member salaries (did they perform real work? what was the market rate for that work?)',
                '"Above-market" rent paid to a related party (what is actual market rent?)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold text-xs mt-1.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-base font-bold text-zinc-900 mt-8 mb-3">
              Type 3 — Questionable or outright wrong
            </h3>
            <p>
              These appear on add-back schedules regularly and should be challenged or
              excluded entirely.
            </p>
            <ul className="space-y-2 mt-4 list-none pl-0">
              {[
                'Recurring maintenance expenses presented as one-time ("unusual year")',
                'Lost revenue from a one-time project added back as if it were a cost savings',
                "Salary replacement set at an unrealistically low rate (e.g., $50K for an owner who ran operations + sales)",
                "Future rent savings from a lease that hasn't been renegotiated yet",
                'Projected efficiency gains from technology not yet implemented',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-red-400 font-bold text-xs mt-1.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              That last category — future improvements — is particularly aggressive. An
              add-back for something that hasn&apos;t happened yet is speculation, not
              normalization. You&apos;re paying for historical earnings, not potential future earnings.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-12 mb-4">
              How to evaluate each line item
            </h2>

            <p>
              For every add-back, ask four questions:
            </p>

            <div className="bg-zinc-50 border border-zinc-200 p-6 my-8 space-y-5">
              {[
                {
                  n: '01',
                  q: 'Is there documentation?',
                  a: "Owner says $38,000 was spent on a one-time system upgrade. There should be an invoice. If there isn't, it's unverifiable. Ask for it.",
                },
                {
                  n: '02',
                  q: 'Does it appear in prior years?',
                  a: "Pull three years of P&Ls and look for the same expense category. If 'one-time IT costs' appeared every year, they're not one-time.",
                },
                {
                  n: '03',
                  q: 'Will it actually go away under new ownership?',
                  a: "The owner's truck expenses go away. The payroll for a dispatcher who's been with the company 12 years doesn't — you need that person.",
                },
                {
                  n: '04',
                  q: 'Is the replacement cost realistic?',
                  a: "If the owner managed operations, handled key client relationships, and did estimating, replacing that with one person at $85K is not realistic. Model what you'd actually spend.",
                },
              ].map((item) => (
                <div key={item.n} className="flex items-start gap-5">
                  <span className="font-mono text-amber-600 text-xs mt-0.5 shrink-0">{item.n}</span>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 mb-1">{item.q}</div>
                    <p className="text-sm text-zinc-600 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-12 mb-4">
              The add-back schedule vs. your independent analysis
            </h2>

            <p>
              A buy-side QoE analyst doesn&apos;t start from the seller&apos;s add-back schedule —
              they start from the raw financial statements and build their own normalization
              independently. Then they compare. This process typically reveals:
            </p>

            <ul className="space-y-3 mt-4 list-none pl-0">
              {[
                "Add-backs the seller included that aren't supported (inflate EBITDA)",
                "Add-backs the seller missed that should be included (sometimes in the buyer's favor)",
                "Items the seller labeled 'one-time' that appear consistently in historical data",
                "A replacement salary that's unrealistically low given the actual role requirements",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold text-xs mt-1.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              The delta between the seller&apos;s adjusted EBITDA and the analyst&apos;s adjusted EBITDA
              is your negotiating range. On a typical $2–5M revenue trades deal, that range
              is $80,000–$300,000 — a $320,000–$1.2M difference in supportable purchase price
              at a 4× multiple.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-12 mb-4">
              How to push back effectively
            </h2>

            <p>
              When you dispute a line item, come with specifics. Vague objections get vague
              responses. A well-constructed challenge looks like this:
            </p>

            <div className="bg-zinc-50 border border-zinc-200 p-6 my-8 space-y-4 text-sm">
              <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">
                Example pushback structure
              </div>
              <div className="space-y-3 text-zinc-700">
                <p>
                  <span className="font-semibold text-zinc-900">Item challenged:</span>{' '}
                  $47,000 add-back for &ldquo;non-recurring fleet maintenance&rdquo;
                </p>
                <p>
                  <span className="font-semibold text-zinc-900">Buyer&apos;s position:</span>{' '}
                  Reviewed three years of QuickBooks exports. Vehicle repair and maintenance
                  appears as a line item in all three years — $31K, $29K, and $47K respectively.
                  This is a recurring operating cost, not a one-time item. We are excluding
                  this add-back and adjusting the purchase price accordingly.
                </p>
                <p>
                  <span className="font-semibold text-zinc-900">Offer:</span>{' '}
                  If the seller can provide documentation showing the $47K included a specific
                  non-recurring event (e.g., an accident-related repair not covered by
                  insurance), we will consider a partial add-back for that documented amount only.
                </p>
              </div>
            </div>

            <p>
              This approach accomplishes three things: it demonstrates you actually looked
              at the data, it makes a specific claim the seller has to respond to, and it
              leaves a reasonable path to partial resolution if the seller has documentation
              you haven&apos;t seen.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 tracking-tight mt-12 mb-4">
              Downward adjustments the seller won&apos;t mention
            </h2>

            <p>
              The seller&apos;s add-back schedule will never include items that reduce EBITDA.
              Your independent analysis should look for them:
            </p>

            <ul className="space-y-3 mt-4 list-none pl-0">
              {[
                "Deferred maintenance on equipment, vehicles, or facilities that you'll need to fund immediately",
                'Below-market owner compensation that understates actual labor cost (owner doing skilled field work at no salary)',
                'Favorable lease terms that expire within 18 months of close',
                'Revenue from a client who has a personal relationship with the owner and is unlikely to transfer',
                'Capital expenditures that will be needed in the next 12 months not reflected in the P&L',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-red-400 font-bold text-xs mt-1.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              A complete normalization is symmetric — it adjusts in both directions. If your
              analyst is only finding things that increase EBITDA, they&apos;re probably not
              looking hard enough.
            </p>

            <div className="border border-zinc-200 p-6 mt-10 bg-amber-50/60">
              <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mb-3">
                Bottom Line
              </div>
              <p className="text-zinc-700 text-[15px] leading-relaxed">
                The add-back schedule is the seller&apos;s first offer on EBITDA. Treat it like
                any other first offer: read it carefully, verify every line with documentation,
                and come back with your own independent analysis. The distance between the
                seller&apos;s adjusted EBITDA and yours is almost always where the most meaningful
                negotiation happens — and it almost always runs through the add-back schedule.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related articles + CTA */}
      <section className="py-16 border-t border-zinc-200 bg-zinc-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="font-mono text-[11px] text-zinc-400 tracking-[0.2em] uppercase mb-6">
            Continue Reading
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              {
                href: '/resources/ebitda-normalization-trades',
                title: 'EBITDA Normalization in Trades Business Acquisitions',
              },
              {
                href: '/resources/working-capital-trap',
                title: 'The Working Capital Trap: What HVAC and Plumbing Buyers Get Wrong',
              },
            ].map((article) => (
              <a
                key={article.href}
                href={article.href}
                style={{ transition: 'border-color 150ms ease' }}
                className="group p-4 border border-zinc-200 hover:border-amber-400/60 bg-white block"
              >
                <div
                  style={{ transition: 'color 150ms ease' }}
                  className="text-sm font-semibold text-zinc-800 group-hover:text-amber-600 leading-snug"
                >
                  {article.title}
                </div>
                <div className="mt-2 flex items-center gap-1 text-xs text-zinc-400">
                  Read article
                  <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          <div className="border-t border-zinc-200 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-zinc-900">Ready to protect your deal?</div>
              <p className="mt-1 text-sm text-zinc-500">
                Fixed-fee QoE reports for trades business buyers.
              </p>
            </div>
            <a
              href="/#intake"
              style={{
                transition:
                  'background-color 150ms ease, transform 160ms cubic-bezier(0.23, 1, 0.32, 1)',
              }}
              className="shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 active:scale-[0.97] text-zinc-950 font-semibold text-sm px-6 py-2.5"
            >
              Get a Quote
              <ArrowRight weight="bold" size={13} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
