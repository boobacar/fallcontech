import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

export default function ServiceCreationSiteWebDakar() {
  const siteUrl = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const faq = [
    { q: "Quel est le prix d’un site web à Dakar ?", a: "Nos projets démarrent à partir de 350 000 F CFA selon les fonctionnalités et objectifs SEO." },
    { q: "En combien de temps livrez-vous ?", a: "Entre 1 et 3 semaines pour un site vitrine, selon le contenu et les validations." },
    { q: "Le SEO est-il inclus ?", a: "Oui, base SEO technique incluse : balises, sitemap, vitesse, structure de contenu et indexation." },
  ];

  return (
    <>
      <SEO
        path="/services/creation-site-web-dakar"
        title="Création de site web à Dakar | Agence Fallcon Tech"
        description="Création de site web professionnel à Dakar : design moderne, SEO local, performance mobile et stratégie conversion pour PME et entrepreneurs."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Création de site web à Dakar</h1>
        <p className="text-foreground/80 mb-8">Nous concevons des sites rapides, élégants et orientés conversion pour les entreprises au Sénégal.</p>
        <h2 className="text-2xl font-semibold mb-3">Ce que vous obtenez</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Design professionnel adapté mobile</li>
          <li>Architecture SEO locale (Dakar + Sénégal)</li>
          <li>Pages orientées prise de contact</li>
          <li>Google Analytics + Search Console</li>
        </ul>
        <Link to="/contact" className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg">Demander un devis</Link>
      </section>
    </>
  );
}
