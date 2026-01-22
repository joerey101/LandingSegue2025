import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const riviera = localFont({
  src: [
    { path: "./fonts/RivieraNightsTrial-Ultralight.otf", weight: "200", style: "normal" },
    { path: "./fonts/RivieraNightsTrial-UltralightItalic.otf", weight: "200", style: "italic" },
    { path: "./fonts/RivieraNightsTrial-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/RivieraNightsTrial-LightItalic.otf", weight: "300", style: "italic" },
    { path: "./fonts/RivieraNightsTrial-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/RivieraNightsTrial-RegularItalic.otf", weight: "400", style: "italic" },
    { path: "./fonts/RivieraNightsTrial-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/RivieraNightsTrial-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "./fonts/RivieraNightsTrial-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/RivieraNightsTrial-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "./fonts/RivieraNightsTrial-Black.otf", weight: "900", style: "normal" },
    { path: "./fonts/RivieraNightsTrial-BlackItalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-riviera",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://discover.segueyachts.com"),
  title: {
    default: "Segue Yachts | Astillero Argentino de Lujo",
    template: "%s | Segue Yachts"
  },
  description: "Descubre la nueva era de Segue Yachts. Astillero líder en Argentina, creando embarcaciones de lujo que redefinen los límites del diseño naval y la tecnología.",
  keywords: [
    "Segue Yachts", "Astillero Argentina", "Yates de Lujo", "Venta de Barcos Argentina",
    "Diseño Naval", "Barcos de Placer", "Luxury Yachts", "San Fernando", "Buenos Aires",
    "Embarcaciones Exclusivas", "Navegación", "Astillero Segue"
  ],
  authors: [{ name: "Segue Yachts" }],
  creator: "Segue Yachts",
  publisher: "Segue Yachts",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en',
      'es-AR': '/',
    },
  },
  openGraph: {
    title: "Segue Yachts | Rediseñando los Límites",
    description: "La Nueva Era de Segue. Rediseñando los límites del diseño naval desde Argentina para el mundo.",
    url: "https://discover.segueyachts.com",
    siteName: "Segue Yachts",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Segue Yachts - Luxury Naval Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Segue Yachts | Rediseñando los Límites",
    description: "Astillero líder en Argentina. Fusionamos arte y tecnología.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "aYcKuBIhjPqe_dkJa8I8xJKW1eVTsciX7uq_gNJGRsY",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Segue Yachts",
  "url": "https://discover.segueyachts.com",
  "logo": "https://discover.segueyachts.com/Segue-logo.svg",
  "description": "Astillero argentino líder en el diseño y construcción de yates de lujo.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Fernando",
    "addressRegion": "Buenos Aires",
    "addressCountry": "AR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "areaServed": "AR",
    "availableLanguage": ["Es", "En"]
  },
  "sameAs": [
    "https://www.instagram.com/segueyachts",
    "https://www.facebook.com/segueyachts"
  ]
};

import GoogleAnalytics from "@/components/GoogleAnalytics";

// ... (existing imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${riviera.variable} antialiased`}>
      <body className="bg-background-dark text-white font-sans overflow-x-hidden selection:bg-primary selection:text-white">
        <GoogleAnalytics GA_MEASUREMENT_ID="G-VBGF8FQ4PE" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
