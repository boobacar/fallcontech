import { useEffect, useRef } from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n";
import { confettiBurst } from "@/lib/confetti";
import { interpolate } from "flubber";
import {
  ReactLogo,
  TailwindLogo,
  NodeLogo,
  FirebaseLogo,
  GitLogo,
  VercelLogo,
  CICDLogo,
  TestingLogo,
} from "@/components/TechIcons";
import clinicImg from "@/assets/clinic-dabia.webp";

import imgTroubleshooting from "@/assets/articles/troubleshooting.png";
import imgGeneralist from "@/assets/articles/it-support.png";
import imgMaintenance from "@/assets/articles/maintenance.png";
import telimanImg from "@/assets/telimanshare.webp";
import eaxperienceImg from "@/assets/eaxperience.webp";

const Home = () => {
  const { t } = useI18n();
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const services = [
    {
      title: t("home.servicesCards.web.title"),
      description: t("home.servicesCards.web.description"),
      benefits: [
        t("home.servicesCards.web.benefits.0"),
        t("home.servicesCards.web.benefits.1"),
        t("home.servicesCards.web.benefits.2"),
      ],
    },
    {
      title: t("home.servicesCards.platforms.title"),
      description: t("home.servicesCards.platforms.description"),
      benefits: [
        t("home.servicesCards.platforms.benefits.0"),
        t("home.servicesCards.platforms.benefits.1"),
        t("home.servicesCards.platforms.benefits.2"),
      ],
    },
    {
      title: t("home.servicesCards.mvp.title"),
      description: t("home.servicesCards.mvp.description"),
      benefits: [
        t("home.servicesCards.mvp.benefits.0"),
        t("home.servicesCards.mvp.benefits.1"),
        t("home.servicesCards.mvp.benefits.2"),
      ],
    },
  ];

  // ... existing imports

  const caseStudies = [
    {
      title: t("home.caseStudies.eaxperience.title"),
      result: t("home.caseStudies.eaxperience.result"),
      description: t("home.caseStudies.eaxperience.description"),
      link: "/work",
      img: eaxperienceImg,
    },
    {
      title: t("home.caseStudies.teliman.title"),
      result: t("home.caseStudies.teliman.result"),
      description: t("home.caseStudies.teliman.description"),
      link: "/case-study/telimanshare",
      img: telimanImg,
    },
    {
      title: t("home.caseStudies.clinic.title"),
      result: t("home.caseStudies.clinic.result"),
      description: t("home.caseStudies.clinic.description"),
      link: "/case-study/clinic",
      img: clinicImg,
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: t("home.process.steps.0.title"),
      description: t("home.process.steps.0.description"),
    },
    {
      number: "02",
      title: t("home.process.steps.1.title"),
      description: t("home.process.steps.1.description"),
    },
    {
      number: "03",
      title: t("home.process.steps.2.title"),
      description: t("home.process.steps.2.description"),
    },
    {
      number: "04",
      title: t("home.process.steps.3.title"),
      description: t("home.process.steps.3.description"),
    },
  ];

  const faqs = [
    { q: t("home.faq.items.0.q"), a: t("home.faq.items.0.a") },
    { q: t("home.faq.items.1.q"), a: t("home.faq.items.1.a") },
    { q: t("home.faq.items.2.q"), a: t("home.faq.items.2.a") },
    { q: t("home.faq.items.3.q"), a: t("home.faq.items.3.a") },
    { q: t("home.faq.items.4.q"), a: t("home.faq.items.4.a") },
    { q: t("home.faq.items.5.q"), a: t("home.faq.items.5.a") },
  ];

  const techStack = [
    { name: "React", icon: <ReactLogo className="h-8 w-8 text-primary" /> },
    {
      name: "Tailwind CSS",
      icon: <TailwindLogo className="h-8 w-8 text-primary" />,
    },
    { name: "Node.js", icon: <NodeLogo className="h-8 w-8 text-primary" /> },
    {
      name: "Firebase",
      icon: <FirebaseLogo className="h-8 w-8 text-primary" />,
    },
    { name: "Git/GitHub", icon: <GitLogo className="h-8 w-8 text-primary" /> },
    { name: "Vercel", icon: <VercelLogo className="h-8 w-8 text-primary" /> },
    { name: "CI/CD", icon: <CICDLogo className="h-8 w-8 text-primary" /> },
    { name: "Testing", icon: <TestingLogo className="h-8 w-8 text-primary" /> },
  ];

  return (
    <>
      {(() => {
        const siteUrl =
          import.meta.env.VITE_SITE_URL ||
          (typeof window !== "undefined" ? window.location.origin : "");
        const latestPosts = [
          {
            title: "Intégrer un paiement mobile dans une machine de vente d’eau (ESP32)",
            excerpt: "Approche fiable, sécurité et mise en service (Wave/OM/Free).",
            category: "IoT",
            link: "/article/integrer-paiement-machine-eau-esp32-senegal",
          },
          {
            title: "Développement IoT & embarqué (Arduino/ESP32)",
            excerpt: "Capteurs, contrôle, mises à jour à distance et tableaux de bord.",
            category: "IoT",
            link: "/article/developpement-iot-embarque-senegal-arduino-esp32",
          },
          {
            title: "Télémétrie & maintenance prédictive IoT",
            excerpt: "Capteurs, alertes et décisions guidées par la donnée pour réduire les pannes.",
            category: "IoT",
            link: "/article/telemetrie-maintenance-predictive-iot-senegal",
          },
        ];
        const itemListJsonLd = {
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: latestPosts.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: siteUrl + p.link,
            item: { "@type": "BlogPosting", name: p.title },
          })),
        };
        return (
          <SEO
            path="/"
            title="Agence Web Dakar & SEO Sénégal | Fallcon Tech"
            description="Fallcon Tech, agence web à Dakar : création de site internet, SEO local au Sénégal, automatisation WhatsApp et solutions IoT pour PME."
            jsonLd={[
              itemListJsonLd,
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "Fallcon Tech",
                image: siteUrl + "/assets/logo.webp",
                "@id": siteUrl,
                url: siteUrl,
                telephone: "+221776260020",
                priceRange: "$$",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Dakar",
                  addressLocality: "Dakar",
                  addressCountry: "SN",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 14.7167,
                  longitude: -17.4677,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              },
            ]}
          />
        );
      })()}

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg vt-hero-bg"
        data-halo-container
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="mesh-bg" />
          <div className="particles-bg" />
          <div className="cursor-halo" data-halo></div>
          <MorphingShape />
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="vt-title text-5xl md:text-7xl font-bold mt-10 mb-6 gradient-text"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {t("home.hero.title")
                .trim()
                .split(/\s+/)
                .map((w, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.02 * i + 0.2 }}
                    className="inline-block mr-4 md:mr-6"
                  >
                    {w}
                  </motion.span>
                ))}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-foreground/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t("home.hero.subtitle")}
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {[
                t("home.hero.bullets.0"),
                t("home.hero.bullets.1"),
                t("home.hero.bullets.2"),
                t("home.hero.bullets.3"),
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-md"
                >
                  <CheckCircle2
                    className="text-blue-500 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="text-lg px-8 glow-btn"
                data-magnetic
                data-ripple
                onClick={() => confettiBurst({ particleCount: 60, spread: 60 })}
              >
                <Link to="/contact">
                  {t("common.cta.freeConsultation")}{" "}
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8"
                data-magnetic
                data-ripple
              >
                <Link to="/work">{t("common.cta.viewProjects")}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background section-sep">
        <div className="container mx-auto px-4">
          <div className="floating-blobs" aria-hidden />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            data-parallax
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              {t("home.sections.services.title")}
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              {t("home.sections.services.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <CheckCircle2
                        className="text-blue-500 flex-shrink-0"
                        size={16}
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-bg section-sep">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            data-parallax
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              {t("home.sections.caseStudies.title")}
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              {t("home.sections.caseStudies.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={study.img}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {study.description}
                  </p>
                  <div className="bg-green-100 border-l-4 border-green-500 p-3 mb-4 rounded">
                    <p className="text-sm font-semibold text-green-800">
                      {study.result}
                    </p>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full"
                    data-ripple
                    data-magnetic
                  >
                    <Link to={study.link}>
                      {t("home.caseStudies.readCaseStudy")}{" "}
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/work">{t("home.caseStudies.viewAll")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Articles (compact, decision‑maker oriented) */}
      <section className="py-20 bg-background section-sep">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              {t("home.latest.title")}
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              {t("home.latest.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {(() => {
              const posts = [
                {
                  title: t("articles.troubleshooting.title"),
                  excerpt: t("articles.troubleshooting.seo.description"),
                  category: "Information",
                  link: "/article/depannage-informatique-5-problemes-courants",
                  img: imgTroubleshooting,
                },
                {
                  title: t("articles.generalist.title"),
                  excerpt: t("articles.generalist.seo.description"),
                  category: "Strategy",
                  link: "/article/pourquoi-informaticien-generaliste-dakar",
                  img: imgGeneralist,
                },
                {
                  title: t("articles.maintenance.title"),
                  excerpt: t("articles.maintenance.seo.description"),
                  category: "Maintenance",
                  link: "/article/maintenance-nettoyage-pc-senegal",
                  img: imgMaintenance,
                },
              ];
              return posts.map((post, idx) => (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <Link to={post.link}>
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        src={post.img}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-500">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-500 font-semibold text-sm flex items-center gap-1">
                          {t("resources.latest.readMore")}{" "}
                          <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ));
            })()}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              {t("home.process.title")}
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              {t("home.process.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="text-5xl font-bold gradient-text mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-blue-500"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              {t("home.tech.title")}
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-12">
              {t("home.tech.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center gap-3"
              >
                {tech.icon}
                <span className="font-semibold text-foreground">
                  {tech.name}
                </span>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              {t("home.faq.title")}
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-md"
              >
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t("home.cta.title")}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
              {t("home.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8"
              >
                <Link to="/contact">{t("common.cta.freeConsultation")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground bg-background text-primary hover:bg-primary-foreground/10 hover:text-green-200 text-lg px-8"
              >
                <a
                  href="https://wa.me/221776260020"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("common.cta.whatsapp")}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;

function MorphingShape() {
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const shapes = useRef([
    "M122 50c40-40 110-40 150 0s40 110 0 150-110 40-150 0-40-110 0-150Z",
    "M80 120c20-60 120-90 170-40s30 120-30 150-120-10-140-70Z",
    "M60 100c50-70 160-70 210 0s-10 150-105 140S10 170 60 100Z",
  ]).current;
  const idxRef = useRef(0);
  const raf = useRef(0);
  const interpRef = useRef(null);
  const pathRef = useRef(null);
  const svgRef = useRef(null);
  // Amplitude plus ample tout en gardant une impression de fluidité
  const ampRef = useRef({ x: 80, y: 56, r: 10 });

  useEffect(() => {
    if (reduce) return;
    const duration = 6000;
    let start = performance.now();
    let i = idxRef.current;
    let next = (i + 1) % shapes.length;
    interpRef.current = interpolate(shapes[i], shapes[next], {
      maxSegmentLength: 2,
    });

    const ease = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; // easeInOutCubic

    function frame(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = ease(t);
      const p = interpRef.current ? interpRef.current(eased) : shapes[i];
      if (pathRef.current) pathRef.current.setAttribute("d", p);
      // gentle motion path for the whole shape (lissajous‑like)
      if (svgRef.current) {
        const a = ampRef.current;
        // fréquences plus basses pour un mouvement plus lent et ample
        const x = a.x * Math.sin(now * 0.00016);
        const y = a.y * Math.cos(now * 0.00014);
        const rot = a.r * Math.sin(now * 0.0001);
        const sc = 1.012 + 0.038 * Math.sin(now * 0.00014);
        svgRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg) scale(${sc})`;
      }
      if (t < 1) {
        raf.current = requestAnimationFrame(frame);
      } else {
        // next cycle
        i = next;
        next = (next + 1) % shapes.length;
        idxRef.current = i;
        interpRef.current = interpolate(shapes[i], shapes[next], {
          maxSegmentLength: 2,
        });
        start = performance.now();
        raf.current = requestAnimationFrame(frame);
      }
    }
    raf.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf.current);
  }, [reduce, shapes]);

  return (
    <svg
      ref={svgRef}
      className="vt-hero-shape pointer-events-none absolute -top-16 right-0 md:right-10 w-[320px] md:w-[420px] opacity-25"
      viewBox="0 0 320 320"
      aria-hidden
      style={{ willChange: "transform" }}
    >
      <defs>
        <linearGradient id="morphG" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        d={shapes[0]}
        fill="url(#morphG)"
        shapeRendering="optimizeSpeed"
      />
    </svg>
  );
}
