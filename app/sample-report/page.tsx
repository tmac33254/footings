import type { Metadata } from 'next'
import { ArrowRight, Warning } from '@phosphor-icons/react/dist/ssr'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Sample Quality of Earnings Report',
  description:
    'See exactly what a Footings QoE report looks like. This sample covers a $3.8M HVAC acquisition — EBITDA normalization, working capital, customer concentration, and red flags.',
  openGraph: {
    title: 'Sample QoE Report — Footings Financial',
    description:
      'A real-format Quality of Earnings report for a sample HVAC acquisition. See the analysis before you buy.',
  },
}

function SectionHeader({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <div className="font-mono text-[10px] text-amber-600 tracking-[0.2em] uppercase mb-2">
        {label}
      </div>
      <h2 className="text-lg font-bold text-zinc-900 tracking-tight">{children}</h2>
    </div>
  )
}

function DataRow({
  label,
  value,
  indent = false,
  highlight = false,
  negative = false,
  muted = false,
  borderTop = false,
}: {
  label: string
  value: string
  indent?: boolean
  highlight?: boolean
  negative?: boolean
  muted?: boolean
  borderTop?: boolean
}) {
  return (
    <div
      className={`flex justify-between gap-8 py-2 ${borderTop ? 'border-t border-zinc-200 mt-1 pt-3' : ''}`}
    >
      <span
        className={`text-sm leading-snug ${indent ? 'pl-4' : ''} ${muted ? 'text-zinc-400' : highlight ? 'text-zinc-900 font-semibold' : 'text-zinc-600'}`}
      >
        {label}
      </span>
      <span
        className={`text-sm font-mono tabular-nums shrink-0 ${highlight ? 'text-amber-600 font-semibold' : negative ? 'text-red-500' : muted ? 'text-zinc-400' : 'text-zinc-900'}`}
      >
        {value}
      </span>
    </div>
  )
}

function RedFlag({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="flex items-start gap-4 py-4 border-t border-zinc-200">
      <div className="shrink-0 w-8 h-8 flex items-center justify-center border border-amber-300 bg-amber-50">
        <Warning size={14} weight="fill" className="text-amber-600" />
      </div>
      <div>
        <div className="text-sm font-semibold text-zinc-900">{title}</div>
        <p className="mt-1 text-sm text-zinc-600 leading-relaxed">{detail}</p>
      </div>
    </div>
  )
}

export default function SampleReportPage() {
  return (
    <main>
      <Nav />

      {/* Page header */}
      <section className="blueprint-grid pt-16 pb-12 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-fade-up animate-delay-100">
            <span className="font-mono text-[11px] text-amber-600 tracking-[0.2em] uppercase">
              / Sample Report
            </span>
          </div>
          <h1 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight animate-fade-up animate-delay-200 max-w-2xl text-zinc-900">
            This is what you get.
          </h1>
          <p className="mt-4 text-zinc-600 text-base leading-relaxed max-w-xl animate-fade-up animate-delay-300">
            A real-format Quality of Earnings report on a fictional HVAC acquisition. The
            structure, depth, and findings are representative of what a Footings report
            looks like in practice.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 border border-amber-300 bg-amber-50 animate-fade-up animate-delay-400">
            <Warning size={12} weight="fill" className="text-amber-600 shrink-0" />
            <span className="text-xs text-amber-700 font-mono">
              All company names, figures, and individuals are fictional.
            </span>
          </div>
        </div>
      </section>

      {/* Report document */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          {/* Report cover */}
          <div className="border border-zinc-200 bg-white mb-12 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            {/* Header bar — dark for document authority */}
            <div className="bg-zinc-900 px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm tracking-[0.2em] text-zinc-100 uppercase font-semibold">
                  Footings
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              </div>
              <span className="text-zinc-400 text-xs font-mono">CONFIDENTIAL — BUYER USE ONLY</span>
            </div>

            <div className="p-8 md:p-12">
              <div className="font-mono text-[10px] text-amber-600 tracking-[0.2em] uppercase mb-4">
                Quality of Earnings Report
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 mb-8">
                Apex HVAC Services, LLC
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-6 border-t border-zinc-200">
                {[
                  { label: 'Report Date', value: 'November 2024' },
                  { label: 'Asking Price', value: '$3,800,000' },
                  { label: 'Industry', value: 'HVAC / Mechanical' },
                  { label: 'Prepared For', value: 'Buyer (Confidential)' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mb-1">
                      {item.label}
                    </div>
                    <div className="text-sm font-semibold text-zinc-900">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="mb-8 pb-5 border-b border-zinc-200">
            <SectionHeader label="Section 01">Executive Summary</SectionHeader>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { label: 'Seller-Stated EBITDA', value: '$847,293', note: 'As represented' },
                {
                  label: 'Adjusted EBITDA',
                  value: '$612,193',
                  note: 'After normalization',
                  amber: true,
                },
                {
                  label: 'Implied Overstatement',
                  value: '−27.7%',
                  note: 'Change from stated EBITDA',
                  red: true,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`p-5 border ${item.amber ? 'border-amber-300 bg-amber-50' : item.red ? 'border-red-200 bg-red-50' : 'border-zinc-200 bg-zinc-50'}`}
                >
                  <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mb-2">
                    {item.label}
                  </div>
                  <div
                    className={`font-mono text-2xl font-semibold tabular-nums ${item.amber ? 'text-amber-600' : item.red ? 'text-red-500' : 'text-zinc-900'}`}
                  >
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs text-zinc-400">{item.note}</div>
                </div>
              ))}
            </div>

            <div className="p-5 border border-zinc-200 bg-zinc-50">
              <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mb-3">
                Summary Finding
              </div>
              <p className="text-[15px] text-zinc-700 leading-relaxed">
                Apex HVAC Services presents adjusted EBITDA of $612,193, a reduction of $235,100
                from the seller-stated figure of $847,293. The primary drivers are owner
                compensation recast ($124,500), elimination of non-recurring equipment disposal
                revenue ($43,100), and personal vehicle expenses run through the business ($18,200).
                The implied asking price multiple increases from 4.5× to 6.2× on adjusted earnings.
                We recommend renegotiating the purchase price to a range of $2,449,000–$2,755,000
                based on adjusted EBITDA and identified risk factors.
              </p>
            </div>
          </div>

          {/* EBITDA Normalization */}
          <div className="mb-8 pb-5 border-b border-zinc-200">
            <SectionHeader label="Section 02">EBITDA Normalization</SectionHeader>
            <p className="text-[15px] text-zinc-500 leading-relaxed mb-8">
              The following schedule normalizes the seller-stated EBITDA by removing non-recurring
              items, personal expenses, and add-backs that do not represent sustainable business
              earnings. Each adjustment is documented with source and rationale.
            </p>

            <div className="border border-zinc-200 bg-white p-6 space-y-1 shadow-sm">
              <DataRow label="Seller-Stated EBITDA (FY2023)" value="$847,293" />
              <div className="pt-3 pb-1">
                <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mb-3">
                  Adjustments — Additions to Income
                </div>
              </div>
              <DataRow
                label="Owner compensation recast (market rate vs. actual)"
                value="(124,500)"
                indent
                negative
              />
              <DataRow label="Personal vehicle expenses" value="(18,200)" indent negative />
              <DataRow label="Owner life insurance premiums" value="(8,400)" indent negative />
              <DataRow
                label="Spouse salary (non-working family member)"
                value="(36,000)"
                indent
                negative
              />
              <div className="pt-3 pb-1">
                <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mb-3">
                  Adjustments — Non-Recurring Revenue
                </div>
              </div>
              <DataRow
                label="One-time equipment disposal revenue"
                value="(43,100)"
                indent
                negative
              />
              <DataRow
                label="Insurance claim reimbursement (vehicle)"
                value="(4,900)"
                indent
                negative
              />
              <DataRow
                label="Federal equipment incentive (non-recurring)"
                value="(0)"
                indent
                muted
              />
              <DataRow
                label="Adjusted EBITDA"
                value="$612,193"
                highlight
                borderTop
              />
              <DataRow
                label="Change from stated EBITDA"
                value="−27.7%"
                negative
                muted
              />
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-zinc-200 bg-zinc-50">
                <div className="text-xs font-mono text-zinc-400 tracking-widest uppercase mb-2">
                  Implied Multiple (Stated)
                </div>
                <div className="font-mono text-2xl text-zinc-900 font-semibold">4.5×</div>
                <div className="mt-1 text-xs text-zinc-400">
                  $3,800,000 ÷ $847,293
                </div>
              </div>
              <div className="p-4 border border-amber-300 bg-amber-50">
                <div className="text-xs font-mono text-zinc-400 tracking-widest uppercase mb-2">
                  Implied Multiple (Adjusted)
                </div>
                <div className="font-mono text-2xl text-amber-600 font-semibold">6.2×</div>
                <div className="mt-1 text-xs text-zinc-400">
                  $3,800,000 ÷ $612,193
                </div>
              </div>
            </div>
          </div>

          {/* Working Capital */}
          <div className="mb-8 pb-5 border-b border-zinc-200">
            <SectionHeader label="Section 03">Working Capital Analysis</SectionHeader>
            <p className="text-[15px] text-zinc-500 leading-relaxed mb-8">
              Working capital represents the net short-term assets required for the business to
              operate day-to-day. A working capital peg should be negotiated to ensure the
              business is delivered with sufficient liquidity to operate without immediate
              capital injection.
            </p>

            <div className="border border-zinc-200 bg-white p-6 mb-6 shadow-sm">
              <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mb-4">
                Net Working Capital at Close (Estimated)
              </div>
              <DataRow label="Accounts Receivable (net)" value="$312,400" />
              <DataRow label="Inventory / Parts on Hand" value="$47,200" />
              <DataRow label="Prepaid Expenses" value="$18,600" />
              <DataRow label="Total Current Assets" value="$378,200" highlight borderTop />
              <div className="mt-4" />
              <DataRow label="Accounts Payable" value="(186,300)" negative />
              <DataRow label="Accrued Liabilities" value="(34,100)" negative />
              <DataRow label="Deferred Revenue (service contracts)" value="(28,700)" negative />
              <DataRow label="Total Current Liabilities" value="(249,100)" negative highlight borderTop />
              <DataRow label="Net Working Capital" value="$129,100" highlight borderTop />
            </div>

            <div className="p-5 border border-amber-300 bg-amber-50">
              <div className="text-[10px] font-mono text-amber-600 tracking-widest uppercase mb-3">
                Recommendation
              </div>
              <p className="text-sm text-zinc-700 leading-relaxed">
                Negotiate a working capital peg of <strong className="text-zinc-900">$125,000</strong> as
                a closing condition. If NWC at close falls below this peg, the purchase price
                should be reduced dollar-for-dollar. This protects against the seller timing
                the close to drain receivables or build payables. The trailing 12-month average
                NWC was $134,700, supporting this peg level.
              </p>
            </div>
          </div>

          {/* Customer Concentration */}
          <div className="mb-8 pb-5 border-b border-zinc-200">
            <SectionHeader label="Section 04">Customer Concentration</SectionHeader>
            <p className="text-[15px] text-zinc-500 leading-relaxed mb-8">
              Customer concentration represents a risk to revenue sustainability post-close.
              The following summarizes the top customers by revenue for FY2023.
            </p>

            <div className="border border-zinc-200 bg-white overflow-hidden shadow-sm">
              <div className="px-6 py-3 bg-zinc-50 border-b border-zinc-200 grid grid-cols-[1fr_auto_auto] gap-6">
                <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">Customer</div>
                <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase text-right">Revenue</div>
                <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase text-right">% of Total</div>
              </div>
              {[
                { name: 'Pinnacle Property Management', rev: '$847,200', pct: '34.2%', flag: true },
                { name: 'TerraHome Communities', rev: '$412,300', pct: '16.6%', flag: false },
                { name: 'Crestview Commercial', rev: '$298,100', pct: '12.0%', flag: false },
                { name: 'Residential (400+ accounts)', rev: '$921,400', pct: '37.2%', flag: false },
              ].map((row, i) => (
                <div
                  key={i}
                  className={`px-6 py-3.5 border-t border-zinc-200 grid grid-cols-[1fr_auto_auto] gap-6 ${row.flag ? 'bg-red-50' : ''}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-zinc-800">{row.name}</span>
                    {row.flag && (
                      <Warning size={12} weight="fill" className="text-amber-500 shrink-0" />
                    )}
                  </div>
                  <div className="font-mono text-sm text-zinc-900 text-right">{row.rev}</div>
                  <div
                    className={`font-mono text-sm text-right font-medium ${row.flag ? 'text-red-500' : 'text-zinc-600'}`}
                  >
                    {row.pct}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 border border-red-200 bg-red-50">
              <p className="text-sm text-zinc-700 leading-relaxed">
                <span className="text-zinc-900 font-medium">Risk:</span> Pinnacle Property
                Management represents 34.2% of FY2023 revenue and has a month-to-month service
                agreement that is not transferable without their written consent. Buyer should
                require a consent-to-assign and multi-year renewal from Pinnacle as a condition
                of close, or negotiate a price reduction reflecting this concentration risk.
              </p>
            </div>
          </div>

          {/* Red Flags */}
          <div className="mb-8 pb-5 border-b border-zinc-200">
            <SectionHeader label="Section 05">Red Flags</SectionHeader>
            <p className="text-[15px] text-zinc-500 leading-relaxed mb-8">
              The following issues were identified during our analysis. Each represents a deal
              risk that should be addressed prior to close, either through negotiation, additional
              diligence, or price adjustment.
            </p>

            <div>
              <RedFlag
                title="Customer concentration: 34.2% (single client, month-to-month)"
                detail="Pinnacle Property Management holds a non-transferable service agreement. If they exit post-close, revenue drops by $847,200. Require a signed consent-to-assign and minimum 2-year renewal prior to closing."
              />
              <RedFlag
                title="Undisclosed accounts payable: ~$87,400"
                detail="We identified approximately $87,400 in vendor invoices (primarily equipment suppliers) dated Q4 2023 that were not included in the seller's provided balance sheet. These appear to have been deliberately omitted. Confirm full AP balance through vendor statements."
              />
              <RedFlag
                title="6 key accounts tied to seller personally"
                detail="Six commercial accounts — totaling $312,400 in annual revenue — have direct relationships with the owner who has been the primary point of contact for 5+ years. A structured transition plan and seller earnout tied to retention is recommended."
              />
              <RedFlag
                title="Service contract liability not properly reflected"
                detail="The business carries $28,700 in deferred revenue from annual service contracts. These represent future labor obligations that reduce near-term free cash flow and must be included in the working capital calculation."
              />
              <div className="border-t border-zinc-200" />
            </div>
          </div>

          {/* Recommendations */}
          <div className="mb-8 pb-5 border-b border-zinc-200">
            <SectionHeader label="Section 06">Recommendations</SectionHeader>

            <div className="space-y-4">
              <div className="p-5 border border-amber-300 bg-amber-50">
                <div className="text-[10px] font-mono text-amber-600 tracking-widest uppercase mb-3">
                  Recommended Action: Renegotiate
                </div>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  The business does not support the $3,800,000 asking price at adjusted earnings.
                  Based on a 4.0–4.5× multiple on adjusted EBITDA of $612,193, a supportable
                  purchase price range is <strong className="text-zinc-900">$2,449,000–$2,755,000</strong> —
                  a reduction of $1,045,000–$1,351,000 from the asking price.
                </p>
              </div>

              {[
                {
                  title: 'Demand working capital peg at $125,000',
                  body: 'Include as a closing condition with dollar-for-dollar price adjustment if NWC falls short.',
                },
                {
                  title: 'Require Pinnacle consent-to-assign',
                  body: 'Non-negotiable. This single account represents 34% of revenue. If consent cannot be obtained, reduce price by an additional $300,000–$400,000.',
                },
                {
                  title: 'Reconcile full AP balance with vendors',
                  body: "Seller's provided balance sheet appears to understate payables by ~$87,400. Request bank statements and vendor aging reports.",
                },
                {
                  title: 'Negotiate seller transition and earnout',
                  body: 'Tie a portion of the seller purchase price (15–20%) to 12-month revenue retention to protect against owner-dependent account churn.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-t border-zinc-200">
                  <span className="font-mono text-xs text-amber-600 shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900">{item.title}</div>
                    <p className="mt-1 text-sm text-zinc-500 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
              <div className="border-t border-zinc-200" />
            </div>
          </div>

          {/* Disclaimer */}
          <div className="p-6 border border-zinc-200 bg-zinc-50">
            <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mb-3">
              Disclaimer
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              This report is prepared for buyer advisory purposes only and does not constitute a
              legal opinion, tax advice, or a certified audit. Footings Financial is not a licensed
              CPA firm. This analysis is based solely on documents provided by the seller and is
              subject to change upon receipt of additional or corrected information. Buyers are
              encouraged to engage independent legal and tax counsel prior to close.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-zinc-200 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="font-mono text-[11px] text-amber-600 tracking-[0.2em] uppercase">
            / Ready to Start?
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight max-w-xl mx-auto text-zinc-900">
            Your deal deserves the same scrutiny — in 5–7 days.
          </h2>
          <p className="mt-4 text-zinc-600 leading-relaxed max-w-md mx-auto">
            Submit your deal details and get a fixed-fee quote within 24 hours.
          </p>
          <div className="mt-8">
            <a
              href="/#intake"
              style={{
                transition:
                  'background-color 150ms ease, transform 160ms cubic-bezier(0.23, 1, 0.32, 1)',
              }}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 active:scale-[0.97] text-zinc-950 font-semibold text-sm px-8 py-3.5"
            >
              Get a Quote
              <ArrowRight weight="bold" size={15} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
