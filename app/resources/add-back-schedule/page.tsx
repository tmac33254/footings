import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: "How to Read a Seller's Add-Back Schedule (And When to Push Back)",
  description:
    "Sellers present add-backs as adjustments in your favor. Some are legitimate. Some inflate EBITDA by six figures. Here's how to tell the difference before you agree to a price.",
  openGraph: {
    title: "How to Read a Seller's Add-Back Schedule",
    description:
      "Not every add-back is legitimate. Here's how to evaluate a seller's schedule before it affects your purchase price.",
  },
}

export default function AddBackSchedulePage() {
  return (
    <main>
      <Nav />

      <section className="blueprint-grid pt-20 pb-12 border-b border-zinc-700/60">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <a
            href="/resources"
            style={{ transition: 'color 150ms ease' }}
            className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-300 mb-8 group"
          >
            <ArrowLeft
              size={12}
              style={{ transition: 'transform 150ms cubic-bezier(0.23, 1, 0.32, 1)' }}
              className="group-hover:-translate-x-0.5"
            />
            All Resources
          </a>

          <span className="font-mono text-[11px] text-amber-500 tracking-[0.2em] uppercase block mb-4 animate-fade-up animate-delay-100">
            / Add-Backs & Negotiation
          </span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] animate-fade-up animate-delay-200">
            How to Read a Seller&apos;s Add-Back Schedule (And When to Push Back)
          </h1>
          <div className="mt-5 flex items-center gap-4 animate-fade-up animate-delay-300">
            <span className="text-sm text-zinc-500">11 min read</span>
            <span className="text-zinc-700">·</span>
            <div className="flex items-center gap-2">
              {['Add-Backs', 'EBITDA', 'Negotiation'].map((t) => (
                <span key={t} className="text-xs font-mono text-zinc-600 px-2 py-0.5 border border-zinc-800">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="border border-amber-500/20 bg-amber-500/5 p-8 text-center space-y-3">
            <div className="font-mono text-[10px] text-amber-500/70 tracking-widest uppercase">
              Article Coming Soon
            </div>
            <p className="text-zinc-300 text-[15px] leading-relaxed max-w-md mx-auto">
              This article is in progress. Check back soon — or get the analysis applied
              directly to your deal.
            </p>
            <div className="pt-2">
              <a
                href="/#intake"
                style={{
                  transition:
                    'background-color 150ms ease, transform 160ms cubic-bezier(0.23, 1, 0.32, 1)',
                }}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 active:scale-[0.97] text-zinc-950 font-semibold text-sm px-6 py-2.5"
              >
                Get My Quote
                <ArrowRight weight="bold" size={13} />
              </a>
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 border-t border-zinc-700/60 bg-zinc-900/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="font-mono text-[11px] text-zinc-500 tracking-[0.2em] uppercase mb-6">
            Read These First
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/resources/ebitda-normalization-trades',
                title: 'EBITDA Normalization in Trades Business Acquisitions',
              },
              {
                href: '/resources/what-is-quality-of-earnings',
                title: "What Is a Quality of Earnings Report? A Buyer's Guide",
              },
            ].map((article) => (
              <a
                key={article.href}
                href={article.href}
                style={{ transition: 'border-color 150ms ease' }}
                className="group p-4 border border-zinc-700/60 hover:border-amber-500/40 block"
              >
                <div style={{ transition: 'color 150ms ease' }} className="text-sm font-semibold text-zinc-200 group-hover:text-amber-400 leading-snug">
                  {article.title}
                </div>
                <div className="mt-2 flex items-center gap-1 text-xs text-zinc-500">
                  Read article
                  <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
