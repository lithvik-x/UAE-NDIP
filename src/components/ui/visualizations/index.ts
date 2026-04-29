/**
 * Visualization Components Library
 *
 * Master index file for all D3.js visualization components.
 * Provides categorized exports and easy importing throughout the platform.
 */

// ============================================================================
// BASIC VISUALIZATIONS (29 components)
// ============================================================================

import {
  HorizonChart
} from './basic/HorizonChart'

import {
  Streamgraph
} from './basic/Streamgraph'

import {
  SankeyDiagram
} from './basic/SankeyDiagram'

import {
  BulletGraph
} from './basic/BulletGraph'

import {
  GaugeChart
} from './basic/GaugeChart'

import {
  Heatmap
} from './basic/Heatmap'

import {
  WordCloud
} from './basic/WordCloud'

import {
  DonutChart
} from './basic/DonutChart'

import {
  Sparkline,
  GroupedSparkline
} from './basic/Sparkline'

import {
  WaterfallChart
} from './basic/WaterfallChart'

import {
  FunnelChart
} from './basic/FunnelChart'

import {
  BumpChart
} from './basic/BumpChart'

import {
  SlopeGraph
} from './basic/SlopeGraph'

import {
  RadialBarChart
} from './basic/RadialBarChart'

import {
  PolarAreaChart
} from './basic/PolarAreaChart'

import {
  DivergingBarChart
} from './basic/DivergingBarChart'

import {
  LollipopChart
} from './basic/LollipopChart'

import {
  DumbbellPlot
} from './basic/DumbbellPlot'

import {
  PyramidChart
} from './basic/PyramidChart'

import {
  ProgressRing
} from './basic/ProgressRing'

import {
  SpanChart
} from './basic/SpanChart'

import {
  StepChart
} from './basic/StepChart'

import {
  TileGrid
} from './basic/TileGrid'

import {
  MosaicPlot
} from './basic/MosaicPlot'

import {
  LikertChart
} from './basic/LikertChart'

import {
  PopulationPyramid
} from './basic/PopulationPyramid'

import {
  DifferenceChart
} from './basic/DifferenceChart'

import {
  MatrixChart
} from './basic/MatrixChart'

import {
  SurveyPlot
} from './basic/SurveyPlot'

// ============================================================================
// STATISTICAL VISUALIZATIONS (5 components)
// ============================================================================

import {
  BoxPlot
} from './statistical/BoxPlot'

import {
  RangePlot
} from './statistical/RangePlot'

import {
  DotPlot
} from './statistical/DotPlot'

import {
  DensityPlot
} from './statistical/DensityPlot'

import {
  RidgelinePlot
} from './statistical/RidgelinePlot'

// ============================================================================
// NETWORK VISUALIZATIONS (3 components)
// ============================================================================

import {
  NetworkGraph
} from './network/NetworkGraph'

import {
  ChordDiagram
} from './network/ChordDiagram'

import {
  ArcDiagram
} from './network/ArcDiagram'

// ============================================================================
// TEMPORAL VISUALIZATIONS (5 components)
// ============================================================================

import {
  CalendarHeatmap
} from './temporal/CalendarHeatmap'

import {
  Timeline
} from './temporal/Timeline'

import {
  GanttChart
} from './temporal/GanttChart'

import {
  CyclePlot
} from './temporal/CyclePlot'

import {
  CalendarHeatmapFull
} from './temporal/CalendarHeatmapFull'

// ============================================================================
// HIERARCHICAL VISUALIZATIONS (5 components)
// ============================================================================

import {
  Treemap
} from './hierarchical/Treemap'

import {
  SunburstChart
} from './hierarchical/SunburstChart'

import {
  PackedBubble
} from './hierarchical/PackedBubble'

import {
  IcicleChart
} from './hierarchical/IcicleChart'

import {
  TreeMapZoomable
} from './hierarchical/TreeMapZoomable'

// ============================================================================
// MULTIVARIATE VISUALIZATIONS (3 components)
// ============================================================================

import {
  ParallelCoordinates
} from './multivariate/ParallelCoordinates'

import {
  MarimekkoChart
} from './multivariate/MarimekkoChart'

import {
  RadarSpiderChart
} from './multivariate/RadarSpiderChart'

// ============================================================================
// GEOGRAPHIC VISUALIZATIONS (1 component)
// ============================================================================

import {
  ChoroplethMap
} from './geographic/ChoroplethMap'

// ============================================================================
// RE-EXPORT ALL COMPONENTS
// ============================================================================

export {
  HorizonChart,
  Streamgraph,
  SankeyDiagram,
  BulletGraph,
  GaugeChart,
  Heatmap,
  WordCloud,
  DonutChart,
  Sparkline,
  GroupedSparkline,
  WaterfallChart,
  FunnelChart,
  BumpChart,
  SlopeGraph,
  RadialBarChart,
  PolarAreaChart,
  DivergingBarChart,
  LollipopChart,
  DumbbellPlot,
  PyramidChart,
  ProgressRing,
  SpanChart,
  StepChart,
  TileGrid,
  MosaicPlot,
  LikertChart,
  PopulationPyramid,
  DifferenceChart,
  MatrixChart,
  SurveyPlot,
  BoxPlot,
  RangePlot,
  DotPlot,
  DensityPlot,
  RidgelinePlot,
  NetworkGraph,
  ChordDiagram,
  ArcDiagram,
  CalendarHeatmap,
  Timeline,
  GanttChart,
  CyclePlot,
  CalendarHeatmapFull,
  Treemap,
  SunburstChart,
  PackedBubble,
  IcicleChart,
  TreeMapZoomable,
  ParallelCoordinates,
  MarimekkoChart,
  RadarSpiderChart,
  ChoroplethMap,
}

// ============================================================================
// EXPORT BY CATEGORY
// ============================================================================

export const BasicVisualizations = {
  HorizonChart,
  Streamgraph,
  SankeyDiagram,
  BulletGraph,
  GaugeChart,
  Heatmap,
  WordCloud,
  DonutChart,
  Sparkline,
  GroupedSparkline,
  WaterfallChart,
  FunnelChart,
  BumpChart,
  SlopeGraph,
  RadialBarChart,
  PolarAreaChart,
  DivergingBarChart,
  LollipopChart,
  DumbbellPlot,
  PyramidChart,
  ProgressRing,
  SpanChart,
  StepChart,
  TileGrid,
  MosaicPlot,
  LikertChart,
  PopulationPyramid,
  DifferenceChart,
  MatrixChart,
  SurveyPlot,
} as const

export const StatisticalVisualizations = {
  BoxPlot,
  RangePlot,
  DotPlot,
  DensityPlot,
  RidgelinePlot,
} as const

export const NetworkVisualizations = {
  NetworkGraph,
  ChordDiagram,
  ArcDiagram,
} as const

export const TemporalVisualizations = {
  CalendarHeatmap,
  Timeline,
  GanttChart,
  CyclePlot,
  CalendarHeatmapFull,
} as const

export const HierarchicalVisualizations = {
  Treemap,
  SunburstChart,
  PackedBubble,
  IcicleChart,
  TreeMapZoomable,
} as const

export const MultivariateVisualizations = {
  ParallelCoordinates,
  MarimekkoChart,
  RadarSpiderChart,
} as const

export const GeographicVisualizations = {
  ChoroplethMap,
} as const

// ============================================================================
// COMPLETE COMPONENT REGISTRY
// ============================================================================

export const AllVisualizations = {
  ...BasicVisualizations,
  ...StatisticalVisualizations,
  ...NetworkVisualizations,
  ...TemporalVisualizations,
  ...HierarchicalVisualizations,
  ...MultivariateVisualizations,
  ...GeographicVisualizations,
} as const

// ============================================================================
// TYPE EXPORTS
// ============================================================================
// Note: Import types directly from each component file as needed
// Example: import type { HorizonChartProps } from './basic/HorizonChart'

// ============================================================================
// COMPONENT COUNT BY CATEGORY
// ============================================================================

export const ComponentCounts = {
  basic: 29,
  statistical: 5,
  network: 3,
  temporal: 5,
  hierarchical: 5,
  multivariate: 3,
  geographic: 1,
  total: 51, // 50 Tier 1 + index
} as const

// ============================================================================
// UTILITY EXPORTS
// ============================================================================

export {
  d3utils,
  // Color scales
  createColorScale,
  createSequentialScale,
  createDivergingScale,
  getPerformanceColor,
  getRiskColor,
  getSentimentColor,
  getPlatformColor,
  getGeographicColor,
  // Scale factories
  createLinearScale,
  createLogScale,
  createSqrtScale,
  createPowScale,
  createTimeScale,
  createBandScale,
  createPointScale,
  createThresholdScale,
  createQuantileScale,
  createQuantizeScale,
  // Formatters
  formatNumber,
  formatNumberFixed,
  formatNumberAbbreviated,
  formatPercent,
  formatCurrency,
  formatDateUAE,
  formatDateMonthYear,
  formatDateFull,
  formatDateISO,
  formatRelativeTime,
  formatDuration,
  formatFileSize,
  formatScoreWithRating,
  // Time utilities
  getTimeInterval,
  getDateTicks,
  isUAEWeekend,
  getNextBusinessDay,
  getUAEPublicHolidays,
  // Data aggregation
  aggregateByTime,
  aggregateByCategory,
  calculatePercentiles,
  calculateRollingAverage,
  calculateGrowthRate,
  calculateCAGR,
  // Statistics
  calculateStatistics,
  detectOutliers,
  calculateCorrelation,
  // Geometry
  createTimeSeriesLine,
  createTimeSeriesArea,
  createRadialLine,
  // Transitions
  createTransition,
  animatePathDrawing,
  animateBarGrowth,
  // Accessibility
  generateAccessibleTitle,
  generateARIADescription,
} from '@/lib/visualization-utils/d3-utils'

// ============================================================================
// TOOLTIP EXPORTS
// ============================================================================

export {
  VisualizationTooltip,
  useTooltip,
  useTooltipContext,
  VisualizationTooltipProvider,
  addTooltipToD3Selection,
  formatNumericTooltip,
  formatDateTooltip,
  formatCategoryTooltip,
  formatMultiMetricTooltip,
} from './Tooltip'

// ============================================================================
// EXPORT UTILITIES
// ============================================================================

export {
  exportUtils,
  // SVG export
  exportSVG,
  exportSVGToString,
  getSVGDataURL,
  copySVGToClipboard,
  // PNG export
  exportPNG,
  getPNGDataURL,
  copyPNGToClipboard,
  // PDF export
  exportPDF,
  // Data export
  exportCSV,
  exportExcel,
  exportJSON,
  objectsToCSV,
  // Utilities
  exportVisualization,
  batchExport,
  exportAsZip,
  printSVG,
  useExport,
} from '@/lib/visualization-utils/export-utils'
