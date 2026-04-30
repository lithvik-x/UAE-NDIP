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
  metadataBase: new URL('https://ndip.dossier.li'),
  title: {
    default: 'UAE National Digital Intelligence Platform | Clairvoyance-CX',
    template: '%s | Clairvoyance-CX',
  },
  description: 'AI-powered digital intelligence platform delivering real-time situational awareness for UAE Federal decision-makers. Entity Intelligence, Crisis Management, Social Media, Multi-Lingual analysis, and more. A CryptoMize Product.',
  keywords: [
    'UAE intelligence platform',
    'national security dashboard',
    'federal decision support',
    'Crisis management',
    'media monitoring UAE',
    'social media intelligence',
    'entity resolution',
    'sentiment analysis',
    'Clairvoyance-CX',
    'CryptoMize',
    'UAE Federal',
    'ndip.dossier.li',
  ],
  authors: [{ name: 'CryptoMize', url: 'https://cryptomize.com' }],
  creator: 'CryptoMize',
  publisher: 'CryptoMize',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
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
            {/* UAE Theme Animated Background Gradients — ultra-slow pulse, no transform jitter */}
            <div
              className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-amber-900/20 via-yellow-900/10 to-transparent blur-3xl animate-pulse-slow will-change-transform"
              style={{ animationDelay: '0ms' }}
            />
            <div
              className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-slate-900/30 via-blue-900/10 to-transparent blur-3xl animate-pulse-slow will-change-transform"
              style={{ animationDelay: '4000ms' }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-yellow-600/10 via-amber-600/5 to-transparent blur-3xl animate-pulse-slow will-change-transform"
              style={{ animationDelay: '8000ms' }}
            />
          </div>
          <main id="main-content" tabIndex={-1} className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
