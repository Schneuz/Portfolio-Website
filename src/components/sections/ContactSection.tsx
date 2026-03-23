import { Github, Linkedin, Mail } from 'lucide-react'
import { contactData } from '../../data'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'

function resolveHref(href: string): string {
  if (href.startsWith('/') && !href.startsWith('//')) {
    return import.meta.env.BASE_URL + href.slice(1)
  }
  return href
}

export function ContactSection() {
  const { closingText, links } = contactData

  const emailLink = links.find((l) => l.type === 'email')
  const socialLinks = links.filter(
    (l) => l.type === 'linkedin' || l.type === 'github'
  )

  return (
    <Section
      id="kontakt"
      className="border-t border-[var(--color-border)] bg-[var(--color-surface-muted)] py-20 md:py-24"
      ariaLabelledby="kontakt-heading"
    >
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <SectionHeading
            id="kontakt-heading"
            title="Kontakt"
            intro={closingText}
          />

          <nav
            className="mt-10 flex w-full flex-col items-center gap-8"
            aria-label="Kontaktmöglichkeiten"
          >
            {emailLink && (
              <Button
                href={resolveHref(emailLink.href)}
                variant="primary"
                className="inline-flex min-w-[min(100%,280px)] gap-2"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden />
                {emailLink.label}
              </Button>
            )}

            {socialLinks.length > 0 && (
              <ul
                className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-meta"
                role="list"
              >
                {socialLinks.map((link, index) => {
                  const href = resolveHref(link.href)
                  const isLinkedIn = link.type === 'linkedin'
                  return (
                    <li
                      key={link.href}
                      className="flex items-center gap-x-1"
                    >
                      {index > 0 && (
                        <span
                          className="mx-2 text-[var(--color-text-tertiary)]"
                          aria-hidden
                        >
                          ·
                        </span>
                      )}
                      <Button
                        href={href}
                        variant="ghost"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex gap-2"
                      >
                        {isLinkedIn ? (
                          <Linkedin className="h-4 w-4 shrink-0" aria-hidden />
                        ) : (
                          <Github className="h-4 w-4 shrink-0" aria-hidden />
                        )}
                        {isLinkedIn ? 'LinkedIn' : 'GitHub'}
                      </Button>
                    </li>
                  )
                })}
              </ul>
            )}
          </nav>
        </div>
      </Container>
    </Section>
  )
}
