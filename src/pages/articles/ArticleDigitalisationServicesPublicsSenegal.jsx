import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticleDigitalisationServicesPublicsSenegal = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/digitalisation-services-publics-senegal";
  const title = "Digitalisation des services publics au Sénégal : enjeux et démarche";
  const description = "Dématérialisation des procédures, état civil, courrier et dossiers : les enjeux et la méthode pour réussir la digitalisation d’une administration au Sénégal.";
  const keywords = "digitalisation services publics, digitalisation administration publique sénégal, digitalisation état civil sénégal, dématérialisation procédures, administration digitale sénégal";
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
          name: "Combien coûte la digitalisation d’un service public ?",
          acceptedAnswer: { "@type": "Answer", text: "Le budget dépend du périmètre : nombre de procédures, d’agents, de sites et d’intégrations. Une approche par phase, en commençant par un processus à fort impact, limite le risque et l’investissement initial." },
        },
        {
          "@type": "Question",
          name: "Faut-il tout digitaliser d’un coup ?",
          acceptedAnswer: { "@type": "Answer", text: "Non. Une démarche progressive est plus sûre : on digitalise d’abord les procédures à fort volume ou à forte visibilité, puis on étend." },
        },
        {
          "@type": "Question",
          name: "Comment gérer la résistance des agents au changement ?",
          acceptedAnswer: { "@type": "Answer", text: "En les associant dès la conception, en formant sur des cas concrets et en montrant les gains concrets : moins de saisies répétées, moins d’erreurs, moins de files d’attente." },
        },
        {
          "@type": "Question",
          name: "La digitalisation est-elle sécurisée pour les données des citoyens ?",
          acceptedAnswer: { "@type": "Answer", text: "Elle le devient si la sécurité est intégrée dès la conception : contrôle d’accès, chiffrement, traçabilité, sauvegardes et conformité à la réglementation sur les données personnelles." },
        },
      ],
    },
  ];

  return (
    <>
      <SEO path={path} title={`Digitalisation des services publics au Sénégal | Fallcon Tech`} description={description} type="article" jsonLd={jsonLd} author="Boubacar FALL" />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Digitalisation des services publics" }]} />
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold mb-3">Digitalisation • 8 min de lecture</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h1>
            <p className="mt-6 text-lg text-foreground/80">{description}</p>
          </Motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-headings:text-primary prose-a:text-blue-500">
          <p className="lead">Digitaliser un service public, ce n’est pas seulement acheter des ordinateurs ou créer un site. C’est repenser les procédures pour les rendre plus rapides, plus traçables et plus accessibles. Voici les enjeux et la méthode pour réussir.</p>

          <section>
            <h2>Que signifie digitaliser un service public ?</h2>
            <p>C’est dématérialiser les procédures qui reposent aujourd’hui sur le papier : registres, courriers, dossiers, demandes, décisions. Concrètement, une demande peut être déposée, suivie et traitée en ligne, avec un historique complet et une traçabilité de bout en bout. Cela concerne l’<strong>état civil</strong>, le <strong>courrier</strong>, les <strong>dossiers administratifs</strong>, les <strong>registres</strong> et les <strong>paiements</strong>.</p>
            <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
              {["Délais raccourcis", "Traçabilité des dossiers", "Moins d’erreurs de saisie", "Accès simplifié pour les usagers"].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                  <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>Les enjeux concrets</h2>
            <ul>
              <li><strong>Délais</strong> : une procédure dématérialisée se traite en heures ou en jours au lieu de semaines.</li>
              <li><strong>Traçabilité</strong> : chaque dossier a un historique, un statut et un responsable identifié.</li>
              <li><strong>Transparence</strong> : l’usager sait où en est sa demande.</li>
              <li><strong>Résilience</strong> : les données ne dépendent plus d’un registre papier unique.</li>
              <li><strong>Coûts</strong> : moins de papier, de photocopies et de déplacements.</li>
            </ul>
          </section>

          <section>
            <h2>Par où commencer ?</h2>
            <p>Les chantiers les plus fréquents et les plus rapides à gagner :</p>
            <ul>
              <li><strong>État civil</strong> : numérisation des registres et des demandes d’actes.</li>
              <li><strong>Courrier</strong> : registre numérique, workflow et archivage (voir notre guide sur la <Link to="/article/gestion-electronique-courrier-gec-senegal">gestion électronique du courrier</Link>).</li>
              <li><strong>Dossiers et procédures</strong> : dématérialisation des demandes et du suivi.</li>
              <li><strong>Registres internes</strong> : remplacement des cahiers par des bases de données sécurisées.</li>
            </ul>
          </section>

          <section>
            <h2>La démarche en 4 étapes</h2>
            <ul>
              <li><strong>Audit des procédures</strong> : cartographier les flux, les volumes et les points de blocage.</li>
              <li><strong>Priorisation</strong> : commencer par les procédures à fort impact et à faible risque.</li>
              <li><strong>Solution et déploiement</strong> : outil adapté, testé sur un périmètre pilote.</li>
              <li><strong>Accompagnement au changement</strong> : formation, documentation et support continu.</li>
            </ul>
            <p>Notre page <Link to="/solutions/digitalisation-administrations">digitalisation des administrations</Link> détaille notre accompagnement.</p>
          </section>

          <section>
            <h2>Les pièges à éviter</h2>
            <ul>
              <li><strong>Digitaliser le désordre</strong> : automatiser une procédure mal conçue ne fait que reproduire ses défauts plus vite.</li>
              <li><strong>Négliger l’infrastructure</strong> : sans connexion stable et matériel adapté, l’outil reste inutilisé.</li>
              <li><strong>Ignorer la sécurité</strong> : des données de citoyens mal protégées exposent à des risques majeurs.</li>
              <li><strong>Oublier les agents</strong> : un outil imposé sans formation est rejeté.</li>
            </ul>
          </section>

          <section>
            <h2>Questions fréquentes</h2>
            <div className="not-prose grid gap-4">
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Combien coûte la digitalisation d’un service public ?</h3>
                <p>Le budget dépend du périmètre. Une approche par phase, en commençant par un processus à fort impact, limite le risque et l’investissement initial.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Faut-il tout digitaliser d’un coup ?</h3>
                <p>Non. Une démarche progressive est plus sûre : on digitalise d’abord les procédures à fort volume ou à forte visibilité, puis on étend.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Comment gérer la résistance des agents au changement ?</h3>
                <p>En les associant dès la conception et en montrant les gains concrets : moins de saisies répétées, moins d’erreurs, moins de files d’attente.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>La digitalisation est-elle sécurisée pour les données des citoyens ?</h3>
                <p>Oui, si la sécurité est intégrée dès la conception : contrôle d’accès, chiffrement, traçabilité, sauvegardes et conformité réglementaire.</p>
              </div>
            </div>
          </section>

          <div className="not-prose mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
            <p className="text-slate-800 font-medium mb-2">Vous préparez la digitalisation d’un service public ?</p>
            <p className="text-slate-700">Fallcon Tech accompagne les administrations dans la dématérialisation des procédures, du courrier et des registres. <Link to="/solutions/digitalisation-administrations">Présentez-nous votre projet</Link>.</p>
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

export default ArticleDigitalisationServicesPublicsSenegal;
