import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import imgSeo from "@/assets/articles/seo.png";

export default function ArticleSeoEcommerceSenegal2026() {
  const path = "/article/seo-ecommerce-senegal-guide-2026";
  const title = "SEO e-commerce au Sénégal : guide 2026 pour plus de ventes";
  const description = "Catégories, fiches produit, intent mapping et maillage interne pour ranker et vendre.";
  return (
    <>
      <SEO path={path} title={`${title} | Fallcon Tech`} description={description} image={imgSeo} type="article" />
      <section className="py-12 gradient-bg"><div className="container mx-auto px-4">
        <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8"><ArrowLeft className="mr-2" size={20}/>Retour aux ressources</Link>
        <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "SEO e-commerce" }]} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}><h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1></motion.div>
      </div></section>
      <article className="py-16 bg-background"><div className="container mx-auto px-4 max-w-3xl prose prose-lg">
        <img alt={title} className="w-full rounded-2xl shadow-xl mb-10" src={imgSeo} loading="lazy" decoding="async" />
        <h2>Pages qui génèrent du CA</h2>
        <p>Travaillez d’abord catégories, fiches produit et pages comparatives avec mots-clés transactionnels.</p>
        <h2>Stack SEO minimale</h2>
        <ul><li>Schema Product + FAQ</li><li>Title/H1 orientés intention</li><li>Pages livraison/paiement</li><li>Internal linking vers best sellers</li></ul>
        <h2>Conversion</h2>
        <p>Ajoutez preuves (avis, garanties, délais), CTA forts et WhatsApp visible sur mobile.</p>
        <p>À lire ensuite : <Link to="/article/ecommerce-senegal-wave-orange">E-commerce Sénégal: paiements & logistique</Link>.</p>
      </div></article>
    </>
  );
}
