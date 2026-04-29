import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgSeo from "@/assets/articles/seo.png";

const ArticleLogicielGestionCourrierSenegal = () => {
  const path = "/article/logiciel-gestion-courrier-administration-senegal";
  const title =
    "Logiciel de gestion de courrier au Sénégal : fonctionnalités, workflow et budget";
  const description =
    "Checklist pour choisir ou développer un logiciel de gestion de courrier au Sénégal : courriers entrants, sortants, GED, archivage, validation, notifications et reporting.";
  const site =
    import.meta.env.VITE_SITE_URL ||
    (typeof window !== "undefined" ? window.location.origin : "");

  return (
    <>
      <SEO
        path={path}
        title={`${title} | Fallcon Tech`}
        description={description}
        image={imgSeo}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: title,
          description,
          image: site + imgSeo,
          datePublished: "2026-04-29",
          dateModified: "2026-04-29",
          author: { "@type": "Person", name: "Boubacar FALL" },
          publisher: {
            "@type": "Organization",
            name: "Fallcon Tech",
            logo: { "@type": "ImageObject", url: site + "/logo.png" },
          },
          mainEntityOfPage: site + path,
          keywords:
            "logiciel gestion courrier Sénégal, application courrier administration, suivi courrier Dakar, GED Sénégal, courrier entrant sortant",
        }}
      />

      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link
            to="/resources"
            className="inline-flex items-center text-primary hover:text-blue-500 mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Retour aux ressources
          </Link>
          <Breadcrumbs
            items={[
              { label: "Accueil", to: "/" },
              { label: "Ressources", to: "/resources" },
              { label: "Logiciel courrier" },
            ]}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {title}
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl">
              Une checklist concrète pour les administrations, directions,
              cabinets, écoles, cliniques et PME qui veulent mieux suivre leurs
              courriers.
            </p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <img
            alt="Logiciel de gestion de courrier pour administration au Sénégal"
            className="w-full rounded-2xl shadow-xl mb-10"
            src={imgSeo}
            loading="lazy"
            decoding="async"
          />

          <p>
            Choisir un logiciel de gestion de courrier au Sénégal ne consiste
            pas à prendre l'outil le plus compliqué. Le bon choix est celui qui
            colle à votre circuit réel : qui reçoit le courrier, qui l'affecte,
            qui répond, qui valide et comment les documents sont archivés.
          </p>

          <h2>Les fonctionnalités indispensables</h2>
          <ul>
            <li>
              <strong>Registre numérique :</strong> numéro de courrier, objet,
              expéditeur, destinataire, date, priorité et statut.
            </li>
            <li>
              <strong>Courriers entrants et sortants :</strong> deux circuits
              séparés, mais reliés quand une réponse est produite.
            </li>
            <li>
              <strong>Pièces jointes :</strong> scan PDF, photo, document Word
              ou fichier reçu par email.
            </li>
            <li>
              <strong>Affectation :</strong> transfert à un agent, un chef de
              service ou une direction.
            </li>
            <li>
              <strong>Historique :</strong> chaque action doit être traçable
              pour éviter les pertes et les confusions.
            </li>
            <li>
              <strong>Recherche :</strong> retrouver un courrier par numéro,
              date, objet, expéditeur, service ou statut.
            </li>
          </ul>

          <h2>Workflow type pour une administration ou PME</h2>
          <p>
            Le logiciel doit reproduire votre circuit sans alourdir le travail
            des agents. Le modèle le plus simple fonctionne en six étapes.
          </p>
          <ol>
            <li>Enregistrement du courrier au secrétariat ou bureau d'ordre.</li>
            <li>Scan du document et ajout des métadonnées essentielles.</li>
            <li>Affectation au service compétent avec délai de traitement.</li>
            <li>Traitement par l'agent ou la direction concernée.</li>
            <li>Validation de la réponse ou clôture du dossier.</li>
            <li>Archivage et reporting.</li>
          </ol>

          <h2>Tableau de bord et indicateurs à suivre</h2>
          <p>
            Un bon logiciel donne de la visibilité au responsable. Les
            indicateurs les plus utiles sont simples : nombre de courriers
            reçus, courriers en retard, délais moyens, courriers par service,
            taux de clôture et volume mensuel.
          </p>

          <h2>Solution standard ou développement sur mesure ?</h2>
          <p>
            Une solution standard peut suffire si votre circuit est simple. Le
            sur mesure devient intéressant quand vous avez plusieurs services,
            des rôles précis, des validations internes, des exports, une
            intégration WhatsApp/email ou des règles propres à votre structure.
          </p>

          <h2>Budget réaliste au Sénégal</h2>
          <p>
            Pour une structure qui veut démarrer, un registre numérique avec
            recherche, pièces jointes et statuts peut être livré rapidement. Un
            système plus complet avec GED, rôles, notifications, tableaux de
            bord et exports demande plus de conception.
          </p>
          <ul>
            <li>Registre numérique simple : 900 000 à 1 500 000 F CFA.</li>
            <li>Workflow complet multi-services : 1 800 000 à 3 500 000 F CFA.</li>
            <li>GED avancée avec reporting et intégrations : budget sur audit.</li>
          </ul>

          <h2>Comment préparer votre cahier des charges</h2>
          <p>
            Avant de contacter un prestataire, listez vos types de courriers,
            vos services, vos validations, vos modèles de réponse, vos besoins
            d'archivage et les rapports que vous souhaitez produire. Cette
            préparation réduit le coût et accélère la livraison.
          </p>

          <h2>Fallcon Tech peut développer votre solution courrier</h2>
          <p>
            Nous développons des applications web sur mesure pour la
            digitalisation des services au Sénégal : gestion de courrier,
            gestion documentaire, CRM interne, tableaux de bord et automatisation
            des notifications. Le projet peut commencer par un module simple,
            puis évoluer vers une plateforme complète.
          </p>

          <h2>Articles liés</h2>
          <p>
            <Link to="/article/digitalisation-courriers-services-senegal">
              Digitalisation des courriers au Sénégal
            </Link>{" "}
            —{" "}
            <Link to="/article/application-gestion-sur-mesure-senegal">
              Application de gestion sur mesure
            </Link>
          </p>

          <div className="not-prose mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Demander un audit courrier</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="https://wa.me/221776260020"
                target="_blank"
                rel="noopener noreferrer"
              >
                Écrire sur WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleLogicielGestionCourrierSenegal;
