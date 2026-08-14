import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticleRefonteSiteInternetSenegal = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/refonte-site-internet-senegal";
  const title = "Refonte de site internet au Sénégal : quand et comment";
  const description = "Signaux d’alerte, objectifs, budget et méthode : comment réussir la refonte de votre site internet au Sénégal sans perdre votre référencement.";
  const keywords = "refonte site internet sénégal, refonte site web dakar, refonte site vitrine, moderniser site internet sénégal, agence refonte site web";
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
          name: "Une refonte fait-elle perdre le référencement ?",
          acceptedAnswer: { "@type": "Answer", text: "Mal conduite, oui. Une refonte bien menée préserve les URLs existantes (ou met des redirections 301), conserve les contenus qui rankent et réutilise les balises. Le trafic peut alors se maintenir, voire progresser." },
        },
        {
          "@type": "Question",
          name: "Combien coûte une refonte de site au Sénégal ?",
          acceptedAnswer: { "@type": "Answer", text: "Le budget dépend de la taille du site, du design et des fonctionnalités. Il s’établit après un cadrage : un site vitrine à refondre coûte moins cher qu’un e-commerce avec comptes clients." },
        },
        {
          "@type": "Question",
          name: "Combien de temps prend une refonte ?",
          acceptedAnswer: { "@type": "Answer", text: "De 3 à 8 semaines pour un site vitrine, davantage pour un e-commerce ou une application, selon le contenu et les validations." },
        },
        {
          "@type": "Question",
          name: "Refonte complète ou simple amélioration ?",
          acceptedAnswer: { "@type": "Answer", text: "Si le site est lent, non mobile ou difficile à maintenir, une refonte est souvent plus rentable que des correctifs répétés. Si seuls le design ou quelques textes posent problème, une amélioration ciblée suffit." },
        },
      ],
    },
  ];

  return (
    <>
      <SEO path={path} title={`Refonte site internet Sénégal : quand et comment | Fallcon Tech`} description={description} type="article" jsonLd={jsonLd} author="Boubacar FALL" />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Refonte de site internet" }]} />
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold mb-3">Site web • 7 min de lecture</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h1>
            <p className="mt-6 text-lg text-foreground/80">{description}</p>
          </Motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-headings:text-primary prose-a:text-blue-500">
          <p className="lead">Un site internet qui date ne se contente pas de paraître vieux : il fait fuir vos visiteurs, plombe votre référencement et vous fait perdre des clients. Mais une refonte mal conduite peut coûter plus qu’elle ne rapporte. Voici comment décider et procéder.</p>

          <section>
            <h2>Les signes qu’il est temps de refondre</h2>
            <ul>
              <li><strong>Lenteur</strong> : le site met plus de 3 secondes à charger sur mobile.</li>
              <li><strong>Pas adapté au mobile</strong> : la majorité de vos visiteurs sont sur téléphone.</li>
              <li><strong>Pas de résultats</strong> : aucun lead, aucune demande depuis des mois.</li>
              <li><strong>Contenu obsolète</strong> : offres, tarifs ou coordonnées dépassés.</li>
              <li><strong>Difficile à modifier</strong> : chaque mise à jour dépend d’un prestataire ou d’un outil rigide.</li>
            </ul>
            <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
              {["Plus rapide", "Meilleur référencement", "Design à jour", "Plus de conversions"].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                  <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>Ce qu’une refonte doit corriger</h2>
            <ul>
              <li><strong>Technique</strong> : vitesse, mobile, sécurité, indexation.</li>
              <li><strong>Contenu</strong> : pages claires, réponses aux questions réelles, mots-clés locaux.</li>
              <li><strong>Conversion</strong> : formulaires, boutons WhatsApp, appels à l’action visibles.</li>
            </ul>
          </section>

          <section>
            <h2>Le piège du SEO : ne pas perdre l’existant</h2>
            <p>C’est l’erreur la plus coûteuse. Si votre site a déjà des pages qui rankent sur Google, les supprimer sans plan fait chuter votre trafic. Une refonte sérieuse :</p>
            <ul>
              <li>Conserve les URLs existantes ou met en place des <strong>redirections 301</strong>.</li>
              <li>Reprend les <strong>contenus qui performent</strong> au lieu de tout jeter.</li>
              <li>Réutilise les <strong>balises</strong> et le maillage interne.</li>
            </ul>
          </section>

          <section>
            <h2>Budget et délais</h2>
            <p>Une refonte de site vitrine se chiffre et se planifie après cadrage : nombre de pages, design, contenu, fonctionnalités. Elle prend typiquement de 3 à 8 semaines. Le bon réflexe : demander un audit de l’existant avant de chiffrer, pour savoir ce qui doit être conservé, corrigé ou reconstruit.</p>
            <p>Notre page <Link to="/services/creation-site-web-dakar">création de site web à Dakar</Link> couvre aussi les refontes.</p>
          </section>

          <section>
            <h2>Questions fréquentes</h2>
            <div className="not-prose grid gap-4">
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Une refonte fait-elle perdre le référencement ?</h3>
                <p>Mal conduite, oui. Bien menée, elle préserve les URLs (ou met des redirections 301), conserve les contenus qui rankent et réutilise les balises.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Combien coûte une refonte de site au Sénégal ?</h3>
                <p>Le budget dépend de la taille, du design et des fonctionnalités. Il s’établit après un cadrage du besoin.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Combien de temps prend une refonte ?</h3>
                <p>3 à 8 semaines pour un site vitrine, davantage pour un e-commerce ou une application.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Refonte complète ou simple amélioration ?</h3>
                <p>Site lent, non mobile ou difficile à maintenir : refonte. Seuls le design ou quelques textes posent problème : amélioration ciblée.</p>
              </div>
            </div>
          </section>

          <div className="not-prose mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
            <p className="text-slate-800 font-medium mb-2">Vous envisagez de refondre votre site ?</p>
            <p className="text-slate-700">Fallcon Tech audite votre site existant, préserve votre référencement et reconstruit une base rapide et orientée conversion. <Link to="/contact">Demandez une étude</Link>.</p>
          </div>
          <div className="not-prose mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild><Link to="/contact">Demander une étude</Link></Button>
            <Button asChild variant="outline"><a href="https://wa.me/221774837576" target="_blank" rel="noopener noreferrer">Parler sur WhatsApp</a></Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleRefonteSiteInternetSenegal;
