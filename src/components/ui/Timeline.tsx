import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

export interface TimelineItem {
  id: string
  title: string
  content: ReactNode
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const measure = () => setHeight(el.getBoundingClientRect().height)

    measure()

    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [items])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div
      ref={containerRef}
      className="w-full bg-[var(--color-background)] font-sans"
    >
      <div ref={ref} className="relative mx-auto max-w-5xl pb-16">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-start pt-8 md:gap-10 md:pt-24"
          >
            <div className="sticky top-24 z-40 flex max-w-xs flex-col items-center self-start md:top-32 md:flex-row md:w-full lg:max-w-sm">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface)] md:left-3">
                <div className="h-3.5 w-3.5 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface-muted)]" />
              </div>
              <h3 className="hidden text-xl font-bold text-[var(--color-text-tertiary)] md:block md:pl-20 md:text-3xl lg:text-4xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-3 block text-left text-2xl font-bold text-[var(--color-text-tertiary)] md:hidden">
                {item.title}
              </h3>
              <div className="text-[var(--color-text-primary)]">{item.content}</div>
            </div>
          </div>
        ))}

        <div
          className="absolute left-8 top-0 w-0.5 overflow-hidden bg-[linear-gradient(to_bottom,var(--color-border)_0%,var(--color-border-strong)_50%,transparent_100%)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          style={{ height }}
        >
          <motion.div
            className="absolute inset-x-0 top-0 w-0.5 rounded-full bg-[linear-gradient(to_top,var(--color-accent)_0%,var(--color-accent-soft)_45%,transparent_100%)]"
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
          />
        </div>
      </div>
    </div>
  )
}
