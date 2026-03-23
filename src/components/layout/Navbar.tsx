import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Container } from './Container'
import { projectsData } from '../../data/projects'

const navItemsBefore = [
  { href: '#profil', label: 'Profil & Ziele' },
  { href: '#faehigkeiten', label: 'Kompetenzen' },
] as const

const navItemsAfter = [
  { href: '#lebenslauf', label: 'Lebenslauf' },
  { href: '#warum-ich', label: 'Warum ich' },
  { href: '#kontakt', label: 'Kontakt' },
] as const

interface NavbarProps {
  /** Bei Detailseiten: Basis-URL für Hash-Links (z. B. "./") */
  baseHref?: string
}

export function Navbar({ baseHref = '' }: NavbarProps) {
  const [projectsOpen, setProjectsOpen] = useState(false)

  const resolveHref = (href: string) =>
    baseHref && href.startsWith('#') ? `${baseHref.replace(/#.*$/, '') || './'}${href}` : href
  const brandHref = baseHref ? baseHref.replace(/#.*$/, '') || './' : '#hero'

  const projectHref = (detailHref: string | undefined) => {
    if (!detailHref) return resolveHref('#projekte')
    return baseHref ? `${baseHref.replace(/#.*$/, '') || './'}${detailHref}` : detailHref
  }

  return (
    // z-50: über interaktiven Karten (z. B. z-20), damit der Sticky-Header nicht überdeckt wird.
    // AuroraBackground: innerer Wrapper ist z-0; Navbar bleibt Geschwister von <main>, kein Sticky-Bruch.
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container>
        <nav
          className="flex h-14 flex-wrap items-center justify-between gap-4"
          aria-label="Hauptnavigation"
        >
          <a
            href={brandHref}
            className="font-display font-semibold text-primary transition-colors hover:text-[var(--color-accent)]"
          >
            Manuel Luthiger
          </a>
          <ul className="flex flex-wrap items-center gap-6" role="list">
            {navItemsBefore.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={resolveHref(href)}
                  className="text-meta text-secondary transition-colors hover:text-[var(--color-accent)]"
                >
                  {label}
                </a>
              </li>
            ))}
            <li
              className="relative"
              onMouseEnter={() => setProjectsOpen(true)}
              onMouseLeave={() => setProjectsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setProjectsOpen((o) => !o)}
                onFocus={() => setProjectsOpen(true)}
                onBlur={(e) => {
                  if (!e.currentTarget.closest('li')?.contains(e.relatedTarget as Node)) {
                    setProjectsOpen(false)
                  }
                }}
                className="flex items-center gap-1 text-meta text-secondary transition-colors hover:text-[var(--color-accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]"
                aria-expanded={projectsOpen}
                aria-haspopup="true"
                aria-label="Projekte anzeigen"
              >
                Projekte
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-[var(--duration-micro)] ${projectsOpen ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>
              {projectsOpen && (
                <ul
                  className="absolute left-0 top-full z-50 pt-2 min-w-[220px] rounded-[var(--radius-small)] border border-[var(--color-border)] bg-[var(--color-surface)] py-2 shadow-[var(--shadow-card-hover)]"
                  role="menu"
                >
                  {projectsData.projects.map((project) => (
                    <li key={project.id} role="none">
                      <a
                        href={projectHref(project.detailHref)}
                        className="block px-4 py-2 text-meta text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-accent)]"
                        role="menuitem"
                        onClick={() => setProjectsOpen(false)}
                      >
                        {project.title}
                      </a>
                    </li>
                  ))}
                  <li role="none" className="mt-2 border-t border-[var(--color-border)] pt-2">
                    <a
                      href={resolveHref('#projekte')}
                      className="block px-4 py-2 text-meta text-[var(--color-text-tertiary)] transition-colors hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-accent)]"
                      role="menuitem"
                      onClick={() => setProjectsOpen(false)}
                    >
                      Alle Projekte →
                    </a>
                  </li>
                </ul>
              )}
            </li>
            {navItemsAfter.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={resolveHref(href)}
                  className="text-meta text-secondary transition-colors hover:text-[var(--color-accent)]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
