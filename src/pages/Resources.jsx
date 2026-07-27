import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, FileStack, ShieldCheck, Workflow } from "lucide-react";
import SEO from "@/components/SEO";

const featured = [
  { category: "Courrier & GED", title: "Digitalisation des courriers au Sénégal", text: "Registre numérique, workflow, GED, archivage et traçabilité : les bases d’une transition maîtrisée.", href: "/article/digitalisation-courriers-services-senegal", icon: FileStack },
  { category: "Choix de solution", title: "Logiciel de gestion de courrier : fonctionnalités et budget", text: "Une grille de lecture pour cadrer le besoin d’une administration ou d’une organisation multisite.", href: "/article/logiciel-gestion-courrier-administration-senegal", icon: FileStack },
  { category: "Logiciel métier", title: "Réussir une application de gestion sur mesure", text: "Processus, rôles, données, sécurité et adoption : ce qui détermine réellement la réussite du projet.", href: "/article/application-gestion-sur-mesure-senegal", icon: Workflow },
  { category: "Cybersécurité", title: "Priorités de cybersécurité pour une organisation au Sénégal", text: "Accès, phishing, sauvegardes, postes et continuité : les mesures à traiter avant les outils complexes.", href: "/article/cybersecurite-pme-senegal", icon: ShieldCheck },
  { category: "Continuité", title: "Construire une sauvegarde réellement restaurable", text: "Pourquoi une copie ne suffit pas et comment organiser des tests de restauration réguliers.", href: "/article/sauvegarde-donnees-entreprises", icon: ShieldCheck },
  { category: "Exploitation", title: "Externaliser le support informatique avec un niveau de service clair", text: "Périmètre, délais, responsabilités, supervision et indicateurs pour éviter un contrat flou.", href: "/article/prix-maintenance-informatique-senegal-2026", icon: BookOpen },
];

export default function Resources() {
  return (
    <>
      <SEO path="/resources" title="Centre de ressources transformation numérique Sénégal | Fallcon Tech" description="Guides Fallcon Tech sur la GED, le courrier, les logiciels métier, la cybersécurité, la sauvegarde et la transformation numérique au Sénégal." />
      <section className="page-hero"><div className="site-shell page-hero-grid"><div><p className="overline">Centre de ressources</p><h1>Décider avec de meilleurs repères.</h1></div><p>Des analyses pratiques destinées aux directions, responsables métier et équipes informatiques qui préparent une transformation ou veulent sécuriser un système existant.</p></div></section>
      <section className="section section-muted"><div className="site-shell resource-grid">{featured.map((resource, index) => <article className="resource-card" key={resource.title}><div className="resource-top"><resource.icon size={21} /><span>0{index + 1}</span></div><p className="card-eyebrow">{resource.category}</p><h2>{resource.title}</h2><p>{resource.text}</p><Link to={resource.href} className="card-link">Lire l’analyse <ArrowRight size={16} /></Link></article>)}</div></section>
      <section className="section"><div className="site-shell split-heading"><div><p className="overline">Besoin d’un avis sur votre contexte ?</p><h2>Un guide ne remplace pas un diagnostic.</h2></div><div className="intro-copy"><p>Nous pouvons examiner votre procédure, vos données et vos risques afin de proposer une trajectoire adaptée.</p><Link to="/contact" className="button button-primary">Demander une étude <ArrowRight size={17} /></Link></div></div></section>
    </>
  );
}
