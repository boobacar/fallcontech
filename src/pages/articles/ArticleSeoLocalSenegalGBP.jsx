import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticleSeoLocalSenegalGBP = () => {
  const path = "/article/seo-local-senegal-google-business-profile-plan-action";
  const title = "SEO local Sénégal : Google Business Profile + plan d’action";
  const description = "Méthode concrète pour améliorer votre visibilité locale au Sénégal grâce à Google Business Profile, contenu local et maillage interne.";
  return (
    <>
      <SEO path={path} title={`SEO local Sénégal — ${title}`} description={description} type="article" />
      <section className="py-12 gradient-bg"><div className="container mx-auto px-4"><Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8"><ArrowLeft className="mr-2" size={20}/>Retour aux ressources</Link><Breadcrumbs items={[{label:"Accueil",to:"/"},{label:"Ressources",to:"/resources"},{label:"SEO local Sénégal"}]}/><motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-4xl md:text-5xl font-bold mt-4 gradient-text">{title}</motion.h1></div></section>
      <article className="py-16 bg-background"><div className="container mx-auto px-4 max-w-3xl prose prose-lg">
        <p>Le SEO local est le levier le plus rentable pour une entreprise à Dakar: il attire des prospects proches et prêts à passer à l’action.</p>
        <h2>1) Optimiser Google Business Profile</h2><p>Catégorie, services, photos, posts hebdo, avis clients. NAP strictement identique partout.</p>
        <h2>2) Créer des pages locales orientées intention</h2><p>Exemple: <Link to="/services/agence-seo-senegal">Agence SEO Sénégal</Link> et <Link to="/services/creation-site-web-dakar">Création de site web Dakar</Link>.</p>
        <h2>3) Renforcer le maillage interne</h2><p>Chaque article doit pointer vers une page service et vers <Link to="/contact">contact</Link>.</p>
        <h2>4) Piloter avec GSC/GA4</h2><p>Suivre impressions, CTR, position et conversions pour corriger chaque semaine.</p>
        <div className="mt-8 flex gap-3"><Button asChild><Link to="/contact">Demander un devis</Link></Button><Button asChild variant="outline"><a href="https://wa.me/221776260020" target="_blank" rel="noopener noreferrer">Parler sur WhatsApp</a></Button></div>
      </div></article>
    </>
  )
}

export default ArticleSeoLocalSenegalGBP;
