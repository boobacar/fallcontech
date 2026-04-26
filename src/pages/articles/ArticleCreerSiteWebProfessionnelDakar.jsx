import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgWeb from "@/assets/articles/online-reservation-system.png";

const ArticleCreerSiteWebProfessionnelDakar = () => {
  const path = "/article/creer-site-web-professionnel-dakar";
  const title = "Créer un site web professionnel à Dakar : le guide complet 2026";
  const description =
    "Guide étape par étape pour créer un site web professionnel à Dakar : types de sites, coûts réels, technologies, délais, SEO et comment choisir le bon prestataire au Sénégal.";

  const faq = [
    {
      q: "Combien coûte la création d'un site web professionnel à Dakar ?",
      a: "Un site vitrine professionnel à Dakar démarre à 350 000 F CFA. Un site avec réservation ou e-commerce se situe entre 700 000 et 2 000 000 F CFA. Le prix dépend du nombre de pages, des fonctionnalités et des intégrations (paiement, CRM, analytics).",
    },
    {
      q: "En combien de temps peut-on créer un site web à Dakar ?",
      a: "Un site vitrine est livrable en 1 à 2 semaines. Un site e-commerce ou avec système de réservation prend 3 à 6 semaines. Tout dépend de la rapidité de vos validations et de la disponibilité du contenu (textes, images).",
    },
    {
      q: "Faut-il un site WordPress ou un développement React/Next.js ?",
      a: "WordPress est bon pour les blogs et sites simples avec petit budget. React/Next.js offre des performances bien supérieures, un meilleur SEO technique et une sécurité accrue — recommandé pour tout site business sérieux.",
    },
    {
      q: "Le SEO est-il inclus dans la création du site ?",
      a: "Chez Fallcon Tech, le SEO technique de base est toujours inclus : balises title/meta, sitemap XML, structure Hn correcte, Google Analytics, Search Console et vitesse optimisée. Le SEO éditorial (stratégie de contenu) fait l'objet d'une prestation séparée.",
    },
    {
      q: "Puis-je modifier mon site moi-même après livraison ?",
      a: "Oui. Nous livrons un tableau de bord simple pour modifier les textes, images et actualités sans connaissances techniques. Une formation est incluse dans tous nos projets.",
    },
  ];

  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");

  return (
    <>
      <SEO
        path={path}
        title={`${title} | Fallcon Tech`}
        description={description}
        image={imgWeb}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description,
            image: site + imgWeb,
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
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Comment créer un site web professionnel à Dakar",
            description: "Étapes pour créer un site web professionnel au Sénégal",
            step: [
              { "@type": "HowToStep", position: 1, name: "Définir vos objectifs", text: "Définissez clairement le but du site : vitrine, génération de leads, réservation, vente en ligne." },
              { "@type": "HowToStep", position: 2, name: "Choisir le bon prestataire", text: "Évaluez le portfolio, les références clients et la capacité à livrer SEO + design + performance." },
              { "@type": "HowToStep", position: 3, name: "Fournir le contenu", text: "Préparez vos textes, images, logo et informations de contact avant de commencer." },
              { "@type": "HowToStep", position: 4, name: "Valider le design", text: "Approuvez les maquettes avant le développement pour éviter des retours coûteux." },
              { "@type": "HowToStep", position: 5, name: "Tester et lancer", text: "Testez sur mobile, vérifiez la vitesse, configurez Analytics et Search Console, puis mettez en ligne." },
            ],
          },
        ]}
      />

      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Site web professionnel Dakar" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-xl text-foreground/70 max-w-2xl">Tout ce qu'il faut savoir pour créer un site web qui génère vraiment des clients à Dakar et au Sénégal — de zéro jusqu'au lancement.</p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <img alt={title} className="w-full rounded-2xl shadow-xl mb-10" src={imgWeb} loading="lazy" decoding="async" />

          <h2>Pourquoi votre entreprise a besoin d'un site web professionnel en 2026</h2>
          <p>
            Au Sénégal, <strong>plus de 70 % des consommateurs recherchent un prestataire ou un produit sur Google avant de prendre contact</strong>. Si votre entreprise n'est pas visible en ligne, vous perdez ces prospects au profit de vos concurrents.
          </p>
          <p>
            Un site web professionnel, c'est votre carte de visite permanente, votre commercial disponible 24h/24, et votre principal outil de crédibilité aux yeux de nouveaux clients.
          </p>

          <h2>Les types de sites web professionnels</h2>

          <h3>Site vitrine</h3>
          <p>Présente votre entreprise, vos services et vos coordonnées. Idéal pour les PME, cabinets, artisans, professionnels de santé. Objectif : générer des appels, messages WhatsApp et formulaires de contact.</p>

          <h3>Site avec système de réservation</h3>
          <p>Cliniques, restaurants, salons, coaches, consultants. Permet aux clients de prendre rendez-vous en ligne, 24h/24. Réduit les appels entrants et automatise les rappels. Voir notre réalisation : <Link to="/case-study/clinic">site Clinique DABIA</Link>.</p>

          <h3>Site e-commerce</h3>
          <p>Boutique en ligne avec catalogue produits, panier, paiement Wave/Orange Money et gestion des commandes. Voir notre guide : <Link to="/article/creer-boutique-en-ligne-senegal">créer une boutique en ligne au Sénégal</Link>.</p>

          <h3>Landing page (page de vente)</h3>
          <p>Page unique ultra-ciblée pour une offre précise. Taux de conversion élevé, idéale pour les campagnes publicitaires Facebook/Instagram, les lancements de produit et les promotions.</p>

          <h3>Plateforme web (SaaS, intranet, portail)</h3>
          <p>Application web complexe avec espace membres, tableaux de bord, gestion documentaire. Voir : <Link to="/case-study/telimanshare">TelimanShare</Link>.</p>

          <h2>Les étapes de création d'un site web professionnel</h2>

          <h3>Étape 1 — Définir les objectifs</h3>
          <p>Avant de parler design, répondez à ces questions :</p>
          <ul>
            <li>Quel est l'objectif principal ? (appel, devis, réservation, achat)</li>
            <li>Qui est votre client cible ? (particuliers, entreprises, cliniques, expatriés...)</li>
            <li>Quels mots-clés vos clients tapent-ils sur Google ?</li>
            <li>Quelle action voulez-vous que le visiteur fasse sur chaque page ?</li>
          </ul>

          <h3>Étape 2 — Choisir la technologie adaptée</h3>
          <p>Notre recommandation pour chaque cas :</p>
          <ul>
            <li><strong>Site vitrine simple</strong> — React + Tailwind CSS (rapide, sécurisé, SEO-friendly)</li>
            <li><strong>Site avec beaucoup de contenu/blog</strong> — Next.js (SEO optimal)</li>
            <li><strong>E-commerce</strong> — React + Firebase ou Next.js + Stripe/Wave</li>
            <li><strong>Budget très serré</strong> — WordPress avec thème léger (mais attention aux performances)</li>
          </ul>
          <p>Lire : <Link to="/article/wordpress-vs-nextjs-seo">WordPress vs Next.js — comparatif complet</Link>.</p>

          <h3>Étape 3 — Préparer le contenu</h3>
          <p>Le contenu, c'est ce qui prend le plus de temps et bloque le plus de projets. Préparez avant de commencer :</p>
          <ul>
            <li>Textes de chaque page (description de services, présentation, FAQ)</li>
            <li>Photos de qualité (locaux, équipe, produits)</li>
            <li>Logo en haute résolution (.svg ou .png)</li>
            <li>Informations de contact, horaires, adresse</li>
            <li>Témoignages clients si disponibles</li>
          </ul>

          <h3>Étape 4 — Design et maquettes</h3>
          <p>Avant de coder, nous créons les maquettes (wireframes + design visuel) pour validation. Cela évite des modifications coûteuses en cours de développement.</p>

          <h3>Étape 5 — Développement et intégrations</h3>
          <p>Développement des pages, intégration des formulaires, Analytics, Search Console, paiements si e-commerce, et optimisation des performances.</p>

          <h3>Étape 6 — Tests, recette et lancement</h3>
          <ul>
            <li>Test sur mobile (Android et iOS)</li>
            <li>Test de vitesse (PageSpeed Insights — cible : score 90+)</li>
            <li>Vérification SEO de base (titles, metas, sitemap, indexation)</li>
            <li>Formation du client à la gestion du contenu</li>
            <li>Mise en ligne et monitoring pendant 72h</li>
          </ul>

          <h2>Les critères d'un bon site web professionnel</h2>
          <ul>
            <li>✅ <strong>Vitesse</strong> — chargement en moins de 2 secondes sur mobile 4G</li>
            <li>✅ <strong>Mobile-first</strong> — optimisé pour les smartphones (85 % du trafic sénégalais)</li>
            <li>✅ <strong>SEO technique</strong> — balises, sitemap, schema.org, Core Web Vitals</li>
            <li>✅ <strong>Appel à l'action clair</strong> — bouton WhatsApp, formulaire, téléphone visible</li>
            <li>✅ <strong>Sécurité</strong> — HTTPS, protection contre les attaques, backups</li>
            <li>✅ <strong>Analytics</strong> — Google Analytics 4 + Search Console configurés</li>
          </ul>

          <h2>Coûts réels de création de site web à Dakar</h2>
          <div className="bg-card rounded-xl p-6 shadow-md not-prose mb-6">
            <table className="w-full text-sm">
              <thead><tr className="border-b"><th className="text-left py-2">Type de site</th><th className="text-right py-2">Fourchette de prix</th><th className="text-right py-2">Délai</th></tr></thead>
              <tbody>
                <tr className="border-b"><td className="py-2">Site vitrine (3-5 pages)</td><td className="text-right">350 000 – 600 000 F</td><td className="text-right">1-2 sem.</td></tr>
                <tr className="border-b"><td className="py-2">Site avec blog et SEO</td><td className="text-right">500 000 – 900 000 F</td><td className="text-right">2-3 sem.</td></tr>
                <tr className="border-b"><td className="py-2">Site avec réservation en ligne</td><td className="text-right">800 000 – 1 500 000 F</td><td className="text-right">3-4 sem.</td></tr>
                <tr className="border-b"><td className="py-2">Site e-commerce</td><td className="text-right">900 000 – 2 500 000 F</td><td className="text-right">4-8 sem.</td></tr>
                <tr><td className="py-2">Plateforme web complète</td><td className="text-right">2 500 000 F +</td><td className="text-right">6-12 sem.</td></tr>
              </tbody>
            </table>
          </div>
          <p>Guide détaillé : <Link to="/article/prix-site-web-senegal-2026">Combien coûte un site web au Sénégal en 2026 ?</Link></p>

          <h2>FAQ — Création de site web à Dakar</h2>
          {faq.map((f, i) => (
            <div key={i}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}

          <h2>Articles liés</h2>
          <p>
            <Link to="/services/creation-site-web-dakar">Notre service création de site web</Link> —{" "}
            <Link to="/article/agence-web-dakar-comment-choisir-2026">Choisir une agence web à Dakar</Link> —{" "}
            <Link to="/article/seo-local-senegal-guide-2026">SEO local Sénégal 2026</Link>
          </p>

          <div className="not-prose mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Lancer mon site web</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://wa.me/221776260020" target="_blank" rel="noopener noreferrer">
                Devis sur WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleCreerSiteWebProfessionnelDakar;
