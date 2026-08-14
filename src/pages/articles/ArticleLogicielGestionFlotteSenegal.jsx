import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgFleet from "@/assets/teliman-tracking-fleeti-dashboard.png";

const ArticleLogicielGestionFlotteSenegal = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/logiciel-gestion-flotte-senegal";
  const title = "Logiciel de gestion de flotte au Sénégal : le guide 2026";
  const description = "Véhicules, conducteurs, missions, maintenance, carburant, GPS et tableaux de bord : comment piloter votre flotte au Sénégal.";
  const keywords = "logiciel gestion flotte, logiciel gestion flotte automobile sénégal, gestion flotte camion sénégal, suivi véhicules sénégal, logiciel transport sénégal";
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      description,
      keywords,
      inLanguage: "fr-SN",
      author: { "@type": "Person", name: "Boubacar FALL" },
      publisher: { "@type": "Organization", name: "Fallcon Tech", url: site || "https://fallcontech.com" },
      mainEntityOfPage: `${site}${path}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quel est le prix d’un logiciel de gestion de flotte ?",
          acceptedAnswer: { "@type": "Answer", text: "Le budget dépend du nombre de véhicules, des fonctionnalités (maintenance, carburant, GPS) et des intégrations. Un cadrage du besoin permet d’établir une estimation réaliste." },
        },
        {
          "@type": "Question",
          name: "Peut-on intégrer le GPS et le tracking ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, une solution peut consolider les données d’un fournisseur GPS existant (type Fleeti) dans un tableau de bord unique, avec alertes et indicateurs." },
        },
        {
          "@type": "Question",
          name: "Faut-il former les conducteurs et les gestionnaires ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, l’adoption est le facteur clé. Une prise en main courte et des écrans simples réduisent la résistance et les erreurs de saisie." },
        },
        {
          "@type": "Question",
          name: "Sur mesure ou solution du marché ?",
          acceptedAnswer: { "@type": "Answer", text: "Une solution du marché couvre les besoins standards. Le sur mesure est utile pour consolider plusieurs sources de données ou suivre des processus métier spécifiques." },
        },
      ],
    },
  ];

  return (
    <>
      <SEO path={path} title={`Logiciel gestion flotte Sénégal : guide 2026 | Fallcon Tech`} description={description} type="article" jsonLd={jsonLd} author="Boubacar FALL" />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Logiciel de gestion de flotte" }]} />
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold mb-3">Transport & logistique • 8 min de lecture</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h1>
            <p className="mt-6 text-lg text-foreground/80">{description}</p>
          </Motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-headings:text-primary prose-a:text-blue-500">
          <img alt={title} className="w-full rounded-2xl shadow-xl mb-10" src={imgFleet} loading="lazy" decoding="async" />
          <p className="lead">Quand une flotte grandit, le suivi sur papier ou dans des fichiers dispersés ne suffit plus : on perd des immobilisations, on oublie des maintenances et on ne sait plus combien coûte réellement chaque véhicule. Un logiciel de gestion de flotte remet de l’ordre.</p>

          <section>
            <h2>Pourquoi un logiciel de gestion de flotte ?</h2>
            <p>Un logiciel de gestion de flotte centralise <strong>véhicules, conducteurs, missions, maintenance et carburant</strong> dans un seul outil. Résultat : moins de pannes imprévues, une meilleure maîtrise des coûts et une vision claire de l’activité pour la direction.</p>
            <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
              {["Moins de pannes imprévues", "Coûts maîtrisés", "Véhicules toujours disponibles", "Décisions basées sur les données"].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                  <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>Les fonctionnalités essentielles</h2>
            <ul>
              <li><strong>Parc de véhicules</strong> : immatriculation, assurance, contrôle technique, historique.</li>
              <li><strong>Conducteurs</strong> : affectations, permis, historique des missions.</li>
              <li><strong>Missions et planning</strong> : courses, livraisons, affectation des véhicules.</li>
              <li><strong>Maintenance</strong> : échéances, interventions, alertes préventives.</li>
              <li><strong>Carburant</strong> : consommations, coûts, anomalies.</li>
              <li><strong>GPS et tracking</strong> : positions, kilométrage, alertes.</li>
            </ul>
          </section>

          <section>
            <h2>Les indicateurs qui comptent vraiment</h2>
            <ul>
              <li><strong>Coût au kilomètre</strong> : le meilleur indicateur de rentabilité d’un véhicule.</li>
              <li><strong>Taux d’immobilisation</strong> : les véhicules immobilisés ne rapportent rien.</li>
              <li><strong>Consommation</strong> : repérer les surconsommations anormales.</li>
              <li><strong>Disponibilité</strong> : mesurer le temps réel d’exploitation.</li>
            </ul>
            <p>Notre étude de cas <Link to="/case-study/teliman-tracking-fleeti">Teliman Fleet Operations</Link> montre comment consolider des données de flotte dans un tableau de bord unique.</p>
          </section>

          <section>
            <h2>Comment bien choisir sa solution</h2>
            <ul>
              <li>Cartographier vos <strong>processus</strong> avant de comparer les outils.</li>
              <li>Vérifier la capacité à <strong>consolider le GPS</strong> et vos sources de données existantes.</li>
              <li>Exiger des <strong>tableaux de bord</strong> lisibles, pas des exportations Excel brutes.</li>
              <li>Prévoir la <strong>formation</strong> des gestionnaires et des conducteurs.</li>
            </ul>
            <p>Découvrez notre approche <Link to="/secteurs/transport-logistique">logiciel de gestion de flotte et transport au Sénégal</Link>.</p>
          </section>

          <section>
            <h2>Questions fréquentes</h2>
            <div className="not-prose grid gap-4">
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Quel est le prix d’un logiciel de gestion de flotte ?</h3>
                <p>Le budget dépend du nombre de véhicules, des fonctionnalités (maintenance, carburant, GPS) et des intégrations. Un cadrage permet une estimation réaliste.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Peut-on intégrer le GPS et le tracking ?</h3>
                <p>Oui, une solution peut consolider les données d’un fournisseur GPS existant dans un tableau de bord unique avec alertes et indicateurs.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Faut-il former les conducteurs et les gestionnaires ?</h3>
                <p>Oui, l’adoption est le facteur clé. Une prise en main courte et des écrans simples réduisent la résistance et les erreurs de saisie.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Sur mesure ou solution du marché ?</h3>
                <p>Le marché couvre les besoins standards ; le sur mesure est utile pour consolider plusieurs sources ou suivre des processus spécifiques.</p>
              </div>
            </div>
          </section>

          <div className="not-prose mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
            <p className="text-slate-800 font-medium mb-2">Vous pilotez une flotte de véhicules ?</p>
            <p className="text-slate-700">Fallcon Tech conçoit des tableaux de bord de flotte qui consolident GPS, maintenance et carburant. <Link to="/secteurs/transport-logistique">Présentez-nous votre besoin</Link>.</p>
          </div>
          <div className="not-prose mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild><Link to="/contact">Demander une étude</Link></Button>
            <Button asChild variant="outline"><a href="https://wa.me/221774837576" target="_blank" rel="noopener noreferrer">Parler sur WhatsApp</a></Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleLogicielGestionFlotteSenegal;
