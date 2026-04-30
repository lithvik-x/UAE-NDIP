'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel, StatusCard } from '@/components/dashboard/glass-card'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  Heatmap,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertTriangle,
  ArrowUpRight,
  Bell,
  Calendar,
  Cloud,
  Crosshair,
  Droplets,
  Eye,
  Flame,
  Ghost,
  MapPin,
  Shield,
  Skull,
  Sparkles,
  Target,
  ThermometerSun,
  Timer,
  TrendingDown,
  Users,
  Zap,
} from 'lucide-react'
import { clairvoyanceData } from '@/lib/data-loader'

export default function CrisisWarRoomPage() {
  // Extract real data from data loader
  const { infodemicCases, seasonalThreats, threatMatrix } = clairvoyanceData.crisisWarRoom
  // ============================================================================
  // CHART DATA FOR VISUALIZATIONS
  // ============================================================================

  // Map real threat matrix data to quadrant chart
  const threatQuadrantData = threatMatrix.map((item, index) => {
    // Determine quadrant based on probability and impact
    let quadrant: string
    if (item.probability >= 70 && item.impact >= 70) quadrant = 'high-high'
    else if (item.probability >= 70) quadrant = 'med-high'
    else if (item.impact >= 70) quadrant = 'high-med'
    else quadrant = 'low-low'

    return {
      id: index + 1,
      name: item.threat,
      impact: item.impact,
      probability: item.probability,
      quadrant,
      category: 'General Threat',
    }
  })

  // 90-day prediction trend
  const predictionTrendData = [
    { day: 'Day 1', predicted: 18, actual: 15, accuracy: 94 },
    { day: 'Day 15', predicted: 22, actual: 20, accuracy: 95 },
    { day: 'Day 30', predicted: 25, actual: 28, accuracy: 93 },
    { day: 'Day 45', predicted: 19, actual: 17, accuracy: 96 },
    { day: 'Day 60', predicted: 16, actual: 14, accuracy: 97 },
    { day: 'Day 75', predicted: 21, actual: 22, accuracy: 95 },
    { day: 'Day 90', predicted: 15, actual: 12, accuracy: 98 },
  ]

  // Response time trend
  const responseTimeData = [
    { month: 'Aug', avgTime: 4.8, target: 3.0 },
    { month: 'Sep', avgTime: 4.5, target: 3.0 },
    { month: 'Oct', avgTime: 4.2, target: 3.0 },
    { month: 'Nov', avgTime: 3.8, target: 3.0 },
    { month: 'Dec', avgTime: 3.5, target: 3.0 },
    { month: 'Jan', avgTime: 3.2, target: 3.0 },
  ]

  // Threat category distribution
  const threatCategoryData = [
    { name: 'Medicine Safety', value: 28, color: CHART_COLORS.rose },
    { name: 'Misinformation', value: 42, color: CHART_COLORS.warning },
    { name: 'Technical Issues', value: 35, color: CHART_COLORS.orange },
    { name: 'Reputation', value: 18, color: CHART_COLORS.fuchsia },
    { name: 'Data Security', value: 12, color: CHART_COLORS.denim },
    { name: 'Service Quality', value: 24, color: CHART_COLORS.info },
  ]

  // Seasonal threat patterns
  const seasonalThreatData = [
    { month: 'Jan', level: 85, category: 'Respiratory' },
    { month: 'Feb', level: 78, category: 'Respiratory' },
    { month: 'Mar', level: 65, category: 'General' },
    { month: 'Apr', level: 58, category: 'General' },
    { month: 'May', level: 52, category: 'General' },
    { month: 'Jun', level: 48, category: 'Heat' },
    { month: 'Jul', level: 72, category: 'Heat' },
    { month: 'Aug', level: 88, category: 'Heat' },
    { month: 'Sep', level: 62, category: 'School' },
    { month: 'Oct', level: 58, category: 'General' },
    { month: 'Nov', level: 68, category: 'Respiratory' },
    { month: 'Dec', level: 75, category: 'Respiratory' },
  ]

  // Crisis escalation funnel
  const escalationFunnelData = [
    { stage: 'Signals Detected', count: 1250 },
    { stage: 'Validated', count: 680 },
    { stage: 'Under Monitoring', count: 340 },
    { stage: 'Active Response', count: 120 },
    { stage: 'Critical', count: 22 },
  ]

  // Platform vulnerability matrix
  const platformVulnerabilityData = [
    { platform: 'WhatsApp', risk: 88, incidents: 45 },
    { platform: 'Reddit', risk: 72, incidents: 28 },
    { platform: 'Twitter/X', risk: 65, incidents: 35 },
    { platform: 'Facebook', risk: 58, incidents: 22 },
    { platform: 'Instagram', risk: 52, incidents: 18 },
    { platform: 'TikTok', risk: 48, incidents: 15 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="red" className="mb-2">CLAIRVOYANCE-CX</Badge>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-red">Crisis War Room</h1>
            <div className="flex h-3 w-3 animate-pulse">
              <span className="relative inline-flex rounded-full h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </div>
          </div>
          <p className="mt-2 text-slate-600">
            Operation "Ground Truth" – 90-day early warning crisis prediction and real-time threat response
          </p>
        </div>
        <Button className="bg-gradient-red hover:opacity-90 text-white gap-2">
          <Bell className="h-4 w-4" />
          Activate Red Mode
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Active Threats"
          value="22"
          previousValue={28}
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="rose"
          status="warning"
        />
        <MetricCard
          title="Avg Response Time"
          value="3.2"
          unit="hours"
          previousValue={4.8}
          icon={<Timer className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Prediction Accuracy"
          value="94.7"
          unit="%"
          previousValue={92.1}
          icon={<Eye className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Threats Intercepted"
          value="156"
          previousValue={142}
          icon={<Shield className="h-6 w-6" />}
          gradient="emerald"
        />
      </div>

      <Tabs defaultValue="scenarios" className="space-y-6">
        <TabsList className="glass-panel flex-wrap">
          <TabsTrigger value="scenarios">Crisis Scenarios</TabsTrigger>
          <TabsTrigger value="seasonal">Seasonal Radar</TabsTrigger>
          <TabsTrigger value="response">Response Matrix</TabsTrigger>
          <TabsTrigger value="app-crisis">App Crisis</TabsTrigger>
          <TabsTrigger value="library">Threat Library</TabsTrigger>
        </TabsList>

        {/* Crisis Scenarios Tab - VERIFIED CASE STUDIES from File 03 */}
        <TabsContent value="scenarios" className="space-y-6">
          {/* Analytics Dashboard */}
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">90-Day Prediction Accuracy</CardTitle>
                <CardDescription>Predicted vs actual crisis events</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart
                  data={predictionTrendData}
                  xAxisKey="day"
                  lines={[
                    { dataKey: 'predicted', name: 'Predicted', color: CHART_COLORS.warning, strokeWidth: 2 },
                    { dataKey: 'actual', name: 'Actual', color: CHART_COLORS.rose, strokeWidth: 2 },
                  ]}
                  height={200}
                  showLegend={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Threat Categories</CardTitle>
                <CardDescription>Active threats by type</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={threatCategoryData}
                  donut={true}
                  height={200}
                  showLegend={false}
                />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Response Time Trend</CardTitle>
                <CardDescription>Average hours to respond (6 months)</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart
                  data={responseTimeData}
                  xAxisKey="month"
                  lines={[
                    { dataKey: 'avgTime', name: 'Avg Response Time', color: CHART_COLORS.denim, strokeWidth: 3 },
                    { dataKey: 'target', name: 'Target', color: CHART_COLORS.success, strokeWidth: 2, curveType: 'step' },
                  ]}
                  height={200}
                  referenceLines={[{ value: 3.0, label: 'Target', color: CHART_COLORS.success }]}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Crisis Escalation Funnel</CardTitle>
                <CardDescription>Signal to critical stage conversion</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={escalationFunnelData}
                  xAxisKey="stage"
                  bars={[{ dataKey: 'count', name: 'Cases', color: CHART_COLORS.rose }]}
                  horizontal={true}
                  height={200}
                  showGrid={false}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Operation Ground Truth – Historical Case Studies" description="Verified crisis scenarios from 2023-2025 with simulation architecture" badge="3 Scenarios">
            <div className="space-y-8">

              {/* Case Study Alpha: Marburg Virus */}
              <Card className="border-red-300 bg-red-50/30">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-red text-white">
                        <AlertTriangle className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-red-900">Case Study Alpha: Marburg Virus Importation Scare</CardTitle>
                        <CardDescription className="text-red-700">Bio-Security / Border Control / IHR Compliance</CardDescription>
                      </div>
                    </div>
                    <Badge variant="destructive" className="text-sm">April 2023</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="rounded-lg bg-white/80 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Ghost className="h-4 w-4 text-red-500" />
                        <span className="text-sm font-semibold text-slate-900">The Threat</span>
                      </div>
                      <p className="text-sm text-slate-600">Marburg Virus Disease (MVD) outbreaks in Equatorial Guinea and Tanzania. 88% case fatality rate. Viral hemorrhagic fever with bleeding and organ failure.</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">High-Anxiety Period</Badge>
                        <Badge variant="outline" className="text-xs">Pre-Summer Travel</Badge>
                        <Badge variant="outline" className="text-xs">Global Aviation Hub</Badge>
                      </div>
                    </div>

                    <div className="rounded-lg bg-white/80 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Ghost className="h-4 w-4 text-amber-500" />
                        <span className="text-sm font-semibold text-slate-900">The Rumor</span>
                      </div>
                      <p className="text-sm text-slate-600">"Bleeding passenger seen at Zayed Intl Airport. Virus has breached GCC borders. Government hiding Patient Zero to protect tourism."</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <Badge variant="warning" className="text-xs">Social Media</Badge>
                        <Badge variant="warning" className="text-xs">WhatsApp Forwarded</Badge>
                        <Badge variant="warning" className="text-xs">Panic Narrative</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-red-100/50 p-4 border border-red-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm font-semibold text-slate-900">Official Counter-Offensive (April 4, 2023)</span>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3">
                      <div>
                        <span className="text-xs text-slate-600">Travel Advisory</span>
                        <p className="text-sm font-semibold text-slate-900">"Postpone travel to Tanzania/Equatorial Guinea unless absolutely necessary"</p>
                        <p className="text-xs text-slate-500 mt-1">NOT total flight ban (economic penalty avoided)</p>
                      </div>
                      <div>
                        <span className="text-xs text-slate-600">Isolation Protocol</span>
                        <p className="text-sm font-semibold text-slate-900">"Isolate if symptoms appear. Seek medical attention immediately."</p>
                      </div>
                      <div>
                        <span className="text-xs text-slate-600">System Assurance</span>
                        <p className="text-sm font-semibold text-slate-900">"Epidemiological surveillance very effective. Constant coordination."</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-slate-900 mb-3">Simulation Architecture</div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-slate-200">
                            <th className="text-left py-2 px-3">Phase</th>
                            <th className="text-left py-2 px-3">Inject / Event</th>
                            <th className="text-left py-2 px-3">Decision Required</th>
                            <th className="text-left py-2 px-3">Consequence</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-100">
                            <td className="py-2 px-3"><Badge variant="outline" className="text-xs">T-Minus 1 Hour</Badge></td>
                            <td className="py-2 px-3">WHO confirms 9 deaths in Equatorial Guinea</td>
                            <td className="py-2 px-3">Monitor situation</td>
                            <td className="py-2 px-3">No immediate impact</td>
                          </tr>
                          <tr className="border-b border-slate-100 bg-amber-50">
                            <td className="py-2 px-3"><Badge variant="warning" className="text-xs">T-Minus 0 Hour</Badge></td>
                            <td className="py-2 px-3">WhatsApp: "Bleeding passenger at airport. Avoid travel."</td>
                            <td className="py-2 px-3">Ignore vs. Deny vs. Investigate</td>
                            <td className="py-2 px-3"><span className="text-red-600 font-semibold">Ignore: Panic rises</span> | <span className="text-emerald-600 font-semibold">Deny + Advisory: Success</span></td>
                          </tr>
                          <tr className="border-b border-slate-100">
                            <td className="py-2 px-3"><Badge variant="destructive" className="text-xs">T-Plus 2 Hours</Badge></td>
                            <td className="py-2 px-3">Press: "Is MoHAP banning flights from Tanzania?"</td>
                            <td className="py-2 px-3">Issue Statement</td>
                            <td className="py-2 px-3"><span className="text-emerald-600 font-semibold">Correct: "Postpone Travel" advisory</span> | <span className="text-red-600 font-semibold">Wrong: Total ban (economic penalty)</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Case Study Beta: Post-Flood Dengue */}
              <Card className="border-amber-300 bg-amber-50/30">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-amber text-white">
                        <Cloud className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-amber-900">Case Study Beta: "The New Virus" & Post-Flood Vector Crisis</CardTitle>
                        <CardDescription className="text-amber-700">Climate Change Adaptation / Vector-Borne Disease / Public Trust</CardDescription>
                      </div>
                    </div>
                    <Badge variant="warning" className="text-sm">Mid-2024</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg bg-amber-100/50 p-4 border border-amber-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Cloud className="h-4 w-4 text-amber-600" />
                      <span className="text-sm font-semibold text-slate-900">April 16, 2024 – Historic Rainfall</span>
                    </div>
                    <p className="text-sm text-slate-600">Heaviest rainfall in 75 years ("Rain Bomb"). Stagnant water created optimal breeding conditions for Aedes aegypti mosquitoes. Dengue lag time: 4-8 weeks.</p>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="rounded-lg bg-white/80 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Ghost className="h-4 w-4 text-amber-500" />
                        <span className="text-sm font-semibold text-slate-900">The Rumor (May-July 2024)</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">"Mysterious, unknown 'Disease X' spreading. Doctors unable to diagnose."</p>
                      <p className="text-sm text-slate-600 mb-2">Variant: "Chemical contamination from floodwaters/cloud-seeding."</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <Badge variant="warning" className="text-xs">"New Virus"</Badge>
                        <Badge variant="warning" className="text-xs">"Contaminated Water"</Badge>
                        <Badge variant="warning" className="text-xs">Industrial Areas</Badge>
                      </div>
                    </div>

                    <div className="rounded-lg bg-white/80 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm font-semibold text-slate-900">Official Response (July/August 2024)</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-2"><strong>Strategic Transparency:</strong> Named the enemy (Dengue) to remove terror of "unknown."</p>
                      <p className="text-sm text-slate-600 mb-2"><strong>"Elimination" Narrative:</strong> 9 specialist teams deployed. 409 mosquito breeding sites eliminated.</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <Badge variant="success" className="text-xs">Dengue Identified</Badge>
                        <Badge variant="success" className="text-xs">Vector Control</Badge>
                        <Badge variant="info" className="text-xs">Tagalog Campaign</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-purple-100/50 p-4 border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-semibold text-slate-900">Cultural Intelligence: Filipino Campaign</span>
                    </div>
                    <p className="text-sm text-slate-600">August 2024: ADPHC launched specialized awareness campaign in Filipino/Tagalog featuring Filipino healthcare professionals. Targeted migrant workers disproportionately affected due to housing near stagnant water.</p>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-slate-900 mb-3">Simulation Architecture</div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-slate-200">
                            <th className="text-left py-2 px-3">Phase</th>
                            <th className="text-left py-2 px-3">Inject / Event</th>
                            <th className="text-left py-2 px-3">Decision Required</th>
                            <th className="text-left py-2 px-3">Consequence</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-100">
                            <td className="py-2 px-3"><Badge variant="outline" className="text-xs">Day 0</Badge></td>
                            <td className="py-2 px-3">Weather Event: Historic rainfall (April 16)</td>
                            <td className="py-2 px-3">Activate Flood Response</td>
                            <td className="py-2 px-3"><span className="text-amber-600 font-semibold">Trap: Focus only on drowning/electricity</span> | <span className="text-emerald-600 font-semibold">Correct: Also order Vector Control Survey</span></td>
                          </tr>
                          <tr className="border-b border-slate-100 bg-amber-50">
                            <td className="py-2 px-3"><Badge variant="warning" className="text-xs">Day 30</Badge></td>
                            <td className="py-2 px-3">Clinical: ERs report 40% increase in febrile illness. Negative for Flu/COVID</td>
                            <td className="py-2 px-3">Investigate</td>
                            <td className="py-2 px-3"><span className="text-purple-600 font-semibold">Insight: This is the "Dengue Lag"</span></td>
                          </tr>
                          <tr className="border-b border-slate-100">
                            <td className="py-2 px-3"><Badge variant="destructive" className="text-xs">Day 45</Badge></td>
                            <td className="py-2 px-3">Rumor: "Mystery virus killing workers in Musaffah"</td>
                            <td className="py-2 px-3">Communication Strategy</td>
                            <td className="py-2 px-3"><span className="text-emerald-600 font-semibold">Correct: Admit Dengue + "Elimination" stats + Tagalog content</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Case Study Gamma: Recruitment Fraud */}
              <Card className="border-purple-300 bg-purple-50/30">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-purple text-white">
                        <Ghost className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-purple-900">Case Study Gamma: "Phantom Workforce" Recruitment Fraud</CardTitle>
                        <CardDescription className="text-purple-700">Cyber-Crime / Institutional Reputation / Human Resources</CardDescription>
                      </div>
                    </div>
                    <Badge variant="purple" className="text-sm">2023-2024</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="rounded-lg bg-white/80 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Ghost className="h-4 w-4 text-purple-500" />
                        <span className="text-sm font-semibold text-slate-900">The Scam</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">Fake recruitment agencies for Thumbay, MoHAP, VPS Healthcare.</p>
                      <div className="space-y-1">
                        <p className="text-sm text-slate-600"><span className="font-semibold">The Hook:</span> "Salary AED 5,000-8,000 + Free Housing + Instant Visa"</p>
                        <p className="text-sm text-slate-600"><span className="font-semibold">The Sting:</span> AED 500 "processing fee" to secure offer</p>
                        <p className="text-sm text-slate-600"><span className="font-semibold">Forgery:</span> Authentic-looking logos, letterheads, fake domains</p>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">WhatsApp</Badge>
                        <Badge variant="outline" className="text-xs">LinkedIn</Badge>
                        <Badge variant="outline" className="text-xs">Fake Portals</Badge>
                      </div>
                    </div>

                    <div className="rounded-lg bg-white/80 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm font-semibold text-slate-900">Official Response</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-2"><strong>Thumbay Alert:</strong> "No person appointed to act as agent. Neither charges nor collects any fee."</p>
                      <p className="text-sm text-slate-600 mb-2"><strong>MoHAP/VPS:</strong> Fake employment contracts with forged letterheads confirmed.</p>
                      <p className="text-sm text-slate-600"><strong>Law Enforcement:</strong> Cases filed with Dubai Police & Cyber Crime Cells.</p>
                      <div className="mt-2 rounded-lg bg-emerald-100 p-2">
                        <p className="text-xs font-semibold text-emerald-800">CORE RULE: Legitimate UAE recruitment NEVER requires payment from candidate</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-slate-900 mb-3">Simulation Architecture</div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-slate-200">
                            <th className="text-left py-2 px-3">Phase</th>
                            <th className="text-left py-2 px-3">Inject / Event</th>
                            <th className="text-left py-2 px-3">Decision Required</th>
                            <th className="text-left py-2 px-3">Consequence</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-100 bg-amber-50">
                            <td className="py-2 px-3"><Badge variant="warning" className="text-xs">Crisis</Badge></td>
                            <td className="py-2 px-3">"Crowd of 50 foreign nurses in hospital lobby. Have offer letters."</td>
                            <td className="py-2 px-3">Security/Comms Response</td>
                            <td className="py-2 px-3"><span className="text-red-600 font-semibold">Trap: Arrest victims</span> | <span className="text-emerald-600 font-semibold">Correct: Humanitarian handling + Press release denouncing scam</span></td>
                          </tr>
                          <tr className="border-b border-slate-100">
                            <td className="py-2 px-3"><Badge variant="destructive" className="text-xs">Intel</Badge></td>
                            <td className="py-2 px-3">Cyber Report: "Fake domain 'mohap-careers-uae.com' detected"</td>
                            <td className="py-2 px-3">IT Action</td>
                            <td className="py-2 px-3"><span className="text-emerald-600 font-semibold">Correct: Takedown request via TRA/Cyber Security</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Seasonal Radar Tab - PREDICTIVE CALENDAR from File 03 */}
        <TabsContent value="seasonal" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Seasonal Threat Pattern</CardTitle>
                <CardDescription>12-month threat level projection</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={seasonalThreatData}
                  xAxisKey="month"
                  areas={[
                    { dataKey: 'level', name: 'Threat Level', color: CHART_COLORS.warning, fillOpacity: 0.7 },
                  ]}
                  height={200}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Platform Vulnerability</CardTitle>
                <CardDescription>Risk assessment by platform</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={platformVulnerabilityData}
                  xAxisKey="platform"
                  bars={[
                    { dataKey: 'risk', name: 'Risk Score', color: CHART_COLORS.rose },
                  ]}
                  horizontal={true}
                  height={200}
                  showGrid={false}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Predictive Radar – Seasonal Health Intelligence" description="Operational calendar with verified technical thresholds and campaign dates" badge="2023-2025">
            <div className="space-y-8">

              {/* Summer Protocol */}
              <Card className="border-orange-300 bg-orange-50/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-orange text-white">
                        <ThermometerSun className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-orange-900">Summer Protocol: "Safety in Heat" & Midday Break</CardTitle>
                        <CardDescription className="text-orange-700">Operational Window: June 15 – September 15</CardDescription>
                      </div>
                    </div>
                    <Badge variant="warning" className="text-sm">FEDERAL LAW</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 lg:grid-cols-3">
                    <Card className="glass-panel border-red-200">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                          <Flame className="h-5 w-5 text-red-500" />
                          <CardTitle className="text-base">Forbidden Window</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center">
                          <p className="text-3xl font-extrabold text-red-600">12:30 PM - 3:00 PM</p>
                          <p className="text-xs text-slate-500 mt-2">No outdoor work under direct sunlight</p>
                        </div>
                        <div className="mt-3 rounded-lg bg-red-100 p-2 text-xs text-red-800">
                          <strong>Federal Law Violation:</strong> Scheduling outdoor work during this window incurs Legal Penalty + Public Outcry
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="glass-panel border-amber-200">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                          <Crosshair className="h-5 w-5 text-amber-500" />
                          <CardTitle className="text-base">Thermal Work Limit (TWL)</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600">Safe Zone</span>
                          <Badge variant="success" className="text-xs">Unrestricted</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600">Caution Zone</span>
                          <Badge variant="warning" className="text-xs">Scheduling</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600">Danger Zone</span>
                          <Badge variant="destructive" className="text-xs">Cessation</Badge>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Combines temp, humidity, radiant heat, wind speed</p>
                      </CardContent>
                    </Card>

                    <Card className="glass-panel border-blue-200">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-blue-500" />
                          <CardTitle className="text-base">Acclimatization Schedule</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-1 text-sm">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-600">Day 1</span>
                          <span className="font-bold text-blue-600">20% Workload</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-600">Day 2</span>
                          <span className="font-bold text-blue-600">40% Workload</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-600">Day 3</span>
                          <span className="font-bold text-blue-600">60% Workload</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-600">Day 4</span>
                          <span className="font-bold text-blue-600">80% Workload</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-600">Day 5</span>
                          <span className="font-bold text-blue-600">100% Workload</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Re-acclimatization if {`>`}20 days leave or {`>`}8 days sickness</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="rounded-lg bg-blue-100/50 p-4 border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Droplets className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-semibold text-slate-900">Hydration Physiology (Technical Guideline V4.0 - July 15, 2024)</span>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3">
                      <div>
                        <span className="text-xs text-slate-600">Volume</span>
                        <p className="text-sm font-semibold text-slate-900">4-6 liters/day/worker</p>
                      </div>
                      <div>
                        <span className="text-xs text-slate-600">Frequency</span>
                        <p className="text-sm font-semibold text-slate-900">~2L every 2-3 hours</p>
                      </div>
                      <div>
                        <span className="text-xs text-slate-600">Electrolytes</span>
                        <p className="text-sm font-semibold text-slate-900">Must contain &lt;4% sugar</p>
                      </div>
                    </div>
                    <div className="mt-2 rounded-lg bg-red-100 p-2 text-xs text-red-800">
                      <strong>VIOLATION:</strong> Energy drinks (Red Bull, etc.) cause dehydration due to caffeine/sugar content
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Winter Protocol */}
              <Card className="border-denim-300 bg-denim-50/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-denim text-white">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-denim-900">Winter Protocol: Respiratory Defense</CardTitle>
                        <CardDescription className="text-denim-700">Operational Window: October – March | "Stop the Spread" Campaign</CardDescription>
                      </div>
                    </div>
                    <Badge variant="denim" className="text-sm">Oct 4, 2023 Launch</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg bg-white/80 p-4">
                      <div className="text-2xl font-extrabold text-denim-600">111</div>
                      <div className="text-sm text-slate-600 mt-1">Health Centers Activated</div>
                    </div>
                    <div className="rounded-lg bg-white/80 p-4">
                      <div className="text-2xl font-extrabold text-denim-600">15</div>
                      <div className="text-sm text-slate-600 mt-1">Community Pharmacies</div>
                    </div>
                    <div className="rounded-lg bg-white/80 p-4">
                      <div className="text-2xl font-extrabold text-emerald-600">FREE</div>
                      <div className="text-sm text-slate-600 mt-1">Vaccine Cost</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-slate-900 mb-3">Target Demographics (ADPHC Risk List)</div>
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                      {[
                        'Healthcare Workers',
                        'Pregnant Women',
                        'Children < 5 years',
                        'School-aged (5-18)',
                        'Seniors (65+ years)',
                        'Smokers (High respiratory risk)',
                        'Hajj/Umrah Pilgrims',
                      ].map((group, i) => (
                        <div key={i} className="flex items-center gap-2 rounded-lg bg-denim-50 p-2">
                          <div className="h-2 w-2 rounded-full bg-denim-500" />
                          <span className="text-xs font-medium text-slate-700">{group}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg bg-purple-100/50 p-4 border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-semibold text-slate-900">JN.1 Variant Protocol (Late 2023 - Early 2024)</span>
                    </div>
                    <p className="text-sm text-slate-600">Unlike 2020, there were NO lockdowns. The correct response to new variants in "Winter" phase is NOT panic/closure, but <strong>enhanced surveillance + booster promotion</strong>.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Adverse Weather Protocol */}
              <Card className="border-cyan-300 bg-cyan-50/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-cyan text-white">
                        <Cloud className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-cyan-900">Adverse Weather: "The New Seasonal"</CardTitle>
                        <CardDescription className="text-cyan-700">Flash Floods, Electrical Hazards, Driving Accidents {"•"} April 16, 2024 Watershed</CardDescription>
                      </div>
                    </div>
                    <Badge variant="cyan" className="text-sm">Tier-1 Threat</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg bg-cyan-100/50 p-4 border border-cyan-200">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                      <span className="text-sm font-semibold text-slate-900">Paradigm Shift: Rain is Now National Security Threat</span>
                    </div>
                    <p className="text-sm text-slate-600">Following extreme events of April 2024, "Rain" has graduated from minor inconvenience to Tier-1 threat. ADPHC & NCEMA issue specific "Adverse Weather" alerts triggering major operational shifts.</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <Card className="glass-panel">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">Driving Protocols</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600">Speed</span>
                          <span className="font-semibold text-slate-900">Reduce</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600">Following Gap</span>
                          <span className="font-semibold text-slate-900">4-seconds</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="glass-panel">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">Work Stoppage</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p className="text-slate-600">Lifting operations (cranes) must cease during high winds</p>
                      </CardContent>
                    </Card>

                    <Card className="glass-panel">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">Remote Work</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p className="text-slate-600">"Stay Home" directive for severe cases (April 2024 model)</p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Response Matrix Tab */}
        <TabsContent value="response" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Istijaba Pulse Metric */}
            <GlassPanel title="Istijaba Pulse Metric – The Canary in the Coal Mine" description="Abu Dhabi Emergency Call Center (8001717) leading indicator analysis" badge="Live">
              <div className="space-y-4">
                <Alert variant="info">
                  <Sparkles className="h-4 w-4" />
                  <AlertTitle>Leading Indicator Advantage</AlertTitle>
                  <AlertDescription>
                    A 200% spike in calls about specific symptoms precedes social media rumors by 6-12 hours. Early detection enables preemption.
                  </AlertDescription>
                </Alert>

                <div className="space-y-3">
                  {[
                    { symptom: 'Bleeding gums', calls: 47, trend: '+180%', status: 'critical', meaning: 'Potential Marburg rumor precursor' },
                    { symptom: 'Strange rash', calls: 23, trend: '+45%', status: 'warning', meaning: 'Dermatological concern' },
                    { symptom: 'High fever + pain', calls: 156, trend: '+340%', status: 'critical', meaning: 'Dengue cluster indicator' },
                    { symptom: 'Difficulty breathing', calls: 89, trend: '+12%', status: 'info', meaning: 'Normal seasonal baseline' },
                  ].map((signal, i) => (
                    <Card key={i} className={`glass-panel ${signal.status === 'critical' ? 'border-red-300 bg-red-50/30' : signal.status === 'warning' ? 'border-amber-300 bg-amber-50/30' : ''}`}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="font-semibold text-slate-900">{signal.symptom}</div>
                            <div className="text-xs text-slate-500 mt-1">{signal.meaning}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-slate-900">{signal.calls} calls</div>
                            <div className={`text-sm font-semibold ${signal.status === 'critical' ? 'text-red-600' : signal.status === 'warning' ? 'text-amber-600' : 'text-slate-500'}`}>
                              {signal.trend}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </GlassPanel>

            {/* Scoring Criteria */}
            <GlassPanel title="Communication Scoring Criteria – The Tone Variable" description="Historical analysis of UAE official statements reveals specific rhetorical style">
              <div className="space-y-4">
                <div className="rounded-lg bg-emerald-100/50 p-4 border border-emerald-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm font-semibold text-slate-900">Positive Score</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="success" className="text-xs">Authoritative</Badge>
                    <Badge variant="success" className="text-xs">Legalistic</Badge>
                    <Badge variant="success" className="text-xs">Calm</Badge>
                    <Badge variant="success" className="text-xs">Data-Heavy</Badge>
                    <Badge variant="success" className="text-xs">Specific Stats</Badge>
                  </div>
                  <p className="text-xs text-slate-600 mt-2">Example: "409 breeding sites eliminated. 9 specialist teams deployed."</p>
                </div>

                <div className="rounded-lg bg-red-100/50 p-4 border border-red-200">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <span className="text-sm font-semibold text-slate-900">Negative Score</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="destructive" className="text-xs">Emotional</Badge>
                    <Badge variant="destructive" className="text-xs">Alarmist</Badge>
                    <Badge variant="destructive" className="text-xs">Vague</Badge>
                    <Badge variant="destructive" className="text-xs">Combative</Badge>
                  </div>
                </div>

                <div className="rounded-lg bg-purple-100/50 p-4 border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-semibold text-slate-900">Mandatory Phrase</span>
                  </div>
                  <p className="text-sm text-slate-700 italic">"Obtain information from official sources"</p>
                  <p className="text-xs text-slate-500 mt-1">This phrase is a mandatory component of almost every successful rebuttal.</p>
                </div>

                {/* Stakeholder Mapping */}
                <div>
                  <div className="text-sm font-semibold text-slate-900 mb-3">Inter-Agency Dependencies</div>
                  <div className="space-y-2">
                    {[
                      { agency: 'MoHAP (Federal)', role: 'Borders, International travel advisories' },
                      { agency: 'NCEMA', role: 'High-level disaster/weather response' },
                      { agency: 'ADPHC', role: 'Specific technical guidelines (Heat, Flu, Dengue)' },
                      { agency: 'MoHRE (Labor)', role: 'Midday Break enforcement' },
                      { agency: 'Police/Cyber', role: 'Fake News, Scam investigations' },
                    ].map((stake, i) => (
                      <div key={i} className="flex items-start gap-2 rounded-lg bg-slate-50/50 p-2">
                        <div className="h-2 w-2 rounded-full bg-denim-500 mt-1.5" />
                        <div>
                          <span className="text-xs font-semibold text-slate-900">{stake.agency}</span>
                          <p className="text-xs text-slate-500">{stake.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </div>

          {/* Inject Matrix */}
          <GlassPanel title="Inject Matrix – Data-Driven Event Simulation" description="Seasonal triggers with correct response mapping">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4">Season</th>
                    <th className="text-left py-3 px-4">Trigger Event</th>
                    <th className="text-left py-3 px-4">Resulting Inject</th>
                    <th className="text-left py-3 px-4">Correct Response</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100 bg-orange-50">
                    <td className="py-3 px-4"><Badge variant="warning">Summer (July)</Badge></td>
                    <td className="py-3 px-4">Temp &gt;45°C + High Humidity</td>
                    <td className="py-3 px-4">"Heat Stroke Cluster at Construction Site B"</td>
                    <td className="py-3 px-4">Check TWL logs. Audit Acclimatization records.</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-amber-50">
                    <td className="py-3 px-4"><Badge variant="warning">Summer (Aug)</Badge></td>
                    <td className="py-3 px-4">Post-Rain + 4 Weeks</td>
                    <td className="py-3 px-4">"Fever Spike in Industrial Area (Dengue)"</td>
                    <td className="py-3 px-4">Activate Pest Control. Launch Tagalog Awareness.</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-denim-50">
                    <td className="py-3 px-4"><Badge variant="denim">Winter (Oct)</Badge></td>
                    <td className="py-3 px-4">Global Flu Season Start</td>
                    <td className="py-3 px-4">"Rumor: Flu Shot causes..."</td>
                    <td className="py-3 px-4">Release "Stop the Spread" data. Mobilize 111 Centers.</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-purple-50">
                    <td className="py-3 px-4"><Badge variant="purple">Anytime</Badge></td>
                    <td className="py-3 px-4">Viral Job Post</td>
                    <td className="py-3 px-4">"Mob at Hospital Reception (Fake Jobs)"</td>
                    <td className="py-3 px-4">Police Liaison. Public Fraud Alert.</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-cyan-50">
                    <td className="py-3 px-4"><Badge variant="cyan">Spring (Apr)</Badge></td>
                    <td className="py-3 px-4">NCM Weather Alert</td>
                    <td className="py-3 px-4">"Red Alert: Convective Clouds"</td>
                    <td className="py-3 px-4">Remote Work Order. Pre-position Water Pumps.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* App Crisis Tab - FORENSIC AUDIT from File 07 */}
        <TabsContent value="app-crisis" className="space-y-6">
          <GlassPanel
            title="Digital Health App Crisis: Forensic Audit 2024-2026"
            description="User sentiment analysis of SEHA, Malaffi, Sahatna, and Daman applications"
            badge="58% Technical Failure Rate"
          >
            <div className="space-y-6">
              {/* Executive Overview - 3 Macro-Trends */}
              <Card className="glass-card bg-gradient-to-br from-rose-50/50 to-white border-rose-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-rose text-white">
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Executive Strategic Overview</CardTitle>
                      <CardDescription>Three macro-trends driving negative sentiment</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg bg-white p-4 border border-slate-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-purple text-white">
                          <Ghost className="h-4 w-4" />
                        </div>
                        <div className="font-bold text-slate-900 text-sm">Digital Consolidation</div>
                      </div>
                      <p className="text-xs text-slate-600">Malaffi Portal → Sahatna platform migration creating "migration void" confusion</p>
                    </div>
                    <div className="rounded-lg bg-white p-4 border border-slate-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-denim text-white">
                          <Shield className="h-4 w-4" />
                        </div>
                        <div className="font-bold text-slate-900 text-sm">Federal Identity Mandate</div>
                      </div>
                      <p className="text-xs text-slate-600">UAE Pass authentication integration causing API handshake failures</p>
                    </div>
                    <div className="rounded-lg bg-white p-4 border border-slate-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-orange text-white">
                          <Zap className="h-4 w-4" />
                        </div>
                        <div className="font-bold text-slate-900 text-sm">Automated Adjudication</div>
                      </div>
                      <p className="text-xs text-slate-600">Thiqa program algorithm-driven claim rejections sparking user backlash</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technical vs Service Complaints Ratio */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card border-red-200">
                  <CardHeader>
                    <CardTitle>Quantitative Ratio Analysis</CardTitle>
                    <CardDescription>Technical vs Service Complaint Breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-slate-700">Technical Complaints</span>
                          <span className="text-2xl font-bold text-red-600">58%</span>
                        </div>
                        <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-rose" style={{ width: '58%' }} />
                        </div>
                        <p className="mt-2 text-xs text-slate-600">Login loop, Crashes, UAE Pass errors, Spinning wheel, Image upload failures</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-slate-700">Service Complaints</span>
                          <span className="text-2xl font-bold text-amber-600">42%</span>
                        </div>
                        <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-orange" style={{ width: '42%' }} />
                        </div>
                        <p className="mt-2 text-xs text-slate-600">Thiqa rejection, Appointment cancelled, Refund delays, Data privacy concerns</p>
                      </div>
                      <div className="rounded-lg bg-rose-50 border-2 border-rose-200 p-3 mt-4">
                        <div className="text-sm font-bold text-rose-900 mb-1">Ratio: 1.4 : 1</div>
                        <p className="text-xs text-rose-800">Technical Debt is the PRIMARY driver of negative sentiment</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Strategic Interpretation</CardTitle>
                    <CardDescription>What the data tells us</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 rounded-lg bg-slate-50 p-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-rose-600 shrink-0">
                          <AlertTriangle className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 text-sm">The "Frustration Gate"</div>
                          <p className="text-xs text-slate-600 mt-1">Login failures block users before they can experience service issues. Fix UAE Pass integration to reveal true service complaints.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 rounded-lg bg-slate-50 p-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shrink-0">
                          <Target className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 text-sm">Remediation Priority</div>
                          <p className="text-xs text-slate-600 mt-1">Immediate investment in Authentication Stability and Transaction Atomicity would eliminate ~60% of 1-star reviews.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* App-Specific Analysis */}
              <div className="grid gap-6 lg:grid-cols-3">
                {/* SEHA Analysis */}
                <Card className="glass-card border-rose-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="rose">SEHA</Badge>
                      <Badge variant="warning">High Severity</Badge>
                    </div>
                    <CardTitle className="text-lg">Payment & Service Failures</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="rounded-lg bg-red-50 border border-red-200 p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Ghost className="h-4 w-4 text-red-600" />
                        <div className="font-bold text-red-900 text-sm">Ghost Transaction</div>
                      </div>
                      <p className="text-xs text-red-800">Payment deducted but no booking confirmed. Users forced to pay twice at facility.</p>
                    </div>
                    <div className="rounded-lg bg-amber-50 border border-amber-200 p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="h-4 w-4 text-amber-600" />
                        <div className="font-bold text-amber-900 text-sm">Sync Lag</div>
                      </div>
                      <p className="text-xs text-amber-800">App shows available slots, backend cancels retroactively. Silent cancellations = no notification.</p>
                    </div>
                    <div className="rounded-lg bg-slate-50 border border-slate-200 p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Shield className="h-4 w-4 text-slate-600" />
                        <div className="font-bold text-slate-900 text-sm">Login Loop</div>
                      </div>
                      <p className="text-xs text-slate-700">UAE Pass handshake failure. App hangs on white screen after successful authentication.</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Malaffi/Sahatna Analysis */}
                <Card className="glass-card border-purple-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="purple">Malaffi/Sahatna</Badge>
                      <Badge variant="info">Transition</Badge>
                    </div>
                    <CardTitle className="text-lg">Migration & Privacy Issues</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="rounded-lg bg-purple-50 border border-purple-200 p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Ghost className="h-4 w-4 text-purple-600" />
                        <div className="font-bold text-purple-900 text-sm">Migration Friction</div>
                      </div>
                      <p className="text-xs text-purple-800">Malaffi app removed Dec 2025. Users directed to Sahatna without clear onboarding.</p>
                    </div>
                    <div className="rounded-lg bg-rose-50 border border-rose-200 p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Eye className="h-4 w-4 text-rose-600" />
                        <div className="font-bold text-rose-900 text-sm">Family Data Silo</div>
                      </div>
                      <p className="text-xs text-rose-800">Parents unable to access children's records. Complex "proxy access" workflows frequently fail.</p>
                    </div>
                    <div className="rounded-lg bg-slate-50 border border-slate-200 p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Zap className="h-4 w-4 text-slate-600" />
                        <div className="font-bold text-slate-900 text-sm">Crash Persistence</div>
                      </div>
                      <p className="text-xs text-slate-700">Sahatna crashes during onboarding when syncing legacy Malaffi data (large files).</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Daman Analysis */}
                <Card className="glass-card border-orange-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="orange">Daman</Badge>
                      <Badge variant="warning">High Severity</Badge>
                    </div>
                    <CardTitle className="text-lg">Claims & Technical Issues</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="rounded-lg bg-orange-50 border border-orange-200 p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Zap className="h-4 w-4 text-orange-600" />
                        <div className="font-bold text-orange-900 text-sm">Thiqa Rejection</div>
                      </div>
                      <p className="text-xs text-orange-800">Automated adjudication denies claims without explanation. No "Appeal" button in app.</p>
                    </div>
                    <div className="rounded-lg bg-amber-50 border border-amber-200 p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Cloud className="h-4 w-4 text-amber-600" />
                        <div className="font-bold text-amber-900 text-sm">Upload Crash</div>
                      </div>
                      <p className="text-xs text-amber-800">App crashes during image capture/upload for reimbursement claims. Lost progress.</p>
                    </div>
                    <div className="rounded-lg bg-rose-50 border border-rose-200 p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Eye className="h-4 w-4 text-rose-600" />
                        <div className="font-bold text-rose-900 text-sm">Transparency Void</div>
                      </div>
                      <p className="text-xs text-rose-800">Claims sit at "Submitted" until suddenly flipping to "Rejected". No granular status updates.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Comparative Failure Modes Table */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Comparative Failure Modes Analysis</CardTitle>
                  <CardDescription>Six primary failure mechanisms across platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-slate-200">
                          <th className="text-left py-3 px-3 font-semibold text-slate-900">Failure Mode</th>
                          <th className="text-left py-3 px-3 font-semibold text-slate-900">Keyword</th>
                          <th className="text-left py-3 px-3 font-semibold text-slate-900">Platform(s)</th>
                          <th className="text-left py-3 px-3 font-semibold text-slate-900">Mechanism</th>
                          <th className="text-left py-3 px-3 font-semibold text-slate-900">Impact</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-100 bg-red-50">
                          <td className="py-3 px-3 font-medium text-slate-900">Authentication Deadlock</td>
                          <td className="py-3 px-3"><Badge variant="rose">Login loop</Badge></td>
                          <td className="py-3 px-3">SEHA, Sahatna</td>
                          <td className="py-3 px-3 text-slate-600">UAE Pass API handshake failure</td>
                          <td className="py-3 px-3"><Badge variant="destructive">Total Service Denial</Badge></td>
                        </tr>
                        <tr className="border-b border-slate-100 bg-amber-50">
                          <td className="py-3 px-3 font-medium text-slate-900">Ghost Transaction</td>
                          <td className="py-3 px-3"><Badge variant="warning">Payment deducted</Badge></td>
                          <td className="py-3 px-3">SEHA, Daman</td>
                          <td className="py-3 px-3 text-slate-600">Payment Gateway token not received</td>
                          <td className="py-3 px-3"><Badge variant="warning">Financial Loss</Badge></td>
                        </tr>
                        <tr className="border-b border-slate-100 bg-orange-50">
                          <td className="py-3 px-3 font-medium text-slate-900">Sync Lag</td>
                          <td className="py-3 px-3"><Badge variant="orange">Appointment cancelled</Badge></td>
                          <td className="py-3 px-3">SEHA</td>
                          <td className="py-3 px-3 text-slate-600">App Cache ↔ HIS latency</td>
                          <td className="py-3 px-3"><Badge variant="info">Operational Failure</Badge></td>
                        </tr>
                        <tr className="border-b border-slate-100 bg-purple-50">
                          <td className="py-3 px-3 font-medium text-slate-900">Adjudication Black Box</td>
                          <td className="py-3 px-3"><Badge variant="purple">Thiqa rejection</Badge></td>
                          <td className="py-3 px-3">Daman</td>
                          <td className="py-3 px-3 text-slate-600">Automated rule engine denial</td>
                          <td className="py-3 px-3"><Badge variant="secondary">Coverage Denial</Badge></td>
                        </tr>
                        <tr className="border-b border-slate-100 bg-denim-50">
                          <td className="py-3 px-3 font-medium text-slate-900">Upload Crash</td>
                          <td className="py-3 px-3"><Badge variant="denim">Crash</Badge></td>
                          <td className="py-3 px-3">Daman</td>
                          <td className="py-3 px-3 text-slate-600">Memory leak during image upload</td>
                          <td className="py-3 px-3"><Badge variant="denim">Data Entry Loss</Badge></td>
                        </tr>
                        <tr className="border-b border-slate-100 bg-teal-50">
                          <td className="py-3 px-3 font-medium text-slate-900">Privacy Maze</td>
                          <td className="py-3 px-3"><Badge variant="teal">Data privacy</Badge></td>
                          <td className="py-3 px-3">Malaffi, Sahatna</td>
                          <td className="py-3 px-3 text-slate-600">Complex permission hierarchy</td>
                          <td className="py-3 px-3"><Badge variant="info">Information Silo</Badge></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Verbatim User Quotes */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Verbatim User Quotes</CardTitle>
                  <CardDescription>Forensic selection of evidential value (10 quotes)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-3 pr-4">
                      {userQuotes.map((quote, idx) => (
                        <div key={idx} className={`rounded-lg p-4 border-l-4 ${
                          quote.severity === 'critical' ? 'border-red-500 bg-red-50/50' :
                          quote.severity === 'high' ? 'border-amber-500 bg-amber-50/50' :
                          'border-slate-300 bg-slate-50/50'
                        }`}>
                          <div className="flex items-start justify-between mb-2">
                            <Badge variant={quote.app as any} className="text-xs">{quote.app}</Badge>
                            <span className="text-xs text-slate-500">{quote.category}</span>
                          </div>
                          <p className="text-sm text-slate-700 italic">"{quote.text}"</p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Strategic Recommendations */}
              <Card className="glass-card bg-gradient-to-br from-emerald-50/50 to-white border-emerald-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-emerald text-white">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle>Strategic Recommendations</CardTitle>
                      <CardDescription>4 priority actions to resolve crisis</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {recommendations.map((rec, idx) => (
                      <div key={idx} className="rounded-lg bg-white p-4 border border-slate-200">
                        <div className="flex items-start gap-3">
                          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-${rec.color} text-white font-bold text-sm`}>
                            {idx + 1}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">{rec.title}</div>
                            <p className="text-sm text-slate-600 mt-1">{rec.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Daman Games Data Contamination Alert */}
              <Alert variant="warning">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Data Contamination Anomaly Detected</AlertTitle>
                <AlertDescription>
                  <strong>"Daman Games" Distortion:</strong> Analysis detected 1-star reviews referencing "Daman" that are unrelated to health insurance (gambling apps).
                  Exclusion protocol applied: removed reviews containing "aviator", "colour prediction", "withdrawal", "UID".
                  <br /><br />
                  <strong>Legitimate Daman Health complaints</strong> focus on premium renewals and top-up plans where payment is taken but policy remains "Expired."
                </AlertDescription>
              </Alert>

              {/* Insurance Friction Scan - File 08 */}
              <Card className="glass-card bg-gradient-to-br from-orange-50/50 to-white border-orange-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-orange text-white">
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle>Insurance Friction Scan: Locals vs. Expats</CardTitle>
                      <CardDescription>Systemic barriers, adjudication protocols, and socio-economic stratification (2024-2025)</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* The Fine Regime - AED 300/Day */}
                    <div className="rounded-lg bg-red-50 border-2 border-red-200 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="h-5 w-5 text-red-600" />
                        <div className="font-bold text-red-900">The Fine Regime: AED 300/Day</div>
                      </div>
                      <p className="text-sm text-red-800 mb-2">
                        Abu Dhabi enforces AED 300 per day per person for lapsed coverage. Single month = ~AED 9,000 fine.
                      </p>
                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="rounded bg-white p-3 border border-red-200">
                          <div className="font-semibold text-slate-900 text-sm mb-1">Zombie Fine Phenomenon</div>
                          <p className="text-xs text-slate-600">Fines accrue in background after expat leaves country. AED 16,500 case documented.</p>
                        </div>
                        <div className="rounded bg-white p-3 border border-red-200">
                          <div className="font-semibold text-slate-900 text-sm mb-1">Grace Period Trap</div>
                          <p className="text-xs text-slate-600">Visa has 30-day grace; insurance often ends immediately. Coverage gap = retrospective fines.</p>
                        </div>
                      </div>
                    </div>

                    {/* Socio-Economic Stratification Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b-2 border-slate-200">
                            <th className="text-left py-2 px-3 font-semibold text-slate-900">Feature</th>
                            <th className="text-left py-2 px-3 font-semibold text-purple-900">Locals (Thiqa)</th>
                            <th className="text-left py-2 px-3 font-semibold text-orange-900">Expats (Basic Plan)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-100 bg-purple-50">
                            <td className="py-2 px-3 font-medium text-slate-900">Dominant Sentiment</td>
                            <td className="py-2 px-3">Indignation & Entitlement</td>
                            <td className="py-2 px-3">Panic & Existential Dread</td>
                          </tr>
                          <tr className="border-b border-slate-100">
                            <td className="py-2 px-3 font-medium text-slate-900">Primary Grievance</td>
                            <td className="py-2 px-3 text-xs">Loss of access to elite hospitals (Cleveland Clinic) without referrals</td>
                            <td className="py-2 px-3 text-xs">Rejected emergency claims, crushing fines, fear of deportation</td>
                          </tr>
                          <tr className="border-b border-slate-100">
                            <td className="py-2 px-3 font-medium text-slate-900">Key Triggers</td>
                            <td className="py-2 px-3 text-xs">Category 3 tiering, paperwork for referrals, telemedicine restrictions</td>
                            <td className="py-2 px-3 text-xs">"Pre-existing" denials, network lockouts, 50% reimbursement penalty</td>
                          </tr>
                          <tr className="bg-orange-50">
                            <td className="py-2 px-3 font-medium text-slate-900">Digital Behavior</td>
                            <td className="py-2 px-3 text-xs">Navigating the system to restore access. Tone: Demanding</td>
                            <td className="py-2 px-3 text-xs">Surviving the system. Tone: Desperate ("Will I go to jail?")</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Verbatim Case Studies */}
                    <div className="space-y-3">
                      <div className="font-semibold text-slate-900 text-sm">Verbatim Case Studies (Forensic Evidence)</div>
                      {insuranceCaseStudies.map((study, idx) => (
                        <div key={idx} className={`rounded-lg p-3 border-l-4 ${study.severity === 'critical' ? 'border-red-500 bg-red-50/50' : 'border-amber-500 bg-amber-50/50'}`}>
                          <div className="flex items-start justify-between mb-2">
                            <Badge variant={study.source as any} className="text-xs">{study.source}</Badge>
                            <Badge variant={study.severity === 'critical' ? 'destructive' : 'warning'} className="text-xs">{study.severity}</Badge>
                          </div>
                          <div className="font-semibold text-slate-900 text-sm mb-1">{study.title}</div>
                          <p className="text-xs text-slate-700 italic mb-2">"{study.quote}"</p>
                          <div className="text-xs text-slate-600"><strong>Analysis:</strong> {study.analysis}</div>
                        </div>
                      ))}
                    </div>

                    {/* Sanadak Ombudsman */}
                    <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-4 w-4 text-emerald-600" />
                        <div className="font-bold text-emerald-900">Sanadak Ombudsman (2024)</div>
                        <Badge variant="success" className="ml-auto text-xs">New Dispute Resolution</Badge>
                      </div>
                      <p className="text-xs text-emerald-800">
                        First independent Ombudsman for financial/insurance disputes. 30-day insurer escalation required.
                        Decisions are final and enforceable, bypassing Court of First Instance.
                      </p>
                      <div className="mt-2 text-xs text-amber-800">
                        <strong>Effectiveness Gap:</strong> Struggling with volume/complexity. Kidney stone case (AED 15,000) faced silence - medical urgency outpaced resolution speed.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Threat Library Tab */}
        <TabsContent value="library" className="space-y-6">
          <GlassPanel title="Crisis Scenario Library" badge="50+ Scenarios">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search threat library..."
                className="flex h-10 w-full rounded-xl border border-slate-200 bg-white/50 px-3 py-2 text-sm ring-offset-background placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              />
            </div>
            <ScrollArea className="h-96">
              <div className="grid gap-3 pr-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { scenario: 'Marburg Virus Importation', trigger: 'Africa outbreak + Travel', response: 'Immediate', impact: 'Extreme', severity: 'extreme', verified: true },
                  { scenario: 'Post-Flood Dengue Surge', trigger: 'Rain + 4-8 weeks', response: '&lt;24 hours', impact: 'High', severity: 'high', verified: true },
                  { scenario: 'Phantom Workforce Fraud', trigger: 'Viral job posts', response: '&lt;4 hours', impact: 'Medium', severity: 'medium', verified: true },
                  { scenario: 'Heat Stroke Cluster', trigger: 'Temp &gt;45°C + Humidity', response: 'Real-time', impact: 'High', severity: 'high', verified: true },
                  { scenario: 'Genomic Data Breach', trigger: 'Ransomware on M42', response: 'Immediate', impact: 'Extreme', severity: 'extreme', verified: false },
                  { scenario: 'Vaccine Misinformation', trigger: 'Viral TikTok content', response: '&lt;4 hours', impact: 'High', severity: 'high', verified: false },
                  { scenario: 'SEHA App Blackout', trigger: 'Cloud failure', response: 'Real-time', impact: 'High', severity: 'high', verified: false },
                  { scenario: 'Food Poisoning Outbreak', trigger: 'ADAFSA report', response: '&lt;2 hours', impact: 'High', severity: 'high', verified: false },
                  { scenario: 'Influencer Malpractice', trigger: 'Viral Reddit post', response: '&lt;6 hours', impact: 'High', severity: 'high', verified: false },
                  { scenario: 'Mental Health Crisis', trigger: 'Sahatna data peak', response: '&lt;48 hours', impact: 'Extreme', severity: 'extreme', verified: false },
                ].map((threat, i) => (
                  <Card key={i} className="glass-panel hover:shadow-glass transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant={threat.severity === 'extreme' ? 'destructive' : threat.severity === 'high' ? 'warning' : 'info'}>
                          {threat.severity}
                        </Badge>
                        {threat.verified && (
                          <Badge variant="success" className="text-xs">Verified</Badge>
                        )}
                      </div>
                      <h4 className="font-semibold text-slate-900 text-sm mb-2">{threat.scenario}</h4>
                      <p className="text-xs text-slate-500 mb-3">{threat.trigger}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">Response: &lt;{threat.response}</span>
                        <span className="text-slate-500">Impact: {threat.impact}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// ============================================================================
// DATA: App Review Forensic Analysis (File 07)
// ============================================================================

const userQuotes = [
  {
    app: 'SEHA',
    category: 'Ghost Transaction',
    severity: 'critical',
    text: "Booked DPI test on seha app. Amount was charged on the credit card but app still showing to pay again. Went to seha screening center and paid again. They told me to call customer care and amount will be reversed in 24 hrs. Again i called customer service i was being told to contact bank. Now the bank is saying if the merchant doesn't claim then the amount will be reversed in 10 days. Very disappointing experience."
  },
  {
    app: 'SEHA',
    category: 'Login Loop',
    severity: 'critical',
    text: 'Terrible app, when you try to log in with your Uae Pass it gets stuck. Tried to make an appointment and I wasn\'t able to log in. For guest login you can\'t do anything and for log in area gives error.'
  },
  {
    app: 'Daman',
    category: 'Upload Crash',
    severity: 'high',
    text: 'The app is slow, spinning wheel, when you try to find your recently submitted claims it does not provide the correct information, when you want to attach photos, it reverses the order of photos normally seen through the camera app. Bad use experience all round.'
  },
  {
    app: 'Daman',
    category: 'Transparency Void',
    severity: 'high',
    text: 'There is lack of transparency, it\'s not easy to view claims and statuses. No sharing of the statuses, even I can submit for my wife for example, but I can\'t see the status. The company is also one of the worst insurances I have dealt with.'
  },
  {
    app: 'Daman',
    category: 'Thiqa Customer Service',
    severity: 'critical',
    text: 'Thiqa has the worst customer service ever. Visited the branch and booked two virtual sessions, but no one joined or tried to [contact me].'
  },
  {
    app: 'Sahatna',
    category: 'Useless Service',
    severity: 'high',
    text: 'Useless application and service... deducting money and confirming your order than nothing received, after checking they will say sorry the product is out of stock.'
  },
  {
    app: 'Daman',
    category: 'Reimbursement Delay',
    severity: 'critical',
    text: 'Worst experience I ever had, weak customer service and no problem solving. Keep you waiting for a reimbursement for months.'
  },
  {
    app: 'Daman',
    category: 'Login Friction',
    severity: 'medium',
    text: "It's a long process to log in but then it's a good tool to find information."
  },
  {
    app: 'Daman',
    category: 'Network/Rejection',
    severity: 'high',
    text: 'Claims outside of the network are problematic. The company is also one of the worst insurances I have dealt with.'
  },
  {
    app: 'Malaffi',
    category: 'Data Privacy Confusion',
    severity: 'high',
    text: 'When I tried to re-register again, the app says that the provided Malafi mobile number does not matter, no clue as to what that means. Please provide a solution to this issue ASAP.'
  }
]

const recommendations = [
  {
    title: 'Authentication Redundancy',
    description: 'Implement temporary fallback authentication (OTP via mobile) to bypass UAE Pass "Login Loop" during API instability.',
    color: 'denim'
  },
  {
    title: 'Transactional Integrity Protocol',
    description: 'Re-engineer payment flow so funds are only captured AFTER appointment slot is confirmed in HIS. Auto-void failed transactions immediately.',
    color: 'rose'
  },
  {
    title: 'Adjudication Visibility',
    description: 'Redesign Daman claims interface to provide granular plain-language explanations for rejections and direct "Appeal" function within app.',
    color: 'purple'
  },
  {
    title: 'Migration Communication',
    description: 'Launch targeted in-app campaign within Sahatna to guide former Malaffi users on how to access and manage family records.',
    color: 'emerald'
  }
]

const insuranceCaseStudies = [
  {
    title: 'The Amnesty Fine Trap',
    source: 'Reddit r/abudhabi',
    severity: 'critical',
    quote: 'I am previously terminated by my company during Covid and they imposed Abscon case against me, during AMNESTY in Sept 2024, I avail the same and exit the Country A to A to Oman, now i have new employer with Private family, the thing is when i get the COC from Daman I found out that I have 4.5 years of insurance fines which cost amounting to AED 16,500.',
    analysis: 'Zombie Fine phenomenon: Fines accrued despite legal exit via federal amnesty. DOH/Tasheel/Immigration bureaucratic loop created impossible situation requiring old sponsor\'s private documents to transfer fines.'
  },
  {
    title: 'The Heart Attack "Pre-existing" Rejection',
    source: 'Reddit r/dubai',
    severity: 'critical',
    quote: 'My mother came here on a visit visa and had a heart attack. I had orient insurance but they rejected the claim saying it was a precondition. Her heart attack was severe and had to go through an urgent angioplasty. She\'s at rashid hospital and bill till now is 55,000. What are my options? I really don\'t have this much money.',
    analysis: 'Pre-existing Shield applied to acute emergency. Angioplasty categorized as treatment for pre-existing coronary artery disease rather than life-saving intervention. Forces public sector to absorb cost while family inherits debt.'
  },
  {
    title: 'The Domiciliary Emergency Denial',
    source: 'Reddit r/dubai',
    severity: 'high',
    quote: 'About a month ago I had the worst food poisoning... I was incapacitated... began seizing up and being unable to control my breathing... she called a home doctor service... The doctor came and said I needed treatment immediately and assured me it would be covered by my insurance... I submitted to insurance and they\'ve denied it several times due to it being domiciliary care which is excluded by health authorities.',
    analysis: 'Provider gave false financial assurances to secure call-out fee. Clinical emergency (seizure, labored breathing) denied based on location (home vs hospital) rather than medical necessity.'
  }
]
