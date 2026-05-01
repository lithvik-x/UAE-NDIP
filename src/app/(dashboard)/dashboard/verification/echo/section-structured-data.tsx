'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  echoChamberQuantMetrics,
  platformEchoChambers,
  polarizationStudies,
  youtubeRecommendationData,
  platformDemographics,
  mediaLiteracyEffects,
  selectiveExposureStats,
  simulationParameters,
  algorithmPersonalizationData,
  mediaLiteracyChartData,
  demographicData,
  youtubeRemovalData,
  crossCuttingData,
} from '@/lib/data-loader/echo-chamber-data'
import {
  BarChart,
  AreaChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

function TableSection<T extends { [key: string]: any }>({
  title,
  description,
  data,
  columns,
  badge,
}: {
  title: string
  description: string
  data: T[]
  columns: { key: keyof T; label: string; render?: (value: T[keyof T], row: T) => React.ReactNode }[]
  badge?: string
}) {
  return (
    <GlassPanel title={title} description={description} badge={badge}>
      <ScrollArea className="h-[300px]">
        <Table>
          <TableHeader>
            <TableRow className="border-platinum-700">
              {columns.map((col) => (
                <TableHead key={String(col.key)} className="text-platinum-500-400">{col.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, idx) => (
              <TableRow key={idx} className="border-platinum-700/50 hover:bg-platinum-800/30">
                {columns.map((col) => (
                  <TableCell key={String(col.key)} className="text-platinum-500-300">
                    {col.render ? col.render(row[col.key], row) : String(row[col.key])}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </GlassPanel>
  )
}

export function SectionStructuredData() {
  return (
    <div className="space-y-6">
      {/* Echo Chamber Quantification Metrics */}
      <TableSection
        title="Echo Chamber Quantification Metrics"
        description="Key quantitative measurements from academic research"
        data={echoChamberQuantMetrics}
        columns={[
          { key: 'metric', label: 'Metric' },
          { key: 'value', label: 'Value', render: (v) => <span className="font-semibold text-emerald-400">{String(v)}</span> },
          { key: 'source', label: 'Source' },
          { key: 'year', label: 'Year' },
          { key: 'credibility', label: 'Tier' },
        ]}
      />

      {/* Platform Echo Chamber Effects */}
      <TableSection
        title="Platform-Specific Echo Chamber Effects"
        description="Echo chamber characteristics by platform"
        data={platformEchoChambers}
        columns={[
          { key: 'platform', label: 'Platform', render: (v) => <span className="font-semibold text-platinum-500-200">{String(v)}</span> },
          { key: 'echoChamberStrength', label: 'Strength', render: (v) => {
            const val = String(v)
            const cls = val === 'STRONG' ? 'text-rose-400' : val === 'WEAK' ? 'text-emerald-400' : 'text-amber-400'
            return <span className={`font-semibold ${cls}`}>{val}</span>
          }},
          { key: 'dominantECType', label: 'Dominant Type' },
          { key: 'commonUsersPercent', label: 'Common Users %' },
          { key: 'source', label: 'Source' },
        ]}
      />

      {/* Polarization Research Data */}
      <TableSection
        title="Polarization Research Data"
        description="Key studies and their findings on algorithmic polarization"
        data={polarizationStudies}
        columns={[
          { key: 'study', label: 'Study' },
          { key: 'finding', label: 'Finding', render: (v) => <span className="text-sm text-platinum-500-300">{String(v)}</span> },
          { key: 'effectSize', label: 'Effect Size' },
          { key: 'sample', label: 'Sample' },
          { key: 'year', label: 'Year' },
        ]}
      />

      {/* YouTube Recommendation System Data */}
      <TableSection
        title="YouTube Recommendation System Data"
        description="Systematic review findings (23 studies)"
        data={youtubeRecommendationData}
        columns={[
          { key: 'metric', label: 'Metric' },
          { key: 'value', label: 'Value', render: (v) => <span className="font-semibold text-cyan-400">{String(v)}</span> },
          { key: 'source', label: 'Source' },
        ]}
      />

      {/* YouTube Content Removal Chart */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg">YouTube Content Removals (Oct-Dec 2020)</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart
            data={youtubeRemovalData}
            xAxisKey="category"
            bars={[{ dataKey: 'value', name: 'Videos Removed', color: CHART_COLORS.rose }]}
            height={250}
            showGrid={true}
          />
        </CardContent>
      </Card>

      {/* Short Video Platform Demographics */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg">Short Video Platform Demographics</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart
            data={demographicData}
            xAxisKey="platform"
            bars={[
              { dataKey: 'under24', name: '<24', color: CHART_COLORS.rose },
              { dataKey: 'age24to30', name: '24-30', color: CHART_COLORS.gold },
              { dataKey: 'age31to35', name: '31-35', color: CHART_COLORS.emerald },
              { dataKey: 'age36to40', name: '36-40', color: CHART_COLORS.denim },
              { dataKey: 'over40', name: '>40', color: CHART_COLORS.platinum },
            ]}
            stacked={true}
            height={300}
            showGrid={true}
          />
        </CardContent>
      </Card>

      {/* Media Literacy Intervention Effectiveness */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg">Media Literacy Intervention Effectiveness</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart
            data={mediaLiteracyChartData}
            xAxisKey="outcome"
            bars={[{ dataKey: 'effectSize', name: 'Effect Size (d)', color: CHART_COLORS.teal }]}
            height={300}
            showGrid={true}
          />
        </CardContent>
      </Card>

      {/* Media Literacy Full Table */}
      <TableSection
        title="Media Literacy Meta-Analysis Details"
        description="Jeong, Cho & Hwang (2012) — 51 studies"
        data={mediaLiteracyEffects}
        columns={[
          { key: 'outcome', label: 'Outcome' },
          { key: 'effectSize', label: 'Effect Size (d)', render: (v) => <span className="font-semibold text-teal-400">{String(v)}</span> },
          { key: 'significance', label: 'Significance', render: (v) => {
            const val = String(v)
            return val.includes('NOT') ? (
              <span className="text-platinum-500-500">{val}</span>
            ) : (
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 text-xs">{val}</Badge>
            )
          }},
        ]}
      />

      {/* Political Selective Exposure */}
      <TableSection
        title="Political Selective Exposure Statistics"
        description="Cross-cutting content exposure data"
        data={selectiveExposureStats}
        columns={[
          { key: 'metric', label: 'Metric' },
          { key: 'value', label: 'Value', render: (v) => <span className="font-semibold text-purple-400">{String(v)}</span> },
          { key: 'source', label: 'Source' },
        ]}
      />

      {/* Cross-Cutting Content Chart */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg">Cross-Cutting Content Exposure</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart
            data={crossCuttingData}
            xAxisKey="group"
            bars={[
              { dataKey: 'crossCutting', name: 'Cross-Cutting %', color: CHART_COLORS.emerald },
              { dataKey: 'sameSide', name: 'Same Side %', color: CHART_COLORS.platinum },
            ]}
            stacked={true}
            height={280}
            showGrid={true}
          />
        </CardContent>
      </Card>

      {/* Network Simulation Parameters */}
      <TableSection
        title="Network Simulation Parameters (Törnberg Model)"
        description="Model configuration and computational scale"
        data={simulationParameters}
        columns={[
          { key: 'parameter', label: 'Parameter' },
          { key: 'value', label: 'Value', render: (v) => <span className="font-semibold text-indigo-400">{String(v)}</span> },
        ]}
      />

      {/* Algorithm Personalization Data */}
      <TableSection
        title="Algorithm Personalization Data Points"
        description="Data collection and tracking statistics"
        data={algorithmPersonalizationData as any}
        columns={[
          { key: 'metric', label: 'Metric' },
          { key: 'value', label: 'Value', render: (v) => <span className="font-semibold text-orange-400">{String(v)}</span> },
          { key: 'year', label: 'Year' },
        ]}
      />
    </div>
  )
}
