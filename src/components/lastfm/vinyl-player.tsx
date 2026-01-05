"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface LastFmData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
}

function MarqueeText({ text, className }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [shouldMarquee, setShouldMarquee] = useState(false);

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      setShouldMarquee(textRef.current.scrollWidth > containerRef.current.clientWidth);
    }
  }, [text]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <span
        ref={textRef}
        className={`inline-block whitespace-nowrap ${shouldMarquee ? "animate-marquee" : ""}`}
      >
        {text}
        {shouldMarquee && <span className="mx-4">•</span>}
        {shouldMarquee && text}
      </span>
    </div>
  );
}

export default function VinylPlayer() {
  const [data, setData] = useState<LastFmData>({ isPlaying: false });
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dragRef = useRef<{ startX: number; startY: number; initialX: number; initialY: number } | null>(null);

  // Load saved position
  useEffect(() => {
    const saved = localStorage.getItem("vinyl-position");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Validate saved position is still on screen
        if (parsed.x < window.innerWidth - 20 && parsed.y < window.innerHeight - 20) {
          setPosition(parsed);
        }
      } catch {
        // Use CSS default (null)
      }
    }
  }, []);

  // Save position
  useEffect(() => {
    if (!isDragging && position) {
      localStorage.setItem("vinyl-position", JSON.stringify(position));
    }
  }, [position, isDragging]);

  // Fetch now playing
  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch("/api/lastfm/now-playing");
        const lastfmData = await response.json();
        setData(lastfmData);
      } catch (error) {
        console.error("Error fetching now playing:", error);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 10000);
    return () => clearInterval(interval);
  }, []);

  // Drag handlers
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) return;
    const rect = containerRef.current?.getBoundingClientRect();
    const currentX = position?.x ?? rect?.left ?? 0;
    const currentY = position?.y ?? rect?.top ?? 0;
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: currentX,
      initialY: currentY,
    };
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest("a")) return;
    const touch = e.touches[0];
    const rect = containerRef.current?.getBoundingClientRect();
    const currentX = position?.x ?? rect?.left ?? 0;
    const currentY = position?.y ?? rect?.top ?? 0;
    setIsDragging(true);
    dragRef.current = {
      startX: touch.clientX,
      startY: touch.clientY,
      initialX: currentX,
      initialY: currentY,
    };
  };

  useEffect(() => {
    const handleMove = (clientX: number, clientY: number) => {
      if (!isDragging || !dragRef.current) return;
      const deltaX = clientX - dragRef.current.startX;
      const deltaY = clientY - dragRef.current.startY;
      const isMobile = window.innerWidth < 640;
      const size = isMobile ? 80 : 96;
      setPosition({
        x: Math.max(8, Math.min(window.innerWidth - size - 8, dragRef.current.initialX + deltaX)),
        y: Math.max(70, Math.min(window.innerHeight - size - 8, dragRef.current.initialY + deltaY)),
      });
    };

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX, e.touches[0].clientY);
    const handleEnd = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging]);

  if (!data.isPlaying) {
    return null; // Hide when not playing
  }

  return (
    <div
      ref={containerRef}
      className={`fixed z-50 select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      style={position
        ? { left: position.x, top: position.y }
        : { right: 35, bottom: 35 }
      }
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Vinyl Record */}
      <a
        href={data.songUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => isDragging && e.preventDefault()}
        className="block"
      >
        <div
          className={`
            relative w-20 h-20 sm:w-24 sm:h-24 rounded-full
            bg-[#1a1a1a]
            transition-transform duration-300
            ${isDragging ? "scale-110" : isHovered ? "scale-105" : ""}
          `}
          style={{
            animation: data.isPlaying && !isDragging ? "spin 3s linear infinite" : "none",
            boxShadow: `
              0 0 0 3px #000,
              0 0 0 5px var(--accent),
              0 4px 20px rgba(0,0,0,0.5),
              inset 0 0 15px rgba(0,0,0,0.8)
            `,
          }}
        >
          {/* Vinyl grooves */}
          <div className="absolute inset-1.5 sm:inset-2 rounded-full border border-gray-800" />
          <div className="absolute inset-3 sm:inset-4 rounded-full border border-gray-800" />
          <div className="absolute inset-5 sm:inset-6 rounded-full border border-gray-800" />

          {/* Vinyl shine effect */}
          <div
            className="absolute inset-0 rounded-full opacity-20"
            style={{
              background: "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)"
            }}
          />

          {/* Album art label (center) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#1a1a1a] relative"
              style={{
                boxShadow: "0 0 0 2px var(--accent)"
              }}
            >
              {data.albumImageUrl ? (
                <Image
                  src={data.albumImageUrl}
                  alt={data.album || "Album art"}
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-gray-600" />
                </div>
              )}
              {/* Center hole */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-[#1a1a1a]" />
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Track info tooltip */}
      <div
        className={`
          absolute left-1/2 -translate-x-1/2 bottom-full mb-2
          bg-[var(--accent)] text-[var(--background)]
          px-2 py-1.5 sm:px-3 sm:py-2 text-center
          border-2 border-[var(--border)]
          transition-all duration-200 w-32 sm:w-40
          ${isHovered || isDragging ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
        `}
        style={{ boxShadow: "2px 2px 0 var(--border)" }}
      >
        <p className="text-[7px] sm:text-[8px] uppercase tracking-widest opacity-60 mb-0.5">Hunor is listening to</p>
        <MarqueeText text={data.title || ""} className="font-bold text-[10px] sm:text-xs" />
        <MarqueeText text={data.artist || ""} className="text-[8px] sm:text-[10px] opacity-80" />
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
