import React from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgHelpdesk from "@/assets/articles/it_support_helpdesk_dakar.png";
import { useI18n } from "@/i18n";
import { motion } from "framer-motion";

const ArticleITSupport = () => {
  const { t, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <>
      <SEO
        path="/article/support-informatique-dedie-dakar-importance"
        title={t("articles.it_support.seo.title")}
        description={t("articles.it_support.seo.description")}
        image={imgHelpdesk}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: t("articles.it_support.seo.headline"),
          image: (import.meta.env.VITE_SITE_URL || "") + imgHelpdesk,
          datePublished: "2025-12-20",
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
              {t("articles.it_support.title")}
            </h1>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <img
            src={imgHelpdesk}
            alt="Support Informatique Helpdesk Dakar"
            className="w-full rounded-2xl shadow-xl mb-12"
          />

          <div className="prose prose-lg max-w-none">
            {isEn ? (
              <>
                <p>
                  Downtime costs money. Why waiting for technology to break
                  before calling an expert is a bad strategy.
                </p>
                <h2>Reactive vs Proactive</h2>
                <p>Fixing problems is good. Preventing them is better.</p>
                <h2>Employee Productivity</h2>
                <p>
                  A dedicated support line means your team gets back to work
                  faster.
                </p>
              </>
            ) : (
              <>
                <p>
                  Combien de temps perdez-vous chaque semaine à cause d'une
                  imprimante qui ne marche pas ou d'un fichier Excel corrompu ?
                </p>
                <h2>Le coût caché de la "bidouille"</h2>
                <p>
                  Demander au "cousin qui s'y connait" ou laisser le comptable
                  gérer les problèmes informatiques est une perte de temps et
                  d'argent énorme pour l'entreprise.
                </p>
                <h2>L'avantage d'un support dédié</h2>
                <p>
                  Un service Helpdesk permet à vos employés d'ouvrir un ticket
                  et d'avoir une prise en main à distance en moins de 15
                  minutes. Résultat : Ils se remettent au travail immédiatement.
                </p>
              </>
            )}

            <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {isEn ? "Get dedicated support" : "Obtenir un support dédié"}
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

export default ArticleITSupport;
