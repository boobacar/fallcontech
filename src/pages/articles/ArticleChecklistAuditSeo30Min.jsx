import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import imgSeo from "@/assets/articles/seo.png";

const ArticleChecklistAuditSeo30Min = () => {
  const path = "/article/checklist-audit-seo-30-minutes";
  const title = "Audit SEO en 30 minutes : checklist terrain";
  const description = "Checklist actionnable pour repérer les erreurs SEO qui bloquent votre trafic.";

  return (
    <>
      <SEO path={path} title={`${title} | Fallcon Tech`} description={description} image={imgSeo} type="article" />
      <section className="py-12 gradient-bg"><div className="container mx-auto px-4">
        <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8"><ArrowLeft className="mr-2" size={20}/>Retour aux ressources</Link>
        <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "SEO" }]} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}><h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1></motion.div>
      </div></section>
      <article className="py-16 bg-background"><div className="container mx-auto px-4 max-w-3xl prose prose-lg">
        <img alt={title} className="w-full rounded-2xl shadow-xl mb-10" src={imgSeo} loading="lazy" decoding="async" />

        <h2>Pourquoi cette checklist marche</h2>
        <p>Elle vous force à corriger d’abord les points qui bloquent la visibilité et la conversion, avant d’entrer dans des optimisations secondaires.</p>

        <h2>Checklist 30 minutes</h2>
        <ol>
          <li>Indexation Google (site:domain.com).</li>
          <li>Titles et meta descriptions uniques.</li>
          <li>H1/H2 propres et lisibles.</li>
          <li>Liens internes vers pages business.</li>
          <li>Images compressées + alt pertinents.</li>
          <li>Core Web Vitals sur mobile.</li>
          <li>Pages locales + NAP cohérent.</li>
          <li>Schema FAQ/LocalBusiness.</li>
        </ol>

        <h2>Plan de correction recommandé</h2>
        <ul>
          <li>Lot 1 (immédiat) : indexation, title/H1, erreurs bloquantes.</li>
          <li>Lot 2 (7 jours) : maillage interne, assets médias, données structurées.</li>
          <li>Lot 3 (30 jours) : contenus piliers, clusters thématiques, netlinking local.</li>
        </ul>

        <h2>FAQ rapide</h2>
        <h3>Faut-il un outil payant pour auditer ?</h3>
        <p>Non, vous pouvez déjà faire 70% du travail avec Search Console, PageSpeed et un crawl léger.</p>
        <h3>À quelle fréquence faire cet audit ?</h3>
        <p>Minimum mensuel, et après chaque refonte, migration ou gros ajout de pages.</p>

        <p>
          Articles liés : <Link to="/article/seo-local-senegal-guide-2026">SEO local Sénégal</Link> et <Link to="/article/optimisation-vitesse-site-seo-conversions">optimisation vitesse</Link>.
        </p>
      </div></article>
    </>
  );
};

export default ArticleChecklistAuditSeo30Min;
