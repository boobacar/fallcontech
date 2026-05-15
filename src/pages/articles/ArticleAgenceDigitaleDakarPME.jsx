import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticleAgenceDigitaleDakarPME = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/agence-digitale-dakar-pme-seo-site-web-automatisation";
  const title = "Agence digitale à Dakar : site web, SEO et automatisation pour PME";
  const description = "Guide complet pour choisir une agence digitale à Dakar capable de créer un site web performant, améliorer le SEO local et automatiser la prospection WhatsApp des PME.";
  const keywords = "agence digitale Dakar, agence web Dakar, SEO Sénégal, automatisation WhatsApp Sénégal, création site web Dakar";
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
            name: "Combien de temps pour voir des résultats SEO à Dakar ?",
            acceptedAnswer: { "@type": "Answer", text: "Les premiers signaux arrivent souvent en 4 à 8 semaines sur les requêtes peu concurrentielles. Les requêtes fortes demandent plutôt 3 à 6 mois avec contenu, technique et maillage interne." },
          },
          {
            "@type": "Question",
            name: "Agence digitale ou freelance : que choisir ?",
            acceptedAnswer: { "@type": "Answer", text: "Un freelance peut suffire pour une tâche précise. Une agence ou équipe structurée est plus adaptée si vous voulez site, SEO, contenu, tracking, automatisation et maintenance dans un même plan." },
          },
          {
            "@type": "Question",
            name: "Quel indicateur suivre en priorité ?",
            acceptedAnswer: { "@type": "Answer", text: "Suivez les clics organiques qualifiés, les demandes WhatsApp/formulaire et le taux de conversion des pages services." },
          },
      ],
    },
  ];

  return (
    <>
      <SEO path={path} title={`Agence digitale Dakar : SEO, site web et automatisation PME | Fallcon Tech`} description={description} type="article" jsonLd={jsonLd} author="Boubacar FALL" />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Agence digitale Dakar" }]} />
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold mb-3">Agence digitale • 10 min de lecture</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h1>
            <p className="mt-6 text-lg text-foreground/80">{description}</p>
          </Motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-headings:text-primary prose-a:text-blue-500">
          <p className="lead">Une agence digitale à Dakar ne doit pas seulement “faire un joli site”. Pour une PME sénégalaise, le vrai objectif est simple : être trouvé sur Google, rassurer le visiteur, convertir sur WhatsApp ou formulaire, puis suivre chaque prospect jusqu’à la vente. C’est cette combinaison — site web, SEO local, contenu, tracking et automatisation — qui transforme une présence en ligne en canal d’acquisition mesurable.</p>
          <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
            {["Recherche locale", "Conversion WhatsApp", "SEO technique", "Mesure des leads"].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        <section>
          <h2>Pourquoi une PME à Dakar a besoin d’une stratégie digitale complète</h2>
          <ul>
            <li>Un site vitrine isolé attire peu de trafic si aucune page ne cible les recherches locales comme “agence digitale Dakar”, “création site web Sénégal” ou “référencement Google Dakar”.</li>
            <li>Le SEO local crée un actif durable : vos pages peuvent générer des clics pendant des mois sans payer chaque visite.</li>
            <li>WhatsApp reste le canal de closing le plus naturel au Sénégal : il doit être intégré dès le départ dans les CTA, les relances et le suivi commercial.</li>
          </ul>
        </section>
        <section>
          <h2>Les livrables à demander avant de signer</h2>
          <ul>
            <li>Arborescence SEO avec pages services, pages locales, articles piliers et maillage interne.</li>
            <li>Design mobile-first, car une grande partie du trafic arrive depuis smartphone et réseau mobile.</li>
            <li>Configuration technique : balises title, meta description, schema.org, sitemap, Search Console, Analytics, redirections et vitesse.</li>
            <li>Plan de contenu sur 90 jours avec requêtes prioritaires, intention de recherche et appels à l’action.</li>
          </ul>
        </section>
        <section>
          <h2>Comment reconnaître une bonne agence digitale à Dakar</h2>
          <ul>
            <li>Elle parle de leads, de taux de conversion et de chiffre d’affaires, pas uniquement de couleurs et d’animations.</li>
            <li>Elle sait expliquer comment chaque page vise une requête, un persona et une action commerciale.</li>
            <li>Elle propose un tableau de bord simple : impressions, clics, positions, formulaires, messages WhatsApp et appels.</li>
            <li>Elle documente les accès, les sauvegardes, les responsabilités et la maintenance.</li>
          </ul>
        </section>
        <section>
          <h2>Budget réaliste et retour sur investissement</h2>
          <ul>
            <li>Un projet digital rentable se juge sur le coût par lead et la qualité des demandes reçues, pas uniquement sur le prix initial.</li>
            <li>Une PME locale peut commencer avec un socle : 5 à 8 pages optimisées, 4 articles stratégiques, tracking, WhatsApp et maintenance légère.</li>
            <li>Le contenu SEO demande de la patience, mais il réduit progressivement la dépendance aux publicités payantes.</li>
          </ul>
        </section>
        <section>
          <h2>Plan d’action conseillé</h2>
          <ul>
            <li>Auditer le site actuel, les concurrents et les requêtes locales.</li>
            <li>Créer ou refondre les pages qui ciblent les services à forte intention commerciale.</li>
            <li>Publier des articles utiles qui répondent aux questions avant devis : prix, délais, erreurs, comparatifs.</li>
            <li>Mesurer chaque mois les pages qui gagnent des impressions puis améliorer titres et CTA pour augmenter les clics.</li>
          </ul>
        </section>
        <section>
          <h2>Questions fréquentes</h2>
          <div className="not-prose grid gap-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3>Combien de temps pour voir des résultats SEO à Dakar ?</h3>
            <p>Les premiers signaux arrivent souvent en 4 à 8 semaines sur les requêtes peu concurrentielles. Les requêtes fortes demandent plutôt 3 à 6 mois avec contenu, technique et maillage interne.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3>Agence digitale ou freelance : que choisir ?</h3>
            <p>Un freelance peut suffire pour une tâche précise. Une agence ou équipe structurée est plus adaptée si vous voulez site, SEO, contenu, tracking, automatisation et maintenance dans un même plan.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3>Quel indicateur suivre en priorité ?</h3>
            <p>Suivez les clics organiques qualifiés, les demandes WhatsApp/formulaire et le taux de conversion des pages services.</p>
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

export default ArticleAgenceDigitaleDakarPME;
