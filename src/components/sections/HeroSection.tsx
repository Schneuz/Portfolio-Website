import { heroData } from '../../data'
import { BlurText } from '../ui/BlurText'

export function HeroSection() {
  const {
    name,
    tagline,
    degreeLine,
    roleFocus,
    pitch,
    meta,
    imageSrc,
    imageAlt,
  } = heroData

  const nameParts = name
    ? name.split(/\s+/).filter(Boolean)
    : ['Portfolio']
  const firstName = nameParts[0]?.toUpperCase() ?? ''
  const lastName = nameParts.slice(1).join(' ').toUpperCase() ?? ''

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col"
      aria-labelledby="hero-heading"
    >
      <h1 id="hero-heading" className="sr-only">
        {name ?? 'Portfolio'}
      </h1>

      {/* Name und Tagline als zentrierte Spalte */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 pb-24 pt-20">
        <div className="relative flex w-full max-w-4xl flex-col items-center justify-center text-center">
          {firstName && (
            <div className="flex justify-center">
              <BlurText
                text={firstName}
                delay={100}
                animateBy="letters"
                direction="top"
                className="!flex-nowrap font-display font-bold leading-[0.75] tracking-tighter text-[var(--color-accent)]"
                style={{ fontSize: 'clamp(64px, 15vw, 210px)' }}
              />
            </div>
          )}
          {lastName && (
            <div className="flex justify-center">
              <BlurText
                text={lastName}
                delay={100}
                animateBy="letters"
                direction="top"
                className="!flex-nowrap font-display font-bold leading-[0.75] tracking-tighter text-[var(--color-accent)]"
                style={{ fontSize: 'clamp(64px, 15vw, 210px)' }}
              />
            </div>
          )}

          {/* Profilbild zentriert */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[110px] w-[65px] overflow-hidden rounded-full shadow-[var(--shadow-card)] transition-transform duration-[var(--duration-standard)] hover:scale-105 sm:h-[152px] sm:w-[90px] md:h-[185px] md:w-[110px] lg:h-[218px] lg:w-[129px]">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={imageAlt ?? ''}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center bg-[var(--color-surface-muted)]"
                  aria-hidden
                >
                  <span className="text-meta text-tertiary">
                    {name?.charAt(0) ?? '?'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tagline, Subline, Region und Pitch unterhalb des Namens */}
        <div className="mt-12 flex w-full max-w-2xl flex-col items-center gap-6 px-6">
          <div className="flex w-full justify-center">
            <BlurText
              text={tagline}
              delay={150}
              animateBy="words"
              direction="top"
              className="justify-center text-center text-body-large text-secondary sm:text-lg md:text-xl"
            />
          </div>
          {degreeLine && (
            <p className="text-center text-body text-secondary">
              {degreeLine}
            </p>
          )}
          {roleFocus && (
            <p className="text-center text-meta text-tertiary">
              {roleFocus}
            </p>
          )}
          {meta.length > 0 && (
            <p className="text-center text-meta text-tertiary">
              {meta.join(' · ')}
            </p>
          )}
          {pitch && (
            <p className="mx-auto max-w-xl text-center font-display text-lg font-bold leading-snug text-secondary sm:text-xl md:max-w-2xl">
              {pitch}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
