'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

// Types
interface Command {
  id: string
  name: string
  category: string
  icon: string
  shortcut?: string
  action: (router: ReturnType<typeof useRouter>) => void
  keywords?: string[]
}

// Commands organized by category - using factory functions for lazy router access
const createCommandCategories = () => {
  const commandCategories: Record<string, { name: string; commands: Command[] }> = {
    navigation: {
      name: 'Navigation',
      commands: [
        {
          id: 'nav-home',
          name: 'Dashboard Home',
          category: 'Navigation',
          icon: '🏠',
          shortcut: 'G H',
          action: (router) => router.push('/dashboard'),
          keywords: ['dashboard', 'home'],
        },
        {
          id: 'nav-entity',
          name: 'Entity Intelligence',
          category: 'Navigation',
          icon: '🛡️',
          shortcut: 'G E',
          action: (router) => router.push('/dashboard/entity/overview'),
          keywords: ['entity', 'intelligence', 'officials', 'royal'],
        },
        {
          id: 'nav-topics',
          name: 'Topics & Issues',
          category: 'Navigation',
          icon: '📊',
          shortcut: 'G T',
          action: (router) => router.push('/dashboard/topics/politics'),
          keywords: ['topics', 'issues', 'politics', 'economy'],
        },
        {
          id: 'nav-crisis',
          name: 'Crisis & Phoenix',
          category: 'Navigation',
          icon: '🚨',
          shortcut: 'G C',
          action: (router) => router.push('/dashboard/crisis/overview'),
          keywords: ['crisis', 'phoenix', 'emergency', 'terrorism'],
        },
        {
          id: 'nav-social',
          name: 'Social Media',
          category: 'Navigation',
          icon: '📱',
          shortcut: 'G S',
          action: (router) => router.push('/dashboard/social/overview'),
          keywords: ['social', 'media', 'tiktok', 'twitter', 'instagram'],
        },
        {
          id: 'nav-languages',
          name: 'Multi-Lingual',
          category: 'Navigation',
          icon: '🌍',
          shortcut: 'G L',
          action: (router) => router.push('/dashboard/languages/overview'),
          keywords: ['language', 'arabic', 'english', 'multilingual'],
        },
        {
          id: 'nav-stakeholders',
          name: 'Stakeholders',
          category: 'Navigation',
          icon: '👥',
          shortcut: 'G K',
          action: (router) => router.push('/dashboard/stakeholders/overview'),
          keywords: ['stakeholders', 'government', 'corporate'],
        },
        {
          id: 'nav-historical',
          name: 'Historical Data',
          category: 'Navigation',
          icon: '📜',
          shortcut: 'G D',
          action: (router) => router.push('/dashboard/historical/overview'),
          keywords: ['historical', 'history', 'founding', 'oil'],
        },
        {
          id: 'nav-trends',
          name: 'Trends & Sentiment',
          category: 'Navigation',
          icon: '📈',
          shortcut: 'G R',
          action: (router) => router.push('/dashboard/trends/overview'),
          keywords: ['trends', 'sentiment', 'emotions'],
        },
        {
          id: 'nav-monitoring',
          name: 'Monitoring',
          category: 'Navigation',
          icon: '👁️',
          shortcut: 'G M',
          action: (router) => router.push('/dashboard/monitoring/overview'),
          keywords: ['monitoring', 'threats', 'dark web'],
        },
        {
          id: 'nav-verification',
          name: 'Verification',
          category: 'Navigation',
          icon: '✅',
          shortcut: 'G V',
          action: (router) => router.push('/dashboard/verification/overview'),
          keywords: ['verification', 'fact-check', 'source'],
        },
      ],
    },
    actions: {
      name: 'Actions',
      commands: [
        {
          id: 'act-search',
          name: 'Search Data',
          category: 'Actions',
          icon: '🔍',
          shortcut: '/',
          action: (router) => {
            if (typeof document !== 'undefined') {
              const searchInput = document.querySelector('input[type="search"], input[placeholder*="search"]') as HTMLInputElement
              if (searchInput) {
                searchInput.focus()
                return
              }
            }
            router.push('/dashboard?search=true')
          },
          keywords: ['search', 'find', 'query'],
        },
        {
          id: 'act-settings',
          name: 'Open Settings',
          category: 'Actions',
          icon: '⚙️',
          shortcut: 'G S',
          action: (router) => router.push('/settings'),
          keywords: ['settings', 'preferences', 'config'],
        },
      ],
    },
    platform: {
      name: 'Platform',
      commands: [
        {
          id: 'plat-uae',
          name: 'UAE National Digital Intelligence',
          category: 'Platform',
          icon: '🇦🇪',
          action: (router) => router.push('/dashboard'),
          keywords: ['UAE', 'national', 'intelligence'],
        },
        {
          id: 'plat-entity',
          name: 'Entity Intelligence',
          category: 'Platform',
          icon: '🛡️',
          action: (router) => router.push('/dashboard/entity/overview'),
          keywords: ['entity', 'intelligence'],
        },
        {
          id: 'plat-crisis',
          name: 'Crisis & Phoenix Protocol',
          category: 'Platform',
          icon: '🚨',
          action: (router) => router.push('/dashboard/crisis/overview'),
          keywords: ['crisis', 'phoenix'],
        },
      ],
    },
  }
  return commandCategories
}

// Flatten all commands for search - using factory function
const getAllCommands = () => {
  const commandCategories = createCommandCategories()
  return Object.values(commandCategories).flatMap(cat => cat.commands)
}

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter()
  const [query, setQuery] = React.useState('')
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const listRef = React.useRef<HTMLDivElement>(null)

  // Get commands dynamically
  const commandCategories = React.useMemo(() => createCommandCategories(), [])
  const allCommands = React.useMemo(() => getAllCommands(), [])

  // Filter commands based on query
  const filteredCommands = React.useMemo(() => {
    if (!query.trim()) {
      return allCommands
    }

    const searchLower = query.toLowerCase()
    return allCommands.filter(cmd => {
      const nameMatch = cmd.name.toLowerCase().includes(searchLower)
      const keywordMatch = cmd.keywords?.some(kw => kw.toLowerCase().includes(searchLower))
      const categoryMatch = cmd.category.toLowerCase().includes(searchLower)
      return nameMatch || keywordMatch || categoryMatch
    })
  }, [query, allCommands])

  // Group filtered commands by category
  const groupedCommands = React.useMemo(() => {
    const groups: Record<string, typeof allCommands> = {}
    filteredCommands.forEach(cmd => {
      if (!groups[cmd.category]) {
        groups[cmd.category] = []
      }
      groups[cmd.category].push(cmd)
    })
    return groups
  }, [filteredCommands])

  // Reset selection when query changes
  React.useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  // Focus input when opened
  React.useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  // Handle keyboard navigation
  React.useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex(prev => (prev + 1) % filteredCommands.length)
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length)
          break
        case 'Enter':
          e.preventDefault()
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action(router)
            onOpenChange(false)
          }
          break
        case 'Escape':
          e.preventDefault()
          onOpenChange(false)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, filteredCommands, selectedIndex, onOpenChange])

  // Scroll selected item into view
  React.useEffect(() => {
    if (listRef.current) {
      const selectedElement = listRef.current.querySelector('[data-selected="true"]')
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
      }
    }
  }, [selectedIndex])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => onOpenChange(false)}
      />

      {/* Command Palette */}
      <div className="relative w-full max-w-2xl mx-4 glass-premium-premium rounded-2xl shadow-premium-2xl border border-white/20 overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-platinum-400"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent text-platinum-900 placeholder:text-platinum-400 outline-none text-sm"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-platinum-400 hover:text-platinum-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Command List */}
        <div ref={listRef} className="max-h-[400px] overflow-y-auto py-2">
          {filteredCommands.length === 0 ? (
            <div className="px-4 py-8 text-center text-platinum-400">
              <p className="text-sm">No commands found</p>
              <p className="text-xs mt-1">Try a different search term</p>
            </div>
          ) : (
            Object.entries(groupedCommands).map(([category, commands]) => (
              <div key={category} className="mb-2 last:mb-0">
                <div className="px-4 py-1.5 text-xs font-semibold text-platinum-400 uppercase tracking-wider">
                  {category}
                </div>
                {commands.map((cmd, idx) => {
                  const flatIndex = filteredCommands.indexOf(cmd)
                  const isSelected = flatIndex === selectedIndex

                  return (
                    <button
                      key={cmd.id}
                      data-selected={isSelected}
                      onClick={() => {
                        cmd.action(router)
                        onOpenChange(false)
                      }}
                      className={cn(
                        'w-full flex items-center gap-3 px-4 py-3 text-left transition-colors',
                        isSelected
                          ? 'bg-navy-500/10 text-navy-700'
                          : 'hover:bg-white/50 text-platinum-700'
                      )}
                    >
                      <span className="text-lg">{cmd.icon}</span>
                      <span className="flex-1 text-sm font-medium">{cmd.name}</span>
                      {cmd.shortcut && (
                        <kbd className="px-2 py-0.5 text-xs font-medium text-platinum-400 bg-platinum-100/50 rounded border border-platinum-200/50">
                          {cmd.shortcut}
                        </kbd>
                      )}
                    </button>
                  )
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-white/10 bg-white/30">
          <div className="flex items-center gap-4 text-xs text-platinum-400">
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white/50 rounded border border-platinum-200/50">↑↓</kbd>
              <span>to navigate</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white/50 rounded border border-platinum-200/50">↵</kbd>
              <span>to select</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white/50 rounded border border-platinum-200/50">esc</kbd>
              <span>to close</span>
            </div>
          </div>
          <div className="text-xs text-platinum-400">
            {filteredCommands.length} {filteredCommands.length === 1 ? 'command' : 'commands'}
          </div>
        </div>
      </div>
    </div>
  )
}

// Hook for keyboard shortcut
export function useCommandPalette() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return { open, setOpen }
}
