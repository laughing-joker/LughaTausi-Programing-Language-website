import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar"; // Adjust the path as necessary
import Footer from "@/components/Footer"; // Adjust the path as necessary
import { ThemeProvider } from "@/components/theme-provider";
import dynamic from "next/dynamic"; // For lazy loading
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const SarufiChatbox = dynamic(() => import("react-sarufi-chatbox"), {
  ssr: false,
});

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
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={`${inter.className} bg-gradient-to-b from-gray-900 via-black to-gray-900`}
        >
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </body>
      </ThemeProvider>
    </html>
  );
}
