import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ArticleVisibleGoogleMapsEntrepriseSenegal = () => {
  const path = "/article/visible-google-maps-entreprise-senegal";
  const title = "Être visible sur Google Maps : la méthode";
  const description = "Méthode concrète pour rendre une entreprise sénégalaise visible sur Google Maps : fiche d’établissement, avis clients, cohérence des informations et actions utiles.";
  const faq = [
    {
      q: "Combien de temps avant que ma fiche soit visible ?",
      a: "La création est immédiate, mais la vérification et l’affichage complet peuvent prendre quelques jours. Ensuite, la visibilité progresse avec une fiche complète, des photos réelles, des avis réels et des publications régulières.",
    },
    {
      q: "Faut-il une adresse fixe pour apparaître sur Google Maps ?",
      a: "Si vous recevez des clients, oui : l’adresse de la fiche doit être celle où ils viennent. Si vous vous déplacez uniquement, vous pouvez indiquer une zone desservie et masquer l’adresse, à condition de rester conforme aux règles de Google.",
    },
    {
      q: "Puis-je mettre mon activité sur plusieurs fiches pour couvrir la ville ?",
      a: "Non. Une seule fiche par établissement. Créer des doublons pour couvrir des quartiers risque de diviser vos avis et d’entraîner une suspension des fiches concernées.",
    },
    {
      q: "Comment obtenir plus d’avis sans enfreindre les règles ?",
      a: "Demandez à des clients réels, au bon moment, avec un lien direct vers la fiche. N’achetez pas d’avis, ne les écrivez pas vous-même et n’offrez pas de contrepartie abusive.",
    },
    {
      q: "Et si un client laisse un avis négatif ?",
      a: "Répondez calmement, reconnaissez le problème lorsqu’il est réel et proposez une solution. Un avis négatif bien traité montre aux autres lecteurs comment vous gérez les difficultés.",
    },
  ];

  return (
    <>
      <SEO
        path={path}
        title={`${title} | Fallcon Tech`}
        description={description}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          },
        ]}
      />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Visible sur Google Maps" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
          </motion.div>
        </div>
      </section>
      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <p>
            Beaucoup d’entreprises sénégalaises excellent dans leur métier mais restent difficiles à trouver au moment où un client cherche un produit ou un service près de chez lui. La fiche d’établissement sur Google Maps est le point de contact le plus direct entre votre activité et la visibilité dans les recherches locales. Bien tenue, elle oriente vers votre numéro, votre adresse et votre site. Négligée, elle laisse la place à d’autres. Cet article détaille une méthode simple, sans promesse impossible, fondée sur les règles publiées par Google concernant la fiche d’établissement.
          </p>

          <section>
            <h2>Pourquoi la fiche d’établissement pèse sur les appels et les visites</h2>
            <p>
              Quand une personne tape « réparateur près de moi » ou « restaurant Dakar », Google affiche d’abord des fiches locales avant les sites. La fiche est donc souvent le premier contact, parfois le seul. Elle montre le nom, la note, les avis, les photos, les horaires et des boutons pour appeler ou obtenir l’itinéraire. Une fiche complète rassure en quelques secondes ; une fiche vide ou approximative fait douter, même lorsque le travail est de qualité. L’enjeu n’est pas d’attirer n’importe qui, mais de capter les personnes déjà proches de l’achat et de les amener vers un appel, un message ou une visite.
            </p>
          </section>

          <section>
            <h2>Créer et faire vérifier sa fiche</h2>
            <ul>
              <li>Revendiquez la fiche au nom réel de votre entreprise et lancez la procédure de vérification. Sans vérification, vous ne contrôlez ni les informations ni les réponses aux avis.</li>
              <li><strong>Nom exact :</strong> identique partout, à l’enseigne, au registre, sur le site et sur les réseaux. N’ajoutez pas de qualificatifs au nom pour plaire aux recherches, Google l’interdit.</li>
              <li><strong>Adresse :</strong> numéro, rue, quartier et un repère utile. Si vous recevez des clients, l’adresse doit être celle où ils viennent réellement.</li>
              <li><strong>Zone desservie :</strong> si vous vous déplacez (artisan, plombier, livreur), indiquez les communes ou quartiers couverts et masquez l’adresse si vous n’accueillez pas de public.</li>
              <li><strong>Téléphone et site :</strong> un numéro joignable aux heures affichées et un site qui se charge correctement sur mobile.</li>
              <li><strong>Catégorie principale et secondaires :</strong> la principale décrit votre métier réel ; les secondaires précisent votre offre sans vous disperser.</li>
              <li><strong>Horaires et jours fériés :</strong> tenez-les à jour, avec les horaires spéciaux des fêtes et des périodes de forte activité.</li>
            </ul>
          </section>

          <section>
            <h2>Les éléments qui font la différence</h2>
            <ul>
              <li>Des photos réelles de la façade, de l’intérieur, de l’équipe et du travail en cours. Évitez les images d’illustration génériques.</li>
              <li>Vos produits ou services listés avec un intitulé clair et une description courte, et, lorsque c’est utile, un prix ou une fourchette.</li>
              <li>Les attributs à cocher selon la réalité : accessibilité, moyens de paiement, stationnement, langues parlées.</li>
              <li>Une description de l’entreprise honnête, sans superlatifs ni promesses : ce que vous faites, pour qui, où et comment vous contacter.</li>
              <li>Un message de bienvenue en une phrase qui invite simplement à appeler ou à passer.</li>
            </ul>
          </section>

          <section>
            <h2>Les avis clients : demander, répondre, encaisser</h2>
            <ul>
              <li>Demandez l’avis après une prestation réussie, en personne ou par message, avec un lien direct vers la fiche. Sollicitez des clients réels, jamais contre un avantage déguisé.</li>
              <li>Répondez à tous les avis, positifs comme négatifs. Remerciez brièvement sur un avis favorable ; restez posé et professionnel sur un avis mitigé.</li>
              <li>Avis négatif : accusez réception, reconnaissez le problème s’il est justifié, proposez une solution concrète et poursuivez l’échange en privé. Ne polémiquez pas.</li>
              <li>Ce qui est interdit : les faux avis, les avis rédigés par votre propre équipe, les avis achetés et les incitations trompeuses. Ces pratiques peuvent entraîner des sanctions sur la fiche.</li>
              <li>Ne demandez jamais à un client de retirer un avis authentique. Répondez plutôt.</li>
            </ul>
          </section>

          <section>
            <h2>Publier régulièrement sur la fiche</h2>
            <ul>
              <li>Types de publications utiles : une nouveauté, une offre saisonnière, un arrivage, un événement, un conseil pratique ou les coulisses de l’atelier et du magasin.</li>
              <li>Une publication courte avec une photo réelle et une phrase d’action suffit. La régularité compte plus que la longueur.</li>
              <li>Questions et réponses de la fiche : ajoutez les questions que vos clients posent souvent et répondez vous-même. Cela évite les interprétations et fait gagner du temps à tout le monde.</li>
            </ul>
          </section>

          <section>
            <h2>Nom, adresse, téléphone : la même information partout</h2>
            <ul>
              <li>Sur le site (pied de page, page contact), les réseaux sociaux, les annuaires et les signatures d’e-mail : mêmes informations, même orthographe.</li>
              <li>Une adresse écrite différemment selon les supports crée de la confusion et affaiblit la confiance accordée à la fiche.</li>
              <li>Vérifiez les anciennes mentions devenues obsolètes si vous avez déménagé ou changé de numéro.</li>
            </ul>
          </section>

          <section>
            <h2>Les erreurs qui pénalisent</h2>
            <ul>
              <li>Une adresse fictive ou approximative, pour « être dans le quartier ».</li>
              <li>Une catégorie trop large : une catégorie imprécise éloigne les recherches qui vous concernent vraiment.</li>
              <li>Une fiche ni revendiquée ni vérifiée : vous subissez alors les modifications d’autres personnes.</li>
              <li>Les doublons de fiche : plusieurs fiches pour un même établissement divisent les avis et brouillent les informations.</li>
              <li>Des photos volées ou retouchées qui ne correspondent pas au lieu.</li>
              <li>Des informations abandonnées : téléphone qui ne répond plus, horaires faux, site en panne.</li>
            </ul>
          </section>

          <section>
            <h2>Relier la fiche et le site</h2>
            <ul>
              <li>Une page de contact avec l’adresse, un plan, le numéro cliquable et les horaires à jour.</li>
              <li>Un bouton d’appel et un bouton d’itinéraire pensés d’abord pour le mobile.</li>
              <li>Une page dédiée par établissement si vous avez plusieurs points de vente, reprenant les mêmes informations que la fiche.</li>
              <li>Un suivi des demandes : notez d’où viennent les appels et les messages pour savoir ce qui fonctionne, puis ajustez.</li>
            </ul>
          </section>

          <section>
            <h2>Liste de contrôle en 12 points</h2>
            <ol>
              <li>Fiche revendiquée et vérifiée.</li>
              <li>Nom exact identique à l’enseigne.</li>
              <li>Adresse exacte et repère clair.</li>
              <li>Zone desservie définie.</li>
              <li>Téléphone joignable.</li>
              <li>Site web valide.</li>
              <li>Catégorie principale pertinente.</li>
              <li>Catégories secondaires justes.</li>
              <li>Horaires et jours fériés à jour.</li>
              <li>Photos réelles publiées.</li>
              <li>Produits ou services décrits.</li>
              <li>Avis demandés et tous commentés.</li>
            </ol>
          </section>

          <section>
            <h2>Questions fréquentes</h2>
            <div className="not-prose grid gap-4">
              {faq.map((item) => (
                <div key={item.q} className="bg-card border border-border rounded-xl p-5">
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="not-prose mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
            <p className="text-slate-800 font-medium mb-2">Vous voulez passer de la méthode à l’action ?</p>
            <p className="text-slate-700">
              Rendre une entreprise sénégalaise visible sur Google Maps demande plus de régularité que de technique : une fiche complète, des avis suivis, des informations cohérentes et un site qui prolonge l’expérience locale suffisent à capter des demandes qualifiées. Pour aller plus loin, découvrez{" "}
              <Link to="/services/seo-referencement-senegal">notre offre de référencement au Sénégal</Link>, consultez{" "}
              <Link to="/article/agence-digitale-dakar-pme-seo-site-web-automatisation">notre guide sur la présence en ligne d’une PME à Dakar</Link>{" "}
              ou <Link to="/contact">parlez-nous directement de votre projet</Link>.
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleVisibleGoogleMapsEntrepriseSenegal;
