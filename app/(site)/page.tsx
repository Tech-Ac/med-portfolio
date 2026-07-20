import { Hero } from '@/components/site/hero'
import { ProjectCard } from '@/components/site/project-card'
import { ServiceCard } from '@/components/site/service-card'
import { Marquee } from '@/components/site/marquee'
import { Reveal } from '@/components/site/reveal'
import { projects, services, testimonials } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const featured = projects.filter((p) => p.featured)
  const featuredTestimonial = testimonials[0]
  return (
    <>
      <Hero />

      <Marquee />

      {/* Intro */}
      <section className="mx-auto max-w-[1800px] px-6 lg:px-12 py-24 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-[42px] lg:text-[72px] leading-[0.9] tracking-tight text-balance">
                We design brands that feel like they have <span className="italic font-[300]">always belonged.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <Reveal delay={0.2}>
              <p className="text-[17px] leading-8 text-muted-foreground text-pretty">
                Based between the terracotta walls of Marrakech and the precision of Swiss grids, we help restaurants, hotels, and product makers build identities that endure. No trends. No clichés. Just quiet, confident craft.
              </p>
              <div className="mt-10 flex gap-10 border-t border-border pt-8">
                <div>
                  <p className="font-display text-4xl leading-none">80+</p>
                  <p className="mt-2 text-[11px] tracking-luxury uppercase text-muted-foreground">Projects Delivered</p>
                </div>
                <div>
                  <p className="font-display text-4xl leading-none">12</p>
                  <p className="mt-2 text-[11px] tracking-luxury uppercase text-muted-foreground">Awards & Features</p>
                </div>
                <div>
                  <p className="font-display text-4xl leading-none">6</p>
                  <p className="mt-2 text-[11px] tracking-luxury uppercase text-muted-foreground">Years in Marrakech</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="border-t border-border bg-secondary/20">
        <div className="mx-auto max-w-[1800px] px-6 lg:px-12 py-24 lg:py-32">
          <div className="flex items-end justify-between mb-16">
            <Reveal>
              <h2 className="font-display text-5xl lg:text-6xl leading-none">Selected Work</h2>
              <p className="mt-4 text-[13px] tracking-luxury uppercase text-muted-foreground">2023 — 2024 — Marrakech to Paris</p>
            </Reveal>
            <Link href="/work" className="hidden lg:inline-flex text-[11px] tracking-luxury uppercase border-b border-foreground pb-1 hover:text-terracotta hover:border-terracotta transition-colors">
              View all projects
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.1}>
                <ProjectCard project={p} index={i} />
              </Reveal>
            ))}
          </div>

          <div className="mt-16 lg:hidden">
            <Link href="/work" className="inline-flex text-[11px] tracking-luxury uppercase border-b border-foreground pb-1">
              View all projects
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-[1800px] px-6 lg:px-12 py-24 lg:py-32">
        <Reveal>
          <p className="text-[11px] tracking-luxury uppercase text-terracotta mb-6">What we do</p>
          <h2 className="font-display text-5xl lg:text-[64px] leading-[0.9] max-w-[18ch] text-balance">Brand, packaging, and spaces that turn guests into advocates.</h2>
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-3 gap-px bg-border border border-border">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      {/* Testimonial highlight */}
      <section className="bg-charcoal text-background">
        <div className="mx-auto max-w-[1800px] px-6 lg:px-12 py-24 lg:py-40">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-[11px] tracking-luxury uppercase text-background/50 mb-8">Testimonials</p>
              <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-light">
                <Image src={featuredTestimonial!.avatar} alt={featuredTestimonial!.name} fill className="object-cover" />
              </div>
            </div>
            <div className="lg:col-span-7 lg:pl-12">
              <blockquote className="font-display text-[32px] lg:text-[48px] leading-[1.1] text-balance">
                “SIMO understood our vision before we could articulate it. The identity feels like it has always existed in Marrakech.”
              </blockquote>
              <div className="mt-10 flex items-center gap-4">
                <div>
                  <p className="font-medium">{featuredTestimonial!.name}</p>
                  <p className="text-sm text-background/60">{featuredTestimonial!.role}, {featuredTestimonial!.company}</p>
                </div>
              </div>
              <Link href="/testimonials" className="mt-16 inline-flex h-12 px-8 items-center border border-background/20 text-[11px] tracking-luxury uppercase hover:bg-background hover:text-charcoal transition-colors">
                Read all testimonials
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1800px] px-6 lg:px-12 py-24 lg:py-32">
        <div className="border border-border p-10 lg:p-20 text-center">
          <Reveal>
            <p className="text-[11px] tracking-luxury uppercase text-terracotta mb-6">Start a project</p>
            <h2 className="font-display text-5xl lg:text-[80px] leading-[0.9] tracking-tight text-balance mx-auto max-w-[14ch]">
              Let&apos;s make something that lasts.
            </h2>
            <p className="mt-8 max-w-[50ch] mx-auto text-[17px] leading-7 text-muted-foreground text-pretty">
              We take on 2 new brand identity projects per month. Tell us about your restaurant, hotel, or product.
            </p>
            <Link href="/contact" className="mt-10 inline-flex h-14 px-12 items-center bg-charcoal text-background text-[12px] tracking-luxury uppercase hover:bg-charcoal-light transition-colors">
              Inquire — Response in 24h
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
