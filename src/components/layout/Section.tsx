import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  children: ReactNode
  spacing?: 'default' | 'lg'
  className?: string
  ariaLabelledby?: string
}

export function Section({
  id,
  children,
  spacing = 'default',
  className = '',
  ariaLabelledby,
}: SectionProps) {
  const spacingClass = spacing === 'lg' ? 'section-spacing-lg' : 'section-spacing'

  return (
    <section
      id={id}
      className={`${spacingClass} ${className}`.trim()}
      aria-labelledby={ariaLabelledby}
    >
      {children}
    </section>
  )
}
