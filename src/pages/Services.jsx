import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  FileStack,
  GraduationCap,
  LockKeyhole,
  Stethoscope,
  Truck,
  UsersRound,
  Workflow,
} from "lucide-react";
import SEO from "@/components/SEO";

const offers = [
  {
    icon: FileStack,
    number: "01",
    title: "Gestion du courrier & GED",
    text: "Registre, orientation, instruction, parapheur, pièces jointes, délais, recherche et audit.",
    href: "/solutions/gestion-courrier-ged",
    forWho: "Administrations · Agences · Entreprises multisites",
  },
  {
    icon: Workflow,
    number: "02",
    title: "Applications métier sur mesure",
    text: "Portails internes, dossiers, workflows, référentiels et tableaux de bord alignés sur vos règles.",
    href: "/solutions/applications-metier",
    forWho: "Directions métier · Opérations · Programmes",
  },
  {
    icon: Building2,
    number: "03",
    title: "Digitalisation administrative",
    text: "Dématérialisation progressive des registres, demandes, circuits de validation et décisions.",
    href: "/solutions/digitalisation-administrations",
    forWho: "Secteur public · Collectivités · Établissements",
  },
  {
    icon: LockKeyhole,
    number: "04",
    title: "Infrastructure & cybersécurité",
    text: "Accès, sauvegardes vérifiées, supervision, documentation et continuité des services critiques.",
    href: "/solutions/infrastructure-cybersecurite",
    forWho: "DSI · Organisations sensibles · Réseaux multisites",
  },
];

const sectors = [
  { icon: Stethoscope, title: "Santé", text: "Patient, consultation, caisse, stock et direction.", href: "/secteurs/sante" },
  { icon: Truck, title: "Transport & logistique", text: "Flotte, missions, maintenance et rentabilité.", href: "/secteurs/transport-logistique" },
  { icon: UsersRound, title: "ONG & programmes", text: "Terrain, bénéficiaires, indicateurs et reporting.", href: "/secteurs/ong-projets" },
  { icon: GraduationCap, title: "Éducation & formation", text: "Admissions, scolarité, paiements et documents.", href: "/secteurs/education-formation" },
];

export default function Services() {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://fallcontech.com";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: offers.map((offer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}${offer.href}`,
      item: { "@type": "Service", name: offer.title, description: offer.text },
    })),
  };

  return (
    <>
      <SEO
        path="/services"
        title="Solutions de transformation numérique Sénégal | Fallcon Tech"
        description="GED, gestion du courrier, logiciels métier, digitalisation administrative, infrastructure et cybersécurité pour organisations au Sénégal."
        jsonLd={jsonLd}
      />
      <section className="page-hero">
        <div className="site-shell page-hero-grid">
          <div>
            <p className="overline">Nos solutions</p>
            <h1>Structurer l’information. Fluidifier les décisions.</h1>
          </div>
          <p>
            Fallcon Tech intervient là où une procédure critique, une donnée
            dispersée ou un système fragile ralentit votre organisation. Chaque
            mission commence par un diagnostic et se termine par un dispositif
            exploitable par vos équipes.
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="site-shell service-list">
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <article className="service-list-row" key={offer.title}>
                <span className="service-number">{offer.number}</span>
                <div className="service-icon"><Icon size={24} /></div>
                <div className="service-main">
                  <p className="card-eyebrow">{offer.forWho}</p>
                  <h2>{offer.title}</h2>
                  <p>{offer.text}</p>
                </div>
                <Link to={offer.href} className="button button-secondary">Voir la solution <ArrowRight size={16} /></Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section" id="secteurs">
        <div className="site-shell">
          <div className="split-heading">
            <div><p className="overline">Expertises sectorielles</p><h2>Des configurations adaptées au vocabulaire et aux contraintes du terrain.</h2></div>
            <p className="intro-copy">Nous ne vendons pas le même logiciel à tout le monde. Nous capitalisons sur des composants éprouvés puis les adaptons au contexte de chaque métier.</p>
          </div>
          <div className="sector-grid sector-grid-services">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return <Link className="sector-card" to={sector.href} key={sector.title}><Icon size={23} /><div><h3>{sector.title}</h3><p>{sector.text}</p></div><ArrowRight size={18} /></Link>;
            })}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="site-shell buying-grid">
          <div><p className="overline">Formats d’intervention</p><h2>Choisir le bon niveau d’engagement.</h2></div>
          <div className="buying-options">
            <div><span>01</span><h3>Diagnostic ciblé</h3><p>État des lieux, risques, priorités, scénario cible et feuille de route budgétée.</p></div>
            <div><span>02</span><h3>Projet de transformation</h3><p>Cadrage, réalisation, migration, formation et mise en production d’un système métier.</p></div>
            <div><span>03</span><h3>Maintenance & évolution</h3><p>Supervision, assistance, sauvegardes, corrections et cycles d’amélioration planifiés.</p></div>
          </div>
        </div>
      </section>

      <section className="contact-banner">
        <div className="site-shell contact-banner-inner">
          <div><p className="overline overline-light">Premier échange</p><h2>Décrivez-nous le processus qui vous fait perdre du temps.</h2></div>
          <Link className="button button-light" to="/contact">Demander une étude <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
