import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dashboard | UAE National Digital Intelligence Platform',
  description: 'Clairvoyance-CX dashboard — access all ten intelligence sections for UAE Federal decision-makers.',
}

export default function DashboardIndexPage() {
  redirect('/dashboard/entity/overview')
}
