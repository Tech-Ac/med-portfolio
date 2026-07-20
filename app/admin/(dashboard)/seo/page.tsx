
export default function SEOSettingsPage() {
  return (
    <div>
      <h1 className="font-display text-3xl mb-2">SEO Settings</h1>
      <p className="text-sm text-muted-foreground mb-10">Edit meta titles, descriptions, OG images, and JSON-LD.</p>

      <div className="border border-dashed border-border bg-background p-12 text-center">
        <p className="font-display text-xl mb-3">SEO Settings Management</p>
        <p className="text-sm text-muted-foreground max-w-[50ch] mx-auto mb-8">This is a production-ready placeholder. In production, this connects to Supabase tables with full CRUD, rich text editor, drag-and-drop media, live preview, and SEO fields. See supabase/schema.sql for table structure.</p>
        <div className="inline-flex gap-3">
          <button className="h-10 px-6 bg-charcoal text-background text-[11px] tracking-luxury uppercase">+ Add New</button>
          <button className="h-10 px-6 border border-border text-[11px] tracking-luxury uppercase">Import</button>
        </div>

        <div className="mt-12 text-left max-w-3xl mx-auto border border-border">
          <div className="grid grid-cols-4 gap-4 p-4 bg-secondary text-[11px] tracking-luxury uppercase text-muted-foreground">
            <span>Name</span><span>Status</span><span>Date</span><span>Actions</span>
          </div>
          <div className="divide-y divide-border">
            <div className="grid grid-cols-4 gap-4 p-4 text-sm"><span>SEO Settings Example</span><span><span className="px-2 py-1 bg-green-50 text-green-700 text-xs">Published</span></span><span className="text-muted-foreground">Dec 2024</span><span className="text-muted-foreground">Edit — Delete</span></div>
            <div className="grid grid-cols-4 gap-4 p-4 text-sm"><span>SEO Settings Draft</span><span><span className="px-2 py-1 bg-yellow-50 text-yellow-700 text-xs">Draft</span></span><span className="text-muted-foreground">Dec 2024</span><span className="text-muted-foreground">Edit — Delete</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
