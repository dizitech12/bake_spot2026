import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  onBrowse: () => void;
}

export function HeroSection({ onBrowse }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden min-h-[420px] flex flex-col">
      {/* Background image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=80"
          alt="Bake Spot bakery display"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/60 via-pink-800/50 to-pink-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 pt-16 pb-10 text-center">
        {/* Brand badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-6">
          <span className="text-pink-100 text-xs tracking-widest uppercase" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
            Homemade · Fresh Daily
          </span>
        </div>

        {/* Brand name */}
        <h1
          className="text-white mb-2 drop-shadow-lg"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(2.4rem, 10vw, 3.6rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          }}
        >
          Bake Spot
        </h1>

        {/* Tagline */}
        <p
          className="text-pink-100 mb-8"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "1rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
          }}
        >
          Homemade Fresh Cakes, Baked with Love 🎂
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <button
            onClick={onBrowse}
            className="w-full py-3.5 rounded-2xl text-white shadow-lg shadow-pink-900/40 active:scale-95 transition-transform"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              background: "linear-gradient(135deg, #f472b6 0%, #ec4899 100%)",
            }}
          >
            Browse Designs ✨
          </button>
          <a
            href="https://ig.me/m/bakespot2026"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-2xl border-2 border-white/60 text-white text-center active:scale-95 transition-transform backdrop-blur-sm"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 600,
              fontSize: "1rem",
              background: "rgba(255,255,255,0.15)",
            }}
          >
            📸 Order via Instagram
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-8">
        <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 32L390 32L390 10C350 28 280 2 195 8C110 14 40 30 0 16L0 32Z" fill="#fff5f7" />
        </svg>
      </div>
    </section>
  );
}
