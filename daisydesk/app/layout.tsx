import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DaisyDesk | Small business, beautifully organized",
  description: "A self-directed web design concept for a cheerful small-business client management platform."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
