import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgStack from "@/assets/articles/stack.png";

const ArticleStack = () => {
  return (
    <>
      <SEO
        path="/article/choosing-right-tech-stack"
        title="Choisir la bonne stack technique — Guide"
        description="React, WordPress, Firebase, SQL… Comparatif pratique pour sélectionner la stack adaptée à votre projet au Sénégal."
        image={imgStack}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Choisir la bonne stack technique — Guide",
            image: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + imgStack,
            datePublished: "2025-02-28",
            dateModified: "2025-07-01",
            author: { "@type": "Person", name: "Boubacar FALL" },
            publisher: { "@type": "Organization", name: "Fallcon Tech", logo: { "@type": "ImageObject", url: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + "/assets/logo.png" } },
            mainEntityOfPage: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + "/article/choosing-right-tech-stack",
            description: "Choisir la stack adaptée à votre projet web.",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + "/" },
              { "@type": "ListItem", position: 2, name: "Ressources", item: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + "/resources" },
              { "@type": "ListItem", position: 3, name: "Choisir la bonne stack technique — Guide", item: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + "/article/choosing-right-tech-stack" },
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
              { label: "Choisir la bonne stack" },
            ]}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Choisir la bonne stack technique pour votre projet
            </h1>
            <p className="text-lg text-muted-foreground">
              Publié le 10 Octobre 2025 • 10 min de lecture
            </p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 text-sm">Besoin d’un conseil technique ? Découvrez nos <Link to="/services" className="text-blue-600 hover:underline">services</Link>.</div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <img
              alt="Des logos de différentes technologies web flottant autour d'un cerveau"
              className="w-full rounded-2xl shadow-xl mb-12"
              src={imgStack}
            />

            <p>
              Le choix de la "stack" technologique — l'ensemble des technologies
              utilisées pour construire votre site ou application — est l'une
              des décisions les plus critiques d'un projet. Ce choix a un impact
              sur la performance, la sécurité, l'évolutivité et les coûts de
              maintenance. Comparons quelques options populaires.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Frontend : React vs. WordPress
            </h2>

            <h3 className="font-bold text-2xl mt-8 mb-4">WordPress</h3>
            <p>
              WordPress est un CMS (Système de Gestion de Contenu) qui alimente
              une grande partie du web.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <strong>Avantages :</strong> Facile à utiliser pour les
                non-techniciens, vaste écosystème de thèmes et de plugins, idéal
                pour les blogs et les sites vitrines simples.
              </li>
              <li>
                <strong>Inconvénients :</strong> Peut devenir lent et vulnérable
                à la sécurité avec trop de plugins, moins flexible pour les
                applications web complexes, maintenance des plugins fastidieuse.
              </li>
            </ul>

            <h3 className="font-bold text-2xl mt-8 mb-4">
              React (avec un Headless CMS)
            </h3>
            <p>
              React est une bibliothèque JavaScript pour construire des
              interfaces utilisateur rapides et interactives.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <strong>Avantages :</strong> Performances exceptionnelles,
                expérience utilisateur fluide (type application), grande
                flexibilité pour les fonctionnalités personnalisées, sécurité
                renforcée (architecture "Jamstack").
              </li>
              <li>
                <strong>Inconvénients :</strong> Nécessite des compétences en
                développement plus avancées, coût de développement initial
                potentiellement plus élevé.
              </li>
            </ul>
            <p>
              <strong>Notre choix :</strong> Nous privilégions React pour sa
              performance et sa flexibilité, offrant une expérience utilisateur
              supérieure et une meilleure sécurité à long terme.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Backend : Firebase vs. Base de données traditionnelle (SQL)
            </h2>

            <h3 className="font-bold text-2xl mt-8 mb-4">
              Base de données traditionnelle (ex: MySQL, PostgreSQL)
            </h3>
            <p>
              Ces bases de données "relationnelles" sont la norme depuis des
              décennies.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <strong>Avantages :</strong> Très matures, fiables, idéales pour
                les données structurées complexes, conformité ACID.
              </li>
              <li>
                <strong>Inconvénients :</strong> Nécessite la gestion d'un
                serveur, moins adaptées à la mise à l'échelle rapide, plus
                lentes pour les applications en temps réel.
              </li>
            </ul>

            <h3 className="font-bold text-2xl mt-8 mb-4">
              Firebase (Firestore/Realtime Database)
            </h3>
            <p>
              Firebase est une plateforme de "Backend-as-a-Service" (BaaS) de
              Google.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <strong>Avantages :</strong> Développement ultra-rapide,
                fonctionnalités en temps réel intégrées, mise à l'échelle
                automatique, pas de serveur à gérer ("serverless"),
                authentification et stockage de fichiers inclus.
              </li>
              <li>
                <strong>Inconvénients :</strong> Peut devenir coûteux à très
                grande échelle, moins adapté aux requêtes complexes que SQL.
              </li>
            </ul>
            <p>
              <strong>Notre choix :</strong> Pour les startups et les PME,
              Firebase est souvent le meilleur choix. Il permet de lancer des
              produits plus rapidement, de manière plus économique et avec une
              infrastructure évolutive dès le départ.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>
            <p>
              Il n'y a pas de "meilleure" stack universelle, seulement la
              meilleure stack <strong>pour votre projet</strong>. Pour la
              plupart des sites web modernes et des MVP au Sénégal, une stack
              composée de <strong>React + Firebase</strong> offre le meilleur
              compromis entre performance, vitesse de développement et
              évolutivité.
            </p>

            <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Vous ne savez pas quoi choisir ?
              </h3>
              <p className="mb-6">
                Laissez-nous vous conseiller sur la stack technologique la plus
                adaptée à vos ambitions et à votre budget.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Obtenir une consultation technique</Link>
              </Button>
            </div>
            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-3">Articles récents</h4>
              <ul className="list-disc list-inside text-sm text-blue-600">
                <li><Link to="/article/seo-basics-senegalese-businesses">Les bases du SEO pour les entreprises sénégalaises</Link></li>
                <li><Link to="/article/automating-follow-ups-whatsapp-senegal">Automatiser les suivis WhatsApp</Link></li>
                <li><Link to="/article/idea-to-mvp-2-weeks">De l’idée au MVP en 2 semaines</Link></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
};

export default ArticleStack;
