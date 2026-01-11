import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgMaintenance from "@/assets/articles/maintenance.png";
import { useI18n } from "@/i18n";

const ArticleMaintenancePC = () => {
  const { t, locale } = useI18n();
  const isEn = locale === "en";
  return (
    <>
      <SEO
        path="/article/maintenance-nettoyage-pc-senegal"
        title={t("articles.maintenance.seo.title")}
        description={t("articles.maintenance.seo.description")}
        image={imgMaintenance}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: t("articles.maintenance.seo.headline"),
            image:
              (import.meta.env.VITE_SITE_URL ||
                (typeof window !== "undefined" ? window.location.origin : "")) +
              imgMaintenance,
            datePublished: "2025-10-25",
            dateModified: "2025-10-25",
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
              "/article/maintenance-nettoyage-pc-senegal",
            description: t("articles.maintenance.seo.ldDescription"),
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
                name: t("articles.maintenance.breadcrumb"),
                item:
                  (import.meta.env.VITE_SITE_URL ||
                    (typeof window !== "undefined"
                      ? window.location.origin
                      : "")) + "/article/maintenance-nettoyage-pc-senegal",
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
              { label: t("articles.maintenance.breadcrumb") },
            ]}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t("articles.maintenance.title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("articles.maintenance.meta")}
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
              alt="Nettoyage et maintenance d'un ordinateur"
              className="w-full rounded-2xl shadow-xl mb-12"
              src={imgMaintenance}
              loading="lazy"
              decoding="async"
            />

            {isEn ? (
              <>
                <p>
                  We often wait for a breakdown to take care of our computer.
                  Yet, like a car, a PC needs regular maintenance to last,
                  especially in the dusty environment of Dakar. Simple
                  maintenance can double the lifespan of your equipment.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Enemy Number 1: Dust
                </h2>
                <p>
                  Dust clogs radiators and blocks fans. Result: the processor
                  overheats, slows down to protect itself (throttling), and
                  eventually burns out. Internal dedusting every 6 to 12 months
                  is vital. Warning: vacuums are not recommended (static
                  electricity), prefer compressed air.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Thermal Paste: The Forgotten One
                </h2>
                <p>
                  This compound conducts heat from the processor to the fan.
                  After 3 or 4 years, it dries out and no longer does its job.
                  If your PC heats up even after dusting, it's often the
                  culprit. Replacing it gives the machine a second youth.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Software Maintenance: The Big Cleanup
                </h2>
                <p>
                  Over time, Windows accumulates temporary files, corrupt
                  registers, and useless software.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Uninstall programs you no longer use.</li>
                  <li>Update your drivers and operating system.</li>
                  <li>
                    Check disk space: a full disk slows down the entire system.
                  </li>
                </ul>

                <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Does your PC need a check-up?
                  </h3>
                  <p className="mb-6">
                    We offer complete maintenance packages: physical cleaning +
                    software optimization.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/contact">Book an appointment</Link>
                  </Button>
                </div>
              </>
            ) : (
              <>
                <p>
                  On attend souvent la panne pour s'occuper de son ordinateur.
                  Pourtant, comme une voiture, un PC a besoin d'entretien
                  régulier pour durer, surtout dans l'environnement poussiéreux
                  de Dakar. Un entretien simple peut doubler la durée de vie de
                  vos équipements.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  L'Ennemi Numéro 1 : La Poussière
                </h2>
                <p>
                  La poussière obstrue les radiateurs et bloque les
                  ventilateurs. Résultat : le processeur chauffe, ralentit pour
                  se protéger (throttling), et finit par griller. Un
                  dépoussiérage interne tous les 6 à 12 mois est vital.
                  Attention : l'aspirateur est déconseillé (électricité
                  statique), préférez l'air comprimé.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  La Pâte Thermique : L'Oubliée
                </h2>
                <p>
                  Ce composé conduit la chaleur du processeur vers le
                  ventilateur. Après 3 ou 4 ans, elle sèche et ne fait plus son
                  travail. Si votre PC chauffe même après dépoussiérage, c'est
                  souvent elle la coupable. Son remplacement redonne une seconde
                  jeunesse à la machine.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Maintenance Logicielle : Le Grand Nettoyage
                </h2>
                <p>
                  Au fil du temps, Windows accumule des fichiers temporaires,
                  des registres corrompus et des logiciels inutiles.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Désinstallez les programmes que vous n'utilisez plus.</li>
                  <li>
                    Mettez à jour vos pilotes et votre système d'exploitation.
                  </li>
                  <li>
                    Vérifiez l'espace disque : un disque plein ralentit tout le
                    système.
                  </li>
                </ul>

                <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Votre PC a besoin d'un check-up ?
                  </h3>
                  <p className="mb-6">
                    Nous proposons des forfaits maintenance complets : nettoyage
                    physique + optimisation logicielle.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/contact">Prendre rendez-vous</Link>
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

export default ArticleMaintenancePC;
