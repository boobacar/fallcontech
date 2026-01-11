import React from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgInternet from "@/assets/articles/slow_internet_wifi_dakar.png";
import { useI18n } from "@/i18n";
import { motion } from "framer-motion";

const ArticleInternet = () => {
  const { t, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <>
      <SEO
        path="/article/internet-lent-fibre-dakar-solutions"
        title={t("articles.internet.seo.title")}
        description={t("articles.internet.seo.description")}
        image={imgInternet}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: t("articles.internet.seo.headline"),
          image: (import.meta.env.VITE_SITE_URL || "") + imgInternet,
          datePublished: "2025-11-10",
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
              {t("articles.internet.title")}
            </h1>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <img
            src={imgInternet}
            alt="Problèmes internet et fibre Dakar"
            className="w-full rounded-2xl shadow-xl mb-12"
          />

          <div className="prose prose-lg max-w-none">
            {isEn ? (
              <>
                <p>
                  Fibre cut? Slow 4G? Internet reliability is a major challenge
                  for businesses in Senegal.
                </p>
                <h2>Orange vs Free vs Starlink</h2>
                <p>Comparisons of the major providers in Dakar 2025.</p>
                <h2>The Failover Solution</h2>
                <p>
                  How to combine Fiber + 4G Backup automatically to never go
                  offline.
                </p>
              </>
            ) : (
              <>
                <p>
                  "Le réseau est instable." La phrase qu'on entend tous les
                  jours. Entre les câbles coupés par les travaux du BRT et la
                  saturation de la 4G, avoir un internet stable à Dakar est un
                  sport de combat.
                </p>
                <h2>Fibre Optique : Orange ou Free ?</h2>
                <p>
                  Orange reste le leader en couverture et stabilité, mais Free
                  casse les prix. Pour une entreprise, nous recommandons
                  toujours <strong>la redondance</strong>.
                </p>
                <h2>La solution "Failover" automatique</h2>
                <p>
                  Ne branchez pas manuellement votre clé 4G quand la fibre
                  coupe. Un routeur professionnel (Mikrotik/Ubiquiti) peut
                  basculer automatiquement de la Fibre Orange vers un backup
                  Free/Expresso sans que vos appels Zoom ne coupent.
                </p>
                <h2>Et Starlink ?</h2>
                <p>
                  Disponible au Sénégal, c'est une excellente alternative pour
                  les zones reculées ou comme backup ultime.
                </p>
              </>
            )}

            <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {isEn
                  ? "Stop losing connection"
                  : "Ne perdez plus jamais la connexion"}
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

export default ArticleInternet;
