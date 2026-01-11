import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgTroubleshooting from "@/assets/articles/troubleshooting.png";
import { useI18n } from "@/i18n";

const ArticleTroubleshooting = () => {
  const { t, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <>
      <SEO
        path="/article/depannage-informatique-5-problemes-courants"
        title={t("articles.troubleshooting.seo.title")}
        description={t("articles.troubleshooting.seo.description")}
        image={imgTroubleshooting}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: t("articles.troubleshooting.seo.headline"),
            image:
              (import.meta.env.VITE_SITE_URL ||
                (typeof window !== "undefined" ? window.location.origin : "")) +
              imgTroubleshooting,
            datePublished: "2025-10-15",
            dateModified: "2025-10-15",
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
              "/article/depannage-informatique-5-problemes-courants",
            description: t("articles.troubleshooting.seo.ldDescription"),
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
                name: t("articles.troubleshooting.breadcrumb"),
                item:
                  (import.meta.env.VITE_SITE_URL ||
                    (typeof window !== "undefined"
                      ? window.location.origin
                      : "")) +
                  "/article/depannage-informatique-5-problemes-courants",
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
              { label: t("articles.troubleshooting.breadcrumb") },
            ]}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t("articles.troubleshooting.title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("articles.troubleshooting.meta")}
            </p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 text-sm">
            {isEn
              ? "Urgent problem? Contact our "
              : "Un problème urgent ? Contactez notre service de "}
            <Link to="/contact" className="text-blue-600 hover:underline">
              {isEn ? "IT Support in Dakar" : "dépannage informatique à Dakar"}
            </Link>
            .
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <img
              alt="Technicien réparant un ordinateur portable"
              className="w-full rounded-2xl shadow-xl mb-12"
              src={imgTroubleshooting}
              loading="lazy"
              decoding="async"
            />

            {isEn ? (
              <>
                <p>
                  Is your computer slow, overheating, or refusing to start? In
                  Dakar, dust, heat, and power cuts put our equipment to the
                  test. Here are the 5 most common IT problems we encounter in
                  Senegal and how to identify them before it's too late.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  1. Excessive Slowness and "Lagging"
                </h2>
                <p>
                  This is the classic troubleshooting request. If your PC takes
                  10 minutes to turn on, the culprit is often an aging hard
                  drive (HDD) or too many startup programs. The radical
                  solution? Upgrade to an SSD drive. It's night and day.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  2. Overheating and Fan Noise
                </h2>
                <p>
                  If your laptop sounds like a plane taking off, it's
                  suffocating. Dakar dust accumulates in the fans, blocking
                  cooling. Annual professional cleaning is essential to avoid
                  frying your processor.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  3. Blue Screen (BSOD) or Random Restarts
                </h2>
                <p>
                  Often linked to defective RAM or a corrupt driver. If this
                  happens after a Windows update or installing a new device, you
                  have your lead.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  4. Unstable Internet Connection (Wi-Fi dropping)
                </h2>
                <p>
                  It's not always Orange or Free's fault! Sometimes it's your
                  Wi-Fi card getting tired or interference in your office.
                  Updating drivers or an external Wi-Fi key can solve the
                  problem in 5 minutes.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  5. Viruses and Pop-up Ads
                </h2>
                <p>
                  Does your browser open pages by itself? You clicked where you
                  shouldn't have. A thorough anti-malware cleanup is necessary
                  to secure your banking and personal data.
                </p>

                <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Need a quick diagnosis?
                  </h3>
                  <p className="mb-6">
                    Don't let a small bug become a major breakdown. Our
                    technicians intervene everywhere in Dakar.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/contact">Request Intervention</Link>
                  </Button>
                </div>
              </>
            ) : (
              <>
                <p>
                  Votre ordinateur est lent, chauffe ou refuse de démarrer ? À
                  Dakar, la poussière, la chaleur et les coupures de courant
                  mettent nos équipements à rude épreuve. Voici les 5 problèmes
                  informatiques les plus courants que nous rencontrons au
                  Sénégal et comment les identifier avant qu'il ne soit trop
                  tard.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  1. Lenteur excessive et "Rame"
                </h2>
                <p>
                  C'est le classic du dépannage. Si votre PC met 10 minutes à
                  s'allumer, le coupable est souvent un disque dur vieillissant
                  (HDD) ou trop de programmes au démarrage. La solution radicale
                  ? Passer à un disque SSD. C'est le jour et la nuit.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  2. Surchauffe et Bruit de Ventilateur
                </h2>
                <p>
                  Si votre ordinateur portable fait le bruit d'un avion au
                  décollage, c'est qu'il étouffe. La poussière dakaroise
                  s'accumule dans les ventilateurs, bloquant le refroidissement.
                  Un nettoyage professionnel annuel est indispensable pour
                  éviter de griller votre processeur.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  3. Écran Bleu (BSOD) ou Redémarrages Intempestifs
                </h2>
                <p>
                  Souvent lié à une barrette de mémoire RAM défectueuse ou un
                  pilote corrompu. Si cela arrive après une mise à jour Windows
                  ou l'installation d'un nouveau périphérique, vous avez votre
                  piste.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  4. Connexion Internet Instable (Wi-Fi qui saute)
                </h2>
                <p>
                  Ce n'est pas toujours la faute d'Orange ou de Free ! Parfois,
                  c'est votre carte Wi-Fi qui fatigue ou des interférences dans
                  vos bureaux. Une mise à jour des pilotes ou une clé Wi-Fi
                  externe peut résoudre le problème en 5 minutes.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  5. Virus et Publicités Pop-up
                </h2>
                <p>
                  Votre navigateur ouvre des pages tout seul ? Vous avez cliqué
                  où il ne fallait pas. Un nettoyage anti-malware approfondi est
                  nécessaire pour sécuriser vos données bancaires et
                  personnelles.
                </p>

                <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Besoin d'un diagnostic rapide ?
                  </h3>
                  <p className="mb-6">
                    Ne laissez pas un petit bug devenir une panne majeure. Nos
                    techniciens interviennent partout à Dakar.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/contact">Demander une intervention</Link>
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

export default ArticleTroubleshooting;
