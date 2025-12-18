import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgMobile from "@/assets/articles/mobile-first-design.png";

const ArticleCoreWebVitals = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/core-web-vitals-afrique";
  const title = "Core Web Vitals en Afrique : comment passer au vert";
  const description =
    "Bonnes pratiques Core Web Vitals pour les sites en Afrique : LCP rapide, CLS stable, TTFB bas et optimisation mobile-first.";

  return (
    <>
      <SEO
        path={path}
        title={`${title} | Fallcon Tech`}
        description={description}
        image={imgMobile}
        type="article"
        imageAlt="Graphique Core Web Vitals sur mobile"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            image: site + imgMobile,
            datePublished: "2025-10-20",
            dateModified: "2025-10-20",
            author: { "@type": "Person", name: "Fallcon Tech" },
            publisher: { "@type": "Organization", name: "Fallcon Tech", logo: { "@type": "ImageObject", url: site + "/logo.png" } },
            mainEntityOfPage: site + path,
            description,
            articleSection: "Performance web",
            keywords: "Core Web Vitals Afrique, LCP, CLS, INP, performance mobile, optimisation web Sénégal",
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
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Performance web" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-lg text-muted-foreground">Rendre vos pages rapides sur 3G/4G en Afrique pour booster SEO et conversions.</p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 text-sm">
            Besoin d’un audit rapide ? Nous proposons des{" "}
            <Link to="/services" className="text-blue-600 hover:underline">audits Core Web Vitals</Link>.
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <img
              alt="Graphique Core Web Vitals sur mobile"
              className="w-full rounded-2xl shadow-xl mb-12"
              src={imgMobile}
              loading="lazy"
              decoding="async"
            />

            <h2 className="text-3xl font-bold mt-4 mb-4">Priorités de performance</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>LCP &lt; 2.5s : optimiser l’image héro, activer HTTP/2, précharger la police.</li>
              <li>CLS &lt; 0.1 : réserver l’espace des images/iframes, éviter les injections tardives.</li>
              <li>INP &lt; 200 ms : moins de JavaScript, interactions légères, debounce.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-10 mb-4">Optimisations adaptées à l’Afrique</h2>
            <p>
              Testez en 3G/4G (throttling) et réduisez le poids des pages : images WebP/AVIF, compression Brotli, mise en cache CDN proche de
              vos utilisateurs (Dakar, Abidjan). Évitez les bundles lourds et chargez les scripts critiques en priorité.
            </p>

            <h2 className="text-3xl font-bold mt-10 mb-4">Monitoring continu</h2>
            <p>
              Configurez un suivi en temps réel (PageSpeed Insights API, Lighthouse CI), alertez dès qu’un KPI sort du vert, et itérez à chaque
              release. L’amélioration des Core Web Vitals augmente les conversions et votre référencement sur mobile.
            </p>
          </motion.div>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link to="/contact"><Gauge className="mr-2" size={18} />Optimiser les Core Web Vitals</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleCoreWebVitals;
