const industries = [
  'HVAC',
  'Plumbing',
  'Roofing',
  'Electrical',
  'Landscaping',
  'Pest Control',
  'General Contracting',
  'Restoration',
]

export default function BuiltFor() {
  return (
    <div className="border-y border-zinc-200 py-4 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap items-center gap-x-2 gap-y-2">
        <span className="font-mono text-[10px] text-amber-600 tracking-[0.2em] uppercase mr-3 shrink-0">
          Built for buyers of
        </span>
        <div className="flex flex-wrap items-center gap-x-1 gap-y-1">
          {industries.map((ind, i) => (
            <span key={ind} className="flex items-center gap-1">
              <span className="text-sm text-zinc-600 font-medium">{ind}</span>
              {i < industries.length - 1 && (
                <span className="text-zinc-300 mx-1 text-xs">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
