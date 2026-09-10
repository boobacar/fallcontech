// =============================================================================
// Fallcon Tech — Usine à pages SEO boutique, couche ANGLAISE (Afrique anglophone)
// -----------------------------------------------------------------------------
// Structure symétrique de la couche FR (aucun hreflang nécessaire : les pays visés
// sont disjoints — FR = Afrique francophone, EN = Afrique anglophone) :
//   /huawei-network-equipment                   → hub
//   /huawei-network-equipment/category/<famille> → 5 catégories (EN)
//   /huawei-network-equipment/country/<pays>     → 8 hubs pays (EN)
//   /huawei-network-equipment/product/<produit>  → 7 fiches produit (EN)
//   /huawei-network-equipment/<pays>/<produit>   → 8 × 7 = 56 pages produit × pays (EN)
// (préfixe racine plutôt que /en/ : vercel.json redirige tout /en/* en 301 legacy)
// ⚠️ Prix : jamais de montant ici.
// =============================================================================

import { products } from "./products.js";
import { composeDesc, composeTitle } from "./seoTextUtils.js";

export const BOUTIQUE_EN_COUNTRIES = [
  {
    slug: "nigeria",
    name: "Nigeria",
    capital: "Lagos",
    cities: "Lagos, Abuja, Port Harcourt, Kano, Ibadan",
    currency: "Naira (NGN)",
    zone: "ECOWAS",
    mobileMoney: "bank transfer, USSD transfer, Opay/Palmpay",
    flag: "🇳🇬",
    note:
      "Nigeria is the largest telecom and data-centre market in West Africa: operators, ISPs, banks and state agencies are constantly expanding capacity, and demand for carrier-grade Huawei equipment is strong.",
  },
  {
    slug: "ghana",
    name: "Ghana",
    capital: "Accra",
    cities: "Accra, Kumasi, Takoradi, Tamale",
    currency: "Cedi (GHS)",
    zone: "ECOWAS",
    mobileMoney: "MTN MoMo, Vodafone Cash, AirtelTigo Money",
    flag: "🇬🇭",
    note:
      "Ghana has a mature ISP and enterprise market, with university campuses, banks and data centres investing in access, aggregation and security equipment.",
  },
  {
    slug: "sierra-leone",
    name: "Sierra Leone",
    capital: "Freetown",
    cities: "Freetown, Bo, Kenema, Makeni",
    currency: "Leone (SLE)",
    zone: "ECOWAS",
    mobileMoney: "Orange Money, Afrimoney",
    flag: "🇸🇱",
    note:
      "Sierra Leone's operators and institutions are modernising their transmission and IT infrastructure; sourcing from Dakar keeps lead times short and customs straightforward within ECOWAS.",
  },
  {
    slug: "liberia",
    name: "Liberia",
    capital: "Monrovia",
    cities: "Monrovia, Gbarnga, Buchanan, Harper",
    currency: "Liberian dollar (LRD)",
    zone: "ECOWAS",
    mobileMoney: "MTN MoMo, Orange Money",
    flag: "🇱🇷",
    note:
      "Liberia is a compact market where a single well-equipped core router or switch can serve an entire operator or institution — spare availability and technician support matter more than brand new pricing.",
  },
  {
    slug: "gambia",
    name: "The Gambia",
    capital: "Banjul",
    cities: "Banjul, Serrekunda, Brikama",
    currency: "Dalasi (GMD)",
    zone: "ECOWAS",
    mobileMoney: "QMoney, Afrimoney",
    flag: "🇬🇲",
    note:
      "The Gambia is a neighbour market with direct road access from Dakar: equipment, spares and technical support can reach Banjul and Serrekunda quickly.",
  },
  {
    slug: "kenya",
    name: "Kenya",
    capital: "Nairobi",
    cities: "Nairobi, Mombasa, Kisumu, Nakuru",
    currency: "Kenyan shilling (KES)",
    zone: "East African Community",
    mobileMoney: "M-Pesa, Airtel Money",
    flag: "🇰🇪",
    note:
      "Kenya is the East African hub for data centres, fintech and ISP infrastructure; Huawei routing, switching and firewall platforms are widely deployed and spares are always in demand.",
  },
  {
    slug: "uganda",
    name: "Uganda",
    capital: "Kampala",
    cities: "Kampala, Entebbe, Jinja, Mbarara",
    currency: "Ugandan shilling (UGX)",
    zone: "East African Community",
    mobileMoney: "MTN MoMo, Airtel Money",
    flag: "🇺🇬",
    note:
      "Uganda's operators, banks and universities continue to expand aggregation and campus networks, with mobile money used for most day-to-day payments.",
  },
  {
    slug: "tanzania",
    name: "Tanzania",
    capital: "Dar es Salaam",
    cities: "Dar es Salaam, Dodoma, Arusha, Mwanza",
    currency: "Tanzanian shilling (TZS)",
    zone: "East African Community · SADC",
    mobileMoney: "M-Pesa, Tigo Pesa, Airtel Money",
    flag: "🇹🇿",
    note:
      "Tanzania combines a growing ISP market with strong institutional demand (banks, universities, public projects) for carrier-grade network and security equipment.",
  },
];

export const BOUTIQUE_EN_FAMILIES = [
  {
    slug: "routers",
    cat: "Routeurs",
    label: "Huawei NetEngine 8000 routers",
    title: "Huawei NetEngine 8000 routers — supply & quote across Africa | Fallcon Tech",
    description:
      "Huawei NetEngine 8000 M14, M8 and M1A routers in stock at Fallcon Tech (Dakar): configurations, licences and shipping across Africa. Quote within 24 h.",
    h1: "Huawei NetEngine 8000 routers: supply and deployment across Africa",
    pitch: "modular core and aggregation routers (3U/5U) for operators, ISPs and large enterprise networks",
    shortNote: "3U/5U chassis for operators and large networks.",
    lead:
      "Fallcon Tech supplies Huawei NetEngine 8000 routers — chassis, IPU switching cards, interface cards and optics — tested before shipping, pre-configured for your network and delivered with the configuration record.",
    quickAnswer:
      "Fallcon Tech (Dakar) supplies Huawei NetEngine 8000 M14, M8 and M1A routers with IPU cards, 10GE interface cards and optics. Pricing on quotation depending on configuration and licences; shipping and integration support across Africa.",
    useCases: [
      "Operator and ISP core or aggregation (BGP, MPLS, SR, EVPN)",
      "5G backhaul and multi-service collection in dense areas",
      "Interconnection of critical sites (banks, government, universities)",
      "Peering / IXP and redundant internet egress",
      "Capacity headroom: chassis sized for several years of growth",
    ],
    buying: [
      "Chassis, IPU switching cards, interface cards (PIC) and optics are specified together",
      "Huawei licences (port RTU, MACsec, software licences) determine the usable capacity",
      "Redundancy (power, control cards, fans) is a selection criterion for critical sites",
      "Our chassis ship configured and tested: the quotation lists cards, optics and licences",
    ],
    faq: [
      {
        q: "What is the difference between the NetEngine 8000 M8, M14 and M1A?",
        a: "The M1A is a fixed 1U router for access and backhaul. The M8 (3U, 8 slots, up to 4.8 Tbit/s) and M14 (5U, 14 slots, up to 7.2 Tbit/s) are modular: interface cards are added as needed, with redundant control and power.",
      },
      {
        q: "Do the routers ship pre-configured?",
        a: "Yes. We ship the chassis fully equipped (IPU cards, PICs, optics), tested before dispatch and with the configuration record. Integration and commissioning can be included in the quotation.",
      },
      {
        q: "Can I start with a smaller configuration and expand later?",
        a: "Yes. M8 and M14 chassis accept additional cards, so you can start with the interface cards you need today and keep room for capacity growth, subject to the corresponding licences.",
      },
    ],
  },
  {
    slug: "switches",
    cat: "Switches",
    label: "Huawei CloudEngine switches",
    title: "Huawei CloudEngine switches — access & aggregation supply | Fallcon Tech",
    description:
      "Huawei CloudEngine S5735 switches in stock at Fallcon Tech (Dakar): 24-48 port Layer 3 access, 10GE uplinks, dual power. Quote and shipping across Africa.",
    h1: "Huawei CloudEngine switches: access and aggregation supply",
    pitch: "Layer 3 access and aggregation switches for enterprise, campus and data-centre networks",
    shortNote: "Layer 3 access, 10GE SFP+ uplinks.",
    lead:
      "Fallcon Tech supplies Huawei CloudEngine switches for campus, branch, data-centre access and surveillance networks — tested, delivered with compatible optics and covered by our workshop warranty.",
    quickAnswer:
      "Fallcon Tech (Dakar) supplies Huawei CloudEngine S5735 switches: 24-48 Gigabit ports, 4 × 10GE SFP+ uplinks, Layer 3 features, iStack and dual power. Pricing on quotation; shipping across Africa.",
    useCases: [
      "Campus access and aggregation (offices, factories, hotels, clinics)",
      "iStack to manage several floors as a single logical switch",
      "10GE SFP+ uplinks towards aggregation or core",
      "Redundant power for sites that cannot afford downtime",
      "Data-centre access and CCTV / VoIP networks",
    ],
    buying: [
      "Check copper port density and the number of 10GE uplinks required",
      "Provide two power supplies for redundancy on critical sites",
      "Optical reach (LR 10 km, SR 300 m) drives the SFP+ modules to include",
      "Our switches ship tested, with compatible optics quoted separately",
    ],
    faq: [
      {
        q: "Is the S5735-S24T4X enough for an enterprise network?",
        a: "For most deployments, yes: 24 Gigabit copper ports for endpoints, 4 × 10GE SFP+ uplinks to aggregation, Layer 3 routing features, stacking and dual power. The S5735 range also exists in 48-port versions.",
      },
      {
        q: "Do I need extra optical modules?",
        a: "Only if you use the fibre uplinks: one SFP+ module per end of each link. We price 10G SR/LR modules in the quotation according to real distances.",
      },
      {
        q: "Can it power IP cameras or phones?",
        a: "Not on a non-PoE S5735-S24T4X: a PoE+ model is required. Tell us in your request if CCTV or VoIP is part of the scope and we propose the right PoE reference.",
      },
    ],
  },
  {
    slug: "servers",
    cat: "Serveurs",
    label: "Huawei FusionServer servers",
    title: "Huawei FusionServer rack servers — configured supply | Fallcon Tech",
    description:
      "Huawei FusionServer 2288X V5 rack servers, configured and tested: dual Xeon, 128 GB RAM, SAS drives, RAID. Quote and shipping across Africa.",
    h1: "Huawei FusionServer rack servers: configured supply",
    pitch: "2U dual-socket rack servers for virtualisation, databases and business applications",
    shortNote: "2U dual-Xeon for virtualisation and data.",
    lead:
      "Fallcon Tech supplies Huawei FusionServer rack servers, configured and tested (CPU, memory, drives, RAID controller, redundant power) with the exact bill of materials in the quotation.",
    quickAnswer:
      "Fallcon Tech (Dakar) supplies Huawei FusionServer 2288X V5 rack servers: 2U dual Xeon Silver, 128 GB DDR4 ECC, 8 × 600 GB SAS, MegaRAID 9460-8i, dual 900 W power. Pricing on quotation; shipping across Africa.",
    useCases: [
      "Virtualisation (VMware, KVM, Proxmox) and consolidation of ageing servers",
      "Databases and business applications (ERP, clinic management, records)",
      "File and backup server with redundant SAS bays",
      "Internal hosting of web applications and directories",
      "Compute node for laboratories, universities or research centres",
    ],
    buying: [
      "Size on cores, memory and above all storage (bays and RAID controller)",
      "Confirm the RAID card and its cache: that is what protects your data",
      "Data-centre used hardware remains relevant when drives and warranty are included",
      "The quotation lists CPUs, memory, drives, RAID controller, power supplies and warranty",
    ],
    faq: [
      {
        q: "Is a used configuration reliable for professional use?",
        a: "Yes when it is tested and warranted: we test the machine (memory, drives, RAID controller, redundant power) and document the exact configuration in the quotation. It is the best capacity-per-price option for virtualisation and storage.",
      },
      {
        q: "Does the server come with an operating system?",
        a: "Hardware ships ready to install. Depending on the project we can install and configure the hypervisor or OS (ESXi/Hyper-V/Proxmox/Linux) and backup — mention it in your request.",
      },
      {
        q: "Can memory and drives be added later?",
        a: "Yes: the 2288X V5 offers 24 DIMM slots and hot-swap 2.5\" bays. Later upgrades are quoted separately.",
      },
    ],
  },
  {
    slug: "firewalls",
    cat: "Sécurité & Pare-feu",
    label: "Huawei HiSecEngine firewalls",
    title: "Huawei HiSecEngine NGFW firewalls — supply & quote | Fallcon Tech",
    description:
      "Huawei HiSecEngine USG6600E next-generation firewalls: 20 Gbit/s, IPsec and SSL VPN, 16 × GE + 6 × 10GE. Quote and shipping across Africa.",
    h1: "Huawei HiSecEngine firewalls: perimeter and VPN security",
    pitch: "next-generation firewalls (NGFW) for enterprise perimeter, VPN and segmentation",
    shortNote: "NGFW 1U: 20 Gbit/s, IPsec and SSL VPN.",
    lead:
      "Fallcon Tech supplies Huawei HiSecEngine firewalls for enterprise and public-sector perimeters — configured with your WAN links, zones, policies and VPN tunnels, with licences quoted transparently.",
    quickAnswer:
      "Fallcon Tech (Dakar) supplies Huawei HiSecEngine USG6600E firewalls: 20 Gbit/s throughput, 15 Gbit/s IPsec VPN, SSL VPN, 16 × GE + 6 × GE SFP + 6 × 10GE SFP+, 16 GB memory. Pricing on quotation; shipping across Africa.",
    useCases: [
      "Internet perimeter protection for enterprises and public institutions",
      "Site-to-site IPsec VPN between headquarters, branches and warehouses",
      "Network segmentation (guests, IoT, workstations, servers)",
      "SSL VPN for remote staff",
      "Application control and logging for compliance",
    ],
    buying: [
      "Compare throughput figures: overall, IPsec VPN and concurrent sessions",
      "Interface count (GE / 10GE SFP+) must cover your WAN links and zones",
      "Security licences and signature updates are separate from the appliance",
      "The quotation includes base configuration: WAN, zones, rules, VPN, logging",
    ],
    faq: [
      {
        q: "Are licences mandatory on a Huawei firewall?",
        a: "The appliance handles routing and base policies; advanced security functions and their updates depend on licences. Our quotations state explicitly what is included and what remains optional.",
      },
      {
        q: "Can this firewall connect several sites?",
        a: "Yes: site-to-site IPsec tunnels link a headquarters to its branches, with optional redundancy across two WAN links — a common configuration for multi-site companies.",
      },
      {
        q: "Which model for a 1 Gbit/s link?",
        a: "The USG6600E range covers high-throughput enterprise and data-centre deployments. Size on inspected throughput, not raw throughput: tell us the number of users, sites and WAN links and we will size it.",
      },
    ],
  },
  {
    slug: "optical-wdm",
    cat: "Optique & WDM/OTN",
    label: "Optical & WDM/OTN transmission",
    title: "Optical boards & WDM/OTN spares — Huawei OSN supply | Fallcon Tech",
    description:
      "Huawei optical boards for WDM/OTN networks (OptiX OSN): C-band amplifiers and spares, tested, with compatibility check. Quote across Africa.",
    h1: "Optical boards and WDM/OTN spares for Huawei OSN networks",
    pitch: "optical cards and modules to increase transport capacity over existing fibre",
    shortNote: "WDM/OTN boards for Huawei OSN chassis.",
    lead:
      "Fallcon Tech supplies optical boards for Huawei OptiX OSN transport platforms — amplifiers, spare cards and modules — with reference verification before quotation and fast dispatch for urgent spares.",
    quickAnswer:
      "Fallcon Tech (Dakar) supplies Huawei optical boards for WDM/OTN networks: C-band amplifiers (OAU), spare line cards and modules for OptiX OSN 6800/8800/9800. Compatibility is confirmed from the reference before quotation.",
    useCases: [
      "C-band optical amplification on an existing WDM/OTN link",
      "Extending the reach of a metro or inter-city link without regeneration",
      "Capacity densification for operators and infrastructure operators",
      "Replacing a failed board on a live OSN chassis",
      "Critical spare to cut downtime on an optical link",
    ],
    buying: [
      "Capture the exact board reference and function (OAU, OBU, OLP, TDCM…)",
      "Check the compatible OSN subrack and the valid slot",
      "Gain range and output power determine link performance",
      "The quotation states the exact reference, condition and warranty",
    ],
    faq: [
      {
        q: "How do I check compatibility of a Huawei optical board?",
        a: "By reference (for example TN13OAU, TN11OAU1) and target chassis family: OSN 6800, OSN 8800, OSN 9800. Send a photo of the board and chassis and we confirm compatibility and the valid slot before quoting.",
      },
      {
        q: "Do you supply urgent spares?",
        a: "Yes: optical boards are often bought as spares. Give the reference and quantity in your request and we confirm dispatch time to your capital.",
      },
      {
        q: "Can you support commissioning?",
        a: "We provide the board, its documentation and, when required, remote assistance during installation — included in the quotation as an option.",
      },
    ],
  },
];

const EN_PRODUCTS_BY_CAT = (cat) => products.filter((p) => p.category === cat);

const enTitle = composeTitle;
const enDesc = composeDesc;

function buildEnFamilyPage(family) {
  const path = `/huawei-network-equipment/category/${family.slug}`;
  const list = EN_PRODUCTS_BY_CAT(family.cat);
  return {
    family: "categorie",
    lang: "en",
    path,
    title: enTitle(family.title.replace(" | Fallcon Tech", "")),
    description: enDesc(`${family.label} in stock at Fallcon Tech (Dakar). ${family.shortNote}`, "Pricing on quotation, shipping across Africa within 24 h."),
    h1: family.h1,
    overline: `Shop · ${family.cat}`,
    lead: family.lead,
    quickAnswer: family.quickAnswer,
    sections: [
      { title: "Where is it used?", intro: "Typical projects for this equipment:", items: family.useCases },
      { title: "How to specify it", intro: "What to settle before ordering:", items: family.buying },
    ],
    faq: family.faq,
    products: list,
    familySlug: family.slug,
    cat: family.cat,
  };
}

function buildEnCountryPage(country) {
  const path = `/huawei-network-equipment/country/${country.slug}`;
  return {
    family: "pays",
    lang: "en",
    path,
    title: enTitle(
      `Huawei network equipment supplier in ${country.name}: routers, switches, firewalls`,
    ),
    description: enDesc(
      `Huawei enterprise network equipment supplier in ${country.name}: NetEngine 8000 routers, CloudEngine switches, HiSecEngine firewalls, FusionServer servers, WDM/OTN optics.`,
      `Quotation and shipping to ${country.capital}.`,
    ),
    h1: `Huawei network equipment in ${country.name}`,
    overline: `${country.flag} ${country.name} · ${country.zone}`,
    lead:
      `For operators, banks, government agencies and enterprises in ${country.name}, Fallcon Tech supplies Huawei NetEngine 8000 routers, CloudEngine switches, HiSecEngine firewalls, FusionServer servers and WDM/OTN optical boards. ${country.note}`,
    quickAnswer: enDesc(
      `Fallcon Tech supplies Huawei network equipment in ${country.name} (routers, switches, firewalls, servers, optical boards): tested hardware, quotation within 24 h, shipping from Dakar to ${country.capital}.`,
      `Payment by bank transfer or mobile money (${country.mobileMoney}).`,
      340,
    ),
    sections: [
      {
        title: `What we deliver to ${country.name}`,
        intro: "Hardware in stock; configurations confirmed in the quotation:",
      },
      {
        title: `Buying, importing and payment in ${country.name}`,
        intro: "Clear terms for a confident purchase:",
        items: [
          "Itemised quotation: hardware, cards and modules, licences, warranty and logistics",
          `Shipping from Dakar (air or regional road freight) to ${country.capital}${country.cities ? ` and other cities (${country.cities})` : ""}`,
          `Payment by bank transfer or mobile money (${country.mobileMoney}) — terms stated in the quotation`,
          `Zone ${country.zone}: we prepare the required export documents`,
          `Invoicing currency: ${country.currency}`,
        ],
      },
      {
        title: "Installation, network integration, maintenance and support",
        intro: "Beyond the hardware:",
        items: [
          "Pre-configuration in our workshop before dispatch (addressing, VLANs, base policy, VPN)",
          "Remote assistance during commissioning (internet access or screen sharing)",
          "Configuration documentation handed over with the equipment",
          "Licences and options quoted in the same document — no surprises",
        ],
      },
    ],
    faq: [
      {
        q: `Do you ship Huawei network equipment to ${country.name}?`,
        a: `Yes. We ship from Dakar to ${country.capital}: NetEngine 8000 routers, CloudEngine switches, HiSecEngine firewalls, FusionServer servers and WDM/OTN optical boards. Lead time and shipping mode are confirmed in the quotation based on weight and import formalities.`,
      },
      {
        q: `Can we pay in ${country.currency}?`,
        a: `Invoicing can be issued in ${country.currency}; payment is made by bank transfer or mobile money (${country.mobileMoney}) under the terms stated in the quotation.`,
      },
      {
        q: `What warranty applies in ${country.name}?`,
        a: "Every unit is tested before dispatch and covered by our workshop warranty, detailed in the quotation. Huawei licences and their support are provided by the manufacturer and quoted separately.",
      },
      {
        q: `How do we get a quotation for ${country.capital}?`,
        a: "Send the reference or the configuration you need through the contact page or WhatsApp. We reply with pricing, the exact configuration, lead time and shipping terms.",
      },
    ],
    country,
    name: country.name,
    products,
  };
}

function buildEnProductCountryPage(country, product) {
  const path = `/huawei-network-equipment/${country.slug}/${product.slug}`;
  const family = BOUTIQUE_EN_FAMILIES.find((f) => f.cat === product.category) || BOUTIQUE_EN_FAMILIES[0];
  return {
    family: "produit-pays",
    lang: "en",
    path,
    title: enTitle(`${product.name} in ${country.name}: quotation and delivery to ${country.capital}`),
    description: enDesc(`${product.seoPitchEn || product.seoPitch || product.short}`, `Quotation within 24 h, configuration and shipping to ${country.capital} (${country.name}).`),
    h1: `${product.name} in ${country.name}`,
    overline: `${country.flag} ${product.category} · ${country.zone}`,
    lead: `${product.seoPitchEn || product.seoPitch || product.short} We supply this equipment in ${country.name} (${country.capital} first), tested, pre-configured for your requirement and delivered with its configuration record.`,
    quickAnswer: enDesc(
      `${product.name} available in ${country.name} from Fallcon Tech: ${product.seoPitchEn || product.seoPitch || product.short} Pricing on quotation (configuration, licences and warranty), shipping to ${country.capital}.`,
      "",
      340,
    ),
    sections: [
      { title: `Technical specification and delivered configuration (datasheet)`, intro: `Key characteristics of the ${product.name}:`, items: product.specsEn || product.specs },
      { title: `Typical projects in ${country.name}`, intro: "Common uses for this equipment in the region:", items: family.useCases.slice(0, 4) },
      {
        title: `Quotation, licences and delivery to ${country.capital}`,
        intro: "What our quotation specifies:",
        items: [
          "Exact reference, condition and configuration of the equipment",
          "Huawei licences and options, listed separately",
          `Shipping from Dakar to ${country.capital} — mode and lead time confirmed in the quotation`,
          `Payment by bank transfer or mobile money (${country.mobileMoney})`,
          "Workshop warranty and commissioning assistance",
        ],
      },
    ],
    faq: [
      {
        q: `What does the ${product.name} cost in ${country.name}?`,
        a: "Pricing depends on the delivered configuration (cards, optical modules, licences) and is established on quotation within 24 h, with the exact reference. Send us the target configuration and delivery city.",
      },
      {
        q: `Do you deliver to ${country.capital}?`,
        a: `Yes, we ship from Dakar to ${country.capital}${country.cities ? ` and other cities (${country.cities})` : ""}. Shipping mode and lead time are confirmed in the quotation.`,
      },
      {
        q: "Does the equipment arrive configured?",
        a: "We ship tested hardware pre-configured with your details (addressing, VLANs, base security policy). On-site or remote installation can be added to the quotation.",
      },
      {
        q: "How does payment work?",
        a: `Invoicing in ${country.currency} is possible; payment by bank transfer or mobile money (${country.mobileMoney}) under the terms stated in the quotation.`,
      },
    ],
    country,
    name: country.name,
    product,
    products,
    familySlug: family.slug,
  };
}

export function buildEnBoutiqueHub() {
  const path = "/huawei-network-equipment";
  return {
    family: "hub-en",
    lang: "en",
    path,
    title: enTitle("Huawei network equipment for Africa: routers, switches, firewalls"),
    description: enDesc(
      "Fallcon Tech supplies Huawei enterprise network equipment across Africa: NetEngine 8000 routers, CloudEngine switches, HiSecEngine firewalls, FusionServer servers and WDM/OTN optics.",
      "Quotation within 24 h from Dakar.",
    ),
    h1: "Huawei network equipment supplied across Africa",
    overline: "Shop · English",
    lead:
      "Routeurs, switches, firewalls, servers and optical boards: Fallcon Tech (Dakar) supplies tested Huawei enterprise equipment, pre-configured and shipped across English-speaking Africa — Nigeria, Ghana, Sierra Leone, Liberia, The Gambia, Kenya, Uganda and Tanzania.",
    quickAnswer:
      "Fallcon Tech supplies Huawei enterprise network equipment across Africa — NetEngine 8000 routers, CloudEngine switches, HiSecEngine firewalls, FusionServer servers, WDM/OTN optical boards — tested, pre-configured, with pricing on quotation and shipping from Dakar.",
    sections: [
      {
        title: "Why source from Fallcon Tech",
        intro: "What you get with every order:",
        items: [
          "Hardware tested in our workshop before dispatch, with the configuration record",
          "Itemised quotation covering hardware, optics, licences, warranty and logistics",
          "Pre-configuration to your addressing, VLAN and security plan",
          "Remote commissioning assistance and documentation",
          "Regional logistics: air or road freight, export documents prepared",
        ],
      },
      {
        title: "Countries we serve",
        intro: "English-speaking Africa coverage:",
        items: [
          "West Africa: Nigeria, Ghana, Sierra Leone, Liberia, The Gambia",
          "East Africa: Kenya, Uganda, Tanzania",
          "Other African countries on request — tell us your delivery city",
        ],
      },
    ],
    faq: [
      { q: "Which Huawei equipment can you supply?", a: "NetEngine 8000 routers (M1A, M8, M14), CloudEngine switches, HiSecEngine USG6600E firewalls, FusionServer rack servers and OptiX OSN optical boards, plus optics, cards and spares." },
      { q: "How fast can you quote?", a: "Within 24 h for standard requests: send the reference or target configuration, quantity and delivery city." },
      { q: "Do you deliver outside the countries listed?", a: "Yes — shipping is arranged from Dakar to most African countries. Send us your delivery city and we confirm the logistics and lead time." },
      { q: "Is the equipment new or refurbished?", a: "Both are available: each quotation states the exact condition, the configuration delivered and the warranty that applies." },
    ],
    products,
  };
}

function buildEnProductPage(product) {
  const path = `/huawei-network-equipment/product/${product.slug}`;
  const family = BOUTIQUE_EN_FAMILIES.find((f) => f.cat === product.category) || BOUTIQUE_EN_FAMILIES[0];
  return {
    family: "produit-en",
    lang: "en",
    path,
    title: enTitle(`${product.name}: configuration, quotation and delivery in Africa`),
    description: enDesc(
      `${product.seoPitchEn || product.seoPitch || product.short}`,
      "Pricing on quotation, pre-configuration and shipping across Africa within 24 h.",
    ),
    h1: `${product.name}`,
    overline: `Shop · ${product.category}`,
    lead: `${product.seoPitchEn || product.seoPitch || product.short} Fallcon Tech supplies this unit tested, pre-configured for your requirement and delivered with its configuration record, with shipping across Africa from Dakar.`,
    quickAnswer: enDesc(
      `${product.name} available from Fallcon Tech (Dakar): ${product.seoPitchEn || product.seoPitch || product.short} Pricing on quotation depending on configuration and licences, with shipping across Africa.`,
      "",
      340,
    ),
    sections: [
      { title: `Technical specification and delivered configuration (datasheet)`, intro: `Key characteristics of the ${product.name}:`, items: product.specsEn || product.specs },
      { title: "Where is it used?", intro: "Typical projects for this equipment:", items: family.useCases.slice(0, 4) },
      {
        title: "Quotation, licences and logistics",
        intro: "What our quotation specifies:",
        items: [
          "Exact reference, condition and configuration of the equipment",
          "Huawei licences and options, listed separately",
          "Shipping from Dakar (air or road freight), export documents prepared",
          "Payment by bank transfer — mobile money where available",
          "Workshop warranty and remote commissioning assistance",
        ],
      },
    ],
    faq: [
      { q: `How much does the ${product.name} cost?`, a: "Pricing depends on the delivered configuration (cards, optical modules, licences) and is established on quotation within 24 h, with the exact reference and everything included." },
      { q: "Do you ship this equipment to my country?", a: "Yes — we ship from Dakar to most African countries (Nigeria, Ghana, Sierra Leone, Liberia, The Gambia, Kenya, Uganda, Tanzania and others on request). Send your delivery city for a confirmed lead time." },
      { q: "Does it arrive configured?", a: "We ship tested hardware pre-configured with your details (addressing, VLANs, base security policy, VPN where relevant). On-site or remote commissioning can be added." },
      { q: "Which licences should we budget for?", a: "Depending on model and features: Huawei hardware licences (port capacity, MACsec) and software licences (feature sets, security options). They are quoted separately so there is no surprise." },
      ...family.faq.slice(0, 2),
    ],
    product,
    products,
    familySlug: family.slug,
  };
}

export function getAllBoutiqueEnPages() {
  return [
    buildEnBoutiqueHub(),
    ...BOUTIQUE_EN_FAMILIES.map(buildEnFamilyPage),
    ...BOUTIQUE_EN_COUNTRIES.map(buildEnCountryPage),
    ...products.map(buildEnProductPage),
    ...BOUTIQUE_EN_COUNTRIES.flatMap((country) =>
      products.map((product) => buildEnProductCountryPage(country, product)),
    ),
  ];
}
