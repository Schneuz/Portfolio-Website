import type { ReactNode } from 'react'

interface RetroGridProps {
  className?: string
  children?: ReactNode
  /** Grid-Linien-Winkel in Grad */
  angle?: number
  /** Zellgroesse in px */
  cellSize?: number
}

export function RetroGrid({
  className = '',
  children,
  angle = 65,
  cellSize = 60,
}: RetroGridProps) {
  return (
    <div className={`relative overflow-hidden ${className}`.trim()}>
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
          `,
          backgroundSize: `${cellSize}px ${cellSize}px`,
          transform: `rotate(${angle}deg) scale(1.4)`,
        }}
      />
      {children}
    </div>
  )
}
