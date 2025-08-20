export default function Header() {
  return (
    <section className="brutal-section">
      <div className="mb-3">
        <span className="brutal-label">Statement</span>
      </div>
      <h2 className="text-4xl md:text-6xl leading-tight font-black uppercase">
        Bold, fast,
        <br />
        unapologetically
        <br />
        native apps.
        <br />
        Heavy borders.
        <br />
        Honest pixels.
      </h2>
      <p className="mt-4 text-sm md:text-base opacity-80">
        I build small, opinionated products with <span className="underline decoration-[var(--accent)] decoration-4 underline-offset-2">speed</span> and <span className="underline decoration-[var(--accent)] decoration-4 underline-offset-2">texture</span>. I prefer
        defaults over decoration, but when we decorate, we decorate loud.
      </p>
    </section>
  );
}