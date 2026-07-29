import CaseStudyLayout from "@/components/CaseStudyLayout";
import dashboardImg from "@/assets/teliman-tracking-fleeti-dashboard.png";
import dashboardFullImg from "@/assets/teliman-tracking-fleeti-dashboard-full.png";

export default function CaseStudyTelimanTrackingFleeti() {
  return <CaseStudyLayout
    path="/case-study/teliman-tracking-fleeti"
    seoTitle="Teliman Fleet Operations — pilotage de flotte | Fallcon Tech"
    seoDescription="Tableau de bord métier pour consolider les données Fleeti, suivre la flotte, prioriser les alertes et piloter les opérations logistiques."
    eyebrow="Référence · Transport & logistique"
    title="Teliman Fleet Operations"
    subtitle="Des données de télémétrie transformées en vues opérationnelles pour suivre la flotte et prioriser les décisions."
    image={dashboardImg}
    imageAlt="Tableau de bord de pilotage de flotte Teliman"
    tags={["Gestion de flotte", "Télémétrie", "Tableaux de bord"]}
    challenge="Les données véhicules étaient disponibles, mais leur dispersion rendait difficile une lecture rapide de l’état de la flotte, des anomalies, des trajets et des priorités quotidiennes de l’équipe d’exploitation."
    solution="Fallcon Tech a raccordé les données Fleeti à une interface métier qui consolide les indicateurs importants, distingue les situations prioritaires et organise la navigation entre flotte, carte, alertes et analyses."
    features={[
      "Vue consolidée des véhicules actifs, hors ligne et à surveiller",
      "Priorisation des alertes et anomalies opérationnelles",
      "Lecture des kilométrages, vitesses et activités de la flotte",
      "Navigation entre carte, flotte, analytics et rapports",
      "Indicateurs adaptés au pilotage quotidien de l’exploitation",
      "Connexion à l’API Fleeti avec couche de transformation métier",
    ]}
    gallery={[
      { src: dashboardFullImg, alt: "Vue complète du tableau de bord Teliman Fleet Operations" },
    ]}
    outcomes={[
      "Une lecture commune de l’état opérationnel de la flotte",
      "Des anomalies visibles sans parcourir plusieurs sources de données",
      "Des indicateurs directement exploitables par l’équipe logistique",
      "Un socle pour faire évoluer les analyses et rapports métier",
    ]}
    stack={["React", "Vite", "Express", "Fleeti API", "Leaflet", "SQLite"]}
    externalUrl="https://teliman-tracking-fleeti.vercel.app"
  />;
}
