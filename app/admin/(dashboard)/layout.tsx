import Link from 'next/link'

const nav = [
  { href: '/admin/overview', label: 'Overview' },
  { href: '/admin/projects', label: 'Projects' },
  { href: '/admin/services', label: 'Services' },
  { href: '/admin/journal', label: 'Journal' },
  { href: '/admin/testimonials', label: 'Testimonials' },
  { href: '/admin/inquiries', label: 'Inquiries' },
  { href: '/admin/media', label: 'Media Library' },
  { href: '/admin/seo', label: 'SEO' },
  { href: '/admin/settings', label: 'Settings' },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-[260px] border-r border-border bg-background p-6 hidden lg:block sticky top-0 h-screen overflow-y-auto">
        <Link href="/admin/overview" className="font-display text-xl font-medium">SIMO Admin</Link>
        <p className="text-[11px] tracking-luxury uppercase text-muted-foreground mt-1 mb-10">Content Management</p>
        <nav className="space-y-1">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="block px-3 py-2 text-sm hover:bg-secondary transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-10 pt-6 border-t border-border">
          <Link href="/" className="text-[11px] tracking-luxury uppercase text-muted-foreground hover:text-foreground">← Back to site</Link>
        </div>
      </aside>
      <main className="flex-1 bg-[#FAFAF9]">
        <div className="border-b border-border bg-background lg:hidden p-4 flex justify-between items-center">
          <span className="font-display font-medium">SIMO Admin</span>
          <Link href="/" className="text-[11px] tracking-luxury uppercase">Back to site</Link>
        </div>
        <div className="p-6 lg:p-10">{children}</div>
      </main>
    </div>
  )
}
