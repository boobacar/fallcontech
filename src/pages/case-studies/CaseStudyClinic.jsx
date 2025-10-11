import React from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import clinicImg from "@/assets/clinic-dabia.png";
import Breadcrumbs from "@/components/Breadcrumbs";

const CaseStudyClinic = () => {
  return (
    <>
      <SEO
        path="/case-study/clinic"
        title="Étude de cas: Clinique DABIA — +70% trafic mobile"
        description="Site clinique moderne avec réservation en ligne: +70% d’utilisateurs mobiles et demandes automatisées."
        image={clinicImg}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Étude de cas: Clinique DABIA — +70% trafic mobile",
          image: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + clinicImg,
          datePublished: "2025-06-01",
          dateModified: "2025-09-01",
          author: { "@type": "Person", name: "Boubacar FALL" },
          publisher: { "@type": "Organization", name: "Fallcon Tech" },
          mainEntityOfPage: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + "/case-study/clinic",
          description: "Site clinique moderne avec réservation en ligne à Dakar.",
        }}
      />

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/work"
              className="inline-flex items-center text-primary hover:text-blue-500 mb-8"
            >
              <ArrowLeft className="mr-2" size={20} />
              Retour aux Projets
            </Link>
            <Breadcrumbs
              items={[
                { label: "Accueil", to: "/" },
                { label: "Projets", to: "/work" },
                { label: "Clinique DABIA" },
              ]}
            />

            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Site Web Clinique DABIA
            </h1>
            <p className="text-2xl text-foreground/80 mb-8">
              Site web de santé moderne avec système de réservation en ligne
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold gradient-text mb-2">
                  +70%
                </div>
                <p className="text-muted-foreground">
                  Augmentation du trafic mobile
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold gradient-text mb-2">
                  100%
                </div>
                <p className="text-muted-foreground">Rendez-vous automatisés</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold gradient-text mb-2">
                  2 Semaines
                </div>
                <p className="text-muted-foreground">Temps de développement</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-primary/5 rounded-3xl p-2 mb-12">
              <img
                alt="Site Web Clinique DABIA"
                className="w-full rounded-2xl shadow-2xl"
                src={clinicImg}
              />
            </div>

            <h2 className="text-4xl font-bold mb-6 text-primary">Le Défi</h2>
            <p className="text-lg text-muted-foreground mb-8">
              La Clinique DABIA avait besoin d'une présence en ligne moderne
              pour remplacer son site web obsolète. Elle perdait des patients
              potentiels au profit de concurrents avec de meilleures expériences
              numériques. La clinique recevait de nombreux appels téléphoniques
              pour des informations de base et la prise de rendez-vous, ce qui
              submergeait son personnel.
            </p>

            <h2 className="text-4xl font-bold mb-6 text-primary">
              La Solution
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Nous avons conçu et développé un site web "mobile-first" avec un
              système de réservation en ligne intégré. Le site comprend :
            </p>

            <ul className="space-y-4 mb-12">
              {[
                "Design responsive optimisé pour les appareils mobiles",
                "Prise de rendez-vous en ligne avec intégration de calendrier",
                "Profils des médecins et spécialisations",
                "Listes de services avec descriptions détaillées",
                "Formulaires de contact avec intégration WhatsApp",
                "Optimisation SEO pour la recherche locale",
                "Suivi avec Google Analytics",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-blue-500 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <span className="text-lg text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-primary/5 rounded-2xl p-2">
                <img
                  alt="Interface de réservation mobile"
                  className="w-full rounded-xl"
                  src="https://images.unsplash.com/photo-1593150543200-56e05bdb018e"
                />
              </div>
              <div className="bg-primary/5 rounded-2xl p-2">
                <img
                  alt="Page des profils de médecins"
                  className="w-full rounded-xl"
                  src="https://images.unsplash.com/photo-1588966915713-6d43603478e5"
                />
              </div>
            </div>

            <h2 className="text-4xl font-bold mb-6 text-primary">
              Les Résultats
            </h2>
            <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-lg mb-8">
              <div className="flex items-start gap-4">
                <TrendingUp
                  className="text-green-600 flex-shrink-0 mt-1"
                  size={32}
                />
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">
                    Résultats Clés
                  </h3>
                  <ul className="space-y-3">
                    <li className="text-green-900">
                      <strong>Augmentation de +70%</strong> du trafic mobile dès
                      le premier mois
                    </li>
                    <li className="text-green-900">
                      <strong>100% des rendez-vous</strong> désormais pris en
                      ligne, réduisant les appels
                    </li>
                    <li className="text-green-900">
                      <strong>Réduction de 50%</strong> de la charge de travail
                      administrative
                    </li>
                    <li className="text-green-900">
                      <strong>Meilleure satisfaction des patients</strong> grâce
                      à la réservation pratique
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-bold mb-6 text-primary">
              Stack Technique
            </h2>
            <div className="flex flex-wrap gap-3 mb-12">
              {[
                "React",
                "Tailwind CSS",
                "Firebase",
                "API Google Calendar",
                "API WhatsApp Business",
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="bg-primary rounded-3xl p-8 text-primary-foreground text-center">
              <h2 className="text-3xl font-bold mb-4">
                Vous voulez des résultats similaires ?
              </h2>
              <p className="text-xl mb-6 text-muted-foreground">
                Créons une solution sur mesure pour votre cabinet médical
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <Link to="/contact">Réserver une construction similaire</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a
                    href="https://www.cliniquedentairedabia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir le site
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyClinic;
