import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticleDematerialisationMarchesPublicsSenegal = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/dematerialisation-marches-publics-senegal";
  const title = "Dématérialisation des marchés publics : enjeux et outils";
  const description = "Procédures électroniques, traçabilité, interopérabilité et conduite du changement : comprendre la dématérialisation des marchés publics et s'y préparer au Sénégal.";
  const keywords = "dématérialisation des marchés publics, dématérialisation des procédures de marchés publics, plateforme appel sénégal, digitalisation passation des marchés";
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
          name: "Qu'est-ce que la dématérialisation des marchés publics ?",
          acceptedAnswer: { "@type": "Answer", text: "C'est le passage des procédures de passation et de gestion des marchés à des procédures électroniques : publication, dépôt des offres, évaluation, suivi d'exécution et archivage, avec traçabilité et sécurité." },
        },
        {
          "@type": "Question",
          name: "La plateforme APPEL remplace-t-elle les outils internes ?",
          acceptedAnswer: { "@type": "Answer", text: "APPEL couvre la procédure nationale de passation. Les autorités contractantes ont souvent besoin, en complément, de workflows internes (préparation, revue, classement, suivi d'exécution) connectés à leurs propres processus." },
        },
        {
          "@type": "Question",
          name: "Comment préparer une autorité contractante à la dématérialisation ?",
          acceptedAnswer: { "@type": "Answer", text: "Par la formation des agents, l'organisation des circuits internes, la reprise des dossiers existants et l'accompagnement au changement, en complément des outils nationaux." },
        },
        {
          "@type": "Question",
          name: "Quels sont les bénéfices attendus ?",
          acceptedAnswer: { "@type": "Answer", text: "Réduction des délais, traçabilité des décisions, égalité d'accès des soumissionnaires, sécurisation des échanges et meilleure redevabilité." },
        },
      ],
    },
  ];

  return (
    <>
      <SEO path={path} title={`Dématérialisation des marchés publics Sénégal | Fallcon Tech`} description={description} type="article" jsonLd={jsonLd} author="Boubacar FALL" />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Dématérialisation des marchés publics" }]} />
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold mb-3">Secteur public • 8 min de lecture</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h1>
            <p className="mt-6 text-lg text-foreground/80">{description}</p>
          </Motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-headings:text-primary prose-a:text-blue-500">
          <p className="lead">La dématérialisation des marchés publics est devenue une réalité au Sénégal : les procédures électroniques, la traçabilité et la sécurité des échanges remplacent progressivement le papier. Pour les autorités contractantes, l'enjeu n'est plus d'être convaincu, mais de s'organiser.</p>

          <section>
            <h2>De quoi parle-t-on ?</h2>
            <p>La <strong>dématérialisation des marchés publics</strong> désigne le passage des procédures de passation et de gestion des marchés à des procédures électroniques : publication des avis, dépôt et ouverture des offres, évaluation, attribution, suivi d'exécution et archivage — le tout avec traçabilité et sécurité.</p>
            <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
              {["Traçabilité des décisions", "Égalité d'accès des soumissionnaires", "Sécurisation des échanges", "Redevabilité renforcée"].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                  <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>Le cadre national : la plateforme APPEL</h2>
            <p>Au Sénégal, la plateforme <strong>APPEL</strong> (portée par l'ARCOP) constitue le socle de la dématérialisation de la commande publique : procédures électroniques, interopérabilité, sécurité et traçabilité. Elle couvre la procédure nationale de passation des marchés.</p>
            <p>Pour une autorité contractante, la question n'est donc pas de remplacer APPEL, mais de s'y connecter et de digitaliser <strong>ce qui l'entoure</strong> : la préparation interne, la revue des dossiers, le classement documentaire, le suivi d'exécution et les circuits de validation propres à l'organisation.</p>
          </section>

          <section>
            <h2>Ce qu'une autorité contractante doit digitaliser en complément</h2>
            <ul>
              <li><strong>Préparation des dossiers</strong> : constitution, revue et validation interne avant publication.</li>
              <li><strong>Classement documentaire</strong> : GED des dossiers de consultation et des pièces.</li>
              <li><strong>Suivi d'exécution</strong> : livrables, réceptions, paiements, alertes de délai.</li>
              <li><strong>Circuits internes de validation</strong> : visas, parapheur, délégations de signature.</li>
              <li><strong>Reporting</strong> : indicateurs pour la direction et les tutelles.</li>
            </ul>
          </section>

          <section>
            <h2>Se préparer : formation, organisation, conduite du changement</h2>
            <p>La réussite de la dématérialisation dépend moins de l'outil que de <strong>l'adoption par les agents</strong>. Les leviers sont : la formation aux procédures électroniques, l'organisation des circuits internes, la reprise des dossiers existants et un accompagnement au changement — en complément des outils nationaux.</p>
            <p>Notre page <Link to="/solutions/applications-metier">applications métier sur mesure</Link> présente notre approche des workflows internes et du suivi d'exécution.</p>
          </section>

          <section>
            <h2>Questions fréquentes</h2>
            <div className="not-prose grid gap-4">
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Qu'est-ce que la dématérialisation des marchés publics ?</h3>
                <p>Le passage des procédures de passation et de gestion des marchés à des procédures électroniques, avec traçabilité et sécurité.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>APPEL remplace-t-il les outils internes ?</h3>
                <p>APPEL couvre la procédure nationale ; en complément, les autorités contractantes digitalisent préparation, classement, suivi d'exécution et circuits internes.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Comment se préparer ?</h3>
                <p>Formation des agents, organisation des circuits internes, reprise des dossiers et accompagnement au changement.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Quels bénéfices attendre ?</h3>
                <p>Délais réduits, traçabilité, égalité d'accès, échanges sécurisés et redevabilité renforcée.</p>
              </div>
            </div>
          </section>

          <div className="not-prose mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
            <p className="text-slate-800 font-medium mb-2">Vous devez organiser vos circuits internes autour de la commande publique ?</p>
            <p className="text-slate-700">Fallcon Tech accompagne les autorités contractantes sur les workflows, le suivi d'exécution et la GED. <Link to="/solutions/applications-metier">Découvrir l'accompagnement</Link>.</p>
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

export default ArticleDematerialisationMarchesPublicsSenegal;
