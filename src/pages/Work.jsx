import { Link } from "react-router-dom";
import { ArrowRight, FileStack, ShieldCheck, Workflow } from "lucide-react";
import SEO from "@/components/SEO";
import clinicImg from "@/assets/clinic-dabia.webp";
import dentalOsImg from "@/assets/dental-os-odontogram.webp";
import fleetImg from "@/assets/teliman-tracking-fleeti-dashboard-full.png";
import miroirImg from "@/assets/miroir-foncier.webp";
import telimanShareImg from "@/assets/telimanshare.webp";

const projects = [
  {
    sector: "Prototype · gestion documentaire",
    title: "Circuit Courrier",
    summary: "Prototype fonctionnel de circuit courrier numérique conçu pour tester l’enregistrement, l’affectation, le traitement et la traçabilité des correspondances.",
    image: null,
    href: "/solutions/gestion-courrier-ged",
    capabilities: ["Courrier", "Affectation", "Workflow", "Traçabilité"],
  },
  {
    sector: "Présence numérique · santé",
    title: "Site Web de la Clinique Dentaire Dabia",
    summary: "Site institutionnel responsive présentant la clinique, ses soins et ses praticiens, avec un parcours clair vers la prise de rendez-vous.",
    image: clinicImg,
    href: "/case-study/clinic",
    capabilities: ["Site web", "RDV en ligne", "Mobile", "SEO local"],
  },
  {
    sector: "Logiciel métier · santé dentaire",
    title: "Dental OS",
    summary: "Logiciel de gestion pour cabinets dentaires réunissant dossiers patients, odontogramme, plans de traitement, rendez-vous, caisse et documents cliniques.",
    image: dentalOsImg,
    href: "/secteurs/sante",
    capabilities: ["Dossier patient", "Odontogramme", "Caisse", "Documents"],
  },
  {
    sector: "Gestion documentaire sécurisée",
    title: "TelimanShare",
    summary: "Plateforme de partage documentaire avec espaces sécurisés, contrôle des accès et journal d’activité pour limiter les échanges dispersés par e-mail.",
    image: telimanShareImg,
    href: "/case-study/telimanshare",
    capabilities: ["Partage", "Accès", "Journal d’activité", "Documents"],
  },
  {
    sector: "Transport & logistique",
    title: "Teliman Fleet Operations",
    summary: "Données véhicules, maintenance, conducteurs et lecture opérationnelle unifiées pour améliorer la disponibilité de flotte.",
    image: fleetImg,
    href: "/case-study/teliman-tracking-fleeti",
    capabilities: ["Flotte", "Télémétrie", "Maintenance", "Alertes"],
  },
  {
    sector: "Foncier & information",
    title: "Miroir Foncier",
    summary: "Plateforme d’information structurée pour rendre des sujets fonciers complexes plus accessibles et exploitables.",
    image: miroirImg,
    href: "/case-study/miroir-foncier",
    capabilities: ["Contenu", "Recherche", "Données", "Accès public"],
  },
];

export default function Work() {
  return (
    <>
      <SEO
        path="/work"
        title="Références logiciels métier & transformation numérique | Fallcon Tech"
        description="Découvrez les logiciels métier, plateformes documentaires et sites institutionnels réalisés par Fallcon Tech au Sénégal."
      />
      <section className="page-hero">
        <div className="site-shell page-hero-grid">
          <div><p className="overline">Références</p><h1>Des systèmes confrontés au réel.</h1></div>
          <p>Nos références illustrent une même approche : comprendre le métier, sécuriser la donnée et livrer un outil que les équipes peuvent exploiter durablement.</p>
        </div>
      </section>
      <section className="section section-muted">
        <div className="site-shell project-showcase">
          {projects.map((project, index) => (
            <article key={project.title} className="project-case">
              <div className="project-meta"><span>0{index + 1}</span><p>{project.sector}</p></div>
              {project.image ? (
                <div className="project-visual"><img src={project.image} alt={`Aperçu du projet ${project.title}`} /></div>
              ) : (
                <div className="project-visual project-visual-system" aria-label="Schéma fonctionnel du projet Circuit Courrier">
                  <div><FileStack size={24} /><span>Courriers</span></div>
                  <div><Workflow size={24} /><span>Circuits</span></div>
                  <div><ShieldCheck size={24} /><span>Traçabilité</span></div>
                </div>
              )}
              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <div className="tag-row tag-row-light">{project.capabilities.map((item) => <span key={item}>{item}</span>)}</div>
                <Link to={project.href} className="text-link">Examiner le projet <ArrowRight size={16} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="site-shell split-heading">
          <div><p className="overline">Votre projet</p><h2>La prochaine référence doit commencer par un problème clairement posé.</h2></div>
          <div className="intro-copy"><p>Nous pouvons étudier une procédure existante, un remplacement d’outil ou un nouveau système d’information.</p><Link to="/contact" className="button button-primary">Demander une étude <ArrowRight size={17} /></Link></div>
        </div>
      </section>
    </>
  );
}
