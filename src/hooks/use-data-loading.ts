'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

/**
 * LITHVIK NEXUS - Data Loading Hook
 * Provides consistent loading state management across all dashboard pages
 */

interface UseDataLoadingOptions {
  minLoadingTime?: number // Minimum time to show loading state (ms)
  simulateLoading?: boolean // Simulate loading for demo purposes
  simulateDelay?: number // Delay for simulated loading (ms)
}

interface UseDataLoadingReturn<T> {
  data: T | null
  isLoading: boolean
  isError: boolean
  error: Error | null
  refetch: () => Promise<void>
}

/**
 * Hook for managing data loading states with optional minimum loading time
 * and simulated loading for demo purposes
 */
export function useDataLoading<T>(
  dataFetcher: () => T | Promise<T>,
  options: UseDataLoadingOptions = {}
): UseDataLoadingReturn<T> {
  const {
    minLoadingTime = 500,
    simulateLoading = false,
    simulateDelay = 1500,
  } = options

  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const loadingStartTime = useRef<number>(0)

  const loadData = useCallback(async () => {
    setIsLoading(true)
    setIsError(false)
    setError(null)
    loadingStartTime.current = Date.now()

    try {
      // Simulate loading if enabled
      if (simulateLoading) {
        await new Promise(resolve => setTimeout(resolve, simulateDelay))
      }

      // Fetch data
      const result = await dataFetcher()

      // Ensure minimum loading time for better UX
      const elapsedTime = Date.now() - loadingStartTime.current
      if (elapsedTime < minLoadingTime) {
        await new Promise(resolve => setTimeout(resolve, minLoadingTime - elapsedTime))
      }

      setData(result)
    } catch (err) {
      setIsError(true)
      setError(err instanceof Error ? err : new Error('Failed to load data'))
      console.error('Data loading error:', err)
    } finally {
      setIsLoading(false)
    }
  }, [dataFetcher, minLoadingTime, simulateLoading, simulateDelay])

  useEffect(() => {
    loadData()
  }, [loadData])

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: loadData,
  }
}

/**
 * Hook for managing multiple data loaders simultaneously
 */
export function useMultiDataLoading<T extends Record<string, any>>(
  dataFetchers: { [K in keyof T]: () => T[K] | Promise<T[K]> },
  options: UseDataLoadingOptions = {}
): {
  data: T | null
  isLoading: boolean
  isAnyLoading: boolean
  errors: { [K in keyof T]?: Error }
  refetch: () => Promise<void>
} {
  const [data, setData] = useState<T | null>(null)
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({})
  const [errors, setErrors] = useState<Record<string, Error>>({})

  const loadData = useCallback(async () => {
    const keys = Object.keys(dataFetchers) as Array<keyof T>
    const results = {} as T
    const newLoadingStates: Record<string, boolean> = {}
    const newErrors: Record<string, Error> = {}

    // Set initial loading states
    keys.forEach(key => {
      newLoadingStates[String(key)] = true
    })
    setLoadingStates(newLoadingStates)

    try {
      // Fetch all data in parallel
      await Promise.all(
        keys.map(async (key) => {
          try {
            const result = await dataFetchers[key]()
            results[key] = result
            newLoadingStates[String(key)] = false
          } catch (err) {
            newErrors[String(key)] = err instanceof Error ? err : new Error(`Failed to load ${String(key)}`)
            newLoadingStates[String(key)] = false
          }
        })
      )

      // Apply minimum loading time
      if (options.minLoadingTime) {
        await new Promise(resolve => setTimeout(resolve, options.minLoadingTime))
      }

      setData(results)
      setErrors(newErrors)
    } finally {
      setLoadingStates(newLoadingStates)
    }
  }, [dataFetchers, options.minLoadingTime])

  useEffect(() => {
    loadData()
  }, [loadData])

  const isAnyLoading = Object.values(loadingStates).some(Boolean)

  return {
    data,
    isLoading: isAnyLoading || data === null,
    isAnyLoading,
    errors,
    refetch: loadData,
  }
}

/**
 * Hook for paginated data loading with infinite scroll support
 */
export function usePaginatedData<T>(
  dataFetcher: (page: number, limit: number) => Promise<{ data: T[]; total: number }>,
  options: {
    initialPage?: number
    pageSize?: number
    minLoadingTime?: number
  } = {}
) {
  const {
    initialPage = 1,
    pageSize = 20,
    minLoadingTime = 500,
  } = options

  const [data, setData] = useState<T[]>([])
  const [page, setPage] = useState(initialPage)
  const [total, setTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const loadPage = useCallback(async (pageNum: number) => {
    setIsLoading(true)
    setIsError(false)

    const startTime = Date.now()

    try {
      const result = await dataFetcher(pageNum, pageSize)
      const elapsed = Date.now() - startTime

      // Apply minimum loading time
      if (elapsed < minLoadingTime) {
        await new Promise(resolve => setTimeout(resolve, minLoadingTime - elapsed))
      }

      if (pageNum === 1) {
        setData(result.data)
      } else {
        setData(prev => [...prev, ...result.data])
      }

      setTotal(result.total)
      setHasMore(data.length + result.data.length < result.total)
      setPage(pageNum)
    } catch (err) {
      setIsError(true)
      console.error('Pagination loading error:', err)
    } finally {
      setIsLoading(false)
    }
  }, [dataFetcher, pageSize, minLoadingTime])

  const loadMore = useCallback(() => {
    if (!isLoading && hasMore) {
      loadPage(page + 1)
    }
  }, [isLoading, hasMore, page, loadPage])

  const refresh = useCallback(() => {
    setData([])
    setPage(1)
    loadPage(1)
  }, [loadPage])

  useEffect(() => {
    loadPage(1)
  }, [loadPage])

  return {
    data,
    isLoading,
    isError,
    hasMore,
    total,
    page,
    loadMore,
    refresh,
  }
}

/**
 * Hook for real-time data refresh with auto-refresh
 */
export function useRealtimeData<T>(
  dataFetcher: () => T | Promise<T>,
  options: {
    refreshInterval?: number // Auto-refresh interval in ms
    minLoadingTime?: number
    onError?: (error: Error) => void
  } = {}
) {
  const {
    refreshInterval = 30000, // 30 seconds default
    minLoadingTime = 300,
    onError,
  } = options

  const { data, isLoading, isError, error, refetch } = useDataLoading(dataFetcher, {
    minLoadingTime,
  })

  // Set up auto-refresh
  useEffect(() => {
    if (!refreshInterval || refreshInterval <= 0) return

    const intervalId = setInterval(() => {
      refetch()
    }, refreshInterval)

    return () => clearInterval(intervalId)
  }, [refreshInterval, refetch])

  // Call error handler if error occurs
  useEffect(() => {
    if (error && onError) {
      onError(error)
    }
  }, [error, onError])

  return {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isRefreshing: !isLoading && data !== null,
  }
}
