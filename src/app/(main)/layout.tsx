import '@/app/(main)/globals.css'
import TopNav from '@/components/top-nav'
import Footer from '@/components/footer'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="max-w-2xl mx-auto min-h-screen flex flex-col justify-between px-6 py-12 md:py-16">
      <div>
        <TopNav />
        {children}
      </div>
      <Footer />
    </div>
  )
}
