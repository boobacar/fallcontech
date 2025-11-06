import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgHero from "@/assets/articles/iot-esp32.svg";

const ArticlePaymentMachine = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/integrer-paiement-machine-eau-esp32-senegal";
  const title = "Intégrer un paiement mobile dans une machine de vente d’eau (ESP32)";
  const description = "Intégration Wave, Orange Money ou Free Money dans un distributeur d’eau avec ESP32 — approche éprouvée, sécurité et mise en service.";

  return (
    <>
      <SEO
        path={path}
        title={`Développeur IoT au Sénégal — ${title}`}
        description={description}
        image={imgHero}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            image: site + imgHero,
            datePublished: "2025-10-15",
            dateModified: "2025-10-15",
            author: { "@type": "Person", name: "Boubacar FALL" },
            publisher: {
              "@type": "Organization",
              name: "Fallcon Tech",
              logo: { "@type": "ImageObject", url: site + "/assets/logo.webp" },
            },
            mainEntityOfPage: site + path,
            description,
            articleSection: "IoT",
            keywords: "Développeur IoT Sénégal, ESP32, Arduino, paiement mobile, Wave, Orange Money, Free Money, machine de vente d'eau",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Peut‑on accepter Wave/OM/Free sur une machine ?",
                acceptedAnswer: { "@type": "Answer", text: "Oui, en passant par un partenaire de paiement avec des confirmations sécurisées côté serveur. La machine n’agit qu’après validation." }
              },
              {
                "@type": "Question",
                name: "Comment sécuriser l’intégration paiement ?",
                acceptedAnswer: { "@type": "Answer", text: "Connexions chiffrées, signatures vérifiées, contrôle d’accès opérateur et mises à jour à distance sécurisées. La logique critique est centralisée côté serveur." }
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: site + "/" },
              { "@type": "ListItem", position: 2, name: "Ressources", item: site + "/resources" },
              { "@type": "ListItem", position: 3, name: title, item: site + path },
            ],
          },
        ]}
      />

      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />
            Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Paiement machine d’eau" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-lg text-muted-foreground">Intégrations Wave, Orange Money, Free Money — Sécurité, tests, mise en service</p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 text-sm">
            Vous cherchez un développeur pour votre machine ? Découvrez nos{" "}
            <Link to="/services" className="text-blue-600 hover:underline">services IoT & embarqué</Link>.
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <img alt="Schéma d’une intégration paiement mobile sur ESP32 pour distributeur d’eau" className="w-full rounded-2xl shadow-xl mb-12" src={imgHero} loading="lazy" decoding="async" />

            <p>
              De plus en plus de kiosques et de machines de vente d’eau au Sénégal souhaitent
              accepter le paiement mobile (Wave, Orange Money, Free Money). Avec un <strong>ESP32</strong>,
              nous concevons des solutions <strong>fiables, sécurisées et prêtes pour l’exploitation</strong>.
              Voici comment nous conduisons ces projets pour garantir un résultat concret.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Ce que nous mettons en place</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li><strong>Contrôle machine</strong> (électrovannes, capteurs de débit/volume, affichage).</li>
              <li><strong>Paiement mobile</strong> avec confirmations <em>côté serveur</em> via un partenaire de paiement.</li>
              <li><strong>Serveur sécurisé</strong> pour valider et journaliser les transactions.</li>
              <li><strong>Fonctionnement hors‑ligne</strong> avec reprise automatique quand le réseau revient.</li>
              <li><strong>Suivi en temps utile</strong> (niveaux, erreurs, compteurs) sur un tableau de bord.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Processus en bref</h2>
            <ol className="list-decimal list-inside space-y-2 mb-8">
              <li>Le client initie le paiement (Wave/OM/Free).</li>
              <li>Le <strong>serveur</strong> confirme de manière sécurisée la réception du paiement.</li>
              <li>La machine s’active pour délivrer le volume défini.</li>
              <li>Les compteurs et événements sont journalisés pour suivi et support.</li>
            </ol>

            <h2 className="text-3xl font-bold mt-12 mb-6">Sécurité: points clés</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Validation stricte <strong>côté serveur</strong> (la machine n’agit qu’après confirmation).</li>
              <li>Connexions <strong>chiffrées</strong> et signatures vérifiées.</li>
              <li>Contrôles d’accès opérateur pour les actions manuelles.</li>
              <li>Journalisation complète (horodatage, références de paiement).</li>
              <li>Mises à jour à distance sécurisées et mots de passe robustes.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Tests & mise en service</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Banc d’essai avec simulateur de débit et réservoir.</li>
              <li>Environnement « sandbox » de la passerelle de paiement.</li>
              <li>Tests de coupure réseau/alimentation et reprise « idempotente ».</li>
              <li>Tableau de bord de supervision: volumes vendus, tentatives échouées, stocks.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <p className="text-sm">
                Besoin d’un accompagnement pour votre machine de vente d’eau ?
                Nous livrons des solutions robustes avec ESP32/Arduino et intégration
                Wave / Orange Money / Free Money, prêtes pour l’exploitation.
              </p>
            </div>
          </motion.div>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link to="/contact"><CreditCard className="mr-2" size={18}/>Parler d’intégration paiement</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticlePaymentMachine;
