import React from "react";
import { miniTreats } from "../data/catalog";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const INSTAGRAM_DM_URL = "https://ig.me/m/bake_spot2026";
const WHATSAPP_NUMBER = "918431540838";

function buildWhatsAppUrl(itemName: string) {
  const msg = encodeURIComponent(
    `Hi Bake Spot! 🎂\nI'd like to order: ${itemName}\nPlease let me know the price and availability. Thank you!`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

export function MiniCakesSection() {
  return (
    <section className="px-4 py-6">
      {/* Section header */}
      <div
        className="rounded-3xl p-5 mb-5"
        style={{
          background: "linear-gradient(135deg, #fce7f3 0%, #fff0f6 50%, #fdf4ff 100%)",
          border: "1px solid #f9a8d4",
        }}
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">✨</span>
          <h2
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontWeight: 700,
              fontSize: "1.5rem",
              color: "#831843",
            }}
          >
            Mini Treats
          </h2>
        </div>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 500,
            fontSize: "0.82rem",
            color: "#9d174d",
          }}
        >
          Perfect for small celebrations, gifting &amp; sweet cravings 🎁
        </p>
      </div>

      {/* Cards — 2-column grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "14px",
        }}
      >
        {miniTreats.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl overflow-hidden bg-white"
            style={{
              border: "1px solid #fce7f3",
              boxShadow: "0 4px 18px rgba(236, 72, 153, 0.09)",
            }}
          >
            {/* Medium image with emoji badge */}
            <div style={{ width: "100%", height: "140px", overflow: "hidden", position: "relative" }}>
              <ImageWithFallback
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div
                style={{
                  position: "absolute",
                  top: "8px",
                  left: "8px",
                  width: "32px",
                  height: "32px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.92)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                }}
              >
                {item.emoji}
              </div>
            </div>

            {/* Info */}
            <div className="px-3 pt-2.5 pb-3">
              {/* Price badge */}
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "4px" }}>
                <span
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 800,
                    fontSize: "0.9rem",
                    color: "#ec4899",
                  }}
                >
                  {item.price}
                </span>
                <span
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.62rem",
                    color: "#be185d",
                    opacity: 0.7,
                  }}
                >
                  /{item.priceNote}
                </span>
              </div>

              {/* Name */}
              <h3
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 800,
                  fontSize: "0.82rem",
                  color: "#831843",
                  lineHeight: 1.3,
                  marginBottom: "4px",
                }}
              >
                {item.name}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.65rem",
                  color: "#9d174d",
                  opacity: 0.8,
                  lineHeight: 1.35,
                  marginBottom: "10px",
                }}
              >
                {item.description}
              </p>

              {/* Order buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                {/* Instagram */}
                <a
                  href={INSTAGRAM_DM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                    padding: "8px 6px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #f472b6 0%, #ec4899 100%)",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    color: "#fff",
                    textDecoration: "none",
                    boxShadow: "0 3px 10px rgba(236,72,153,0.3)",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  Order via Insta
                </a>

                {/* WhatsApp */}
                <a
                  href={buildWhatsAppUrl(item.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                    padding: "8px 6px",
                    borderRadius: "12px",
                    background: "#25D366",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    color: "#fff",
                    textDecoration: "none",
                    boxShadow: "0 3px 10px rgba(37,211,102,0.3)",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                  Order via WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
