import { timelineData } from '../../data'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Timeline } from '../ui/Timeline'

export function LebenslaufSection() {
  const { entries } = timelineData

  const items = [...entries].reverse().map((entry) => ({
    id: entry.id,
    title: entry.period,
    content: (
      <div>
        <h4 className="text-h4 text-[var(--color-text-primary)]">
          {entry.title}
        </h4>
        <p className="mt-2 text-body text-[var(--color-text-secondary)]">
          {entry.context}
        </p>
      </div>
    ),
  }))

  return (
    <Section
      id="lebenslauf"
      className="border-t border-[var(--color-border)]"
      ariaLabelledby="lebenslauf-heading"
    >
      <Container>
        <SectionHeading
          id="lebenslauf-heading"
          title="Mein beruflicher Werdegang"
          intro={`${entries.length} Stationen – neueste zuerst.`}
        />
        <div className="mt-8">
          <Timeline items={items} />
        </div>
      </Container>
    </Section>
  )
}
