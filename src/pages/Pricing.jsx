import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import SEO from "@/components/SEO";

const formats = [
  { number: "01", name: "Diagnostic ciblé", duration: "1 à 3 semaines", text: "Comprendre une procédure, un système ou un risque avant d’engager un projet.", includes: ["Entretiens et collecte", "Cartographie de l’existant", "Risques et priorités", "Scénario cible", "Feuille de route budgétée"] },
  { number: "02", name: "Projet de transformation", duration: "Selon le périmètre", text: "Concevoir et déployer une solution métier complète avec migration et accompagnement.", includes: ["Cadrage détaillé", "Conception et réalisation", "Tests sur cas réels", "Migration des données", "Formation et mise en production"] },
  { number: "03", name: "Maintenance & évolution", duration: "Engagement récurrent", text: "Maintenir le service, surveiller les risques et organiser les évolutions utiles.", includes: ["Support et incidents", "Supervision", "Sauvegardes contrôlées", "Mises à jour", "Revue périodique"] },
];

export default function Pricing() {
  return (
    <>
      <SEO path="/pricing" title="Formats d’intervention transformation numérique | Fallcon Tech" description="Diagnostic, projet de transformation numérique et maintenance pour administrations, ONG et entreprises au Sénégal. Budget établi après cadrage." />
      <section className="page-hero"><div className="site-shell page-hero-grid"><div><p className="overline">Formats d’intervention</p><h1>Un engagement proportionné à la décision à prendre.</h1></div><p>Nous ne proposons pas de forfait générique pour un système métier. Le budget dépend du périmètre, de la migration, des utilisateurs, des intégrations et du niveau de service attendu.</p></div></section>
      <section className="section section-muted"><div className="site-shell engagement-grid">{formats.map((format) => <article key={format.name} className="engagement-card"><div className="engagement-top"><span>{format.number}</span><small>{format.duration}</small></div><h2>{format.name}</h2><p>{format.text}</p><ul>{format.includes.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul><Link to="/contact" className="text-link">Étudier ce format <ArrowRight size={16} /></Link></article>)}</div></section>
      <section className="section"><div className="site-shell cost-grid"><div><p className="overline">Ce qui structure le budget</p><h2>La complexité se trouve rarement dans le nombre d’écrans.</h2></div><div className="commitment-grid">{["Nombre de processus et de rôles", "Qualité et volume des données à migrer", "Intégrations avec des systèmes existants", "Exigences de sécurité et de disponibilité", "Déploiement mono ou multisite", "Formation et niveau de support"].map((item) => <div key={item}><Check size={17} /><span>{item}</span></div>)}</div></div></section>
      <section className="contact-banner"><div className="site-shell contact-banner-inner"><div><p className="overline overline-light">Estimation</p><h2>Obtenez un cadrage initial avant de fixer le budget.</h2></div><Link to="/contact" className="button button-light">Présenter votre besoin <ArrowRight size={17} /></Link></div></section>
    </>
  );
}
