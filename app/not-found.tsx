import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[100svh] grid place-items-center bg-background px-6">
      <div className="text-center">
        <p className="text-[11px] tracking-luxury uppercase text-terracotta mb-6">404 — Page not found</p>
        <h1 className="font-display text-6xl lg:text-[96px] leading-luxury">Lost in the medina?</h1>
        <p className="mt-6 max-w-[40ch] mx-auto text-muted-foreground">The page you are looking for does not exist or has been moved.</p>
        <Link href="/" className="mt-10 inline-flex h-12 px-8 items-center bg-charcoal text-background text-[11px] tracking-luxury uppercase hover:bg-charcoal-light transition-colors">
          Back to home
        </Link>
      </div>
    </div>
  )
}
