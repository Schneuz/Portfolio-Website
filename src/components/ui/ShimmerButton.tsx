import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

const base =
  'relative inline-flex h-11 items-center justify-center overflow-hidden rounded-[var(--radius-button)] px-6 font-medium transition-all duration-[var(--duration-standard)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] disabled:opacity-50 disabled:pointer-events-none'

interface ShimmerButtonBaseProps {
  children: ReactNode
  className?: string
}

type ShimmerButtonProps =
  | (ShimmerButtonBaseProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>)
  | (ShimmerButtonBaseProps & { href?: never } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>)

export function ShimmerButton({
  children,
  className = '',
  ...props
}: ShimmerButtonProps) {
  const styles = `${base} bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] ${className}`.trim()

  return (
    <span className="relative inline-block">
      <span
        className="absolute inset-0 -z-10 animate-shimmer opacity-30"
        style={{
          background:
            'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)',
          backgroundSize: '200% 100%',
        }}
      />
      {'href' in props && props.href ? (
        <a
          href={props.href}
          className={styles}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      ) : (
        <button type="button" className={styles} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
          {children}
        </button>
      )}
    </span>
  )
}
