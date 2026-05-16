'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, Lock, ArrowRight, Sparkles } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simple auth - store in localStorage for now
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({
        email,
        name: email.split('@')[0],
        isAuthenticated: true
      }))

      setTimeout(() => {
        router.push('/dashboard')
      }, 500)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
      {/* Subtle gradient background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,40,200,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(40,90,235,0.08),transparent_50%)]" />
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-semibold">Plumio Studio</span>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold mb-2">Welcome back</h1>
            <p className="text-gray-400 text-sm">Sign in to your account to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-11 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-violet-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-11 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-violet-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-11 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-medium"
            >
              {loading ? 'Signing in...' : (
                <>
                  Sign in
                  <ArrowRight className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-400">Don't have an account? </span>
            <button
              onClick={() => router.push('/register')}
              className="text-violet-400 hover:text-violet-300 font-medium"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}