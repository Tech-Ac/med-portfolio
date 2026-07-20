import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href="/" className="font-display text-3xl font-medium">
              SIMO<span className="text-terracotta">.</span>
            </Link>
            <p className="mt-6 max-w-[36ch] text-[15px] leading-7 text-muted-foreground text-pretty">
              Brand identity, packaging, and restaurant branding studio based in Marrakech. We create timeless identities inspired by Moroccan craft and Swiss precision.
            </p>
            <div className="mt-8 flex gap-6 text-[11px] tracking-luxury uppercase">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-terracotta transition-colors">Instagram</a>
              <a href="https://are.na" target="_blank" rel="noreferrer" className="hover:text-terracotta transition-colors">Are.na</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-terracotta transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <p className="text-[11px] tracking-luxury uppercase text-muted-foreground mb-6">Navigation</p>
              <ul className="space-y-3 text-sm">
                <li><Link href="/work" className="hover:text-terracotta transition-colors">Work</Link></li>
                <li><Link href="/services" className="hover:text-terracotta transition-colors">Services</Link></li>
                <li><Link href="/about" className="hover:text-terracotta transition-colors">About</Link></li>
                <li><Link href="/journal" className="hover:text-terracotta transition-colors">Journal</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] tracking-luxury uppercase text-muted-foreground mb-6">Studio</p>
              <ul className="space-y-3 text-sm">
                <li><Link href="/process" className="hover:text-terracotta transition-colors">Process</Link></li>
                <li><Link href="/testimonials" className="hover:text-terracotta transition-colors">Testimonials</Link></li>
                <li><Link href="/contact" className="hover:text-terracotta transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] tracking-luxury uppercase text-muted-foreground mb-6">Contact</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>hello@simo.ma</li>
                <li>+212 6 12 34 56 78</li>
                <li>Marrakech, Morocco</li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] tracking-luxury uppercase text-muted-foreground mb-6">Legal</p>
              <ul className="space-y-3 text-sm">
                <li><Link href="/privacy" className="hover:text-terracotta transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-terracotta transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col lg:flex-row justify-between gap-4 text-[11px] tracking-luxury uppercase text-muted-foreground">
          <p>© {new Date().getFullYear()} SIMO Studio. All rights reserved. Made in Marrakech.</p>
          <p>Swiss grids × Moroccan light</p>
        </div>
      </div>
    </footer>
  )
}
