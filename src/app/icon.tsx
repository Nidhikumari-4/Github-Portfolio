import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d1117",
          borderRadius: "6px",
          fontSize: 16,
          fontWeight: 700,
          color: "#58a6ff",
          letterSpacing: "-0.5px",
        }}
      >
        NK
      </div>
    ),
    { ...size }
  );
}
