import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Hunor Zoltáni — iOS Engineer & Indie Developer'
export const size = {
  width: 1200,
  height: 630
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#000000',
          color: '#ffffff',
          padding: '80px',
          fontFamily: 'monospace'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 24, letterSpacing: '0.1em', opacity: 0.6, textTransform: 'uppercase' }}>
            Portfolio & Engineering
          </span>
          <span style={{ fontSize: 20, opacity: 0.6 }}>
            ronuhz.me
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h1 style={{ fontSize: 64, fontWeight: 700, margin: 0, letterSpacing: '-0.02em' }}>
            Hunor Zoltáni
          </h1>
          <p style={{ fontSize: 32, margin: 0, opacity: 0.85 }}>
            iOS Engineer & Indie Developer
          </p>
          <p style={{ fontSize: 22, margin: 0, opacity: 0.55 }}>
            Winner, Apple Swift Student Challenge 2025 • Cluj-Napoca, Romania
          </p>
        </div>

        <div style={{ display: 'flex', gap: '32px', fontSize: 18, opacity: 0.5, borderTop: '1px solid #222222', paddingTop: '24px' }}>
          <span>Swift</span>
          <span>SwiftUI</span>
          <span>SwiftData</span>
          <span>x86 Assembly</span>
          <span>AI Apps</span>
        </div>
      </div>
    ),
    {
      ...size
    }
  )
}
