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
export const PRICE_LABEL_EN = "Price on request";

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
    seoPitchEn:
      "5U operator core router, up to 7.2 Tbit/s, shipped new and configured.",
    seoPitch:
      "Routeur de cœur opérateur 5U, jusqu'à 7,2 Tbit/s, livré configuré et neuf.",
    slug: "routeur-netengine-8000-m14",
    name: "Huawei NetEngine 8000 M14",
    category: "Routeurs",
    configNote: "Neuf · 2× IPU-1T2-A · 20× 10GbE",
    shortEn:
      "Operator-grade 5U core router shipped fully configured and new: 2 IPU-1T2-A cards, 20 × 10GbE ports and 10G LR optics included.",
    specsEn: [
      "5U chassis · 14 slots · up to 7.2 Tbit/s / 1117 Mpps depending on configuration",
      "2 × IPU-1T2-A cards (1:1 redundancy · 2.4 Tbit/s system switching)",
      "2 × CR5D00LAXF91 PICs: 10 × 10GE/GE SFP+ each → 20 × 10GbE SFP+ ports (MACsec)",
      "3 × SFP+ 10G LR optics included (1310 nm, single-mode, 10 km, LC connector)",
      "2 × redundant AC power supplies · integrated cooling",
      "Grounding kit and M14 accessories included",
      "Condition: new / never used",
      "Huawei licences (10GE RTU, MACsec, SW/SRv6) required for full port activation — quoted separately",
    ],
    configNoteEn: "New · 2× IPU-1T2-A · 20× 10GbE",
    image: "/products/netengine-8000-m14.webp",
    ogImage: "/products/netengine-8000-m14.jpg",
    imgW: 1600,
    imgH: 1067,
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
    seoPitchEn:
      "3U aggregation router (2.4 Tbit/s) for operators and large networks.",
    seoPitch:
      "Routeur d'agrégation 3U (2,4 Tbit/s) pour opérateurs et grands réseaux.",
    slug: "routeur-netengine-8000-m8",
    name: "Huawei NetEngine 8000 M8",
    category: "Routeurs",
    configNote: "Selon cartes & licences",
    shortEn:
      "3U modular core/aggregation router for operators and large enterprise networks.",
    specsEn: [
      "3U chassis · 8 card slots",
      "Switching capacity 2.4 Tbit/s · 453 Mpps",
      "2 × IPU-1T2 cards (control & switching, 1:1 redundancy)",
      "10 × 10GbE SFP+ cards (CR5D00EAGF70) · 40GE/100GE optional",
      "SR, EVPN, FlexE, 1588v2 timing",
      "Redundant 1+1 AC power",
    ],
    configNoteEn: "Depending on cards & licences",
    image: "/products/netengine-8000-m8.webp",
    ogImage: "/products/netengine-8000-m8.jpg",
    imgW: 2560,
    imgH: 823,
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
    badgeEn: "Operator",
    unit: "châssis",
  },
  {
    id: "routeur-netengine-8000-m1a",
    seoPitchEn:
      "Compact 1U high-density router for operator access and backhaul.",
    seoPitch:
      "Routeur compact 1U haute densité pour l'accès et le backhaul opérateur.",
    slug: "routeur-netengine-8000-m1a",
    name: "Huawei NetEngine 8000 M1A",
    category: "Routeurs",
    configNote: "Selon configuration & licences",
    shortEn:
      "Compact 1U high-density router for operator access, backhaul and edge services.",
    specsEn: [
      "Compact 1U · 220 mm depth",
      "Switching capacity up to 352 Gbit/s depending on configuration",
      "10GE / GE optical and electrical interfaces",
      "SRv6, EVPN, FlexE, 1588v2 timing",
      "AC power · 2+1 redundant fans",
    ],
    configNoteEn: "Depending on configuration & licences",
    image: "/products/netengine-8000-m1a.webp",
    ogImage: "/products/netengine-8000-m1a.jpg",
    imgW: 1973,
    imgH: 361,
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
    seoPitchEn:
      "Layer 3 access switch: 24× GE + 4× 10GE SFP+ for enterprises.",
    seoPitch:
      "Switch d'accès couche 3 : 24× GE + 4× 10GE SFP+ pour réseau d'entreprise.",
    slug: "switch-s5735-s24t4x",
    name: "Huawei CloudEngine S5735-S24T4X",
    category: "Switches",
    configNote: "Plusieurs unités disponibles",
    shortEn:
      "Layer 3 access switch (24 × GE + 4 × 10GE SFP+) for enterprise networks.",
    specsEn: [
      "24 × 10/100/1000BASE-T (GE)",
      "4 × 10GE SFP+ uplinks",
      "336 Gbit/s switching · 96 Mpps (Layer 3)",
      "2 × AC/DC power slots (1+1 redundancy)",
      "SEP / ERPS, IPv6, iStack",
      "Several units available — ask us",
    ],
    configNoteEn: "Several units available",
    image: "/products/huawei-switch-s5735.webp",
    ogImage: "/products/huawei-switch-s5735.jpg",
    imgW: 1178,
    imgH: 901,
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
    badgeEn: "Available",
    unit: "unité",
  },

  // ---------- Serveurs ----------
  {
    id: "serveur-huawei-2288x-v5",
    seoPitchEn:
      "Configured 2U dual-Xeon rack server, ready for virtualisation.",
    seoPitch:
      "Serveur rack 2U bi-Xeon configuré, prêt pour la virtualisation et les bases de données.",
    slug: "serveur-huawei-2288x-v5",
    name: "Huawei 2288X V5 (FusionServer Pro)",
    category: "Serveurs",
    configNote: "2× Xeon Silver 4210 · 128 Go · 8× 600 Go",
    shortEn:
      "Configured 2U dual-socket rack server, ready for virtualisation, databases and business applications.",
    specsEn: [
      "2U rack · 2 sockets · 24 × 2.5\" bays",
      "2 × Intel Xeon Silver 4210 (10 cores / 20 threads each)",
      "128 GB DDR4 ECC (original configuration)",
      "8 × 600 GB SAS 10K + Broadcom MegaRAID 9460-8i / SAS3508",
      "2 × 10GbE SFP+ · 2 × 1GbE + 8 × 1GbE onboard",
      "2 × redundant 900 W power supplies",
      "Integrated BMC management (iBMC)",
    ],
    configNoteEn: "2× Xeon Silver 4210 · 128 GB · 8× 600 GB",
    image: "/products/huawei-server-2288x-v5.webp",
    ogImage: "/products/huawei-server-2288x-v5.jpg",
    imgW: 1234,
    imgH: 958,
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
    seoPitchEn:
      "1U NGFW firewall: 20 Gbit/s, 16× GE + 6× 10GE SFP+.",
    seoPitch:
      "Pare-feu NGFW 1U : 20 Gbit/s, 16× GE + 6× 10GE SFP+, 16 Go de mémoire.",
    slug: "pare-feu-usg6625e",
    name: "Huawei USG6625E-AC (HiSecEngine NGFW)",
    category: "Sécurité & Pare-feu",
    configNote: "Hors licences",
    shortEn:
      "Next-generation firewall for enterprises and data centres.",
    specsEn: [
      "16 × GE RJ45 + 6 × GE SFP + 6 × 10GE SFP+",
      "20 Gbit/s throughput · 15 Gbit/s IPsec VPN",
      "SSL VPN for 100 users",
      "16 GB memory · AC power",
      "1U rack mountable",
    ],
    configNoteEn: "Licences excluded",
    image: "/products/usg6625e.webp",
    ogImage: "/products/usg6625e.png",
    imgW: 1440,
    imgH: 1440,
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
    badge: "NEUF",
    badgeEn: "NEW",
    unit: "unité",
  },

  // ---------- Optique & WDM/OTN ----------
  {
    id: "carte-optique-tn13oau",
    seoPitchEn:
      "C-band optical amplifier board for Huawei OSN WDM/OTN networks.",
    seoPitch:
      "Carte amplificateur optique C-band pour réseaux WDM/OTN Huawei OSN.",
    slug: "carte-optique-tn13oau",
    name: "Huawei TN13OAU (OAU1)",
    category: "Optique & WDM/OTN",
    configNote: "À l'unité",
    shortEn:
      "C-band optical amplifier board (EDFA) for Huawei OSN WDM/OTN transport systems.",
    specsEn: [
      "C-band optical amplifier (EDFA) · 1529–1561 nm",
      "Adjustable gain, gain locking, transient control",
      "LC/UPC optical ports (IN / OUT / MON)",
      "Compatible with OptiX OSN 6800 / 8800 / 9800 · occupies 1 slot",
      "Long-haul transmission without electrical regeneration",
    ],
    configNoteEn: "Per unit",
    image: "/products/huawei-tn13oau.webp",
    ogImage: "/products/huawei-tn13oau.jpg",
    imgW: 721,
    imgH: 397,
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
  {
    id: "carte-optique-tn13obu103",
    seoPitchEn:
      "C-band optical booster unit (EDFA) board for Huawei OSN 6800 / 8800 / 9800 WDM networks.",
    seoPitch:
      "Carte amplificateur optique C-band (booster EDFA) pour réseaux WDM Huawei OSN 6800 / 8800 / 9800.",
    slug: "carte-optique-tn13obu103",
    name: "Huawei TN13OBU1 (OBU103)",
    category: "Optique & WDM/OTN",
    configNote: "Neuf · emballage d'origine",
    shortEn:
      "C-band optical booster unit (EDFA) with 23 dB gain and up to 20 dBm output, for Huawei OSN WDM/OTN transport systems.",
    specsEn: [
      "C-band optical booster unit (OBU) · typical gain 23 dB",
      "Maximum output +20 dBm · maximum input −3 dBm",
      "LC/PC optical ports (IN / OUT / MON)",
      "For OptiX OSN 6800 / 8800 / 9800 · occupies 1 slot",
      "Boosts the multiplexed C-band signal at the transmit end of a span, before the line fibre",
      "Huawei reference 03030SVP · board code TN13OBU103",
      "Condition: new, never deployed, original Huawei packaging",
    ],
    configNoteEn: "New · original packaging",
    image: "/products/huawei-tn13obu103.webp",
    ogImage: "/products/huawei-tn13obu103.jpg",
    imgW: 444,
    imgH: 431,
    short:
      "Carte booster optique C-band (EDFA) à gain 23 dB et sortie jusqu'à 20 dBm, pour systèmes de transport WDM/OTN Huawei OSN.",
    specs: [
      "Carte Optical Booster Unit (OBU) C-band · gain typique 23 dB",
      "Sortie maximale +20 dBm · entrée maximale −3 dBm",
      "Ports optiques LC/PC (IN / OUT / MON)",
      "Compatible OptiX OSN 6800 / 8800 / 9800 · occupe 1 slot",
      "Amplifie le signal C-band multiplexé en sortie d'émetteur, avant la fibre de ligne",
      "Référence Huawei 03030SVP · code carte TN13OBU103",
      "État : neuf, jamais déployé, emballage d'origine",
    ],
    stock: "En stock",
    badge: "NEUF",
    badgeEn: "NEW",
    unit: "carte",
  },
  {
    id: "carte-optique-tn12wsmd901",
    seoPitchEn:
      "9-port wavelength selective switch (WSS) board for Huawei OSN ROADM nodes.",
    seoPitch:
      "Carte 9 ports de multiplexage/démultiplexage sélectif en longueur d'onde (WSS) pour nœuds ROADM Huawei OSN.",
    slug: "carte-optique-tn12wsmd901",
    name: "Huawei TN12WSMD901 (WSMD9)",
    category: "Optique & WDM/OTN",
    configNote: "Neuf · carte double slot",
    shortEn:
      "9-port wavelength selective multiplexing/demultiplexing board (WSS, 50 GHz, 80 channels) for Huawei OSN 6800 / 8800 ROADM nodes.",
    specsEn: [
      "9-port wavelength selective mux/demux board (WSS) · double-width, occupies 2 slots",
      "C-band 196.05 – 192.10 THz · 50 GHz channel spacing",
      "80 optical channels · up to 40 add/drop wavelengths",
      "Flexible-grid compatible · per-wavelength attenuation (0–15 dB)",
      "LC/PC optical ports (AM/DM) · in-service optical performance monitoring",
      "For OptiX OSN 6800 / 8800 (T16 / T32 / T64) ROADM nodes",
      "Huawei reference 03030SVJ · board code TN12WSMD901",
      "Condition: new, never deployed, original Huawei packaging",
    ],
    configNoteEn: "New · double-slot board",
    image: "/products/huawei-tn12wsmd901.webp",
    ogImage: "/products/huawei-tn12wsmd901.jpg",
    imgW: 536,
    imgH: 438,
    short:
      "Carte 9 ports de multiplexage/démultiplexage sélectif en longueur d'onde (WSS, 50 GHz, 80 canaux) pour nœuds ROADM Huawei OSN 6800 / 8800.",
    specs: [
      "Carte WSS 9 ports de multiplexage/démultiplexage sélectif · double largeur, occupe 2 slots",
      "Bande C 196,05 – 192,10 THz · espacement de canaux 50 GHz",
      "80 canaux optiques · jusqu'à 40 longueurs d'onde ajoutées/extraites",
      "Compatible grille flexible · atténuation par longueur d'onde (0–15 dB)",
      "Ports optiques LC/PC (AM/DM) · surveillance des performances optiques en service",
      "Pour nœuds ROADM OptiX OSN 6800 / 8800 (T16 / T32 / T64)",
      "Référence Huawei 03030SVJ · code carte TN12WSMD901",
      "État : neuf, jamais déployé, emballage d'origine",
    ],
    stock: "En stock",
    badge: "NEUF",
    badgeEn: "NEW",
    unit: "carte",
  },
  {
    id: "module-optique-osx010n01-sfp",
    seoPitchEn:
      "10G SFP+ 1310 nm 10 km optical transceiver (Huawei OSX010N01) for OSN and enterprise links.",
    seoPitch:
      "Module optique SFP+ 10G 1310 nm 10 km (Huawei OSX010N01) pour liaisons OSN et réseau d'entreprise.",
    slug: "module-optique-osx010n01-sfp",
    name: "Huawei OSX010N01 (SFP+ 10G)",
    category: "Optique & WDM/OTN",
    configNote: "Neuf · à l'unité",
    shortEn:
      "Huawei SFP+ 10G optical transceiver, 1310 nm, 10 km on single-mode fibre (LC duplex), for OSN and enterprise 10G links.",
    specsEn: [
      "SFP+ 10G optical transceiver · 1310 nm",
      "Data rate 8.5 – 11.1 Gbit/s with CDR",
      "Reach 10 km on single-mode fibre · LC duplex",
      "Transmit power −6.0 to −1.0 dBm · sensitivity −14.4 dBm",
      "Digital diagnostics (DDM) · 0 °C to 70 °C",
      "Huawei reference OSX010N01 · 4 units available",
      "Condition: new, never used",
    ],
    configNoteEn: "New · per unit",
    image: "/products/huawei-osx010n01-sfp.webp",
    ogImage: "/products/huawei-osx010n01-sfp.jpg",
    imgW: 400,
    imgH: 368,
    short:
      "Module optique SFP+ 10G Huawei 1310 nm, portée 10 km sur fibre monomode (LC duplex), pour liaisons 10G OSN et réseau d'entreprise.",
    specs: [
      "Module optique SFP+ 10G · 1310 nm",
      "Débit 8,5 – 11,1 Gbit/s avec CDR",
      "Portée 10 km sur fibre monomode · LC duplex",
      "Puissance d'émission −6,0 à −1,0 dBm · sensibilité −14,4 dBm",
      "Diagnostic numérique (DDM) · 0 °C à 70 °C",
      "Référence Huawei OSX010N01 · 4 unités disponibles",
      "État : neuf, jamais utilisé",
    ],
    stock: "En stock",
    badge: "NEUF",
    badgeEn: "NEW",
    unit: "module",
  },
  {
    id: "module-optique-odx0480t1-txfp",
    seoPitchEn:
      "Tunable C-band 10G TXFP transceiver, 40 km DWDM links (Huawei ODX0480T1).",
    seoPitch:
      "Module TXFP 10G accordable bande C, 40 km, pour liaisons DWDM (Huawei ODX0480T1).",
    slug: "module-optique-odx0480t1-txfp",
    name: "Huawei ODX0480T1 (TXFP C-band)",
    category: "Optique & WDM/OTN",
    configNote: "Neuf · à l'unité",
    shortEn:
      "Tunable C-band 10G TXFP optical transceiver for DWDM links up to 40 km, plugging into Huawei OSN line cards.",
    specsEn: [
      "Tunable C-band TXFP optical transceiver · 10G",
      "Data rate 9.95 – 11.3 Gbit/s · 50 GHz grid",
      "Reach 40 km on single-mode fibre · LC duplex",
      "Wavelength tuning range 1529.16 – 1560.61 nm",
      "Transmit power −1 to +2 dBm · sensitivity −16 dBm",
      "Plugs into Huawei OSN 8800 line boards (NS2, ND2, NQ2, NO2)",
      "Huawei reference ODX0480T1 · 3 units available",
      "Condition: new, never used",
    ],
    configNoteEn: "New · per unit",
    image: "/products/huawei-odx0480t1-txfp.webp",
    ogImage: "/products/huawei-odx0480t1-txfp.jpg",
    imgW: 907,
    imgH: 347,
    short:
      "Module optique TXFP 10G accordable bande C pour liaisons DWDM jusqu'à 40 km, à insérer dans les cartes de ligne Huawei OSN.",
    specs: [
      "Module optique TXFP accordable bande C · 10G",
      "Débit 9,95 – 11,3 Gbit/s · grille 50 GHz",
      "Portée 40 km sur fibre monomode · LC duplex",
      "Plage d'accord 1529,16 – 1560,61 nm",
      "Puissance d'émission −1 à +2 dBm · sensibilité −16 dBm",
      "S'insère dans les cartes de ligne Huawei OSN 8800 (NS2, ND2, NQ2, NO2)",
      "Référence Huawei ODX0480T1 · 3 unités disponibles",
      "État : neuf, jamais utilisé",
    ],
    stock: "En stock",
    badge: "NEUF",
    badgeEn: "NEW",
    unit: "module",
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
