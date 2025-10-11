import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgWhatsapp from "@/assets/articles/whatsapp-automation.webp";

const ArticleWhatsapp = () => {
  return (
    <>
      <SEO
        path="/article/automating-follow-ups-whatsapp-senegal"
        title="Automatiser les suivis WhatsApp — Entreprises Sénégal"
        description="Mettre en place des workflows WhatsApp: rappels, promos et support automatique pour vos clients au Sénégal. Guide et cas d’usage."
        image={imgWhatsapp}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Automatiser les suivis clients avec WhatsApp au Sénégal",
            image:
              (import.meta.env.VITE_SITE_URL ||
                (typeof window !== "undefined" ? window.location.origin : "")) +
              imgWhatsapp,
            datePublished: "2025-06-15",
            dateModified: "2025-09-01",
            author: { "@type": "Person", name: "Boubacar FALL" },
            publisher: {
              "@type": "Organization",
              name: "Fallcon Tech",
              logo: {
                "@type": "ImageObject",
                url:
                  (import.meta.env.VITE_SITE_URL ||
                    (typeof window !== "undefined"
                      ? window.location.origin
                      : "")) + "/assets/logo.webp",
              },
            },
            mainEntityOfPage:
              (import.meta.env.VITE_SITE_URL ||
                (typeof window !== "undefined" ? window.location.origin : "")) +
              "/article/automating-follow-ups-whatsapp-senegal",
            description:
              "Automatiser les suivis clients via WhatsApp au Sénégal.",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Accueil",
                item:
                  (import.meta.env.VITE_SITE_URL ||
                    (typeof window !== "undefined"
                      ? window.location.origin
                      : "")) + "/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Ressources",
                item:
                  (import.meta.env.VITE_SITE_URL ||
                    (typeof window !== "undefined"
                      ? window.location.origin
                      : "")) + "/resources",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Automatiser les suivis WhatsApp — Entreprises Sénégal",
                item:
                  (import.meta.env.VITE_SITE_URL ||
                    (typeof window !== "undefined"
                      ? window.location.origin
                      : "")) +
                  "/article/automating-follow-ups-whatsapp-senegal",
              },
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
              { label: "Automatiser les suivis WhatsApp" },
            ]}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Automatiser les suivis clients avec WhatsApp au Sénégal
            </h1>
            <p className="text-lg text-muted-foreground">
              Publié le 10 Octobre 2025 • 7 min de lecture
            </p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 text-sm">
            Découvrez aussi nos{" "}
            <Link to="/services" className="text-blue-600 hover:underline">
              services d’automatisation
            </Link>
            .
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <img
              alt="Un téléphone affichant une conversation WhatsApp automatisée pour le service client"
              className="w-full rounded-2xl shadow-xl mb-12"
              src={imgWhatsapp}
              loading="lazy"
              decoding="async"
            />

            <p>
              WhatsApp est l'outil de communication le plus populaire au
              Sénégal. Pour les entreprises, c'est une mine d'or pour
              l'engagement client. Cependant, gérer manuellement les
              interactions peut rapidement devenir écrasant. L'automatisation
              est la clé pour tirer parti de ce canal à grande échelle, en
              économisant du temps et en améliorant la satisfaction client.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Pourquoi automatiser WhatsApp ?
            </h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>
                <strong>Disponibilité 24/7 :</strong> Répondez instantanément
                aux questions courantes, même en dehors des heures de bureau.
              </li>
              <li>
                <strong>Gain de temps :</strong> Libérez votre équipe des tâches
                répétitives pour qu'elle se concentre sur les demandes
                complexes.
              </li>
              <li>
                <strong>Personnalisation à grande échelle :</strong> Envoyez des
                messages ciblés (promotions, rappels, vœux d'anniversaire) à des
                milliers de clients.
              </li>
              <li>
                <strong>Réduction des erreurs :</strong> Éliminez les erreurs
                humaines dans les communications.
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Exemples de cas d'usage au Sénégal
            </h2>

            <div className="space-y-6">
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="font-bold text-xl mb-2">
                  Suivi de commande pour l'e-commerce
                </h3>
                <p>
                  Envoyez automatiquement des mises à jour sur le statut de la
                  commande, de la confirmation à la livraison.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="font-bold text-xl mb-2">
                  Rappels de rendez-vous pour les services
                </h3>
                <p>
                  Les cliniques, salons de coiffure et consultants peuvent
                  réduire considérablement les rendez-vous manqués.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="font-bold text-xl mb-2">
                  Marketing et promotions
                </h3>
                <p>
                  Informez vos clients des nouvelles offres et promotions de
                  manière directe et personnelle.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="font-bold text-xl mb-2">
                  Support client de premier niveau
                </h3>
                <p>
                  Un chatbot peut répondre aux FAQ et qualifier les demandes
                  avant de les transmettre à un agent humain.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Comment commencer ?
            </h2>
            <p>
              La mise en place d'une automatisation WhatsApp nécessite
              l'utilisation de l'API WhatsApp Business. Cela implique
              généralement de travailler avec un partenaire technologique pour
              développer une solution personnalisée. Le processus comprend :
            </p>
            <ol className="list-decimal list-inside space-y-2 mt-4">
              <li>
                Définir les objectifs de votre automatisation (par exemple,
                réduire les appels de support).
              </li>
              <li>
                Cartographier les parcours clients et les scénarios de
                conversation.
              </li>
              <li>
                Développer les flux logiques et les intégrer à vos systèmes
                existants (CRM, base de données produits, etc.).
              </li>
              <li>Tester rigoureusement avant le déploiement.</li>
            </ol>
            <p>
              Notre projet d'
              <strong>automatisation des vœux d'anniversaire</strong> a permis à
              un client d'envoyer 100% de ses messages sans aucune intervention
              manuelle, renforçant ainsi la fidélité de sa clientèle.
            </p>

            <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Prêt à automatiser votre communication ?
              </h3>
              <p className="mb-6">
                Découvrez comment nous pouvons créer un workflow WhatsApp sur
                mesure pour votre entreprise.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Discuter d'un projet d'automatisation</Link>
              </Button>
            </div>
            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-3">Articles récents</h4>
              <ul className="list-disc list-inside text-sm text-blue-600">
                <li>
                  <Link to="/article/seo-basics-senegalese-businesses">
                    Les bases du SEO pour les entreprises sénégalaises
                  </Link>
                </li>
                <li>
                  <Link to="/article/idea-to-mvp-2-weeks">
                    De l’idée au MVP en 2 semaines
                  </Link>
                </li>
                <li>
                  <Link to="/article/choosing-right-tech-stack">
                    Choisir la bonne stack technique
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
};

export default ArticleWhatsapp;
