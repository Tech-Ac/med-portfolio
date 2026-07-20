import type { Metadata } from 'next'
import { services } from '@/lib/data'
import { Reveal } from '@/components/site/reveal'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services — Brand Identity, Packaging, Restaurant Branding',
  description: 'Brand identity, packaging design, and restaurant branding services from Marrakech.',
}

export default function ServicesPage() {
  return (
    <div className="pt-28">
      <section className="mx-auto max-w-[1800px] px-6 lg:px-12 py-16 lg:py-24">
        <Reveal>
          <p className="text-[11px] tracking-luxury uppercase text-terracotta mb-6">Services</p>
          <h1 className="font-display text-6xl lg:text-[88px] leading-luxury max-w-[12ch]">Brand, packaging, and spaces that turn guests into advocates.</h1>
          <p className="mt-8 max-w-[50ch] text-[18px] leading-8 text-muted-foreground text-pretty">We work with founders who care about the long game. Two projects per month, deep collaboration, no handoffs.</p>
        </Reveal>

        <div className="mt-24 space-y-32">
          {services.map((s, i) => (
            <div key={s.id} id={s.slug} className="grid lg:grid-cols-12 gap-12 border-t border-border pt-16 scroll-mt-28">
              <div className="lg:col-span-2">
                <span className="font-display text-6xl text-border">0{i+1}</span>
              </div>
              <div className="lg:col-span-5">
                <h2 className="font-display text-4xl lg:text-5xl leading-none mb-3">{s.title}</h2>
                <p className="text-[12px] tracking-luxury uppercase text-terracotta mb-8">{s.subtitle}</p>
                <p className="text-[16px] leading-7 text-muted-foreground text-pretty">{s.description}</p>
                <div className="mt-10 flex gap-6 text-[11px] tracking-luxury uppercase">
                  <span className="border border-border px-4 py-2">{s.price}</span>
                  <span className="border border-border px-4 py-2">{s.duration}</span>
                </div>
              </div>
              <div className="lg:col-span-5">
                <ul className="space-y-4">
                  {s.features.map((f) => (
                    <li key={f} className="flex gap-3 border-b border-border pb-4 text-sm">
                      <span className="text-terracotta">—</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-10 inline-flex h-12 px-8 items-center bg-charcoal text-background text-[11px] tracking-luxury uppercase hover:bg-charcoal-light transition-colors">
                  Start this project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-background">
        <div className="mx-auto max-w-[1800px] px-6 lg:px-12 py-24 text-center">
          <h2 className="font-display text-4xl lg:text-5xl leading-none max-w-[20ch] mx-auto text-balance">Not sure what you need? Let&apos;s talk. 30 min, no pitch.</h2>
          <Link href="/contact" className="mt-10 inline-flex h-14 px-12 items-center bg-background text-charcoal text-[11px] tracking-luxury uppercase">Book a call</Link>
        </div>
      </section>
    </div>
  )
}
