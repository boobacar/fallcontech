import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ArticleFacturationElectroniqueFneSenegal = () => {
  const path = "/article/facturation-electronique-fne-senegal";
  const title = "Facture électronique au Sénégal : ce que dit la loi";
  const description = "Ce que prévoit l'article 447 du Code général des impôts sénégalais sur la facture électronique : contenu obligatoire, canaux, sanction et préparation d'une PME.";
  return (
    <><SEO path={path} title={`${title} | Fallcon Tech`} description={description} type="article" jsonLd={[ { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "La facture électronique est-elle déjà obligatoire au Sénégal ?", acceptedAnswer: { "@type": "Answer", text: "L'article 447 du Code général des impôts, créé par la loi de finances 2025, pose le principe d'une facturation électronique. Mais les conditions et modalités pratiques, notamment le format technique et le calendrier, sont renvoyées à un arrêté du ministre chargé des Finances qui n'est pas encore publié. Aucune date officielle de bascule générale n'a été publiée à ce jour." } },
      { "@type": "Question", name: "Quel format technique faut-il utiliser ?", acceptedAnswer: { "@type": "Answer", text: "Aucun format technique n'est encore officiellement fixé. L'article 447 II-5 renvoie les conditions et modalités à un arrêté du ministre chargé des Finances à venir. Il serait donc inexact de présenter un format précis, quel qu'il soit, comme le standard officiel sénégalais aujourd'hui." } },
      { "@type": "Question", name: "SENTAX est-il la facture électronique ?", acceptedAnswer: { "@type": "Answer", text: "Non. SENTAX est le service de télédéclaration et de paiement en ligne des impôts. Depuis le 1er septembre 2026, les contribuables de la Direction des grandes entreprises déclarent et paient en ligne sur SENTAX, et depuis le 1er octobre 2026 l'ouverture concerne les CME1, CME2 et CPR. La facture électronique est un dispositif distinct, prévu à l'article 447 du Code général des impôts." } },
      { "@type": "Question", name: "Quelles mentions une facture doit-elle porter ?", acceptedAnswer: { "@type": "Answer", text: "Le nom et l'adresse exacts du vendeur avec son NINEA, un numéro unique fondé sur une séquence chronologique et continue, les taxes sur le chiffre d'affaires exigibles avec l'indication du taux, la taxe spécifique éventuelle avec son taux, et le prix toutes taxes comprises. En cas d'exonération ou de régime particulier de TVA, la facture doit renvoyer à la disposition du code qui la prévoit." } },
      { "@type": "Question", name: "Que risque une entreprise qui ne respecte pas ces obligations ?", acceptedAnswer: { "@type": "Answer", text: "L'article 671 IV prévoit une amende égale à 25 % du montant de la TVA facturée ou qui aurait dû être facturée, sans dépasser 5 000 000 FCFA par facture. Une mention manquante répétée sur de nombreuses factures peut donc représenter un montant considérable." } },
    ] } ]} />
    <section className="py-12 gradient-bg"><div className="container mx-auto px-4">
      <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8"><ArrowLeft className="mr-2" size={20}/>Retour aux ressources</Link>
      <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Facture électronique" }]} />
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}><h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1></motion.div>
    </div></section>
    <article className="py-16 bg-background"><div className="container mx-auto px-4 max-w-3xl prose prose-lg">
      <p className="lead">« La facture électronique devient obligatoire au Sénégal. » La formule circule sans nuance. La réalité : la loi pose le principe d'une facturation électronique, mais renvoie à un arrêté à venir les conditions pratiques et le calendrier. Voici ce que dit le Code général des impôts, édition 2025, publié par la Direction générale des impôts et des domaines (DGID), et ce qu'une PME peut préparer dès maintenant.</p>

      <h2>Le cadre juridique : l'article 447 et la loi de finances 2025</h2>
      <p>Le point de départ est l'article 447 du Code général des impôts, créé par la loi de finances 2025. Il comporte deux volets : un « I. Facturation », qui fixe les règles de fond de la facture, et un « II. Facturation électronique », qui ouvre le chantier de la dématérialisation. Le second pose le principe : les assujettis sont tenus de délivrer, pour les opérations qu'ils réalisent, une facture électronique. La loi précise que « la facture électronique est émise, transmise et reçue sous une forme dématérialisée ». Le papier perd donc son statut de forme de référence.</p>

      <h2>Ce qui n'est pas encore fixé : le format et le calendrier</h2>
      <p>L'article 447 II-5 renvoie les conditions et modalités d'application à un arrêté du ministre chargé des Finances. Cet arrêté n'est pas encore publié. Deux conséquences en découlent. D'abord, le format technique officiel n'est pas encore fixé : aucun standard de fichier ne peut être présenté aujourd'hui comme le format officiel sénégalais. Ensuite, aucune date officielle de bascule générale n'a été publiée à ce jour. Le format et le calendrier relèvent d'un arrêté à venir, et c'est parce qu'ils ne sont pas encore arrêtés qu'il faut se préparer maintenant.</p>

      <h2>Ce qu'une facture conforme doit déjà contenir</h2>
      <p>Le format technique reste à définir, mais le contenu obligatoire est déjà écrit. L'article 447 I-5 énumère les mentions qu'une facture doit porter :</p>
      <ul>
        <li>le nom et l'adresse exacts du vendeur, avec son NINEA ;</li>
        <li>un numéro unique fondé sur une séquence chronologique et continue ;</li>
        <li>les taxes sur le chiffre d'affaires exigibles, avec l'indication du taux ;</li>
        <li>la taxe spécifique éventuelle, avec son taux ;</li>
        <li>le prix toutes taxes comprises.</li>
      </ul>
      <p>En cas d'exonération ou de régime particulier de TVA, la facture doit renvoyer à la disposition du code qui la prévoit. Ces mentions rendent une facture opposable, et devront être respectées sous forme dématérialisée comme elles le sont sur papier.</p>

      <h2>Les canaux d'émission prévus par la loi</h2>
      <p>L'article 447 II-2 et II-3 décrit les canaux retenus : un portail public de facturation, ou une autre plateforme de dématérialisation mise en place par l'administration. La loi prévoit aussi que les assujettis puissent être autorisés à utiliser des machines électroniques de facturation. Dans tous les cas, les données de facturation sont transmises à l'administration par voie électronique.</p>
      <p>Pour préparer cette transition, une délégation sénégalaise s'est rendue au Bénin du 22 au 24 août 2023, où fonctionne le dispositif e-MECeF. Selon le chef de mission, « le Sénégal devra s'inspirer du modèle béninois ». C'est une orientation stratégique, qui n'engage ni format précis, ni calendrier.</p>

      <h2>Ce que cela change concrètement pour une PME sénégalaise</h2>
      <p>Pour une PME, l'enjeu immédiat n'est pas la date d'entrée en vigueur, mais l'état de préparation. Quatre sujets se travaillent dès maintenant.</p>
      <h3>Le logiciel de facturation</h3>
      <p>Il devra produire la facture sous forme dématérialisée et transmettre les données par voie électronique. Un outil qui n'édite que du papier, ou qui enferme les factures dans un format fermé et non exportable, devra évoluer. Mieux vaut choisir un logiciel dont les données sont structurées et exportables.</p>
      <h3>La numérotation</h3>
      <p>Le numéro unique fondé sur une séquence chronologique et continue est déjà une exigence légale. Les trous, les doublons et les numéros attribués à la main se corrigent avant que le dispositif ne se resserre.</p>
      <h3>L'archivage</h3>
      <p>Une facture émise, transmise et reçue sous forme dématérialisée suppose une conservation fiable dans le temps. Un archivage électronique garantissant l'intégrité du document et son horodatage devient un prérequis.</p>
      <h3>La TVA</h3>
      <p>Côté TVA, le taux normal est de 18 %. La facture doit faire apparaître la TVA exigible et son taux : ces mentions conditionnent le droit à déduction chez le client (article 447 I-6). Les assujettis à la Contribution Globale Unique, eux, ne peuvent pas mentionner la TVA (article 448). Clarifier son régime de TVA est donc un préalable.</p>

      <h2>La sanction en cas de non-respect</h2>
      <p>Le non-respect de ces obligations est déjà puni. L'article 671 IV prévoit une amende égale à 25 % du montant de la TVA facturée ou qui aurait dû être facturée, sans dépasser 5 000 000 FCFA par facture. Une mention manquante répétée sur des centaines de factures peut représenter un montant considérable.</p>

      <h2>Cinq actions à engager dès maintenant</h2>
      <ol>
        <li>Auditer votre facturation actuelle. Listez les mentions présentes sur vos factures et comparez-les à celles de l'article 447 I-5 : vendeur et NINEA, numéro unique chronologique, taxes et taux, taxe spécifique éventuelle, prix TTC, et référence en cas d'exonération.</li>
        <li>Remettre de l'ordre dans la numérotation. Mettez fin aux numéros manuels, aux trous et aux doublons, et fixez une règle unique et continue.</li>
        <li>Structurer les données. Vérifiez que les informations de facturation sont stockées dans des champs exploitables et exportables, et pas seulement imprimées sur un document.</li>
        <li>Sécuriser l'archivage. Mettez en place une conservation électronique fiable, avec intégrité et horodatage, et des sauvegardes régulières.</li>
        <li>Suivre l'arrêté à venir. Le format et le calendrier seront fixés par un arrêté du ministre chargé des Finances ; se préparer maintenant évite de tout rattraper dans l'urgence.</li>
      </ol>

      <h2>Ne pas confondre facture électronique et SENTAX</h2>
      <p>SENTAX, la télédéclaration, est un sujet voisin mais distinct. Depuis le 1er septembre 2026, les contribuables de la Direction des grandes entreprises déclarent et paient en ligne sur SENTAX ; depuis le 1er octobre 2026, cette ouverture concerne les CME1, CME2 et CPR. SENTAX n'est pas la facture électronique : c'est un service de déclaration et de paiement des impôts. La facture électronique est un dispositif à part, prévu à l'article 447 du Code général des impôts.</p>

      <h2>Questions fréquentes</h2>
      <h3>La facture électronique est-elle déjà obligatoire au Sénégal ?</h3>
      <p>L'article 447 du Code général des impôts, créé par la loi de finances 2025, pose le principe d'une facturation électronique. Mais les conditions et modalités pratiques, notamment le format technique et le calendrier, sont renvoyées à un arrêté du ministre chargé des Finances qui n'est pas encore publié. Aucune date officielle de bascule générale n'a été publiée à ce jour.</p>
      <h3>Quel format technique faut-il utiliser ?</h3>
      <p>Aucun format technique n'est encore officiellement fixé. L'article 447 II-5 renvoie les conditions et modalités à un arrêté du ministre chargé des Finances à venir. Il serait donc inexact de présenter un format précis, quel qu'il soit, comme le standard officiel sénégalais aujourd'hui.</p>
      <h3>SENTAX est-il la facture électronique ?</h3>
      <p>Non. SENTAX est le service de télédéclaration et de paiement en ligne des impôts. Depuis le 1er septembre 2026, les contribuables de la Direction des grandes entreprises déclarent et paient en ligne sur SENTAX, et depuis le 1er octobre 2026 l'ouverture concerne les CME1, CME2 et CPR. La facture électronique est un dispositif distinct, prévu à l'article 447 du Code général des impôts.</p>
      <h3>Quelles mentions une facture doit-elle porter ?</h3>
      <p>Le nom et l'adresse exacts du vendeur avec son NINEA, un numéro unique fondé sur une séquence chronologique et continue, les taxes sur le chiffre d'affaires exigibles avec l'indication du taux, la taxe spécifique éventuelle avec son taux, et le prix toutes taxes comprises. En cas d'exonération ou de régime particulier de TVA, la facture doit renvoyer à la disposition du code qui la prévoit.</p>
      <h3>Que risque une entreprise qui ne respecte pas ces obligations ?</h3>
      <p>L'article 671 IV prévoit une amende égale à 25 % du montant de la TVA facturée ou qui aurait dû être facturée, sans dépasser 5 000 000 FCFA par facture. Une mention manquante répétée sur de nombreuses factures peut donc représenter un montant considérable.</p>

      <p>La facture électronique normalisée n'est donc pas encore une échéance datée : c'est un chantier ouvert par la loi de finances 2025, dont le format et le calendrier relèvent d'un arrêté à venir. Les entreprises qui s'y préparent dès maintenant prennent une longueur d'avance. Pour cadrer votre projet, découvrez notre offre de facturation électronique au Sénégal ou contactez-nous.</p>
      <div className="not-prose mt-8 flex flex-col sm:flex-row gap-3">
        <Link to="/contact" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-blue-500 transition-colors">Nous contacter</Link>
        <Link to="/services/facturation-electronique-senegal" className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary/10 transition-colors">Facturation électronique au Sénégal</Link>
        <Link to="/article/prix-logiciel-gestion-senegal" className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary/10 transition-colors">Prix d'un logiciel de gestion</Link>
      </div>
    </div></article></>);
};

export default ArticleFacturationElectroniqueFneSenegal;
