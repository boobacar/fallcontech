// ============================================================================
// Fallcon Tech — Pages géo-compétences (programmatic SEO)
// 16 pays d'Afrique de l'Ouest et centrale francophone × 20 compétences
// ============================================================================

export const GEO_SITE_URL = "https://fallcontech.com";

// ---------------------------------------------------------------------------
// Pays
// ---------------------------------------------------------------------------
export const GEO_COUNTRIES = [
  {
    slug: "senegal",
    name: "Sénégal",
    prep: "au",
    gen: "du",
    capital: "Dakar",
    cities: "Dakar, Thiès, Saint-Louis, Touba, Kaolack",
    currency: "Franc CFA (UEMOA)",
    zone: "UEMOA · CEDEAO",
    mobileMoney: "Orange Money, Wave, Free Money",
    flag: "🇸🇳",
    phone: "+221",
    note:
      "Le Sénégal est l'un des marchés numériques les plus dynamiques d'Afrique de l'Ouest, avec des administrations et des entreprises de plus en plus engagées dans la digitalisation de leurs procédures.",
  },
  {
    slug: "cote-divoire",
    name: "Côte d'Ivoire",
    prep: "en",
    gen: "de",
    capital: "Abidjan",
    cities: "Abidjan, Bouaké, Yamoussoukro, San-Pédro",
    currency: "Franc CFA (UEMOA)",
    zone: "UEMOA · CEDEAO",
    mobileMoney: "Orange Money, Wave, MTN MoMo, Moov Money",
    flag: "🇨🇮",
    phone: "+225",
    note:
      "La Côte d'Ivoire est un pôle économique majeur de la sous-région : ses entreprises, institutions et collectivités investissent massivement dans les outils numériques de gestion.",
  },
  {
    slug: "mali",
    name: "Mali",
    prep: "au",
    gen: "du",
    capital: "Bamako",
    cities: "Bamako, Sikasso, Ségou, Mopti",
    currency: "Franc CFA (UEMOA)",
    zone: "UEMOA · CEDEAO",
    mobileMoney: "Orange Money, Wave, Moov Money",
    flag: "🇲🇱",
    phone: "+223",
    note:
      "Au Mali, les administrations centrales, les collectivités et les ONG cherchent des outils simples et robustes pour fiabiliser le courrier, les dossiers et le suivi des projets.",
  },
  {
    slug: "burkina-faso",
    name: "Burkina Faso",
    prep: "au",
    gen: "du",
    capital: "Ouagadougou",
    cities: "Ouagadougou, Bobo-Dioulasso, Koudougou",
    currency: "Franc CFA (UEMOA)",
    zone: "UEMOA · CEDEAO",
    mobileMoney: "Orange Money, Wave, Moov Money",
    flag: "🇧🇫",
    phone: "+226",
    note:
      "Au Burkina Faso, la dématérialisation administrative et le suivi des programmes (ONG, santé, éducation) créent une forte demande de solutions logicielles locales.",
  },
  {
    slug: "guinee",
    name: "Guinée",
    prep: "en",
    gen: "de",
    capital: "Conakry",
    cities: "Conakry, Kankan, Kindia, Labé",
    currency: "Franc guinéen (GNF)",
    zone: "CEDEAO",
    mobileMoney: "Orange Money, MTN MoMo, Moov Money",
    flag: "🇬🇳",
    phone: "+224",
    note:
      "En Guinée, le paiement mobile et les besoins de digitalisation des services (banques, commerces, administrations) progressent rapidement autour de Conakry et des grandes villes.",
  },
  {
    slug: "benin",
    name: "Bénin",
    prep: "au",
    gen: "du",
    capital: "Cotonou",
    cities: "Cotonou, Porto-Novo, Parakou",
    currency: "Franc CFA (UEMOA)",
    zone: "UEMOA · CEDEAO",
    mobileMoney: "MTN MoMo, Moov Money, Wave",
    flag: "🇧🇯",
    phone: "+229",
    note:
      "Le Bénin s'est engagé dans une transformation numérique volontariste (services publics en ligne, e-gouvernement) : les administrations et les PME de Cotonou et Parakou modernisent leurs outils de gestion.",
  },
  {
    slug: "togo",
    name: "Togo",
    prep: "au",
    gen: "du",
    capital: "Lomé",
    cities: "Lomé, Sokodé, Kara",
    currency: "Franc CFA (UEMOA)",
    zone: "UEMOA · CEDEAO",
    mobileMoney: "Togocel Flash, Moov Money, Wave",
    flag: "🇹🇬",
    phone: "+228",
    note:
      "Au Togo, la digitalisation des services administratifs et du commerce (Lomé, Kara, Sokodé) s'accélère, portée par un écosystème de paiement mobile très actif.",
  },
  {
    slug: "niger",
    name: "Niger",
    prep: "au",
    gen: "du",
    capital: "Niamey",
    cities: "Niamey, Zinder, Maradi",
    currency: "Franc CFA (UEMOA)",
    zone: "UEMOA · CEDEAO",
    mobileMoney: "Orange Money, Moov Money, Mobicash",
    flag: "🇳🇪",
    phone: "+227",
    note:
      "Au Niger, les organisations (administrations, ONG, coopératives) ont besoin de solutions légères et fiables pour gérer courrier, stocks, projets et paiements malgré des contraintes de connectivité.",
  },
  {
    slug: "mauritanie",
    name: "Mauritanie",
    prep: "en",
    gen: "de",
    capital: "Nouakchott",
    cities: "Nouakchott, Nouadhibou, Kaédi",
    currency: "Ouguiya (MRU)",
    zone: "Maghreb · Afrique de l'Ouest",
    mobileMoney: "Orange Money, Mastercard Mobile",
    flag: "🇲🇷",
    phone: "+222",
    note:
      "En Mauritanie, les entreprises et administrations de Nouakchott et Nouadhibou modernisent leur gestion (courrier, stocks, facturation) avec des outils adaptés au contexte local.",
  },
  {
    slug: "gambie",
    name: "Gambie",
    prep: "en",
    gen: "de",
    capital: "Banjul",
    cities: "Banjul, Serrekunda, Brikama",
    currency: "Dalasi (GMD)",
    zone: "CEDEAO",
    mobileMoney: "QMoney, Afrimoney",
    flag: "🇬🇲",
    phone: "+220",
    note:
      "En Gambie, le secteur du tourisme et les PME de la région de Banjul et Serrekunda renforcent leur présence numérique et leurs outils de gestion.",
  },
  {
    slug: "guinee-bissau",
    name: "Guinée-Bissau",
    prep: "en",
    gen: "de",
    capital: "Bissau",
    cities: "Bissau, Bafatá, Gabú",
    currency: "Franc CFA (UEMOA)",
    zone: "UEMOA · CEDEAO",
    mobileMoney: "Orange Money, MTN MoMo",
    flag: "🇬🇼",
    phone: "+245",
    note:
      "En Guinée-Bissau, les administrations et les ONG présentes sur le territoire cherchent des solutions simples pour digitaliser le courrier, les paiements et le suivi des projets.",
  },
  {
    slug: "cap-vert",
    name: "Cap-Vert",
    prep: "au",
    gen: "du",
    capital: "Praia",
    cities: "Praia, Mindelo, Assomada",
    currency: "Escudo cap-verdien (CVE)",
    zone: "CEDEAO",
    mobileMoney: "CVMóvel, T+ Móvel",
    flag: "🇨🇻",
    phone: "+238",
    note:
      "Au Cap-Vert, l'économie numérique (tourisme, services, administrations) se développe à Praia et Mindelo avec un fort taux d'équipement mobile.",
  },
  {
    slug: "cameroun",
    name: "Cameroun",
    prep: "au",
    gen: "du",
    capital: "Yaoundé",
    cities: "Douala, Yaoundé, Garoua, Bamenda",
    currency: "Franc CFA (CEMAC)",
    zone: "CEMAC · CEDEAO",
    mobileMoney: "MTN MoMo, Orange Money",
    flag: "🇨🇲",
    phone: "+237",
    note:
      "Le Cameroun est un marché régional clé : les entreprises de Douala et Yaoundé, les cliniques et les ONG digitalisent massivement leur gestion et leurs paiements.",
  },
  {
    slug: "gabon",
    name: "Gabon",
    prep: "au",
    gen: "du",
    capital: "Libreville",
    cities: "Libreville, Port-Gentil, Franceville",
    currency: "Franc CFA (CEMAC)",
    zone: "CEMAC",
    mobileMoney: "Airtel Money, Moov Money",
    flag: "🇬🇦",
    phone: "+241",
    note:
      "Au Gabon, les administrations et les entreprises de Libreville et Port-Gentil modernisent leurs outils de gestion et de dématérialisation des procédures.",
  },
  {
    slug: "tchad",
    name: "Tchad",
    prep: "au",
    gen: "du",
    capital: "N'Djaména",
    cities: "N'Djaména, Moundou, Sarh",
    currency: "Franc CFA (CEMAC)",
    zone: "CEMAC",
    mobileMoney: "Airtel Money, Tigo Money",
    flag: "🇹🇩",
    phone: "+235",
    note:
      "Au Tchad, les ONG, les administrations et les entreprises de N'Djaména ont besoin de solutions robustes pour le suivi des projets, le courrier et la gestion financière.",
  },
  {
    slug: "rdc",
    name: "République démocratique du Congo",
    nameShort: "RDC",
    prep: "en",
    gen: "de la",
    capital: "Kinshasa",
    cities: "Kinshasa, Lubumbashi, Goma, Bukavu",
    currency: "Franc congolais (CDF)",
    zone: "SADC · Afrique centrale",
    mobileMoney: "M-Pesa, Orange Money, Airtel Money",
    flag: "🇨🇩",
    phone: "+243",
    note:
      "En RDC, le paiement mobile est omniprésent et les organisations de Kinshasa, Lubumbashi et Goma digitalisent leurs processus de gestion à grande vitesse.",
  },
];

// ---------------------------------------------------------------------------
// Compétences
// ---------------------------------------------------------------------------
export const GEO_COMPETENCES = [
  {
    slug: "creation-site-web",
    name: "Création de site web professionnel",
    type: "Création de site web",
    desc: "site web professionnel : site vitrine, catalogue ou plateforme, design mobile, base SEO et boutons WhatsApp",
    lead:
      "Nous créons des sites web professionnels, rapides et adaptés aux connexions locales, pour les entreprises et organisations de {capital} et des principales villes du {country}.",
    quickAnswer:
      "Fallcon Tech crée des sites web professionnels en {country} : site vitrine, catalogue ou plateforme, livré avec design mobile, base SEO, formulaire de contact et boutons WhatsApp. Intervention à distance et sur site depuis {capital}.",
    features: [
      "Site vitrine, site business, catalogue ou plateforme",
      "Design responsive adapté aux smartphones et connexions locales",
      "Base SEO : balises, sitemap, vitesse et indexation Google",
      "Formulaire de contact, WhatsApp et suivi des demandes",
      "Formation courte pour modifier vos contenus essentiels",
    ],
    faq: [
      {
        q: "Quel est le prix d'un site web en {country} ?",
        a: "Le budget dépend du nombre de pages, du design, du contenu et des fonctionnalités. Nous établissons un devis clair et détaillé après un premier échange sur vos objectifs.",
      },
      {
        q: "Combien de temps prend la création d'un site web ?",
        a: "Un site vitrine peut être livré en 1 à 3 semaines si les textes, images et validations sont disponibles rapidement.",
      },
      {
        q: "Pouvez-vous intervenir à distance depuis {capital} ?",
        a: "Oui. Nous travaillons à distance et pouvons organiser des sessions sur site si nécessaire. Les échanges se font par visioconférence, email et WhatsApp.",
      },
    ],
    relatedArticle: { to: "/article/creer-site-web-professionnel-dakar", label: "Guide : créer un site web professionnel" },
    relatedServices: [
      { to: "/services/creation-site-web-dakar", label: "Création de site web à Dakar" },
      { to: "/services/tarif-site-vitrine-senegal", label: "Tarif site vitrine" },
    ],
  },
  {
    slug: "developpement-web",
    name: "Développement web sur mesure",
    type: "Développement web",
    desc: "développement web sur mesure : applications web, portails, tableaux de bord et intégrations pour votre organisation",
    lead:
      "Nous développons des applications web sur mesure pour les organisations de {capital} et dans tout le pays : portails, tableaux de bord, outils métier et intégrations.",
    quickAnswer:
      "Fallcon Tech développe des applications web sur mesure en {country} : portails, tableaux de bord, workflows métier et intégrations (paiement mobile, API). Stack moderne React et Node.js, livraison testée et documentée.",
    features: [
      "Applications web métier : portails, dashboards, workflows",
      "Stack moderne React, Node.js, Firebase et bases de données",
      "Intégrations API, paiement mobile et messagerie",
      "SEO technique, performance et sécurité dès la conception",
      "Maintenance et évolutions après le lancement",
    ],
    faq: [
      {
        q: "Quel type d'application web développez-vous ?",
        a: "Des portails internes, des tableaux de bord de pilotage, des outils de gestion (courrier, projets, stocks), des plateformes publiques et des intégrations métier.",
      },
      {
        q: "Pouvez-vous intégrer le paiement mobile ?",
        a: "Oui, nous intégrons les opérateurs de paiement mobile présents en {country} ({mobileMoney}) avec des confirmations côté serveur et un rapprochement fiable.",
      },
      {
        q: "Comment se passe un projet à distance ?",
        a: "Cadrage par visioconférence, démonstrations régulières, livraison sur un environnement de test puis mise en production accompagnée et formation de vos équipes.",
      },
    ],
    relatedArticle: { to: "/article/developpement-web-professionnel-senegal", label: "Guide : développement web professionnel" },
    relatedServices: [
      { to: "/services/developpeur-web-senegal", label: "Développeur web" },
      { to: "/solutions/applications-metier", label: "Applications métier" },
    ],
  },
  {
    slug: "application-mobile",
    name: "Développement d'application mobile",
    type: "Application mobile",
    desc: "application mobile Android et iOS : MVP rapide, paiement mobile intégré et suivi de performance",
    lead:
      "Nous concevons des applications mobiles Android et iOS pour les entreprises et startups de {capital} et du {country}, de l'idée au lancement.",
    quickAnswer:
      "Fallcon Tech développe des applications mobiles en {country} : MVP en quelques semaines, applications Android et iOS, intégration du paiement mobile ({mobileMoney}) et tableaux de bord de suivi.",
    features: [
      "Applications Android et iOS (React Native)",
      "Passage rapide de l'idée au MVP testé",
      "Intégration du paiement mobile local",
      "Notifications, messagerie et synchronisation",
      "Suivi d'utilisation et mises à jour régulières",
    ],
    faq: [
      {
        q: "Combien coûte une application mobile ?",
        a: "Le coût dépend du périmètre et des fonctionnalités. Un MVP ciblé peut être livré rapidement ; nous chiffrons précisément après le cadrage des priorités.",
      },
      {
        q: "Pouvez-vous intégrer le paiement mobile ?",
        a: "Oui, nous intégrons les solutions de paiement mobile disponibles en {country} ({mobileMoney}) avec un parcours d'achat simple et sécurisé.",
      },
      {
        q: "L'application fonctionnera-t-elle avec une connexion lente ?",
        a: "Oui, nous concevons des applications légères, avec mise en cache hors-ligne, adaptées aux connexions mobiles de la région.",
      },
    ],
    relatedArticle: { to: "/article/developpement-application-mobile-dakar", label: "Guide : développer une application mobile" },
    relatedServices: [
      { to: "/services/mobile-app-development-senegal", label: "Mobile app development" },
      { to: "/solutions/applications-metier", label: "Applications métier" },
    ],
  },
  {
    slug: "logiciel-sur-mesure",
    name: "Logiciel métier sur mesure",
    type: "Logiciel sur mesure",
    desc: "logiciel métier sur mesure : CRM, stock, facturation, RH et workflows adaptés à vos processus",
    lead:
      "Nous développons des logiciels métier sur mesure pour les organisations de {capital} et du {country} : outils adaptés à vos processus, pas l'inverse.",
    quickAnswer:
      "Fallcon Tech développe des logiciels métier sur mesure en {country} : CRM, gestion de stock, facturation, suivi de projets ou outils métier spécifiques, avec rôles, tableaux de bord et formation de vos équipes.",
    features: [
      "CRM, stock, facturation, RH ou outil métier spécifique",
      "Rôles et permissions adaptés à votre organisation",
      "Tableaux de bord et indicateurs de pilotage",
      "Formation et documentation de vos équipes",
      "Hébergement, sauvegarde et maintenance",
    ],
    faq: [
      {
        q: "Pourquoi un logiciel sur mesure plutôt qu'un outil du marché ?",
        a: "Un logiciel sur mesure épouse vos processus réels : pas de compromis sur les règles métier, les rôles ou les rapports. C'est pertinent dès que l'outil générique vous force à travailler à sa manière.",
      },
      {
        q: "Quel budget pour un logiciel métier ?",
        a: "Le budget dépend du périmètre et de la complexité. Nous proposons un découpage en étapes pour lancer une première version utile rapidement, puis enrichir.",
      },
      {
        q: "Nos données sont-elles sécurisées ?",
        a: "Oui : sauvegardes régulières vérifiées, accès par rôles, chiffrement et hébergement adapté à vos contraintes de souveraineté.",
      },
    ],
    relatedArticle: { to: "/article/application-gestion-sur-mesure-senegal", label: "Guide : application de gestion sur mesure" },
    relatedServices: [
      { to: "/solutions/applications-metier", label: "Applications métier" },
      { to: "/services/software-development-senegal", label: "Software development" },
    ],
  },
  {
    slug: "gec-courrier",
    name: "Gestion électronique du courrier (GEC)",
    type: "GEC · Courrier",
    desc: "gestion électronique du courrier : registre numérique, circuit de validation, alertes de délais et archivage",
    lead:
      "Nous installons des solutions de gestion électronique du courrier (GEC) pour les administrations et entreprises de {capital} et du {country}.",
    quickAnswer:
      "Fallcon Tech met en place la gestion électronique du courrier (GEC) en {country} : registre numérique des entrées et sorties, circuit de validation, alertes de délais, recherche et archivage avec traçabilité complète.",
    features: [
      "Registre numérique des courriers entrants et sortants",
      "Circuit de validation et parapheur électronique",
      "Alertes de délais et relances automatiques",
      "Recherche rapide et archivage sécurisé",
      "Statistiques de traitement par service",
    ],
    faq: [
      {
        q: "Qu'est-ce qu'une solution GEC ?",
        a: "C'est un logiciel qui remplace le registre papier : chaque courrier est enregistré, orienté vers les bons services, validé électroniquement et archivé avec une traçabilité complète.",
      },
      {
        q: "Convient-elle à une administration ou une PME ?",
        a: "Oui. La solution s'adapte à la taille de l'organisation : un service, une mairie, une direction ou une entreprise avec plusieurs services.",
      },
      {
        q: "Peut-on reprendre les archives papier existantes ?",
        a: "Oui, nous accompagnons la numérisation et le classement des documents existants selon un plan de classement défini avec vous.",
      },
    ],
    relatedArticle: { to: "/article/gestion-electronique-courrier-gec-senegal", label: "Guide : GEC complète" },
    relatedServices: [
      { to: "/solutions/gestion-courrier-ged", label: "Gestion du courrier & GED" },
      { to: "/solutions/digitalisation-administrations", label: "Digitalisation des administrations" },
    ],
  },
  {
    slug: "ged-archivage",
    name: "GED et archivage électronique",
    type: "GED · Archivage",
    desc: "GED et archivage électronique : classement, recherche, droits d'accès et conservation à valeur probante",
    lead:
      "Nous déployons des plateformes de gestion électronique des documents (GED) pour les organisations de {capital} et du {country} : classement, recherche et archivage.",
    quickAnswer:
      "Fallcon Tech déploie des solutions de GED et d'archivage électronique en {country} : centralisation des documents, classement, recherche, droits d'accès, traçabilité et conservation à long terme.",
    features: [
      "Centralisation de tous vos documents dans une plateforme",
      "Classement et métadonnées adaptés à votre activité",
      "Droits d'accès par service et par profil",
      "Recherche rapide et versions des documents",
      "Horodatage et traçabilité des accès",
    ],
    faq: [
      {
        q: "La GED remplace-t-elle le partage de fichiers classique ?",
        a: "Oui, elle le structure : un référentiel unique, des droits précis, un historique des versions et des accès tracés, au lieu de dossiers partagés sans contrôle.",
      },
      {
        q: "Quelle différence avec un simple disque réseau ?",
        a: "La GED ajoute le classement intelligent, la recherche, les workflows de validation et la traçabilité, essentiels pour les documents sensibles ou réglementés.",
      },
      {
        q: "Les documents ont-ils une valeur légale ?",
        a: "Avec l'horodatage, la traçabilité et une conservation maîtrisée, les documents numériques peuvent avoir une valeur probante selon le cadre réglementaire du {country}.",
      },
    ],
    relatedArticle: { to: "/article/archivage-electronique-valeur-probante-senegal", label: "Guide : archivage électronique" },
    relatedServices: [
      { to: "/solutions/gestion-courrier-ged", label: "Gestion du courrier & GED" },
      { to: "/solutions/infrastructure-cybersecurite", label: "Infrastructure & cybersécurité" },
    ],
  },
  {
    slug: "digitalisation-administrations",
    name: "Digitalisation des administrations",
    type: "Digitalisation administrative",
    desc: "digitalisation des administrations : registres numériques, workflows, formulaires et conduite du changement",
    lead:
      "Nous accompagnons les administrations, mairies et collectivités de {capital} et du {country} dans la digitalisation de leurs procédures.",
    quickAnswer:
      "Fallcon Tech digitalise les procédures administratives en {country} : registres numériques, courrier, parapheur, formulaires et circuits de validation, avec formation et conduite du changement.",
    features: [
      "Registres numériques (courrier, délibérations, actes)",
      "Workflows de validation et parapheur électronique",
      "Formulaires et portails usagers",
      "Indicateurs de délais et de traitement",
      "Formation des agents et conduite du changement",
    ],
    faq: [
      {
        q: "Par où commencer la digitalisation d'une administration ?",
        a: "Par un diagnostic : identifier les procédures les plus lourdes (courrier, dossiers, délibérations) et les digitaliser une par une, avec un périmètre maîtrisé.",
      },
      {
        q: "Vos solutions s'intègrent-elles aux outils existants ?",
        a: "Oui, nous concevons des solutions compatibles avec votre organisation actuelle : import des données existantes, formats standards et interopérabilité.",
      },
      {
        q: "Comment gérez-vous la résistance au changement ?",
        a: "Formation, accompagnement sur le terrain et écrans simples : la solution doit être plus rapide à utiliser que le papier, sinon elle ne sera pas adoptée.",
      },
    ],
    relatedArticle: { to: "/article/digitalisation-services-publics-senegal", label: "Guide : digitalisation des services publics" },
    relatedServices: [
      { to: "/solutions/digitalisation-administrations", label: "Digitalisation des administrations" },
      { to: "/solutions/gestion-courrier-ged", label: "Gestion du courrier & GED" },
    ],
  },
  {
    slug: "dematerialisation-marches-publics",
    name: "Dématérialisation des marchés publics",
    type: "Marchés publics",
    desc: "dématérialisation des marchés publics : publication des avis, soumission électronique et traçabilité complète",
    lead:
      "Nous dématérialisons les processus de marchés publics pour les acheteurs et soumissionnaires de {capital} et du {country}.",
    quickAnswer:
      "Fallcon Tech dématérialise les marchés publics en {country} : publication des avis, dossiers en ligne, soumission électronique, évaluation tracée et archivage des procédures.",
    features: [
      "Publication et suivi des avis de marché",
      "Dépôt des dossiers par voie électronique",
      "Évaluation et procès-verbaux tracés",
      "Traçabilité complète des procédures",
      "Formation des équipes achat et des soumissionnaires",
    ],
    faq: [
      {
        q: "La soumission électronique est-elle acceptée dans le cadre réglementaire ?",
        a: "La dématérialisation se déploie progressivement selon les pays. Nous concevons les outils en cohérence avec la réglementation locale des marchés publics.",
      },
      {
        q: "Quels gains pour un acheteur public ?",
        a: "Moins de dossiers papier, des délais maîtrisés, une traçabilité complète et des évaluations plus transparentes.",
      },
      {
        q: "Pouvez-vous former nos fournisseurs ?",
        a: "Oui, nous formons les équipes internes et accompagnons les soumissionnaires pour déposer leurs dossiers en ligne sans difficulté.",
      },
    ],
    relatedArticle: { to: "/article/dematerialisation-marches-publics-senegal", label: "Guide : marchés publics dématérialisés" },
    relatedServices: [
      { to: "/solutions/digitalisation-administrations", label: "Digitalisation des administrations" },
      { to: "/solutions/gestion-courrier-ged", label: "Gestion du courrier & GED" },
    ],
  },
  {
    slug: "infrastructure-cybersecurite",
    name: "Infrastructure informatique et cybersécurité",
    type: "Infrastructure · Sécurité",
    desc: "infrastructure informatique et cybersécurité : audit, sauvegardes, supervision et continuité d'activité",
    lead:
      "Nous sécurisons l'infrastructure informatique des organisations de {capital} et du {country} : sauvegardes, supervision et continuité.",
    quickAnswer:
      "Fallcon Tech sécurise l'infrastructure informatique en {country} : audit, sauvegardes vérifiées, supervision, contrôle d'accès et continuité d'activité pour vos systèmes critiques.",
    features: [
      "Audit et diagnostic de votre infrastructure",
      "Sauvegardes automatiques et tests de restauration",
      "Supervision et alertes en temps réel",
      "Contrôle des accès et protection des comptes",
      "Plan de continuité et reprise d'activité",
    ],
    faq: [
      {
        q: "Quels sont les risques les plus fréquents ?",
        a: "Pertes de données sans sauvegarde, comptes compromis, logiciels non maintenus et coupures : nous traitons ces quatre risques en priorité.",
      },
      {
        q: "Faut-il un plan de cybersécurité complet ?",
        a: "Commencez par l'essentiel : sauvegardes vérifiées, mots de passe robustes, double authentification et mises à jour. Nous construisons ensuite le plan selon vos besoins.",
      },
      {
        q: "Intervenez-vous à distance ?",
        a: "Oui, la supervision et la maintenance se font à distance, avec des interventions sur site à {capital} si nécessaire.",
      },
    ],
    relatedArticle: { to: "/article/cybersecurite-pme-senegal", label: "Guide : cybersécurité PME" },
    relatedServices: [
      { to: "/solutions/infrastructure-cybersecurite", label: "Infrastructure & cybersécurité" },
      { to: "/article/sauvegarde-donnees-entreprises", label: "Guide : sauvegarde des données" },
    ],
  },
  {
    slug: "automatisation-whatsapp-business",
    name: "Automatisation WhatsApp Business",
    type: "Automatisation WhatsApp",
    desc: "automatisation WhatsApp Business : relances prospects, rappels de rendez-vous et workflows CRM",
    lead:
      "Nous automatisons WhatsApp Business pour les entreprises de {capital} et du {country} : relances, rappels et suivi client sans spam.",
    quickAnswer:
      "Fallcon Tech automatise WhatsApp Business en {country} : relances automatiques des prospects, rappels de rendez-vous, notifications de commandes et workflows CRM, conformes aux règles de messagerie.",
    features: [
      "Relances automatiques des prospects et clients",
      "Rappels de rendez-vous et de paiements",
      "Workflows CRM : qualification, devis, suivi",
      "Envois maîtrisés, sans spam ni blocage",
      "Tableau de bord des conversations et résultats",
    ],
    faq: [
      {
        q: "WhatsApp Business suffit-il pour automatiser ?",
        a: "Pour des volumes simples, oui. Dès que vous gérez plusieurs équipes ou des scénarios multiples, une solution dédiée avec API est plus fiable.",
      },
      {
        q: "Comment éviter d'être perçu comme du spam ?",
        a: "En segmentant, en espaçant les envois et en obtenant le consentement : nous configurons des scénarios utiles pour le client, pas des campagnes agressives.",
      },
      {
        q: "Pouvez-vous connecter WhatsApp à notre CRM ?",
        a: "Oui, nous connectons WhatsApp à vos outils existants pour centraliser prospects, relances et historiques dans un seul tableau de bord.",
      },
    ],
    relatedArticle: { to: "/article/automatisation-whatsapp-business-senegal", label: "Guide : automatisation WhatsApp" },
    relatedServices: [
      { to: "/services/automatisation-whatsapp-senegal", label: "Automatisation WhatsApp Sénégal" },
      { to: "/case-study/whatsapp", label: "Étude de cas WhatsApp" },
    ],
  },
  {
    slug: "paiement-mobile-money",
    name: "Intégration paiement mobile money",
    type: "Paiement mobile",
    desc: "intégration paiement mobile money : encaissements Wave, Orange Money, MTN MoMo et autres sur sites, apps et machines",
    lead:
      "Nous intégrons le paiement mobile money pour les entreprises de {capital} et du {country} : sites, applications et machines automatiques.",
    quickAnswer:
      "Fallcon Tech intègre le paiement mobile money en {country} ({mobileMoney}) : encaissements sur site web, application ou machine automatique, avec confirmations côté serveur et rapprochement des transactions.",
    features: [
      "Encaissements sur site web, app et borne",
      "Intégration des opérateurs locaux ({mobileMoney})",
      "Confirmations côté serveur, sans perte de transaction",
      "Rapprochement et exports comptables",
      "Supervision des transactions et alertes",
    ],
    faq: [
      {
        q: "Quels opérateurs de paiement mobile intégrez-vous ?",
        a: "Nous intégrons les opérateurs disponibles en {country} : {mobileMoney}, selon votre zone et vos besoins métier.",
      },
      {
        q: "Peut-on encaisser sur une machine automatique ?",
        a: "Oui, nous intégrons le paiement mobile sur distributeurs, bornes et machines à monnayeur avec des confirmations fiables avant délivrance.",
      },
      {
        q: "Comment éviter les transactions perdues ?",
        a: "Chaque paiement est confirmé côté serveur avant de valider la commande, avec un mécanisme de vérification en cas de coupure réseau.",
      },
    ],
    relatedArticle: { to: "/article/integrer-paiement-machine-eau-esp32-senegal", label: "Guide : paiement sur machine" },
    relatedServices: [
      { to: "/services/integration-paiement-mobile-money-machines", label: "Intégration mobile money machines" },
      { to: "/solutions/applications-metier", label: "Applications métier" },
    ],
  },
  {
    slug: "logiciel-clinique",
    name: "Logiciel de gestion de clinique",
    type: "Logiciel santé",
    desc: "logiciel de gestion de clinique : dossier patient, rendez-vous, caisse, prescriptions et stocks",
    lead:
      "Nous développons des logiciels de gestion pour les cliniques, cabinets et structures de santé de {capital} et du {country}.",
    quickAnswer:
      "Fallcon Tech développe des logiciels de gestion de clinique en {country} : dossier patient, prise de rendez-vous, caisse et facturation, prescriptions, stocks et reporting pour piloter votre structure.",
    features: [
      "Dossier patient et historique des soins",
      "Prise de rendez-vous en ligne et rappels",
      "Caisse, facturation et règlements mobiles",
      "Prescriptions et gestion des stocks",
      "Reporting d'activité et de recettes",
    ],
    faq: [
      {
        q: "Le logiciel est-il adapté aux petites cliniques ?",
        a: "Oui, il se déploie par modules : dossier patient et rendez-vous d'abord, puis caisse, stocks et reporting selon la taille de la structure.",
      },
      {
        q: "Les données patients sont-elles protégées ?",
        a: "Oui : accès par rôles, sauvegardes chiffrées et journal d'audit. Nous respectons les règles de confidentialité applicables {prep} {country}.",
      },
      {
        q: "Peut-on prendre les règlements en mobile money ?",
        a: "Oui, la caisse accepte les règlements en espèce et en mobile money ({mobileMoney}) avec un rapprochement automatique.",
      },
    ],
    relatedArticle: { to: "/article/logiciel-clinique-dentaire-senegal", label: "Guide : logiciel clinique" },
    relatedServices: [
      { to: "/secteurs/sante", label: "Secteur santé" },
      { to: "/case-study/clinic", label: "Étude de cas clinique" },
    ],
  },
  {
    slug: "gestion-flotte",
    name: "Logiciel de gestion de flotte",
    type: "Gestion flotte",
    desc: "logiciel de gestion de flotte : véhicules, conducteurs, missions, carburant, maintenance et GPS",
    lead:
      "Nous développons des logiciels de gestion de flotte pour les transporteurs et entreprises de {capital} et du {country}.",
    quickAnswer:
      "Fallcon Tech développe des logiciels de gestion de flotte en {country} : véhicules, conducteurs, missions, carburant, maintenance et suivi GPS, avec tableaux de bord et alertes.",
    features: [
      "Registre des véhicules et des conducteurs",
      "Gestion des missions et des affectations",
      "Suivi du carburant et de la maintenance",
      "Intégration GPS et alertes en temps réel",
      "Tableaux de bord de coûts et d'utilisation",
    ],
    faq: [
      {
        q: "Quels sont les gains d'un logiciel de flotte ?",
        a: "Moins de consommation inexpliquée, une maintenance planifiée, des missions tracées et une vision claire des coûts par véhicule.",
      },
      {
        q: "Peut-on suivre les véhicules en temps réel ?",
        a: "Oui, nous intégrons des solutions GPS légères avec alertes et historique des trajets, adaptées aux réseaux locaux.",
      },
      {
        q: "Convient-il aux petites flottes ?",
        a: "Oui, le logiciel s'adapte : utile dès quelques véhicules pour suivre carburant, maintenance et missions.",
      },
    ],
    relatedArticle: { to: "/article/logiciel-gestion-flotte-senegal", label: "Guide : gestion de flotte" },
    relatedServices: [
      { to: "/secteurs/transport-logistique", label: "Secteur transport & logistique" },
      { to: "/case-study/teliman-tracking-fleeti", label: "Étude de cas Teliman Fleet" },
    ],
  },
  {
    slug: "gestion-stock-caisse",
    name: "Logiciel de gestion de stock et caisse",
    type: "Stock · Caisse",
    desc: "logiciel de gestion de stock et caisse : inventaire, ventes, fournisseurs et alertes de rupture",
    lead:
      "Nous équipons les commerces, grossistes et PME de {capital} et du {country} avec des logiciels de stock et de caisse fiables.",
    quickAnswer:
      "Fallcon Tech développe des logiciels de gestion de stock et de caisse en {country} : inventaire, ventes, fournisseurs, alertes de rupture et rapports quotidiens, avec encaissements mobile money.",
    features: [
      "Inventaire et suivi des produits par dépôt",
      "Caisse avec encaissements mobile money",
      "Gestion des fournisseurs et réapprovisionnement",
      "Alertes de rupture et de péremption",
      "Rapports de ventes et de marges",
    ],
    faq: [
      {
        q: "Faut-il un logiciel de caisse dans un petit commerce ?",
        a: "Dès que vous suivez plusieurs produits et encaissements, un logiciel évite les pertes, les erreurs et donne une vision claire des ventes.",
      },
      {
        q: "Peut-on encaisser en mobile money ?",
        a: "Oui, la caisse accepte les règlements mobile money ({mobileMoney}) avec rapprochement automatique des transactions.",
      },
      {
        q: "Le logiciel fonctionne-t-il sans connexion ?",
        a: "Oui, la caisse reste opérationnelle hors-ligne et synchronise les ventes dès que la connexion revient.",
      },
    ],
    relatedArticle: { to: "/article/logiciel-gestion-stock-caisse-senegal", label: "Guide : gestion stock & caisse" },
    relatedServices: [
      { to: "/solutions/applications-metier", label: "Applications métier" },
      { to: "/services/software-development-senegal", label: "Software development" },
    ],
  },
  {
    slug: "suivi-projets-ong",
    name: "Logiciel de suivi de projets ONG",
    type: "Suivi de projets",
    desc: "logiciel de suivi de projets ONG : activités, bénéficiaires, justificatifs et reporting bailleurs",
    lead:
      "Nous développons des outils de suivi de projets pour les ONG et programmes intervenant à {capital} et dans tout le pays.",
    quickAnswer:
      "Fallcon Tech développe des logiciels de suivi de projets pour les ONG en {country} : activités, bénéficiaires, justificatifs, indicateurs et reporting pour les bailleurs, utilisables même hors-ligne.",
    features: [
      "Planification des activités et des jalons",
      "Suivi des bénéficiaires et des zones d'intervention",
      "Collecte des justificatifs et des pièces",
      "Indicateurs et rapports pour les bailleurs",
      "Mode hors-ligne adapté au terrain",
    ],
    faq: [
      {
        q: "Le logiciel est-il utilisable sur le terrain sans connexion ?",
        a: "Oui, l'application mobile et la version terrain fonctionnent hors-ligne et synchronisent les données dès le retour du réseau.",
      },
      {
        q: "Peut-on produire les rapports demandés par les bailleurs ?",
        a: "Oui, les indicateurs sont configurés avec vous et les rapports s'exportent au format demandé par vos bailleurs.",
      },
      {
        q: "Comment sécuriser les données sensibles des bénéficiaires ?",
        a: "Accès par rôles, chiffrement et sauvegardes régulières : nous appliquons les bonnes pratiques de protection des données personnelles.",
      },
    ],
    relatedArticle: { to: "/article/digitalisation-entreprise-pme-senegal", label: "Guide : digitalisation d'entreprise" },
    relatedServices: [
      { to: "/secteurs/ong-projets", label: "Secteur ONG & projets" },
      { to: "/solutions/applications-metier", label: "Applications métier" },
    ],
  },
  {
    slug: "gestion-ecole-formation",
    name: "Logiciel de gestion d'école et de formation",
    type: "Éducation · Formation",
    desc: "logiciel de gestion d'école et de formation : inscriptions, paiements, présences et dossiers",
    lead:
      "Nous développons des logiciels de gestion pour les écoles, centres de formation et instituts de {capital} et du {country}.",
    quickAnswer:
      "Fallcon Tech développe des logiciels de gestion d'école et de formation en {country} : inscriptions, paiements, présences, dossiers des apprenants et bulletins, avec rapports pour la direction.",
    features: [
      "Inscriptions et dossiers des apprenants",
      "Paiements des frais et relances",
      "Suivi des présences et des résultats",
      "Emplois du temps et communication",
      "Bulletins et rapports pour la direction",
    ],
    faq: [
      {
        q: "Le logiciel convient-il aux petits centres de formation ?",
        a: "Oui, il se déploie par modules : inscriptions et paiements d'abord, puis présences, résultats et communication.",
      },
      {
        q: "Peut-on suivre les paiements des frais ?",
        a: "Oui, avec un registre des paiements, des relances automatiques et des encaissements mobile money ({mobileMoney}).",
      },
      {
        q: "Les parents peuvent-ils suivre les résultats ?",
        a: "Selon vos besoins, nous pouvons ouvrir un espace parent avec accès aux présences, notes et communications.",
      },
    ],
    relatedArticle: { to: "/article/digitalisation-entreprise-pme-senegal", label: "Guide : digitalisation d'entreprise" },
    relatedServices: [
      { to: "/secteurs/education-formation", label: "Secteur éducation & formation" },
      { to: "/solutions/applications-metier", label: "Applications métier" },
    ],
  },
  {
    slug: "boutique-en-ligne",
    name: "Création de boutique en ligne",
    type: "E-commerce",
    desc: "création de boutique en ligne : catalogue, paiement mobile money, livraison locale et SEO e-commerce",
    lead:
      "Nous créons des boutiques en ligne pour les commerces de {capital} et du {country}, avec paiement mobile et livraison locale.",
    quickAnswer:
      "Fallcon Tech crée des boutiques en ligne en {country} : catalogue, panier, paiement mobile money ({mobileMoney}), gestion des commandes et des livraisons locales, avec base SEO e-commerce.",
    features: [
      "Catalogue produits et fiches optimisées",
      "Paiement mobile money et livraison locale",
      "Gestion des commandes et des stocks",
      "SEO e-commerce : catégories, fiches, maillage",
      "Formation pour gérer votre boutique",
    ],
    faq: [
      {
        q: "Quel est le coût d'une boutique en ligne ?",
        a: "Le budget dépend du nombre de produits, des intégrations (paiement, livraison) et du design. Nous chiffrons après le cadrage de votre catalogue.",
      },
      {
        q: "Quels moyens de paiement accepte la boutique ?",
        a: "La boutique accepte le paiement mobile money ({mobileMoney}) et peut intégrer les cartes selon vos besoins.",
      },
      {
        q: "Comment être visible sur Google ?",
        a: "Nous intégrons les bases du SEO e-commerce : structure des catégories, fiches produits optimisées, vitesse et sitemap.",
      },
    ],
    relatedArticle: { to: "/article/creer-boutique-en-ligne-senegal", label: "Guide : créer une boutique en ligne" },
    relatedServices: [
      { to: "/services/creation-site-web-dakar", label: "Création de site web" },
      { to: "/services/agence-seo-senegal", label: "Agence SEO" },
    ],
  },
  {
    slug: "seo-referencement",
    name: "Référencement SEO sur Google",
    type: "SEO · Référencement",
    desc: "référencement SEO : audit, optimisation on-page, contenus, maillage interne et suivi Google",
    lead:
      "Nous améliorons le référencement Google des organisations de {capital} et du {country} : plus de visibilité, plus de demandes.",
    quickAnswer:
      "Fallcon Tech améliore le référencement Google en {country} : audit, optimisation des pages, contenus ciblés, maillage interne et suivi des performances dans Search Console.",
    features: [
      "Audit technique et contenu de votre site",
      "Optimisation des titres, pages et contenus",
      "Contenus ciblés sur les recherches locales",
      "SEO local et Google Business Profile",
      "Suivi des performances et rapport mensuel",
    ],
    faq: [
      {
        q: "Combien de temps pour voir des résultats SEO ?",
        a: "Comptez 2 à 4 mois pour les premières améliorations visibles, puis une progression continue. Le SEO est un investissement de fond.",
      },
      {
        q: "Le SEO local est-il important ?",
        a: "Oui, si vos clients cherchent des services près d'eux : Google Business Profile et contenus localisés génèrent des demandes qualifiées.",
      },
      {
        q: "Travaillez-vous avec les outils Google ?",
        a: "Oui, nous utilisons Google Search Console et Analytics pour mesurer, prioriser et vérifier chaque action.",
      },
    ],
    relatedArticle: { to: "/article/referencement-google-senegal-plan-90-jours", label: "Guide : plan SEO 90 jours" },
    relatedServices: [
      { to: "/services/agence-seo-senegal", label: "Agence SEO Sénégal" },
      { to: "/services/audit-seo-professionnel-senegal", label: "Audit SEO professionnel" },
    ],
  },
  {
    slug: "maintenance-support-informatique",
    name: "Maintenance et support informatique",
    type: "Maintenance IT",
    desc: "maintenance et support informatique : assistance à distance, maintenance préventive, sauvegardes et monitoring",
    lead:
      "Nous assurons la maintenance et le support informatique des organisations de {capital} et du {country}, à distance et sur site.",
    quickAnswer:
      "Fallcon Tech assure la maintenance et le support informatique en {country} : assistance à distance, maintenance préventive, sauvegardes vérifiées, monitoring et contrats adaptés aux PME et administrations.",
    features: [
      "Assistance à distance et interventions sur site",
      "Maintenance préventive des postes et serveurs",
      "Sauvegardes vérifiées et restauration testée",
      "Monitoring et alertes de panne",
      "Contrats de support adaptés à votre taille",
    ],
    faq: [
      {
        q: "Proposez-vous des contrats de support ?",
        a: "Oui, des formules mensuelles selon votre parc : nombre de postes, fréquence d'intervention, sauvegardes et niveau de réactivité.",
      },
      {
        q: "Comment se passe l'assistance à distance ?",
        a: "Connexion sécurisée à votre poste ou serveur, diagnostic, résolution et compte rendu. L'intervention sur site est organisée si nécessaire.",
      },
      {
        q: "Que faire en cas de panne critique ?",
        a: "Nos contrats incluent des niveaux de réactivité : nous traitons en priorité les pannes bloquantes pour votre activité.",
      },
    ],
    relatedArticle: { to: "/article/maintenance-site-web-business-senegal", label: "Guide : maintenance informatique" },
    relatedServices: [
      { to: "/solutions/infrastructure-cybersecurite", label: "Infrastructure & cybersécurité" },
      { to: "/article/prix-maintenance-informatique-senegal-2026", label: "Prix maintenance informatique" },
    ],
  },
  {
    slug: "iot-embarque",
    name: "Solutions IoT et objets connectés",
    type: "IoT · Embarqué",
    desc: "solutions IoT et objets connectés : capteurs, contrôle à distance, tableaux de bord et machines intelligentes",
    lead:
      "Nous concevons des solutions IoT et embarquées pour les industriels, distributeurs et opérateurs de {capital} et du {country}.",
    quickAnswer:
      "Fallcon Tech développe des solutions IoT en {country} : capteurs, contrôle à distance, tableaux de bord temps réel, machines intelligentes avec paiement mobile et maintenance prédictive.",
    features: [
      "Capteurs et acquisition de données terrain",
      "Contrôle à distance et mises à jour OTA",
      "Tableaux de bord temps réel",
      "Machines intelligentes avec paiement mobile",
      "Télémétrie et maintenance prédictive",
    ],
    faq: [
      {
        q: "Quels projets IoT réalisez-vous ?",
        a: "Comptage et distribution (machines à eau, distributeurs), télémétrie, supervision de parcs d'équipements et intégration du paiement mobile.",
      },
      {
        q: "Les solutions fonctionnent-elles avec une connexion instable ?",
        a: "Oui, les équipements stockent les données localement et synchronisent dès que la connexion revient ; les paiements sont confirmés côté serveur.",
      },
      {
        q: "Peut-on intégrer le paiement mobile sur une machine ?",
        a: "Oui, c'est notre spécialité : paiement Wave, Orange Money ou autres ({mobileMoney}) sur distributeurs et machines à monnayeur.",
      },
    ],
    relatedArticle: { to: "/article/developpement-iot-embarque-senegal-arduino-esp32", label: "Guide : IoT & embarqué" },
    relatedServices: [
      { to: "/services/integration-paiement-mobile-money-machines", label: "Intégration mobile money machines" },
      { to: "/solutions/applications-metier", label: "Applications métier" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Filières (secteurs d'activité)
// ---------------------------------------------------------------------------
export const GEO_SECTEURS = [
  {
    slug: "sante",
    name: "le secteur de la santé",
    type: "Santé",
    desc: "dossier patient, rendez-vous, caisse, stocks et paiement mobile pour les structures de santé",
    lead:
      "Nous équipons les cliniques, hôpitaux, cabinets et structures de santé de {capital} et du {country} avec des solutions numériques adaptées au terrain.",
    quickAnswer:
      "Fallcon Tech accompagne le secteur de la santé en {country} : logiciels de gestion de clinique, dossier patient, rendez-vous en ligne, caisse avec paiement mobile ({mobileMoney}), stocks et reporting pour la direction.",
    features: [
      "Logiciel de gestion de clinique et dossier patient",
      "Prise de rendez-vous en ligne et rappels",
      "Caisse, facturation et règlements mobile money",
      "Gestion des stocks de médicaments et consommables",
      "Reporting d'activité et de recettes",
    ],
    faq: [
      {
        q: "Vos logiciels conviennent-ils aux petites structures de santé ?",
        a: "Oui, ils se déploient par modules : dossier patient et rendez-vous d'abord, puis caisse, stocks et reporting selon la taille de la structure.",
      },
      {
        q: "Les données des patients sont-elles sécurisées ?",
        a: "Oui : accès par rôles, sauvegardes chiffrées et journal d'audit, dans le respect des règles de confidentialité applicables {prep} {country}.",
      },
      {
        q: "Peut-on encaisser les soins en mobile money ?",
        a: "Oui, la caisse accepte les règlements mobile money ({mobileMoney}) avec rapprochement automatique des transactions.",
      },
    ],
    relatedArticle: { to: "/article/logiciel-clinique-dentaire-senegal", label: "Guide : logiciel de gestion de clinique" },
    competenceLinks: ["logiciel-clinique", "gestion-stock-caisse", "ged-archivage"],
  },
  {
    slug: "education-formation",
    name: "l'éducation et la formation",
    type: "Éducation",
    desc: "inscriptions, paiements, présences et dossiers pour écoles, centres de formation et instituts",
    lead:
      "Nous développons des logiciels de gestion pour les écoles, centres de formation et instituts de {capital} et du {country}.",
    quickAnswer:
      "Fallcon Tech développe des solutions pour l'éducation et la formation en {country} : inscriptions, paiements des frais, présences, dossiers des apprenants, bulletins et communication avec les familles.",
    features: [
      "Inscriptions et dossiers des apprenants",
      "Paiements des frais et relances automatiques",
      "Suivi des présences et des résultats",
      "Emplois du temps et communication",
      "Bulletins et rapports pour la direction",
    ],
    faq: [
      {
        q: "Le logiciel convient-il aux petits centres de formation ?",
        a: "Oui, il se déploie par modules : inscriptions et paiements d'abord, puis présences, résultats et communication.",
      },
      {
        q: "Peut-on suivre les paiements des frais de scolarité ?",
        a: "Oui, avec un registre des paiements, des relances automatiques et des encaissements mobile money ({mobileMoney}).",
      },
      {
        q: "Les parents peuvent-ils suivre la scolarité ?",
        a: "Selon vos besoins, nous ouvrons un espace parent avec accès aux présences, notes et communications.",
      },
    ],
    relatedArticle: { to: "/article/digitalisation-entreprise-pme-senegal", label: "Guide : digitaliser une organisation" },
    competenceLinks: ["gestion-ecole-formation", "paiement-mobile-money", "creation-site-web"],
  },
  {
    slug: "ong-projets",
    name: "les ONG et les programmes",
    type: "ONG & programmes",
    desc: "suivi des activités, bénéficiaires, justificatifs et reporting pour les ONG et bailleurs",
    lead:
      "Nous développons des outils de suivi de projets pour les ONG et programmes intervenant à {capital} et dans tout le pays.",
    quickAnswer:
      "Fallcon Tech développe des solutions pour les ONG en {country} : suivi des activités et des bénéficiaires, collecte des justificatifs, indicateurs et rapports pour les bailleurs, utilisables même hors-ligne.",
    features: [
      "Planification des activités et des jalons",
      "Suivi des bénéficiaires et des zones d'intervention",
      "Collecte des justificatifs et des pièces",
      "Indicateurs et rapports pour les bailleurs",
      "Mode hors-ligne adapté au terrain",
    ],
    faq: [
      {
        q: "Le suivi fonctionne-t-il sans connexion sur le terrain ?",
        a: "Oui, les versions mobiles et terrain fonctionnent hors-ligne et synchronisent les données dès le retour du réseau.",
      },
      {
        q: "Peut-on produire les rapports demandés par les bailleurs ?",
        a: "Oui, les indicateurs sont configurés avec vous et les rapports s'exportent au format demandé.",
      },
      {
        q: "Comment protéger les données des bénéficiaires ?",
        a: "Accès par rôles, chiffrement et sauvegardes régulières, selon les bonnes pratiques de protection des données personnelles.",
      },
    ],
    relatedArticle: { to: "/article/digitalisation-entreprise-pme-senegal", label: "Guide : digitaliser une organisation" },
    competenceLinks: ["suivi-projets-ong", "ged-archivage", "gec-courrier"],
  },
  {
    slug: "transport-logistique",
    name: "le transport et la logistique",
    type: "Transport & logistique",
    desc: "gestion de flotte, missions, carburant, maintenance et suivi GPS pour les transporteurs",
    lead:
      "Nous développons des logiciels de gestion de flotte pour les transporteurs et entreprises logistiques de {capital} et du {country}.",
    quickAnswer:
      "Fallcon Tech développe des solutions pour le transport et la logistique en {country} : gestion de flotte, missions, carburant, maintenance, suivi GPS et tableaux de bord de coûts.",
    features: [
      "Registre des véhicules et des conducteurs",
      "Gestion des missions et des affectations",
      "Suivi du carburant et de la maintenance",
      "Intégration GPS et alertes en temps réel",
      "Tableaux de bord de coûts et d'utilisation",
    ],
    faq: [
      {
        q: "Quels gains pour une entreprise de transport ?",
        a: "Moins de consommation inexpliquée, une maintenance planifiée, des missions tracées et une vision claire des coûts par véhicule.",
      },
      {
        q: "Peut-on suivre les véhicules en temps réel ?",
        a: "Oui, nous intégrons des solutions GPS légères avec alertes et historique des trajets, adaptées aux réseaux locaux.",
      },
      {
        q: "Le logiciel convient-il aux petites flottes ?",
        a: "Oui, il est utile dès quelques véhicules pour suivre carburant, maintenance et missions.",
      },
    ],
    relatedArticle: { to: "/article/logiciel-gestion-flotte-senegal", label: "Guide : logiciel de gestion de flotte" },
    competenceLinks: ["gestion-flotte", "logiciel-sur-mesure", "iot-embarque"],
  },
  {
    slug: "secteur-public",
    name: "le secteur public",
    type: "Secteur public",
    desc: "courrier, registres, dématérialisation des procédures et services aux usagers pour les administrations",
    lead:
      "Nous accompagnons les administrations, mairies et collectivités de {capital} et du {country} dans la digitalisation de leurs procédures.",
    quickAnswer:
      "Fallcon Tech accompagne le secteur public en {country} : GEC et GED, registres numériques, parapheur électronique, dématérialisation des procédures et formation des agents.",
    features: [
      "Gestion électronique du courrier (GEC) et GED",
      "Registres numériques (courrier, délibérations, actes)",
      "Parapheur et circuits de validation",
      "Dématérialisation des procédures et formulaires",
      "Formation des agents et conduite du changement",
    ],
    faq: [
      {
        q: "Par où commencer la digitalisation d'une administration ?",
        a: "Par un diagnostic : identifier les procédures les plus lourdes (courrier, dossiers, délibérations) et les digitaliser une par une.",
      },
      {
        q: "Les solutions s'intègrent-elles aux outils existants ?",
        a: "Oui : import des données existantes, formats standards et interopérabilité avec les outils déjà utilisés par les services.",
      },
      {
        q: "Comment gérez-vous la conduite du changement ?",
        a: "Formation, accompagnement sur le terrain et écrans simples : la solution doit être plus rapide à utiliser que le papier.",
      },
    ],
    relatedArticle: { to: "/article/digitalisation-services-publics-senegal", label: "Guide : digitalisation des services publics" },
    competenceLinks: ["gec-courrier", "dematerialisation-marches-publics", "digitalisation-administrations"],
  },
  {
    slug: "commerce-retail",
    name: "le commerce et la distribution",
    type: "Commerce & retail",
    desc: "caisse, stock, boutique en ligne et paiement mobile pour les commerces et distributeurs",
    lead:
      "Nous équipons les commerces, grossistes et distributeurs de {capital} et du {country} avec des outils de vente et de gestion fiables.",
    quickAnswer:
      "Fallcon Tech développe des solutions pour le commerce et la distribution en {country} : caisse, gestion de stock, boutique en ligne et encaissements mobile money ({mobileMoney}).",
    features: [
      "Caisse avec encaissements mobile money",
      "Inventaire et suivi des produits par dépôt",
      "Boutique en ligne et gestion des commandes",
      "Gestion des fournisseurs et réapprovisionnement",
      "Rapports de ventes et de marges",
    ],
    faq: [
      {
        q: "Faut-il un logiciel de caisse dans un commerce ?",
        a: "Dès que vous suivez plusieurs produits et encaissements, un logiciel évite les pertes, les erreurs et donne une vision claire des ventes.",
      },
      {
        q: "Peut-on vendre en ligne et encaisser en mobile money ?",
        a: "Oui : boutique en ligne, paiement mobile money ({mobileMoney}) et gestion des livraisons locales.",
      },
      {
        q: "Le logiciel fonctionne-t-il sans connexion ?",
        a: "Oui, la caisse reste opérationnelle hors-ligne et synchronise les ventes dès le retour du réseau.",
      },
    ],
    relatedArticle: { to: "/article/logiciel-gestion-stock-caisse-senegal", label: "Guide : gestion stock & caisse" },
    competenceLinks: ["gestion-stock-caisse", "boutique-en-ligne", "paiement-mobile-money"],
  },
  {
    slug: "banque-microfinance",
    name: "la banque et la microfinance",
    type: "Banque & microfinance",
    desc: "dossiers clients, crédits, épargne, recouvrement et reporting pour institutions financières",
    lead:
      "Nous développons des logiciels de gestion pour les banques, microfinances et institutions financières de {capital} et du {country}.",
    quickAnswer:
      "Fallcon Tech développe des solutions pour la banque et la microfinance en {country} : dossiers clients, crédits, épargne, recouvrement et reporting, avec intégration du mobile money ({mobileMoney}).",
    features: [
      "Dossiers clients et agents de crédit",
      "Gestion des crédits, échéances et recouvrement",
      "Épargne et comptes internes",
      "Intégration du mobile money ({mobileMoney})",
      "Reporting prudentiel et tableaux de bord",
    ],
    faq: [
      {
        q: "Vos solutions conviennent-elles aux petites structures ?",
        a: "Oui, elles s'adaptent aux mutuelles, caisses villageoises et microfinances comme aux structures plus grandes.",
      },
      {
        q: "Peut-on encaisser les remboursements en mobile money ?",
        a: "Oui, les remboursements et dépôts via mobile money ({mobileMoney}) sont intégrés avec rapprochement automatique.",
      },
      {
        q: "Comment sécuriser les données financières ?",
        a: "Accès par rôles, traçabilité complète, sauvegardes chiffrées et contrôle des opérations sensibles.",
      },
    ],
    relatedArticle: { to: "/article/application-gestion-sur-mesure-senegal", label: "Guide : application de gestion sur mesure" },
    competenceLinks: ["logiciel-sur-mesure", "paiement-mobile-money", "infrastructure-cybersecurite"],
  },
  {
    slug: "industrie",
    name: "l'industrie et la production",
    type: "Industrie",
    desc: "suivi de production, stocks, maintenance des équipements et IoT pour les industriels",
    lead:
      "Nous équipons les industriels et producteurs de {capital} et du {country} avec des outils de suivi de production et d'équipements.",
    quickAnswer:
      "Fallcon Tech développe des solutions pour l'industrie en {country} : suivi de production, gestion des stocks, maintenance des équipements et capteurs IoT pour la télémétrie.",
    features: [
      "Suivi de la production et des ordres de fabrication",
      "Gestion des stocks matières et produits",
      "Maintenance préventive des équipements",
      "Capteurs IoT et télémétrie",
      "Tableaux de bord de performance",
    ],
    faq: [
      {
        q: "Le suivi de production est-il adapté aux petites unités ?",
        a: "Oui, il se déploie progressivement : production, stocks, puis maintenance et capteurs selon vos priorités.",
      },
      {
        q: "Peut-on surveiller les machines à distance ?",
        a: "Oui, avec des capteurs et une supervision temps réel qui alertent avant les pannes (maintenance prédictive).",
      },
      {
        q: "Quels sont les premiers gains ?",
        a: "Moins de ruptures de stock, des pannes anticipées et une vision claire de la production et des coûts.",
      },
    ],
    relatedArticle: { to: "/article/telemetrie-maintenance-predictive-iot-senegal", label: "Guide : télémétrie & maintenance prédictive" },
    competenceLinks: ["gestion-stock-caisse", "iot-embarque", "logiciel-sur-mesure"],
  },
  {
    slug: "agriculture",
    name: "l'agriculture et l'agroalimentaire",
    type: "Agriculture",
    desc: "suivi des exploitations, coopératives, achats, stocks et paiements pour la filière agro",
    lead:
      "Nous développons des outils de gestion pour les exploitations, coopératives et transformateurs agricoles de {capital} et du {country}.",
    quickAnswer:
      "Fallcon Tech développe des solutions pour l'agriculture et l'agroalimentaire en {country} : suivi des exploitations et des coopératives, achats, stocks, paiements et traçabilité.",
    features: [
      "Registre des exploitations et des producteurs",
      "Achats, pesées et paiements aux producteurs",
      "Gestion des stocks et de la transformation",
      "Paiements mobile money ({mobileMoney})",
      "Traçabilité et rapports de campagne",
    ],
    faq: [
      {
        q: "Comment gérer les paiements aux producteurs ?",
        a: "Les achats et pesées sont enregistrés sur le terrain et les paiements sont réalisés en mobile money ({mobileMoney}) avec un historique complet.",
      },
      {
        q: "Le suivi fonctionne-t-il en zone rurale ?",
        a: "Oui, les saisies fonctionnent hors-ligne et se synchronisent dès le retour du réseau.",
      },
      {
        q: "Peut-on tracer une production jusqu'à la vente ?",
        a: "Oui : chaque lot est suivi de la collecte à la transformation et à la vente, avec les documents associés.",
      },
    ],
    relatedArticle: { to: "/article/digitalisation-entreprise-pme-senegal", label: "Guide : digitaliser une organisation" },
    competenceLinks: ["suivi-projets-ong", "gestion-stock-caisse", "paiement-mobile-money"],
  },
  {
    slug: "immobilier-btp",
    name: "l'immobilier et le BTP",
    type: "Immobilier & BTP",
    desc: "gestion locative, suivi des chantiers, contrats et paiements pour promoteurs et agences",
    lead:
      "Nous développons des logiciels de gestion pour les promoteurs, agences immobilières et entreprises du BTP de {capital} et du {country}.",
    quickAnswer:
      "Fallcon Tech développe des solutions pour l'immobilier et le BTP en {country} : gestion locative, suivi des chantiers, contrats, encaissements et reporting.",
    features: [
      "Gestion locative : biens, baux, loyers",
      "Suivi des chantiers et des phases",
      "Contrats et documents centralisés",
      "Encaissements mobile money ({mobileMoney})",
      "Tableaux de bord de trésorerie",
    ],
    faq: [
      {
        q: "Le logiciel convient-il aux petites agences ?",
        a: "Oui, il se déploie par modules : biens et loyers d'abord, puis chantiers, contrats et reporting.",
      },
      {
        q: "Peut-on encaisser les loyers en mobile money ?",
        a: "Oui, les loyers et frais peuvent être réglés en mobile money ({mobileMoney}) avec rapprochement automatique.",
      },
      {
        q: "Comment suivre plusieurs chantiers ?",
        a: "Chaque chantier a son avancement, ses documents et ses coûts, visibles dans un tableau de bord unique.",
      },
    ],
    relatedArticle: { to: "/article/application-gestion-sur-mesure-senegal", label: "Guide : application de gestion sur mesure" },
    competenceLinks: ["logiciel-sur-mesure", "paiement-mobile-money", "creation-site-web"],
  },
  {
    slug: "hotelerie-tourisme",
    name: "l'hôtellerie et le tourisme",
    type: "Hôtellerie & tourisme",
    desc: "réservations, séjours, caisse, présence en ligne et paiements pour hôtels et agences",
    lead:
      "Nous équipons les hôtels, restaurants et agences de tourisme de {capital} et du {country} avec des outils de réservation et de gestion.",
    quickAnswer:
      "Fallcon Tech développe des solutions pour l'hôtellerie et le tourisme en {country} : réservations, gestion des séjours, caisse et paiement mobile ({mobileMoney}), site web et présence en ligne.",
    features: [
      "Réservations en ligne et gestion des séjours",
      "Caisse et encaissements mobile money",
      "Site web et présence sur Google",
      "Gestion des chambres et du personnel",
      "Rapports d'occupation et de revenus",
    ],
    faq: [
      {
        q: "Peut-on prendre les réservations en ligne ?",
        a: "Oui, avec un système de réservation simple sur votre site et une confirmation automatique par WhatsApp.",
      },
      {
        q: "Quels moyens de paiement pour les clients ?",
        a: "Espèces, cartes et mobile money ({mobileMoney}) selon vos besoins, avec un rapprochement automatique.",
      },
      {
        q: "Comment attirer plus de clients sur Google ?",
        a: "Nous optimisons votre présence : site rapide, fiche Google Business Profile et contenus localisés sur votre ville.",
      },
    ],
    relatedArticle: { to: "/article/creer-site-web-professionnel-dakar", label: "Guide : créer un site web professionnel" },
    competenceLinks: ["creation-site-web", "seo-referencement", "boutique-en-ligne"],
  },
  {
    slug: "medias-communication",
    name: "les médias et la communication",
    type: "Médias & communication",
    desc: "sites d'information, plateformes éditoriales, gestion des contenus et audiences",
    lead:
      "Nous concevons des plateformes numériques pour les médias, agences de communication et éditeurs de {capital} et du {country}.",
    quickAnswer:
      "Fallcon Tech développe des solutions pour les médias et la communication en {country} : sites d'information rapides, plateformes éditoriales, gestion des contenus et mesures d'audience.",
    features: [
      "Sites d'information rapides et mobile-first",
      "Plateformes éditoriales et gestion des contenus",
      "Optimisation SEO et performance",
      "Newsletters et intégrations WhatsApp",
      "Mesure d'audience et tableaux de bord",
    ],
    faq: [
      {
        q: "Votre plateforme gère-t-elle de gros volumes de contenus ?",
        a: "Oui, l'architecture est conçue pour les sites d'information avec des temps de chargement rapides, même en 3G/4G.",
      },
      {
        q: "Peut-on monétiser avec la publicité ?",
        a: "Oui, nous intégrons les formats publicitaires et les statistiques d'audience nécessaires à la régie.",
      },
      {
        q: "Le site sera-t-il bien positionné sur Google ?",
        a: "Oui : performance, SEO technique, contenus structurés et vitesse sont au cœur de nos développements.",
      },
    ],
    relatedArticle: { to: "/article/optimisation-vitesse-site-seo-conversions", label: "Guide : vitesse et conversions" },
    competenceLinks: ["creation-site-web", "developpement-web", "seo-referencement"],
  },
];

// ---------------------------------------------------------------------------
// Construction des pages
// ---------------------------------------------------------------------------

const countryBySlug = Object.fromEntries(GEO_COUNTRIES.map((c) => [c.slug, c]));
const competenceBySlug = Object.fromEntries(
  GEO_COMPETENCES.map((c) => [c.slug, c])
);
const secteurBySlug = Object.fromEntries(
  GEO_SECTEURS.map((s) => [s.slug, s])
);

function fill(template, vars) {
  let s = template.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? `{${key}}`);
  // Flexions françaises : « en Sénégal » → « au Sénégal », « du Côte d'Ivoire » → « de Côte d'Ivoire », « de Abidjan » → « d'Abidjan »
  s = s.replace(`en ${vars.country}`, `${vars.prep} ${vars.country}`);
  s = s.replace(`du ${vars.country}`, `${vars.gen} ${vars.country}`);
  s = s.replace(`de ${vars.capital}`, vars.ofCapital);
  return s;
}

function countryVars(country) {
  return {
    country: country.name,
    nameShort: country.nameShort || country.name,
    prep: country.prep,
    gen: country.gen,
    capital: country.capital,
    cities: country.cities,
    currency: country.currency,
    zone: country.zone,
    mobileMoney: country.mobileMoney,
    ofCountry: `${country.gen} ${country.name}`,
    ofCapital: /^[aeiouh]/i.test(country.capital) ? `d'${country.capital}` : `de ${country.capital}`,
  };
}

export function buildGeoPage(countrySlug, competenceSlug) {
  const country = countryBySlug[countrySlug];
  const competence = competenceBySlug[competenceSlug];
  if (!country || !competence) return null;

  const vars = countryVars(country);

  const shortName = country.nameShort || country.name;
  const geoName = `${competence.name} ${country.prep} ${country.name}`;
  const geoNameShort = `${competence.name} ${country.prep} ${shortName}`;
  const path = `/services/${competence.slug}-${country.slug}`;
  const lead = fill(competence.lead, vars);
  // Évite la redondance « Logiciel X : logiciel X : … » en ne gardant que le détail après le premier « : »
  const descBody = competence.desc.includes(":")
    ? competence.desc.slice(competence.desc.indexOf(":") + 1).trim()
    : competence.desc;
  const description = `${geoNameShort} : ${fill(descBody, vars)}. Devis rapide à ${country.capital}.`;

  return {
    path,
    family: "competence",
    country,
    competence,
    geoName,
    h1: geoName,
    eyebrow: `${competence.type} ${country.prep} ${country.name}`,
    title: `${geoNameShort} | Fallcon Tech`,
    description,
    lead,
    quickAnswer: fill(competence.quickAnswer, vars),
    features: competence.features,
    faq: competence.faq.map((item) => ({
      q: fill(item.q, vars),
      a: fill(item.a, vars),
    })),
    relatedArticle: competence.relatedArticle,
    relatedServices: competence.relatedServices,
    type: competence.type,
    relatedCountries: GEO_COUNTRIES.filter((c) => c.slug !== country.slug).map((c) => ({
      flag: c.flag,
      name: c.name,
      label: c.name,
      to: `/services/${competence.slug}-${c.slug}`,
    })),
  };
}

export function buildSecteurPage(countrySlug, secteurSlug) {
  const country = countryBySlug[countrySlug];
  const secteur = secteurBySlug[secteurSlug];
  if (!country || !secteur) return null;

  const vars = countryVars(country);
  const shortName = country.nameShort || country.name;
  const geoName = `Solutions numériques pour ${secteur.name} ${country.prep} ${shortName}`;
  const path = `/secteurs/${secteur.slug}-${country.slug}`;
  const lead = fill(secteur.lead, vars);
  const descBody = secteur.desc.includes(":")
    ? secteur.desc.slice(secteur.desc.indexOf(":") + 1).trim()
    : secteur.desc;
  const description = `${geoName} : ${fill(descBody, vars)}. Devis rapide à ${country.capital}.`;
  const competenceLinks = secteur.competenceLinks
    .map((slug) => {
      const comp = competenceBySlug[slug];
      if (!comp) return null;
      return {
        label: `${comp.name} ${country.prep} ${shortName}`,
        to: `/services/${slug}-${country.slug}`,
      };
    })
    .filter(Boolean);

  return {
    path,
    family: "secteur",
    country,
    secteur,
    geoName,
    h1: geoName,
    eyebrow: `${secteur.type} ${country.prep} ${country.name}`,
    title: `${geoName} | Fallcon Tech`,
    description,
    lead,
    quickAnswer: fill(secteur.quickAnswer, vars),
    features: secteur.features,
    faq: secteur.faq.map((item) => ({
      q: fill(item.q, vars),
      a: fill(item.a, vars),
    })),
    relatedArticle: secteur.relatedArticle,
    relatedServices: competenceLinks,
    type: secteur.type,
    relatedCountries: GEO_COUNTRIES.filter((c) => c.slug !== country.slug).map((c) => ({
      flag: c.flag,
      name: c.name,
      label: c.name,
      to: `/secteurs/${secteur.slug}-${c.slug}`,
    })),
  };
}

export function buildCountryHub(countrySlug) {
  const country = countryBySlug[countrySlug];
  if (!country) return null;

  const vars = countryVars(country);
  const shortName = country.nameShort || country.name;
  const geoName = `Cabinet de transformation numérique ${country.prep} ${shortName}`;
  const path = `/pays/${country.slug}`;
  const lead = `${country.note} Nous concevons des sites web, applications métier, GED, logiciels de gestion et infrastructures sécurisées pour les administrations, cliniques, ONG et entreprises ${vars.ofCountry}.`;
  const description = `${geoName} : sites web, applications métier, GEC et GED, digitalisation administrative, cybersécurité et paiement mobile pour les organisations ${vars.ofCapital} et des grandes villes du pays. Devis rapide.`;

  const faq = [
    {
      q: `Fallcon Tech intervient-il ${country.prep} ${shortName} ?`,
      a: `Oui. Notre équipe, basée à Dakar, travaille à distance ou sur site ${country.prep} ${shortName} pour le cadrage, le déploiement et la formation de vos équipes.`,
    },
    {
      q: `Quels moyens de paiement mobile intégrez-vous ${country.prep} ${shortName} ?`,
      a: `Nous intégrons les opérateurs locaux : ${country.mobileMoney}, avec des confirmations côté serveur et un rapprochement fiable des transactions.`,
    },
    {
      q: "Comment démarrer un projet de transformation numérique ?",
      a: "Par un premier échange pour comprendre vos processus, puis un diagnostic ciblé et une feuille de route budgétée. Nous avançons par étapes validées.",
    },
  ];

  return {
    path,
    family: "pays",
    country,
    geoName,
    h1: geoName,
    eyebrow: `Transformation numérique ${country.prep} ${country.name}`,
    title: `${geoName} | Fallcon Tech`,
    description,
    lead,
    quickAnswer: `Fallcon Tech est un cabinet de transformation numérique ${country.prep} ${shortName}, basé à Dakar : sites web, applications métier, GEC et GED, digitalisation administrative, cybersécurité, paiement mobile (${country.mobileMoney}) et IoT, avec accompagnement à distance et sur site.`,
    features: [],
    faq,
    relatedArticle: { to: "/work", label: "Nos réalisations" },
    relatedServices: [
      { to: "/services", label: "Toutes nos solutions" },
      { to: "/pricing", label: "Formats d'intervention" },
    ],
    type: "Transformation numérique",
    competenceLinks: GEO_COMPETENCES.map((c) => ({
      label: c.name,
      to: `/services/${c.slug}-${country.slug}`,
    })),
    secteurLinks: GEO_SECTEURS.map((s) => ({
      label: `Solutions pour ${s.name}`,
      to: `/secteurs/${s.slug}-${country.slug}`,
    })),
    relatedCountries: GEO_COUNTRIES.filter((c) => c.slug !== country.slug).map((c) => ({
      flag: c.flag,
      name: c.name,
      label: c.name,
      to: `/pays/${c.slug}`,
    })),
  };
}

export function getAllGeoPages() {
  const pages = [];
  for (const country of GEO_COUNTRIES) {
    for (const competence of GEO_COMPETENCES) {
      pages.push(buildGeoPage(country.slug, competence.slug));
    }
    for (const secteur of GEO_SECTEURS) {
      pages.push(buildSecteurPage(country.slug, secteur.slug));
    }
    pages.push(buildCountryHub(country.slug));
  }
  return pages.filter(Boolean);
}

const GEO_PAGES = getAllGeoPages();
const geoPageByPath = new Map(GEO_PAGES.map((p) => [p.path, p]));

export function getGeoPageByPath(path) {
  return geoPageByPath.get(path) || null;
}

// Renvoie un objet compatible avec getSeoForPath pour les outils de build
export function geoSeoForPath(path) {
  const page = getGeoPageByPath(path);
  if (!page) return null;
  return {
    title: page.title,
    description: page.description,
    path,
    canonical: `${GEO_SITE_URL}${path}`,
    ogImage: `${GEO_SITE_URL}/logo.png`,
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    type: "website",
    priority: page.family === "pays" ? "0.80" : "0.70",
    changefreq: "monthly",
  };
}

export const GEO_COUNTRY_SLUGS = GEO_COUNTRIES.map((c) => c.slug);
export const GEO_COMPETENCE_SLUGS = GEO_COMPETENCES.map((c) => c.slug);
export const GEO_SECTEUR_SLUGS = GEO_SECTEURS.map((s) => s.slug);
