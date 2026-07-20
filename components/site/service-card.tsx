import Link from 'next/link'
import type { Service } from '@/lib/data'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services#${service.slug}`} className="group block border border-border p-8 lg:p-10 hover:bg-secondary/50 transition-colors duration-500">
      <div className="flex justify-between items-start mb-12">
        <div className="w-12 h-12 rounded-full border border-border grid place-items-center group-hover:border-terracotta transition-colors">
          <div className="w-2 h-2 rounded-full bg-terracotta" />
        </div>
        <span className="text-[11px] tracking-luxury uppercase text-muted-foreground">{service.duration}</span>
      </div>
      <h3 className="font-display text-3xl lg:text-4xl leading-none mb-3">{service.title}</h3>
      <p className="text-[12px] tracking-luxury uppercase text-terracotta mb-6">{service.subtitle}</p>
      <p className="text-[15px] leading-6 text-muted-foreground text-pretty line-clamp-3">{service.description}</p>
      <div className="mt-8 flex items-center gap-2 text-[11px] tracking-luxury uppercase">
        <span>Learn more</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  )
}
