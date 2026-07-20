import { projects } from '@/lib/data'

export default function OverviewPage() {
  return (
    <div>
      <h1 className="font-display text-3xl mb-2">Overview</h1>
      <p className="text-sm text-muted-foreground mb-10">Welcome back, SIMO. Here is what is happening with your portfolio.</p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="border border-border bg-background p-6">
          <p className="text-[11px] tracking-luxury uppercase text-muted-foreground">Total Projects</p>
          <p className="font-display text-4xl mt-3">{projects.length}</p>
          <p className="text-xs text-muted-foreground mt-2">+2 this month</p>
        </div>
        <div className="border border-border bg-background p-6">
          <p className="text-[11px] tracking-luxury uppercase text-muted-foreground">Inquiries</p>
          <p className="font-display text-4xl mt-3">24</p>
          <p className="text-xs text-muted-foreground mt-2">3 unread</p>
        </div>
        <div className="border border-border bg-background p-6">
          <p className="text-[11px] tracking-luxury uppercase text-muted-foreground">Journal Posts</p>
          <p className="font-display text-4xl mt-3">2</p>
          <p className="text-xs text-muted-foreground mt-2">Draft: 1</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="border border-border bg-background p-6">
          <h2 className="font-display text-xl mb-4">Recent Projects</h2>
          <div className="space-y-4">
            {projects.slice(0, 3).map((p) => (
              <div key={p.id} className="flex justify-between items-center border-b border-border pb-3 last:border-0">
                <div><p className="text-sm font-medium">{p.title}</p><p className="text-xs text-muted-foreground">{p.category}</p></div>
                <span className="text-[11px] tracking-luxury uppercase px-2 py-1 bg-secondary">Published</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-border bg-background p-6">
          <h2 className="font-display text-xl mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <button className="h-20 border border-border hover:bg-secondary transition-colors text-sm">+ New Project</button>
            <button className="h-20 border border-border hover:bg-secondary transition-colors text-sm">+ Journal Post</button>
            <button className="h-20 border border-border hover:bg-secondary transition-colors text-sm">Upload Media</button>
            <button className="h-20 border border-border hover:bg-secondary transition-colors text-sm">View Inquiries</button>
          </div>
        </div>
      </div>

      <div className="mt-10 border border-border bg-background p-6">
        <h2 className="font-display text-xl mb-2">Supabase Setup Required</h2>
        <p className="text-sm text-muted-foreground">Connect your Supabase project to enable real data. See /supabase/schema.sql and docs/SUPABASE_GUIDE.md</p>
      </div>
    </div>
  )
}
