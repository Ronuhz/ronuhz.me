import "./globals.css";
import TopNav from "@/components/top-nav";
import Footer from "@/components/footer";
import ProgressBar from "@/components/progress-bar";
import RevealInit from "@/components/reveal-init";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 py-8">
        <ProgressBar />
        <RevealInit />
        <TopNav />
        {children}
        <Footer />
      </div>
    </div>
  );
}
