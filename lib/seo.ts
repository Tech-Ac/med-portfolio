import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://simo.ma'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SIMO — Brand Identity & Packaging Designer in Marrakech',
    template: '%s | SIMO',
  },
  description:
    'Brand identity, packaging, and restaurant branding studio based in Marrakech. We create timeless identities inspired by Moroccan craft and Swiss precision.',
  keywords: [
    'Brand Identity Designer Marrakech',
    'Packaging Designer Morocco',
    'Restaurant Branding',
    'Luxury Branding',
    'SIMO',
  ],
  authors: [{ name: 'SIMO' }],
  creator: 'SIMO',
  openGraph: {
    type: 'website',
    locale: 'en_MA',
    url: siteUrl,
    siteName: 'SIMO',
    title: 'SIMO — Brand Identity & Packaging Designer in Marrakech',
    description: 'Brand identity, packaging, and restaurant branding studio based in Marrakech.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'SIMO Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SIMO — Brand Identity & Packaging Designer in Marrakech',
    description: 'Brand identity, packaging, and restaurant branding studio based in Marrakech.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export function generateProjectJsonLd(project: { title: string; description: string; slug: string; cover: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: `${siteUrl}/work/${project.slug}`,
    image: project.cover,
    author: { '@type': 'Person', name: 'SIMO', url: siteUrl },
  }
}
