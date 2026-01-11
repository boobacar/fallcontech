import React from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgScam from "@/assets/articles/mobile_money_scam_alert.png";
import { useI18n } from "@/i18n";
import { motion } from "framer-motion";

const ArticleScams = () => {
  const { t, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <>
      <SEO
        path="/article/arnaques-wave-orange-money-senegal"
        title={t("articles.scams.seo.title")}
        description={t("articles.scams.seo.description")}
        image={imgScam}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: t("articles.scams.seo.headline"),
          image: (import.meta.env.VITE_SITE_URL || "") + imgScam,
          datePublished: "2025-11-15",
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
              {t("articles.scams.title")}
            </h1>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <img
            src={imgScam}
            alt="Arnaque Wave Orange Money Sécurité"
            className="w-full rounded-2xl shadow-xl mb-12"
          />

          <div className="prose prose-lg max-w-none">
            {isEn ? (
              <>
                <p>
                  Wave and Orange Money scams are becoming sophisticated.
                  Protect your digital wallet.
                </p>
                <h2>The "Wrong Number" Scam</h2>
                <p>Never return money sent "by mistake" until verified.</p>
                <h2>Phishing Calls</h2>
                <p>Wave will NEVER ask for your code by phone.</p>
              </>
            ) : (
              <>
                <p>
                  Avec l'adoption massive de Wave et Orange Money au Sénégal,
                  les brouteurs ont affiné leurs techniques. Voici comment
                  repérer les nouvelles arnaques en 2025.
                </p>
                <h2>1. L'Erreur de Transfert</h2>
                <p>
                  Vous recevez un SMS disant "Vous avez reçu xxxx FCFA", suivi
                  d'un appel en panique vous demandant de renvoyer l'argent.{" "}
                  <strong>
                    Vérifiez toujours votre solde dans l'application officielle
                  </strong>
                  , pas seulement le SMS (qui peut être faux).
                </p>
                <h2>2. Le Faux Service Client</h2>
                <p>
                  "Bonjour c'est le service Wave, on a détecté une anomalie,
                  donnez votre code pour bloquer." <strong>JAMAIS</strong>.
                  Aucun agent ne vous demandera votre code secret.
                </p>
                <h2>3. Le QR Code Piégé</h2>
                <p>
                  Dans certains commerces, des malins collent leur propre QR
                  code par-dessus celui du commerçant. Vérifiez toujours le nom
                  du destinataire avant de valider.
                </p>
              </>
            )}

            <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {isEn ? "Security Training?" : "Formation cybersécurité ?"}
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

export default ArticleScams;
