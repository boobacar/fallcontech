import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgSeo from "@/assets/articles/seo.png";

const ArticleSiteVitrineSeo = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/refonte-site-vitrine-seo-dakar";
  const title = "Refonte de site vitrine à Dakar : SEO local et conversions";
  const description =
    "Guide pratique pour réussir la refonte d’un site vitrine au Sénégal : SEO local, Core Web Vitals, contenu orienté conversions et tracking.";

  return (
    <>
      <SEO
        path={path}
        title={`${title} | Fallcon Tech`}
        description={description}
        image={imgSeo}
        type="article"
        imageAlt="Dashboard SEO illustrant la refonte d'un site vitrine"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            image: site + imgSeo,
            datePublished: "2025-10-20",
            dateModified: "2025-10-20",
            author: { "@type": "Person", name: "Fallcon Tech" },
            publisher: { "@type": "Organization", name: "Fallcon Tech", logo: { "@type": "ImageObject", url: site + "/logo.png" } },
            mainEntityOfPage: site + path,
            description,
            articleSection: "SEO local",
            keywords: "refonte site vitrine Dakar, SEO Sénégal, Core Web Vitals, performance web, conversions",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: site + "/" },
              { "@type": "ListItem", position: 2, name: "Ressources", item: site + "/resources" },
              { "@type": "ListItem", position: 3, name: title, item: site + path },
            ],
          },
        ]}
      />

      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />
            Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "SEO local" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-lg text-muted-foreground">Plan d’action SEO local, contenu et conversions pour un site vitrine sénégalais.</p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 text-sm">
            Besoin d’une refonte clé en main ? Découvrez nos{" "}
            <Link to="/services" className="text-blue-600 hover:underline">services de refonte et SEO</Link>.
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <img
              alt="Dashboard SEO illustrant la refonte d'un site vitrine"
              className="w-full rounded-2xl shadow-xl mb-12"
              src={imgSeo}
              loading="lazy"
              decoding="async"
            />

            <p>
              Un site vitrine qui charge vite et répond aux intentions locales ("avocat Dakar", "garage Ngor") reste la manière la plus rentable
              d’être trouvé. La refonte doit aligner <strong>SEO local</strong>, <strong>Core Web Vitals</strong>, et parcours de conversion
              (prise de rendez-vous, appel, WhatsApp).
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Check-list technique SEO et performance</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Core Web Vitals : LCP &lt; 2.5s, CLS stable, optimisation des images WebP et lazy-load.</li>
              <li>Balises essentielles : title, meta description, données structurées LocalBusiness/Organization.</li>
              <li>Maillage interne : pages services, à propos, ressources reliées via ancres contextuelles.</li>
              <li>Cache et CDN : compression Brotli/Gzip, cache long pour les assets statiques.</li>
              <li>Accessibilité : balises alt descriptives, contrastes suffisants, formulaire avec labels.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Contenu orienté conversions</h2>
            <p>
              Un texte riche en mots-clés locaux doit aussi rassurer : preuves sociales, tarifs indicatifs, délais, photos réelles, plan d’accès,
              FAQ. Ajoutez des <strong>CTA</strong> clairs : appel, WhatsApp, formulaire avec objectif Analytics/GA4.
            </p>
            <div className="bg-card p-5 rounded-xl border my-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1" size={20} />
                <div>
                  <strong>Structure recommandée :</strong>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>H1 clair + valeur (ex: "Agence web à Dakar — sites rapides et SEO local").</li>
                    <li>Sections H2/H3 par service avec mots-clés longue traîne.</li>
                    <li>Section preuves : avis, logos clients, résultats chiffrés.</li>
                    <li>FAQ enrichie (rich snippets) sur les prix, délais, zones couvertes.</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Suivi et itérations</h2>
            <p>
              Déployez <strong>Google Search Console</strong>, <strong>GA4</strong> et un suivi d’événements (clics CTA, envois formulaires). Mesurez
              les requêtes locales, la vitesse sur mobile 3G, et mettez à jour les contenus tous les trimestres (nouvelles études de cas, photos,
              offres de saison).
            </p>
          </motion.div>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Lancer une refonte optimisée SEO</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleSiteVitrineSeo;
