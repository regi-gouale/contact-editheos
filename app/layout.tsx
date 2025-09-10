import { SuspenseLoader } from "@/components/suspense-loader";
import { Analytics } from "@vercel/analytics/next";
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
      <head>
        <link rel="icon" href="/logo-editheos.jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Editheos",
              description:
                "Maison d'édition chrétienne à Lyon qui inspire. Nous accompagnons les auteurs dans leurs projets éditoriaux.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lyon",
                addressCountry: "FR",
              },
              email: "contact@editheos.fr",
              telephone: "+33661356810",
              url: "https://contact.editheos.fr",
              logo: "https://contact.editheos.fr/logo-editheos.jpeg",
              image: "https://contact.editheos.fr/logo-editheos.jpeg",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} h-screen`}>
        <Suspense fallback={<SuspenseLoader />}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
