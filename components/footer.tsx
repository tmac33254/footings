export default function Footer() {
  return (
    <footer className="border-t border-zinc-700/60 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm tracking-[0.2em] text-zinc-300 uppercase font-semibold">
              Footings
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-zinc-500 text-sm">Financial Due Diligence</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-zinc-500">
            <span>Buy-side only. We never work for sellers.</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-zinc-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Footings Financial. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Not a licensed CPA firm. QoE reports are for buyer advisory purposes.
          </p>
        </div>
      </div>
    </footer>
  )
}
