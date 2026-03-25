import type { ReactNode } from 'react'
import { ArrowLeftRight, FlaskConical, Network, RefreshCw } from 'lucide-react'
import { warumIchData } from '../../data'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { AnimatedFeatureCard } from '../ui/animated-feature-card'

const graphicById: Record<string, ReactNode> = {
  'block-1': (
    <Network
      className="h-36 w-36 text-[var(--color-accent)]"
      strokeWidth={1.25}
      aria-hidden
    />
  ),
  'block-2': (
    <FlaskConical
      className="h-36 w-36 text-[var(--color-accent)]"
      strokeWidth={1.25}
      aria-hidden
    />
  ),
  'block-3': (
    <RefreshCw
      className="h-36 w-36 text-[var(--color-accent)]"
      strokeWidth={1.25}
      aria-hidden
    />
  ),
  'block-4': (
    <ArrowLeftRight
      className="h-36 w-36 text-[var(--color-accent)]"
      strokeWidth={1.25}
      aria-hidden
    />
  ),
}

export function WarumIchSection() {
  const { blocks } = warumIchData

  return (
    <Section
      id="warum-ich"
      className="border-t border-[var(--color-border)]"
      ariaLabelledby="warum-ich-heading"
    >
      <Container>
        <SectionHeading
          id="warum-ich-heading"
          title="Warum ich?"
          intro="Vier Differenzierungspunkte."
        />
        <div className="mt-8 flex flex-wrap items-stretch justify-center gap-8 md:justify-between lg:flex-nowrap lg:justify-center">
          {blocks.map((block) => (
            <article
              key={block.id}
              className="mx-auto h-full w-full max-w-sm"
              aria-labelledby={`warum-ich-${block.id}-heading`}
            >
              <AnimatedFeatureCard
                index=""
                tag={block.tag}
                imageSrc={block.imageSrc}
                imageAlt={block.imageAlt}
                graphic={graphicById[block.id]}
                title={
                  <>
                    <h3
                      id={`warum-ich-${block.id}-heading`}
                      className="font-display text-base font-semibold text-[var(--color-text-primary)] text-balance"
                    >
                      {block.title}
                    </h3>
                    <p className="mt-1.5 text-balance text-sm text-[var(--color-text-secondary)]">
                      {block.description}
                    </p>
                  </>
                }
              />
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
