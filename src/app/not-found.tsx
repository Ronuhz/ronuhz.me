import Link from 'next/link'
import '@/app/(main)/globals.css'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center space-y-4 font-mono">
      <h1 className="text-4xl font-semibold tracking-tight">404</h1>
      <p className="text-sm text-[var(--muted)]">The page you are looking for does not exist.</p>
      <div className="pt-2">
        <Link
          href="/"
          className="text-sm underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          ← return home
        </Link>
      </div>
    </main>
  )
}
