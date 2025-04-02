export function TrophyIcon({ size = 20 }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M4 22h16"/>
      <path d="M10 22v-4.5a2.5 2.5 0 0 1 5 0V22"/>
      <path d="M9 9a3 3 0 0 0 6 0"/>
      <path d="M12 3v6"/>
    </svg>
  )
}