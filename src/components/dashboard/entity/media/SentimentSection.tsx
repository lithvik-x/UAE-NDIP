// @ts-nocheck
/**
 * Media Organizations Sentiment Analysis Section
 * UAE National Digital Intelligence Platform
 */

'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PieChart, RadarChart } from '@/components/ui/chart-library'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface SentimentSectionProps {
  sentimentMatrix: any[]
  sentimentChartData: any[]
  radarData: any[]
  radarMetrics: any[]
}

export function SentimentSection({
  sentimentMatrix,
  sentimentChartData,
  radarData,
  radarMetrics,
}: SentimentSectionProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Sentiment Matrix */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani font-semibold">Sentiment Matrix</CardTitle>
          <CardDescription>Editorial stance by organization</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-b border-platinum-200/50">
                <TableHead className="text-platinum-700 font-semibold">Organization</TableHead>
                <TableHead className="text-platinum-700 font-semibold">Sentiment</TableHead>
                <TableHead className="text-platinum-700 font-semibold">UAE Position</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sentimentMatrix.slice(0, 10).map((entry, i) => (
                <TableRow key={i} className="border-b border-platinum-100/50">
                  <TableCell className="font-medium text-navy-900 dark:text-platinum-100">{entry.organization}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        entry.sentiment === 'Positive' ? 'success' :
                        entry.sentiment === 'Negative' ? 'destructive' :
                        entry.sentiment === 'Mixed' ? 'warning' : 'secondary'
                      }
                      className="text-xs"
                    >
                      {entry.sentiment}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-platinum-600">{entry.uaePosition}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Sentiment Pie Chart */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani font-semibold">Sentiment Distribution</CardTitle>
          <CardDescription>Overall sentiment breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          {sentimentChartData.length > 0 ? (
            <PieChart
              data={sentimentChartData}
              height={280}
              showLegend={true}
              donut={true}
            />
          ) : (
            <div className="flex items-center justify-center h-48 text-platinum-500">No data available</div>
          )}
        </CardContent>
      </Card>

      {/* Radar Chart */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani font-semibold">Media Radar Profile</CardTitle>
          <CardDescription>Multi-dimensional comparison across key metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <RadarChart
            data={radarData}
            metrics={radarMetrics}
            height={280}
            showLegend={true}
            ariaLabel="Media radar comparison across key dimensions"
          />
        </CardContent>
      </Card>
    </div>
  )
}
