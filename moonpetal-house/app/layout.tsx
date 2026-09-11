import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moonpetal House | Stay somewhere softer",
  description: "A self-directed luxury boutique hotel and retreat web design concept."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
