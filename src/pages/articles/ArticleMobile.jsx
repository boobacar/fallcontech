import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgMobile from "@/assets/articles/mobile-first-design.png";
import { useI18n } from "@/i18n";

const ArticleMobile = () => {
  const { t } = useI18n();
  return (
    <>
      <SEO
        path="/article/why-mobile-first-design-matters-africa"
        title={t('articles.mobile.seo.title')}
        description={t('articles.mobile.seo.description')}
        image={imgMobile}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: t('articles.mobile.seo.headline'),
            image:
              (import.meta.env.VITE_SITE_URL ||
                (typeof window !== "undefined" ? window.location.origin : "")) +
              imgMobile,
            datePublished: "2025-03-30",
            dateModified: "2025-07-20",
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
              "/article/why-mobile-first-design-matters-africa",
            description: t('articles.mobile.seo.ldDescription'),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: t('common.breadcrumb.home'),
                item:
                  (import.meta.env.VITE_SITE_URL ||
                    (typeof window !== "undefined"
                      ? window.location.origin
                      : "")) + "/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: t('common.breadcrumb.resources'),
                item:
                  (import.meta.env.VITE_SITE_URL ||
                    (typeof window !== "undefined"
                      ? window.location.origin
                      : "")) + "/resources",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: t('articles.mobile.breadcrumb'),
                item:
                  (import.meta.env.VITE_SITE_URL ||
                    (typeof window !== "undefined"
                      ? window.location.origin
                      : "")) +
                  "/article/why-mobile-first-design-matters-africa",
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
            {t('articles.common.backToResources')}
          </Link>
          <Breadcrumbs
            items={[
              { label: t('common.breadcrumb.home'), to: "/" },
              { label: t('common.breadcrumb.resources'), to: "/resources" },
              { label: t('articles.mobile.breadcrumb') },
            ]}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{t('articles.mobile.title')}</h1>
            <p className="text-lg text-muted-foreground">{t('articles.mobile.meta')}</p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 text-sm">
            Nous concevons tous nos sites en{" "}
            <Link to="/services" className="text-blue-600 hover:underline">
              mobile‑first
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
              alt="Une main tenant un smartphone affichant un site web parfaitement adapté à l'écran mobile"
              className="w-full rounded-2xl shadow-xl mb-12"
              src={imgMobile}
              loading="lazy"
              decoding="async"
            />

            <p>
              En Afrique, et particulièrement au Sénégal, le mobile n'est pas
              juste un autre appareil ; c'est{" "}
              <strong>l'appareil principal</strong> d'accès à Internet. Ignorer
              cette réalité, c'est se couper d'une grande majorité de vos
              clients potentiels. Le design "mobile-first" n'est plus une
              option, c'est la seule stratégie viable.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Qu'est-ce que le "Mobile-First" ?
            </h2>
            <p>
              Le design mobile-first consiste à concevoir un site web d'abord
              pour l'écran d'un smartphone, puis à adapter la mise en page pour
              les écrans plus grands (tablettes, ordinateurs). C'est l'inverse
              de l'approche traditionnelle ("desktop-first") qui consistait à
              réduire un site conçu pour ordinateur.
            </p>
            <p>
              Cette approche force à se concentrer sur l'essentiel : quel est le
              contenu le plus important ? Quelle est l'action principale que
              l'utilisateur doit effectuer ?
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Les Chiffres ne Mentent Pas
            </h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>
                Plus de <strong>60% du trafic web</strong> en Afrique provient
                des appareils mobiles.
              </li>
              <li>
                Au Sénégal, le taux de pénétration de l'internet mobile dépasse
                de loin celui de l'internet fixe.
              </li>
              <li>
                Google utilise l'indexation "mobile-first", ce qui signifie que
                la version mobile de votre site est celle qui détermine votre
                classement dans les résultats de recherche.
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Principes Clés d'un Design Mobile-First
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-card rounded-lg border">
                <h3 className="font-bold text-lg mb-1">Simplicité et Clarté</h3>
                <p className="text-sm">
                  Contenu concis, navigation simple, et appels à l'action bien
                  visibles.
                </p>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <h3 className="font-bold text-lg mb-1">Performance</h3>
                <p className="text-sm">
                  Optimisation des images et du code pour un chargement rapide,
                  même avec des connexions internet lentes.
                </p>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <h3 className="font-bold text-lg mb-1">Lisibilité</h3>
                <p className="text-sm">
                  Polices de caractères claires et de taille suffisante, avec un
                  bon contraste.
                </p>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <h3 className="font-bold text-lg mb-1">Zones de Clic</h3>
                <p className="text-sm">
                  Boutons et liens suffisamment grands pour être facilement
                  cliquables avec le pouce.
                </p>
              </div>
            </div>

            <p className="mt-8">
              En adoptant une approche mobile-first, vous ne vous contentez pas
              d'améliorer l'expérience utilisateur. Vous améliorez également
              votre SEO, augmentez vos taux de conversion et vous assurez que
              votre entreprise est accessible à tous, partout au Sénégal.
            </p>

            <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Votre site est-il prêt pour le mobile ?
              </h3>
              <p className="mb-6">
                Nous concevons chaque site avec une approche mobile-first pour
                garantir une expérience parfaite sur tous les appareils.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Obtenir une analyse mobile gratuite</Link>
              </Button>
            </div>
            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-3">Articles récents</h4>
              <ul className="list-disc list-inside text-sm text-blue-600">
                <li>
                  <Link to="/article/seo-basics-senegalese-businesses">
                    Les bases du SEO pour les entreprises sénégalaises
                  </Link>
                </li>
                <li>
                  <Link to="/article/automating-follow-ups-whatsapp-senegal">
                    Automatiser les suivis WhatsApp
                  </Link>
                </li>
                <li>
                  <Link to="/article/choosing-right-tech-stack">
                    Choisir la bonne stack technique
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
};

export default ArticleMobile;
