import { Metadata } from 'next'
import { GlassPanel } from '@/components/ui/glass-panel'

export const metadata: Metadata = {
  title: 'Privacy Policy | LITHVIK NEXUS',
  description: 'Privacy policy for LITHVIK NEXUS healthcare intelligence platform.',
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-platinum-900 mb-4">Privacy Policy</h1>
        <p className="text-platinum-600">Last updated: January 14, 2026</p>
      </div>

      <div className="space-y-6">
        <GlassPanel className="p-8">
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">1. Information We Collect</h2>
          <p className="text-platinum-700 mb-4">
            LITHVIK NEXUS collects and processes healthcare-related data as part of our enterprise intelligence platform.
            We are committed to protecting your privacy and ensuring data security in accordance with international standards.
          </p>
          <h3 className="text-xl font-semibold text-platinum-900 mb-2">Data Types</h3>
          <ul className="list-disc list-inside text-platinum-700 space-y-2">
            <li>Healthcare analytics and metrics</li>
            <li>Platform usage data</li>
            <li>System configuration and preferences</li>
            <li>Communications and support interactions</li>
          </ul>
        </GlassPanel>

        <GlassPanel className="p-8">
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">2. Data Storage & Security</h2>
          <p className="text-platinum-700 mb-4">
            All customer data is stored in Azure UAE North (Abu Dhabi), ensuring complete data sovereignty.
            Our platform maintains the following security certifications:
          </p>
          <ul className="list-disc list-inside text-platinum-700 space-y-2">
            <li>SOC 2 Type II</li>
            <li>ISO 27001</li>
            <li>ADHICS v2.0 compliance</li>
            <li>UAE Federal Decree-Law No. 45 of 2021 compliance</li>
          </ul>
        </GlassPanel>

        <GlassPanel className="p-8">
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">3. Data Usage</h2>
          <p className="text-platinum-700 mb-4">
            We use collected data to provide healthcare intelligence, analytics, and monitoring services.
            Your data is never used to train our AI models (No-Train Guarantee).
          </p>
        </GlassPanel>

        <GlassPanel className="p-8">
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">4. Data Sharing</h2>
          <p className="text-platinum-700 mb-4">
            We do not sell, trade, or rent your personal identification information to others.
            Data may only be shared with:
          </p>
          <ul className="list-disc list-inside text-platinum-700 space-y-2">
            <li>Authorized healthcare providers (with consent)</li>
            <li>Regulatory authorities (when required by law)</li>
            <li>Third-party service providers (under strict data processing agreements)</li>
          </ul>
        </GlassPanel>

        <GlassPanel className="p-8">
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">5. Your Rights</h2>
          <p className="text-platinum-700 mb-4">
            Under UAE data protection law and GDPR, you have the right to:
          </p>
          <ul className="list-disc list-inside text-platinum-700 space-y-2">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Request data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </GlassPanel>

        <GlassPanel className="p-8">
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">6. Contact Us</h2>
          <p className="text-platinum-700 mb-4">
            For any privacy-related questions or concerns, please contact us at:
          </p>
          <div className="bg-platinum-50 p-4 rounded-lg">
            <p className="text-platinum-900 font-medium">Email: privacy@lithviknexus.com</p>
            <p className="text-platinum-900 font-medium">Location: Abu Dhabi, UAE</p>
          </div>
        </GlassPanel>
      </div>
    </div>
  )
}
