import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgHero from "@/assets/articles/iot-esp32.svg";

const ArticleTelemetryEn = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/en/article/iot-telemetry-predictive-maintenance-senegal";
  const title = "IoT telemetry and predictive maintenance for connected machines";
  const description = "Sensors, data collection, alerts and dashboards to cut downtime and improve operations in Senegal.";

  return (
    <>
      <SEO
        path={path}
        title={`Industrial IoT — ${title}`}
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
            keywords: "IoT, telemetry, predictive maintenance, sensors, dashboard, Senegal",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: site + "/" },
              { "@type": "ListItem", position: 2, name: "Resources", item: site + "/resources" },
              { "@type": "ListItem", position: 3, name: title, item: site + path },
            ],
          },
        ]}
      />

      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />
            Back to resources
          </Link>
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Resources", to: "/resources" }, { label: "IoT telemetry" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-lg text-muted-foreground">Sensors, alerts, history and data‑driven decisions</p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 text-sm">
            Want a quick pilot? See our {" "}
            <Link to="/services" className="text-blue-600 hover:underline">IoT dashboards and integrations</Link>.
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <img alt="Telemetry chart on a real‑time dashboard" className="w-full rounded-2xl shadow-xl mb-12" src={imgHero} loading="lazy" decoding="async" />

            <p>
              With well‑placed sensors and a reliable data pipeline, <strong>telemetry</strong> enables early
              detection of drifts (flows, temperatures, vibrations) and helps anticipate failures.
              Combined with alerts and usable history, it cuts costs and improves machine availability.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Building blocks</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>ESP32/Arduino + sensors adapted to the measured variables.</li>
              <li>Encrypted transmission to a secure server.</li>
              <li>Storage, aggregation and visualization on a dashboard.</li>
              <li>Alerts (WhatsApp/SMS/email) and escalation processes.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Quick start</h2>
            <p>
              A proof‑of‑concept can be delivered in a few weeks: define key metrics, prototype the sensor,
              send data, and build a dashboard with alerts. Next iterations extend scope and accuracy.
            </p>
          </motion.div>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link to="/contact"><Activity className="mr-2" size={18}/>Launch a telemetry POC</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleTelemetryEn;

