import React from "react";
import { INSTAGRAM_HANDLE, INSTAGRAM_DM_URL, INSTAGRAM_PROFILE_URL } from "../data/catalog";

const WHATSAPP_URL = `https://wa.me/918431540838?text=${encodeURIComponent("Hi Bake Spot! 🎂\nI'd like to place an order. Please let me know the details. Thank you!")}`;
const WHATSAPP_NUMBER = "+91 84315 40838";

export function FooterSection() {
  return (
    <footer
      style={{
        padding: "32px 16px 28px",
        background: "linear-gradient(180deg, #fff5f7 0%, #fce7f3 100%)",
        borderTop: "1px solid #fce7f3",
      }}
    >
      {/* Brand */}
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <h2
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontWeight: 700,
            fontSize: "2rem",
            color: "#831843",
            lineHeight: 1,
            margin: 0,
          }}
        >
          Bake Spot
        </h2>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 500,
            fontSize: "0.78rem",
            color: "#be185d",
            opacity: 0.8,
            marginTop: "5px",
            marginBottom: 0,
          }}
        >
          Homemade Fresh Cakes · Baked with Love 🩷
        </p>
      </div>

      {/* Info cards — Instagram & WhatsApp */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
        {/* Instagram Profile */}
        <a
          href={INSTAGRAM_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            borderRadius: "20px",
            padding: "20px 12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            background: "#fff",
            border: "1px solid #fce7f3",
            boxShadow: "0 2px 12px rgba(236, 72, 153, 0.06)",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #f472b6, #ec4899)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.7rem", color: "#831843", margin: 0, textAlign: "center" }}>
            Instagram
          </p>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600, fontSize: "0.65rem", color: "#ec4899", margin: 0, textAlign: "center" }}>
            @{INSTAGRAM_HANDLE}
          </p>
        </a>

        {/* WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            borderRadius: "20px",
            padding: "20px 12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            background: "#fff",
            border: "1px solid #d1fae5",
            boxShadow: "0 2px 12px rgba(37, 211, 102, 0.08)",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "12px",
              background: "#25D366",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
          </div>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.7rem", color: "#831843", margin: 0, textAlign: "center" }}>
            WhatsApp
          </p>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600, fontSize: "0.58rem", color: "#25D366", margin: 0, textAlign: "center" }}>
            {WHATSAPP_NUMBER}
          </p>
        </a>
      </div>

      {/* CTA button */}
      <a
        href={INSTAGRAM_DM_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          width: "100%",
          padding: "15px",
          borderRadius: "18px",
          background: "linear-gradient(135deg, #f472b6 0%, #ec4899 100%)",
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 700,
          fontSize: "0.95rem",
          color: "#fff",
          textDecoration: "none",
          boxShadow: "0 4px 20px rgba(236, 72, 153, 0.35)",
          marginBottom: "20px",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
        Order Now on Instagram
      </a>

      {/* Bottom note */}
      <p
        style={{
          textAlign: "center",
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 400,
          fontSize: "0.68rem",
          color: "#be185d",
          opacity: 0.45,
          margin: 0,
        }}
      >
        © 2026 Bake Spot · Made with 🩷 for cake lovers
      </p>
    </footer>
  );
}
