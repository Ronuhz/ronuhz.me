export function XIcon({ size = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor" 
      strokeWidth="0.7" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <defs>
        <filter id="roundEdges">
          <feComposite  operator="over" in="SourceGraphic" />
        </filter>
      </defs>
      <path
        d="M21.12 21.5l-7.036-10.257l0.012,0.01L20.416 3.2h-2.12l-5.168 5.984L8.624 3.2H3.464l6.569 9.577l-0.001,0.799L3.104 21.5h2.12l5.746-6.658L15.544 21.5H21.12z M8.184 4.8l9.872 14.4h-1.68L6.504 4.8H8.184z"
        filter="url(#roundEdges)"
      />
    </svg>
  )
}