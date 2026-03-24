import { hobbiesData } from '../../data/hobbies'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'

export function HobbySection() {
  const { intro, items } = hobbiesData

  return (
    <Section
      id="hobbys"
      className="border-t border-[var(--color-border)]"
      ariaLabelledby="hobbys-heading"
    >
      <Container>
        <SectionHeading id="hobbys-heading" title="Meine Hobbys" intro={intro} />

        <div className="mx-auto mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {items.map((item) => (
            <article
              key={item.id}
              className="min-w-0"
              aria-labelledby={`hobby-${item.id}-heading`}
            >
              <Card
                as="div"
                className="flex h-full flex-col items-center text-center shadow-[var(--shadow-card)] transition-shadow duration-[var(--duration-standard)]"
              >
                <h3
                  id={`hobby-${item.id}-heading`}
                  className="text-h4 font-medium text-[var(--color-text-primary)]"
                >
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-balance text-body text-[var(--color-text-secondary)]">
                  {item.link &&
                  item.descriptionBefore !== undefined &&
                  item.descriptionAfter !== undefined ? (
                    <>
                      {item.descriptionBefore}
                      <a
                        href={item.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[var(--color-accent)] underline-offset-2 transition-colors hover:text-[var(--color-accent-hover)] hover:underline"
                      >
                        {item.link.label}
                      </a>
                      {item.descriptionAfter}
                    </>
                  ) : (
                    item.description
                  )}
                </p>
              </Card>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
