import * as z from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  budget: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(20, 'Message must be at least 20 characters').max(2000),
})

export type ContactFormData = z.infer<typeof contactSchema>

export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
})

export const projectSchema = z.object({
  title: z.string().min(2).max(200),
  slug: z.string().min(2).max(200),
  client: z.string().min(1),
  category: z.string().min(1),
  year: z.string().min(4).max(4),
  description: z.string().min(10),
  featured: z.boolean().default(false),
})

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})
