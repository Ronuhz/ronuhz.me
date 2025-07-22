export default function Header() {
  return (
    <div className="flex flex-col items-center md:items-start gap-2 pt-8">
      <h1 className="font-black text-4xl bg-gradient-to-r from-gruvbox-green to-gruvbox-blue bg-clip-text text-transparent">
        Hunor Zoltáni
      </h1>
      <p className="text-sm opacity-70">Developer & Designer</p>
    </div>
  );
}