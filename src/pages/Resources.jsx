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

const hardware = [
  { category: "Routeur", title: "NetEngine 8000 M1A : quatre usages réels", text: "VPN IPsec, bordure BGP, serveur d’accès, cœur de campus — et ce que la machine ne sait pas faire.", href: "/article/netengine-8000-m1a-usages-reels" },
  { category: "Routeur opérateur", title: "NetEngine 8000 M14 : à quoi sert un BNG de 32 000 abonnés", text: "Authentification, adresses, débits : ce que change une capacité BNG licenciée pour un FAI.", href: "/article/netengine-8000-m14-bng-operateur" },
  { category: "Sécurité", title: "USG6625E : ce qu’un pare-feu fait vraiment", text: "Segmentation, NAT, VPN, journal — et les fonctions absentes sans abonnement.", href: "/article/usg6625e-pare-feu-entreprise" },
  { category: "Serveur", title: "FusionServer 2288X V5 : sortir du « PC serveur »", text: "Virtualisation, fichiers, sauvegarde, vidéosurveillance : les usages qui tiennent sur 25 baies.", href: "/article/fusionserver-2288x-v5-usages-reels" },
  { category: "Réseau", title: "CloudEngine S5735 : le switch qui tient un site", text: "VLAN, routage inter-VLAN, uplinks 10GE, et la question du PoE à trancher avant l’achat.", href: "/article/cloudengine-s5735-switch-acces-entreprise" },
  { category: "Transmission", title: "Cartes OSN et WDM : le spare vaut plus que son prix", text: "WSS, booster, transpondeur : pourquoi le délai d’usine coûte plus cher que la carte.", href: "/article/cartes-osn-wdm-spares-operateur" },
];

export default function Resources() {
  return (
    <>
      <SEO path="/resources" title="Centre de ressources transformation numérique Sénégal | Fallcon Tech" description="Guides Fallcon Tech sur la GED, le courrier, les logiciels métier, la cybersécurité, la sauvegarde et la transformation numérique au Sénégal." />
      <section className="page-hero"><div className="site-shell page-hero-grid"><div><p className="overline">Centre de ressources</p><h1>Décider avec de meilleurs repères.</h1></div><p>Des analyses pratiques destinées aux directions, responsables métier et équipes informatiques qui préparent une transformation ou veulent sécuriser un système existant.</p></div></section>
      <section className="section section-muted"><div className="site-shell resource-grid">{featured.map((resource, index) => <article className="resource-card" key={resource.title}><div className="resource-top"><resource.icon size={21} /><span>0{index + 1}</span></div><p className="card-eyebrow">{resource.category}</p><h2>{resource.title}</h2><p>{resource.text}</p><Link to={resource.href} className="card-link">Lire l’analyse <ArrowRight size={16} /></Link></article>)}</div></section>
      <section className="section"><div className="site-shell"><div className="split-heading"><div><p className="overline">Matériel : usages réels</p><h2>Ce que chaque équipement change dans une organisation.</h2></div><p className="intro-copy">Six analyses écrites à partir du matériel que nous exploitons et revendons : ce qu’il résout, comment il se dimensionne, et ce qu’il ne faut pas lui demander.</p></div><div className="resource-grid">{hardware.map((resource, index) => <article className="resource-card" key={resource.title}><div className="resource-top"><BookOpen size={21} /><span>0{index + 1}</span></div><p className="card-eyebrow">{resource.category}</p><h2>{resource.title}</h2><p>{resource.text}</p><Link to={resource.href} className="card-link">Lire l’analyse <ArrowRight size={16} /></Link></article>)}</div></div></section>
      <section className="section section-muted"><div className="site-shell split-heading"><div><p className="overline">Besoin d’un avis sur votre contexte ?</p><h2>Un guide ne remplace pas un diagnostic.</h2></div><div className="intro-copy"><p>Nous pouvons examiner votre procédure, vos données et vos risques afin de proposer une trajectoire adaptée.</p><Link to="/contact" className="button button-primary">Demander une étude <ArrowRight size={17} /></Link></div></div></section>
    </>
  );
}
