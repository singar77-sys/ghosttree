import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Khand } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import JsonLd from "@/components/JsonLd";
import ThemeProvider from "@/components/ThemeProvider";
import ConversionEvents from "@/components/ConversionEvents";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { localBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const khand = Khand({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-display", display: "swap" });
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap"
});
const bespokeSerif = localFont({
  src: [
    { path: "./fonts/bespoke-serif-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/bespoke-serif-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/bespoke-serif-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/bespoke-serif-700.woff2", weight: "700", style: "normal" }
  ],
  variable: "--font-body",
  display: "swap"
});

const homeTitle = "Tree Service in Medina County, OH | Ghost Tree Service";

// Preview / non-production deploys must not be indexed — a canonical tag alone isn't a hard block.
const isProduction = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: homeTitle, template: "%s | Ghost Tree Service" },
  description: site.description,
  alternates: { canonical: "/" },
  robots: isProduction ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: homeTitle,
    description: site.description,
    images: ["/images/og-card.jpg"]
  },
  twitter: { card: "summary_large_image", title: homeTitle, description: site.description, images: ["/images/og-card.jpg"] }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${khand.variable} ${mono.variable} ${bespokeSerif.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <JsonLd data={localBusinessSchema()} />
          <Header />
          <main>{children}</main>
          <Footer />
          <StickyCallBar />
          <ConversionEvents />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
