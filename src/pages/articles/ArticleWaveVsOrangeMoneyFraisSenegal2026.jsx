import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ArticleWaveVsOrangeMoneyFraisSenegal2026 = () => {
  const path = "/article/wave-vs-orange-money-frais-senegal-2026";
  const title = "Wave ou Orange Money : quels sont les frais réels en 2026 ?";
  const description = "Wave prélève 1 % au transfert et Orange Money 0,8 %, plus une taxe de 0,5 % plafonnée à 2 000 FCFA depuis fin 2025. Comparatif chiffré des frais réels au Sénégal.";

  return (
    <>
      <SEO path={path} title={`${title} | Fallcon Tech`} description={description} type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Le retrait d'argent coûte-t-il quelque chose chez Wave et Orange Money ?",
                acceptedAnswer: { "@type": "Answer", text: "Non. La page officielle de Wave (wave.com/fr) et celle d'Orange Money (orange.sn), consultées le 11/10/2026, annoncent toutes les deux un retrait gratuit. C'est cette version officielle qu'il faut retenir." },
              },
              {
                "@type": "Question",
                name: "Quel opérateur est le moins cher pour un transfert de 100 000 FCFA ?",
                acceptedAnswer: { "@type": "Answer", text: "Sur un transfert de 100 000 FCFA, Orange Money prélève 0,8 %, soit 800 FCFA, contre 1 % chez Wave, soit 1 000 FCFA. La taxe de 0,5 % ajoute 500 FCFA dans les deux cas. Le coût total est donc de 1 300 FCFA chez Orange Money et de 1 500 FCFA chez Wave." },
              },
              {
                "@type": "Question",
                name: "La taxe de 0,5 % s'applique-t-elle à toutes les opérations ?",
                acceptedAnswer: { "@type": "Answer", text: "Elle porte sur les transferts, les paiements et les retraits. Elle ne s'applique pas aux dépôts d'espèces, aux retraits cumulés jusqu'à 20 000 FCFA par 24 heures, aux virements bancaires classiques, aux transferts intra-réseau d'un même prestataire, aux opérations de l'État et des collectivités, aux paiements de salaires et aux bourses d'études." },
              },
              {
                "@type": "Question",
                name: "Combien faut-il prévoir au maximum pour cette taxe ?",
                acceptedAnswer: { "@type": "Answer", text: "La taxe de 0,5 % est plafonnée à 2 000 FCFA par opération. Le plafond est donc atteint dès 400 000 FCFA transférés et ne peut pas être dépassé, quel que soit le montant envoyé." },
              },
              {
                "@type": "Question",
                name: "Que change cette taxe pour un commerçant qui encaisse le mobile money ?",
                acceptedAnswer: { "@type": "Answer", text: "La taxe de 0,5 % s'ajoute au coût de l'encaissement mobile money. Un prélèvement à la source de 0,5 % s'applique aussi sur les sommes reçues par les commerçants, collecté par les opérateurs pour le compte de l'État. Le commerçant doit donc en tenir compte dans sa marge." },
              },
            ],
          },
        ]}
      />
      <section className="py-12 gradient-bg"><div className="container mx-auto px-4">
        <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8"><ArrowLeft className="mr-2" size={20}/>Retour aux ressources</Link>
        <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Frais mobile money" }]} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}><h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1></motion.div>
      </div></section>
      <article className="py-16 bg-background"><div className="container mx-auto px-4 max-w-3xl prose prose-lg">
        <p>Choisir entre Wave et Orange Money revient souvent à comparer deux réputations plutôt que deux grilles tarifaires. Pourtant, en 2026, les montants réellement prélevés ne dépendent plus seulement de l'opérateur : depuis fin 2025, une taxe de 0,5 % s'ajoute aux frais sur la plupart des transferts, des paiements et des retraits. Cet article reprend uniquement les chiffres publiés sur les pages officielles, avec la source et la date de consultation, puis montre ce que cela change pour un particulier comme pour un commerçant.</p>

        <h2>Les frais d'envoi chez Wave et Orange Money</h2>
        <p>Chez <strong>Wave</strong>, la page officielle wave.com/fr, consultée le 11/10/2026, indique un <strong>transfert d'argent à 1 %</strong> du montant envoyé. Le dépôt est gratuit, le retrait est gratuit et le paiement de factures est sans frais. Point important : cette page officielle <strong>n'indique aucun plafond de frais</strong>. Autrement dit, le plafond n'est pas indiqué sur la page officielle ; nous ne retenons donc que le taux de 1 %.</p>
        <p>Chez <strong>Orange Money</strong>, la page officielle orange.sn, consultée le 11/10/2026, annonce des <strong>frais d'envoi à 0,8 %</strong> du montant envoyé. Ce taux s'applique au transfert national compte à compte ainsi qu'au transfert avec code.</p>
        <p>Sur ce seul critère, Orange Money est donc légèrement moins cher à l'envoi que Wave : 0,8 % contre 1 %.</p>

        <h2>Les retraits</h2>
        <p>Les deux opérateurs communiquent la même information : le <strong>retrait est gratuit</strong>, aussi bien chez Wave que chez Orange Money (sources : wave.com/fr et orange.sn, consultées le 11/10/2026). C'est la version officielle qu'il faut retenir.</p>
        <p>Précision utile : un exemple officiel mentionne des frais de retrait dans un autre contexte. En cas de doute, on s'en tient à la version officielle, qui annonce le retrait gratuit.</p>

        <h2>Le paiement de factures</h2>
        <p>Chez <strong>Wave</strong>, le paiement de factures se fait sans frais (wave.com/fr, consultée le 11/10/2026).</p>
        <p>Chez <strong>Orange Money</strong>, la grille est plus nuancée (orange.sn, consultée le 11/10/2026) :</p>
        <ul>
          <li><strong>1 % quel que soit le montant</strong> pour les factures SENELEC, SEN'EAU et les recharges ;</li>
          <li><strong>zéro frais</strong> sur les factures Sonatel, Teranga et Canal+.</li>
        </ul>
        <p>Concrètement, une facture d'électricité ou d'eau coûte 1 % chez Orange Money et rien chez Wave.</p>

        <h2>La taxe de 0,5 % qui s'ajoute depuis fin 2025</h2>
        <p>C'est le point que beaucoup d'utilisateurs découvrent sur leur relevé sans comprendre l'origine du prélèvement. La <strong>Taxe sur les transferts d'argent (TTA)</strong> représente <strong>0,5 % du montant de l'opération, plafonnée à 2 000 FCFA</strong>. Elle a été instituée par la <strong>loi n°2025-17 du 27 septembre 2025</strong> (source : grille des taux officielle publiée par la DGID, consultée le 11/10/2026).</p>
        <p>Trois précisions qui changent l'interprétation :</p>
        <ul>
          <li>L'assiette est le <strong>montant transféré</strong>, <strong>hors commission de l'opérateur</strong>. Les frais Wave ou Orange Money ne sont donc pas taxés une seconde fois.</li>
          <li>La taxe s'applique aux <strong>transferts, aux paiements et aux retraits</strong>.</li>
          <li>Un <strong>prélèvement à la source de 0,5 %</strong> s'applique aussi sur les <strong>sommes reçues par les commerçants</strong>, collecté par les opérateurs pour le compte de l'État.</li>
        </ul>
        <p>Sont <strong>exonérés</strong> : les dépôts d'espèces, les retraits cumulés jusqu'à 20 000 FCFA par 24 heures, les virements bancaires classiques, les transferts intra-réseau d'un même prestataire, les opérations de l'État et des collectivités, les paiements de salaires et les bourses d'études.</p>
        <p>Comment la taxe a-t-elle été mise en œuvre ? <strong>Orange Finances Mobiles Sénégal a annoncé son application à compter du 17 décembre 2025</strong> pour Orange Money (source : Senego, article du 16/12/2025). La loi, elle, a été publiée au <strong>Journal officiel n° 7853 du 2 octobre 2025</strong> (source : Seneweb, 01/12/2025).</p>

        <h2>Un exemple chiffré sur 100 000 FCFA</h2>
        <p>Prenons un transfert national de 100 000 FCFA et appliquons uniquement les taux officiels.</p>
        <ul>
          <li><strong>Chez Orange Money</strong> : 0,8 % de 100 000 FCFA, soit <strong>800 FCFA</strong> de frais d'envoi. La taxe de 0,5 % ajoute 0,5 % de 100 000 FCFA, soit <strong>500 FCFA</strong>. Coût total : <strong>1 300 FCFA</strong>.</li>
          <li><strong>Chez Wave</strong> : 1 % de 100 000 FCFA, soit <strong>1 000 FCFA</strong> de frais d'envoi. La taxe de 0,5 % ajoute elle aussi <strong>500 FCFA</strong>, car l'assiette est le montant transféré et non la commission de l'opérateur. Coût total : <strong>1 500 FCFA</strong>.</li>
        </ul>
        <p>Sur ce montant, la taxe reste bien en dessous du plafond de 2 000 FCFA. Ce plafond devient utile à connaître sur les opérations plus grosses : il est <strong>atteint dès 400 000 FCFA</strong> transférés, puisque 0,5 % de 400 000 FCFA font exactement 2 000 FCFA. Au-delà, la taxe ne progresse plus, quel que soit le montant envoyé.</p>

        <h2>Ce que cela change pour un commerçant qui encaisse le mobile money</h2>
        <p>Pour un commerçant qui accepte Wave ou Orange Money, la nouveauté de fin 2025 tient en une phrase : <strong>la taxe de 0,5 % s'ajoute au coût de l'encaissement mobile money</strong>. Ce n'est pas une simple ligne sur le relevé du client, c'est un prélèvement à la source sur les sommes reçues, que l'opérateur collecte pour le compte de l'État.</p>
        <p>En pratique, la marge du commerçant doit intégrer ce prélèvement. Un commerce qui encaisse beaucoup de petits paiements regardera surtout la <strong>fréquence</strong> : la taxe portant sur chaque opération, sa répétition compte autant que son taux. À l'inverse, l'exonération des retraits cumulés jusqu'à 20 000 FCFA par 24 heures et celle des dépôts d'espèces allègent le coût des mouvements d'espèces.</p>

        <h2>Comment choisir selon votre usage</h2>
        <p>Il n'y a pas de réponse unique : le bon choix dépend de votre profil.</p>
        <ul>
          <li><strong>Transferts fréquents et réguliers</strong> : le taux de 0,8 % chez Orange Money reste inférieur au 1 % de Wave à l'envoi. Sur de nombreux transferts, l'écart se cumule.</li>
          <li><strong>Paiement de factures</strong> : Wave les traite sans frais, tandis qu'Orange Money facture 1 % sur SENELEC, SEN'EAU et les recharges, et rien sur Sonatel, Teranga et Canal+. Pour l'électricité et l'eau, Wave est donc avantageux.</li>
          <li><strong>Retraits</strong> : les deux opérateurs annoncent le retrait gratuit, ce critère ne départage donc pas les deux solutions.</li>
          <li><strong>Encaissement pour un commerce</strong> : dans les deux cas, il faut raisonner en coût global, en ajoutant le prélèvement de 0,5 % sur les sommes reçues au coût de l'encaissement mobile money lui-même.</li>
        </ul>
        <p>La bonne méthode reste de partir de vos volumes réels : transferts, factures et encaissement commercial ne conduisent pas au même choix.</p>

        <h2>FAQ</h2>
        <h3>Le retrait d'argent coûte-t-il quelque chose chez Wave et Orange Money ?</h3>
        <p>Non. La page officielle de Wave (wave.com/fr) et celle d'Orange Money (orange.sn), consultées le 11/10/2026, annoncent toutes les deux un retrait gratuit. C'est cette version officielle qu'il faut retenir.</p>

        <h3>Quel opérateur est le moins cher pour un transfert de 100 000 FCFA ?</h3>
        <p>Sur un transfert de 100 000 FCFA, Orange Money prélève 0,8 %, soit 800 FCFA, contre 1 % chez Wave, soit 1 000 FCFA. La taxe de 0,5 % ajoute 500 FCFA dans les deux cas. Le coût total est donc de 1 300 FCFA chez Orange Money et de 1 500 FCFA chez Wave.</p>

        <h3>La taxe de 0,5 % s'applique-t-elle à toutes les opérations ?</h3>
        <p>Elle porte sur les transferts, les paiements et les retraits. Elle ne s'applique pas aux dépôts d'espèces, aux retraits cumulés jusqu'à 20 000 FCFA par 24 heures, aux virements bancaires classiques, aux transferts intra-réseau d'un même prestataire, aux opérations de l'État et des collectivités, aux paiements de salaires et aux bourses d'études.</p>

        <h3>Combien faut-il prévoir au maximum pour cette taxe ?</h3>
        <p>La taxe de 0,5 % est plafonnée à 2 000 FCFA par opération. Le plafond est donc atteint dès 400 000 FCFA transférés et ne peut pas être dépassé, quel que soit le montant envoyé.</p>

        <h3>Que change cette taxe pour un commerçant qui encaisse le mobile money ?</h3>
        <p>La taxe de 0,5 % s'ajoute au coût de l'encaissement mobile money. Un prélèvement à la source de 0,5 % s'applique aussi sur les sommes reçues par les commerçants, collecté par les opérateurs pour le compte de l'État. Le commerçant doit donc en tenir compte dans sa marge.</p>

        <h2>Passer à l'action</h2>
        <p>Vous voulez intégrer un encaissement mobile money à votre machine, votre boutique ou votre application, en tenant compte de la taxe et des frais réels ? Découvrez notre offre de <Link to="/services/paiement-mobile-money-senegal">paiement mobile money au Sénégal</Link>, puis <Link to="/contact">contactez-nous pour étudier votre besoin</Link>.</p>

      </div></article>
    </>
  );
};

export default ArticleWaveVsOrangeMoneyFraisSenegal2026;
