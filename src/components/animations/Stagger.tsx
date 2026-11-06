import { motion, useReducedMotion } from 'motion/react'
import { animationConfig } from './animation.config'

interface StaggerProps {
  children: React.ReactNode
  staggerDelay?: number
  childDuration?: number
  initial?: boolean
}

export function Stagger({
  children,
  staggerDelay = animationConfig.staggerDelay,
  childDuration = 0.6,
  initial = false,
}: StaggerProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={initial ? 'hidden' : undefined}
      animate={initial ? 'visible' : 'visible'}
      whileInView={!initial ? 'visible' : undefined}
      viewport={{ amount: animationConfig.viewportAmount, once: animationConfig.once }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
            delayChildren: 0,
          },
        },
      }}
    >
      {Array.isArray(children)
        ? children.map((child, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: animationConfig.revealDistance },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: childDuration,
                    ease: animationConfig.easing,
                  },
                },
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}
