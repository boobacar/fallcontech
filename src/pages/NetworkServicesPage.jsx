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
  Radar,
  DatabaseBackup,
  ClipboardCheck,
  Layers,
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

  "/services/supervision-infrastructure": {
    icon: Activity,
    family: "exploitation",
    eyebrow: "Supervision & infogérance",
    title: "Vous apprenez qu'un disque est mort avant que votre équipe ne s'en aperçoive.",
    lead: "Disques, alimentations, liens, sauvegardes, températures : surveillés en continu, avec une alerte qui vous parvient avant que l'activité ne s'arrête.",
    seoTitle: "Supervision d'infrastructure à Dakar | Fallcon Tech",
    seoDescription:
      "Supervision informatique à Dakar : disques, serveurs, liens et sauvegardes surveillés en continu, alertes WhatsApp, rapport mensuel de disponibilité et astreinte.",
    quickAnswer:
      "Superviser, c'est interroger vos équipements à intervalle régulier et comparer leurs réponses à des seuils. Un disque qui se dégrade, une alimentation en panne, un lien qui perd des paquets, une sauvegarde qui n'a pas tourné : l'alerte part vers nous, puis vers vous, avant la panne visible.",
    challenge:
      "Sans supervision, une panne n'existe qu'au moment où quelqu'un ne peut plus travailler. Le disque mourrait depuis trois semaines, la sauvegarde échouait depuis un mois, personne ne le savait.",
    outcomes: [
      "État des disques, des grappes RAID et de l'espace restant",
      "Alimentations, ventilateurs et températures de baie",
      "Disponibilité et qualité des liens internet, site par site",
      "Réussite ou échec des sauvegardes, chaque nuit",
      "Alerte envoyée à la personne qui peut agir, pas à une boîte mail",
      "Rapport mensuel : ce qui a été détecté, traité, et ce qui reste à corriger",
    ],
    modules: [
      "Sondes et agents",
      "Seuils et règles d'alerte",
      "Écran de supervision",
      "Astreinte et escalade",
      "Rapport de disponibilité",
      "Inventaire tenu à jour",
    ],
    audiences:
      "PME sans informaticien interne, cliniques, cabinets, écoles, microfinances et groupes multisites qui ne peuvent pas se permettre une panne silencieuse.",
    faq: [
      {
        q: "Que surveillez-vous exactement ?",
        a: "Les équipements et les services : serveurs, disques, alimentations, routeurs, switchs, liens internet, sauvegardes, certificats et sites web. Nous ne surveillons pas l'activité des personnes sur leur poste.",
      },
      {
        q: "Faut-il installer un logiciel sur chaque ordinateur ?",
        a: "Pas pour la supervision d'infrastructure. Les équipements sont interrogés à distance par des protocoles standards. Un agent n'est installé que si vous demandez le suivi des postes de travail.",
      },
      {
        q: "Que se passe-t-il la nuit ou le week-end ?",
        a: "L'alerte est traitée selon la plage d'astreinte prévue au contrat. En dehors de cette plage, elle est enregistrée et traitée à la reprise, sauf incident bloquant qui déclenche l'escalade.",
      },
      {
        q: "Et si c'est votre propre système qui tombe ?",
        a: "La supervision tourne hors de votre site, et une sonde locale continue de collecter et de journaliser si le lien est coupé. Elle transmet dès le retour du réseau : vous ne perdez pas l'historique de la panne.",
      },
      {
        q: "Est-ce que vous intervenez aussi pour réparer ?",
        a: "Oui, la supervision seule ne sert à rien. L'intervention à distance est incluse ; le déplacement sur site et le remplacement de matériel sont cadrés au contrat.",
      },
    ],
    related: ["/services/sauvegarde-managee", "/services/detection-anomalies-reseau", "/services/continuite-internet-multi-operateurs"],
  },

  "/services/detection-anomalies-reseau": {
    icon: Radar,
    family: "exploitation",
    eyebrow: "Détection d'anomalies",
    title: "Un poste qui parle à un inconnu toutes les cinq minutes, ça se voit.",
    lead: "Nous analysons en continu les connexions de votre réseau : comportements inhabituels, transferts massifs, machines qui scannent. Sans jamais lire vos contenus.",
    seoTitle: "Détection d'anomalies réseau à Dakar | Fallcon Tech",
    seoDescription:
      "Surveillance des comportements réseau à Dakar : détection de postes compromis, transferts massifs et scans internes, à partir des métadonnées de connexion, sans lire les contenus.",
    quickAnswer:
      "Un poste infecté se trahit rarement par sa lenteur : il se trahit par ses habitudes. Il appelle une adresse inconnue à intervalle régulier, envoie plus qu'il ne reçoit, ou scanne ses voisins. On compare le trafic réel à une base de référence pour repérer ces écarts.",
    challenge:
      "Une machine compromise peut envoyer des données pendant des semaines sans ralentir personne. Aucun utilisateur ne s'en plaindra, et sans mesure personne ne le verra.",
    outcomes: [
      "Postes qui communiquent avec des destinations inconnues",
      "Transferts inhabituels vers l'extérieur, en volume et en horaire",
      "Machines qui scannent le réseau interne",
      "Connexions vers des pays ou des hébergeurs sans rapport avec l'activité",
      "Services exposés sur internet sans nécessité",
      "Rapport mensuel : ce qui a été détecté, qualifié et clos",
    ],
    modules: [
      "Port miroir ou export de flux",
      "Collecte des métadonnées",
      "Base de référence",
      "Règles de détection",
      "Qualification des alertes",
      "Rapport et procédure d'incident",
    ],
    audiences:
      "Banques et microfinances, cliniques, études notariales, industries et écoles qui détiennent des données de clients, de patients ou d'élèves.",
    faq: [
      {
        q: "Est-ce que vous lisez les mails et les messages ?",
        a: "Non. Nous voyons qui parle à qui, quand, sur quel port et combien de données. Le contenu des échanges chiffrés reste illisible, et nous ne cherchons pas à le déchiffrer.",
      },
      {
        q: "Faut-il installer un boîtier supplémentaire ?",
        a: "Non. L'analyse se branche sur un port miroir de votre switch ou sur l'export de flux de votre routeur. Aucune coupure n'est nécessaire dans ce cas.",
      },
      {
        q: "Combien d'alertes inutiles faut-il supporter ?",
        a: "Les trois premières semaines servent à établir la référence et à régler les seuils. Ensuite, chaque alerte est qualifiée par une personne avant de vous être transmise : nous ne vous envoyons pas un écran de alertes brutes.",
      },
      {
        q: "Que se passe-t-il quand quelque chose est détecté ?",
        a: "Le poste est identifié, isolé si nécessaire, l'analyse est consignée et vous recevez une recommandation écrite. Nous ne touchons pas aux données personnelles hébergées sur le poste.",
      },
      {
        q: "Est-ce que ça remplace un antivirus ?",
        a: "Non, c'est complémentaire. L'antivirus voit ce qui se passe sur le poste ; nous voyons ce que le poste raconte au réseau. Les deux ensemble couvrent ce qu'aucun des deux ne voit seul.",
      },
    ],
    related: ["/services/pare-feu-manage", "/services/supervision-infrastructure", "/services/audit-reseau"],
  },

  "/services/sauvegarde-managee": {
    icon: DatabaseBackup,
    family: "exploitation",
    eyebrow: "Sauvegarde & restauration",
    title: "Une sauvegarde qui n'a jamais été restaurée n'est pas une sauvegarde.",
    lead: "Copie chiffrée de vos données hors de vos murs, et surtout : une restauration réellement testée chaque mois, avec le compte rendu.",
    seoTitle: "Sauvegarde managée et test de restauration à Dakar | Fallcon",
    seoDescription:
      "Sauvegarde externalisée à Dakar : copie chiffrée hors site, rétention, et test de restauration mensuel chronométré avec rapport. La preuve que vos données reviennent.",
    quickAnswer:
      "Sauvegarder, c'est copier. Protéger, c'est être capable de revenir en arrière. La différence se mesure le jour où l'on restaure : combien de temps, quels fichiers, dans quel état. C'est ce test que nous facturons et documentons chaque mois.",
    challenge:
      "Presque toutes les entreprises ont une sauvegarde. Très peu savent si elle se restaure, combien de temps cela prend, et quels fichiers manquent. Le jour du sinistre n'est pas le moment de le découvrir.",
    outcomes: [
      "Copie chiffrée conservée hors de vos locaux",
      "Fréquence et rétention définies selon vos obligations",
      "Restauration testée chaque mois, chronométrée",
      "Rapport mensuel : ce qui a été restauré, en combien de temps, ce qui a échoué",
      "Procédure de reprise écrite, utilisable par quelqu'un d'autre que nous",
      "Alertes si une sauvegarde n'a pas tourné",
    ],
    modules: [
      "Agent et planification",
      "Chiffrement des copies",
      "Copie hors site",
      "Test de restauration",
      "Rapport mensuel",
      "Procédure de reprise",
    ],
    audiences:
      "Cabinets comptables, cliniques, écoles, microfinances et PME dont les dossiers clients, la comptabilité ou les données patients ne peuvent pas être perdus.",
    faq: [
      {
        q: "Où sont stockées mes données ?",
        a: "Sur notre infrastructure, chiffrées. La clé de déchiffrement peut rester chez vous : dans ce cas, même nous ne pouvons pas lire vos fichiers, et la restauration se fait avec votre clé.",
      },
      {
        q: "Est-ce que le RAID ne suffit pas ?",
        a: "Non. Le RAID protège d'une panne de disque, pas d'une suppression, d'un chiffrement par rançongiciel ni d'un incendie. Il assure la disponibilité, pas la sauvegarde.",
      },
      {
        q: "Combien de temps pour tout restaurer ?",
        a: "Nous l'annonçons après le premier test, pas avant : c'est précisément ce que le test mesure. Le délai dépend du volume et du débit disponible sur site.",
      },
      {
        q: "Que se passe-t-il si nous arrêtons le contrat ?",
        a: "Vos copies vous sont remises dans un format documenté, avec la procédure pour les restaurer. Vous n'êtes pas captif de nos outils.",
      },
      {
        q: "Accédez-vous à mes fichiers ?",
        a: "Nous manipulons des copies chiffrées, pas vos documents. Une restauration se fait à votre demande, sur un dossier que vous désignez.",
      },
    ],
    related: ["/services/supervision-infrastructure", "/services/detection-anomalies-reseau", "/services/pare-feu-manage"],
  },

  "/services/audit-hygiene-numerique": {
    icon: ClipboardCheck,
    family: "exploitation",
    eyebrow: "Audit d'hygiène numérique",
    title: "Ce qui manque à votre dossier pour répondre à un appel d'offres.",
    lead: "Un état des lieux en une semaine : comptes, mots de passe, sauvegardes, mises à jour, procédures. Une note par domaine et un plan de correction chiffré.",
    seoTitle: "Audit d'hygiène numérique pour appels d'offres | Fallcon",
    seoDescription:
      "Audit informatique à Dakar pour appels d'offres et grands clients : comptes, sauvegardes, mises à jour, procédures, rapport noté par domaine et plan de correction chiffré.",
    quickAnswer:
      "Un audit d'hygiène numérique vérifie les fondamentaux : qui a accès à quoi, si les sauvegardes se restaurent, si les mises à jour sont faites, si les départs sont traités, si une procédure d'incident existe. Il produit un état des lieux daté et noté, pas un label.",
    challenge:
      "Les marchés publics et les grands donneurs d'ordre demandent des garanties que beaucoup de PME respectent déjà en pratique, mais ne savent pas documenter. Le dossier est écarté pour une case vide, pas pour une faiblesse réelle.",
    outcomes: [
      "Inventaire des comptes, des accès et des privilèges",
      "État réel des sauvegardes et des restaurations",
      "Suivi des mises à jour et des équipements en fin de vie",
      "Politique de mots de passe et d'accès distants",
      "Traitement des arrivées et des départs",
      "Procédure d'incident écrite, et plan d'action priorisé",
    ],
    modules: [
      "Grille de contrôle",
      "Entretiens avec les équipes",
      "Vérifications techniques",
      "Note par domaine",
      "Plan d'action chiffré",
      "Rapport daté et confidentiel",
    ],
    audiences:
      "PME qui répondent aux marchés publics, sous-traitants de grands groupes, écoles, ONG et organisations qui doivent prouver leur sérieux à un financeur.",
    faq: [
      {
        q: "Est-ce une certification ?",
        a: "Non, et nous ne le présenterons jamais comme telle. C'est un état des lieux daté, avec une note par domaine et des preuves. Il sert à répondre à un questionnaire client, pas à obtenir un label.",
      },
      {
        q: "Combien de temps faut-il prévoir ?",
        a: "Trois à cinq jours selon la taille, répartis sur une semaine. Le rapport est remis trois jours après la fin des vérifications.",
      },
      {
        q: "Faut-il interrompre l'activité ?",
        a: "Non. L'audit se fait sur documents, entretiens et vérifications à distance. Aucune coupure de service.",
      },
      {
        q: "Qui reçoit le rapport ?",
        a: "La direction uniquement. Il contient des informations sensibles sur vos faiblesses : il n'a pas vocation à circuler en interne.",
      },
      {
        q: "Et après l'audit ?",
        a: "Le plan d'action est exécutable par vous ou par nous, domaine par domaine. Nous pouvons repasser dans six mois pour mesurer ce qui a été corrigé.",
      },
    ],
    related: ["/services/supervision-infrastructure", "/services/sauvegarde-managee", "/services/pare-feu-manage"],
  },

  "/services/contrat-serenite": {
    icon: Layers,
    family: "pack",
    eyebrow: "Contrat Sérénité",
    title: "Un seul contrat : on surveille, on sauvegarde, on vous rend compte.",
    lead: "Supervision de votre infrastructure, sauvegarde testée chaque mois et rapport lisible par un dirigeant. Un interlocuteur, un prix mensuel, aucun matériel à acheter.",
    seoTitle: "Contrat Sérénité : supervision et sauvegarde au mois | Fallcon",
    seoDescription:
      "Contrat mensuel tout compris à Dakar : supervision de l'infrastructure, sauvegarde testée, rapport de direction et astreinte. Matériel inclus, sans investissement initial.",
    quickAnswer:
      "Le Contrat Sérénité réunit trois prestations qui n'ont de valeur qu'ensemble : la supervision qui détecte, la sauvegarde qui permet de revenir en arrière, et le rapport qui vous dit où vous en êtes. C'est un abonnement, pas un projet.",
    challenge:
      "Beaucoup d'entreprises achètent un serveur, une sauvegarde et un pare-feu, puis personne ne les regarde. Trois outils sans quelqu'un derrière, c'est trois abonnements qui rassurent sans protéger.",
    outcomes: [
      "Une alerte avant la panne, pas une explication après",
      "Une restauration prouvée chaque mois, avec sa durée réelle",
      "Un rapport de deux pages que le dirigeant lit vraiment",
      "Un seul numéro à appeler, quel que soit le problème",
      "Un délai d'intervention écrit, pas une promesse verbale",
      "Le matériel de sécurité inclus dans l'abonnement",
    ],
    modules: [
      "Supervision continue",
      "Sauvegarde et test mensuel",
      "Pare-feu et VPN inclus",
      "Astreinte et escalade",
      "Rapport mensuel de direction",
      "Revue trimestrielle sur site",
    ],
    audiences:
      "PME de 10 à 100 postes, cliniques, cabinets, écoles privées et groupes multisites qui veulent un responsable identifiable plutôt qu'une pile de prestataires.",
    faq: [
      {
        q: "Combien coûte le contrat ?",
        a: "Le tarif dépend du nombre de serveurs, de postes et de sites, et du niveau d'astreinte. Il est établi après un audit court, jamais au téléphone à l'aveugle.",
      },
      {
        q: "Quelle est la durée d'engagement ?",
        a: "Douze mois en général, avec la durée et le préavis fixés noir sur blanc au contrat. Pas de reconduction surprenante.",
      },
      {
        q: "J'ai déjà un informaticien, est-ce compatible ?",
        a: "Oui, et c'est souvent la meilleure configuration : il garde le métier et les projets, nous portons la surveillance, les sauvegardes et l'astreinte.",
      },
      {
        q: "Que se passe-t-il si vous êtes indisponible ?",
        a: "Le contrat prévoit un délai d'intervention et une procédure d'escalade vers une personne nommée. La documentation et les accès sont organisés pour qu'un tiers puisse reprendre.",
      },
      {
        q: "Peut-on arrêter ?",
        a: "Oui. À la fin du contrat, la configuration, les copies de sauvegarde et la documentation vous sont remises. Nous ne retenons pas vos accès en otage.",
      },
    ],
    related: ["/services/supervision-infrastructure", "/services/sauvegarde-managee", "/services/detection-anomalies-reseau"],
  },
};

const HUB = {
  seoTitle: "Services réseau, supervision et sauvegarde à Dakar | Fallcon",
  seoDescription:
    "Pare-feu, VPN, continuité, interconnexion, Wi-Fi, supervision d'infrastructure, détection d'anomalies et sauvegarde testée à Dakar. Services facturés au mois.",
};

const RELATED_LABEL = {
  "/services/pare-feu-manage": "Pare-feu managé",
  "/services/vpn-acces-distant": "VPN & accès distant",
  "/services/continuite-internet-multi-operateurs": "Continuité internet",
  "/services/interconnexion-sites": "Interconnexion de sites",
  "/services/wifi-hotel-portail-captif": "Wi-Fi & portail captif",
  "/services/internet-maitrise-ecoles": "Internet maîtrisé — écoles",
  "/services/audit-reseau": "Audit & banc de test",
  "/services/supervision-infrastructure": "Supervision & infogérance",
  "/services/detection-anomalies-reseau": "Détection d'anomalies",
  "/services/sauvegarde-managee": "Sauvegarde & restauration",
  "/services/audit-hygiene-numerique": "Audit d'hygiène numérique",
  "/services/contrat-serenite": "Contrat Sérénité",
};

export default function NetworkServicesPage() {
  const { pathname } = useLocation();
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://fallcontech.com";

  if (pathname === "/services/reseau-et-securite") {
    const all = Object.entries(SERVICES);
    const items = all.filter(([, s]) => !s.family || s.family === "reseau");
    const exploitation = all.filter(([, s]) => s.family === "exploitation");
    const pack = SERVICES["/services/contrat-serenite"];
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
              <p className="overline">Services managés</p>
              <h1>Votre infrastructure, exploitée comme un service.</h1>
            </div>
            <p>
              Réseau et sécurité d'un côté, surveillance et sauvegarde de l'autre : nous
              installons, configurons et supervisons l'infrastructure dont votre
              organisation a besoin, facturée au mois, matériel inclus. Un seul
              interlocuteur, un contrat lisible, des rapports qui se lisent.
            </p>
          </div>
        </section>

        <section className="section section-muted">
          <div className="site-shell">
            <div className="section-heading compact">
              <p className="overline">Réseau & sécurité</p>
              <h2>Ce qui relie, filtre et protège.</h2>
            </div>
            <div className="service-list">
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
          </div>
        </section>

        <section className="section">
          <div className="site-shell">
            <div className="section-heading compact">
              <p className="overline">Surveillance & exploitation</p>
              <h2>Ce qui détecte, sauvegarde et rend compte.</h2>
            </div>
            <div className="service-list">
              {exploitation.map(([slug, s], index) => {
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
          </div>
        </section>

        <section className="section section-muted">
          <div className="site-shell serenite-band">
            <div>
              <p className="overline">Offre groupée</p>
              <h2>{pack.title}</h2>
              <p className="intro-copy">{pack.lead}</p>
              <Link to="/services/contrat-serenite" className="button button-primary">
                Voir le Contrat Sérénité <ArrowRight size={16} />
              </Link>
            </div>
            <ul className="serenite-points">
              {pack.outcomes.slice(0, 4).map((item) => (
                <li key={item}><Check size={16} /><span>{item}</span></li>
              ))}
            </ul>
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
