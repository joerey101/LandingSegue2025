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
  title: "Segue Yachts | Rediseñando los Límites",
  description: "La Nueva Era de Segue. Rediseñando los límites del diseño naval.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Segue Yachts | Rediseñando los Límites",
    description: "La Nueva Era de Segue. Rediseñando los límites del diseño naval.",
    url: "https://discover.segueyachts.com",
    siteName: "Segue Yachts",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${riviera.variable} antialiased`}>
      <body className="bg-background-dark text-white font-sans overflow-x-hidden selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
