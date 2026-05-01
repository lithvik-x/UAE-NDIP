// Reddit Living Cost Section - Rent, utilities, salary requirements
// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Home,
  PiggyBank,
  Zap,
  GraduationCap,
  HeartPulse,
  Car,
  ShoppingCart,
} from 'lucide-react'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }

interface RentCost {
  propertyType: string
  location: string
  cost: string
}

interface MonthlyExpense {
  expense: string
  cost: string
}

interface SalaryRequirement {
  scenario: string
  requiredSalary: string
}

interface CostSavingMeasure {
  measure: string
  monthlySavings: string
}

interface DewaBill {
  propertyType: string
  monthlyCost: string
}

interface EducationCost {
  title: string
  date: string
  cost: string
  notes: string
}

interface HealthcareCost {
  title: string
  date: string
  cost: string
  notes: string
}

interface RedditLivingCostSectionProps {
  rentCosts?: RentCost[]
  monthlyExpenses?: MonthlyExpense[]
  salaryRequirements?: SalaryRequirement[]
  costSavingMeasures?: CostSavingMeasure[]
  normalDewaBills?: DewaBill[]
  abnormalDewaCases?: { issue: string; amount: string }[]
  educationCosts?: EducationCost[]
  healthcareCosts?: HealthcareCost[]
  sharjahCosts?: { metric: string; value: string }[]
}

export function RedditLivingCostSection({
  rentCosts = [],
  monthlyExpenses = [],
  salaryRequirements = [],
  costSavingMeasures = [],
  normalDewaBills = [],
  abnormalDewaCases = [],
  educationCosts = [],
  healthcareCosts = [],
  sharjahCosts = [],
}: RedditLivingCostSectionProps) {
  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
      <motion.div variants={fadeInUp}>
        <GlassPanel
          title="Living Cost Analysis"
          description="Rent, utilities, salary requirements, and cost-saving strategies"
        >
          <div className="space-y-6">
            {/* Rent Costs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-lg glass-card border-blue-500/30"
            >
              <CardHeader>
                <CardTitle className="text-lg text-blue-400 flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Rent Ranges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {rentCosts.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-4 rounded-lg border border-blue-500/20 bg-blue-500/5"
                    >
                      <p className="text-sm text-slate-400">{item.propertyType}</p>
                      <p className="text-xs text-slate-500">{item.location}</p>
                      <p className="text-xl font-bold text-blue-400 mt-1">{item.cost}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* DEWA Bills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-lg glass-card border-cyan-500/30"
            >
              <CardHeader>
                <CardTitle className="text-lg text-cyan-400 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  DEWA (Electricity/Water) Bills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-3">
                  {normalDewaBills.slice(0, 3).map((bill, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20 text-center">
                      <p className="text-sm text-slate-400">{bill.propertyType}</p>
                      <p className="text-2xl font-bold text-cyan-400">{bill.monthlyCost}</p>
                    </div>
                  ))}
                </div>
                {abnormalDewaCases.length > 0 && (
                  <div className="mt-4 p-4 rounded-lg bg-rose-500/5 border border-rose-500/20">
                    <p className="text-sm text-rose-400 font-semibold mb-2">Abnormal Cases:</p>
                    <div className="space-y-1">
                      {abnormalDewaCases.map((item, idx) => (
                        <p key={idx} className="text-sm text-slate-300">
                          <span className="text-rose-400">{item.issue}:</span> {item.amount}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </motion.div>

            {/* Monthly Expenses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-lg glass-card border-emerald-500/30"
            >
              <CardHeader>
                <CardTitle className="text-lg text-emerald-400 flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Monthly Expenses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {monthlyExpenses.map((expense, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center justify-between p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5"
                    >
                      <span className="text-sm text-slate-300">{expense.expense}</span>
                      <span className="font-bold text-emerald-400">{expense.cost}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* Salary Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-lg glass-card border-purple-500/30"
            >
              <CardHeader>
                <CardTitle className="text-lg text-purple-400 flex items-center gap-2">
                  <PiggyBank className="h-5 w-5" />
                  Salary Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-3">
                  {salaryRequirements.map((req, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-4 rounded-lg border border-purple-500/20 bg-purple-500/5"
                    >
                      <p className="text-sm text-slate-400">{req.scenario}</p>
                      <p className="text-xl font-bold text-purple-400 mt-1">{req.requiredSalary}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* Cost Saving Measures */}
            {costSavingMeasures.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-6 rounded-lg glass-card border-teal-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-teal-400 flex items-center gap-2">
                    <Car className="h-5 w-5" />
                    Cost Saving Measures
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {costSavingMeasures.map((measure, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-teal-500/20 bg-teal-500/5"
                      >
                        <span className="text-sm text-slate-300">{measure.measure}</span>
                        <Badge variant="outline" className="border-teal-500/30 text-teal-400">
                          {measure.monthlySavings}/mo
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.div>
            )}

            {/* Education Costs */}
            {educationCosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-lg glass-card border-amber-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-amber-400 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Education Costs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {educationCosts.slice(0, 5).map((edu, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start justify-between p-3 rounded-lg border border-amber-500/20 bg-amber-500/5"
                      >
                        <div>
                          <p className="font-medium text-slate-200 text-sm">{edu.title}</p>
                          <p className="text-xs text-slate-400 mt-1">{edu.notes}</p>
                        </div>
                        <Badge variant="outline" className="border-amber-500/30 text-amber-400 ml-2">
                          {edu.cost}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.div>
            )}

            {/* Healthcare Costs */}
            {healthcareCosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="p-6 rounded-lg glass-card border-pink-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-pink-400 flex items-center gap-2">
                    <HeartPulse className="h-5 w-5" />
                    Healthcare Costs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {healthcareCosts.slice(0, 4).map((hc, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start justify-between p-3 rounded-lg border border-pink-500/20 bg-pink-500/5"
                      >
                        <div>
                          <p className="font-medium text-slate-200 text-sm">{hc.title}</p>
                          <p className="text-xs text-slate-400 mt-1">{hc.notes}</p>
                        </div>
                        <Badge variant="outline" className="border-pink-500/30 text-pink-400 ml-2">
                          {hc.cost}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.div>
            )}

            {/* Sharjah Costs */}
            {sharjahCosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="p-6 rounded-lg glass-card border-indigo-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-indigo-400 flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    Sharjah Cost of Living
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {sharjahCosts.map((cost, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-3 rounded-lg border border-indigo-500/20 bg-indigo-500/5 text-center"
                      >
                        <p className="text-sm text-slate-400">{cost.metric}</p>
                        <p className="text-lg font-bold text-indigo-400 mt-1">{cost.value}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.div>
            )}
          </div>
        </GlassPanel>
      </motion.div>
    </motion.div>
  )
}

export default RedditLivingCostSection
