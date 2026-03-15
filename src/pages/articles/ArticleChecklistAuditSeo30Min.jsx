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
        <h2>Checklist 30 min</h2>
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
        <p>À la fin, priorisez les corrections en 3 lots : immédiat, 7 jours, 30 jours.</p>
      </div></article>
    </>
  );
};

export default ArticleChecklistAuditSeo30Min;
