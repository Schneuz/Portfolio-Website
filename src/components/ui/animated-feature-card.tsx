import * as React from 'react'
import { motion } from 'motion/react'

export interface AnimatedFeatureCardProps {
  /** z. B. "001" */
  index: string
  tag: string
  title: React.ReactNode
  /** Zentrales Bild */
  imageSrc?: string
  imageAlt?: string
  /** Falls kein Bild: z. B. Lucide-Icon */
  graphic?: React.ReactNode
  className?: string
}

export const AnimatedFeatureCard = React.forwardRef<
  HTMLDivElement,
  AnimatedFeatureCardProps
>(
  (
    { className = '', index, tag, title, imageSrc, imageAlt, graphic },
    ref
  ) => {
    const baseClass =
      'relative flex h-full min-h-[380px] w-full max-w-sm flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]'

    return (
      <motion.div
        ref={ref}
        className={`${baseClass} ${className}`.trim()}
        initial="initial"
        whileHover="hover"
        variants={{
          initial: { y: 0 },
          hover: {
            y: -10,
            boxShadow:
              '0 4px 16px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04)',
          },
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.35]"
          style={{
            background:
              'radial-gradient(circle at 50% 22%, var(--color-accent-soft) 0%, transparent 65%)',
          }}
        />

        {index && (
          <div
            className="absolute left-6 top-6 z-10 font-mono text-lg font-bold text-[var(--color-text-tertiary)]"
            aria-hidden
          >
            {index}
          </div>
        )}

        {/* Icon-Bereich: oben, volle Sicht – kein Überdecken durch den Text */}
        <motion.div
          className="relative z-[1] flex min-h-0 flex-1 flex-col items-center justify-center pb-2 pt-10"
          variants={{
            initial: { scale: 1, y: 0 },
            hover: { scale: 1.08, y: -6 },
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt ?? tag}
              className="h-32 w-32 object-contain sm:h-36 sm:w-36"
            />
          ) : (
            graphic
          )}
        </motion.div>

        {/* Text: eigener Block unten, liegt nicht über dem Icon */}
        <div className="relative z-20 mt-auto shrink-0 rounded-[var(--radius-small)] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-center shadow-[var(--shadow-subtle)]">
          <span className="mb-2 inline-block rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-accent)]">
            {tag}
          </span>
          <div className="text-sm text-[var(--color-text-primary)]">
            {title}
          </div>
        </div>
      </motion.div>
    )
  }
)

AnimatedFeatureCard.displayName = 'AnimatedFeatureCard'
