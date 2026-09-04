// =============================================================================
// CATALOGUE ÉQUIPEMENTS — Fallcon Tech
// -----------------------------------------------------------------------------
// Cette page est pilotée par ce fichier. Pour ajouter / modifier un matériel :
//   1. Dupliquez un objet ci-dessous.
//   2. Remplissez id, slug, name, category, price, short, specs, image, stock.
//   3. Placez la vraie photo du matériel dans src/assets/products/ (webp de
//      préférence) et importez-la en haut avec un chemin `@/assets/products/…`.
// Le prix est INDICATIF : la commande est confirmée sur WhatsApp avant paiement.
// =============================================================================
import iotEsp32 from "@/assets/articles/iot-esp32.svg";
import paymentGateways from "@/assets/articles/payment-gateways.svg";
import posShop from "@/assets/articles/pos_system_shop_senegal.png";
import pcStore from "@/assets/articles/pc_laptop_store_dakar.png";
import hardware from "@/assets/articles/hardware.png";
import ups from "@/assets/articles/electricity_stabilizer_dakar.png";
import serverRoom from "@/assets/articles/it_professional_server_room.png";
import security from "@/assets/articles/security.png";
import itSupport from "@/assets/articles/it-support.png";
import maintenance from "@/assets/articles/maintenance.png";

export const CATEGORIES = [
  "Paiement & IoT",
  "Informatique",
  "Réseau & Cybersécurité",
  "Caisse & POS",
];

export const products = [
  // ---------- Paiement & IoT ----------
  {
    id: "module-integration-mobile-money",
    slug: "module-integration-mobile-money",
    name: "Module d'intégration mobile money",
    category: "Paiement & IoT",
    price: 85000,
    priceNote: "hors installation",
    image: iotEsp32,
    short:
      "Ajoute Wave, Orange Money et Free Money sur vos machines à pièces, bornes et équipements à monnayeur.",
    specs: [
      "Compatible ESP32 / Arduino",
      "Validation côté serveur anti-doublon",
      "Tableau de bord ventes & erreurs",
      "Mise à jour à distance (OTA)",
    ],
    stock: "En stock",
    badge: "Populaire",
    unit: "module",
  },
  {
    id: "passerelle-paiement-iot",
    slug: "passerelle-paiement-iot",
    name: "Passerelle de paiement IoT (Wave / OM / Free)",
    category: "Paiement & IoT",
    price: 95000,
    priceNote: "hors abonnement",
    image: paymentGateways,
    short:
      "Raccordez vos automates, distributeurs et kiosques aux passerelles mobile money avec suivi des transactions.",
    specs: [
      "Wave, Orange Money, Free Money",
      "Référence de paiement unique",
      "Coupure réseau gérée",
      "API pour votre tableau de bord",
    ],
    stock: "Sur commande",
    unit: "unité",
  },
  {
    id: "distributeur-eau-connecte",
    slug: "distributeur-eau-connecte",
    name: "Distributeur d'eau connecté",
    category: "Paiement & IoT",
    price: 450000,
    priceNote: "selon capacité",
    image: posShop,
    short:
      "Distributeur ou fontaine automatique avec paiement mobile money, supervision des volumes et des cycles.",
    specs: [
      "Paiement pièces + mobile money",
      "Comptage des volumes",
      "Alertes maintenance",
      "Télésupervision",
    ],
    stock: "Sur commande",
    badge: "Sur devis",
    unit: "machine",
  },

  // ---------- Informatique ----------
  {
    id: "pc-portable-professionnel",
    slug: "pc-portable-professionnel",
    name: "PC portable professionnel",
    category: "Informatique",
    price: 385000,
    priceNote: "selon config",
    image: pcStore,
    short:
      "Poste portable conçu pour l'usage professionnel : processeur récent, mémoire et stockage SSD, garantie.",
    specs: [
      "CPU moderne (i5 / Ryzen 5)",
      "RAM 16 Go, SSD 512 Go",
      "Écran 14–15,6\" Full HD",
      "Garantie constructeur",
    ],
    stock: "En stock",
    badge: "Populaire",
    unit: "unité",
  },
  {
    id: "pc-bureau-professionnel",
    slug: "pc-bureau-professionnel",
    name: "PC bureau professionnel",
    category: "Informatique",
    price: 320000,
    priceNote: "selon config",
    image: hardware,
    short:
      "Unité centrale pour poste fixe : bureautique et applications métier, évolutive et facile à maintenir.",
    specs: [
      "CPU performant",
      "RAM 16 Go, SSD 512 Go",
      "Windows / Linux préinstallé",
      "Extension facile",
    ],
    stock: "En stock",
    unit: "unité",
  },
  {
    id: "onduleur-1500va",
    slug: "onduleur-1500va",
    name: "Onduleur 1500 VA",
    category: "Informatique",
    price: 95000,
    priceNote: "hors câblage",
    image: ups,
    short:
      "Protège vos postes et serveurs contre coupures, variations et microcoupures du réseau électrique.",
    specs: [
      "1500 VA / 900 W",
      "Autonomie en cas de coupure",
      "Protection contre les surtensions",
      "Sorties secourues",
    ],
    stock: "En stock",
    unit: "unité",
  },
  {
    id: "stabilisateur-tension",
    slug: "stabilisateur-tension",
    name: "Stabilisateur / régulateur de tension",
    category: "Informatique",
    price: 45000,
    priceNote: "hors câblage",
    image: ups,
    short:
      "Régule la tension du réseau pour prolonger la durée de vie de votre matériel en environnement instable.",
    specs: [
      "Régulation 220 V",
      "Protection surtension",
      "Plusieurs puissances",
      "Idéal dépanneurs",
    ],
    stock: "En stock",
    unit: "unité",
  },

  // ---------- Réseau & Cybersécurité ----------
  {
    id: "serveur-tour",
    slug: "serveur-tour",
    name: "Serveur de bureau (tour)",
    category: "Réseau & Cybersécurité",
    price: 850000,
    priceNote: "selon RAID & CPU",
    image: serverRoom,
    short:
      "Serveur pour applications métier, fichier et sauvegarde : redondance, capacité et continuité de service.",
    specs: [
      "Multi-cœurs, ECC",
      "RAID 1 / 5 / 10",
      "Baies disques chaudes",
      "Licences non activées",
    ],
    stock: "Sur commande",
    badge: "Sur devis",
    unit: "unité",
  },
  {
    id: "switch-managed-24p",
    slug: "switch-managed-24p",
    name: "Switch administrable 24 ports",
    category: "Réseau & Cybersécurité",
    price: 245000,
    priceNote: "selon modèle",
    image: serverRoom,
    short:
      "Switch réseau administrable pour structurer et sécuriser vos réseaux d'entreprise et VLAN.",
    specs: [
      "24 ports Gigabit",
      "Gestion VLAN",
      "PoE optionnel",
      "VLAN & QoS",
    ],
    stock: "En stock",
    unit: "unité",
  },
  {
    id: "routeur-pare-feu",
    slug: "routeur-pare-feu",
    name: "Routeur / pare-feu d'entreprise",
    category: "Réseau & Cybersécurité",
    price: 385000,
    priceNote: "selon modèle",
    image: security,
    short:
      "Contrôle d'accès Internet, VPN, filtrage et segmentation pour protéger votre réseau d'entreprise.",
    specs: [
      "Pare-feu NGFW",
      "VPN site à site",
      "Filtrage applicatif",
      "Gestion centralisée",
    ],
    stock: "En stock",
    badge: "Populaire",
    unit: "unité",
  },
  {
    id: "point-acces-wifi",
    slug: "point-acces-wifi",
    name: "Point d'accès Wi-Fi",
    category: "Réseau & Cybersécurité",
    price: 78000,
    priceNote: "hors installation",
    image: itSupport,
    short:
      "Point d'accès Wi-Fi professionnel pour couvrir bureaux, salles et espaces de réception.",
    specs: [
      "Wi-Fi 6 (802.11ax)",
      "Alimentation PoE",
      "Gestion de plusieurs SSID",
      "Mode invité",
    ],
    stock: "En stock",
    unit: "unité",
  },

  // ---------- Caisse & POS ----------
  {
    id: "logiciel-caisse-pos",
    slug: "logiciel-caisse-pos",
    name: "Caisse point de vente (POS) — licence",
    category: "Caisse & POS",
    price: 120000,
    priceNote: "licence annuelle",
    image: posShop,
    short:
      "Logiciel de caisse et gestion de stock : tickets, paiements, rapports et anti-vol pour commerces.",
    specs: [
      "Tickets & encaissements",
      "Gestion de stock",
      "Rapports quotidiens",
      "Rôles & permissions",
    ],
    stock: "En stock",
    badge: "Populaire",
    unit: "licence",
  },
  {
    id: "terminal-paiement-electronique",
    slug: "terminal-paiement-electronique",
    name: "Terminal de paiement électronique (TPE)",
    category: "Caisse & POS",
    price: 125000,
    priceNote: "selon modèle",
    image: posShop,
    short:
      "Terminal de paiement pour encaisser par carte, Wave, Orange Money et espèces en boutique.",
    specs: [
      "Carte bancaire (CNPS / GIM)",
      "Mobile money",
      "Imprimante tickets",
      "Batterie de secours",
    ],
    stock: "Sur commande",
    unit: "unité",
  },
];

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug);

export const formatFCFA = (value) =>
  value == null
    ? null
    : `${new Intl.NumberFormat("fr-FR").format(value)} F CFA`;

export const CATEGORY_META = {
  "Paiement & IoT": "Machines, bornes, kiosques et passerelles de paiement mobile money.",
  "Informatique": "Postes de travail, serveurs d'utilisateurs et protection électrique.",
  "Réseau & Cybersécurité": "Routage, switch, Wi-Fi, serveurs et contrôles d'accès.",
  "Caisse & POS": "Points de vente, terminaux de paiement et logiciels de caisse.",
};
