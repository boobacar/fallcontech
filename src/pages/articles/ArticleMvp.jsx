import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgMvp from "@/assets/articles/mvp-development-for-startups.png";

const ArticleMvp = () => {
  return (
    <>
      <SEO
        path="/article/idea-to-mvp-2-weeks"
        title="De l’idée au MVP en 2 semaines — Guide Sénégal"
        description="Méthode express pour lancer un MVP: priorisation, prototypage, React + Firebase, tests et déploiement rapide au Sénégal."
        image={imgMvp}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "De l’idée au MVP en 2 semaines — Guide",
            image: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + imgMvp,
            datePublished: "2025-05-20",
            dateModified: "2025-08-15",
            author: { "@type": "Person", name: "Boubacar FALL" },
            publisher: { "@type": "Organization", name: "Fallcon Tech", logo: { "@type": "ImageObject", url: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + "/assets/logo.png" } },
            mainEntityOfPage: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + "/article/idea-to-mvp-2-weeks",
            description: "Lancer un MVP en 2 semaines au Sénégal.",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + "/" },
              { "@type": "ListItem", position: 2, name: "Ressources", item: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + "/resources" },
              { "@type": "ListItem", position: 3, name: "De l’idée au MVP en 2 semaines — Guide Sénégal", item: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + "/article/idea-to-mvp-2-weeks" },
            ],
          },
        ]}
      />

      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link
            to="/resources"
            className="inline-flex items-center text-primary hover:text-blue-500 mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Retour aux Ressources
          </Link>
          <Breadcrumbs
            items={[
              { label: "Accueil", to: "/" },
              { label: "Ressources", to: "/resources" },
              { label: "De l’idée au MVP en 2 semaines" },
            ]}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              De l'idée au MVP en 2 semaines : à quoi s'attendre
            </h1>
            <p className="text-lg text-muted-foreground">
              Publié le 10 Octobre 2025 • 6 min de lecture
            </p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 text-sm">Découvrez nos <Link to="/services" className="text-blue-600 hover:underline">services pour startups (MVP)</Link>.</div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <img
              alt="Une fusée décollant d'un ordinateur portable, symbolisant le lancement rapide d'un MVP"
              className="w-full rounded-2xl shadow-xl mb-12"
              src={imgMvp}
            />

            <p>
              Vous avez une idée de startup brillante mais des ressources
              limitées ? Le développement d'un Produit Minimum Viable (MVP) est
              la meilleure approche pour tester votre concept sur le marché
              sénégalais sans investir une fortune. Lancer un MVP en seulement
              deux semaines est un objectif ambitieux mais réalisable avec la
              bonne stratégie et la bonne équipe.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Qu'est-ce qu'un MVP ?
            </h2>
            <p>
              Un MVP n'est pas une version bâclée de votre produit. C'est la
              version la plus simple de votre produit qui résout un problème
              central pour un groupe d'utilisateurs cibles. L'objectif est de
              recueillir des retours d'utilisateurs réels le plus rapidement
              possible pour guider le développement futur.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Le processus en 2 semaines
            </h2>

            <h3 className="font-bold text-2xl mt-8 mb-4">
              Semaine 1 : Stratégie et Prototypage
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>
                <strong>Jour 1-2 : Atelier de définition.</strong> Clarifier le
                problème, identifier les utilisateurs cibles et définir la
                fonctionnalité <em>unique</em> et essentielle.
              </li>
              <li>
                <strong>Jour 3-4 : Wireframing et parcours utilisateur.</strong>{" "}
                Créer des maquettes basse-fidélité de chaque écran et définir
                comment l'utilisateur naviguera.
              </li>
              <li>
                <strong>
                  Jour 5-7 : Conception UI et prototype cliquable.
                </strong>{" "}
                Transformer les wireframes en un design visuel et créer un
                prototype interactif pour valider le concept avant d'écrire une
                seule ligne de code.
              </li>
            </ul>

            <h3 className="font-bold text-2xl mt-8 mb-4">
              Semaine 2 : Développement et Lancement
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>
                <strong>Jour 8-12 : Développement agile.</strong> Utiliser une
                stack technologique rapide comme React et Firebase pour
                construire les fonctionnalités de base : authentification, base
                de données en temps réel et déploiement.
              </li>
              <li>
                <strong>Jour 13 : Tests internes et corrections.</strong> Tester
                intensivement le produit pour corriger les bugs majeurs.
              </li>
              <li>
                <strong>Jour 14 : Déploiement.</strong> Mettre le MVP en ligne
                et commencer à le partager avec les premiers utilisateurs.
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              La Clé du Succès : La Discipline
            </h2>
            <p>
              Pour respecter un délai de deux semaines, il est crucial de
              résister à la tentation d'ajouter des fonctionnalités ("feature
              creep"). L'objectif n'est pas la perfection, mais l'apprentissage.
              Chaque fonctionnalité doit être remise en question : "Est-ce
              absolument essentiel pour que le produit apporte sa valeur
              fondamentale ?"
            </p>

            <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Prêt à lancer votre idée ?
              </h3>
              <p className="mb-6">
                Nous sommes spécialisés dans le développement rapide de MVP pour
                les startups au Sénégal.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Discuter de votre projet de MVP</Link>
              </Button>
            </div>
            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-3">Articles récents</h4>
              <ul className="list-disc list-inside text-sm text-blue-600">
                <li><Link to="/article/seo-basics-senegalese-businesses">Les bases du SEO pour les entreprises sénégalaises</Link></li>
                <li><Link to="/article/automating-follow-ups-whatsapp-senegal">Automatiser les suivis WhatsApp</Link></li>
                <li><Link to="/article/choosing-right-tech-stack">Choisir la bonne stack technique</Link></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
};

export default ArticleMvp;
