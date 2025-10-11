import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgSeo from "@/assets/articles/seo.png";

const ArticleSeo = () => {
  return (
    <>
      <SEO
        path="/article/seo-basics-senegalese-businesses"
        title="SEO local au Sénégal — Guide pour entreprises"
        description="Mots‑clés locaux, Google Business Profile et optimisations on‑page pour booster votre visibilité à Dakar et au Sénégal."
        image={imgSeo}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "SEO local au Sénégal — Guide",
            image: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + imgSeo,
            datePublished: "2025-04-25",
            dateModified: "2025-08-01",
            author: { "@type": "Person", name: "Boubacar FALL" },
            publisher: { "@type": "Organization", name: "Fallcon Tech", logo: { "@type": "ImageObject", url: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + "/assets/logo.png" } },
            mainEntityOfPage: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + "/article/seo-basics-senegalese-businesses",
            description: "Stratégies de SEO local pour entreprises au Sénégal.",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + "/" },
              { "@type": "ListItem", position: 2, name: "Ressources", item: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + "/resources" },
              { "@type": "ListItem", position: 3, name: "SEO local au Sénégal — Guide pour entreprises", item: (import.meta.env.VITE_SITE_URL || (typeof window!=="undefined"?window.location.origin:"")) + "/article/seo-basics-senegalese-businesses" },
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
              { label: "SEO local — Guide" },
            ]}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Les bases du SEO pour les entreprises sénégalaises
            </h1>
            <p className="text-lg text-muted-foreground">
              Publié le 10 Octobre 2025 • 8 min de lecture
            </p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 text-sm">Besoin d’aide SEO ? Découvrez nos <Link to="/services" className="text-blue-600 hover:underline">services</Link>.</div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <img
              alt="Un graphique montrant la croissance du trafic de recherche organique sur un ordinateur portable"
              className="w-full rounded-2xl shadow-xl mb-12"
              src={imgSeo}
            />

            <p>
              Être visible sur Google n'est plus une option pour les entreprises
              au Sénégal, c'est une nécessité. Le SEO (Search Engine
              Optimization), ou optimisation pour les moteurs de recherche, est
              l'art d'améliorer la position de votre site dans les résultats de
              recherche. Pour une entreprise locale, se concentrer sur le SEO
              local est la stratégie la plus rentable.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Étape 1 : Recherche de Mots-clés Locaux
            </h2>
            <p>
              Pensez comme vos clients. Que tapent-ils sur Google ? Probablement
              des termes comme :
            </p>
            <ul className="list-disc list-inside bg-card p-4 rounded-lg border my-4">
              <li>"restaurant à Dakar"</li>
              <li>"livraison de repas Yoff"</li>
              <li>"création site web Sénégal"</li>
              <li>"clinique pédiatrique Almadies"</li>
            </ul>
            <p>
              Utilisez des outils comme Google Keyword Planner (gratuit) pour
              trouver des variations et estimer le volume de recherche. Intégrez
              ces mots-clés naturellement dans le contenu de votre site.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Étape 2 : Google Business Profile
            </h2>
            <p>
              C'est l'outil de SEO local le plus puissant et il est gratuit.
              Créez ou revendiquez votre fiche "Google Business Profile".
              Remplissez-la à 100% :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>
                Adresse exacte, numéro de téléphone, horaires d'ouverture.
              </li>
              <li>Catégorie d'entreprise précise.</li>
              <li>Photos de haute qualité de votre entreprise.</li>
              <li>Encouragez vos clients satisfaits à laisser des avis.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Étape 3 : Optimisation On-Page Locale
            </h2>
            <p>
              Assurez-vous que votre site web signale clairement à Google où
              vous êtes et ce que vous faites.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>
                <strong>Balises de titre :</strong> Incluez votre service
                principal et votre ville (ex: "Conception de site web
                professionnel à Dakar | Fallcon Tech").
              </li>
              <li>
                <strong>Méta-descriptions :</strong> Rédigez une description
                attrayante qui incite au clic, en mentionnant votre localité.
              </li>
              <li>
                <strong>Contenu :</strong> Créez des pages pour chaque service
                et mentionnez les zones que vous desservez. Un blog avec des
                articles pertinents localement est un excellent atout.
              </li>
              <li>
                <strong>Schéma LocalBusiness :</strong> Ajoutez des données
                structurées à votre site pour aider Google à comprendre vos
                informations (adresse, téléphone, etc.).
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Étape 4 : Citations Locales
            </h2>
            <p>
              Assurez-vous que le nom, l'adresse et le numéro de téléphone (NAP
              - Name, Address, Phone) de votre entreprise sont cohérents sur
              tous les annuaires en ligne pertinents au Sénégal (Expat-Dakar,
              Sen-Commerce, etc.). L'incohérence peut nuire à votre classement.
            </p>

            <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Besoin d'aide avec votre SEO ?
              </h3>
              <p className="mb-6">
                Tous nos sites sont construits avec une base SEO solide pour
                vous garantir une visibilité maximale.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Demander un audit SEO gratuit</Link>
              </Button>
            </div>
            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-3">Articles récents</h4>
              <ul className="list-disc list-inside text-sm text-blue-600">
                <li><Link to="/article/automating-follow-ups-whatsapp-senegal">Automatiser les suivis WhatsApp</Link></li>
                <li><Link to="/article/idea-to-mvp-2-weeks">De l’idée au MVP en 2 semaines</Link></li>
                <li><Link to="/article/choosing-right-tech-stack">Choisir la bonne stack technique</Link></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
};

export default ArticleSeo;
