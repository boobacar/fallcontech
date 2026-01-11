import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgIT from "@/assets/articles/it-support.png";
import { useI18n } from "@/i18n";

const ArticleGeneralistIT = () => {
  const { t, locale } = useI18n();
  const isEn = locale === "en";
  return (
    <>
      <SEO
        path="/article/pourquoi-informaticien-generaliste-dakar"
        title={t("articles.generalist.seo.title")}
        description={t("articles.generalist.seo.description")}
        image={imgIT}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: t("articles.generalist.seo.headline"),
            image:
              (import.meta.env.VITE_SITE_URL ||
                (typeof window !== "undefined" ? window.location.origin : "")) +
              imgIT,
            datePublished: "2025-10-20",
            dateModified: "2025-10-20",
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
              "/article/pourquoi-informaticien-generaliste-dakar",
            description: t("articles.generalist.seo.ldDescription"),
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
                name: t("articles.generalist.breadcrumb"),
                item:
                  (import.meta.env.VITE_SITE_URL ||
                    (typeof window !== "undefined"
                      ? window.location.origin
                      : "")) +
                  "/article/pourquoi-informaticien-generaliste-dakar",
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
              { label: t("articles.generalist.breadcrumb") },
            ]}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t("articles.generalist.title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("articles.generalist.meta")}
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
              alt="Informaticien polyvalent aidant une équipe"
              className="w-full rounded-2xl shadow-xl mb-12"
              src={imgIT}
              loading="lazy"
              decoding="async"
            />

            {isEn ? (
              <>
                <p>
                  In a hyper-specialized world, one might think an expert is
                  needed for each task: one for the network, one for the
                  website, one for repairs. But for a small business or SME in
                  Dakar, calling on a <strong>generalist IT specialist</strong>{" "}
                  is often the most cost-effective and efficient strategy. Here
                  is why.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Single Point of Contact: Save Time and Money
                </h2>
                <p>
                  When your internet cuts out, is it the router, the computer,
                  or the provider? Rather than calling three different services
                  who pass the buck, a generalist diagnoses the entire chain.
                  They speak both technical and user language.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  A Global Vision of Your Infrastructure
                </h2>
                <p>
                  A web developer won't necessarily see that your server is
                  poorly secured. A network technician won't know how to
                  optimize your WordPress site. A versatile profile, or "Digital
                  Swiss Army Knife," understands how all these bricks interact.
                  They can advise you on buying hardware compatible with your
                  future software.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Responsiveness and Proximity
                </h2>
                <p>
                  IT problems wait for no one. Having a trusted local partner,
                  capable of intervening on-site in Dakar or taking control
                  remotely immediately, saves hours of productivity.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Adaptability to Real Needs
                </h2>
                <p>
                  A good generalist won't sell you an oversized solution. They
                  know how to tweak old hardware to work when the budget is
                  tight, and when investing in new gear is unavoidable. It's the
                  essence of smart "resourcefulness".
                </p>

                <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Looking for this trusted partner?
                  </h3>
                  <p className="mb-6">
                    At Fallcon Tech, we cultivate this versatility to be the
                    only number you need to call.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/contact">Discuss your needs</Link>
                  </Button>
                </div>
              </>
            ) : (
              <>
                <p>
                  Dans un monde hyper-spécialisé, on pourrait penser qu'il faut
                  un expert pour chaque tâche : un pour le réseau, un pour le
                  site web, un pour les réparations. Mais pour une TPE ou PME à
                  Dakar, faire appel à un{" "}
                  <strong>informaticien généraliste</strong> est souvent la
                  stratégie la plus rentable et efficace. Voici pourquoi.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  L'Interlocuteur Unique : Gain de Temps et d'Argent
                </h2>
                <p>
                  Quand votre internet coupe, est-ce la faute du routeur, de
                  l'ordinateur ou du fournisseur ? Plutôt que d'appeler trois
                  services différents qui se renvoient la balle, un généraliste
                  diagnostique l'ensemble de la chaîne. Il parle le langage des
                  techniques et celui des utilisateurs.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Une Vision Globale de Votre Infrastructure
                </h2>
                <p>
                  Un développeur web ne verra pas forcément que votre serveur
                  est mal sécurisé. Un technicien réseau ne saura pas optimiser
                  votre site WordPress. Un profil polyvalent, ou "Couteau Suisse
                  Numérique", comprend comment toutes ces briques interagissent.
                  Il peut vous conseiller sur l'achat de matériel compatible
                  avec vos logiciels futurs.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Réactivité et Proximité
                </h2>
                <p>
                  Les problèmes informatiques n'attendent pas. Avoir un
                  partenaire de confiance local, capable d'intervenir sur site à
                  Dakar ou de prendre la main à distance immédiatement, sauve
                  des heures de productivité.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Adaptabilité aux Besoins Réels
                </h2>
                <p>
                  Un bon généraliste ne vous vendra pas une solution
                  surdimensionnée. Il sait bidouiller pour faire marcher
                  l'ancien matériel quand le budget est serré, et quand investir
                  dans du neuf est inévitable. C'est l'essence de la
                  "débrouille" intelligente.
                </p>

                <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Vous cherchez ce partenaire de confiance ?
                  </h3>
                  <p className="mb-6">
                    Chez Fallcon Tech, nous cultivons cette polyvalence pour
                    être le seul numéro que vous avez besoin d'appeler.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/contact">Discuter de vos besoins</Link>
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

export default ArticleGeneralistIT;
