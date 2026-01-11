import React from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgHardware from "@/assets/articles/pc_laptop_store_dakar.png";
import { useI18n } from "@/i18n";
import { motion } from "framer-motion";

const ArticleOriginalHardware = () => {
  const { t, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <>
      <SEO
        path="/article/acheter-pc-portable-original-dakar"
        title={t("articles.hardware_sourcing.seo.title")}
        description={t("articles.hardware_sourcing.seo.description")}
        image={imgHardware}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: t("articles.hardware_sourcing.seo.headline"),
          image: (import.meta.env.VITE_SITE_URL || "") + imgHardware,
          datePublished: "2025-11-20",
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
              {t("articles.hardware_sourcing.title")}
            </h1>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <img
            src={imgHardware}
            alt="Magasin informatique Dakar PC originaux"
            className="w-full rounded-2xl shadow-xl mb-12"
          />

          <div className="prose prose-lg max-w-none">
            {isEn ? (
              <>
                <p>
                  Finding an original laptop (not refurbished or fake) in Dakar
                  is a challenge. Here are our tips.
                </p>
                <h2>"Venus" vs "Carton"</h2>
                <p>Understanding the local terminology for used imports.</p>
                <h2>Warranty is Key</h2>
                <p>If they don't give at least 6 months warranty, walk away.</p>
              </>
            ) : (
              <>
                <p>
                  Le marché informatique à Dakar est inondé de matériel
                  reconditionné ("Venants"), de contrefaçons et de PC
                  "re-cartonnés". Acheter un ordinateur professionnel original
                  est un parcours du combattant.
                </p>
                <h2>Attention aux "Venants" maquillés</h2>
                <p>
                  Beaucoup de boutiques vendent des PC d'occasion comme neufs en
                  les remettant dans des cartons scellés. Astuce : Vérifiez le
                  numéro de série sur le site du fabricant (Dell/HP/Lenovo) pour
                  voir la date de fin de garantie d'origine.
                </p>
                <h2>Claviers AZERTY "Stickers"</h2>
                <p>
                  Un vrai clavier AZERTY d'usine est rare. Méfiez-vous des
                  claviers QWERTY avec des autocollants qui se décollent après 2
                  mois.
                </p>
                <h2>Où acheter ?</h2>
                <p>
                  Privilégiez les revendeurs agréés ou faites vous accompagner
                  par un expert informatique qui pourra tester le matériel
                  (batterie, disque, écran) avant l'achat.
                </p>
              </>
            )}

            <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {isEn
                  ? "Need hardware advice?"
                  : "Besoin de conseils d'achat ?"}
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

export default ArticleOriginalHardware;
