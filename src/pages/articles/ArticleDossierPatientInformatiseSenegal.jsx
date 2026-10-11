import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ArticleDossierPatientInformatiseSenegal = () => {
  const path = "/article/dossier-patient-informatise-senegal";
  const title = "Dossier patient informatisé : pourquoi y passer";
  const description =
    "Dossier patient informatisé au Sénégal : déploiement de Kaffrine, cadre national, bénéfices concrets et contraintes réelles pour cliniques et hôpitaux.";

  // Source unique de vérité : la FAQ visible et le JSON-LD affichent exactement le même contenu.
  const faq = [
    {
      question: "Qu’est-ce qu’un dossier patient informatisé ?",
      answer:
        "C’est la version numérique du dossier médical : une base unique qui regroupe l’identité du patient, ses antécédents, ses consultations, ses prescriptions et ses paiements, consultable depuis un poste autorisé. Il remplace le cahier de registre, les dossiers papier et l’agenda de rendez-vous.",
    },
    {
      question: "Le dossier patient informatisé est-il obligatoire au Sénégal ?",
      answer:
        "Aucun texte n’impose à ce jour un logiciel précis. En revanche, les données de santé font partie des traitements soumis à autorisation préalable de la Commission de protection des données personnelles (article 20 de la loi n° 2008-12 du 25 janvier 2008).",
    },
    {
      question: "Que se passe-t-il en cas de coupure d’électricité ou de réseau ?",
      answer:
        "Un logiciel adapté au contexte sénégalais doit fonctionner en mode hors ligne et se synchroniser dès le retour du réseau. Un onduleur, des sauvegardes régulières et une procédure papier de secours complètent le dispositif.",
    },
    {
      question: "Faut-il numériser tous les anciens dossiers papier ?",
      answer:
        "Non. La pratique courante consiste à ouvrir un dossier numérique au prochain passage du patient, sans ressaisir tout l’historique. Les anciens dossiers restent archivés et consultables en cas de besoin.",
    },
    {
      question: "Combien de temps prend la mise en place ?",
      answer:
        "Cela dépend du périmètre retenu. En démarrant par le dossier patient et les rendez-vous, une structure peut être opérationnelle en quelques semaines, puis étendre progressivement la caisse et les stocks.",
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
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          },
        ]}
      />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Dossier patient informatisé" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <p className="lead">
            À partir d’un certain volume de patients, un cahier de registre, des dossiers papier empilés et un agenda
            tenu à la main ne suffisent plus. Le dossier patient informatisé répond à ce problème : il réunit dans une
            seule base l’information médicale et administrative d’un patient. Voici ce que ce changement représente
            concrètement pour une clinique ou un hôpital au Sénégal, et ce qu’il implique avant de se lancer.
          </p>

          <section>
            <h2>Qu’est-ce qu’un dossier patient informatisé ?</h2>
            <p>
              Un dossier patient informatisé est la version numérique du dossier médical : une base unique où sont
              consignés l’identité du patient, ses antécédents, ses consultations, ses prescriptions, ses examens et
              ses paiements, consultable depuis un poste de travail autorisé.
            </p>
            <p>
              Concrètement, il remplace trois outils que l’on retrouve dans presque toutes les structures : le
              <strong> cahier de registre</strong> où l’on inscrit les entrées et les sorties, les{" "}
              <strong>dossiers papier</strong> rangés dans l’armoire des archives, et l’<strong>agenda</strong> de
              rendez-vous tenu à la main. Ce que le cahier dispersait, le dossier informatisé le centralise et le
              rend retrouvable en quelques secondes.
            </p>
          </section>

          <section>
            <h2>Une preuve locale : le déploiement de Kaffrine</h2>
            <p>
              L’intérêt du dossier patient informatisé n’est pas une hypothèse : un hôpital régional sénégalais l’a
              déjà mis en service. À l’hôpital régional Thierno Birahim Ndao, dans la région de Kaffrine, le dossier
              patient informatisé a été mis en place en <strong>novembre 2024</strong>. Au <strong>18 septembre 2025</strong>,
              plus de <strong>26 000 patients</strong> y étaient enregistrés, <strong>10 231 nouveaux dossiers</strong>{" "}
              avaient été créés et <strong>4 539 patients</strong> avaient pris rendez-vous via le système (déclaration
              de la directrice de l’établissement, agence de presse sénégalaise APS, 18 septembre 2025).
            </p>
            <p>
              Ces chiffres portent sur un établissement public de niveau régional, pas sur un cabinet privé. Ils
              montrent qu’une structure de taille importante peut enregistrer des dizaines de milliers de patients et
              gérer ses rendez-vous dans un outil unique. La directrice de l’hôpital situe ce déploiement dans la
              vision stratégique de l’État pour la période 2025-2029, qui vise à digitaliser les structures sanitaires
              en commençant par les hôpitaux (APS, 18 septembre 2025).
            </p>
          </section>

          <section>
            <h2>Le cadre national : ce qui est déployé et ce qui est visé</h2>
            <p>
              Le <strong>28 avril 2025</strong>, le ministère de la Santé et de l’Action sociale a annoncé six projets
              phares de santé numérique : le dossier patient informatisé, la télémédecine, le système d’information
              hospitalier, le système d’information géographique en santé, la digitalisation de la gestion des
              médicaments et la digitalisation de la santé communautaire, auxquels s’ajoute un axe de gouvernance
              numérique. Le dossier patient y occupe la première place.
            </p>
            <p>
              <strong>Ce qui était effectivement déployé au 28 avril 2025 :</strong> deux hôpitaux, un centre de santé
              et un poste de santé utilisaient le dossier patient numérique. Ces quatre structures totalisaient plus de{" "}
              <strong>127 000 patients enregistrés</strong>, plus de <strong>355 000 prestations financières</strong> et
              plus de <strong>66 000 actes médicaux</strong>.
            </p>
            <p>
              <strong>Ce qui reste un objectif annoncé, à la même date du 28 avril 2025 :</strong> atteindre 20 % des
              centres de santé utilisant le dossier médical numérique, connecter 30 % des structures sanitaires à
              Internet, doter 1,5 million de Sénégalais d’un espace de santé numérique sécurisé (dont 50 % de femmes) et
              encadrer 2 000 actes de télémédecine. La distinction est importante : ce sont des cibles à atteindre, pas
              des résultats constatés.
            </p>
          </section>

          <section>
            <h2>Ce que cela change au quotidien</h2>
            <ul>
              <li>
                <strong>Un dossier unique retrouvé en quelques secondes</strong> : plus besoin de fouiller les archives
                ni de reconstituer un historique de mémoire pendant la consultation.
              </li>
              <li>
                <strong>Les rendez-vous</strong> : un agenda partagé entre les services, qui réduit les doublons et
                les patients oubliés, comme le montrent les 4 539 rendez-vous pris via le système à Kaffrine.
              </li>
              <li>
                <strong>Des prescriptions lisibles</strong> : les ordonnances sont saisies, imprimées ou transmises, et
                surtout archivées avec le dossier du patient.
              </li>
              <li>
                <strong>Les statistiques d’activité</strong> : le nombre de consultations, d’actes et de patients
                devient une donnée disponible immédiatement pour piloter la structure.
              </li>
              <li>
                <strong>La facturation et le suivi des paiements</strong> : les prestations financières sont rattachées
                au dossier du patient, ce qui limite les pertes et facilite le contrôle de la caisse.
              </li>
            </ul>
          </section>

          <section>
            <h2>Les contraintes réelles, et comment les traiter</h2>
            <p>
              Informatiser un hôpital ou une clinique ne se résume pas à installer un logiciel. Quatre contraintes
              reviennent constamment.
            </p>
            <ul>
              <li>
                <strong>Les coupures d’électricité et de réseau</strong> : le logiciel doit permettre de continuer à
                travailler hors ligne et de synchroniser les données dès le retour du réseau. Un onduleur et une
                procédure de secours sur papier complètent le dispositif.
              </li>
              <li>
                <strong>La formation des équipes</strong> : un outil qui n’est pas compris est vite abandonné. La
                prise en main doit être accompagnée, service par service, avec des référents internes.
              </li>
              <li>
                <strong>La discipline de saisie</strong> : un dossier informatisé ne vaut que par ce qu’on y inscrit.
                Si chacun continue à noter sur un carnet, l’outil devient un doublon inutile.
              </li>
              <li>
                <strong>L’obligation légale sur les données de santé</strong> : les données de santé font partie des
                traitements soumis à <strong>autorisation préalable</strong> de la Commission de protection des données
                personnelles (article 20 de la loi n° 2008-12 du 25 janvier 2008). Cette démarche doit être prévue dès
                la conception du projet, pas après.
              </li>
            </ul>
          </section>

          <section>
            <h2>Comment démarrer sans tout changer</h2>
            <p>
              Il n’est pas nécessaire de basculer l’ensemble de la structure en une seule fois. L’approche la plus
              réaliste consiste à <strong>commencer par le dossier patient et les rendez-vous</strong> : ce sont les
              deux fonctions qui apportent le gain le plus visible au quotidien, et celles que les équipes adoptent le
              plus vite. Une fois ces bases solides, la caisse et la facturation, puis la gestion des stocks, viennent
              s’y rattacher naturellement — les données sont déjà dans le système.
            </p>
            <p>
              Ce démarrage progressif limite les risques, permet de former les équipes par étapes et laisse le temps de
              corriger les habitudes de travail avant d’élargir le périmètre.
            </p>
          </section>

          <section>
            <h2>Les erreurs fréquentes</h2>
            <ul>
              <li>Vouloir tout informatiser en une seule phase, puis s’épuiser avant la fin du projet.</li>
              <li>Négliger la saisie : sans données fiables, les statistiques et la facturation restent inutilisables.</li>
              <li>Ignorer l’obligation d’autorisation préalable auprès de la Commission de protection des données personnelles.</li>
              <li>Oublier les sauvegardes et la gestion des accès par rôle, alors que ce sont des données de santé.</li>
              <li>Choisir un outil sans prévoir l’accompagnement et la formation des équipes.</li>
            </ul>
          </section>

          <section>
            <h2>Questions fréquentes</h2>
            <div className="not-prose grid gap-4">
              {faq.map((item) => (
                <div key={item.question} className="bg-card border border-border rounded-xl p-5">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="not-prose mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
            <p className="text-slate-800 font-medium mb-2">Vous souhaitez équiper votre structure ?</p>
            <p className="text-slate-700">
              Fallcon Tech conçoit des logiciels pour cliniques et hôpitaux adaptés au contexte sénégalais : dossier
              patient, rendez-vous, caisse et reporting.{" "}
              <Link to="/services/logiciel-clinique-senegal">Découvrez notre offre logiciel clinique au Sénégal</Link>.
            </p>
          </div>
          <div className="not-prose mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90"
            >
              Demander une étude
            </Link>
            <Link
              to="/article/logiciel-clinique-dentaire-senegal"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-medium hover:bg-card"
            >
              Lire le guide clinique dentaire
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleDossierPatientInformatiseSenegal;
