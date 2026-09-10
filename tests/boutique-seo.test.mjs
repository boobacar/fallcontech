// Tests de l'usine à pages SEO boutique (src/data/boutiqueGeoData.js)
// Objectif : garantir que les ~133 pages générées restent propres (titres, grammaire,
// unicité du contenu, absence de prix) avant chaque build/déploiement.
import test from "node:test";
import assert from "node:assert/strict";
import {
  getAllBoutiquePages,
  getBoutiquePageByPath,
  boutiqueSeoForPath,
  BOUTIQUE_FAMILIES,
  BOUTIQUE_TITLE_OVERRIDES,
} from "../src/data/boutiqueGeoData.js";
import { products } from "../src/data/products.js";

const pages = getAllBoutiquePages();

test("le catalogue SEO boutique couvre catégories + pays + produit×pays", () => {
  const counts = pages.reduce((acc, p) => ({ ...acc, [p.family]: (acc[p.family] || 0) + 1 }), {});
  assert.equal(counts.categorie, BOUTIQUE_FAMILIES.length, "une page par catégorie");
  assert.equal(counts.pays, 16, "16 hubs pays");
  assert.equal(counts["produit-pays"], 16 * products.length, "un produit × pays par combinaison");
  assert.equal(counts.categorie + counts.pays + counts["produit-pays"], pages.length);
});

test("les chemins sont uniques et sans placeholder non rempli", () => {
  const paths = pages.map((p) => p.path);
  assert.equal(new Set(paths).size, paths.length, "chemins dupliqués");
  const withPlaceholder = pages.filter((p) => /\{[a-zA-Z]+\}/.test(JSON.stringify(p)));
  assert.equal(withPlaceholder.length, 0, `placeholders non remplis : ${withPlaceholder.map((p) => p.path)}`);
});

test("titres et descriptions tiennent dans les fenêtres SERP", () => {
  for (const page of pages) {
    assert.ok(page.title.length > 25 && page.title.length <= 88, `title ${page.title.length} : ${page.path}`);
    assert.ok(page.description.length > 60 && page.description.length <= 165, `description ${page.description.length} : ${page.path}`);
    assert.ok(page.h1 && page.h1.length > 10, `h1 manquant : ${page.path}`);
    assert.ok(page.quickAnswer && page.quickAnswer.length > 80, `réponse rapide manquante : ${page.path}`);
  }
});

test("grammaire française : pas de « en Sénégal », « du Côte d'Ivoire », « de Abidjan »", () => {
  const wrongPrep = /\ben (Sénégal|Mali|Burkina Faso|Bénin|Togo|Niger|Cap-Vert|Cameroun|Gabon|Tchad)\b/i;
  const wrongGen = /\bdu (Côte d'Ivoire|Guinée|Guinée-Bissau|Mauritanie|Gambie|RDC)\b/i;
  const wrongElision = /\bde (Abidjan|Ouagadougou)\b/;
  const offences = pages.filter((p) => {
    const text = JSON.stringify(p);
    return wrongPrep.test(text) || wrongGen.test(text) || wrongElision.test(text);
  });
  assert.equal(offences.length, 0, `fautes de préposition : ${offences.map((p) => p.path).join(", ")}`);
});

test("aucun prix n'est publié dans les données boutique", () => {
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

test("les pages produit × pays exposent bien leur produit et la famille", () => {
  const productPages = pages.filter((p) => p.family === "produit-pays");
  for (const page of productPages) {
    assert.ok(page.product?.slug, `produit manquant : ${page.path}`);
    assert.equal(page.sections[0].items.length, page.product.specs.length, `specs incomplètes : ${page.path}`);
    assert.ok(page.products.length === products.length, `liste produits incomplète : ${page.path}`);
    assert.ok(page.path.endsWith(page.product.slug), `chemin incohérent : ${page.path}`);
  }
});

test("le SEO dérivé expose canonicalUrl et une priorité valide", () => {
  for (const page of pages.slice(0, 25)) {
    const seo = boutiqueSeoForPath(page.path);
    assert.ok(seo, `SEO manquant : ${page.path}`);
    assert.equal(seo.canonicalUrl, `https://fallcontech.com${page.path}`);
    assert.equal(seo.canonical, seo.canonicalUrl);
    assert.ok(["0.75", "0.80"].includes(seo.priority), `priorité inattendue : ${seo.priority}`);
  }
  assert.equal(boutiqueSeoForPath("/boutique/categorie/inconnu"), null);
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
