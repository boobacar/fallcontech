import React from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import telimanImg from "@/assets/telimanshare.png";
import Breadcrumbs from "@/components/Breadcrumbs";

const CaseStudyTelimanShare = () => {
  return (
    <>
      <SEO
        path="/case-study/telimanshare"
        title="Étude de cas: TelimanShare — plateforme docs sécurisée"
        description="Partage sécurisé, contrôle d’accès et journaux d’activité: moins d’emails et meilleure collaboration."
        image={telimanImg}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Étude de cas: TelimanShare — plateforme docs sécurisée",
          image: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + telimanImg,
          datePublished: "2025-05-10",
          dateModified: "2025-08-10",
          author: { "@type": "Person", name: "Boubacar FALL" },
          publisher: { "@type": "Organization", name: "Fallcon Tech" },
          mainEntityOfPage: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + "/case-study/telimanshare",
          description: "Plateforme interne de documents sécurisée au Sénégal.",
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
                { label: "TelimanShare" },
              ]}
            />

            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Plateforme TelimanShare
            </h1>
            <p className="text-2xl text-foreground/80 mb-8">
              Partage de documents interne sécurisé avec contrôle d'accès
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold gradient-text mb-2">
                  -80%
                </div>
                <p className="text-muted-foreground">
                  Trafic d'e-mails en moins
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold gradient-text mb-2">
                  100%
                </div>
                <p className="text-muted-foreground">
                  Contrôle d'accès sécurisé
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold gradient-text mb-2">
                  3 Semaines
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
                alt="Tableau de bord de la plateforme TelimanShare"
                className="w-full rounded-2xl shadow-2xl"
                src={telimanImg}
                loading="lazy"
                decoding="async"
              />
            </div>

            <h2 className="text-4xl font-bold mb-6 text-primary">Le Défi</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Une entreprise en pleine croissance était confrontée à des
              difficultés de gestion documentaire. Les fichiers étaient
              dispersés dans des fils d'e-mails, ce qui rendait difficile le
              suivi des versions, le contrôle des accès et le maintien de la
              sécurité. Ils avaient besoin d'une plateforme centralisée où les
              membres de l'équipe pourraient partager et gérer des documents en
              toute sécurité avec des contrôles d'accès et des pistes d'audit
              appropriés.
            </p>

            <h2 className="text-4xl font-bold mb-6 text-primary">
              La Solution
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Nous avons construit TelimanShare, une plateforme de gestion de
              documents personnalisée avec des fonctionnalités de sécurité de
              niveau entreprise :
            </p>

            <ul className="space-y-4 mb-12">
              {[
                "Contrôle d'accès basé sur les rôles (lecture, édition, admin)",
                "Journaux d'activité détaillés pour la conformité",
                "Gestion des versions de fichiers et suivi de l'historique",
                "Fonctionnalité de corbeille et de restauration",
                "Téléchargement et stockage de fichiers sécurisés",
                "Notifications en temps réel",
                "Fonctionnalités de recherche et de filtrage",
                "Interface responsive mobile",
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
                  alt="Interface de contrôle d'accès"
                  className="w-full rounded-xl"
                  src="https://images.unsplash.com/photo-1651517155200-4da6815940f6"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="bg-primary/5 rounded-2xl p-2">
                <img
                  alt="Tableau de bord des journaux d'activité"
                  className="w-full rounded-xl"
                  src="https://images.unsplash.com/photo-1518734549841-b417d28c22aa"
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
                <Shield
                  className="text-green-600 flex-shrink-0 mt-1"
                  size={32}
                />
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">
                    Résultats Clés
                  </h3>
                  <ul className="space-y-3">
                    <li className="text-green-900">
                      <strong>Réduction de 80%</strong> des échanges d'e-mails
                      pour le partage de documents
                    </li>
                    <li className="text-green-900">
                      <strong>Piste d'audit complète</strong> pour la conformité
                      et la sécurité
                    </li>
                    <li className="text-green-900">
                      <strong>Zéro incident de sécurité</strong> depuis le
                      lancement
                    </li>
                    <li className="text-green-900">
                      <strong>Amélioration de la collaboration</strong> et de la
                      productivité de l'équipe
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-bold mb-6 text-primary">
              Fonctionnalités de Sécurité
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: "Chiffrement",
                  desc: "Chiffrement de bout en bout pour tous les fichiers",
                },
                {
                  title: "Contrôle d'Accès",
                  desc: "Permissions granulaires par utilisateur/rôle",
                },
                {
                  title: "Journaux d'Audit",
                  desc: "Suivi complet de l'activité",
                },
                {
                  title: "Sauvegardes",
                  desc: "Sauvegardes quotidiennes automatisées",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200"
                >
                  <h3 className="text-xl font-bold mb-2 text-blue-600">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-4xl font-bold mb-6 text-primary">
              Stack Technique
            </h2>
            <div className="flex flex-wrap gap-3 mb-12">
              {[
                "React",
                "Tailwind CSS",
                "Firebase",
                "Cloud Storage",
                "Authentification",
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
                Besoin d'une Plateforme sur Mesure ?
              </h2>
              <p className="text-xl mb-6 text-muted-foreground">
                Construisons un outil interne sécurisé adapté à votre entreprise
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <Link to="/contact">Démarrer Votre Projet</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a
                    href="https://www.telimanshare.com"
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

export default CaseStudyTelimanShare;
