import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticleAgenceWebDakar2026 = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/agence-web-dakar-comment-choisir-2026";
  const title = "Agence web à Dakar : comment choisir en 2026";
  const description = "Guide pratique pour choisir la bonne agence web à Dakar : critères, budget, livrables et erreurs à éviter pour réussir votre projet digital.";

  return (
    <>
      <SEO path={path} title={`Agence Web Dakar 2026 — ${title}`} description={description} type="article" jsonLd={{"@context":"https://schema.org","@type":"BlogPosting",headline:title,description,mainEntityOfPage:site+path}} />
      <section className="py-12 gradient-bg"><div className="container mx-auto px-4"><Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8"><ArrowLeft className="mr-2" size={20}/>Retour aux ressources</Link><Breadcrumbs items={[{label:"Accueil",to:"/"},{label:"Ressources",to:"/resources"},{label:"Agence web Dakar 2026"}]}/><motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-4xl md:text-5xl font-bold mt-4 gradient-text">{title}</motion.h1></div></section>
      <article className="py-16 bg-background"><div className="container mx-auto px-4 max-w-3xl prose prose-lg">
        <p>Choisir une agence web à Dakar ne doit pas se faire sur le prix uniquement. En 2026, le bon partenaire est celui qui aligne design, performance SEO et conversion.</p>
        <h2>1) Vérifier les réalisations réelles</h2><p>Demandez des cas concrets : trafic, demandes, résultats. Consultez aussi la page <Link to="/work">réalisations</Link>.</p>
        <h2>2) Exiger une structure SEO dès le départ</h2><p>Un site propre sans SEO ne sert pas au business. Travaillez avec une équipe qui propose une stratégie claire, comme notre service <Link to="/services/agence-seo-senegal">Agence SEO au Sénégal</Link>.</p>
        <h2>3) Clarifier les livrables</h2><p>Avant de signer: pages, contenus, optimisation vitesse, analytics, formation, maintenance.</p>
        <h2>4) Budget et ROI</h2><p>Un site rentable n’est pas le moins cher, c’est celui qui génère des leads. Consultez aussi <Link to="/article/cout-creation-site-web-senegal-prix">notre guide des prix</Link>.</p>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded"><p>Besoin d’un accompagnement ? Nous construisons des sites orientés résultats à Dakar et au Sénégal.</p></div>
        <div className="mt-8 flex gap-3"><Button asChild><Link to="/contact">Demander un devis</Link></Button><Button asChild variant="outline"><a href="https://wa.me/221776260020" target="_blank" rel="noopener noreferrer">Parler sur WhatsApp</a></Button></div>
      </div></article>
    </>
  );
};

export default ArticleAgenceWebDakar2026;
