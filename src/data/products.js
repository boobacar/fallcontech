// =============================================================================
// CATALOGUE ÉQUIPEMENTS — Fallcon Tech (matériel réel en stock)
// -----------------------------------------------------------------------------
// Page pilotée par ce fichier. Pour ajouter / modifier un matériel :
//   1. Dupliquez un objet ci-dessous.
//   2. Renseignez id, slug, name, category, short, specs, image, stock,
//      configNote (une ligne, SANS MONTANT).
//   3. Déposez la photo réelle du matériel dans public/products/ (webp/jpg/png)
//      et pointez `image` vers "/products/<fichier>".
// Ce fichier est importé par la page React ET par les outils sitemap/prerender
// (node), donc il ne doit contenir AUCUN import d'asset Vite — uniquement des
// chemins publics en chaînes.
//
// ⚠️ AUCUN PRIX N'EST PUBLIÉ : le site affiche « Prix sur devis » et les tarifs
// vivent uniquement dans la grille interne (dépôt public GitHub → tout montant
// committé ici serait public). Grille commerciale : voir
// ~/.hermes/business/fallcontech-grille-prix-interne.md (hors dépôt).
// =============================================================================
import { SITE_URL } from "./seoData.js";

// Libellé affiché à la place du prix (garder le mot « prix » pour le SEO).
export const PRICE_LABEL = "Prix sur devis";

export const CATEGORIES = [
  "Routeurs",
  "Switches",
  "Serveurs",
  "Sécurité & Pare-feu",
  "Optique & WDM/OTN",
];

export const products = [
  // ---------- Routeurs ----------
  {
    id: "routeur-netengine-8000-m14",
    seoPitch:
      "Routeur de cœur opérateur 5U, jusqu'à 7,2 Tbit/s, livré configuré et neuf.",
    slug: "routeur-netengine-8000-m14",
    name: "Huawei NetEngine 8000 M14",
    category: "Routeurs",
    configNote: "Neuf · 2× IPU-1T2-A · 20× 10GbE",
    image: "/products/netengine-8000-m14.jpg",
    short:
      "Routeur de coeur opérateur 5U livré configuré et neuf : 2 cartes IPU-1T2-A, 2 PIC 20 ports 10GbE au total, optiques 10G LR incluses.",
    specs: [
      "Châssis 5U · 14 emplacements · capacité jusqu'à 7,2 Tbit/s / 1117 Mpps selon configuration",
      "2× cartes IPU-1T2-A (redondance 1:1 · commutation système 2,4 Tbit/s)",
      "2× PIC CR5D00LAXF91 : 10× 10GE/GE SFP+ chacune → 20 ports 10GbE SFP+ (MACsec)",
      "3× optiques SFP+ 10G LR incluses (1310 nm, monomode, 10 km, connecteur LC)",
      "2× alimentation AC redondante · ventilation intégrée",
      "Kit de mise à la terre + accessoires M14 livrés",
      "État : neuf / jamais utilisé",
      "Licences Huawei (RTU 10GE, MACsec, logiciels SW/SRv6) requises pour l'activation complète des ports — chiffrées au devis",
    ],
    stock: "En stock",
    badge: "Neuf",
    unit: "châssis configuré",
  },
  {
    id: "routeur-netengine-8000-m8",
    seoPitch:
      "Routeur d'agrégation 3U (2,4 Tbit/s) pour opérateurs et grands réseaux.",
    slug: "routeur-netengine-8000-m8",
    name: "Huawei NetEngine 8000 M8",
    category: "Routeurs",
    configNote: "Selon cartes & licences",
    image: "/products/netengine-8000-m8.jpg",
    short:
      "Routeur modulaire de coeur/agrégation 3U pour opérateurs et grands réseaux d'entreprise.",
    specs: [
      "Châssis 3U · 8 emplacements de cartes",
      "Capacité de commutation 2,4 Tbit/s · 453 Mpps",
      "2× cartes IPU-1T2 (contrôle & commutation, redondance 1:1)",
      "Cartes 10×10GbE SFP+ (CR5D00EAGF70) · 40GE/100GE en option",
      "SR, EVPN, FlexE, horodatage 1588v2",
      "Alimentation AC redondante 1+1",
    ],
    stock: "En stock",
    badge: "Opérateur",
    unit: "châssis",
  },
  {
    id: "routeur-netengine-8000-m1a",
    seoPitch:
      "Routeur compact 1U haute densité pour l'accès et le backhaul opérateur.",
    slug: "routeur-netengine-8000-m1a",
    name: "Huawei NetEngine 8000 M1A",
    category: "Routeurs",
    configNote: "Selon configuration & licences",
    image: "/products/netengine-8000-m1a.jpg",
    short:
      "Routeur compact haute densité (1U) pour accès, backhaul et services opérateur.",
    specs: [
      "1U compact · profondeur 220 mm",
      "Capacité de commutation jusqu'à 352 Gbit/s selon configuration",
      "Interfaces 10GE / GE optiques et électriques",
      "SRv6, EVPN, FlexE, horodatage 1588v2",
      "Alimentation AC · ventilateurs redondés 2+1",
    ],
    stock: "En stock",
    unit: "unité",
  },

  // ---------- Switches ----------
  {
    id: "switch-s5735-s24t4x",
    seoPitch:
      "Switch d'accès couche 3 : 24× GE + 4× 10GE SFP+ pour réseau d'entreprise.",
    slug: "switch-s5735-s24t4x",
    name: "Huawei CloudEngine S5735-S24T4X",
    category: "Switches",
    configNote: "Plusieurs unités disponibles",
    image: "/products/huawei-switch-s5735.jpg",
    short:
      "Switch d'accès couche 3 (24× GE + 4× 10GE SFP+) pour réseau d'entreprise.",
    specs: [
      "24× 10/100/1000BASE-T (GE)",
      "4× 10GE SFP+ uplink",
      "Commutation 336 Gbit/s · 96 Mpps (couche 3)",
      "2× emplacements d'alimentation AC/DC (redondance 1+1)",
      "SEP / ERPS, IPv6, stack iStack",
      "Plusieurs unités disponibles — nous consulter",
    ],
    stock: "En stock",
    badge: "Disponible",
    unit: "unité",
  },

  // ---------- Serveurs ----------
  {
    id: "serveur-huawei-2288x-v5",
    seoPitch:
      "Serveur rack 2U bi-Xeon configuré, prêt pour la virtualisation et les bases de données.",
    slug: "serveur-huawei-2288x-v5",
    name: "Huawei 2288X V5 (FusionServer Pro)",
    category: "Serveurs",
    configNote: "2× Xeon Silver 4210 · 128 Go · 8× 600 Go",
    image: "/products/huawei-server-2288x-v5.jpg",
    short:
      "Serveur rack 2U bi-processeur configuré, prêt pour virtualisation, base de données et applications métier.",
    specs: [
      "Rack 2U · 2 sockets · 24 baies 2,5\"",
      "2× Intel Xeon Silver 4210 (10 cœurs / 20 threads chacun)",
      "128 Go DDR4 ECC (configuration d'origine)",
      "8× 600 Go SAS 10K + RAID Broadcom MegaRAID 9460-8i / SAS3508",
      "2× 10GbE SFP+ · 2× 1GbE + 8× 1GbE intégrés",
      "2× alimentations 900 W redondantes",
      "Gestion BMC intégrée (iBMC)",
    ],
    stock: "En stock",
    unit: "unité",
  },

  // ---------- Sécurité & Pare-feu ----------
  {
    id: "pare-feu-usg6625e",
    seoPitch:
      "Pare-feu NGFW 1U : 20 Gbit/s, 16× GE + 6× 10GE SFP+, 16 Go de mémoire.",
    slug: "pare-feu-usg6625e",
    name: "Huawei USG6625E-AC (HiSecEngine NGFW)",
    category: "Sécurité & Pare-feu",
    configNote: "Hors licences",
    image: "/products/usg6625e.png",
    short:
      "Pare-feu nouvelle génération pour entreprises et data centers.",
    specs: [
      "16× GE RJ45 + 6× GE SFP + 6× 10GE SFP+",
      "Débit 20 Gbit/s · 15 Gbit/s IPSec VPN",
      "SSL VPN 100 utilisateurs",
      "16 Go de mémoire · alimentation AC",
      "1U rackable",
    ],
    stock: "En stock",
    badge: "NGFW",
    unit: "unité",
  },

  // ---------- Optique & WDM/OTN ----------
  {
    id: "carte-optique-tn13oau",
    seoPitch:
      "Carte amplificateur optique C-band pour réseaux WDM/OTN Huawei OSN.",
    slug: "carte-optique-tn13oau",
    name: "Huawei TN13OAU (OAU1)",
    category: "Optique & WDM/OTN",
    configNote: "À l'unité",
    image: "/products/huawei-tn13oau.jpg",
    short:
      "Carte amplificateur optique C-band (EDFA) pour systèmes de transport WDM/OTN Huawei OSN.",
    specs: [
      "Amplificateur optique C-band (EDFA) · 1529–1561 nm",
      "Gain ajustable, verrouillage de gain, contrôle des transitoires",
      "Ports optiques LC/UPC (IN / OUT / MON)",
      "Compatible OptiX OSN 6800 / 8800 / 9800 · occupe 1 slot",
      "Transmission longue distance sans régénération électrique",
    ],
    stock: "En stock",
    badge: "WDM/OTN",
    unit: "carte",
  },
];

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug);

export const CATEGORY_META = {
  "Routeurs": "Routeurs de coeur et d'agrégation Huawei NetEngine 8000.",
  "Switches": "Switches d'accès et de distribution pour réseaux d'entreprise.",
  "Serveurs": "Serveurs rack pour applications métier, virtualisation et stockage.",
  "Sécurité & Pare-feu": "Pare-feu nouvelle génération et passerelles de sécurité Huawei.",
  "Optique & WDM/OTN": "Cartes et modules optiques pour réseaux de transport WDM/OTN (Huawei OSN).",
};

// --- Pour le sitemap + prerender (outils node) ---
export const getAllProductPages = () => products.map((p) => ({ path: `/boutique/${p.slug}` }));

export function productSeoForPath(path) {
  const product = products.find((p) => `/boutique/${p.slug}` === path);
  if (!product) return null;
  return {
    path,
    title: `${product.name} — ${product.category} à Dakar | Fallcon Tech`,
    description:
      `${product.name} : ${product.short} ` +
      `Prix sur devis selon configuration, licences et installation — livré et installé au Sénégal.`,
    canonical: `${SITE_URL}${path}`,
    priority: "0.85",
    changefreq: "weekly",
  };
}
