'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { Switch } from '@/components/ui/switch'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  Gauge,
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Cloud,
  Database,
  Edit,
  Eye,
  FileCheck,
  FileText,
  Globe,
  Gavel,
  Lock,
  MoreHorizontal,
  Server,
  Search,
  Settings,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Target,
  TreePine,
  User,
  UserCheck,
  UserPlus,
  UserX,
  Users,
  Zap,
} from 'lucide-react'
import { clairvoyanceData } from '@/lib/data-loader'

export default function SystemGovernancePage() {
  // Extract real data from data loader
  const { compliance, roles, auditLog } = clairvoyanceData.systemGovernance

  const [expandedPillars, setExpandedPillars] = useState<string[]>(['governance', 'resilience'])

  const togglePillar = (pillar: string) => {
    setExpandedPillars(prev =>
      prev.includes(pillar) ? prev.filter(p => p !== pillar) : [...prev, pillar]
    )
  }

  // Compliance trend data
  const complianceTrendData = [
    { month: 'Aug', adhics: 95, federal: 88, dataSovereignty: 100 },
    { month: 'Sep', adhics: 96, federal: 90, dataSovereignty: 100 },
    { month: 'Oct', adhics: 97, federal: 91, dataSovereignty: 100 },
    { month: 'Nov', adhics: 98, federal: 93, dataSovereignty: 100 },
    { month: 'Dec', adhics: 98, federal: 94, dataSovereignty: 100 },
    { month: 'Jan', adhics: 99, federal: 95, dataSovereignty: 100 },
  ]

  // ADHICS domain compliance
  const adhicsDomainData = [
    { name: 'Governance', score: 98, controls: 45 },
    { name: 'Asset Management', score: 96, controls: 32 },
    { name: 'Access Control', score: 99, controls: 28 },
    { name: 'Cryptography', score: 95, controls: 18 },
    { name: 'Operations Security', score: 97, controls: 35 },
    { name: 'Communications', score: 94, controls: 22 },
  ]

  // Security incident trends
  const securityIncidentData = [
    { month: 'Aug', critical: 2, high: 5, medium: 12, low: 25 },
    { month: 'Sep', critical: 1, high: 4, medium: 10, low: 22 },
    { month: 'Oct', critical: 1, high: 3, medium: 8, low: 20 },
    { month: 'Nov', critical: 0, high: 2, medium: 6, low: 18 },
    { month: 'Dec', critical: 0, high: 1, medium: 5, low: 15 },
    { month: 'Jan', critical: 0, high: 1, medium: 4, low: 12 },
  ]

  // Audit completion rates
  const auditCompletionData = [
    { audit: 'ADHICS V2.0', completed: 156, pending: 8, overdue: 2 },
    { audit: 'Federal Law', completed: 142, pending: 15, overdue: 3 },
    { audit: 'Data Protection', completed: 158, pending: 6, overdue: 1 },
    { audit: 'Cloud Security', completed: 148, pending: 12, overdue: 2 },
  ]

  // Role distribution
  const roleDistributionData = [
    { name: 'Administrators', count: 8, permissions: 145 },
    { name: 'Compliance Officers', count: 15, permissions: 85 },
    { name: 'Analysts', count: 18, permissions: 52 },
    { name: 'Viewers', count: 6, permissions: 12 },
  ]

  // Compliance radar
  const complianceRadarData = [
    { domain: 'Governance', doh: 98, seha: 92, private: 85 },
    { domain: 'Security', doh: 97, seha: 88, private: 82 },
    { domain: 'Privacy', doh: 99, seha: 90, private: 78 },
    { domain: 'Operations', doh: 96, seha: 85, private: 80 },
    { domain: 'Risk Mgmt', doh: 95, seha: 87, private: 83 },
  ]

  // Risk assessment trends
  const riskAssessmentData = [
    { category: 'Data Privacy', risk: 15, mitigation: 88 },
    { category: 'Access Control', risk: 8, mitigation: 95 },
    { category: 'Incident Response', risk: 12, mitigation: 92 },
    { category: 'Business Continuity', risk: 18, mitigation: 85 },
    { category: 'Vendor Management', risk: 22, mitigation: 78 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="purple" className="mb-2">CLAIRVOYANCE-CX</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-purple">System Governance & Compliance</h1>
          <p className="mt-2 text-slate-600">
            ADHICS V2.0, Federal Data Protection, Sovereign Cloud Infrastructure & Operational Compliance
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <FileCheck className="h-4 w-4" />
            Run AAMEN Audit
          </Button>
          <Button className="bg-gradient-purple hover:opacity-90 text-white gap-2">
            <Gavel className="h-4 w-4" />
            Compliance Dashboard
          </Button>
        </div>
      </div>

      {/* Key Metrics - Enhanced with Compliance Data */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="ADHICS V2.0 Compliance"
          value="99%"
          previousValue={97.5}
          unit=""
          icon={<Shield className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="AAMEN Certified"
          value="Secure"
          unit=""
          icon={<ShieldCheck className="h-6 w-6" />}
          gradient="teal"
          status="success"
        />
        <MetricCard
          title="Data Sovereignty"
          value="100%"
          unit="UAE"
          icon={<Globe className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="Active Users"
          value="47"
          previousValue={42}
          icon={<Users className="h-6 w-6" />}
          gradient="purple"
        />
      </div>

      <Tabs defaultValue="adhics" className="space-y-6">
        <TabsList className="glass-panel flex-wrap">
          <TabsTrigger value="adhics">ADHICS V2.0</TabsTrigger>
          <TabsTrigger value="federal">Federal Laws</TabsTrigger>
          <TabsTrigger value="sovereign">Sovereign Cloud</TabsTrigger>
          <TabsTrigger value="enablers">Strategic Enablers</TabsTrigger>
          <TabsTrigger value="compliance">Compliance Guide</TabsTrigger>
          <TabsTrigger value="comparative">Comparative</TabsTrigger>
          <TabsTrigger value="resistance">Policy Resistance</TabsTrigger>
          <TabsTrigger value="opinion">Public Opinion</TabsTrigger>
          <TabsTrigger value="cx">CX Investigation</TabsTrigger>
          <TabsTrigger value="rbac">Role-Based Access</TabsTrigger>
          <TabsTrigger value="audit">Audit Logs</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        {/* ADHICS V2.0 Framework */}
        <TabsContent value="adhics" className="space-y-6">
          {/* ADHICS Compliance Dashboard */}
          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Overall ADHICS Compliance</CardTitle>
                <CardDescription>6-month trend</CardDescription>
              </CardHeader>
              <CardContent>
                <Gauge value={99} max={100} label="Compliance Score" height={220} />
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Compliance Trend</CardTitle>
                <CardDescription>ADHICS, Federal Laws, and Data Sovereignty</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={complianceTrendData}
                  xAxisKey="month"
                  areas={[
                    { dataKey: 'adhics', name: 'ADHICS V2.0', color: CHART_COLORS.indigo },
                    { dataKey: 'federal', name: 'Federal Laws', color: CHART_COLORS.denim },
                    { dataKey: 'dataSovereignty', name: 'Data Sovereignty', color: CHART_COLORS.emerald },
                  ]}
                  height={220}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Domain Compliance Scores</CardTitle>
                <CardDescription>ADHICS domain performance</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={adhicsDomainData}
                  xAxisKey="name"
                  bars={[
                    { dataKey: 'score', name: 'Compliance %', color: CHART_COLORS.indigo },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Security Incident Trends</CardTitle>
                <CardDescription>6-month incident severity breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={securityIncidentData}
                  xAxisKey="month"
                  areas={[
                    { dataKey: 'critical', name: 'Critical', color: CHART_COLORS.rose },
                    { dataKey: 'high', name: 'High', color: CHART_COLORS.orange },
                    { dataKey: 'medium', name: 'Medium', color: CHART_COLORS.gold },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel
            title="Abu Dhabi Healthcare Information and Cyber Security Standard V2.0"
            description="The operational mandate for all healthcare facilities, insurers, and professionals licensed by DoH"
            badge="Active Standard 2025-2026"
          >
            <div className="space-y-6">
              {/* ADHICS Overview */}
              <Card className="glass-card border-indigo-200 bg-gradient-to-br from-indigo-50/50 to-white">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-indigo text-white">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">ADHICS V2.0 Overview</CardTitle>
                      <CardDescription>Operational mandate via AAMEN program for license renewal</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg bg-white/80 p-4 border border-slate-200">
                      <div className="text-sm font-medium text-slate-600">Full Name</div>
                      <div className="mt-1 font-semibold text-slate-900">Abu Dhabi Healthcare Information and Cyber Security Standard</div>
                    </div>
                    <div className="rounded-lg bg-white/80 p-4 border border-slate-200">
                      <div className="text-sm font-medium text-slate-600">Program</div>
                      <div className="mt-1 font-semibold text-slate-900">AAMEN (Audit & Compliance Assurance)</div>
                    </div>
                    <div className="rounded-lg bg-white/80 p-4 border border-slate-200">
                      <div className="text-sm font-medium text-slate-600">Evolution</div>
                      <div className="mt-1 font-semibold text-slate-900">V1.0 → V2.0 (Cloud-Enabled)</div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-amber-50 border-2 border-amber-200 p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-amber-900">License Suspension Warning</div>
                        <div className="mt-1 text-sm text-amber-800">
                          Circular No. 147 of 2022: Facilities failing to comply by deadline face potential license suspension.
                          AAMEN certification is MANDATORY for medical license renewal.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Six Strategic Pillars */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">The Six Strategic Pillars of ADHICS V2.0</CardTitle>
                  <CardDescription>Beyond checklist compliance toward holistic security culture</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {adhicsPillars.map((pillar) => (
                      <div key={pillar.id} className="rounded-xl border border-slate-200 bg-white overflow-hidden">
                        <button
                          onClick={() => togglePillar(pillar.id)}
                          className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-${pillar.color} text-white`}>
                              {pillar.icon}
                            </div>
                            <div className="text-left">
                              <div className="flex items-center gap-3">
                                <div className="font-bold text-slate-900">{pillar.name}</div>
                                <Badge variant={pillar.color as any} className="text-xs">{pillar.category}</Badge>
                              </div>
                              <div className="text-sm text-slate-600 mt-0.5">{pillar.objective}</div>
                            </div>
                          </div>
                          <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform ${expandedPillars.includes(pillar.id) ? 'rotate-180' : ''}`} />
                        </button>
                        {expandedPillars.includes(pillar.id) && (
                          <div className="border-t border-slate-200 bg-slate-50/50 p-4">
                            <div className="grid gap-4 md:grid-cols-2">
                              <div>
                                <div className="text-sm font-semibold text-slate-700 mb-2">Operational Implications</div>
                                <ul className="space-y-1.5">
                                  {pillar.implications.map((impl, idx) => (
                                    <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                      <span>{impl}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-slate-700 mb-2">Key Requirements</div>
                                <ul className="space-y-1.5">
                                  {pillar.requirements.map((req, idx) => (
                                    <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                                      <Sparkles className="h-3.5 w-3.5 text-purple-500 shrink-0 mt-0.5" />
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Three-Tier Compliance Framework */}
              <div className="grid gap-6 lg:grid-cols-3">
                {complianceTiers.map((tier) => (
                  <Card key={tier.id} className={`glass-card ${tier.highlight ? 'border-2 border-emerald-300' : ''}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant={tier.color as any}>{tier.level}</Badge>
                        {tier.highlight && <Badge variant="success" className="text-xs">Most Common</Badge>}
                      </div>
                      <CardTitle className="text-lg mt-2">{tier.name}</CardTitle>
                      <CardDescription>{tier.target}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {tier.controls.map((control, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700">{control}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CM4 Cloud Computing Control Family */}
              <Card className="glass-card border-cyan-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-cyan text-white">
                      <Cloud className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle>Control Family CM4: Cloud Computing</CardTitle>
                      <CardDescription>Data residency and CSP requirements</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-lg bg-red-50 border-2 border-red-200 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Gavel className="h-5 w-5 text-red-600" />
                        <div className="font-bold text-red-900">Data Residency Mandate</div>
                      </div>
                      <p className="text-sm text-red-800">
                        Health information related to services provided within the UAE <strong>MUST NOT</strong> be stored,
                        developed, or transferred outside the country. This is a HARD operational constraint with no exemptions
                        without specific DoH approval.
                      </p>
                    </div>
                    <div className="rounded-lg bg-blue-50 border-2 border-blue-200 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Building2 className="h-5 w-5 text-blue-600" />
                        <div className="font-bold text-blue-900">CSP Requirements</div>
                      </div>
                      <ul className="space-y-2 text-sm text-blue-800">
                        <li>• ISO 27001 (Information Security)</li>
                        <li>• ISO 27017 (Cloud Security)</li>
                        <li>• ISO 27018 (Privacy in Cloud)</li>
                        <li>• Contract must guarantee UAE jurisdiction</li>
                        <li>• No foreign "follow-the-sun" support access</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AAMEN Audit Process */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>AAMEN Certification Process</CardTitle>
                  <CardDescription>Mandatory audit for license renewal</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3">
                    {amenSteps.map((step, idx) => (
                      <div key={idx} className="relative">
                        <div className="flex items-start gap-4">
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-${step.color} text-white font-bold`}>
                            {idx + 1}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-slate-900">{step.title}</div>
                            <div className="mt-1 text-sm text-slate-600">{step.description}</div>
                          </div>
                        </div>
                        {idx < 2 && (
                          <div className="absolute left-5 top-10 w-0.5 h-12 bg-slate-200 -z-10" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg bg-emerald-50 border-2 border-emerald-200 p-4">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-emerald-600" />
                        <div className="font-bold text-emerald-900">"Secure" Certificate</div>
                      </div>
                      <p className="mt-2 text-sm text-emerald-800">Fully Compliant - All controls implemented and verified</p>
                    </div>
                    <div className="rounded-lg bg-amber-50 border-2 border-amber-200 p-4">
                      <div className="flex items-center gap-2">
                        <ShieldAlert className="h-5 w-5 text-amber-600" />
                        <div className="font-bold text-amber-900">"Safe" Certificate</div>
                      </div>
                      <p className="mt-2 text-sm text-amber-800">Partially Compliant - Managing residual risks with mitigations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Federal Laws */}
        <TabsContent value="federal" className="space-y-6">
          <GlassPanel
            title="Federal Data Protection Landscape"
            description="UAE federal legal framework for data protection"
            badge="2025-2026 Active"
          >
            <div className="space-y-6">
              {/* Decree-Law No. 45 of 2021 */}
              <Card className="glass-card border-purple-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-purple text-white">
                      <Gavel className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Federal Decree-Law No. 45 of 2021</CardTitle>
                      <CardDescription>Regarding the Protection of Personal Data (PDPL)</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg bg-purple-50 p-4">
                      <div className="text-sm font-medium text-slate-600">Issuance Date</div>
                      <div className="mt-1 font-semibold text-slate-900">September 20, 2021</div>
                    </div>
                    <div className="rounded-lg bg-purple-50 p-4">
                      <div className="text-sm font-medium text-slate-600">Effective Date</div>
                      <div className="mt-1 font-semibold text-slate-900">January 2, 2022</div>
                    </div>
                  </div>
                  <div className="mt-4 rounded-lg bg-emerald-50 border-2 border-emerald-200 p-4">
                    <div className="font-semibold text-emerald-900 mb-2">Key Rights Introduced</div>
                    <div className="grid gap-2 sm:grid-cols-3">
                      <div className="text-sm text-emerald-800">• Right to be Forgotten</div>
                      <div className="text-sm text-emerald-800">• Data Portability</div>
                      <div className="text-sm text-emerald-800">• Strict Consent Requirements</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Health Data Exemption */}
              <Card className="glass-card border-rose-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-rose text-white">
                      <AlertCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Critical Health Data Exemption (Article 2)</CardTitle>
                      <CardDescription>Decree-Law No. 45 does NOT apply to "health personal data"</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-rose-50 border-2 border-rose-200 p-4 mb-4">
                    <div className="text-rose-900 font-semibold mb-2">Why the Exemption Exists</div>
                    <p className="text-sm text-rose-800">
                      The UAE has a specific, more rigorous law for health data: <strong>Federal Law No. 2 of 2019
                      on the Use of Information and Communication Technology (ICT) in Health Fields</strong> (the "ICT Health Law").
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-50 border-2 border-slate-200 p-4">
                    <div className="font-semibold text-slate-900 mb-2">Implication for Healthcare Providers</div>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>Hospitals CANNOT rely solely on Decree-Law No. 45 for patient medical records</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>Must comply with <strong>ICT Health Law</strong> and <strong>ADHICS</strong> for clinical data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>Decree-Law No. 45 applies to NON-clinical data: HR records, marketing, visitor logs</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Extraterritorial Reach */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Extraterritorial Jurisdiction</CardTitle>
                  <CardDescription>Like GDPR, applies to foreign entities processing UAE resident data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="h-4 w-4 text-denim-500" />
                        <div className="font-semibold text-slate-900">Domestic Entities</div>
                      </div>
                      <p className="text-sm text-slate-600">Any data controller or processor located in the UAE</p>
                    </div>
                    <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="h-4 w-4 text-denim-500" />
                        <div className="font-semibold text-slate-900">Foreign Entities</div>
                      </div>
                      <p className="text-sm text-slate-600">Entity OUTSIDE UAE processing UAE residents' personal data</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Free Zone Exclusions */}
              <Card className="glass-card border-teal-200">
                <CardHeader>
                  <CardTitle>Financial Free Zone Exclusions</CardTitle>
                  <CardDescription>DIFC and ADGM have independent data protection laws</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg bg-teal-50 border-2 border-teal-200 p-4">
                      <div className="font-bold text-teal-900 mb-2">DIFC (Dubai International Financial Centre)</div>
                      <p className="text-sm text-teal-800">Federal Decree-Law No. 45 does NOT apply. Has own DIFC Data Protection Regulations.</p>
                    </div>
                    <div className="rounded-lg bg-teal-50 border-2 border-teal-200 p-4">
                      <div className="font-bold text-teal-900 mb-2">ADGM (Abu Dhabi Global Market)</div>
                      <p className="text-sm text-teal-800">Has ADGM Data Protection Regulations 2021. Independent civil/commercial laws.</p>
                    </div>
                  </div>
                  <div className="mt-4 rounded-lg bg-amber-50 border-2 border-amber-200 p-4">
                    <div className="text-sm text-amber-800">
                      <strong>Healthcare Context:</strong> If a healthcare holding company is registered in ADGM (common for foreign investors),
                      it is governed by ADGM regulations. However, its operational medical facilities "onshore" in Abu Dhabi remain subject
                      to ADHICS and DoH regulations. This creates a dual-compliance landscape.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sovereign Cloud Infrastructure */}
        <TabsContent value="sovereign" className="space-y-6">
          <GlassPanel
            title="Sovereign Cloud Infrastructure"
            description="State-sanctioned cloud ecosystems ensuring UAE data sovereignty"
            badge="Verified Approved Providers"
          >
            <div className="space-y-6">
              {/* Overview */}
              <Card className="glass-card bg-gradient-to-br from-indigo-50/50 to-white border-indigo-200">
                <CardHeader>
                  <CardTitle>The Sovereign Cloud Model</CardTitle>
                  <CardDescription>Why standard public cloud services are insufficient for government health data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-rose-50 border-2 border-rose-200 p-4 mb-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-rose-900">The Problem with Standard Public Cloud</div>
                        <p className="mt-1 text-sm text-rose-800">
                          Standard public clouds (even in UAE) are insufficient for highest-classification government health data due to:
                          Potential access by foreign support staff • Legal subpoenas from foreign jurisdictions (e.g., US CLOUD Act)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-emerald-50 border-2 border-emerald-200 p-4">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-emerald-900">The Sovereign Solution</div>
                        <p className="mt-1 text-sm text-emerald-800">
                          Abu Dhabi adopts a "Sovereign Cloud" model where data resides on infrastructure legally and technically insulated
                          from foreign jurisdiction, utilizing platforms with UAE-specific policy controls.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comparison Table */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Approved Sovereign Cloud Models Comparison</CardTitle>
                  <CardDescription>Microsoft (via Core42) vs. Oracle (DRCC & OCI)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-slate-200">
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Feature</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Microsoft (via Core42)</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Oracle (DRCC & OCI)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cloudComparison.map((row, idx) => (
                          <tr key={idx} className="border-b border-slate-100">
                            <td className="py-3 px-4 font-medium text-slate-700">{row.feature}</td>
                            <td className="py-3 px-4 text-slate-600">{row.microsoft}</td>
                            <td className="py-3 px-4 text-slate-600">{row.oracle}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Microsoft Azure Section */}
              <Card className="glass-card border-blue-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-denim text-white">
                      <Cloud className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Microsoft Azure UAE North via Core42</CardTitle>
                      <CardDescription>Sovereign Public Cloud for AI & Analytics</CardDescription>
                    </div>
                    <Badge variant="denim" className="ml-auto">Approved</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-blue-50 border-2 border-blue-200 p-4">
                      <div className="font-bold text-blue-900 mb-2">Mechanism of Sovereignty</div>
                      <p className="text-sm text-blue-800 mb-3">
                        Microsoft + Core42 delivers a "Sovereign Public Cloud" where DoH utilizes Azure scalability and AI features
                        while Core42 Sovereign Controls Platform ensures:
                      </p>
                      <ul className="space-y-1 text-sm text-blue-800">
                        <li>• <strong>Data Residency:</strong> Data never leaves the UAE</li>
                        <li>• <strong>Operational Sovereignty:</strong> Infrastructure access controlled by Core42 (national entity), mitigating foreign interference</li>
                      </ul>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg bg-white p-4 border border-slate-200">
                        <div className="font-semibold text-slate-900 mb-2">Strategic Use Cases</div>
                        <ul className="space-y-1 text-sm text-slate-700">
                          <li>• Population Health Intelligence (MoU with Microsoft)</li>
                          <li>• Emirati Genome Program (Terra platform)</li>
                          <li>• Abu Dhabi Biobank deployment</li>
                          <li>• Jais Arabic LLM integration</li>
                        </ul>
                      </div>
                      <div className="rounded-lg bg-white p-4 border border-slate-200">
                        <div className="font-semibold text-slate-900 mb-2">Regulatory Status</div>
                        <ul className="space-y-1 text-sm text-slate-700">
                          <li>• Validated by DoH MoUs</li>
                          <li>• Biobank deployment confirmed</li>
                          <li>• Population Health platform approved</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Oracle Section */}
              <Card className="glass-card border-orange-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-orange text-white">
                      <Database className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Oracle DRCC & OCI Abu Dhabi</CardTitle>
                      <CardDescription>Dedicated Region for Core HIE Infrastructure</CardDescription>
                    </div>
                    <Badge variant="orange" className="ml-auto">Approved</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-orange-50 border-2 border-orange-200 p-4">
                      <div className="font-bold text-orange-900 mb-2">Dedicated Region Cloud@Customer (DRCC)</div>
                      <p className="text-sm text-orange-800 mb-3">
                        Oracle deploys a complete public cloud region <strong>physically inside</strong> the customer's own data center.
                      </p>
                      <div className="flex items-start gap-2">
                        <ShieldCheck className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-orange-900">
                          <strong>Ultimate Sovereignty:</strong> Data remains physically on government premises (or Khazna data center),
                          yet DoH gets full Oracle Cloud catalog. Effectively nullifies data residency concerns.
                        </span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-rose-50 border-2 border-rose-200 p-4">
                      <div className="font-bold text-rose-900 mb-2">Malaffi HIE - De Facto Regulatory Approval</div>
                      <p className="text-sm text-rose-800">
                        Malaffi (Abu Dhabi Health Information Exchange) utilizes Oracle Cloud technologies to manage massive dataset.
                        As the central nervous system of Emirate's healthcare, its hosting on Oracle infrastructure serves as
                        <strong>de facto regulatory approval</strong>.
                      </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg bg-white p-4 border border-slate-200">
                        <div className="font-semibold text-slate-900 mb-2">Oracle Cloud Abu Dhabi Region</div>
                        <div className="text-sm text-slate-700">
                          <div>Region Code: <strong>me-abudhabi-1</strong></div>
                          <div className="mt-2">Provides compliant hosting for private healthcare providers who may not need DRCC scale but require in-country data residency.</div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-white p-4 border border-slate-200">
                        <div className="font-semibold text-slate-900 mb-2">M42 Partnership</div>
                        <div className="text-sm text-slate-700">
                          M42 partners with Oracle to run "Global Life Sciences Platform" and other health data services.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Infrastructure Mapping */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Infrastructure Mapping</CardTitle>
                  <CardDescription>Physical locations and strategic enablers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                      <div className="flex items-center gap-2 mb-3">
                        <Server className="h-5 w-5 text-slate-600" />
                        <div className="font-semibold text-slate-900">Azure Regions</div>
                      </div>
                      <div className="space-y-2 text-sm text-slate-700">
                        <div>• UAE North (Dubai) - Primary for Abu Dhabi</div>
                        <div>• UAE Central (Abu Dhabi)</div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                      <div className="flex items-center gap-2 mb-3">
                        <Building2 className="h-5 w-5 text-slate-600" />
                        <div className="font-semibold text-slate-900">Oracle Regions</div>
                      </div>
                      <div className="space-y-2 text-sm text-slate-700">
                        <div>• me-abudhabi-1 (Public Cloud)</div>
                        <div>• DRCC (On-premise at customer/Khazna)</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Strategic Enablers */}
        <TabsContent value="enablers" className="space-y-6">
          <GlassPanel
            title="Strategic Enablers: G42, M42, and Khazna"
            description="National technology champions enabling sovereign cloud ecosystem"
          >
            <div className="space-y-6">
              {/* Overview */}
              <Card className="glass-card bg-gradient-to-br from-teal-50/50 to-white border-teal-200">
                <CardHeader>
                  <CardTitle>The Gatekeeper Pattern</CardTitle>
                  <CardDescription>Why international tech providers partner with local entities</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">
                    When asking if Microsoft or Oracle are "approved," the answer is often <strong>"Yes, when procured and managed
                    through M42/G42."</strong> These entities act as the "sovereign layer" that satisfies ADHICS requirements for
                    governance and supply chain security.
                  </p>
                </CardContent>
              </Card>

              {/* G42 */}
              <Card className="glass-card border-purple-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-purple text-white">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">G42 (Group 42)</CardTitle>
                      <CardDescription>Overarching technology holding company anchoring Abu Dhabi's digital strategy</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg bg-purple-50 p-4 border border-purple-200">
                      <div className="font-semibold text-purple-900 mb-2">Sovereign Gatekeeper Role</div>
                      <p className="text-sm text-purple-800">
                        Path to "approval" for international technology providers runs through G42. Direct foreign control of
                        critical health data is minimized in favor of partnerships with local entities.
                      </p>
                    </div>
                    <div className="rounded-lg bg-purple-50 p-4 border border-purple-200">
                      <div className="font-semibold text-purple-900 mb-2">Key Responsibilities</div>
                      <ul className="space-y-1 text-sm text-purple-800">
                        <li>• Manages encryption keys</li>
                        <li>• Oversees identity management systems</li>
                        <li>• Ensures US/global parents cannot unilaterally access data</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* M42 */}
              <Card className="glass-card border-teal-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-teal text-white">
                      <Target className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">M42</CardTitle>
                      <CardDescription>Tech-enabled healthcare holding (G42 Healthcare + Mubadala Health merger)</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-teal-50 border-2 border-teal-200 p-4 mb-4">
                    <div className="font-bold text-teal-900 mb-2">Operational Health Data Management</div>
                    <p className="text-sm text-teal-800">
                      M42 is the operational entity that manages Malaffi, the Biobank, and the Genome Program. They serve as
                      the primary tenant and operator of health data services on sovereign cloud infrastructure.
                    </p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg bg-white p-4 border border-slate-200">
                      <div className="font-semibold text-slate-900">Malaffi HIE</div>
                      <p className="text-xs text-slate-600 mt-1">Central nervous system of Emirate's healthcare</p>
                    </div>
                    <div className="rounded-lg bg-white p-4 border border-slate-200">
                      <div className="font-semibold text-slate-900">Biobank</div>
                      <p className="text-xs text-slate-600 mt-1">Strategic DoH initiative for genomic research</p>
                    </div>
                    <div className="rounded-lg bg-white p-4 border border-slate-200">
                      <div className="font-semibold text-slate-900">Genome Program</div>
                      <p className="text-xs text-slate-600 mt-1">815K+ citizens sequenced</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Khazna */}
              <Card className="glass-card border-cyan-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-cyan text-white">
                      <Server className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Khazna Data Centers</CardTitle>
                      <CardDescription>UAE's largest data center provider (G42 group)</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-cyan-50 border-2 border-cyan-200 p-4">
                    <div className="font-bold text-cyan-900 mb-2">Physical Sovereignty Layer</div>
                    <p className="text-sm text-cyan-800 mb-3">
                      Both Microsoft Sovereign Cloud and Oracle deployments are physically housed within Khazna's secure facilities.
                      This ensures physical security controls—a key component of ADHICS—are under direct purview of a national entity.
                    </p>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-cyan-600" />
                      <span className="text-sm text-cyan-900 font-medium">G42 Group Partnership</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Operational Compliance Guide */}
        <TabsContent value="compliance" className="space-y-6">
          <GlassPanel
            title="Operational Compliance Guide"
            description="Step-by-step guide for healthcare entities to achieve compliance"
            badge="2025-2026 Edition"
          >
            <div className="space-y-6">
              {/* Governance and Legal */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-purple text-white">
                      <Gavel className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle>1. Governance and Legal Structuring</CardTitle>
                      <CardDescription>Foundation for compliance program</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {governanceSteps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-lg bg-slate-50 p-4">
                        <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-${step.color} text-white text-xs font-bold`}>
                          {idx + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{step.title}</div>
                          <div className="text-sm text-slate-600 mt-1">{step.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Cloud Adoption */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-denim text-white">
                      <Cloud className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle>2. Cloud Adoption Strategy</CardTitle>
                      <CardDescription>Sovereign cloud implementation roadmap</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {cloudAdoptionSteps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-lg bg-slate-50 p-4">
                        <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-${step.color} text-white text-xs font-bold`}>
                          {idx + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{step.title}</div>
                          <div className="text-sm text-slate-600 mt-1">{step.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Cybersecurity Controls */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-emerald text-white">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle>3. Cybersecurity Technical Controls</CardTitle>
                      <CardDescription>ADHICS mandatory technical requirements</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {cybersecurityControls.map((control, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-lg bg-slate-50 p-4">
                        <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-${control.color} text-white text-xs font-bold`}>
                          {idx + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{control.title}</div>
                          <div className="text-sm text-slate-600 mt-1">{control.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Comparative Analysis */}
        <TabsContent value="comparative" className="space-y-6">
          <GlassPanel
            title="Comparative Analysis"
            description="DoH vs DHA and ADHICS vs International Standards"
          >
            <div className="space-y-6">
              {/* DoH vs DHA */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>DoH (Abu Dhabi) vs DHA (Dubai)</CardTitle>
                  <CardDescription>Both under federal laws, different local implementation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-lg bg-indigo-50 border-2 border-indigo-200 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-indigo text-white">
                          <Shield className="h-4 w-4" />
                        </div>
                        <div className="font-bold text-indigo-900">Abu Dhabi (DoH)</div>
                      </div>
                      <ul className="space-y-2 text-sm text-indigo-800">
                        <li>• <strong>Standard:</strong> ADHICS</li>
                        <li>• <strong>HIE:</strong> Malaffi</li>
                        <li>• <strong>Approach:</strong> Centralized and prescriptive</li>
                        <li>• <strong>Audit:</strong> AAMEN mandatory for licensing</li>
                      </ul>
                    </div>
                    <div className="rounded-lg bg-rose-50 border-2 border-rose-200 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-rose text-white">
                          <Building2 className="h-4 w-4" />
                        </div>
                        <div className="font-bold text-rose-900">Dubai (DHA)</div>
                      </div>
                      <ul className="space-y-2 text-sm text-rose-800">
                        <li>• <strong>Standard:</strong> NABIDH + ISR</li>
                        <li>• <strong>HIE:</strong> NABIDH</li>
                        <li>• <strong>Approach:</strong> Similar intent, different controls</li>
                        <li>• <strong>Goal:</strong> Interoperability with Malaffi</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 rounded-lg bg-emerald-50 border-2 border-emerald-200 p-4">
                    <div className="text-sm text-emerald-800">
                      <strong>Data Mobility Goal:</strong> ADHICS V2.0 and federal ICT law aim to create unified ecosystem where
                      data can flow securely between Malaffi and NABIDH, provided it remains within the UAE.
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* ADHICS vs International Standards */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>ADHICS vs International Standards</CardTitle>
                  <CardDescription>How ADHICS compares to GDPR, HIPAA, and ISO 27001</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {internationalComparisons.map((comparison) => (
                      <div key={comparison.standard} className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Globe className="h-4 w-4 text-denim-500" />
                          <div className="font-bold text-slate-900">ADHICS vs {comparison.standard}</div>
                        </div>
                        <p className="text-sm text-slate-700">{comparison.comparison}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Future Horizons */}
              <Card className="glass-card bg-gradient-to-br from-purple-50/50 to-white border-purple-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-6 w-6 text-purple-500" />
                    <div>
                      <CardTitle>Future Horizons: AI Governance & Algorithm Sovereignty</CardTitle>
                      <CardDescription>What's next for ADHICS</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-purple-50 border-2 border-purple-200 p-4">
                      <div className="font-semibold text-purple-900 mb-2">AI Governance Controls</div>
                      <p className="text-sm text-purple-800">
                        Future iterations of ADHICS will introduce specific controls for AI Governance. The DoH's partnership
                        with Microsoft and Core42 to build AI platforms suggests "Sovereign Cloud" will evolve into
                        <strong>"Sovereign AI Cloud"</strong>.
                      </p>
                    </div>
                    <div className="rounded-lg bg-cyan-50 border-2 border-cyan-200 p-4">
                      <div className="font-semibold text-cyan-900 mb-2">Algorithm Sovereignty</div>
                      <p className="text-sm text-cyan-800">
                        Not just data, but AI models themselves must be hosted and trained within the UAE. Approved providers
                        will be those who can offer trusted, localized AI inference capabilities.
                      </p>
                    </div>
                    <div className="rounded-lg bg-rose-50 border-2 border-rose-200 p-4">
                      <div className="font-semibold text-rose-900 mb-2">Genomic Data Privacy</div>
                      <p className="text-sm text-rose-800">
                        The Emirati Genome Program pushes privacy boundaries. As genomic data becomes standard in clinical care,
                        anticipate stricter sub-regulations under ADHICS specifically for genetic information.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Policy Resistance & Privacy */}
        <TabsContent value="resistance" className="space-y-6">
          {/* Executive Intelligence Assessment */}
          <Card className="glass-card bg-gradient-to-br from-orange-50/50 to-white border-orange-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-orange text-white">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">Systemic & Policy Resistance: "The Pushback"</CardTitle>
                  <CardDescription>Analysis of regulatory friction in Abu Dhabi's healthcare sector</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-white p-4 border border-orange-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Gavel className="h-5 w-5 text-orange-600" />
                    <div className="font-bold text-slate-900">Regulatory Backlash</div>
                  </div>
                  <p className="text-sm text-slate-600">DoH viewed as "Policeman" not strategic partner. Draconian fining regime disproportionately impacts SMEs.</p>
                </div>
                <div className="rounded-lg bg-white p-4 border border-orange-200">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldAlert className="h-5 w-5 text-rose-600" />
                    <div className="font-bold text-slate-900">Privacy Paranoia</div>
                  </div>
                  <p className="text-sm text-slate-600">Malaffi HIE centralization fears employment discrimination and loss of data sovereignty.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The DoH Enforcement Paradigm */}
          <GlassPanel title="The DoH Enforcement Paradigm" description="From Regulator to 'Policeman'" badge="CRITICAL">
            <div className="space-y-6">
              {/* The "Policeman" Narrative */}
              <div className="rounded-lg bg-red-50 border-2 border-red-200 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Gavel className="h-5 w-5 text-red-600" />
                  <div className="font-bold text-red-900">The "Policeman" Narrative</div>
                </div>
                <p className="text-sm text-red-800 mb-3">
                  DoH characterized as "Policeman" prioritizing punishment over guidance. Zero-tolerance approach conflates clerical errors with malicious intent.
                </p>
                <div className="grid gap-2 md:grid-cols-3">
                  <div className="rounded bg-white p-2 border border-red-200">
                    <div className="text-xs font-semibold text-slate-900">Scale of Penalties</div>
                    <p className="text-xs text-slate-600">High-visibility sanctions over corrective measures</p>
                  </div>
                  <div className="rounded bg-white p-2 border border-red-200">
                    <div className="text-xs font-semibold text-slate-900">Chilling Effect</div>
                    <p className="text-xs text-slate-600">Perpetual anxiety over missed reports/coding errors</p>
                  </div>
                  <div className="rounded bg-white p-2 border border-red-200">
                    <div className="text-xs font-semibold text-slate-900">"Criminal" Language</div>
                    <p className="text-xs text-slate-600">Breaches framed as criminal acts</p>
                  </div>
                </div>
              </div>

              {/* The Economics of Punishment */}
              <div className="rounded-lg bg-slate-100 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="h-5 w-5 text-slate-700" />
                  <div className="font-bold text-slate-900">The Economics of Punishment: The Fining Regime</div>
                </div>

                {/* Insurance Mandate Gap Trap */}
                <div className="mb-4 rounded-lg bg-white p-3 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="warning" className="text-xs">RECURRING ISSUE</Badge>
                    <div className="font-semibold text-slate-900 text-sm">The Insurance Mandate "Gap Trap"</div>
                  </div>
                  <p className="text-xs text-slate-700 mb-2">
                    Federal Decree-Law No. 33 of 2021 mandates employers provide health insurance. Penalty: <strong>AED 500/month/employee</strong> for non-compliance.
                  </p>
                  <div className="grid gap-2 md:grid-cols-2">
                    <div className="rounded bg-amber-50 p-2 border border-amber-200">
                      <div className="text-xs font-semibold text-amber-900 mb-1">The "Gap" Window</div>
                      <p className="text-xs text-amber-800">Fines accrue during visa processing delays, medical fitness tests—beyond employer control.</p>
                    </div>
                    <div className="rounded bg-red-50 p-2 border border-red-200">
                      <div className="text-xs font-semibold text-red-900 mb-1">Escalation Risk</div>
                      <p className="text-xs text-red-800">Repeat offenders: up to <strong>AED 500,000</strong>. Existential for SMEs.</p>
                    </div>
                  </div>
                </div>

                {/* The "Fraud" Clawback */}
                <div className="rounded-lg bg-rose-50 p-3 border border-rose-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="destructive" className="text-xs">CRITICAL</Badge>
                    <div className="font-semibold text-rose-900 text-sm">The "Fraud" Clawback Regime</div>
                  </div>
                  <p className="text-xs text-rose-800 mb-2">
                    Legitimate clinical judgment variations flagged as "waste and abuse." Penalties: <strong>AED 250K - 1M</strong> + recoupment of all paid claims.
                  </p>
                  <div className="text-xs text-rose-700">
                    <strong>Impact:</strong> "Upcoding" leads to facility closure, network exclusion, public shaming. Forces defensive medicine and under-coding.
                  </div>
                </div>
              </div>

              {/* Regulatory Sanctions Table */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                  <h3 className="font-bold text-slate-900">Spectrum of Regulatory Sanctions</h3>
                </div>
                <div className="rounded-lg border border-slate-200 overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left py-2 px-3 font-semibold text-slate-900">Violation</th>
                        <th className="text-left py-2 px-3 font-semibold text-slate-900">Action</th>
                        <th className="text-left py-2 px-3 font-semibold text-slate-900">Consequence</th>
                        <th className="text-left py-2 px-3 font-semibold text-slate-900">Sentiment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {regulatorySanctions.map((sanction, idx) => (
                        <tr key={idx} className={`border-t border-slate-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="py-2 px-3 font-medium text-slate-900">{sanction.violation}</td>
                          <td className="py-2 px-3 text-slate-600">{sanction.action}</td>
                          <td className="py-2 px-3 text-slate-600">{sanction.consequence}</td>
                          <td className="py-2 px-3">
                            <Badge variant={getSentimentColor(sanction.sentiment)} className="text-xs">{sanction.sentiment}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* The Economic Siege of the SME */}
          <GlassPanel title="The Economic Siege of the SME" description="Compliance costs as market filters" badge="ECONOMIC">
            <div className="space-y-6">
              {/* ADHICS Burden */}
              <div className="rounded-lg bg-purple-50 border-2 border-purple-200 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldAlert className="h-5 w-5 text-purple-600" />
                  <div className="font-bold text-purple-900">ADHICS Burden: A Regressive Tax on Small Business</div>
                </div>
                <p className="text-sm text-purple-800 mb-3">
                  ADHICS imposes comprehensive controls that are technically demanding and financially draining. Does not scale linearly with patient volume.
                </p>

                {/* Cost Structure */}
                <div className="space-y-2">
                  {adhicsCostStructure.map((cost, idx) => (
                    <div key={idx} className="rounded bg-white p-3 border border-purple-200">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900 text-sm">{cost.component}</div>
                          <p className="text-xs text-slate-600 mt-1">{cost.description}</p>
                        </div>
                        <div className="ml-3 text-right">
                          <div className="font-bold text-purple-700">{cost.cost}</div>
                          <div className="text-xs text-slate-500">{cost.impact}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 rounded-lg bg-purple-100 p-3 border border-purple-300">
                  <div className="text-xs font-semibold text-purple-900 mb-1">SME Impact Summary</div>
                  <p className="text-xs text-purple-800">
                    Initial compliance: <strong>$30K-$50K</strong>. Annual recurring: <strong>$15K</strong>. Represents massive reduction in net income for small clinics.
                  </p>
                </div>
              </div>

              {/* Audit Fatigue */}
              <div className="rounded-lg bg-amber-50 border-2 border-amber-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-5 w-5 text-amber-600" />
                  <div className="font-bold text-amber-900">"Audit Fatigue" and Operational Drag</div>
                </div>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="rounded bg-white p-2 border border-amber-200">
                    <div className="text-xs font-semibold text-slate-900 mb-1">Multi-Audit Trap</div>
                    <p className="text-xs text-slate-600">DoH licensing, ADHICS cybersecurity, JCI accreditation, insurance claim audits—rarely synchronized.</p>
                  </div>
                  <div className="rounded bg-white p-2 border border-amber-200">
                    <div className="text-xs font-semibold text-slate-900 mb-1">Resource Drain</div>
                    <p className="text-xs text-slate-600">Preparation diverts practice managers/nurses from patient care and revenue activities.</p>
                  </div>
                </div>
              </div>

              {/* Consolidation Wave */}
              <div className="rounded-lg bg-cyan-50 border border-cyan-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="h-5 w-5 text-cyan-600" />
                  <div className="font-bold text-cyan-900">Consolidation as a Survival Strategy</div>
                </div>
                <p className="text-sm text-cyan-800 mb-2">
                  "Merger Mania" driven by price and regulatory pressure. Large groups (PureHealth, Mubadala) amortize CISO/compliance costs across hundreds of beds.
                </p>
                <div className="rounded bg-white p-3 border border-cyan-200">
                  <div className="text-xs font-semibold text-slate-900 mb-1">Market Bifurcation Prediction:</div>
                  <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside">
                    <li><strong>Mega-Providers:</strong> State-backed giants and large private groups with centralized compliance</li>
                    <li><strong>Niche Luxury:</strong> High-end cash-only boutique clinics bypassing insurance regulations</li>
                  </ul>
                </div>
                <div className="mt-2 text-xs text-cyan-700 italic">
                  Regulations inadvertently select for size, not quality. Large mediocre clinic can afford compliance easier than small excellent clinic.
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* The Digital Panopticon */}
          <GlassPanel title="The Digital Panopticon" description="Malaffi, ADHICS, and the Architecture of Surveillance" badge="PRIVACY">
            <div className="space-y-6">
              {/* Malaffi: The All-Seeing Eye */}
              <div className="rounded-lg bg-slate-900 text-white p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Eye className="h-5 w-5 text-rose-400" />
                  <div className="font-bold">Malaffi: The All-Seeing Eye</div>
                </div>
                <p className="text-sm text-slate-300 mb-3">
                  Centralized database connecting 2,000+ healthcare providers. Aggregates consultations, labs, radiology, allergies into single longitudinal record.
                </p>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="rounded bg-slate-800 p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="rose" className="text-xs">FEAR</Badge>
                      <div className="text-xs font-semibold text-rose-300">"Glass House" Fear</div>
                    </div>
                    <p className="text-xs text-slate-400">Government tracking → Employer tracking. Insurance reports to employers contain "Health Scores" that can be de-anonymized.</p>
                  </div>
                  <div className="rounded bg-slate-800 p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <ShieldAlert className="h-4 w-4 text-amber-400" />
                      <div className="text-xs font-semibold text-amber-300">Mechanism of Leakage</div>
                    </div>
                    <p className="text-xs text-slate-400">Aggregate reports of oncology/psychiatry claims reveal specific employee in small companies.</p>
                  </div>
                </div>
              </div>

              {/* Illusion of Consent */}
              <div className="rounded-lg bg-rose-50 border-2 border-rose-200 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="h-5 w-5 text-rose-600" />
                  <div className="font-bold text-rose-900">The Illusion of Consent</div>
                </div>
                <div className="space-y-3">
                  {consentIssues.map((issue, idx) => (
                    <div key={idx} className="rounded bg-white p-3 border border-rose-200">
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100 text-rose-600 shrink-0">
                          {issue.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900 text-sm">{issue.title}</div>
                          <p className="text-xs text-slate-600 mt-1">{issue.description}</p>
                          <div className="mt-2 text-xs text-rose-700 italic">{issue.implication}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Malaffi Privacy Friction Analysis Table */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Database className="h-5 w-5 text-purple-600" />
                  <h3 className="font-bold text-slate-900">Malaffi Privacy Friction Analysis</h3>
                </div>
                <div className="rounded-lg border border-slate-200 overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left py-2 px-3 font-semibold text-slate-900">Feature</th>
                        <th className="text-left py-2 px-3 font-semibold text-slate-900">Design Intent</th>
                        <th className="text-left py-2 px-3 font-semibold text-slate-900">User Friction</th>
                        <th className="text-left py-2 px-3 font-semibold text-slate-900">Privacy Implication</th>
                      </tr>
                    </thead>
                    <tbody>
                      {malaffiPrivacyAnalysis.map((item, idx) => (
                        <tr key={idx} className={`border-t border-slate-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="py-2 px-3 font-medium text-slate-900">{item.feature}</td>
                          <td className="py-2 px-3 text-slate-600">{item.intent}</td>
                          <td className="py-2 px-3 text-slate-600">{item.friction}</td>
                          <td className="py-2 px-3">
                            <Badge variant={item.riskLevel === 'High' ? 'destructive' : 'warning'} className="text-xs">{item.implication}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Data Sovereignty Debate */}
              <div className="rounded-lg bg-indigo-50 border border-indigo-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="h-4 w-4 text-indigo-600" />
                  <div className="font-semibold text-indigo-900 text-sm">Technical Forum Sentiment: Data Sovereignty Debate</div>
                </div>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="rounded bg-white p-2 border border-indigo-200">
                    <div className="text-xs font-semibold text-slate-900 mb-1">Cross-Border Data Flows</div>
                    <p className="text-xs text-slate-600">Links with regional exchanges (Riayati, Nabidh) create massive attack surface. Global cloud providers mean data crosses borders despite "data residency" laws.</p>
                  </div>
                  <div className="rounded bg-white p-2 border border-indigo-200">
                    <div className="text-xs font-semibold text-slate-900 mb-1">AI and Deepfakes</div>
                    <p className="text-xs text-slate-600">AI integration into Malaffi raises fears about algorithmic bias. "Black box" AI risk flags become permanent stains affecting insurance/employment.</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* The Human Element */}
          <GlassPanel title="The Human Element" description='Expatriate Anxiety and the "Golden Visa" Paradox' badge="HUMAN">
            <div className="space-y-4">
              {/* The Golden Handcuffs */}
              <div className="rounded-lg bg-amber-50 border-2 border-amber-300 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <User className="h-5 w-5 text-amber-600" />
                  <div className="font-bold text-amber-900">The "Golden Handcuffs" Paradox</div>
                </div>
                <p className="text-sm text-amber-800 mb-2">
                  Golden Visa marketed for permanence and belonging, but healthcare regulations created sense of exclusion.
                </p>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="rounded bg-white p-2 border border-amber-200">
                    <div className="text-xs font-semibold text-slate-900 mb-1">Insurance Gap Ambiguity</div>
                    <p className="text-xs text-slate-600">Self-sponsored Golden Visa holders hit with fines for stepping outside employer group policy they didn't know applied.</p>
                  </div>
                  <div className="rounded bg-white p-2 border border-amber-200">
                    <div className="text-xs font-semibold text-slate-900 mb-1">Sentiment of Betrayal</div>
                    <p className="text-xs text-slate-600">"I invested for Golden Visa, now fined for policy loop I didn't know existed."</p>
                  </div>
                </div>
              </div>

              {/* The "Policeman" in the Consulting Room */}
              <div className="rounded-lg bg-slate-100 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-4 w-4 text-slate-600" />
                  <div className="font-semibold text-slate-900 text-sm">The "Policeman" in the Consulting Room</div>
                </div>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="rounded bg-white p-2 border border-slate-200">
                    <div className="text-xs font-semibold text-slate-900 mb-1">Defensive Medicine</div>
                    <p className="text-xs text-slate-600">Doctors hesitant to order "unnecessary" tests for fear of DoH audits/Fraud accusations, even when clinically indicated.</p>
                  </div>
                  <div className="rounded bg-white p-2 border border-slate-200">
                    <div className="text-xs font-semibold text-slate-900 mb-1">Trust Deficit</div>
                    <p className="text-xs text-slate-600">Patients withhold substance abuse/mental health history fearing Malaffi exposure to employers via insurance premiums.</p>
                  </div>
                </div>
                <div className="mt-2 text-xs text-rose-700 bg-rose-50 p-2 rounded border border-rose-200">
                  <strong>Care Impact:</strong> Breakdown in transparency compromises care quality, directly contradicting DoH's mission.
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* Strategic Implications */}
          <GlassPanel title="Strategic Implications" description="Consolidation, Oligopoly, and the Future of Care" badge="FORECAST">
            <div className="space-y-4">
              {strategicImplications.map((implication, idx) => (
                <div key={idx} className={`rounded-lg border-2 p-4 ${
                  idx === 0 ? 'border-rose-300 bg-rose-50/50' :
                  idx === 1 ? 'border-purple-300 bg-purple-50/50' :
                  'border-cyan-300 bg-cyan-50/50'
                }`}>
                  <div className="flex items-start gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      idx === 0 ? 'bg-gradient-rose' :
                      idx === 1 ? 'bg-gradient-purple' :
                      'bg-gradient-cyan'
                    } text-white shrink-0`}>
                      {implication.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-slate-900 mb-1">{implication.title}</div>
                      <p className="text-sm text-slate-700 mb-2">{implication.description}</p>
                      <div className="rounded bg-white p-2 border border-slate-200">
                        <div className="text-xs font-semibold text-slate-900">{implication.forecastTitle}</div>
                        <p className="text-xs text-slate-600">{implication.forecast}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Conclusion */}
          <Card className="glass-card bg-gradient-purple/10 border-2 border-purple-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-purple-600" />
                <CardTitle className="text-lg">Phase 4: The Grinding Noise of Systemic Adjustment</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 mb-3">
                The "Pushback" is real, painful, and costly for those on the wrong side of the regulatory divide. DoH is effectively using regulation as a terraforming tool, reshaping the landscape into one that is high-tech, consolidated, and heavily policed.
              </p>
              <div className="text-sm text-purple-800 font-medium bg-purple-50 p-3 rounded border border-purple-200">
                For the business community, the choice is binary: scale up to meet the new "Policeman's" standards, or exit the market entirely.
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Public Opinion - Forensic Sentiment Analysis */}
        <TabsContent value="opinion" className="space-y-6">
          {/* Executive Summary */}
          <GlassPanel
            title="Digital Friction and the Civic Contract"
            description="Forensic Sentiment Analysis of DoH and ADPHC Ecosystem (2024-2025)"
            badge="50 Public Opinions"
          >
            <div className="rounded-lg bg-purple-50 border border-purple-200 p-4">
              <p className="text-sm text-purple-800 font-semibold mb-2">EXECUTIVE INTELLIGENCE SUMMARY</p>
              <p className="text-xs text-slate-700 mb-3">
                The 2024-2025 period marks a definitive pivot from "Service-Oriented" to "Compliance-First" digital architecture. Sentiment analysis reveals a highly digitally literate but increasingly fatigued population.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="rounded bg-white p-2 border border-purple-200">
                  <p className="text-sm font-bold text-purple-600">"Competence-Empathy Gap"</p>
                  <p className="text-xs text-slate-600">High trust in clinical excellence, eroded by administrative friction</p>
                </div>
                <div className="rounded bg-white p-2 border border-purple-200">
                  <p className="text-sm font-bold text-rose-600">"Transitional Anxiety"</p>
                  <p className="text-xs text-slate-600">Golden Visa holders entrapped by automated fines</p>
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* The 4 Critical Pillars */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="glass-card border-t-4 border-t-red-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Insurance Fines</CardTitle>
                <CardDescription className="text-xs">AED 300/month automated penalty</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-600">Socio-economic impact of compliance enforcement on residents during visa transitions</p>
                <Badge variant="destructive" className="mt-2 text-xs">High Friction</Badge>
              </CardContent>
            </Card>

            <Card className="glass-card border-t-4 border-t-amber-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Malaffi Trust</CardTitle>
                <CardDescription className="text-xs">Health Information Exchange</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-600">Public perception of centralized health data and privacy concerns</p>
                <Badge variant="warning" className="mt-2 text-xs">Privacy Anxiety</Badge>
              </CardContent>
            </Card>

            <Card className="glass-card border-t-4 border-teal-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Doctor Quality</CardTitle>
                <CardDescription className="text-xs">Tiered healthcare perception</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-600">Bifurcation between premium (CCAD) and standard tier experiences</p>
                <Badge variant="success" className="mt-2 text-xs">Clinical Excellence</Badge>
              </CardContent>
            </Card>

            <Card className="glass-card border-t-4 border-t-cyan-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">TAMM UX</CardTitle>
                <CardDescription className="text-xs">Government super-app interface</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-600">User experience friction points, technical failures, and support gaps</p>
                <Badge variant="info" className="mt-2 text-xs">Digital Dead Ends</Badge>
              </CardContent>
            </Card>
          </div>

          {/* TAMM App Analysis */}
          <GlassPanel title="The Digital Gateway: TAMM" description="Architecture of friction and the super-app paradox" badge="UX Analysis">
            <div className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-rose-500" />
                    The "Account Upgrade" Deadlock
                  </h4>
                  <p className="text-xs text-slate-600 mb-2">
                    Critical synchronization failure between UAE Pass and TAMM database. Users trapped in loops where app demands upgrade, but upgrade process fails.
                  </p>
                  <div className="rounded bg-rose-50 p-2 border border-rose-200">
                    <p className="text-xs text-rose-700 italic">"TAMM basically blocks me with an error like I can't modify this 'try' again... I'm not trying to game the system."</p>
                  </div>
                </div>

                <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                    The "Black Hole" of Support
                  </h4>
                  <p className="text-xs text-slate-600 mb-2">
                    Tickets expire without resolution. "Pay-to-Complain" model requires fees (AED 350) to lodge grievances.
                  </p>
                  <div className="rounded bg-amber-50 p-2 border border-amber-200">
                    <p className="text-xs text-amber-700 italic">"Nothing happened for the rest of the week (I raised a complaint on TAMM but that was useless)."</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-purple-50 p-4 border border-purple-200">
                <h4 className="font-bold text-slate-900 mb-2">The Super App Paradox</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-semibold text-emerald-700 mb-1">Low-Complexity Tasks ✓</p>
                    <p className="text-xs text-slate-600">Simple transactions (driving file, fine payment) generally tolerated</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-rose-700 mb-1">High-Complexity Tasks ✗</p>
                    <p className="text-xs text-slate-600">Multi-agency coordination (birth certificates, waivers) = major friction</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* Insurance Fine Regime */}
          <GlassPanel title="Economics of Compliance: Insurance Fine Regime" description="The automaton of penalty and transitional anxiety" badge="AED 300/month">
            <div className="space-y-4">
              {/* Golden Visa Paradox */}
              <div className="rounded-lg bg-amber-50 p-4 border border-amber-300">
                <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  The "Golden Visa" Paradox
                </h4>
                <p className="text-xs text-amber-800 mb-3">
                  High-income professionals face automated fines during visa transitions. Circular 92/2022 offers exemptions, but automated fining engine ignores nuances.
                </p>
                <div className="grid grid-cols-4 gap-2">
                  <div className="rounded bg-white p-2 text-center border border-amber-200">
                    <p className="text-xs font-semibold text-amber-700">Expectation</p>
                    <p className="text-xs text-slate-600">"Privileged process will be smooth"</p>
                  </div>
                  <div className="rounded bg-white p-2 text-center border border-amber-200">
                    <p className="text-xs font-semibold text-amber-700">Reality</p>
                    <p className="text-xs text-slate-600">"Fine appeared immediately"</p>
                  </div>
                  <div className="rounded bg-white p-2 text-center border border-amber-200">
                    <p className="text-xs font-semibold text-amber-700">Conflict</p>
                    <p className="text-xs text-slate-600">"Circular says exempt, system fined"</p>
                  </div>
                  <div className="rounded bg-white p-2 text-center border border-amber-200">
                    <p className="text-xs font-semibold text-amber-700">Resignation</p>
                    <p className="text-xs text-slate-600">"Pay fine to clear record"</p>
                  </div>
                </div>
              </div>

              {/* COC Confusion */}
              <div className="rounded-lg bg-rose-50 p-4 border border-rose-200">
                <h4 className="font-bold text-rose-900 mb-2">Certificate of Continuity (COC) Confusion</h4>
                <p className="text-xs text-rose-800 mb-2">
                  The "Compliance Lock" - prevents becoming compliant until penalty is paid, creating catch-22 that delays insurance coverage.
                </p>
                <div className="rounded bg-white p-2 border border-rose-200">
                  <p className="text-xs text-slate-700 italic">"The new insurance company chosen by the new employer cannot proceed to process your new insurance unless that penalty is paid..."</p>
                </div>
              </div>

              {/* Dubai Visa Anomaly */}
              <div className="rounded-lg bg-cyan-50 p-4 border border-cyan-200">
                <h4 className="font-bold text-cyan-900 mb-2">The "Dubai Visa" Anomaly</h4>
                <p className="text-xs text-cyan-800 mb-2">
                  Abu Dhabi residents with Dubai visas flagged for non-compliance with Abu Dhabi rules. Lack of synchronization between federal and local frameworks.
                </p>
                <div className="rounded bg-white p-2 border border-cyan-200">
                  <p className="text-xs text-slate-700 italic">"I got insurance penalty from DOH although my working visa is from Dubai... even insurance company have no idea why I got this penalty."</p>
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* Malaffi Privacy Paradox */}
          <GlassPanel title="Surveillance of Care: Malaffi Privacy Paradox" description="Data avoidance behaviors and the opt-out myth" badge="Privacy">
            <div className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-lg bg-purple-50 p-4 border border-purple-200">
                  <h4 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    Stigma and "Permanent Record"
                  </h4>
                  <p className="text-xs text-purple-800 mb-2">
                    Acute anxiety regarding mental health and sexual health data. Fear of "function creep" - employers, visa authorities, insurers accessing data.
                  </p>
                  <div className="rounded bg-white p-2 border border-purple-200">
                    <p className="text-xs text-slate-700 italic">"Soon all medical info in AD is to be stored centrally with government so how does this affect confidentiality in this instance?"</p>
                  </div>
                </div>

                <div className="rounded-lg bg-rose-50 p-4 border border-rose-200">
                  <h4 className="font-bold text-rose-900 mb-2 flex items-center gap-2">
                    <ShieldAlert className="h-4 w-4" />
                    Data Avoidance Behaviors
                  </h4>
                  <p className="text-xs text-rose-800 mb-2">
                    Strategic Non-Disclosure - residents withholding information from doctors or avoiding care for sensitive issues.
                  </p>
                  <div className="rounded bg-white p-2 border border-rose-200">
                    <p className="text-xs text-slate-700 italic">"You can go crazy with your answer. Time to shine." (User advising another to lie to doctor)</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-amber-50 p-4 border border-amber-200">
                <h4 className="font-bold text-amber-900 mb-2">The "Opt-Out" Myth</h4>
                <p className="text-xs text-amber-800">
                  Confusion about ability to opt out of Malaffi. Realization that privacy is no longer a right but a luxury becoming impossible to purchase. The system designed to create "Single Source of Truth" is being polluted with omissions and falsehoods.
                </p>
              </div>
            </div>
          </GlassPanel>

          {/* Doctor Quality vs Cost */}
          <GlassPanel title="Clinical Marketplace: Quality vs Cost Perception" description="Tiered healthcare and the insurance wall" badge="Market Analysis">
            <div className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-3">
                <Card className="glass-card border-t-4 border-t-purple-500">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Tier 1: "Western" Standard</CardTitle>
                    <CardDescription className="text-xs">Cleveland Clinic Abu Dhabi</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-700 mb-2">Overwhelmingly positive sentiment. "World-class," "booming."</p>
                    <Badge variant="success" className="text-xs">High Quality / High Cost</Badge>
                  </CardContent>
                </Card>

                <Card className="glass-card border-t-4 border-t-cyan-500">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Tier 2: Volume Providers</CardTitle>
                    <CardDescription className="text-xs">NMC, Burjeel, Aster</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-700 mb-2">Mixed sentiment. "Factory" model, long waits, aggressive insurance verification.</p>
                    <Badge variant="info" className="text-xs">Variable Quality</Badge>
                  </CardContent>
                </Card>

                <Card className="glass-card border-t-4 border-t-rose-500">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">The Insurance Wall</CardTitle>
                    <CardDescription className="text-xs">Daman Basic limitations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-700 mb-2">Daman Basic seen as bare-minimum restricting access to "good" hospitals.</p>
                    <Badge variant="warning" className="text-xs">Network Restrictions</Badge>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-lg bg-rose-50 p-4 border border-rose-200">
                <h4 className="font-bold text-rose-900 mb-2">Maternity Care: High-Stress Sentiment</h4>
                <p className="text-xs text-rose-800 mb-2">
                  Administrative stress (insurance approval) overshadows clinical experience of childbirth.
                </p>
                <div className="rounded bg-white p-2 border border-rose-200">
                  <p className="text-xs text-slate-700 italic">"The issue is that when there's a large volume of patients, they'll only be able to check your insurance when it's your turn... cases like this are far too common."</p>
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* 50 Forensic Quotes */}
          <GlassPanel title="50 Forensic Quotes: Voice of the Resident" description="Verbatim public opinions from Reddit, Twitter/X, Facebook" badge="Raw Data">
            <ScrollArea className="h-96">
              <div className="space-y-2 pr-4">
                {[
                  { id: 1, quote: 'If you had a gap (e.g few months without insurance), there will be a penalty imposed automatically by the gov\'t...', sentiment: 'negative', focus: 'Fines' },
                  { id: 2, quote: 'The new insurance company chosen by the new employer cannot proceed to process your new insurance unless that penalty is paid...', sentiment: 'negative', focus: 'Fines' },
                  { id: 3, quote: 'It is rare for any company to undertake such penalties unless they are very very kind...', sentiment: 'negative', focus: 'Fines' },
                  { id: 4, quote: 'You can see and pay online the penalty through TAMM application...', sentiment: 'neutral', focus: 'TAMM' },
                  { id: 5, quote: 'Only applicable if your reason for not having insurance is truly JUSTIFIED...', sentiment: 'neutral', focus: 'Fines' },
                  { id: 6, quote: 'You have an option to file a complaint through Tamm app... But it will cost you 350 Aed.', sentiment: 'negative', focus: 'TAMM' },
                  { id: 7, quote: 'When I saw the picture provided for my fine in the tamm app...', sentiment: 'negative', focus: 'TAMM' },
                  { id: 8, quote: 'When I try to change it again, TAMM basically blocks me with an error...', sentiment: 'negative', focus: 'TAMM' },
                  { id: 9, quote: 'I\'m not trying to game the system — I genuinely clicked the wrong option...', sentiment: 'negative', focus: 'TAMM' },
                  { id: 10, quote: 'You\'re a life saver - the application in the TAMM app was just labelled \'delayed\'...', sentiment: 'negative', focus: 'TAMM' },
                  { id: 11, quote: 'Nothing happened for the rest of the week (I raised a complaint on TAMM but that was useless).', sentiment: 'negative', focus: 'TAMM' },
                  { id: 12, quote: 'If the residence visa is not finalised within 120 days, then a fee of AED100 per day...', sentiment: 'negative', focus: 'Fines' },
                  { id: 13, quote: 'DOH... is very tough and do quite a few auditing and hefty fines...', sentiment: 'neutral', focus: 'Policy' },
                  { id: 14, quote: 'Medical field and industry/facilities here are also booming and becoming world class...', sentiment: 'positive', focus: 'Doctor Quality' },
                  { id: 15, quote: 'Cleveland Clinic Abu Dhabi with Dr. Samuel Navon using Ultralasik... It was more expensive...', sentiment: 'neutral', focus: 'Cost vs Quality' },
                  { id: 16, quote: 'Just stay relaxed and have faith in doctors, it will be ok.', sentiment: 'positive', focus: 'Doctor Quality' },
                  { id: 17, quote: 'TAMM didn\'t give a clear answer.', sentiment: 'negative', focus: 'TAMM' },
                  { id: 18, quote: 'A health-insurance violation fine suddenly appeared... But according to DoH Circular 92/2022: Golden Visa holders...', sentiment: 'negative', focus: 'Fines' },
                  { id: 19, quote: 'Try to raise a complaint through hopefully you can get it waived...', sentiment: 'neutral', focus: 'Policy' },
                  { id: 20, quote: 'Malaffi records a history of all your medical encounters in Abu Dhabi...', sentiment: 'neutral', focus: 'Malaffi' },
                  { id: 21, quote: 'This is what causes the \'Account Upgrade Required\' error on TAMM.', sentiment: 'negative', focus: 'TAMM' },
                  { id: 22, quote: 'Spouse is trying to sign up for UAEPASS to be able to access services on TAMM... error comes...', sentiment: 'negative', focus: 'TAMM' },
                  { id: 23, quote: 'Download the Abu Dhabi police mobile app... The app is simple in my opinion.', sentiment: 'positive', focus: 'TAMM' },
                  { id: 24, quote: 'DOH will not fine you for taking out a DHA compliant plan in this case.', sentiment: 'positive', focus: 'Policy' },
                  { id: 25, quote: 'TAMM mentioned they might be able to shift the fine to my old Abu Dhabi employer...', sentiment: 'neutral', focus: 'Fines' },
                  { id: 26, quote: 'I got insurance penalty from DOH although my working visa is from Dubai...', sentiment: 'negative', focus: 'Fines' },
                  { id: 27, quote: 'There is a process via DoH to waive insurance fines, however the process is unclear.', sentiment: 'negative', focus: 'Policy' },
                  { id: 28, quote: 'Whatever option i look for eventually the better one is paying the fine...', sentiment: 'negative', focus: 'Fines' },
                  { id: 29, quote: 'My psychiatrist talked to me... she wants me to change my therapist...', sentiment: 'neutral', focus: 'Doctor Quality' },
                  { id: 30, quote: 'Assuming that the treatment is indeed medically necessary you may approach DOH...', sentiment: 'neutral', focus: 'Policy' },
                  { id: 31, quote: 'Soon all medical info in AD is to be stored centrally with government...', sentiment: 'negative', focus: 'Malaffi' },
                  { id: 32, quote: 'Its not the complete file and details of consultation that are shared by Malaffi...', sentiment: 'neutral', focus: 'Malaffi' },
                  { id: 33, quote: 'LLH, Medeor, Cleveland clinic, NMC to name a few - all of them accept Daman.', sentiment: 'positive', focus: 'Insurance' },
                  { id: 34, quote: 'In My TAMM is still showing \'Delayed\' and under processing...', sentiment: 'negative', focus: 'TAMM' },
                  { id: 35, quote: 'Nmc Royal is just as bad... at the end we realized we would be better off driving to Burjeel.', sentiment: 'negative', focus: 'Hospital Quality' },
                  { id: 36, quote: 'The issue is that when there\'s a large volume of patients, they\'ll only check insurance when it\'s your turn...', sentiment: 'negative', focus: 'Admin Efficiency' },
                  { id: 37, quote: 'Daman\'s basic plan is only for Abu Dhabi visa holders, so it\'s not an option for us.', sentiment: 'negative', focus: 'Insurance' },
                  { id: 38, quote: 'Inside this Thasheel there is a court for HAAD issue... Submit all documents and they will charge AED 250.', sentiment: 'negative', focus: 'Fines' },
                  { id: 39, quote: 'Can anyone confirm that people getting \'Account Upgrade Required\' error...', sentiment: 'negative', focus: 'TAMM' },
                  { id: 40, quote: 'I applied for the nomination in TAMM... the application was rejected...', sentiment: 'negative', focus: 'TAMM' },
                  { id: 41, quote: 'I stumbled upon this required information... It\'s called the Registration Number...', sentiment: 'negative', focus: 'TAMM' },
                  { id: 42, quote: 'Every time I try to press the SUBMIT button in the form, I get an error...', sentiment: 'negative', focus: 'TAMM' },
                  { id: 43, quote: '3 times I send an inquiry to contact@tamm.abudhabi already but the inquiry just expires...', sentiment: 'negative', focus: 'Support' },
                  { id: 44, quote: 'I remember last year there was a fine reduction application... However I couldn\'t find it...', sentiment: 'negative', focus: 'UX Consistency' },
                  { id: 45, quote: 'Doctors understand the sensitivities around this subject and are trained to keep information confidential.', sentiment: 'positive', focus: 'Doctor Quality' },
                  { id: 46, quote: 'They advised me to call customer care on a weekly basis to check for updated information.', sentiment: 'negative', focus: 'Efficiency' },
                  { id: 47, quote: 'I\'m left lost about which hospital to transition to.', sentiment: 'negative', focus: 'Insurance' },
                  { id: 48, quote: 'You can go crazy with your answer. Time to shine.', sentiment: 'neutral', focus: 'Malaffi' },
                  { id: 49, quote: 'I\'m looking for something around 3,000 AED that would cover women including maternity...', sentiment: 'positive', focus: 'Brand' },
                  { id: 50, quote: 'TAMM, DARB, link your vehicles. That\'s only for Abu Dhabi though.', sentiment: 'neutral', focus: 'App Ecosystem' },
                ].map((item) => (
                  <div key={item.id} className={`rounded-lg p-2 border-l-2 ${
                    item.sentiment === 'positive' ? 'bg-emerald-50 border-emerald-400' :
                    item.sentiment === 'negative' ? 'bg-rose-50 border-rose-400' :
                    'bg-slate-50 border-slate-300'
                  }`}>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className="text-xs text-slate-700 italic">"{item.quote}"</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <Badge variant={item.sentiment === 'positive' ? 'success' : item.sentiment === 'negative' ? 'destructive' : 'secondary'} className="text-xs">
                          {item.sentiment}
                        </Badge>
                        <span className="text-xs text-slate-500">{item.focus}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </GlassPanel>

          {/* Strategic Implications */}
          <GlassPanel title="Strategic Implications & Recommendations" description="Systemic insights and path forward" badge="Action Items">
            <div className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-3">
                <Card className="glass-card border-t-4 border-t-rose-500">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">The "Digital Dead End"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-600">Frozen status, technical errors, unresponsive support = economic drag. Hours lost from productive work managing digital dead ends.</p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-t-4 border-t-purple-500">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Erosion of Trust in "Smart"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-600">Perception shifting from "Smart" to "Rigid." Algorithm vs. Human - residents feel system has lost its human face.</p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-t-4 border-t-amber-500">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Privacy-Safety Trade-off</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-600">Privacy is determinant of health. If residents don't trust Malaffi, they alter clinical behavior. Data becomes "less true."</p>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-lg bg-emerald-50 p-4 border border-emerald-200">
                <h4 className="font-bold text-emerald-900 mb-2">Recommendations for DoH/ADPHC</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <p className="text-xs text-emerald-800"><strong>Humanize Exception Handling:</strong> Automated fining must have "Human Circuit Breaker" - pause collection when user contests with evidence.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <p className="text-xs text-emerald-800"><strong>Fix "Account Upgrade" Loop:</strong> Dedicated task force for UAE Pass/TAMM synchronization issues.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <p className="text-xs text-emerald-800"><strong>Privacy Education Campaign:</strong> Explicitly detail who sees Malaffi data. "Your employer cannot see your psychiatrist's notes."</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-purple-50 p-4 border border-purple-200">
                <h4 className="font-bold text-purple-900 mb-2">Conclusion</h4>
                <p className="text-xs text-purple-800">
                  The 2024-2025 sentiment landscape is defined by tension between <strong>Clinical Excellence</strong> and <strong>Administrative Friction</strong>. The public loves the doctors but fears the app. They trust the surgery but distrust the database. The path forward lies in aligning the empathy of the clinic with the efficiency of the code.
                </p>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* CX Investigation - Forensic Customer Experience Analysis */}
        <TabsContent value="cx" className="space-y-6">
          {/* Executive Summary */}
          <GlassPanel
            title="Operational Friction in Abu Dhabi Digital Services"
            description="Forensic CX Investigation of TAMM, DoH, Daman Ecosystem"
            badge="50 User Comments"
          >
            <div className="rounded-lg bg-rose-50 border border-rose-200 p-4">
              <p className="text-sm text-rose-800 font-semibold mb-2">FORENSIC CX INVESTIGATION</p>
              <p className="text-xs text-slate-700 mb-3">
                Distance between strategic intent and operational reality is measured in friction. We extracted 50 specific user comments using forensic keywords: 'App crash', 'Login loop', 'Fine appeal stuck', 'System down'.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded bg-white p-2 border border-rose-200">
                  <p className="text-sm font-bold text-rose-600">"Penalty-First" Architecture</p>
                  <p className="text-xs text-slate-600">Compliance automation efficient, remedial systems suffer high latency</p>
                </div>
                <div className="rounded bg-white p-2 border border-rose-200">
                  <p className="text-sm font-bold text-amber-600">"Digital Dead-End"</p>
                  <p className="text-xs text-slate-600">Users trapped in loops of unhelpful AI chatbots and disempowered agents</p>
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* Operational Heatmap Framework */}
          <GlassPanel title="Operational Heatmap Framework" description="Two axes: Severity of Impact and Locus of Failure" badge="Methodology">
            <div className="grid gap-4 lg:grid-cols-2">
              <Card className="glass-card border-t-4 border-t-rose-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Severity of Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-rose-500" />
                      <p className="text-xs text-slate-700"><strong>Critical Blocking:</strong> Cannot renew visas or access healthcare</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-500" />
                      <p className="text-xs text-slate-700"><strong>High Friction:</strong> Delays and financial penalties</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-slate-400" />
                      <p className="text-xs text-slate-700"><strong>Annoyance:</strong> UX quirks and minor bugs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-t-4 border-t-purple-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Locus of Failure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded bg-slate-50 p-2 text-center">
                      <p className="font-semibold text-slate-900">Frontend</p>
                      <p className="text-slate-600">App UI</p>
                    </div>
                    <div className="rounded bg-slate-50 p-2 text-center">
                      <p className="font-semibold text-slate-900">Backend</p>
                      <p className="text-slate-600">Database/API</p>
                    </div>
                    <div className="rounded bg-slate-50 p-2 text-center">
                      <p className="font-semibold text-slate-900">Policy Layer</p>
                      <p className="text-slate-600">Rules/Regs</p>
                    </div>
                    <div className="rounded bg-slate-50 p-2 text-center">
                      <p className="font-semibold text-slate-900">Human Support</p>
                      <p className="text-slate-600">Agents</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* Heatmap Data Clusters - 50 Comments */}
          <GlassPanel title="50 User Comments: The Ground Truth" description="Raw data establishing user experience reality" badge="Evidence">
            <ScrollArea className="h-96">
              <div className="space-y-4 pr-4">
                {/* Cluster A: Technical Instability & TAMM App Failures */}
                <div>
                  <h4 className="text-sm font-bold text-rose-900 mb-2 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    Cluster A: Technical Instability & TAMM App Failures (20)
                  </h4>
                  <div className="space-y-1">
                    {[
                      { id: '01', text: 'Chatbot Failure: "Why are they not allowing this service? Every time their chat bot shows 3 minutes waiting queue... nobody bothers to show up."', sentiment: 'critical' },
                      { id: '02', text: 'Support Abandonment: "Please do not spoil the reputation of the city of Abu Dhabi... with this substandard app and its services!"', sentiment: 'critical' },
                      { id: '03', text: 'Submission Error: "App crash and not updating documents. While submitting vehicle blocking report its always showing error."', sentiment: 'critical' },
                      { id: '04', text: 'Data Sync Latency: "I renewed my car mulkiya through TAMM... still not updated in TAMM, still showing vehicle expired."', sentiment: 'high' },
                      { id: '05', text: 'Payment Gateway: "I requested for fishing license, several times payment failed, after continuously i tried then finally i got it."', sentiment: 'high' },
                      { id: '06', text: 'Policy Logic Flaw: "I tried to apply for parking card for people of determination... system doesn\'t allow you to apply unless your car is registered in Abu Dhabi."', sentiment: 'critical' },
                      { id: '07', text: 'Feature Bug: "Bug affecting Prayer alerts. I rely on TAMM app for prayer alerts after trying all other Islamic apps out there."', sentiment: 'moderate' },
                      { id: '08', text: 'SLA Breach: "Submitted my case regarding DOH license exam and they took more than 8 weeks... only 1 week time was given."', sentiment: 'critical' },
                      { id: '09', text: 'Service Incompetence: "Extremely incompetent workers. TAMM App and online is a Super incompetent service."', sentiment: 'hostile' },
                      { id: '10', text: 'Refund Failure: "Electricity refund... I waited 3 hour for refund i didnt get... worst app."', sentiment: 'high' },
                      { id: '11', text: 'UX Complexity: "Very complex and difficult to use. I cannot easily find the services I am looking for."', sentiment: 'high' },
                      { id: '12', text: 'Technical Support Void: "DED trying to get in touch with their technical department for their own glitch since 15 days no luck."', sentiment: 'critical' },
                      { id: '13', text: 'AI Assistant Failure: "AI assistant is beyond useless. No simple way to raise issues about user experience/ feedback to an actual human."', sentiment: 'critical' },
                      { id: '14', text: 'Booking Logic: "Shows appointments as being available that I can\'t book."', sentiment: 'critical' },
                      { id: '15', text: 'Cross-Platform Bug: "The website does not pair with the app, and you can not download on the website."', sentiment: 'moderate' },
                      { id: '16', text: 'Notification Spam: "Notifications for useless events pile up, and you can\'t see what\'s important."', sentiment: 'moderate' },
                      { id: '17', text: 'Performance: "Excruciatingly slow for what it does. It seems nothing is ever cached at any layer."', sentiment: 'high' },
                      { id: '18', text: 'Fraud Trigger: "Slow, Sluggish app, fails to do payments, and if successful, the bank calls to check if it was fraudulent activity!"', sentiment: 'critical' },
                      { id: '19', text: 'Server Latency: "Very slow servers/hosting. Takes too much time in loading."', sentiment: 'moderate' },
                      { id: '20', text: 'Login Loop: "Account Upgrade Required error on TAMM... prevents login."', sentiment: 'critical' },
                    ].map((item) => (
                      <div key={item.id} className={`rounded p-2 border-l-2 ${
                        item.sentiment === 'critical' ? 'bg-rose-50 border-rose-500' :
                        item.sentiment === 'high' ? 'bg-amber-50 border-amber-500' :
                        item.sentiment === 'hostile' ? 'bg-purple-50 border-purple-500' :
                        'bg-slate-50 border-slate-400'
                      }`}>
                        <div className="flex items-start gap-2">
                          <Badge variant={item.sentiment === 'critical' ? 'destructive' : item.sentiment === 'high' ? 'warning' : item.sentiment === 'hostile' ? 'purple' : 'secondary'} className="text-xs shrink-0">
                            {item.id}
                          </Badge>
                          <p className="text-xs text-slate-700">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cluster B: Regulatory Fines & Insurance Friction */}
                <div>
                  <h4 className="text-sm font-bold text-amber-900 mb-2 flex items-center gap-2">
                    <Gavel className="h-4 w-4" />
                    Cluster B: Regulatory Fines & Insurance Friction (15)
                  </h4>
                  <div className="space-y-1">
                    {[
                      { id: '21', text: 'Jurisdictional Fine: "I got insurance penalty from DOH although my working visa is from Dubai... insurance is under Dubai insurance policy."', sentiment: 'critical' },
                      { id: '22', text: 'Erroneous Penalty: "DOH fined me 5400 AED mistakenly... At any point of time did you have an abudhabi visa?"', sentiment: 'critical' },
                      { id: '23', text: 'Bureaucratic Wall: "To remove the penalty need to approach \'Thasheel - Muamalath\'... pay AED 250 just to open file."', sentiment: 'high' },
                      { id: '24', text: 'Financial Burden: "One-year of health insurance fines currently for you and your dependents at 300aed/ person/ month."', sentiment: 'critical' },
                      { id: '25', text: 'Discount Limits: "Submit a request on DOH website... I don\'t think they\'d waive more than 30%."', sentiment: 'high' },
                      { id: '26', text: 'Compliance Gap: "Insurer asked me to pay the fine due to non complaint insurance I had all these days."', sentiment: 'high' },
                      { id: '27', text: 'Data Integrity: "Unknown 5000AED fine... fine type: absent... I don\'t even have a drivers license nor a car."', sentiment: 'critical' },
                      { id: '28', text: 'Context Failure: "Probably covid related fine for not performing test... You don\'t need a car for that."', sentiment: 'moderate' },
                      { id: '29', text: 'Data Mismatch: "Error saying: The attached traffic code... does not match the traffic code for the ID account."', sentiment: 'high' },
                      { id: '30', text: 'Golden Visa Gap: "Golden Visa holder living abroad... health insurance fine."', sentiment: 'critical' },
                      { id: '31', text: 'Onboarding Friction: "Can anyone confirm that people getting \'Account Upgrade Required\' error is because they upgraded before entering uae?"', sentiment: 'high' },
                      { id: '32', text: 'System Outage: "Golden Visa issuance is temporarily paused on ICP after TAMM approval, supposedly because of a system update."', sentiment: 'critical' },
                      { id: '33', text: 'Process Latency: "TAMM nomination is still the normal first step, and it can sit pending for 1–3 weeks with no updates."', sentiment: 'moderate' },
                      { id: '34', text: 'Data Access: "You will not see any of this on TAMM since the cars registered to the rental company and records are private."', sentiment: 'moderate' },
                      { id: '35', text: 'Dispute Inconsistency: "Fine contest done through AD Police app is being reviewed... TAMM came back saying the fine was correct."', sentiment: 'high' },
                    ].map((item) => (
                      <div key={item.id} className={`rounded p-2 border-l-2 ${
                        item.sentiment === 'critical' ? 'bg-rose-50 border-rose-500' :
                        item.sentiment === 'high' ? 'bg-amber-50 border-amber-500' :
                        'bg-slate-50 border-slate-400'
                      }`}>
                        <div className="flex items-start gap-2">
                          <Badge variant={item.sentiment === 'critical' ? 'destructive' : item.sentiment === 'high' ? 'warning' : 'secondary'} className="text-xs shrink-0">
                            {item.id}
                          </Badge>
                          <p className="text-xs text-slate-700">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cluster C: Service Delivery & Support Voids */}
                <div>
                  <h4 className="text-sm font-bold text-cyan-900 mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Cluster C: Service Delivery & Support Voids (15)
                  </h4>
                  <div className="space-y-1">
                    {[
                      { id: '36', text: 'Dispute Dead-End: "TAMM case closed saying... business licence has been frozen... heard nothing since."', sentiment: 'critical' },
                      { id: '37', text: 'Consumer Protection: "Gym suddenly closed... I feel so desperate right now. We can\'t afford to lose this money."', sentiment: 'desperate' },
                      { id: '38', text: 'Service Deflection: "I tried reporting [building maintenance] on TAMM platform but said go to court which is very difficult."', sentiment: 'high' },
                      { id: '39', text: 'Process Blocking: "Agent says MAINTENANCE hasnt cleared my apartment... RequesttoRegisteraNewLeaseContract."', sentiment: 'critical' },
                      { id: '40', text: 'Expectation Mismatch: "I have informed the immigration department and official Tamm app about this [neighbor harassment]..."', sentiment: 'moderate' },
                      { id: '41', text: 'Service Delay: "Now that april PT tests are delayed, I guess this is the next."', sentiment: 'moderate' },
                      { id: '42', text: 'Policy Restriction: "Corniche accept only daman insurance... my insurance is axa... is that possible?"', sentiment: 'high' },
                      { id: '43', text: 'Reimbursement Friction: "They only take daman, but with the other companies you pay, fill the form and then get reimbursed."', sentiment: 'moderate' },
                      { id: '44', text: 'Coverage Gap: "Routine dental care... I just shelled out 3k for a crown... Routine cleaning and x-rays aren\'t covered."', sentiment: 'moderate' },
                      { id: '45', text: 'Rewards/Trust: "Cheating app. I didn\'t receive any vouchers... proton WhatsApp messenger number is another cheater."', sentiment: 'critical' },
                      { id: '46', text: 'Stability: "Downloads cause the mentioned crash."', sentiment: 'moderate' },
                      { id: '47', text: 'UX/Subscription: "Considering a monthly subscription just to stop having to use it."', sentiment: 'critical' },
                      { id: '48', text: 'UX/Annoyance: "Notifications pile up."', sentiment: 'moderate' },
                      { id: '49', text: 'Payment Failure: "Fails to do payments."', sentiment: 'high' },
                      { id: '50', text: 'Feature Gap: "There should be a qr code scanner on bill to redeem point anytime later."', sentiment: 'moderate' },
                    ].map((item) => (
                      <div key={item.id} className={`rounded p-2 border-l-2 ${
                        item.sentiment === 'critical' ? 'bg-rose-50 border-rose-500' :
                        item.sentiment === 'desperate' ? 'bg-purple-50 border-purple-500' :
                        item.sentiment === 'high' ? 'bg-amber-50 border-amber-500' :
                        'bg-slate-50 border-slate-400'
                      }`}>
                        <div className="flex items-start gap-2">
                          <Badge variant={item.sentiment === 'critical' ? 'destructive' : item.sentiment === 'desperate' ? 'purple' : item.sentiment === 'high' ? 'warning' : 'secondary'} className="text-xs shrink-0">
                            {item.id}
                          </Badge>
                          <p className="text-xs text-slate-700">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollArea>
          </GlassPanel>

          {/* Deep Dive Analyses */}
          <div className="grid gap-6 lg:grid-cols-3">
            <GlassPanel title="Authentication Crisis" description="The 'Account Upgrade' Loop" badge="Critical">
              <div className="space-y-3">
                <div className="rounded-lg bg-rose-50 p-3 border border-rose-200">
                  <p className="text-xs font-semibold text-rose-900 mb-1">Anatomy of Failure</p>
                  <p className="text-xs text-rose-800">Synchronization mismatch between UAE PASS and TAMM Profile. User trapped in paradox: need to log in to fix status, but cannot log in because status not fixed.</p>
                </div>
                <div className="rounded-lg bg-amber-50 p-3 border border-amber-200">
                  <p className="text-xs font-semibold text-amber-900 mb-1">Silent Support Failure</p>
                  <p className="text-xs text-amber-800">Users resort to Reddit for diagnosis. Official error messages devoid of actionable intelligence.</p>
                </div>
              </div>
            </GlassPanel>

            <GlassPanel title="Integration Latency" description="'Digital Twins' Out of Sync" badge="Data">
              <div className="space-y-3">
                <div className="rounded-lg bg-cyan-50 p-3 border border-cyan-200">
                  <p className="text-xs font-semibold text-cyan-900 mb-1">Mulkiya Sync Lag</p>
                  <p className="text-xs text-cyan-800">Renewed vehicle registration received physically, but app shows "Expired" - Write Success, Read Failure indicating caching flaw.</p>
                </div>
                <div className="rounded-lg bg-purple-50 p-3 border border-purple-200">
                  <p className="text-xs font-semibold text-purple-900 mb-1">Fraud Trigger</p>
                  <p className="text-xs text-purple-800">Bank calls to check fraudulent activity due to malformed transaction metadata or aggressive retries.</p>
                </div>
              </div>
            </GlassPanel>

            <GlassPanel title="UX of 'Despair'" description="Navigation and Performance" badge="Experience">
              <div className="space-y-3">
                <div className="rounded-lg bg-slate-100 p-3 border border-slate-200">
                  <p className="text-xs font-semibold text-slate-900 mb-1">Navigation Complexity</p>
                  <p className="text-xs text-slate-700">Organized by departmental structure rather than user intent. Notification spam degrades signal-to-noise ratio.</p>
                </div>
                <div className="rounded-lg bg-rose-50 p-3 border border-rose-200">
                  <p className="text-xs font-semibold text-rose-900 mb-1">Reputational Risk</p>
                  <p className="text-xs text-rose-800">"Please do not spoil the reputation of the city of Abu Dhabi... with this substandard app"</p>
                </div>
              </div>
            </GlassPanel>
          </div>

          {/* Regulatory Fine Machinery Analysis */}
          <GlassPanel title="The Regulatory Fine Machinery" description="'Penalty-First' Architecture Analysis" badge="DoH & Daman">
            <div className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-lg bg-rose-50 p-4 border border-rose-200">
                  <h4 className="font-bold text-rose-900 mb-2">"Phantom Fine" Phenomenon</h4>
                  <p className="text-xs text-rose-800 mb-2">
                    5,000+ AED fines for violations not committed or miscategorized by system.
                  </p>
                  <div className="rounded bg-white p-2 border border-rose-200">
                    <p className="text-xs text-slate-700 italic">"Unknown 5000AED fine... fine type: absent... I don't even have a drivers license nor a car"</p>
                  </div>
                  <div className="mt-2 rounded bg-amber-100 p-2 border border-amber-300">
                    <p className="text-xs text-amber-800">"Pay-to-Complain": AED 250 just to open file to contest</p>
                  </div>
                </div>

                <div className="rounded-lg bg-purple-50 p-4 border border-purple-200">
                  <h4 className="font-bold text-purple-900 mb-2">Dubai vs Abu Dhabi Gap</h4>
                  <p className="text-xs text-purple-800 mb-2">
                    "Hybrid Users" penalized for lack of government-to-government data integration.
                  </p>
                  <div className="rounded bg-white p-2 border border-purple-200">
                    <p className="text-xs text-slate-700 italic">"I got insurance penalty from DOH although my working visa is from Dubai... and my insurance is under Dubai insurance policy"</p>
                  </div>
                  <div className="mt-2 rounded bg-cyan-100 p-2 border border-cyan-300">
                    <p className="text-xs text-cyan-800">User becomes "manual API" carrying papers between emirates</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-amber-50 p-4 border border-amber-200">
                <h4 className="font-bold text-amber-900 mb-2">Golden Visa Insurance Limbo</h4>
                <p className="text-xs text-amber-800 mb-2">
                  System defaults to "Fine" if no insurance detected, even if user not physically present. Best outcome is partial penalty (30% discount), not full exoneration.
                </p>
                <div className="rounded bg-white p-2 border border-amber-200">
                  <p className="text-xs text-slate-700 italic">"I don't think they'd waive more than 30%... system designed to recover revenue, not correct logic errors"</p>
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* Support Void Analysis */}
          <GlassPanel title="The Support Void" description="Service Delivery failures and human disconnection" badge="Critical">
            <div className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-3">
                <div className="rounded-lg bg-rose-50 p-3 border border-rose-200">
                  <h4 className="font-bold text-rose-900 mb-1">"Go to Court" Deflection</h4>
                  <p className="text-xs text-rose-800">System escalates municipal complaints to judiciary. "Go to Court" is conversation ender - user gives up.</p>
                </div>
                <div className="rounded-lg bg-purple-50 p-3 border border-purple-200">
                  <h4 className="font-bold text-purple-900 mb-1">"Tick-Box" Resolution</h4>
                  <p className="text-xs text-purple-800">Agency KPI: "Case Processed" - User KPI: "Refund Received" - Misalignment defines CX friction.</p>
                </div>
                <div className="rounded-lg bg-amber-50 p-3 border border-amber-200">
                  <h4 className="font-bold text-amber-900 mb-1">Agent Helplessness</h4>
                  <p className="text-xs text-amber-800">Level 1 agents lack backend tools. Under call duration metrics, they hang up.</p>
                </div>
              </div>

              <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">Chatbot & Call Center Failures</h4>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="rounded bg-white p-2 border border-slate-200">
                    <p className="font-semibold text-slate-900">Chatbot Abandonment</p>
                    <p className="text-slate-600">"3 minutes waiting queue... nobody bothers to show up"</p>
                  </div>
                  <div className="rounded bg-white p-2 border border-slate-200">
                    <p className="font-semibold text-slate-900">The "Proof" Loop</p>
                    <p className="text-slate-600">User must provide proof of electricity payment to electricity provider</p>
                  </div>
                  <div className="rounded bg-white p-2 border border-slate-200">
                    <p className="font-semibold text-slate-900">"Ghost Slot" Bug</p>
                    <p className="text-slate-600">SEHA shows available appointments that error when booked</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* Strategic Recommendations */}
          <GlassPanel title="Strategic Recommendations" description="5 interventions to resolve operational friction" badge="Action Plan">
            <div className="space-y-3">
              <Card className="glass-card border-l-4 border-l-emerald-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">1. Unified Digital Tribunal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-slate-700 mb-1"><strong>Problem:</strong> "Pay-to-Complain" and "Go to Court" deflection</p>
                  <p className="text-xs text-emerald-700">Free digital dispute resolution. Fines frozen during review. Encourages correction of bad data.</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-l-4 border-l-cyan-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">2. "Hybrid Resident" Protocol</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-slate-700 mb-1"><strong>Problem:</strong> Dubai visa holders fined by Abu Dhabi</p>
                  <p className="text-xs text-cyan-700">API lookup between DoH and DHA. If valid insurance found anywhere in UAE, fine suppressed.</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-l-4 border-l-purple-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">3. Real-Time "Write-Back" Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-slate-700 mb-1"><strong>Problem:</strong> Mulkiya lag and data sync issues</p>
                  <p className="text-xs text-purple-700">Event-driven architecture. Confirm success only after backend returns new data. Pull from source of truth.</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-l-4 border-l-amber-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">4. Human-in-the-Loop "Super Agents"</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-slate-700 mb-1"><strong>Problem:</strong> "Just Hang Up" support failure</p>
                  <p className="text-xs text-amber-700">Cross-departmental access. View DED/DoH tickets. Flag bugs directly to engineering.</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-l-4 border-l-rose-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">5. Technical Stability "Red Team"</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-slate-700 mb-1"><strong>Problem:</strong> App crashes and payment failures</p>
                  <p className="text-xs text-rose-700">Stress-test payment gateway. Test edge cases: foreign cards, rapid retries, UAE PASS upgrade from abroad.</p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* Conclusion */}
          <div className="rounded-lg bg-gradient-purple/10 p-4 border-2 border-purple-300">
            <h4 className="font-bold text-purple-900 mb-2">Conclusion</h4>
            <p className="text-xs text-purple-800">
              Users are willing and eager to adopt "Smart Government" vision. However, they are penalized by a system that is <strong>rigid in enforcement yet fragile in operation</strong>. By addressing "Integration Nodes" and shifting from "Penalty-First" to "Service-First" architecture, Abu Dhabi can close the gap between digital promise and operational reality.
            </p>
          </div>
        </TabsContent>

        {/* Role-Based Access */}
        <TabsContent value="rbac" className="space-y-6">
          <GlassPanel title="Role-Based Access Control" description="Manage user permissions and access levels">
            <div className="space-y-6">
              {/* Role Overview */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {roleOverview.map((role, index) => (
                  <Card key={index} className="glass-card">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-${role.color} text-white`}>
                          {role.icon}
                        </div>
                        <Badge variant={role.color as any} className="text-xs">{role.count} users</Badge>
                      </div>
                      <div className="font-semibold text-slate-900">{role.name}</div>
                      <div className="text-xs text-slate-500 mt-1">{role.description}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* User Management */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">User Directory</CardTitle>
                      <CardDescription>Manage user access and permissions</CardDescription>
                    </div>
                    <Button className="bg-gradient-purple hover:opacity-90 text-white gap-2">
                      <UserPlus className="h-4 w-4" />
                      Add User
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-3 pr-4">
                      {users.map((user, index) => (
                        <div key={index} className="flex items-center gap-4 rounded-lg bg-slate-50/50 p-3">
                          <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-${user.roleColor} text-white font-semibold`}>
                            {user.initials}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-slate-900">{user.name}</div>
                            <div className="text-sm text-slate-600">{user.email}</div>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant={user.roleColor as any} className="text-xs">{user.role}</Badge>
                              <span className="text-xs text-slate-500">Last active: {user.lastActive}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {user.status === 'active' ? (
                              <Badge variant="success" className="text-xs gap-1">
                                <CheckCircle2 className="h-3 w-3" />
                                Active
                              </Badge>
                            ) : (
                              <Badge variant="secondary" className="text-xs gap-1">
                                <AlertCircle className="h-3 w-3" />
                                Inactive
                              </Badge>
                            )}
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Role Permissions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Role Permissions Matrix</CardTitle>
                  <CardDescription>Define access levels for each role</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {rolePermissions.map((role, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-${role.color} text-white`}>
                            {role.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-slate-900">{role.name}</div>
                            <div className="text-xs text-slate-500">{role.description}</div>
                          </div>
                        </div>
                        <div className="ml-11 grid grid-cols-2 md:grid-cols-4 gap-3">
                          {role.permissions.map((perm, i) => (
                            <div key={i} className="flex items-center gap-2 rounded-lg bg-slate-50 p-2">
                              <Switch checked={perm.granted} disabled />
                              <span className="text-xs text-slate-700">{perm.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Audit Logs */}
        <TabsContent value="audit" className="space-y-6">
          <GlassPanel title="Audit Logs" description="Complete system activity trail">
            <div className="space-y-4">
              {/* Log Stats */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-slate-900">12.4K</div>
                    <div className="text-sm text-slate-600 mt-1">Events Today</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-emerald-600">98.2%</div>
                    <div className="text-sm text-slate-600 mt-1">Compliance Rate</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-purple-600">847</div>
                    <div className="text-sm text-slate-600 mt-1">User Actions</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-amber-600">3</div>
                    <div className="text-sm text-slate-600 mt-1">Flagged Events</div>
                  </CardContent>
                </Card>
              </div>

              {/* Audit Log Table */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Recent Activity</CardTitle>
                      <CardDescription>System events and user actions</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Search className="h-3 w-3" />
                        Search
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <FileText className="h-3 w-3" />
                        Export
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-2 pr-4">
                      {auditLogs.map((log, index) => (
                        <div key={index} className={`flex items-start gap-4 rounded-lg border-l-4 bg-slate-50/50 p-3 ${
                          log.severity === 'high' ? 'border-rose-500' :
                          log.severity === 'medium' ? 'border-amber-500' :
                          'border-emerald-500'
                        }`}>
                          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                            log.severity === 'high' ? 'bg-rose-100 text-rose-600' :
                            log.severity === 'medium' ? 'bg-amber-100 text-amber-600' :
                            'bg-emerald-100 text-emerald-600'
                          }`}>
                            {log.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <div className="font-semibold text-slate-900">{log.action}</div>
                                <div className="text-sm text-slate-600">{log.details}</div>
                                <div className="mt-1 text-xs text-slate-500">
                                  {log.user} • {log.timestamp}
                                </div>
                              </div>
                              <Badge variant={log.severity === 'high' ? 'destructive' : log.severity === 'medium' ? 'warning' : 'success'} className="text-xs">
                                {log.severity}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <GlassPanel title="Security Configuration" description="Manage system security and data protection">
            <div className="space-y-6">
              {/* Security Overview */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Security Status</CardTitle>
                    <CardDescription>Overall system security posture</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Security Score</span>
                      <span className="text-2xl font-bold text-emerald-600">A+</span>
                    </div>
                    <div className="space-y-2">
                      {securityMetrics.map((metric, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">{metric.name}</span>
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-24 rounded-full bg-slate-100 overflow-hidden">
                              <div className={`h-full rounded-full bg-gradient-${metric.color}`} style={{ width: `${metric.value}%` }} />
                            </div>
                            <span className="text-xs font-semibold text-slate-700">{metric.value}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Data Protection</CardTitle>
                    <CardDescription>Encryption and privacy settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {dataProtectionSettings.map((setting, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium text-slate-900">{setting.name}</div>
                          <div className="text-xs text-slate-500">{setting.description}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={setting.status === 'active' ? 'success' : 'secondary'} className="text-xs">
                            {setting.status}
                          </Badge>
                          <Switch checked={setting.status === 'active'} />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Security Policies */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Security Policies</CardTitle>
                  <CardDescription>Configure system-wide security rules</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {securityPolicies.map((policy, index) => (
                      <div key={index} className="flex items-start justify-between rounded-lg bg-slate-50/50 p-4">
                        <div className="flex items-start gap-3">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-${policy.color} text-white`}>
                            {policy.icon}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">{policy.name}</div>
                            <div className="mt-1 text-sm text-slate-600">{policy.description}</div>
                            <div className="mt-2 text-xs text-slate-500">Last updated: {policy.lastUpdated}</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button size="sm" className="bg-gradient-purple hover:opacity-90 text-white">Enforce</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// ============================================================================
// DATA: ADHICS V2.0 Framework (File 06 Data)
// ============================================================================

const adhicsPillars = [
  {
    id: 'governance',
    name: 'Governance',
    category: 'Executive Accountability',
    objective: 'Board-level security agenda and qualified CISO appointment',
    color: 'purple',
    icon: <Gavel className="h-5 w-5" />,
    implications: [
      'Mandates formation of Information Security Steering Committees',
      'Requires appointment of qualified CISO at executive level',
      'Ensures security is discussed at board meetings regularly',
      'Links compliance to commercial viability via license renewal'
    ],
    requirements: [
      'CISO certification (e.g., CCSP for cloud security)',
      'Quarterly steering committee meetings',
      'Executive sign-off on security policies',
      'Direct reporting line to CEO/Board'
    ]
  },
  {
    id: 'resilience',
    name: 'Resilience',
    category: 'Business Continuity',
    objective: 'Rapid restoration of patient services after cyber events',
    color: 'emerald',
    icon: <TreePine className="h-5 w-5" />,
    implications: [
      'Requires robust Disaster Recovery (DR) plans',
      'Incident Response mechanisms must be tested quarterly',
      'Facilities must demonstrate rapid service restoration',
      'RTO/RPO metrics must be defined and achieved'
    ],
    requirements: [
      'DR plan tested quarterly with documented results',
      'RTO (Recovery Time Objective) < 4 hours for critical systems',
      'RPO (Recovery Point Objective) < 15 minutes for patient data',
      'Direct reporting line to DoH cybersecurity center'
    ]
  },
  {
    id: 'capabilities',
    name: 'Capabilities',
    category: 'Workforce Development',
    objective: 'Training, certifications, and awareness programs',
    color: 'denim',
    icon: <Users className="h-5 w-5" />,
    implications: [
      'IT staff must maintain specific security certifications',
      'Clinical staff undergo regular phishing simulations',
      'Security awareness training is mandatory annually',
      'Skills gap analysis must be conducted annually'
    ],
    requirements: [
      'IT staff: CCSP (cloud security), CISSP, or equivalent',
      'Quarterly phishing simulations for all staff',
      'Annual security awareness training (100% completion)',
      'Skills assessment and development plans'
    ]
  },
  {
    id: 'partnerships',
    name: 'Partnerships',
    category: 'Supply Chain Security',
    objective: 'Third-party vendor risk management and oversight',
    color: 'orange',
    icon: <Building2 className="h-5 w-5" />,
    implications: [
      'Healthcare entities responsible for supplier security posture',
      'Cloud providers must meet ISO 27001/27017/27018',
      'Medical device manufacturers assessed for cybersecurity',
      'Vendor contracts must include security SLAs'
    ],
    requirements: [
      'Vendor risk assessment before onboarding',
      'ISO certifications required for all cloud providers',
      'Medical device cybersecurity assessment',
      'Annual vendor security reviews'
    ]
  },
  {
    id: 'maturity',
    name: 'Maturity',
    category: 'Continuous Improvement',
    objective: 'Regular assessments and third-party audits',
    color: 'teal',
    icon: <Target className="h-5 w-5" />,
    implications: [
      'Regular self-assessments against ADHICS checklist',
      'Third-party audits validate compliance claims',
      'Progress measured against standard benchmarks',
      'Certification linked to medical license renewal'
    ],
    requirements: [
      'Annual self-assessment using ADHICS V2.0 checklist',
      'Third-party AAMEN audit for certification',
      'Improvement plans based on audit findings',
      'Benchmarking against peer institutions'
    ]
  },
  {
    id: 'innovation',
    name: 'Innovation',
    category: 'Secure Technology Adoption',
    objective: 'Security by Design for new technologies',
    color: 'fuchsia',
    icon: <Sparkles className="h-5 w-5" />,
    implications: [
      'AI implementation must follow "Security by Design" principles',
      'IoT devices must be assessed before deployment',
      'Telemedicine platforms require end-to-end encryption',
      'New tech requires privacy impact assessment'
    ],
    requirements: [
      'Privacy Impact Assessment (PIA) for all new tech',
      'Security review before AI/ML deployment',
      'IoT device security certification',
      'Telemedicine: AES-256 encryption minimum'
    ]
  }
]

const complianceTiers = [
  {
    id: 'basic',
    level: 'Tier 1',
    name: 'Basic Controls',
    target: 'Smaller entities (clinics, small practices)',
    color: 'denim',
    highlight: false,
    controls: [
      'Fundamental access controls',
      'Antivirus/endpoint protection',
      'Basic password policies',
      'Simple backup procedures'
    ]
  },
  {
    id: 'transitional',
    level: 'Tier 2',
    name: 'Transitional Controls',
    target: 'Mid-sized entities scaling operations',
    color: 'purple',
    highlight: true,
    controls: [
      'Enhanced authentication (MFA)',
      'Network segmentation',
      'Incident response procedures',
      'Vendor risk management'
    ]
  },
  {
    id: 'advanced',
    level: 'Tier 3',
    name: 'Advanced Controls',
    target: 'Large hospitals and critical infrastructure',
    color: 'rose',
    highlight: false,
    controls: [
      'Sophisticated continuous monitoring',
      'Red-teaming and penetration testing',
      'Advanced encryption (AES-256+)',
      'Security Operations Center (SOC)'
    ]
  }
]

const amenSteps = [
  {
    title: 'Self-Assessment',
    description: 'Entity assesses own controls against ADHICS V2.0 checklist',
    color: 'denim'
  },
  {
    title: 'Third-Party Audit',
    description: 'AAMEN-approved auditor validates the assessment',
    color: 'purple'
  },
  {
    title: 'Certification',
    description: 'DoH issues "Secure" (Fully Compliant) or "Safe" (Managing Risks) certificate',
    color: 'emerald'
  }
]

const cloudComparison = [
  {
    feature: 'Model',
    microsoft: 'Sovereign Public Cloud: Azure region wrapped in Core42 policy/encryption',
    oracle: 'Dedicated Region: Complete cloud region inside customer data center'
  },
  {
    feature: 'Primary Use Case',
    microsoft: 'AI & Analytics: Population Health, Biobank, Genomic Research, Jais LLM',
    oracle: 'Core HIE Infrastructure: Malaffi, High-performance transactional databases'
  },
  {
    feature: 'Strategic Partner',
    microsoft: 'Core42 / G42: Sovereign gatekeeper and operator',
    oracle: 'M42 / Malaffi: Primary tenant and operator'
  },
  {
    feature: 'Regulatory Status',
    microsoft: 'Approved: Validated by DoH MoUs and Biobank deployment',
    oracle: 'Approved: Validated by Malaffi and M42 critical infrastructure usage'
  }
]

const governanceSteps = [
  {
    title: 'Data Classification',
    description: 'Strictly separate "Health Data" from "Personal Data". Apply ADHICS to health data, Decree-Law 45 to personal data.',
    color: 'purple'
  },
  {
    title: 'Officer Appointments',
    description: 'Appoint CISO for ADHICS compliance and DPO for Federal Law requirements.',
    color: 'denim'
  },
  {
    title: 'Third-Party Audits',
    description: 'Engage AAMEN-approved auditor. Do not operate without valid "Safe" or "Secure" certificate - risks license suspension.',
    color: 'rose'
  }
]

const cloudAdoptionSteps = [
  {
    title: 'Select Approved Region',
    description: 'Ensure cloud workload provisioned in UAE North (Dubai) or UAE Central (Abu Dhabi) regions only.',
    color: 'denim'
  },
  {
    title: 'Sovereignty Verification',
    description: 'For critical patient data, prioritize M42/Core42 ecosystem. Verify SLA includes strict data residency prohibiting replication outside UAE.',
    color: 'teal'
  },
  {
    title: 'Malaffi Integration',
    description: 'Integration with Malaffi is NOT optional. Ensure EMR system is certified for Malaffi connectivity.',
    color: 'emerald'
  }
]

const cybersecurityControls = [
  {
    title: 'Encryption',
    description: 'Implement robust encryption for data at rest and in transit. Keys must be managed locally (supported by Sovereign Cloud offerings).',
    color: 'emerald'
  },
  {
    title: 'Multi-Factor Authentication',
    description: 'MFA is MANDATORY for all remote access to health information systems per ADHICS requirements.',
    color: 'denim'
  },
  {
    title: 'Incident Reporting',
    description: 'Establish direct reporting line to DoH cybersecurity center for suspected breaches (Resilience pillar requirement).',
    color: 'rose'
  }
]

const internationalComparisons = [
  {
    standard: 'ISO 27001',
    comparison: 'ADHICS borrows heavily from ISO management system structure (PDCA cycle) but adds specific clinical data controls and UAE sovereignty requirements.'
  },
  {
    standard: 'HIPAA (US)',
    comparison: 'Like HIPAA, ADHICS focuses on health data, but ADHICS is more prescriptive on WHERE data is stored (sovereignty). HIPAA is generally agnostic about location as long as BAA is in place.'
  },
  {
    standard: 'GDPR (EU)',
    comparison: 'ADHICS shares GDPR rigor on data subject rights (via Federal Law 45 alignment) but is STRICTER on data localization. GDPR allows transfers to "adequate" jurisdictions; ADHICS generally blocks transfers outside UAE without exemption.'
  }
]

// ============================================================================
// DATA: Existing System Governance Data
// ============================================================================

const roleOverview = [
  { name: 'Administrators', count: 5, description: 'Full system access', color: 'rose', icon: <Shield className="h-5 w-5" /> },
  { name: 'Editors', count: 12, description: 'Content management', color: 'purple', icon: <Edit className="h-5 w-5" /> },
  { name: 'Analysts', count: 18, description: 'Read and reports', color: 'denim', icon: <Search className="h-5 w-5" /> },
  { name: 'Viewers', count: 12, description: 'View only access', color: 'emerald', icon: <Eye className="h-5 w-5" /> },
]

const users = [
  { name: 'Dr. Sarah Al-Mansoori', email: 'sarah.almansoori@doh.gov.ae', role: 'Administrator', roleColor: 'rose', status: 'active', lastActive: '2 min ago', initials: 'SM' },
  { name: 'Ahmed Hassan', email: 'ahmed.hassan@doh.gov.ae', role: 'Editor', roleColor: 'purple', status: 'active', lastActive: '15 min ago', initials: 'AH' },
  { name: 'Fatima Al-Zahra', email: 'fatima.alzahra@doh.gov.ae', role: 'Analyst', roleColor: 'denim', status: 'active', lastActive: '1 hour ago', initials: 'FZ' },
  { name: 'Khalid Rahman', email: 'khalid.rahman@doh.gov.ae', role: 'Viewer', roleColor: 'emerald', status: 'active', lastActive: '3 hours ago', initials: 'KR' },
  { name: 'Aisha Al-Kaabi', email: 'aisha.alkaabi@doh.gov.ae', role: 'Analyst', roleColor: 'denim', status: 'inactive', lastActive: '2 days ago', initials: 'AK' },
  { name: 'Omar Saeed', email: 'omar.saeed@doh.gov.ae', role: 'Editor', roleColor: 'purple', status: 'active', lastActive: '30 min ago', initials: 'OS' },
]

const rolePermissions = [
  {
    name: 'Administrator',
    description: 'Full system access including user management',
    color: 'rose',
    icon: <Shield className="h-4 w-4" />,
    permissions: [
      { name: 'User Management', granted: true },
      { name: 'Content Publish', granted: true },
      { name: 'System Config', granted: true },
      { name: 'Audit Access', granted: true },
    ],
  },
  {
    name: 'Editor',
    description: 'Create and publish content',
    color: 'purple',
    icon: <Edit className="h-4 w-4" />,
    permissions: [
      { name: 'User Management', granted: false },
      { name: 'Content Publish', granted: true },
      { name: 'System Config', granted: false },
      { name: 'Audit Access', granted: false },
    ],
  },
  {
    name: 'Analyst',
    description: 'View reports and analytics',
    color: 'denim',
    icon: <Search className="h-4 w-4" />,
    permissions: [
      { name: 'User Management', granted: false },
      { name: 'Content Publish', granted: false },
      { name: 'System Config', granted: false },
      { name: 'Audit Access', granted: true },
    ],
  },
]

const auditLogs = [
  { action: 'User Login Successful', details: 'Dr. Sarah Al-Mansoori logged in from Abu Dhabi', user: 'sarah.almansoori', timestamp: '2 min ago', severity: 'low', icon: <UserCheck className="h-4 w-4" /> },
  { action: 'Content Published', details: 'Mental Health campaign published to 8 platforms', user: 'ahmed.hassan', timestamp: '15 min ago', severity: 'medium', icon: <CheckCircle2 className="h-4 w-4" /> },
  { action: 'Configuration Change', details: 'Geo-fence added for Cleveland Clinic', user: 'sarah.almansoori', timestamp: '1 hour ago', severity: 'medium', icon: <Settings className="h-4 w-4" /> },
  { action: 'Failed Login Attempt', details: '3 failed attempts from IP 192.168.1.100', user: 'unknown', timestamp: '2 hours ago', severity: 'high', icon: <AlertTriangle className="h-4 w-4" /> },
  { action: 'Report Generated', details: 'Weekly compliance report exported', user: 'fatima.alzahra', timestamp: '3 hours ago', severity: 'low', icon: <FileText className="h-4 w-4" /> },
  { action: 'User Added', details: 'New viewer account created for Khalid Rahman', user: 'sarah.almansoori', timestamp: '5 hours ago', severity: 'medium', icon: <UserPlus className="h-4 w-4" /> },
  { action: 'Security Scan Completed', details: 'Weekly vulnerability scan passed', user: 'system', timestamp: '6 hours ago', severity: 'low', icon: <Shield className="h-4 w-4" /> },
  { action: 'Permission Modified', details: 'Aisha Al-Kaabi access level changed', user: 'sarah.almansoori', timestamp: '1 day ago', severity: 'medium', icon: <UserCheck className="h-4 w-4" /> },
]

const securityMetrics = [
  { name: 'Identity Protection', value: 98, color: 'emerald' },
  { name: 'Data Encryption', value: 100, color: 'emerald' },
  { name: 'Network Security', value: 96, color: 'emerald' },
  { name: 'Access Control', value: 94, color: 'denim' },
]

const dataProtectionSettings = [
  { name: 'End-to-End Encryption', description: 'All data encrypted in transit and at rest', status: 'active' },
  { name: 'Data Anonymization', description: 'Personal data anonymized for analytics', status: 'active' },
  { name: 'Retention Policies', description: 'Automatic data deletion after retention period', status: 'active' },
  { name: 'Backup Encryption', description: 'All backups encrypted with separate keys', status: 'active' },
]

const securityPolicies = [
  {
    name: 'Password Policy',
    description: 'Minimum 12 characters, MFA required for admin access',
    lastUpdated: 'Jan 5, 2026',
    color: 'purple',
    icon: <Lock className="h-5 w-5" />,
  },
  {
    name: 'Access Review',
    description: 'Quarterly review of all user access and permissions',
    lastUpdated: 'Jan 1, 2026',
    color: 'denim',
    icon: <UserCheck className="h-5 w-5" />,
  },
  {
    name: 'Incident Response',
    description: 'Automated threat detection and response procedures',
    lastUpdated: 'Dec 28, 2025',
    color: 'rose',
    icon: <AlertTriangle className="h-5 w-5" />,
  },
  {
    name: 'Data Classification',
    description: 'Automatic classification and handling based on sensitivity',
    lastUpdated: 'Jan 3, 2026',
    color: 'emerald',
    icon: <Shield className="h-5 w-5" />,
  },
]

// File 10: Policy Resistance & Privacy Data
// Regulatory Sanctions Table
const regulatorySanctions = [
  {
    violation: 'Data Reporting',
    action: 'Temporary Closure until rectified',
    consequence: 'Revenue stop; Patient attrition',
    sentiment: 'High',
  },
  {
    violation: 'Insurance Billing',
    action: 'Fine (AED 1M); Network Exclusion',
    consequence: 'Insolvency; Market exit',
    sentiment: 'Critical',
  },
  {
    violation: 'Staff Licensing',
    action: 'Closure; Referral to Public Prosecution',
    consequence: 'Criminal record for management',
    sentiment: 'Critical',
  },
  {
    violation: 'Safety/Hygiene',
    action: 'Immediate Closure',
    consequence: 'Reputational damage',
    sentiment: 'Moderate',
  },
]

// ADHICS Cost Structure
const adhicsCostStructure = [
  {
    component: 'Initial Assessment',
    description: 'Scoping and Gap Analysis before implementation',
    cost: '$5K - $14K',
    impact: '~10-15% of monthly net profit for SME',
  },
  {
    component: 'Remediation & Implementation',
    description: 'Firewalls, encrypted servers, secure software, system updates',
    cost: '$14K - $20K',
    impact: 'Capital injection required',
  },
  {
    component: 'Continuous Monitoring',
    description: 'Annual compliance monitoring and maintenance',
    cost: '$3K - $14K/year',
    impact: 'Recurring operational expense',
  },
  {
    component: 'Penetration Testing',
    description: 'Security testing per IP/session',
    cost: '$1K - $2K per IP',
    impact: 'Recurring cash flow drain',
  },
  {
    component: 'External Consultant',
    description: 'MSSP for CISO function (SME cannot afford full-time)',
    cost: 'Market rates high',
    impact: 'Dependency on third-party vendors',
  },
]

// Consent Issues for Malaffi
const consentIssues = [
  {
    icon: <FileText className="h-4 w-4" />,
    title: 'High-Friction Opt-Out',
    description: 'Opting out not a simple toggle. Requires written submission/email to DSAR, or visiting facilities in person.',
    implication: 'Default state is "Surveillance." Agency effectively removed.',
  },
  {
    icon: <Shield className="h-4 w-4" />,
    title: '"Hotel California" Clause',
    description: 'Even if user opts out, data processed before opt-out is retained. Emergency access ("Break the Glass") allows providers to override.',
    implication: 'Consent is conditional and revocable by the system. Data remains accessible.',
  },
  {
    icon: <Database className="h-4 w-4" />,
    title: '"Forever" Data Retention',
    description: 'Medical data retained for up to 25 years after patient leaves UAE.',
    implication: 'Right to be Forgotten is effectively nullified.',
  },
]

// Malaffi Privacy Friction Analysis
const malaffiPrivacyAnalysis = [
  {
    feature: 'Consent Model',
    intent: '"Opt-Out" to ensure data completeness',
    friction: 'High Friction. Requires written submission/email to DSAR; no simple app toggle',
    implication: 'Default state is "Surveillance"',
    riskLevel: 'High',
  },
  {
    feature: 'Emergency Access',
    intent: '"Break the Glass" for life-saving access',
    friction: 'Override Mechanism. Providers can bypass user opt-out choice',
    implication: 'Consent is conditional and revocable by the system',
    riskLevel: 'Medium',
  },
  {
    feature: 'Employer Visibility',
    intent: 'Insurance cost control/risk management',
    friction: 'Leakage Vector. Aggregate "Health Scores" and Claims Reports reveal history',
    implication: 'Employers effectively audit employee health',
    riskLevel: 'High',
  },
  {
    feature: 'Data Retention',
    intent: 'Longitudinal health tracking (25 years)',
    friction: '"Forever" Data. Data remains long after resident leaves UAE',
    implication: 'Right to be Forgotten is effectively nullified',
    riskLevel: 'Medium',
  },
]

// Strategic Implications
const strategicImplications = [
  {
    icon: <Building2 className="h-5 w-5" />,
    title: 'The End of the Solo Practitioner',
    description: 'Economic model cannot support regulatory overhead. Era of independent "mom and pop" clinics ending.',
    forecastTitle: 'Market Bifurcation Prediction:',
    forecast: '1) Mega-Providers: State-backed giants (PureHealth, M42) and large private groups with centralized compliance. 2) Niche Luxury: High-end cash-only boutique clinics bypassing insurance regulations.',
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'The Rise of the "Super-Regulator"',
    description: 'DoH "Policeman" role evolving into AI-powered real-time oversight.',
    forecastTitle: 'Automated Enforcement:',
    forecast: 'Manual audits replaced by automated, API-driven compliance checks. Fines instantaneous and algorithmic. Reduces audit fatigue but increases risk of "algorithmic injustice" without human review.',
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'The Privacy Compromise',
    description: '"Privacy Paranoia" will settle into resigned acceptance. Population trades privacy for convenience and access.',
    forecastTitle: 'Volatile Fault Line:',
    forecast: 'Employer access issue remains explosive. If scandal erupts (e.g., corporation firing employees based on leaked Malaffi cancer data), could trigger crisis of confidence forcing privacy framework legislative overhaul.',
  },
]

// Helper function for sentiment color
function getSentimentColor(sentiment: string): 'rose' | 'orange' | 'gold' | 'denim' {
  const sentimentMap: Record<string, 'rose' | 'orange' | 'gold' | 'denim'> = {
    'Critical': 'rose',
    'High': 'orange',
    'Moderate': 'gold',
    'Low': 'denim',
  }
  return sentimentMap[sentiment] || 'denim'
}
