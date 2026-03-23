import type { MouseEvent } from 'react'
import { useState, useRef, useEffect, useCallback } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projectsData } from '../../data'
import type { ProjectData } from '../../data'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'

function lerp(start: number, end: number, factor: number) {
  return start + (end - start) * factor
}

function projectHref(project: ProjectData) {
  return project.ctas[0]?.href ?? '#'
}

export function ProjectsSection() {
  const { intro, projects } = projectsData

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [previewVisible, setPreviewVisible] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const handler = () => setReduceMotion(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (reduceMotion) return

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current != null) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition, reduceMotion])

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
      if (reduceMotion) {
        setSmoothPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    },
    [reduceMotion]
  )

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setPreviewVisible(true)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setPreviewVisible(false)
  }

  return (
    <Section
      id="projekte"
      className="border-t border-[var(--color-border)]"
      ariaLabelledby="projekte-heading"
    >
      <Container>
        <SectionHeading id="projekte-heading" title="Projekte" intro={intro} />

        <div
          ref={containerRef}
          role="list"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative mx-auto mt-8"
        >
          {/* Hover-Vorschau (md+, über dem Raster) */}
          <div
            className="pointer-events-none absolute z-10 hidden overflow-hidden rounded-[var(--radius-small)] border border-[var(--color-border)] shadow-[var(--shadow-card-hover)] md:block"
            style={{
              width: 260,
              height: 168,
              left: 0,
              top: 0,
              transform: `translate3d(${smoothPosition.x + 16}px, ${smoothPosition.y - 76}px, 0)`,
              opacity: previewVisible && hoveredIndex !== null ? 1 : 0,
              transition: reduceMotion
                ? 'opacity 0.15s ease'
                : 'opacity 0.25s ease, box-shadow 0.25s ease',
            }}
            aria-hidden
          >
            <div className="relative h-full w-full bg-[var(--color-surface-muted)]">
              {projects.map((project, index) =>
                project.imageSrc ? (
                  <img
                    key={project.id}
                    src={project.imageSrc}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{
                      opacity:
                        reduceMotion && hoveredIndex !== index
                          ? 0
                          : hoveredIndex === index
                            ? 1
                            : 0,
                      transform:
                        hoveredIndex === index ? 'scale(1)' : 'scale(1.04)',
                      filter:
                        hoveredIndex === index
                          ? 'none'
                          : reduceMotion
                            ? 'none'
                            : 'blur(8px)',
                      transition: reduceMotion
                        ? 'opacity 0.15s ease'
                        : 'opacity 0.35s ease, transform 0.35s ease, filter 0.35s ease',
                    }}
                  />
                ) : (
                  <div
                    key={project.id}
                    className="absolute inset-0 flex items-center justify-center bg-[var(--color-surface-muted)] text-meta text-[var(--color-text-tertiary)]"
                    style={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      transition: 'opacity 0.25s ease',
                    }}
                    aria-hidden
                  >
                    {project.title}
                  </div>
                )
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/25 to-transparent" />
            </div>
          </div>

          {/* Mobil: untereinander · Tablet/Desktop: horizontal nebeneinander */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {projects.map((project, index) => {
              const href = projectHref(project)
              return (
                <div key={project.id} role="listitem" className="min-w-0">
                  <a
                    href={href}
                    className="group block h-full no-underline hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
                    onMouseEnter={() => handleMouseEnter(index)}
                    aria-labelledby={`projekt-${project.id}-heading`}
                  >
                    <Card
                      as="div"
                      className={`flex h-full flex-col items-center text-center transition-shadow duration-[var(--duration-standard)] ${hoveredIndex === index ? 'shadow-[var(--shadow-card-hover)]' : ''}`.trim()}
                    >
                      {project.year && (
                        <span className="mb-2 font-mono text-xs tabular-nums text-[var(--color-text-tertiary)]">
                          {project.year}
                        </span>
                      )}
                      <div className="flex items-center justify-center gap-2">
                        <h3
                          id={`projekt-${project.id}-heading`}
                          className="text-h4 font-medium text-[var(--color-text-primary)]"
                        >
                          <span className="relative inline-block">
                            {project.title}
                            <span
                              className="absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-[var(--color-text-primary)] transition-all duration-[var(--duration-standard)]"
                              style={{
                                width:
                                  hoveredIndex === index ? '100%' : '0%',
                              }}
                            />
                          </span>
                        </h3>
                        <ArrowUpRight
                          className="h-4 w-4 shrink-0 text-[var(--color-text-tertiary)] transition-all duration-[var(--duration-standard)]"
                          style={{
                            opacity: hoveredIndex === index ? 1 : 0,
                            transform:
                              hoveredIndex === index
                                ? 'translate(0, 0)'
                                : 'translate(-6px, 6px)',
                          }}
                          aria-hidden
                        />
                      </div>

                      <p className="mt-4 flex-1 text-balance text-body text-[var(--color-text-secondary)]">
                        {project.description}
                      </p>

                      <p className="mt-4 text-balance text-meta text-[var(--color-text-tertiary)]">
                        {project.context}
                      </p>

                      <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {project.stack.map((tech) => (
                          <Badge key={tech} variant="default">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
