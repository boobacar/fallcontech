import React from "react";
import { Link, useLocation } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { hardwareArticles } from "@/data/hardwareArticles";
import { m1aUseCases } from "@/data/m1aUseCases";

const ARTICLES = { ...hardwareArticles, ...m1aUseCases };

const M1A_SECTORS = [
  ["Santé", "/article/m1a-clinique-hopital-reseau-medical"],
  ["Éducation", "/article/m1a-ecole-universite-campus"],
  ["Industrie", "/article/m1a-industrie-usine-ot-it"],
  ["FAI & hébergement", "/article/m1a-fai-hebergeur-bgp-bras"],
  ["Sites isolés", "/article/m1a-site-isole-chantier-mine"],
  ["Professions libérales", "/article/m1a-cabinets-avocats-notaires-comptables"],
  ["Multi-sites", "/article/m1a-organisations-multisites"],
  ["Hébergement & immobilier", "/article/m1a-hotels-residences-immeubles"],
];

/**
 * Article « matériel » : un seul composant, alimenté par src/data/hardwareArticles.js.
 * Chaque article garde la même structure — problème, usages, limites, FAQ — pour
 * que le lecteur retrouve ses repères, et pour que l'ajout d'un équipement ne
 * demande qu'une entrée de données.
 */

const slugify = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const FURTHER = {
  "/article/netengine-8000-m1a-usages-reels": [
    ["Routeur d’entreprise : interconnecter plusieurs sites", "/article/routeur-entreprise-interconnexion-sites"],
    ["Routeur d’agrégation : équiper un opérateur", "/article/routeur-agregation-operateur"],
  ],
  "/article/netengine-8000-m14-bng-operateur": [
    ["Routeur cœur de réseau : jusqu’à 7,2 Tbit/s", "/article/routeur-coeur-reseau-datacenter"],
    ["Routeur d’agrégation : équiper un opérateur", "/article/routeur-agregation-operateur"],
  ],
  "/article/usg6625e-pare-feu-entreprise": [
    ["Pare-feu d’entreprise : les cyberattaques qu’il arrête", "/article/pare-feu-entreprise-cyberattaques"],
    ["Switch réseau d’entreprise : VLAN et segmentation", "/article/switch-reseau-entreprise"],
  ],
  "/article/fusionserver-2288x-v5-usages-reels": [
    ["Serveur d’entreprise à Dakar : comment le dimensionner", "/article/serveur-entreprise-dakar"],
    ["Switch réseau d’entreprise : VLAN et segmentation", "/article/switch-reseau-entreprise"],
  ],
  "/article/cloudengine-s5735-switch-acces-entreprise": [
    ["Switch réseau d’entreprise : ce qu’il change", "/article/switch-reseau-entreprise"],
    ["Pare-feu d’entreprise : les cyberattaques qu’il arrête", "/article/pare-feu-entreprise-cyberattaques"],
  ],
  "/article/cartes-osn-wdm-spares-operateur": [
    ["WSS et ROADM : ajouter ou retirer des longueurs d’onde", "/article/wss-roadm-longueurs-onde"],
    ["Booster optique : amplifier le signal en sortie d’émetteur", "/article/booster-optique-emetteur"],
    ["Module SFP+ 10G : relier deux équipements en fibre", "/article/module-sfp-10g-fibre-optique"],
  ],
};

const countWords = (article) => {
  const text = [
    article.intro,
    ...article.sections.flatMap((s) => [s.h2, ...s.paras]),
    ...article.faq.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
};

export default function ArticleHardwareUseCase() {
  const { pathname } = useLocation();
  const article = ARTICLES[pathname];

  if (!article) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-4">Article introuvable</h1>
          <Link to="/resources" className="text-primary underline">
            Retour aux ressources
          </Link>
        </div>
      </section>
    );
  }

  const title = article.title;
  const description = article.description;
  const minutes = Math.max(4, Math.round(countWords(article) / 200));
  const sections = article.sections.map((section) => ({
    ...section,
    id: slugify(section.h2),
  }));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      articleSection: article.kicker,
      inLanguage: "fr-SN",
      author: { "@type": "Organization", name: "Fallcon Tech" },
      publisher: { "@type": "Organization", name: "Fallcon Tech" },
      mainEntityOfPage: `https://fallcontech.com${pathname}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <>
      <SEO
        path={pathname}
        title={`${title} | Fallcon Tech`}
        description={description}
        type="article"
        jsonLd={jsonLd}
      />

      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link
            to="/resources"
            className="inline-flex items-center text-primary hover:text-blue-500 mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Retour aux ressources
          </Link>
          <Breadcrumbs
            items={[
              { label: "Accueil", to: "/" },
              { label: "Ressources", to: "/resources" },
              { label: article.productLabel },
            ]}
          />
          <p className="text-sm font-medium uppercase tracking-wide text-primary mb-3">
            {article.kicker}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text max-w-4xl">
            {title}
          </h1>
          <p className="text-slate-600 max-w-3xl text-lg">{description}</p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-slate-500">
            <Clock size={16} /> {minutes} min de lecture
          </p>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <p className="lead">{article.intro}</p>

          <nav className="not-prose bg-card border border-border rounded-xl p-5 my-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">
              Sommaire
            </p>
            <ol className="space-y-2 text-sm">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="text-slate-700 hover:text-primary">
                    {index + 1}. {section.h2}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2>{section.h2}</h2>
              {section.paras.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </section>
          ))}

          {(pathname.startsWith("/article/m1a-") ||
            pathname === "/article/netengine-8000-m1a-usages-reels") && (
            <section>
              <h2>Le M1A par secteur</h2>
              <p>
                Le même routeur ne se déploie pas de la même façon dans une banque, une
                clinique ou une usine. Huit lectures par métier, avec les usages qui
                comptent et les limites à annoncer.
              </p>
              <ul className="not-prose grid gap-3 sm:grid-cols-2">
                {M1A_SECTORS.filter(([, to]) => to !== pathname).map(([label, to]) => (
                  <li key={to}>
                    <Link to={to} className="text-primary underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="not-prose mt-4">
                <Link to="/article/netengine-8000-m1a-usages-reels" className="text-primary underline">
                  Lire d’abord les quatre usages techniques du M1A
                </Link>
              </p>
            </section>
          )}

          {FURTHER[pathname] && (
            <section>
              <h2>Pour aller plus loin</h2>
              <ul className="not-prose grid gap-3">
                {FURTHER[pathname].map(([label, to]) => (
                  <li key={to}>
                    <Link to={to} className="text-primary underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2>Questions fréquentes</h2>
            <div className="not-prose grid gap-4">
              {article.faq.map((item) => (
                <div key={item.q} className="bg-card border border-border rounded-xl p-5">
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="not-prose mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
            <p className="text-slate-800 font-medium mb-2">{article.cta}</p>
            <p className="text-slate-700">
              L’équipement est décrit sans arrondi sur sa fiche{" "}
              <Link to={article.product} className="underline">
                {article.productLabel}
              </Link>
              . Pour un dimensionnement, un devis ou une visite,{" "}
              <Link to="/contact" className="underline">
                écrivez-nous
              </Link>{" "}
              : nous répondons sur ce que la machine sait faire, pas sur ce qu’elle ne sait pas.
            </p>
          </div>

          <div className="not-prose mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to={article.product}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Voir la fiche et la disponibilité <ArrowRight size={17} />
            </Link>
            <Link
              to="/services/reseau-et-securite"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-medium transition-colors hover:bg-muted"
            >
              Services réseau & sécurité
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
