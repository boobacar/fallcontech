import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticleArchivageElectroniqueValeurProbanteSenegal = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/archivage-electronique-valeur-probante-senegal";
  const title = "Archivage électronique : valeur probante et bonnes pratiques";
  const description = "Intégrité, horodatage, conservation à long terme : comprendre l'archivage électronique à valeur probante et l'appliquer dans une administration ou une entreprise au Sénégal.";
  const keywords = "archivage électronique, archivage électronique à valeur probante, archivage électronique collectivités territoriales, conservation des documents numériques sénégal";
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
          name: "Qu'est-ce qu'un archivage électronique à valeur probante ?",
          acceptedAnswer: { "@type": "Answer", text: "C'est un archivage qui garantit l'intégrité du document dans le temps, l'identification de son auteur et un horodatage fiable, de sorte que le document puisse être opposé en cas de litige ou de contrôle." },
        },
        {
          "@type": "Question",
          name: "Quels documents faut-il archiver électroniquement ?",
          acceptedAnswer: { "@type": "Answer", text: "En priorité les documents à valeur juridique ou de preuve : actes, délibérations, contrats, factures, courriers signés, dossiers d'instruction et registres." },
        },
        {
          "@type": "Question",
          name: "Combien de temps conserver les documents ?",
          acceptedAnswer: { "@type": "Answer", text: "La durée dépend de la nature du document et de la réglementation applicable (comptable, fiscale, administrative). Un plan de classement définit les durées de conservation et les règles d'élimination." },
        },
        {
          "@type": "Question",
          name: "L'archivage électronique remplace-t-il l'archivage papier ?",
          acceptedAnswer: { "@type": "Answer", text: "Il peut le remplacer pour les documents nés numériques ou numérisés, à condition de respecter les exigences d'intégrité et d'horodatage. Les documents à valeur probante historique peuvent justifier une double conservation pendant la transition." },
        },
      ],
    },
  ];

  return (
    <>
      <SEO path={path} title={`Archivage électronique valeur probante Sénégal | Fallcon Tech`} description={description} type="article" jsonLd={jsonLd} author="Boubacar FALL" />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Archivage électronique" }]} />
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold mb-3">GED & archivage • 7 min de lecture</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h1>
            <p className="mt-6 text-lg text-foreground/80">{description}</p>
          </Motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-headings:text-primary prose-a:text-blue-500">
          <p className="lead">Un document numérique n'est fiable que si l'on peut prouver qu'il n'a pas été altéré, qui l'a produit et quand. L'archivage électronique à valeur probante répond à ces trois exigences, pour les administrations comme pour les entreprises.</p>

          <section>
            <h2>Qu'est-ce qu'un archivage électronique à valeur probante ?</h2>
            <p>Un archivage électronique a une <strong>valeur probante</strong> quand il garantit trois choses : <strong>l'intégrité</strong> du document (aucune altération dans le temps), <strong>l'identification de l'auteur</strong>, et un <strong>horodatage fiable</strong> (date certaine). C'est ce qui permet au document d'être opposé en cas de litige, de contrôle ou d'audit.</p>
            <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
              {["Intégrité garantie dans le temps", "Horodatage fiable", "Identification de l'auteur", "Recherche et restitution rapides"].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                  <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>Quels documents archiver électroniquement ?</h2>
            <ul>
              <li><strong>Actes et délibérations</strong> : documents à valeur juridique ou réglementaire.</li>
              <li><strong>Contrats et conventions</strong> : engagements signés.</li>
              <li><strong>Factures et pièces comptables</strong> : conservation fiscale.</li>
              <li><strong>Courriers signés et dossiers d'instruction</strong> : preuve des échanges et des décisions.</li>
              <li><strong>Registres</strong> : registres d'actes, registres de délibérations, registres d'état.</li>
            </ul>
          </section>

          <section>
            <h2>Les exigences techniques d'un archivage fiable</h2>
            <ul>
              <li><strong>Contrôle d'intégrité</strong> : empreinte du document et vérification régulière contre l'altération.</li>
              <li><strong>Horodatage</strong> : date certaine, opposable, fiable.</li>
              <li><strong>Conservation long terme</strong> : formats pérennes, migrations maîtrisées, pas de perte.</li>
              <li><strong>Contrôle d'accès</strong> : seuls les agents habilités consultent et restituent.</li>
              <li><strong>Journalisation</strong> : trace de chaque consultation et action.</li>
            </ul>
          </section>

          <section>
            <h2>Plan de classement et durée de conservation</h2>
            <p>La durée de conservation dépend de la nature du document et de la réglementation applicable (comptable, fiscale, administrative). Un <strong>plan de classement</strong> définit pour chaque type de document : la durée de conservation, les règles d'accès et les conditions d'élimination. C'est lui qui rend l'archivage maîtrisé plutôt que subi.</p>
            <p>Notre solution de <Link to="/solutions/gestion-courrier-ged">GED et gestion du courrier</Link> intègre l'archivage électronique.</p>
          </section>

          <section>
            <h2>Archivage papier ou électronique ?</h2>
            <p>L'archivage électronique peut remplacer le papier pour les documents nés numériques ou numérisés, à condition de respecter les exigences d'intégrité et d'horodatage. Pendant la transition, les documents à forte valeur historique peuvent justifier une double conservation, le temps de fiabiliser le circuit numérique.</p>
          </section>

          <section>
            <h2>Questions fréquentes</h2>
            <div className="not-prose grid gap-4">
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Qu'est-ce qu'un archivage à valeur probante ?</h3>
                <p>Un archivage qui garantit l'intégrité du document, l'identification de l'auteur et un horodatage fiable, pour être opposable.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Quels documents archiver en priorité ?</h3>
                <p>Actes, délibérations, contrats, factures, courriers signés et registres à valeur juridique ou de preuve.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Combien de temps conserver ?</h3>
                <p>Selon la réglementation applicable. Un plan de classement définit les durées et les règles d'élimination.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Remplace-t-il l'archivage papier ?</h3>
                <p>Oui pour les documents numériques ou numérisés, à condition de respecter intégrité et horodatage ; double conservation possible pendant la transition.</p>
              </div>
            </div>
          </section>

          <div className="not-prose mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
            <p className="text-slate-800 font-medium mb-2">Vous devez fiabiliser l'archivage de vos documents ?</p>
            <p className="text-slate-700">Fallcon Tech conçoit des solutions d'archivage électronique adaptées aux administrations et entreprises. <Link to="/solutions/gestion-courrier-ged">Découvrir la solution</Link>.</p>
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

export default ArticleArchivageElectroniqueValeurProbanteSenegal;
