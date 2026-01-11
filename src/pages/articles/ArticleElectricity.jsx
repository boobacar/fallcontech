import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgElectricity from "@/assets/articles/electricity_stabilizer_dakar.png";
import { useI18n } from "@/i18n";
import { motion } from "framer-motion";

const ArticleElectricity = () => {
  const { t, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <>
      <SEO
        path="/article/protection-electrique-pc-dakar-onduleur"
        title={t("articles.electricity.seo.title")}
        description={t("articles.electricity.seo.description")}
        image={imgElectricity}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: t("articles.electricity.seo.headline"),
          image: (import.meta.env.VITE_SITE_URL || "") + imgElectricity,
          datePublished: "2025-11-05",
          author: { "@type": "Person", name: "Boubacar FALL" },
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
              {t("articles.electricity.title")}
            </h1>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <img
            src={imgElectricity}
            alt="Onduleur et protection électrique Dakar"
            className="w-full rounded-2xl shadow-xl mb-12"
          />

          <div className="prose prose-lg max-w-none">
            {isEn ? (
              <>
                <p>
                  In Dakar, power cuts and voltage fluctuations are the silent
                  killers of electronic equipment. Learn how to protect your
                  investment.
                </p>
                <h2>Why Senelec isn't enough</h2>
                <p>
                  Voltage surges can fry a motherboard in a fraction of a
                  second. An "Onduleur" (UPS) is mandatory for any serious
                  business.
                </p>
                <h2>Choosing the right Regulator</h2>
                <p>
                  Don't confuse a stabilizer with a UPS. You need both or a
                  hybrid solution to handle the Dakar grid.
                </p>
              </>
            ) : (
              <>
                <p>
                  À Dakar, les coupures de courant (Senelec) et les variations
                  de tension sont les tueurs silencieux de matériel
                  électronique. Une simple surtension peut griller une carte
                  mère à 500 000 FCFA.
                </p>
                <h2>Pourquoi votre multiprise ne suffit pas</h2>
                <p>
                  Les multiprises "parafoudre" vendues sur le marché sont
                  souvent inefficaces contre les fluctuations majeures du réseau
                  sénégalais. Il faut une protection active.
                </p>
                <h2>Onduleur (UPS) vs Régulateur</h2>
                <ul>
                  <li>
                    <strong>Régulateur :</strong> Stabilise la tension (Vital
                    pour les frigos et gros équipements).
                  </li>
                  <li>
                    <strong>Onduleur (UPS) :</strong> Garde le PC allumé pendant
                    15min après une coupure. Indispensable pour ne pas perdre
                    son travail.
                  </li>
                </ul>
                <h2>Notre recommandation pour Dakar</h2>
                <p>
                  Pour un poste de travail standard : Un onduleur
                  Line-Interactive de 650VA minimum. Pour des serveurs : On-Line
                  Double Conversion.
                </p>
              </>
            )}

            <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {isEn
                  ? "Audit your electrical setup?"
                  : "Audit de votre installation ?"}
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

export default ArticleElectricity;
