import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "BS Developer - Desenvolvimento Web & Sistemas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0A",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            BS
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#2563EB",
            }}
          >
            Developer
          </span>
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#A1A1AA",
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          Seu projeto digital, do zero à produção.
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#71717A",
            marginTop: 16,
          }}
        >
          Sites · Sistemas · Apps · SaaS
        </div>
      </div>
    ),
    { ...size }
  );
}
