# Boutique Fallcon Tech — prix par configuration

Mise à jour : 10 septembre 2026 · source des données : inventaire matériel (captures fournies)
+ prix marché relevés en ligne (revendeurs neuf/refurb, septembre 2026).

## Méthode

`prix boutique = valeur marché du matériel dans sa configuration (USD) × 600 F CFA/USD × marge locale 1,45`

La marge locale couvre : transport Dakar, dédouanement, tests et remise en état, garantie atelier,
installation/mise en service et support de proximité. Les prix affichés sur le site sont
**indicatifs « à partir de »** : ils varient selon cartes, licences et options logicielles.

## Références marché relevées

| Équipement | Référence marché (USD) | Source |
|---|---|---|
| Châssis NetEngine 8000 M14 + 2× IPU-1T2-A (+ 2× alim. DC) | neuf ≈ 5 000 | chinax.com |
| Carte 10×10GbE SFP+ CR5D00LAXF91 | neuf ≈ 2 403 / 2 500 | ormsystems.com, hkzt-tech.com |
| Carte IPU-1T2-A (CR8DIPU1T2C5) | devis (part n° 03033NRF) | telecomate.com |
| NetEngine 8000 M8 | neuf ≈ 9 500 (config. 4×100GE) | tradeindia.com |
| NetEngine 8000 M1A (16×10GE+12GE+4GE) | neuf 1 420 – 1 771 | chinax.com |
| S5735-S24T4X | neuf 871 (refurb) – 1 869 ; liste 1 893 | ormsystems.com, ycict.com |
| HiSecEngine USG6625E-AC | neuf 8 858 – 10 421 ; 9 700 (AED 35 667) | gntme.com, network-switch.com, tmtrdg.com |
| FusionServer 2288X/H V5 (2×4210, 64 Go, 2×550 W) | neuf/refurb 650 – 3 250 | server-ict.futurenowinc.com |
| FusionServer Pro 2288X V5 (2×4210, 64 Go, 4×2,4 To, 9460-8i) | neuf ≈ 4 500 (¥32 244) | zol.com.cn |
| Carte optique TN13OAU1xx (OAU1) | neuf 500 – 1 000 | made-in-china.com |

## Prix appliqués sur le site

| Produit | Configuration | Prix (F CFA) | Évolution |
|---|---|---|---|
| NetEngine 8000 M14 | 5U, **neuf/jamais utilisé**, 2× IPU-1T2-A, 2× PIC CR5D00LAXF91 (20 ports 10GbE SFP+, MACsec), 3× SFP+ 10G LR (1310 nm, monomode, 10 km, LC), 2× AC redondante, ventilation, kit mise à la terre, accessoires — licences Huawei non incluses | **17 000 000** | **fixé sur la base haute du marché neuf + marge (voir § M14 ci-dessous)** |
| NetEngine 8000 M8 | 3U, 2× IPU-1T2, cartes 10GbE, AC redondante | 2 500 000 | inchangé |
| NetEngine 8000 M1A | 1U, jusqu'à 352 Gbit/s selon configuration | 900 000 | inchangé |
| CloudEngine S5735-S24T4X | 24× GE + 4× 10GE SFP+, couche 3, 2 alimentations | 520 000 | **+160 000** (aligné sur 871 $ neuf / 400-600 $ refurb) |
| FusionServer Pro 2288X V5 | 2× Xeon Silver 4210, 128 Go, 8× 600 Go SAS, RAID 9460-8i, 2× 900 W | 1 800 000 | **+1 080 000** (la config. livrée est bien supérieure à la base) |
| USG6625E-AC (HiSecEngine) | 16× GE + 6× GE SFP + 6× 10GE SFP+, 16 Go, 20 Gbit/s | 3 200 000 | **+500 000** (neuf 8 858 – 10 421 $) |
| TN13OAU (OAU1) | Amplificateur optique C-band, OSN 6800/8800/9800 | 450 000 | **nouveau** |

## § M14 : les trois bases de prix (vérifié le 10/09/2026)

Le marché de ce routeur se lit sur **trois référentiels très éloignés** — d'où l'écart entre 8,9 M et 17 M.

| Base | Référence | Valeur matériel (châssis + 2 IPU + 2 PIC + optiques) | Prix 1,45× |
|---|---|---|---|
| **Plancher** — gros Chinois, meilleur prix | M14 + 2× IPU-1T2-A ≈ 5 000 $ (chinax, MOQ 2) ; M14 AC/DC 6 615 $ (networks-equipments, MOQ 1) ; PIC 10×10GE 2 403-2 500 $/u | ≈ 11 800 $ | ≈ **10,3 M F CFA** |
| **Base haute** — neuf, prix catalogue revendeur | M14 AC/DC haut de fourchette 13 665 $ (networks-equipments) + 2× PIC 4 900 $ + optiques 300 $ | ≈ 18 900 $ | ≈ **16,4 M F CFA** |
| **Liste / GPL** — ce que Huawei facture aux opérateurs | M14 + 2× IPU-2T-E-BU = 76 213 $ ; 8000E M14 = 38 108 $ ; IPU-2T-E-BU seule 20 147 $ (hongtelecom) | 38 000 – 107 000 $ | 33 – 93 M F CFA |

**Décision : 17 000 000 F CFA** — c'est la base haute du marché neuf + marge locale, et c'est ~2× sous la valeur « liste » équivalente. Prix défendable face à un opérateur, un FAI, une administration ou un intégrateur qui n'a pas d'accès direct à la Chine.

- **Plancher de négociation à ne pas franchir : ≈ 11 000 000 F CFA** (base haute coût d'achat + transport/douane ~15 %), sinon la marge ne couvre plus la garantie et l'installation.
- **Argument commercial** : comparer au prix « liste » constructeur (le même châssis se chiffre à 38 000–76 000 $ hors licences), pas au prix gris chinois.
- **⚠️ Licences** : les ports 10GE ne fonctionnent à pleine capacité qu'avec les licences Huawei (RTU port bandwidth, MACsec par port 10GE, Foundation/Advanced SW, SRv6, Port Slicing…). Sans licences, le débit est bridé. Les licences sont donc **hors prix** et font l'objet d'un devis séparé : c'est à la fois une protection (ne pas vendre un matériel « bridé » au prix plein) et une marge additionnelle.

Sources : networks-equipments.com, chinax.com, burrillandco.com, hongtelecom.com, ormsystems.com, hkzt-tech.com, support.huawei.com (License Usage Guide NetEngine 8000E M14/M8/M4, Hardware RTU Licenses).

## Écarts à confirmer avec le propriétaire

- L'inventaire liste **« CloudEngine S5735 — Switch »** *et* **« CloudEngine S5735-S24T4X — switchs 24 ports »** :
  traité comme un seul produit (le S24T4X est un modèle de la gamme S5735), avec mention
  « plusieurs unités disponibles ». À scinder si ce sont des unités distinctes.
- Le **NetEngine 8000 M8** n'apparaît pas dans l'inventaire transmis : la fiche a été conservée
  (matériel déjà en ligne) et ses specs corrigées (3U, 2,4 Tbit/s — l'ancienne fiche indiquait 4,8 Tbit/s).
- La section « Équipement optique » de la capture est tronquée : seul le **TN13OAU (quantité 1)**
  est visible. À compléter si d'autres références optiques (SFP+, OLP, etc.) font partie du stock.
