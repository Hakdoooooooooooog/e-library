import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "General Trias City Public Library",
  description:
    "Building a Brighter Future: General Trias e-Library Empowers Students with Free Services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-serif">{children}</body>
    </html>
  );
}
