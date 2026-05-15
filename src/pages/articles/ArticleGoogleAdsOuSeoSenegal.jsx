import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticleGoogleAdsOuSeoSenegal = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/google-ads-ou-seo-senegal-choisir";
  const title = "Google Ads ou SEO au Sénégal : que choisir pour avoir plus de clients ?";
  const description = "Comparatif Google Ads vs SEO au Sénégal : coûts, délais, avantages, limites et stratégie mixte pour générer plus de prospects qualifiés.";
  const keywords = "Google Ads Sénégal, SEO Sénégal, référencement Google Sénégal, publicité Google Dakar, acquisition client Sénégal";
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
            name: "Quel canal coûte moins cher ?",
            acceptedAnswer: { "@type": "Answer", text: "À court terme Ads peut coûter moins cher pour tester. À long terme, le SEO devient souvent plus rentable si les pages sont bien entretenues." },
          },
          {
            "@type": "Question",
            name: "Peut-on faire du SEO sans blog ?",
            acceptedAnswer: { "@type": "Answer", text: "Oui, mais le blog aide à capter les questions, comparer les solutions et renforcer les pages services par maillage interne." },
          },
          {
            "@type": "Question",
            name: "Quel budget minimum pour Google Ads ?",
            acceptedAnswer: { "@type": "Answer", text: "Il faut un budget suffisant pour collecter des données. Mieux vaut une petite campagne bien ciblée sur une seule offre qu’un budget dispersé sur trop de mots-clés." },
          },
      ],
    },
  ];

  return (
    <>
      <SEO path={path} title={`Google Ads ou SEO Sénégal : quel canal choisir ? | Fallcon Tech`} description={description} type="article" jsonLd={jsonLd} author="Boubacar FALL" />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Google Ads ou SEO Sénégal" }]} />
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold mb-3">Acquisition • 9 min de lecture</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h1>
            <p className="mt-6 text-lg text-foreground/80">{description}</p>
          </Motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-headings:text-primary prose-a:text-blue-500">
          <p className="lead">Pour gagner des clients sur Google au Sénégal, deux chemins reviennent souvent : Google Ads pour apparaître rapidement, ou SEO pour construire une visibilité durable. Le bon choix dépend de votre urgence commerciale, de votre budget, de la concurrence et de votre capacité à convertir les visiteurs.</p>
          <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
            {["Recherche locale", "Conversion WhatsApp", "SEO technique", "Mesure des leads"].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        <section>
          <h2>Google Ads : rapide mais dépendant du budget</h2>
          <ul>
            <li>Vous pouvez être visible en quelques heures sur des requêtes transactionnelles comme “création site web Dakar” ou “agence SEO Sénégal”.</li>
            <li>Le ciblage permet de tester des messages, zones géographiques et offres rapidement.</li>
            <li>Mais chaque clic coûte de l’argent : si la page ne convertit pas, le budget part sans retour.</li>
            <li>La publicité s’arrête dès que vous coupez la campagne.</li>
          </ul>
        </section>
        <section>
          <h2>SEO : plus lent mais cumulatif</h2>
          <ul>
            <li>Le SEO demande des pages rapides, bien structurées et utiles.</li>
            <li>Une page qui gagne des positions peut générer des clics réguliers sans payer chaque visite.</li>
            <li>Les contenus informatifs captent les prospects tôt : prix, comparatifs, guides, erreurs à éviter.</li>
            <li>Le SEO renforce aussi la crédibilité, car beaucoup d’utilisateurs font plus confiance aux résultats naturels.</li>
          </ul>
        </section>
        <section>
          <h2>Comment décider selon votre situation</h2>
          <ul>
            <li>Besoin de leads cette semaine : lancez Google Ads vers une landing page optimisée.</li>
            <li>Budget limité mais vision long terme : priorisez le SEO local et les articles à forte intention.</li>
            <li>Service cher ou B2B : combinez Ads pour tester les mots-clés et SEO pour capitaliser sur les gagnants.</li>
            <li>Site lent ou peu clair : améliorez d’abord la page, sinon Ads et SEO auront un mauvais rendement.</li>
          </ul>
        </section>
        <section>
          <h2>La stratégie mixte la plus rentable</h2>
          <ul>
            <li>Utiliser Google Ads pendant 30 à 60 jours pour identifier les requêtes qui convertissent.</li>
            <li>Transformer ces requêtes en pages SEO longues, FAQ, comparatifs et études de cas.</li>
            <li>Créer des audiences de remarketing pour recibler les visiteurs non convertis.</li>
            <li>Mesurer le coût par lead, pas seulement le nombre de clics.</li>
          </ul>
        </section>
        <section>
          <h2>Checklist avant de payer de la publicité</h2>
          <ul>
            <li>Une landing page dédiée par service.</li>
            <li>Un bouton WhatsApp visible et un formulaire court.</li>
            <li>Un titre qui reprend la requête exacte de l’utilisateur.</li>
            <li>Un suivi des conversions : clic WhatsApp, formulaire, appel, e-mail.</li>
            <li>Des preuves : réalisations, témoignages, chiffres, garanties ou processus.</li>
          </ul>
        </section>
        <section>
          <h2>Questions fréquentes</h2>
          <div className="not-prose grid gap-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3>Quel canal coûte moins cher ?</h3>
            <p>À court terme Ads peut coûter moins cher pour tester. À long terme, le SEO devient souvent plus rentable si les pages sont bien entretenues.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3>Peut-on faire du SEO sans blog ?</h3>
            <p>Oui, mais le blog aide à capter les questions, comparer les solutions et renforcer les pages services par maillage interne.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3>Quel budget minimum pour Google Ads ?</h3>
            <p>Il faut un budget suffisant pour collecter des données. Mieux vaut une petite campagne bien ciblée sur une seule offre qu’un budget dispersé sur trop de mots-clés.</p>
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

export default ArticleGoogleAdsOuSeoSenegal;
