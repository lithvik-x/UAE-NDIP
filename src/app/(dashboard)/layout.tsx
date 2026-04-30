import type { Metadata } from 'next'
import { DashboardLayout } from '@/components/dashboard/dashboard-layout'

export const metadata: Metadata = {
  title: {
    template: '%s | UAE NDIP - Clairvoyance-CX',
    default: 'Dashboard | UAE National Digital Intelligence Platform',
  },
  description: 'AI-powered digital intelligence dashboard for UAE Federal decision-makers. Entity Intelligence, Crisis Management, Social Media, Multi-Lingual analysis, and more.',
  openGraph: {
    title: 'Dashboard | UAE National Digital Intelligence Platform',
    description: 'AI-powered digital intelligence dashboard for UAE Federal decision-makers.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
    locale: 'en_AE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dashboard | UAE NDIP - Clairvoyance-CX',
    description: 'AI-powered digital intelligence dashboard for UAE Federal decision-makers.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>
}
