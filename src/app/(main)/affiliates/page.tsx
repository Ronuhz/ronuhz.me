import AffiliateGrid from "@/components/affiliate-grid";
import Header from "@/components/header";

export default function Affiliates() {
  return (
    <main className="flex flex-col gap-6 mb:pt-0">
      <Header />
      
      <div className="space-y-4 max-w-2xl">
        <h2 className="text-xl font-bold text-gruvbox-fg">Affiliate Programs</h2>
        <p className="text-gruvbox-fg3">
          Products and services I personally use and recommend. Using these affiliate links helps support my work at no additional cost to you.
        </p>
      </div>
      <AffiliateGrid />
    </main>
  );
} 