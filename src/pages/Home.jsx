import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  Database,
  FileCheck2,
  FileStack,
  LockKeyhole,
  Network,
  Route,
  ShieldCheck,
  Stethoscope,
  Truck,
  UsersRound,
  Workflow,
} from "lucide-react";
import SEO from "@/components/SEO";
import dentalOsImg from "@/assets/dental-os-odontogram.webp";
import telimanImg from "@/assets/teliman-tracking-fleeti-dashboard.png";
import telimanShareImg from "@/assets/telimanshare.webp";

const solutions = [
  {
    icon: FileStack,
    eyebrow: "Courrier & documents",
    title: "Courrier, GED et workflows",
    text: "Centralisez les courriers entrants et sortants, pièces jointes, instructions, délais et validations dans une piste d’audit unique.",
    href: "/solutions/gestion-courrier-ged",
  },
  {
    icon: Workflow,
    eyebrow: "Opérations",
    title: "Applications métier sur mesure",
    text: "Remplacez les fichiers dispersés et ressaisies par un outil aligné sur vos procédures, rôles et indicateurs.",
    href: "/solutions/applications-metier",
  },
  {
    icon: Building2,
    eyebrow: "Secteur public",
    title: "Digitalisation administrative",
    text: "Dématérialisation progressive des registres, demandes, circuits de validation et tableaux de pilotage.",
    href: "/solutions/digitalisation-administrations",
  },
  {
    icon: LockKeyhole,
    eyebrow: "Continuité",
    title: "Infrastructure & cybersécurité",
    text: "Accès, sauvegardes, supervision et continuité de service pensés pour les données sensibles et les équipes distribuées.",
    href: "/solutions/infrastructure-cybersecurite",
  },
];

const sectors = [
  {
    icon: Building2,
    title: "Administrations publiques",
    text: "Courrier, parapheurs, registres, décisions, reporting et traçabilité interservices.",
    href: "/solutions/digitalisation-administrations",
  },
  {
    icon: Stethoscope,
    title: "Santé privée",
    text: "Dossiers patients, rendez-vous, caisse, prescriptions, stocks et pilotage multisite.",
    href: "/secteurs/sante",
  },
  {
    icon: Truck,
    title: "Transport & logistique",
    text: "Flotte, missions, conducteurs, maintenance, télémétrie et rentabilité opérationnelle.",
    href: "/secteurs/transport-logistique",
  },
  {
    icon: UsersRound,
    title: "ONG & programmes",
    text: "Suivi d’activités, bénéficiaires, pièces justificatives, indicateurs et redevabilité.",
    href: "/secteurs/ong-projets",
  },
];

const references = [
  {
    label: "Gestion électronique du courrier",
    title: "Circuit Courrier — circulation et traçabilité documentaire",
    text: "Une plateforme métier structurée autour des circuits, rôles, étiquettes, accusés et historiques d’action.",
    image: telimanShareImg,
    href: "/work",
    tags: ["Courrier", "GED", "Contrôle d’accès"],
  },
  {
    label: "Logiciel métier · santé dentaire",
    title: "Dental OS",
    text: "Logiciel métier pour cabinets dentaires réunissant dossiers patients, odontogramme, plans de traitement, rendez-vous, caisse et documents cliniques.",
    image: dentalOsImg,
    href: "/secteurs/sante",
    tags: ["Dossier patient", "Odontogramme", "Caisse"],
  },
  {
    label: "Pilotage logistique",
    title: "Teliman — données de flotte transformées en décisions",
    text: "Supervision opérationnelle, données véhicules et lecture immédiate des anomalies prioritaires.",
    image: telimanImg,
    href: "/case-study/teliman-tracking-fleeti",
    tags: ["Transport", "Télémétrie", "Tableaux de bord"],
  },
];

const commitments = [
  "Cadrage avant développement",
  "Droits d’accès par rôle",
  "Journalisation des actions",
  "Migration de données contrôlée",
  "Formation et documentation",
  "Maintenance et suivi après déploiement",
];

export default function Home() {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://fallcontech.com";
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: solutions.map((solution, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}${solution.href}`,
      item: {
        "@type": "Service",
        name: solution.title,
        description: solution.text,
        provider: { "@type": "Organization", name: "Fallcon Tech" },
        areaServed: { "@type": "Country", name: "Sénégal" },
      },
    })),
  };

  return (
    <>
      <SEO
        path="/"
        title="Transformation numérique Sénégal : développement web, applications mobiles & logiciels | Fallcon Tech"
        description="Fallcon Tech conçoit des systèmes de gestion, GED, logiciels métier et infrastructures sécurisées pour administrations, cliniques, ONG et entreprises au Sénégal."
        jsonLd={serviceJsonLd}
      />

      <section className="institutional-hero">
        <div className="site-shell hero-grid">
          <div className="hero-copy">
            <p className="overline">Transformation numérique · Dakar, Sénégal</p>
            <h1>Systèmes numériques pour organisations exigeantes.</h1>
            <p className="hero-lead">
              Nous concevons les outils qui structurent le travail : courrier,
              documents, opérations, données et décisions. Du cadrage au support,
              avec une responsabilité claire sur le résultat.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/contact">
                Demander une étude <ArrowRight size={17} />
              </Link>
              <Link className="button button-secondary" to="/work">
                Examiner nos références
              </Link>
            </div>
            <div className="hero-proofline">
              <span><ShieldCheck size={16} /> Données maîtrisées</span>
              <span><FileCheck2 size={16} /> Traçabilité intégrée</span>
              <span><Network size={16} /> Déploiement accompagné</span>
            </div>
          </div>

          <div className="system-board" aria-label="Schéma d'un système d'information intégré">
            <div className="board-topline">
              <span>Architecture métier</span>
              <span className="status-dot">Système opérationnel</span>
            </div>
            <div className="board-core">
              <div className="core-mark"><Database size={28} /></div>
              <div>
                <strong>Référentiel central</strong>
                <small>Une donnée fiable, accessible selon les rôles</small>
              </div>
            </div>
            <div className="board-flow">
              <div><FileStack size={19} /><span>Documents</span><small>Classement & recherche</small></div>
              <div><Workflow size={19} /><span>Processus</span><small>Validation & délais</small></div>
              <div><LockKeyhole size={19} /><span>Accès</span><small>Rôles & historique</small></div>
              <div><Route size={19} /><span>Pilotage</span><small>Indicateurs & alertes</small></div>
            </div>
            <div className="board-footer">
              <span>Conçu pour votre procédure réelle</span>
              <span>01 — 04</span>
            </div>
          </div>
        </div>
      </section>

      <div className="audience-strip">
        <div className="site-shell audience-row">
          <span>Nous accompagnons</span>
          <strong>Administrations</strong>
          <strong>Établissements de santé</strong>
          <strong>ONG & programmes</strong>
          <strong>Entreprises multisites</strong>
        </div>
      </div>

      <section className="section section-intro">
        <div className="site-shell split-heading">
          <div>
            <p className="overline">Notre rôle</p>
            <h2>Faire disparaître les angles morts de vos opérations.</h2>
          </div>
          <div className="intro-copy">
            <p>
              Les organisations ne manquent pas d’applications. Elles manquent
              souvent d’un système cohérent entre les procédures, les personnes
              et la donnée.
            </p>
            <p>
              Fallcon Tech part du terrain, formalise le circuit utile, puis livre
              un outil maintenable que les équipes peuvent réellement adopter.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="solutions">
        <div className="site-shell">
          <div className="section-heading">
            <p className="overline">Solutions</p>
            <h2>Des systèmes centrés sur le travail réel.</h2>
            <p>Des offres lisibles pour répondre aux priorités des directions générales, DSI et responsables métiers.</p>
          </div>
          <div className="solution-grid">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Link className="solution-card" to={solution.href} key={solution.title}>
                  <div className="card-index">0{index + 1}</div>
                  <Icon size={25} />
                  <p className="card-eyebrow">{solution.eyebrow}</p>
                  <h3>{solution.title}</h3>
                  <p>{solution.text}</p>
                  <span className="card-link">Découvrir la solution <ChevronRight size={16} /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" id="secteurs">
        <div className="site-shell">
          <div className="section-heading compact">
            <p className="overline">Secteurs</p>
            <h2>Une compréhension métier avant la technologie.</h2>
          </div>
          <div className="sector-grid">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <Link to={sector.href} className="sector-card" key={sector.title}>
                  <Icon size={23} />
                  <div>
                    <h3>{sector.title}</h3>
                    <p>{sector.text}</p>
                  </div>
                  <ArrowRight size={18} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="site-shell">
          <div className="dark-heading">
            <div>
              <p className="overline overline-light">Références sélectionnées</p>
              <h2>Des produits métier, pas des maquettes.</h2>
            </div>
            <Link to="/work" className="text-link-light">Voir toutes les réalisations <ArrowRight size={17} /></Link>
          </div>
          <div className="reference-stack">
            {references.map((reference, index) => (
              <article className="reference-row" key={reference.title}>
                <div className="reference-number">0{index + 1}</div>
                <div className="reference-image"><img src={reference.image} alt="" loading="lazy" /></div>
                <div className="reference-copy">
                  <p className="reference-label">{reference.label}</p>
                  <h3>{reference.title}</h3>
                  <p>{reference.text}</p>
                  <div className="tag-row">{reference.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <Link to={reference.href} aria-label={`Voir ${reference.title}`} className="reference-arrow"><ArrowRight size={21} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell delivery-grid">
          <div className="delivery-copy">
            <p className="overline">Méthode de déploiement</p>
            <h2>Une trajectoire claire, du diagnostic à l’adoption.</h2>
            <p>Chaque étape produit un livrable exploitable et une décision. Pas d’effet tunnel, pas de dépendance à une démonstration permanente.</p>
            <Link to="/contact" className="text-link">Échanger sur votre contexte <ArrowRight size={17} /></Link>
          </div>
          <ol className="delivery-steps">
            <li><span>01</span><div><strong>Diagnostic</strong><p>Entretiens, procédures, données, contraintes et risques.</p></div></li>
            <li><span>02</span><div><strong>Cadrage</strong><p>Périmètre, rôles, circuits, critères d’acceptation et plan de migration.</p></div></li>
            <li><span>03</span><div><strong>Réalisation</strong><p>Livraisons courtes, démonstrations métier et tests sur cas réels.</p></div></li>
            <li><span>04</span><div><strong>Déploiement</strong><p>Migration, formation, documentation, supervision et support.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section section-soft">
        <div className="site-shell assurance-grid">
          <div>
            <p className="overline">Engagement de livraison</p>
            <h2>La confiance se construit dans les détails.</h2>
          </div>
          <div className="commitment-grid">
            {commitments.map((commitment) => (
              <div key={commitment}><Check size={17} /><span>{commitment}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-banner">
        <div className="site-shell contact-banner-inner">
          <div>
            <p className="overline overline-light">Votre prochain système</p>
            <h2>Commençons par comprendre ce qui doit mieux fonctionner.</h2>
          </div>
          <Link className="button button-light" to="/contact">
            Demander une étude <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
