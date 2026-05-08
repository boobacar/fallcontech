import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Code2, Globe, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const site = "https://fallcontech.com";

const pages = {
  web: {
    path: "/services/web-development-senegal",
    icon: Globe,
    eyebrow: "Web Development in Senegal",
    title: "Web Development in Senegal for serious businesses",
    lead: "Fallcon Tech builds fast websites, business platforms and SEO-ready web applications for companies in Dakar and across Senegal.",
    serviceName: "Web development in Senegal",
    serviceType: "Web development",
    features: [
      "Business websites built for Google visibility and conversion",
      "React frontends with fast loading on mobile networks",
      "SEO structure, sitemap, metadata and Search Console setup",
      "Contact forms, WhatsApp CTAs and lead tracking",
      "Custom dashboards, admin panels and client portals",
    ],
    outcomes: ["More qualified leads", "Faster website", "Clearer business positioning"],
    faq: [
      {
        q: "Do you build websites for companies in Senegal?",
        a: "Yes. We build professional websites and web applications for companies in Dakar and across Senegal, with SEO, mobile performance and conversion tracking included.",
      },
      {
        q: "Can you work with an existing website?",
        a: "Yes. We can audit, redesign or rebuild an existing website when performance, SEO or conversion is blocking growth.",
      },
      {
        q: "Do you provide SEO with web development?",
        a: "Yes. Technical SEO, clean metadata, sitemap generation, structured pages and Search Console setup are part of our web development process.",
      },
    ],
    related: [
      { to: "/services/creation-site-web-dakar", label: "Création de site internet au Sénégal" },
      { to: "/services/agence-seo-senegal", label: "SEO agency in Senegal" },
    ],
  },
  mobile: {
    path: "/services/mobile-app-development-senegal",
    icon: Smartphone,
    eyebrow: "Mobile App Development in Senegal",
    title: "Mobile app development in Senegal for real business workflows",
    lead: "We design and develop practical mobile apps for sales, operations, customer service and field teams in Senegal.",
    serviceName: "Mobile app development in Senegal",
    serviceType: "Mobile app development",
    features: [
      "Android and iOS app planning with a clear MVP scope",
      "React Native interfaces designed for local mobile usage",
      "Authentication, roles, notifications and business workflows",
      "Wave, Orange Money or WhatsApp integrations when needed",
      "Admin dashboard and analytics for operational visibility",
    ],
    outcomes: ["Clear MVP roadmap", "Better field operations", "Mobile-first customer experience"],
    faq: [
      {
        q: "How much does a mobile app cost in Senegal?",
        a: "The budget depends on workflows, integrations and admin needs. We usually start with a focused MVP so the first version can be tested quickly.",
      },
      {
        q: "Can you integrate local payments?",
        a: "Yes. We can plan integrations with Wave, Orange Money or other local payment providers depending on the business model.",
      },
      {
        q: "Do you build both the mobile app and dashboard?",
        a: "Yes. Most serious mobile projects need an admin dashboard to manage users, content, transactions or reports.",
      },
    ],
    related: [
      { to: "/article/developpement-application-mobile-dakar", label: "Mobile app development guide for Dakar" },
      { to: "/services", label: "All services" },
    ],
  },
  software: {
    path: "/services/software-development-senegal",
    icon: Code2,
    eyebrow: "Software Development in Senegal",
    title: "Custom software development in Senegal",
    lead: "We build business software, internal platforms and automation tools that replace fragile spreadsheets, manual processes and scattered WhatsApp follow-ups.",
    serviceName: "Software development in Senegal",
    serviceType: "Custom software development",
    features: [
      "Custom CRM, stock, billing, booking or document workflows",
      "Role-based access, audit trail and secure document handling",
      "Dashboards for managers and operational teams",
      "WhatsApp, email, payment or IoT integrations",
      "Cloud deployment, monitoring and maintenance options",
    ],
    outcomes: ["Less manual work", "Cleaner reporting", "More reliable operations"],
    faq: [
      {
        q: "What kind of software do you build?",
        a: "We build custom web platforms for business operations: CRM, stock management, document workflows, booking systems, dashboards and automation tools.",
      },
      {
        q: "Can you replace Excel-based processes?",
        a: "Yes. We turn recurring spreadsheet workflows into structured software with access control, reporting and safer data handling.",
      },
      {
        q: "Do you maintain the software after launch?",
        a: "Yes. We can provide maintenance, monitoring, improvements and support after the first version goes live.",
      },
    ],
    related: [
      { to: "/article/application-gestion-sur-mesure-senegal", label: "Custom business app guide" },
      { to: "/services/automatisation-whatsapp-senegal", label: "WhatsApp automation" },
    ],
  },
};

function ServiceEnglishPage({ page }) {
  const Icon = page.icon;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.serviceName,
      serviceType: page.serviceType,
      description: page.lead,
      provider: {
        "@type": "LocalBusiness",
        name: "Fallcon Tech",
        url: site,
        telephone: "+221776260020",
        address: { "@type": "PostalAddress", addressLocality: "Dakar", addressCountry: "SN" },
      },
      areaServed: [{ "@type": "Country", name: "Senegal" }, { "@type": "City", name: "Dakar" }],
      offers: { "@type": "Offer", url: `${site}/contact` },
      url: `${site}${page.path}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${site}/services` },
        { "@type": "ListItem", position: 3, name: page.serviceName, item: `${site}${page.path}` },
      ],
    },
  ];

  return (
    <>
      <SEO
        path={page.path}
        title={`${page.eyebrow} | Fallcon Tech Dakar`}
        description={page.lead}
        lang="en"
        imageAlt={`${page.eyebrow} by Fallcon Tech`}
        jsonLd={jsonLd}
      />

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6">
              <Icon className="text-primary-foreground" size={30} />
            </div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-4">{page.eyebrow}</p>
            <h1 className="vt-title text-4xl md:text-6xl font-bold mb-6 gradient-text">{page.title}</h1>
            <p className="text-xl text-foreground/80">{page.lead}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-4">What we deliver</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Practical engineering with local business context, clean implementation and measurable outcomes.
                </p>
                <ul className="space-y-3 mb-8">
                  {page.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link to="/contact">
                    Discuss your project <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </div>

              <div className="bg-primary/5 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-bold text-2xl mb-6 text-primary">Expected outcomes</h3>
                <div className="space-y-4 mb-10">
                  {page.outcomes.map((outcome, index) => (
                    <div key={index} className="bg-card rounded-xl p-4 shadow-md">
                      <p className="font-semibold text-blue-600">{outcome}</p>
                    </div>
                  ))}
                </div>
                <h3 className="font-bold text-2xl mb-4 text-primary">Related pages</h3>
                <div className="flex flex-col gap-3">
                  {page.related.map((item) => (
                    <Link key={item.to} to={item.to} className="text-blue-600 hover:underline">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-primary">FAQ</h2>
          <div className="space-y-6">
            {page.faq.map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function WebDevelopmentSenegal() {
  return <ServiceEnglishPage page={pages.web} />;
}

export function MobileAppDevelopmentSenegal() {
  return <ServiceEnglishPage page={pages.mobile} />;
}

export function SoftwareDevelopmentSenegal() {
  return <ServiceEnglishPage page={pages.software} />;
}
