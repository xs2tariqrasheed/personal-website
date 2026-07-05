import { ImageResponse } from "next/og";
import { profile } from "@/lib/profile";

export const alt = `${profile.personal.name} — ${profile.personal.title}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  const { personal } = profile;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#ededed",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: "120px",
            height: "8px",
            background: "#7c6cf5",
            borderRadius: "4px",
            marginBottom: "48px",
          }}
        />
        <div style={{ fontSize: "72px", fontWeight: 700, marginBottom: "24px" }}>
          {personal.name}
        </div>
        <div style={{ fontSize: "36px", color: "#9a9aa3" }}>
          {personal.title}
        </div>
        <div style={{ fontSize: "28px", color: "#7c6cf5", marginTop: "48px" }}>
          {personal.tagline}
        </div>
      </div>
    ),
    size,
  );
}
