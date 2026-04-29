/**
 * SkipLink - Accessibility component for keyboard navigation
 * Provides a "Skip to main content" link for keyboard users
 */
import Link from 'next/link'

export function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="
        sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999]
        focus:px-4 focus:py-2 focus:bg-gold-500 focus:text-white focus:rounded-xl
        focus:shadow-premium-lg focus:font-semibold
      "
    >
      Skip to main content
    </Link>
  )
}
