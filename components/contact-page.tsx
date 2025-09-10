"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Label } from "./ui/label";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="m-2 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo placeholder */}
          <div className="">
            <div className="mx-auto rounded-2xl flex items-center justify-center">
              <Image
                src="/logo-editheos.jpeg"
                alt="Editheos Logo"
                width={256}
                height={64}
                className="rounded-2xl cursor-pointer"
                onClick={() => {
                  window.location.href = "https://editheos.fr";
                }}
              />
            </div>
          </div>
          {/* Slogan */}
          <h1
            className="text-3xl md:text-5xl text-zinc-950 mb-2 font-bold"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            L&apos;édition qui inspire
          </h1>
          <p
            className="text-lg text-muted-foreground"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Promouvoir la foi, l&apos;espoir et l&apos;amour à travers
            l&apos;écriture
          </p>
        </div>
      </header>
      {/* Contact Section */}
      <main className="py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2
              className="text-2xl md:text-3xl font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Contactez-nous
            </h2>
            <p
              className="text-md text-muted-foreground max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Nous sommes là pour vous accompagner dans votre projet éditorial.
              N&apos;hésitez pas à nous contacter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card
                className="border-border cursor-pointer"
                onClick={() => {
                  window.location.href = "mailto:contact@editheos.fr";
                }}
              >
                <CardContent className="m-2">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="size-12 bg-accent rounded-full flex items-center justify-center">
                      <Mail className="size-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-semibold text-foreground"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Email
                      </h3>
                      <p
                        className="text-muted-foreground text-md"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Pour toute demande générale
                      </p>
                    </div>
                  </div>
                  <Label
                    // href="mailto:contact@editheos.fr"
                    className="text-md text-foreground hover:text-foreground/80 transition-colors ml-16"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    contact@editheos.fr
                  </Label>
                </CardContent>
              </Card>

              <Card
                className="border-border cursor-pointer"
                onClick={() => {
                  window.open("https://wa.me/33661356810", "_blank");
                }}
              >
                <CardContent className="m-2">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="size-12 bg-accent rounded-full flex items-center justify-center">
                      <MessageCircle className="size-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-semibold text-foreground"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        SMS / WhatsApp
                      </h3>
                      <p
                        className="text-muted-foreground text-md"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Contact rapide et direct
                      </p>
                    </div>
                  </div>
                  <Label
                    // href="https://wa.me/33661356810"
                    // target="_blank"
                    rel="noopener noreferrer"
                    className="text-md text-foreground hover:text-foreground/80 transition-colors text-left font-medium ml-16"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    +33 6 61 35 68 10
                  </Label>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-border">
              <CardContent className="m-2">
                <h3
                  className="text-2xl font-bold text-foreground mb-6"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Envoyez-nous un message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-foreground mb-2"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Prénom
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        className="border-border focus:ring-accent focus:border-accent"
                        style={{ fontFamily: "var(--font-inter)" }}
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-foreground mb-2"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Nom
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        className="border-border focus:ring-accent focus:border-accent"
                        style={{ fontFamily: "var(--font-inter)" }}
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="border-border focus:ring-accent focus:border-accent"
                      style={{ fontFamily: "var(--font-inter)" }}
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Message
                    </Label>
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
                    className="w-full bg-black hover:bg-accent/90 text-white font-medium py-3"
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
      {/* <footer className="bg-foreground text-primary-foreground py-2 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-2">
            <h4
              className="text-xl font-semibold text-accent mb-2"
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

          <div className="border-t border-accent/20 pt-2">
            <p
              className="text-sm text-secondary/60"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              © 2025 Editheos. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
