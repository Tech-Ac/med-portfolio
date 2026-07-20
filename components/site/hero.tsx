"use client"
import { motion } from 'motion/react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-charcoal">
      {/* Cinematic video background - using image as fallback, video overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-80"
          poster="https://images.unsplash.com/photo-1539024883564-01f6f6aa8d4c?q=80&w=2070"
        >
          <source src="https://videos.pexels.com/video-files/18069234/18069234-uhd_1440_1440_24fps.mp4" type="video/mp4" />
        </video>
        {/* Luxury gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-transparent" />
      </div>

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-luxury-grid" />

      {/* Content */}
      <div className="relative z-10 h-full mx-auto max-w-[1800px] px-6 lg:px-12 flex flex-col justify-end pb-20 lg:pb-28">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[11px] tracking-luxury uppercase text-background/60 mb-6 lg:mb-8"
          >
            Marrakech — Based, Globally Minded — Brand Identity & Packaging
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-[12vw] lg:text-[9vw] xl:text-[8.5vw] leading-luxury text-background font-[300] text-balance"
          >
            <span className="block overflow-hidden">
              <span className="block">Brands</span>
            </span>
            <span className="block overflow-hidden -mt-2 lg:-mt-6">
              <span className="block font-[400] italic text-background/90">rooted in</span>
            </span>
            <span className="block overflow-hidden -mt-2 lg:-mt-6">
              <span className="block">craft.</span>
            </span>
          </motion.h1>

          <div className="mt-10 lg:mt-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="max-w-[42ch] text-[16px] lg:text-[18px] leading-7 text-background/70 text-pretty"
            >
              We are SIMO — a Marrakech studio crafting timeless identities for restaurants, hotels, and product brands where Swiss precision meets Moroccan light.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center gap-4"
            >
              <Link
                href="/work"
                className="group relative inline-flex h-[56px] px-10 items-center bg-background text-charcoal text-[12px] tracking-luxury uppercase overflow-hidden"
              >
                <span className="relative z-10">Explore Work</span>
                <div className="absolute inset-0 bg-terracotta translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.25,0.1,0.25,1]" />
                <span className="absolute inset-0 grid place-items-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.25,0.1,0.25,1] z-10">Explore Work</span>
              </Link>
              <Link
                href="/contact"
                className="h-[56px] px-8 grid place-items-center border border-background/20 text-background text-[11px] tracking-luxury uppercase hover:bg-background/10 transition-colors"
              >
                Start a Project
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-6 lg:right-12 hidden lg:flex items-center gap-3 text-[10px] tracking-luxury uppercase text-background/40"
      >
        <span>Scroll</span>
        <div className="w-[60px] h-[1px] bg-background/20 overflow-hidden">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full w-full bg-background/60"
          />
        </div>
      </motion.div>
    </section>
  )
}
