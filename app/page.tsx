"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo placeholder */}
          <div className="mb-8">
            <div className="mx-auto rounded-2xl flex items-center justify-center mb-6">
              <Image
                src="/logo-editheos.jpg"
                alt="Editheos Logo"
                width={256}
                height={256}
                className="rounded-2xl"
                onClick={() => {
                  window.location.href = "https://editheos.fr";
                }}
              />
            </div>
          </div>
          {/* Slogan */}
          <h1
            className="text-4xl md:text-6xl text-zinc-950 mb-4 font-bold"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            L&apos;édition qui inspire
          </h1>
          <p
            className="text-xl text-muted-foreground"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Promouvoir la foi, l&apos;espoir et l&apos;amour à travers
            l&apos;écriture
          </p>
        </div>
      </header>
      {/* Contact Section */}
      <main className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Contactez-nous
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Nous sommes là pour vous accompagner dans votre projet éditorial.
              N&apos;hésitez pas à nous contacter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-semibold text-foreground"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Email
                      </h3>
                      <p
                        className="text-muted-foreground"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Pour toute demande générale
                      </p>
                    </div>
                  </div>
                  <a
                    href="mailto:contact@editheos.fr"
                    className="text-lg text-foreground hover:text-foreground/80 transition-colors"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    contact@editheos.fr
                  </a>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-semibold text-foreground"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        WhatsApp
                      </h3>
                      <p
                        className="text-muted-foreground"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Contact rapide et direct
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/33661356810"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-foreground hover:text-foreground/80 transition-colors text-left"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    +33 6 61 35 68 10
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-border">
              <CardContent className="p-8">
                <h3
                  className="text-2xl font-bold text-foreground mb-6"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Envoyez-nous un message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-foreground mb-2"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Prénom
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        className="border-border focus:ring-accent focus:border-accent"
                        style={{ fontFamily: "var(--font-inter)" }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-foreground mb-2"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Nom
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        className="border-border focus:ring-accent focus:border-accent"
                        style={{ fontFamily: "var(--font-inter)" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      className="border-border focus:ring-accent focus:border-accent"
                      style={{ fontFamily: "var(--font-inter)" }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      className="border-border focus:ring-accent focus:border-accent resize-none"
                      style={{ fontFamily: "var(--font-inter)" }}
                      placeholder="Décrivez votre projet éditorial..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-accent/90 text-accent-foreground font-semibold py-3"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h4
              className="text-xl font-bold text-accent mb-2"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Editheos
            </h4>
            <p
              className="text-secondary/80"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              La maison d&apos;édition qui inspire.
            </p>
          </div>

          <div className="border-t border-accent/20 pt-6">
            <p
              className="text-sm text-secondary/60"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              © 2025 Editheos. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
