import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgHardware from "@/assets/articles/hardware.png";
import { useI18n } from "@/i18n";

const ArticleHardwareChoice = () => {
  const { t, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <>
      <SEO
        path="/article/choisir-pc-professionnel-guide"
        title={t("articles.hardware.seo.title")}
        description={t("articles.hardware.seo.description")}
        image={imgHardware}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: t("articles.hardware.seo.headline"),
            image:
              (import.meta.env.VITE_SITE_URL ||
                (typeof window !== "undefined" ? window.location.origin : "")) +
              imgHardware,
            datePublished: "2025-11-05",
            dateModified: "2025-11-05",
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
              "/article/choisir-pc-professionnel-guide",
            description: t("articles.hardware.seo.ldDescription"),
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
                name: t("articles.hardware.breadcrumb"),
                item:
                  (import.meta.env.VITE_SITE_URL ||
                    (typeof window !== "undefined"
                      ? window.location.origin
                      : "")) + "/article/choisir-pc-professionnel-guide",
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
              { label: t("articles.hardware.breadcrumb") },
            ]}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t("articles.hardware.title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("articles.hardware.meta")}
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
              alt="Ordinateur portable professionnel moderne sur un bureau"
              className="w-full rounded-2xl shadow-xl mb-12"
              src={imgHardware}
              loading="lazy"
              decoding="async"
            />

            {isEn ? (
              <>
                <p>
                  Investing in IT hardware is often a headache. Should you get
                  the latest model? Mac or PC? How much RAM? For a business, the
                  right choice combines performance, durability, and
                  cost-effectiveness.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  The 3 Essential Criteria
                </h2>
                <ul className="space-y-4 mb-8">
                  <li>
                    <strong>Processor (CPU):</strong> Go for at least a recent
                    Intel Core i5 or AMD Ryzen 5. It's the brain of the machine.
                  </li>
                  <li>
                    <strong>Memory (RAM):</strong> 8 GB is the vital minimum
                    today. Aim for 16 GB to be comfortable for 3 to 5 years,
                    especially if you multitask.
                  </li>
                  <li>
                    <strong>Storage (SSD):</strong> Forget mechanical hard
                    drives (HDD) for the system. An SSD is mandatory for
                    responsiveness. 512 GB is a good standard.
                  </li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  New vs. Refurbished
                </h2>
                <p>
                  The professional refurbished market offers excellent
                  opportunities (Lenovo ThinkPad, Dell Latitude series). You can
                  get a robust "Pro" machine for less than a new plastic
                  consumer laptop. It's a smart choice for equipping staff for
                  office work.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Importance of Screen and Ergonomics
                </h2>
                <p>
                  We spend hours in front of it. A matte screen (anti-glare) is
                  preferable for working. also consider the weight if you move
                  around Dakar often.
                </p>

                <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Need buying advice?
                  </h3>
                  <p className="mb-6">
                    We help you choose and configure your IT fleet to optimize
                    your budget.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/contact">Hardware advice</Link>
                  </Button>
                </div>
              </>
            ) : (
              <>
                <p>
                  Investir dans le matériel informatique est souvent un
                  casse-tête. Faut-il prendre le dernier modèle ? Mac ou PC ?
                  Combien de RAM ? Pour une entreprise, le bon choix est celui
                  qui allie performance, durabilité et rentabilité.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Les 3 Critères Indispensables
                </h2>
                <ul className="space-y-4 mb-8">
                  <li>
                    <strong>Le Processeur (CPU) :</strong> Privilégiez au
                    minimum un Intel Core i5 ou AMD Ryzen 5 récent. C'est le
                    cerveau de la machine.
                  </li>
                  <li>
                    <strong>La Mémoire (RAM) :</strong> 8 Go est le minimum
                    vital aujourd'hui. Visez 16 Go pour être tranquille pendant
                    3 à 5 ans, surtout si vous faites du multitâche.
                  </li>
                  <li>
                    <strong>Le Stockage (SSD) :</strong> Oubliez les disques
                    durs mécaniques (HDD) pour le système. Le SSD est
                    obligatoire pour la réactivité. 512 Go est un bon standard.
                  </li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Neuf vs Reconditionné
                </h2>
                <p>
                  Le marché du reconditionné professionnel offre d'excellentes
                  opportunités (séries Lenovo ThinkPad, Dell Latitude). Vous
                  pouvez avoir une machine "Pro" robuste pour moins cher qu'un
                  ordinateur grand public en plastique neuf. C'est un choix
                  malin pour équiper des collaborateurs pour de la bureautique.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  L'Importance de l'Écran et de l'Ergonomie
                </h2>
                <p>
                  On passe des heures devant. Un écran mat (anti-reflet) est
                  préférable pour travailler. Pensez aussi au poids si vous vous
                  déplacez souvent à Dakar.
                </p>

                <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Besoin de conseils d'achat ?
                  </h3>
                  <p className="mb-6">
                    Nous vous aidons à choisir et à configurer votre parc
                    informatique pour optimiser votre budget.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/contact">Conseil achat matériel</Link>
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

export default ArticleHardwareChoice;
