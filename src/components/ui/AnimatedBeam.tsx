import { useEffect, useState, useId } from 'react'
import { motion } from 'motion/react'

interface AnimatedBeamProps {
  fromRef: React.RefObject<HTMLElement | null>
  toRef: React.RefObject<HTMLElement | null>
  containerRef: React.RefObject<HTMLElement | null>
  curvature?: number
  gradientFrom?: string
  gradientTo?: string
}

export function AnimatedBeam({
  fromRef,
  toRef,
  containerRef,
  curvature = 20,
  gradientFrom = 'var(--color-accent)',
  gradientTo = 'var(--color-accent-soft)',
}: AnimatedBeamProps) {
  const [path, setPath] = useState('')
  const gradientId = `beam-${useId().replace(/:/g, '-')}`

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return
      const container = containerRef.current.getBoundingClientRect()
      const from = fromRef.current.getBoundingClientRect()
      const to = toRef.current.getBoundingClientRect()

      const startX = from.left - container.left + from.width / 2
      const startY = from.top - container.top + from.height / 2
      const endX = to.left - container.left + to.width / 2
      const endY = to.top - container.top + to.height / 2

      const midX = (startX + endX) / 2
      const controlY = Math.min(startY, endY) - curvature

      setPath(`M ${startX},${startY} Q ${midX},${controlY} ${endX},${endY}`)
    }

    updatePath()
    const observer = new ResizeObserver(updatePath)
    if (containerRef.current) observer.observe(containerRef.current)
    window.addEventListener('resize', updatePath)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updatePath)
    }
  }, [containerRef, fromRef, toRef, curvature])

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={gradientFrom} stopOpacity={0.4} />
          <stop offset="100%" stopColor={gradientTo} stopOpacity={0.4} />
        </linearGradient>
      </defs>
      <motion.path
        d={path || 'M 0,0 L 0,0'}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: path ? 1 : 0 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
    </svg>
  )
}
