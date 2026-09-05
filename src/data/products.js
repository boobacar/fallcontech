// =============================================================================
// CATALOGUE ÉQUIPEMENTS — Fallcon Tech (matériel réel en stock)
// -----------------------------------------------------------------------------
// Page pilotée par ce fichier. Pour ajouter / modifier un matériel :
//   1. Dupliquez un objet ci-dessous.
//   2. Renseignez id, slug, name, category, price, short, specs, image, stock.
//   3. Déposez la photo réelle du matériel dans public/products/ (webp/jpg/png)
//      et pointez `image` vers "/products/<fichier>".
// Ce fichier est importé par la page React ET par les outils sitemap/prerender
// (node), donc il ne doit contenir AUCUN import d'asset Vite — uniquement des
// chemins publics en chaînes.
// =============================================================================
import { SITE_URL } from "./seoData.js";

export const CATEGORIES = [
  "Routeurs",
  "Switches",
  "Serveurs",
  "Sécurité & Pare-feu",
];

export const products = [
  // ---------- Routeurs ----------
  {
    id: "routeur-netengine-8000-m8",
    slug: "routeur-netengine-8000-m8",
    name: "Huawei NetEngine 8000 M8",
    category: "Routeurs",
    price: 2500000,
    priceNote: "à partir de · selon cartes",
    image: "/products/netengine-8000-m8.jpg",
    short:
      "Routeur modulaire de coeur/agrégation pour opérateurs et grands réseaux d'entreprise.",
    specs: [
      "Châssis 3U · 8 emplacements de cartes",
      "Capacité 4,8 Tbit/s · 400 Gbit/s par slot",
      "Cartes 40GE / 10GE incluses",
      "Alimentation & ventilation redondées",
    ],
    stock: "En stock",
    badge: "Opérateur",
    unit: "châssis",
  },
  {
    id: "routeur-netengine-8000-m1a",
    slug: "routeur-netengine-8000-m1a",
    name: "Huawei NetEngine 8000 M1A",
    category: "Routeurs",
    price: 900000,
    priceNote: "à partir de · selon licence",
    image: "/products/netengine-8000-m1a.jpg",
    short:
      "Routeur compact haute densité (1U) pour accès, backhaul et services opérateur.",
    specs: [
      "1U · capacité 352 Gbit/s · 176 G port",
      "Ports 10GE / GE optique & électrique",
      "SRv6, EVPN, horodatage 1588v2",
      "Double alimentation DC",
    ],
    stock: "En stock",
    unit: "unité",
  },
  {
    id: "routeur-netengine-8000-m14",
    slug: "routeur-netengine-8000-m14",
    name: "Huawei NetEngine 8000 M14",
    category: "Routeurs",
    price: 5000000,
    priceNote: "à partir de · selon cartes & licences",
    image: "/products/netengine-8000-m14.jpg",
    short:
      "Routeur de coeur opérateur : très grande capacité, haute disponibilité.",
    specs: [
      "Châssis 5U · 14 emplacements de cartes",
      "Jusqu'à 7,2 Tbit/s · 400 Gbit/s par slot",
      "Jusqu'à 20×100GE / 280 ports physiques",
      "Alimentation 1+1 · ventilateurs 3+1",
    ],
    stock: "En stock",
    badge: "Très haute valeur",
    unit: "châssis",
  },

  // ---------- Switches ----------
  {
    id: "switch-s5735-s24t4x",
    slug: "switch-s5735-s24t4x",
    name: "Huawei S5735-S24T4X",
    category: "Switches",
    price: 360000,
    priceNote: "à partir de",
    image: "/products/huawei-switch-s5735.jpg",
    short:
      "Switch d'accès couche 3 (24× GE + 4× 10GE SFP+) pour réseau d'entreprise.",
    specs: [
      "24× GE (10/100/1000BASE-T)",
      "4× 10GE SFP+ uplink",
      "Fonctions de routage couche 3",
      "2× blocs d'alimentation AC 60 W",
    ],
    stock: "En stock",
    badge: "Disponible",
    unit: "unité",
  },

  // ---------- Serveurs ----------
  {
    id: "serveur-huawei-2288x-v5",
    slug: "serveur-huawei-2288x-v5",
    name: "Huawei 2288X V5 (FusionServer)",
    category: "Serveurs",
    price: 720000,
    priceNote: "à partir de · selon RAM & disques",
    image: "/products/huawei-server-2288x-v5.jpg",
    short:
      "Serveur rack 2U pour applications métier, virtualisation et stockage.",
    specs: [
      "Serveur rack 2U · 24 baies 2,5\"",
      "Support double processeur",
      "Mémoire et stockage évolutifs",
      "Gestion BMC intégrée",
    ],
    stock: "En stock",
    unit: "unité",
  },

  // ---------- Sécurité & Pare-feu ----------
  {
    id: "pare-feu-usg6625e",
    slug: "pare-feu-usg6625e",
    name: "Huawei USG6625E (NGFW)",
    category: "Sécurité & Pare-feu",
    price: 2700000,
    priceNote: "à partir de · hors licences",
    image: "/products/usg6625e.png",
    short:
      "Pare-feu nouvelle génération pour entreprises et data centers.",
    specs: [
      "16× GE RJ45 + 6× GE SFP + 6× 10GE SFP+",
      "20 Gbit/s · 15 Gbit/s IPSec VPN",
      "SSL VPN 100 utilisateurs",
      "Mémoire 16 Go · alimentation AC",
    ],
    stock: "En stock",
    badge: "NGFW",
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
  "Routeurs": "Routeurs de coeur et d'agrégation Huawei NetEngine 8000.",
  "Switches": "Switches d'accès et de distribution pour réseaux d'entreprise.",
  "Serveurs": "Serveurs rack pour applications métier, virtualisation et stockage.",
  "Sécurité & Pare-feu": "Pare-feu nouvelle génération et passerelles de sécurité Huawei.",
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
      `Prix à partir de ${formatFCFA(product.price)}. Livré et installé au Sénégal.`,
    canonical: `${SITE_URL}${path}`,
    priority: "0.85",
    changefreq: "weekly",
  };
}
