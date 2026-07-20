"use client"
import Link from 'next/link'
import type { Route } from 'next'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links: { href: Route; label: string }[] = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/process', label: 'Process' },
  { href: '/journal', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500',
          scrolled ? 'bg-background/90 backdrop-blur-xl border-border' : 'bg-transparent border-transparent'
        )}
      >
        <div className="mx-auto max-w-[1800px] px-6 lg:px-12 h-[72px] flex items-center justify-between">
          <Link href="/" className="font-display text-[22px] tracking-tight font-medium">
            SIMO<span className="text-terracotta">.</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[11px] tracking-luxury uppercase text-foreground/70 hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex h-9 px-6 items-center bg-charcoal text-background text-[11px] tracking-luxury uppercase hover:bg-charcoal-light transition-colors"
            >
              Start a Project
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 grid place-items-center border border-border"
              aria-label="Menu"
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background lg:hidden"
          >
            <div className="pt-28 px-6 flex flex-col gap-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl leading-none hover:text-terracotta transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-12 border-t border-border mt-8">
                <p className="text-[11px] tracking-luxury uppercase text-muted-foreground mb-3">Get in touch</p>
                <a href="mailto:hello@simo.ma" className="text-lg">
                  hello@simo.ma
                </a>
                <p className="text-sm text-muted-foreground mt-2">Marrakech, Morocco</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
