import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/App";
import "@/index.css";
import { Toaster } from "@/components/ui/toaster";
import { I18nProvider } from "@/i18n";

import { HelmetProvider } from "react-helmet-async";

// Les données structurées des fiches produit sont injectées dans le HTML
// pré-rendu (src/tools/prerender-seo.mjs) pour les crawlers qui n'exécutent pas
// JavaScript. React les réinjecte via Helmet : on retire la copie statique juste
// après le premier rendu pour éviter un doublon.
requestAnimationFrame(() => {
  document
    .querySelectorAll('script[data-prerender-jsonld="true"]')
    .forEach((node) => node.remove());
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <I18nProvider>
          <App />
          <Toaster />
        </I18nProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
