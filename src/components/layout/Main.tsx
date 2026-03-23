import type { ReactNode } from 'react'

interface MainProps {
  children: ReactNode
}

export function Main({ children }: MainProps) {
  return (
    <main className="relative z-0 flex-1">
      {children}
    </main>
  )
}
