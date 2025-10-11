import React from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Site Starter",
      price: "350 000",
      currency: "F CFA",
      description: "Parfait pour les petites entreprises et les professionnels",
      features: [
        "Site web one-page responsive",
        "Bases du SEO (méta-tags, sitemap)",
        "Bouton CTA WhatsApp",
        "Design optimisé pour mobile",
        "Formulaire de contact",
        "1 session de révisions",
        "Livraison en 1-2 semaines",
      ],
      cta: "Démarrer",
      popular: false,
    },
    {
      name: "Site Business",
      price: "1 000 000",
      currency: "F CFA",
      description: "Idéal pour les entreprises en croissance",
      features: [
        "Site web de 5-7 pages",
        "Configuration SEO avancée",
        "Système de réservation en ligne",
        "Section blog/actualités",
        "Google Analytics",
        "Formulaires de capture de leads",
        "2 sessions de révisions",
        "Livraison en 2-3 semaines",
        "1 mois de maintenance gratuite",
      ],
      cta: "Le plus populaire",
      popular: true,
    },
    {
      name: "Forfait Croissance",
      price: "2.5M+",
      currency: "F CFA",
      description: "Solutions personnalisées pour les projets ambitieux",
      features: [
        "Portail/plateforme sur mesure",
        "Intégrations d'automatisations",
        "Workflows WhatsApp/SMS",
        "Gestion de documents",
        "Authentification des utilisateurs",
        "Journaux d'activité et analyses",
        "3 sessions de révisions",
        "Livraison en 4-8 semaines",
        "3 mois de maintenance inclus",
      ],
      cta: "Nous contacter",
      popular: false,
    },
  ];

  const maintenancePlans = [
    {
      name: "Basique",
      price: "35 000",
      features: [
        "Mises à jour mensuelles",
        "Patchs de sécurité",
        "Gestion des sauvegardes",
        "Support par e-mail",
      ],
    },
    {
      name: "Pro",
      price: "75 000",
      features: [
        "Toutes les fonctionnalités Basique",
        "Suivi des performances",
        "Mises à jour de contenu (2/mois)",
        "Support prioritaire",
        "Rapports mensuels",
      ],
    },
    {
      name: "Entreprise",
      price: "Sur mesure",
      features: [
        "Toutes les fonctionnalités Pro",
        "Mises à jour illimitées",
        "Support 24/7",
        "Intégrations personnalisées",
        "Gestionnaire de compte dédié",
      ],
    },
  ];

  return (
    <>
      <SEO
        path="/pricing"
        title="Tarifs développement web au Sénégal — Packs clairs"
        description="Sites dès 350 000 F CFA, Business dès 1 000 000 F CFA, solutions sur mesure dès 2.5M. Tarifs transparents et délais rapides."
      />

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Tarification Transparente
            </h1>
            <p className="text-xl text-foreground/80">
              Des forfaits clairs, sans frais cachés. Choisissez ce qui
              correspond à vos besoins et à votre budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20 items-center">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`relative bg-card rounded-3xl shadow-xl overflow-hidden ${
                  plan.popular
                    ? "ring-4 ring-blue-500 transform md:scale-105"
                    : "md:scale-95"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full bg-blue-500 text-white text-center py-2 text-sm font-bold">
                    LE PLUS POPULAIRE
                  </div>
                )}

                <div className={`p-8 ${plan.popular ? "pt-14" : ""}`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6 h-10">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-5xl font-bold gradient-text">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      {plan.currency}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          className="text-blue-500 flex-shrink-0 mt-1"
                          size={20}
                        />
                        <span className="text-foreground text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${
                      plan.popular
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "bg-primary hover:bg-primary/90"
                    }`}
                  >
                    <Link to="/contact">
                      {plan.cta} <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Plans de Maintenance
            </h2>
            <p className="text-center text-foreground/80 mb-8 max-w-2xl mx-auto">
              Assurez le bon fonctionnement de votre site web avec nos plans de
              maintenance mensuels.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {maintenancePlans.map((plan, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold gradient-text">
                      {plan.price}
                    </span>
                    {plan.price !== "Sur mesure" && (
                      <span className="text-muted-foreground ml-2">
                        F CFA/mois
                      </span>
                    )}
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <Check
                          className="text-blue-500 flex-shrink-0 mt-0.5"
                          size={16}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
