import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticleReferencementGoogleSenegal90Jours = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/referencement-google-senegal-plan-90-jours";
  const title = "Référencement Google au Sénégal : plan d’action SEO en 90 jours";
  const description = "Plan SEO sur 90 jours pour améliorer le référencement Google au Sénégal : audit, pages services, contenu, maillage interne, Search Console et optimisation CTR.";
  const keywords = "référencement Google Sénégal, SEO Dakar, être visible sur Google Sénégal, référencement naturel Sénégal, agence SEO Dakar";
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
            name: "Combien d’articles publier par mois ?",
            acceptedAnswer: { "@type": "Answer", text: "Pour une PME, 4 à 8 contenus bien ciblés par mois valent mieux que 30 articles génériques. La qualité, le maillage et la mise à jour comptent autant que le volume." },
          },
          {
            "@type": "Question",
            name: "Le SEO local suffit-il pour vendre ?",
            acceptedAnswer: { "@type": "Answer", text: "Le SEO apporte le trafic, mais la page doit convertir : offre claire, preuves, CTA WhatsApp, formulaire simple et réponse rapide." },
          },
          {
            "@type": "Question",
            name: "Quand faut-il refaire un site pour le SEO ?",
            acceptedAnswer: { "@type": "Answer", text: "Si le site est lent, mal structuré, non modifiable ou incapable de créer des pages optimisées, une refonte technique peut être plus rentable que de bricoler." },
          },
      ],
    },
  ];

  return (
    <>
      <SEO path={path} title={`Référencement Google Sénégal : plan SEO 90 jours | Fallcon Tech`} description={description} type="article" jsonLd={jsonLd} author="Boubacar FALL" />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Référencement Google Sénégal" }]} />
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold mb-3">SEO • 12 min de lecture</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h1>
            <p className="mt-6 text-lg text-foreground/80">{description}</p>
          </Motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-headings:text-primary prose-a:text-blue-500">
          <p className="lead">Être visible sur Google au Sénégal ne dépend pas d’un seul article ni d’un plugin magique. Il faut aligner technique, contenu, maillage interne, intention de recherche et conversion. Voici un plan de 90 jours pour passer d’un site invisible à une base SEO capable de générer des impressions, des clics et des demandes qualifiées.</p>
          <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
            {["Recherche locale", "Conversion WhatsApp", "SEO technique", "Mesure des leads"].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        <section>
          <h2>Jours 1 à 15 : audit et priorités</h2>
          <ul>
            <li>Installer ou vérifier Google Search Console, Analytics et le sitemap.</li>
            <li>Lister les pages indexées, les erreurs 404, les titres trop longs, les pages sans clics et les contenus dupliqués.</li>
            <li>Identifier 20 à 40 requêtes prioritaires : services, prix, localités, problèmes et comparatifs.</li>
            <li>Analyser les concurrents qui rankent déjà au Sénégal : structure, titres, contenus, preuves et vitesse.</li>
          </ul>
        </section>
        <section>
          <h2>Jours 16 à 35 : pages services à forte intention</h2>
          <ul>
            <li>Créer ou améliorer les pages qui vendent : création site web, SEO, application mobile, logiciel sur mesure, automatisation WhatsApp.</li>
            <li>Chaque page doit répondre à qui, quoi, prix indicatif, méthode, délais, preuves, FAQ et CTA.</li>
            <li>Ajouter des liens vers contact, réalisations et articles liés.</li>
            <li>Optimiser le title pour le clic : mot-clé + bénéfice + localisation.</li>
          </ul>
        </section>
        <section>
          <h2>Jours 36 à 60 : contenus piliers et articles longue traîne</h2>
          <ul>
            <li>Publier des guides utiles sur les questions avant achat : prix, erreurs, comparatifs, checklist, délais.</li>
            <li>Cibler la longue traîne : moins de volume, mais une intention souvent plus précise et plus facile à convertir.</li>
            <li>Structurer les articles avec H2 clairs, listes, FAQ et liens vers les pages services.</li>
            <li>Mettre à jour les anciens articles qui ont des impressions mais peu de clics.</li>
          </ul>
        </section>
        <section>
          <h2>Jours 61 à 75 : maillage interne et CTR</h2>
          <ul>
            <li>Relier chaque article à une page service pertinente.</li>
            <li>Ajouter des liens contextuels depuis les pages fortes vers les nouvelles pages.</li>
            <li>Réécrire les meta descriptions des pages qui apparaissent mais ne reçoivent pas assez de clics.</li>
            <li>Tester des titres plus précis : “prix”, “guide 2026”, “Dakar”, “Sénégal”, “checklist”.</li>
          </ul>
        </section>
        <section>
          <h2>Jours 76 à 90 : mesure, amélioration et conversion</h2>
          <ul>
            <li>Comparer impressions, clics, position moyenne et conversions.</li>
            <li>Renforcer les pages qui progressent avec FAQ, exemples, preuves et sections locales.</li>
            <li>Supprimer ou fusionner les contenus faibles qui cannibalisent les mêmes requêtes.</li>
            <li>Créer un reporting mensuel orienté business : demandes, appels, WhatsApp, coût par lead et chiffre d’affaires estimé.</li>
          </ul>
        </section>
        <section>
          <h2>Questions fréquentes</h2>
          <div className="not-prose grid gap-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3>Combien d’articles publier par mois ?</h3>
            <p>Pour une PME, 4 à 8 contenus bien ciblés par mois valent mieux que 30 articles génériques. La qualité, le maillage et la mise à jour comptent autant que le volume.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3>Le SEO local suffit-il pour vendre ?</h3>
            <p>Le SEO apporte le trafic, mais la page doit convertir : offre claire, preuves, CTA WhatsApp, formulaire simple et réponse rapide.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3>Quand faut-il refaire un site pour le SEO ?</h3>
            <p>Si le site est lent, mal structuré, non modifiable ou incapable de créer des pages optimisées, une refonte technique peut être plus rentable que de bricoler.</p>
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

export default ArticleReferencementGoogleSenegal90Jours;
