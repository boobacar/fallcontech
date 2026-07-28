import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("la page d'accueil porte le positionnement institutionnel", () => {
  const home = read("src/pages/Home.jsx");
  assert.match(home, /Systèmes numériques pour organisations exigeantes/);
  assert.match(home, /Administrations publiques/);
  assert.match(home, /Courrier, GED et workflows/);
  assert.match(home, /title: "Dental OS"/);
  assert.match(home, /dental-os-odontogram\.webp/);
  assert.doesNotMatch(home, /Dabia Dental OS/);
  assert.doesNotMatch(home, /MorphingShape|confettiBurst|floating-blobs/);
});

test("les offres institutionnelles disposent de routes dédiées", () => {
  const app = read("src/App.jsx");
  for (const route of [
    "/solutions/gestion-courrier-ged",
    "/solutions/applications-metier",
    "/solutions/digitalisation-administrations",
    "/solutions/infrastructure-cybersecurite",
    "/secteurs/sante",
    "/secteurs/transport-logistique",
  ]) {
    assert.ok(app.includes(route), `Route absente: ${route}`);
  }
});

test("la navigation et le SEO ne présentent plus Fallcon Tech comme une agence web", () => {
  const layout = read("src/components/Layout.jsx");
  const seo = read("src/data/seoData.js");
  assert.match(layout, /Solutions/);
  assert.match(layout, /Secteurs/);
  assert.match(layout, /Demander une étude/);
  assert.match(seo, /Transformation numérique Sénégal/);
  assert.doesNotMatch(seo.slice(0, 1200), /Développeur Web Sénégal & Agence Web Dakar/);
});

test("les pages de confiance soutiennent le nouveau positionnement", () => {
  const about = read("src/pages/About.jsx");
  const work = read("src/pages/Work.jsx");
  const pricing = read("src/pages/Pricing.jsx");
  const resources = read("src/pages/Resources.jsx");
  assert.match(about, /cabinet d’ingénierie numérique/i);
  assert.match(work, /Circuit Courrier/);
  assert.doesNotMatch(work, /EMGA/);
  assert.match(work, /Site Web de la Clinique Dentaire Dabia/);
  assert.match(work, /title: "Dental OS"/);
  assert.match(work, /title: "TelimanShare"/);
  assert.match(pricing, /Formats d’intervention/);
  assert.match(resources, /Centre de ressources/);
});

test("le formulaire qualifie les demandes institutionnelles", () => {
  const contact = read("src/pages/Contact.jsx");
  assert.match(contact, /Administration publique/);
  assert.match(contact, /Gestion électronique du courrier/);
  assert.match(contact, /Budget indicatif/);
});
