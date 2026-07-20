import { ProcessStep } from '@/components/site/process-step'
import { Reveal } from '@/components/site/reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Process — How we work' }

const steps = [
  {
    number: '01',
    title: 'Discovery & Research',
    description: 'We start by listening. Long conversations, site visits, material research, competitive audit. We want to understand what will still be true in 10 years.',
    details: ['Founder interviews', 'Site & context analysis', 'Material & cultural research', 'Audience & positioning'],
  },
  {
    number: '02',
    title: 'Strategy & Direction',
    description: 'From research we define positioning, naming if needed, and a visual direction. Two routes, presented with rationale, not decoration.',
    details: ['Brand strategy', 'Positioning & messaging', 'Visual directions', 'Client workshop'],
  },
  {
    number: '03',
    title: 'Identity & System',
    description: 'We build the identity system — logo, typography, color, grid, photography, iconography. Every element is tested at tiny and huge sizes.',
    details: ['Logo & wordmark', 'Typography & color', 'Grid & layout system', 'Photography direction'],
  },
  {
    number: '04',
    title: 'Applications',
    description: 'Identity applied to real touchpoints: packaging, menus, signage, uniforms, website. We produce, we press-check, we adjust on site.',
    details: ['Packaging & print', 'Signage & wayfinding', 'Digital & website', 'Production follow-up'],
  },
]

export default function ProcessPage() {
  return (
    <div className="pt-28">
      <section className="mx-auto max-w-[1800px] px-6 lg:px-12 py-16 lg:py-24">
        <Reveal>
          <p className="text-[11px] tracking-luxury uppercase text-terracotta mb-6">Process</p>
          <h1 className="font-display text-6xl lg:text-[80px] leading-luxury max-w-[16ch]">Slow, deliberate, and deeply considered.</h1>
          <p className="mt-8 max-w-[50ch] text-[17px] leading-8 text-muted-foreground">We take on two projects at a time. No account managers. You work directly with SIMO from first call to final delivery.</p>
        </Reveal>

        <div className="mt-24">
          {steps.map((s) => (
            <ProcessStep key={s.number} {...s} />
          ))}
        </div>

        <div className="mt-24 border border-border p-10 lg:p-16 bg-secondary/20">
          <div className="grid lg:grid-cols-2 gap-12">
            <h2 className="font-display text-3xl lg:text-4xl leading-[1.1]">Timeline & Investment</h2>
            <div className="space-y-6 text-sm leading-7 text-muted-foreground">
              <p>Brand identity: 6-8 weeks, from 45,000 MAD. Packaging: 4-6 weeks, from 30,000 MAD. Restaurant branding: 8-12 weeks, from 65,000 MAD.</p>
              <p>50% to start, 50% on delivery. Includes all concepts, refinements, final files, guidelines, and 3 months of support.</p>
              <p>We are based in Marrakech, work globally, and travel for site visits when needed.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
