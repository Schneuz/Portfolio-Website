import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

const variantStyles: Record<
  ButtonVariant,
  string
> = {
  primary:
    'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] border-transparent shadow-[0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_1px_3px_rgba(0,0,0,0.08)]',
  secondary:
    'bg-transparent border border-[var(--color-border-strong)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
  ghost:
    'bg-transparent border-transparent text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] hover:underline',
}

const baseStyles =
  'inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-[var(--radius-button)] font-medium text-meta transition-colors duration-[var(--duration-standard)] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:opacity-50 disabled:cursor-not-allowed'

interface ButtonBaseProps {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
}

interface ButtonAsButtonProps
  extends ButtonBaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  href?: never
}

interface ButtonAsLinkProps
  extends ButtonBaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  href: string
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`.trim()

  if ('href' in props && props.href) {
    const { href, ...rest } = props
    return (
      <a href={href} className={styles} {...rest}>
        {children}
      </a>
    )
  }

  const { type = 'button', ...rest } = props as ButtonAsButtonProps
  return (
    <button type={type} className={styles} {...rest}>
      {children}
    </button>
  )
}
