"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function AdminLoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const form = new FormData(e.currentTarget)
    const email = form.get('email') as string
    const password = form.get('password') as string

    // Demo login - replace with Supabase auth in production
    if (email === 'admin@simo.ma' && password === 'admin123') {
      // Set a cookie for middleware demo (in production use Supabase session)
      document.cookie = 'admin_auth=true; path=/; max-age=86400'
      router.push('/admin/overview')
    } else {
      setError('Invalid credentials. Try admin@simo.ma / admin123')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen grid place-items-center px-6 bg-background">
      <div className="w-full max-w-[400px] border border-border p-10 bg-background">
        <h1 className="font-display text-3xl">SIMO Admin</h1>
        <p className="mt-2 text-sm text-muted-foreground">Sign in to manage your portfolio.</p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div>
            <label className="text-[11px] tracking-luxury uppercase mb-2 block">Email</label>
            <Input name="email" type="email" defaultValue="admin@simo.ma" required />
          </div>
          <div>
            <label className="text-[11px] tracking-luxury uppercase mb-2 block">Password</label>
            <Input name="password" type="password" defaultValue="admin123" required />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" className="w-full" size="lg" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </Button>
          <p className="text-[11px] text-muted-foreground text-center">Demo: admin@simo.ma / admin123 — Connect Supabase for production auth.</p>
        </form>
      </div>
    </div>
  )
}
