import { journalPosts } from '@/lib/data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return journalPosts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = journalPosts.find(p => p.slug === slug)
  if (!post) return {}
  return { title: `${post.title} — Journal`, description: post.excerpt }
}

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params
  const post = journalPosts.find(p => p.slug === slug)
  if (!post) notFound()

  return (
    <div className="pt-28">
      <article className="mx-auto max-w-[900px] px-6 lg:px-12 py-16">
        <p className="text-[11px] tracking-luxury uppercase text-terracotta mb-6">{post.category} — {post.date} — {post.readTime}</p>
        <h1 className="font-display text-4xl lg:text-6xl leading-[0.95] text-balance">{post.title}</h1>
        <p className="mt-6 text-[18px] leading-8 text-muted-foreground text-pretty">{post.excerpt}</p>
        <div className="mt-12 relative aspect-[16/10] bg-limestone overflow-hidden">
          <Image src={post.cover} alt={post.title} fill className="object-cover" />
        </div>
        <div className="mt-12 prose prose-neutral max-w-none">
          <p className="text-[16px] leading-8">{post.content} Lorem ipsum dolor sit amet, consectetur adipiscing elit. In Marrakech, light moves differently — it filters through mashrabiya, bounces off tadelakt, and settles slowly on terracotta. That slowness is a design principle.</p>
          <p className="mt-6 text-[16px] leading-8">We believe luxury is not about more. It is about enough, done exceptionally well. A single typeface, well set. A paper that feels like linen. A shadow gap that is exactly 8mm, not 10.</p>
        </div>
      </article>
    </div>
  )
}
