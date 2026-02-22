import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

export default function ServiceAgenceSeoSenegal() {
  const faq = [
    { q: "En combien de temps voit-on des résultats SEO ?", a: "Les premiers signaux arrivent souvent entre 4 et 8 semaines, avec une progression continue ensuite." },
    { q: "Faites-vous le SEO local Dakar ?", a: "Oui, optimisation Google Business Profile, pages locales, contenus ciblés et maillage interne." },
    { q: "Travaillez-vous sur des sites existants ?", a: "Oui, audit, correction technique, optimisation on-page et plan éditorial sur site existant." },
  ];
  return (
    <>
      <SEO
        path="/services/agence-seo-senegal"
        title="Agence SEO au Sénégal | Référencement Google avec Fallcon Tech"
        description="Agence SEO au Sénégal : audit technique, optimisation on-page, stratégie de contenus et SEO local pour augmenter vos clics Google qualifiés."
        jsonLd={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }}
      />
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Agence SEO au Sénégal</h1>
        <p className="text-foreground/80 mb-8">Notre approche SEO est orientée business: plus d’impressions utiles, plus de clics qualifiés, plus de demandes clients.</p>
        <h2 className="text-2xl font-semibold mb-3">Notre méthode</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Audit SEO technique et sémantique</li>
          <li>Optimisation des pages stratégiques</li>
          <li>Plan de contenu et maillage interne</li>
          <li>Suivi KPI via Search Console et GA4</li>
        </ul>
        <Link to="/contact" className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg">Lancer ma stratégie SEO</Link>
      </section>
    </>
  );
}
