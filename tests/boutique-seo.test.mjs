// Tests de l'usine à pages SEO boutique (FR + EN)
// Garantit que les ~210 pages générées restent propres (titres, grammaire, unicité,
// absence de prix) avant chaque build/déploiement.
import test from "node:test";
import assert from "node:assert/strict";
import {
  getAllBoutiquePages,
  getBoutiquePageByPath,
  boutiqueSeoForPath,
  BOUTIQUE_FAMILIES,
  BOUTIQUE_EN_FAMILIES,
  BOUTIQUE_TITLE_OVERRIDES,
} from "../src/data/boutiqueGeoData.js";
import { BOUTIQUE_EN_COUNTRIES } from "../src/data/boutiqueEnData.js";
import { products } from "../src/data/products.js";

const pages = getAllBoutiquePages();
const fr = pages.filter((p) => p.lang !== "en");
const en = pages.filter((p) => p.lang === "en");
const count = (list, family) => list.filter((p) => p.family === family).length;

test("couverture FR : catégories + pays + produit × pays", () => {
  assert.equal(count(fr, "categorie"), BOUTIQUE_FAMILIES.length);
  assert.equal(count(fr, "pays"), 16);
  assert.equal(count(fr, "produit-pays"), 16 * products.length);
  assert.equal(fr.length, BOUTIQUE_FAMILIES.length + 16 + 16 * products.length);
});

test("couverture EN : hub + catégories + pays + produits + produit × pays", () => {
  assert.equal(count(en, "hub-en"), 1);
  assert.equal(count(en, "categorie"), BOUTIQUE_EN_FAMILIES.length);
  assert.equal(count(en, "pays"), BOUTIQUE_EN_COUNTRIES.length);
  assert.equal(count(en, "produit-en"), products.length);
  assert.equal(
    count(en, "produit-pays"),
    BOUTIQUE_EN_COUNTRIES.length * products.length,
  );
  assert.equal(
    en.length,
    1 + BOUTIQUE_EN_FAMILIES.length + BOUTIQUE_EN_COUNTRIES.length + products.length * (1 + BOUTIQUE_EN_COUNTRIES.length),
  );
});

test("les chemins sont uniques et sans placeholder non rempli", () => {
  const paths = pages.map((p) => p.path);
  assert.equal(new Set(paths).size, paths.length, "chemins dupliqués");
  const withPlaceholder = pages.filter((p) => /\{[a-zA-Z]+\}/.test(JSON.stringify(p)));
  assert.equal(withPlaceholder.length, 0, `placeholders non remplis : ${withPlaceholder.map((p) => p.path)}`);
  en.forEach((p) =>
    assert.ok(p.path.startsWith("/huawei-network-equipment"), `chemin EN inattendu : ${p.path}`),
  );
  fr.forEach((p) => assert.ok(p.path.startsWith("/boutique"), `chemin FR inattendu : ${p.path}`));
});

test("titres et descriptions tiennent dans les fenêtres SERP", () => {
  for (const page of pages) {
    assert.ok(page.title.length > 25 && page.title.length <= 88, `title ${page.title.length} : ${page.path}`);
    assert.ok(
      page.description.length > 60 && page.description.length <= 165,
      `description ${page.description.length} : ${page.path}`,
    );
    assert.ok(page.h1 && page.h1.length > 10, `h1 manquant : ${page.path}`);
    assert.ok(page.quickAnswer && page.quickAnswer.length > 80, `réponse rapide manquante : ${page.path}`);
  }
});

test("les descriptions anglaises ne contiennent pas de reliquat français ou de CTA tronqué", () => {
  for (const page of en) {
    assert.ok(!/\b(Dakar|Sénégal|devis|livraison)\b/.test(page.title), `title EN avec mot FR : ${page.path}`);
    assert.ok(!page.description.endsWith("…"), `description EN tronquée : ${page.path}`);
    assert.ok(/[.!]$/.test(page.description), `description EN sans ponctuation finale : ${page.path}`);
  }
});

test("grammaire française : pas de « en Sénégal », « du Côte d'Ivoire », « de Abidjan »", () => {
  const wrongPrep = /\ben (Sénégal|Mali|Burkina Faso|Bénin|Togo|Niger|Cap-Vert|Cameroun|Gabon|Tchad)\b/i;
  const wrongGen = /\bdu (Côte d'Ivoire|Guinée|Guinée-Bissau|Mauritanie|Gambie|RDC)\b/i;
  const wrongElision = /\bde (Abidjan|Ouagadougou)\b/;
  const offences = fr.filter((p) => {
    const text = JSON.stringify(p);
    return wrongPrep.test(text) || wrongGen.test(text) || wrongElision.test(text);
  });
  assert.equal(offences.length, 0, `fautes de préposition : ${offences.map((p) => p.path).join(", ")}`);
});

test("aucun prix n'est publié dans les données boutique (FR et EN)", () => {
  const offences = pages.filter((p) => {
    const text = JSON.stringify(p);
    return /F\s?CFA/i.test(text) || /\bprix\s*:/i.test(text) || /\b\d{6,}\b/.test(text);
  });
  assert.equal(offences.length, 0, `montants détectés : ${offences.map((p) => p.path).join(", ")}`);
});

test("chaque page a un contenu unique et une FAQ exploitable", () => {
  const leads = pages.map((p) => p.lead);
  assert.equal(new Set(leads).size, pages.length, "contenus dupliqués entre pages");
  for (const page of pages) {
    assert.ok(Array.isArray(page.faq) && page.faq.length >= 3, `FAQ trop courte : ${page.path}`);
    page.faq.forEach((item) => {
      assert.ok(item.q && item.q.length > 10, `question vide : ${page.path}`);
      assert.ok(item.a && item.a.length > 40, `réponse trop courte : ${page.path}`);
    });
    assert.ok(page.sections.length >= 2, `sections manquantes : ${page.path}`);
  }
});

test("les pages produit × pays exposent leur produit et la famille", () => {
  for (const page of pages.filter((p) => p.family === "produit-pays")) {
    assert.ok(page.product?.slug, `produit manquant : ${page.path}`);
    assert.equal(page.sections[0].items.length, page.product.specs.length, `specs incomplètes : ${page.path}`);
    assert.equal(page.products.length, products.length, `liste produits incomplète : ${page.path}`);
    assert.ok(page.path.endsWith(page.product.slug), `chemin incohérent : ${page.path}`);
  }
});

test("le SEO dérivé expose canonicalUrl, priorité et langue", () => {
  for (const page of [...fr.slice(0, 15), ...en.slice(0, 15)]) {
    const seo = boutiqueSeoForPath(page.path);
    assert.ok(seo, `SEO manquant : ${page.path}`);
    assert.equal(seo.canonicalUrl, `https://fallcontech.com${page.path}`);
    assert.equal(seo.canonical, seo.canonicalUrl);
    assert.ok(["0.75", "0.80"].includes(seo.priority), `priorité inattendue : ${seo.priority}`);
    assert.equal(seo.lang, page.lang === "en" ? "en" : "fr-SN");
  }
  assert.equal(boutiqueSeoForPath("/boutique/categorie/inconnu"), null);
  assert.equal(boutiqueSeoForPath("/huawei-network-equipment/inconnu"), null);
});

test("les ensembles de pays FR et EN sont disjoints (pas de hreflang nécessaire)", () => {
  const frSlugs = new Set(fr.filter((p) => p.family === "pays").map((p) => p.country.slug));
  const enSlugs = new Set(en.filter((p) => p.family === "pays").map((p) => p.country.slug));
  for (const slug of enSlugs) {
    assert.ok(!frSlugs.has(slug), `pays présent dans les deux couches : ${slug}`);
  }
});

test("les overrides de titres pointent vers des pages réelles", () => {
  for (const [path, override] of Object.entries(BOUTIQUE_TITLE_OVERRIDES)) {
    const page = getBoutiquePageByPath(path);
    assert.ok(page, `override orphelin : ${path}`);
    const title = override.title || page.title;
    const description = override.description || page.description;
    assert.ok(title.length <= 88, `title d'override trop long : ${path}`);
    assert.ok(description.length <= 165, `description d'override trop longue : ${path}`);
  }
});
