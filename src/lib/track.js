/**
 * Passerelle vers le collecteur analytics du site (sans cookie).
 * Le script est chargé depuis index.html ; si le collecteur est injoignable
 * ou bloqué, les appels sont silencieux et n'altèrent jamais l'interface.
 */
export function track(event, props = {}) {
  try {
    if (typeof window !== "undefined" && typeof window.ftrack === "function") {
      window.ftrack(event, props);
    }
  } catch {
    /* jamais bloquant */
  }
}
