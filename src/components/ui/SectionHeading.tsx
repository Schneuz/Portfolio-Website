interface SectionHeadingProps {
  eyebrow?: string
  title: string
  intro?: string
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
}: SectionHeadingProps) {
  return (
    <header className="space-y-3 text-center">
      {eyebrow && (
        <span className="text-eyebrow text-tertiary block">{eyebrow}</span>
      )}
      <h2 id={id} className="text-h2 text-primary">
        {title}
      </h2>
      {intro && (
        <p className="mx-auto max-w-[720px] text-body-large text-secondary">
          {intro}
        </p>
      )}
    </header>
  )
}
