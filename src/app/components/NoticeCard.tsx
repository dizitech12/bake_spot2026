import React from "react";

export function NoticeCard() {
  return (
    <section className="px-4 pb-6">
      <div
        className="rounded-3xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%)",
          border: "2px solid #fed7aa",
          boxShadow: "0 4px 20px rgba(251, 146, 60, 0.15)",
        }}
      >
        {/* Top accent bar */}
        <div
          className="h-1.5"
          style={{ background: "linear-gradient(to right, #fb923c, #f97316, #ea580c)" }}
        />

        <div className="px-5 py-4">
          {/* Icon + title */}
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: "rgba(251,146,60,0.15)" }}
            >
              ⏰
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 800,
                  fontSize: "1rem",
                  color: "#9a3412",
                  lineHeight: 1.2,
                }}
              >
                Advance Order Notice
              </h3>
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.72rem",
                  color: "#c2410c",
                  opacity: 0.8,
                }}
              >
                Please read before ordering
              </p>
            </div>
          </div>

          {/* Main notice */}
          <div
            className="rounded-2xl px-4 py-3 mb-3"
            style={{ background: "rgba(251,146,60,0.1)", border: "1px solid #fed7aa" }}
          >
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "#9a3412",
                textAlign: "center",
              }}
            >
              🎂 Please order at least <span style={{ color: "#ea580c" }}>1 day before</span> your event
            </p>
          </div>

          {/* Additional notes */}
          <div className="flex flex-col gap-2">
            {[
              { icon: "📅", text: "Custom theme cakes need 2–3 days advance notice" },
              { icon: "💌", text: "DM us on Instagram to confirm your order" },
              { icon: "🏠", text: "Home delivery available · Pickup also available" },
            ].map((note, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <span style={{ fontSize: "0.9rem", flexShrink: 0 }}>{note.icon}</span>
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.78rem",
                    color: "#c2410c",
                  }}
                >
                  {note.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
