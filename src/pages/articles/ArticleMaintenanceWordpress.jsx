import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgStack from "@/assets/articles/stack.png";

const ArticleMaintenanceWordpress = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/maintenance-wordpress-securite-senegal";
  const title = "Maintenance WordPress au Sénégal : sécurité, vitesse et backups";
  const description =
    "Plan de maintenance WordPress pour PME au Sénégal : sécurité, mises à jour, performance et sauvegardes vérifiées.";

  return (
    <>
      <SEO
        path={path}
        title={`${title} | Fallcon Tech`}
        description={description}
        image={imgStack}
        type="article"
        imageAlt="Checklist de maintenance WordPress sécurisée"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            image: site + imgStack,
            datePublished: "2025-10-20",
            dateModified: "2025-10-20",
            author: { "@type": "Person", name: "Fallcon Tech" },
            publisher: { "@type": "Organization", name: "Fallcon Tech", logo: { "@type": "ImageObject", url: site + "/logo.png" } },
            mainEntityOfPage: site + path,
            description,
            articleSection: "Maintenance",
            keywords: "maintenance WordPress Sénégal, sécurité WordPress, performance, sauvegardes, mises à jour plugin",
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
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Maintenance" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-lg text-muted-foreground">Sécuriser WordPress, accélérer les pages et vérifier les sauvegardes pour vos sites au Sénégal.</p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 text-sm">
            Confiez la maintenance à l’équipe ? Découvrez nos{" "}
            <Link to="/pricing" className="text-blue-600 hover:underline">forfaits de maintenance</Link>.
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <img
              alt="Checklist de maintenance WordPress sécurisée"
              className="w-full rounded-2xl shadow-xl mb-12"
              src={imgStack}
              loading="lazy"
              decoding="async"
            />

            <h2 className="text-3xl font-bold mt-4 mb-4">Sécurité avant tout</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Mises à jour mensuelles noyau + plugins, avec staging avant production.</li>
              <li>Firewall applicatif, blocage IP, authentification à deux facteurs.</li>
              <li>Scan de malwares et surveillance d’intégrité des fichiers.</li>
              <li>Principes de moindre privilège : comptes admin limités, mots de passe forts.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-10 mb-4">Performance et Core Web Vitals</h2>
            <p>
              Activez la mise en cache côté serveur/CDN, minifiez CSS/JS, livrez les images en WebP, et surveillez le TTFB. Un thème léger et
              un builder minimal réduisent la dette performance.
            </p>

            <h2 className="text-3xl font-bold mt-10 mb-4">Sauvegardes vérifiées</h2>
            <p>
              Stockez les sauvegardes chiffrées hors du serveur (S3/Backblaze) et testez une restauration chaque trimestre. Journalisez les
              opérations et configurez des alertes en cas d’échec.
            </p>
          </motion.div>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link to="/contact"><ShieldCheck className="mr-2" size={18} />Mettre WordPress en sécurité</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleMaintenanceWordpress;
