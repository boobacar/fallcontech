import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgMobile from "@/assets/articles/mobile-first-design.png";

const ArticleDeveloppementAppMobileDakar = () => {
  const path = "/article/developpement-application-mobile-dakar";
  const title = "Développement application mobile à Dakar : guide complet 2026";
  const description =
    "Tout ce qu'il faut savoir pour faire développer une application mobile à Dakar : coûts, technologies, délais, erreurs à éviter et comment choisir le bon développeur au Sénégal.";

  const faq = [
    {
      q: "Combien coûte le développement d'une application mobile au Sénégal ?",
      a: "Une app mobile simple (catalogue, réservation, formulaires) démarre autour de 800 000 à 1 500 000 F CFA. Une application avec back-office, paiements et notifications dépasse souvent 2,5 M F CFA.",
    },
    {
      q: "Faut-il développer une app native ou une PWA ?",
      a: "Pour la majorité des PME sénégalaises, une Progressive Web App (PWA) ou une app React Native est le meilleur rapport qualité/prix : une seule base de code pour Android et iOS, moins de coûts de maintenance.",
    },
    {
      q: "En combien de temps livre-t-on une application mobile ?",
      a: "Un MVP fonctionnel se livre en 4 à 8 semaines. Une application complète avec intégrations paiement mobile (Wave, Orange Money) prend 2 à 4 mois.",
    },
    {
      q: "Comment intégrer Wave ou Orange Money dans une app mobile ?",
      a: "Via les API officielles Wave Business et Orange Money Sénégal. Nous gérons l'intégration, les tests en sandbox et la mise en production avec validation des partenaires de paiement.",
    },
  ];

  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");

  return (
    <>
      <SEO
        path={path}
        title={`${title} | Fallcon Tech`}
        description={description}
        image={imgMobile}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description,
            image: site + imgMobile,
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
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Application mobile Dakar" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-xl text-foreground/70 max-w-2xl">Que vous soyez entrepreneur, clinique, restaurant ou PME à Dakar : voici comment concrétiser votre projet d'application mobile avec le bon budget et les bonnes technologies.</p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <img alt={title} className="w-full rounded-2xl shadow-xl mb-10" src={imgMobile} loading="lazy" decoding="async" />

          <h2>Pourquoi développer une application mobile au Sénégal en 2026 ?</h2>
          <p>
            Plus de <strong>85 % des Sénégalais</strong> accèdent à internet depuis un smartphone. Une application mobile bien conçue vous donne un avantage concurrentiel immédiat : commandes en ligne, réservations, suivi de livraison, fidélisation client, ou gestion interne d'équipe.
          </p>
          <p>
            À Dakar, les secteurs qui adoptent le plus les apps mobiles sont : la restauration, les cliniques et cabinets médicaux, le commerce (e-commerce + livreurs), les associations et ONG, et les PME qui veulent digitaliser leur gestion terrain.
          </p>

          <h2>Types d'applications mobiles que nous développons</h2>
          <ul>
            <li><strong>Application client (B2C)</strong> — commande en ligne, réservation, catalogue produits, programme de fidélité</li>
            <li><strong>Application de gestion interne (B2B)</strong> — suivi des équipes terrain, inventaire, rapports, signatures électroniques</li>
            <li><strong>Application médicale</strong> — prise de rendez-vous, dossiers patients, notifications SMS/WhatsApp</li>
            <li><strong>Application de livraison</strong> — tracking GPS, assignation de courses, confirmation à la livraison</li>
            <li><strong>Application IoT</strong> — contrôle de machines à distance, tableaux de bord capteurs, alertes temps réel</li>
          </ul>

          <h2>Quelle technologie choisir ?</h2>
          <p>Pour la majorité des projets à Dakar, voici les 3 options réalistes :</p>

          <h3>1. Progressive Web App (PWA)</h3>
          <p>Un site web qui se comporte comme une app mobile : installable sur l'écran d'accueil, fonctionne hors ligne, notifications push. <strong>Avantage</strong> : coût divisé par 2, pas besoin de validation Google Play ni App Store. Idéal pour les PME avec un budget serré.</p>

          <h3>2. React Native (iOS + Android)</h3>
          <p>Une seule base de code pour les deux plateformes. Interface native, accès caméra, géolocalisation, notifications. C'est notre stack principal pour les apps mobiles chez Fallcon Tech. <strong>Délai type</strong> : 6 à 12 semaines pour un MVP.</p>

          <h3>3. Application native (Swift / Kotlin)</h3>
          <p>Performances maximales pour des apps très complexes (jeux, IA embarquée, hardware spécifique). Budget plus élevé et délai plus long — recommandé seulement quand les deux premières options ne suffisent pas.</p>

          <h2>Coûts réels à Dakar en 2026</h2>
          <div className="bg-card rounded-xl p-6 shadow-md not-prose mb-6">
            <table className="w-full text-sm">
              <thead><tr className="border-b"><th className="text-left py-2">Type de projet</th><th className="text-right py-2">Fourchette</th></tr></thead>
              <tbody>
                <tr className="border-b"><td className="py-2">PWA simple (catalogue + contact)</td><td className="text-right">350 000 – 700 000 F CFA</td></tr>
                <tr className="border-b"><td className="py-2">App réservation / commande (React Native)</td><td className="text-right">900 000 – 1 800 000 F CFA</td></tr>
                <tr className="border-b"><td className="py-2">App avec paiement Wave/Orange Money</td><td className="text-right">1 500 000 – 3 000 000 F CFA</td></tr>
                <tr><td className="py-2">Plateforme complète (multi-rôles, back-office)</td><td className="text-right">3 000 000 F CFA +</td></tr>
              </tbody>
            </table>
          </div>
          <p>Ces tarifs incluent design, développement, tests, déploiement et formation à l'utilisation.</p>

          <h2>Intégration des paiements mobiles au Sénégal</h2>
          <p>L'intégration de <strong>Wave Business</strong>, <strong>Orange Money</strong> et <strong>Free Money</strong> dans une application mobile est un point critique pour le marché sénégalais. Notre équipe a déjà livré plusieurs projets avec ces intégrations, y compris sur des systèmes IoT (machines à eau, distributeurs automatiques).</p>
          <p>Voir notre article détaillé : <Link to="/article/passerelles-paiement-iot-wave-orange-free">Passerelles de paiement IoT au Sénégal</Link>.</p>

          <h2>Étapes de développement d'une app mobile</h2>
          <ol>
            <li><strong>Cadrage (1 semaine)</strong> — définition des fonctionnalités, user stories, wireframes</li>
            <li><strong>Design UI/UX (1-2 semaines)</strong> — maquettes, couleurs, composants, validation client</li>
            <li><strong>Développement (3-8 semaines)</strong> — front-end, back-end, API, intégrations paiement</li>
            <li><strong>Tests & corrections (1-2 semaines)</strong> — tests fonctionnels, tests sur vrais appareils Android</li>
            <li><strong>Déploiement (1 semaine)</strong> — mise en production, publication stores, formation équipe</li>
            <li><strong>Maintenance</strong> — mises à jour, nouvelles fonctionnalités, support</li>
          </ol>

          <h2>5 erreurs à éviter lors de votre projet d'app mobile</h2>
          <ul>
            <li>❌ Vouloir tout développer dès le départ — commencez par un MVP</li>
            <li>❌ Négliger l'UX mobile — 70 % des utilisateurs quittent une app mal conçue après 2 minutes</li>
            <li>❌ Oublier le mode hors-ligne — essentiel dans les zones à couverture réseau variable</li>
            <li>❌ Choisir une technologie exotique difficile à maintenir localement</li>
            <li>❌ Ne pas prévoir la maintenance — une app sans mise à jour devient un risque de sécurité</li>
          </ul>

          <h2>FAQ — Application mobile à Dakar</h2>
          {faq.map((f, i) => (
            <div key={i}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}

          <h2>Articles liés</h2>
          <p>
            <Link to="/article/idea-to-mvp-2-weeks">De l'idée au MVP en 2 semaines</Link> —{" "}
            <Link to="/article/choosing-right-tech-stack">Choisir la bonne stack technique</Link> —{" "}
            <Link to="/services/creation-site-web-dakar">Création de site web à Dakar</Link>
          </p>

          <div className="not-prose mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Demander un devis pour mon app</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://wa.me/221776260020" target="_blank" rel="noopener noreferrer">
                Discuter sur WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleDeveloppementAppMobileDakar;
