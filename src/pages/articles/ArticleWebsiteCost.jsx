import React from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgCost from "@/assets/articles/website_cost_estimate_senegal.png";
import { useI18n } from "@/i18n";
import { motion } from "framer-motion";

const ArticleWebsiteCost = () => {
  const { t, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <>
      <SEO
        path="/article/cout-creation-site-web-senegal-prix"
        title={t("articles.website_cost.seo.title")}
        description={t("articles.website_cost.seo.description")}
        image={imgCost}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: t("articles.website_cost.seo.headline"),
          image: (import.meta.env.VITE_SITE_URL || "") + imgCost,
          datePublished: "2025-12-15",
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
              {t("articles.website_cost.title")}
            </h1>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <img
            src={imgCost}
            alt="Devis site web Sénégal Prix"
            className="w-full rounded-2xl shadow-xl mb-12"
          />

          <div className="prose prose-lg max-w-none">
            {isEn ? (
              <>
                <p>
                  How much does a website cost in Senegal in 2025? From 150,000
                  FCFA to 5,000,000 FCFA, here is what you get.
                </p>
                <h2>The Low Cost Trap</h2>
                <p>
                  A 100k site usually comes with no support and hacked
                  templates.
                </p>
                <h2>Professional Standard</h2>
                <p>
                  Expect to pay for quality, security, and mobile optimization.
                </p>
              </>
            ) : (
              <>
                <p>
                  La question "C'est combien ?" n'a pas de réponse simple. C'est
                  comme demander "Combien coûte une voiture ?". Cela dépend si
                  vous voulez une occasion ou une voiture de course.
                </p>
                <h2>Les tranches de prix (Estimations 2025)</h2>
                <ul>
                  <li>
                    <strong>Site Vitrine Simple (Freelance) :</strong> 200 000 -
                    500 000 FCFA.
                  </li>
                  <li>
                    <strong>Site Vitrine Premium (Agence) :</strong> 500 000 - 1
                    500 000 FCFA (Design sur mesure, SEO inclus).
                  </li>
                  <li>
                    <strong>E-commerce / App Web :</strong> À partir de 2 000
                    000 FCFA.
                  </li>
                </ul>
                <h2>Ce qui fait varier le prix</h2>
                <p>
                  Le design sur mesure, la rédaction du contenu, le
                  référencement (SEO) et les fonctionnalités complexes (paiement
                  en ligne, espace membre) demandent du temps d'expert.
                </p>
              </>
            )}

            <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {isEn ? "Get a free quote" : "Demander un devis gratuit"}
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

export default ArticleWebsiteCost;
