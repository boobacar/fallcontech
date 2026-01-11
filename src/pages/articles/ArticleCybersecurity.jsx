import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgSecurity from "@/assets/articles/security.png";
import { useI18n } from "@/i18n";

const ArticleCybersecurity = () => {
  const { t, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <>
      <SEO
        path="/article/cybersecurite-pme-senegal"
        title={t("articles.security.seo.title")}
        description={t("articles.security.seo.description")}
        image={imgSecurity}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: t("articles.security.seo.headline"),
            image:
              (import.meta.env.VITE_SITE_URL ||
                (typeof window !== "undefined" ? window.location.origin : "")) +
              imgSecurity,
            datePublished: "2025-10-30",
            dateModified: "2025-10-30",
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
              "/article/cybersecurite-pme-senegal",
            description: t("articles.security.seo.ldDescription"),
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
                name: t("articles.security.breadcrumb"),
                item:
                  (import.meta.env.VITE_SITE_URL ||
                    (typeof window !== "undefined"
                      ? window.location.origin
                      : "")) + "/article/cybersecurite-pme-senegal",
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
              { label: t("articles.security.breadcrumb") },
            ]}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t("articles.security.title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("articles.security.meta")}
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
              alt="Concept de cybersécurité pour les entreprises"
              className="w-full rounded-2xl shadow-xl mb-12"
              src={imgSecurity}
              loading="lazy"
              decoding="async"
            />

            {isEn ? (
              <>
                <p>
                  "My company is too small to interest hackers." This is the
                  fatal mistake many SME leaders in Senegal make. In reality,
                  automated attacks target all vulnerabilities indiscriminately.
                  Protecting your client data and accounting is not an option,
                  it's a vital obligation.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  The Real Risks
                </h2>
                <p>
                  Ransomware that encrypts your files, phishing emails to steal
                  your passwords, or simple data theft. An SME that loses its
                  data often shuts down within 6 months.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Basics of Protection (Digital Hygiene)
                </h2>
                <ul className="space-y-4 my-8">
                  <li>
                    <strong>Strong Passwords:</strong> No more "123456" or
                    "dakar2025". Use passphrases or a password manager.
                  </li>
                  <li>
                    <strong>Two-Factor Authentication (2FA):</strong> Enable it
                    everywhere (Gmail, Facebook, Bank). It's the most effective
                    barrier.
                  </li>
                  <li>
                    <strong>Updates:</strong> Outdated software is an open door.
                    Don't delay Windows updates.
                  </li>
                  <li>
                    <strong>Professional Antivirus:</strong> Free versions often
                    aren't enough for commercial use.
                  </li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Backup: Your Insurance Policy
                </h2>
                <p>
                  No protection is infallible. The only absolute defense against
                  ransomware is having an off-site backup (Cloud or disconnected
                  hard drive) of your data. If attacked, you restore and
                  restart.
                </p>

                <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Free Security Audit
                  </h3>
                  <p className="mb-6">
                    We check your systems and propose simple solutions to secure
                    your business.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/contact">Secure my business</Link>
                  </Button>
                </div>
              </>
            ) : (
              <>
                <p>
                  "Mon entreprise est trop petite pour intéresser les pirates."
                  C'est l'erreur fatale que commettent beaucoup de dirigeants de
                  PME au Sénégal. En réalité, les attaques automatisées ciblent
                  indifféremment toutes les failles. Protéger vos données
                  clients et votre comptabilité n'est pas une option, c'est une
                  obligation vitale.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Les Risques Réels
                </h2>
                <p>
                  Ransomware (logiciel de rançon) qui chiffre vos fichiers,
                  phishing (hameçonnage) par email pour voler vos mots de passe,
                  ou simple vol de données. Une PME qui perd ses données met
                  souvent la clé sous la porte dans les 6 mois.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Les Bases de la Protection (Hygiène Numérique)
                </h2>
                <ul className="space-y-4 my-8">
                  <li>
                    <strong>Mots de passe forts :</strong> Finis les "123456" ou
                    "dakar2025". Utilisez des phrases de passe ou un
                    gestionnaire de mots de passe.
                  </li>
                  <li>
                    <strong>Double Authentification (2FA) :</strong> Activez-la
                    partout (Gmail, Facebook, Banque). C'est la barrière la plus
                    efficace.
                  </li>
                  <li>
                    <strong>Mises à jour :</strong> Un logiciel pas à jour est
                    une porte ouverte. Ne repoussez pas les mises à jour
                    Windows.
                  </li>
                  <li>
                    <strong>Antivirus Professionnel :</strong> Les versions
                    gratuites ne suffisent souvent pas pour un usage commercial.
                  </li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  La Sauvegarde : Votre Assurance Vie
                </h2>
                <p>
                  Aucune protection n'est infaillible. La seule parade absolue
                  contre un ransomware est d'avoir une sauvegarde externalisée
                  (Cloud ou disque dur déconnecté) de vos données. Si vous êtes
                  attaqué, vous restaurez et vous repartez.
                </p>

                <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Audit de sécurité gratuit
                  </h3>
                  <p className="mb-6">
                    Nous vérifions vos systèmes et vous proposons des solutions
                    simples pour sécuriser votre activité.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/contact">Sécuriser mon entreprise</Link>
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

export default ArticleCybersecurity;
