import React from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import clinicImg from "@/assets/clinic-dabia.png";
import telimanImg from "@/assets/telimanshare.png";
import whatsappImg from "@/assets/articles/whatsapp-automation.webp";

const Work = () => {
  const projects = [
    {
      title: "Site Web Clinique DABIA",
      category: "Santé",
      description:
        "Site web de clinique moderne avec système de réservation de rendez-vous en ligne",
      result:
        "+70% d'utilisateurs mobiles ; demandes de rendez-vous automatisées",
      tags: ["React", "SEO", "Système de Réservation"],
      link: "/case-study/clinic",
      img: clinicImg,
      site: "https://www.cliniquedentairedabia.com",
      image: "Site web de clinique médicale moderne avec interface de réservation de rendez-vous et portail patient",
    },
    {
      title: "Plateforme TelimanShare",
      category: "Outils Internes",
      description:
        "Plateforme sécurisée de partage de documents avec contrôle d'accès et suivi d'activité",
      result:
        "Moins d'allers-retours par e-mail ; accès sécurisé et journaux d'activité",
      tags: ["React", "Firebase", "Sécurité"],
      link: "/case-study/telimanshare",
      img: telimanImg,
      site: "https://www.telimanshare.com",
      image: "Tableau de bord d'une plateforme de partage de documents sécurisée avec gestion de fichiers et journaux d'activité",
    },
    {
      title: "Automatisation Anniversaires WhatsApp",
      category: "Automatisation",
      description:
        "Système d'engagement client automatisé pour les messages d'anniversaire",
      result:
        "100% des SMS d'anniversaire envoyés quotidiennement sans travail manuel",
      tags: ["API WhatsApp", "Automatisation", "Node.js"],
      link: "/case-study/whatsapp",
      img: whatsappImg,
      image: "Tableau de bord d'automatisation WhatsApp montrant le flux de messages d'anniversaire et les analyses",
    },
  ];

  const siteUrl = import.meta.env.VITE_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '');
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
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Projets", item: `${siteUrl}/work` },
    ],
  };

  return (
    <>
      <SEO
        path="/work"
        title="Études de cas — Résultats concrets au Sénégal"
        description="Sites de cliniques, plateformes internes et automatisations WhatsApp: résultats concrets et gains mesurables."
        jsonLd={[itemListJsonLd, breadcrumbJsonLd]}
      />

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Nos derniers projets
            </h1>
            <p className="text-xl text-foreground/80">
              Projets réels, résultats concrets pour les entreprises à travers
              le Sénégal
            </p>
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
                        Voir l'étude de cas{" "}
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                    {project.site && (
                      <Button asChild className="w-full" variant="secondary">
                        <a href={project.site} target="_blank" rel="noopener noreferrer">
                          Voir le site
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
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Vous voulez des résultats similaires ?
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Discutons de la manière dont nous pouvons créer une solution sur
              mesure pour votre entreprise
            </p>
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/contact">
                Démarrer votre projet <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-primary">Articles récents</h2>
          <ul className="grid md:grid-cols-3 gap-4 text-blue-600 text-sm">
            <li><Link to="/article/seo-basics-senegalese-businesses" className="hover:underline">SEO local au Sénégal — Guide</Link></li>
            <li><Link to="/article/automating-follow-ups-whatsapp-senegal" className="hover:underline">Automatiser les suivis WhatsApp</Link></li>
            <li><Link to="/article/choosing-right-tech-stack" className="hover:underline">Choisir la bonne stack technique</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Work;
