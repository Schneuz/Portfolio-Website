import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { Badge } from './Badge'

interface BentoCardProps {
  eyebrow?: ReactNode
  title: ReactNode
  /** Untertitel zwischen Haupttitel und Beschreibung */
  subtitle?: ReactNode
  description?: ReactNode
  graphic?: ReactNode
  items?: string[]
  className?: string
  as?: 'article' | 'div'
  'aria-labelledby'?: string
  headingId?: string
}

export function BentoCard({
  eyebrow,
  title,
  subtitle,
  description,
  graphic,
  items,
  className = '',
  as: Component = 'div',
  'aria-labelledby': ariaLabelledby,
  headingId,
}: BentoCardProps) {
  const baseStyles =
    'group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)] transition-shadow duration-[var(--duration-standard)]'

  const MotionComponent = Component === 'article' ? motion.article : motion.div

  return (
    <MotionComponent
      initial="idle"
      whileHover="active"
      variants={{
        idle: {},
        active: {
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
        },
      }}
      transition={{ duration: 0.25 }}
      className={`${baseStyles} ${className}`.trim()}
      aria-labelledby={ariaLabelledby}
    >
      {/* Grafik-Bereich */}
      <div className="relative flex h-32 shrink-0 items-center justify-center bg-[var(--color-accent-soft)]">
        {graphic}
      </div>

      {/* Content-Bereich */}
      <div className="relative flex flex-1 flex-col items-center p-6 text-center">
        {eyebrow && (
          <span className="text-eyebrow text-tertiary block">{eyebrow}</span>
        )}
        <h3 id={headingId} className="mt-1 text-h4 font-semibold text-primary">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-2 text-body font-medium text-[var(--color-text-secondary)]">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="mt-2 text-body text-secondary whitespace-pre-line">
            {description}
          </p>
        )}
        {items && items.length > 0 && (
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {items.map((item) => (
              <Badge key={item} variant="default">
                {item}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </MotionComponent>
  )
}
