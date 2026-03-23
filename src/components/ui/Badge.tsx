import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'accent'
  className?: string
}

export function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  const bgClass =
    variant === 'accent'
      ? 'bg-[var(--color-accent-soft)] text-[var(--color-accent)]'
      : 'bg-[var(--color-surface-muted)] text-[var(--color-text-secondary)]'

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-meta ${bgClass} ${className}`.trim()}
    >
      {children}
    </span>
  )
}
