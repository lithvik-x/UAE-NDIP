import type { Metadata, Viewport } from 'next'
import { Rajdhani } from 'next/font/google'
import { SkipLink } from '@/components/ui/skip-link'
import './globals.css'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  variable: '--font-rajdhani',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0A1628',
}

export const metadata: Metadata = {
  title: 'UAE NATIONAL DIGITAL INTELLIGENCE PLATFORM | DOSSIER',
  description: 'Comprehensive intelligence platform for UAE national security, media monitoring, crisis management, and strategic analysis. Covers all 7 Emirates with 142 data categories.',
  keywords: ['UAE', 'intelligence', 'national security', 'media monitoring', 'crisis management', 'Abu Dhabi', 'Dubai', 'Sharjah', 'AJMAN', 'FUJAIRAH', 'Umm Al Quwain', 'RAK', 'dashboard'],
  authors: [{ name: 'DOSSIER' }],
  openGraph: {
    title: 'UAE NATIONAL DIGITAL INTELLIGENCE PLATFORM | DOSSIER',
    description: 'Comprehensive intelligence platform for UAE national security, media monitoring, crisis management, and strategic analysis.',
    type: 'website',
    locale: 'en_AE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UAE NATIONAL DIGITAL INTELLIGENCE PLATFORM | DOSSIER',
    description: 'Comprehensive intelligence platform for UAE national security, media monitoring, crisis management, and strategic analysis.',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${rajdhani.variable} font-sans antialiased`}>
        <SkipLink />
        <div className="relative flex min-h-screen flex-col">
          <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
            {/* UAE Theme Animated Background Gradients - Navy and Gold */}
            <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-amber-900/20 via-yellow-900/10 to-transparent blur-3xl animate-pulse-slow" />
            <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-slate-900/30 via-blue-900/10 to-transparent blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-yellow-600/10 via-amber-600/5 to-transparent blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
          </div>
          <main id="main-content" tabIndex={-1} className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
