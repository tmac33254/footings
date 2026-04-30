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
    <div className="border-t border-zinc-800/60 border-b border-b-zinc-800/60 py-4 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap items-center gap-x-2 gap-y-2">
        <span className="font-mono text-[10px] text-amber-500/80 tracking-[0.2em] uppercase mr-3 shrink-0">
          Built for buyers of
        </span>
        <div className="flex flex-wrap items-center gap-x-1 gap-y-1">
          {industries.map((ind, i) => (
            <span key={ind} className="flex items-center gap-1">
              <span className="text-sm text-zinc-400 font-medium">{ind}</span>
              {i < industries.length - 1 && (
                <span className="text-zinc-700 mx-1 text-xs">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
