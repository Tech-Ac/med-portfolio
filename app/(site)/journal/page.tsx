import { journalPosts } from '@/lib/data'
import { Reveal } from '@/components/site/reveal'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Journal — Thoughts on craft, Marrakech, and brand' }

export default function JournalPage() {
  return (
    <div className="pt-28">
      <section className="mx-auto max-w-[1800px] px-6 lg:px-12 py-16 lg:py-24">
        <Reveal>
          <p className="text-[11px] tracking-luxury uppercase text-terracotta mb-6">Journal</p>
          <h1 className="font-display text-6xl lg:text-[80px] leading-luxury">Notes on craft, light, and material.</h1>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-2 gap-12">
          {journalPosts.map((post) => (
            <Link key={post.id} href={`/journal/${post.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-limestone">
                <Image src={post.cover} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-[1s]" />
              </div>
              <div className="mt-6">
                <div className="flex gap-3 text-[11px] tracking-luxury uppercase text-muted-foreground">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-3 font-display text-2xl leading-tight group-hover:text-terracotta transition-colors">{post.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
