'use client'

import { useEffect, useState } from 'react'

/**
 * useIsClient - Hook to detect if code is running on the client
 *
 * Returns true only after component has mounted on the client.
 * This prevents hydration mismatches when using browser-only APIs.
 *
 * @example
 * function MyComponent() {
 *   const isClient = useIsClient()
 *   if (!isClient) return null // or a loading placeholder
 *   return <div>{window.innerWidth}</div>
 * }
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}
