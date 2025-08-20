import AffiliateGrid from "@/components/affiliate-grid";

export default function Affiliates() {
  return (
    <main className="flex flex-col gap-8">
      <section className="brutal-section">
        <h2 className="text-xl md:text-2xl font-bold uppercase mb-2">Affiliates</h2>
        <p className="opacity-80">Products and services I personally use and recommend.</p>
      </section>
      <AffiliateGrid />
    </main>
  );
} 