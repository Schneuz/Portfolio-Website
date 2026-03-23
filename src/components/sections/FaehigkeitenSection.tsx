import { mindmapData } from '../../data'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'

/**
 * Absolute Positionen der vier Äste.
 * Vertikal (oben/unten): Top-Box mit bottom, Bottom-Box mit top – gleicher Abstand
 * zur Zentrumsbox. Horizontal (links/rechts): weiter auseinander (näher am Rand).
 */
const branchPositions: Array<{
  top?: string
  bottom?: string
  left?: string
  right?: string
  transform: string
}> = [
  /* Technische Fähigkeiten: bottom-basiert, Abstand zur Mitte = Abstand Sprachen zur Mitte */
  { bottom: '65%', left: '50%', transform: 'translateX(-50%)' },
  /* Arbeitsweise: weiter vom Zentrum */
  { top: '50%', right: '3%', transform: 'translateY(-50%)' },
  /* Sprachen: top-basiert, gleicher Abstand zur Mitte wie Technische Fähigkeiten */
  { top: '65%', left: '50%', transform: 'translateX(-50%)' },
  /* Themen & Fokus: weiter vom Zentrum */
  { top: '50%', left: '3%', transform: 'translateY(-50%)' },
]

/** SVG-Linien: Zentrum (50,50) zu den Ast-Zentren, an branchPositions angepasst */
const lineEnds = [
  { x: 50, y: 35 },
  { x: 82, y: 50 },
  { x: 50, y: 65 },
  { x: 18, y: 50 },
] as const

export function FaehigkeitenSection() {
  const { centralNode, branches } = mindmapData

  return (
    <Section
      id="faehigkeiten"
      className="border-t border-[var(--color-border)]"
      ariaLabelledby="faehigkeiten-heading"
    >
      <Container>
        <SectionHeading
          id="faehigkeiten-heading"
          title="Kompetenzen"
          intro={`${centralNode} – strukturiert in ${branches.length} Bereichen.`}
        />

        {/* Mobile: gestapelte Cards – keine Mindmap */}
        <div className="mt-8 space-y-5 lg:hidden">
          {branches.map((branch) => (
            <Card
              key={branch.id}
              as="article"
              aria-labelledby={`faehigkeiten-${branch.id}`}
            >
              <h3
                id={`faehigkeiten-${branch.id}`}
                className="text-h4 text-primary"
              >
                {branch.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {branch.children?.map((child) => (
                  <Badge key={child.id} variant="default">
                    {child.label}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Desktop: feste Mindmap mit absoluter Positionierung */}
        <div
          className="relative mx-auto mt-8 hidden h-[560px] w-full max-w-[920px] lg:block"
          role="img"
          aria-label={`Mindmap: ${centralNode} mit ${branches.length} Bereichen`}
        >
          {/* SVG-Verbindungslinien */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            {lineEnds.map((end, i) => (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={end.x}
                y2={end.y}
                stroke="var(--color-border)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>

          {/* Zentrale Node */}
          <div
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
            style={{ maxWidth: '14rem' }}
          >
            <Card
              as="div"
              className="border-[var(--color-border-strong)] px-6 py-5 text-center shadow-[var(--shadow-card-hover)]"
            >
              <h3 className="text-h3 font-semibold leading-tight text-primary">
                {centralNode}
              </h3>
            </Card>
          </div>

          {/* Vier Äste */}
          {branches.map((branch, i) => {
            const pos = branchPositions[i]
            const isHorizontal = i === 0 || i === 2
            return (
            <div
              key={branch.id}
              className={`absolute z-10 flex justify-center ${isHorizontal ? 'w-auto max-w-[22rem]' : 'w-full max-w-[11rem]'}`}
              style={{
                ...(pos.top && { top: pos.top }),
                ...(pos.bottom && { bottom: pos.bottom }),
                ...(pos.left && { left: pos.left }),
                ...(pos.right && { right: pos.right }),
                transform: pos.transform,
              }}
            >
              <Card
                as="article"
                className="w-full p-4 text-center"
                aria-labelledby={`faehigkeiten-desktop-${branch.id}`}
              >
                <h4
                  id={`faehigkeiten-desktop-${branch.id}`}
                  className="text-h4 font-semibold leading-snug text-primary"
                >
                  {branch.label}
                </h4>
                <div className={`mt-3 flex justify-center gap-2 ${isHorizontal ? 'flex-row flex-wrap' : 'flex-col items-center'}`}>
                  {branch.children?.map((child) => (
                    <Badge key={child.id} variant="default">
                      {child.label}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
