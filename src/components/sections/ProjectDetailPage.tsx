import { useRef } from 'react'
import {
  AlertCircle,
  Bot,
  Brain,
  Camera,
  CheckCircle,
  Code,
  Database,
  Eye,
  FileJson,
  ListChecks,
  MessageSquare,
  MonitorSmartphone,
  Repeat,
  Rocket,
  Scale,
  Scan,
  Search,
  Server,
  Shield,
  ShieldAlert,
  Target,
  Terminal,
  User,
  UserCheck,
  Users,
  Video,
  Wifi,
  Workflow,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import type { ProjectDetailData } from '../../data/types'
import { RetroGrid } from '../ui/RetroGrid'
import { MagicCard } from '../ui/MagicCard'
import { AnimatedBeam } from '../ui/AnimatedBeam'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'

const iconMap: Record<string, LucideIcon> = {
  User,
  Bot,
  Users,
  Code,
  CheckCircle,
  Search,
  Rocket,
  ListChecks,
  Shield,
  Scale,
  Camera,
  Eye,
  Scan,
  ScanEye: Scan,
  Workflow,
  Server,
  Terminal,
  Video,
  Wifi,
  Zap,
  Brain,
  MessageSquare,
  MonitorSmartphone,
  Repeat,
  UserCheck,
  ShieldAlert,
  FileJson,
  Database,
}

function NodeIcon({ name }: { name?: string }) {
  const Icon = name ? iconMap[name] ?? Code : Code
  return <Icon className="h-5 w-5 shrink-0" aria-hidden />
}

interface ProjectDetailPageProps {
  data: ProjectDetailData
}

export function ProjectDetailPage({ data }: ProjectDetailPageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const nodeRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]

  const {
    title,
    subline,
    category,
    imageSrc,
    imageAlt,
    analysis,
    flowSteps,
    techStack,
    ctas,
    architectureNodes,
    phases,
    rules,
  } = data

  const nodes =
    architectureNodes ??
    flowSteps.map((s) => ({ id: s.id, label: s.label, icon: undefined }))

  return (
    <>
      {/* 1. Hero mit Retro Grid + Projektbild */}
      <section
        id="project-hero"
        className="relative border-b border-[var(--color-border)] pt-16 pb-12 md:pt-20 md:pb-16"
        aria-labelledby="project-hero-heading"
      >
        <RetroGrid className="absolute inset-0" cellSize={50} angle={65}>
          <div className="absolute inset-0 bg-[var(--color-background)]/80" />
        </RetroGrid>
        <Container className="relative z-10">
          <div className="flex flex-col items-center text-center">
            {imageSrc && (
              <img
                src={imageSrc}
                alt={imageAlt ?? ''}
                className="mb-6 max-h-48 w-auto rounded-[var(--radius-card)] border border-[var(--color-border)] object-cover shadow-[var(--shadow-card-hover)] md:max-h-56"
              />
            )}
            <Badge variant="accent" className="mb-4">
              {category}
            </Badge>
            <h1
              id="project-hero-heading"
              className="text-h1 font-display text-[var(--color-text-primary)]"
            >
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-body-large text-[var(--color-text-secondary)]">
              {subline}
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Analysis (Magic Card) */}
      <Section
        id="project-analysis"
        className="border-t border-[var(--color-border)]"
        ariaLabelledby="project-analysis-heading"
      >
        <Container>
          <header className="mb-8 text-center">
            <span className="text-eyebrow text-[var(--color-text-tertiary)]">
              Analyse
            </span>
            <h2
              id="project-analysis-heading"
              className="mt-2 text-h2 text-[var(--color-text-primary)]"
            >
              Herausforderung & Ziel
            </h2>
          </header>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <MagicCard as="div" aria-labelledby="analysis-challenge">
              <div className="flex gap-3">
                <AlertCircle
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-text-tertiary)]"
                  aria-hidden
                />
                <div>
                  <h3
                    id="analysis-challenge"
                    className="text-h4 font-medium text-[var(--color-text-primary)]"
                  >
                    Herausforderung
                  </h3>
                  <p className="mt-2 text-body text-[var(--color-text-secondary)]">
                    {analysis.challenge}
                  </p>
                </div>
              </div>
            </MagicCard>
            <MagicCard as="div" aria-labelledby="analysis-goal">
              <div className="flex gap-3">
                <Target
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]"
                  aria-hidden
                />
                <div>
                  <h3
                    id="analysis-goal"
                    className="text-h4 font-medium text-[var(--color-text-primary)]"
                  >
                    Ziel
                  </h3>
                  <p className="mt-2 text-body text-[var(--color-text-secondary)]">
                    {analysis.goal}
                  </p>
                </div>
              </div>
            </MagicCard>
          </div>
        </Container>
      </Section>

      {/* 3. Architecture (Animated Beam) */}
      <Section
        id="project-architecture"
        className="border-t border-[var(--color-border)] bg-[var(--color-surface-muted)]"
        spacing="lg"
        ariaLabelledby="project-architecture-heading"
      >
        <Container>
          <header className="mb-8 text-center">
            <span className="text-eyebrow text-[var(--color-text-tertiary)]">
              Technische Architektur
            </span>
            <h2
              id="project-architecture-heading"
              className="mt-2 text-h2 text-[var(--color-text-primary)]"
            >
              {phases && phases.length > 0 ? 'Phasen-Flow' : 'Datenfluss'}
            </h2>
          </header>

          <div
            ref={containerRef}
            className="relative min-h-[200px] rounded-[var(--radius-card)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-8 md:min-h-[160px] md:py-10"
            style={{
              backgroundImage: `
                linear-gradient(var(--color-border) 1px, transparent 1px),
                linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px',
            }}
          >
            <div className="flex flex-col items-stretch justify-between gap-6 md:flex-row md:gap-4">
              {nodes.map((node, index) => (
                <div
                  key={node.id}
                  ref={nodeRefs[index]}
                  className="flex min-w-0 flex-1 flex-col items-center justify-center gap-2 rounded-[var(--radius-small)] border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-4 py-4 text-center"
                >
                  <NodeIcon name={node.icon} />
                  <span className="text-h4 font-medium text-[var(--color-text-primary)]">
                    {node.label}
                  </span>
                </div>
              ))}
            </div>

            {nodes.length >= 2 &&
              nodeRefs.slice(0, nodes.length - 1).map((_, i) => (
                <AnimatedBeam
                  key={i}
                  containerRef={containerRef}
                  fromRef={nodeRefs[i]}
                  toRef={nodeRefs[i + 1]}
                  curvature={30}
                />
              ))}
          </div>
        </Container>
      </Section>

      {/* 4. Core Principles (Bento Grid) – optional */}
      {rules && rules.length > 0 && (
        <Section
          id="project-rules"
          className="border-t border-[var(--color-border)]"
          ariaLabelledby="project-rules-heading"
        >
          <Container>
            <header className="mb-8 text-center">
              <span className="text-eyebrow text-[var(--color-text-tertiary)]">
                Kernregeln
              </span>
              <h2
                id="project-rules-heading"
                className="mt-2 text-h2 text-[var(--color-text-primary)]"
              >
                Prinzipien
              </h2>
            </header>
            <div className="grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rules.map((rule, i) => (
                <MagicCard
                  key={rule.id}
                  as="article"
                  className={
                    i === 0 || i === 3 ? 'sm:col-span-2 lg:col-span-2' : ''
                  }
                  aria-labelledby={`rule-${rule.id}`}
                >
                  <div className="flex gap-3">
                    <NodeIcon name={rule.icon} />
                    <div>
                      <h3
                        id={`rule-${rule.id}`}
                        className="text-h4 font-medium text-[var(--color-text-primary)]"
                      >
                        {rule.title}
                      </h3>
                      <p className="mt-2 text-body text-[var(--color-text-secondary)]">
                        {rule.description}
                      </p>
                    </div>
                  </div>
                </MagicCard>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* 5. Commands/Phases – optional */}
      {phases && phases.length > 0 && (
        <Section
          id="project-commands"
          className="border-t border-[var(--color-border)]"
          ariaLabelledby="project-commands-heading"
        >
          <Container>
            <header className="mb-8 text-center">
              <span className="text-eyebrow text-[var(--color-text-tertiary)]">
                CLI
              </span>
              <h2
                id="project-commands-heading"
                className="mt-2 text-h2 text-[var(--color-text-primary)]"
              >
                Befehle nach Phase
              </h2>
            </header>
            <ul className="space-y-4" role="list">
              {phases.map((p, index) => (
                <motion.li
                  key={p.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                  }}
                  className="flex flex-col gap-2 rounded-[var(--radius-small)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:flex-row sm:items-center sm:gap-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs tabular-nums text-[var(--color-text-tertiary)]">
                      {String(p.phase).padStart(2, '0')}
                    </span>
                    <NodeIcon name={p.icon} />
                    <span className="text-h4 font-medium text-[var(--color-text-primary)]">
                      {p.title}
                    </span>
                  </div>
                  {p.command && (
                    <code className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-3 py-1 font-mono text-sm text-[var(--color-text-secondary)] sm:ml-auto">
                      {p.command}
                    </code>
                  )}
                </motion.li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      {/* 6. Tech-Stack + CTAs */}
      <Section
        id="project-tech"
        className="border-t border-[var(--color-border)] bg-[var(--color-surface-muted)]"
        ariaLabelledby="project-tech-heading"
      >
        <Container>
          <header className="mb-8 text-center">
            <span className="text-eyebrow text-[var(--color-text-tertiary)]">
              Tech-Stack
            </span>
            <h2
              id="project-tech-heading"
              className="mt-2 text-h2 text-[var(--color-text-primary)]"
            >
              Technologien & Aktionen
            </h2>
          </header>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech.label}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-meta text-[var(--color-text-secondary)]"
              >
                <NodeIcon name={tech.icon} />
                {tech.label}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {ctas.map((cta) => (
              <Button
                key={cta.href + cta.label}
                href={cta.href}
                variant={cta.variant ?? 'primary'}
                {...(cta.href.startsWith('http') && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
              >
                {cta.label}
              </Button>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
