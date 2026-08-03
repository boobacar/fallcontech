import CaseStudyLayout from "@/components/CaseStudyLayout";
import telimanImg from "@/assets/telimanshare.webp";

export default function CaseStudyTelimanShare() {
  return <CaseStudyLayout
    path="/case-study/telimanshare"
    seoTitle="TelimanShare — plateforme documentaire sécurisée | Fallcon Tech"
    seoDescription="Conception de TelimanShare, plateforme de partage documentaire avec droits d’accès, historique, recherche et restauration."
    eyebrow="Référence · Gestion documentaire"
    title="TelimanShare"
    subtitle="Un espace documentaire centralisé pour partager, retrouver et gouverner les fichiers d’une organisation."
    image={telimanImg}
    imageAlt="Interface de la plateforme documentaire TelimanShare"
    tags={["Partage documentaire", "Contrôle d’accès", "Journal d’activité"]}
    challenge="Les documents circulaient dans plusieurs canaux, sans vue unique sur les versions, les droits d’accès ni l’historique des actions. Le besoin portait sur un espace simple à utiliser, mais suffisamment structuré pour des documents professionnels."
    solution="TelimanShare réunit les fichiers, les espaces de travail, les permissions et la traçabilité dans une même interface. Chaque utilisateur accède uniquement aux contenus et actions correspondant à son rôle."
    features={[
      "Espaces documentaires organisés par activité ou équipe",
      "Droits de lecture, modification et administration par rôle",
      "Historique des actions et traçabilité des changements",
      "Gestion des versions, corbeille et restauration de fichiers",
      "Recherche et filtres pour retrouver rapidement un document",
      "Interface responsive adaptée aux équipes distribuées",
    ]}
    outcomes={[
      "Une source documentaire commune plutôt que des fichiers dispersés",
      "Des responsabilités et droits d’accès clairement définis",
      "Un historique exploitable pour comprendre chaque modification",
      "Une récupération plus simple des documents et versions utiles",
    ]}
    stack={["React", "Firebase", "Cloud Storage", "Authentification", "RBAC"]}
    externalUrl="https://www.telimanshare.com"
    faq={[
      {
        q: "Que peut-on faire avec TelimanShare ?",
        a: "Centraliser les fichiers d'une organisation dans des espaces de travail, contrôler qui peut lire ou modifier chaque document et retrouver toutes les versions avec leur historique.",
      },
      {
        q: "Qui peut voir les documents ?",
        a: "Les droits d'accès sont définis par rôle : lecture, modification ou administration. Chaque utilisateur ne voit que les contenus et actions correspondant à sa fonction.",
      },
      {
        q: "Peut-on retrouver une ancienne version d'un fichier ?",
        a: "Oui, la gestion des versions, la corbeille et la restauration permettent de récupérer un fichier ou une version antérieure après modification ou suppression.",
      },
      {
        q: "La plateforme fonctionne-t-elle sur mobile ?",
        a: "Oui, l'interface est responsive et adaptée aux équipes distribuées qui consultent les documents depuis différents appareils.",
      },
    ]}
  />;
}
