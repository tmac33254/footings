import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Footings — Financial Due Diligence for Trades Acquisitions'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#09090b',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
          backgroundImage:
            'linear-gradient(rgba(245,158,11,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      >
        <div
          style={{
            color: '#F59E0B',
            fontSize: 14,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontFamily: 'monospace',
          }}
        >
          FOOTINGS / FINANCIAL DUE DILIGENCE
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              color: '#f4f4f5',
              fontSize: 52,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            {"Don't close on a trades business until you know what you're actually buying."}
          </div>
          <div style={{ color: '#a1a1aa', fontSize: 22 }}>
            QoE Reports · Fractional CFO · Fixed Pricing · 5–7 Day Turnaround
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 40,
            color: '#71717a',
            fontSize: 14,
            fontFamily: 'monospace',
          }}
        >
          <span>HVAC</span>
          <span>PLUMBING</span>
          <span>ROOFING</span>
          <span>ELECTRICAL</span>
          <span>LANDSCAPING</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
