import React from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Zap, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Conception de Sites Web & SEO",
      tagline:
        "Plus de demandes, chargement plus rapide, meilleur classement local",
      priceFrom: "350 000 F CFA",
      id: "site-web-seo",
      features: [
        "UI responsive mobile-first",
        "SEO on-page (sitemap, méta-tags, GSC)",
        "Intégration Google Analytics",
        "Vitesses de chargement rapides (Core Web Vitals)",
        "Formulaires de contact & capture de leads",
        "Gestion de blog/contenu",
      ],
      outcomes: [
        "Trafic organique accru",
        "Meilleur engagement utilisateur",
        "Taux de conversion plus élevés",
      ],
    },
    {
      icon: Zap,
      title: "Plateformes Internes & Automatisations",
      tagline:
        "Gagnez du temps, réduisez les erreurs, faites évoluer vos opérations",
      priceFrom: "2.5M F CFA",
      id: "automatisations-plateformes",
      features: [
        "Portails de documents avec contrôle d'accès",
        "Journaux d'activité et pistes d'audit",
        "Workflows WhatsApp/SMS",
        "Pipelines de messages depuis CSV",
        "Tableaux de bord personnalisés",
        "Fonctionnalité de corbeille/restauration",
      ],
      outcomes: [
        "Réduction du travail manuel",
        "Sécurité améliorée",
        "Meilleure collaboration d'équipe",
      ],
    },
    {
      icon: Rocket,
      title: "Développement de MVP & Startups",
      tagline:
        "Prototypage rapide, fonctionnalités en temps réel, prêt pour le cloud",
      priceFrom: "1 000 000 F CFA",
      id: "developpement-mvp",
      features: [
        "Architecture React + Firebase",
        "Base de données en temps réel",
        "Authentification des utilisateurs",
        "Déploiement cloud (Vercel/Firebase)",
        "Infrastructure évolutive",
        "Cycles d'itération rapides",
      ],
      outcomes: [
        "Validation rapide sur le marché",
        "Produit prêt pour les investisseurs",
        "Fondation évolutive",
      ],
    },
  ];

  const siteUrl = import.meta.env.VITE_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '');
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${siteUrl}/services#${s.id}`,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.tagline,
        areaServed: "SN",
        provider: { "@type": "Organization", name: "Fallcon Tech" },
        offers: {
          "@type": "Offer",
          price: s.priceFrom?.replace(/[^0-9.]/g, ""),
          priceCurrency: "XOF",
          url: `${siteUrl}/contact`,
        },
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
    ],
  };

  const faqs = [
    {
      q: "Combien coûte un site web professionnel ?",
      a: "Nos sites démarrent à 350 000 F CFA et varient selon les fonctionnalités (réservation, blog, intégrations, etc.).",
    },
    {
      q: "En combien de temps livrez-vous ?",
      a: "De 1 à 2 semaines pour un site vitrine, 2 à 3 semaines pour un site business, 4 à 8 semaines pour une plateforme personnalisée.",
    },
    {
      q: "Puis-je vous contacter sur WhatsApp ?",
      a: "Oui, nous répondons rapidement sur WhatsApp au +221 77 626 00 20 pour planifier un appel et clarifier vos besoins.",
    },
  ];

  return (
    <>
      <SEO
        path="/services"
        title="Services Web à Dakar — Sites, Automatisations, MVP"
        description="Sites web SEO, automatisations et MVP rapides pour cliniques, PME et startups au Sénégal. Prix transparents, résultats mesurables."
        jsonLd={[servicesJsonLd, {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(f => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }, breadcrumbJsonLd]}
      />

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Des Services Qui Donnent Des Résultats
            </h1>
            <p className="text-xl text-foreground/80">
              Des sites web éblouissants aux automatisations puissantes — tout
              ce dont vous avez besoin pour développer votre entreprise au
              Sénégal
            </p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-card rounded-3xl shadow-2xl overflow-hidden"
                id={service.id}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 md:p-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6">
                      <service.icon
                        className="text-primary-foreground"
                        size={32}
                      />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                      {service.tagline}
                    </p>

                    <div className="mb-4 text-sm text-muted-foreground">À partir de {service.priceFrom}</div>
                    <h3 className="font-bold text-lg mb-4 text-foreground">
                      Fonctionnalités Clés :
                    </h3>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2
                            className="text-blue-500 flex-shrink-0 mt-1"
                            size={20}
                          />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-4">
                      <Button asChild>
                      <Link to="/contact">
                        Démarrer <ArrowRight className="ml-2" size={18} />
                      </Link>
                      </Button>
                      <Link to="/work" className="text-sm text-blue-600 hover:underline">
                        Voir nos études de cas
                      </Link>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="font-bold text-2xl mb-6 text-primary">
                      Résultats Attendus :
                    </h3>
                    <div className="space-y-4">
                      {service.outcomes.map((outcome, i) => (
                        <div
                          key={i}
                          className="bg-card rounded-xl p-4 shadow-md"
                        >
                          <p className="font-semibold text-blue-600">
                            {outcome}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-primary">FAQ</h2>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2">{f.q}</h3>
                <p className="text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
              Discutons du service qui correspond le mieux à vos besoins
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8"
            >
              <Link to="/contact">Réserver une consultation gratuite</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-primary">Articles récents</h2>
          <ul className="grid md:grid-cols-3 gap-4 text-blue-600 text-sm">
            <li><Link to="/article/booking-system-clinics-dakar" className="hover:underline">Système de réservation clinique à Dakar — Guide</Link></li>
            <li><Link to="/article/seo-basics-senegalese-businesses" className="hover:underline">SEO local au Sénégal — Guide</Link></li>
            <li><Link to="/article/idea-to-mvp-2-weeks" className="hover:underline">De l’idée au MVP en 2 semaines</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Services;
