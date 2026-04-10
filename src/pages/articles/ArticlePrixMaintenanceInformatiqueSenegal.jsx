import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import imgITSupport from "@/assets/articles/it_support_helpdesk_dakar.png";

export default function ArticlePrixMaintenanceInformatiqueSenegal() {
  const path = "/article/prix-maintenance-informatique-senegal-2026";
  const title = "Prix maintenance informatique au Sénégal en 2026 : guide PME";
  const description = "Tarifs, contrats, SLA et checklist pour choisir un prestataire IT fiable.";
  return (
    <>
      <SEO path={path} title={`${title} | Fallcon Tech`} description={description} image={imgITSupport} type="article" />
      <section className="py-12 gradient-bg"><div className="container mx-auto px-4">
        <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8"><ArrowLeft className="mr-2" size={20}/>Retour aux ressources</Link>
        <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Prix IT" }]} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}><h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1></motion.div>
      </div></section>
      <article className="py-16 bg-background"><div className="container mx-auto px-4 max-w-3xl prose prose-lg">
        <img alt={title} className="w-full rounded-2xl shadow-xl mb-10" src={imgITSupport} loading="lazy" decoding="async" />
        <h2>Ce qui fait varier le prix</h2>
        <ul><li>Nombre de postes</li><li>Niveau de criticité</li><li>Support sur site vs remote</li><li>Couverture sécurité/backups</li></ul>
        <h2>Bon contrat = bon SLA</h2>
        <p>Exigez délais de réponse, délais de résolution, reporting mensuel et procédure d’escalade.</p>
        <h2>Objectif business</h2>
        <p>Réduire interruptions, protéger données et maintenir la productivité.</p>
      </div></article>
    </>
  );
}
