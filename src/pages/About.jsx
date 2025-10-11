import React from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Shield, Zap, Globe, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ReactLogo,
  TailwindLogo,
  NodeLogo,
  FirebaseLogo,
  GitLogo,
  VercelLogo,
} from "@/components/TechIcons";

const About = () => {
  const techStack = [
    {
      name: "React",
      description: "Développement d'UI modernes",
      icon: <ReactLogo className="h-8 w-8" />,
    },
    {
      name: "Tailwind CSS",
      description: "Design magnifique et responsive",
      icon: <TailwindLogo className="h-8 w-8" />,
    },
    {
      name: "Node.js",
      description: "Backend & APIs",
      icon: <NodeLogo className="h-8 w-8" />,
    },
    {
      name: "Firebase",
      description: "Bases de données temps réel",
      icon: <FirebaseLogo className="h-8 w-8" />,
    },
    {
      name: "Git/GitHub",
      description: "Contrôle de version",
      icon: <GitLogo className="h-8 w-8" />,
    },
    {
      name: "Vercel/GoDaddy",
      description: "Hébergement & déploiement",
      icon: (
        <span className="inline-flex items-center gap-2">
          <VercelLogo className="h-8 w-8" />
          <img
            src="https://cdn.simpleicons.org/godaddy"
            alt="GoDaddy"
            className="h-7 w-7"
            loading="lazy"
            decoding="async"
          />
        </span>
      ),
    },
  ];

  const values = [
    {
      icon: Zap,
      title: "Vitesse & Performance",
      description:
        "Sites web ultra-rapides optimisés pour les Core Web Vitals et le SEO",
    },
    {
      icon: Shield,
      title: "Sécurité & Fiabilité",
      description:
        "Contrôles d'accès, journaux d'audit, sauvegardes et surveillance continue",
    },
    {
      icon: Code,
      title: "Qualité & Tests",
      description:
        "Tests unitaires, tests fonctionnels, pipelines CI/CD pour un code fiable",
    },
    {
      icon: Globe,
      title: "Expertise Locale",
      description:
        "Bilingue (FR/EN), focus sur le Sénégal, familier avec l'hébergement local",
    },
  ];

  return (
    <>
      <SEO
        path="/about"
        title="À propos — Processus & stack technique (Dakar)"
        description="Notre méthode de développement web, stack moderne et valeurs: performance, sécurité et résultats pour les entreprises au Sénégal."
      />

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Construire des Solutions Numériques Qui Fonctionnent
            </h1>
            <p className="text-xl text-foreground/80">
              Technologie moderne, processus éprouvés et expertise locale pour
              les entreprises au Sénégal
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-primary">
                Notre Approche
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nous combinons des technologies web modernes avec des pratiques
                de développement éprouvées pour fournir des solutions rapides,
                sécurisées et évolutives.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Chaque projet suit un processus structuré : Découverte →
                Prototype → Construction → Lancement & Maintenance. Cela
                garantit une communication claire, des délais prévisibles et des
                résultats exceptionnels.
              </p>
              <p className="text-lg text-muted-foreground">
                Que vous ayez besoin d'un site web époustouflant, d'une
                plateforme interne sur mesure ou d'un MVP pour votre startup,
                nous avons l'expertise pour donner vie à votre vision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8"
            >
              <img
                alt="Espace de travail de développement web moderne"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
                src="https://images.unsplash.com/photo-1699843526854-250e2aca1a60"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Nos Valeurs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
                    <value.icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Notre Stack Technique
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {techStack.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card border-2 border-border rounded-xl p-6 hover:border-blue-400 transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {tech.icon}
                    <h3 className="text-xl font-bold text-blue-600">
                      {tech.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {tech.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Pourquoi nous choisir ?
            </h2>
            <div className="space-y-4">
              {[
                "Support bilingue (Français & Anglais)",
                "Expertise locale du marché sénégalais",
                "Délais de livraison rapides (1-8 semaines)",
                "Tarification transparente sans frais cachés",
                "Maintenance et support continus",
                "Optimisé pour le SEO dès le premier jour",
                "Design responsive mobile-first",
                "Infrastructure sécurisée et fiable",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-md"
                >
                  <CheckCircle2
                    className="text-blue-600 flex-shrink-0"
                    size={24}
                  />
                  <span className="text-lg text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Travaillons Ensemble
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
              Prêt à démarrer votre projet ? Réservez une consultation gratuite
              dès aujourd'hui
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8"
            >
              <Link to="/contact">Démarrer</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
