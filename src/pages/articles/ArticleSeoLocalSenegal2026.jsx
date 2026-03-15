import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import imgSeo from "@/assets/articles/seo.png";

const ArticleSeoLocalSenegal2026 = () => {
  const path = "/article/seo-local-senegal-guide-2026";
  const title = "SEO local au Sénégal : guide complet 2026";
  const description = "Plan concret pour ranker sur Google Maps et Google Search au Sénégal.";

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
        <h2>Checklist rapide</h2>
        <ul>
          <li>Google Business Profile complet (catégories, services, photos, horaires).</li>
          <li>Pages locales optimisées: Dakar, Thiès, Saint-Louis…</li>
          <li>Avis clients réguliers + réponses systématiques.</li>
          <li>Citations locales cohérentes (NAP).</li>
          <li>Schema LocalBusiness + FAQ.</li>
        </ul>
        <h2>Contenus qui convertissent</h2>
        <p>Publiez des cas clients locaux, des guides pratiques et des pages service ciblées par intention.</p>
      </div></article>
    </>
  );
};

export default ArticleSeoLocalSenegal2026;
