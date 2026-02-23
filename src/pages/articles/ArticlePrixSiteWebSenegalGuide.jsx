import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticlePrixSiteWebSenegalGuide = () => {
  const path = "/article/prix-creation-site-web-senegal-guide-complet";
  const title = "Prix création site web au Sénégal : guide complet";
  const description = "Tarifs de création de site web au Sénégal : site vitrine, e-commerce, maintenance et facteurs qui font varier le budget.";
  return (
    <>
      <SEO path={path} title={`Prix site web Sénégal — ${title}`} description={description} type="article" />
      <section className="py-12 gradient-bg"><div className="container mx-auto px-4"><Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8"><ArrowLeft className="mr-2" size={20}/>Retour aux ressources</Link><Breadcrumbs items={[{label:"Accueil",to:"/"},{label:"Ressources",to:"/resources"},{label:"Prix site web Sénégal"}]}/><motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-4xl md:text-5xl font-bold mt-4 gradient-text">{title}</motion.h1></div></section>
      <article className="py-16 bg-background"><div className="container mx-auto px-4 max-w-3xl prose prose-lg">
        <p>Le coût d’un site web au Sénégal dépend surtout du niveau de personnalisation, du SEO, du contenu et des objectifs business.</p>
        <h2>Fourchettes de prix courantes</h2>
        <ul><li>Site vitrine: 350 000 à 900 000 F CFA</li><li>Site business avancé: 900 000 à 2 500 000 F CFA</li><li>E-commerce: à partir de 1 200 000 F CFA</li></ul>
        <h2>Ce qui impacte le budget</h2><p>Nombre de pages, copywriting, SEO, vitesse, intégrations, maintenance.</p>
        <h2>Éviter les faux bons plans</h2><p>Un site trop bas prix sans structure SEO coûte plus cher à corriger après.</p>
        <p>Si vous lancez un nouveau projet, regardez notre offre <Link to="/services/creation-site-web-dakar">Création de site web à Dakar</Link> et notre <Link to="/pricing">page tarifs</Link>.</p>
        <div className="mt-8 flex gap-3"><Button asChild><Link to="/contact">Demander un devis</Link></Button><Button asChild variant="outline"><a href="https://wa.me/221776260020" target="_blank" rel="noopener noreferrer">Parler sur WhatsApp</a></Button></div>
      </div></article>
    </>
  )
}

export default ArticlePrixSiteWebSenegalGuide;
