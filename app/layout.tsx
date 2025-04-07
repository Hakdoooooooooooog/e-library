import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const robotoFont = Roboto({
  variable: "--font-roboto-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

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
      <body className={`${robotoFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
