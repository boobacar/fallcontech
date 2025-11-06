import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgHero from "@/assets/articles/iot-esp32.svg";

const ArticleIoTEmbedded = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/developpement-iot-embarque-senegal-arduino-esp32";
  const title = "Développement IoT & embarqué pour entreprises au Sénégal (Arduino, ESP32)";
  const description = "Cas d’usage IoT pour l’industrie, kiosques et machines: capteurs, télérelève, contrôle, sécurité, mise à jour OTA et tableaux de bord.";

  return (
    <>
      <SEO
        path={path}
        title={`Développeur IoT à Dakar — ${title}`}
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
            keywords: "Développeur IoT Sénégal, développeur embarqué, Arduino, ESP32, capteurs, OTA, sécurité, données temps réel",
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
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "IoT & embarqué" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-lg text-muted-foreground">Arduino • ESP32 • Capteurs • Sécurité • OTA • Tableaux de bord</p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 text-sm">
            Besoin d’un partenaire technique ? Découvrez nos{" "}
            <Link to="/services" className="text-blue-600 hover:underline">services IoT & systèmes embarqués</Link>.
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <img alt="Illustration de solutions IoT et systèmes embarqués (Arduino/ESP32)" className="w-full rounded-2xl shadow-xl mb-12" src={imgHero} loading="lazy" decoding="async" />

            <p>
              Nous accompagnons les entreprises au Sénégal dans la conception de solutions
              <strong>IoT</strong> et <strong>embarquées</strong> fiables: capteurs, contrôle d’équipements,
              collecte de données et automatisations. Basé sur <strong>Arduino</strong> et <strong>ESP32</strong>,
              notre approche privilégie la sécurité, la maintenabilité et la simplicité d’exploitation.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Cas d’usage fréquents</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Distributeurs et kiosques (eau, tickets, recharge) avec paiement mobile.</li>
              <li>Suivi d’états (niveau, température, compteur) et alertes en temps utile.</li>
              <li>Optimisation d’énergie et d’exploitation (mesures clés, déclenchements).</li>
              <li>Contrôle d’accès adapté à l’usage (badges, codes, relais).</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Fiabilité & sécurité</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Architecture « device simple, serveur fiable »: logique critique côté serveur.</li>
              <li>Communication chiffrée entre appareils et serveur, secrets protégés.</li>
              <li>Mises à jour à distance contrôlées, journalisation et traçabilité.</li>
              <li>Mode dégradé hors‑ligne et reprise après coupure.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Tableaux de bord</h2>
            <p>
              Dashboards web pour superviser vos parcs: métriques clés, alarmes, historiques,
              export CSV et rapports. Intégration possible avec des outils de BI.
            </p>
          </motion.div>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link to="/contact"><Cpu className="mr-2" size={18}/>Discuter d’un projet IoT</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleIoTEmbedded;
