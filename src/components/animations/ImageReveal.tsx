import { motion, useReducedMotion } from 'motion/react'
import { animationConfig } from './animation.config'

interface ImageRevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  initial?: boolean
}

export function ImageReveal({
  children,
  delay = 0,
  duration = animationConfig.imageDuration,
  initial = false,
}: ImageRevealProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={initial ? { opacity: 0, scale: 1.03 } : undefined}
      animate={initial ? { opacity: 1, scale: 1 } : undefined}
      whileInView={!initial ? { opacity: 1, scale: 1 } : undefined}
      viewport={{ amount: animationConfig.viewportAmount, once: animationConfig.once }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: animationConfig.easing,
      }}
    >
      {children}
    </motion.div>
  )
}
