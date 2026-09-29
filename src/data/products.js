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
      "New 5U operator core router (NetEngine 8000 M14): 2 × IPU-1T2-A, 20 × 10GbE SFP+ with 10G LR optics included, up to 7.2 Tbit/s.",
    seoPitch:
      "Routeur de cœur opérateur 5U neuf (NetEngine 8000 M14) : 2× IPU-1T2-A, 20 ports 10GbE SFP+ avec optiques 10G LR incluses, jusqu'à 7,2 Tbit/s.",
    slug: "routeur-netengine-8000-m14",
    name: "Huawei NetEngine 8000 M14",
    category: "Routeurs",
    model: "NetEngine 8000 M14",
    configNote: "Neuf · 2× IPU-1T2-A · 20× 10GbE",
    configNoteEn: "New · 2× IPU-1T2-A · 20× 10GbE",
    seoTitle: "Routeur Huawei NetEngine 8000 M14 neuf à Dakar | Fallcon Tech",
    seoDescription:
      "Routeur NetEngine 8000 M14 neuf (5U) : 2× IPU-1T2-A, 20× 10GbE SFP+, optiques 10G LR incluses, jusqu'à 7,2 Tbit/s. 1 unité en stock à Dakar, devis sous 24 h.",
    shortEn:
      "New 5U operator core router shipped configured: 2 IPU-1T2-A cards, 2 PICs giving 20 × 10GbE SFP+ ports, 3 × 10G LR optics included, up to 7.2 Tbit/s.",
    short:
      "Routeur de cœur opérateur 5U livré configuré et neuf : 2 cartes IPU-1T2-A, 2 PIC pour 20 ports 10GbE SFP+ au total, optiques 10G LR incluses, jusqu'à 7,2 Tbit/s. 1 unité en stock à Dakar.",
    imageAlt:
      "Routeur Huawei NetEngine 8000 M14 (châssis 5U, 20 ports 10GbE SFP+) neuf en stock à Dakar",
    specsEn: [
      "5U chassis · 14 slots · up to 7.2 Tbit/s / 1117 Mpps depending on configuration",
      "2 × IPU-1T2-A cards (1:1 redundancy · 2.4 Tbit/s system switching)",
      "2 × CR5D00LAXF91 PICs: 10 × 10GE/GE SFP+ each → 20 × 10GbE SFP+ ports (MACsec)",
      "3 × SFP+ 10G LR optics included (1310 nm, single-mode, 10 km, LC connector)",
      "2 × redundant AC power supplies · integrated cooling",
      "Grounding kit and M14 accessories included",
      "Condition: new, never put into service, original packaging",
      "Huawei licences (10GE RTU, MACsec, SW/SRv6) tied to the serial number — quoted separately",
    ],
    image: "/products/netengine-8000-m14.webp",
    ogImage: "/products/netengine-8000-m14.jpg",
    imgW: 1600,
    imgH: 1067,
    specs: [
      "Châssis 5U · 14 emplacements · capacité jusqu'à 7,2 Tbit/s / 1117 Mpps selon configuration",
      "2× cartes IPU-1T2-A (redondance 1:1 · commutation système 2,4 Tbit/s)",
      "2× PIC CR5D00LAXF91 : 10× 10GE/GE SFP+ chacune → 20 ports 10GbE SFP+ (MACsec)",
      "3× optiques SFP+ 10G LR incluses (1310 nm, monomode, 10 km, connecteur LC)",
      "2× alimentation AC redondante · ventilation intégrée",
      "Kit de mise à la terre + accessoires M14 livrés",
      "État : neuf, jamais mis en service, emballage d'origine",
      "Licences Huawei (RTU 10GE, MACsec, SW/SRv6) attachées au numéro de série — chiffrées au devis",
    ],
    techSpecs: [
      { k: "Modèle", v: "Huawei NetEngine 8000 M14 (routeur de cœur opérateur 5U)" },
      { k: "Famille logicielle", v: "Huawei VRP V800 — même base que les M8 et M1A" },
      { k: "Format", v: "5U rackable · 14 emplacements de cartes" },
      { k: "Capacité", v: "Jusqu'à 7,2 Tbit/s et 1117 Mpps selon la configuration installée" },
      { k: "Cartes de contrôle et commutation", v: "2× IPU-1T2-A en redondance 1:1 · commutation système 2,4 Tbit/s" },
      { k: "Interfaces fournies", v: "2× PIC CR5D00LAXF91 → 20 ports 10GE/GE SFP+ avec MACsec" },
      { k: "Optiques incluses", v: "3× SFP+ 10G LR (1310 nm, monomode, 10 km, LC duplex)" },
      { k: "Routage et transport", v: "IPv4/IPv6, MPLS L2VPN/L3VPN, EVPN, SR et SRv6, FlexE" },
      { k: "Synchronisation", v: "1588v2 (PTP) et SyncE" },
      { k: "Alimentation", v: "2× alimentations AC redondantes fournies · ventilation intégrée et redondée" },
      { k: "Livré avec", v: "Kit de mise à la terre, cordons d'alimentation et accessoires M14" },
      { k: "Licences", v: "RTU 10GE, MACsec et fonctions logicielles (SW/SRv6) attachées au numéro de série" },
      { k: "État", v: "Neuf, jamais mis en service, emballage d'origine" },
      { k: "Quantité disponible", v: "1 châssis configuré, en stock à Dakar" },
    ],
    longIntro: [
      "Le Huawei NetEngine 8000 M14 est un routeur de cœur 5U destiné aux opérateurs, aux fournisseurs d'accès et aux réseaux d'infrastructure : agrégation de sites multiples, transport métropolitain, interconnexion de points de présence. Avec 14 emplacements et jusqu'à 7,2 Tbit/s de capacité selon la configuration, il tient la charge d'un point de présence complet sans multiplier les châssis.",
      "L'unité disponible est livrée configurée et prête à exploiter : deux cartes IPU-1T2-A en redondance 1:1 (commutation système 2,4 Tbit/s) et deux cartes PIC CR5D00LAXF91 qui offrent 20 ports 10GE/GE SFP+ avec MACsec, plus trois optiques 10G LR déjà fournies. Deux alimentations AC redondantes et la ventilation intégrée sont incluses, ainsi que le kit de mise à la terre.",
      "Elle n'a jamais été mise en service et reste dans son emballage d'origine. Comme sur tous les NetEngine, les licences RTU Huawei (capacité 10GE, MACsec, fonctions logicielles SRv6) sont attachées au numéro de série du châssis : nous chiffrons au devis celles dont votre réseau a réellement besoin, et nous pouvons faire vérifier par un partenaire Huawei agréé ce qui est déjà activé.",
    ],
    useCases: [
      "Point de présence opérateur ou FAI : agrégation de liens 10GE et redistribution vers le backbone",
      "Cœur de réseau d'infrastructure multi-sites (transport métro, interconnexion de datacentres)",
      "Routeur de bordure pour une entreprise ou un opérateur d'infrastructure avec besoins MPLS et EVPN",
      "Équipement de secours (spare) pour un réseau de transport en production : disponibilité immédiate",
      "Plateforme d'essai et de formation pour une équipe réseau travaillant sur SRv6, EVPN et FlexE",
      "Remplacement d'un châssis en fin de support sans changer de famille logicielle (VRP V800)",
    ],
    buying: [
      "Dimensionner sur la capacité et le nombre de cartes réellement nécessaires aujourd'hui, pas sur le maximum théorique",
      "Vérifier les licences attendues (RTU 10GE, MACsec, SRv6) : elles sont attachées au numéro de série du châssis",
      "Anticiper les optiques selon les distances réelles des liens (LR 10 km, ER 40 km) et les cordons fibre",
      "Prévoir la baie et l'alimentation — 5U et deux alimentations AC redondantes",
      "Confirmer la compatibilité logicielle avec votre exploitation actuelle : migration accompagnée possible",
    ],
    included: [
      "Châssis 5U neuf avec 2× IPU-1T2-A et 2× PIC CR5D00LAXF91 installées (20 ports 10GbE SFP+)",
      "2× alimentations AC redondantes, ventilation intégrée et kit de mise à la terre",
      "3× optiques SFP+ 10G LR (1310 nm, monomode, 10 km)",
      "Logiciel de base installé et configuration de démarrage (interfaces, routage, supervision)",
      "Test de fonctionnement et relevé du numéro de série avant expédition",
      "Garantie atelier depuis Dakar, durée précisée au devis",
    ],
    options: [
      "Licences RTU 10GE et MACsec attachées au numéro de série",
      "Licences de fonctions logicielles (SR, SRv6, EVPN, FlexE) selon le besoin",
      "Optiques supplémentaires 10GE (LR, ER) et cordons fibre adaptés à vos distances",
      "Cartes d'interface supplémentaires (débits et ports à préciser) et cartes de rechange",
      "Mise en service sur site ou assistance à distance pendant la migration",
      "Configuration avancée : EVPN multi-site, SRv6, 1588v2, télémétrie en service",
    ],
    licenceNote:
      "Les licences Huawei sont attachées au numéro de série du châssis et ne se transfèrent pas d'un équipement à l'autre. Le devis détaille séparément le matériel, les optiques et les licences réellement nécessaires — vous ne payez que la capacité que vous utilisez.",
    faq: [
      {
        q: "Le châssis est-il livré complet et configuré ?",
        a: "Oui : deux cartes IPU-1T2-A en redondance 1:1, deux cartes PIC CR5D00LAXF91 (20 ports 10GE/GE SFP+ avec MACsec), deux alimentations AC redondantes, le kit de mise à la terre et trois optiques 10G LR. La configuration de démarrage (interfaces, routage, supervision) est réalisée avant expédition.",
      },
      {
        q: "Quelles licences sont nécessaires pour utiliser les 20 ports 10GE ?",
        a: "Les ports fonctionnent dès la livraison, mais la pleine capacité 10GE et les fonctions avancées (MACsec, SRv6, EVPN) dépendent de licences RTU Huawei attachées au numéro de série. Indiquez-nous l'usage prévu : le devis chiffre séparément les licences réellement utiles, et nous pouvons faire vérifier par un partenaire Huawei agréé ce qui est déjà activé sur le châssis.",
      },
      {
        q: "Le matériel est-il neuf ? Quelle garantie s'applique ?",
        a: "Le châssis est neuf et n'a jamais été mis en service, dans son emballage d'origine. Il est testé avant expédition et livré avec notre garantie atelier depuis Dakar (durée précisée au devis). La garantie constructeur Huawei n'étant pas transférable à un tiers, nous l'assumons nous-mêmes.",
      },
      {
        q: "Ce routeur convient-il à un réseau d'entreprise, ou seulement à un opérateur ?",
        a: "Il est né pour les réseaux d'opérateurs et d'infrastructure, mais une banque, un groupe multi-sites, un hébergeur ou une administration avec plusieurs points de présence y trouvent la même valeur : 20 ports 10GE, MPLS/EVPN, redondance et synchronisation 1588v2. Nous dimensionnons selon votre trafic réel.",
      },
      {
        q: "Peut-on le voir fonctionner avant d'acheter ?",
        a: "Oui, sur rendez-vous à Dakar : mise sous tension, version logicielle, état des cartes et des ports, configuration de démonstration. Pour un acheteur hors du Sénégal, nous envoyons photos, références, numéro de série et relevé de test avant expédition.",
      },
      {
        q: "Comment se passe la livraison d'un châssis 5U ?",
        a: "Enlèvement à Dakar, ou expédition vers l'Afrique de l'Ouest et centrale avec un emballage adapté au poids et au volume (châssis 5U). Le mode d'expédition et les formalités d'importation sont précisés dans le devis ; la configuration peut être finalisée à distance à la mise en service.",
      },
    ],
    stockNote:
      "1 châssis configuré en stock à Dakar — 20 ports 10GbE SFP+ et 3 optiques 10G LR incluses.",
    condition: "Neuf, jamais mis en service · garantie atelier",
    stock: "En stock",
    badge: "NEUF",
    badgeEn: "NEW",
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
      "New 1U carrier router (NetEngine 8000 M1A): up to 352 Gbit/s, 10GE SFP+, SRv6 and EVPN — eleven units in stock in Dakar.",
    seoPitch:
      "Routeur opérateur 1U neuf (NetEngine 8000 M1A) : jusqu'à 352 Gbit/s, 10GE SFP+, SRv6 et EVPN — 11 unités en stock à Dakar.",
    slug: "routeur-netengine-8000-m1a",
    name: "Huawei NetEngine 8000 M1A",
    category: "Routeurs",
    model: "NetEngine 8000 M1A",
    configNote: "Neuf · hors licences RTU",
    configNoteEn: "New · RTU licences excluded",
    seoTitle: "Routeur Huawei NetEngine 8000 M1A neuf à Dakar | Fallcon Tech",
    seoDescription:
      "Routeur Huawei NetEngine 8000 M1A neuf, jamais mis en service : jusqu'à 352 Gbit/s, 10GE SFP+, SRv6/EVPN, 1588v2. 11 unités en stock à Dakar, devis sous 24 h.",
    shortEn:
      "New 1U carrier router, never put into service: up to 352 Gbit/s, 10GE SFP+ and GE interfaces, SRv6, EVPN, FlexE and 1588v2 timing. Eleven units in stock in Dakar.",
    short:
      "Routeur opérateur compact 1U neuf, jamais mis en service : jusqu'à 352 Gbit/s, interfaces 10GE SFP+ et GE, SRv6, EVPN, FlexE et horodatage 1588v2. 11 unités en stock à Dakar.",
    imageAlt:
      "Routeur Huawei NetEngine 8000 M1A (1U, 10GE SFP+) neuf en stock à Dakar",
    specsEn: [
      "Compact 1U chassis · 442 × 220 × 44.5 mm · 4.5 kg (5.8 kg boxed)",
      "Switching capacity up to 352 Gbit/s · 72 Mpps",
      "Interfaces: up to 16 × 10GE SFP+, plus GE optical (SFP) and copper (RJ45) depending on configuration",
      "SRv6, EVPN, FlexE, Port Slicing, in-service telemetry and 1588v2 timing",
      "AC power 100–240 V (≈ 75 W) · 2+1 hot-swappable redundant fans",
      "Eleven new units built in June 2021, never put into service, original packaging",
      "Huawei RTU licences tied to the serial number — quoted separately",
    ],
    specs: [
      "Châssis 1U compact · 442 × 220 × 44,5 mm · 4,5 kg (5,8 kg emballé)",
      "Capacité de commutation jusqu'à 352 Gbit/s · 72 Mpps",
      "Interfaces : jusqu'à 16× 10GE SFP+, plus GE optiques (SFP) et cuivre (RJ45) selon la configuration",
      "SRv6, EVPN, FlexE, Port Slicing, télémétrie en service et horodatage 1588v2",
      "Alimentation AC 100–240 V (≈ 75 W) · ventilateurs redondants 2+1 remplaçables à chaud",
      "11 unités neuves fabriquées en juin 2021, jamais mises en service, emballage d'origine",
      "Licences RTU Huawei attachées au numéro de série — chiffrées séparément au devis",
    ],
    techSpecs: [
      { k: "Modèle", v: "Huawei NetEngine 8000 M1A (routeur opérateur 1U)" },
      { k: "Famille logicielle", v: "Huawei VRP V800 — même base que les M8 et M14" },
      { k: "Format", v: "1U rackable · 442 × 220 × 44,5 mm (profondeur 220 mm)" },
      { k: "Poids", v: "4,5 kg · 5,8 kg emballé" },
      { k: "Capacité de commutation", v: "Jusqu'à 352 Gbit/s selon la configuration" },
      { k: "Débit de paquets", v: "72 Mpps" },
      { k: "Interfaces (selon configuration)", v: "Jusqu'à 16× 10GE SFP+ · GE optiques (SFP) · GE cuivre (RJ45) — configuration exacte confirmée par unité au devis" },
      { k: "Routage et transport", v: "IPv4/IPv6, MPLS L2VPN/L3VPN, EVPN, SRv6, FlexE, Port Slicing" },
      { k: "Synchronisation", v: "1588v2 (PTP) et SyncE pour les services mobiles et la voix" },
      { k: "Exploitation", v: "Télémétrie en service, supervision, gestion CLI et NMS Huawei" },
      { k: "Alimentation", v: "AC 100–240 V · 1,5 A · sortie 170 W · prise C13 (≈ 75 W en service)" },
      { k: "Refroidissement", v: "Ventilateurs redondants 2+1, remplaçables à chaud" },
      { k: "Fiabilité", v: "MTBF ≈ 36 ans · MTTR 2 h · disponibilité 99,999 %" },
      { k: "Licences", v: "RTU Huawei attachées au numéro de série (capacité 10GE, fonctions logicielles)" },
      { k: "Fabrication", v: "Juin 2021" },
      { k: "État", v: "Neuf, jamais mis en service — cartons d'origine marqués par le stockage, matériel intact" },
      { k: "Quantité disponible", v: "11 unités à Dakar (à l'unité, par lot de 10 ou lot complet)" },
      { k: "Usages typiques", v: "Accès et agrégation opérateur, backhaul, collecte multi-sites, transport métro, laboratoire" },
    ],
    longIntro: [
      "Le Huawei NetEngine 8000 M1A est un routeur opérateur compact de 1U, conçu pour l'accès, l'agrégation et le backhaul : collecte de sites mobiles, raccordement d'entreprises, transport métropolitain sur fibre existante. Avec 220 mm de profondeur seulement, il s'installe dans les armoires les plus contraintes — y compris chez un client final — tout en délivrant jusqu'à 352 Gbit/s de capacité de commutation et 72 Mpps.",
      "Il fait tourner la même famille logicielle que les NetEngine 8000 M8 et M14 (VRP V800) : routage IPv4/IPv6, MPLS L2VPN et L3VPN, EVPN, SRv6, FlexE et Port Slicing, avec synchronisation 1588v2 et SyncE pour les services qui dépendent du temps (mobile, voix, télémesure). C'est le routeur qu'un opérateur, un FAI ou une entreprise multi-sites utilise pour tenir un réseau propre sans empiler des équipements d'entrée de gamme.",
      "Les 11 unités disponibles sont neuves et n'ont jamais été mises en service : fabriquées en juin 2021, stockées depuis dans leur emballage d'origine (cartons marqués par le stockage, le matériel lui-même est intact). Chaque unité est testée avant expédition et livrée avec sa configuration de base (interfaces, adressage, routage, supervision). Les licences RTU Huawei sont attachées au numéro de série : nous chiffrons séparément celles dont votre usage a réellement besoin.",
    ],
    useCases: [
      "Accès et agrégation d'un réseau opérateur ou FAI : collecte de sites radio et fibre, backhaul mobile",
      "Cœur de réseau d'entreprise multi-sites (agences, campus, usines) avec EVPN et segmentation des flux",
      "Interconnexion d'opérateurs et transport métropolitain en 10GE sur la fibre déjà déployée",
      "Remplacement de routeurs en fin de support sur un réseau en production (même famille logicielle V800)",
      "Laboratoire, formation technique et banc d'essai SRv6 / EVPN / MPLS pour vos équipes",
      "Spare critique de réseau de transport : disponibilité immédiate, sans délai d'importation",
    ],
    buying: [
      "Compter les interfaces à l'échelle du site : 10GE SFP+ pour les liens, GE pour le cuivre et la gestion",
      "Préciser les fonctions attendues (capacité 10GE, EVPN, SRv6, FlexE) : les RTU Huawei sont attachées au numéro de série",
      "Vérifier la compatibilité avec votre réseau existant (base V800, montée de version via Huawei)",
      "Prévoir les optiques adaptées à la distance réelle (LR 10 km, ER 40 km) et les cordons fibre",
      "Pour un lot, les unités partent ensemble de Dakar : enlèvement sur place ou expédition et formalités selon le pays",
    ],
    included: [
      "Châssis 1U neuf avec alimentation AC, ventilateurs redondants 2+1 et cordon d'alimentation C13",
      "Logiciel de base installé : routage IP/MPLS, OSPF, BGP, IS-IS, L2VPN, QoS",
      "Configuration de base réalisée par nos soins (interfaces, adressage, routage, supervision)",
      "Test de fonctionnement et relevé des numéros de série avant expédition",
      "Accompagnement à la mise en service et à l'intégration dans votre réseau",
      "Garantie atelier depuis Dakar, durée précisée au devis",
    ],
    options: [
      "Licences RTU 10GE attachées au numéro de série (activation des ports à pleine capacité)",
      "Licences de fonctions logicielles (EVPN, SRv6, FlexE, Port Slicing) selon le besoin réel",
      "Modules optiques 10GE SFP+ (LR 10 km, ER 40 km) et cordons fibre",
      "Cartes d'extension et alimentations de rechange supplémentaires",
      "Mise en service sur site ou assistance à distance pendant votre migration",
      "Configuration avancée : EVPN multi-site, SRv6, 1588v2, télémétrie en service",
    ],
    licenceNote:
      "Les licences Huawei sont attachées au numéro de série de chaque châssis et ne se transfèrent pas d'une machine à l'autre. Nous chiffrons séparément, au devis, les RTU réellement nécessaires à votre usage — et nous pouvons faire vérifier par un partenaire Huawei agréé ce qui est déjà activé sur les unités qui vous intéressent.",
    faq: [
      {
        q: "Combien de NetEngine 8000 M1A sont disponibles et à quel prix ?",
        a: "Onze unités sont en stock à Dakar, neuves et jamais mises en service : disponibles à l'unité, par lot de 10 ou en lot complet. Le prix est établi sur devis selon la quantité, les licences RTU et les optiques — réponse sous 24 h, avec la référence et le numéro de série de chaque unité proposée.",
      },
      {
        q: "Le matériel est-il neuf et quelle garantie s'applique ?",
        a: "Les unités ont été fabriquées en juin 2021 et n'ont jamais été mises en service. Elles sont livrées dans leur emballage d'origine (cartons marqués par plusieurs années de stockage, le matériel lui-même est intact), testées avant expédition, avec notre garantie atelier depuis Dakar dont la durée est précisée au devis. La garantie constructeur Huawei n'étant pas transférable à un tiers, c'est nous qui l'assumons directement.",
      },
      {
        q: "Quelles licences faut-il prévoir, et sont-elles obligatoires ?",
        a: "Le châssis fonctionne dès la livraison pour le routage, le MPLS et la configuration de base. Les licences RTU Huawei, attachées au numéro de série, couvrent la capacité 10GE et certaines fonctions logicielles (EVPN, SRv6, FlexE, Port Slicing). Nous indiquons dans le devis, ligne par ligne, ce qui est inclus et ce qui reste à activer — sans surprise après la livraison.",
      },
      {
        q: "Quelle est la configuration d'interfaces exacte des unités ?",
        a: "Le M1A existe en plusieurs variantes d'interfaces 10GE, GE optiques et GE cuivre. Indiquez-nous vos besoins (nombre de liens 10GE, distance, cuivre ou fibre) et nous confirmons, au devis, la configuration exacte de l'unité proposée, avec sa référence et son numéro de série.",
      },
      {
        q: "D'où vient ce matériel et puis-je vérifier avant d'acheter ?",
        a: "Il provient d'un lot livré au Sénégal en 2021 et jamais déployé. Nous fournissons les références, les numéros de série et les documents de livraison (liste de colisage Huawei) pour vérification avant achat, et nous pouvons allumer une unité sur rendez-vous à Dakar : version logicielle, état des interfaces et configuration de démonstration.",
      },
      {
        q: "Qui utilise ce type de routeur ?",
        a: "Les opérateurs et fournisseurs d'accès (collecte de sites, backhaul), les entreprises multi-sites et les opérateurs d'infrastructure (transport métro, interconnexion). C'est aussi un excellent banc d'essai pour une équipe réseau qui veut travailler sur SRv6, EVPN ou MPLS avec du matériel opérateur réel.",
      },
      {
        q: "Comment se passe la livraison depuis Dakar ?",
        a: "Enlèvement sur place à Dakar, ou expédition vers l'Afrique de l'Ouest et centrale (Côte d'Ivoire, Mali, Burkina Faso, Guinée, Bénin, Togo, Cameroun, Gabon…). Le mode d'expédition, le poids et les formalités d'importation sont précisés dans le devis ; la configuration peut être finalisée à distance à la mise en service.",
      },
    ],
    stockNote:
      "11 unités neuves en stock à Dakar — à l'unité, par lot de 10 ou lot complet.",
    condition: "Neuf, jamais mis en service · garantie atelier",
    image: "/products/netengine-8000-m1a.webp",
    ogImage: "/products/netengine-8000-m1a.jpg",
    imgW: 1973,
    imgH: 361,
    stock: "En stock",
    badge: "NEUF",
    badgeEn: "NEW",
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
      "New 1U NGFW firewall: 20 Gbit/s, 16× GE RJ45 + 6× GE SFP + 6× 10GE SFP+, 15 Gbit/s IPsec VPN, 2 units available in Dakar.",
    seoPitch:
      "Pare-feu NGFW 1U neuf : 20 Gbit/s, 16× GE RJ45 + 6× GE SFP + 6× 10GE SFP+, VPN IPsec 15 Gbit/s — 2 unités disponibles à Dakar.",
    slug: "pare-feu-usg6625e",
    name: "Huawei USG6625E-AC (HiSecEngine NGFW)",
    category: "Sécurité & Pare-feu",
    mpn: "02352RQN",
    model: "USG6625E-AC",
    configNote: "Neuf · 2 unités · hors licences",
    configNoteEn: "New · 2 units · licences excluded",
    seoTitle:
      "Pare-feu Huawei USG6625E-AC à Dakar — NGFW 20 Gbit/s | Fallcon Tech",
    seoDescription:
      "Pare-feu Huawei USG6625E-AC neuf : 20 Gbit/s, 16×GE + 6×10GE SFP+, VPN IPsec 15 Gbit/s, SSL VPN, 8 M sessions. 2 unités en stock à Dakar, devis sous 24 h.",
    shortEn:
      "New 1U next-generation firewall: 20 Gbit/s firewall throughput, 15 Gbit/s IPsec VPN, 16× GE RJ45 + 6× GE SFP + 6× 10GE SFP+, 16 GB memory. Two units in stock in Dakar.",
    short:
      "Pare-feu nouvelle génération 1U neuf : 20 Gbit/s, 16× GE RJ45 + 6× GE SFP + 6× 10GE SFP+, VPN IPsec 15 Gbit/s et SSL VPN. Pour périmètre d'entreprise, VPN multi-sites et segmentation réseau. 2 unités en stock à Dakar.",
    imageAlt:
      "Pare-feu Huawei HiSecEngine USG6625E-AC (NGFW 1U, 16× GE + 6× 10GE SFP+) en stock à Dakar",
    specsEn: [
      "16 × GE RJ45 + 6 × GE SFP + 6 × 10GE SFP+ (Huawei 02352RQN)",
      "20 Gbit/s firewall throughput · 10 Gbit/s with IPS + antivirus",
      "15 Gbit/s IPsec VPN · SSL VPN for 100 users (2,000 with licence)",
      "8 million concurrent sessions · 200,000 new sessions/s",
      "16 GB memory · 1U rack mountable · 442 × 420 × 43.6 mm (7.6 kg)",
      "Two units in stock with consecutive serial numbers (HA pair possible)",
      "Condition: new, never put into service, original packaging",
    ],
    specs: [
      "16× GE RJ45 + 6× GE SFP + 6× 10GE SFP+ (réf. Huawei 02352RQN)",
      "Débit pare-feu 20 Gbit/s · 10 Gbit/s avec IPS + antivirus activés",
      "VPN IPsec 15 Gbit/s · SSL VPN 100 utilisateurs (2 000 en option)",
      "8 millions de sessions simultanées · 200 000 nouvelles sessions/s",
      "16 Go de mémoire · 1U rackable · 442 × 420 × 43,6 mm (7,6 kg)",
      "2 unités en stock, numéros de série consécutifs (paire redondante possible)",
      "État : neuf, jamais mis en service, emballage d'origine",
    ],
    techSpecs: [
      { k: "Référence Huawei", v: "02352RQN" },
      { k: "Modèle", v: "HiSecEngine USG6625E-AC (pare-feu NGFW 1U)" },
      { k: "Interfaces fixes", v: "16× GE RJ45 + 6× GE SFP + 6× 10GE SFP+" },
      { k: "Débit pare-feu (1518 / 512 / 64 octets)", v: "20 / 20 / 20 Gbit/s" },
      { k: "Débit IPS + antivirus activés", v: "10 Gbit/s" },
      { k: "Débit avec inspection SSL", v: "3 Gbit/s" },
      { k: "VPN IPsec (AES-256 + SHA-256)", v: "15 Gbit/s" },
      { k: "SSL VPN", v: "100 utilisateurs inclus · jusqu'à 2 000 avec licence" },
      { k: "Sessions simultanées", v: "8 000 000" },
      { k: "Nouvelles sessions par seconde", v: "200 000" },
      { k: "Latence", v: "15 µs" },
      { k: "Politiques de sécurité", v: "Jusqu'à 40 000 règles" },
      { k: "Pare-feu virtuels (VSYS)", v: "Jusqu'à 500" },
      { k: "VLAN", v: "4 094" },
      { k: "Mémoire", v: "16 Go" },
      { k: "Alimentation", v: "100–240 V AC, 50/60 Hz · 104,5 W typique (118 W max) · 1 alimentation AC fournie" },
      { k: "Format et dimensions", v: "1U rackable · 442 × 420 × 43,6 mm" },
      { k: "Poids", v: "7,6 kg" },
      { k: "Environnement", v: "0 à 45 °C · humidité 5–95 % sans condensation" },
      { k: "Gestion", v: "Interface web, CLI, eSight, eLog (journalisation centralisée)" },
      { k: "Stockage local (option)", v: "SSD 240 Go ou HDD 1 To 2,5\" (rapports et journaux)" },
      { k: "État du matériel", v: "Neuf, jamais mis en service — 2 unités, numéros de série consécutifs" },
    ],
    longIntro: [
      "Le Huawei HiSecEngine USG6625E-AC est un pare-feu nouvelle génération (NGFW) 1U conçu pour le périmètre d'une entreprise, d'une administration ou d'un data center. Il combine 16 ports GE cuivre, 6 ports GE optiques et 6 ports 10GE SFP+ avec un débit pare-feu de 20 Gbit/s, 16 Go de mémoire et 8 millions de sessions simultanées : de quoi tenir un lien Internet très haut débit tout en séparant proprement les zones du réseau.",
      "En fonctionnement standard, il assure le filtrage des flux, le NAT, le routage, la segmentation en zones, les tunnels VPN IPsec site-à-site (15 Gbit/s) et le SSL VPN pour les collaborateurs à distance — sans licence supplémentaire. Le filtrage applicatif, la prévention d'intrusion, l'antivirus, le filtrage d'URL et le sandbox anti-APT s'activent par licences Huawei, chiffrées séparément au devis : vous payez la sécurité dont vous avez réellement besoin, quand vous en avez besoin.",
      "Les deux unités disponibles sont neuves et n'ont jamais été mises en service. Leurs numéros de série sont consécutifs : elles peuvent être déployées en redondance (haute disponibilité actif/passif ou actif/actif), configuration que nous installons sur site ou à distance. Le matériel est testé et pré-configuré à Dakar (WAN, zones, règles, VPN, journalisation) avant expédition au Sénégal et dans la sous-région.",
    ],
    useCases: [
      "Protéger le périmètre Internet d'une PME, d'une banque, d'une clinique ou d'une administration : NAT, filtrage, journalisation",
      "Relier un siège et ses agences par tunnels IPsec chiffrés, avec bascule sur un second lien opérateur",
      "Sécuriser le télétravail avec le SSL VPN : accès aux applications internes depuis l'extérieur",
      "Segmenter le réseau : postes de travail, serveurs, Wi-Fi invités, caméras et objets connectés",
      "Équiper un hébergeur ou un intégrateur qui revend une protection par client (pare-feu virtuels, VSYS)",
      "Remplacer un pare-feu en fin de support quand les interfaces 10GE SFP+ sont déjà nécessaires",
    ],
    buying: [
      "Dimensionner sur le débit avec inspection activée (10 Gbit/s IPS + antivirus), pas sur le débit brut de 20 Gbit/s",
      "Compter les interfaces nécessaires : 16× GE pour les zones et 6× 10GE SFP+ pour les liens et les serveurs",
      "Les fonctions avancées (IPS, antivirus, filtrage d'URL, SSL VPN au-delà de 100 utilisateurs) dépendent de licences",
      "La configuration de base (WAN, zones, règles, VPN, journalisation) est incluse dans le devis",
      "Pour une redondance, deux unités identiques sont nécessaires : nous en avons deux, séries consécutives",
    ],
    faq: [
      {
        q: "Le pare-feu USG6625E fonctionne-t-il sans licence ?",
        a: "Oui. Sans licence, l'appareil assure le filtrage des flux, le NAT, le routage, la segmentation en zones, la haute disponibilité, les tunnels VPN IPsec site-à-site et le SSL VPN pour 100 utilisateurs nommés, ainsi que la journalisation. Les licences Huawei ne concernent que les fonctions avancées et leurs mises à jour : prévention d'intrusion (IPS), antivirus, filtrage d'URL, contrôle applicatif, anti-APT, DLP et SSL VPN au-delà de 100 utilisateurs. Le devis précise noir sur blanc ce qui est inclus et ce qui reste en option.",
      },
      {
        q: "Quel débit réel puis-je espérer ?",
        a: "20 Gbit/s en pare-feu seul, 15 Gbit/s en VPN IPsec chiffré, et 10 Gbit/s lorsque l'IPS et l'antivirus sont activés (3 Gbit/s avec inspection SSL). Ces valeurs dépassent largement les liens opérateurs disponibles au Sénégal et en Afrique de l'Ouest : l'appareil ne sera pas le facteur limitant de votre connexion.",
      },
      {
        q: "Combien de sites et d'utilisateurs à distance peut-il connecter ?",
        a: "Le VPN IPsec site-à-site relie autant de sites que vous avez de tunnels, avec possibilité de redondance sur deux liens WAN. Le SSL VPN est livré pour 100 utilisateurs simultanés et s'étend jusqu'à 2 000 avec licence. Pour dimensionner précisément, indiquez-nous le nombre d'agences, le débit de chaque lien et le nombre de télétravailleurs.",
      },
      {
        q: "Peut-on déployer deux pare-feu en redondance ?",
        a: "Oui, et c'est l'intérêt de nos deux unités : leurs numéros de série sont consécutifs et leur configuration est identique. Nous les installons en haute disponibilité (actif/passif ou actif/actif) pour qu'une panne matérielle n'entraîne aucune coupure d'accès Internet. C'est la configuration que demandent les banques, les cliniques et les hébergeurs.",
      },
      {
        q: "Le matériel est-il neuf et quelle garantie s'applique ?",
        a: "Les deux unités sont neuves et n'ont jamais été mises en service (emballage d'origine, cartons marqués par le stockage). Chaque appareil est testé avant expédition et livré avec notre garantie atelier depuis Dakar, dont la durée est précisée au devis. La garantie constructeur Huawei n'étant pas transférable à un acquéreur tiers, c'est nous qui l'assumons directement.",
      },
      {
        q: "Puis-je voir le matériel et le tester avant d'acheter ?",
        a: "Oui, sur rendez-vous à Dakar : nous allumons l'appareil, montrons la version logicielle, l'état des interfaces et une configuration VPN de démonstration. Pour un acheteur hors du Sénégal, nous envoyons des photos de l'appareil sous tension et la configuration testée avant expédition.",
      },
      {
        q: "Livrez-vous et installez-vous hors du Sénégal ?",
        a: "Oui : expédition depuis Dakar vers l'Afrique de l'Ouest et centrale (Côte d'Ivoire, Mali, Burkina Faso, Guinée, Bénin, Togo, Cameroun, Gabon…). La configuration peut être faite avant expédition, puis finalisée à distance ; une intervention sur site est possible selon le projet et précisée au devis.",
      },
    ],
    included: [
      "Politiques de filtrage, NAT, routage et segmentation en zones",
      "VPN IPsec site-à-site jusqu'à 15 Gbit/s (chiffrement AES-256 + SHA-256)",
      "SSL VPN pour 100 utilisateurs simultanés",
      "Haute disponibilité entre deux unités (actif/passif ou actif/actif)",
      "Journalisation locale, supervision et export des journaux (eLog)",
      "Gestion complète par interface web et CLI",
    ],
    options: [
      "Licence IPS — prévention d'intrusion et mise à jour des bases de signatures",
      "Licence antivirus / anti-malware au niveau des flux",
      "Licence filtrage d'URL (130+ catégories) et contrôle applicatif",
      "SSL VPN au-delà de 100 utilisateurs (jusqu'à 2 000)",
      "Sandbox anti-APT et prévention des fuites de données (DLP)",
      "Deuxième alimentation AC pour la redondance d'alimentation",
    ],
    licenceNote:
      "Sans licence, le pare-feu protège déjà votre périmètre : filtrage, NAT, zones, VPN IPsec et SSL VPN 100 utilisateurs. Les licences n'ajoutent que la sécurité avancée (IPS, antivirus, filtrage d'URL, anti-APT, SSL VPN étendu) — chiffrées séparément au devis, en 1 ou 3 ans.",
    stockNote:
      "2 unités en stock à Dakar — séries consécutives, redondance (HA) possible.",
    condition: "Neuf, jamais mis en service · garantie atelier",
    image: "/products/usg6625e.webp",
    ogImage: "/products/usg6625e.png",
    imgW: 1440,
    imgH: 1440,
    stock: "En stock",
    badge: "NEUF",
    badgeEn: "NEW",
    unit: "unité",
  },

  // ---------- Optique & WDM/OTN ----------
  {
    id: "carte-optique-tn13oau",
    seoPitchEn:
      "C-band optical amplifier board (EDFA) for Huawei OSN WDM/OTN transport networks — OptiX OSN 6800, 8800 and 9800.",
    seoPitch:
      "Carte amplificateur optique C-band (EDFA) pour réseaux de transport WDM/OTN Huawei OSN — OptiX OSN 6800, 8800 et 9800.",
    slug: "carte-optique-tn13oau",
    name: "Huawei TN13OAU (OAU1)",
    category: "Optique & WDM/OTN",
    model: "TN13OAU (OAU1)",
    configNote: "Carte optique · 1 slot",
    configNoteEn: "Optical board · 1 slot",
    seoTitle: "Carte Huawei TN13OAU (OAU1) — amplificateur C-band OSN | Fallcon Tech",
    seoDescription:
      "Carte Huawei TN13OAU (OAU1) : amplificateur optique C-band (EDFA) 1529–1561 nm pour OptiX OSN 6800 / 8800 / 9800. Livraison Dakar et Afrique, devis sous 24 h.",
    shortEn:
      "C-band optical amplifier board (EDFA) for Huawei OSN WDM/OTN transport systems: boosts the optical signal to extend a span without electrical regeneration.",
    short:
      "Carte amplificateur optique C-band (EDFA) pour systèmes de transport WDM/OTN Huawei OSN : elle relance le signal optique pour allonger une liaison sans régénération électrique.",
    imageAlt:
      "Carte optique Huawei TN13OAU (OAU1), amplificateur C-band EDFA pour châssis OptiX OSN",
    specsEn: [
      "C-band optical amplifier (EDFA) · 1529–1561 nm",
      "Adjustable gain, gain locking, transient control",
      "LC/UPC optical ports (IN / OUT / MON)",
      "Compatible with OptiX OSN 6800 / 8800 / 9800 · occupies 1 slot",
      "Extends a span without electrical regeneration (long-haul transmission)",
      "Huawei reference: card code TN13OAU / OAU1 — confirmed with the serial on quotation",
    ],
    configNoteEn: "Optical board · 1 slot",
    specs: [
      "Amplificateur optique C-band (EDFA) · 1529–1561 nm",
      "Gain ajustable, verrouillage de gain, contrôle des transitoires",
      "Ports optiques LC/UPC (IN / OUT / MON)",
      "Compatible OptiX OSN 6800 / 8800 / 9800 · occupe 1 slot",
      "Allonge une liaison sans régénération électrique (transmission longue distance)",
      "Code carte Huawei TN13OAU / OAU1 — référence confirmée au devis avec le numéro de série",
    ],
    techSpecs: [
      { k: "Modèle", v: "Huawei TN13OAU — amplificateur optique C-band (OAU1)" },
      { k: "Fonction", v: "Amplification optique (EDFA) sur le chemin de ligne d'un réseau WDM/OTN" },
      { k: "Bande de travail", v: "Bande C · 1529 – 1561 nm" },
      { k: "Gain", v: "Ajustable, avec verrouillage de gain et contrôle des transitoires" },
      { k: "Ports optiques", v: "LC/UPC — entrée (IN), sortie (OUT), surveillance (MON)" },
      { k: "Châssis compatibles", v: "Huawei OptiX OSN 6800, OSN 8800 et OSN 9800" },
      { k: "Encombrement", v: "1 emplacement dans le châssis" },
      { k: "Bénéfice réseau", v: "Allongement de la portée d'une liaison optique sans régénération électrique" },
      { k: "État", v: "Carte destinée à un réseau en production ou à un spare de sécurité" },
    ],
    longIntro: [
      "La carte TN13OAU (OAU1) est un amplificateur optique en bande C (EDFA) destiné aux réseaux de transport WDM/OTN Huawei OptiX OSN 6800, 8800 et 9800. Elle relance le signal optique sur le chemin de ligne : c'est ce qui permet d'allonger une liaison entre deux sites sans installer de régénération électrique, donc sans équipement actif intermédiaire à alimenter, superviser et maintenir.",
      "Elle se monte dans un emplacement du châssis OSN, avec trois ports optiques LC/UPC (entrée, sortie, surveillance) et une gestion du gain avec verrouillage et contrôle des transitoires — utile quand des longueurs d'onde sont ajoutées ou retirées en service. Elle s'achète soit pour équiper un nœud, soit comme spare : sur un réseau de transport en production, un amplificateur d'avance évite une coupure de plusieurs jours en attendant une pièce.",
    ],
    useCases: [
      "Allonger la portée d'une liaison WDM/OTN existante sans régénération électrique",
      "Équiper un nœud OptiX OSN 6800, 8800 ou 9800 avec l'amplification de ligne manquante",
      "Constituer un spare critique : sur un réseau en production, un amplificateur d'avance évite une coupure longue",
      "Remettre en service un châssis OSN existant après une panne de carte",
      "Renforcer un lien métro ou inter-ville qui s'atténue à mesure que des longueurs d'onde sont ajoutées",
    ],
    buying: [
      "Relever la référence exacte de la carte et la fonction attendue (amplification de ligne, préamplification)",
      "Vérifier le châssis cible et le numéro d'emplacement libre (OSN 6800 / 8800 / 9800)",
      "Contrôler le budget optique du lien : gain disponible, atténuation de la fibre et pertes des connecteurs",
      "Prévoir les cordons LC/UPC et, si besoin, les atténuateurs avant mise en service",
      "Pour un spare, indiquer la quantité : deux cartes identiques valent mieux qu'une en cas de panne",
    ],
    included: [
      "Carte optique complète, contrôlée avant expédition (état, ports, référence)",
      "Documentation de référence et informations de compatibilité châssis / emplacement",
      "Conseil de dimensionnement du lien (gain, budget optique, atténuation)",
      "Expédition protégée depuis Dakar, adaptée aux cartes optiques",
      "Accompagnement à la mise en service à distance si nécessaire",
    ],
    options: [
      "Carte supplémentaire identique en spare",
      "Cordons optiques LC/UPC et atténuateurs adaptés à votre liaison",
      "Recherche d'autres références de cartes OSN (OAU, OBU, OLP, TDCM, WSMD…) sur demande",
      "Assistance à la mise en service sur site selon le projet",
      "Reprise de cartes défectueuses ou d'anciens châssis, à étudier au cas par cas",
    ],
    includedTitle: "Ce qui est inclus dans la livraison",
    includedCardTitle: "Inclus dans la livraison",
    optionsTitle: "Options et accessoires",
    licenceNote:
      "Les cartes optiques n'exigent pas de licence logicielle particulière : elles s'intègrent à un châssis OSN existant sous réserve de compatibilité de la version logicielle du nœud, que nous vérifions avec vous avant expédition.",
    faq: [
      {
        q: "À quoi sert exactement la carte TN13OAU ?",
        a: "C'est un amplificateur optique en bande C (EDFA). Placée sur le chemin de ligne d'un réseau WDM/OTN, elle relance le signal optique pour allonger la distance entre deux sites sans régénération électrique — donc sans équipement actif intermédiaire à alimenter et superviser.",
      },
      {
        q: "Sur quels châssis puis-je la monter ?",
        a: "Elle est prévue pour les Huawei OptiX OSN 6800, 8800 et 9800, sur un emplacement du châssis. Indiquez-nous votre châssis, la version logicielle du nœud et l'emplacement libre : nous confirmons la compatibilité avant expédition.",
      },
      {
        q: "Comment savoir si mon lien a besoin d'un amplificateur ?",
        a: "Cela se décide sur le budget optique : atténuation de la fibre (distance), pertes des connecteurs et épissures, sensibilité du récepteur en face. Donnez-nous la distance et le type de fibre, nous calculons la marge et vous indiquons si l'amplification est nécessaire ou si un atténuateur suffit.",
      },
      {
        q: "Livrez-vous les cordons et les atténuateurs en même temps ?",
        a: "Oui : cordons optiques LC/UPC et atténuateurs peuvent être ajoutés au devis pour que l'installation se fasse sans attendre une seconde livraison.",
      },
      {
        q: "Peut-on commander plusieurs cartes pour un segment complet ?",
        a: "Oui. Précisez le nombre de nœuds à équiper et les distances entre eux : nous chiffrons les cartes, les cordons et, si utile, une carte de rechange supplémentaire.",
      },
    ],
    condition: "Carte optique pour châssis OSN — disponibilité confirmée au devis",
    image: "/products/huawei-tn13oau.webp",
    ogImage: "/products/huawei-tn13oau.jpg",
    imgW: 721,
    imgH: 397,
    stock: "En stock",
    badge: "WDM/OTN",
    unit: "carte",
  },
  {
    id: "carte-optique-tn13obu103",
    seoPitchEn:
      "C-band optical booster unit (EDFA, 23 dB gain, +20 dBm output) board for Huawei OSN 6800 / 8800 / 9800 WDM networks — 3 units in Dakar.",
    seoPitch:
      "Carte amplificateur optique C-band (booster EDFA, gain 23 dB, sortie +20 dBm) pour réseaux WDM Huawei OSN 6800 / 8800 / 9800 — 3 unités à Dakar.",
    slug: "carte-optique-tn13obu103",
    name: "Huawei TN13OBU1 (OBU103)",
    category: "Optique & WDM/OTN",
    model: "TN13OBU103 (OBU1)",
    mpn: "03030SVP",
    configNote: "Neuf · emballage d'origine · 3 unités",
    configNoteEn: "New · original packaging · 3 units",
    seoTitle: "Carte Huawei TN13OBU103 — booster optique C-band OSN | Fallcon Tech",
    seoDescription:
      "Carte Huawei TN13OBU103 (OBU1) neuve : booster optique C-band, gain 23 dB, sortie +20 dBm, pour OptiX OSN 6800 / 8800 / 9800. 3 unités en stock à Dakar, devis sous 24 h.",
    shortEn:
      "New C-band optical booster unit (EDFA) with 23 dB typical gain and up to +20 dBm output, for Huawei OSN WDM/OTN transport systems — three units in stock in Dakar.",
    short:
      "Carte booster optique C-band (EDFA) neuve, gain typique 23 dB et sortie jusqu'à +20 dBm, pour systèmes de transport WDM/OTN Huawei OSN — 3 unités en stock à Dakar.",
    imageAlt:
      "Carte optique Huawei TN13OBU103 (OBU1), booster C-band EDFA pour châssis OptiX OSN",
    specsEn: [
      "C-band optical booster unit (OBU) · typical gain 23 dB",
      "Maximum output +20 dBm · maximum input −3 dBm",
      "LC/PC optical ports (IN / OUT / MON)",
      "For OptiX OSN 6800 / 8800 / 9800 · occupies 1 slot",
      "Boosts the multiplexed C-band signal at the transmit end of a span, before the line fibre",
      "Huawei reference 03030SVP · board code TN13OBU103",
      "Condition: new, never deployed, original Huawei packaging",
    ],
    specs: [
      "Carte Optical Booster Unit (OBU) C-band · gain typique 23 dB",
      "Sortie maximale +20 dBm · entrée maximale −3 dBm",
      "Ports optiques LC/PC (IN / OUT / MON)",
      "Compatible OptiX OSN 6800 / 8800 / 9800 · occupe 1 slot",
      "Amplifie le signal C-band multiplexé en sortie d'émetteur, avant la fibre de ligne",
      "Référence Huawei 03030SVP · code carte TN13OBU103 · 3 unités disponibles",
      "État : neuf, jamais déployé, emballage d'origine",
    ],
    techSpecs: [
      { k: "Modèle", v: "Huawei TN13OBU103 — Optical Booster Unit (OBU1)" },
      { k: "Référence Huawei", v: "03030SVP" },
      { k: "Fonction", v: "Booster d'émission : amplification du signal C-band multiplexé avant injection dans la fibre de ligne" },
      { k: "Bande de travail", v: "Bande C" },
      { k: "Gain", v: "23 dB typique" },
      { k: "Puissance de sortie", v: "Jusqu'à +20 dBm · entrée maximale −3 dBm" },
      { k: "Ports optiques", v: "LC/PC — entrée (IN), sortie (OUT), surveillance (MON)" },
      { k: "Châssis compatibles", v: "Huawei OptiX OSN 6800, OSN 8800 et OSN 9800" },
      { k: "Encombrement", v: "1 emplacement dans le châssis" },
      { k: "État", v: "Neuf, jamais déployé, emballage d'origine Huawei" },
      { k: "Quantité disponible", v: "3 unités en stock à Dakar" },
    ],
    longIntro: [
      "La carte TN13OBU103 (OBU1) est un booster optique en bande C : elle amplifie le signal multiplexé juste avant son injection dans la fibre de ligne, côté émission. C'est la carte qui redonne de la puissance à un départ de span lorsque la distance, les épissures ou un vieillissement de fibre érodent la marge optique — typiquement sur un lien métro ou inter-ville qui doit tenir plusieurs dizaines de kilomètres.",
      "Avec 23 dB de gain typique et jusqu'à +20 dBm de sortie, elle se monte dans un emplacement d'un châssis OptiX OSN 6800, 8800 ou 9800, avec ses trois ports LC/PC (entrée, sortie, surveillance). Les trois unités disponibles sont neuves, jamais déployées, dans leur emballage d'origine Huawei (référence 03030SVP) : elles servent aussi bien à équiper un nœud qu'à constituer un spare immédiatement disponible, sans délai d'importation.",
    ],
    useCases: [
      "Redonner de la puissance à un départ de span sur un réseau WDM existant",
      "Allonger la distance entre deux nœuds sans régénération électrique intermédiaire",
      "Équiper un nœud OptiX OSN 6800 / 8800 / 9800 en amplification d'émission",
      "Constituer un spare : trois cartes neuves disponibles immédiatement, sans délai d'importation",
      "Remettre en service un châssis OSN après la panne d'une carte OBU",
    ],
    buying: [
      "Vérifier la référence exacte (03030SVP / TN13OBU103) sur votre documentation de nœud",
      "Contrôler le budget optique du lien avant de choisir le gain nécessaire",
      "Vérifier le niveau d'entrée : l'entrée maximale de la carte est de −3 dBm",
      "Confirmer la compatibilité de version logicielle du châssis OSN cible",
      "Pour un spare, prévoir la même référence que celle déjà en service",
    ],
    included: [
      "Carte optique complète, contrôlée avant expédition (état, ports, référence 03030SVP)",
      "Emballage d'origine Huawei conservé pour le transport",
      "Informations de compatibilité châssis et d'emplacement",
      "Conseil de dimensionnement du lien (gain, puissance d'entrée, budget optique)",
      "Expédition protégée depuis Dakar et accompagnement à la mise en service à distance",
    ],
    options: [
      "Cartes OBU supplémentaires (jusqu'à 3 unités disponibles)",
      "Cordons optiques LC/PC et atténuateurs selon votre liaison",
      "Recherche d'autres références OSN (OAU, OLP, TDCM, WSMD…) sur demande",
      "Assistance à la mise en service sur site selon le projet",
      "Carte de rechange supplémentaire pour réduire le temps d'arrêt",
    ],
    includedTitle: "Ce qui est inclus dans la livraison",
    includedCardTitle: "Inclus dans la livraison",
    optionsTitle: "Options et accessoires",
    licenceNote:
      "Les cartes optiques ne nécessitent pas de licence logicielle dédiée : leur intégration dépend de la compatibilité de la version logicielle du nœud OSN, que nous vérifions avec vous avant expédition.",
    faq: [
      {
        q: "Quelle est la différence entre une carte OBU et une carte OAU ?",
        a: "L'OBU (booster) amplifie le signal en sortie d'émetteur, juste avant la fibre de ligne : elle compense la puissance perdue au départ du span. L'OAU (amplificateur de ligne) travaille plus loin sur le chemin, souvent pour allonger la liaison ou préamplifier avant réception. Les deux se complètent sur un lien long.",
      },
      {
        q: "Les cartes sont-elles neuves ?",
        a: "Oui : les trois unités sont neuves, jamais déployées, dans leur emballage d'origine Huawei, avec la référence 03030SVP et le code carte TN13OBU103. Elles sont contrôlées avant expédition.",
      },
      {
        q: "Sur quels châssis se montent-elles ?",
        a: "Sur les Huawei OptiX OSN 6800, 8800 et 9800, sur un emplacement du châssis. Donnez-nous votre châssis, sa version logicielle et l'emplacement libre : nous confirmons la compatibilité avant expédition.",
      },
      {
        q: "Comment vérifier que mon lien a besoin de cette carte ?",
        a: "Sur le budget optique : distance et atténuation de la fibre, pertes des connecteurs et épissures, niveau d'entrée disponible. L'entrée maximale de la carte est de −3 dBm et sa sortie peut atteindre +20 dBm : au-delà, un atténuateur est nécessaire. Envoyez-nous les caractéristiques du lien, nous calculons.",
      },
      {
        q: "Peut-on acheter une seule carte ou faut-il prendre les trois ?",
        a: "Les deux sont possibles : à l'unité, par deux, ou les trois ensemble. Pour un réseau en production, nous recommandons au minimum une carte de rechange identique à celle en service.",
      },
    ],
    stockNote:
      "3 unités neuves en stock à Dakar — emballage d'origine, référence 03030SVP.",
    condition: "Neuf, jamais déployé · emballage d'origine",
    image: "/products/huawei-tn13obu103.webp",
    ogImage: "/products/huawei-tn13obu103.jpg",
    imgW: 444,
    imgH: 431,
    stock: "En stock",
    badge: "NEUF",
    badgeEn: "NEW",
    unit: "carte",
  },
  {
    id: "carte-optique-tn12wsmd901",
    seoPitchEn:
      "9-port wavelength selective switch (WSS) board for Huawei OSN ROADM nodes — 80 channels, 50 GHz, 3 units in Dakar.",
    seoPitch:
      "Carte WSS 9 ports (multiplexage sélectif en longueur d'onde) pour nœuds ROADM Huawei OSN — 80 canaux, 50 GHz, 3 unités à Dakar.",
    slug: "carte-optique-tn12wsmd901",
    name: "Huawei TN12WSMD901 (WSMD9)",
    category: "Optique & WDM/OTN",
    model: "TN12WSMD901 (WSMD9)",
    mpn: "03030SVJ",
    configNote: "Neuf · carte double slot · 3 unités",
    configNoteEn: "New · double-slot board · 3 units",
    seoTitle: "Carte Huawei TN12WSMD901 (WSMD9) — WSS 9 ports ROADM | Fallcon Tech",
    seoDescription:
      "Carte Huawei TN12WSMD901 (WSMD9) neuve : WSS 9 ports, 80 canaux, espacement 50 GHz, pour nœuds ROADM OptiX OSN 6800 / 8800. 3 unités en stock à Dakar, devis sous 24 h.",
    shortEn:
      "New 9-port wavelength selective switch (WSS) board — 80 channels at 50 GHz, flexible grid, per-wavelength attenuation — for Huawei OSN 6800 / 8800 ROADM nodes. Three units in Dakar.",
    short:
      "Carte WSS 9 ports neuve (WSS, 80 canaux, espacement 50 GHz, grille flexible) pour nœuds ROADM Huawei OptiX OSN 6800 / 8800 — 3 unités en stock à Dakar.",
    imageAlt:
      "Carte optique Huawei TN12WSMD901 (WSMD9), WSS 9 ports pour nœuds ROADM OptiX OSN",
    specsEn: [
      "9-port wavelength selective mux/demux board (WSS) · double-width, occupies 2 slots",
      "C-band 196.05 – 192.10 THz · 50 GHz channel spacing",
      "80 optical channels · up to 40 add/drop wavelengths",
      "Flexible-grid compatible · per-wavelength attenuation (0–15 dB)",
      "LC/PC optical ports (AM/DM) · in-service optical performance monitoring",
      "For OptiX OSN 6800 / 8800 (T16 / T32 / T64) ROADM nodes",
      "Huawei reference 03030SVJ · board code TN12WSMD901 · three units available",
      "Condition: new, never deployed, original Huawei packaging",
    ],
    specs: [
      "Carte WSS 9 ports de multiplexage/démultiplexage sélectif · double largeur, occupe 2 slots",
      "Bande C 196,05 – 192,10 THz · espacement de canaux 50 GHz",
      "80 canaux optiques · jusqu'à 40 longueurs d'onde ajoutées/extraites",
      "Compatible grille flexible · atténuation par longueur d'onde (0–15 dB)",
      "Ports optiques LC/PC (AM/DM) · surveillance des performances optiques en service",
      "Pour nœuds ROADM OptiX OSN 6800 / 8800 (T16 / T32 / T64)",
      "Référence Huawei 03030SVJ · code carte TN12WSMD901 · 3 unités disponibles",
      "État : neuf, jamais déployé, emballage d'origine",
    ],
    techSpecs: [
      { k: "Modèle", v: "Huawei TN12WSMD901 — carte WSS 9 ports (WSMD9)" },
      { k: "Référence Huawei", v: "03030SVJ" },
      { k: "Fonction", v: "Commutateur sélectif en longueur d'onde : ajout/extraction et routage de longueurs d'onde dans un nœud ROADM" },
      { k: "Bande de travail", v: "Bande C · 196,05 – 192,10 THz" },
      { k: "Espacement de canaux", v: "50 GHz · compatible grille flexible" },
      { k: "Capacité", v: "80 canaux optiques · jusqu'à 40 longueurs d'onde ajoutées/extraites" },
      { k: "Atténuation", v: "Réglable par longueur d'onde (0 – 15 dB)" },
      { k: "Ports optiques", v: "LC/PC (AM / DM) · surveillance des performances optiques en service" },
      { k: "Nœuds compatibles", v: "Huawei OptiX OSN 6800 et OSN 8800 (T16 / T32 / T64)" },
      { k: "Encombrement", v: "Carte double largeur · 2 emplacements" },
      { k: "État", v: "Neuf, jamais déployé, emballage d'origine Huawei" },
      { k: "Quantité disponible", v: "3 unités en stock à Dakar" },
    ],
    longIntro: [
      "La carte TN12WSMD901 (WSMD9) est un commutateur sélectif en longueur d'onde à 9 ports : c'est le cœur d'un nœud ROADM. Elle permet d'ajouter, d'extraire et de router des longueurs d'onde sans démonter le trafic des autres canaux — la différence entre un réseau optique souple, reconfigurable à distance, et un réseau figé où chaque changement impose une intervention physique.",
      "Elle travaille en bande C avec un espacement de 50 GHz, 80 canaux et une atténuation réglable par longueur d'onde (0 à 15 dB), ce qui permet d'égaliser les niveaux entre canaux et de faire cohabiter un trafic existant avec un nouveau client. Compatible grille flexible, elle s'installe en double largeur (2 emplacements) dans un châssis OptiX OSN 6800 ou 8800. Les trois unités disponibles sont neuves (référence Huawei 03030SVJ) et n'ont jamais été déployées : c'est aussi une carte de rechange stratégique, la panne d'un WSS paralysant un nœud entier.",
    ],
    useCases: [
      "Équiper un nœud ROADM OptiX OSN 6800 ou 8800 : ajout/extraction locale de longueurs d'onde",
      "Rendre un réseau optique reconfigurable à distance, sans intervention physique sur le site",
      "Ajouter de nouveaux clients ou circuits sur un lien DWDM déjà en service",
      "Constituer un spare critique : la panne d'un WSS immobilise un nœud complet",
      "Étendre la capacité d'un nœud existant (jusqu'à 40 longueurs d'onde ajoutées/extraites)",
    ],
    buying: [
      "Vérifier la référence exacte (03030SVJ / TN12WSMD901) et le plan de fréquences de votre réseau",
      "Confirmer le châssis cible et la disponibilité de 2 emplacements adjacents",
      "Valider la compatibilité de la grille : 50 GHz fixe ou grille flexible",
      "Prévoir les cordons LC/PC et, si nécessaire, l'atténuation complémentaire",
      "Pour un nœud en production, commander une carte de rechange identique",
    ],
    included: [
      "Carte WSS complète, contrôlée avant expédition (état, ports, référence 03030SVJ)",
      "Emballage d'origine Huawei conservé pour le transport",
      "Informations de compatibilité châssis, emplacements et plan de fréquences",
      "Conseil de dimensionnement du nœud (nombre de longueurs d'onde, atténuation, égalisation)",
      "Expédition protégée depuis Dakar et accompagnement à la mise en service à distance",
    ],
    options: [
      "Cartes WSS supplémentaires (jusqu'à 3 unités disponibles)",
      "Cartes OSN complémentaires (OAU, OBU, OLP, TDCM) recherchées sur demande",
      "Cordons optiques LC/PC, atténuateurs et patch panels",
      "Assistance à la mise en service sur site selon le projet",
      "Carte de rechange supplémentaire pour réduire le temps d'arrêt d'un nœud",
    ],
    includedTitle: "Ce qui est inclus dans la livraison",
    includedCardTitle: "Inclus dans la livraison",
    optionsTitle: "Options et accessoires",
    licenceNote:
      "La carte n'exige pas de licence logicielle propre : son intégration dépend de la version logicielle du nœud OSN et du plan de fréquences, que nous validons avec vous avant expédition.",
    faq: [
      {
        q: "Qu'est-ce qu'une carte WSS et pourquoi est-ce stratégique ?",
        a: "Un WSS (wavelength selective switch) route, ajoute et extrait chaque longueur d'onde individuellement dans un nœud ROADM. C'est lui qui rend le réseau reconfigurable à distance : on change un circuit sans toucher aux autres. Sa panne immobilise le nœud, d'où l'intérêt d'une carte de rechange identique.",
      },
      {
        q: "Quelles sont les caractéristiques de cette carte ?",
        a: "9 ports, bande C (196,05 – 192,10 THz), espacement de 50 GHz, 80 canaux, jusqu'à 40 longueurs d'onde ajoutées ou extraites, atténuation réglable par longueur d'onde de 0 à 15 dB, compatible grille flexible. Référence Huawei 03030SVJ, code carte TN12WSMD901.",
      },
      {
        q: "Combien d'emplacements occupe-t-elle ?",
        a: "C'est une carte double largeur : elle occupe 2 emplacements adjacents dans le châssis. Vérifiez la place disponible dans votre OptiX OSN 6800 ou 8800 avant de commander — nous pouvons vous aider à valider le plan d'occupation.",
      },
      {
        q: "Les cartes sont-elles neuves ?",
        a: "Oui : les trois unités sont neuves, jamais déployées, dans leur emballage d'origine Huawei, avec la référence 03030SVJ. Elles sont contrôlées avant expédition.",
      },
      {
        q: "Peut-elle fonctionner avec un réseau en service ?",
        a: "Oui, à condition de respecter le plan de fréquences et la version logicielle du nœud. Une insertion se prépare : nous vous indiquons les points à vérifier (grille, puissances, égalisation) avant de toucher à un nœud en production.",
      },
    ],
    stockNote:
      "3 unités neuves en stock à Dakar — emballage d'origine, référence 03030SVJ.",
    condition: "Neuf, jamais déployé · emballage d'origine",
    image: "/products/huawei-tn12wsmd901.webp",
    ogImage: "/products/huawei-tn12wsmd901.jpg",
    imgW: 536,
    imgH: 438,
    stock: "En stock",
    badge: "NEUF",
    badgeEn: "NEW",
    unit: "carte",
  },
  {
    id: "module-optique-osx010n01-sfp",
    seoPitchEn:
      "Huawei OSX010N01 SFP+ 10G module, 1310 nm, 10 km on single-mode fibre — 4 units in stock in Dakar.",
    seoPitch:
      "Module SFP+ 10G Huawei OSX010N01, 1310 nm, 10 km sur fibre monomode — 4 unités en stock à Dakar.",
    slug: "module-optique-osx010n01-sfp",
    name: "Huawei OSX010N01 (SFP+ 10G)",
    category: "Optique & WDM/OTN",
    model: "OSX010N01",
    mpn: "34060613",
    configNote: "Neuf · 4 unités · SFP+ 10G LR",
    configNoteEn: "New · 4 units · 10G LR SFP+",
    seoTitle: "Module Huawei OSX010N01 — SFP+ 10G 1310 nm 10 km | Fallcon Tech",
    seoDescription:
      "Module optique Huawei OSX010N01 (SFP+ 10G, 1310 nm, 10 km, LC duplex) neuf : 4 unités en stock à Dakar pour liaisons OSN, routeurs et switches 10G. Devis sous 24 h.",
    shortEn:
      "Huawei SFP+ 10G optical transceiver, 1310 nm, 10 km on single-mode fibre (LC duplex), for OSN line boards and enterprise 10G links — four units in Dakar.",
    short:
      "Module optique SFP+ 10G Huawei 1310 nm, portée 10 km sur fibre monomode (LC duplex), pour cartes OSN et liaisons 10G d'entreprise — 4 unités en stock à Dakar.",
    imageAlt:
      "Module optique Huawei OSX010N01 (SFP+ 10G LR, 1310 nm, 10 km) en stock à Dakar",
    specsEn: [
      "SFP+ 10G optical transceiver · 1310 nm",
      "Data rate 8.5 – 11.1 Gbit/s with CDR",
      "Reach 10 km on single-mode fibre · LC duplex",
      "Transmit power −6.0 to −1.0 dBm · sensitivity −14.4 dBm",
      "Digital diagnostics (DDM) · 0 °C to 70 °C",
      "Huawei reference OSX010N01 · P/N 34060613 · 4 units available",
      "Condition: new, never used",
    ],
    specs: [
      "Module optique SFP+ 10G · 1310 nm",
      "Débit 8,5 – 11,1 Gbit/s avec CDR",
      "Portée 10 km sur fibre monomode · LC duplex",
      "Puissance d'émission −6,0 à −1,0 dBm · sensibilité −14,4 dBm",
      "Diagnostic numérique (DDM) · 0 °C à 70 °C",
      "Référence Huawei OSX010N01 · P/N 34060613 · 4 unités disponibles",
      "État : neuf, jamais utilisé",
    ],
    techSpecs: [
      { k: "Modèle", v: "Huawei OSX010N01 — module optique SFP+ 10G" },
      { k: "Référence Huawei", v: "34060613" },
      { k: "Débit", v: "8,5 – 11,1 Gbit/s avec CDR (10 Gigabit Ethernet)" },
      { k: "Longueur d'onde", v: "1310 nm" },
      { k: "Portée", v: "10 km sur fibre monomode (SMF)" },
      { k: "Connecteur", v: "LC duplex" },
      { k: "Puissance d'émission", v: "−6,0 à −1,0 dBm" },
      { k: "Sensibilité de réception", v: "−14,4 dBm" },
      { k: "Diagnostic", v: "DDM — températures, puissances, tension lisibles en supervision" },
      { k: "Température de service", v: "0 °C à 70 °C" },
      { k: "État", v: "Neuf, jamais utilisé" },
      { k: "Quantité disponible", v: "4 unités en stock à Dakar" },
    ],
    longIntro: [
      "Le module OSX010N01 est un SFP+ 10 Gigabit Ethernet Huawei de portée 10 km sur fibre monomode, en 1310 nm avec connecteur LC duplex. C'est le module standard pour raccorder en 10G des cartes optiques OSN, des routeurs, des switches CloudEngine ou des serveurs équipés de ports SFP+ — dès lors que la distance reste dans les 10 km du lien en fibre monomode.",
      "Il dispose du diagnostic numérique (DDM) : les puissances d'émission et de réception, la température et la tension sont lisibles depuis la supervision de l'équipement, ce qui permet de détecter une fibre sale ou un connecteur mal poli avant la panne. Les quatre unités disponibles sont neuves et n'ont jamais été utilisées (référence Huawei 34060613), et se vendent à l'unité — pratique quand il manque un ou deux modules pour terminer une liaison, ou comme spare d'avance.",
    ],
    useCases: [
      "Raccorder une liaison 10G entre deux équipements distants de moins de 10 km",
      "Équiper les ports SFP+ d'un routeur NetEngine, d'un switch CloudEngine ou d'un serveur",
      "Relier des cartes optiques OSN dans un châssis de transport Huawei",
      "Constituer une réserve de modules : un SFP+ défectueux coupe une liaison 10G en quelques secondes",
      "Terminer une liaison existante à laquelle il manque un ou deux modules",
    ],
    buying: [
      "Vérifier la distance réelle et le type de fibre (monomode pour ce module 10 km)",
      "Contrôler la compatibilité de l'équipement : ports SFP+ 10G et, sur Huawei, présence de la référence dans la liste supportée",
      "Prévoir le nombre exact de modules par liaison : un par extrémité, plus une réserve",
      "Ajouter les cordons LC duplex et, si la distance est très courte, des atténuateurs",
      "Vérifier les puissances après installation : les niveaux sont lisibles en DDM",
    ],
    included: [
      "Module optique neuf, contrôlé avant expédition (état, référence, propreté des connecteurs)",
      "Conseil de compatibilité avec l'équipement cible et la distance de la liaison",
      "Expédition protégée depuis Dakar (sachet antistatique et mousse)",
      "Vente à l'unité : vous ne prenez que le nombre de modules nécessaire",
      "Accompagnement au diagnostic post-installation (puissances, DDM) si besoin",
    ],
    options: [
      "Cordons optiques LC duplex (monomode) à la longueur demandée",
      "Atténuateurs optiques pour les liaisons très courtes",
      "Recherche d'autres références de modules (10G/40G/100G, portées ER et ZR) sur demande",
      "Réserve de modules supplémentaire pour la maintenance",
      "Modules SFP+ d'autres constructeurs compatibles, sur demande (avec vérification préalable)",
    ],
    includedTitle: "Ce qui est inclus dans la livraison",
    includedCardTitle: "Inclus dans la livraison",
    optionsTitle: "Options et accessoires",
    licenceNote:
      "Aucune licence n'est nécessaire pour un module optique. La compatibilité avec l'équipement cible (routeur, switch, carte OSN, serveur) est vérifiée avec vous avant expédition.",
    faq: [
      {
        q: "Ce module est-il compatible avec mon équipement ?",
        a: "Il fonctionne sur les ports SFP+ 10G compatibles avec la référence Huawei OSX010N01 (10 km, 1310 nm, monomode). Indiquez-nous l'équipement exact (routeur, switch, carte OSN, serveur) et sa version logicielle : nous vérifions la compatibilité avant expédition. Sur les équipements non-Huawei, la compatibilité dépend du constructeur.",
      },
      {
        q: "Quelle distance puis-je couvrir ?",
        a: "10 km sur fibre monomode, c'est la portée nominale de ce module. Au-delà, il faut une portée supérieure (ER 40 km ou ZR 80 km selon l'équipement) ; en dessous, si la fibre est très courte, un atténuateur peut être nécessaire pour ne pas saturer la réception.",
      },
      {
        q: "Les modules sont-ils neufs ?",
        a: "Oui : les quatre unités sont neuves et n'ont jamais été utilisées, référence Huawei 34060613. Elles sont contrôlées avant expédition et expédiées en sachet antistatique.",
      },
      {
        q: "Puis-je n'en acheter qu'un seul ?",
        a: "Oui, la vente se fait à l'unité. Pour une liaison complète, il en faut un à chaque extrémité ; nous recommandons d'ajouter une réserve, un module étant la panne la plus fréquente sur un lien 10G.",
      },
      {
        q: "Comment savoir si mes modules actuels sont fatigués ?",
        a: "Le DDM remonte la puissance d'émission, la puissance reçue, la température et la tension. Une puissance reçue qui baisse progressivement signale souvent une fibre ou un connecteur sale : à nettoyer avant de remplacer le module.",
      },
    ],
    stockNote: "4 unités neuves en stock à Dakar — vente à l'unité.",
    condition: "Neuf, jamais utilisé",
    image: "/products/huawei-osx010n01-sfp.webp",
    ogImage: "/products/huawei-osx010n01-sfp.jpg",
    imgW: 400,
    imgH: 368,
    stock: "En stock",
    badge: "NEUF",
    badgeEn: "NEW",
    unit: "module",
  },
  {
    id: "module-optique-odx0480t1-txfp",
    seoPitchEn:
      "Tunable C-band 10G TXFP transceiver, 40 km DWDM links, plugs into Huawei OSN 8800 line boards — 3 units in Dakar.",
    seoPitch:
      "Module TXFP 10G accordable bande C, 40 km, à insérer dans les cartes de ligne Huawei OSN 8800 — 3 unités à Dakar.",
    slug: "module-optique-odx0480t1-txfp",
    name: "Huawei ODX0480T1 (TXFP C-band)",
    category: "Optique & WDM/OTN",
    model: "ODX0480T1",
    mpn: "34060568",
    configNote: "Neuf · 3 unités · TXFP accordable",
    configNoteEn: "New · 3 units · tunable TXFP",
    seoTitle: "Module Huawei ODX0480T1 — TXFP 10G accordable DWDM | Fallcon Tech",
    seoDescription:
      "Module Huawei ODX0480T1 (TXFP 10G accordable bande C, 40 km, grille 50 GHz) neuf : à insérer dans les cartes OSN 8800. 3 unités en stock à Dakar, devis sous 24 h.",
    shortEn:
      "Tunable C-band 10G TXFP optical transceiver for DWDM links up to 40 km, plugging into Huawei OSN 8800 line boards — three units in Dakar.",
    short:
      "Module optique TXFP 10G accordable bande C pour liaisons DWDM jusqu'à 40 km, à insérer dans les cartes de ligne Huawei OSN — 3 unités en stock à Dakar.",
    imageAlt:
      "Module optique Huawei ODX0480T1 (TXFP 10G accordable bande C, 40 km) en stock à Dakar",
    specsEn: [
      "Tunable C-band TXFP optical transceiver · 10G",
      "Data rate 9.95 – 11.3 Gbit/s · 50 GHz grid",
      "Reach 40 km on single-mode fibre · LC duplex",
      "Wavelength tuning range 1529.16 – 1560.61 nm",
      "Transmit power −1 to +2 dBm · sensitivity −16 dBm",
      "Plugs into Huawei OSN 8800 line boards (NS2, ND2, NQ2, NO2)",
      "Huawei reference ODX0480T1 · P/N 34060568 · 3 units available",
      "Condition: new, never used",
    ],
    specs: [
      "Module optique TXFP accordable bande C · 10G",
      "Débit 9,95 – 11,3 Gbit/s · grille 50 GHz",
      "Portée 40 km sur fibre monomode · LC duplex",
      "Plage d'accord 1529,16 – 1560,61 nm",
      "Puissance d'émission −1 à +2 dBm · sensibilité −16 dBm",
      "S'insère dans les cartes de ligne Huawei OSN 8800 (NS2, ND2, NQ2, NO2)",
      "Référence Huawei ODX0480T1 · P/N 34060568 · 3 unités disponibles",
      "État : neuf, jamais utilisé",
    ],
    techSpecs: [
      { k: "Modèle", v: "Huawei ODX0480T1 — module TXFP 10G accordable bande C" },
      { k: "Référence Huawei", v: "34060568" },
      { k: "Débit", v: "9,95 – 11,3 Gbit/s (10 Gigabit Ethernet / OTU2)" },
      { k: "Plage d'accord", v: "1529,16 – 1560,61 nm (bande C)" },
      { k: "Grille", v: "50 GHz — longueur d'onde réglable sans changer de module" },
      { k: "Portée", v: "40 km sur fibre monomode" },
      { k: "Connecteur", v: "LC duplex" },
      { k: "Puissance d'émission", v: "−1 à +2 dBm" },
      { k: "Sensibilité de réception", v: "−16 dBm" },
      { k: "Cartes hôtes", v: "Cartes de ligne Huawei OSN 8800 (NS2, ND2, NQ2, NO2)" },
      { k: "État", v: "Neuf, jamais utilisé" },
      { k: "Quantité disponible", v: "3 unités en stock à Dakar" },
    ],
    longIntro: [
      "Le module ODX0480T1 est un TXFP 10G accordable en bande C : au lieu d'être fixé sur une longueur d'onde, il se règle sur la fréquence voulue (grille 50 GHz, de 1529,16 à 1560,61 nm). C'est ce qui permet de tenir un stock de rechange unique au lieu d'une référence différente par canal — et d'attribuer une longueur d'onde à un client sans immobiliser un module par fréquence.",
      "Il se monte dans les cartes de ligne Huawei OSN 8800 (NS2, ND2, NQ2, NO2) et couvre 40 km sur fibre monomode, avec −1 à +2 dBm en émission et −16 dBm de sensibilité en réception. Les trois unités disponibles sont neuves et n'ont jamais été utilisées (référence Huawei 34060568) : elles servent à équiper un nœud DWDM, à étendre un réseau de transport existant ou à constituer la réserve qui évite d'attendre une importation quand un canal tombe.",
    ],
    useCases: [
      "Équiper une carte de ligne OSN 8800 en service : un module par canal, réglé sur la longueur d'onde voulue",
      "Ajouter un client ou un circuit sur un lien DWDM existant sans stock de modules par fréquence",
      "Constituer un spare universel : un seul module accordable remplace n'importe quel canal",
      "Remplacer un module défaillant sur un réseau de transport en production",
      "Étendre la portée ou la capacité d'un lien optique jusqu'à 40 km",
    ],
    buying: [
      "Vérifier la référence exacte (34060568 / ODX0480T1) et la carte hôte prévue (NS2, ND2, NQ2, NO2)",
      "Valider la longueur d'onde à régler et le plan de fréquences du réseau",
      "Contrôler le budget optique du lien sur 40 km (atténuation, épissures, connecteurs)",
      "Prévoir les cordons LC duplex et, si la liaison est courte, des atténuateurs",
      "Pour un nœud en production, garder au moins un module accordable d'avance",
    ],
    included: [
      "Module accordable neuf, contrôlé avant expédition (état, référence, connecteurs)",
      "Emballage antistatique et mousse de protection pour le transport",
      "Conseil sur la longueur d'onde à régler et la compatibilité de la carte hôte",
      "Vente à l'unité : vous prenez le nombre de modules dont vous avez besoin",
      "Accompagnement au réglage et au contrôle des niveaux après installation",
    ],
    options: [
      "Cordons optiques LC duplex (monomode) à la longueur demandée",
      "Atténuateurs optiques pour les liaisons courtes",
      "Recherche d'autres modules OSN (10G, 40G, 100G) et de cartes de ligne sur demande",
      "Modules supplémentaires en réserve (jusqu'à 3 unités disponibles)",
      "Modules d'autres constructeurs compatibles, avec vérification préalable",
    ],
    includedTitle: "Ce qui est inclus dans la livraison",
    includedCardTitle: "Inclus dans la livraison",
    optionsTitle: "Options et accessoires",
    licenceNote:
      "Aucune licence n'est requise pour un module optique : il fonctionne dès l'insertion dans une carte hôte compatible, sous réserve de régler la longueur d'onde prévue par votre plan de fréquences.",
    faq: [
      {
        q: "Qu'est-ce qu'un module accordable et quel est l'avantage ?",
        a: "Un module accordable se règle sur la longueur d'onde voulue au lieu d'être fixé sur une seule fréquence. Concrètement, un seul module de rechange couvre tous vos canaux : moins de références à stocker, et une panne réparée sans attendre l'importation du module exact de la bonne fréquence.",
      },
      {
        q: "Dans quels équipements s'insère-t-il ?",
        a: "Dans les cartes de ligne Huawei OSN 8800 : NS2, ND2, NQ2 et NO2. Indiquez-nous votre châssis, la carte hôte et la longueur d'onde prévue : nous confirmons la compatibilité avant expédition.",
      },
      {
        q: "Quelle portée couvre-t-il ?",
        a: "40 km sur fibre monomode, avec une puissance d'émission de −1 à +2 dBm et une sensibilité de réception de −16 dBm. Au-delà, une amplification (OAU/OBU) ou une régénération est nécessaire selon le budget optique du lien.",
      },
      {
        q: "Les modules sont-ils neufs ?",
        a: "Oui : les trois unités sont neuves et n'ont jamais été utilisées, référence Huawei 34060568. Elles sont contrôlées avant expédition et livrées en emballage antistatique.",
      },
      {
        q: "Combien de modules faut-il pour une liaison ?",
        a: "Un module par extrémité et par canal si la liaison est directe entre deux cartes de ligne. Précisez-nous le nombre de canaux et la topologie (point à point ou nœud ROADM) : nous calculons le nombre exact et proposons la réserve utile.",
      },
    ],
    stockNote: "3 unités neuves en stock à Dakar — vente à l'unité.",
    condition: "Neuf, jamais utilisé",
    image: "/products/huawei-odx0480t1-txfp.webp",
    ogImage: "/products/huawei-odx0480t1-txfp.jpg",
    imgW: 907,
    imgH: 347,
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
    title: product.seoTitle || `${product.name} — ${product.category} à Dakar | Fallcon Tech`,
    description:
      product.seoDescription ||
      `${product.name} : ${product.short} ` +
        `Prix sur devis selon configuration, licences et installation — livré et installé au Sénégal.`,
    canonical: `${SITE_URL}${path}`,
    priority: "0.85",
    changefreq: "weekly",
  };
}
