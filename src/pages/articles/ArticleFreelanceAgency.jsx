import React from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgFreelance from "@/assets/articles/freelance_vs_agency_senegal.png";
import { useI18n } from "@/i18n";
import { motion } from "framer-motion";

const ArticleFreelanceAgency = () => {
  const { t, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <>
      <SEO
        path="/article/freelance-ou-agence-web-senegal-que-choisir"
        title={t("articles.freelance_agency.seo.title")}
        description={t("articles.freelance_agency.seo.description")}
        image={imgFreelance}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: t("articles.freelance_agency.seo.headline"),
          image: (import.meta.env.VITE_SITE_URL || "") + imgFreelance,
          datePublished: "2025-12-05",
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
              {t("articles.freelance_agency.title")}
            </h1>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <img
            src={imgFreelance}
            alt="Freelance vs Agence Web Sénégal"
            className="w-full rounded-2xl shadow-xl mb-12"
          />

          <div className="prose prose-lg max-w-none">
            {isEn ? (
              <>
                <p>
                  Should you hire a freelancer or an agency for your next
                  digital project in Senegal? Let's break down the pros and
                  cons.
                </p>
                <h2>Freelancer: Flexibility & Cost</h2>
                <p>
                  Perfect for specific tasks and smaller budgets. Direct
                  communication with the creator.
                </p>
                <h2>Agency: Reliability & Scale</h2>
                <p>
                  Ideal for complex projects needing design, dev, and marketing
                  all in one place.
                </p>
              </>
            ) : (
              <>
                <p>
                  C'est la grande question pour tout entrepreneur sénégalais :
                  Dois-je confier mon projet à un "tech" indépendant ou à une
                  structure établie ?
                </p>
                <h2>Le Freelance : Agile et Abordable</h2>
                <p>
                  <ul>
                    <li>
                      <strong>Avantages :</strong> Moins cher, communication
                      directe, très réactif.
                    </li>
                    <li>
                      <strong>Risques :</strong> Si il tombe malade ou
                      disparaît, votre projet s'arrête.
                    </li>
                  </ul>
                </p>
                <h2>L'Agence : Robuste et Pluridisciplinaire</h2>
                <p>
                  <ul>
                    <li>
                      <strong>Avantages :</strong> Une équipe (Design + Dev +
                      SEO), continuité de service garantie.
                    </li>
                    <li>
                      <strong>Inconvénients :</strong> Coûts structurels plus
                      élevés.
                    </li>
                  </ul>
                </p>
                <h2>Notre conseil</h2>
                <p>
                  Pour un MVP ou une mission court terme, le freelance est roi.
                  Pour une plateforme critique qui fait vivre votre business,
                  sécurisez avec une agence ou une équipe dédiée.
                </p>
              </>
            )}

            <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {isEn
                  ? "We act as your dedicated tech partner"
                  : "Nous sommes votre partenaire technique"}
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

export default ArticleFreelanceAgency;
