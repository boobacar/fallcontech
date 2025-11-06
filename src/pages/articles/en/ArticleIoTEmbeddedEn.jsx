import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgHero from "@/assets/articles/iot-esp32.svg";

const ArticleIoTEmbeddedEn = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/en/article/iot-embedded-development-senegal-arduino-esp32";
  const title = "IoT & embedded development for businesses in Senegal (Arduino, ESP32)";
  const description = "IoT use‑cases for industry, kiosks and machines: sensors, control, security, remote updates and dashboards.";

  return (
    <>
      <SEO
        path={path}
        title={`IoT Developer in Dakar — ${title}`}
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
            keywords: "IoT developer Senegal, embedded developer, Arduino, ESP32, sensors, OTA, security, real‑time data",
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
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Resources", to: "/resources" }, { label: "IoT & embedded" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-lg text-muted-foreground">Arduino • ESP32 • Sensors • Security • Remote updates • Dashboards</p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 text-sm">
            Need a technical partner? See our {" "}
            <Link to="/services" className="text-blue-600 hover:underline">IoT & embedded services</Link>.
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <img alt="Illustration of IoT and embedded systems solutions (Arduino/ESP32)" className="w-full rounded-2xl shadow-xl mb-12" src={imgHero} loading="lazy" decoding="async" />

            <p>
              We help businesses in Senegal design <strong>IoT</strong> and <strong>embedded</strong> solutions that are reliable,
              maintainable and easy to operate: sensors, equipment control, data collection and automation.
              Built on <strong>Arduino</strong> and <strong>ESP32</strong>, our approach prioritizes security and operational simplicity.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Common use‑cases</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Dispensers and kiosks (water, tickets, top‑ups) with mobile payments.</li>
              <li>Status tracking (levels, temperature, counters) and timely alerts.</li>
              <li>Energy and operations optimization (key measures, triggers).</li>
              <li>Access control adapted to the context (badges, codes, relays).</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Reliability & security</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>“Simple device, reliable server” architecture: critical logic on the server.</li>
              <li>Encrypted communication between devices and server, protected secrets.</li>
              <li>Controlled remote updates, logging and traceability.</li>
              <li>Graceful offline mode with recovery after outages.</li>
            </ul>
          </motion.div>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link to="/contact"><Cpu className="mr-2" size={18}/>Discuss an IoT project</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleIoTEmbeddedEn;

