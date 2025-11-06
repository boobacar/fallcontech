import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgHero from "@/assets/articles/payment-gateways.svg";

const ArticlePaymentGatewaysIoT = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/passerelles-paiement-iot-wave-orange-free";
  const title = "Passerelles de paiement pour IoT: Wave, Orange Money, Free Money";
  const description = "Comparatif et bonnes pratiques pour intégrer des paiements mobiles dans des machines et solutions IoT au Sénégal (sécurité, confirmations côté serveur, fiabilité).";

  return (
    <>
      <SEO
        path={path}
        title={`Intégrations paiement IoT — ${title}`}
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
            publisher: { "@type": "Organization", name: "Fallcon Tech", logo: { "@type": "ImageObject", url: site + "/assets/logo.webp" } },
            mainEntityOfPage: site + path,
            description,
            articleSection: "Paiement",
            keywords: "Wave, Orange Money, Free Money, passerelle paiement, IoT, sécurité, Sénégal",
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
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Paiement IoT" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-lg text-muted-foreground">Fiabilité, sécurité et confirmations côté serveur</p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 text-sm">
            Vous avez une machine à équiper ? Découvrez nos{" "}
            <Link to="/services" className="text-blue-600 hover:underline">services d’intégration paiement IoT</Link>.
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <img alt="Cartes représentant différentes passerelles de paiement connectées à une machine IoT" className="w-full rounded-2xl shadow-xl mb-12" src={imgHero} loading="lazy" decoding="async" />

            <p>
              Pour les solutions IoT (distributeurs, kiosques, automatismes), accepter les paiements
              mobiles est un levier majeur. Voici les bonnes pratiques pour intégrer <strong>Wave</strong>,
              <strong>Orange Money</strong> et <strong>Free Money</strong> de manière fiable, sans entrer dans
              des détails techniques réplicables.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Bonnes pratiques essentielles</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li><strong>Validation côté serveur</strong>: la machine n’agit qu’après confirmation sécurisée.</li>
              <li><strong>Anti‑doublons</strong>: éviter les exécutions multiples grâce à des références uniques.</li>
              <li><strong>Sécurité</strong>: connexions chiffrées, secrets protégés, logs horodatés.</li>
              <li><strong>Résilience</strong>: fonctionnement sans réseau puis reprise automatique.</li>
              <li><strong>Traçabilité</strong>: journal des événements, export et alertes opérateur.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Choisir la passerelle</h2>
            <p>
              Votre choix dépend du mode d’encaissement, des frais, des SLA, et de la présence d’environnements de tests.
              Un agrégateur peut simplifier l’architecture si vous ciblez plusieurs moyens de paiement.
            </p>
          </motion.div>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link to="/contact"><Shield className="mr-2" size={18}/>Évaluer une intégration paiement</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticlePaymentGatewaysIoT;
