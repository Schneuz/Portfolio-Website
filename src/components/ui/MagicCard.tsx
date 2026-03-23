import type { ReactNode } from 'react'

interface MagicCardProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'article'
  'aria-labelledby'?: string
}

export function MagicCard({
  children,
  className = '',
  as: Component = 'div',
  'aria-labelledby': ariaLabelledby,
}: MagicCardProps) {
  return (
    <Component
      className={`
        group relative overflow-hidden rounded-[var(--radius-card)]
        border border-[var(--color-border)] bg-[var(--color-surface)]
        p-6 shadow-[var(--shadow-card)]
        transition-all duration-[var(--duration-standard)]
        hover:border-[var(--color-accent)]
        hover:shadow-[0_0_20px_rgba(47,110,115,0.08),var(--shadow-card-hover)]
        ${className}
      `.trim()}
      aria-labelledby={ariaLabelledby}
    >
      {/* Subtle gradient border glow on hover */}
      <div
        className="pointer-events-none absolute -inset-px -z-10 rounded-[var(--radius-card)] opacity-0 transition-opacity duration-[var(--duration-standard)] group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, transparent 40%, var(--color-accent-soft) 50%, transparent 60%)`,
          backgroundSize: '200% 200%',
          filter: 'blur(1px)',
        }}
      />
      {children}
    </Component>
  )
}
