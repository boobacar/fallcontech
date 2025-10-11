import React from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import telimanImg from "@/assets/telimanshare.webp";
import whatsappImg from "@/assets/articles/whatsapp-automation.webp";

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const services = [
    {
      title: "Conception de Sites Web & SEO",
      description:
        "Sites mobile-first, ultra-rapides, qui se classent bien et convertissent les visiteurs en clients.",
      benefits: [
        "Optimisé pour le SEO",
        "Design mobile-first",
        "Vitesses de chargement rapides",
      ],
    },
    {
      title: "Plateformes Internes & Automatisation",
      description:
        "Tableaux de bord personnalisés, portails documentaires et workflows WhatsApp/SMS qui font gagner du temps.",
      benefits: [
        "Automatisation des workflows",
        "Contrôle d'accès sécurisé",
        "Suivi des activités",
      ],
    },
    {
      title: "Développement de MVP & Startups",
      description:
        "Prototypage rapide avec React & Firebase pour lancer votre idée de startup en quelques semaines.",
      benefits: [
        "Déploiement rapide",
        "Architecture évolutive",
        "Fonctionnalités en temps réel",
      ],
    },
  ];

  const caseStudies = [
    {
      title: "Site Web Clinique DABIA",
      result:
        "+70% d'utilisateurs mobiles ; demandes de rendez-vous automatisées",
      description:
        "Site web de clinique moderne avec système de réservation en ligne",
      link: "/case-study/clinic",
      img: clinicImg,
    },
    {
      title: "Plateforme TelimanShare",
      result:
        "Moins d'allers-retours par e-mail ; accès sécurisé et journaux d'activité",
      description: "Plateforme interne de documents avec contrôle d'accès",
      link: "/case-study/telimanshare",
      img: telimanImg,
    },
    {
      title: "Automatisation Anniversaires WhatsApp",
      result:
        "100% des SMS d'anniversaire envoyés quotidiennement sans intervention manuelle",
      description: "Système d'engagement client automatisé",
      link: "/case-study/whatsapp",
      img: whatsappImg,
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Découverte",
      description:
        "Nous comprenons vos objectifs, votre public et vos exigences",
    },
    {
      number: "02",
      title: "Prototype",
      description: "Maquettes et wireframes rapides pour votre approbation",
    },
    {
      number: "03",
      title: "Construction",
      description:
        "Développement avec des technologies modernes et les meilleures pratiques",
    },
    {
      number: "04",
      title: "Lancement & Maintenance",
      description: "Déployer, surveiller et améliorer continuellement",
    },
  ];

  const faqs = [
    {
      q: "Combien de temps dure un projet typique ?",
      a: "Sites simples : 1-2 semaines. Plateformes complexes : 4-8 semaines. MVPs : 2-4 semaines.",
    },
    {
      q: "Quelles sont vos fourchettes de prix ?",
      a: "Sites de démarrage à partir de 350 000 F CFA, sites professionnels à partir de 1 000 000 F CFA, plateformes personnalisées à partir de 2 500 000 F CFA.",
    },
    {
      q: "Proposez-vous des révisions ?",
      a: "Oui ! 2 à 3 séries de révisions sont incluses dans tous les forfaits.",
    },
    {
      q: "Qu'en est-il de la maintenance ?",
      a: "Des plans de maintenance mensuels sont disponibles à partir de 35 000 F CFA/mois.",
    },
    {
      q: "Mon site sera-t-il optimisé pour le SEO ?",
      a: "Absolument ! Tous les sites incluent le SEO on-page, les sitemaps et la configuration de Google Search Console.",
    },
    {
      q: "Qui est propriétaire du site web ?",
      a: "Vous êtes propriétaire de tout : code, design, contenu et domaine.",
    },
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
        title="Agence web à Dakar — Sites rapides, SEO, automatisations"
        description="Sites rapides, mobile‑first, SEO et automatisations (réservation, WhatsApp) pour cliniques, PME et startups au Sénégal. Consultation gratuite."
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
              Sites web modernes & automatisations qui font grandir votre
              entreprise
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-foreground/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Sites rapides et mobile-first, systèmes de réservation et outils
              personnalisés pour les cliniques, PME et startups.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {[
                "Prêt pour le SEO et ultra-rapide",
                "Réservation en ligne & capture de leads",
                "Outils internes & automatisations sur mesure",
                "Déployé rapidement, maintenu de manière fiable",
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
                  Consultation Gratuite{" "}
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8"
              >
                <Link to="/work">Voir les Projets</Link>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Services Qui Mènent à la Croissance
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour établir et développer votre
              présence numérique
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

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Études de Cas
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Projets réels, résultats concrets pour les entreprises au Sénégal
            </p>
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
                      Lire l'étude de cas{" "}
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Notre Processus
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              De l'idée au lancement en quatre étapes simples
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
              Technologie & Qualité
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-12">
              Stack moderne, meilleures pratiques, résultats fiables
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
              Questions Fréquemment Posées
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
              Prêt à développer votre entreprise ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
              Réservez un appel de 15 minutes et discutons de la manière dont
              nous pouvons vous aider à réussir
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8"
              >
                <Link to="/contact">Consultation Gratuite</Link>
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
                  Discuter sur WhatsApp
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
