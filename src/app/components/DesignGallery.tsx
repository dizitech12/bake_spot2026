import React, { useState, useEffect } from "react";
import { CakeItem } from "../data/catalog";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface DesignGalleryProps {
  cakeItem: CakeItem | null;
  isVisible: boolean;
  onClose: () => void;
  onOrder: (cake: CakeItem, designRef: number) => void;
}

export function DesignGallery({ cakeItem, isVisible, onClose, onOrder }: DesignGalleryProps) {
  const [selectedDesign, setSelectedDesign] = useState(0);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setSelectedDesign(0);
      const t = setTimeout(() => setAnimated(true), 10);
      return () => clearTimeout(t);
    } else {
      setAnimated(false);
    }
  }, [isVisible, cakeItem]);

  if (!cakeItem && !isVisible) return null;

  const design = cakeItem?.designs[selectedDesign];

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          background: "rgba(131, 24, 67, 0.4)",
          opacity: animated ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: isVisible ? "auto" : "none",
        }}
        onClick={onClose}
      />

      {/* Bottom sheet drawer */}
      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          borderRadius: "24px 24px 0 0",
          overflow: "hidden",
          background: "#fff5f7",
          maxHeight: "92vh",
          transform: animated ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.3s ease-out",
          boxShadow: "0 -8px 40px rgba(236, 72, 153, 0.2)",
        }}
      >
        {/* Handle */}
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "12px", paddingBottom: "4px", flexShrink: 0 }}>
          <div style={{ width: "40px", height: "4px", borderRadius: "2px", background: "#fbcfe8" }} />
        </div>

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 18px 12px",
            flexShrink: 0,
            borderBottom: "1px solid #fce7f3",
          }}
        >
          <div>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 500, fontSize: "0.7rem", color: "#be185d", margin: 0 }}>
              {cakeItem?.designs.length} designs available
            </p>
            <h3
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 800,
                fontSize: "1rem",
                color: "#831843",
                lineHeight: 1.2,
                margin: "2px 0 0",
              }}
            >
              {cakeItem?.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "#fce7f3",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#be185d",
              flexShrink: 0,
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px 8px" }}>
          {/* Notice */}
          <div
            style={{
              borderRadius: "14px",
              padding: "10px 14px",
              marginBottom: "14px",
              background: "#fdf2f8",
              border: "1px solid #fce7f3",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ fontSize: "0.9rem", flexShrink: 0 }}>👇</span>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600, fontSize: "0.72rem", color: "#9d174d", margin: 0 }}>
              Pick a design below — your order will be for <strong>{cakeItem?.name}</strong>
            </p>
          </div>

          {/* Large preview */}
          {design && (
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                height: "210px",
                marginBottom: "14px",
                position: "relative",
                boxShadow: "0 8px 24px rgba(236, 72, 153, 0.15)",
              }}
            >
              <ImageWithFallback
                src={design.image}
                alt={design.label}
                className="w-full h-full object-cover"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  padding: "6px 12px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.78rem", color: "#831843" }}>
                  ✓ Design #{selectedDesign + 1} · {design.label}
                </span>
              </div>
            </div>
          )}

          {/* Design grid */}
          <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.78rem", color: "#be185d", margin: "0 0 10px" }}>
            Choose a design:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
              paddingBottom: "8px",
            }}
          >
            {cakeItem?.designs.map((d, idx) => {
              const isSelected = idx === selectedDesign;
              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedDesign(idx)}
                  style={{
                    position: "relative",
                    borderRadius: "16px",
                    overflow: "hidden",
                    height: "110px",
                    border: isSelected ? "3px solid #ec4899" : "3px solid transparent",
                    boxShadow: isSelected
                      ? "0 4px 16px rgba(236, 72, 153, 0.4)"
                      : "0 2px 8px rgba(0,0,0,0.08)",
                    cursor: "pointer",
                    padding: 0,
                    transition: "border 0.15s, box-shadow 0.15s",
                  }}
                >
                  <ImageWithFallback
                    src={d.image}
                    alt={d.label}
                    className="w-full h-full object-cover"
                  />

                  {/* #Number badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "6px",
                      left: "6px",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: isSelected ? "#ec4899" : "rgba(255,255,255,0.9)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "0.6rem", color: isSelected ? "#fff" : "#831843" }}>
                      #{idx + 1}
                    </span>
                  </div>

                  {/* Selected tag */}
                  {isSelected && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "6px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#ec4899",
                        borderRadius: "999px",
                        padding: "2px 8px",
                      }}
                    >
                      <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.58rem", color: "#fff" }}>
                        Selected ✓
                      </span>
                    </div>
                  )}

                  {/* Label */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "18px 6px 4px",
                      background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                    }}
                  >
                    <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600, fontSize: "0.6rem", color: "#fff", margin: 0 }}>
                      {d.label}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Fixed bottom order bar */}
        <div
          style={{
            flexShrink: 0,
            padding: "14px 16px",
            borderTop: "1px solid #fce7f3",
            background: "#fff",
            boxShadow: "0 -4px 16px rgba(236, 72, 153, 0.08)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 500, fontSize: "0.67rem", color: "#9d174d", margin: 0 }}>
                Selected
              </p>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "0.85rem", color: "#831843", margin: "1px 0 0", lineHeight: 1.2 }}>
                {cakeItem?.name}
                <span style={{ color: "#ec4899", fontWeight: 600 }}> · #{selectedDesign + 1}</span>
              </p>
            </div>
            <button
              onClick={() => cakeItem && onOrder(cakeItem, selectedDesign + 1)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                padding: "13px 18px",
                borderRadius: "16px",
                border: "none",
                background: "linear-gradient(135deg, #f472b6 0%, #ec4899 100%)",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: "#fff",
                cursor: "pointer",
                flexShrink: 0,
                boxShadow: "0 4px 14px rgba(236, 72, 153, 0.4)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
