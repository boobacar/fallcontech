import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Check,
  FileStack,
  Workflow,
  Building2,
  ShieldCheck,
  Stethoscope,
  Truck,
  UsersRound,
  GraduationCap,
  BarChart3,
  Database,
  LockKeyhole,
} from "lucide-react";
import SEO from "@/components/SEO";

const pages = {
  "/solutions/gestion-courrier-ged": {
    icon: FileStack,
    eyebrow: "Gestion du courrier & GED",
    title: "Chaque courrier suivi. Chaque décision traçable.",
    lead: "Une plateforme unique pour enregistrer, orienter, instruire, valider et retrouver les courriers et documents de votre organisation.",
    seoTitle: "Logiciel gestion du courrier (GEC) & GED Sénégal | Fallcon Tech",
    seoDescription: "Gestion électronique du courrier (GEC), registre numérique, parapheur électronique et archivage pour administrations, collectivités et entreprises au Sénégal.",
    quickAnswer:
      "Un logiciel de gestion du courrier enregistre chaque courrier entrant et sortant, l'oriente vers le bon service, suit les instructions, les délais et les validations, puis archive les documents. Tout le circuit devient traçable, du bureau d'ordre jusqu'à l'archivage.",
    challenge: "Quand le courrier dépend des cahiers, WhatsApp et dossiers partagés, les délais deviennent invisibles et la responsabilité se dilue.",
    outcomes: ["Registre numérique entrant et sortant", "Affectation par direction, service ou agent", "Instructions, délais et relances", "Pièces jointes et classement documentaire", "Parapheur et circuits de validation", "Historique complet des consultations et actions"],
    modules: ["Bureau courrier", "Circuits et parapheurs", "GED & recherche", "Tableaux de bord", "Administration des accès", "Archivage & export"],
    audiences: "Ministères, directions, agences, collectivités, établissements publics, ONG et entreprises multisites.",
    faq: [
      {
        q: "Comment suivre un courrier dans l'administration ?",
        a: "Chaque courrier reçoit un numéro et un statut : réception, orientation, instruction, validation, classement. Vous retrouvez à tout moment qui l'a traité, quand et avec quelle pièce jointe.",
      },
      {
        q: "Un registre numérique remplace-t-il le registre papier ?",
        a: "Oui. Le registre numérique conserve l'historique complet, permet les recherches et les exports, et garde la traçabilité attendue d'un bureau courrier.",
      },
      {
        q: "Peut-on envoyer un courrier aux services concernés ?",
        a: "Oui. L'affectation se fait par direction, service ou agent, avec instruction, délai de traitement et relance automatique si besoin.",
      },
      {
        q: "Les documents sont-ils archivés ?",
        a: "Les pièces jointes sont classées dans la GED avec droits d'accès, recherche plein texte et historique des consultations.",
      },
      {
        q: "Qu'est-ce qu'un parapheur électronique ?",
        a: "Le parapheur électronique dématérialise le circuit de visa et de signature : chaque document suit un ordre de validation défini, chaque visa est tracé et daté, et la version signée est archivée. Pour les actes à valeur juridique, il s'adosse à une signature électronique conforme au cadre réglementaire.",
      },
      {
        q: "L'archivage électronique a-t-il une valeur probante ?",
        a: "Un archivage électronique peut avoir une valeur probante s'il garantit l'intégrité du document, l'identification de l'auteur et un horodatage fiable. La solution est dimensionnée avec ces exigences pour les documents sensibles.",
      },
    ],
  },
  "/solutions/applications-metier": {
    icon: Workflow,
    eyebrow: "Logiciels métier",
    title: "Votre procédure mérite mieux qu’un empilement de fichiers Excel.",
    lead: "Nous transformons un processus critique en application fiable : rôles, règles, données, validations et indicateurs réunis dans un même environnement.",
    seoTitle: "Développement logiciel métier sur mesure Sénégal | Fallcon Tech",
    seoDescription: "Applications métier sur mesure, ERP ciblé, portails internes et tableaux de bord pour entreprises et organisations au Sénégal.",
    quickAnswer:
      "Une application métier sur mesure suit exactement vos procédures : rôles, règles de validation, données et tableaux de bord. Au lieu d'adapter votre travail à un outil générique, l'outil s'adapte à votre façon de fonctionner.",
    challenge: "Les outils génériques forcent vos équipes à contourner le système. Une application métier doit épouser les règles utiles sans reproduire les lourdeurs.",
    outcomes: ["Cartographie de la procédure existante", "Référentiel de données unique", "Règles métier et validations automatiques", "Contrôle d’accès par rôle", "Tableaux de bord décisionnels", "Connecteurs API, imports et exports"],
    modules: ["Portail agent", "Dossiers & opérations", "Workflows", "Reporting", "Notifications", "Administration"],
    audiences: "Directions métier, opérations, finance, ressources humaines, programmes, réseaux de points de service et entreprises en croissance.",
    faq: [
      {
        q: "Quelle différence entre un logiciel sur mesure et un logiciel du commerce ?",
        a: "Un logiciel du commerce impose ses écrans et ses règles ; une application sur mesure suit vos procédures, vos rôles et vos exceptions, sans contournement ni double saisie.",
      },
      {
        q: "Combien de temps dure un projet d'application métier ?",
        a: "Après un cadrage précis, les premiers modules sont livrés en quelques semaines. Le périmètre se découpe par étapes courtes, chacune testée avec vos équipes.",
      },
      {
        q: "Peut-on faire évoluer l'application plus tard ?",
        a: "Oui. L'architecture est prévue pour ajouter des modules, des règles et des intégrations sans tout reprendre à zéro.",
      },
      {
        q: "L'application peut-elle dialoguer avec nos outils existants ?",
        a: "Oui : connecteurs API, imports et exports sont prévus dès la conception pour éviter la ressaisie.",
      },
    ],
  },
  "/solutions/digitalisation-administrations": {
    icon: Building2,
    eyebrow: "Modernisation du service public",
    title: "Dématérialiser sans désorganiser le service.",
    lead: "Une transformation progressive des registres, demandes, dossiers et circuits de décision, conçue autour des responsabilités administratives réelles.",
    seoTitle: "Dématérialisation des procédures administratives Sénégal | Fallcon Tech",
    seoDescription: "Dématérialisation administrative au Sénégal : registres numériques, courriers, parapheur et circuits de validation pour administrations, mairies et collectivités locales.",
    quickAnswer:
      "Digitaliser une administration, c'est remplacer les registres papier, les dossiers éparpillés et les circuits lents par des procédures numériques claires : formulaires, circuits hiérarchiques, délais de traitement et indicateurs de pilotage, sans désorganiser le service.",
    challenge: "La réussite ne se mesure pas au nombre d’écrans livrés, mais à la réduction des délais, à la qualité des dossiers et à l’adoption par les agents.",
    outcomes: ["Diagnostic des procédures prioritaires", "Registres et formulaires numériques", "Circuits hiérarchiques et délégations", "Suivi des délais de traitement", "Indicateurs pour les directions", "Formation, conduite du changement et support"],
    modules: ["Accueil & guichet", "Instruction", "Validation", "Décision", "Notification", "Pilotage"],
    audiences: "Administrations centrales, collectivités, agences, établissements publics, projets de modernisation et services déconcentrés.",
    faq: [
      {
        q: "Par où commencer la digitalisation d'un service ?",
        a: "Par un diagnostic des procédures prioritaires : registres, courriers, demandes et circuits de décision. On déploie ensuite par étapes, avec les agents concernés.",
      },
      {
        q: "Les agents devront-ils changer leurs habitudes ?",
        a: "L'objectif est de simplifier leur travail : moins de ressaisie, des relances automatiques et un suivi clair. La formation et l'accompagnement font partie de la livraison.",
      },
      {
        q: "Les délais de traitement seront-ils réduits ?",
        a: "Le suivi des délais et les relances automatiques réduisent les blocages ; les directions disposent d'indicateurs pour piloter la charge et les goulots d'étranglement.",
      },
      {
        q: "Les données restent-elles sous notre contrôle ?",
        a: "Oui. Accès par rôle, journalisation et sauvegardes sont définis avec l'administration ; l'hébergement respecte le cadre de votre organisation.",
      },
      {
        q: "Comment dématérialiser une démarche administrative ?",
        a: "On commence par cartographier la procédure : pièces demandées, étapes, responsables et délais. Puis on numérise le formulaire, le circuit de validation et le suivi des délais, par étapes courtes, avant d'étendre aux procédures voisines.",
      },
      {
        q: "La solution convient-elle aux mairies et collectivités locales ?",
        a: "Oui. Registres, courriers, délibérations, actes et circuits interservices sont adaptés au fonctionnement d'une mairie ou d'une collectivité, avec des droits d'accès par service et des indicateurs pour l'exécutif.",
      },
    ],
  },
  "/solutions/infrastructure-cybersecurite": {
    icon: ShieldCheck,
    eyebrow: "Infrastructure & continuité",
    title: "Protéger le service, la donnée et la capacité à reprendre.",
    lead: "Nous renforçons les accès, sauvegardes, postes, serveurs et applications avec une approche proportionnée aux risques de votre organisation.",
    seoTitle: "Infrastructure informatique & cybersécurité Sénégal | Fallcon Tech",
    seoDescription: "Audit, sauvegarde, supervision, contrôle d’accès et continuité informatique pour entreprises, ONG et administrations au Sénégal.",
    quickAnswer:
      "Sécuriser son infrastructure, c'est protéger les accès, les postes, les serveurs et surtout les données : contrôle d'accès, sauvegardes testées, supervision et plan de continuité. Nous adaptons les mesures aux risques réels de chaque organisation.",
    challenge: "Une sauvegarde non restaurée, un compte partagé ou un serveur non supervisé peuvent arrêter une organisation entière.",
    outcomes: ["État des lieux des actifs et accès", "Sauvegardes avec tests de restauration", "Durcissement des comptes et permissions", "Supervision des services critiques", "Plan de continuité et procédures d’incident", "Documentation et transfert aux équipes"],
    modules: ["Identités & accès", "Sauvegardes", "Supervision", "Postes & serveurs", "Continuité", "Rapports"],
    audiences: "Organisations manipulant des données sensibles, réseaux multisites, directions sans DSI interne et projets nécessitant un socle fiable.",
    faq: [
      {
        q: "Par où commencer pour sécuriser son entreprise ?",
        a: "Par un état des lieux : actifs informatiques, comptes et accès, sauvegardes existantes. On identifie les risques critiques et on priorise les actions.",
      },
      {
        q: "Pourquoi tester les sauvegardes ?",
        a: "Une sauvegarde non testée n'est pas une protection. Nous vérifions régulièrement que les données se restaurent réellement, sur poste comme sur serveur.",
      },
      {
        q: "Faut-il tout protéger en même temps ?",
        a: "Non. Les actions sont priorisées selon le risque et le budget, avec des mesures rapides (accès, sauvegardes, mises à jour) puis un durcissement progressif.",
      },
      {
        q: "Proposez-vous un suivi dans la durée ?",
        a: "Oui : supervision des services critiques, alertes, rapports et procédures d'incident documentées, avec transfert de compétences à vos équipes.",
      },
    ],
  },
  "/secteurs/sante": {
    icon: Stethoscope,
    eyebrow: "Solutions numériques pour la santé",
    title: "Un système clinique construit autour du patient et de l’encaissement réel.",
    lead: "Dossiers patients, rendez-vous, actes, prescriptions, caisse, stock et pilotage réunis dans un outil adapté aux pratiques de terrain.",
    seoTitle: "Logiciel clinique & cabinet médical Sénégal | Fallcon Tech",
    seoDescription: "Logiciel de gestion pour cliniques et cabinets au Sénégal : dossier patient, rendez-vous, caisse, prescriptions, stocks et rapports.",
    quickAnswer:
      "Un logiciel clinique réunit le dossier patient, l'agenda des rendez-vous, les actes, la caisse, le stock et les rapports de direction dans un même outil. Les praticiens suivent le parcours du patient, la caisse encaisse et la direction pilote.",
    challenge: "Les outils isolés créent des ruptures entre l’accueil, le praticien, la caisse et la direction. L’information doit suivre le parcours du patient.",
    outcomes: ["Dossier patient structuré et historique", "Agenda, rendez-vous et rappels", "Plans de traitement, actes et prescriptions", "Caisse, facturation et impayés", "Stock et consommables", "Rapports d’activité et droits par fonction"],
    modules: ["Accueil", "Consultation", "Documents médicaux", "Caisse", "Stock", "Direction"],
    audiences: "Cabinets dentaires et médicaux, cliniques privées, centres de diagnostic et réseaux de soins.",
    faq: [
      {
        q: "Le logiciel est-il adapté à un petit cabinet ?",
        a: "Oui. Il se configure pour un cabinet individuel comme pour une clinique avec plusieurs praticiens, plusieurs fauteuils et une équipe d'accueil.",
      },
      {
        q: "Peut-on gérer la caisse et les impayés ?",
        a: "Oui : actes, tarifs, paiements, reçus, impayés et rapports de caisse sont intégrés au dossier patient.",
      },
      {
        q: "Les données de santé sont-elles protégées ?",
        a: "Accès par rôle, journalisation, sauvegardes régulières et hébergement défini avec la structure. La confidentialité est traitée comme une exigence de base.",
      },
      {
        q: "Peut-on relancer les rendez-vous ?",
        a: "Des rappels de rendez-vous peuvent être envoyés automatiquement pour réduire les absences, par SMS ou via WhatsApp.",
      },
    ],
  },
  "/secteurs/transport-logistique": {
    icon: Truck,
    eyebrow: "Transport & logistique",
    title: "Piloter la flotte avec des faits, pas avec des impressions.",
    lead: "Missions, véhicules, conducteurs, carburant, maintenance et télémétrie réunis pour suivre la disponibilité et la rentabilité opérationnelle.",
    seoTitle: "Logiciel gestion flotte transport Sénégal | Fallcon Tech",
    seoDescription: "Solution de gestion de flotte au Sénégal : véhicules, conducteurs, missions, maintenance, carburant, GPS et tableaux de bord.",
    quickAnswer:
      "Une solution de gestion de flotte suit les véhicules, les conducteurs, les missions, le carburant et la maintenance dans un tableau de bord unique. Chaque coût est rattaché à un véhicule : consommation, entretien, immobilisation, rentabilité.",
    challenge: "Les coûts se dispersent entre carburant, immobilisations, maintenance tardive et informations remontées trop lentement.",
    outcomes: ["Référentiel véhicules et conducteurs", "Missions et affectations", "Odomètre, carburant et consommation", "Maintenance préventive et alertes", "Intégration GPS et télémétrie", "Coûts et performance par véhicule"],
    modules: ["Flotte", "Missions", "Conducteurs", "Maintenance", "Télémétrie", "Rentabilité"],
    audiences: "Transporteurs, distributeurs, BTP, sociétés de services, ONG et organisations disposant d’une flotte.",
    faq: [
      {
        q: "Quelles données faut-il saisir au quotidien ?",
        a: "Missions, affectations, relevés d'odomètre, pleins de carburant et interventions de maintenance. Le reste (coûts, alertes, tableaux de bord) est calculé automatiquement.",
      },
      {
        q: "Peut-on se connecter au GPS des véhicules ?",
        a: "Oui. L'intégration GPS et télémétrie rapproche positions, missions et alertes dans le même environnement.",
      },
      {
        q: "Comment réduire les coûts de carburant ?",
        a: "Le suivi des consommations par véhicule et par conducteur fait apparaître les écarts et les usages anormaux.",
      },
      {
        q: "La maintenance est-elle planifiée ?",
        a: "Oui : échéances, alertes préventives et historique des interventions par véhicule.",
      },
    ],
  },
  "/secteurs/ong-projets": {
    icon: UsersRound,
    eyebrow: "ONG & programmes",
    title: "Relier les activités de terrain aux exigences de redevabilité.",
    lead: "Un suivi structuré des bénéficiaires, activités, pièces justificatives, indicateurs et validations pour sécuriser le reporting des programmes.",
    seoTitle: "Logiciel suivi projets ONG Sénégal | Fallcon Tech",
    seoDescription: "Applications de suivi de projets, bénéficiaires, activités et indicateurs pour ONG et programmes de développement au Sénégal.",
    quickAnswer:
      "Un suivi de projet pour ONG organise les bénéficiaires, les activités, les justificatifs et les indicateurs dans une même base. Les équipes terrain saisissent, les gestionnaires valident et les rapports bailleurs se génèrent sans reconstitution.",
    challenge: "La consolidation tardive de fichiers terrain fragilise la qualité des indicateurs et mobilise inutilement les équipes de programme.",
    outcomes: ["Collecte terrain structurée", "Référentiel bénéficiaires et partenaires", "Suivi des activités et livrables", "Pièces justificatives rattachées", "Validation des données", "Tableaux de bord et exports bailleurs"],
    modules: ["Programmes", "Terrain", "Bénéficiaires", "Justificatifs", "Indicateurs", "Reporting"],
    audiences: "ONG, unités de gestion de projet, programmes de développement, associations et partenaires techniques.",
    faq: [
      {
        q: "Comment les équipes terrain saisissent-elles les données ?",
        a: "Par formulaire structuré, depuis un téléphone, une tablette ou un ordinateur, même en zone avec connexion limitée.",
      },
      {
        q: "Peut-on rattacher des justificatifs à chaque activité ?",
        a: "Oui : pièces justificatives, photos et documents sont attachés aux activités et validés avant d'être consolidés.",
      },
      {
        q: "Comment préparer les rapports pour les bailleurs ?",
        a: "Tableaux de bord et exports par programme, période, activité et indicateur, directement prêts pour le reporting.",
      },
      {
        q: "Plusieurs partenaires peuvent-ils utiliser la plateforme ?",
        a: "Oui, avec contrôle d'accès par programme et par équipe : chacun ne voit que ce qui le concerne.",
      },
    ],
  },
  "/secteurs/education-formation": {
    icon: GraduationCap,
    eyebrow: "Éducation & formation",
    title: "Simplifier les parcours administratifs des apprenants et des équipes.",
    lead: "Inscriptions, dossiers, paiements, présences, documents et reporting dans une plateforme adaptée à votre établissement.",
    seoTitle: "Logiciel gestion école & formation Sénégal | Fallcon Tech",
    seoDescription: "Solutions de gestion pour écoles, instituts et centres de formation au Sénégal : inscriptions, paiements, présences et reporting.",
    quickAnswer:
      "Un logiciel de gestion d'établissement centralise les inscriptions, les dossiers des apprenants, les paiements, les présences et les documents. L'administration gagne du temps et la direction suit les effectifs et la trésorerie en temps réel.",
    challenge: "Les dossiers papier et fichiers séparés rendent les inscriptions, paiements et attestations difficiles à consolider.",
    outcomes: ["Dossiers apprenants centralisés", "Inscriptions et admissions", "Suivi des paiements", "Présences et progression", "Documents et attestations", "Tableaux de bord de direction"],
    modules: ["Admissions", "Scolarité", "Finance", "Présences", "Documents", "Direction"],
    audiences: "Écoles privées, instituts, universités, centres de formation et programmes de renforcement de capacités.",
    faq: [
      {
        q: "Peut-on gérer les inscriptions en ligne ?",
        a: "Oui : dossiers de candidature, admissions et réinscriptions sont centralisés, avec pièces jointes et états de paiement.",
      },
      {
        q: "Comment suivre les paiements des frais ?",
        a: "Par apprenant : échéances, reçus, impayés et rapports de trésorerie. Les relances peuvent être automatisées.",
      },
      {
        q: "Les attestations et documents sont-ils générés ?",
        a: "Oui : attestations de scolarité, certificats et documents administratifs se génèrent depuis le dossier.",
      },
      {
        q: "La solution convient-elle à un institut privé ?",
        a: "Oui, qu'il s'agisse d'une école, d'un institut, d'un centre de formation ou d'une université.",
      },
    ],
  },
};

const process = [
  ["01", "Diagnostic", "Comprendre les responsabilités, documents, données et points de rupture."],
  ["02", "Cadrage", "Définir le périmètre, les règles, les critères d’acceptation et la migration."],
  ["03", "Réalisation", "Livrer par étapes courtes et tester avec des scénarios métier réels."],
  ["04", "Déploiement", "Former, migrer, documenter, superviser et accompagner l’adoption."],
];

export default function InstitutionalPage() {
  const { pathname } = useLocation();
  const page = pages[pathname] || pages["/solutions/applications-metier"];
  const Icon = page.icon;
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://fallcontech.com";
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.eyebrow,
      description: page.lead,
      areaServed: { "@type": "Country", name: "Sénégal" },
      provider: { "@type": "Organization", name: "Fallcon Tech", url: siteUrl },
      url: `${siteUrl}${pathname}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Solutions & secteurs", item: `${siteUrl}/services` },
        { "@type": "ListItem", position: 3, name: page.eyebrow, item: `${siteUrl}${pathname}` },
      ],
    },
  ];

  return (
    <>
      <SEO path={pathname} title={page.seoTitle} description={page.seoDescription} jsonLd={jsonLd} />
      <section className="offer-hero">
        <div className="site-shell offer-hero-grid">
          <div>
            <Link to="/services" className="breadcrumb-link">Solutions <span>/</span> {page.eyebrow}</Link>
            <div className="offer-icon"><Icon size={24} /></div>
            <h1>{page.title}</h1>
            <p>{page.lead}</p>
            <div className="hero-actions">
              <Link to="/contact" className="button button-primary">Demander une étude <ArrowRight size={17} /></Link>
              <Link to="/work" className="button button-secondary">Voir nos références</Link>
            </div>
          </div>
          <aside className="offer-summary">
            <p className="overline">Pour qui ?</p>
            <p>{page.audiences}</p>
            <div className="summary-rule" />
            <p className="overline">Notre principe</p>
            <strong>La procédure et la donnée avant l’interface.</strong>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="site-shell quick-answer-block">
          <p className="overline">En bref</p>
          <p className="quick-answer-text">{page.quickAnswer}</p>
        </div>
      </section>

      <section className="section">
        <div className="site-shell offer-problem-grid">
          <div>
            <p className="overline">Le problème à résoudre</p>
            <h2>{page.challenge}</h2>
          </div>
          <div className="offer-outcomes">
            {page.outcomes.map((item) => <div key={item}><Check size={17} /><span>{item}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="site-shell">
          <div className="section-heading compact">
            <p className="overline">Périmètre fonctionnel</p>
            <h2>Un socle modulaire, configuré pour votre organisation.</h2>
          </div>
          <div className="module-grid">
            {page.modules.map((module, index) => (
              <div className="module-card" key={module}>
                <span>0{index + 1}</span>
                {index % 3 === 0 ? <Database size={20} /> : index % 3 === 1 ? <Workflow size={20} /> : <BarChart3 size={20} />}
                <strong>{module}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell delivery-grid">
          <div className="delivery-copy">
            <p className="overline">Mise en œuvre</p>
            <h2>Livrer un système adopté, pas seulement installé.</h2>
            <p>Nous intégrons les utilisateurs, les données et les contraintes d’exploitation dès le cadrage.</p>
            <div className="security-note"><LockKeyhole size={19} /><span>Accès par rôle, journalisation et sauvegardes sont traités comme des exigences de base.</span></div>
          </div>
          <ol className="delivery-steps">
            {process.map(([number, title, text]) => <li key={number}><span>{number}</span><div><strong>{title}</strong><p>{text}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="section section-muted">
        <div className="site-shell">
          <div className="section-heading compact">
            <p className="overline">Questions fréquentes</p>
            <h2>Les questions que l’on nous pose avant de démarrer.</h2>
          </div>
          <div className="faq-list">
            {page.faq.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-banner">
        <div className="site-shell contact-banner-inner">
          <div><p className="overline overline-light">Étude de faisabilité</p><h2>Parlons de votre procédure, de vos données et de vos contraintes.</h2></div>
          <Link to="/contact" className="button button-light">Présenter votre besoin <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
