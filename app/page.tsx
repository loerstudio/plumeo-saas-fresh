'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
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
  Rocket,
  ArrowUpRight,
  Cpu,
  Palette
} from 'lucide-react'

export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleGetStarted = async () => {
    setLoading(true)
    router.push('/register')
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      {/* Subtle gradient background - Leonardo style */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,40,200,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(40,90,235,0.08),transparent_50%)]" />
      </div>

      {/* Navigation - Clean Leonardo.ai style */}
      <nav className="relative z-50 border-b border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="flex items-center justify-between h-[68px]">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="text-[18px] font-semibold tracking-[-0.01em]">Plumio Studio</span>
            </div>

            {/* Center Nav */}
            <div className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
              <a href="#features" className="text-[14px] text-gray-400 hover:text-white transition-colors duration-200 font-medium">
                Features
              </a>
              <a href="#models" className="text-[14px] text-gray-400 hover:text-white transition-colors duration-200 font-medium">
                Models
              </a>
              <a href="#pricing" className="text-[14px] text-gray-400 hover:text-white transition-colors duration-200 font-medium">
                Pricing
              </a>
              <a href="#api" className="text-[14px] text-gray-400 hover:text-white transition-colors duration-200 font-medium">
                API
              </a>
              <a href="#blog" className="text-[14px] text-gray-400 hover:text-white transition-colors duration-200 font-medium">
                Blog
              </a>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                onClick={() => router.push('/login')}
                className="text-[13px] font-medium text-gray-300 hover:text-white hover:bg-white/[0.04] h-9 px-4"
              >
                Log in
              </Button>
              <Button
                onClick={handleGetStarted}
                disabled={loading}
                className="text-[13px] font-medium bg-white text-black hover:bg-gray-200 h-9 px-4 rounded-md transition-all"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Leonardo.ai style */}
      <section className="relative pt-24 pb-20">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="max-w-[900px] mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-500/[0.08] border border-violet-500/[0.12] rounded-full mb-8">
              <div className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
              <span className="text-[11px] font-medium text-violet-400 uppercase tracking-wider">New AI Model Available</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[64px] leading-[1.1] font-bold tracking-[-0.02em] mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                AI-Powered Automation
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400">
                for Modern Coaches
              </span>
            </h1>

            <p className="text-[19px] leading-relaxed text-gray-400 max-w-[640px] mx-auto mb-10">
              Transform your coaching business with intelligent automation. Connect your tools,
              set your rules, and let AI handle client communication at scale.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4 justify-center">
              <Button
                onClick={handleGetStarted}
                disabled={loading}
                className="bg-white text-black hover:bg-gray-200 text-[14px] font-medium h-11 px-6 rounded-lg transition-all"
              >
                Start Creating for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                onClick={() => router.push('/dashboard')}
                className="text-white hover:bg-white/[0.06] text-[14px] font-medium h-11 px-6 rounded-lg"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-10 text-[13px] text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>GDPR compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-500" />
                <span>30-second setup</span>
              </div>
            </div>
          </div>

          {/* Product Preview - Leonardo style */}
          <div className="mt-20 relative">
            <div className="relative mx-auto max-w-[1000px]">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-[1px]">
                <div className="rounded-2xl bg-[#0a0a0a] overflow-hidden">
                  <div className="bg-[#111111] rounded-t-2xl px-4 py-3 flex items-center gap-2 border-b border-white/[0.06]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <span className="text-[11px] text-gray-500 ml-2">plumio-studio.app</span>
                  </div>
                  <div className="relative aspect-[16/9] bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-blue-900/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="group relative">
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all" />
                        <div className="relative w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </button>
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-red-500/80 rounded-lg backdrop-blur-sm">
                      <span className="text-[11px] font-medium uppercase tracking-wider">Live Demo</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Subtle glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-blue-600/20 blur-3xl opacity-30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Clean grid like Leonardo */}
      <section id="features" className="relative py-24 border-t border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-[42px] font-bold tracking-[-0.02em] mb-4">
              Powerful Features for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400"> Coaches</span>
            </h2>
            <p className="text-[17px] text-gray-400 max-w-[600px] mx-auto">
              Everything you need to automate your coaching business and scale to €10k/month
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Brain,
                title: "AI Personalization",
                description: "Intelligent message crafting that adapts to each client's journey",
                color: "violet"
              },
              {
                icon: Zap,
                title: "Instant Automation",
                description: "Set up complex workflows in seconds with our visual builder",
                color: "purple"
              },
              {
                icon: Globe,
                title: "Multi-Channel",
                description: "Email, WhatsApp, SMS - reach clients where they are",
                color: "blue"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level encryption and GDPR compliance built-in",
                color: "green"
              },
              {
                icon: TrendingUp,
                title: "Revenue Analytics",
                description: "Track ROI, conversions, and growth metrics in real-time",
                color: "orange"
              },
              {
                icon: Rocket,
                title: "Lightning Fast",
                description: "From signup to first automation in under 30 seconds",
                color: "pink"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] rounded-xl p-6 transition-all duration-300"
              >
                <div className={`w-10 h-10 bg-${feature.color}-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-5 h-5 text-${feature.color}-400`} />
                </div>
                <h3 className="text-[16px] font-semibold mb-2">{feature.title}</h3>
                <p className="text-[14px] text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 border-t border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "€10M+", label: "Revenue Generated" },
              { value: "51+", label: "Active Coaches" },
              { value: "2.5M", label: "Messages Sent" },
              { value: "99.9%", label: "Uptime" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-[36px] font-bold tracking-[-0.02em] mb-1">
                  {stat.value}
                </div>
                <div className="text-[14px] text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-24 border-t border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-[42px] font-bold tracking-[-0.02em] mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-[17px] text-gray-400">
              One plan, unlimited possibilities
            </p>
          </div>

          <div className="max-w-[400px] mx-auto">
            <div className="relative bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.03] transition-all">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="px-3 py-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full">
                  <span className="text-[11px] font-medium uppercase tracking-wider">Most Popular</span>
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="text-[48px] font-bold tracking-[-0.02em]">€197</div>
                <div className="text-[14px] text-gray-400">per month</div>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  "Unlimited automations",
                  "All integrations included",
                  "AI message personalization",
                  "Priority support",
                  "Custom workflows",
                  "Advanced analytics",
                  "White-label options",
                  "API access"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-[14px]">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={handleGetStarted}
                className="w-full bg-white text-black hover:bg-gray-200 text-[14px] font-medium h-11 rounded-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-[12px] text-gray-500 text-center mt-4">
                14-day free trial • No credit card required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/[0.06] py-16">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4.5 h-4.5 text-white" />
                </div>
                <span className="text-[16px] font-semibold">Plumio Studio</span>
              </div>
              <p className="text-[13px] text-gray-400 leading-relaxed">
                AI-powered automation platform for modern coaches.
              </p>
            </div>

            <div>
              <h4 className="text-[13px] font-semibold mb-4 text-gray-300">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[13px] font-semibold mb-4 text-gray-300">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[13px] font-semibold mb-4 text-gray-300">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.06]">
            <p className="text-[12px] text-gray-500 text-center">
              © 2024 Plumio Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}