import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgHero from "@/assets/articles/iot-esp32.svg";

const ArticlePaymentMachineEn = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/en/article/esp32-water-vending-mobile-payments-senegal";
  const title = "Add mobile payments to a water vending machine (ESP32)";
  const description = "Wave, Orange Money and Free Money integration for kiosks and vending machines with ESP32 — dependable approach, security and go‑live.";

  return (
    <>
      <SEO
        path={path}
        title={`IoT Developer in Senegal — ${title}`}
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
            keywords: "IoT developer Senegal, ESP32, Arduino, mobile payments, Wave, Orange Money, Free Money, water vending machine",
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
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Resources", to: "/resources" }, { label: "Machine payments" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-lg text-muted-foreground">Wave, Orange Money, Free Money — security, testing and reliable rollout</p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 text-sm">
            Looking for a developer for your machine? See our {" "}
            <Link to="/services" className="text-blue-600 hover:underline">IoT & embedded services</Link>.
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <img alt="Diagram of a mobile payment integration on ESP32 for a water vending machine" className="w-full rounded-2xl shadow-xl mb-12" src={imgHero} loading="lazy" decoding="async" />

            <p>
              More and more kiosks and water vending machines in Senegal need to accept
              mobile payments (Wave, Orange Money, Free Money). With <strong>ESP32</strong>, we deliver
              <strong>reliable, secure and operations‑ready</strong> solutions. Here is how we approach
              these projects to guarantee practical results.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">What we deliver</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li><strong>Machine control</strong> (valves, flow/volume sensors, display).</li>
              <li><strong>Mobile payments</strong> with <em>server‑side</em> confirmations via payment partner.</li>
              <li><strong>Secure backend</strong> to validate and log transactions.</li>
              <li><strong>Offline continuity</strong> with automatic catch‑up when the network returns.</li>
              <li><strong>Actionable monitoring</strong> (levels, errors, counters) on a dashboard.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Process at a glance</h2>
            <ol className="list-decimal list-inside space-y-2 mb-8">
              <li>The customer starts a payment (Wave/OM/Free).</li>
              <li>The <strong>server</strong> securely confirms payment reception.</li>
              <li>The machine dispenses the configured volume.</li>
              <li>Events and counters are logged for support and auditing.</li>
            </ol>

            <h2 className="text-3xl font-bold mt-12 mb-6">Security essentials</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li><strong>Server‑side validation</strong> (the device acts only after confirmation).</li>
              <li><strong>Encrypted connections</strong> and verified confirmations.</li>
              <li><strong>Operator access controls</strong> for safe manual actions.</li>
              <li><strong>Complete logging</strong> (timestamps, payment references).</li>
              <li><strong>Secure remote updates</strong> and strong credentials.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <p className="text-sm">
                Need help equipping a water vending machine? We deliver robust ESP32/Arduino solutions
                with Wave / Orange Money / Free Money integrations, ready for daily operations.
              </p>
            </div>
          </motion.div>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link to="/contact"><CreditCard className="mr-2" size={18}/>Discuss a payment integration</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticlePaymentMachineEn;

