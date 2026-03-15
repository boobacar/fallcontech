import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import imgCost from "@/assets/articles/website_cost_estimate_senegal.png";

const ArticlePrixSiteWebSenegal2026 = () => {
  const path = "/article/prix-site-web-senegal-2026";
  const title = "Combien coûte un site web professionnel en 2026 au Sénégal ?";
  const description = "Tarifs, fourchettes réalistes et facteurs qui influencent le budget d'un site web.";

  return (
    <>
      <SEO path={path} title={`${title} | Fallcon Tech`} description={description} image={imgCost} type="article" />
      <section className="py-12 gradient-bg"><div className="container mx-auto px-4">
        <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8"><ArrowLeft className="mr-2" size={20}/>Retour aux ressources</Link>
        <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Prix" }]} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}><h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1></motion.div>
      </div></section>
      <article className="py-16 bg-background"><div className="container mx-auto px-4 max-w-3xl prose prose-lg">
        <img alt={title} className="w-full rounded-2xl shadow-xl mb-10" src={imgCost} loading="lazy" decoding="async" />
        <h2>Fourchettes de prix indicatives</h2>
        <ul>
          <li>Site vitrine: 250 000 – 900 000 FCFA</li>
          <li>Site business avancé: 900 000 – 2 500 000 FCFA</li>
          <li>E-commerce: 1 200 000 – 4 500 000 FCFA</li>
        </ul>
        <h2>Ce qui fait varier le coût</h2>
        <p>Le prix dépend surtout du contenu, du niveau SEO, des intégrations (paiement, CRM), de la performance et du support post-lancement.</p>
      </div></article>
    </>
  );
};

export default ArticlePrixSiteWebSenegal2026;
