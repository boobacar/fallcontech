import React from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import whatsappImg from "@/assets/articles/whatsapp-automation.webp";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useI18n } from "@/i18n";

const CaseStudyWhatsApp = () => {
  const { t } = useI18n();
  return (
    <>
      <SEO
        path="/case-study/whatsapp"
        title={t('case.whatsapp.seo.title')}
        description={t('case.whatsapp.seo.description')}
        image={whatsappImg}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: t('case.whatsapp.seo.title'),
          image: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + whatsappImg,
          datePublished: "2025-04-10",
          dateModified: "2025-07-10",
          author: { "@type": "Person", name: "Boubacar FALL" },
          publisher: { "@type": "Organization", name: "Fallcon Tech" },
          mainEntityOfPage: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + "/case-study/whatsapp",
          description: t('case.whatsapp.seo.headlineDescription'),
        }}
      />

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/work"
              className="inline-flex items-center text-primary hover:text-blue-500 mb-8"
            >
              <ArrowLeft className="mr-2" size={20} />
              {t('case.common.backToWork')}
            </Link>
            <Breadcrumbs
              items={[
                { label: t('common.breadcrumb.home'), to: "/" },
                { label: t('work.pageTitle'), to: "/work" },
                { label: t('case.whatsapp.title') },
              ]}
            />

            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">{t('case.whatsapp.title')}</h1>
            <p className="text-2xl text-foreground/80 mb-8">{t('case.whatsapp.subtitle')}</p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold gradient-text mb-2">
                  100%
                </div>
                <p className="text-muted-foreground">{t('case.whatsapp.metrics.automatedDaily')}</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold gradient-text mb-2">0</div>
                <p className="text-muted-foreground">{t('case.whatsapp.metrics.manualWork')}</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold gradient-text mb-2">1 {t('case.common.week')}</div>
                <p className="text-muted-foreground">{t('case.common.devTime')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-primary/5 rounded-3xl p-2 mb-12">
              <img
                alt={t('case.whatsapp.alt.hero')}
                className="w-full rounded-2xl shadow-2xl"
                src={whatsappImg}
                loading="lazy"
                decoding="async"
              />
            </div>

            <h2 className="text-4xl font-bold mb-6 text-primary">{t('case.common.challenge')}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('case.whatsapp.challenge')}
            </p>

            <h2 className="text-4xl font-bold mb-6 text-primary">{t('case.common.solution')}</h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t('case.whatsapp.solutionIntro')}
            </p>

            <ul className="space-y-4 mb-12">
              {[
                t('case.whatsapp.features.0'),
                t('case.whatsapp.features.1'),
                t('case.whatsapp.features.2'),
                t('case.whatsapp.features.3'),
                t('case.whatsapp.features.4'),
                t('case.whatsapp.features.5'),
                t('case.whatsapp.features.6'),
                t('case.whatsapp.features.7'),
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-blue-500 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <span className="text-lg text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-primary/5 rounded-2xl p-2">
                <img
                  alt={t('case.whatsapp.alt.csv')}
                  className="w-full rounded-xl"
                  src="https://images.unsplash.com/photo-1529078155058-5d716f45d604"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="bg-primary/5 rounded-2xl p-2">
                <img
                  alt={t('case.whatsapp.alt.analytics')}
                  className="w-full rounded-xl"
                  src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <h2 className="text-4xl font-bold mb-6 text-primary">{t('case.common.results')}</h2>
            <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-lg mb-8">
              <div className="flex items-start gap-4">
                <Zap className="text-green-600 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">{t('case.common.keyResults')}</h3>
                  <ul className="space-y-3">
                    {[0,1,2,3].map(i => (
                      <li key={i} className="text-green-900">{t(`case.whatsapp.results.${i}`)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-bold mb-6 text-primary">{t('case.whatsapp.how.title')}</h2>
            <div className="space-y-6 mb-12">
              {[
                { step: '1', title: t('case.whatsapp.how.steps.0.title'), desc: t('case.whatsapp.how.steps.0.desc') },
                { step: '2', title: t('case.whatsapp.how.steps.1.title'), desc: t('case.whatsapp.how.steps.1.desc') },
                { step: '3', title: t('case.whatsapp.how.steps.2.title'), desc: t('case.whatsapp.how.steps.2.desc') },
                { step: '4', title: t('case.whatsapp.how.steps.3.title'), desc: t('case.whatsapp.how.steps.3.desc') },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-primary rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-4xl font-bold mb-6 text-primary">{t('case.common.stack')}</h2>
            <div className="flex flex-wrap gap-3 mb-12">
              {[
                "Node.js",
                "API WhatsApp Business",
                "Parseur CSV",
                "Tâches Cron",
                "Firebase",
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="bg-primary rounded-3xl p-8 text-primary-foreground text-center">
              <h2 className="text-3xl font-bold mb-4">{t('case.whatsapp.cta.title')}</h2>
              <p className="text-xl mb-6 text-muted-foreground">{t('case.whatsapp.cta.subtitle')}</p>
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link to="/contact">{t('case.whatsapp.cta.primary')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyWhatsApp;
