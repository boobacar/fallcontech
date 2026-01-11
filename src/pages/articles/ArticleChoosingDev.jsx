import React from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgDev from "@/assets/articles/web_developer_dakar_meeting.png";
import { useI18n } from "@/i18n";
import { motion } from "framer-motion";

const ArticleChoosingDev = () => {
  const { t, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <>
      <SEO
        path="/article/comment-choisir-developpeur-web-dakar-senegal"
        title={t("articles.choosing_dev.seo.title")}
        description={t("articles.choosing_dev.seo.description")}
        image={imgDev}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: t("articles.choosing_dev.seo.headline"),
          image: (import.meta.env.VITE_SITE_URL || "") + imgDev,
          datePublished: "2025-12-01",
        }}
      />

      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link
            to="/resources"
            className="inline-flex items-center text-primary mb-8 hover:underline"
          >
            <ArrowLeft className="mr-2" size={20} />
            {t("articles.common.backToResources")}
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t("articles.choosing_dev.title")}
            </h1>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <img
            src={imgDev}
            alt="Réunion développeur web client Dakar"
            className="w-full rounded-2xl shadow-xl mb-12"
          />

          <div className="prose prose-lg max-w-none">
            {isEn ? (
              <>
                <p>
                  Finding the right web developer in Dakar can be tricky. Here
                  is what to look for beyond the price tag.
                </p>
                <h2>Portfolio vs Promises</h2>
                <p>
                  Always ask to see live websites they have built, not just
                  screenshots.
                </p>
                <h2>Communication</h2>
                <p>
                  A good developer explains technical terms in simple language.
                </p>
              </>
            ) : (
              <>
                <p>
                  Le marché du développement web à Dakar est vaste : du
                  freelance débutant aux grandes agences digitales. Comment ne
                  pas se tromper ?
                </p>
                <h2>1. Regardez le Portfolio, pas les diplômes</h2>
                <p>
                  Un bon développeur doit pouvoir vous montrer des sites actifs
                  qu'il a réalisés. Testez-les sur votre mobile. Sont-ils
                  rapides ?
                </p>
                <h2>2. La stack technique</h2>
                <p>
                  Évitez les technologies obsolètes. En 2025, privilégiez React,
                  Next.js ou WordPress bien sécurisé. Fuyez les sites en Flash
                  ou vieux PHP non maintenus.
                </p>
                <h2>3. Le support après-vente</h2>
                <p>
                  Un site web n'est jamais "fini". Qui fera les mises à jour de
                  sécurité ? Assurez-vous d'avoir un contrat de maintenance
                  clair.
                </p>
              </>
            )}

            <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {isEn
                  ? "Discuss your project?"
                  : "Discuter de votre projet web ?"}
              </h3>
              <Button asChild size="lg">
                <Link to="/contact">{t("common.cta.planCall")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleChoosingDev;
