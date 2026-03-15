import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgMobile from "@/assets/articles/mobile-first-design.png";

const ArticleVitesseSiteSeoConversions = () => {
  const path = "/article/optimisation-vitesse-site-seo-conversions";
  const title = "Site web lent : 12 optimisations qui boostent SEO et conversions";
  const description =
    "Guide pratique pour accélérer un site web, améliorer les Core Web Vitals et augmenter les conversions.";

  return (
    <>
      <SEO path={path} title={`${title} | Fallcon Tech`} description={description} image={imgMobile} type="article" />

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
          <h2>KPIs à surveiller</h2>
          <p>Concentrez-vous sur LCP (&lt; 2.5s), INP (&lt; 200ms), CLS (&lt; 0.1), taux de conversion et taux de rebond.</p>
          <h2>Plan d’action 30 jours</h2>
          <p>Semaine 1: audit + quick wins. Semaine 2: optimisation front. Semaine 3: optimisation serveur/CDN. Semaine 4: tests A/B et monitoring.</p>
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
