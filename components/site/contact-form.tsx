"use client"
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@/lib/validations'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="py-16 text-center">
        <div className="w-12 h-12 rounded-full bg-terracotta/10 grid place-items-center mx-auto mb-6">
          <span className="text-terracotta text-xl">✓</span>
        </div>
        <h3 className="font-display text-2xl">Message received</h3>
        <p className="mt-3 text-sm text-muted-foreground">We will respond within 24 hours. Thank you for considering SIMO.</p>
        <Button variant="outline" size="lg" className="mt-8" onClick={() => setStatus('idle')}>Send another</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-[11px] tracking-luxury uppercase mb-2 block">Name *</label>
          <Input {...register('name')} placeholder="Your name" />
          {errors.name && <p className="mt-2 text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label className="text-[11px] tracking-luxury uppercase mb-2 block">Email *</label>
          <Input {...register('email')} placeholder="you@company.com" type="email" />
          {errors.email && <p className="mt-2 text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-[11px] tracking-luxury uppercase mb-2 block">Company</label>
          <Input {...register('company')} placeholder="Company or project name" />
        </div>
        <div>
          <label className="text-[11px] tracking-luxury uppercase mb-2 block">Budget</label>
          <select {...register('budget')} className="flex h-12 w-full border border-input bg-background px-4 text-sm">
            <option value="">Select budget</option>
            <option>30k - 50k MAD</option>
            <option>50k - 80k MAD</option>
            <option>80k - 120k MAD</option>
            <option>120k+ MAD</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-[11px] tracking-luxury uppercase mb-2 block">Service *</label>
        <select {...register('service')} className="flex h-12 w-full border border-input bg-background px-4 text-sm">
          <option value="">Select a service</option>
          <option value="brand-identity">Brand Identity</option>
          <option value="packaging">Packaging Design</option>
          <option value="restaurant">Restaurant Branding</option>
          <option value="hotel">Hotel Branding</option>
          <option value="other">Other</option>
        </select>
        {errors.service && <p className="mt-2 text-xs text-red-500">{errors.service.message}</p>}
      </div>

      <div>
        <label className="text-[11px] tracking-luxury uppercase mb-2 block">Message *</label>
        <Textarea {...register('message')} placeholder="Tell us about your project, timeline, and what matters most..." rows={6} />
        {errors.message && <p className="mt-2 text-xs text-red-500">{errors.message.message}</p>}
      </div>

      <Button type="submit" variant="luxury" size="lg" disabled={status === 'loading'} className="w-full">
        {status === 'loading' ? 'Sending...' : 'Send inquiry — 24h response'}
      </Button>

      {status === 'error' && <p className="text-sm text-red-500 text-center">Something went wrong. Please email hello@simo.ma directly.</p>}

      <p className="text-[11px] text-muted-foreground text-center leading-5">By sending, you agree to our privacy policy. We never share your information.</p>
    </form>
  )
}
