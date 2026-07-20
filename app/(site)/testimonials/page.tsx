import { testimonials } from '@/lib/data'
import { TestimonialCard } from '@/components/site/testimonial-card'
import { Reveal } from '@/components/site/reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Testimonials — What clients say' }

export default function TestimonialsPage() {
  return (
    <div className="pt-28">
      <section className="mx-auto max-w-[1800px] px-6 lg:px-12 py-16 lg:py-24">
        <Reveal>
          <p className="text-[11px] tracking-luxury uppercase text-terracotta mb-6">Testimonials</p>
          <h1 className="font-display text-6xl lg:text-[80px] leading-luxury max-w-[12ch]">Clients become collaborators. Then friends.</h1>
        </Reveal>
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <Reveal key={t.id}>
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
