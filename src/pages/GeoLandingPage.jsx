import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Flag, MapPin, Phone, Wallet, Globe2, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getGeoPageByPath,
  GEO_SITE_URL,
} from "@/data/geoData";

const WHATSAPP_NUMBER = "221774837576";

// Pages géo générées par données :
//   /services/<compétence>-<pays>   (320 pages)
//   /secteurs/<filière>-<pays>      (192 pages)
//   /pays/<pays>                    (16 hubs pays)
export default function GeoLandingPage() {
  const { geoSlug, secteurSlug, countrySlug } = useParams();
  const path = geoSlug
    ? `/services/${geoSlug}`
    : secteurSlug
      ? `/secteurs/${secteurSlug}`
      : `/pays/${countrySlug}`;
  const page = getGeoPageByPath(path);
  const isPays = page?.family === "pays";

  if (!page) {
    return (
      <section className="py-24 gradient-bg">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h1 className="vt-title text-4xl font-bold mb-6 gradient-text">
            Page introuvable
          </h1>
          <p className="text-xl text-foreground/80 mb-8">
            Cette page n'existe pas ou a été déplacée.
          </p>
          <Button asChild>
            <Link to="/services">
              Voir nos solutions <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    );
  }

  const { country, faq } = page;
  const gridTitle = isPays
    ? "Autres pays"
    : `${page.competence?.name || page.secteur?.name || page.type} dans d'autres pays`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      serviceType: page.type,
      description: page.lead,
      provider: {
        "@type": "LocalBusiness",
        name: "Fallcon Tech",
        url: GEO_SITE_URL,
        telephone: `+${WHATSAPP_NUMBER}`,
        address: { "@type": "PostalAddress", addressLocality: "Dakar", addressCountry: "SN" },
      },
      areaServed: { "@type": "Country", name: country.name },
      offers: { "@type": "Offer", url: `${GEO_SITE_URL}/contact` },
      url: `${GEO_SITE_URL}${page.path}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${GEO_SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Solutions", item: `${GEO_SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: page.h1, item: `${GEO_SITE_URL}${page.path}` },
      ],
    },
  ];

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Bonjour Fallcon Tech, je suis intéressé par : ${page.h1}.`
  )}`;

  return (
    <>
      <SEO
        path={page.path}
        title={page.title}
        description={page.description}
        imageAlt={`${page.h1} par Fallcon Tech`}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6">
              <Flag className="text-primary-foreground" size={30} />
            </div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-4">
              {page.eyebrow} · {country.flag} {country.capital}
            </p>
            <h1 className="vt-title text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {page.h1}
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">{page.lead}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12">
                {isPays ? (
                  <>
                    <h2 className="text-3xl font-bold mb-4">20 solutions disponibles</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                      Chaque page de solution détaille l'offre adaptée {country.prep} {country.name}.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                      {page.competenceLinks.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="bg-muted/40 rounded-lg px-3 py-2 text-sm text-blue-600 hover:bg-muted transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    <h3 className="font-bold text-xl mb-4 text-primary">12 filières accompagnées</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                      {page.secteurLinks.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="bg-muted/40 rounded-lg px-3 py-2 text-sm text-blue-600 hover:bg-muted transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    <Button asChild>
                      <Link to="/contact">
                        Demander un devis <ArrowRight className="ml-2" size={18} />
                      </Link>
                    </Button>
                  </>
                ) : (
                  <>
                    <h2 className="text-3xl font-bold mb-4">Ce que nous livrons</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                      Une solution concrète, adaptée à votre organisation {country.prep} {country.name}.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {page.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild>
                      <Link to="/contact">
                        Demander un devis <ArrowRight className="ml-2" size={18} />
                      </Link>
                    </Button>
                  </>
                )}
              </div>

              <div className="bg-primary/5 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-bold text-2xl mb-6 text-primary">
                  Votre projet {country.prep} {country.name}
                </h3>
                <p className="text-muted-foreground mb-6">{country.note}</p>
                <div className="space-y-4 mb-8">
                  <div className="bg-card rounded-xl p-4 shadow-md flex items-start gap-3">
                    <MapPin className="text-blue-500 mt-0.5" size={20} />
                    <div>
                      <p className="font-semibold">Capital et grandes villes</p>
                      <p className="text-sm text-muted-foreground">
                        {country.capital} · {country.cities}
                      </p>
                    </div>
                  </div>
                  <div className="bg-card rounded-xl p-4 shadow-md flex items-start gap-3">
                    <Wallet className="text-blue-500 mt-0.5" size={20} />
                    <div>
                      <p className="font-semibold">Contexte local</p>
                      <p className="text-sm text-muted-foreground">
                        {country.currency} · {country.zone}
                      </p>
                    </div>
                  </div>
                  <div className="bg-card rounded-xl p-4 shadow-md flex items-start gap-3">
                    <Phone className="text-blue-500 mt-0.5" size={20} />
                    <div>
                      <p className="font-semibold">Paiement mobile</p>
                      <p className="text-sm text-muted-foreground">{country.mobileMoney}</p>
                    </div>
                  </div>
                </div>
                <Button asChild variant="outline">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Discuter sur WhatsApp <ArrowRight className="ml-2" size={18} />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Answer (AEO) */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-2xl border-l-4 border-primary bg-card p-6 shadow-md">
            <p className="text-xs font-bold uppercase tracking-wide text-primary mb-2">En bref</p>
            <p className="text-lg leading-relaxed text-foreground/90">{page.quickAnswer}</p>
          </div>
        </div>
      </section>

      {/* Maillage : autres pays */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-3 text-primary">{gridTitle}</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Fallcon Tech intervient dans 16 pays d'Afrique de l'Ouest et centrale. Choisissez votre
            pays pour découvrir l'offre adaptée.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {page.relatedCountries.map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="bg-card rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow flex items-center gap-3"
              >
                <span className="text-2xl">{c.flag}</span>
                <span className="font-medium text-sm">
                  {c.name} — {page.type}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services connexes + article utile */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-primary">Solutions complémentaires</h2>
              <div className="flex flex-col gap-3">
                {page.relatedServices.map((item) => (
                  <Link key={item.to} to={item.to} className="text-blue-600 hover:underline">
                    {item.label}
                  </Link>
                ))}
                <Link to="/services" className="text-blue-600 hover:underline">
                  Toutes nos solutions
                </Link>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-primary">Pour aller plus loin</h2>
              <div className="flex flex-col gap-3">
                <Link to={page.relatedArticle.to} className="text-blue-600 hover:underline">
                  {page.relatedArticle.label}
                </Link>
                <Link to="/work" className="text-blue-600 hover:underline">
                  Nos réalisations
                </Link>
                <Link to="/pricing" className="text-blue-600 hover:underline">
                  Formats d'intervention
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-3 text-primary">
            Questions fréquentes
          </h2>
          <p className="text-muted-foreground mb-8">
            {page.h1} : les réponses aux questions que l'on nous pose le plus souvent.
          </p>
          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 gradient-bg">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-2xl mb-6">
            {isPays ? <LayoutGrid className="text-primary-foreground" size={26} /> : <Globe2 className="text-primary-foreground" size={26} />}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Un projet {page.type} {country.prep} {country.name} ?
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            Parlez-nous de votre besoin : nous répondons avec une estimation claire, à {country.capital} ou à distance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">
                Demander un devis <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                WhatsApp direct
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
