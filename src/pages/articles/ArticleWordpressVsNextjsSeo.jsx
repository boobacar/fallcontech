import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import imgStack from "@/assets/articles/stack.png";

const ArticleWordpressVsNextjsSeo = () => {
  const path = "/article/wordpress-vs-nextjs-seo";
  const title = "WordPress vs Next.js : quel choix pour SEO et performance ?";
  const description = "Comparatif pratique pour choisir la bonne stack selon votre budget, objectifs SEO et vitesse.";

  return (
    <>
      <SEO path={path} title={`${title} | Fallcon Tech`} description={description} image={imgStack} type="article" />
      <section className="py-12 gradient-bg"><div className="container mx-auto px-4">
        <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8"><ArrowLeft className="mr-2" size={20}/>Retour aux ressources</Link>
        <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Développement" }]} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}><h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1></motion.div>
      </div></section>
      <article className="py-16 bg-background"><div className="container mx-auto px-4 max-w-3xl prose prose-lg">
        <img alt={title} className="w-full rounded-2xl shadow-xl mb-10" src={imgStack} loading="lazy" decoding="async" />
        <h2>Quand choisir WordPress</h2>
        <p>Idéal pour publier rapidement, gérer un blog éditorial riche et garder des coûts modérés.</p>
        <h2>Quand choisir Next.js</h2>
        <p>Parfait pour la performance, les expériences sur mesure, les apps web et un SEO technique finement contrôlé.</p>
        <h2>Règle simple</h2>
        <p>Si votre priorité est le time-to-market éditorial: WordPress. Si votre priorité est la performance produit long terme: Next.js.</p>
      </div></article>
    </>
  );
};

export default ArticleWordpressVsNextjsSeo;
