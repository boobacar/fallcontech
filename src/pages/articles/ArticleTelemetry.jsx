import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgHero from "@/assets/articles/iot-esp32.svg";

const ArticleTelemetry = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/telemetrie-maintenance-predictive-iot-senegal";
  const title = "Télémétrie et maintenance prédictive pour machines connectées (IoT)";
  const description = "Capteurs, collecte de données, alertes et tableaux de bord pour réduire les pannes et optimiser l’exploitation des machines au Sénégal.";

  return (
    <>
      <SEO
        path={path}
        title={`IoT industriel — ${title}`}
        description={description}
        image={imgHero}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            image: site + imgHero,
            datePublished: "2025-10-15",
            dateModified: "2025-10-15",
            author: { "@type": "Person", name: "Boubacar FALL" },
            publisher: { "@type": "Organization", name: "Fallcon Tech", logo: { "@type": "ImageObject", url: site + "/assets/logo.webp" } },
            mainEntityOfPage: site + path,
            description,
            articleSection: "IoT",
            keywords: "IoT, télémétrie, maintenance prédictive, capteurs, tableau de bord, Sénégal",
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
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Télémétrie IoT" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-lg text-muted-foreground">Capteurs, alertes, historiques et décisions guidées par la donnée</p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 text-sm">
            Envie d’un pilote rapide ? Découvrez nos{" "}
            <Link to="/services" className="text-blue-600 hover:underline">tableaux de bord et intégrations IoT</Link>.
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <img alt="Courbe de télémétrie sur un tableau de bord temps réel" className="w-full rounded-2xl shadow-xl mb-12" src={imgHero} loading="lazy" decoding="async" />

            <p>
              Avec des capteurs bien placés et un acheminement de données fiable,
              la <strong>télémétrie</strong> permet de détecter tôt les dérives (débits,
              températures, vibrations) et d’anticiper les pannes. Couplée à des
              alertes et à un historique exploitable, elle réduit les coûts et améliore
              la disponibilité des machines.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Briques techniques</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>ESP32/Arduino + capteurs adaptés aux grandeurs suivies.</li>
              <li>Transmission chiffrée vers un serveur sécurisé.</li>
              <li>Stockage, agrégation et visualisation sur tableau de bord.</li>
              <li>Alertes (WhatsApp/SMS/email) et processus d’escalade.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Démarrage rapide</h2>
            <p>
              Un <em>proof‑of‑concept</em> peut être livré en quelques semaines: définition
              des métriques, prototype capteur, envoi de données, et tableau de bord
              avec alertes. Les itérations suivantes étendent le périmètre et la précision.
            </p>
          </motion.div>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link to="/contact"><Activity className="mr-2" size={18}/>Lancer un POC télémétrie</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleTelemetry;
