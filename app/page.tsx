import { ContactPage } from "@/components/contact-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts - Editheos | La maison d'édition qui inspire",
  description:
    "Contactez Editheos, la maison d'édition qui inspire. Trouvez nos coordonnées et envoyez-nous un message pour vos projets éditoriaux.",
  keywords: [
    "Editheos",
    "maison d'édition",
    "contacts",
    "inspiration",
    "livres",
    "foi",
    "espoir",
    "amour",
    "impression",
    "publication",
    "auteur",
    "écrivain",
    "édition chrétienne",
    "édition indépendante",
    "édition de qualité",
    "édition professionnelle",
    "édition de livres",
    "édition numérique",
    "édition papier",
    "édition religieuse",
    "édition spirituelle",
    "édition biblique",
    "édition de fiction",
  ],
  openGraph: {
    title: "Contacts - Editheos",
    description:
      "Contactez Editheos, la maison d'édition qui inspire. Trouvez nos coordonnées et envoyez-nous un message pour vos projets éditoriaux.",
    url: "https://contact.editheos.fr",
    siteName: "Editheos",
    images: [
      {
        url: "/logo-editheos.jpeg",
        width: 256,
        height: 256,
        alt: "Logo Editheos",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacts - Editheos | La maison d'édition qui inspire",
    description:
      "Contactez Editheos, la maison d'édition qui inspire. Trouvez nos coordonnées et envoyez-nous un message pour vos projets éditoriaux.",
    images: ["/logo-editheos.jpeg"],
  },
};

export default function Page() {
  return <ContactPage />;
}
