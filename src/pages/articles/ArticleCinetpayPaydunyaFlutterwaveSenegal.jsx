import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ArticleCinetpayPaydunyaFlutterwaveSenegal = () => {
  const path = "/article/cinetpay-paydunya-flutterwave-comparatif-senegal";
  const title = "CinetPay, PayDunya ou Flutterwave : laquelle choisir ?";
  const description =
    "CinetPay, PayDunya ou Flutterwave au Sénégal : commissions d'encaissement, frais d'ouverture, moyens de paiement et pays couverts pour choisir votre passerelle.";

  const faq = [
    {
      q: "Quelle passerelle de paiement est la moins chère au Sénégal ?",
      a: "Il n'existe pas de réponse unique. Sur l'encaissement mobile money, CinetPay affiche 2 % (grille relevée le 11/08/2025) et Flutterwave 2,0 % ; sur les cartes, CinetPay affiche 3,5 % et Flutterwave 4,8 %. PayDunya ne publie pas sa grille générale de paiement en ligne classique. Le moins cher dépend donc du moyen de paiement que vos clients utilisent réellement et de votre volume mensuel.",
    },
    {
      q: "PayDunya facture-t-il des frais d'ouverture ou un abonnement ?",
      a: "Non. Selon les pages officielles Tarifs et FAQ de PayDunya, l'ouverture de compte est gratuite et il n'y a ni frais d'abonnement ni frais d'installation. Les frais portent sur les transactions, avec des offres Social Shop dégressives selon le volume mensuel.",
    },
    {
      q: "Flutterwave permet-il de recevoir de l'argent au Sénégal ?",
      a: "Oui pour l'encaissement : Flutterwave indique 4,8 % sur les cartes locales et internationales et 2,0 % sur le mobile money. Attention toutefois : la liste officielle des pays ne cite pas le Sénégal nommément et le classe dans la catégorie « reste du monde ». Il faut donc vérifier les conditions d'ouverture directement auprès de la plateforme avant de vous engager.",
    },
    {
      q: "Les commissions affichées sont-elles définitives ?",
      a: "Non. Les grilles tarifaires évoluent régulièrement. Pour CinetPay, les chiffres cités proviennent de la page officielle cinetpay.com/pricing relevée le 11/08/2025, la page live étant protégée contre les robots ; la grille actuelle peut donc avoir changé. Les chiffres PayDunya et Flutterwave proviennent des pages officielles consultées le 11/10/2026. Vérifiez toujours le tarif en vigueur avant de signer.",
    },
    {
      q: "Une passerelle de paiement suffit-elle pour vendre en ligne au Sénégal ?",
      a: "Elle est indispensable mais pas suffisante. Il faut aussi un site ou une application qui intègre la passerelle, un moyen de confirmer les commandes, et une stratégie pour les clients qui préfèrent payer à la livraison. Nous concevons l'ensemble : site, intégration du paiement et automatisation des confirmations.",
    },
  ];

  const site =
    import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");

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
          <Breadcrumbs
            items={[
              { label: "Accueil", to: "/" },
              { label: "Ressources", to: "/resources" },
              { label: "Passerelles de paiement" },
            ]}
          />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Commissions, frais d'ouverture, moyens de paiement et pays couverts : les critères
              concrets pour choisir sans se tromper.
            </p>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <p>
            Vendre ou encaisser en ligne au Sénégal suppose de relier votre site ou votre application
            à des moyens de paiement que vos clients utilisent vraiment : cartes bancaires, Orange
            Money, Wave, Free Money, Moov ou MTN. Cette jonction technique s'appelle une passerelle
            de paiement. Trois acteurs reviennent le plus souvent dans les projets sénégalais :
            CinetPay, PayDunya et Flutterwave. Voici ce qui les distingue, sur la base de leurs
            grilles officielles, sans désigner un gagnant absolu.
          </p>

          <h2>Qu'est-ce qu'une passerelle de paiement et pourquoi en avez-vous besoin ?</h2>
          <p>
            Une passerelle de paiement est un service technique qui connecte votre boutique ou votre
            application aux différents moyens de paiement. Elle déclenche la transaction, gère
            l'authentification du client, confirme le paiement, puis verse les fonds sur votre
            compte. Elle prend aussi en charge les remboursements, les reçus et la réconciliation
            des opérations.
          </p>
          <p>
            Sans elle, vous seriez obligé de demander à chaque client d'envoyer un transfert manuel,
            puis de vérifier vous-même la réception, une opération par une opération. Avec elle,
            l'encaissement devient automatique : le client paie, la commande est confirmée et vous
            suivez tout depuis un tableau de bord. Au Sénégal, où le mobile money domine largement
            les paiements du quotidien, choisir une passerelle qui intègre Orange Money et Wave n'est
            pas un détail : c'est la condition pour ne pas perdre de ventes.
          </p>

          <h2>Comparatif des commissions d'encaissement</h2>
          <p>
            Les montants ci-dessous proviennent des sources officielles de chaque plateforme. Pour
            CinetPay, la page cinetpay.com/pricing a été relevée le <strong>11/08/2025</strong> — la
            page live étant protégée contre les robots, une grille plus récente peut exister. Les
            données PayDunya et Flutterwave ont été consultées le <strong>11/10/2026</strong> sur
            leurs pages officielles. Les grilles tarifaires évoluent régulièrement : vérifiez toujours
            le tarif en vigueur avant de vous engager.
          </p>

          <div className="bg-card rounded-xl p-6 shadow-md not-prose mb-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Moyen d'encaissement</th>
                  <th className="text-center py-2">CinetPay</th>
                  <th className="text-center py-2">PayDunya</th>
                  <th className="text-center py-2">Flutterwave</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Cartes Visa / Mastercard (locales)</td>
                  <td className="text-center">3,5 %</td>
                  <td className="text-center">Non publié</td>
                  <td className="text-center">4,8 %</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Cartes internationales</td>
                  <td className="text-center">3,5 %</td>
                  <td className="text-center">Non publié</td>
                  <td className="text-center">4,8 %</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Mobile money (général)</td>
                  <td className="text-center">Jusqu'à 2,5 % selon l'opérateur</td>
                  <td className="text-center">Voir offres Social Shop</td>
                  <td className="text-center">2,0 %</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Orange Money Sénégal</td>
                  <td className="text-center">2 %</td>
                  <td className="text-center">Non publié</td>
                  <td className="text-center">Inclus (mobile money)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Wave</td>
                  <td className="text-center">2 %</td>
                  <td className="text-center">Non publié</td>
                  <td className="text-center">Inclus (mobile money)</td>
                </tr>
                <tr>
                  <td className="py-2">Free Money</td>
                  <td className="text-center">2,5 %</td>
                  <td className="text-center">Non publié</td>
                  <td className="text-center">Non cité</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            CinetPay annonce une fourchette globale d'encaissement « entre 1,5 % et 3,5 % selon le
            volume de transactions », puis détaille par moyen de paiement. PayDunya, de son côté, ne
            publie pas publiquement sa grille de paiement en ligne classique : il faut la lui
            demander. Ce que PayDunya publie, c'est sa grille <strong>Social Shop</strong>, adaptée
            aux volumes :
          </p>
          <ul>
            <li>
              <strong>Offre Classic</strong> — 3 % + 100 FCFA, pour des transactions de 200 à
              9 999 999 FCFA par mois
            </li>
            <li>
              <strong>Offre Star</strong> — 2,5 % + 100 FCFA, de 10 000 000 à 99 999 999 FCFA par
              mois
            </li>
            <li>
              <strong>Offre VIP</strong> — au-delà de 100 000 000 FCFA par mois, frais négociables
            </li>
          </ul>
          <p>
            Flutterwave affiche, pour la réception de paiements au Sénégal, 4,8 % sur les cartes
            locales comme sur les cartes internationales, et 2,0 % sur le mobile money.
          </p>

          <h2>Frais fixes, abonnements et frais d'ouverture</h2>
          <p>
            C'est souvent le premier critère regardé par une petite structure. PayDunya indique
            clairement, sur ses pages officielles Tarifs et FAQ, l'absence de frais d'abonnement et
            de frais d'installation : l'ouverture de compte est gratuite. Flutterwave va dans le même
            sens avec son message « completely free » — aucun frais d'inscription ni d'installation,
            relevé sur son centre d'aide officiel.
          </p>
          <p>
            Pour CinetPay, la grille officielle consultée ne mentionne ni frais d'installation ni
            abonnement. Cela ne signifie pas qu'ils n'existent pas sous une forme négociée : toute
            plateforme peut appliquer des conditions particulières selon le profil du marchand.
            Posez systématiquement la question avant l'ouverture de votre compte.
          </p>

          <h2>Moyens de paiement et pays couverts</h2>
          <p>
            CinetPay couvre cartes Visa et Mastercard, Free Money, Wave et Orange Money Sénégal. Sa
            présence s'étend à la Côte d'Ivoire, au Mali, au Sénégal, au Bénin, au Cameroun, à la
            Guinée, à la RDC, au Niger, à la France, au Togo et au Burkina Faso.
          </p>
          <p>
            PayDunya propose une palette large : Orange Money, Wave, Moov, MTN, Mixx by Yas, Djamo,
            Celtiis Cash, ainsi que Mastercard et Visa. Ses opérations UEMOA sont disponibles au
            Sénégal, en Côte d'Ivoire et au Bénin.
          </p>
          <p>
            Flutterwave supporte le mobile money au Sénégal via Orange Money et Wave en XOF, d'après
            sa documentation développeurs, en plus des cartes. Un point mérite votre attention : la
            liste officielle des pays ne cite pas le Sénégal nommément et le classe dans la catégorie
            « reste du monde ». Les conditions d'ouverture dépendent du pays et de la catégorie de
            compte. C'est donc une vérification à faire directement auprès de la plateforme avant de
            bâtir votre parcours d'achat dessus.
          </p>

          <h2>Comment choisir selon votre activité</h2>
          <h3>Boutique e-commerce</h3>
          <p>
            Vos clients paieront majoritairement en mobile money, avec une part de cartes. Comparez
            donc surtout la ligne mobile money. CinetPay (2 % sur Wave et Orange Money) et Flutterwave
            (2,0 %) se situent au même niveau sur ce point ; pour PayDunya, demandez la grille
            applicable à votre volume.
          </p>
          <h3>Abonnements et paiements récurrents</h3>
          <p>
            Un service par abonnement a besoin de réutiliser un moyen de paiement sans redemander
            chaque fois l'autorisation au client. Toutes les plateformes ne le gèrent pas de la même
            façon selon les moyens : confirmez cette capacité, en particulier pour le mobile money,
            avant de concevoir une offre récurrente.
          </p>
          <h3>Versements aux fournisseurs et aux équipes</h3>
          <p>
            Si vous devez aussi envoyer de l'argent (salaires, fournisseurs), regardez les frais de
            versement. CinetPay annonce, pour son Mass Payout, entre 1,5 % et 2 %, avec 2 % sur Wave
            et 1,8 % sur Orange Money Sénégal. Flutterwave annonce 2,00 % sur le mobile money et un
            forfait de 1 500 XOF pour un virement bancaire vers le Sénégal.
          </p>
          <h3>Volume mensuel</h3>
          <p>
            Plus votre volume augmente, plus les conditions se négocient. Les offres dégressives de
            PayDunya l'illustrent clairement, avec une tranche VIP au-delà de 100 000 000 FCFA par
            mois. Si vous prévoyez une croissance rapide, demandez d'emblée une grille par paliers.
          </p>

          <h2>Les coûts cachés à surveiller</h2>
          <ul>
            <li>
              <strong>La reconversion de devise</strong> pour les paiements par carte internationale
              reçus en devises puis convertis en FCFA.
            </li>
            <li>
              <strong>Les frais de versement</strong> : encaisser coûte un pourcentage, mais
              transférer les fonds vers votre compte ou vos fournisseurs coûte aussi (voir Mass Payout
              CinetPay et les tarifs de transfert Flutterwave).
            </li>
            <li>
              <strong>Les litiges et remboursements</strong> (chargebacks) sur paiements par carte,
              avec des frais et des délais de traitement possibles.
            </li>
            <li>
              <strong>Les conditions d'éligibilité</strong> : Flutterwave demande une pièce
              d'identité, une entreprise enregistrée et un site web ou des réseaux sociaux. Prévoyez
              ces éléments avant de démarrer les démarches.
            </li>
          </ul>
          <p>
            Un principe simple : au-delà du taux affiché, mettez côte à côte le coût d'un
            encaissement et le coût d'un versement. C'est ce total, sur votre volume réel, qui
            départage les plateformes — jamais le seul pourcentage d'encaissement.
          </p>

          <h2>FAQ — Choisir sa passerelle de paiement au Sénégal</h2>
          {faq.map((f, i) => (
            <div key={i}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}

          <h2>Passer à l'action</h2>
          <p>
            Choisir la passerelle ne remplace pas l'intégration. Nous connectons votre site ou votre
            application au moyen de paiement adapté à vos clients, du premier paiement test jusqu'à la
            mise en production.
          </p>
          <div className="not-prose mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/services/paiement-mobile-money-senegal"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-blue-500 transition"
            >
              Découvrir notre service d'intégration du paiement mobile money
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-white transition"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleCinetpayPaydunyaFlutterwaveSenegal;
