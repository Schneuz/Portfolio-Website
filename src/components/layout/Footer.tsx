import { Container } from './Container'

export function Footer() {
  return (
    <footer className="relative z-0 border-t border-[var(--color-border)] bg-[var(--color-surface-muted)] py-8">
      <Container>
        <p className="text-meta text-tertiary">Manuel Luthiger</p>
      </Container>
    </footer>
  )
}
