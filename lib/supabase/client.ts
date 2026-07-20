import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

  if (!url || !key) {
    console.warn('Supabase env missing - using mock client')
    return null as unknown as ReturnType<typeof createBrowserClient>
  }

  return createBrowserClient(url, key)
}
