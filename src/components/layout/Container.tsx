import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  variant?: 'default' | 'reading'
  className?: string
}

export function Container({
  children,
  variant = 'default',
  className = '',
}: ContainerProps) {
  const maxWidth =
    variant === 'reading' ? 'var(--container-reading)' : 'var(--container-max)'

  return (
    <div
      className={`mx-auto w-full px-5 md:px-6 ${className}`}
      style={{ maxWidth }}
    >
      {children}
    </div>
  )
}
