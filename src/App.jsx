import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";

const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const Work = lazy(() => import("@/pages/Work"));
const About = lazy(() => import("@/pages/About"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const Resources = lazy(() => import("@/pages/Resources"));
const Contact = lazy(() => import("@/pages/Contact"));
const ServiceCreationSiteWebDakar = lazy(() => import("@/pages/ServiceCreationSiteWebDakar"));
const ServiceAgenceSeoSenegal = lazy(() => import("@/pages/ServiceAgenceSeoSenegal"));
const ServiceAutomatisationWhatsappSenegal = lazy(() => import("@/pages/ServiceAutomatisationWhatsappSenegal"));
const CaseStudyClinic = lazy(
  () => import("@/pages/case-studies/CaseStudyClinic"),
);
const CaseStudyTelimanShare = lazy(
  () => import("@/pages/case-studies/CaseStudyTelimanShare"),
);
const CaseStudyWhatsapp = lazy(
  () => import("@/pages/case-studies/CaseStudyWhatsapp"),
);
const CaseStudyMiroirFoncier = lazy(
  () => import("@/pages/case-studies/CaseStudyMiroirFoncier"),
);
const CaseStudyHgCuisine = lazy(
  () => import("@/pages/case-studies/CaseStudyHgCuisine"),
);
const ArticleBooking = lazy(() => import("@/pages/articles/ArticleBooking"));
const ArticleWhatsapp = lazy(() => import("@/pages/articles/ArticleWhatsapp"));
const ArticleMvp = lazy(() => import("@/pages/articles/ArticleMvp"));
const ArticleSeo = lazy(() => import("@/pages/articles/ArticleSeo"));
const ArticleMobile = lazy(() => import("@/pages/articles/ArticleMobile"));
const ArticleStack = lazy(() => import("@/pages/articles/ArticleStack"));
const ArticlePaymentMachine = lazy(
  () => import("@/pages/articles/ArticlePaymentMachine"),
);
const ArticleIoTEmbedded = lazy(
  () => import("@/pages/articles/ArticleIoTEmbedded"),
);
const ArticlePaymentGatewaysIoT = lazy(
  () => import("@/pages/articles/ArticlePaymentGatewaysIoT"),
);
const ArticleTelemetry = lazy(
  () => import("@/pages/articles/ArticleTelemetry"),
);
const ArticleSiteVitrineSeo = lazy(
  () => import("@/pages/articles/ArticleSiteVitrineSeo"),
);
const ArticleEcommerceSenegal = lazy(
  () => import("@/pages/articles/ArticleEcommerceSenegal"),
);
const ArticleWorkflowsWhatsapp = lazy(
  () => import("@/pages/articles/ArticleWorkflowsWhatsapp"),
);
const ArticleMaintenanceWordpress = lazy(
  () => import("@/pages/articles/ArticleMaintenanceWordpress"),
);
const ArticleCoreWebVitals = lazy(
  () => import("@/pages/articles/ArticleCoreWebVitals"),
);
const ArticleTroubleshooting = lazy(
  () => import("@/pages/articles/ArticleTroubleshooting"),
);
const ArticleGeneralistIT = lazy(
  () => import("@/pages/articles/ArticleGeneralistIT"),
);
const ArticleMaintenancePC = lazy(
  () => import("@/pages/articles/ArticleMaintenancePC"),
);
const ArticleCybersecurity = lazy(
  () => import("@/pages/articles/ArticleCybersecurity"),
);
const ArticleHardwareChoice = lazy(
  () => import("@/pages/articles/ArticleHardwareChoice"),
);
const ArticleBackupData = lazy(
  () => import("@/pages/articles/ArticleBackupData"),
);
// Versions anglaises supprimées (site FR uniquement)

const ArticleElectricity = lazy(
  () => import("@/pages/articles/ArticleElectricity"),
);
const ArticleInternet = lazy(() => import("@/pages/articles/ArticleInternet"));
const ArticleScams = lazy(() => import("@/pages/articles/ArticleScams"));
const ArticleOriginalHardware = lazy(
  () => import("@/pages/articles/ArticleOriginalHardware"),
);
const ArticlePOS = lazy(() => import("@/pages/articles/ArticlePOS"));

const ArticleChoosingDev = lazy(
  () => import("@/pages/articles/ArticleChoosingDev"),
);
const ArticleFreelanceAgency = lazy(
  () => import("@/pages/articles/ArticleFreelanceAgency"),
);
const ArticleITRole = lazy(() => import("@/pages/articles/ArticleITRole"));
const ArticleWebsiteCost = lazy(
  () => import("@/pages/articles/ArticleWebsiteCost"),
);
const ArticleITSupport = lazy(
  () => import("@/pages/articles/ArticleITSupport"),
);

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="px-4 py-10 text-center text-sm text-muted-foreground">
            Chargement…
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/creation-site-web-dakar" element={<ServiceCreationSiteWebDakar />} />
          <Route path="/services/agence-seo-senegal" element={<ServiceAgenceSeoSenegal />} />
          <Route path="/services/automatisation-whatsapp-senegal" element={<ServiceAutomatisationWhatsappSenegal />} />
          <Route path="/case-study/clinic" element={<CaseStudyClinic />} />
          <Route
            path="/case-study/telimanshare"
            element={<CaseStudyTelimanShare />}
          />
          <Route path="/case-study/whatsapp" element={<CaseStudyWhatsapp />} />
          <Route
            path="/case-study/miroir-foncier"
            element={<CaseStudyMiroirFoncier />}
          />
          <Route
            path="/case-study/hg-cuisine"
            element={<CaseStudyHgCuisine />}
          />
          <Route
            path="/article/booking-system-clinics-dakar"
            element={<ArticleBooking />}
          />
          <Route
            path="/article/automating-follow-ups-whatsapp-senegal"
            element={<ArticleWhatsapp />}
          />
          <Route path="/article/idea-to-mvp-2-weeks" element={<ArticleMvp />} />
          <Route
            path="/article/seo-basics-senegalese-businesses"
            element={<ArticleSeo />}
          />
          <Route
            path="/article/why-mobile-first-design-matters-africa"
            element={<ArticleMobile />}
          />
          <Route
            path="/article/choosing-right-tech-stack"
            element={<ArticleStack />}
          />
          <Route
            path="/article/integrer-paiement-machine-eau-esp32-senegal"
            element={<ArticlePaymentMachine />}
          />
          <Route
            path="/article/developpement-iot-embarque-senegal-arduino-esp32"
            element={<ArticleIoTEmbedded />}
          />
          <Route
            path="/article/passerelles-paiement-iot-wave-orange-free"
            element={<ArticlePaymentGatewaysIoT />}
          />
          <Route
            path="/article/telemetrie-maintenance-predictive-iot-senegal"
            element={<ArticleTelemetry />}
          />
          <Route
            path="/article/refonte-site-vitrine-seo-dakar"
            element={<ArticleSiteVitrineSeo />}
          />
          <Route
            path="/article/ecommerce-senegal-wave-orange"
            element={<ArticleEcommerceSenegal />}
          />
          <Route
            path="/article/workflows-whatsapp-crm-senegal"
            element={<ArticleWorkflowsWhatsapp />}
          />
          <Route
            path="/article/maintenance-wordpress-securite-senegal"
            element={<ArticleMaintenanceWordpress />}
          />
          <Route
            path="/article/core-web-vitals-afrique"
            element={<ArticleCoreWebVitals />}
          />
          <Route
            path="/article/depannage-informatique-5-problemes-courants"
            element={<ArticleTroubleshooting />}
          />
          <Route
            path="/article/pourquoi-informaticien-generaliste-dakar"
            element={<ArticleGeneralistIT />}
          />
          <Route
            path="/article/maintenance-nettoyage-pc-senegal"
            element={<ArticleMaintenancePC />}
          />
          <Route
            path="/article/cybersecurite-pme-senegal"
            element={<ArticleCybersecurity />}
          />
          <Route
            path="/article/choisir-pc-professionnel-guide"
            element={<ArticleHardwareChoice />}
          />
          <Route
            path="/article/sauvegarde-donnees-entreprises"
            element={<ArticleBackupData />}
          />
          {/* New localized articles - Problem Solving */}
          <Route
            path="/article/protection-electrique-pc-dakar-onduleur"
            element={<ArticleElectricity />}
          />
          <Route
            path="/article/internet-lent-fibre-dakar-solutions"
            element={<ArticleInternet />}
          />
          <Route
            path="/article/arnaques-wave-orange-money-senegal"
            element={<ArticleScams />}
          />
          <Route
            path="/article/acheter-pc-portable-original-dakar"
            element={<ArticleOriginalHardware />}
          />
          <Route
            path="/article/logiciel-gestion-stock-caisse-senegal"
            element={<ArticlePOS />}
          />
          {/* New Localized Articles - Developer/IT */}
          <Route
            path="/article/comment-choisir-developpeur-web-dakar-senegal"
            element={<ArticleChoosingDev />}
          />
          <Route
            path="/article/freelance-ou-agence-web-senegal-que-choisir"
            element={<ArticleFreelanceAgency />}
          />
          <Route
            path="/article/role-informaticien-pme-dakar"
            element={<ArticleITRole />}
          />
          <Route
            path="/article/cout-creation-site-web-senegal-prix"
            element={<ArticleWebsiteCost />}
          />
          <Route
            path="/article/support-informatique-dedie-dakar-importance"
            element={<ArticleITSupport />}
          />

          {/* FR only */}
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
