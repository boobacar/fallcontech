import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticleLogicielMetierMairieCollectivitesSenegal = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/logiciel-metier-mairie-collectivites-senegal";
  const title = "Logiciel métier mairie : digitaliser les services d'une collectivité";
  const description = "Registres, courrier, délibérations, actes et circuits interservices : comment choisir ou développer un logiciel métier pour une mairie ou une collectivité locale au Sénégal.";
  const keywords = "logiciel métier mairie, logiciel de gestion mairie, digitalisation collectivités locales, logiciel gestion collectivité territoriale sénégal";
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
          name: "Qu'est-ce qu'un logiciel métier pour une mairie ?",
          acceptedAnswer: { "@type": "Answer", text: "C'est une application qui numérise les processus propres à une collectivité : registres, courrier, délibérations, actes, demandes des administrés et circuits de validation, avec des droits d'accès par service et des indicateurs pour l'exécutif." },
        },
        {
          "@type": "Question",
          name: "Faut-il un logiciel du commerce ou un logiciel sur mesure ?",
          acceptedAnswer: { "@type": "Answer", text: "Un logiciel du commerce couvre des besoins standard ; un logiciel sur mesure épouse les procédures réelles de la collectivité. Le bon choix dépend du périmètre, du budget et de la nécessité d'intégrer l'existant." },
        },
        {
          "@type": "Question",
          name: "Par où commencer la digitalisation d'une mairie ?",
          acceptedAnswer: { "@type": "Answer", text: "Par un diagnostic des procédures prioritaires (courrier, registres, délibérations), puis un déploiement par étapes courtes avec les agents concernés." },
        },
        {
          "@type": "Question",
          name: "Les données de la collectivité restent-elles sous son contrôle ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui. Accès par rôle, journalisation et sauvegardes sont définis avec la collectivité ; l'hébergement respecte le cadre de l'organisation." },
        },
      ],
    },
  ];

  return (
    <>
      <SEO path={path} title={`Logiciel métier mairie & collectivités Sénégal | Fallcon Tech`} description={description} type="article" jsonLd={jsonLd} author="Boubacar FALL" />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Logiciel métier mairie" }]} />
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold mb-3">Collectivités locales • 8 min de lecture</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h1>
            <p className="mt-6 text-lg text-foreground/80">{description}</p>
          </Motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-headings:text-primary prose-a:text-blue-500">
          <p className="lead">Une mairie gère à la fois du courrier, des registres, des délibérations, des actes et des demandes d'administrés — souvent dans des fichiers séparés. Un logiciel métier mairie réunit ces flux dans un même environnement, avec des droits par service et un pilotage pour l'exécutif.</p>

          <section>
            <h2>Qu'est-ce qu'un logiciel métier pour une collectivité ?</h2>
            <p>Un <strong>logiciel métier mairie</strong> numérise les processus propres à une collectivité : registres, courrier entrant et sortant, délibérations, actes, demandes des administrés et circuits de validation. Chaque service ne voit que ce qui le concerne, et l'exécutif dispose d'indicateurs sur les délais et les volumes.</p>
            <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
              {["Registres numériques", "Courrier entrant et sortant", "Délibérations et actes", "Pilotage pour l'exécutif"].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                  <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>Les périmètres à digitaliser en priorité</h2>
            <ul>
              <li><strong>Bureau du courrier</strong> : enregistrement, orientation, instruction, archivage.</li>
              <li><strong>État civil et registres</strong> : actes, registres numériques, recherches et copies.</li>
              <li><strong>Délibérations et arrêtés</strong> : préparation, circuit de visa, signature, publication.</li>
              <li><strong>Demandes des administrés</strong> : formulaires, accusés de réception, suivi des délais.</li>
              <li><strong>Finances et engagement</strong> : suivi des engagements et des paiements, tableaux de bord.</li>
            </ul>
          </section>

          <section>
            <h2>Logiciel du commerce ou sur mesure ?</h2>
            <p>Un <strong>logiciel du commerce</strong> couvre des besoins standard rapidement ; un <strong>logiciel sur mesure</strong> épouse les procédures réelles de la collectivité et s'intègre à l'existant. Le bon choix dépend du périmètre, du budget et du besoin d'intégration. Dans les deux cas, l'essentiel est que l'outil suive la procédure plutôt que de forcer la collectivité à s'adapter à lui.</p>
          </section>

          <section>
            <h2>Par où commencer la digitalisation d'une mairie ?</h2>
            <ul>
              <li><strong>Diagnostic</strong> : cartographier les procédures prioritaires et les points de rupture.</li>
              <li><strong>Cadrage</strong> : périmètre, rôles, règles de validation, critères d'acceptation.</li>
              <li><strong>Déploiement par étapes courtes</strong> : un service pilote, puis extension.</li>
              <li><strong>Formation et accompagnement</strong> : l'adoption par les agents est la vraie mesure de réussite.</li>
            </ul>
          </section>

          <section>
            <h2>Contrôle des données et sécurité</h2>
            <p>Les données de la collectivité restent sous son contrôle : accès par rôle, journalisation des actions, sauvegardes et hébergement défini avec l'organisation. La confidentialité des données d'état civil et des documents internes est traitée comme une exigence de base.</p>
            <p>Notre page <Link to="/solutions/digitalisation-administrations">dématérialisation des procédures administratives</Link> présente notre approche pour les administrations et collectivités.</p>
          </section>

          <section>
            <h2>Questions fréquentes</h2>
            <div className="not-prose grid gap-4">
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Qu'est-ce qu'un logiciel métier pour une mairie ?</h3>
                <p>Une application qui numérise registres, courrier, délibérations, actes et demandes, avec droits par service et indicateurs pour l'exécutif.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Logiciel du commerce ou sur mesure ?</h3>
                <p>Le sur mesure épouse les procédures réelles et s'intègre à l'existant ; le commerce couvre les besoins standard. Le choix dépend du périmètre et du budget.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Par où commencer ?</h3>
                <p>Diagnostic des procédures prioritaires, puis déploiement par étapes courtes avec les agents.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Les données restent-elles sous contrôle ?</h3>
                <p>Oui : accès par rôle, journalisation, sauvegardes et hébergement défini avec la collectivité.</p>
              </div>
            </div>
          </section>

          <div className="not-prose mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
            <p className="text-slate-800 font-medium mb-2">Vous pilotez la digitalisation d'une collectivité ?</p>
            <p className="text-slate-700">Fallcon Tech conçoit des logiciels métier pour mairies et collectivités locales. <Link to="/solutions/digitalisation-administrations">Découvrir l'accompagnement</Link>.</p>
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

export default ArticleLogicielMetierMairieCollectivitesSenegal;
