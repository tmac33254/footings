export default function Footer() {
  const links = [
    { label: 'Services', href: '/services' },
    { label: 'Sample Report', href: '/sample-report' },
    { label: 'Resources', href: '/resources' },
    { label: 'Get a Quote', href: '/#intake' },
  ]

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-8 border-b border-zinc-800">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-sm tracking-[0.2em] text-zinc-100 uppercase font-semibold">
                Footings
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            </div>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
              Buy-side financial due diligence for buyers of trades businesses. Fixed pricing. Fast turnaround.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{ transition: 'color 150ms ease' }}
                className="text-sm text-zinc-500 hover:text-zinc-200"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Footings Financial. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
            <p className="text-xs text-zinc-600">Buy-side only. We never work for sellers.</p>
            <p className="text-xs text-zinc-600">Not a licensed CPA firm. QoE reports are for buyer advisory purposes.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
