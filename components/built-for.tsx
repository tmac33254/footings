const industries = [
  'HVAC',
  'Plumbing',
  'Roofing',
  'Electrical',
  'Landscaping',
  'Pest Control',
  'General Contracting',
  'Restoration',
  'Painting',
  'Mechanical',
]

// Duplicate for seamless infinite loop
const items = [...industries, ...industries]

export default function BuiltFor() {
  return (
    <div className="border-y border-zinc-200 py-4 bg-white overflow-hidden">
      <div className="flex items-center">
        {/* Static label — doesn't scroll */}
        <div className="shrink-0 pl-6 lg:pl-8 pr-6 border-r border-zinc-200 mr-6 z-10 bg-white">
          <span className="font-mono text-[10px] text-amber-600 tracking-[0.2em] uppercase whitespace-nowrap">
            Built for buyers of
          </span>
        </div>

        {/* Scrolling track */}
        <div className="overflow-hidden flex-1 min-w-0">
          <div className="flex animate-marquee gap-0">
            {items.map((ind, i) => (
              <span key={i} className="flex items-center shrink-0">
                <span className="text-sm text-zinc-700 font-medium whitespace-nowrap px-5">
                  {ind}
                </span>
                <span className="text-zinc-300 text-xs shrink-0">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
