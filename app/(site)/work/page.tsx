import type { Metadata } from 'next'
import { projects } from '@/lib/data'
import { ProjectCard } from '@/components/site/project-card'
import { Reveal } from '@/components/site/reveal'

export const metadata: Metadata = {
  title: 'Work — Selected Projects',
  description: 'Selected brand identity, packaging, and restaurant branding work from SIMO Studio Marrakech.',
}

export default function WorkPage() {
  return (
    <div className="pt-28">
      <section className="mx-auto max-w-[1800px] px-6 lg:px-12 py-16 lg:py-24">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <p className="text-[11px] tracking-luxury uppercase text-terracotta mb-6">Work — 2023—2024</p>
              <h1 className="font-display text-6xl lg:text-[96px] leading-luxury">Selected<br />Projects</h1>
            </div>
            <p className="max-w-[36ch] text-[15px] leading-7 text-muted-foreground text-pretty lg:text-right">
              Each project is a collaboration built on research, materiality, and time. We take on few, so each can be complete.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-2 gap-8 lg:gap-12 gap-y-16">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
