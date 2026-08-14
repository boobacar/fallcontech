import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgDev from "@/assets/articles/web_developer_dakar_meeting.png";

const ArticleDeveloppementWebProfessionnelSenegal = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/developpement-web-professionnel-senegal";
  const title = "Développement web professionnel au Sénégal : le guide 2026";
  const description = "Site vitrine, e-commerce, application métier : comment réussir un développement web professionnel au Sénégal — technologies, coûts, étapes et choix du bon prestataire à Dakar.";
  const keywords = "développement web professionnel sénégal, développement web dakar, développeur web sénégal, création site web professionnel sénégal, agence web dakar";
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      description,
      keywords,
      inLanguage: "fr-SN",
      author: { "@type": "Person", name: "Boubacar FALL" },
      publisher: { "@type": "Organization", name: "Fallcon Tech", url: site || "https://fallcontech.com" },
      mainEntityOfPage: `${site}${path}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Combien coûte un développement web professionnel au Sénégal ?",
          acceptedAnswer: { "@type": "Answer", text: "Comptez dès 350 000 F CFA pour un site vitrine, entre 600 000 et 1 500 000 F CFA pour un site e-commerce, et davantage pour une application métier sur mesure. Le prix dépend des fonctionnalités, du design, de la complexité et de la maintenance incluse." },
        },
        {
          "@type": "Question",
          name: "Combien de temps faut-il pour créer un site web professionnel ?",
          acceptedAnswer: { "@type": "Answer", text: "Un site vitrine peut être livré en 2 à 4 semaines, un e-commerce en 4 à 8 semaines, une application métier sur mesure en 1 à 3 mois selon le périmètre fonctionnel." },
        },
        {
          "@type": "Question",
          name: "Mon site sera-t-il visible sur Google après le lancement ?",
          acceptedAnswer: { "@type": "Answer", text: "Un site bien construit (rapide, mobile, contenu structuré, sitemap) commence à apparaître en quelques semaines. Les premières positions demandent un travail SEO continu de plusieurs mois." },
        },
        {
          "@type": "Question",
          name: "Site vitrine ou e-commerce : lequel choisir ?",
          acceptedAnswer: { "@type": "Answer", text: "Si vous vendez en ligne avec paiement Wave ou Orange Money, partez sur un e-commerce. Si votre objectif est d'être trouvé, de rassurer et de générer des contacts, un site vitrine optimisé suffit souvent." },
        },
      ],
    },
  ];

  return (
    <>
      <SEO path={path} title={`Développement web professionnel Sénégal : guide 2026 | Fallcon Tech`} description={description} type="article" jsonLd={jsonLd} author="Boubacar FALL" />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Développement web professionnel" }]} />
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold mb-3">Développement web • 8 min de lecture</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h1>
            <p className="mt-6 text-lg text-foreground/80">{description}</p>
          </Motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-headings:text-primary prose-a:text-blue-500">
          <img alt={title} className="w-full rounded-2xl shadow-xl mb-10" src={imgDev} loading="lazy" decoding="async" />
          <p className="lead">Un site web « qui marche » ne se résume pas à un joli visuel. C’est un outil rapide, visible sur Google, adapté au mobile et pensé pour convertir un visiteur en client. Voici ce qu’il faut savoir avant de lancer un développement web professionnel au Sénégal.</p>

          <section>
            <h2>Qu’est-ce qu’un développement web professionnel ?</h2>
            <p>La différence entre un site bricolé et un site professionnel tient en quatre points : la <strong>vitesse</strong> (temps de chargement), le <strong>référencement</strong> (structure et contenus lisibles par Google), la <strong>sécurité</strong> (mises à jour, sauvegardes) et la <strong>maintenance</strong> (le site évolue sans casser). Un site généré par un constructeur en ligne suffit parfois pour démarrer, mais il devient vite limité dès qu’il faut un paiement Wave ou Orange Money, une gestion de stocks, ou une performance irréprochable sur mobile.</p>
            <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
              {["Rapide et mobile-first", "Visible sur Google", "Sécurisé et sauvegardé", "Facile à maintenir"].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                  <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>Les projets web les plus demandés au Sénégal</h2>
            <ul>
              <li><strong>Site vitrine</strong> : présenter une entreprise, inspirer confiance, générer des appels et messages WhatsApp.</li>
              <li><strong>E-commerce</strong> : vendre en ligne avec paiement Wave, Orange Money ou Free Money et gérer la livraison locale.</li>
              <li><strong>Application métier</strong> : CRM, gestion de stock, facturation, suivi — adaptée aux processus réels de l’entreprise.</li>
              <li><strong>Plateforme ou portail</strong> : espace membres, tableau de bord, gestion documentaire pour une organisation.</li>
            </ul>
          </section>

          <section>
            <h2>Les technologies adaptées au marché sénégalais</h2>
            <p>Sur un marché majoritairement mobile et parfois sur des connexions limitées, les bons choix techniques font la différence. Les frameworks modernes comme <strong>React</strong> ou <strong>Next.js</strong> offrent vitesse et bon référencement. Il faut aussi intégrer dès le départ les <strong>passerelles de paiement mobile</strong> (Wave, Orange Money) et un hébergement fiable avec un CDN pour servir les pages rapidement au Sénégal comme à l’étranger.</p>
            <p>Notre page <Link to="/services/web-development-senegal">web development au Sénégal</Link> détaille notre approche technique.</p>
          </section>

          <section>
            <h2>Combien coûte un développement web professionnel ?</h2>
            <ul>
              <li><strong>Site vitrine</strong> : dès 350 000 F CFA.</li>
              <li><strong>E-commerce</strong> : 600 000 à 1 500 000 F CFA selon le catalogue et la logistique.</li>
              <li><strong>Application métier</strong> : budget établi après cadrage du besoin (nombre de modules, d’utilisateurs, d’intégrations).</li>
            </ul>
            <p>Méfiez-vous des tarifs trop bas : ils excluent souvent le design réel, le SEO, les tests ou la maintenance. Le vrai coût, c’est celui d’un site qui dure et qui ramène des clients, pas seulement d’une page mise en ligne.</p>
          </section>

          <section>
            <h2>Comment choisir son développeur ou son agence ?</h2>
            <ul>
              <li>Regardez les <strong>réalisations réelles</strong> (pas seulement des maquettes) : visitez les sites livrés.</li>
              <li>Vérifiez que le prestataire maîtrise le <strong>SEO</strong> et le <strong>mobile</strong>, pas seulement le visuel.</li>
              <li>Exigez un <strong>contrat clair</strong> : périmètre, délais, livrables, propriété du code, maintenance.</li>
              <li>Privilégiez un interlocuteur qui pose des questions sur votre <strong>activité</strong>, pas seulement sur vos goûts de design.</li>
            </ul>
            <p>Consultez notre guide <Link to="/article/comment-choisir-developpeur-web-dakar-senegal">pour choisir un développeur web à Dakar</Link>.</p>
          </section>

          <section>
            <h2>Les 5 étapes d’un projet réussi</h2>
            <ul>
              <li><strong>Cadrage</strong> : objectif, cible, fonctionnalités, budget, délais.</li>
              <li><strong>Maquette et UX</strong> : parcours mobile validé avant de coder.</li>
              <li><strong>Développement</strong> : itérations régulières, démonstrations.</li>
              <li><strong>Tests</strong> : performance, sécurité, paiement, navigateurs, mobile.</li>
              <li><strong>Lancement et maintenance</strong> : mise en ligne, suivi Google, évolutions.</li>
            </ul>
          </section>

          <section>
            <h2>Questions fréquentes</h2>
            <div className="not-prose grid gap-4">
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Combien coûte un développement web professionnel au Sénégal ?</h3>
                <p>Dès 350 000 F CFA pour un site vitrine, 600 000 à 1 500 000 F CFA pour un e-commerce, et davantage pour une application métier sur mesure selon le périmètre.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Combien de temps faut-il pour créer un site web professionnel ?</h3>
                <p>2 à 4 semaines pour un site vitrine, 4 à 8 semaines pour un e-commerce, 1 à 3 mois pour une application métier.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Mon site sera-t-il visible sur Google après le lancement ?</h3>
                <p>Un site bien construit apparaît en quelques semaines ; les premières positions demandent un travail SEO continu de plusieurs mois.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Site vitrine ou e-commerce : lequel choisir ?</h3>
                <p>E-commerce si vous vendez en ligne avec paiement mobile ; site vitrine optimisé si votre objectif est d’être trouvé et de générer des contacts.</p>
              </div>
            </div>
          </section>

          <div className="not-prose mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
            <p className="text-slate-800 font-medium mb-2">Vous avez un projet de site web ou d’application ?</p>
            <p className="text-slate-700">Fallcon Tech développe des sites et applications rapides, référencés et pensés pour le marché sénégalais. Présentez-nous votre besoin, nous vous répondons avec une trajectoire et un budget clairs.</p>
          </div>
          <div className="not-prose mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild><Link to="/contact">Demander un devis</Link></Button>
            <Button asChild variant="outline"><a href="https://wa.me/221774837576" target="_blank" rel="noopener noreferrer">Parler sur WhatsApp</a></Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleDeveloppementWebProfessionnelSenegal;
