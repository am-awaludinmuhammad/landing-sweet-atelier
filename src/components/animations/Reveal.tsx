import { motion, useReducedMotion } from 'motion/react'
import type { HTMLMotionProps } from 'motion/react'
import { animationConfig } from './animation.config'

interface RevealProps extends HTMLMotionProps<'div'> {
  direction?: 'up' | 'left' | 'right' | 'none'
  delay?: number
  duration?: number
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = animationConfig.fadeDuration,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const distance = animationConfig.revealDistance

  const hidden = {
    opacity: 0,
    x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
    y: direction === 'up' ? distance : 0,
  }

  return (
    <motion.div
      {...props}
      initial={shouldReduceMotion ? false : hidden}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: animationConfig.easing,
      }}
    >
      {children}
    </motion.div>
  )
}