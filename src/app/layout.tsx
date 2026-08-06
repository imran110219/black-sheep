import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Black Sheep",
  description: "A documented public-interest accountability archive"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
