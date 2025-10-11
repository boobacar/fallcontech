import React from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n";
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
import miroirImg from "@/assets/miroir-foncier.webp";
import whatsappImg from "@/assets/articles/whatsapp-automation.webp";

const Home = () => {
  const { t, locale } = useI18n();
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const services = [
    {
      title: t('home.servicesCards.web.title'),
      description: t('home.servicesCards.web.description'),
      benefits: [
        t('home.servicesCards.web.benefits.0'),
        t('home.servicesCards.web.benefits.1'),
        t('home.servicesCards.web.benefits.2'),
      ],
    },
    {
      title: t('home.servicesCards.platforms.title'),
      description: t('home.servicesCards.platforms.description'),
      benefits: [
        t('home.servicesCards.platforms.benefits.0'),
        t('home.servicesCards.platforms.benefits.1'),
        t('home.servicesCards.platforms.benefits.2'),
      ],
    },
    {
      title: t('home.servicesCards.mvp.title'),
      description: t('home.servicesCards.mvp.description'),
      benefits: [
        t('home.servicesCards.mvp.benefits.0'),
        t('home.servicesCards.mvp.benefits.1'),
        t('home.servicesCards.mvp.benefits.2'),
      ],
    },
  ];

  const caseStudies = [
    {
      title: t('home.caseStudies.clinic.title'),
      result: t('home.caseStudies.clinic.result'),
      description: t('home.caseStudies.clinic.description'),
      link: "/case-study/clinic",
      img: clinicImg,
    },
    {
      title: t('home.caseStudies.miroir.title'),
      result: t('home.caseStudies.miroir.result'),
      description: t('home.caseStudies.miroir.description'),
      link: "/case-study/miroir-foncier",
      img: miroirImg,
    },
    {
      title: t('home.caseStudies.whatsapp.title'),
      result: t('home.caseStudies.whatsapp.result'),
      description: t('home.caseStudies.whatsapp.description'),
      link: "/case-study/whatsapp",
      img: whatsappImg,
    },
  ];

  const processSteps = [
    { number: "01", title: t('home.process.steps.0.title'), description: t('home.process.steps.0.description') },
    { number: "02", title: t('home.process.steps.1.title'), description: t('home.process.steps.1.description') },
    { number: "03", title: t('home.process.steps.2.title'), description: t('home.process.steps.2.description') },
    { number: "04", title: t('home.process.steps.3.title'), description: t('home.process.steps.3.description') },
  ];

  const faqs = [
    { q: t('home.faq.items.0.q'), a: t('home.faq.items.0.a') },
    { q: t('home.faq.items.1.q'), a: t('home.faq.items.1.a') },
    { q: t('home.faq.items.2.q'), a: t('home.faq.items.2.a') },
    { q: t('home.faq.items.3.q'), a: t('home.faq.items.3.a') },
    { q: t('home.faq.items.4.q'), a: t('home.faq.items.4.a') },
    { q: t('home.faq.items.5.q'), a: t('home.faq.items.5.a') },
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
      <SEO
        path="/"
        title={t('home.seo.title')}
        description={t('home.seo.description')}
      />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {t('home.hero.title')}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-foreground/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t('home.hero.subtitle')}
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {[
                t('home.hero.bullets.0'),
                t('home.hero.bullets.1'),
                t('home.hero.bullets.2'),
                t('home.hero.bullets.3'),
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
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact">
                  {t('common.cta.freeConsultation')}{" "}
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8"
              >
                <Link to="/work">{t('common.cta.viewProjects')}</Link>
              </Button>
            </motion.div>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">{t('home.sections.services.title')}</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">{t('home.sections.services.subtitle')}</p>
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

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">{t('home.sections.caseStudies.title')}</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">{t('home.sections.caseStudies.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
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
                  <Button asChild variant="outline" className="w-full">
                    <Link to={study.link}>
                      {t('home.caseStudies.readCaseStudy')}{" "}
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/work">{t('home.caseStudies.viewAll')}</Link>
            </Button>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">{t('home.process.title')}</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">{t('home.process.subtitle')}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">{t('home.tech.title')}</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-12">{t('home.tech.subtitle')}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">{t('home.faq.title')}</h2>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('home.cta.title')}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">{t('home.cta.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8"
              >
                <Link to="/contact">{t('common.cta.freeConsultation')}</Link>
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
                  {t('common.cta.whatsapp')}
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
