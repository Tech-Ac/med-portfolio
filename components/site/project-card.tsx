import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/lib/data'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-limestone">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-[0.25,0.1,0.25,1] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 text-[10px] tracking-luxury uppercase">
          {(index + 1).toString().padStart(2, '0')}
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-[22px] leading-none group-hover:text-terracotta transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-[13px] text-muted-foreground">
            {project.category} — {project.year}
          </p>
        </div>
        <div className="text-[11px] tracking-luxury uppercase text-muted-foreground group-hover:text-foreground transition-colors">
          {project.location}
        </div>
      </div>
    </Link>
  )
}
