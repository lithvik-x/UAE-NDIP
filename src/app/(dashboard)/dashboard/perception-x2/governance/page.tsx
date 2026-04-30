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
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  Gauge,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  Brain,
  CheckCircle2,
  Eye,
  FileText,
  Globe,
  Gavel,
  Lock,
  MoreHorizontal,
  RefreshCw,
  Scale,
  Search,
  Shield,
  ShieldCheck,
  UserCheck,
  Users,
  Zap,
} from 'lucide-react'
import { perceptionData } from '@/lib/data-loader'

export default function GovernancePage() {
  // Extract real data from data loader
  const { regulatoryCompliance, supplyChain } = perceptionData.governance
  // Compliance trend data
  const complianceTrendData = [
    { month: 'Aug', score: 95, audits: 12, violations: 5 },
    { month: 'Sep', score: 96, audits: 15, violations: 3 },
    { month: 'Oct', score: 97, audits: 14, violations: 2 },
    { month: 'Nov', score: 97, audits: 18, violations: 2 },
    { month: 'Dec', score: 98, audits: 16, violations: 1 },
    { month: 'Jan', score: 99, audits: 15, violations: 1 },
  ]

  // Ethics review categories
  const ethicsReviewData = [
    { category: 'Data Privacy', reviews: 45, approved: 42, pending: 3 },
    { category: 'Content Accuracy', reviews: 38, approved: 35, pending: 3 },
    { category: 'Bias Detection', reviews: 28, approved: 26, pending: 2 },
    { category: 'Transparency', reviews: 22, approved: 20, pending: 2 },
    { category: 'Accountability', reviews: 23, approved: 21, pending: 2 },
  ]

  // Audit completion rates
  const auditCompletionData = [
    { audit: 'ADHICS Compliance', completed: 145, pending: 5, overdue: 1 },
    { audit: 'Data Protection', completed: 152, pending: 3, overdue: 0 },
    { audit: 'Content Ethics', completed: 138, pending: 8, overdue: 2 },
    { audit: 'AI Ethics', completed: 125, pending: 10, overdue: 1 },
  ]

  // Risk assessment
  const riskAssessmentData = [
    { category: 'Data Privacy', risk: 15, mitigation: 88 },
    { category: 'Algorithmic Bias', risk: 22, mitigation: 82 },
    { category: 'Content Accuracy', risk: 12, mitigation: 92 },
    { category: 'User Consent', risk: 8, mitigation: 95 },
    { category: 'Transparency', risk: 18, mitigation: 85 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="indigo" className="mb-2">PERCEPTION-X2</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-indigo">Ethical Governance Layer</h1>
          <p className="mt-2 text-slate-600">
            Regulatory compliance and ethical AI framework
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <FileText className="h-4 w-4" />
            Documentation
          </Button>
          <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
            <ShieldCheck className="h-4 w-4" />
            Run Audit
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Compliance Score"
          value="98.7%"
          previousValue={97.2}
          icon={<ShieldCheck className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Ethics Reviews"
          value="156"
          previousValue={142}
          icon={<Scale className="h-6 w-6" />}
          gradient="purple"
        />
        <MetricCard
          title="Open Cases"
          value="3"
          previousValue={5}
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Approvals Pending"
          value="8"
          previousValue={12}
          icon={<UserCheck className="h-6 w-6" />}
          gradient="denim"
        />
      </div>

      <Tabs defaultValue="compliance" className="space-y-6">
        <TabsList className="glass-panel">
          <TabsTrigger value="compliance">Regulatory Compliance</TabsTrigger>
          <TabsTrigger value="ethical">Ethical Framework</TabsTrigger>
          <TabsTrigger value="approvals">Approvals & Reviews</TabsTrigger>
          <TabsTrigger value="audit">Audit Trail</TabsTrigger>
        </TabsList>

        {/* Regulatory Compliance */}
        <TabsContent value="compliance" className="space-y-6">
          {/* Compliance Analytics Dashboard */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Overall Compliance Score</CardTitle>
                <CardDescription>Current compliance level</CardDescription>
              </CardHeader>
              <CardContent>
                <Gauge value={99} max={100} label="Compliance Score" height={220} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Compliance Trend</CardTitle>
                <CardDescription>6-month score and violations</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart
                  data={complianceTrendData}
                  xAxisKey="month"
                  lines={[
                    { dataKey: 'score', name: 'Compliance %', color: CHART_COLORS.emerald },
                    { dataKey: 'violations', name: 'Violations', color: CHART_COLORS.rose },
                  ]}
                  height={220}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Regulatory Compliance Dashboard" description="Monitor adherence to healthcare communication regulations" badge="Compliant">
            <div className="space-y-6">
              {/* Compliance Overview */}
              <Card className="glass-card border-emerald-200 bg-emerald-50/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white">
                      <ShieldCheck className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <div className="text-2xl font-extrabold text-emerald-700">98.7% Compliant</div>
                      <div className="text-sm text-emerald-600 mt-1">All regulatory requirements met</div>
                    </div>
                    <Button variant="outline" className="gap-2">
                      <RefreshCw className="h-4 w-4" />
                      Refresh Status
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Compliance Areas */}
              <div className="grid gap-6 lg:grid-cols-2">
                {complianceAreas.map((area, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-${area.color} text-white`}>
                            {area.icon}
                          </div>
                          <div>
                            <CardTitle className="text-base">{area.name}</CardTitle>
                            <CardDescription className="text-xs">{area.framework}</CardDescription>
                          </div>
                        </div>
                        <Badge variant={area.status === 'compliant' ? 'success' : 'warning'} className="text-xs">
                          {area.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Compliance Score</span>
                          <span className="font-semibold text-slate-900">{area.score}%</span>
                        </div>
                        <Progress value={area.score} className="h-2" />
                        <div className="space-y-2">
                          {area.checks.map((check, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs">
                              {check.passed ? (
                                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                              ) : (
                                <AlertCircle className="h-4 w-4 text-amber-500" />
                              )}
                              <span className={check.passed ? 'text-slate-700' : 'text-amber-700'}>{check.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Ethical Framework */}
        <TabsContent value="ethical" className="space-y-6">
          <GlassPanel title="Ethical AI Framework" description="Responsible use guidelines for PERCEPTION-X2">
            <div className="space-y-6">
              {/* Ethical Principles */}
              <div className="grid gap-6 lg:grid-cols-2">
                {ethicalPrinciples.map((principle, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-${principle.color} text-white`}>
                          {principle.icon}
                        </div>
                        <div>
                          <CardTitle className="text-base">{principle.name}</CardTitle>
                          <CardDescription className="text-xs">{principle.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {principle.guidelines.map((guideline, i) => (
                          <div key={i} className="flex items-start gap-2 rounded-lg bg-slate-50/50 p-2">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700">{guideline}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-slate-200">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-500">Adherence</span>
                          <span className="font-semibold text-emerald-600">{principle.adherence}%</span>
                        </div>
                        <Progress value={principle.adherence} className="h-1.5 mt-1" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Prohibited Uses */}
              <Card className="glass-card border-rose-200 bg-rose-50/30">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-rose-500" />
                    <CardTitle className="text-lg">Prohibited Uses</CardTitle>
                  </div>
                  <CardDescription>Uses that are never permitted under the ethical framework</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {prohibitedUses.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 rounded-lg bg-white/50 p-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                          <Gavel className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                          <div className="text-xs text-slate-600 mt-1">{item.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Approvals & Reviews */}
        <TabsContent value="approvals" className="space-y-6">
          <GlassPanel title="Approvals & Reviews" description="Ethics review workflow and approval tracking">
            <div className="space-y-6">
              {/* Approval Stats */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-slate-900">156</div>
                    <div className="text-sm text-slate-600 mt-1">Reviews Completed</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-amber-600">8</div>
                    <div className="text-sm text-slate-600 mt-1">Pending Review</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-emerald-600">94.2%</div>
                    <div className="text-sm text-slate-600 mt-1">Approval Rate</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-purple-600">2.4h</div>
                    <div className="text-sm text-slate-600 mt-1">Avg. Review Time</div>
                  </CardContent>
                </Card>
              </div>

              {/* Pending Approvals */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Pending Ethics Reviews</CardTitle>
                      <CardDescription>Items awaiting ethical review</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">View All</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pendingReviews.map((item, index) => (
                      <div key={index} className="flex items-start gap-4 rounded-lg bg-amber-50/50 border border-amber-200 p-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-white">
                          <Scale className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-slate-900">{item.title}</h4>
                              <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                              <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
                                <span>Type: {item.type}</span>
                                <span>•</span>
                                <span>Submitted: {item.submitted}</span>
                                <span>•</span>
                                <span>Reviewer: {item.reviewer}</span>
                              </div>
                            </div>
                            <Badge variant={item.priority === 'high' ? 'destructive' : 'warning'} className="shrink-0 text-xs">
                              {item.priority}
                            </Badge>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="gap-1 shrink-0">
                          <Eye className="h-3 w-3" />
                          Review
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Review History */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Review History</CardTitle>
                  <CardDescription>Completed ethics reviews</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-80">
                    <div className="space-y-3 pr-4">
                      {reviewHistory.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 rounded-lg bg-slate-50/50 p-3">
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                            item.decision === 'approved' ? 'bg-emerald-100 text-emerald-600' :
                            item.decision === 'conditional' ? 'bg-amber-100 text-amber-600' :
                            'bg-rose-100 text-rose-600'
                          }`}>
                            {item.decision === 'approved' ? <CheckCircle2 className="h-5 w-5" /> :
                             item.decision === 'conditional' ? <AlertTriangle className="h-5 w-5" /> :
                             <Gavel className="h-5 w-5" />}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-slate-900">{item.title}</div>
                            <div className="text-xs text-slate-500">Reviewed by {item.reviewer} • {item.date}</div>
                          </div>
                          <Badge variant={item.decision === 'approved' ? 'success' : item.decision === 'conditional' ? 'warning' : 'destructive'} className="text-xs">
                            {item.decision}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Audit Trail */}
        <TabsContent value="audit" className="space-y-6">
          <GlassPanel title="Comprehensive Audit Trail" description="Complete log of all governance activities">
            <div className="space-y-6">
              {/* Audit Stats */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-slate-900">24.5K</div>
                    <div className="text-sm text-slate-600 mt-1">Total Events</div>
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

              {/* Audit Log */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Governance Audit Log</CardTitle>
                      <CardDescription>Complete activity history</CardDescription>
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
                      {auditLog.map((entry, index) => (
                        <div key={index} className={`flex items-start gap-4 rounded-lg border-l-4 bg-slate-50/50 p-3 ${
                          entry.severity === 'critical' ? 'border-rose-500' :
                          entry.severity === 'high' ? 'border-amber-500' :
                          'border-emerald-500'
                        }`}>
                          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                            entry.severity === 'critical' ? 'bg-rose-100 text-rose-600' :
                            entry.severity === 'high' ? 'bg-amber-100 text-amber-600' :
                            'bg-emerald-100 text-emerald-600'
                          }`}>
                            {entry.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <div className="text-sm font-medium text-slate-900">{entry.action}</div>
                                <div className="text-xs text-slate-600">{entry.details}</div>
                                <div className="mt-1 text-xs text-slate-500">{entry.user} • {entry.timestamp}</div>
                              </div>
                              <Badge variant={entry.severity === 'critical' ? 'destructive' : entry.severity === 'high' ? 'warning' : 'success'} className="text-xs">
                                {entry.severity}
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
      </Tabs>
    </div>
  )
}

// Data
const complianceAreas = [
  {
    name: 'Health Advertising Compliance',
    framework: 'UAE Health Advertising Laws',
    score: 99,
    status: 'compliant',
    color: 'emerald',
    icon: <Shield className="h-5 w-5" />,
    checks: [
      { name: 'Medical claims verified', passed: true },
      { name: 'Disclaimers displayed', passed: true },
      { name: 'Professional oversight', passed: true },
      { name: 'Evidence-based content', passed: true },
    ],
  },
  {
    name: 'Data Privacy Standards',
    framework: 'UAE Data Protection Law',
    score: 98,
    status: 'compliant',
    color: 'purple',
    icon: <Lock className="h-5 w-5" />,
    checks: [
      { name: 'Consent management', passed: true },
      { name: 'Data minimization', passed: true },
      { name: 'Right to deletion', passed: true },
      { name: 'Breach notification', passed: true },
    ],
  },
  {
    name: 'AI Ethics Compliance',
    framework: 'UAE AI Ethics Guidelines',
    score: 97,
    status: 'compliant',
    color: 'denim',
    icon: <Brain className="h-5 w-5" />,
    checks: [
      { name: 'Bias monitoring', passed: true },
      { name: 'Transparency', passed: true },
      { name: 'Human oversight', passed: true },
      { name: 'Accountability', passed: true },
    ],
  },
  {
    name: 'Social Media Ethics',
    framework: 'Platform-Specific Policies',
    score: 96,
    status: 'review',
    color: 'amber',
    icon: <Globe className="h-5 w-5" />,
    checks: [
      { name: 'Content moderation', passed: true },
      { name: 'User protection', passed: true },
      { name: 'Platform guidelines', passed: false },
      { name: 'Community standards', passed: true },
    ],
  },
]

const ethicalPrinciples = [
  {
    name: 'Fairness & Non-Discrimination',
    description: 'Ensure equitable treatment across all audience segments',
    color: 'emerald',
    icon: <Scale className="h-5 w-5" />,
    adherence: 96,
    guidelines: [
      'Regular bias audits conducted',
      'Fairness metrics monitored',
      'Equal access to healthcare information',
      'No discriminatory targeting practices',
    ],
  },
  {
    name: 'Transparency',
    description: 'Clear disclosure of AI-generated content and data sources',
    color: 'denim',
    icon: <Eye className="h-5 w-5" />,
    adherence: 94,
    guidelines: [
      'AI-generated content labeled',
      'Data sources disclosed',
      'Methodology documented',
      'Limitations communicated',
    ],
  },
  {
    name: 'Human Oversight',
    description: 'Critical decisions require human approval',
    color: 'purple',
    icon: <Users className="h-5 w-5" />,
    adherence: 98,
    guidelines: [
      'Human-in-the-loop for campaigns',
      'Expert review for medical content',
      'Manual approval for crisis response',
      'Stakeholder consultation required',
    ],
  },
  {
    name: 'Privacy by Design',
    description: 'Minimal data collection with strong protections',
    color: 'rose',
    icon: <Lock className="h-5 w-5" />,
    adherence: 97,
    guidelines: [
      'Data minimization practiced',
      'Purpose limitation enforced',
      'Storage limitation applied',
      'Security measures implemented',
    ],
  },
]

const prohibitedUses = [
  {
    title: 'Political Manipulation',
    description: 'Using the platform for political purposes without oversight',
  },
  {
    title: 'Vulnerable Population Exploitation',
    description: 'Targeting or taking advantage of vulnerable groups',
  },
  {
    title: 'Deceptive Content Creation',
    description: 'Generating deepfakes or intentionally misleading information',
  },
  {
    title: 'Coercive Persuasion',
    description: 'Using psychological manipulation to override autonomy',
  },
  {
    title: 'Harassment Campaigns',
    description: 'Coordinated attacks on individuals or groups',
  },
  {
    title: 'Unauthorized Surveillance',
    description: 'Monitoring individuals without proper authorization',
  },
]

const pendingReviews = [
  {
    title: 'Micro-Targeted Mental Health Ads',
    description: 'Campaign targeting specific demographics with mental health messaging',
    type: 'Campaign',
    priority: 'high',
    submitted: 'Jan 10, 2026',
    reviewer: 'Dr. Sarah Al-Mansoori',
  },
  {
    title: 'Predictive Health Risk Modeling',
    description: 'AI model predicting individual health risks for targeted outreach',
    type: 'Algorithm',
    priority: 'high',
    submitted: 'Jan 9, 2026',
    reviewer: 'Ethics Committee',
  },
  {
    title: 'Influencer Content Guidelines',
    description: 'Update to influencer partnership disclosure requirements',
    type: 'Policy',
    priority: 'medium',
    submitted: 'Jan 8, 2026',
    reviewer: 'Legal Team',
  },
  {
    title: 'WhatsApp Monitoring Expansion',
    description: 'Proposed expansion of dark social monitoring capabilities',
    type: 'Feature',
    priority: 'medium',
    submitted: 'Jan 7, 2026',
    reviewer: 'Dr. Farida Al Hosani',
  },
]

const reviewHistory = [
  { title: 'Vaccine Education Campaign', decision: 'approved', reviewer: 'Dr. Sarah Al-Mansoori', date: 'Jan 5, 2026' },
  { title: 'Insurance Complaint Response Bot', decision: 'conditional', reviewer: 'Ethics Committee', date: 'Jan 4, 2026' },
  { title: 'Healthcare Provider Ratings', decision: 'approved', reviewer: 'Legal Team', date: 'Jan 3, 2026' },
  { title: 'Predictive Crisis Detection', decision: 'approved', reviewer: 'Dr. Farida Al Hosani', date: 'Jan 2, 2026' },
  { title: 'Personalized Nutrition Recommendations', decision: 'rejected', reviewer: 'Ethics Committee', date: 'Dec 28, 2025' },
]

const auditLog = [
  { action: 'Compliance Check Passed', details: 'Health Advertising Compliance audit completed successfully', user: 'System', timestamp: '5 min ago', severity: 'low', icon: <CheckCircle2 className="h-4 w-4" /> },
  { action: 'Ethics Review Requested', details: 'New campaign submitted for ethical review', user: 'Ahmed Hassan', timestamp: '15 min ago', severity: 'medium', icon: <Scale className="h-4 w-4" /> },
  { action: 'Data Access Logged', details: 'User accessed audience analytics data', user: 'Dr. Sarah Al-Mansoori', timestamp: '1 hour ago', severity: 'low', icon: <Eye className="h-4 w-4" /> },
  { action: 'Policy Update Approved', details: 'Social media ethics guidelines updated', user: 'Legal Team', timestamp: '2 hours ago', severity: 'medium', icon: <FileText className="h-4 w-4" /> },
  { action: 'Unusual Access Pattern', details: 'Multiple failed login attempts detected', user: 'System', timestamp: '3 hours ago', severity: 'high', icon: <AlertTriangle className="h-4 w-4" /> },
  { action: 'AI Model Training Logged', details: 'NLA model retraining completed', user: 'System', timestamp: '5 hours ago', severity: 'low', icon: <Brain className="h-4 w-4" /> },
  { action: 'Consent Record Updated', details: 'User consent preferences modified', user: 'Fatima Al-Zahra', timestamp: '6 hours ago', severity: 'low', icon: <UserCheck className="h-4 w-4" /> },
  { action: 'Regulatory Alert', details: 'New UAE data protection regulation identified', user: 'Compliance Monitor', timestamp: '1 day ago', severity: 'medium', icon: <AlertCircle className="h-4 w-4" /> },
]
