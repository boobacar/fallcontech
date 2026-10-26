import React from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgPos from "@/assets/articles/pos_system_shop_senegal.webp";
import { useI18n } from "@/i18n";
import { motion } from "framer-motion";

const ArticlePOS = () => {
  const { t, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <>
      <SEO
        path="/article/logiciel-gestion-stock-caisse-senegal"
        title={t("articles.pos.seo.title")}
        description={t("articles.pos.seo.description")}
        image={imgPos}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: t("articles.pos.seo.headline"),
          image: (import.meta.env.VITE_SITE_URL || "") + imgPos,
          datePublished: "2025-11-25",
        }}
      />

      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link
            to="/resources"
            className="inline-flex items-center text-primary mb-8 hover:underline"
          >
            <ArrowLeft className="mr-2" size={20} />
            {t("articles.common.backToResources")}
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t("articles.pos.title")}
            </h1>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <img
            src={imgPos}
            width={1024}
            height={1024}
            alt="Logiciel de caisse point de vente Sénégal"
            className="w-full rounded-2xl shadow-xl mb-12"
          />

          <div className="prose prose-lg max-w-none">
            {isEn ? (
              <>
                <p>
                  Stop managing your shop with a notebook. Modern POS systems
                  are affordable and essential for growth.
                </p>
                <h2>Stock Management</h2>
                <p>Know exactly what you have without counting manually.</p>
                <h2>Anti-Theft</h2>
                <p>Track every sale and cash movement.</p>
              </>
            ) : (
              <>
                <p>
                  Beaucoup de commerces au Sénégal utilisent encore le cahier
                  pour gérer les ventes. C'est la porte ouverte aux erreurs de
                  calcul et aux "fuites" de stock.
                </p>
                <h2>Pourquoi informatiser sa caisse ?</h2>
                <p>Un logiciel de Point de Vente (POS) vous donne :</p>
                <ul>
                  <li>L'état de votre stock en temps réel.</li>
                  <li>Le rapport des ventes journalier automatique.</li>
                  <li>L'historique des dettes clients.</li>
                </ul>
                <h2>Cloud vs Local</h2>
                <p>
                  Avec les coupures internet, nous recommandons une solution{" "}
                  <strong>Hybride</strong> : qui fonctionne sans internet et se
                  synchronise quand la connexion revient.
                </p>
                <h2>Le matériel</h2>
                <p>
                  Douchette code-barres, imprimante thermique et écran tactile :
                  un investissement rentabilisé en 3 mois grâce à la réduction
                  des vols et erreurs.
                </p>
              </>
            )}

            <h2>{isEn ? "Where to get a POS system in Senegal?" : "Où trouver un système POS au Sénégal ?"}</h2>
            <p>
              {isEn
                ? "We install and configure point-of-sale systems for shops, pharmacies, restaurants and boutiques: touch cash register, cash drawer, receipt printer, barcode scanner and sales software that accepts mobile money."
                : "Nous installons et paramétrons les systèmes de point de vente pour les commerces, pharmacies, restaurants et boutiques : caisse tactile, tiroir-caisse, imprimante de tickets, lecteur code-barres et logiciel de vente encaissant le mobile money."}
            </p>
            <ul>
              <li>
                <Link to="/services/systemes-pos-caisse-senegal">
                  {isEn ? "POS systems in Senegal" : "Systèmes POS au Sénégal"}
                </Link>
              </li>
              <li>
                <Link to="/services/systemes-pos-caisse-cote-divoire">
                  {isEn ? "POS systems in Côte d'Ivoire" : "Systèmes POS en Côte d'Ivoire"}
                </Link>
              </li>
              <li>
                <Link to="/services/systemes-pos-caisse-cameroun">
                  {isEn ? "POS systems in Cameroon" : "Systèmes POS au Cameroun"}
                </Link>
              </li>
              <li>
                <Link to="/services/systemes-pos-caisse-mali">
                  {isEn ? "POS systems in Mali" : "Systèmes POS au Mali"}
                </Link>
              </li>
              <li>
                <Link to="/services/systemes-pos-caisse-burkina-faso">
                  {isEn ? "POS systems in Burkina Faso" : "Systèmes POS au Burkina Faso"}
                </Link>
              </li>
            </ul>

            <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {isEn ? "Demo our POS solution?" : "Démo de notre logiciel ?"}
              </h3>
              <Button asChild size="lg">
                <Link to="/contact">{t("common.cta.planCall")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticlePOS;
