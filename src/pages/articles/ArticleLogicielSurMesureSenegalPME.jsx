import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticleLogicielSurMesureSenegalPME = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/developpement-logiciel-sur-mesure-senegal-pme";
  const title = "Développement logiciel sur mesure au Sénégal : guide PME 2026";
  const description = "CRM, stock, facturation, courrier, RH ou dashboard : comment réussir un projet de logiciel sur mesure au Sénégal avec budget, étapes, sécurité et ROI.";
  const keywords = "développement logiciel sur mesure Sénégal, application de gestion Sénégal, CRM Sénégal, logiciel stock facturation Sénégal, développeur logiciel Dakar";
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
            name: "Faut-il choisir un SaaS étranger ou un développement local ?",
            acceptedAnswer: { "@type": "Answer", text: "Un SaaS est rapide si vos processus sont standards. Le sur mesure devient pertinent quand vos règles métier, documents, validations ou intégrations locales sont spécifiques." },
          },
          {
            "@type": "Question",
            name: "Peut-on connecter WhatsApp ou Mobile Money ?",
            acceptedAnswer: { "@type": "Answer", text: "Oui, selon les API disponibles et le cadre technique. Les notifications WhatsApp, les liens de paiement et les statuts de règlement peuvent être intégrés proprement." },
          },
          {
            "@type": "Question",
            name: "Quel est le premier module à développer ?",
            acceptedAnswer: { "@type": "Answer", text: "Commencez par le goulot d’étranglement qui coûte le plus cher : stock, facturation, suivi commercial, courrier ou reporting." },
          },
      ],
    },
  ];

  return (
    <>
      <SEO path={path} title={`Développement logiciel sur mesure Sénégal pour PME | Fallcon Tech`} description={description} type="article" jsonLd={jsonLd} author="Boubacar FALL" />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Logiciel sur mesure Sénégal" }]} />
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold mb-3">Logiciel sur mesure • 11 min de lecture</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h1>
            <p className="mt-6 text-lg text-foreground/80">{description}</p>
          </Motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-headings:text-primary prose-a:text-blue-500">
          <p className="lead">Beaucoup de PME sénégalaises commencent avec Excel, WhatsApp et des cahiers. Cela fonctionne au début, puis les erreurs apparaissent : doublons, pertes de données, retards de validation, absence de reporting, dépendance à une seule personne. Un logiciel sur mesure permet de transformer un processus métier en outil fiable, traçable et accessible.</p>
          <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
            {["Recherche locale", "Conversion WhatsApp", "SEO technique", "Mesure des leads"].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        <section>
          <h2>Quand passer d’Excel à un logiciel sur mesure</h2>
          <ul>
            <li>Vous recopiez les mêmes informations dans plusieurs fichiers.</li>
            <li>Vous perdez du temps à chercher un dossier, une facture, une demande ou un stock.</li>
            <li>Les validations se font par appels ou messages sans historique clair.</li>
            <li>Vous ne pouvez pas sortir un rapport fiable en moins de cinq minutes.</li>
          </ul>
        </section>
        <section>
          <h2>Les modules les plus demandés au Sénégal</h2>
          <ul>
            <li>Gestion de stock et caisse avec alertes de seuil, achats, ventes et marges.</li>
            <li>CRM commercial : prospects, relances WhatsApp, devis, pipeline et historique client.</li>
            <li>Facturation et paiements : devis, factures, reçus, suivi Wave/Orange Money et exports comptables.</li>
            <li>Gestion courrier ou documents : arrivée, affectation, délais, statut, archivage et recherche.</li>
            <li>Dashboard dirigeant : ventes, encaissements, retards, performances par équipe et indicateurs clés.</li>
          </ul>
        </section>
        <section>
          <h2>La bonne méthode de développement</h2>
          <ul>
            <li>Cartographier le processus réel avant de coder : rôles, étapes, exceptions, documents, droits d’accès.</li>
            <li>Construire un MVP utilisable rapidement plutôt qu’un cahier des charges impossible à terminer.</li>
            <li>Tester avec deux ou trois utilisateurs terrain pour corriger les détails qui bloquent l’adoption.</li>
            <li>Prévoir import/export, sauvegardes, journal d’activité et rôles administrateur dès la première version.</li>
          </ul>
        </section>
        <section>
          <h2>Budget et délais réalistes</h2>
          <ul>
            <li>Un petit outil interne peut démarrer autour d’un module clair : clients, stock, factures ou courrier.</li>
            <li>Un logiciel métier complet demande souvent plusieurs phases afin de réduire les risques et prioriser le ROI.</li>
            <li>Le coût dépend surtout de la complexité des règles métier, des intégrations, du nombre de rôles et du niveau de sécurité.</li>
          </ul>
        </section>
        <section>
          <h2>Erreurs à éviter</h2>
          <ul>
            <li>Copier exactement Excel sans améliorer le workflow.</li>
            <li>Oublier les droits utilisateurs et laisser tout le monde modifier toutes les données.</li>
            <li>Ne pas former les équipes et blâmer ensuite le logiciel.</li>
            <li>Lancer sans sauvegarde automatique ni plan de récupération.</li>
          </ul>
        </section>
        <section>
          <h2>Questions fréquentes</h2>
          <div className="not-prose grid gap-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3>Faut-il choisir un SaaS étranger ou un développement local ?</h3>
            <p>Un SaaS est rapide si vos processus sont standards. Le sur mesure devient pertinent quand vos règles métier, documents, validations ou intégrations locales sont spécifiques.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3>Peut-on connecter WhatsApp ou Mobile Money ?</h3>
            <p>Oui, selon les API disponibles et le cadre technique. Les notifications WhatsApp, les liens de paiement et les statuts de règlement peuvent être intégrés proprement.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3>Quel est le premier module à développer ?</h3>
            <p>Commencez par le goulot d’étranglement qui coûte le plus cher : stock, facturation, suivi commercial, courrier ou reporting.</p>
          </div>
          </div>
        </section>
        <div className="not-prose mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
          <p className="text-slate-800 font-medium mb-2">Vous voulez transformer ces conseils en actions concrètes ?</p>
          <p className="text-slate-700">Fallcon Tech peut auditer votre présence Google, créer les pages à forte intention et installer le suivi des clics, formulaires et messages WhatsApp.</p>
        </div>
        <div className="not-prose mt-8 flex flex-col sm:flex-row gap-3">
          <Button asChild><Link to="/contact">Demander un audit ou un devis</Link></Button>
          <Button asChild variant="outline"><a href="https://wa.me/221776260020" target="_blank" rel="noopener noreferrer">Parler sur WhatsApp</a></Button>
        </div>
        </div>
      </article>
    </>
  );
};

export default ArticleLogicielSurMesureSenegalPME;
