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
      <SEO path={path} title={`${title} | Fallcon Tech`} description={description} image={imgCost} type="article"
        jsonLd={[
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
          },
        ]}
      />
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
        <ul>
          <li>Nombre de pages et niveau de contenu</li>
          <li>Intégrations (paiement, CRM, automation)</li>
          <li>SEO technique et stratégie éditoriale</li>
          <li>Performance (Core Web Vitals)</li>
          <li>Maintenance et support après livraison</li>
        </ul>

        <h2>Comment éviter les mauvais devis</h2>
        <p>Demandez les livrables exacts, les KPI visés, les délais, les responsabilités et le plan de maintenance avant signature.</p>

        <h2>FAQ rapide</h2>
        <h3>Un site pas cher est-il une bonne affaire ?</h3>
        <p>Pas toujours. Un site trop bas prix peut coûter plus cher en corrections, SEO raté et pertes de leads.</p>
        <h3>Faut-il inclure le SEO dans le budget initial ?</h3>
        <p>Oui. Le SEO doit être pensé dès la conception pour éviter une refonte technique plus tard.</p>

        <p>Article complémentaire : <Link to="/article/wordpress-vs-nextjs-seo">WordPress vs Next.js</Link>.</p>


        <h2>Cas client (type) : budget mieux cadré = ROI plus rapide</h2>
        <p>
          Quand le périmètre est clair dès le départ (contenu, SEO, tracking, support), les délais sont mieux tenus
          et le site commence plus vite à générer des opportunités.
        </p>

        <h2>Demander un cadrage de projet</h2>
        <p>
          Si vous hésitez entre plusieurs devis, <Link to="/contact">demandez un cadrage technique et SEO neutre</Link> avant de choisir.
        </p>

      </div></article>
    </>
  );
};

export default ArticlePrixSiteWebSenegal2026;
