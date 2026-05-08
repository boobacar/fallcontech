import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Code2, FileSearch, Globe, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";

const site = "https://fallcontech.com";

const pages = {
  developer: {
    path: "/services/developpeur-web-senegal",
    icon: Code2,
    eyebrow: "Développeur web au Sénégal",
    title: "Développeur web au Sénégal pour sites, apps et plateformes métier",
    lead: "Fallcon Tech développe des sites web, applications métier et plateformes React rapides pour les entreprises à Dakar et au Sénégal.",
    serviceName: "Développeur web au Sénégal",
    serviceType: "Développement web",
    features: [
      "Création de site web professionnel orienté conversion",
      "Développement React, Firebase, Node.js et intégrations API",
      "Applications métier avec rôles, tableaux de bord et workflows",
      "Optimisation SEO technique et suivi Search Console",
      "Maintenance, évolutions et accompagnement après lancement",
    ],
    outcomes: ["Projet livré proprement", "Plus de demandes qualifiées", "Base technique évolutive"],
    faq: [
      {
        q: "Comment choisir un développeur web au Sénégal ?",
        a: "Vérifiez ses réalisations, sa compréhension business, sa méthode SEO, sa capacité à maintenir le projet et la clarté de son devis.",
      },
      {
        q: "Travaillez-vous avec des PME et startups ?",
        a: "Oui. Nous accompagnons les PME, startups, services, commerces et organisations qui veulent un site ou une application utile, rapide et mesurable.",
      },
      {
        q: "Pouvez-vous reprendre un site existant ?",
        a: "Oui. Nous pouvons auditer, corriger, refondre ou migrer un site existant si la base technique le permet.",
      },
    ],
    related: [
      { to: "/services/creation-site-web-dakar", label: "Création de site internet au Sénégal" },
      { to: "/article/comment-choisir-developpeur-web-dakar-senegal", label: "Comment choisir un développeur web" },
    ],
  },
  website: {
    path: "/services/creation-site-internet-senegal",
    icon: Globe,
    eyebrow: "Création site internet Sénégal",
    title: "Création de site internet au Sénégal qui génère des demandes",
    lead: "Nous créons des sites internet professionnels, rapides et SEO-friendly pour attirer des clients depuis Google et WhatsApp.",
    serviceName: "Création de site internet au Sénégal",
    serviceType: "Création de site internet",
    features: [
      "Site vitrine, site business, catalogue ou landing page",
      "Design responsive adapté aux smartphones et connexions locales",
      "Pages optimisées pour Google : titles, descriptions, sitemap, FAQ",
      "Boutons WhatsApp, formulaire, tracking et analytics",
      "Formation courte pour modifier les contenus essentiels",
    ],
    outcomes: ["Meilleure crédibilité", "Plus de clics Google", "Plus de contacts entrants"],
    faq: [
      {
        q: "Quel est le prix d'un site internet au Sénégal ?",
        a: "Un site vitrine professionnel démarre à 350 000 F CFA. Le budget dépend du nombre de pages, du contenu, du SEO et des fonctionnalités.",
      },
      {
        q: "Combien de temps prend la création d'un site ?",
        a: "Un site vitrine peut être livré en 1 à 3 semaines si les textes, images et validations sont disponibles rapidement.",
      },
      {
        q: "Le site sera-t-il visible sur Google ?",
        a: "Oui, nous intégrons les bases SEO : structure claire, metadata, sitemap, performance mobile et configuration Search Console.",
      },
    ],
    related: [
      { to: "/pricing", label: "Voir les tarifs de création de site" },
      { to: "/article/creer-site-web-professionnel-dakar", label: "Guide création site web professionnel" },
    ],
  },
  pricing: {
    path: "/services/tarif-site-vitrine-senegal",
    icon: Receipt,
    eyebrow: "Tarif site vitrine Sénégal",
    title: "Tarif site vitrine au Sénégal : prix clair et devis rapide",
    lead: "Un site vitrine professionnel démarre à 350 000 F CFA avec design mobile, SEO de base, formulaire, WhatsApp et mise en ligne.",
    serviceName: "Tarif site vitrine au Sénégal",
    serviceType: "Tarif création site vitrine",
    features: [
      "Site vitrine simple : présentation, services, contact, WhatsApp",
      "SEO de base : balises, sitemap, performance, indexation",
      "Formulaire de contact et configuration email",
      "Hébergement et mise en ligne accompagnés",
      "Options : blog, multi-pages, réservation, catalogue, maintenance",
    ],
    outcomes: ["Budget lisible", "Devis plus rapide", "Site prêt à convertir"],
    faq: [
      {
        q: "Quel est le tarif d'un site vitrine au Sénégal ?",
        a: "Un site vitrine professionnel démarre à 350 000 F CFA. Une version plus avancée avec contenu SEO, blog ou intégrations peut monter entre 600 000 et 1 500 000 F CFA.",
      },
      {
        q: "Pourquoi les prix varient autant ?",
        a: "Le prix dépend du nombre de pages, de la qualité du design, du contenu, du SEO, des formulaires, des intégrations et de la maintenance.",
      },
      {
        q: "Puis-je demander un devis précis ?",
        a: "Oui. Envoyez vos objectifs, votre activité et les pages souhaitées ; nous répondons avec une estimation claire.",
      },
    ],
    related: [
      { to: "/pricing", label: "Page tarifs complète" },
      { to: "/article/prix-creation-site-web-senegal-guide-complet", label: "Guide prix création site web" },
    ],
  },
  audit: {
    path: "/services/audit-seo-professionnel-senegal",
    icon: FileSearch,
    eyebrow: "Audit SEO professionnel Sénégal",
    title: "Audit SEO professionnel au Sénégal pour gagner plus de clics",
    lead: "Nous analysons vos impressions, CTR, pages, requêtes, titres, contenus et problèmes techniques pour transformer votre visibilité Google en clics qualifiés.",
    serviceName: "Audit SEO professionnel au Sénégal",
    serviceType: "Audit SEO",
    features: [
      "Analyse Google Search Console : impressions, CTR, requêtes et pages",
      "Réécriture des titres et descriptions qui ne donnent pas envie de cliquer",
      "Audit technique : indexation, sitemap, performance et balisage",
      "Plan de contenus pour les requêtes à fort potentiel",
      "Priorisation des actions rapides et des pages à créer ou corriger",
    ],
    outcomes: ["CTR amélioré", "Requêtes mieux ciblées", "Plan d'action concret"],
    faq: [
      {
        q: "Pourquoi ai-je beaucoup d'impressions mais peu de clics ?",
        a: "Souvent parce que la page apparaît sur une requête trop large, avec un titre peu aligné, une position moyenne faible ou une description qui ne répond pas clairement à l'intention.",
      },
      {
        q: "Un audit SEO peut-il augmenter les clics ?",
        a: "Oui, surtout quand le site a déjà des impressions. Le travail consiste à améliorer les snippets, créer les bonnes pages et mieux répondre aux requêtes qui s'affichent déjà.",
      },
      {
        q: "Que livrez-vous après l'audit ?",
        a: "Une liste d'actions priorisées : titres à réécrire, pages à optimiser, nouvelles pages à créer, problèmes techniques et maillage interne à corriger.",
      },
    ],
    related: [
      { to: "/services/agence-seo-senegal", label: "Agence SEO au Sénégal" },
      { to: "/article/checklist-audit-seo-30-minutes", label: "Checklist audit SEO" },
    ],
  },
};

function ServiceFrenchPage({ page }) {
  const Icon = page.icon;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.serviceName,
      serviceType: page.serviceType,
      description: page.lead,
      provider: {
        "@type": "LocalBusiness",
        name: "Fallcon Tech",
        url: site,
        telephone: "+221776260020",
        address: { "@type": "PostalAddress", addressLocality: "Dakar", addressCountry: "SN" },
      },
      areaServed: [{ "@type": "Country", name: "Sénégal" }, { "@type": "City", name: "Dakar" }],
      offers: { "@type": "Offer", url: `${site}/contact` },
      url: `${site}${page.path}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${site}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${site}/services` },
        { "@type": "ListItem", position: 3, name: page.serviceName, item: `${site}${page.path}` },
      ],
    },
  ];

  return (
    <>
      <SEO
        path={page.path}
        title={`${page.eyebrow} | Fallcon Tech Dakar`}
        description={page.lead}
        imageAlt={`${page.eyebrow} par Fallcon Tech`}
        jsonLd={jsonLd}
      />

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6">
              <Icon className="text-primary-foreground" size={30} />
            </div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-4">{page.eyebrow}</p>
            <h1 className="vt-title text-4xl md:text-6xl font-bold mb-6 gradient-text">{page.title}</h1>
            <p className="text-xl text-foreground/80">{page.lead}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-4">Ce que vous obtenez</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Une page et une offre clairement alignées avec ce que vos futurs clients cherchent sur Google.
                </p>
                <ul className="space-y-3 mb-8">
                  {page.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link to="/contact">
                    Demander un devis <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </div>

              <div className="bg-primary/5 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-bold text-2xl mb-6 text-primary">Résultats attendus</h3>
                <div className="space-y-4 mb-10">
                  {page.outcomes.map((outcome, index) => (
                    <div key={index} className="bg-card rounded-xl p-4 shadow-md">
                      <p className="font-semibold text-blue-600">{outcome}</p>
                    </div>
                  ))}
                </div>
                <h3 className="font-bold text-2xl mb-4 text-primary">Pages utiles</h3>
                <div className="flex flex-col gap-3">
                  {page.related.map((item) => (
                    <Link key={item.to} to={item.to} className="text-blue-600 hover:underline">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-primary">FAQ</h2>
          <div className="space-y-6">
            {page.faq.map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function DeveloppeurWebSenegal() {
  return <ServiceFrenchPage page={pages.developer} />;
}

export function CreationSiteInternetSenegal() {
  return <ServiceFrenchPage page={pages.website} />;
}

export function TarifSiteVitrineSenegal() {
  return <ServiceFrenchPage page={pages.pricing} />;
}

export function AuditSeoProfessionnelSenegal() {
  return <ServiceFrenchPage page={pages.audit} />;
}
