import CaseStudyLayout from "@/components/CaseStudyLayout";
import miroirImg from "@/assets/miroir-foncier.webp";

export default function CaseStudyMiroirFoncier() {
  return <CaseStudyLayout
    path="/case-study/miroir-foncier"
    seoTitle="Miroir Foncier — plateforme d’information foncière | Fallcon Tech"
    seoDescription="Conception du site Miroir Foncier : information structurée, expérience responsive, performance et socle SEO."
    eyebrow="Référence · Information foncière"
    title="Miroir Foncier"
    subtitle="Une plateforme éditoriale claire pour rendre l’information foncière plus accessible et crédible."
    image={miroirImg}
    imageAlt="Aperçu du site Miroir Foncier"
    tags={["Plateforme éditoriale", "Responsive", "SEO technique"]}
    challenge="L’information devait être organisée de manière compréhensible pour différents profils de visiteurs, tout en conservant une navigation rapide, une lecture confortable sur mobile et une structure favorable au référencement."
    solution="Le site adopte une architecture éditoriale sobre, des pages hiérarchisées et un socle technique léger. Les contenus importants restent identifiables rapidement, sans surcharger l’expérience."
    features={[
      "Architecture de contenu organisée par besoins d’information",
      "Mise en page responsive pour mobile, tablette et ordinateur",
      "Composants éditoriaux cohérents et faciles à maintenir",
      "Métadonnées, sitemap et structure adaptés au référencement",
      "Optimisation des images, du chargement et du bundle frontend",
    ]}
    outcomes={[
      "Une information foncière présentée dans un cadre plus lisible",
      "Une expérience cohérente sur les principaux formats d’écran",
      "Des pages structurées pour la recherche et le partage",
      "Une base technique maintenable pour enrichir les contenus",
    ]}
    stack={["React", "Vite", "Responsive design", "SEO technique", "Vercel"]}
    externalUrl="https://miroirfoncier.com"
  />;
}
