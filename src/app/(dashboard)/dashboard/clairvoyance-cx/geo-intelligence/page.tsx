'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  BarChart,
  PieChart,
  Heatmap,
  LineChart,
  AreaChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  ArrowUpRight,
  Baby,
  Building2,
  Calendar,
  ChevronRight,
  ChevronDown,
  Clock,
  Flame,
  Globe,
  Hospital,
  Map,
  MapPin,
  Minus,
  Navigation,
  Plus,
  Radar,
  Search,
  Shield,
  Stethoscope,
  Users,
  Video,
  Zap,
} from 'lucide-react'
import { clairvoyanceData } from '@/lib/data-loader'

export default function GeoIntelligencePage() {
  // Extract real data from data loader
  const { heatmap, facilities, geoFences } = clairvoyanceData.geoIntelligence
  // Chart data arrays
  const regionDistributionData = [
    { name: 'Abu Dhabi City', facilities: 45, alerts: 8 },
    { name: 'Al Ain', facilities: 22, alerts: 3 },
    { name: 'Dubai', facilities: 38, alerts: 5 },
    { name: 'Northern Emirates', facilities: 18, alerts: 2 },
  ]

  const facilityTypeData = [
    { name: 'Hospitals', value: 65, color: CHART_COLORS.rose },
    { name: 'Clinics', value: 125, color: CHART_COLORS.denim },
    { name: 'Pharmacies', value: 380, color: CHART_COLORS.emerald },
    { name: 'Diagnostic Centers', value: 85, color: CHART_COLORS.fuchsia },
  ]

  // SEHA Facilities bed capacity
  const sehaBedCapacityData = [
    { name: 'SSMC', beds: 741, specialty: 'Trauma & Burn' },
    { name: 'SKMC', beds: 586, specialty: 'Pediatric & Cardiac' },
    { name: 'STMC', beds: 715, specialty: 'Stroke & Trauma' },
    { name: 'Tawam', beds: 468, specialty: 'Oncology' },
    { name: 'Corniche', beds: 200, specialty: 'Maternity' },
    { name: 'Al Rahba', beds: 163, specialty: 'Infectious Disease' },
  ]

  // SEHA critical care capacity
  const sehaCriticalCareData = [
    { name: 'SSMC', icu: 120, nicu: 45, picu: 30 },
    { name: 'SKMC', icu: 95, nicu: 60, picu: 25 },
    { name: 'STMC', icu: 85, nicu: 40, picu: 20 },
    { name: 'Tawam', icu: 75, nicu: 20, picu: 15 },
    { name: 'Corniche', icu: 35, nicu: 64, picu: 10 },
    { name: 'Al Rahba', icu: 40, nicu: 12, picu: 8 },
  ]

  // Private sector capacity comparison
  const privateSectorData = [
    { name: 'Cleveland Clinic', beds: 364, transplant: 'Multi-Organ', cardiac: 24 },
    { name: 'Burjeel Medical City', beds: 400, transplant: 'N/A', cardiac: 18 },
    { name: 'NMC Royal', beds: 500, transplant: 'N/A', cardiac: 20 },
    { name: 'Mediclinic Airport Road', beds: 250, transplant: 'N/A', cardiac: 12 },
    { name: 'Danat Al Emarat', beds: 225, transplant: 'N/A', cardiac: 8 },
  ]

  // Regional distribution for screening centers
  const screeningCenterDistribution = [
    { name: 'Abu Dhabi Region', centers: 4, coverage: 'Urban Core + Industrial' },
    { name: 'Eastern Region (Al Ain)', centers: 2, coverage: 'Agricultural + Military' },
    { name: 'Western Region (Al Dhafra)', centers: 5, coverage: 'Border + Coastal' },
  ]

  // Alert trend by region
  const alertTrendData = [
    { month: 'Aug', abuDhabi: 12, alAin: 5, western: 3 },
    { month: 'Sep', abuDhabi: 15, alAin: 7, western: 4 },
    { month: 'Oct', abuDhabi: 18, alAin: 6, western: 5 },
    { month: 'Nov', abuDhabi: 14, alAin: 8, western: 3 },
    { month: 'Dec', abuDhabi: 16, alAin: 5, western: 4 },
    { month: 'Jan', abuDhabi: 11, alAin: 4, western: 2 },
  ]

  // Facility performance metrics
  const facilityPerformanceData = [
    { name: 'Occupancy Rate', ssmc: 87, skmc: 92, tawam: 78, stmc: 82, ccad: 85 },
    { name: 'Patient Satisfaction', ssmc: 92, skmc: 88, tawam: 90, stmc: 85, ccad: 94 },
    { name: 'Response Time (min)', ssmc: 8, skmc: 12, tawam: 15, stmc: 10, ccad: 7 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="purple" className="mb-2">CLAIRVOYANCE-CX</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-purple">Geo-Intelligence</h1>
          <p className="mt-2 text-slate-600">
            Asset Sentinel – Strategic Infrastructure Mapping with 100+ geo-fenced healthcare assets
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Search className="h-4 w-4" />
            Search Location
          </Button>
          <Button className="bg-gradient-purple hover:opacity-90 text-white gap-2">
            <MapPin className="h-4 w-4" />
            Add Geo-Fence
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Monitored Assets"
          value="127"
          previousValue={118}
          icon={<Building2 className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Active Geo-Fences"
          value="98"
          previousValue={89}
          icon={<Map className="h-6 w-6" />}
          gradient="purple"
        />
        <MetricCard
          title="Total Bed Capacity"
          value="5,500+"
          icon={<Hospital className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Screening Centers"
          value="11"
          icon={<Shield className="h-6 w-6" />}
          gradient="teal"
        />
      </div>

      <Tabs defaultValue="seha" className="space-y-6">
        <TabsList className="glass-panel">
          <TabsTrigger value="seha">SEHA Facilities</TabsTrigger>
          <TabsTrigger value="private">Private Flagships</TabsTrigger>
          <TabsTrigger value="screening">DPSC Network</TabsTrigger>
          <TabsTrigger value="heatmap">Live Heatmap</TabsTrigger>
        </TabsList>

        {/* SEHA Facilities Tab - STRATEGIC GOVERNMENT ASSETS from File 04 */}
        <TabsContent value="seha" className="space-y-6">
          {/* SEHA Summary Dashboard */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">SEHA Bed Capacity Distribution</CardTitle>
                <CardDescription>Total bed capacity by facility</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={sehaBedCapacityData}
                  xAxisKey="name"
                  bars={[
                    { dataKey: 'beds', name: 'Total Beds', color: CHART_COLORS.purple },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Critical Care Capacity</CardTitle>
                <CardDescription>ICU, NICU, and PICU bed distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={sehaCriticalCareData}
                  xAxisKey="name"
                  bars={[
                    { dataKey: 'icu', name: 'ICU', color: CHART_COLORS.rose },
                    { dataKey: 'nicu', name: 'NICU', color: CHART_COLORS.pink },
                    { dataKey: 'picu', name: 'PICU', color: CHART_COLORS.denim },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Asset Sentinel – SEHA Sovereign Medical Shield" description="Strategic government healthcare infrastructure forming the biological defense shield" badge="6 Assets">
            <div className="space-y-6">

              {/* Sheikh Shakhbout Medical City */}
              <Card className="glass-card border-purple-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-purple text-white">
                        <Hospital className="h-7 w-7" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Sheikh Shakhbout Medical City (SSMC)</CardTitle>
                        <CardDescription>Primary Mainland Trauma & Burn Hub</CardDescription>
                      </div>
                    </div>
                    <Badge variant="purple" className="text-sm">Mayo Clinic JV</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-purple-50/50 p-4">
                      <div className="text-2xl font-extrabold text-purple-600">741</div>
                      <div className="text-sm text-slate-600 mt-1">Bed Capacity</div>
                    </div>
                    <div className="rounded-lg bg-slate-50 p-4">
                      <div className="text-sm font-semibold text-slate-900 mb-1">Official District</div>
                      <p className="text-sm text-slate-600">Al Mafraq</p>
                    </div>
                    <div className="rounded-lg bg-slate-50 p-4">
                      <div className="text-sm font-semibold text-slate-900 mb-1">Strategic Zone</div>
                      <p className="text-sm text-slate-600">Mainland / Highway Junction Nexus</p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-purple-100/50 p-4 border border-purple-200">
                    <div className="text-sm font-semibold text-slate-900 mb-2">Strategic Capabilities</div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="flex items-start gap-2">
                        <Flame className="h-4 w-4 text-red-500 mt-0.5" />
                        <div className="text-sm">
                          <div className="font-semibold text-slate-900">Advanced Burn Treatment Center</div>
                          <div className="text-xs text-slate-500">Legacy of Mafraq Hospital – National referral center</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-purple-500 mt-0.5" />
                        <div className="text-sm">
                          <div className="font-semibold text-slate-900">Highway Trauma Nexus</div>
                          <div className="text-xs text-slate-500">E11 × E75 intersection – ICAD/Mussafah industrial access</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Stethoscope className="h-4 w-4 text-blue-500 mt-0.5" />
                        <div className="text-sm">
                          <div className="font-semibold text-slate-900">Surgical Robotics</div>
                          <div className="text-xs text-slate-500">High-precision oncology & transplant</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Shield className="h-4 w-4 text-emerald-500 mt-0.5" />
                        <div className="text-sm">
                          <div className="font-semibold text-slate-900">4-Tower Structure</div>
                          <div className="text-xs text-slate-500">Medical, Surgical, MCH, Critical Care – cohort isolation capability</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sheikh Khalifa Medical City */}
              <Card className="glass-card border-blue-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-blue text-white">
                        <Hospital className="h-7 w-7" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Sheikh Khalifa Medical City (SKMC)</CardTitle>
                        <CardDescription>Island Flagship – Pediatric & Cardiac Center of Gravity</CardDescription>
                      </div>
                    </div>
                    <Badge variant="denim" className="text-sm">Urban Core</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-blue-50/50 p-4">
                      <div className="text-2xl font-extrabold text-blue-600">586</div>
                      <div className="text-sm text-slate-600 mt-1">Acute Beds + 125 BSP</div>
                    </div>
                    <div className="rounded-lg bg-slate-50 p-4">
                      <div className="text-sm font-semibold text-slate-900 mb-1">Official District</div>
                      <p className="text-sm text-slate-600">Al Tibbiya (Medical District) / Al Manhal</p>
                    </div>
                    <div className="rounded-lg bg-slate-50 p-4">
                      <div className="text-sm font-semibold text-slate-900 mb-1">Strategic Zone</div>
                      <p className="text-sm text-slate-600">Abu Dhabi Island / Central Business District</p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-blue-100/50 p-4 border border-blue-200">
                    <div className="text-sm font-semibold text-slate-900 mb-2">Strategic Capabilities</div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="flex items-start gap-2">
                        <Baby className="h-4 w-4 text-pink-500 mt-0.5" />
                        <div className="text-sm">
                          <div className="font-semibold text-slate-900">Pediatric Center of Excellence</div>
                          <div className="text-xs text-slate-500">Largest Heart Program for Children in UAE</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Stethoscope className="h-4 w-4 text-red-500 mt-0.5" />
                        <div className="text-sm">
                          <div className="font-semibold text-slate-900">Pediatric Cardiac Surgery</div>
                          <div className="text-xs text-slate-500">Only program in Abu Dhabi</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Building2 className="h-4 w-4 text-purple-500 mt-0.5" />
                        <div className="text-sm">
                          <div className="font-semibold text-slate-900">Kidney Transplant Center</div>
                          <div className="text-xs text-slate-500">UAE's first comprehensive program</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Hospital className="h-4 w-4 text-purple-500 mt-0.5" />
                        <div className="text-sm">
                          <div className="font-semibold text-slate-900">Behavioral Sciences Pavilion</div>
                          <div className="text-xs text-slate-500">Primary government psychiatric hospital</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tawam & STMC - Eastern Region */}
              <div className="grid gap-4 lg:grid-cols-2">
                {/* Tawam Hospital */}
                <Card className="glass-card border-emerald-200">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-emerald text-white">
                          <Hospital className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Tawam Hospital</CardTitle>
                          <CardDescription>National Oncology Center</CardDescription>
                        </div>
                      </div>
                      <Badge variant="emerald" className="text-sm">Eastern Region</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Bed Capacity</span>
                      <Badge variant="emerald" className="text-sm">468-500+</Badge>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-slate-900">Official District:</span> <span className="text-slate-600"> Al Maqam (Al Ain)</span>
                    </div>
                    <div className="rounded-lg bg-emerald-50/50 p-3">
                      <div className="text-xs font-semibold text-slate-900 mb-1">Strategic Role</div>
                      <p className="text-sm text-slate-600">Eastern Border Anchor – National Oncology Center – Adjacent to UAEU College of Medicine</p>
                    </div>
                  </CardContent>
                </Card>

                {/* STMC */}
                <Card className="glass-card border-teal-200">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-teal text-white">
                          <Hospital className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Sheikh Tahnoon Medical City (STMC)</CardTitle>
                          <CardDescription>New Eastern Region Acute Care Flagship</CardDescription>
                        </div>
                      </div>
                      <Badge variant="teal" className="text-sm">715 Beds</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm">
                      <span className="font-semibold text-slate-900">Replaces:</span> <span className="text-slate-600">Old Al Ain Hospital (Al Jimi)</span>
                    </div>
                    <div className="rounded-lg bg-teal-50/50 p-3">
                      <div className="text-xs font-semibold text-slate-900 mb-1">Centers of Excellence</div>
                      <ul className="text-sm text-slate-600 space-y-1 mt-2">
                        <li>• First dedicated Stroke Unit in UAE</li>
                        <li>• Trauma & Orthopedics Center</li>
                        <li>• High-Technology Cardiology</li>
                        <li>• "Healing Oasis" rehabilitation concept</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Corniche Hospital */}
              <Card className="glass-card border-pink-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-pink text-white">
                        <Baby className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Corniche Hospital</CardTitle>
                        <CardDescription>Premier Maternity & Neonatal Critical Care Hub</CardDescription>
                      </div>
                    </div>
                    <Badge variant="rose" className="text-sm">200+ Beds</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="text-sm">
                      <span className="font-semibold text-slate-900">Official District:</span> <span className="text-slate-600"> Al Zahiyah (Tourist Club Area)</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-slate-900">Strategic Zone:</span> <span className="text-slate-600"> Island / Port District</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-pink-50/50 p-3">
                    <div className="text-xs font-semibold text-slate-900 mb-1">Maternal Bio-Asset</div>
                    <p className="text-sm text-slate-600">Largest maternity hospital in country – 64-cot NICU – specialized inventory not interchangeable with adult ICU</p>
                  </div>
                </CardContent>
              </Card>

              {/* Al Rahba Hospital */}
              <Card className="glass-card border-orange-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-orange text-white">
                        <Shield className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Al Rahba Hospital</CardTitle>
                        <CardDescription>Bio-Defense Sentinel – Infectious Disease Hub</CardDescription>
                      </div>
                    </div>
                    <Badge variant="warning" className="text-sm">Northern Corridor</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="text-sm">
                      <span className="font-semibold text-slate-900">Official District:</span> <span className="text-slate-600"> Al Rahba (E11 Dubai Highway)</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-slate-900">Bed Capacity:</span> <Badge variant="orange" className="text-sm">163+ (surge)</Badge>
                    </div>
                  </div>
                  <div className="rounded-lg bg-orange-50/50 p-3">
                    <div className="text-xs font-semibold text-slate-900 mb-1">Strategic Role</div>
                    <p className="text-sm text-slate-600">Designated Infectious Disease Hospital (2021) – Primary quarantine node for biological threats from Dubai – 24/7 Urgent Care</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Private Flagships Tab - PRIVATE SECTOR ASSETS from File 04 */}
        <TabsContent value="private" className="space-y-6">
          {/* Private Sector Summary Dashboard */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Private Sector Bed Capacity</CardTitle>
                <CardDescription>Comparison of private flagship facilities</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={privateSectorData}
                  xAxisKey="name"
                  bars={[
                    { dataKey: 'beds', name: 'Total Beds', color: CHART_COLORS.info },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cardiac Care Capacity</CardTitle>
                <CardDescription>Cardiac beds across private facilities</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={[
                    { name: 'Cleveland Clinic', value: 24, color: CHART_COLORS.info },
                    { name: 'Burjeel Medical City', value: 18, color: CHART_COLORS.fuchsia },
                    { name: 'NMC Royal', value: 20, color: CHART_COLORS.indigo },
                    { name: 'Mediclinic Airport Road', value: 12, color: CHART_COLORS.rose },
                    { name: 'Danat Al Emarat', value: 8, color: CHART_COLORS.purple },
                  ]}
                  donut={true}
                  height={250}
                  showLegend={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Elite Private Sector Assets – Quaternary Care Vanguard" description="High-acuity private facilities integrated into national capacity" badge="5 Assets">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Cleveland Clinic */}
              <Card className="glass-card border-cyan-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-cyan text-white">
                        <Stethoscope className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Cleveland Clinic Abu Dhabi (CCAD)</CardTitle>
                        <CardDescription>National Transplant Center – High-Acuity Cardiovascular</CardDescription>
                      </div>
                    </div>
                    <Badge variant="cyan" className="text-sm">364 Beds</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <span className="font-semibold text-slate-900">Official District:</span> <span className="text-slate-600"> Al Maryah Island (ADGM Square)</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-slate-900">Strategic Zone:</span> <span className="text-slate-600"> Financial Free Zone / Ultra-Luxury Core</span>
                  </div>
                  <div className="rounded-lg bg-cyan-50/50 p-3">
                    <div className="text-xs font-semibold text-slate-900 mb-1">Elite Referral Node</div>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Only multi-organ transplant center in UAE (liver, kidney, lung, heart)</li>
                      <li>• Primary receiving center for acute stroke and complex aortic emergencies</li>
                      <li>• 24/7 thrombectomy and cardiac surgery</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Burjeel Medical City */}
              <Card className="glass-card border-fuchsia-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-fuchsia text-white">
                        <Building2 className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Burjeel Medical City (BMC)</CardTitle>
                        <CardDescription>Private Trauma & Oncology – Helipad Access</CardDescription>
                      </div>
                    </div>
                    <Badge variant="fuchsia" className="text-sm">400+ Beds</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <span className="font-semibold text-slate-900">Official District:</span> <span className="text-slate-600"> Mohammed Bin Zayed City (Zone 28)</span>
                  </div>
                  <div className="rounded-lg bg-fuchsia-50/50 p-3">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-fuchsia-600" />
                      <div className="text-xs font-semibold text-slate-900">Private Sector Mainland Fortress</div>
                    </div>
                    <ul className="text-sm text-slate-600 space-y-1 mt-2">
                      <li>• First private hospital with helipad – rapid air-medical transfer</li>
                      <li>• ESMO-accredited oncology (private alternative to Tawam)</li>
                      <li>• Level III/IV NICU and PICU capabilities</li>
                      <li>• Licensed capacity up to 700 beds</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* NMC Royal Hospital */}
              <Card className="glass-card border-indigo-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-indigo text-white">
                        <Hospital className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">NMC Royal Hospital</CardTitle>
                        <CardDescription>High-Volume Suburban General – Major ICU Capacity</CardDescription>
                      </div>
                    </div>
                    <Badge variant="indigo" className="text-sm">500 Beds</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <span className="font-semibold text-slate-900">Official District:</span> <span className="text-slate-600"> Khalifa City A (16th Street)</span>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="rounded-lg bg-indigo-50/50 p-3">
                      <div className="text-xs text-slate-600">Critical Care Beds</div>
                      <div className="text-lg font-bold text-indigo-600">53</div>
                    </div>
                    <div className="rounded-lg bg-slate-50 p-3">
                      <div className="text-xs text-slate-600">Hybrid OT</div>
                      <div className="text-xs font-semibold text-slate-900">Flex-move imaging system</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">De facto district general hospital for Khalifa City</p>
                </CardContent>
              </Card>

              {/* Mediclinic Airport Road */}
              <Card className="glass-card border-rose-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-rose text-white">
                        <Building2 className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Mediclinic Airport Road</CardTitle>
                        <CardDescription>Central Corridor Emergency & Cancer Center</CardDescription>
                      </div>
                    </div>
                    <Badge variant="rose" className="text-sm">250 Beds</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <span className="font-semibold text-slate-900">Official District:</span> <span className="text-slate-600"> Al Rawdah (Airport Road, opposite Zayed Sports City)</span>
                  </div>
                  <div className="rounded-lg bg-rose-50/50 p-3">
                    <div className="text-xs font-semibold text-slate-900 mb-1">Strategic Position</div>
                    <p className="text-sm text-slate-600">Central corridor spine – Expanded to 250 beds with Cancer Center wing – Primary medical support for major sporting events (UFC, FIFA)</p>
                  </div>
                </CardContent>
              </Card>

              {/* Danat Al Emarat */}
              <Card className="glass-card border-purple-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-purple text-white">
                        <Baby className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Danat Al Emarat</CardTitle>
                        <CardDescription>Private Women & Children Sanctuary – M42 Network</CardDescription>
                      </div>
                    </div>
                    <Badge variant="purple" className="text-sm">225 Beds</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <span className="font-semibold text-slate-900">Official District:</span> <span className="text-slate-600"> Rabdan (Gate City) – Maqta Bridge access</span>
                  </div>
                  <div className="rounded-lg bg-purple-50/50 p-3">
                    <div className="text-xs font-semibold text-slate-900 mb-1">Protected Asset Class</div>
                    <p className="text-sm text-slate-600">Private maternal sanctuary – COEMIG-accredited Minimally Invasive Gynecology – M42 AI-driven diagnostics integration</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Screening Centers Tab - DPSC NETWORK from File 04 */}
        <TabsContent value="screening" className="space-y-6">
          {/* Screening Centers Summary Dashboard */}
          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Regional Distribution</CardTitle>
                <CardDescription>Screening centers by region</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={[
                    { name: 'Abu Dhabi Region', value: 4, color: CHART_COLORS.denim },
                    { name: 'Eastern Region', value: 2, color: CHART_COLORS.emerald },
                    { name: 'Western Region', value: 5, color: CHART_COLORS.orange },
                  ]}
                  donut={true}
                  height={220}
                  showLegend={true}
                />
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Alert Trends by Region</CardTitle>
                <CardDescription>6-month health alert distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={alertTrendData}
                  xAxisKey="month"
                  areas={[
                    { dataKey: 'abuDhabi', name: 'Abu Dhabi', color: CHART_COLORS.denim },
                    { dataKey: 'alAin', name: 'Al Ain', color: CHART_COLORS.emerald },
                    { dataKey: 'western', name: 'Western', color: CHART_COLORS.orange },
                  ]}
                  height={220}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Bio-Surveillance Grid – Disease Prevention & Screening Centers" description="DPSC network managed by Ambulatory Healthcare Services (AHS)" badge="11 Centers">
            <div className="space-y-8">

              {/* Abu Dhabi Region */}
              <Card className="glass-card border-denim-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-denim-500" />
                    <CardTitle className="text-lg">Abu Dhabi Region</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { name: 'DPSC Abu Dhabi (Main)', district: 'Al Tibbiya / Al Manhal', location: 'Hazza Bin Zayed Street (adjacent to SKMC)', role: 'Central Island Screening Hub' },
                      { name: 'DPSC Mussafah (Industrial Shield)', district: 'Mussafah Industrial Area', location: 'Village Mall, 12th Street', role: 'CRITICAL: Industrial Labor Force Screening' },
                      { name: 'DPSC Al Shahama (Northern Gate)', district: 'Al Bahyah / Old Shahama', location: 'Near Abu Dhabi Islamic Bank', role: 'Northern Corridor & Highway Access' },
                      { name: 'DPSC Al Mushrif Mall (Retail Node)', district: 'Al Mushrif', location: 'Inside Al Mushrif Mall', role: 'Retail Health – Extended Hours (7 days)' },
                    ].map((center, i) => (
                      <div key={i} className={`rounded-lg p-4 border-2 ${center.role.includes('CRITICAL') ? 'border-red-300 bg-red-50/50' : 'border-slate-200 bg-slate-50/50'}`}>
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="font-semibold text-slate-900">{center.name}</div>
                            <div className="text-xs text-slate-500 mt-1">{center.district}</div>
                          </div>
                          {center.role.includes('CRITICAL') && (
                            <Badge variant="destructive" className="text-xs">Critical</Badge>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 mb-1">{center.location}</p>
                        <div className="rounded-lg bg-white/60 p-2">
                          <div className="text-xs font-semibold text-slate-900">Strategic Role</div>
                          <p className="text-xs text-slate-600">{center.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Eastern Region */}
              <Card className="glass-card border-emerald-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-emerald-500" />
                    <CardTitle className="text-lg">Eastern Region (Al Ain)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { name: 'DPSC Al Ain (Main)', district: 'Al Jimi / Civic Center', location: 'Near old Al Ain Hospital site', role: 'Al Ain City Central Hub' },
                      { name: 'DPSC Sweihan (Satellite)', district: 'Sweihan', location: 'Desert area', role: 'Agricultural & Military Sector Screening' },
                    ].map((center, i) => (
                      <div key={i} className="rounded-lg p-4 border-2 border-emerald-200 bg-emerald-50/50">
                        <div className="font-semibold text-slate-900">{center.name}</div>
                        <p className="text-xs text-slate-600 mt-1">{center.district}</p>
                        <p className="text-xs text-slate-500 mt-1">{center.location}</p>
                        <div className="text-xs text-slate-600 mt-2">{center.role}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Western Region */}
              <Card className="glass-card border-amber-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-amber-500" />
                    <CardTitle className="text-lg">Western Region (Al Dhafra)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      { name: 'DPSC Madinat Zayed', district: 'Madinat Zayed', location: 'Near Madinat Zayed Hospital', role: 'Regional Capital Hub' },
                      { name: 'DPSC Ghayathi', district: 'Ghayathi', location: 'Western interior', role: 'Interior/Bedouin Community Node' },
                      { name: 'DPSC Al Sila', district: 'Al Sila', location: 'Close to UAE-Saudi border (Ghuwaifat)', role: 'Border Health Control Point' },
                      { name: 'DPSC Delma Island', district: 'Delma Island', location: 'Offshore island', role: 'Island Population Bio-Security' },
                      { name: 'DPSC Al Marfa', district: 'Al Marfa (Mirfa)', location: 'Coastal city', role: 'Coastal/Port Community Screening' },
                    ].map((center, i) => (
                      <div key={i} className="rounded-lg p-3 border border-amber-200 bg-amber-50/50">
                        <div className="font-semibold text-slate-900 text-sm">{center.name}</div>
                        <p className="text-xs text-slate-500 mt-1">{center.role}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Live Heatmap Tab */}
        <TabsContent value="heatmap" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Regional Asset Distribution</CardTitle>
                <CardDescription>Facilities and alert density by region</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={regionDistributionData}
                  xAxisKey="name"
                  bars={[
                    { dataKey: 'facilities', name: 'Facilities', color: CHART_COLORS.denim },
                  ]}
                  height={220}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Facility Type Breakdown</CardTitle>
                <CardDescription>Distribution by facility type</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={facilityTypeData}
                  donut={true}
                  height={220}
                  showLegend={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="3D Satellite Health Map" description="Real-time visualization of health events across UAE with geo-fenced assets" badge="Live">
            <div className="space-y-6">
              {/* Interactive Map Placeholder */}
              <Card className="glass-card overflow-hidden">
                <div className="relative h-96 bg-gradient-to-br from-slate-100 to-slate-200">
                  {/* Map Background Grid */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid h-full w-full grid-cols-12 grid-rows-8">
                      {Array.from({ length: 96 }).map((_, i) => (
                        <div key={i} className="border border-slate-400" />
                      ))}
                    </div>
                  </div>

                  {/* Verified Hotspots from File 04 */}
                  {verifiedHotspots.map((spot, index) => (
                    <div
                      key={index}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-110 ${
                        spot.severity === 'critical' ? 'animate-pulse' : ''
                      }`}
                      style={{ left: spot.x, top: spot.y }}
                    >
                      <div className={`relative flex items-center justify-center`}>
                        {/* Ripple Effect */}
                        {spot.severity === 'critical' && (
                          <div className="absolute inset-0 rounded-full bg-red-500/30 animate-ping" />
                        )}
                        {/* Center Dot */}
                        <div
                          className={`relative h-6 w-6 rounded-full border-2 bg-white shadow-lg ${
                            spot.severity === 'critical' ? 'border-red-500' :
                            spot.severity === 'high' ? 'border-amber-500' :
                            spot.severity === 'medium' ? 'border-blue-500' :
                            'border-emerald-500'
                          }`}
                        />
                        {/* Label */}
                        <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap">
                          <Badge variant={spot.severity === 'critical' ? 'destructive' : spot.severity === 'high' ? 'warning' : 'denim'} className="text-xs">
                            {spot.name}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Map Controls */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <Button size="icon" variant="outline" className="bg-white/90 backdrop-blur">
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="bg-white/90 backdrop-blur">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="bg-white/90 backdrop-blur">
                      <Navigation className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="bg-white/90 backdrop-blur">
                      <Globe className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg p-3 shadow-lg">
                    <div className="text-xs font-semibold text-slate-700 mb-2">Severity Legend</div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="h-3 w-3 rounded-full bg-red-500" />
                        <span>Critical</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="h-3 w-3 rounded-full bg-amber-500" />
                        <span>High</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="h-3 w-3 rounded-full bg-blue-500" />
                        <span>Medium</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="h-3 w-3 rounded-full bg-emerald-500" />
                        <span>Normal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Data from File 04 - Verified healthcare asset mapping
const verifiedHotspots = [
  { name: 'SSMC', x: '30%', y: '35%', severity: 'critical', beds: 741, district: 'Al Mafraq' },
  { name: 'SKMC', x: '45%', y: '40%', severity: 'high', beds: 586, district: 'Al Tibbiya' },
  { name: 'CCAD', x: '40%', y: '35%', severity: 'high', beds: 364, district: 'Al Maryah Island' },
  { name: 'Tawam', x: '70%', y: '30%', severity: 'medium', beds: 468, district: 'Al Maqam (Al Ain)' },
  { name: 'STMC', x: '72%', y: '32%', severity: 'medium', beds: 715, district: 'Al Maqam (Al Ain)' },
  { name: 'BMC', x: '35%', y: '50%', severity: 'medium', beds: 400, district: 'MBZ City' },
  { name: 'NMC Royal', x: '38%', y: '55%', severity: 'normal', beds: 500, district: 'Khalifa City A' },
  { name: 'Corniche', x: '48%', y: '38%', severity: 'normal', beds: 200, district: 'Al Zahiyah' },
]
