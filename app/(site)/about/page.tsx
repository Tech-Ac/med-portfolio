import type { Metadata } from 'next'
import { Reveal } from '@/components/site/reveal'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About — SIMO Studio Marrakech',
  description: 'SIMO is a brand identity, packaging, and restaurant branding studio based in Marrakech, blending Swiss precision with Moroccan craft.',
}

export default function AboutPage() {
  return (
    <div className="pt-28">
      <section className="mx-auto max-w-[1800px] px-6 lg:px-12 py-16 lg:py-24">
        <Reveal>
          <p className="text-[11px] tracking-luxury uppercase text-terracotta mb-8">About Studio</p>
          <h1 className="font-display text-[12vw] lg:text-[10vw] leading-luxury tracking-tight max-w-[12ch]">Swiss grids. Moroccan light.</h1>
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] bg-limestone overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887" alt="SIMO" fill className="object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-12">
            <Reveal>
              <h2 className="font-display text-3xl lg:text-4xl leading-[1.1] text-balance">I am SIMO, a brand identity designer based in Marrakech. I help restaurants, hotels, and product brands build worlds worth remembering.</h2>
              <div className="mt-10 space-y-6 text-[16px] leading-8 text-muted-foreground">
                <p>For six years I have worked between Marrakech, Paris, and Milan, collaborating with chefs, hoteliers, and founders who care deeply about craft. My background is in graphic design and architecture — two disciplines that taught me that timelessness is not an accident, it is a series of deliberate, quiet decisions.</p>
                <p>The studio is small by choice. Two projects at a time. Every identity is built from research, material studies, and long conversations about what will still feel true in ten years.</p>
                <p>Inspiration comes from the shadow lines of riad courtyards, the weight of hand-pressed paper, the precision of Swiss typography, and the way terracotta darkens after rain.</p>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-10">
                <div>
                  <p className="text-[11px] tracking-luxury uppercase text-muted-foreground mb-3">Expertise</p>
                  <ul className="space-y-2 text-sm">
                    <li>Brand Identity</li>
                    <li>Packaging Design</li>
                    <li>Restaurant Branding</li>
                    <li>Hotel Branding</li>
                    <li>Art Direction</li>
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] tracking-luxury uppercase text-muted-foreground mb-3">Recognition</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Wallpaper* — 2024</li>
                    <li>Architectural Digest — 2024</li>
                    <li>D&AD Packaging Gold — 2023</li>
                    <li>Condé Nast Hot List — 2024</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-[1800px] px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid lg:grid-cols-3 gap-16">
            <div>
              <p className="font-display text-5xl leading-none mb-4">01</p>
              <h3 className="font-display text-xl mb-3">No templates. No trends.</h3>
              <p className="text-sm leading-6 text-muted-foreground">Every project starts with a blank page. We research, we walk the site, we study materials before we open Figma.</p>
            </div>
            <div>
              <p className="font-display text-5xl leading-none mb-4">02</p>
              <h3 className="font-display text-xl mb-3">Built to last a decade.</h3>
              <p className="text-sm leading-6 text-muted-foreground">We design identities that age gracefully, like limestone and olive wood. Not loud, just confident.</p>
            </div>
            <div>
              <p className="font-display text-5xl leading-none mb-4">03</p>
              <h3 className="font-display text-xl mb-3">Craft is the strategy.</h3>
              <p className="text-sm leading-6 text-muted-foreground">Paper weight, emboss depth, shadow gap — these details are not decoration. They are the brand.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
