'use client'

import { useState, useEffect } from 'react'
import { List, X } from '@phosphor-icons/react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Services', href: '/services' },
    { label: 'Sample Report', href: '/sample-report' },
    { label: 'Resources', href: '/resources' },
  ]

  return (
    <header
      className="sticky top-0 z-40 border-b border-zinc-200 border-t-[3px] border-t-amber-500"
      style={{
        transition: 'background-color 200ms ease, box-shadow 200ms ease',
        backgroundColor: scrolled ? 'rgba(250, 250, 248, 0.97)' : 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 1px 24px -4px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <span className="font-mono text-sm tracking-[0.2em] text-zinc-900 uppercase font-bold">
            Footings
          </span>
          <span
            className="w-1.5 h-1.5 rounded-full bg-amber-500"
            style={{ animation: 'pulse-dot 3s ease-in-out infinite' }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ transition: 'color 150ms ease' }}
              className="text-sm text-zinc-500 hover:text-zinc-900 font-medium"
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
              transition: 'background-color 150ms ease, transform 160ms var(--ease-out)',
            }}
            className="bg-amber-500 hover:bg-amber-600 active:scale-[0.97] text-zinc-950 font-bold text-sm px-5 py-2 tracking-tight"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          style={{ transition: 'color 150ms ease' }}
          className="md:hidden text-zinc-500 hover:text-zinc-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white/97 backdrop-blur-sm">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ transition: 'color 150ms ease' }}
                className="text-sm text-zinc-600 hover:text-zinc-900 font-medium py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#intake"
              onClick={() => setOpen(false)}
              style={{ transition: 'background-color 150ms ease' }}
              className="mt-2 bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold text-sm px-5 py-2.5 text-center"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
