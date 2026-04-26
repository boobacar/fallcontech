import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServiceCreationSiteWebDakar() {
  const faq = [
    { q: "Quel est le prix d’un site web à Dakar ?", a: "Nos projets démarrent à partir de 350 000 F CFA selon les fonctionnalités et objectifs SEO." },
    { q: "En combien de temps livrez-vous ?", a: "Entre 1 et 3 semaines pour un site vitrine, selon le contenu et les validations." },
    { q: "Le SEO est-il inclus ?", a: "Oui, base SEO technique incluse : balises, sitemap, vitesse, structure de contenu et indexation." },
  ];

  const features = [
    "Design professionnel mobile-first",
    "Architecture SEO locale (Dakar + Sénégal)",
    "Pages orientées conversion et prise de contact",
    "Configuration Analytics + Search Console",
    "Optimisation Core Web Vitals",
  ];

  const outcomes = ["Plus de crédibilité", "Plus de trafic qualifié", "Plus de demandes clients"];

  return (
    <>
      <SEO
        path="/services/creation-site-web-dakar"
        title="Création de site web à Dakar | Agence Web Fallcon Tech — Sénégal"
        description="Création de site web professionnel à Dakar dès 350 000 F CFA : design mobile-first, SEO local Sénégal, Core Web Vitals, Analytics et stratégie de conversion pour PME, cliniques et startups."
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Création de site web à Dakar",
            description: "Création de site web professionnel à Dakar : design moderne mobile-first, SEO local, performance optimisée et stratégie de conversion pour PME au Sénégal.",
            provider: {
              "@type": "LocalBusiness",
              name: "Fallcon Tech",
              url: "https://fallcontech.com",
              telephone: "+221776260020",
              address: { "@type": "PostalAddress", addressLocality: "Dakar", addressCountry: "SN" },
            },
            areaServed: [{ "@type": "City", name: "Dakar" }, { "@type": "Country", name: "Sénégal" }],
            offers: {
              "@type": "Offer",
              priceSpecification: { "@type": "PriceSpecification", price: "350000", priceCurrency: "XOF", minPrice: "350000" },
              url: "https://fallcontech.com/contact",
            },
            serviceType: "Création de site web",
            url: "https://fallcontech.com/services/creation-site-web-dakar",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://fallcontech.com/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://fallcontech.com/services" },
              { "@type": "ListItem", position: 3, name: "Création de site web à Dakar", item: "https://fallcontech.com/services/creation-site-web-dakar" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          },
        ]}
      />

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="vt-title text-5xl md:text-6xl font-bold mb-6 gradient-text">Création de site web à Dakar</h1>
            <p className="text-xl text-foreground/80">Un site rapide, élégant et orienté business pour transformer vos visiteurs en clients.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6"><Globe className="text-primary-foreground" size={30} /></div>
                <h2 className="text-3xl font-bold mb-4">Ce que vous obtenez</h2>
                <p className="text-xl text-muted-foreground mb-8">Pack complet site web + SEO de base + tracking.</p>
                <ul className="space-y-3 mb-8">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3"><CheckCircle2 className="text-blue-500 flex-shrink-0 mt-1" size={20} /><span>{f}</span></li>
                  ))}
                </ul>
                <Button asChild><Link to="/contact">Demander un devis <ArrowRight className="ml-2" size={18} /></Link></Button>
              </div>
              <div className="bg-primary/5 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-bold text-2xl mb-6 text-primary">Résultats attendus</h3>
                <div className="space-y-4">{outcomes.map((o, i) => <div key={i} className="bg-card rounded-xl p-4 shadow-md"><p className="font-semibold text-blue-600">{o}</p></div>)}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-primary">FAQ</h2>
          <div className="space-y-6">{faq.map((f, i) => <div key={i} className="bg-card rounded-xl p-6 shadow-md"><h3 className="font-semibold text-lg mb-2">{f.q}</h3><p className="text-muted-foreground">{f.a}</p></div>)}</div>
        </div>
      </section>
    </>
  );
}
