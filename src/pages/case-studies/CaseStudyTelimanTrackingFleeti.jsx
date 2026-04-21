import React from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardImg from "@/assets/teliman-tracking-fleeti-dashboard.png";
import dashboardFullImg from "@/assets/teliman-tracking-fleeti-dashboard-full.png";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useI18n } from "@/i18n";

const CaseStudyTelimanTrackingFleeti = () => {
  const { t } = useI18n();
  const siteUrl = "https://teliman-tracking-fleeti.vercel.app";

  return (
    <>
      <SEO
        path="/case-study/teliman-tracking-fleeti"
        title={t("case.fleeti.seo.title")}
        description={t("case.fleeti.seo.description")}
        image={dashboardImg}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: t("case.fleeti.seo.title"),
          image:
            (import.meta.env.VITE_SITE_URL ||
              (typeof window !== "undefined" ? window.location.origin : "")) +
            dashboardImg,
          datePublished: "2026-04-21",
          dateModified: "2026-04-21",
          author: { "@type": "Person", name: "Boubacar FALL" },
          publisher: { "@type": "Organization", name: "Fallcon Tech" },
          mainEntityOfPage:
            (import.meta.env.VITE_SITE_URL ||
              (typeof window !== "undefined" ? window.location.origin : "")) +
            "/case-study/teliman-tracking-fleeti",
          description: t("case.fleeti.seo.headlineDescription"),
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
              {t("case.common.backToWork")}
            </Link>
            <Breadcrumbs
              items={[
                { label: t("common.breadcrumb.home"), to: "/" },
                { label: t("work.pageTitle"), to: "/work" },
                { label: t("case.fleeti.title") },
              ]}
            />

            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              {t("case.fleeti.title")}
            </h1>
            <p className="text-2xl text-foreground/80 mb-8">
              {t("case.fleeti.subtitle")}
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold gradient-text mb-2">8</div>
                <p className="text-muted-foreground">
                  {t("case.fleeti.metrics.trackers")}
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold gradient-text mb-2">71</div>
                <p className="text-muted-foreground">
                  {t("case.fleeti.metrics.alerts")}
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold gradient-text mb-2">Live</div>
                <p className="text-muted-foreground">
                  {t("case.fleeti.metrics.visibility")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-primary/5 rounded-3xl p-2 mb-8">
              <img
                alt={t("case.fleeti.alt.hero")}
                className="w-full rounded-2xl shadow-2xl"
                src={dashboardImg}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="bg-primary/5 rounded-3xl p-2 mb-12">
              <img
                alt={t("case.fleeti.alt.full")}
                className="w-full rounded-2xl shadow-2xl"
                src={dashboardFullImg}
                loading="lazy"
                decoding="async"
              />
            </div>

            <h2 className="text-4xl font-bold mb-6 text-primary">
              {t("case.common.challenge")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("case.fleeti.challenge")}
            </p>

            <h2 className="text-4xl font-bold mb-6 text-primary">
              {t("case.common.solution")}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t("case.fleeti.solutionIntro")}
            </p>

            <ul className="space-y-4 mb-12">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-blue-500 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <span className="text-lg text-foreground">
                    {t(`case.fleeti.features.${i}`)}
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="text-4xl font-bold mb-6 text-primary">
              {t("case.common.results")}
            </h2>
            <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-lg mb-8">
              <div className="flex items-start gap-4">
                <TrendingUp
                  className="text-green-600 flex-shrink-0 mt-1"
                  size={32}
                />
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">
                    {t("case.common.keyResults")}
                  </h3>
                  <ul className="space-y-3">
                    {[0, 1, 2, 3].map((i) => (
                      <li key={i} className="text-green-900">
                        {t(`case.fleeti.results.${i}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-bold mb-6 text-primary">
              {t("case.common.stack")}
            </h2>
            <div className="flex flex-wrap gap-3 mb-12">
              {[
                "React",
                "Vite",
                "Express",
                "Fleeti API",
                "Leaflet",
                "Analytics Dashboard",
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
              <h2 className="text-3xl font-bold mb-4">
                {t("case.fleeti.cta.title")}
              </h2>
              <p className="text-xl mb-6 text-muted-foreground">
                {t("case.fleeti.cta.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <Link to="/contact">{t("case.fleeti.cta.primary")}</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href={siteUrl} target="_blank" rel="noopener noreferrer">
                    {t("case.common.viewSite")}
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyTelimanTrackingFleeti;
