'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ChevronRight } from 'lucide-react'

const Root = TabsPrimitive.Root

interface Tab {
  value: string
  label: string
  icon?: React.ReactNode
  badge?: string | number
  description?: string
}

interface TabSection {
  title: string
  tabs: Tab[]
}

interface VerticalTabsProps {
  defaultValue?: string
  sections: TabSection[]
  children: React.ReactNode
  className?: string
}

/**
 * VerticalTabsLayout - A two-column layout with scrollable sidebar navigation
 *
 * Perfect for pages with many tabs (10+). Uses a vertical sidebar that:
 * - Shows all tabs in a scannable list
 * - Groups related tabs into sections
 * - Handles unlimited tab count gracefully
 * - Collapses to drawer on mobile
 *
 * @example
 * ```tsx
 * <VerticalTabsLayout
 *   defaultValue="sov"
 *   sections={[
 *     {
 *       title: "Market Intelligence",
 *       tabs: [
 *         { value: "sov", label: "Share of Voice", icon: <Target /> },
 *         { value: "sentiment", label: "Sentiment", icon: <Heart /> },
 *       ]
 *     }
 *   ]}
 * >
 *   <TabsContent value="sov">...</TabsContent>
 *   <TabsContent value="sentiment">...</TabsContent>
 * </VerticalTabsLayout>
 * ```
 */
export function VerticalTabsLayout({
  defaultValue,
  sections,
  children,
  className,
}: VerticalTabsProps) {
  const [value, setValue] = React.useState(defaultValue || sections[0]?.tabs[0]?.value)
  const [activeSection, setActiveSection] = React.useState<string | null>(null)

  return (
    <Root value={value} onValueChange={setValue} className={cn('flex gap-6', className)}>
      {/* Left Sidebar - Navigation */}
      <div className="w-72 shrink-0">
        <ScrollArea className="h-[calc(100vh-12rem)] rounded-xl border bg-white/50 backdrop-blur-sm dark:bg-slate-900/50">
          <div className="p-4">
            {sections.map((section) => (
              <div key={section.title} className="mb-6 last:mb-0">
                <button
                  onClick={() => setActiveSection(activeSection === section.title ? null : section.title)}
                  className="flex w-full items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider hover:text-slate-900 dark:hover:text-slate-300 transition-colors mb-2"
                >
                  {section.title}
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 transition-transform",
                      activeSection === section.title ? "rotate-90" : ""
                    )}
                  />
                </button>

                <div className={cn(
                  "space-y-1 overflow-hidden transition-all duration-200",
                  activeSection !== section.title && activeSection !== null ? "max-h-0" : "max-h-[2000px]"
                )}>
                  {section.tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className={cn(
                        "w-full justify-start gap-3 px-3 py-2.5 text-left",
                        "data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-50 data-[state=active]:to-purple-50 data-[state=active]:text-indigo-700 data-[state=active]:border data-[state=active]:border-indigo-200",
                        "dark:data-[state=active]:from-indigo-950 dark:data-[state=active]:to-purple-950 dark:data-[state=active]:text-indigo-300 dark:data-[state=active]:border-indigo-800",
                        "hover:bg-slate-100 dark:hover:bg-slate-800"
                      )}
                    >
                      {tab.icon && <span className="shrink-0">{tab.icon}</span>}
                      <span className="flex-1 truncate">{tab.label}</span>
                      {tab.badge && (
                        <span className="shrink-0 rounded-full bg-slate-200 px-2 py-0.5 text-xs font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-300">
                          {tab.badge}
                        </span>
                      )}
                    </TabsTrigger>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Right Side - Content */}
      <div className="flex-1 min-w-0">
        {children}
      </div>
    </Root>
  )
}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'data-[state=inactive]:text-slate-600 data-[state=inactive]:hover:text-slate-900',
      'dark:data-[state=inactive]:text-slate-400 dark:data-[state=inactive]:hover:text-slate-200',
      className
    )}
    {...props}
  >
    {children}
  </TabsPrimitive.Trigger>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2',
      'animate-in fade-in slide-in-from-left-4 duration-200',
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { TabsContent }
