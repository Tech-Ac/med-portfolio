"use client"
import { motion } from 'motion/react'

export function Marquee({ text = 'SIMO — Marrakech — Brand Identity — Packaging — Restaurant Branding —' }: { text?: string }) {
  return (
    <div className="relative border-y border-border py-4 overflow-hidden bg-background">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex whitespace-nowrap"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="mx-8 font-display text-3xl tracking-tight text-foreground/70">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
