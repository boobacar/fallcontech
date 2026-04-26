import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgDev from "@/assets/articles/web_developer_dakar_meeting.png";

const ArticleDeveloppeurFreelanceDakar = () => {
  const path = "/article/developpeur-freelance-dakar-embaucher";
  const title = "Embaucher un développeur freelance à Dakar : guide 2026";
  const description =
    "Comment trouver et embaucher le bon développeur freelance à Dakar : compétences à vérifier, tarifs réels, contrat, livrables et erreurs à éviter pour réussir votre projet web ou app au Sénégal.";

  const faq = [
    {
      q: "Quels sont les tarifs d'un développeur freelance à Dakar ?",
      a: "Un développeur web junior facture entre 200 000 et 400 000 F CFA par mois. Un développeur senior ou full-stack expérimenté facture entre 500 000 et 1 200 000 F CFA par mois ou propose des forfaits projet.",
    },
    {
      q: "Freelance ou agence web à Dakar : quelle différence ?",
      a: "Un freelance est souvent moins cher mais disponible sur un seul projet à la fois. Une agence web offre une équipe complémentaire (dev, design, SEO), des délais maîtrisés et un suivi structuré. Pour un projet professionnel, l'agence est souvent plus sûre.",
    },
    {
      q: "Comment vérifier les compétences d'un développeur à Dakar ?",
      a: "Demandez un portfolio avec liens actifs, vérifiez les GitHub/GitLab, testez sur un petit exercice technique, et vérifiez les témoignages clients. Évitez de choisir uniquement sur la base d'un CV.",
    },
    {
      q: "Quels sont les risques à éviter avec un freelance à Dakar ?",
      a: "Avance trop importante sans jalons, pas de contrat écrit, dépendance à une seule personne sans documentation du code, et délais non tenus sans pénalités. Structurez toujours votre projet en livrables mesurables.",
    },
  ];

  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");

  return (
    <>
      <SEO
        path={path}
        title={`${title} | Fallcon Tech`}
        description={description}
        image={imgDev}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description,
            image: site + imgDev,
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
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Développeur freelance Dakar" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-xl text-foreground/70 max-w-2xl">Trouver le bon développeur à Dakar pour votre projet web ou app mobile — ce guide vous évite les erreurs coûteuses.</p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <img alt={title} className="w-full rounded-2xl shadow-xl mb-10" src={imgDev} loading="lazy" decoding="async" />

          <h2>Pourquoi choisir le bon développeur est crucial</h2>
          <p>
            À Dakar, le marché du développement web et mobile est dynamique mais inégal. Entre les profils autodidactes, les agences structurées et les freelances expérimentés, il est facile de faire le mauvais choix et de perdre temps et argent sur un projet mal livré.
          </p>
          <p>
            Ce guide vous donne les outils pour évaluer, choisir, contractualiser et travailler efficacement avec un développeur au Sénégal — qu'il s'agisse d'un freelance individuel ou d'une agence.
          </p>

          <h2>Les profils de développeurs disponibles à Dakar</h2>

          <h3>Développeur web front-end</h3>
          <p>Spécialisé dans l'interface utilisateur : design, animations, responsive, performance. Technologies : HTML/CSS, React, Vue.js, Tailwind CSS.</p>

          <h3>Développeur web back-end</h3>
          <p>Côté serveur, bases de données, API, sécurité. Technologies : Node.js, Python, PHP, Firebase, PostgreSQL, MySQL.</p>

          <h3>Développeur full-stack</h3>
          <p>Front + back. Le profil le plus recherché pour les projets PME car il peut livrer une solution complète seul. C'est le profil de l'équipe Fallcon Tech.</p>

          <h3>Développeur mobile</h3>
          <p>Spécialisé dans les applications iOS et Android. Technologies : React Native, Flutter, Swift, Kotlin.</p>

          <h3>Développeur IoT / embarqué</h3>
          <p>Systèmes connectés, Arduino, ESP32, capteurs, paiements sur machines. Profil rare et très spécialisé. Voir notre article sur le <Link to="/article/developpement-iot-embarque-senegal-arduino-esp32">développement IoT au Sénégal</Link>.</p>

          <h2>Tarifs réels des développeurs à Dakar en 2026</h2>
          <div className="bg-card rounded-xl p-6 shadow-md not-prose mb-6">
            <table className="w-full text-sm">
              <thead><tr className="border-b"><th className="text-left py-2">Profil</th><th className="text-right py-2">Tarif mensuel</th><th className="text-right py-2">Tarif projet</th></tr></thead>
              <tbody>
                <tr className="border-b"><td className="py-2">Junior (1-2 ans)</td><td className="text-right">150 000 – 300 000</td><td className="text-right">Forfait</td></tr>
                <tr className="border-b"><td className="py-2">Intermédiaire (3-5 ans)</td><td className="text-right">350 000 – 600 000</td><td className="text-right">Forfait</td></tr>
                <tr className="border-b"><td className="py-2">Senior / Full-stack</td><td className="text-right">600 000 – 1 200 000</td><td className="text-right">Forfait</td></tr>
                <tr><td className="py-2">Agence web structurée</td><td className="text-right">Projet</td><td className="text-right">350 000 – 5 M+</td></tr>
              </tbody>
            </table>
            <p className="text-xs text-muted-foreground mt-2">Tarifs en F CFA. Variables selon la complexité du projet et l'expérience.</p>
          </div>

          <h2>Comment évaluer un développeur avant de l'embaucher</h2>
          <ol>
            <li><strong>Portfolio actif</strong> — vérifiez que les sites livrés fonctionnent encore en 2026, testez-les sur mobile</li>
            <li><strong>GitHub ou GitLab</strong> — regardez la régularité des commits, la qualité du code, les projets open source</li>
            <li><strong>Entretien technique</strong> — posez des questions concrètes : "Comment optimisez-vous les Core Web Vitals ?" ou "Comment intégrez-vous Wave dans un site ?"</li>
            <li><strong>Références clients</strong> — appelez au moins un client précédent</li>
            <li><strong>Mini-projet test</strong> — proposez un exercice technique payé sur 2-3 jours avant de vous engager sur un gros budget</li>
          </ol>

          <h2>Ce que doit contenir votre contrat avec un développeur</h2>
          <ul>
            <li>Périmètre précis (liste des pages/fonctionnalités)</li>
            <li>Jalons de livraison avec dates et paiements associés</li>
            <li>Propriété du code source (vous devez être propriétaire)</li>
            <li>Clause de confidentialité</li>
            <li>Procédure de recette (validation) et gestion des bugs post-livraison</li>
            <li>Conditions de maintenance et de support</li>
          </ul>

          <h2>Freelance vs Agence web à Dakar : tableau comparatif</h2>
          <div className="bg-card rounded-xl p-6 shadow-md not-prose mb-6">
            <table className="w-full text-sm">
              <thead><tr className="border-b"><th className="text-left py-2">Critère</th><th className="text-center py-2">Freelance</th><th className="text-center py-2">Agence</th></tr></thead>
              <tbody>
                <tr className="border-b"><td className="py-2">Coût</td><td className="text-center">Moins cher</td><td className="text-center">Plus élevé</td></tr>
                <tr className="border-b"><td className="py-2">Disponibilité</td><td className="text-center">Variable</td><td className="text-center">Garantie</td></tr>
                <tr className="border-b"><td className="py-2">Compétences multiples</td><td className="text-center">Limitées</td><td className="text-center">Dev + Design + SEO</td></tr>
                <tr className="border-b"><td className="py-2">Délais</td><td className="text-center">Risque</td><td className="text-center">Contractuels</td></tr>
                <tr className="border-b"><td className="py-2">Suivi post-livraison</td><td className="text-center">Incertain</td><td className="text-center">Structuré</td></tr>
                <tr><td className="py-2">Idéal pour</td><td className="text-center">Petits projets</td><td className="text-center">Projets business</td></tr>
              </tbody>
            </table>
          </div>

          <p>Voir aussi notre article : <Link to="/article/freelance-ou-agence-web-senegal-que-choisir">Freelance ou agence web au Sénégal : que choisir ?</Link></p>

          <h2>Les signaux d'alarme à surveiller</h2>
          <ul>
            <li>🚩 Demande d'avance supérieure à 50 % sans jalon intermédiaire</li>
            <li>🚩 Pas de contrat écrit ou contrat vague</li>
            <li>🚩 Portfolio avec des sites qui ne fonctionnent plus</li>
            <li>🚩 Impossibilité de montrer du code source sur demande</li>
            <li>🚩 Promesses irréalistes ("site prêt en 3 jours pour 50 000 F CFA")</li>
            <li>🚩 Pas de GitHub ni de présence professionnelle vérifiable</li>
          </ul>

          <h2>FAQ — Développeur freelance Dakar</h2>
          {faq.map((f, i) => (
            <div key={i}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}

          <h2>Articles liés</h2>
          <p>
            <Link to="/article/agence-web-dakar-comment-choisir-2026">Choisir une agence web à Dakar en 2026</Link> —{" "}
            <Link to="/article/comment-choisir-developpeur-web-dakar-senegal">Comment choisir son développeur web</Link> —{" "}
            <Link to="/pricing">Nos tarifs</Link>
          </p>

          <div className="not-prose mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Discuter de mon projet</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://wa.me/221776260020" target="_blank" rel="noopener noreferrer">
                Écrire sur WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleDeveloppeurFreelanceDakar;
