import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgWhatsapp from "@/assets/articles/whatsapp-automation.webp";

const ArticleWorkflowsWhatsapp = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/workflows-whatsapp-crm-senegal";
  const title = "Workflows WhatsApp + CRM au Sénégal : relances et ventes";
  const description =
    "Comment connecter WhatsApp Business à votre CRM pour automatiser relances, paniers abandonnés et support client au Sénégal.";

  return (
    <>
      <SEO
        path={path}
        title={`${title} | Fallcon Tech`}
        description={description}
        image={imgWhatsapp}
        type="article"
        imageAlt="Messages WhatsApp automatisés pour le CRM"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            image: site + imgWhatsapp,
            datePublished: "2025-10-20",
            dateModified: "2025-10-20",
            author: { "@type": "Person", name: "Fallcon Tech" },
            publisher: { "@type": "Organization", name: "Fallcon Tech", logo: { "@type": "ImageObject", url: site + "/logo.png" } },
            mainEntityOfPage: site + path,
            description,
            articleSection: "Automatisation",
            keywords: "WhatsApp Business Sénégal, CRM, automatisation, relance client, chatbot, workflows",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: site + "/" },
              { "@type": "ListItem", position: 2, name: "Ressources", item: site + "/resources" },
              { "@type": "ListItem", position: 3, name: title, item: site + path },
            ],
          },
        ]}
      />

      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />
            Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Automatisation" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-lg text-muted-foreground">Connecter WhatsApp Business, CRM et emails pour relances automatiques et support.</p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 text-sm">
            Besoin d’un workflow sur-mesure ? Consultez nos{" "}
            <Link to="/services" className="text-blue-600 hover:underline">offres d’automatisation</Link>.
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <img
              alt="Messages WhatsApp automatisés pour le CRM"
              className="w-full rounded-2xl shadow-xl mb-12"
              src={imgWhatsapp}
              loading="lazy"
              decoding="async"
            />

            <h2 className="text-3xl font-bold mt-4 mb-4">Cas d’usage qui convertissent</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Relances paniers abandonnés e-commerce (Wave/OM) avec lien de paiement.</li>
              <li>Prise de rendez-vous automatisée : lien calendrier + rappels avant le créneau.</li>
              <li>Support client : tri des tickets, réponses pré-remplies, escalade vers un agent.</li>
              <li>Onboarding : messages programmés après inscription pour guider l’utilisateur.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-10 mb-4">Connexion WhatsApp + CRM</h2>
            <p>
              Utilisez l’API WhatsApp Business via un fournisseur officiel, stockez les conversations dans le CRM et déclenchez des scénarios via
              des tags ou des pipelines. Pensez au consentement, aux horaires d’envoi et aux modèles approuvés.
            </p>

            <div className="bg-card p-5 rounded-xl border my-6">
              <div className="flex items-start gap-3">
                <MessageCircle className="text-primary mt-1" size={20} />
                <div>
                  <strong>Checklist technique :</strong>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Webhook sécurisé pour synchroniser statuts (envoyé, lu, répondu).</li>
                    <li>Base de données centralisée (CRM) pour segmenter et scorer.</li>
                    <li>Dashboard de performance : taux de réponse, ROI des campagnes.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Automatiser WhatsApp + CRM</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleWorkflowsWhatsapp;
