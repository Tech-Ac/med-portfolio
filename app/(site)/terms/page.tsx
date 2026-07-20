import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Terms of Service' }
export default function TermsPage() {
  return (
    <div className="pt-28 mx-auto max-w-[800px] px-6 lg:px-12 py-16">
      <h1 className="font-display text-5xl leading-none mb-12">Terms of Service</h1>
      <div className="prose prose-neutral max-w-none space-y-6 text-[15px] leading-7 text-muted-foreground">
        <p>By accessing simo.ma you agree to these terms.</p>
        <h2 className="font-display text-xl text-foreground mt-10">Intellectual Property</h2>
        <p>All work, images, and copy on this site are property of SIMO Studio. Do not reproduce without permission.</p>
        <h2 className="font-display text-xl text-foreground mt-10">Services</h2>
        <p>Proposals are valid 30 days. 50% deposit to start. Final files delivered upon full payment.</p>
      </div>
    </div>
  )
}
