import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fawn & Finch | Wildly lovely things",
  description: "A self-directed animal-inspired fashion and accessories e-commerce web design concept."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
