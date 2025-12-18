import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgPay from "@/assets/articles/payment-gateways.svg";

const ArticleEcommerceSenegal = () => {
  const site = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  const path = "/article/ecommerce-senegal-wave-orange";
  const title = "E-commerce au Sénégal : Wave, Orange Money, Free Money et logistique";
  const description =
    "Blueprint e-commerce pour le Sénégal : passerelles de paiement mobile (Wave, Orange Money, Free), logistique locale et fiches produits SEO.";

  return (
    <>
      <SEO
        path={path}
        title={`${title} | Fallcon Tech`}
        description={description}
        image={imgPay}
        type="article"
        imageAlt="Illustration de paiement mobile pour e-commerce au Sénégal"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            image: site + imgPay,
            datePublished: "2025-10-20",
            dateModified: "2025-10-20",
            author: { "@type": "Person", name: "Fallcon Tech" },
            publisher: { "@type": "Organization", name: "Fallcon Tech", logo: { "@type": "ImageObject", url: site + "/logo.png" } },
            mainEntityOfPage: site + path,
            description,
            articleSection: "E-commerce",
            keywords: "e-commerce Sénégal, Wave, Orange Money, Free Money, passerelle paiement, logistique Dakar, boutique en ligne",
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
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "E-commerce" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-lg text-muted-foreground">Stack paiement mobile, logistique, SEO produit et automatisations pour vendre au Sénégal.</p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 text-sm">
            Prêt à lancer une boutique ? Découvrez nos{" "}
            <Link to="/services" className="text-blue-600 hover:underline">offres e-commerce locales</Link>.
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <img
              alt="Illustration de paiement mobile pour e-commerce au Sénégal"
              className="w-full rounded-2xl shadow-xl mb-12"
              src={imgPay}
              loading="lazy"
              decoding="async"
            />

            <h2 className="text-3xl font-bold mt-4 mb-4">Paiements mobiles fiables</h2>
            <p>
              Pour convertir, vous devez proposer Wave, Orange Money, Free Money et, idéalement, carte bancaire. Optez pour une passerelle qui
              fournit des <strong>notifications serveur</strong>, un mode test et des références uniques pour éviter les doublons.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Webhook sécurisé (HTTPS, secret partagé) avant de déclencher l’expédition.</li>
              <li>Gestion des remboursements/annulations et journal d’audit.</li>
              <li>Pages de paiement rapides et adaptées mobile-first.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-10 mb-4">Logistique et expérience client</h2>
            <p>
              Connectez un partenaire de livraison local, proposez <strong>click & collect</strong>, et notifiez par WhatsApp/SMS à chaque étape.
              Un suivi colis clair réduit les litiges et augmente les avis positifs.
            </p>
            <div className="bg-card p-5 rounded-xl border my-6">
              <div className="flex items-start gap-3">
                <ShoppingBag className="text-primary mt-1" size={20} />
                <div>
                  <strong>Bonnes pratiques :</strong>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Délais et zones livrées indiqués dès la fiche produit.</li>
                    <li>Emails/WhatsApp transactionnels pour paiement, préparation, expédition.</li>
                    <li>Politique de retour visible et formulaire simple.</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-10 mb-4">SEO produit et campagnes</h2>
            <p>
              Rédigez des fiches produits uniques avec mots-clés longue traîne ("robe wax Dakar", "sneakers livraison express Dakar").
              Structurez vos pages avec données structurées Product et alimentez un flux Google Merchant/Facebook.
            </p>
          </motion.div>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Lancer une boutique optimisée</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleEcommerceSenegal;
