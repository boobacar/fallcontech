import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  LockKeyhole,
  Network,
  Wifi,
  GraduationCap,
  Activity,
  Router,
  Timer,
  Server,
  Cable,
} from "lucide-react";
import SEO from "@/components/SEO";

/**
 * Pages « Réseau & sécurité managés ».
 * Chaque page décrit un service réellement opérable avec le parc d'équipements
 * Fallcon Tech, sans promesse que le matériel ne peut pas tenir : le pare-feu
 * n'a pas de licence IPS/antivirus, on ne vend donc pas de protection UTM.
 */

const PROCESS = [
  ["01", "Audit du site", "Liens existants, équipements, câblage, adressage et points de panne."],
  ["02", "Conception", "Schéma réseau, politique de sécurité, plan d'adressage et de secours."],
  ["03", "Déploiement", "Installation, configuration, tests réels de bascule et de restauration."],
  ["04", "Exploitation", "Supervision, mises à jour, rapports mensuels et astreinte."],
];

const SERVICES = {
  "/services/pare-feu-manage": {
    icon: ShieldCheck,
    eyebrow: "Pare-feu managé",
    title: "Votre réseau filtré, supervisé et documenté — sans acheter le matériel.",
    lead: "Un pare-feu d'entreprise installé chez vous ou dans notre baie, configuré selon vos règles, supervisé en continu et facturé au mois.",
    seoTitle: "Pare-feu managé à Dakar : filtrage et supervision | Fallcon Tech",
    seoDescription:
      "Pare-feu d'entreprise en location à Dakar : filtrage par règles, NAT, VPN IPsec et SSL, supervision et rapports mensuels. Sans investissement matériel.",
    quickAnswer:
      "Un pare-feu managé est un équipement de sécurité installé et administré par un prestataire, facturé sous forme d'abonnement. Il contrôle ce qui entre et sort de votre réseau, chiffre les accès distants et journalise les connexions. Vous n'achetez ni le matériel ni la licence : vous achetez le service.",
    challenge:
      "La plupart des PME fonctionnent derrière la box de l'opérateur, sans règles, sans journal et sans séparation entre le réseau des postes, celui des caméras et celui des invités.",
    outcomes: [
      "Séparation des réseaux : postes, serveurs, caméras, invités",
      "Règles de filtrage écrites et datées, pas des réglages implicites",
      "VPN pour les accès distants, sans exposer les serveurs",
      "Journal des connexions et des changements de configuration",
      "Supervision avec alerte en cas de coupure ou de saturation",
      "Rapport mensuel lisible par un dirigeant, pas seulement par un technicien",
    ],
    modules: [
      "Audit et schéma réseau",
      "Politique de filtrage",
      "NAT et publication de services",
      "VPN IPsec et SSL",
      "Segmentation VLAN",
      "Supervision et rapports",
    ],
    audiences:
      "PME, cliniques, cabinets, écoles privées, hôtels, agences et sièges multisites qui manipulent des données clients.",
    faq: [
      {
        q: "Faut-il acheter le pare-feu ?",
        a: "Non. Le matériel reste notre propriété et fait partie de l'abonnement. Vous pouvez aussi choisir de l'acheter : le prix du matériel est alors distinct du service d'exploitation.",
      },
      {
        q: "Le pare-feu inclut-il un antivirus et un anti-intrusion ?",
        a: "Non, et nous préférons le dire clairement : l'équipement que nous déployons filtre par règles, chiffre les accès et journalise les flux. Les moteurs de réputation, d'antivirus réseau et d'anti-intrusion sont des abonnements constructeur distincts, que nous ne vendons pas. Nous ne facturons donc pas une protection UTM que la machine ne fournit pas.",
      },
      {
        q: "Que se passe-t-il si le pare-feu tombe ?",
        a: "Le service est conçu avec une unité de secours déjà configurée : le remplacement se fait par échange, avec la configuration à jour. Le délai d'intervention est précisé au contrat, il n'est pas laissé au hasard.",
      },
      {
        q: "Combien de temps pour la mise en service ?",
        a: "Deux à cinq jours ouvrés après l'audit, selon la taille du réseau et la disponibilité de vos informations d'adressage.",
      },
      {
        q: "Mes données passent-elles chez vous ?",
        a: "Non. Le trafic circule entre votre réseau et internet via l'équipement installé chez vous. Seuls les journaux techniques et les alertes remontent à la supervision.",
      },
    ],
    related: ["/services/vpn-acces-distant", "/services/continuite-internet-multi-operateurs", "/services/interconnexion-sites"],
  },

  "/services/vpn-acces-distant": {
    icon: LockKeyhole,
    eyebrow: "VPN & accès distant",
    title: "Vos équipes travaillent de partout. Vos serveurs restent fermés.",
    lead: "Un accès distant chiffré à votre système d'information, sans ouvrir un seul port sur internet et sans exposer vos fichiers.",
    seoTitle: "Accès distant VPN pour PME à Dakar | Fallcon Tech",
    seoDescription:
      "Accès distant sécurisé pour vos équipes à Dakar : VPN SSL et IPsec, authentification par utilisateur, journal des connexions et déconnexion automatique.",
    quickAnswer:
      "Un VPN crée un tunnel chiffré entre l'ordinateur d'un collaborateur et votre réseau. Le serveur n'est jamais visible depuis internet : seul le tunnel l'est, et il exige une authentification. C'est la différence entre « ouvrir un port » et « donner une clé ».",
    challenge:
      "Partager un dossier en le mettant sur un serveur exposé, ou laisser un accès bureau à distance ouvert sur la box, revient à publier vos fichiers avec une serrure dont tout le monde connaît le modèle.",
    outcomes: [
      "Accès aux fichiers et applications depuis le domicile ou un déplacement",
      "Un compte par utilisateur, révocable en une minute",
      "Journal des connexions : qui, quand, depuis quelle adresse",
      "Aucun port serveur exposé sur internet",
      "Accès limité aux ressources utiles, pas à tout le réseau",
      "Fonctionne sur ordinateur, et sur mobile pour les consultations",
    ],
    modules: [
      "Concentrateur VPN",
      "Comptes et profils d'accès",
      "Authentification à deux facteurs",
      "Accès aux applications métier",
      "Journalisation des sessions",
      "Procédure de révocation",
    ],
    audiences:
      "Cabinets, cliniques, cabinets comptables, ONG, sociétés de services et toute organisation dont une partie des équipes travaille hors des murs.",
    faq: [
      {
        q: "Combien d'utilisateurs peuvent se connecter en même temps ?",
        a: "L'équipement que nous déployons gère une centaine de sessions simultanées, très au-delà des besoins d'une PME. Le nombre de comptes créés n'est pas limité par le matériel.",
      },
      {
        q: "Est-ce que ça remplace un vrai travail à distance ?",
        a: "Pour l'accès aux fichiers, aux applications métier et à la messagerie interne, oui. Pour un poste de travail complet à distance, nous proposons une autre formule, sur serveur dédié.",
      },
      {
        q: "Que se passe-t-il quand un salarié quitte l'entreprise ?",
        a: "Le compte est désactivé le jour même : le tunnel ne s'ouvre plus, même si le mot de passe circule encore.",
      },
      {
        q: "Le VPN ralentit-il la connexion ?",
        a: "Le chiffrement coûte quelques pour cent de débit. La perception dépend surtout de la qualité du lien du collaborateur, pas du tunnel.",
      },
      {
        q: "Peut-on limiter l'accès à certaines heures ?",
        a: "Oui. Les plages horaires et les profils peuvent être restreints par utilisateur ou par groupe.",
      },
    ],
    related: ["/services/pare-feu-manage", "/services/interconnexion-sites", "/services/continuite-internet-multi-operateurs"],
  },

  "/services/continuite-internet-multi-operateurs": {
    icon: Timer,
    eyebrow: "Continuité internet",
    title: "Deux opérateurs, une seule connexion visible. La bascule se fait sans vous.",
    lead: "Quand un lien tombe, le second prend le relais en quelques secondes. Vos utilisateurs voient au pire une coupure de la durée d'un clignement d'œil.",
    seoTitle: "Continuité internet : double opérateur à Dakar | Fallcon Tech",
    seoDescription:
      "Routeur de continuité à Dakar : deux fournisseurs d'accès, bascule automatique, adresse fixe conservée et supervision. Pour banques, cliniques et agences.",
    quickAnswer:
      "Un routeur de continuité surveille deux connexions internet fournies par deux opérateurs différents. Il détecte la panne de l'une et bascule le trafic sur l'autre automatiquement, sans intervention humaine et sans changer les adresses internes de votre réseau.",
    challenge:
      "Une agence qui encaisse, une clinique qui consulte un dossier patient, un cabinet qui dépose une soumission : chaque heure sans internet a un coût qui dépasse largement l'abonnement du second lien.",
    outcomes: [
      "Bascule automatique vers le second opérateur",
      "Retour automatique au lien nominal quand il revient",
      "Adresse fixe et services publiés conservés pendant la bascule",
      "Journal des incidents avec durée réelle de chaque coupure",
      "Supervision des deux liens avec alerte avant la panne",
      "Un seul point de contact pour les deux fournisseurs",
    ],
    modules: [
      "Routeur de continuité",
      "Double rattachement opérateur",
      "Surveillance de lien et bascule",
      "Publication de services",
      "Journal des incidents",
      "Rapport de disponibilité",
    ],
    audiences:
      "Banques et microfinances, cliniques, pharmacies, études notariales, assurances, agences commerciales et toute activité dont l'arrêt de la connexion interrompt le chiffre d'affaires.",
    faq: [
      {
        q: "Faut-il deux abonnements internet ?",
        a: "Oui, chez deux fournisseurs différents. C'est la condition du service : deux liens du même opérateur tombent souvent ensemble quand l'infrastructure locale est en cause.",
      },
      {
        q: "Combien de temps prend la bascule ?",
        a: "Quelques secondes pour les flux en cours, avec reprise automatique des sessions applicatives. Les transferts de fichiers en cours sont interrompus et doivent être relancés.",
      },
      {
        q: "Est-ce que mon adresse IP change ?",
        a: "Les adresses internes ne changent pas. Pour les services publiés vers l'extérieur, la configuration est prévue pour que la bascule soit transparente, sous réserve que l'opérateur de secours fournisse une adresse publique.",
      },
      {
        q: "Que se passe-t-il si les deux liens tombent ?",
        a: "Le routeur ne peut pas créer de connectivité. Il alerte, journalise l'incident et rétablit le service dès le retour du premier lien.",
      },
      {
        q: "Le service inclut-il les abonnements opérateur ?",
        a: "Non. Nous installons, configurons et supervisons le dispositif ; les abonnements restent souscrits par vous, à votre nom, pour que vous gardiez la maîtrise des contrats.",
      },
    ],
    related: ["/services/pare-feu-manage", "/services/interconnexion-sites", "/services/audit-reseau"],
  },

  "/services/interconnexion-sites": {
    icon: Network,
    eyebrow: "Interconnexion de sites",
    title: "Vos agences travaillent comme si elles étaient dans le même bâtiment.",
    lead: "Un réseau privé entre votre siège et vos sites : mêmes applications, mêmes fichiers, mêmes règles, sans passer par internet.",
    seoTitle: "Interconnexion d'agences : VPN multi-sites Sénégal | Fallcon",
    seoDescription:
      "Reliez siège et agences en réseau privé au Sénégal : VPN IPsec site à site, adressage unifié, qualité de service et supervision centralisée.",
    quickAnswer:
      "L'interconnexion de sites relie plusieurs lieux en un seul réseau logique. Chaque site garde sa connexion internet locale, mais les flux entre sites passent par un tunnel chiffré : le logiciel de gestion du siège voit les agences comme s'il était sur place.",
    challenge:
      "Quand chaque agence tient sa propre comptabilité sur un poste local, la consolidation se fait par WhatsApp et par clé USB, et personne ne sait quelle version est la bonne.",
    outcomes: [
      "Un seul système de gestion accessible depuis tous les sites",
      "Tunnel chiffré entre les sites, indépendant d'internet",
      "Adressage unifié et règles de sécurité communes",
      "Priorité donnée aux applications métier sur le reste du trafic",
      "Supervision centralisée de tous les liens",
      "Ajout d'un nouveau site en quelques jours, sans refonte",
    ],
    modules: [
      "Routeurs de site",
      "Tunnels IPsec site à site",
      "Plan d'adressage",
      "Qualité de service par application",
      "Supervision des liens",
      "Documentation du réseau",
    ],
    audiences:
      "Groupes scolaires, chaînes de pharmacies, réseaux de cliniques, banques et microfinances, distributeurs, ONG avec bureaux régionaux.",
    faq: [
      {
        q: "Faut-il un routeur dans chaque site ?",
        a: "Oui. Chaque site reçoit un équipement qui établit le tunnel et applique les règles communes. C'est ce qui garantit que le réseau reste privé de bout en bout.",
      },
      {
        q: "Combien de sites peut-on relier ?",
        a: "Le matériel que nous déployons gère plusieurs dizaines de tunnels simultanés. Au-delà de quinze à vingt sites, l'architecture est revue pour éviter que le siège devienne un point de panne unique.",
      },
      {
        q: "Est-ce que ça fonctionne si un site n'a qu'une connexion mobile ?",
        a: "Oui, avec une qualité de service adaptée. Le tunnel s'établit dès que la connexion est disponible ; les applications métier restent utilisables, les transferts lourds passent en second.",
      },
      {
        q: "Qui administre le réseau ?",
        a: "Nous, dans le cadre de l'abonnement. Vous gardez la main sur les accès et les règles métier, nous portons la technique et la supervision.",
      },
      {
        q: "Peut-on commencer par deux sites ?",
        a: "Oui, et c'est même recommandé : un siège et un site pilote, puis extension progressive. Le matériel est déjà dimensionné pour la suite.",
      },
    ],
    related: ["/services/vpn-acces-distant", "/services/continuite-internet-multi-operateurs", "/services/pare-feu-manage"],
  },

  "/services/wifi-hotel-portail-captif": {
    icon: Wifi,
    eyebrow: "Wi-Fi & portail captif",
    title: "Un Wi-Fi d'hôtel qui ne se plaint pas, et qui se facture proprement.",
    lead: "Couverture, authentification, débit par utilisateur et codes d'accès imprimés à la réception : le Wi-Fi devient un service, pas une source de réclamations.",
    seoTitle: "Wi-Fi hôtel et portail captif à Dakar | Fallcon Tech",
    seoDescription:
      "Wi-Fi pour hôtels, résidences et espaces de coworking à Dakar : couverture, portail captif, codes d'accès, débit par utilisateur et supervision.",
    quickAnswer:
      "Un portail captif est la page qui s'affiche avant l'accès internet : elle demande un code, un numéro de chambre ou une acceptation des conditions. Derrière, le réseau attribue à chaque utilisateur un débit et une durée, et la réception peut imprimer des tickets.",
    challenge:
      "Un Wi-Fi ouvert à tous, sans mot de passe ni limite, finit saturé par quelques utilisateurs et devient le premier motif de mauvaise note d'un établissement.",
    outcomes: [
      "Couverture mesurée pièce par pièce, pas devinée",
      "Un code d'accès par chambre ou par séjour",
      "Débit garanti par utilisateur, invités séparés du réseau interne",
      "Page d'accueil aux couleurs de l'établissement",
      "Journal des connexions et des incidents",
      "Supervision à distance, sans intervention sur place",
    ],
    modules: [
      "Étude de couverture",
      "Bornes et alimentation",
      "Portail captif",
      "Codes et tickets",
      "Limitation de débit",
      "Supervision",
    ],
    audiences:
      "Hôtels, résidences meublées, maisons d'hôtes, espaces de coworking, restaurants et salles de réunion.",
    faq: [
      {
        q: "Faut-il changer toute l'installation existante ?",
        a: "Pas nécessairement. Nous mesurons d'abord la couverture et la qualité du réseau actuel ; une partie des équipements peut être conservée si elle tient la charge.",
      },
      {
        q: "Les invités peuvent-ils accéder au réseau de la réception ?",
        a: "Non. Le réseau invité est séparé du réseau de gestion : la caisse et les dossiers ne sont pas joignables depuis le Wi-Fi client.",
      },
      {
        q: "Peut-on facturer le Wi-Fi ?",
        a: "Oui, par code vendu à la réception ou inclus dans le séjour. La vente d'accès est intégrée à la prestation de l'établissement.",
      },
      {
        q: "Qui est responsable du contenu consulté ?",
        a: "L'établissement, en tant qu'exploitant du réseau. La journalisation des connexions est prévue pour permettre l'identification en cas de besoin.",
      },
      {
        q: "Combien de temps pour équiper trente chambres ?",
        a: "Une à deux semaines après l'étude de couverture, selon la structure du bâtiment et la disponibilité du câblage.",
      },
    ],
    related: ["/services/pare-feu-manage", "/services/internet-maitrise-ecoles", "/services/vpn-acces-distant"],
  },

  "/services/internet-maitrise-ecoles": {
    icon: GraduationCap,
    eyebrow: "Internet maîtrisé — écoles",
    title: "Un internet pédagogique, filtré par classe et par horaire.",
    lead: "Les élèves préparent le bac sur YouTube et TikTok. Le filtrage ne se fait pas contre eux, il se fait avec des règles claires et vérifiables.",
    seoTitle: "Internet maîtrisé pour écoles à Dakar | Fallcon Tech",
    seoDescription:
      "Filtrage internet pour écoles à Dakar : catégories bloquées, plages horaires par classe, quotas et rapports pour la direction. Réseau séparé administration et élèves.",
    quickAnswer:
      "Un filtrage d'établissement scolaire applique des règles différentes selon le profil et l'heure : blocage des catégories sans usage pédagogique, ouverture de certaines plages pour les cours, quota de données par salle et rapport mensuel à la direction.",
    challenge:
      "Sans règle, la bande passante achetée pour les cours sert aux vidéos des élèves, et l'établissement ne peut répondre ni aux parents ni à son propre budget.",
    outcomes: [
      "Catégories bloquées : jeux, streaming, sites adultes",
      "Plages horaires différentes selon les classes",
      "Réseau des élèves séparé de celui de l'administration",
      "Quota par salle ou par niveau",
      "Rapport mensuel des usages et des blocages",
      "Pas de contournement par les postes ou les téléphones",
    ],
    modules: [
      "Filtrage par catégories",
      "Règles horaires",
      "Séparation des réseaux",
      "Quotas de débit",
      "Journal des usages",
      "Rapport direction",
    ],
    audiences:
      "Écoles privées, lycées, collèges, centres de formation, internats et campus avec plusieurs salles informatiques.",
    faq: [
      {
        q: "Le filtrage bloque-t-il aussi les professeurs ?",
        a: "Non. Les règles sont appliquées par profil : le personnel dispose de ses propres droits, les élèves d'un accès limité.",
      },
      {
        q: "Peut-on ouvrir YouTube pour un cours précis ?",
        a: "Oui, par plage horaire et par salle. L'ouverture est journalisée, ce qui permet de la justifier devant un parent.",
      },
      {
        q: "Les téléphones des élèves passent-ils par le filtrage ?",
        a: "S'ils sont connectés au Wi-Fi de l'établissement, oui. Sur leurs données mobiles, non : aucun opérateur ne peut être filtré par l'école.",
      },
      {
        q: "Faut-il changer le réseau existant ?",
        a: "Le plus souvent, l'équipement de filtrage s'insère dans l'installation existante. L'audit détermine si le pare-feu et les commutateurs en place suffisent.",
      },
      {
        q: "Que reçoit la direction ?",
        a: "Un rapport mensuel : volume par salle, catégories les plus bloquées, tentatives de contournement et incidents techniques.",
      },
    ],
    related: ["/services/wifi-hotel-portail-captif", "/services/pare-feu-manage", "/services/audit-reseau"],
  },

  "/services/audit-reseau": {
    icon: Activity,
    eyebrow: "Audit & banc de test",
    title: "Mesurer avant de dépenser. Tester avant de promettre.",
    lead: "Un audit de votre réseau, de vos liens et de vos équipements — avec des mesures, pas des impressions. Et un banc de test réel pour valider une architecture.",
    seoTitle: "Audit réseau et banc de test à Dakar | Fallcon Tech",
    seoDescription:
      "Audit réseau à Dakar : mesure des liens, analyse du trafic, cartographie des équipements et rapport de priorités. Banc de test réel pour valider une architecture.",
    quickAnswer:
      "Un audit réseau mesure ce qui se passe réellement : débits réels et non théoriques, saturation aux heures de pointe, erreurs, équipements en fin de vie, sécurité des accès. Il produit un rapport de priorités chiffrées, pas une liste de reproches.",
    challenge:
      "On achète souvent une bande passante supplémentaire alors que le problème est un câble, un switch saturé ou un accès non maîtrisé. Payer plus ne corrige pas une architecture.",
    outcomes: [
      "Débits montants et descendants mesurés aux heures de pointe",
      "Cartographie des équipements et des points de panne uniques",
      "Identification des usages qui saturent la connexion",
      "État du parc : matériel en fin de vie, firmwares, sauvegardes",
      "Priorités classées par coût et par impact",
      "Banc de test pour valider une architecture avant déploiement",
    ],
    modules: [
      "Mesure des liens",
      "Analyse du trafic",
      "Cartographie réseau",
      "Revue de sécurité",
      "Rapport de priorités",
      "Banc de test protocolaire",
    ],
    audiences:
      "Directions des systèmes d'information, groupes multisites, intégrateurs qui préparent un appel d'offres, écoles et administrations avant un investissement.",
    faq: [
      {
        q: "Combien de temps dure un audit ?",
        a: "Deux à cinq jours de mesures et d'analyse pour un site, selon la taille du réseau. Le rapport est remis une semaine après.",
      },
      {
        q: "Faut-il interrompre l'activité ?",
        a: "Non. Les mesures se font en production, sans coupure. Seuls les tests de bascule ou de charge, s'ils sont demandés, se planifient hors horaires.",
      },
      {
        q: "Qu'est-ce qu'un banc de test ?",
        a: "Un environnement avec de vrais routeurs et commutateurs opérateur, pour valider une architecture — MPLS, EVPN, redondance, qualité de service — avant de l'installer chez un client.",
      },
      {
        q: "Le rapport est-il utilisable par un non-technicien ?",
        a: "Oui. Il commence par une synthèse en une page : ce qui doit être corrigé, dans quel ordre, et ce que ça coûte.",
      },
      {
        q: "Travaillez-vous pour des intégrateurs ?",
        a: "Oui. Le banc de test est aussi loué à des intégrateurs et à des centres de formation qui préparent des certifications ou répondent à un appel d'offres.",
      },
    ],
    related: ["/services/continuite-internet-multi-operateurs", "/services/interconnexion-sites", "/services/pare-feu-manage"],
  },
};

const HUB = {
  seoTitle: "Services réseau et sécurité managés à Dakar | Fallcon Tech",
  seoDescription:
    "Pare-feu managé, VPN, continuité multi-opérateurs, interconnexion de sites, Wi-Fi hôtel et audit réseau à Dakar. Services facturés au mois, matériel inclus.",
};

const RELATED_LABEL = {
  "/services/pare-feu-manage": "Pare-feu managé",
  "/services/vpn-acces-distant": "VPN & accès distant",
  "/services/continuite-internet-multi-operateurs": "Continuité internet",
  "/services/interconnexion-sites": "Interconnexion de sites",
  "/services/wifi-hotel-portail-captif": "Wi-Fi & portail captif",
  "/services/internet-maitrise-ecoles": "Internet maîtrisé — écoles",
  "/services/audit-reseau": "Audit & banc de test",
};

export default function NetworkServicesPage() {
  const { pathname } = useLocation();
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://fallcontech.com";

  if (pathname === "/services/reseau-et-securite") {
    const items = Object.entries(SERVICES);
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: items.map(([slug, s], i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${siteUrl}${slug}`,
        item: { "@type": "Service", name: s.eyebrow, description: s.lead },
      })),
    };
    return (
      <>
        <SEO path="/services/reseau-et-securite" title={HUB.seoTitle} description={HUB.seoDescription} jsonLd={jsonLd} />
        <section className="page-hero">
          <div className="site-shell page-hero-grid">
            <div>
              <p className="overline">Réseau & sécurité managés</p>
              <h1>Votre réseau, exploité comme un service.</h1>
            </div>
            <p>
              Pare-feu, VPN, continuité internet, interconnexion de sites, Wi-Fi et
              filtrage : nous installons, configurons et supervisons l'infrastructure
              réseau dont votre organisation a besoin, facturée au mois, matériel inclus.
              Un seul interlocuteur, un contrat lisible, des rapports qui se lisent.
            </p>
          </div>
        </section>

        <section className="section section-muted">
          <div className="site-shell service-list">
            {items.map(([slug, s], index) => {
              const Icon = s.icon;
              return (
                <article className="service-list-row" key={slug}>
                  <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                  <div className="service-icon"><Icon size={24} /></div>
                  <div className="service-main">
                    <p className="card-eyebrow">{s.audiences.split(",")[0]}</p>
                    <h2>{s.eyebrow}</h2>
                    <p>{s.lead}</p>
                  </div>
                  <Link to={slug} className="button button-secondary">
                    Voir le service <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section">
          <div className="site-shell buying-grid">
            <div>
              <p className="overline">Comment ça marche</p>
              <h2>Un abonnement, trois engagements.</h2>
            </div>
            <div className="buying-options">
              <div><span>01</span><h3>Matériel inclus</h3><p>Les équipements restent notre propriété. Vous ne financez pas un achat que vous ne savez pas dimensionner.</p></div>
              <div><span>02</span><h3>Supervision continue</h3><p>Alertes, mises à jour et rapports mensuels. Le réseau est surveillé, pas seulement installé.</p></div>
              <div><span>03</span><h3>Réversibilité</h3><p>Vous pouvez acheter le matériel et reprendre l'exploitation : la configuration vous appartient et vous est remise.</p></div>
            </div>
          </div>
        </section>

        <section className="contact-banner">
          <div className="site-shell contact-banner-inner">
            <div>
              <p className="overline overline-light">Premier échange</p>
              <h2>Décrivez votre réseau actuel, nous dirons ce qui doit changer — et ce qui peut attendre.</h2>
            </div>
            <Link to="/contact" className="button button-light">Demander un audit <ArrowRight size={17} /></Link>
          </div>
        </section>
      </>
    );
  }

  const service = SERVICES[pathname] || SERVICES["/services/pare-feu-manage"];
  const Icon = service.icon;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.eyebrow,
      description: service.lead,
      areaServed: [{ "@type": "Country", name: "Sénégal" }, { "@type": "Place", name: "Dakar" }],
      provider: { "@type": "Organization", name: "Fallcon Tech", url: siteUrl },
      url: `${siteUrl}${pathname}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map((item) => ({
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
        { "@type": "ListItem", position: 2, name: "Réseau & sécurité", item: `${siteUrl}/services/reseau-et-securite` },
        { "@type": "ListItem", position: 3, name: service.eyebrow, item: `${siteUrl}${pathname}` },
      ],
    },
  ];

  return (
    <>
      <SEO path={pathname} title={service.seoTitle} description={service.seoDescription} jsonLd={jsonLd} />
      <section className="offer-hero">
        <div className="site-shell offer-hero-grid">
          <div>
            <Link to="/services/reseau-et-securite" className="breadcrumb-link">Réseau & sécurité <span>/</span> {service.eyebrow}</Link>
            <div className="offer-icon"><Icon size={24} /></div>
            <h1>{service.title}</h1>
            <p>{service.lead}</p>
            <div className="hero-actions">
              <Link to="/contact" className="button button-primary">Demander une étude <ArrowRight size={17} /></Link>
              <Link to="/services/reseau-et-securite" className="button button-secondary">Voir les autres services</Link>
            </div>
          </div>
          <aside className="offer-summary">
            <p className="overline">Pour qui ?</p>
            <p>{service.audiences}</p>
            <div className="summary-rule" />
            <p className="overline">Notre principe</p>
            <strong>Le service avant le matériel : vous payez un résultat, pas une référence.</strong>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="site-shell quick-answer-block">
          <p className="overline">En bref</p>
          <p className="quick-answer-text">{service.quickAnswer}</p>
        </div>
      </section>

      <section className="section">
        <div className="site-shell offer-problem-grid">
          <div>
            <p className="overline">Le problème à résoudre</p>
            <h2>{service.challenge}</h2>
          </div>
          <div className="offer-outcomes">
            {service.outcomes.map((item) => (
              <div key={item}><Check size={17} /><span>{item}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="site-shell">
          <div className="section-heading compact">
            <p className="overline">Périmètre du service</p>
            <h2>Ce qui est installé, configuré et suivi.</h2>
          </div>
          <div className="module-grid">
            {service.modules.map((module, index) => (
              <div className="module-card" key={module}>
                <span>0{index + 1}</span>
                {index % 3 === 0 ? <Cable size={20} /> : index % 3 === 1 ? <Router size={20} /> : <Server size={20} />}
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
            <h2>Quatre étapes, des tests réels à chaque fois.</h2>
            <p>Une bascule de lien ou une restauration ne se déclare pas : elle se démontre. Chaque étape se termine par un test documenté, fait en votre présence ou filmé.</p>
            <div className="security-note">
              <ShieldCheck size={19} />
              <span>Aucun service n'est facturé comme « haute disponibilité » sans deux liens, deux alimentations ou une unité de secours réellement en place.</span>
            </div>
          </div>
          <ol className="delivery-steps">
            {PROCESS.map(([number, title, text]) => (
              <li key={number}><span>{number}</span><div><strong>{title}</strong><p>{text}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-muted">
        <div className="site-shell">
          <div className="section-heading compact">
            <p className="overline">Questions fréquentes</p>
            <h2>Les questions que l'on nous pose avant de signer.</h2>
          </div>
          <div className="faq-list">
            {service.faq.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <div className="section-heading compact">
            <p className="overline">Services liés</p>
            <h2>À combiner avec.</h2>
          </div>
          <div className="sector-grid sector-grid-services">
            {service.related.map((slug) => (
              <Link className="sector-card" to={slug} key={slug}>
                <Network size={23} />
                <div><h3>{RELATED_LABEL[slug] || "Service réseau"}</h3><p>Voir le détail du service</p></div>
                <ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-banner">
        <div className="site-shell contact-banner-inner">
          <div>
            <p className="overline overline-light">Étude de faisabilité</p>
            <h2>Parlons de votre réseau, de vos sites et de vos contraintes.</h2>
          </div>
          <Link to="/contact" className="button button-light">Présenter votre besoin <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
