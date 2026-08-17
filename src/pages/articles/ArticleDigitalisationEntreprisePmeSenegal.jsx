import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticleDigitalisationEntreprisePmeSenegal = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/digitalisation-entreprise-pme-senegal";
  const title = "Digitalisation d'entreprise au Sénégal : par où commencer";
  const description = "Processus, données, outils et conduite du changement : une méthode concrète pour digitaliser une entreprise ou une PME au Sénégal, sans tout refondre d'un coup.";
  const keywords = "digitalisation entreprise, digitalisation pme, dématérialisation entreprise, aide digitalisation entreprise sénégal, transformation numérique pme";
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
          name: "Par où commencer la digitalisation d'une PME ?",
          acceptedAnswer: { "@type": "Answer", text: "Par un diagnostic des processus qui coûtent le plus cher en ressaisie et en erreurs : caisse, stock, facturation, courrier, suivi client. On digitalise d'abord un processus à fort impact, puis on étend." },
        },
        {
          "@type": "Question",
          name: "Quel budget prévoir pour digitaliser une entreprise ?",
          acceptedAnswer: { "@type": "Answer", text: "Cela dépend du périmètre et de la nécessité d'un logiciel sur mesure. Un cadrage du besoin permet d'établir un budget réaliste, par étapes, plutôt qu'un investissement global d'un coup." },
        },
        {
          "@type": "Question",
          name: "Existe-t-il des aides à la digitalisation des entreprises au Sénégal ?",
          acceptedAnswer: { "@type": "Answer", text: "Des programmes d'appui à la digitalisation des PME existent (programmes de développement, accompagnements sectoriels). Leur éligibilité et leurs conditions évoluent : il faut vérifier les dispositifs en vigueur auprès des structures d'appui." },
        },
        {
          "@type": "Question",
          name: "Faut-il un logiciel sur mesure ou un outil du commerce ?",
          acceptedAnswer: { "@type": "Answer", text: "Un outil du commerce convient aux besoins standard ; un logiciel sur mesure épouse vos processus et évite les contournements. Le choix dépend de la spécificité de votre activité." },
        },
      ],
    },
  ];

  return (
    <>
      <SEO path={path} title={`Digitalisation entreprise & PME Sénégal | Fallcon Tech`} description={description} type="article" jsonLd={jsonLd} author="Boubacar FALL" />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Digitalisation d'entreprise" }]} />
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold mb-3">Entreprises & PME • 7 min de lecture</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h1>
            <p className="mt-6 text-lg text-foreground/80">{description}</p>
          </Motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-headings:text-primary prose-a:text-blue-500">
          <p className="lead">Digitaliser une entreprise ne consiste pas à empiler des outils, mais à fiabiliser les processus qui font perdre du temps et de l'argent : caisse, stock, facturation, courrier, suivi client. Voici une méthode pour avancer sans tout refondre d'un coup.</p>

          <section>
            <h2>Digitalisation : commencer par le processus, pas par l'outil</h2>
            <p>La première erreur est d'acheter un outil avant d'avoir compris le processus. La bonne séquence est inverse : <strong>cartographier la procédure</strong>, identifier la ressaisie et les erreurs, puis choisir ou développer l'outil qui s'y adapte. L'objectif est de supprimer la double saisie et de rendre chaque décision traçable.</p>
            <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
              {["Moins de ressaisie", "Décisions traçables", "Pilotage par indicateurs", "Données fiabilisées"].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                  <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>Quels processus digitaliser en priorité ?</h2>
            <ul>
              <li><strong>Caisse et stock</strong> : le premier gisement de temps et d'erreurs pour un commerce.</li>
              <li><strong>Facturation et relances</strong> : réduire les impayés et les oublis.</li>
              <li><strong>Courrier et documents</strong> : centraliser, tracer, retrouver.</li>
              <li><strong>Suivi client et devis</strong> : ne plus perdre une demande dans un carnet ou WhatsApp.</li>
              <li><strong>Reporting de direction</strong> : voir la trésorerie et l'activité en temps réel.</li>
            </ul>
          </section>

          <section>
            <h2>Logiciel sur mesure ou outil du commerce ?</h2>
            <p>Un <strong>outil du commerce</strong> convient aux besoins standard et se déploie vite. Un <strong>logiciel sur mesure</strong> épouse vos processus, évite les contournements et s'intègre à vos outils existants. Pour une activité spécifique, le sur mesure est souvent le meilleur rapport qualité/coût sur la durée.</p>
            <p>Notre page <Link to="/solutions/applications-metier">applications métier sur mesure</Link> détaille notre approche.</p>
          </section>

          <section>
            <h2>Aides et accompagnement à la digitalisation</h2>
            <p>Des programmes d'appui à la digitalisation des PME existent au Sénégal (programmes de développement, accompagnements sectoriels). Leur éligibilité et leurs conditions évoluent : il faut vérifier les dispositifs en vigueur auprès des structures d'appui. Un accompagnement structuré — diagnostic, cadrage, déploiement par étapes, formation — est de toute façon la meilleure garantie de réussite.</p>
          </section>

          <section>
            <h2>Une méthode en quatre étapes</h2>
            <ul>
              <li><strong>Diagnostic</strong> : identifier le processus le plus coûteux en ressaisie et erreurs.</li>
              <li><strong>Cadrage</strong> : périmètre, rôles, règles, critères d'acceptation.</li>
              <li><strong>Réalisation par étapes courtes</strong> : livrer, tester avec les équipes, étendre.</li>
              <li><strong>Formation et suivi</strong> : l'adoption par les équipes est la vraie mesure de réussite.</li>
            </ul>
          </section>

          <section>
            <h2>Questions fréquentes</h2>
            <div className="not-prose grid gap-4">
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Par où commencer la digitalisation d'une PME ?</h3>
                <p>Par le processus le plus coûteux en ressaisie et erreurs (caisse, stock, facturation, courrier), puis extension progressive.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Quel budget prévoir ?</h3>
                <p>Il dépend du périmètre et du besoin de sur mesure. Un cadrage permet d'établir un budget par étapes.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Existe-t-il des aides à la digitalisation ?</h3>
                <p>Oui, des programmes d'appui existent ; vérifiez les dispositifs en vigueur auprès des structures d'appui.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Sur mesure ou outil du commerce ?</h3>
                <p>Le commerce pour les besoins standard, le sur mesure pour épouser vos processus et éviter les contournements.</p>
              </div>
            </div>
          </section>

          <div className="not-prose mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
            <p className="text-slate-800 font-medium mb-2">Vous voulez digitaliser un processus critique de votre entreprise ?</p>
            <p className="text-slate-700">Fallcon Tech conçoit des applications métier sur mesure pour les PME et entreprises au Sénégal. <Link to="/solutions/applications-metier">Découvrir la solution</Link>.</p>
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

export default ArticleDigitalisationEntreprisePmeSenegal;
