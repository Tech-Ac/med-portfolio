import type { Metadata } from 'next'
import './globals.css'
import { cormorant, inter } from '@/lib/fonts'
import { defaultMetadata } from '@/lib/seo'

export const metadata: Metadata = defaultMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
