import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LughaTausi",
  description:
    "Tovuti rasmi ya LughaTausi, imeundwa na Filoteus Ngonyani na John Makweba.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-gray-900 via-black to-gray-900 `}
      >
        {children}
      </body>
    </html>
  );
}
