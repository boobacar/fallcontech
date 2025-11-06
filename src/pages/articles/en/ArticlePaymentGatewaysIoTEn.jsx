import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgHero from "@/assets/articles/payment-gateways.svg";

const ArticlePaymentGatewaysIoTEn = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/en/article/payment-gateways-iot-wave-orange-free";
  const title = "Payment gateways for IoT: Wave, Orange Money, Free Money";
  const description = "Comparison and best practices to add mobile payments to IoT machines in Senegal (security, server‑side confirmations, reliability).";

  return (
    <>
      <SEO
        path={path}
        title={`IoT payments — ${title}`}
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
            articleSection: "Payments",
            keywords: "Wave, Orange Money, Free Money, payment gateway, IoT, security, Senegal",
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
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Resources", to: "/resources" }, { label: "IoT payments" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-lg text-muted-foreground">Reliability, security and server‑side confirmations</p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 text-sm">
            Equipping a machine? See our {" "}
            <Link to="/services" className="text-blue-600 hover:underline">IoT payment integration services</Link>.
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <img alt="Cards representing different payment gateways connected to an IoT machine" className="w-full rounded-2xl shadow-xl mb-12" src={imgHero} loading="lazy" decoding="async" />

            <p>
              For IoT solutions (dispensers, kiosks, automation), accepting mobile payments is a strong lever.
              These are the non‑technical best practices to integrate <strong>Wave</strong>, <strong>Orange Money</strong>
              and <strong>Free Money</strong> reliably.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Essential practices</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li><strong>Server‑side validation</strong>: the machine only acts after a secure confirmation.</li>
              <li><strong>De‑duplication</strong>: avoid double execution using unique references.</li>
              <li><strong>Security</strong>: encrypted connections, protected secrets, timestamped logs.</li>
              <li><strong>Resilience</strong>: keep operating offline and catch up when the network returns.</li>
              <li><strong>Traceability</strong>: event logs, export and operator alerts.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Choosing a gateway</h2>
            <p>
              Your choice depends on collection method, fees, SLAs and the availability of test environments.
              An aggregator can simplify the architecture if you target multiple payment methods.
            </p>
          </motion.div>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link to="/contact"><Shield className="mr-2" size={18}/>Evaluate an IoT payment integration</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticlePaymentGatewaysIoTEn;

