import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import imgSeo from "@/assets/articles/seo.png";

export default function ArticleRefonteSiteWebDakar2026() {
  const path = "/article/refonte-site-web-dakar-seo-2026";
  const title = "Refonte site web à Dakar : plan SEO + conversion en 2026";
  const description = "Méthode concrète pour refaire un site lent et le transformer en machine à leads.";
  return (
    <>
      <SEO path={path} title={`${title} | Fallcon Tech`} description={description} image={imgSeo} type="article" />
      <section className="py-12 gradient-bg"><div className="container mx-auto px-4">
        <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8"><ArrowLeft className="mr-2" size={20}/>Retour aux ressources</Link>
        <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Refonte" }]} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}><h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1></motion.div>
      </div></section>
      <article className="py-16 bg-background"><div className="container mx-auto px-4 max-w-3xl prose prose-lg">
        <img alt={title} className="w-full rounded-2xl shadow-xl mb-10" src={imgSeo} loading="lazy" decoding="async" />
        <h2>Pourquoi la refonte est souvent rentable</h2>
        <p>Un site lent ou mal structuré coûte des leads tous les jours. Une refonte orientée SEO + conversion améliore trafic qualifié, confiance et taux de prise de contact.</p>
        <h2>Plan en 4 étapes</h2>
        <ul><li>Audit technique (Core Web Vitals, erreurs indexation, UX mobile).</li><li>Architecture SEO (pages services, localités, maillage interne).</li><li>Contenus business (FAQ, preuves, cas clients, CTA clairs).</li><li>Suivi KPI (positions, leads, coût par lead, taux de conversion).</li></ul>
        <h2>En pratique à Dakar</h2>
        <p>Priorisez les requêtes transactionnelles locales: “agence web dakar”, “création site web sénégal”, “seo local sénégal”.</p>
        <p>À lire ensuite : <Link to="/article/seo-local-senegal-guide-2026">SEO local Sénégal 2026</Link>.</p>
      </div></article>
    </>
  );
}
