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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}
        data-theme="light"
        suppressHydrationWarning
      >
        {/* Pre-paint script: enables reveal animations only when JS is available
            and restores the saved theme before first paint to avoid a flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{document.documentElement.classList.add('js');var t=localStorage.getItem('site-theme');if(t==='dark'||t==='light'){document.body.dataset.theme=t;}}catch(e){}})();"
          }}
        />
        {children}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-H8NNRN97NK"
        />
        <Script id="ga-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-H8NNRN97NK', { anonymize_ip: true, debug_mode: true });`}
        </Script>
      </body>
    </html>
  );
}
