// Helpers partagés par les usines à pages SEO (FR + EN) : fenêtres SERP,
// coupe propre au mot, composition où le CTA final n'est jamais tronqué.
export const cut = (value, max) =>
  value.length <= max ? value : `${value.slice(0, max - 1).replace(/[\s,;:.]+\S*$/, "")}…`;

export const shorten = (value, max) => {
  if (value.length <= max) return value;
  const slice = value.slice(0, max);
  const cutAt = slice.lastIndexOf(" ");
  return (cutAt > 40 ? slice.slice(0, cutAt) : slice)
    .replace(/[\s,;:.–-]+$/, "")
    .replace(/\s+(et|de|du|des|la|le|les|pour|avec|vers|à|and|with|for|to|the|of)$/i, "");
};

export const ensureSentence = (value) =>
  /[.!?]$/.test(value) ? value : `${value.replace(/[\s,;:–-]+$/, "")}.`;

export const composeDesc = (core, cta, max = 163) => {
  const full = `${core} ${cta}`.replace(/\s+/g, " ").trim();
  if (full.length <= max) return full;
  return `${ensureSentence(shorten(core, max - cta.length - 1))} ${cta}`;
};

export const composeTitle = (base, max = 88) => {
  const full = `${base} | Fallcon Tech`;
  if (full.length <= max) return full;
  if (base.length <= max) return base;
  return shorten(base, max);
};
