import React from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import whatsappImg from "@/assets/articles/whatsapp-automation.webp";
import Breadcrumbs from "@/components/Breadcrumbs";

const CaseStudyWhatsApp = () => {
  return (
    <>
      <SEO
        path="/case-study/whatsapp"
        title="Étude de cas: Automatisation WhatsApp — 100% messages"
        description="Système d’anniversaire WhatsApp: 100% des messages envoyés chaque jour, zéro travail manuel."
        image={whatsappImg}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Étude de cas: Automatisation WhatsApp — 100% messages",
          image: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + whatsappImg,
          datePublished: "2025-04-10",
          dateModified: "2025-07-10",
          author: { "@type": "Person", name: "Boubacar FALL" },
          publisher: { "@type": "Organization", name: "Fallcon Tech" },
          mainEntityOfPage: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + "/case-study/whatsapp",
          description: "Automatisation d’envoi d’anniversaire via WhatsApp.",
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
                { label: "Automatisation WhatsApp" },
              ]}
            />

            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Automatisation Anniversaires WhatsApp
            </h1>
            <p className="text-2xl text-foreground/80 mb-8">
              Système d'engagement client automatisé
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold gradient-text mb-2">
                  100%
                </div>
                <p className="text-muted-foreground">Automatisé chaque jour</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold gradient-text mb-2">0</div>
                <p className="text-muted-foreground">Travail manuel requis</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold gradient-text mb-2">
                  1 Semaine
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
                alt="Tableau de bord de l'automatisation WhatsApp"
                className="w-full rounded-2xl shadow-2xl"
                src={whatsappImg}
                loading="lazy"
                decoding="async"
              />
            </div>

            <h2 className="text-4xl font-bold mb-6 text-primary">Le Défi</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Une entreprise de vente au détail souhaitait renforcer ses
              relations avec ses clients en envoyant des messages d'anniversaire
              personnalisés. Cependant, le suivi manuel des anniversaires et
              l'envoi des messages prenaient beaucoup de temps et étaient sujets
              à des erreurs. Ils avaient besoin d'une solution automatisée qui
              enverrait de manière fiable les vœux d'anniversaire sans aucune
              intervention manuelle.
            </p>

            <h2 className="text-4xl font-bold mb-6 text-primary">
              La Solution
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Nous avons développé un système de messagerie d'anniversaire
              WhatsApp entièrement automatisé qui :
            </p>

            <ul className="space-y-4 mb-12">
              {[
                "Importe les données des clients à partir de fichiers CSV",
                "Vérifie automatiquement les anniversaires chaque jour",
                "Envoie des messages WhatsApp personnalisés",
                "Inclut le nom du client et des vœux personnalisés",
                "Suit l'état de la livraison et l'engagement",
                "Fournit un tableau de bord analytique",
                "Gère les différences de fuseaux horaires",
                "Prend en charge la planification de messages en masse",
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
                  alt="Interface d'importation CSV"
                  className="w-full rounded-xl"
                  src="https://images.unsplash.com/photo-1529078155058-5d716f45d604"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="bg-primary/5 rounded-2xl p-2">
                <img
                  alt="Analyses des messages"
                  className="w-full rounded-xl"
                  src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <h2 className="text-4xl font-bold mb-6 text-primary">
              Les Résultats
            </h2>
            <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-lg mb-8">
              <div className="flex items-start gap-4">
                <Zap className="text-green-600 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">
                    Résultats Clés
                  </h3>
                  <ul className="space-y-3">
                    <li className="text-green-900">
                      <strong>100% des messages d'anniversaire</strong> envoyés
                      automatiquement chaque jour
                    </li>
                    <li className="text-green-900">
                      <strong>Zéro travail manuel</strong> requis de la part du
                      personnel
                    </li>
                    <li className="text-green-900">
                      <strong>Amélioration de la satisfaction</strong> et de la
                      fidélité des clients
                    </li>
                    <li className="text-green-900">
                      <strong>Engagement accru</strong> avec des messages
                      personnalisés
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-bold mb-6 text-primary">
              Comment ça marche
            </h2>
            <div className="space-y-6 mb-12">
              {[
                {
                  step: "1",
                  title: "Importation des Données",
                  desc: "Téléchargez les données des clients via CSV avec noms et dates de naissance",
                },
                {
                  step: "2",
                  title: "Vérification Quotidienne",
                  desc: "Le système vérifie automatiquement les anniversaires chaque matin",
                },
                {
                  step: "3",
                  title: "Envoi des Messages",
                  desc: "Des messages WhatsApp personnalisés sont envoyés au moment optimal",
                },
                {
                  step: "4",
                  title: "Suivi des Résultats",
                  desc: "Surveillez l'état de la livraison et l'engagement dans le tableau de bord",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-primary rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-4xl font-bold mb-6 text-primary">
              Stack Technique
            </h2>
            <div className="flex flex-wrap gap-3 mb-12">
              {[
                "Node.js",
                "API WhatsApp Business",
                "Parseur CSV",
                "Tâches Cron",
                "Firebase",
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
                Besoin d'une Automatisation Personnalisée ?
              </h2>
              <p className="text-xl mb-6 text-muted-foreground">
                Automatisons vos workflows métier et faisons vous gagner du
                temps
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link to="/contact">Automatisez Votre Entreprise</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyWhatsApp;
