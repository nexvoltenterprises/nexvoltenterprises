import { ImageResponse } from "next/og";

export const alt = "Nexvolt Enterprises — Premium Electronics & Audio Products";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0B0B0D",
          padding: "60px 80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Subtle background glow */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(11,11,13,0) 70%)",
          }}
        />

        {/* Top Header: Brand Wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "#171719",
              border: "1.5px solid #D4AF37",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
              <polygon
                points="26,6 13,26 21,26 17,42 34,19 25,19"
                fill="#D4AF37"
              />
            </svg>
          </div>
          <span
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              letterSpacing: "4px",
              color: "#FFFFFF",
            }}
          >
            NEXVOLT
          </span>
          <span
            style={{
              fontSize: "16px",
              letterSpacing: "3px",
              color: "#D4AF37",
              marginTop: "8px",
              fontWeight: 600,
            }}
          >
            ENTERPRISES
          </span>
        </div>

        {/* Center: Headline & Subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "rgba(212, 175, 55, 0.12)",
              border: "1px solid rgba(212, 175, 55, 0.3)",
              padding: "6px 16px",
              borderRadius: "50px",
              width: "auto",
            }}
          >
            <span style={{ fontSize: "14px", color: "#F2D675", fontWeight: 700, letterSpacing: "1px" }}>
              BENGALURU, KARNATAKA
            </span>
          </div>

          <h1
            style={{
              fontSize: "52px",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Consumer Electronics, Audio &amp; Charging Essentials
          </h1>

          <p
            style={{
              fontSize: "22px",
              color: "#C7C7C7",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Personal Audio &bull; Television Soundbars &bull; Fast Charging Power &bull; Commercial Supply
          </p>
        </div>

        {/* Bottom Bar: Trust Badges & Website */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "24px",
          }}
        >
          <span style={{ fontSize: "16px", color: "#D4AF37", fontWeight: 600 }}>
            www.nexvoltenterprises.com
          </span>
          <span style={{ fontSize: "16px", color: "#A0A0A0" }}>
            Direct WhatsApp Consultations &bull; +91 91805 95957
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
