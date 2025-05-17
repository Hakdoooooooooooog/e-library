import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "City Public Library of General Trias",
  description:
    "The City Public Library of General Trias is a public library located in General Trias, Cavite, Philippines. It provides access to a wide range of books, digital resources, and educational programs to support the community's learning and research needs.",
  openGraph: {
    title: "City Public Library of General Trias",
    description:
      "The City Public Library of General Trias is a public library located in General Trias, Cavite, Philippines. It provides access to a wide range of books, digital resources, and educational programs to support the community's learning and research needs.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/logo-hero.png`,
        width: 800,
        height: 600,
      },
    ],
  },
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
