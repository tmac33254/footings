'use client'

import { useState } from 'react'
import { List, X } from '@phosphor-icons/react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Services', href: '/services' },
    { label: 'Sample Report', href: '/sample-report' },
    { label: 'Resources', href: '/resources' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-sm border-b border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="font-mono text-sm tracking-[0.2em] text-zinc-100 uppercase font-semibold">
            Footings
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ transition: 'color 150ms ease' }}
              className="text-sm text-zinc-400 hover:text-zinc-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="/#intake"
            style={{
              transition:
                'background-color 150ms ease, transform 160ms cubic-bezier(0.23, 1, 0.32, 1)',
            }}
            className="bg-amber-500 hover:bg-amber-400 active:scale-[0.97] text-zinc-950 font-semibold text-sm px-5 py-2"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          style={{ transition: 'color 150ms ease' }}
          className="md:hidden text-zinc-400 hover:text-zinc-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ transition: 'color 150ms ease' }}
                className="text-sm text-zinc-300 hover:text-zinc-100 py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#intake"
              onClick={() => setOpen(false)}
              style={{ transition: 'background-color 150ms ease' }}
              className="mt-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-sm px-5 py-2.5 text-center"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
