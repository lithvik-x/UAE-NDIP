// @ts-nocheck
/**
 * Media Organizations Circulation & Reach Section
 * UAE National Digital Intelligence Platform
 */

'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart } from '@/components/ui/chart-library'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Tv,
  Globe,
} from 'lucide-react'

interface CirculationSectionProps {
  circulationChartData: any[]
  tvChannelsByHQ: any[]
  mediaStatistics: any
}

export function CirculationSection({
  circulationChartData,
  tvChannelsByHQ,
  mediaStatistics,
}: CirculationSectionProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Circulation Data */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg font-rajdhani font-semibold">Circulation Data (Latest Available)</CardTitle>
            <CardDescription>Historical circulation figures for UAE newspapers</CardDescription>
          </CardHeader>
          <CardContent>
            {circulationChartData.length > 0 ? (
              <BarChart
                data={circulationChartData}
                xAxisKey="name"
                bars={[{ dataKey: 'circulation', name: 'Circulation', color: '#C9A962' }]}
                height={300}
                showGrid={true}
              />
            ) : (
              <div className="flex items-center justify-center h-48 text-platinum-500-500">No data available</div>
            )}
          </CardContent>
        </Card>

        {/* Digital Reach */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg font-rajdhani font-semibold">Digital Reach Comparison</CardTitle>
            <CardDescription>Monthly digital audience metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-navy/5 border border-navy-200/30">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-navy text-white">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-500-900 dark:text-platinum-500-100">Khaleej Times</p>
                    <p className="text-xs text-platinum-500-500">Highest digital reach</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-navy-500-900 dark:text-platinum-500-100">37.2M</p>
                  <p className="text-xs text-platinum-500-500">monthly consumers</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-platinum-500-700 dark:text-platinum-500-300">Website Users (monthly)</span>
                  <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">6.5M</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-platinum-500-700 dark:text-platinum-500-300">Instagram Followers</span>
                  <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">3.2M</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-platinum-500-700 dark:text-platinum-500-300">Facebook Users</span>
                  <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">21.7M</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-platinum-500-700 dark:text-platinum-500-300">X (Twitter) Followers</span>
                  <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">1M+</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* TV Channels by HQ */}
      <GlassPanel title="TV Channels by Headquarters" description="Broadcast television presence by location">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-platinum-200/50 dark:border-platinum-700/50">
              <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Channel</TableHead>
              <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">HQ Location</TableHead>
              <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Owner</TableHead>
              <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Launch Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tvChannelsByHQ.map((channel, i) => (
              <TableRow key={i} className="border-b border-platinum-100/50 dark:border-platinum-800/50">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tv className="h-4 w-4 text-navy-500-600" />
                    <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{channel.channel}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{channel.hqLocation}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{channel.owner}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm text-platinum-500-500">{channel.launchDate || '—'}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </GlassPanel>

      {/* Comprehensive Statistics */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg font-rajdhani font-semibold">Al Jazeera Scale</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-platinum-500-600">Employees</span>
              <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">3,000+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-platinum-500-600">Global Audience</span>
              <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">430M</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-platinum-500-600">Bureaus</span>
              <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">70</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-platinum-500-600">Countries</span>
              <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">150+</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg font-rajdhani font-semibold">Sky News Arabia</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-platinum-500-600">Households</span>
              <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">50M+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-platinum-500-600">Radio Frequency</span>
              <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">90.3 FM</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg font-rajdhani font-semibold">Financial Data</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-platinum-500-600">Al Jazeera Funding</span>
              <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">$137M</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-platinum-500-600">Al Jazeera English</span>
              <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">$1B</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-platinum-500-600">Emarat Al Youm Fine</span>
              <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">$5,445</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
