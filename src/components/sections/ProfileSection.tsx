import { User, Search, Layers, Sparkles } from 'lucide-react'
import { profileData } from '../../data'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { BentoCard } from '../ui/BentoCard'
import type { ProfileCard } from '../../data'

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  'wer-bin-ich': User,
  'was-suche-ich': Search,
  schwerpunkte: Layers,
  perspektive: Sparkles,
}

function getCardGraphic(card: ProfileCard) {
  const Icon = iconMap[card.id]
  if (!Icon) return null
  return (
    <Icon
      className="h-12 w-12 text-[var(--color-accent)] sm:h-14 sm:w-14"
      strokeWidth={1.5}
    />
  )
}

export function ProfileSection() {
  const { cards } = profileData

  return (
    <Section
      id="profil"
      className="border-t border-[var(--color-border)]"
      ariaLabelledby="profil-heading"
    >
      <Container>
        <SectionHeading
          id="profil-heading"
          title="Mein Profil"
          intro="Hintergrund, Ziele, Schwerpunkte und Arbeitsweise."
        />
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {cards.map((card) => (
            <BentoCard
              key={card.id}
              as="article"
              aria-labelledby={`card-${card.id}-heading`}
              headingId={`card-${card.id}-heading`}
              title={card.title}
              subtitle={card.subtitle}
              description={card.content}
              items={card.items}
              graphic={getCardGraphic(card)}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
