import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Cpu, CreditCard, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServiceIntegrationPaiementMobileMoneyMachines() {
  const faq = [
    {
      q: "Pouvez-vous ajouter Wave ou Orange Money sur une machine qui prend déjà des pièces ?",
      a: "Oui. Nous étudions le monnayeur, la carte de commande et les sécurités existantes, puis nous ajoutons une passerelle mobile money sans supprimer forcément le paiement en pièces.",
    },
    {
      q: "Quels types de machines peuvent être équipés ?",
      a: "Distributeurs d'eau, machines de vente, bornes, kiosques, laveries, automatismes à monnayeur et équipements pilotables par relais, carte électronique ou automate.",
    },
    {
      q: "Comment éviter qu'une machine délivre un produit sans paiement confirmé ?",
      a: "La machine ne s'active qu'après confirmation côté serveur, avec référence unique, journalisation et contrôle anti-doublon pour limiter les fraudes et les erreurs réseau.",
    },
    {
      q: "Faut-il remplacer toute l'électronique de la machine ?",
      a: "Pas toujours. Sur beaucoup de machines, on peut ajouter un module de contrôle et conserver le monnayeur existant. Une visite technique permet de choisir l'approche la plus fiable.",
    },
  ];

  const features = [
    "Audit du monnayeur, de la carte de commande et du cycle de vente",
    "Ajout de Wave, Orange Money ou Free Money en complément des pièces",
    "Module ESP32/Arduino, relais, capteurs et affichage selon la machine",
    "Validation côté serveur avec référence de paiement unique",
    "Tableau de bord pour ventes, erreurs, stocks, volumes ou cycles",
    "Tests coupure réseau, reprise automatique et anti-doublon",
  ];

  const useCases = [
    "Distributeurs d'eau et fontaines automatiques",
    "Machines de vente alimentaires ou consommables",
    "Bornes de service, kiosques et laveries",
    "Automatismes industriels avec accès payant",
  ];

  const outcomes = [
    "Encaisser sans dépendre uniquement des pièces",
    "Réduire les déplacements de collecte de monnaie",
    "Suivre les ventes à distance",
    "Limiter les erreurs et les fraudes",
  ];

  return (
    <>
      <SEO
        path="/services/integration-paiement-mobile-money-machines"
        title="Intégration Wave Orange Money sur machine à pièces | Fallcon Tech Sénégal"
        description="Intégration mobile money Wave, Orange Money ou Free Money sur distributeurs automatiques, machines de vente, bornes et équipements à monnayeur au Sénégal."
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Intégration mobile money sur machine à pièces",
            description:
              "Ajout de Wave, Orange Money et Free Money sur distributeurs automatiques, machines de vente, kiosques et équipements à monnayeur au Sénégal.",
            provider: {
              "@type": "LocalBusiness",
              name: "Fallcon Tech",
              url: "https://fallcontech.com",
              telephone: "+221776260020",
              address: { "@type": "PostalAddress", addressLocality: "Dakar", addressCountry: "SN" },
            },
            areaServed: [{ "@type": "City", name: "Dakar" }, { "@type": "Country", name: "Sénégal" }],
            offers: { "@type": "Offer", url: "https://fallcontech.com/contact" },
            serviceType: "Intégration paiement mobile money IoT",
            url: "https://fallcontech.com/services/integration-paiement-mobile-money-machines",
            keywords:
              "intégration Wave machine à pièces, Orange Money distributeur automatique, paiement mobile money monnayeur, machine de vente Sénégal",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://fallcontech.com/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://fallcontech.com/services" },
              {
                "@type": "ListItem",
                position: 3,
                name: "Intégration paiement mobile money machines",
                item: "https://fallcontech.com/services/integration-paiement-mobile-money-machines",
              },
            ],
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

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6">
              <CreditCard className="text-primary-foreground" size={30} />
            </div>
            <h1 className="vt-title text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Intégration Wave et Orange Money sur machines à pièces
            </h1>
            <p className="text-xl text-foreground/80">
              Nous équipons les distributeurs automatiques, machines de vente, bornes et équipements
              à monnayeur pour accepter le paiement mobile money au Sénégal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-6">
                  <Cpu className="text-primary" size={28} />
                </div>
                <h2 className="text-3xl font-bold mb-4">Ce que nous intégrons</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Une solution terrain qui relie votre machine, le paiement mobile money et un serveur
                  de validation sécurisé.
                </p>
                <ul className="space-y-3 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link to="/contact">
                      Évaluer ma machine <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/article/integrer-paiement-machine-eau-esp32-senegal">
                      Voir l'approche technique
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-primary/5 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-bold text-2xl mb-6 text-primary">Machines concernées</h3>
                <div className="space-y-4 mb-10">
                  {useCases.map((item, index) => (
                    <div key={index} className="bg-card rounded-xl p-4 shadow-md">
                      <p className="font-semibold text-blue-600">{item}</p>
                    </div>
                  ))}
                </div>
                <h3 className="font-bold text-2xl mb-6 text-primary">Résultats attendus</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {outcomes.map((item, index) => (
                    <div key={index} className="bg-card rounded-xl p-4 shadow-md">
                      <p className="font-semibold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div>
              <ShieldCheck className="text-primary mb-4" size={32} />
              <h2 className="text-2xl font-bold mb-3">Validation sécurisée</h2>
              <p className="text-muted-foreground">
                La machine attend une confirmation serveur avant de délivrer le produit ou le service.
              </p>
            </div>
            <div>
              <CreditCard className="text-primary mb-4" size={32} />
              <h2 className="text-2xl font-bold mb-3">Paiement hybride</h2>
              <p className="text-muted-foreground">
                Les pièces peuvent rester disponibles pendant que Wave, Orange Money ou Free Money sont ajoutés.
              </p>
            </div>
            <div>
              <Cpu className="text-primary mb-4" size={32} />
              <h2 className="text-2xl font-bold mb-3">Supervision</h2>
              <p className="text-muted-foreground">
                Ventes, erreurs, cycles, volumes ou stocks peuvent être suivis depuis un tableau de bord.
              </p>
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-8 text-primary">FAQ</h2>
          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
