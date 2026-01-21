import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { getSiteMetadata } from "@/lib/content";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = getSiteMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`} data-theme="light">
        {children}
        <Script
          strategy="afterInteractive"
          data-domain="shaforostov.pro"
          src="https://plausible.io/js/script.js"
        />
      </body>
    </html>
  );
}
