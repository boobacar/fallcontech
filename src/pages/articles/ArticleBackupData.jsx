import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgBackup from "@/assets/articles/backup.png";
import { useI18n } from "@/i18n";

const ArticleBackupData = () => {
  const { t, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <>
      <SEO
        path="/article/sauvegarde-donnees-entreprises"
        title={t("articles.backup.seo.title")}
        description={t("articles.backup.seo.description")}
        image={imgBackup}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: t("articles.backup.seo.headline"),
            image:
              (import.meta.env.VITE_SITE_URL ||
                (typeof window !== "undefined" ? window.location.origin : "")) +
              imgBackup,
            datePublished: "2025-11-10",
            dateModified: "2025-11-10",
            author: { "@type": "Person", name: "Boubacar FALL" },
            publisher: {
              "@type": "Organization",
              name: "Fallcon Tech",
              logo: {
                "@type": "ImageObject",
                url:
                  (import.meta.env.VITE_SITE_URL ||
                    (typeof window !== "undefined"
                      ? window.location.origin
                      : "")) + "/assets/logo.webp",
              },
            },
            mainEntityOfPage:
              (import.meta.env.VITE_SITE_URL ||
                (typeof window !== "undefined" ? window.location.origin : "")) +
              "/article/sauvegarde-donnees-entreprises",
            description: t("articles.backup.seo.ldDescription"),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: t("common.breadcrumb.home"),
                item:
                  (import.meta.env.VITE_SITE_URL ||
                    (typeof window !== "undefined"
                      ? window.location.origin
                      : "")) + "/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: t("common.breadcrumb.resources"),
                item:
                  (import.meta.env.VITE_SITE_URL ||
                    (typeof window !== "undefined"
                      ? window.location.origin
                      : "")) + "/resources",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: t("articles.backup.breadcrumb"),
                item:
                  (import.meta.env.VITE_SITE_URL ||
                    (typeof window !== "undefined"
                      ? window.location.origin
                      : "")) + "/article/sauvegarde-donnees-entreprises",
              },
            ],
          },
        ]}
      />

      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link
            to="/resources"
            className="inline-flex items-center text-primary hover:text-blue-500 mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            {t("articles.common.backToResources")}
          </Link>
          <Breadcrumbs
            items={[
              { label: t("common.breadcrumb.home"), to: "/" },
              { label: t("common.breadcrumb.resources"), to: "/resources" },
              { label: t("articles.backup.breadcrumb") },
            ]}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t("articles.backup.title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("articles.backup.meta")}
            </p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <img
              alt="Sauvegarde de données sécurisée dans le cloud"
              className="w-full rounded-2xl shadow-xl mb-12"
              src={imgBackup}
              loading="lazy"
              decoding="async"
            />

            {isEn ? (
              <>
                <p>
                  Imagine arriving at the office tomorrow morning and
                  discovering that all your files have disappeared: accounting,
                  client lists, contracts. Computer theft, fire, hard drive
                  failure, or virus... the causes are multiple. The only
                  protection? A solid backup strategy.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  The 3-2-1 Rule
                </h2>
                <p>It's the golden rule of backup:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>
                    <strong>3</strong> copies of your data (at least).
                  </li>
                  <li>
                    <strong>2</strong> different media (e.g., Computer hard
                    drive + External hard drive).
                  </li>
                  <li>
                    <strong>1</strong> copy off-site (Cloud or drive stored in
                    another building).
                  </li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Cloud vs. Physical Drive
                </h2>
                <p>
                  The external hard drive is fast and cheap, but it can be
                  stolen or destroyed with the computer. The Cloud (Google
                  Drive, OneDrive, specialized solutions) offers security
                  against physical theft and access everywhere, but depends on
                  your internet connection. Combining both is ideal.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Automation is Key
                </h2>
                <p>
                  "I'll do it tomorrow." We all know this phrase. A good backup
                  is an automatic backup that happens without you thinking about
                  it.
                </p>

                <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Are your data safe?
                  </h3>
                  <p className="mb-6">
                    Don't play with fire. We set up automated and secure backup
                    solutions for your peace of mind.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/contact">Protect my data</Link>
                  </Button>
                </div>
              </>
            ) : (
              <>
                <p>
                  Imaginez arriver au bureau demain matin et découvrir que tous
                  vos fichiers ont disparu : comptabilité, liste clients,
                  contrats. Vol d'ordinateur, incendie, disque dur HS ou
                  virus... les causes sont multiples. La seule protection ? Une
                  stratégie de sauvegarde solide.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  La Règle du 3-2-1
                </h2>
                <p>C'est la règle d'or de la sauvegarde :</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>
                    <strong>3</strong> copies de vos données (au moins).
                  </li>
                  <li>
                    <strong>2</strong> supports différents (ex: Disque dur de
                    l'ordi + Disque dur externe).
                  </li>
                  <li>
                    <strong>1</strong> copie hors site (Cloud ou disque stocké
                    dans un autre bâtiment).
                  </li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Cloud vs Disque Physique
                </h2>
                <p>
                  Le disque dur externe est rapide et pas cher, mais il peut
                  être volé ou détruit avec l'ordinateur. Le Cloud (Google
                  Drive, OneDrive, solutions spécialisées) offre une sécurité
                  contre le vol physique et un accès partout, mais dépend de
                  votre connexion internet. La combinaison des deux est l'idéal.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  L'Automatisation est la Clé
                </h2>
                <p>
                  "Je le ferai demain." On connait tous cette phrase. Une bonne
                  sauvegarde est une sauvegarde automatique qui se fait sans que
                  vous y pensiez.
                </p>

                <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Vos données sont-elles en sécurité ?
                  </h3>
                  <p className="mb-6">
                    Ne jouez pas avec le feu. Nous mettons en place des
                    solutions de sauvegarde automatisées et sécurisées pour
                    votre tranquillité d'esprit.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/contact">Protéger mes données</Link>
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </article>
    </>
  );
};

export default ArticleBackupData;
