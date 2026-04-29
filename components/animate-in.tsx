'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimateInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function AnimateIn({ children, delay = 0, className = '' }: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionProperty: 'transform, opacity',
        transitionDuration: '500ms',
        transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
      }}
      className={`${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${className}`}
    >
      {children}
    </div>
  )
}
