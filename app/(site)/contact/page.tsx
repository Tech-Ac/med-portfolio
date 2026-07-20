import type { Metadata } from 'next'
import { Reveal } from '@/components/site/reveal'
import { ContactForm } from '@/components/site/contact-form'

export const metadata: Metadata = { title: 'Contact — Start a project', description: 'Start a brand identity, packaging, or restaurant branding project with SIMO Studio in Marrakech.' }

export default function ContactPage() {
  return (
    <div className="pt-28">
      <section className="mx-auto max-w-[1800px] px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[11px] tracking-luxury uppercase text-terracotta mb-6">Contact</p>
              <h1 className="font-display text-6xl lg:text-[72px] leading-luxury">Let&apos;s make something that lasts.</h1>
              <p className="mt-8 text-[16px] leading-7 text-muted-foreground text-pretty">We take on 2 new projects per month. Tell us about your restaurant, hotel, or product. We respond within 24 hours.</p>

              <div className="mt-16 space-y-8 border-t border-border pt-10">
                <div>
                  <p className="text-[11px] tracking-luxury uppercase text-muted-foreground mb-2">Email</p>
                  <a href="mailto:hello@simo.ma" className="text-lg hover:text-terracotta transition-colors">hello@simo.ma</a>
                </div>
                <div>
                  <p className="text-[11px] tracking-luxury uppercase text-muted-foreground mb-2">Studio</p>
                  <p className="text-sm leading-6 text-muted-foreground">Marrakech, Morocco<br />Available for projects worldwide<br />Site visits on request</p>
                </div>
                <div>
                  <p className="text-[11px] tracking-luxury uppercase text-muted-foreground mb-2">Response time</p>
                  <p className="text-sm text-muted-foreground">Within 24 hours, usually same day. No automated replies.</p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="border border-border p-8 lg:p-10 bg-background">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
