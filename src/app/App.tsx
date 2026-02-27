import React, { useState, useRef, useCallback } from "react";
import { cakeCollection, CakeItem } from "./data/catalog";
import { HeroSection } from "./components/HeroSection";
import { CakeCollectionSection } from "./components/CakeCollectionSection";
import { DesignGallery } from "./components/DesignGallery";
import { MiniCakesSection } from "./components/MiniCakesSection";
import { NoticeCard } from "./components/NoticeCard";
import { FooterSection } from "./components/FooterSection";

export default function App() {
  // Design Gallery state
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryCakeItem, setGalleryCakeItem] = useState<CakeItem | null>(null);

  const catalogRef = useRef<HTMLDivElement>(null);

  const handleBrowse = useCallback(() => {
    catalogRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleViewDesigns = useCallback((cake: CakeItem) => {
    setGalleryCakeItem(cake);
    setGalleryOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const handleCloseGallery = useCallback(() => {
    setGalleryOpen(false);
    document.body.style.overflow = "";
    setTimeout(() => setGalleryCakeItem(null), 350);
  }, []);

  // handleOrder is kept for MiniCakesSection which may still open the gallery
  const handleOrder = useCallback((cake: CakeItem, _designRef: number) => {
    setGalleryCakeItem(cake);
    setGalleryOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div
      className="min-h-screen w-full"
      style={{ background: "linear-gradient(180deg, #fff0f5 0%, #fdf2f8 100%)" }}
    >
      {/* Centred mobile container */}
      <div
        className="relative mx-auto min-h-screen"
        style={{
          maxWidth: "480px",
          background: "#fff5f7",
          boxShadow: "0 0 40px rgba(236, 72, 153, 0.08)",
        }}
      >
        {/* Hero */}
        <HeroSection onBrowse={handleBrowse} />

        {/* Catalog anchor */}
        <div ref={catalogRef} />

        {/* All 12 cakes */}
        <CakeCollectionSection
          cakes={cakeCollection}
          onViewDesigns={handleViewDesigns}
        />

        {/* Divider */}
        <div className="px-4 pb-2">
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px" style={{ background: "#fce7f3" }} />
            <span
              className="flex-shrink-0 px-3 py-1 rounded-full"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: "0.72rem",
                color: "#be185d",
                background: "#fce7f3",
              }}
            >
              ✨ Mini Treats
            </span>
            <div className="flex-1 h-px" style={{ background: "#fce7f3" }} />
          </div>
        </div>

        {/* Mini Treats */}
        <MiniCakesSection
          onOrder={handleOrder}
          onViewDesigns={handleViewDesigns}
        />

        {/* Notice */}
        <NoticeCard />

        {/* Footer with extra bottom padding */}
        <div className="pb-20">
          <FooterSection />
        </div>

        {/* Floating Instagram button (hidden during gallery) */}
        {!galleryOpen && (
          <div
            style={{
              position: "fixed",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "min(320px, calc(100vw - 48px))",
              zIndex: 20,
            }}
          >
            <a
              href="https://ig.me/m/bake_spot2026"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                width: "100%",
                padding: "14px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #f472b6 0%, #db2777 100%)",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "#fff",
                textDecoration: "none",
                boxShadow: "0 6px 24px rgba(219, 39, 119, 0.45)",
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Order via Instagram
            </a>
          </div>
        )}

        {/* Design Gallery Overlay */}
        <DesignGallery
          cakeItem={galleryCakeItem}
          isVisible={galleryOpen}
          onClose={handleCloseGallery}
          onOrder={handleOrder}
        />
      </div>
    </div>
  );
}
