import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { seoKeywords } from "@/lib/constants";
import { carRentalSchema } from "@/lib/schema";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsapp } from "@/components/layout/floating-whatsapp";
import { QueryProvider } from "@/components/providers/query-provider";
import { SkipLink } from "@/components/layout/skip-link";

const primaryFont = Poppins({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://galaxycarhire.com"),
  title: {
    default: "Galaxy CarHire | Luxury Car Rentals in Nairobi",
    template: "%s | Galaxy CarHire",
  },
  description:
    "Premium Nairobi car rentals with luxury SUVs, saloons, and executive vans. Self-drive, chauffeurs, airport pickups, and corporate leasing available 24/7.",
  keywords: seoKeywords,
  openGraph: {
    title: "Galaxy CarHire | Nairobi Luxury Car Rentals",
    description:
      "Drive luxury SUVs, saloons, and executive vans across Nairobi and major Kenyan towns.",
    url: "https://galaxycarhire.com",
    siteName: "Galaxy CarHire",
    images: [
      {
        url: "/assets/cars/LUXURIOSPRADOSUV.png",
        width: 1200,
        height: 630,
        alt: "Galaxy CarHire premium SUVs in Nairobi",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  alternates: {
    canonical: "https://galaxycarhire.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${primaryFont.variable} ${displayFont.variable} bg-night text-ivory antialiased`}
      >
        <SkipLink />
        <QueryProvider>
          <Header />
          <main id="main" className="flex flex-col gap-24 bg-night">
            {children}
          </main>
          <Footer />
          <FloatingWhatsapp />
        </QueryProvider>
        <Script
          id="schema-car-rental"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(carRentalSchema) }}
        />
      </body>
    </html>
  );
}
