import CaseStudyLayout from "@/components/CaseStudyLayout";
import clinicImg from "@/assets/clinic-dabia.webp";
import clinicHomeHeroImg from "@/assets/dabia-home-hero.webp";
import clinicHomeWhyChooseImg from "@/assets/dabia-home-why-choose.webp";

export default function CaseStudyClinic() {
  return <CaseStudyLayout
    path="/case-study/clinic"
    seoTitle="Site Web de la Clinique Dentaire DABIA | Fallcon Tech"
    seoDescription="Conception du site institutionnel de la Clinique Dentaire DABIA : parcours patient, informations de soins, contact, rendez-vous et SEO local."
    eyebrow="Référence · Santé numérique"
    title="Site Web de la Clinique Dentaire DABIA"
    subtitle="Une présence institutionnelle claire pour présenter les soins, rassurer les patients et faciliter la prise de contact."
    image={clinicImg}
    imageAlt="Page d’accueil du site de la Clinique Dentaire DABIA"
    tags={["Site institutionnel", "Parcours patient", "SEO local"]}
    challenge="La clinique devait réunir dans une interface cohérente ses informations pratiques, ses spécialités, ses contenus de prévention et ses différents moyens de prise de rendez-vous, avec une expérience fiable sur mobile."
    solution="Fallcon Tech a structuré un site orienté patient : navigation par besoin, présentation lisible de l’établissement, accès rapide aux informations utiles et points de contact visibles sans détour."
    features={[
      "Expérience responsive pensée en priorité pour les usages mobiles",
      "Présentation structurée des soins, compétences et informations pratiques",
      "Parcours de contact et de prise de rendez-vous clairement identifié",
      "Intégration de WhatsApp et des coordonnées de la clinique",
      "Architecture SEO locale pour les recherches dentaires à Dakar",
      "Contenus éditoriaux et pages d’information accessibles",
    ]}
    gallery={[
      { src: clinicHomeHeroImg, alt: "Accueil de la Clinique Dentaire DABIA avec prise de rendez-vous" },
      { src: clinicHomeWhyChooseImg, alt: "Arguments et équipements de la Clinique Dentaire DABIA" },
    ]}
    outcomes={[
      "Une information patient centralisée et accessible sur tous les écrans",
      "Un accès direct aux rendez-vous, urgences et moyens de contact",
      "Une vitrine cohérente avec l’identité et les équipements de la clinique",
      "Un socle éditorial exploitable pour le référencement local",
    ]}
    stack={["React", "Vite", "SEO technique", "Responsive design", "Analytics"]}
    externalUrl="https://www.cliniquedentairedabia.com"
    faq={[
      {
        q: "Quel était le besoin de la Clinique Dentaire DABIA ?",
        a: "Réunir dans une interface cohérente ses informations pratiques, ses spécialités, ses contenus de prévention et ses moyens de prise de rendez-vous, avec une expérience fiable sur mobile.",
      },
      {
        q: "Le site fonctionne-t-il bien sur mobile ?",
        a: "Oui, l'expérience est pensée en priorité pour les usages mobiles : navigation par besoin, accès rapide aux informations utiles et points de contact visibles sans détour.",
      },
      {
        q: "Comment un patient peut-il prendre rendez-vous ?",
        a: "Le parcours de rendez-vous est clairement identifié, avec intégration de WhatsApp et des coordonnées de la clinique accessibles depuis chaque page utile.",
      },
      {
        q: "Le site aide-t-il la clinique à apparaître dans les recherches locales ?",
        a: "Oui, l'architecture des contenus est pensée pour les recherches dentaires à Dakar : pages structurées, informations locales et socle éditorial exploitable.",
      },
    ]}
  />;
}
