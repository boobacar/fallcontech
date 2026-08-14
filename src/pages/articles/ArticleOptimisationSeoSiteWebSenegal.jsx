import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgSeo from "@/assets/articles/seo.png";

const ArticleOptimisationSeoSiteWebSenegal = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/optimisation-seo-site-web-senegal";
  const title = "Optimiser son site web pour Google au Sénégal : le guide 2026";
  const description = "Vitesse, mobile, contenu, SEO local et maillage interne : la méthode pour optimiser votre site web et gagner des positions sur Google au Sénégal.";
  const keywords = "optimisation seo site web sénégal, référencement google sénégal, seo dakar, optimiser site wordpress sénégal, agence seo sénégal";
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
          name: "Combien de temps pour voir des résultats SEO au Sénégal ?",
          acceptedAnswer: { "@type": "Answer", text: "Les améliorations techniques se voient en quelques semaines, mais un positionnement durable sur des mots-clés concurrentiels demande généralement 3 à 6 mois de travail régulier." },
        },
        {
          "@type": "Question",
          name: "L’optimisation SEO suffit-elle sans publicité ?",
          acceptedAnswer: { "@type": "Answer", text: "Le SEO apporte un trafic durable et gratuit, mais il est lent à démarrer. La publicité Google Ads donne des résultats immédiats. Une stratégie mixte est souvent la plus rentable." },
        },
        {
          "@type": "Question",
          name: "Faut-il un audit SEO avant d’optimiser ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, un audit identifie les blocages techniques et les pages à fort potentiel. Sans audit, on risque d’optimiser au hasard et de perdre du temps." },
        },
        {
          "@type": "Question",
          name: "WordPress ou site sur mesure pour le SEO ?",
          acceptedAnswer: { "@type": "Answer", text: "Les deux peuvent être bien référencés. WordPress est rapide à mettre en place ; un site sur mesure offre plus de contrôle sur la vitesse et la structure à long terme." },
        },
      ],
    },
  ];

  return (
    <>
      <SEO path={path} title={`Optimiser son site web pour Google au Sénégal | Fallcon Tech`} description={description} type="article" jsonLd={jsonLd} author="Boubacar FALL" />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Optimisation SEO" }]} />
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold mb-3">SEO • 9 min de lecture</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h1>
            <p className="mt-6 text-lg text-foreground/80">{description}</p>
          </Motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-headings:text-primary prose-a:text-blue-500">
          <img alt={title} className="w-full rounded-2xl shadow-xl mb-10" src={imgSeo} loading="lazy" decoding="async" />
          <p className="lead">Votre site existe, mais il reste invisible sur Google. Le problème n’est presque jamais le contenu seul : c’est un mélange de technique, de pertinence et de maillage interne. Voici la méthode pour optimiser un site web au Sénégal, dans l’ordre des priorités.</p>

          <section>
            <h2>Pourquoi votre site n’apparaît pas sur Google</h2>
            <ul>
              <li><strong>Site lent</strong> : sur mobile et sur des connexions 3G/4G, un site qui met plus de 3 secondes à charger perd à la fois Google et vos visiteurs.</li>
              <li><strong>Pas d’indexation</strong> : sitemap absent ou mal configuré, pages bloquées, contenu non détecté par Google.</li>
              <li><strong>Contenu qui ne répond pas aux recherches</strong> : personne ne tape votre jargon interne ; les visiteurs cherchent des réponses concrètes.</li>
              <li><strong>Pas de maillage interne</strong> : des pages isolées sans liens entre elles ne transmettent aucune autorité.</li>
              <li><strong>Aucune présence locale</strong> : pas de Google Business Profile, pas de mention de Dakar ou du Sénégal sur les pages.</li>
            </ul>
          </section>

          <section>
            <h2>L’optimisation technique d’abord</h2>
            <p>Avant d’écrire du contenu, Google doit pouvoir charger, lire et comprendre vos pages rapidement. Les priorités :</p>
            <ul>
              <li>Compresser les images et servir des formats modernes (WebP, AVIF).</li>
              <li>Un design réellement <strong>mobile-first</strong>, car la majorité de vos visiteurs sont sur téléphone.</li>
              <li>Un <strong>sitemap.xml</strong> propre et un fichier robots.txt correct.</li>
              <li>Des balises title et meta description uniques sur chaque page.</li>
              <li>Un certificat HTTPS et des redirections 301 propres.</li>
            </ul>
            <p>Notre article <Link to="/article/optimisation-vitesse-site-seo-conversions">sur la vitesse de site</Link> détaille les 12 optimisations qui comptent.</p>
          </section>

          <section>
            <h2>Le contenu qui correspond à ce que les Sénégalais cherchent</h2>
            <p>Optimiser, c’est d’abord répondre à l’intention de recherche. Un utilisateur qui tape « création site web dakar prix » cherche un budget, pas une plaquette corporate. Structurez vos pages avec des questions réelles en titres (H2), des listes, et les mots que vos clients utilisent réellement : <strong>prix</strong>, <strong>guide</strong>, <strong>Dakar</strong>, <strong>Sénégal</strong>, <strong>combien coûte</strong>.</p>
          </section>

          <section>
            <h2>Le SEO local : Google Business Profile et requêtes géographiques</h2>
            <p>Au Sénégal, la plupart des recherches commerciales incluent une localité : « agence seo dakar », « développeur web dakar ». Pour capter ces recherches, il faut un <strong>Google Business Profile</strong> complété (catégorie, photos, avis, horaires) et des pages qui mentionnent naturellement Dakar et le Sénégal. C’est l’un des leviers les plus rentables pour une PME.</p>
          </section>

          <section>
            <h2>Mesurer les résultats</h2>
            <p>On ne peut pas optimiser ce qu’on ne mesure pas. Installez <strong>Google Search Console</strong> (pour les requêtes et les positions) et <strong>Google Analytics</strong> (pour le comportement des visiteurs). Suivez chaque mois : impressions, clics, position moyenne et conversions (appels, WhatsApp, formulaires).</p>
          </section>

          <section>
            <h2>La checklist des 10 optimisations prioritaires</h2>
            <div className="not-prose grid gap-3 my-6">
              {[
                "Mesurer la vitesse sur mobile et corriger les plus gros blocages",
                "Vérifier l’indexation de toutes les pages importantes",
                "Réécrire les titles pour le clic (mot-clé + bénéfice + localité)",
                "Structurer le contenu avec des H2 formulés en questions",
                "Ajouter des liens internes depuis les pages fortes",
                "Compléter le Google Business Profile",
                "Ajouter des avis clients et des preuves",
                "Créer des pages ciblées sur les services qui rapportent",
                "Corriger les contenus dupliqués ou cannibalisés",
                "Mettre en place un suivi mensuel Search Console + Analytics",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                  <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>Questions fréquentes</h2>
            <div className="not-prose grid gap-4">
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Combien de temps pour voir des résultats SEO au Sénégal ?</h3>
                <p>Les améliorations techniques se voient en quelques semaines ; un positionnement durable sur des mots-clés concurrentiels demande 3 à 6 mois de travail régulier.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>L’optimisation SEO suffit-elle sans publicité ?</h3>
                <p>Le SEO apporte un trafic durable et gratuit mais lent à démarrer. Une stratégie mixte SEO + Google Ads est souvent la plus rentable.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Faut-il un audit SEO avant d’optimiser ?</h3>
                <p>Oui, l’audit identifie les blocages et les pages à fort potentiel. Sans audit, on optimise au hasard.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>WordPress ou site sur mesure pour le SEO ?</h3>
                <p>Les deux se référencent bien. WordPress est rapide à mettre en place ; le sur mesure offre plus de contrôle sur la vitesse et la structure.</p>
              </div>
            </div>
          </section>

          <div className="not-prose mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
            <p className="text-slate-800 font-medium mb-2">Vous voulez gagner des positions sur Google ?</p>
            <p className="text-slate-700">Fallcon Tech réalise des audits SEO complets et applique les optimisations qui génèrent du trafic et des contacts. <Link to="/services/audit-seo-professionnel-senegal">Découvrez notre audit SEO professionnel</Link>.</p>
          </div>
          <div className="not-prose mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild><Link to="/contact">Demander un audit SEO</Link></Button>
            <Button asChild variant="outline"><a href="https://wa.me/221774837576" target="_blank" rel="noopener noreferrer">Parler sur WhatsApp</a></Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleOptimisationSeoSiteWebSenegal;
