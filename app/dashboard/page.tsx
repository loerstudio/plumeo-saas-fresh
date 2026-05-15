'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  FileSpreadsheet,
  Mail,
  MessageCircle,
  Check,
  X,
  Settings,
  Play,
  Pause,
  LogOut,
  Zap,
  Clock,
  Users,
  BarChart3,
  Home,
  Database,
  Sparkles,
  Bell,
  Search,
  UserCircle,
  Menu,
  ChevronDown,
  TrendingUp,
  Activity,
  ArrowUpRight
} from 'lucide-react'

export default function Dashboard() {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [connections, setConnections] = useState({
    googleSheets: false,
    gmail: false,
    whatsapp: false
  })
  const [automationActive, setAutomationActive] = useState(false)
  const [stats, setStats] = useState({
    emailsSent: 1247,
    whatsappSent: 892,
    lastRun: null as Date | null
  })

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user')
    if (!user) {
      router.push('/login')
    }
  }, [router])

  const connectGoogleSheets = () => {
    setTimeout(() => {
      setConnections(prev => ({ ...prev, googleSheets: true }))
    }, 1000)
  }

  const connectGmail = () => {
    setTimeout(() => {
      setConnections(prev => ({ ...prev, gmail: true }))
    }, 1000)
  }

  const connectWhatsApp = () => {
    setTimeout(() => {
      setConnections(prev => ({ ...prev, whatsapp: true }))
    }, 1000)
  }

  const toggleAutomation = () => {
    if (connections.googleSheets && (connections.gmail || connections.whatsapp)) {
      setAutomationActive(!automationActive)
      if (!automationActive) {
        setStats(prev => ({ ...prev, lastRun: new Date() }))
      }
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/')
  }

  const allConnected = connections.googleSheets && connections.gmail && connections.whatsapp

  const navigation = [
    { name: 'Dashboard', icon: Home, current: true },
    { name: 'Automazioni', icon: Zap, current: false },
    { name: 'Contatti', icon: Users, current: false },
    { name: 'Analytics', icon: BarChart3, current: false },
    { name: 'Integrazioni', icon: Database, current: false },
    { name: 'Impostazioni', icon: Settings, current: false },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      <div className="fixed inset-0">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-black/50 backdrop-blur-xl border-r border-white/10 transform transition-transform duration-200 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 p-6 border-b border-white/10">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              Plumio Studio
            </span>
            <Badge className="ml-auto bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">PRO</Badge>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href="#"
                className={`
                  flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group
                  ${item.current
                    ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white border border-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                {item.name}
                {item.current && (
                  <div className="ml-auto w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* User */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <UserCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  Coach Pro
                </p>
                <p className="text-xs text-gray-400 truncate">
                  coach@plumio.studio
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="p-1 h-auto text-gray-400 hover:text-white hover:bg-white/10"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-black/50 backdrop-blur-xl border-b border-white/10">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden text-white hover:bg-white/10"
                >
                  <Menu className="w-5 h-5" />
                </Button>

                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                    <Badge className="bg-purple-500/20 text-purple-300 border border-purple-500/30">LIVE</Badge>
                  </div>
                  <p className="text-sm text-gray-400">
                    Automazione AI attiva • 51 clienti connessi
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-300 text-sm font-medium">
                    {automationActive ? 'Sistema Attivo' : 'Sistema Pausato'}
                  </span>
                </div>

                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10">
                  <Bell className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-600/20 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <Badge className="bg-purple-500/20 text-purple-300 border-0">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +23%
                </Badge>
              </div>
              <p className="text-sm text-gray-400 mb-1">Email Inviate</p>
              <p className="text-3xl font-bold text-white">{stats.emailsSent.toLocaleString()}</p>
              <p className="text-xs text-gray-500 mt-2">Ultimo invio: 2 min fa</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-blue-600/20 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-6 hover:border-blue-500/40 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-blue-400" />
                </div>
                <Badge className="bg-blue-500/20 text-blue-300 border-0">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +18%
                </Badge>
              </div>
              <p className="text-sm text-gray-400 mb-1">WhatsApp Inviati</p>
              <p className="text-3xl font-bold text-white">{stats.whatsappSent.toLocaleString()}</p>
              <p className="text-xs text-gray-500 mt-2">Tasso apertura: 94%</p>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-green-600/20 backdrop-blur-xl rounded-2xl border border-green-500/20 p-6 hover:border-green-500/40 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <Badge className="bg-green-500/20 text-green-300 border-0">
                  <Activity className="w-3 h-3 mr-1" />
                  Live
                </Badge>
              </div>
              <p className="text-sm text-gray-400 mb-1">Clienti Attivi</p>
              <p className="text-3xl font-bold text-white">51</p>
              <p className="text-xs text-gray-500 mt-2">€10,047/mese</p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-orange-600/20 backdrop-blur-xl rounded-2xl border border-orange-500/20 p-6 hover:border-orange-500/40 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </div>
              <p className="text-sm text-gray-400 mb-1">Prossimo Controllo</p>
              <p className="text-3xl font-bold text-white">
                {stats.lastRun ? new Date(stats.lastRun).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }) : '14:45'}
              </p>
              <p className="text-xs text-gray-500 mt-2">Ogni 15 minuti</p>
            </div>
          </div>

          {/* Integrations */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">Integrazioni AI</h2>
                <p className="text-sm text-gray-400">
                  Connetti in 1-click senza OAuth o configurazioni
                </p>
              </div>
              <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
                Instant Setup
              </Badge>
            </div>

            <div className="space-y-4">
              {/* Google Sheets */}
              <div className="bg-black/30 rounded-xl border border-white/10 p-4 hover:border-purple-500/30 transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      connections.googleSheets
                        ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30'
                        : 'bg-white/5 border border-white/10'
                    }`}>
                      <FileSpreadsheet className={`w-6 h-6 ${
                        connections.googleSheets ? 'text-green-400' : 'text-gray-400'
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Google Sheets</h3>
                      <p className="text-sm text-gray-400">
                        {connections.googleSheets ? 'Marketing Automation Sheet' : 'Database dei tuoi clienti'}
                      </p>
                    </div>
                  </div>
                  {connections.googleSheets ? (
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 rounded-lg border border-green-500/30">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-green-300 text-sm">Connesso</span>
                    </div>
                  ) : (
                    <Button
                      onClick={connectGoogleSheets}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 hover:opacity-90"
                    >
                      Connetti
                    </Button>
                  )}
                </div>
              </div>

              {/* Gmail */}
              <div className="bg-black/30 rounded-xl border border-white/10 p-4 hover:border-purple-500/30 transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      connections.gmail
                        ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30'
                        : 'bg-white/5 border border-white/10'
                    }`}>
                      <Mail className={`w-6 h-6 ${
                        connections.gmail ? 'text-green-400' : 'text-gray-400'
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Gmail Business</h3>
                      <p className="text-sm text-gray-400">
                        {connections.gmail ? 'coach@plumio.studio' : 'Email professionali automatiche'}
                      </p>
                    </div>
                  </div>
                  {connections.gmail ? (
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 rounded-lg border border-green-500/30">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-green-300 text-sm">Connesso</span>
                    </div>
                  ) : (
                    <Button
                      onClick={connectGmail}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 hover:opacity-90"
                    >
                      Connetti
                    </Button>
                  )}
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-black/30 rounded-xl border border-white/10 p-4 hover:border-purple-500/30 transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      connections.whatsapp
                        ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30'
                        : 'bg-white/5 border border-white/10'
                    }`}>
                      <MessageCircle className={`w-6 h-6 ${
                        connections.whatsapp ? 'text-green-400' : 'text-gray-400'
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">WhatsApp Business</h3>
                      <p className="text-sm text-gray-400">
                        {connections.whatsapp ? '+39 333 1234567' : 'Messaggistica istantanea AI'}
                      </p>
                    </div>
                  </div>
                  {connections.whatsapp ? (
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 rounded-lg border border-green-500/30">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-green-300 text-sm">Connesso</span>
                    </div>
                  ) : (
                    <Button
                      onClick={connectWhatsApp}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 hover:opacity-90"
                    >
                      Connetti
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Automation Control */}
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-xl font-bold text-white">AI Automation Engine</h2>
                  <Badge className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-500/30">
                    GPT-4 Powered
                  </Badge>
                </div>
                <p className="text-sm text-gray-400">
                  Controllo intelligente ogni 15 minuti con personalizzazione AI
                </p>
              </div>
              <Button
                onClick={toggleAutomation}
                disabled={!connections.googleSheets || (!connections.gmail && !connections.whatsapp)}
                className={`px-6 py-2 rounded-xl font-medium transition-all ${
                  automationActive
                    ? 'bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30'
                    : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 hover:opacity-90'
                } ${!allConnected && !automationActive ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {automationActive ? (
                  <>
                    <Pause className="w-4 h-4 mr-2" />
                    Ferma Sistema
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Avvia Sistema
                  </>
                )}
              </Button>
            </div>

            <div className="space-y-4">
              {!allConnected && (
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
                  <p className="text-orange-300 text-sm">
                    <strong className="text-orange-400">Setup Richiesto:</strong> Connetti Google Sheets + Gmail/WhatsApp per attivare l'AI
                  </p>
                </div>
              )}

              {automationActive && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <p className="text-green-300 text-sm">
                      <strong className="text-green-400">Sistema Operativo!</strong> L'AI sta processando i tuoi lead e inviando comunicazioni personalizzate.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">12</p>
                      <p className="text-xs text-gray-400">Lead/ora</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">94%</p>
                      <p className="text-xs text-gray-400">Tasso apertura</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">3.2x</p>
                      <p className="text-xs text-gray-400">ROI medio</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Setup Guide */}
          <div className="relative overflow-hidden bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-white">Setup in 30 Secondi</h2>
                <Badge className="bg-white/10 text-white border border-white/20">NO CODE</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform">
                      <span className="font-bold text-white">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Prepara Google Sheet</h4>
                      <p className="text-sm text-gray-300">Nome, Email, Telefono, Stato</p>
                      <p className="text-xs text-gray-400 mt-1">Template incluso</p>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
                      <span className="font-bold text-white">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Importa Clienti</h4>
                      <p className="text-sm text-gray-300">CSV, Excel o manuale</p>
                      <p className="text-xs text-gray-400 mt-1">Max 10k contatti</p>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/25 group-hover:scale-110 transition-transform">
                      <span className="font-bold text-white">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Attiva AI</h4>
                      <p className="text-sm text-gray-300">Automazione completa</p>
                      <p className="text-xs text-gray-400 mt-1">€197/mese tutto incluso</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">GDPR Compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">Supporto 24/7</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">99.9% Uptime</span>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 hover:opacity-90">
                    <ArrowUpRight className="w-4 h-4 mr-2" />
                    Guida Completa
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}