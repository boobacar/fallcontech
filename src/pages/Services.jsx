import React from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Zap, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import RiveIcon from "@/components/media/RiveIcon";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n";

const Services = () => {
  const { t, locale } = useI18n();
  const services = (locale === 'en') ? [
    {
      icon: Globe,
      title: 'Website Design & SEO',
      tagline: 'More leads, faster load times, better local rankings',
      priceFrom: '350,000 XOF',
      id: 'site-web-seo',
      features: [
        'Mobile‑first responsive UI',
        'On‑page SEO (sitemap, meta tags, GSC)',
        'Google Analytics integration',
        'Fast loading (Core Web Vitals)',
        'Lead capture forms',
        'Blog/content management',
      ],
      outcomes: ['Increased organic traffic', 'Better user engagement', 'Higher conversion rates'],
    },
    {
      icon: Zap,
      title: 'Internal Platforms & Automations',
      tagline: 'Save time, reduce errors, scale your operations',
      priceFrom: '2.5M XOF',
      id: 'automatisations-plateformes',
      features: [
        'Document portals with access control',
        'Activity logs & audit trails',
        'WhatsApp/SMS workflows',
        'Bulk messaging from CSV',
        'Custom dashboards',
        'Recycle bin/restore',
      ],
      outcomes: ['Reduced manual work', 'Improved security', 'Better team collaboration'],
    },
    {
      icon: Rocket,
      title: 'MVP Development (Startups)',
      tagline: 'Rapid prototyping, real‑time features, cloud‑ready',
      priceFrom: '1,000,000 XOF',
      id: 'developpement-mvp',
      features: [
        'React + Firebase architecture',
        'Real‑time database',
        'User authentication',
        'Cloud deployment (Vercel/Firebase)',
        'Scalable infrastructure',
        'Fast iteration cycles',
      ],
      outcomes: ['Fast market validation', 'Investor‑ready product', 'Scalable foundation'],
    },
    {
      icon: Zap,
      title: 'IoT & Embedded Systems (Arduino/ESP32)',
      tagline: 'Payment integrations, sensors, dashboards & OTA updates',
      priceFrom: 'Custom',
      id: 'iot-embedded',
      features: [
        'Wave/Orange/Free payment integrations',
        'Telemetry: sensors, alerts, logs',
        'Secure MQTT/HTTPS communication',
        'OTA updates and device management',
        'Admin tools and audit logs',
        'Offline/restore resilient flows',
      ],
      outcomes: ['Reliable vending/kiosk operations', 'Reduced downtime', 'Actionable real‑time insights'],
    },
  ] : [
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
    {
      icon: Zap,
      title: "Systèmes Embarqués & IoT (Arduino/ESP32)",
      tagline:
        "Intégrations paiement, capteurs, télémétrie & mises à jour OTA",
      priceFrom: "Sur devis",
      id: "iot-embedded",
      features: [
        "Intégrations Wave/Orange/Free Money",
        "Télémétrie: capteurs, alertes, journaux",
        "Communication sécurisée MQTT/HTTPS",
        "Mises à jour OTA et gestion d'appareils",
        "Outils d'administration et audit",
        "Résilience: offline & reprise",
      ],
      outcomes: [
        "Exploitation fiable de vos kiosques/machines",
        "Moins d'arrêts imprévus",
        "Indicateurs temps réel actionnables",
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
    ...(locale === 'en'
      ? [
          {
            q: 'How much does a professional website cost?',
            a: 'Our websites start at 350,000 XOF and vary depending on features (booking, blog, integrations, etc.).',
          },
          {
            q: 'How fast do you deliver?',
            a: '1–2 weeks for a one‑page site, 2–3 weeks for a business site, 4–8 weeks for a custom platform.',
          },
          {
            q: 'Can I contact you on WhatsApp?',
            a: 'Yes, we respond quickly on WhatsApp at +221 77 626 00 20 to schedule a call and clarify your needs.',
          },
        ]
      : [
          {
            q: 'Combien coûte un site web professionnel ?',
            a: "Nos sites démarrent à 350 000 F CFA et varient selon les fonctionnalités (réservation, blog, intégrations, etc.).",
          },
          {
            q: 'En combien de temps livrez-vous ?',
            a: "De 1 à 2 semaines pour un site vitrine, 2 à 3 semaines pour un site business, 4 à 8 semaines pour une plateforme personnalisée.",
          },
          {
            q: 'Puis-je vous contacter sur WhatsApp ?',
            a: 'Oui, nous répondons rapidement sur WhatsApp au +221 77 626 00 20 pour planifier un appel et clarifier vos besoins.',
          },
        ]),
  ];

  return (
    <>
      <SEO
        path="/services"
        title={t('services.seo.title')}
        description={t('services.seo.description')}
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
            <div className="mb-4"><RiveIcon /></div>
            <h1 className="vt-title text-5xl md:text-6xl font-bold mb-6 gradient-text">{t('services.pageTitle')}</h1>
            <p className="text-xl text-foreground/80">{t('services.lead')}</p>
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

                    <div className="mb-4 text-sm text-muted-foreground">{t('services.card.startingAt')} {service.priceFrom}</div>
                    <h3 className="font-bold text-lg mb-4 text-foreground">{t('services.card.keyFeatures')}</h3>
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
                          {t('services.card.startNow')} <ArrowRight className="ml-2" size={18} />
                        </Link>
                      </Button>
                      <Link to="/work" className="text-sm text-blue-600 hover:underline">
                        {t('services.card.seeCaseStudies')}
                      </Link>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="font-bold text-2xl mb-6 text-primary">{t('services.card.expectedOutcomes')}</h3>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('services.cta.title')}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">{t('services.cta.subtitle')}</p>
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8"
            >
              <Link to="/contact">{t('services.cta.button')}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-primary">{t('services.recentArticles')}</h2>
          <ul className="grid md:grid-cols-3 gap-4 text-blue-600 text-sm">
            <li><Link to="/article/integrer-paiement-machine-eau-esp32-senegal" className="hover:underline">Intégrer un paiement mobile sur une machine (ESP32)</Link></li>
            <li><Link to="/article/passerelles-paiement-iot-wave-orange-free" className="hover:underline">Passerelles de paiement pour IoT (Wave/OM/Free)</Link></li>
            <li><Link to="/article/developpement-iot-embarque-senegal-arduino-esp32" className="hover:underline">Développement IoT & embarqué (Arduino/ESP32)</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Services;
