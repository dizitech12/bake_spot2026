import React, { useState, useEffect } from "react";
import { buildOrderMessage, INSTAGRAM_DM_URL, INSTAGRAM_PROFILE_URL, INSTAGRAM_HANDLE } from "../data/catalog";

interface OrderModalProps {
  cakeName: string;
  designRef: number;
  isVisible: boolean;
  onClose: () => void;
}

export function OrderModal({ cakeName, designRef, isVisible, onClose }: OrderModalProps) {
  const [animated, setAnimated] = useState(false);
  const [copied, setCopied] = useState(false);

  const message = buildOrderMessage(cakeName, designRef);

  useEffect(() => {
    if (isVisible) {
      setCopied(false);
      const t = setTimeout(() => setAnimated(true), 10);
      return () => clearTimeout(t);
    } else {
      setAnimated(false);
    }
  }, [isVisible]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // silent fail
    }
  };

  if (!isVisible && !animated) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 60,
          background: "rgba(131, 24, 67, 0.5)",
          backdropFilter: "blur(4px)",
          opacity: animated ? 1 : 0,
          transition: "opacity 0.25s ease",
        }}
      />

      {/* Modal centred in viewport */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "420px",
            borderRadius: "24px",
            overflow: "hidden",
            background: "#fff",
            boxShadow: "0 20px 60px rgba(236, 72, 153, 0.3)",
            pointerEvents: "auto",
            opacity: animated ? 1 : 0,
            transform: animated ? "scale(1) translateY(0)" : "scale(0.92) translateY(20px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          {/* Pink header */}
          <div
            style={{
              padding: "18px 20px 14px",
              background: "linear-gradient(135deg, #f472b6 0%, #ec4899 100%)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "1.8rem", marginBottom: "6px" }}>🎂</div>
            <h3
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 800,
                fontSize: "1.05rem",
                color: "#fff",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Ready to Order!
            </h3>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 500,
                fontSize: "0.78rem",
                color: "rgba(255,255,255,0.88)",
                margin: "4px 0 0",
              }}
            >
              Copy the message, then DM us on Instagram
            </p>
          </div>

          {/* Body */}
          <div style={{ padding: "16px 18px 0" }}>
            {/* Order chips */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "14px", flexWrap: "wrap" }}>
              <div
                style={{
                  padding: "5px 12px",
                  borderRadius: "999px",
                  background: "#fdf2f8",
                  border: "1px solid #fce7f3",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <span style={{ fontSize: "0.75rem" }}>🍰</span>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.73rem", color: "#831843" }}>
                  {cakeName}
                </span>
              </div>
              <div
                style={{
                  padding: "5px 12px",
                  borderRadius: "999px",
                  background: "#fdf2f8",
                  border: "1px solid #fce7f3",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <span style={{ fontSize: "0.75rem" }}>🖼️</span>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.73rem", color: "#831843" }}>
                  Design #{designRef}
                </span>
              </div>
            </div>

            {/* Pre-filled message box */}
            <div
              style={{
                borderRadius: "14px",
                padding: "12px 14px",
                marginBottom: "12px",
                background: "#fdf2f8",
                border: "1px dashed #f9a8d4",
              }}
            >
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.82rem",
                  color: "#831843",
                  lineHeight: 1.65,
                  whiteSpace: "pre-line",
                  margin: 0,
                }}
              >
                {message}
              </p>
            </div>

            {/* Copy message button */}
            <button
              onClick={handleCopy}
              style={{
                width: "100%",
                padding: "13px",
                borderRadius: "14px",
                border: `2px solid ${copied ? "#6ee7b7" : "#fce7f3"}`,
                background: copied ? "#ecfdf5" : "#fdf2f8",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: "0.88rem",
                color: copied ? "#059669" : "#ec4899",
                cursor: "pointer",
                transition: "all 0.2s ease",
                marginBottom: "10px",
              }}
            >
              {copied ? "✓ Message Copied!" : "📋 Copy Message First"}
            </button>

            {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <div style={{ flex: 1, height: "1px", background: "#fce7f3" }} />
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600, fontSize: "0.68rem", color: "#be185d", opacity: 0.6 }}>
                then choose how to order
              </span>
              <div style={{ flex: 1, height: "1px", background: "#fce7f3" }} />
            </div>

            {/* Two ordering buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "9px", paddingBottom: "18px" }}>

              {/* Option 1: Direct DM */}
              <a
                href={INSTAGRAM_DM_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "14px",
                  border: "none",
                  background: "linear-gradient(135deg, #f472b6 0%, #ec4899 100%)",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  boxShadow: "0 4px 14px rgba(236, 72, 153, 0.4)",
                  textDecoration: "none",
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                Open Instagram DM
              </a>

              {/* Option 2: Visit Profile */}
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "14px",
                  border: "2px solid #fce7f3",
                  background: "#fff",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  color: "#be185d",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  textDecoration: "none",
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                Visit @{INSTAGRAM_HANDLE}
              </a>

              {/* Instagram handle note */}
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.7rem",
                  color: "#be185d",
                  opacity: 0.6,
                  margin: "2px 0 0",
                }}
              >
                Paste your copied message in the DM 💬
              </p>

              {/* Close */}
              <button
                onClick={onClose}
                style={{
                  width: "100%",
                  padding: "8px",
                  background: "transparent",
                  border: "none",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.78rem",
                  color: "#be185d",
                  opacity: 0.55,
                  cursor: "pointer",
                }}
              >
                ← Keep browsing
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
