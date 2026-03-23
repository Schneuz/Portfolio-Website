import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'article'
  'aria-labelledby'?: string
}

export function Card({
  children,
  className = '',
  as: Component = 'div',
  'aria-labelledby': ariaLabelledby,
}: CardProps) {
  return (
    <Component
      className={`rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)] transition-shadow duration-[var(--duration-standard)] hover:shadow-[var(--shadow-card-hover)] ${className}`.trim()}
      aria-labelledby={ariaLabelledby}
    >
      {children}
    </Component>
  )
}
