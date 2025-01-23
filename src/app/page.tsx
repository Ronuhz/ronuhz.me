export default function Home() {
  return (
    <main className="flex flex-col gap-6 mb:pt-0">
      <p>
        {"Hey! I'm a student 👨‍💻 from "}
        <a 
          href="https://www.google.com/maps/place/Sfântu+Gheorghe,+Romania" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gruvbox-bright-blue hover:text-gruvbox-blue transition-colors"
        >
          Sepsiszentgyörgy
        </a>
        {", Romania, with Hungarian heritage. I'm the developer behind "}
        <a href="https://apps.apple.com/app/apple-store/id6630380943" className="text-gruvbox-bright-green hover:text-gruvbox-green transition-colors" target="_blank" rel="noopener noreferrer">
          PantryKit
        </a>
        .
      </p>

      <p>
        {"Currently, I'm focusing on two exciting projects: "}
        <a href="https://apps.apple.com/app/apple-store/id6740097249" className="text-gruvbox-bright-green hover:text-gruvbox-green transition-colors" target="_blank" rel="noopener noreferrer">
          Spooky
        </a>
        {' '}and{' '}
        <a href="https://apps.apple.com/app/apple-store/id6670686446" className="text-gruvbox-bright-green hover:text-gruvbox-green transition-colors" target="_blank" rel="noopener noreferrer">
          Lumenis
        </a>
        , while working towards my degree 🎓.
      </p>

      <p>
        {"When I'm not coding, you'll catch me binge-watching quirky shows 🎬, attempting to learn Chinese (with varying success), and daydreaming about my next creative project. I believe in turning wild ideas into reality, one small step at a time!"}
      </p>
    </main>
  );
}
