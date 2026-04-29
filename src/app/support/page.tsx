import { Metadata } from 'next'
import { GlassPanel } from '@/components/ui/glass-panel'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Support Center | LITHVIK NEXUS',
  description: 'Get help and support for LITHVIK NEXUS healthcare intelligence platform.',
}

const supportCategories = [
  {
    title: 'Getting Started',
    icon: '🚀',
    items: [
      'Platform overview and navigation',
      'Setting up your dashboard',
      'Understanding the three-platform ecosystem',
      'First-time configuration',
    ],
  },
  {
    title: 'Platform Features',
    icon: '⚡',
    items: [
      'CLAIRVOYANCE-CX monitoring setup',
      'PERCEPTION-X2 analysis tools',
      'RICOCHET-CATALYST-X distribution',
      'Integration configurations',
    ],
  },
  {
    title: 'Technical Issues',
    icon: '🔧',
    items: [
      'Troubleshooting connection issues',
      'Data synchronization problems',
      'API access and authentication',
      'Performance optimization',
    ],
  },
  {
    title: 'Security & Compliance',
    icon: '🔒',
    items: [
      'ADHICS v2.0 compliance guide',
      'Data privacy and security',
      'Access control setup',
      'Audit logs and monitoring',
    ],
  },
]

const faqs = [
  {
    q: 'What is the LITHVIK NEXUS platform?',
    a: 'LITHVIK NEXUS is an integrated three-platform healthcare intelligence suite designed for Abu Dhabi healthcare sector. It combines CLAIRVOYANCE-CX (detection), PERCEPTION-X2 (analysis), and RICOCHET-CATALYST-X (action) for comprehensive healthcare analytics.',
  },
  {
    q: 'How do I access the different modules?',
    a: 'Use the navigation menu, press ⌘K (Cmd+K) to open the command palette, or use the quick navigation links in the Executive Bridge dashboard.',
  },
  {
    q: 'Where is my data stored?',
    a: 'All customer data is stored in Azure UAE North (Abu Dhabi), ensuring complete data sovereignty and compliance with UAE data protection laws.',
  },
  {
    q: 'What security certifications does the platform have?',
    a: 'Our platform maintains SOC 2 Type II, ISO 27001, and ADHICS v2.0 compliance certifications.',
  },
  {
    q: 'How do I export my data?',
    a: 'Use the Export button in any dashboard module to export data in CSV, JSON, PDF, or PNG formats.',
  },
]

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-platinum-900 mb-4">Support Center</h1>
        <p className="text-xl text-platinum-600 max-w-2xl mx-auto">
          Find answers, get help, and connect with our support team
        </p>
      </div>

      {/* Quick Help */}
      <div className="mb-12">
        <GlassPanel className="p-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">Quick Help</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Button
              variant="outline"
              className="h-auto flex-col gap-3 p-6"
            >
              <span className="text-4xl">📖</span>
              <div className="text-center">
                <div className="font-semibold">Documentation</div>
                <div className="text-xs text-platinum-500">Browse guides</div>
              </div>
            </Button>
            <Button
              variant="outline"
              className="h-auto flex-col gap-3 p-6"
            >
              <span className="text-4xl">💬</span>
              <div className="text-center">
                <div className="font-semibold">Live Chat</div>
                <div className="text-xs text-platinum-500">Available 24/7</div>
              </div>
            </Button>
            <Button
              variant="outline"
              className="h-auto flex-col gap-3 p-6"
            >
              <span className="text-4xl">📧</span>
              <div className="text-center">
                <div className="font-semibold">Email Support</div>
                <div className="text-xs text-platinum-500">Response within 24h</div>
              </div>
            </Button>
          </div>
        </GlassPanel>
      </div>

      {/* Support Categories */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-navy-900 mb-6">Support Categories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {supportCategories.map((category) => (
            <GlassPanel key={category.title} className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">{category.icon}</div>
                <h3 className="text-xl font-semibold text-navy-900">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-platinum-700 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassPanel>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-navy-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <GlassPanel key={idx} className="p-6">
              <h3 className="text-lg font-semibold text-navy-900 mb-2">{faq.q}</h3>
              <p className="text-platinum-700">{faq.a}</p>
            </GlassPanel>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div>
        <GlassPanel className="p-8 bg-gradient-to-br from-navy-50 to-indigo-50">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Still need help?</h2>
          <p className="text-platinum-700 mb-6">
            Our support team is available 24/7 to assist you with any questions or issues.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-sm text-platinum-500 mb-1">Email</div>
              <div className="font-semibold text-navy-900">support@lithviknexus.com</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-sm text-platinum-500 mb-1">Phone</div>
              <div className="font-semibold text-navy-900">+971 2 XXX XXXX</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-sm text-platinum-500 mb-1">Location</div>
              <div className="font-semibold text-navy-900">Abu Dhabi, UAE</div>
            </div>
          </div>
        </GlassPanel>
      </div>
    </div>
  )
}
