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
    seoTitle: "Logiciel gestion courrier & GED Sénégal | Fallcon Tech",
    seoDescription: "Solution de gestion électronique du courrier, GED, parapheur, workflow et traçabilité pour administrations et entreprises au Sénégal.",
    challenge: "Quand le courrier dépend des cahiers, WhatsApp et dossiers partagés, les délais deviennent invisibles et la responsabilité se dilue.",
    outcomes: ["Registre numérique entrant et sortant", "Affectation par direction, service ou agent", "Instructions, délais et relances", "Pièces jointes et classement documentaire", "Parapheur et circuits de validation", "Historique complet des consultations et actions"],
    modules: ["Bureau courrier", "Circuits et parapheurs", "GED & recherche", "Tableaux de bord", "Administration des accès", "Archivage & export"],
    audiences: "Ministères, directions, agences, collectivités, établissements publics, ONG et entreprises multisites.",
  },
  "/solutions/applications-metier": {
    icon: Workflow,
    eyebrow: "Logiciels métier",
    title: "Votre procédure mérite mieux qu’un empilement de fichiers Excel.",
    lead: "Nous transformons un processus critique en application fiable : rôles, règles, données, validations et indicateurs réunis dans un même environnement.",
    seoTitle: "Développement logiciel métier sur mesure Sénégal | Fallcon Tech",
    seoDescription: "Applications métier sur mesure, ERP ciblé, portails internes et tableaux de bord pour entreprises et organisations au Sénégal.",
    challenge: "Les outils génériques forcent vos équipes à contourner le système. Une application métier doit épouser les règles utiles sans reproduire les lourdeurs.",
    outcomes: ["Cartographie de la procédure existante", "Référentiel de données unique", "Règles métier et validations automatiques", "Contrôle d’accès par rôle", "Tableaux de bord décisionnels", "Connecteurs API, imports et exports"],
    modules: ["Portail agent", "Dossiers & opérations", "Workflows", "Reporting", "Notifications", "Administration"],
    audiences: "Directions métier, opérations, finance, ressources humaines, programmes, réseaux de points de service et entreprises en croissance.",
  },
  "/solutions/digitalisation-administrations": {
    icon: Building2,
    eyebrow: "Modernisation du service public",
    title: "Dématérialiser sans désorganiser le service.",
    lead: "Une transformation progressive des registres, demandes, dossiers et circuits de décision, conçue autour des responsabilités administratives réelles.",
    seoTitle: "Digitalisation administrations Sénégal | Fallcon Tech",
    seoDescription: "Dématérialisation des procédures, registres, courriers, dossiers et workflows pour administrations et établissements publics au Sénégal.",
    challenge: "La réussite ne se mesure pas au nombre d’écrans livrés, mais à la réduction des délais, à la qualité des dossiers et à l’adoption par les agents.",
    outcomes: ["Diagnostic des procédures prioritaires", "Registres et formulaires numériques", "Circuits hiérarchiques et délégations", "Suivi des délais de traitement", "Indicateurs pour les directions", "Formation, conduite du changement et support"],
    modules: ["Accueil & guichet", "Instruction", "Validation", "Décision", "Notification", "Pilotage"],
    audiences: "Administrations centrales, collectivités, agences, établissements publics, projets de modernisation et services déconcentrés.",
  },
  "/solutions/infrastructure-cybersecurite": {
    icon: ShieldCheck,
    eyebrow: "Infrastructure & continuité",
    title: "Protéger le service, la donnée et la capacité à reprendre.",
    lead: "Nous renforçons les accès, sauvegardes, postes, serveurs et applications avec une approche proportionnée aux risques de votre organisation.",
    seoTitle: "Infrastructure informatique & cybersécurité Sénégal | Fallcon Tech",
    seoDescription: "Audit, sauvegarde, supervision, contrôle d’accès et continuité informatique pour entreprises, ONG et administrations au Sénégal.",
    challenge: "Une sauvegarde non restaurée, un compte partagé ou un serveur non supervisé peuvent arrêter une organisation entière.",
    outcomes: ["État des lieux des actifs et accès", "Sauvegardes avec tests de restauration", "Durcissement des comptes et permissions", "Supervision des services critiques", "Plan de continuité et procédures d’incident", "Documentation et transfert aux équipes"],
    modules: ["Identités & accès", "Sauvegardes", "Supervision", "Postes & serveurs", "Continuité", "Rapports"],
    audiences: "Organisations manipulant des données sensibles, réseaux multisites, directions sans DSI interne et projets nécessitant un socle fiable.",
  },
  "/secteurs/sante": {
    icon: Stethoscope,
    eyebrow: "Solutions numériques pour la santé",
    title: "Un système clinique construit autour du patient et de l’encaissement réel.",
    lead: "Dossiers patients, rendez-vous, actes, prescriptions, caisse, stock et pilotage réunis dans un outil adapté aux pratiques de terrain.",
    seoTitle: "Logiciel clinique & cabinet médical Sénégal | Fallcon Tech",
    seoDescription: "Logiciel de gestion pour cliniques et cabinets au Sénégal : dossier patient, rendez-vous, caisse, prescriptions, stocks et rapports.",
    challenge: "Les outils isolés créent des ruptures entre l’accueil, le praticien, la caisse et la direction. L’information doit suivre le parcours du patient.",
    outcomes: ["Dossier patient structuré et historique", "Agenda, rendez-vous et rappels", "Plans de traitement, actes et prescriptions", "Caisse, facturation et impayés", "Stock et consommables", "Rapports d’activité et droits par fonction"],
    modules: ["Accueil", "Consultation", "Documents médicaux", "Caisse", "Stock", "Direction"],
    audiences: "Cabinets dentaires et médicaux, cliniques privées, centres de diagnostic et réseaux de soins.",
  },
  "/secteurs/transport-logistique": {
    icon: Truck,
    eyebrow: "Transport & logistique",
    title: "Piloter la flotte avec des faits, pas avec des impressions.",
    lead: "Missions, véhicules, conducteurs, carburant, maintenance et télémétrie réunis pour suivre la disponibilité et la rentabilité opérationnelle.",
    seoTitle: "Logiciel gestion flotte transport Sénégal | Fallcon Tech",
    seoDescription: "Solution de gestion de flotte au Sénégal : véhicules, conducteurs, missions, maintenance, carburant, GPS et tableaux de bord.",
    challenge: "Les coûts se dispersent entre carburant, immobilisations, maintenance tardive et informations remontées trop lentement.",
    outcomes: ["Référentiel véhicules et conducteurs", "Missions et affectations", "Odomètre, carburant et consommation", "Maintenance préventive et alertes", "Intégration GPS et télémétrie", "Coûts et performance par véhicule"],
    modules: ["Flotte", "Missions", "Conducteurs", "Maintenance", "Télémétrie", "Rentabilité"],
    audiences: "Transporteurs, distributeurs, BTP, sociétés de services, ONG et organisations disposant d’une flotte.",
  },
  "/secteurs/ong-projets": {
    icon: UsersRound,
    eyebrow: "ONG & programmes",
    title: "Relier les activités de terrain aux exigences de redevabilité.",
    lead: "Un suivi structuré des bénéficiaires, activités, pièces justificatives, indicateurs et validations pour sécuriser le reporting des programmes.",
    seoTitle: "Logiciel suivi projets ONG Sénégal | Fallcon Tech",
    seoDescription: "Applications de suivi de projets, bénéficiaires, activités et indicateurs pour ONG et programmes de développement au Sénégal.",
    challenge: "La consolidation tardive de fichiers terrain fragilise la qualité des indicateurs et mobilise inutilement les équipes de programme.",
    outcomes: ["Collecte terrain structurée", "Référentiel bénéficiaires et partenaires", "Suivi des activités et livrables", "Pièces justificatives rattachées", "Validation des données", "Tableaux de bord et exports bailleurs"],
    modules: ["Programmes", "Terrain", "Bénéficiaires", "Justificatifs", "Indicateurs", "Reporting"],
    audiences: "ONG, unités de gestion de projet, programmes de développement, associations et partenaires techniques.",
  },
  "/secteurs/education-formation": {
    icon: GraduationCap,
    eyebrow: "Éducation & formation",
    title: "Simplifier les parcours administratifs des apprenants et des équipes.",
    lead: "Inscriptions, dossiers, paiements, présences, documents et reporting dans une plateforme adaptée à votre établissement.",
    seoTitle: "Logiciel gestion école & formation Sénégal | Fallcon Tech",
    seoDescription: "Solutions de gestion pour écoles, instituts et centres de formation au Sénégal : inscriptions, paiements, présences et reporting.",
    challenge: "Les dossiers papier et fichiers séparés rendent les inscriptions, paiements et attestations difficiles à consolider.",
    outcomes: ["Dossiers apprenants centralisés", "Inscriptions et admissions", "Suivi des paiements", "Présences et progression", "Documents et attestations", "Tableaux de bord de direction"],
    modules: ["Admissions", "Scolarité", "Finance", "Présences", "Documents", "Direction"],
    audiences: "Écoles privées, instituts, universités, centres de formation et programmes de renforcement de capacités.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.eyebrow,
    description: page.lead,
    areaServed: { "@type": "Country", name: "Sénégal" },
    provider: { "@type": "Organization", name: "Fallcon Tech", url: siteUrl },
    url: `${siteUrl}${pathname}`,
  };

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

      <section className="contact-banner">
        <div className="site-shell contact-banner-inner">
          <div><p className="overline overline-light">Étude de faisabilité</p><h2>Parlons de votre procédure, de vos données et de vos contraintes.</h2></div>
          <Link to="/contact" className="button button-light">Présenter votre besoin <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
