import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgEcommerce from "@/assets/articles/pos_system_shop_senegal.png";

const ArticleCrerBoutiqueEnLigneSenegal = () => {
  const path = "/article/creer-boutique-en-ligne-senegal";
  const title = "Créer une boutique en ligne au Sénégal : guide complet 2026";
  const description =
    "Comment créer une boutique en ligne au Sénégal avec Wave, Orange Money et livraison locale : technologies, coûts, étapes clés et erreurs à éviter pour vendre en ligne à Dakar et partout au Sénégal.";

  const faq = [
    {
      q: "Quel est le coût de création d'une boutique en ligne au Sénégal ?",
      a: "Une boutique simple avec catalogue et paiement Wave démarre à 600 000 F CFA. Une boutique complète avec gestion des stocks, livraison et back-office vendeur démarre à 1 500 000 F CFA.",
    },
    {
      q: "Peut-on intégrer Wave et Orange Money sur un site e-commerce ?",
      a: "Oui. Nous intégrons Wave Business, Orange Money et Free Money directement sur votre boutique. Le client paie en quelques secondes depuis son téléphone, sans carte bancaire.",
    },
    {
      q: "Faut-il utiliser Shopify ou un développement sur mesure ?",
      a: "Shopify est coûteux en frais mensuels et limité pour le marché sénégalais (paiements mobiles, livraison locale). Un développement sur mesure en React + Firebase est souvent plus adapté et moins cher à long terme.",
    },
    {
      q: "Comment gérer la livraison locale dans ma boutique en ligne ?",
      a: "Nous intégrons un module de zones de livraison par quartier (Dakar, Thiès, etc.) avec calcul automatique des frais et notifications WhatsApp au client et au livreur.",
    },
  ];

  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");

  return (
    <>
      <SEO
        path={path}
        title={`${title} | Fallcon Tech`}
        description={description}
        image={imgEcommerce}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description,
            image: site + imgEcommerce,
            datePublished: "2026-04-26",
            dateModified: "2026-04-26",
            author: { "@type": "Person", name: "Boubacar FALL" },
            publisher: {
              "@type": "Organization",
              name: "Fallcon Tech",
              logo: { "@type": "ImageObject", url: site + "/logo.png" },
            },
            mainEntityOfPage: site + path,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />

      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Boutique en ligne Sénégal" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-xl text-foreground/70 max-w-2xl">Vendre en ligne au Sénégal, c'est possible avec Wave et Orange Money. Voici le plan complet pour lancer votre boutique en ligne à Dakar.</p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <img alt={title} className="w-full rounded-2xl shadow-xl mb-10" src={imgEcommerce} loading="lazy" decoding="async" />

          <h2>Le e-commerce au Sénégal en 2026 : une opportunité réelle</h2>
          <p>
            Le commerce en ligne explose au Sénégal. Avec <strong>plus de 7 millions d'utilisateurs de Wave</strong> et une pénétration mobile en forte hausse, les Sénégalais achètent de plus en plus en ligne — vêtements, alimentation, cosmétiques, électronique, services.
          </p>
          <p>
            Les entreprises qui ont ouvert leur boutique en ligne entre 2023 et 2025 ont généralement doublé leur clientèle. Ce guide vous explique comment faire de même, avec le bon budget et la bonne technologie.
          </p>

          <h2>Les incontournables d'une boutique en ligne réussie au Sénégal</h2>

          <h3>1. Paiement mobile natif</h3>
          <p>En France, les gens paient par carte. Au Sénégal, ils paient par <strong>Wave, Orange Money, Free Money</strong>. Si votre boutique n'accepte pas ces modes de paiement, vous perdez 80 % de vos clients potentiels. Nous intégrons ces passerelles directement dans votre site.</p>

          <h3>2. Interface 100 % mobile-first</h3>
          <p>Plus de 90 % des achats en ligne au Sénégal se font depuis un smartphone. Votre boutique doit être rapide, claire et simple à utiliser sur un écran de 6 pouces, même avec une connexion 3G.</p>

          <h3>3. Gestion des livraisons locales</h3>
          <p>Contrairement à l'Europe, les adresses sénégalaises ne sont pas toujours précises. Votre boutique doit proposer : sélection par quartier, point de retrait, ou confirmation de l'adresse par WhatsApp. Nous intégrons cette logique directement dans le tunnel d'achat.</p>

          <h3>4. Back-office vendeur simple</h3>
          <p>Vous devez pouvoir gérer vos produits, stocks, commandes et livraisons sans avoir besoin d'un développeur. Nous livrons une interface d'administration claire et formée.</p>

          <h2>Technologies recommandées pour votre boutique en ligne</h2>
          <ul>
            <li><strong>React + Firebase</strong> — notre stack principal : rapide à développer, performant, scalable, et adapté aux marchés émergents</li>
            <li><strong>Next.js + Stripe/Wave</strong> — pour les boutiques avec beaucoup de produits et des besoins SEO avancés</li>
            <li><strong>WooCommerce (WordPress)</strong> — option économique si vous avez déjà un site WordPress, mais limité pour les paiements mobiles sénégalais</li>
          </ul>
          <p>À lire : <Link to="/article/wordpress-vs-nextjs-seo">WordPress vs Next.js — quel choix pour votre e-commerce ?</Link></p>

          <h2>Combien coûte une boutique en ligne au Sénégal ?</h2>
          <div className="bg-card rounded-xl p-6 shadow-md not-prose mb-6">
            <table className="w-full text-sm">
              <thead><tr className="border-b"><th className="text-left py-2">Type de boutique</th><th className="text-right py-2">Budget</th></tr></thead>
              <tbody>
                <tr className="border-b"><td className="py-2">Boutique vitrine (catalogue + WhatsApp)</td><td className="text-right">350 000 – 600 000 F CFA</td></tr>
                <tr className="border-b"><td className="py-2">Boutique avec panier + Wave/Orange Money</td><td className="text-right">700 000 – 1 500 000 F CFA</td></tr>
                <tr className="border-b"><td className="py-2">Boutique complète (stocks, livraison, back-office)</td><td className="text-right">1 500 000 – 3 000 000 F CFA</td></tr>
                <tr><td className="py-2">Marketplace multi-vendeurs</td><td className="text-right">4 000 000 F CFA +</td></tr>
              </tbody>
            </table>
          </div>
          <p>Consultez aussi notre <Link to="/pricing">page des tarifs</Link> ou notre guide <Link to="/article/cout-creation-site-web-senegal-prix">prix d'un site web au Sénégal</Link>.</p>

          <h2>Plan de lancement en 5 étapes</h2>
          <ol>
            <li><strong>Définir votre catalogue</strong> — photos produits, descriptions, prix, variantes (tailles, couleurs)</li>
            <li><strong>Choisir votre mode de livraison</strong> — à domicile, point relais, retrait boutique</li>
            <li><strong>Configurer vos paiements</strong> — ouvrir un compte Wave Business ou Orange Money Pro</li>
            <li><strong>Lancer un MVP</strong> — 10 à 20 produits, 1 mode de livraison, 1 mode de paiement</li>
            <li><strong>Optimiser et scaler</strong> — analytics, SEO e-commerce, publicité Facebook/Instagram, fidélisation</li>
          </ol>

          <h2>SEO pour votre boutique en ligne</h2>
          <p>Une boutique bien référencée sur Google capte des clients gratuitement. Les bases essentielles :</p>
          <ul>
            <li>URLs propres pour chaque produit et catégorie</li>
            <li>Balises title et meta description uniques par page produit</li>
            <li>Schema <code>Product</code> avec prix, disponibilité et avis</li>
            <li>Pages catégories optimisées avec contenu texte</li>
            <li>Vitesse de chargement sous 2 secondes sur mobile</li>
          </ul>
          <p>Lire notre guide complet : <Link to="/article/seo-ecommerce-senegal-guide-2026">SEO e-commerce au Sénégal 2026</Link>.</p>

          <h2>FAQ — Boutique en ligne Sénégal</h2>
          {faq.map((f, i) => (
            <div key={i}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}

          <div className="not-prose mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Lancer ma boutique en ligne</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://wa.me/221776260020" target="_blank" rel="noopener noreferrer">
                Parler sur WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleCrerBoutiqueEnLigneSenegal;
