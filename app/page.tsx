import { ContactPage } from "@/components/contact-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Editheos | Maison d'édition chrétienne à Lyon",
  description:
    "Contactez Editheos, votre maison d'édition chrétienne basée à Lyon. Nous sommes là pour vous accompagner dans vos projets éditoriaux et de publication.",
  keywords: [
    "Editheos",
    "Contact Editheos",
    "maison d'édition chrétienne Lyon",
    "éditeur chrétien Lyon",
    "publier livre chrétien Lyon",
    "maison d'édition Lyon",
    "contacts",
    "livres chrétiens",
    "foi",
    "espoir",
    "amour",
    "publication auteur chrétien",
    "édition religieuse Lyon",
    "édition spirituelle",
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
