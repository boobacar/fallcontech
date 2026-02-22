import React from "react";
import SEO from "@/components/SEO";
import { useI18n } from "@/i18n";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const { t } = useI18n();
  const plans = [
    {
      name: t('pricing.plans.starter.name'),
      price: t('pricing.plans.starter.price'),
      currency: t('pricing.currency'),
      description: t('pricing.plans.starter.description'),
      features: [
        t('pricing.plans.starter.features.0'),
        t('pricing.plans.starter.features.1'),
        t('pricing.plans.starter.features.2'),
        t('pricing.plans.starter.features.3'),
        t('pricing.plans.starter.features.4'),
        t('pricing.plans.starter.features.5'),
        t('pricing.plans.starter.features.6'),
      ],
      cta: t('pricing.plans.starter.cta'),
      popular: false,
    },
    {
      name: t('pricing.plans.business.name'),
      price: t('pricing.plans.business.price'),
      currency: t('pricing.currency'),
      description: t('pricing.plans.business.description'),
      features: [
        t('pricing.plans.business.features.0'),
        t('pricing.plans.business.features.1'),
        t('pricing.plans.business.features.2'),
        t('pricing.plans.business.features.3'),
        t('pricing.plans.business.features.4'),
        t('pricing.plans.business.features.5'),
        t('pricing.plans.business.features.6'),
        t('pricing.plans.business.features.7'),
        t('pricing.plans.business.features.8'),
      ],
      cta: t('pricing.plans.business.cta'),
      popular: true,
    },
    {
      name: t('pricing.plans.growth.name'),
      price: t('pricing.plans.growth.price'),
      currency: t('pricing.currency'),
      description: t('pricing.plans.growth.description'),
      features: [
        t('pricing.plans.growth.features.0'),
        t('pricing.plans.growth.features.1'),
        t('pricing.plans.growth.features.2'),
        t('pricing.plans.growth.features.3'),
        t('pricing.plans.growth.features.4'),
        t('pricing.plans.growth.features.5'),
        t('pricing.plans.growth.features.6'),
        t('pricing.plans.growth.features.7'),
        t('pricing.plans.growth.features.8'),
      ],
      cta: t('pricing.plans.growth.cta'),
      popular: false,
    },
  ];

  const maintenancePlans = [
    {
      name: t('pricing.maintenancePlans.basic.name'),
      price: t('pricing.maintenancePlans.basic.priceLabel'),
      features: [
        t('pricing.maintenancePlans.basic.features.0'),
        t('pricing.maintenancePlans.basic.features.1'),
        t('pricing.maintenancePlans.basic.features.2'),
        t('pricing.maintenancePlans.basic.features.3'),
      ],
    },
    {
      name: t('pricing.maintenancePlans.pro.name'),
      price: t('pricing.maintenancePlans.pro.priceLabel'),
      features: [
        t('pricing.maintenancePlans.pro.features.0'),
        t('pricing.maintenancePlans.pro.features.1'),
        t('pricing.maintenancePlans.pro.features.2'),
        t('pricing.maintenancePlans.pro.features.3'),
        t('pricing.maintenancePlans.pro.features.4'),
      ],
    },
    {
      name: t('pricing.maintenancePlans.enterprise.name'),
      price: t('pricing.maintenancePlans.enterprise.priceLabel'),
      features: [
        t('pricing.maintenancePlans.enterprise.features.0'),
        t('pricing.maintenancePlans.enterprise.features.1'),
        t('pricing.maintenancePlans.enterprise.features.2'),
        t('pricing.maintenancePlans.enterprise.features.3'),
        t('pricing.maintenancePlans.enterprise.features.4'),
      ],
    },
  ];

  return (
    <>
      <SEO
        path="/pricing"
        title="Tarifs création site web, SEO & maintenance à Dakar | Fallcon Tech"
        description="Consultez nos tarifs pour site vitrine, SEO, maintenance web et solutions digitales sur mesure au Sénégal. Devis rapide et transparent."
      />

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="vt-title text-5xl md:text-6xl font-bold mb-6 gradient-text">{t('pricing.pageTitle')}</h1>
            <p className="text-xl text-foreground/80">{t('pricing.lead')}</p>
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
                    {t('pricing.mostPopular')}
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
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">{t('pricing.maintenance.title')}</h2>
            <p className="text-center text-foreground/80 mb-8 max-w-2xl mx-auto">{t('pricing.maintenance.subtitle')}</p>

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
                        {t('pricing.maintenance.perMonth')}
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
