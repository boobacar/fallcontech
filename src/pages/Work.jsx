import React from "react";
import SEO from "@/components/SEO";
import { useI18n } from "@/i18n";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import clinicImg from "@/assets/clinic-dabia.webp";
import telimanImg from "@/assets/telimanshare.webp";
import miroirImg from "@/assets/miroir-foncier.webp";
import whatsappImg from "@/assets/articles/whatsapp-automation.webp";
import iotImg from "@/assets/articles/iot-esp32.svg";
import eaxperienceImg from "../assets/eaxperience.webp";
import hgCuisineImg from "@/assets/hg-cuisine.webp";

const Work = () => {
  const { t } = useI18n();
  const projects = [
    {
      title: t("work.projects.hgcuisine.title"),
      category: t("work.projects.hgcuisine.category"),
      description: t("work.projects.hgcuisine.description"),
      result: t("work.projects.hgcuisine.result"),
      tags: [
        t("work.projects.hgcuisine.tags.0"),
        t("work.projects.hgcuisine.tags.1"),
        t("work.projects.hgcuisine.tags.2"),
      ],
      link: "/case-study/hg-cuisine",
      img: hgCuisineImg,
      site: "https://hg-cuisine.vercel.app",
    },
    {
      title: t("work.projects.clinic.title"),
      category: t("work.projects.clinic.category"),
      description: t("work.projects.clinic.description"),
      result: t("work.projects.clinic.result"),
      tags: [
        t("work.projects.clinic.tags.0"),
        t("work.projects.clinic.tags.1"),
        t("work.projects.clinic.tags.2"),
      ],
      link: "/case-study/clinic",
      img: clinicImg,
      site: "https://www.cliniquedentairedabia.com",
    },
    {
      title: t("work.projects.miroir.title"),
      category: t("work.projects.miroir.category"),
      description: t("work.projects.miroir.description"),
      result: t("work.projects.miroir.result"),
      tags: [
        t("work.projects.miroir.tags.0"),
        t("work.projects.miroir.tags.1"),
        t("work.projects.miroir.tags.2"),
      ],
      link: "/case-study/miroir-foncier",
      img: miroirImg,
      site: "https://miroirfoncier.com",
    },
    {
      title: t("work.projects.teliman.title"),
      category: t("work.projects.teliman.category"),
      description: t("work.projects.teliman.description"),
      result: t("work.projects.teliman.result"),
      tags: [
        t("work.projects.teliman.tags.0"),
        t("work.projects.teliman.tags.1"),
        t("work.projects.teliman.tags.2"),
      ],
      link: "/case-study/telimanshare",
      img: telimanImg,
      site: "https://www.telimanshare.com",
    },
    {
      title: t("work.projects.whatsapp.title"),
      category: t("work.projects.whatsapp.category"),
      description: t("work.projects.whatsapp.description"),
      result: t("work.projects.whatsapp.result"),
      tags: [
        t("work.projects.whatsapp.tags.0"),
        t("work.projects.whatsapp.tags.1"),
        t("work.projects.whatsapp.tags.2"),
      ],
      link: "/case-study/whatsapp",
      img: whatsappImg,
    },
    {
      title: t("work.projects.eaxperience.title"),
      category: t("work.projects.eaxperience.category"),
      description: t("work.projects.eaxperience.description"),
      result: t("work.projects.eaxperience.result"),
      tags: [
        t("work.projects.eaxperience.tags.0"),
        t("work.projects.eaxperience.tags.1"),
        t("work.projects.eaxperience.tags.2"),
      ],
      link: "#", // No case study yet, maybe link to site directly or leave empty
      img: eaxperienceImg, // Placeholder image - User should update this
      site: "https://www.eaxperience.com",
    },
  ];

  const siteUrl =
    import.meta.env.VITE_SITE_URL ||
    (typeof window !== "undefined" ? window.location.origin : "");
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${siteUrl}${p.link}`,
      item: {
        "@type": "CreativeWork",
        name: p.title,
        description: p.description,
        image: p.img ? `${siteUrl}${p.img}` : undefined,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projets",
        item: `${siteUrl}/work`,
      },
    ],
  };

  return (
    <>
      <SEO
        path="/work"
        title={t("work.pageTitle") + " — Fallcon Tech"}
        description={t("work.lead")}
        jsonLd={[itemListJsonLd, breadcrumbJsonLd]}
      />

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="vt-title text-5xl md:text-6xl font-bold mb-6 gradient-text">
              {t("work.pageTitle")}
            </h1>
            <p className="text-xl text-foreground/80">{t("work.lead")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="aspect-video bg-background relative overflow-hidden">
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={project.img}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="bg-green-100 border-l-4 border-green-500 p-3 mb-4 rounded">
                    <p className="text-sm font-semibold text-green-800">
                      {project.result}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid gap-2">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary/5"
                    >
                      <Link to={project.link}>
                        {t("work.viewCaseStudy")}{" "}
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                    {project.site && (
                      <Button asChild className="w-full" variant="secondary">
                        <a
                          href={project.site}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("work.viewSite")}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              {t("work.iotMini.title")}
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              {t("work.iotMini.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => {
              const items = [
                {
                  title: t("work.iotMini.items.0.title"),
                  desc: t("work.iotMini.items.0.desc"),
                  linkFr:
                    "/article/integrer-paiement-machine-eau-esp32-senegal",
                },
                {
                  title: t("work.iotMini.items.1.title"),
                  desc: t("work.iotMini.items.1.desc"),
                  linkFr:
                    "/article/developpement-iot-embarque-senegal-arduino-esp32",
                },
                {
                  title: t("work.iotMini.items.2.title"),
                  desc: t("work.iotMini.items.2.desc"),
                  linkFr:
                    "/article/telemetrie-maintenance-predictive-iot-senegal",
                },
              ];
              const { title, desc, linkFr } = items[i];
              const href = linkFr;
              return (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src={iotImg}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                      {title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{desc}</p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={href}>{t("work.viewCaseStudy")}</Link>
                    </Button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              {t("work.cta.title")}
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              {t("work.cta.subtitle")}
            </p>
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/contact">
                {t("work.cta.button")} <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            {t("work.recentArticles")}
          </h2>
          <ul className="grid md:grid-cols-3 gap-4 text-blue-600 text-sm">
            <li>
              <Link
                to="/article/seo-basics-senegalese-businesses"
                className="hover:underline"
              >
                SEO local au Sénégal — Guide
              </Link>
            </li>
            <li>
              <Link
                to="/article/automating-follow-ups-whatsapp-senegal"
                className="hover:underline"
              >
                Automatiser les suivis WhatsApp
              </Link>
            </li>
            <li>
              <Link
                to="/article/choosing-right-tech-stack"
                className="hover:underline"
              >
                Choisir la bonne stack technique
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Work;
