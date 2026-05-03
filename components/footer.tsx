export default function Footer() {
  const links = [
    { label: 'Services', href: '/services' },
    { label: 'Sample Report', href: '/sample-report' },
    { label: 'Resources', href: '/resources' },
    { label: 'Get a Quote', href: '/#intake' },
  ]

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 relative overflow-hidden">

      {/* Geometric grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Large amber bracket accent — top left */}
      <svg
        className="absolute top-0 left-0 pointer-events-none"
        aria-hidden="true"
        width="200"
        height="200"
        style={{ opacity: 0.07 }}
        viewBox="0 0 200 200"
      >
        <path d="M 80 0 L 0 0 L 0 100" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
      </svg>

      {/* Large decorative number — bottom right */}
      <div
        className="absolute bottom-0 right-6 font-mono font-bold leading-none pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
        style={{
          fontSize: '18rem',
          color: 'rgba(245, 158, 11, 0.04)',
          letterSpacing: '-0.05em',
          lineHeight: '0.85',
        }}
      >
        F
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        {/* Top — brand + nav */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 pb-12 border-b border-zinc-800">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="font-mono text-base tracking-[0.2em] text-zinc-100 uppercase font-bold">
                Footings
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            </div>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
              Buy-side financial due diligence for buyers of trades businesses. Fixed pricing. Fast turnaround.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 border border-zinc-800 bg-zinc-900">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
              <span className="text-xs text-zinc-500 font-mono">Buy-side only. We never work for sellers.</span>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-3">
            <div className="font-mono text-[10px] text-zinc-600 tracking-widest uppercase mb-1">
              Pages
            </div>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{ transition: 'color 150ms ease' }}
                className="text-sm text-zinc-500 hover:text-zinc-200 font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom — legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-zinc-700">
            &copy; {new Date().getFullYear()} Footings Financial. All rights reserved.
          </p>
          <p className="text-xs text-zinc-700 max-w-sm text-right">
            Not a licensed CPA firm. QoE reports are for buyer advisory purposes only.
          </p>
        </div>
      </div>
    </footer>
  )
}
