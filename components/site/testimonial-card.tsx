import Image from 'next/image'
import type { Testimonial } from '@/lib/data'

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="border border-border p-8 lg:p-10 bg-background">
      <div className="flex gap-1 mb-6">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-terracotta">★</span>
        ))}
      </div>
      <blockquote className="font-display text-xl lg:text-2xl leading-[1.3] text-pretty">
        “{testimonial.content}”
      </blockquote>
      <div className="mt-8 flex items-center gap-4">
        <div className="relative w-11 h-11 rounded-full overflow-hidden bg-limestone">
          <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-medium">{testimonial.name}</p>
          <p className="text-[12px] text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  )
}
