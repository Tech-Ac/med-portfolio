import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validations'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid data', issues: parsed.error.issues }, { status: 400 })
    }

    const data = parsed.data

    // If Resend is configured, send email
    const resendKey = process.env.RESEND_API_KEY
    const to = process.env.CONTACT_TO_EMAIL || 'hello@simo.ma'

    if (resendKey) {
      const resend = new Resend(resendKey)
      await resend.emails.send({
        from: 'SIMO Studio <onboarding@resend.dev>',
        to: [to],
        subject: `New inquiry: ${data.service} — ${data.name}`,
        html: `
          <h2>New inquiry from ${data.name}</h2>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Company:</strong> ${data.company || '-'}</p>
          <p><strong>Service:</strong> ${data.service}</p>
          <p><strong>Budget:</strong> ${data.budget || '-'}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `,
      })
    }

    // TODO: Save to Supabase if configured
    // const supabase = await createClient()
    // if (supabase) await supabase.from('inquiries').insert(data)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact error', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
