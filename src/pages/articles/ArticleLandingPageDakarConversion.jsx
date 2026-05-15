import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticleLandingPageDakarConversion = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/landing-page-dakar-conversion-leads";
  const title = "Landing page à Dakar : comment créer une page qui convertit les visiteurs en leads";
  const description = "Structure complète d’une landing page à Dakar : message, SEO, preuve, CTA WhatsApp, formulaire et suivi pour augmenter les leads qualifiés.";
  const keywords = "landing page Dakar, page de vente Sénégal, création landing page Sénégal, conversion site web Dakar, génération de leads Sénégal";
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
            name: "Combien de sections pour une bonne landing page ?",
            acceptedAnswer: { "@type": "Answer", text: "Souvent 6 à 9 sections suffisent : promesse, problème, solution, preuves, méthode, offre, FAQ et CTA." },
          },
          {
            "@type": "Question",
            name: "Une landing page peut-elle ranker sur Google ?",
            acceptedAnswer: { "@type": "Answer", text: "Oui si elle répond réellement à l’intention de recherche, possède du contenu utile et reçoit des liens internes pertinents." },
          },
          {
            "@type": "Question",
            name: "Faut-il une page par service ?",
            acceptedAnswer: { "@type": "Answer", text: "Oui. Une page unique pour tous les services convertit moins bien qu’une page dédiée à chaque intention commerciale." },
          },
      ],
    },
  ];

  return (
    <>
      <SEO path={path} title={`Landing page Dakar : créer une page qui convertit | Fallcon Tech`} description={description} type="article" jsonLd={jsonLd} author="Boubacar FALL" />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Landing page Dakar" }]} />
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold mb-3">Conversion • 8 min de lecture</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h1>
            <p className="mt-6 text-lg text-foreground/80">{description}</p>
          </Motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-headings:text-primary prose-a:text-blue-500">
          <p className="lead">Une landing page n’est pas une simple page jolie. C’est une page construite pour une seule action : demander un devis, envoyer un message WhatsApp, réserver un appel ou télécharger une offre. Pour une entreprise à Dakar, une bonne landing page peut multiplier les demandes sans augmenter le trafic.</p>
          <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
            {["Recherche locale", "Conversion WhatsApp", "SEO technique", "Mesure des leads"].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        <section>
          <h2>Le rôle d’une landing page</h2>
          <ul>
            <li>Elle cible une offre précise au lieu de présenter toute l’entreprise.</li>
            <li>Elle reprend les mots du prospect : problème, résultat attendu, objections et urgence.</li>
            <li>Elle réduit les distractions : navigation limitée, CTA répétés, preuve visible.</li>
            <li>Elle permet de mesurer clairement le taux de conversion.</li>
          </ul>
        </section>
        <section>
          <h2>Structure recommandée</h2>
          <ul>
            <li>Hero clair : promesse, cible, bénéfice, CTA WhatsApp et formulaire.</li>
            <li>Preuves rapides : réalisations, chiffres, logos, captures ou témoignages.</li>
            <li>Explication de l’offre : ce qui est inclus, ce qui ne l’est pas, délais et méthode.</li>
            <li>Gestion des objections : prix, accompagnement, maintenance, propriété du site, support.</li>
            <li>FAQ SEO pour couvrir les questions que les prospects tapent sur Google.</li>
          </ul>
        </section>
        <section>
          <h2>SEO et landing page : comment concilier les deux</h2>
          <ul>
            <li>Choisir une requête principale : “landing page Dakar”, “création page de vente Sénégal” ou une requête service plus rentable.</li>
            <li>Rédiger un title orienté clic et une meta description qui promet un bénéfice concret.</li>
            <li>Ajouter des sections H2 utiles plutôt que bourrer la page de mots-clés.</li>
            <li>Créer des liens internes depuis les articles et pages services vers la landing page.</li>
          </ul>
        </section>
        <section>
          <h2>CTA WhatsApp et formulaire</h2>
          <ul>
            <li>WhatsApp rassure et accélère l’échange, mais il faut pré-remplir le message pour qualifier la demande.</li>
            <li>Le formulaire doit rester court : nom, téléphone, besoin, budget approximatif ou délai.</li>
            <li>Les CTA doivent être visibles après chaque section importante, surtout sur mobile.</li>
            <li>Chaque clic doit être tracké pour savoir quelles pages génèrent réellement des demandes.</li>
          </ul>
        </section>
        <section>
          <h2>Optimisations qui augmentent les leads</h2>
          <ul>
            <li>Afficher une offre claire au-dessus de la ligne de flottaison.</li>
            <li>Montrer un exemple de résultat concret plutôt qu’un discours générique.</li>
            <li>Réduire le poids des images pour charger vite en 4G.</li>
            <li>Tester deux titres différents si la page reçoit assez de trafic.</li>
            <li>Relancer automatiquement les demandes non répondues via WhatsApp ou CRM.</li>
          </ul>
        </section>
        <section>
          <h2>Questions fréquentes</h2>
          <div className="not-prose grid gap-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3>Combien de sections pour une bonne landing page ?</h3>
            <p>Souvent 6 à 9 sections suffisent : promesse, problème, solution, preuves, méthode, offre, FAQ et CTA.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3>Une landing page peut-elle ranker sur Google ?</h3>
            <p>Oui si elle répond réellement à l’intention de recherche, possède du contenu utile et reçoit des liens internes pertinents.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3>Faut-il une page par service ?</h3>
            <p>Oui. Une page unique pour tous les services convertit moins bien qu’une page dédiée à chaque intention commerciale.</p>
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

export default ArticleLandingPageDakarConversion;
