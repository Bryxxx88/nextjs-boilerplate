// /components/RevealSection.tsx
'use client'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function RevealSection({
  children,
  id,
  className = '',
}: {
  children: ReactNode
  id?: string
  className?: string
}) {
  return (
    <motion.section
      id={id}
      className={`reveal-section ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      variants={variants}
    >
      {children}
    </motion.section>
  )
}