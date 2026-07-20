import { projects } from '@/lib/data'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Reveal } from '@/components/site/reveal'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} — ${project.client}`,
    description: project.description,
    openGraph: {
      images: [project.cover],
    },
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <div className="pt-28">
      <section className="mx-auto max-w-[1800px] px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <p className="text-[11px] tracking-luxury uppercase text-terracotta mb-6">{project.category} — {project.year}</p>
            <h1 className="font-display text-6xl lg:text-[88px] leading-luxury">{project.title}</h1>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-sm text-muted-foreground">{project.location}</p>
            <p className="font-display text-xl mt-2">{project.client}</p>
          </div>
        </div>

        <div className="mt-12 relative aspect-[16/10] overflow-hidden bg-limestone">
          <Image src={project.cover} alt={project.title} fill className="object-cover" priority />
        </div>

        <div className="mt-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="font-display text-2xl mb-4">Overview</h2>
                <p className="text-[15px] leading-7 text-muted-foreground">{project.description}</p>
              </div>
              <div>
                <h2 className="font-display text-2xl mb-4">Challenge</h2>
                <p className="text-[15px] leading-7 text-muted-foreground">{project.challenge}</p>
              </div>
              <div>
                <h2 className="font-display text-2xl mb-4">Strategy</h2>
                <p className="text-[15px] leading-7 text-muted-foreground">{project.solution}</p>
              </div>
              <div>
                <h2 className="font-display text-2xl mb-4">Outcome</h2>
                <p className="text-[15px] leading-7 text-muted-foreground">{project.outcome}</p>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-[11px] tracking-luxury uppercase text-muted-foreground mb-8">Gallery</h2>
              <div className="grid gap-8">
                {project.gallery.map((img, i) => (
                  <div key={i} className="relative aspect-[16/10] overflow-hidden bg-limestone">
                    <Image src={img} alt={`${project.title} ${i}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-28 border border-border p-8">
              <h3 className="font-display text-xl mb-6">Project Info</h3>
              <div className="space-y-6 text-sm">
                <div><p className="text-[11px] tracking-luxury uppercase text-muted-foreground mb-1">Client</p><p>{project.client}</p></div>
                <div><p className="text-[11px] tracking-luxury uppercase text-muted-foreground mb-1">Year</p><p>{project.year}</p></div>
                <div><p className="text-[11px] tracking-luxury uppercase text-muted-foreground mb-1">Services</p><ul className="space-y-1">{project.services.map(s => <li key={s}>{s}</li>)}</ul></div>
                <div><p className="text-[11px] tracking-luxury uppercase text-muted-foreground mb-3">Colors</p><div className="flex gap-2">{project.colors.map(c => <div key={c.hex} className="w-8 h-8 rounded-full border border-border" style={{ background: c.hex }} title={c.name} />)}</div></div>
                <div><p className="text-[11px] tracking-luxury uppercase text-muted-foreground mb-3">Typography</p><ul className="space-y-1 text-muted-foreground">{project.typography.map(t => <li key={t.name}>{t.name} — {t.usage}</li>)}</ul></div>
              </div>

              <Link href="/contact" className="mt-10 flex h-12 items-center justify-center bg-charcoal text-background text-[11px] tracking-luxury uppercase hover:bg-charcoal-light transition-colors">
                Start Similar Project
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-24 flex justify-between border-t border-border pt-8">
          <Link href="/work" className="text-[11px] tracking-luxury uppercase hover:text-terracotta transition-colors">← All Projects</Link>
          <Link href="/contact" className="text-[11px] tracking-luxury uppercase hover:text-terracotta transition-colors">Inquire →</Link>
        </div>
      </section>
    </div>
  )
}
