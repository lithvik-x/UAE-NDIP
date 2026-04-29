'use client'

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  Plus,
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Key,
  CreditCard,
  Users,
  Building,
  Clock,
  Lock,
  Mail,
  Smartphone,
  Monitor,
  CheckCircle2,
  AlertTriangle,
  Settings,
  RefreshCw,
  Save,
  Eye,
  Edit,
  EyeOff,
  ToggleLeft,
  ToggleRight
} from 'lucide-react'

export default function SettingsPage() {
  const user = {
    name: 'Dr. Sarah Al Mansoori',
    email: 'sarah.almansoori@adphc.gov.ae',
    role: 'Platform Administrator',
    department: 'Digital Health',
    avatar: '/api/placeholder/40/40'
  }

  const notifications = [
    { type: 'email', name: 'Email Notifications', enabled: true },
    { type: 'push', name: 'Push Notifications', enabled: true },
    { type: 'sms', name: 'SMS Alerts', enabled: false },
    { type: 'slack', name: 'Slack Integration', enabled: true },
    { type: 'teams', name: 'Microsoft Teams', enabled: false }
  ]

  const securitySettings = [
    { name: 'Two-Factor Authentication', status: 'enabled', lastUpdated: '2025-06-10' },
    { name: 'Session Timeout', status: '30 minutes', lastUpdated: '2025-06-01' },
    { name: 'Login Alerts', status: 'enabled', lastUpdated: '2025-06-10' },
    { name: 'IP Whitelist', status: 'configured', lastUpdated: '2025-05-15' }
  ]

  const appearanceSettings = [
    { name: 'Theme', value: 'Light', options: ['Light', 'Dark', 'System'] },
    { name: 'Font Size', value: 'Medium', options: ['Small', 'Medium', 'Large'] },
    { name: 'Density', value: 'Comfortable', options: ['Compact', 'Comfortable', 'Spacious'] },
    { name: 'Accent Color', value: 'Indigo', options: ['Indigo', 'Cyan', 'Purple', 'Rose'] }
  ]

  const integrations = [
    { name: 'LinkedIn', status: 'connected', lastSync: '2 mins ago' },
    { name: 'X/Twitter', status: 'connected', lastSync: '5 mins ago' },
    { name: 'Instagram', status: 'connected', lastSync: '10 mins ago' },
    { name: 'Facebook', status: 'connected', lastSync: '15 mins ago' },
    { name: 'TikTok', status: 'rate-limited', lastSync: '1 hour ago' },
    { name: 'Google Analytics', status: 'connected', lastSync: 'Real-time' }
  ]

  const teamMembers = [
    { name: 'Dr. Sarah Al Mansoori', role: 'Admin', status: 'active', lastActive: 'Now' },
    { name: 'Ahmed Khalil', role: 'Editor', status: 'active', lastActive: '5 mins ago' },
    { name: 'Fatima Al Hosani', role: 'Viewer', status: 'active', lastActive: '2 hours ago' },
    { name: 'Omar Hassan', role: 'Editor', status: 'inactive', lastActive: '2 days ago' }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid grid-cols-2 lg:grid-cols-6 w-full">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Profile Information</h3>
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>

            <div className="flex items-start gap-6 mb-6">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold">
                {user.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-muted-foreground">{user.email}</p>
                <div className="flex gap-2 mt-3">
                  <Badge variant="default">{user.role}</Badge>
                  <Badge variant="outline">{user.department}</Badge>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{user.email}</p>
                  <Button variant="link" className="p-0 h-auto mt-2" size="sm">Change email</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    Department
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{user.department}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Role
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{user.role}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Member Since
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>January 2024</p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Alert className="border-cyan-500 bg-cyan-50 dark:bg-cyan-950">
            <Bell className="h-4 w-4" />
            <AlertTitle>Notification Preferences</AlertTitle>
            <AlertDescription>
              Choose how you want to receive notifications and updates.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <h3 className="text-lg font-semibold mb-4">Notification Channels</h3>
            <div className="space-y-4">
              {notifications.map((notif, i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                      <Bell className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{notif.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {notif.enabled ? 'Enabled' : 'Disabled'}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant={notif.enabled ? 'default' : 'outline'}
                    size="sm"
                  >
                    {notif.enabled ? 'Enabled' : 'Enable'}
                  </Button>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel>
            <h3 className="text-lg font-semibold mb-4">Notification Types</h3>
            <div className="space-y-3">
              {[
                { name: 'Crisis Alerts', description: 'Immediate notifications for crisis events' },
                { name: 'Performance Reports', description: 'Daily/weekly summary of platform metrics' },
                { name: 'Content Approvals', description: 'Notifications when content needs approval' },
                { name: 'System Updates', description: 'Platform updates and maintenance notices' }
              ].map((type, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{type.name}</h4>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Alert className="border-emerald-500 bg-emerald-50 dark:bg-emerald-950">
            <Shield className="h-4 w-4" />
            <AlertTitle>Security Status: Good</AlertTitle>
            <AlertDescription>
              Your account is secure. All security settings are up to date.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <h3 className="text-lg font-semibold mb-4">Security Settings</h3>
            <div className="space-y-4">
              {securitySettings.map((setting, i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{setting.name}</h4>
                      <p className="text-sm text-muted-foreground">Last updated: {setting.lastUpdated}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="default">{setting.status}</Badge>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  Change Password
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Update Password</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  2FA Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Manage 2FA</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <GlassPanel>
            <h3 className="text-lg font-semibold mb-4">Appearance Preferences</h3>
            <div className="space-y-4">
              {appearanceSettings.map((setting, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">{setting.name}</h4>
                    <Badge variant="outline">{setting.value}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {setting.options.map((option, j) => (
                      <Button
                        key={j}
                        variant={option === setting.value ? 'default' : 'outline'}
                        size="sm"
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="cursor-pointer border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-base">Light Mode</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-20 bg-white border rounded" />
              </CardContent>
            </Card>

            <Card className="cursor-pointer">
              <CardHeader>
                <CardTitle className="text-base">Dark Mode</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-20 bg-slate-900 border rounded" />
              </CardContent>
            </Card>

            <Card className="cursor-pointer">
              <CardHeader>
                <CardTitle className="text-base">System</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-20 bg-gradient-to-r from-white to-slate-900 border rounded" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Alert className="border-purple-500 bg-purple-50 dark:bg-purple-950">
            <Globe className="h-4 w-4" />
            <AlertTitle>Platform Integrations</AlertTitle>
            <AlertDescription>
              Manage your connected social media platforms and services.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Connected Platforms</h3>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Platform
              </Button>
            </div>

            <div className="space-y-4">
              {integrations.map((integration, i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                      <Globe className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{integration.name}</h4>
                      <p className="text-sm text-muted-foreground">Last sync: {integration.lastSync}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={
                      integration.status === 'connected' ? 'default' : 'destructive'
                    }>
                      {integration.status}
                    </Badge>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="team" className="space-y-6">
          <Alert className="border-indigo-500 bg-indigo-50 dark:bg-indigo-950">
            <Users className="h-4 w-4" />
            <AlertTitle>Team Management</AlertTitle>
            <AlertDescription>
              Manage team members and their access permissions.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Team Members</h3>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Invite Member
              </Button>
            </div>

            <div className="space-y-4">
              {teamMembers.map((member, i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold">{member.name}</h4>
                      <p className="text-sm text-muted-foreground">{member.role} • Last active {member.lastActive}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${
                      member.status === 'active' ? 'bg-emerald-500' : 'bg-muted'
                    }`} />
                    <Badge variant="outline">{member.status}</Badge>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">4</div>
                <p className="text-sm text-muted-foreground mt-1">Active team</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Active Now</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">3</div>
                <p className="text-sm text-muted-foreground mt-1">Currently online</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Pending Invites</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-amber-600">0</div>
                <p className="text-sm text-muted-foreground mt-1">Awaiting response</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-3">
        <Button variant="outline">
          <RefreshCw className="h-4 w-4 mr-2" />
          Reset to Defaults
        </Button>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  )
}
