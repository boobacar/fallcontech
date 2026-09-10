// =============================================================================
// Fallcon Tech — Usine à pages SEO pour la BOUTIQUE (programmatic SEO)
// -----------------------------------------------------------------------------
// Objectif : couvrir les recherches d'achat de matériel réseau Huawei en Afrique.
// Trois familles de pages générées depuis ce fichier (aucun fichier JSX par page) :
//   1. /boutique/categorie/<famille>      → 5 pages catégories (routeurs, switches…)
//   2. /boutique/pays/<pays>             → 16 hubs pays
//   3. /boutique/<pays>/<produit>        → 16 × 7 = 112 pages produit × pays
//
// Les données pays viennent de geoData.js (GEO_COUNTRIES) : prep/gen/capitale/
// villes/devise/mobile money/zone → grammaire française correcte et contenu
// réellement localisé (pas de duplication de template nu).
//
// ⚠️ Prix : jamais de montant ici (le site affiche « Prix sur devis »).
// =============================================================================
import { GEO_COUNTRIES } from "./geoData.js";
import { products } from "./products.js";
import { SITE_URL } from "./seoData.js";
import { cut, composeDesc, composeTitle } from "./seoTextUtils.js";
import { getAllBoutiqueEnPages } from "./boutiqueEnData.js";

// Noms courts pour les titles/descriptions (SERP-safe).
const NAME_SHORT = {
  rdc: "RDC",
  "guinee-bissau": "Guinée-Bissau",
  "cote-divoire": "Côte d'Ivoire",
};

const VOWEL_START = /^[aeiouyàâäéèêëîïôöûüh]/i;
const deVille = (ville) => (VOWEL_START.test(ville) ? `d'${ville}` : `de ${ville}`);

const shortName = (country) => NAME_SHORT[country.slug] || country.name;

// ---------------------------------------------------------------------------
// Familles (catégories) de la boutique
// ---------------------------------------------------------------------------
export const BOUTIQUE_FAMILIES = [
  {
    slug: "routeurs",
    cat: "Routeurs",
    label: "Routeurs Huawei NetEngine 8000",
    query: "routeur Huawei NetEngine",
    pitch:
      "des routeurs modulaires de cœur et d'agrégation 3U/5U pour opérateurs, FAI et grands réseaux d'entreprise",
    shortNote: "Châssis 3U/5U pour opérateurs et grands réseaux.",
    useCases: [
      "Cœur et agrégation de réseau opérateur / FAI (BGP, MPLS, SR, EVPN)",
      "Backhaul 5G et collecte multiservices en zone dense",
      "Interconnexion de sites critiques (banques, administrations, universités)",
      "Peering / IXP et sortie Internet redondée",
      "Évolution progressive : châssis dimensionné pour plusieurs années de capacité",
    ],
    buying: [
      "Châssis, cartes de commutation (IPU), cartes d'interface (PIC) et optiques se choisissent ensemble",
      "Les licences Huawei (RTU de port, MACsec, licences logicielles) conditionnent la capacité réellement exploitable",
      "La redondance (alimentation, cartes, ventilation) est un critère de choix pour un site critique",
      "Nos châssis sont livrés configurés et testés : le devis précise les cartes, optiques et licences",
    ],
    faq: [
      {
        q: "Quelle différence entre les modèles NetEngine 8000 M8, M14 et M1A ?",
        a: "Le M1A est un routeur fixe 1U pour l'accès et le backhaul. Le M8 (3U, 8 emplacements, jusqu'à 4,8 Tbit/s) et le M14 (5U, 14 emplacements, jusqu'à 7,2 Tbit/s) sont modulaires : on y ajoute des cartes d'interface selon les besoins, avec redondance de contrôle et d'alimentation.",
      },
      {
        q: "Livrez-vous les routeurs configurés ?",
        a: "Oui. Nous livrons le châssis équipé (cartes IPU, PIC, optiques), testé avant expédition, avec le relevé de configuration. L'intégration et la mise en service peuvent être incluses au devis.",
      },
      {
        q: "Puis-je démarrer avec une configuration réduite et l'étendre plus tard ?",
        a: "Oui : les châssis M8 et M14 acceptent des cartes supplémentaires. On peut démarrer avec les cartes d'interface nécessaires et garder de la place pour la montée en capacité, sous réserve des licences correspondantes.",
      },
    ],
  },
  {
    slug: "switches",
    cat: "Switches",
    label: "Switches Huawei CloudEngine",
    query: "switch Huawei CloudEngine",
    pitch:
      "des switches d'accès et d'agrégation couche 3 pour réseaux d'entreprise, campus et data centers",
    shortNote: "Accès couche 3, uplinks 10GE SFP+.",
    useCases: [
      "Réseau d'accès et d'agrégation de campus (bureaux, usines, hôtels, cliniques)",
      "Stack iStack pour simplifier l'administration de plusieurs étages",
      "Uplinks 10GE SFP+ vers l'agrégation ou le cœur de réseau",
      "Alimentation redondée pour les sites qui ne peuvent pas s'arrêter",
      "Data center d'accès et réseau de vidéosurveillance / VoIP",
    ],
    buying: [
      "Vérifier la densité de ports cuivre nécessaires et le nombre d'uplinks 10GE",
      "Prévoir deux alimentations pour la redondance sur un site critique",
      "Les distances optiques (LR 10 km, SR 300 m) déterminent les modules SFP+ à ajouter",
      "Nos switches sont livrés testés, avec les modules optiques compatibles sur devis",
    ],
    faq: [
      {
        q: "Le S5735-S24T4X suffit-il pour un réseau d'entreprise ?",
        a: "Oui pour la majorité des cas : 24 ports Gigabit cuivre pour les postes, 4 uplinks 10GE SFP+ pour remonter vers l'agrégation, fonctions de routage de couche 3, stack et double alimentation. Pour plus de ports, la gamme S5735 existe en versions 48 ports.",
      },
      {
        q: "Faut-il des modules optiques en plus ?",
        a: "Seulement si vous utilisez les uplinks fibre : comptez un module SFP+ par extrémité de liaison. Nous chiffrons les modules (10G SR/LR) dans le devis selon les distances réelles.",
      },
      {
        q: "Peut-on alimenter des caméras ou des téléphones IP ?",
        a: "Sur un S5735-S24T4X non PoE, non : il faut une version PoE+. Si votre besoin inclut la vidéosurveillance ou la VoIP, précisez-le dans la demande de devis — nous proposons la référence PoE adaptée.",
      },
    ],
  },
  {
    slug: "serveurs",
    cat: "Serveurs",
    label: "Serveurs Huawei FusionServer",
    query: "serveur Huawei FusionServer",
    pitch:
      "des serveurs rack 2U bi-processeur pour virtualisation, bases de données et applications métier",
    shortNote: "Rack 2U bi-Xeon pour virtualisation et données.",
    useCases: [
      "Virtualisation (VMware, KVM, Proxmox) et consolidation de serveurs anciens",
      "Base de données et applications métier (ERP, gestion clinique, GEC)",
      "Serveur de fichiers et sauvegarde avec baies SAS redondées",
      "Hébergement interne d'applications web et d'annuaires",
      "Nœud de calcul de laboratoire, université ou centre de recherche",
    ],
    buying: [
      "Dimensionner par le nombre de cœurs, la RAM et surtout le stockage (baies + contrôleur RAID)",
      "Vérifier la présence de la carte RAID et de sa cache : c'est ce qui fait la fiabilité des données",
      "Un serveur d'occasion datacenter reste pertinent si les disques et la garantie sont fournis",
      "Le devis précise processeurs, mémoire, disques, contrôleur RAID, alimentations et garantie",
    ],
    faq: [
      {
        q: "Une configuration d'occasion est-elle fiable pour un usage professionnel ?",
        a: "Oui si elle est testée et garantie : nous testons la machine (mémoire, disques, contrôleur RAID, alimentations redondantes) et fournissons la configuration exacte dans le devis. C'est le meilleur rapport capacité/prix pour la virtualisation et le stockage.",
      },
      {
        q: "Le serveur est-il livré avec un système d'exploitation ?",
        a: "Le matériel est livré prêt à installer. Selon le projet, nous pouvons installer et configurer l'hyperviseur ou le système (ESXi/Hyper-V/Proxmox/Linux) et la sauvegarde : à préciser dans la demande de devis.",
      },
      {
        q: "Peut-on augmenter la RAM et les disques plus tard ?",
        a: "Oui : les 2288X V5 disposent de 24 emplacements mémoire et de baies 2,5\" hot-swap. Les extensions ultérieures se chiffrent séparément.",
      },
    ],
  },
  {
    slug: "pare-feu",
    cat: "Sécurité & Pare-feu",
    label: "Pare-feu Huawei HiSecEngine",
    query: "pare-feu Huawei USG",
    pitch:
      "des pare-feu nouvelle génération (NGFW) pour le périmètre d'entreprise, les VPN et la segmentation",
    shortNote: "NGFW 1U : 20 Gbit/s, VPN IPsec et SSL.",
    useCases: [
      "Protection du périmètre Internet d'une entreprise ou d'une administration",
      "VPN IPSec site-à-site pour relier plusieurs agences ou un siège et des dépôts",
      "Segmentation du réseau (invités, IoT, postes de travail, serveurs)",
      "SSL VPN pour les collaborateurs en télétravail",
      "Filtrage applicatif et journalisation pour la conformité",
    ],
    buying: [
      "Comparer les débits : débit global, débit IPSec VPN et nombre de sessions simultanées",
      "Le nombre d'interfaces (GE / 10GE SFP+) doit couvrir vos liens WAN et vos zones",
      "Les licences de sécurité (mises à jour de signatures, options) sont distinctes du matériel",
      "Le devis inclut la configuration de base : WAN, zones, règles, VPN, journalisation",
    ],
    faq: [
      {
        q: "Les licences sont-elles obligatoires sur un pare-feu Huawei ?",
        a: "Le matériel fonctionne pour le routage et les politiques de base ; les fonctions de sécurité avancées et leurs mises à jour dépendent de licences. Nous indiquons explicitement dans le devis ce qui est inclus et ce qui reste en option.",
      },
      {
        q: "Peut-on relier plusieurs sites avec ce pare-feu ?",
        a: "Oui : les tunnels IPSec site-à-site relient un siège et ses agences, avec redondance possible sur deux liens WAN. C'est typiquement ce que nous configurons pour les entreprises multi-sites.",
      },
      {
        q: "Quel modèle pour un débit de 1 Gbit/s ?",
        a: "La gamme USG6600E couvre les débits élevés des entreprises et data centers. Le choix se fait sur le débit avec inspection activée, pas sur le débit brut : indiquez le nombre d'utilisateurs, de sites et de liens WAN, et nous dimensionnons.",
      },
    ],
  },
  {
    slug: "optique-wdm",
    cat: "Optique & WDM/OTN",
    label: "Optique & transmission WDM/OTN",
    query: "carte optique WDM OTN Huawei",
    pitch:
      "des cartes et modules optiques pour augmenter la capacité d'un réseau de transport sur fibre existante",
    shortNote: "Cartes WDM/OTN pour châssis OSN Huawei.",
    useCases: [
      "Amplification optique C-band sur un lien WDM/OTN existant",
      "Extension de portée d'une liaison métro ou inter-ville sans régénération",
      "Densification d'un réseau de transport opérateur ou d'un opérateur d'infrastructure",
      "Remplacement de carte défectueuse sur un châssis OSN en production",
      "Spare critique pour réduire le temps d'indisponibilité d'une liaison optique",
    ],
    buying: [
      "Relever précisément la référence de la carte et la fonction (OAU, OBU, OLP, TDCM…)",
      "Vérifier le sous-châssis OSN compatible et le numéro d'emplacement",
      "La plage de gain et la puissance de sortie déterminent les performances du lien",
      "Le devis mentionne la référence exacte, l'état et la garantie de la carte",
    ],
    faq: [
      {
        q: "Comment vérifier la compatibilité d'une carte optique Huawei ?",
        a: "Par la référence (par exemple TN13OAU, TN11OAU1) et la famille de châssis cible : OSN 6800, OSN 8800, OSN 9800. Envoyez-nous une photo de la carte et du châssis : nous confirmons la compatibilité et l'emplacement valide avant devis.",
      },
      {
        q: "Utilisez-vous ce matériel pour d'autres clients télécom ?",
        a: "Ce type de carte équipe les réseaux de transport d'opérateurs et d'opérateurs d'infrastructure. Nous fournissons la carte, sa documentation et, si besoin, l'assistance à la mise en service.",
      },
      {
        q: "Proposez-vous des pièces de rechange en urgence ?",
        a: "Oui : les cartes optiques sont souvent achetées comme spare. Indiquez la référence et la quantité dans la demande de devis, nous confirmons le délai d'expédition vers votre capitale.",
      },
    ],
  },
];

export const BOUTIQUE_FAMILY_SLUGS = BOUTIQUE_FAMILIES.map((f) => f.slug);

const productsOfFamily = (family) => products.filter((p) => p.category === family.cat);

// ---------------------------------------------------------------------------
// Construction des pages
// ---------------------------------------------------------------------------
function buildFamilyPage(family) {
  const list = productsOfFamily(family);
  const path = `/boutique/categorie/${family.slug}`;
  const title = composeTitle(`${family.label} : achat, configurations et devis en Afrique`);
  const description = composeDesc(
    `${family.label} en stock à Dakar. ${family.shortNote}`,
    "Configurations, licences et expédition en Afrique. Devis sous 24 h.",
  );
  return {
    family: "categorie",
    path,
    lang: "fr",
    title,
    description,
    h1: `${family.label} : achat et déploiement en Afrique`,
    overline: `Boutique · ${family.cat}`,
    lead:
      `Fallcon Tech fournit ${family.pitch}. Nos équipements sont testés, livrés configurés ` +
      `depuis Dakar et expédiés dans toute l'Afrique de l'Ouest et centrale, avec devis détaillé ` +
      `(matériel, licences, installation).`,
    quickAnswer: cut(
      `Fallcon Tech (Dakar) fournit ${family.pitch}. Prix sur devis selon la configuration et les ` +
        `licences, avec expédition et accompagnement à l'intégration en Afrique.`,
      340,
    ),
    sections: [
      {
        title: "Pour quels usages ?",
        intro: `Ces équipements correspondent aux projets suivants :`,
        items: family.useCases,
      },
      {
        title: "Comment choisir ?",
        intro: `Les points à cadrer avant de commander :`,
        items: family.buying,
      },
    ],
    faq: family.faq,
    products: list,
    familySlug: family.slug,
    cat: family.cat,
  };
}

function buildCountryPage(country) {
  const path = `/boutique/pays/${country.slug}`;
  const name = shortName(country);
  const prep = country.prep;
  const gen = country.gen;
  const flag = country.flag;

  const title = composeTitle(
    `Fournisseur équipements réseau Huawei ${prep} ${name} : routeurs, switches, pare-feu`,
  );
  const description = composeDesc(
    `Revendeur de matériel réseau Huawei ${prep} ${name} : routeurs NetEngine 8000, switches ` +
      `CloudEngine, pare-feu HiSecEngine, serveurs FusionServer, optique WDM/OTN.`,
    `Devis sous 24 h, expédition vers ${country.capital}.`,
  );

  const delivery = "Expédition depuis Dakar (aérien ou fret routier régional)";
  const pay = `virement bancaire ou mobile money (${country.mobileMoney})`;

  return {
    family: "pays",
    path,
    lang: "fr",
    title,
    description,
    h1: `Équipements réseau Huawei ${prep} ${country.name}`,
    overline: `${flag} ${country.name} · ${country.zone}`,
    lead:
      `Pour les opérateurs, banques, administrations et entreprises ${gen === "de la" ? `de la ${name}` : `${gen} ${name}`}, ` +
      `Fallcon Tech fournit des routeurs Huawei NetEngine 8000, des switches CloudEngine, des pare-feu HiSecEngine, ` +
      `des serveurs FusionServer et du matériel optique WDM/OTN. ` +
      `${country.note}`,
    quickAnswer: cut(
      `Fallcon Tech fournit des équipements réseau Huawei ${prep} ${name} (routeurs, switches, pare-feu, ` +
        `serveurs, optique WDM) : matériel testé, devis sous 24 h, ${delivery.toLowerCase()} vers ${country.capital}, ` +
        `paiement par ${pay}.`,
      340,
    ),
    sections: [
      {
        title: `Ce que nous livrons ${prep} ${name}`,
        intro: `Matériel en stock, configurations confirmées au devis :`,
      },
      {
        title: `Achat, import et règlement ${prep} ${name}`,
        intro: `Modalités pour un achat en toute clarté :`,
        items: [
          `Devis détaillé : matériel, cartes et modules, licences éventuelles, garantie et logistique`,
          `${delivery} vers ${country.capital}${
            country.cities ? ` et les autres villes (${country.cities})` : ""
          }`,
          `Règlement par ${pay} — modalités précisées sur le devis`,
          `Zone ${country.zone} : nous préparons les documents d'exportation nécessaires`,
          `Devise de facturation : ${country.currency}`,
        ],
      },
      {
        title: `Installation, intégration réseau, maintenance et support`,
        intro: `Au-delà du matériel :`,
        items: [
          "Pré-configuration en atelier avant expédition (adressage, VLAN, politique de base, VPN)",
          "Assistance à distance pour la mise en service (accès Internet ou partage d'écran)",
          "Documentation de la configuration livrée",
          "Chiffrage des licences et des options dans le devis, sans surprise",
        ],
      },
    ],
    faq: [
      {
        q: `Livrez-vous du matériel réseau Huawei ${prep} ${name} ?`,
        a: `Oui. Nous expédions depuis Dakar vers ${country.capital} : routeurs NetEngine 8000, switches CloudEngine, pare-feu HiSecEngine, serveurs FusionServer et cartes optiques WDM/OTN. Le délai et le mode d'expédition sont confirmés dans le devis selon le poids et les formalités d'importation.`,
      },
      {
        q: `Peut-on payer en ${country.currency} ?`,
        a: `La facturation peut être établie en ${country.currency} ; le règlement se fait par ${pay}, selon les modalités indiquées sur le devis.`,
      },
      {
        q: `Le matériel est-il livré avec sa garantie ${prep} ${name} ?`,
        a: `Chaque équipement est testé avant expédition et couvert par notre garantie atelier, précisée dans le devis. Les licences Huawei et leur support relèvent du constructeur et sont chiffrées séparément.`,
      },
      {
        q: `Comment obtenir un devis pour ${country.capital} ?`,
        a: `Envoyez la référence recherchée (ou la configuration visée) via la page contact ou WhatsApp. Nous répondons avec le prix, la configuration exacte, le délai et les modalités d'expédition.`,
      },
    ],
    country,
    name,
    products,
  };
}

function buildProductCountryPage(country, product) {
  const path = `/boutique/${country.slug}/${product.slug}`;
  const name = shortName(country);
  const prep = country.prep;
  const flag = country.flag;
  const family = BOUTIQUE_FAMILIES.find((f) => f.cat === product.category) || BOUTIQUE_FAMILIES[0];
  const city = country.capital;

  const title = composeTitle(`${product.name} ${prep} ${name} : devis et livraison à ${city}`);
  const description = composeDesc(
    `${product.seoPitch || product.short}`,
    `Devis sous 24 h, configuration et expédition vers ${city} (${name}).`,
  );

  return {
    family: "produit-pays",
    path,
    lang: "fr",
    title,
    description,
    h1: `${product.name} ${prep} ${name}`,
    overline: `${flag} ${product.category} · ${country.zone}`,
    lead:
      `${product.seoPitch || product.short} Nous livrons ce matériel ${prep} ${name} ` +
      `(${deVille(city)} en priorité), testé, configuré selon votre besoin et accompagné de son ` +
      `relevé de configuration.`,
    quickAnswer: cut(
      `${product.name} disponible ${prep} ${name} chez Fallcon Tech : ${product.seoPitch || product.short} ` +
        `Prix sur devis (configuration, licences et garantie), expédition vers ${city}.`,
      340,
    ),
    sections: [
      {
        title: `Fiche technique et configuration livrée (datasheet)`,
        intro: `Caractéristiques principales du ${product.name} :`,
        items: product.specs,
      },
      {
        title: `Pour quels projets ${prep} ${name} ?`,
        intro: `Usages typiques de ce matériel dans la région :`,
        items: family.useCases.slice(0, 4),
      },
      {
        title: `Devis, licences et livraison à ${city}`,
        intro: `Ce que précise notre devis :`,
        items: [
          `Référence exacte, état et configuration du matériel`,
          `Licences éventuelles (Huawei) et options, indiquées séparément`,
          `Expédition depuis Dakar vers ${city} — mode et délai confirmés au devis`,
          `Règlement par virement bancaire ou mobile money (${country.mobileMoney})`,
          `Garantie atelier et assistance à la mise en service`,
        ],
      },
    ],
    faq: [
      {
        q: `Quel est le prix du ${product.name} ${prep} ${name} ?`,
        a: `Le prix dépend de la configuration livrée (cartes, modules optiques, licences) : il est établi sur devis, sous 24 h, avec la référence exacte. Indiquez la configuration visée et la ville de livraison.`,
      },
      {
        q: `Livrez-vous ce matériel à ${city} ?`,
        a: `Oui, nous expédions depuis Dakar vers ${city} et les autres villes ${country.gen === "de la" ? `de la ${name}` : `${country.gen} ${name}`}${
          country.cities ? ` (${country.cities})` : ""
        }. Le mode d'expédition et le délai sont confirmés dans le devis.`,
      },
      {
        q: `Le matériel arrive-t-il configuré ?`,
        a: `Nous livrons le matériel testé et pré-configuré selon vos informations (adressage, VLAN, politique de sécurité de base). L'installation sur site ou à distance peut être incluse au devis.`,
      },
      {
        q: `Comment se passe le règlement ?`,
        a: `Facturation en ${country.currency} possible ; règlement par virement bancaire ou mobile money (${country.mobileMoney}) selon les modalités précisées sur le devis.`,
      },
    ],
    country,
    name,
    product,
    products,
    familySlug: family.slug,
  };
}

// ---------------------------------------------------------------------------
// Overrides de titres (boucle GSC : réécriture d'une page sans toucher au template)
// ex. { "/boutique/mali/routeur-netengine-8000-m14": { title: "…", description: "…" } }
// ---------------------------------------------------------------------------
export const BOUTIQUE_TITLE_OVERRIDES = {};

const applyOverrides = (page) => {
  const o = BOUTIQUE_TITLE_OVERRIDES[page.path];
  if (!o) return page;
  if (o.title) page.title = o.title;
  if (o.description) page.description = o.description;
  if (o.h1) page.h1 = o.h1;
  return page;
};

// ---------------------------------------------------------------------------
// API publique
// ---------------------------------------------------------------------------
let cache = null;

export function getAllBoutiquePages() {
  if (cache) return cache;
  const familyPages = BOUTIQUE_FAMILIES.map(buildFamilyPage);
  const countryPages = GEO_COUNTRIES.map(buildCountryPage);
  const productCountryPages = GEO_COUNTRIES.flatMap((country) =>
    products.map((product) => buildProductCountryPage(country, product)),
  );
  cache = [...familyPages, ...countryPages, ...productCountryPages, ...getAllBoutiqueEnPages()].map(
    applyOverrides,
  );
  return cache;
}

export function getBoutiquePageByPath(path) {
  return getAllBoutiquePages().find((page) => page.path === path) || null;
}

export function boutiqueSeoForPath(path) {
  const page = getBoutiquePageByPath(path);
  if (!page) return null;
  const priority = page.family === "produit-pays" ? "0.75" : "0.80";
  return {
    path: page.path,
    title: page.title,
    description: page.description,
    canonical: `${SITE_URL}${page.path}`,
    canonicalUrl: `${SITE_URL}${page.path}`,
    canonicalPath: page.path,
    ogImage: page.product?.image
      ? `${SITE_URL}${page.product.image}`
      : "/og-default.jpg",
    robots: "index, follow",
    type: "website",
    lang: page.lang === "en" ? "en" : "fr-SN",
    priority,
    changefreq: "monthly",
  };
}

export const BOUTIQUE_FAMILY_COUNT = BOUTIQUE_FAMILIES.length;
export const BOUTIQUE_COUNTRIES = GEO_COUNTRIES;
export { BOUTIQUE_EN_FAMILIES, BOUTIQUE_EN_COUNTRIES } from "./boutiqueEnData.js";
