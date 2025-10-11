import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgBooking from "@/assets/articles/online-reservation-system.png";
import { useI18n } from "@/i18n";

const ArticleBooking = () => {
  const { t } = useI18n();
  return (
    <>
      <SEO
        path="/article/booking-system-clinics-dakar"
        title={t('articles.booking.seo.title')}
        description={t('articles.booking.seo.description')}
        image={imgBooking}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: t('articles.booking.seo.headline'),
            image:
              (import.meta.env.VITE_SITE_URL ||
                (typeof window !== "undefined" ? window.location.origin : "")) +
              imgBooking,
            datePublished: "2025-07-10",
            dateModified: "2025-09-10",
            author: { "@type": "Person", name: "Boubacar FALL" },
            publisher: {
              "@type": "Organization",
              name: "Fallcon Tech",
              logo: {
                "@type": "ImageObject",
                url:
                  (import.meta.env.VITE_SITE_URL ||
                    (typeof window !== "undefined"
                      ? window.location.origin
                      : "")) + "/assets/logo.webp",
              },
            },
            mainEntityOfPage:
              (import.meta.env.VITE_SITE_URL ||
                (typeof window !== "undefined" ? window.location.origin : "")) +
              "/article/booking-system-clinics-dakar",
            description: t('articles.booking.seo.ldDescription'),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: t('common.breadcrumb.home'),
                item:
                  (import.meta.env.VITE_SITE_URL ||
                    (typeof window !== "undefined"
                      ? window.location.origin
                      : "")) + "/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: t('common.breadcrumb.resources'),
                item:
                  (import.meta.env.VITE_SITE_URL ||
                    (typeof window !== "undefined"
                      ? window.location.origin
                      : "")) + "/resources",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: t('articles.booking.breadcrumb'),
                item:
                  (import.meta.env.VITE_SITE_URL ||
                    (typeof window !== "undefined"
                      ? window.location.origin
                      : "")) + "/article/booking-system-clinics-dakar",
              },
            ],
          },
        ]}
      />

      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link
            to="/resources"
            className="inline-flex items-center text-primary hover:text-blue-500 mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            {t('articles.common.backToResources')}
          </Link>
          <Breadcrumbs
            items={[
              { label: t('common.breadcrumb.home'), to: "/" },
              { label: t('common.breadcrumb.resources'), to: "/resources" },
              { label: t('articles.booking.breadcrumb') },
            ]}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{t('articles.booking.title')}</h1>
            <p className="text-lg text-muted-foreground">{t('articles.booking.meta')}</p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 text-sm">
            Besoin d’intégrer la réservation en ligne ? Consultez nos {""}
            <Link to="/services" className="text-blue-600 hover:underline">
              services d’automatisation
            </Link>
            .
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <img
              alt="Une réception de clinique moderne avec une tablette affichant un système de réservation"
              className="w-full rounded-2xl shadow-xl mb-12"
              src={imgBooking}
              loading="lazy"
              decoding="async"
            />

            <p>
              Dans le paysage numérique actuel de Dakar, offrir une expérience
              patient fluide est plus qu'un luxe, c'est une nécessité. Un
              système de réservation en ligne efficace peut transformer le
              fonctionnement de votre clinique, réduire la charge administrative
              et améliorer la satisfaction des patients. Mais avec tant
              d'options disponibles, comment choisir la bonne ?
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Fonctionnalités Essentielles à Rechercher
            </h2>
            <p>
              Voici les fonctionnalités indispensables que tout système de
              réservation pour une clinique au Sénégal devrait posséder :
            </p>

            <ul className="space-y-4 my-8">
              <li className="flex items-start gap-3">
                <CheckCircle2
                  className="text-blue-500 flex-shrink-0 mt-1"
                  size={24}
                />
                <span>
                  <strong>Interface Mobile-First :</strong> La majorité des
                  Sénégalais accèdent à internet via leur téléphone. Votre
                  système de réservation doit être parfaitement utilisable sur
                  mobile.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  className="text-blue-500 flex-shrink-0 mt-1"
                  size={24}
                />
                <span>
                  <strong>Rappels Automatisés (SMS/WhatsApp) :</strong> Réduisez
                  les non-présentations en envoyant des rappels automatiques aux
                  patients. L'intégration de WhatsApp est particulièrement
                  efficace au Sénégal.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  className="text-blue-500 flex-shrink-0 mt-1"
                  size={24}
                />
                <span>
                  <strong>Gestion des disponibilités des médecins :</strong> Le
                  système doit permettre de gérer facilement les horaires de
                  plusieurs médecins et spécialités.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  className="text-blue-500 flex-shrink-0 mt-1"
                  size={24}
                />
                <span>
                  <strong>Paiement en Ligne :</strong> Intégrez des options de
                  paiement locales comme Orange Money ou Wave pour permettre aux
                  patients de payer les frais de consultation à l'avance.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  className="text-blue-500 flex-shrink-0 mt-1"
                  size={24}
                />
                <span>
                  <strong>Sécurité des Données :</strong> Assurez-vous que la
                  plateforme est conforme aux normes de sécurité pour protéger
                  les informations sensibles des patients.
                </span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Solution Standard vs. Solution sur Mesure
            </h2>
            <p>
              Les solutions prêtes à l'emploi peuvent être rapides à mettre en
              place, mais elles manquent souvent de flexibilité. Une solution
              sur mesure, bien que nécessitant un investissement initial plus
              important, peut être parfaitement adaptée aux processus uniques de
              votre clinique, s'intégrer à vos systèmes existants et offrir une
              meilleure expérience de marque.
            </p>
            <p>
              Par exemple, notre travail avec la <strong>Clinique DABIA</strong>{" "}
              a montré qu'un site web personnalisé avec un système de
              réservation intégré a permis d'augmenter le trafic mobile de 70%
              et d'automatiser entièrement le processus de prise de rendez-vous.
            </p>

            <div className="mt-12 bg-primary/10 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Prêt à moderniser votre clinique ?
              </h3>
              <p className="mb-6">
                Discutons de la manière dont un système de réservation sur
                mesure peut transformer votre pratique.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Planifier une consultation gratuite</Link>
              </Button>
            </div>
            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-3">Articles récents</h4>
              <ul className="list-disc list-inside text-sm text-blue-600">
                <li>
                  <Link to="/article/automating-follow-ups-whatsapp-senegal">
                    Automatiser les suivis clients avec WhatsApp
                  </Link>
                </li>
                <li>
                  <Link to="/article/seo-basics-senegalese-businesses">
                    Les bases du SEO pour les entreprises sénégalaises
                  </Link>
                </li>
                <li>
                  <Link to="/article/idea-to-mvp-2-weeks">
                    De l’idée au MVP en 2 semaines
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
};

export default ArticleBooking;
