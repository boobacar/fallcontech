import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgMobile from "@/assets/articles/mobile-first-design.png";

const ArticleVitesseSiteSeoConversions = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/optimisation-vitesse-site-seo-conversions";
  const title = "Site web lent : 12 optimisations qui boostent SEO et conversions";
  const description =
    "Guide pratique pour accélérer un site web, améliorer les Core Web Vitals et augmenter les conversions.";

  return (
    <>
      <SEO
        path={path}
        title={`${title} | Fallcon Tech`}
        description={description}
        image={imgMobile}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description,
            image: site + imgMobile,
            mainEntityOfPage: site + path,
            datePublished: "2026-03-15",
            dateModified: "2026-03-15",
            author: { "@type": "Organization", name: "Fallcon Tech" },
          },
          ,
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Combien de temps pour voir des résultats ?",
                acceptedAnswer: { "@type": "Answer", text: "En général, les premiers résultats arrivent entre 4 et 12 semaines selon la base technique, le contenu et la concurrence." },
              },
              {
                "@type": "Question",
                name: "Faut-il un gros budget pour commencer ?",
                acceptedAnswer: { "@type": "Answer", text: "Non. Le plus important est de prioriser les actions à fort impact: performance, structure SEO, contenu ciblé et suivi KPI." },
              },
            ],
          }
        ]}
      />

      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />
            Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Performance web" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-lg text-muted-foreground">Méthode terrain pour passer un site vitrine ou e-commerce de “lent” à “rapide”.</p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <img alt={title} className="w-full rounded-2xl shadow-xl mb-10" src={imgMobile} loading="lazy" decoding="async" />

          <h2>Pourquoi la vitesse impacte directement vos ventes</h2>
          <p>
            Un site lent ne fait pas seulement baisser votre score Google. Il augmente aussi le taux de rebond, réduit les demandes de devis
            et fait chuter vos conversions sur mobile. Sur nos marchés, où la majorité du trafic passe par smartphone et réseau variable,
            chaque seconde compte.
          </p>

          <h2>Les 12 optimisations prioritaires</h2>
          <ol>
            <li>Compresser et convertir les images en WebP/AVIF.</li>
            <li>Précharger l’image hero et les polices critiques.</li>
            <li>Supprimer le JavaScript inutile.</li>
            <li>Activer cache navigateur + CDN.</li>
            <li>Minifier CSS/JS.</li>
            <li>Réserver l’espace des médias (anti-CLS).</li>
            <li>Optimiser le serveur (TTFB).</li>
            <li>Retarder les scripts tiers non essentiels.</li>
            <li>Lazy-load des images hors écran.</li>
            <li>Découper les gros bundles.</li>
            <li>Éviter les plugins lourds.</li>
            <li>Suivre les KPI après chaque déploiement.</li>
          </ol>

          <h2>KPIs à surveiller en priorité</h2>
          <ul>
            <li>LCP &lt; 2.5s</li>
            <li>INP &lt; 200ms</li>
            <li>CLS &lt; 0.1</li>
            <li>Taux de rebond mobile</li>
            <li>Taux de conversion (formulaire, achat, WhatsApp)</li>
          </ul>

          <h2>Plan d’action 30 jours</h2>
          <p><strong>Semaine 1 :</strong> audit + quick wins (images, cache, scripts tiers).</p>
          <p><strong>Semaine 2 :</strong> optimisation front (bundle, lazy loading, critical CSS).</p>
          <p><strong>Semaine 3 :</strong> optimisation serveur (TTFB, CDN, compression, headers).</p>
          <p><strong>Semaine 4 :</strong> tests, monitoring et itération SEO + CRO.</p>

          <h2>FAQ rapide</h2>
          <h3>La vitesse seule suffit pour ranker ?</h3>
          <p>Non. Elle améliore la base technique. Il faut aussi un bon contenu, un maillage interne solide et une intention de recherche bien ciblée.</p>
          <h3>Quel est l’impact business concret ?</h3>
          <p>En général : moins d’abandon, plus de pages vues, plus de demandes de contact et une meilleure rentabilité des campagnes.</p>

          <p>
            Continuez avec : <Link to="/article/checklist-audit-seo-30-minutes">audit SEO en 30 minutes</Link> et <Link to="/article/wordpress-vs-nextjs-seo">WordPress vs Next.js</Link>.
          </p>

          <div className="mt-10 flex justify-center not-prose">
            <Button asChild size="lg">
              <Link to="/contact"><Gauge className="mr-2" size={18} />Optimiser mon site</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleVitesseSiteSeoConversions;
