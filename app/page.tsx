'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  ArrowRight,
  Sparkles,
  Zap,
  Brain,
  Target,
  TrendingUp,
  Shield,
  Award,
  ChevronRight,
  Star,
  Clock,
  Users,
  Globe,
  CheckCircle2,
  Play,
  Rocket
} from 'lucide-react'

export default function Home() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGetStarted = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    router.push('/register')
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-purple-600/30 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/10 backdrop-blur-xl bg-black/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur-lg opacity-75 animate-pulse" />
                <div className="relative w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold">Plumio Studio</span>
              <div className="ml-4 px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full">
                <span className="text-xs font-medium text-purple-400">AI POWERED</span>
              </div>
            </div>

            <div className="flex items-center space-x-8">
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Success</a>
              </div>
              <Button
                onClick={() => router.push('/login')}
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                Sign In
              </Button>
              <Button
                onClick={() => router.push('/register')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badges */}
            <div className="flex items-center justify-center gap-4">
              <div className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
                <span className="text-xs font-medium text-green-400 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  LIVE NOW
                </span>
              </div>
              <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
                <span className="text-xs font-medium text-purple-400 flex items-center gap-2">
                  <Star className="w-3 h-3" />
                  51+ COACHES AUTOMATED
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                  Automate Your Coaching
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  10X Faster with AI
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto">
                Connect your tools. Set your rules. Let AI handle the rest.
                <span className="text-white font-medium"> €197/month = Unlimited automation.</span>
              </p>
            </div>

            {/* Video Preview */}
            <div className="relative max-w-2xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-white/10 backdrop-blur-xl">
                <div className="aspect-video flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <button className="relative z-10 w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center group hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-red-500/80 rounded-full">
                    <span className="text-xs font-medium">LIVE DEMO</span>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-2xl opacity-30 animate-pulse" />
            </div>

            {/* CTA */}
            <form onSubmit={handleGetStarted} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="flex-1 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-500 backdrop-blur-xl"
                required
              />
              <Button
                type="submit"
                disabled={loading}
                size="lg"
                className="h-14 px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold group"
              >
                {loading ? 'Starting...' : (
                  <>
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span className="text-sm">No Credit Card</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4 text-green-400" />
                <span className="text-sm">Setup in 30s</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="relative py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-400">POWERFUL FEATURES</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Everything You Need to
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Dominate</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built for coaches who want to scale without hiring a team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "AI-Powered Automation",
                description: "Smart automation that learns from your patterns and adapts to your coaching style",
                gradient: "from-purple-600 to-pink-600"
              },
              {
                icon: Target,
                title: "Precision Targeting",
                description: "Reach the right clients at the perfect moment with behavioral triggers",
                gradient: "from-blue-600 to-cyan-600"
              },
              {
                icon: TrendingUp,
                title: "Revenue Analytics",
                description: "Track every metric that matters. ROI, conversion, engagement in real-time",
                gradient: "from-green-600 to-emerald-600"
              },
              {
                icon: Globe,
                title: "Multi-Channel Reach",
                description: "Email, WhatsApp, SMS, Social - manage everything from one dashboard",
                gradient: "from-orange-600 to-red-600"
              },
              {
                icon: Award,
                title: "Proven Templates",
                description: "Battle-tested sequences that convert. Used by 6-figure coaches",
                gradient: "from-indigo-600 to-purple-600"
              },
              {
                icon: Rocket,
                title: "Instant Deployment",
                description: "Go from signup to first automation in under 30 seconds. Seriously.",
                gradient: "from-pink-600 to-rose-600"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "€10M+", label: "Revenue Generated", icon: TrendingUp },
              { value: "51+", label: "Active Coaches", icon: Users },
              { value: "2.5M", label: "Messages Sent", icon: Zap },
              { value: "99.9%", label: "Uptime SLA", icon: Shield }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <stat.icon className="w-8 h-8 mx-auto text-purple-400 mb-2" />
                <div className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-400">LIMITED TIME OFFER</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            One Price. <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Unlimited Power.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            No hidden fees. No limits. Just results.
          </p>

          <div className="max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-30" />
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full">
                    <Star className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-medium text-purple-400">MOST POPULAR</span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-5xl font-bold">€197</div>
                    <div className="text-gray-400">/month</div>
                  </div>

                  <div className="space-y-4 text-left">
                    {[
                      "Unlimited automations",
                      "All integrations included",
                      "AI-powered personalization",
                      "Priority support",
                      "Custom workflows",
                      "Analytics dashboard",
                      "White-label options",
                      "API access"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => router.push('/register')}
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold h-14"
                  >
                    Start 14-Day Free Trial
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>

                  <p className="text-sm text-gray-400">
                    No credit card required • Cancel anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">Plumio Studio</span>
          </div>
          <p className="text-gray-400 mb-6">
            The AI automation platform for ambitious coaches.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <a href="#" className="hover:text-white transition-colors">API</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </div>
  )
}