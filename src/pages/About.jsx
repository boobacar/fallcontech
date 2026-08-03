import { Link } from "react-router-dom";
import { ArrowRight, Check, Compass, Database, ShieldCheck, UsersRound } from "lucide-react";
import SEO from "@/components/SEO";

const principles = [
  { icon: Compass, title: "Partir du terrain", text: "Comprendre les rôles, les documents et les exceptions avant d’écrire la solution." },
  { icon: Database, title: "Fiabiliser la donnée", text: "Définir la source de vérité, les contrôles et les règles de migration dès le cadrage." },
  { icon: ShieldCheck, title: "Concevoir pour durer", text: "Sécurité, sauvegarde, exploitation et maintenance font partie du produit livré." },
  { icon: UsersRound, title: "Organiser l’adoption", text: "Associer les utilisateurs, documenter et former pour rendre l’organisation autonome." },
];

export default function About() {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://fallcontech.com";
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "Fallcon Tech — cabinet d'ingénierie numérique à Dakar",
      url: `${siteUrl}/about`,
      description:
        "Fallcon Tech est un cabinet d'ingénierie numérique basé à Dakar : GED, gestion du courrier, logiciels métier, santé, logistique, infrastructure et cybersécurité.",
      mainEntity: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Fallcon Tech",
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        email: "info@fallcontech.com",
        telephone: "+221774837576",
        address: { "@type": "PostalAddress", addressLocality: "Dakar", addressCountry: "SN" },
        areaServed: { "@type": "Country", name: "Sénégal" },
        founder: {
          "@type": "Person",
          name: "Boubacar Fall",
          jobTitle: "Fondateur",
          worksFor: { "@type": "Organization", name: "Fallcon Tech" },
        },
      },
    },
  ];

  return (
    <>
      <SEO path="/about" title="Cabinet de transformation numérique à Dakar | Fallcon Tech" description="Fallcon Tech est un cabinet d’ingénierie numérique à Dakar spécialisé en GED, logiciels métier, santé, logistique et systèmes sécurisés." jsonLd={jsonLd} />
      <section className="page-hero">
        <div className="site-shell page-hero-grid">
          <div><p className="overline">Le cabinet</p><h1>Une ingénierie proche du terrain.</h1></div>
          <p>Fallcon Tech est un cabinet d’ingénierie numérique basé à Dakar. Nous réunissons conseil, conception produit et réalisation technique pour transformer des procédures critiques en systèmes utiles.</p>
        </div>
      </section>

      <section className="section">
        <div className="site-shell manifesto-grid">
          <div><p className="overline">Notre conviction</p><h2>La transformation numérique n’est pas un projet d’interface.</h2></div>
          <div className="manifesto-copy">
            <p>Elle engage les responsabilités, les règles, la qualité de la donnée et la continuité du service. C’est pourquoi nous ne commençons pas par choisir une technologie : nous commençons par comprendre ce qui doit mieux fonctionner.</p>
            <p>Notre taille nous permet de rester proches des décideurs et des utilisateurs. Notre méthode impose un cadrage explicite, des livraisons vérifiables et une documentation exploitable.</p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="site-shell">
          <div className="section-heading compact"><p className="overline">Principes de travail</p><h2>La qualité du système commence avant le développement.</h2></div>
          <div className="principle-grid">
            {principles.map((principle, index) => <article key={principle.title}><span>0{index + 1}</span><principle.icon size={23} /><h3>{principle.title}</h3><p>{principle.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell delivery-grid">
          <div className="delivery-copy"><p className="overline">Ce que nous prenons en charge</p><h2>Un interlocuteur responsable de bout en bout.</h2><p>Selon la mission, nous mobilisons les compétences nécessaires sans multiplier les interfaces côté client.</p></div>
          <div className="offer-outcomes">
            {["Diagnostic et feuille de route", "Architecture fonctionnelle et technique", "Conception d’interface et développement", "Migration et contrôle des données", "Tests métier et sécurité", "Déploiement, formation et maintenance"].map((item) => <div key={item}><Check size={17} /><span>{item}</span></div>)}
          </div>
        </div>
      </section>

      <section className="contact-banner"><div className="site-shell contact-banner-inner"><div><p className="overline overline-light">Travailler ensemble</p><h2>Un besoin complexe mérite un premier échange précis.</h2></div><Link to="/contact" className="button button-light">Présenter votre contexte <ArrowRight size={17} /></Link></div></section>
    </>
  );
}
