import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Privacy Policy' }
export default function PrivacyPage() {
  return (
    <div className="pt-28 mx-auto max-w-[800px] px-6 lg:px-12 py-16">
      <h1 className="font-display text-5xl leading-none mb-12">Privacy Policy</h1>
      <div className="prose prose-neutral max-w-none space-y-6 text-[15px] leading-7 text-muted-foreground">
        <p>Last updated: December 2024</p>
        <p>SIMO Studio respects your privacy. We collect only what we need to respond to inquiries and improve our services.</p>
        <h2 className="font-display text-xl text-foreground mt-10">Data we collect</h2>
        <p>Contact form data (name, email, message), analytics (anonymized), and cookies for essential functionality.</p>
        <h2 className="font-display text-xl text-foreground mt-10">How we use it</h2>
        <p>To respond to inquiries, send occasional journal updates if you subscribe, and analyze site usage.</p>
        <h2 className="font-display text-xl text-foreground mt-10">Contact</h2>
        <p>hello@simo.ma</p>
      </div>
    </div>
  )
}
