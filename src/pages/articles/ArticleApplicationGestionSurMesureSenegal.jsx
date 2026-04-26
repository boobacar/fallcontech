import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgStack from "@/assets/articles/stack.png";

const ArticleApplicationGestionSurMesureSenegal = () => {
  const path = "/article/application-gestion-sur-mesure-senegal";
  const title = "Application de gestion sur mesure au Sénégal : pourquoi et comment";
  const description =
    "Comment développer une application de gestion sur mesure pour votre PME au Sénégal : CRM, facturation, stocks, RH — coûts, délais, technologies et avantages vs logiciels génériques à Dakar.";

  const faq = [
    {
      q: "Pourquoi développer une application sur mesure plutôt qu'utiliser un logiciel existant ?",
      a: "Les logiciels génériques (SAP, Sage, Odoo) sont souvent trop complexes, trop chers, ou mal adaptés aux réalités sénégalaises (langues locales, paiement Wave, processus métier spécifiques). Une application sur mesure coûte plus cher au départ mais s'adapte exactement à vos besoins.",
    },
    {
      q: "Quel est le coût d'une application de gestion sur mesure au Sénégal ?",
      a: "Un module de gestion simple (stocks, factures, clients) démarre à 1 500 000 F CFA. Une plateforme complète multi-modules démarre à 3 000 000 F CFA. Le ROI se mesure généralement en moins de 12 mois grâce au temps gagné.",
    },
    {
      q: "En combien de temps peut-on livrer une application de gestion ?",
      a: "Un premier module fonctionnel se livre en 4 à 6 semaines. Nous travaillons en itérations : vous utilisez rapidement, nous améliorons selon vos retours.",
    },
    {
      q: "L'application peut-elle fonctionner hors ligne ?",
      a: "Oui. Nous développons des applications avec mode hors-ligne et synchronisation automatique dès que la connexion est rétablie — essentiel pour les équipes terrain au Sénégal.",
    },
  ];

  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");

  return (
    <>
      <SEO
        path={path}
        title={`${title} | Fallcon Tech`}
        description={description}
        image={imgStack}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description,
            image: site + imgStack,
            datePublished: "2026-04-26",
            dateModified: "2026-04-26",
            author: { "@type": "Person", name: "Boubacar FALL" },
            publisher: {
              "@type": "Organization",
              name: "Fallcon Tech",
              logo: { "@type": "ImageObject", url: site + "/logo.png" },
            },
            mainEntityOfPage: site + path,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />

      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Application gestion Sénégal" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-xl text-foreground/70 max-w-2xl">Stocks, factures, RH, CRM, rapports — une application adaptée à votre PME sénégalaise vous fait gagner des heures chaque semaine.</p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <img alt={title} className="w-full rounded-2xl shadow-xl mb-10" src={imgStack} loading="lazy" decoding="async" />

          <h2>Le problème des PME sénégalaises sans outil de gestion numérique</h2>
          <p>
            La majorité des PME à Dakar gèrent encore leurs stocks sur Excel, leurs factures sur papier, et leurs clients dans un carnet. Ce fonctionnement crée des erreurs, des pertes de temps et des opportunités manquées.
          </p>
          <p>
            Une application de gestion sur mesure résout ces problèmes en centralisant toutes les informations dans un outil simple, accessible depuis n'importe quel appareil, adapté à vos processus réels.
          </p>

          <h2>Types d'applications de gestion que nous développons</h2>

          <h3>CRM (Gestion de la relation client)</h3>
          <p>Suivi des prospects, pipeline commercial, historique des interactions, relances automatiques WhatsApp. Idéal pour les équipes de vente, les agences et les prestataires de services.</p>

          <h3>Gestion des stocks et de l'inventaire</h3>
          <p>Entrées/sorties de stock en temps réel, alertes de rupture, fiches produit avec photos, historique des mouvements. Compatible avec des lecteurs code-barres sur téléphone Android.</p>

          <h3>Facturation et comptabilité simplifiée</h3>
          <p>Création de devis et factures en quelques clics, suivi des paiements, relances automatiques, export comptable. Intégration Wave pour encaissement immédiat.</p>

          <h3>Gestion des ressources humaines (RH)</h3>
          <p>Suivi des congés, absences, contrats, fiches de paie, évaluations. Accessible par les managers depuis mobile ou desktop.</p>

          <h3>Planification et suivi de chantier / projet</h3>
          <p>Calendrier des tâches, assignation par équipe, suivi de l'avancement, rapports de chantier avec photos. Utilisé par des entreprises de BTP, de plomberie et de maintenance.</p>

          <h3>Tableau de bord de reporting</h3>
          <p>Chiffres clés en temps réel : chiffre d'affaires, taux de conversion, stock disponible, performances équipe. Accessible depuis mobile partout au Sénégal.</p>

          <h2>Pourquoi une application sur mesure plutôt qu'Odoo ou Sage ?</h2>
          <div className="bg-card rounded-xl p-6 shadow-md not-prose mb-6">
            <table className="w-full text-sm">
              <thead><tr className="border-b"><th className="text-left py-2">Critère</th><th className="text-center py-2">Logiciel générique</th><th className="text-center py-2">Sur mesure Fallcon Tech</th></tr></thead>
              <tbody>
                <tr className="border-b"><td className="py-2">Adaptation au marché SN</td><td className="text-center">Faible</td><td className="text-center text-green-600 font-semibold">Totale</td></tr>
                <tr className="border-b"><td className="py-2">Intégration Wave/Orange Money</td><td className="text-center">Rare</td><td className="text-center text-green-600 font-semibold">Incluse</td></tr>
                <tr className="border-b"><td className="py-2">Facilité d'utilisation</td><td className="text-center">Complexe</td><td className="text-center text-green-600 font-semibold">Conçu pour vous</td></tr>
                <tr className="border-b"><td className="py-2">Frais mensuels</td><td className="text-center">100 – 500 USD/mois</td><td className="text-center text-green-600 font-semibold">Zéro après livraison</td></tr>
                <tr className="border-b"><td className="py-2">Mode hors-ligne</td><td className="text-center">Limité</td><td className="text-center text-green-600 font-semibold">Disponible</td></tr>
                <tr><td className="py-2">Support local francophone</td><td className="text-center">Limité</td><td className="text-center text-green-600 font-semibold">À Dakar</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Notre stack technique pour les applications de gestion</h2>
          <ul>
            <li><strong>React</strong> — interface moderne et réactive, multi-device</li>
            <li><strong>Firebase / Supabase</strong> — base de données temps réel, authentification, mode hors-ligne</li>
            <li><strong>Node.js</strong> — back-end API, automatisations, notifications</li>
            <li><strong>WhatsApp Business API</strong> — relances clients, alertes équipe</li>
            <li><strong>Wave / Orange Money API</strong> — encaissement intégré</li>
          </ul>
          <p>Découvrez un exemple réel : <Link to="/case-study/telimanshare">TelimanShare — plateforme de gestion documentaire</Link>.</p>

          <h2>Budget et ROI d'une application de gestion</h2>
          <p>Une PME qui passe de la gestion papier/Excel à une application sur mesure économise en moyenne :</p>
          <ul>
            <li>5 à 10 heures de travail administratif par semaine</li>
            <li>Les erreurs de stock et de facturation (valeur variable selon le secteur)</li>
            <li>Les retards de paiement grâce aux relances automatiques</li>
          </ul>
          <p>Au tarif moyen d'un employé administratif sénégalais, le ROI de l'investissement initial est atteint en <strong>6 à 12 mois</strong>.</p>

          <h2>FAQ — Application de gestion sur mesure</h2>
          {faq.map((f, i) => (
            <div key={i}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}

          <h2>Articles liés</h2>
          <p>
            <Link to="/article/idea-to-mvp-2-weeks">De l'idée au MVP en 2 semaines</Link> —{" "}
            <Link to="/article/automating-follow-ups-whatsapp-senegal">Automatisation WhatsApp</Link> —{" "}
            <Link to="/services">Voir tous nos services</Link>
          </p>

          <div className="not-prose mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Discuter de mon application</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://wa.me/221776260020" target="_blank" rel="noopener noreferrer">
                Parler sur WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleApplicationGestionSurMesureSenegal;
