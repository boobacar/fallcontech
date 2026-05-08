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
  const title = "Intégrer Wave ou Orange Money sur une machine à pièces (ESP32)";
  const description = "Intégration Wave, Orange Money ou Free Money sur distributeur automatique, machine de vente, borne ou équipement à monnayeur avec ESP32.";

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
            dateModified: "2026-05-08",
            author: { "@type": "Person", name: "Boubacar FALL" },
            publisher: {
              "@type": "Organization",
              name: "Fallcon Tech",
              logo: { "@type": "ImageObject", url: site + "/assets/logo.webp" },
            },
            mainEntityOfPage: site + path,
            description,
            articleSection: "IoT",
            keywords: "Développeur IoT Sénégal, ESP32, Arduino, paiement mobile, Wave, Orange Money, Free Money, machine à pièces, monnayeur, distributeur automatique, machine de vente",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Peut-on accepter Wave/OM/Free sur une machine à pièces ?",
                acceptedAnswer: { "@type": "Answer", text: "Oui, en ajoutant une intégration mobile money qui valide le paiement côté serveur avant d'activer la machine. Le paiement en pièces peut souvent être conservé." }
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
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Paiement machine à pièces" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-lg text-muted-foreground">Distributeurs automatiques, machines de vente, bornes, monnayeurs — sécurité, tests, mise en service</p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 text-sm">
            Vous cherchez un développeur pour votre machine ? Découvrez nos{" "}
            <Link to="/services/integration-paiement-mobile-money-machines" className="text-blue-600 hover:underline">
              service d'intégration mobile money sur machines
            </Link>.
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <img alt="Schéma d'une intégration paiement mobile sur ESP32 pour machine à pièces" className="w-full rounded-2xl shadow-xl mb-12" src={imgHero} loading="lazy" decoding="async" />

            <p>
              De plus en plus de kiosques, distributeurs automatiques et machines de vente au Sénégal
              veulent accepter le paiement mobile en plus des pièces. Quand une machine fonctionne déjà
              avec un <strong>monnayeur</strong>, nous pouvons étudier sa carte de commande et ajouter
              Wave, Orange Money ou Free Money comme moyen de paiement complémentaire.
            </p>

            <p>
              Avec un <strong>ESP32</strong>, un module de contrôle adapté et une validation côté serveur,
              nous concevons des solutions <strong>fiables, sécurisées et prêtes pour l’exploitation</strong>.
              Cette approche convient aux machines de vente d'eau, bornes de service, laveries,
              équipements à relais et automatismes qui prennent généralement des pièces.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Ce que nous mettons en place</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li><strong>Audit du monnayeur</strong>, du câblage, de la carte de commande et du cycle de vente.</li>
              <li><strong>Contrôle machine</strong> (relais, électrovannes, capteurs, moteur, affichage).</li>
              <li><strong>Paiement mobile</strong> avec confirmations <em>côté serveur</em> via un partenaire de paiement.</li>
              <li><strong>Serveur sécurisé</strong> pour valider et journaliser les transactions.</li>
              <li><strong>Fonctionnement hors‑ligne</strong> avec reprise automatique quand le réseau revient.</li>
              <li><strong>Suivi en temps utile</strong> (niveaux, erreurs, compteurs) sur un tableau de bord.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Processus en bref</h2>
            <ol className="list-decimal list-inside space-y-2 mb-8">
              <li>Le client initie le paiement (Wave/OM/Free).</li>
              <li>Le <strong>serveur</strong> confirme de manière sécurisée la réception du paiement.</li>
              <li>La machine s’active pour délivrer le produit, le volume ou le cycle défini.</li>
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

            <h2 className="text-3xl font-bold mt-12 mb-6">Machines concernées</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Distributeur d'eau, fontaine automatique ou borne de remplissage.</li>
              <li>Machine de vente avec monnayeur: snack, consommable, jeton, recharge ou service.</li>
              <li>Laverie, borne d'accès, kiosque ou équipement pilotable par relais.</li>
              <li>Prototype industriel nécessitant paiement mobile, télémétrie et supervision.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Tests & mise en service</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Banc d'essai avec simulation du monnayeur, de la commande et du cycle de vente.</li>
              <li>Environnement « sandbox » de la passerelle de paiement.</li>
              <li>Tests de coupure réseau/alimentation et reprise « idempotente ».</li>
              <li>Tableau de bord de supervision: volumes vendus, tentatives échouées, stocks.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <p className="text-sm">
                Besoin d'un accompagnement pour une machine qui prend actuellement des pièces ?
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
