import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Suspense, type ReactNode } from "react";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Editheos - Contact",
  description: "Contactez Editheos pour vos besoins d'édition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`*:not-sr-only {scroll-margin-top: 6rem} ${inter.variable} ${montserrat.variable}`}
    >
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Chargement en cours...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
