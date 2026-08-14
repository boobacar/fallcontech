import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgOdonto from "@/assets/dental-os-odontogram.webp";

const ArticleLogicielCliniqueDentaireSenegal = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/logiciel-clinique-dentaire-senegal";
  const title = "Logiciel clinique dentaire au Sénégal : le guide 2026";
  const description = "Dossier patient, rendez-vous, caisse, prescriptions, stocks et reporting : comment choisir ou développer un logiciel pour votre clinique dentaire au Sénégal.";
  const keywords = "logiciel clinique dentaire, logiciel cabinet dentaire sénégal, dossier patient numérique sénégal, gestion clinique dentaire dakar, logiciel dentiste sénégal";
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
          name: "Quel est le prix d’un logiciel de clinique dentaire au Sénégal ?",
          acceptedAnswer: { "@type": "Answer", text: "Le budget dépend du périmètre : dossier patient, rendez-vous, caisse, prescriptions, stocks et nombre d’utilisateurs. Une solution sur mesure est établie après cadrage du besoin." },
        },
        {
          "@type": "Question",
          name: "Peut-on migrer depuis un cahier ou Excel ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui. Les données patients existantes peuvent être reprises dans la nouvelle base, à condition de les structurer et de les nettoyer au préalable." },
        },
        {
          "@type": "Question",
          name: "Le dossier patient est-il sécurisé ?",
          acceptedAnswer: { "@type": "Answer", text: "Une solution sérieuse contrôle les accès par rôle, chiffre les échanges, journalise les actions et prévoit des sauvegardes. La confidentialité des données de santé doit être une priorité de conception." },
        },
        {
          "@type": "Question",
          name: "Faut-il un logiciel sur mesure ou une solution du marché ?",
          acceptedAnswer: { "@type": "Answer", text: "Une solution du marché peut suffire pour démarrer vite. Le sur mesure devient pertinent quand vos processus, votre caisse ou vos prescriptions sont spécifiques et que la solution doit évoluer avec la clinique." },
        },
      ],
    },
  ];

  return (
    <>
      <SEO path={path} title={`Logiciel clinique dentaire Sénégal : guide 2026 | Fallcon Tech`} description={description} type="article" jsonLd={jsonLd} author="Boubacar FALL" />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Logiciel clinique dentaire" }]} />
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold mb-3">Santé • 8 min de lecture</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h1>
            <p className="mt-6 text-lg text-foreground/80">{description}</p>
          </Motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-headings:text-primary prose-a:text-blue-500">
          <img alt={title} className="w-full rounded-2xl shadow-xl mb-10" src={imgOdonto} loading="lazy" decoding="async" />
          <p className="lead">Un dossier papier, un cahier de rendez-vous, une caisse séparée : à partir d’un certain volume de patients, la clinique dentaire perd du temps et de l’argent sans un logiciel unique qui centralise tout.</p>

          <section>
            <h2>Pourquoi un logiciel de clinique dentaire ?</h2>
            <p>Un logiciel de clinique dentaire remplace les cahiers, les fiches papier et les fichiers Excel dispersés par un <strong>dossier patient unique</strong> : historique des soins, rendez-vous, devis, factures, prescriptions et stock, accessibles en quelques clics. Le bénéfice est direct : moins d’erreurs, des consultations plus rapides et une vision claire de l’activité.</p>
            <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
              {["Dossier patient centralisé", "Rendez-vous en ligne", "Caisse et facturation", "Suivi du stock et reporting"].map((item) => (
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
              <li><strong>Dossier patient</strong> : état civil, antécédents, historique des soins et odontogramme.</li>
              <li><strong>Rendez-vous</strong> : agenda partagé, rappels SMS ou WhatsApp, réduction des absences.</li>
              <li><strong>Caisse et facturation</strong> : devis, paiements, recettes du jour.</li>
              <li><strong>Prescriptions</strong> : ordonnances générées et archivées.</li>
              <li><strong>Stock</strong> : consommables, prothèses, alertes de réapprovisionnement.</li>
              <li><strong>Reporting</strong> : fréquentation, chiffre d’affaires, actes les plus fréquents.</li>
            </ul>
          </section>

          <section>
            <h2>Logiciel prêt à l’emploi ou sur mesure ?</h2>
            <p>Une solution du marché se déploie rapidement et convient à une clinique aux processus standard. Le <strong>sur mesure</strong> devient pertinent quand la clinique a des besoins précis : caisse intégrée à la comptabilité locale, odontogramme spécifique, parcours de soins particulier, ou intégration avec d’autres outils. Notre réalisation pour la <Link to="/case-study/clinic">Clinique Dentaire DABIA</Link> illustre une approche adaptée au contexte sénégalais.</p>
          </section>

          <section>
            <h2>Comment bien choisir</h2>
            <ul>
              <li>Lister vos <strong>processus réels</strong> avant de regarder les outils.</li>
              <li>Vérifier la <strong>sécurité des données de santé</strong> (accès, chiffrement, sauvegardes).</li>
              <li>Exiger un <strong>accompagnement à la prise en main</strong>, pas seulement une installation.</li>
              <li>Raisonner en <strong>coût total</strong> : licence, déploiement, formation, maintenance.</li>
            </ul>
            <p>Découvrez notre approche <Link to="/secteurs/sante">logiciel pour clinique et cabinet médical au Sénégal</Link>.</p>
          </section>

          <section>
            <h2>Questions fréquentes</h2>
            <div className="not-prose grid gap-4">
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Quel est le prix d’un logiciel de clinique dentaire au Sénégal ?</h3>
                <p>Le budget dépend du périmètre : dossier patient, rendez-vous, caisse, prescriptions, stock et nombre d’utilisateurs. Une solution sur mesure est établie après cadrage.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Peut-on migrer depuis un cahier ou Excel ?</h3>
                <p>Oui, les données existantes peuvent être reprises dans la nouvelle base après structuration et nettoyage.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Le dossier patient est-il sécurisé ?</h3>
                <p>Une solution sérieuse contrôle les accès par rôle, chiffre les échanges, journalise les actions et prévoit des sauvegardes.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Faut-il un logiciel sur mesure ou une solution du marché ?</h3>
                <p>Le marché suffit pour démarrer vite ; le sur mesure devient pertinent quand vos processus sont spécifiques et doivent évoluer.</p>
              </div>
            </div>
          </section>

          <div className="not-prose mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
            <p className="text-slate-800 font-medium mb-2">Vous voulez digitaliser votre clinique ?</p>
            <p className="text-slate-700">Fallcon Tech conçoit des logiciels de clinique adaptés au Sénégal : dossier patient, caisse, rendez-vous et reporting. <Link to="/secteurs/sante">Présentez-nous votre besoin</Link>.</p>
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

export default ArticleLogicielCliniqueDentaireSenegal;
