import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  Bot,
  ChevronDown,
  Gamepad2,
  Menu,
  Video,
  X,
} from 'lucide-react'
import { Container } from './Container'
import { projectsData } from '../../data/projects'

const navItemsBefore = [
  { href: '#profil', label: 'Mein Profil' },
  { href: '#faehigkeiten', label: 'Meine Kompetenzen' },
] as const

const navItemsAfter = [
  { href: '#lebenslauf', label: 'Mein beruflicher Werdegang' },
  { href: '#hobbys', label: 'Meine Hobbys' },
  { href: '#warum-ich', label: 'Warum ich?' },
  { href: '#kontakt', label: 'Kontakt & Referenzen' },
] as const

const projectIconById: Record<string, typeof Video> = {
  'proj-1': Video,
  'proj-2': Gamepad2,
  'proj-3': Bot,
}

const MOBILE_SHEET_ID = 'mobile-nav-sheet'

interface NavbarProps {
  /** Bei Detailseiten: Basis-URL für Hash-Links (z. B. "./") */
  baseHref?: string
}

export function Navbar({ baseHref = '' }: NavbarProps) {
  const [projectsOpen, setProjectsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false)

  const resolveHref = (href: string) =>
    baseHref && href.startsWith('#') ? `${baseHref.replace(/#.*$/, '') || './'}${href}` : href
  const brandHref = baseHref ? baseHref.replace(/#.*$/, '') || './' : '#hero'

  const projectHref = (detailHref: string | undefined) => {
    if (!detailHref) return resolveHref('#projekte')
    return baseHref ? `${baseHref.replace(/#.*$/, '') || './'}${detailHref}` : detailHref
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileProjectsOpen(false)
  }

  useEffect(() => {
    if (!mobileMenuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
        setMobileProjectsOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileMenuOpen])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1280px)')
    const onChange = () => {
      if (mq.matches) {
        setMobileMenuOpen(false)
        setMobileProjectsOpen(false)
      }
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const linkClassDesktop =
    'inline-flex h-10 max-w-max items-center rounded-[var(--radius-small)] px-3 text-meta text-secondary transition-colors duration-[var(--duration-micro)] hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]'

  const linkClassMobile =
    'block w-full rounded-[var(--radius-small)] py-3 pl-1 text-left text-body text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]'

  const linkClassMobileStrong =
    'block w-full rounded-[var(--radius-small)] py-3 pl-1 text-left text-body font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]'

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container>
        <nav
          className="flex min-h-14 items-center justify-between gap-4 py-2 xl:py-0"
          aria-label="Hauptnavigation"
        >
          <a
            href={brandHref}
            className="shrink-0 font-display text-lg font-semibold text-primary transition-colors hover:text-[var(--color-accent)]"
          >
            Manuel Luthiger
          </a>

          {/* Desktop: ab xl */}
          <ul
            className="hidden flex-nowrap items-center gap-1 xl:flex"
            role="list"
          >
            {navItemsBefore.map(({ href, label }) => (
              <li key={href} className="shrink-0">
                <a href={resolveHref(href)} className={linkClassDesktop}>
                  {label}
                </a>
              </li>
            ))}
            <li
              className="relative shrink-0"
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
                className={`${linkClassDesktop} gap-1`}
                aria-expanded={projectsOpen}
                aria-haspopup="true"
                aria-label="Meine Projekte anzeigen"
              >
                Meine Projekte
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-[var(--duration-micro)] ${projectsOpen ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>
              {projectsOpen && (
                <div
                  className="absolute left-0 top-full z-50 pt-2"
                  role="menu"
                >
                  <ul
                    className="min-w-[20rem] max-w-[22rem] rounded-[var(--radius-small)] border border-[var(--color-border)] bg-[var(--color-surface)] p-2 shadow-[var(--shadow-card-hover)]"
                  >
                    {projectsData.projects.map((project) => {
                      const Icon = projectIconById[project.id] ?? Video
                      return (
                        <li key={project.id} role="none">
                          <a
                            href={projectHref(project.detailHref)}
                            className="flex select-none gap-3 rounded-[var(--radius-small)] p-3 leading-snug no-underline outline-none transition-colors hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-accent)]"
                            role="menuitem"
                            onClick={() => setProjectsOpen(false)}
                          >
                            <Icon
                              className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]"
                              strokeWidth={1.5}
                              aria-hidden
                            />
                            <div className="min-w-0">
                              <div className="text-sm font-semibold text-[var(--color-text-primary)]">
                                {project.title}
                              </div>
                              <p className="mt-0.5 line-clamp-2 text-xs text-[var(--color-text-tertiary)]">
                                {project.description}
                              </p>
                            </div>
                          </a>
                        </li>
                      )
                    })}
                    <li role="none" className="mt-1 border-t border-[var(--color-border)] pt-1">
                      <a
                        href={resolveHref('#projekte')}
                        className="block rounded-[var(--radius-small)] px-3 py-2.5 text-meta text-[var(--color-text-tertiary)] transition-colors hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-accent)]"
                        role="menuitem"
                        onClick={() => setProjectsOpen(false)}
                      >
                        Alle Projekte →
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            {navItemsAfter.map(({ href, label }) => (
              <li key={href} className="shrink-0">
                <a href={resolveHref(href)} className={linkClassDesktop}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobil: Trigger (Outline-Button) */}
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-small)] border border-[var(--color-border)] bg-[var(--color-surface)] text-secondary shadow-[var(--shadow-subtle)] transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] xl:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls={MOBILE_SHEET_ID}
            aria-label={mobileMenuOpen ? 'Menü schliessen' : 'Menü öffnen'}
            onClick={() => setMobileMenuOpen((o) => !o)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden strokeWidth={2} />
            ) : (
              <Menu className="h-5 w-5" aria-hidden strokeWidth={2} />
            )}
          </button>
        </nav>

        {/* Mobil: Sheet (Overlay + seitliches Panel) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                key="nav-backdrop"
                className="fixed inset-0 z-[60] bg-[var(--color-text-primary)]/25 xl:hidden"
                aria-hidden
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeMobileMenu}
              />
              <motion.aside
                key="nav-sheet"
                id={MOBILE_SHEET_ID}
                className="fixed inset-y-0 right-0 z-[70] flex w-[min(100%,22rem)] flex-col border-l border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card-hover)] xl:hidden"
                role="dialog"
                aria-modal="true"
                aria-label="Hauptnavigation"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
              >
                <div className="flex items-center justify-between gap-3 border-b border-[var(--color-border)] px-4 py-4">
                  <a
                    href={brandHref}
                    className="font-display text-lg font-semibold text-primary transition-colors hover:text-[var(--color-accent)]"
                    onClick={closeMobileMenu}
                  >
                    Manuel Luthiger
                  </a>
                  <button
                    type="button"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-small)] text-secondary transition-colors hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                    aria-label="Menü schliessen"
                    onClick={closeMobileMenu}
                  >
                    <X className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </button>
                </div>

                <nav
                  className="flex flex-1 flex-col overflow-y-auto px-4 py-4"
                  aria-label="Hauptnavigation mobil"
                >
                  <ul className="flex flex-col gap-1" role="list">
                    {navItemsBefore.map(({ href, label }) => (
                      <li key={href}>
                        <a
                          href={resolveHref(href)}
                          className={linkClassMobileStrong}
                          onClick={closeMobileMenu}
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                    <li className="border-b border-[var(--color-border)] pb-2">
                      <button
                        type="button"
                        className={`${linkClassMobileStrong} flex w-full items-center justify-between gap-2`}
                        aria-expanded={mobileProjectsOpen}
                        aria-controls="mobile-projects-sublist"
                        onClick={() => setMobileProjectsOpen((o) => !o)}
                      >
                        <span>Meine Projekte</span>
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 transition-transform duration-[var(--duration-micro)] ${mobileProjectsOpen ? 'rotate-180' : ''}`}
                          aria-hidden
                        />
                      </button>
                      {mobileProjectsOpen && (
                        <ul
                          id="mobile-projects-sublist"
                          className="mt-2 space-y-1 border-l border-[var(--color-border)] pl-4"
                          role="list"
                        >
                          {projectsData.projects.map((project) => {
                            const Icon = projectIconById[project.id] ?? Video
                            return (
                              <li key={project.id}>
                                <a
                                  href={projectHref(project.detailHref)}
                                  className="flex gap-3 rounded-[var(--radius-small)] py-2 pr-2 text-left transition-colors hover:bg-[var(--color-surface-muted)]"
                                  onClick={closeMobileMenu}
                                >
                                  <Icon
                                    className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]"
                                    strokeWidth={1.5}
                                    aria-hidden
                                  />
                                  <span className="min-w-0">
                                    <span className="block text-sm font-medium text-[var(--color-text-primary)]">
                                      {project.title}
                                    </span>
                                    <span className="mt-0.5 line-clamp-2 text-xs text-[var(--color-text-tertiary)]">
                                      {project.description}
                                    </span>
                                  </span>
                                </a>
                              </li>
                            )
                          })}
                          <li>
                            <a
                              href={resolveHref('#projekte')}
                              className={linkClassMobile}
                              onClick={closeMobileMenu}
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
                          className={linkClassMobileStrong}
                          onClick={closeMobileMenu}
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </Container>
    </header>
  )
}
