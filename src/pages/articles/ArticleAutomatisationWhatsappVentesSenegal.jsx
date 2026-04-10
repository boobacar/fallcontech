import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import imgWhatsapp from "@/assets/articles/whatsapp-automation.webp";

export default function ArticleAutomatisationWhatsappVentesSenegal() {
  const path = "/article/automatisation-whatsapp-ventes-senegal-2026";
  const title = "Automatisation WhatsApp au Sénégal : convertir plus sans spam";
  const description = "Playbook concret pour relances, qualification et conversion via WhatsApp Business API.";
  return (
    <>
      <SEO path={path} title={`${title} | Fallcon Tech`} description={description} image={imgWhatsapp} type="article" />
      <section className="py-12 gradient-bg"><div className="container mx-auto px-4">
        <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8"><ArrowLeft className="mr-2" size={20}/>Retour aux ressources</Link>
        <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "WhatsApp" }]} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}><h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1></motion.div>
      </div></section>
      <article className="py-16 bg-background"><div className="container mx-auto px-4 max-w-3xl prose prose-lg">
        <img alt={title} className="w-full rounded-2xl shadow-xl mb-10" src={imgWhatsapp} loading="lazy" decoding="async" />
        <h2>Workflow recommandé</h2>
        <ul><li>Capture lead (site/formulaire)</li><li>Qualification auto</li><li>Relance personnalisée</li><li>Passage commercial humain</li></ul>
        <h2>Ce qui marche au Sénégal</h2>
        <p>Messages courts, timing local, preuves sociales, et CTA simple vers devis/rendez-vous.</p>
        <h2>KPI</h2>
        <p>Taux de réponse, taux de qualification, taux de conversion, délai moyen de closing.</p>
      </div></article>
    </>
  );
}
