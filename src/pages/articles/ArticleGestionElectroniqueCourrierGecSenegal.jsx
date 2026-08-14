import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticleGestionElectroniqueCourrierGecSenegal = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/gestion-electronique-courrier-gec-senegal";
  const title = "Gestion électronique du courrier (GEC) : le guide complet";
  const description = "Registre numérique, workflow, parapheur, archivage : comprendre la GEC et choisir un logiciel de gestion du courrier adapté aux administrations et entreprises au Sénégal.";
  const keywords = "gestion électronique du courrier gec, logiciel gestion courrier, dématérialisation courrier entrant sortant, ged sénégal, digitalisation courrier administration";
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
          name: "Quelle est la différence entre GEC et GED ?",
          acceptedAnswer: { "@type": "Answer", text: "La GEC (gestion électronique du courrier) couvre le circuit du courrier : enregistrement, numérotation, visa, traitement, réponse et archivage. La GED (gestion électronique de documents) est plus large : elle gère tout document numérique, quel que soit son cycle de vie." },
        },
        {
          "@type": "Question",
          name: "Un logiciel de gestion de courrier coûte combien ?",
          acceptedAnswer: { "@type": "Answer", text: "Cela dépend du périmètre : nombre de services, d’utilisateurs, de courriers par mois et besoin ou non d’un parapheur électronique. Un cadrage du besoin permet d’établir un budget réaliste plutôt qu’un prix au hasard." },
        },
        {
          "@type": "Question",
          name: "Peut-on commencer sans scanner tous les anciens courriers ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui. La plupart des organisations démarrent en numérisant uniquement les courriers entrants à partir d’une date donnée, puis intègrent progressivement les archives utiles." },
        },
        {
          "@type": "Question",
          name: "La dématérialisation a-t-elle une valeur juridique au Sénégal ?",
          acceptedAnswer: { "@type": "Answer", text: "L’écrit électronique peut avoir une valeur probante sous conditions (intégrité du document, identification de l’auteur, horodatage fiable). Pour les procédures sensibles, un accompagnement juridique est recommandé." },
        },
      ],
    },
  ];

  return (
    <>
      <SEO path={path} title={`Gestion électronique du courrier (GEC) Sénégal | Fallcon Tech`} description={description} type="article" jsonLd={jsonLd} author="Boubacar FALL" />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Gestion électronique du courrier" }]} />
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold mb-3">Courrier & GED • 8 min de lecture</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h1>
            <p className="mt-6 text-lg text-foreground/80">{description}</p>
          </Motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-headings:text-primary prose-a:text-blue-500">
          <p className="lead">Des courriers perdus, des décisions qui traînent, aucune trace de ce qui a été reçu ni de qui l’a traité : c’est le quotidien de beaucoup d’administrations et d’entreprises. La gestion électronique du courrier (GEC) répond précisément à ce problème.</p>

          <section>
            <h2>GEC, GED : de quoi parle-t-on exactement ?</h2>
            <p>La <strong>GEC</strong> (gestion électronique du courrier) organise le circuit du courrier : enregistrement à l’arrivée, numérotation, orientation vers le bon service, visa et validation, réponse, puis archivage. La <strong>GED</strong> (gestion électronique de documents) est plus large : elle gère l’ensemble des documents numériques d’une organisation. En pratique, une bonne solution de courrier s’appuie souvent sur une GED pour le stockage et la recherche.</p>
            <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
              {["Traçabilité complète", "Aucun courrier perdu", "Délais de traitement réduits", "Recherche instantanée"].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                  <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>Pourquoi digitaliser le courrier entrant et sortant ?</h2>
            <ul>
              <li><strong>Traçabilité</strong> : chaque courrier a un numéro, un statut et un responsable.</li>
              <li><strong>Fin des pertes</strong> : plus de documents égarés entre deux bureaux.</li>
              <li><strong>Délais maîtrisés</strong> : les relances et échéances sont suivies automatiquement.</li>
              <li><strong>Continuité</strong> : les dossiers restent accessibles même en cas d’absence ou de départ d’un agent.</li>
            </ul>
          </section>

          <section>
            <h2>Les fonctionnalités essentielles d’un logiciel de gestion de courrier</h2>
            <ul>
              <li><strong>Registre numérique</strong> : enregistrement et numérotation automatique des courriers.</li>
              <li><strong>Workflow et visa</strong> : circuit de validation entre les services et la direction.</li>
              <li><strong>Parapheur électronique</strong> : signature et visa en ligne (quand la réglementation le permet).</li>
              <li><strong>Archivage et recherche</strong> : retrouver un courrier en quelques secondes, par expéditeur, date ou référence.</li>
              <li><strong>Alertes et tableaux de bord</strong> : voir d’un coup d’œil les courriers en attente et les retards.</li>
            </ul>
          </section>

          <section>
            <h2>Courrier entrant vs sortant : deux circuits à maîtriser</h2>
            <p>Le <strong>courrier entrant</strong> suit un circuit d’enregistrement, d’orientation, de traitement et de réponse. Le <strong>courrier sortant</strong> suit un circuit de rédaction, de validation, d’enregistrement, d’envoi et d’archivage. Une solution efficace traite les deux flux dans un seul registre cohérent, avec des numéros uniques et un historique complet.</p>
          </section>

          <section>
            <h2>Comment choisir sa solution ?</h2>
            <ul>
              <li><strong>Sur mesure vs logiciel prêt</strong> : une solution sur mesure épouse vos processus ; un logiciel du marché impose parfois de s’adapter à lui.</li>
              <li><strong>Open source vs éditeur</strong> : l’open source évite les licences mais exige une maintenance interne ; un éditeur assure le support.</li>
              <li><strong>Budget</strong> : raisonnez en coût total (licence, déploiement, formation, maintenance), pas seulement en prix d’entrée.</li>
            </ul>
            <p>Notre page <Link to="/solutions/gestion-courrier-ged">logiciel de gestion de courrier & GED</Link> présente notre approche.</p>
          </section>

          <section>
            <h2>Les étapes d’un projet de dématérialisation réussi</h2>
            <ul>
              <li><strong>Audit des circuits</strong> : cartographier les flux de courrier actuels.</li>
              <li><strong>Définition des règles</strong> : numérotation, délais, responsables, niveaux de visa.</li>
              <li><strong>Déploiement progressif</strong> : commencer par un service pilote.</li>
              <li><strong>Formation et accompagnement</strong> : la réussite est d’abord une question d’adoption.</li>
            </ul>
          </section>

          <section>
            <h2>Questions fréquentes</h2>
            <div className="not-prose grid gap-4">
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Quelle est la différence entre GEC et GED ?</h3>
                <p>La GEC couvre le circuit du courrier (enregistrement, visa, traitement, archivage) ; la GED gère tout document numérique, quel que soit son cycle de vie.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Un logiciel de gestion de courrier coûte combien ?</h3>
                <p>Le prix dépend du périmètre (services, utilisateurs, volume, parapheur électronique). Un cadrage du besoin permet d’établir un budget réaliste.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Peut-on commencer sans scanner tous les anciens courriers ?</h3>
                <p>Oui. La plupart des organisations numérisent à partir d’une date donnée, puis intègrent progressivement les archives utiles.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>La dématérialisation a-t-elle une valeur juridique au Sénégal ?</h3>
                <p>L’écrit électronique peut avoir une valeur probante sous conditions (intégrité, identification, horodatage). Un accompagnement juridique est recommandé pour les procédures sensibles.</p>
              </div>
            </div>
          </section>

          <div className="not-prose mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
            <p className="text-slate-800 font-medium mb-2">Vous gérez un volume de courrier important ?</p>
            <p className="text-slate-700">Fallcon Tech conçoit des solutions de gestion électronique du courrier adaptées aux administrations et organisations multisites. <Link to="/solutions/gestion-courrier-ged">Découvrez la solution</Link>.</p>
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

export default ArticleGestionElectroniqueCourrierGecSenegal;
