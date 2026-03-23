import type { ReactNode } from 'react'

export interface AuroraBackgroundProps {
  children: ReactNode
  className?: string
  /** Weiche Rand-Abschwächung der dekorativen Flächen */
  showRadialGradient?: boolean
}

/**
 * Ruhender „Aurora“-Eindruck im Rahmen von Quiet Technical Editorial:
 * nur Hintergrundfarbe + dezent akzentfarbige Verläufe (ohne Neon, Invert, Blend-Modes).
 */
export function AuroraBackground({
  children,
  className = '',
  showRadialGradient = true,
}: AuroraBackgroundProps) {
  const maskClass = showRadialGradient
    ? '[mask-image:radial-gradient(ellipse_85%_60%_at_50%_0%,black_25%,transparent_72%)]'
    : ''

  return (
    <div
      className={`relative flex min-h-screen flex-col bg-[var(--color-background)] text-[var(--color-text-primary)] ${className}`.trim()}
    >
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        {/* Basis-Mesh: nur Surface-/Accent-Töne, niedrige Deckkraft */}
        <div
          className={`editorial-aurora-layer absolute -inset-[20%] opacity-[0.55] ${maskClass}`.trim()}
          style={{
            background: `
              radial-gradient(ellipse 70% 55% at 15% 20%, color-mix(in srgb, var(--color-accent-soft) 55%, transparent) 0%, transparent 58%),
              radial-gradient(ellipse 55% 45% at 85% 25%, color-mix(in srgb, var(--color-surface-muted) 90%, transparent) 0%, transparent 52%),
              radial-gradient(ellipse 50% 40% at 50% 85%, color-mix(in srgb, var(--color-accent-soft) 35%, transparent) 0%, transparent 55%)
            `,
            filter: 'blur(48px)',
          }}
        />
        {/* Feines Raster – technisch, sehr leise */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-border) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
            maskImage: showRadialGradient
              ? 'radial-gradient(ellipse 100% 70% at 50% 40%, black 15%, transparent 75%)'
              : undefined,
          }}
        />
      </div>

      <div className="relative z-0 flex min-h-screen flex-1 flex-col">{children}</div>
    </div>
  )
}
