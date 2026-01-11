import React from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgITRole from "@/assets/articles/it_professional_server_room.png";
import { useI18n } from "@/i18n";
import { motion } from "framer-motion";

const ArticleITRole = () => {
  const { t, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <>
      <SEO
        path="/article/role-informaticien-pme-dakar"
        title={t("articles.it_role.seo.title")}
        description={t("articles.it_role.seo.description")}
        image={imgITRole}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: t("articles.it_role.seo.headline"),
          image: (import.meta.env.VITE_SITE_URL || "") + imgITRole,
          datePublished: "2025-12-10",
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
              {t("articles.it_role.title")}
            </h1>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <img
            src={imgITRole}
            alt="Informaticien Dakar Serveur"
            className="w-full rounded-2xl shadow-xl mb-12"
          />

          <div className="prose prose-lg max-w-none">
            {isEn ? (
              <>
                <p>
                  An IT professional does more than just fix printers. They are
                  the guardians of your digital productivity.
                </p>
                <h2>Strategic Planning</h2>
                <p>Helping you choose the right software to save money.</p>
                <h2>Security First</h2>
                <p>
                  Protecting your client data from local and international
                  threats.
                </p>
              </>
            ) : (
              <>
                <p>
                  On appelle souvent l'informaticien quand "ça ne marche pas".
                  Mais son vrai rôle est de faire en sorte que "ça ne tombe
                  jamais en panne".
                </p>
                <h2>Au-delà du dépannage</h2>
                <p>
                  Un bon responsable informatique pour une PME à Dakar doit :
                </p>
                <ul>
                  <li>Sécuriser le réseau Wi-Fi contre les intrusions.</li>
                  <li>
                    Mettre en place des sauvegardes automatiques (Cloud +
                    Local).
                  </li>
                  <li>
                    Former les employés aux bonnes pratiques (ne pas ouvrir les
                    pièces jointes douteuses).
                  </li>
                </ul>
                <h2>Externalisé ou Interne ?</h2>
                <p>
                  Pour une entreprise de moins de 50 personnes, un contrat
                  d'infogérance externe est souvent plus rentable qu'un salaire
                  à temps plein.
                </p>
              </>
            )}

            <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {isEn
                  ? "Need an IT audit?"
                  : "Besoin d'un audit informatique ?"}
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

export default ArticleITRole;
