import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Admin — SIMO Studio', robots: { index: false } }

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {children}
    </div>
  )
}
