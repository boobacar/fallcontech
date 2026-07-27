import { Link } from "react-router-dom";
import { ArrowRight, FileStack, ShieldCheck, Workflow } from "lucide-react";
import SEO from "@/components/SEO";
import clinicImg from "@/assets/clinic-dabia.webp";
import fleetImg from "@/assets/teliman-tracking-fleeti-dashboard-full.png";
import miroirImg from "@/assets/miroir-foncier.webp";

const projects = [
  { sector: "Administration & courrier", title: "EMGA Courrier", summary: "Circuits documentaires, affectations, étiquettes, droits d’accès et historique complet pour structurer la gestion du courrier.", image: null, href: "/solutions/gestion-courrier-ged", capabilities: ["GEC", "GED", "Workflow", "Audit"] },
  { sector: "Santé privée", title: "Dabia Dental OS", summary: "Un environnement opérationnel reliant dossier patient, actes, caisse, prescriptions et documents médicaux.", image: clinicImg, href: "/case-study/clinic", capabilities: ["Patient", "Caisse", "Documents", "Pilotage"] },
  { sector: "Transport & logistique", title: "Teliman Fleet Operations", summary: "Données véhicules, maintenance, conducteurs et lecture opérationnelle unifiées pour améliorer la disponibilité de flotte.", image: fleetImg, href: "/case-study/teliman-tracking-fleeti", capabilities: ["Flotte", "Télémétrie", "Maintenance", "Alertes"] },
  { sector: "Foncier & information", title: "Miroir Foncier", summary: "Plateforme d’information structurée pour rendre des sujets fonciers complexes plus accessibles et exploitables.", image: miroirImg, href: "/case-study/miroir-foncier", capabilities: ["Contenu", "Recherche", "Données", "Accès public"] },
];

export default function Work() {
  return (
    <>
      <SEO path="/work" title="Références logiciels métier & transformation numérique | Fallcon Tech" description="Découvrez les systèmes métier réalisés par Fallcon Tech pour le courrier, la santé, le transport, la logistique et l’information au Sénégal." />
      <section className="page-hero"><div className="site-shell page-hero-grid"><div><p className="overline">Références</p><h1>Des systèmes confrontés au réel.</h1></div><p>Nos références illustrent une même approche : comprendre le métier, sécuriser la donnée et livrer un outil que les équipes peuvent exploiter durablement.</p></div></section>
      <section className="section section-muted">
        <div className="site-shell project-showcase">
          {projects.map((project, index) => <article key={project.title} className="project-case">
            <div className="project-meta"><span>0{index + 1}</span><p>{project.sector}</p></div>
            {project.image ? (
              <div className="project-visual"><img src={project.image} alt={`Aperçu du projet ${project.title}`} /></div>
            ) : (
              <div className="project-visual project-visual-system" aria-label="Schéma fonctionnel EMGA Courrier">
                <div><FileStack size={24} /><span>Courriers</span></div>
                <div><Workflow size={24} /><span>Circuits</span></div>
                <div><ShieldCheck size={24} /><span>Traçabilité</span></div>
              </div>
            )}
            <div className="project-content"><h2>{project.title}</h2><p>{project.summary}</p><div className="tag-row tag-row-light">{project.capabilities.map((item) => <span key={item}>{item}</span>)}</div><Link to={project.href} className="text-link">Examiner le projet <ArrowRight size={16} /></Link></div>
          </article>)}
        </div>
      </section>
      <section className="section"><div className="site-shell split-heading"><div><p className="overline">Votre projet</p><h2>La prochaine référence doit commencer par un problème clairement posé.</h2></div><div className="intro-copy"><p>Nous pouvons étudier une procédure existante, un remplacement d’outil ou un nouveau système d’information.</p><Link to="/contact" className="button button-primary">Demander une étude <ArrowRight size={17} /></Link></div></div></section>
    </>
  );
}
