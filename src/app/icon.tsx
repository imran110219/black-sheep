import { ImageResponse } from "next/og";

export const size = {
  width: 48,
  height: 48
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#17191c",
        borderRadius: 8
      }}
    >
      <div
        style={{
          width: 30,
          height: 27,
          display: "flex",
          position: "relative",
          color: "#f4f1ea"
        }}
      >
        <div
          style={{
            width: 15,
            height: 24,
            background: "currentColor",
            borderRadius: "2px 0 0 2px",
            transform: "skewY(-7deg)"
          }}
        />
        <div
          style={{
            width: 15,
            height: 24,
            background: "#b8b1a5",
            borderRadius: "0 2px 2px 0",
            transform: "skewY(7deg)"
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 14,
            top: 2,
            width: 2,
            height: 24,
            background: "#17191c"
          }}
        />
      </div>
    </div>,
    { ...size }
  );
}
