import { Container } from './Container'

interface FooterProps {
  /** Bei Detailseiten: Basis-URL für Hash-Links (z. B. "./") */
  baseHref?: string
}

export function Footer({ baseHref = '' }: FooterProps) {
  const contactHref = baseHref ? `${baseHref.replace(/#.*$/, '') || './'}#kontakt` : '#kontakt'

  return (
    <footer className="relative z-0 border-t border-[var(--color-border)] bg-[var(--color-surface-muted)] py-8">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-meta text-tertiary">
            Manuel Luthiger
          </p>
          <a
            href={contactHref}
            className="text-meta text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
          >
            Kontakt
          </a>
        </div>
      </Container>
    </footer>
  )
}
