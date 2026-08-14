import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgWhatsapp from "@/assets/articles/whatsapp-automation.webp";

const ArticleAutomatisationWhatsappBusinessSenegal = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/automatisation-whatsapp-business-senegal";
  const title = "Automatisation WhatsApp Business au Sénégal : le guide complet";
  const description = "Relances prospects, rappels de rendez-vous, notifications et support : comment automatiser WhatsApp Business au Sénégal sans spam.";
  const keywords = "automatisation whatsapp business, whatsapp business sénégal, automate whatsapp messages, relance automatique whatsapp, whatsapp api sénégal";
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
          name: "Quelle différence entre l’application WhatsApp Business et l’API ?",
          acceptedAnswer: { "@type": "Answer", text: "L’application WhatsApp Business convient pour répondre manuellement à un petit volume. L’API (WhatsApp Business Platform) permet d’automatiser à grande échelle : relances, notifications, intégration à un CRM et à un site web." },
        },
        {
          "@type": "Question",
          name: "L’automatisation est-elle autorisée par WhatsApp ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, à condition d’utiliser les canaux officiels (application Business ou API) et de respecter les règles : consentement du contact, messages pertinents et possibilité de se désinscrire. Le spam de masse est interdit et peut faire bannir le numéro." },
        },
        {
          "@type": "Question",
          name: "Combien coûte une automatisation WhatsApp ?",
          acceptedAnswer: { "@type": "Answer", text: "Cela dépend du périmètre : nombre de workflows, volume de messages et intégrations. Un cadrage du besoin permet d’établir un budget clair." },
        },
        {
          "@type": "Question",
          name: "Peut-on connecter WhatsApp à un CRM ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, c’est l’un des usages les plus rentables : qualifier les prospects dans le CRM, relancer automatiquement et suivre chaque conversation." },
        },
      ],
    },
  ];

  return (
    <>
      <SEO path={path} title={`Automatisation WhatsApp Business Sénégal : guide | Fallcon Tech`} description={description} type="article" jsonLd={jsonLd} author="Boubacar FALL" />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Automatisation WhatsApp Business" }]} />
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold mb-3">Automatisation • 8 min de lecture</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h1>
            <p className="mt-6 text-lg text-foreground/80">{description}</p>
          </Motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-headings:text-primary prose-a:text-blue-500">
          <img alt={title} className="w-full rounded-2xl shadow-xl mb-10" src={imgWhatsapp} loading="lazy" decoding="async" />
          <p className="lead">Au Sénégal, WhatsApp est le canal où vos clients répondent le plus vite. L’automatisation permet d’envoyer le bon message au bon moment — sans y passer vos journées. À condition de respecter les règles et de viser la valeur, pas le spam.</p>

          <section>
            <h2>Ce qu’on peut automatiser</h2>
            <ul>
              <li><strong>Relances prospects</strong> : suivi automatique des demandes et des devis.</li>
              <li><strong>Rappels de rendez-vous</strong> : réduction des absences.</li>
              <li><strong>Notifications</strong> : confirmation de commande, suivi de livraison.</li>
              <li><strong>Support</strong> : réponses aux questions fréquentes, orientation.</li>
              <li><strong>Paniers abandonnés</strong> : relance des visiteurs e-commerce qui n’ont pas finalisé.</li>
            </ul>
            <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
              {["Gain de temps", "Réponses plus rapides", "Moins d’oublis", "Prospects qualifiés"].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                  <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>Application WhatsApp Business ou API ?</h2>
            <p>L’<strong>application WhatsApp Business</strong> suffit pour un petit volume : réponses rapides, messages d’absence, un ou deux relances manuelles. Dès qu’il faut automatiser à grande échelle, intégrer un CRM ou envoyer des notifications déclenchées par votre site, il faut passer par l’<strong>API WhatsApp Business</strong>. C’est la différence entre un outil de messagerie et un vrai canal de vente automatisé.</p>
            <p>Notre page <Link to="/services/automatisation-whatsapp-senegal">automatisation WhatsApp Business au Sénégal</Link> détaille l’approche.</p>
          </section>

          <section>
            <h2>Les règles anti-spam à respecter</h2>
            <ul>
              <li>Envoyer des messages <strong>pertinents et attendus</strong>, jamais de campagnes de masse non sollicitées.</li>
              <li>Obtenir le <strong>consentement</strong> du contact avant les messages commerciaux.</li>
              <li>Laisser une <strong>possibilité de se désinscrire</strong>.</li>
              <li>Utiliser uniquement les <strong>canaux officiels</strong> (pas d’outils non autorisés qui risquent de faire bannir le numéro).</li>
            </ul>
          </section>

          <section>
            <h2>Comment démarrer</h2>
            <ul>
              <li><strong>Identifier un processus à fort volume</strong> : relances, rappels, notifications.</li>
              <li><strong>Définir les messages</strong> : courts, utiles, avec un appel à l’action clair.</li>
              <li><strong>Choisir le bon canal</strong> : application Business pour démarrer, API pour automatiser.</li>
              <li><strong>Mesurer</strong> : taux de réponse, de conversion, et coût par lead.</li>
            </ul>
            <p>Pour aller plus loin : notre guide <Link to="/article/automatisation-whatsapp-ventes-senegal-2026">automatiser vos ventes WhatsApp</Link> et celui sur les <Link to="/article/workflows-whatsapp-crm-senegal">workflows WhatsApp + CRM</Link>.</p>
          </section>

          <section>
            <h2>Questions fréquentes</h2>
            <div className="not-prose grid gap-4">
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Quelle différence entre l’application WhatsApp Business et l’API ?</h3>
                <p>L’application convient au petit volume manuel ; l’API permet d’automatiser à grande échelle et d’intégrer un CRM ou un site web.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>L’automatisation est-elle autorisée par WhatsApp ?</h3>
                <p>Oui, via les canaux officiels et en respectant le consentement, la pertinence et la possibilité de se désinscrire. Le spam de masse peut faire bannir le numéro.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Combien coûte une automatisation WhatsApp ?</h3>
                <p>Cela dépend du nombre de workflows, du volume et des intégrations. Un cadrage du besoin permet d’établir un budget clair.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3>Peut-on connecter WhatsApp à un CRM ?</h3>
                <p>Oui : qualifier les prospects, relancer automatiquement et suivre chaque conversation, c’est l’usage le plus rentable.</p>
              </div>
            </div>
          </section>

          <div className="not-prose mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
            <p className="text-slate-800 font-medium mb-2">Vous voulez automatiser vos relances WhatsApp ?</p>
            <p className="text-slate-700">Fallcon Tech configure des relances, rappels et workflows WhatsApp Business adaptés à votre activité. <Link to="/services/automatisation-whatsapp-senegal">Découvrez la solution</Link>.</p>
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

export default ArticleAutomatisationWhatsappBusinessSenegal;
