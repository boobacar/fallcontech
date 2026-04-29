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
const CaseStudyTelimanTrackingFleeti = lazy(
  () => import("@/pages/case-studies/CaseStudyTelimanTrackingFleeti"),
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
const ArticleAgenceWebDakar2026 = lazy(
  () => import("@/pages/articles/ArticleAgenceWebDakar2026"),
);
const ArticlePrixSiteWebSenegalGuide = lazy(
  () => import("@/pages/articles/ArticlePrixSiteWebSenegalGuide"),
);
const ArticleSeoLocalSenegalGBP = lazy(
  () => import("@/pages/articles/ArticleSeoLocalSenegalGBP"),
);
const ArticleChecklistAuditSeo30Min = lazy(
  () => import("@/pages/articles/ArticleChecklistAuditSeo30Min"),
);
const ArticleWordpressVsNextjsSeo = lazy(
  () => import("@/pages/articles/ArticleWordpressVsNextjsSeo"),
);
const ArticlePrixSiteWebSenegal2026 = lazy(
  () => import("@/pages/articles/ArticlePrixSiteWebSenegal2026"),
);
const ArticleSeoLocalSenegal2026 = lazy(
  () => import("@/pages/articles/ArticleSeoLocalSenegal2026"),
);
const ArticleVitesseSiteSeoConversions = lazy(
  () => import("@/pages/articles/ArticleVitesseSiteSeoConversions"),
);
const ArticleRefonteSiteWebDakar2026 = lazy(
  () => import("@/pages/articles/ArticleRefonteSiteWebDakar2026"),
);
const ArticleMaintenanceSiteWebBusiness = lazy(
  () => import("@/pages/articles/ArticleMaintenanceSiteWebBusiness"),
);
const ArticleSeoEcommerceSenegal2026 = lazy(
  () => import("@/pages/articles/ArticleSeoEcommerceSenegal2026"),
);
const ArticlePrixMaintenanceInformatiqueSenegal = lazy(
  () => import("@/pages/articles/ArticlePrixMaintenanceInformatiqueSenegal"),
);
const ArticleAutomatisationWhatsappVentesSenegal = lazy(
  () => import("@/pages/articles/ArticleAutomatisationWhatsappVentesSenegal"),
);
const ArticleDeveloppementAppMobileDakar = lazy(
  () => import("@/pages/articles/ArticleDeveloppementAppMobileDakar"),
);
const ArticleCrerBoutiqueEnLigneSenegal = lazy(
  () => import("@/pages/articles/ArticleCrerBoutiqueEnLigneSenegal"),
);
const ArticleDeveloppeurFreelanceDakar = lazy(
  () => import("@/pages/articles/ArticleDeveloppeurFreelanceDakar"),
);
const ArticleApplicationGestionSurMesureSenegal = lazy(
  () => import("@/pages/articles/ArticleApplicationGestionSurMesureSenegal"),
);
const ArticleCreerSiteWebProfessionnelDakar = lazy(
  () => import("@/pages/articles/ArticleCreerSiteWebProfessionnelDakar"),
);
const ArticleDigitalisationCourriersSenegal = lazy(
  () => import("@/pages/articles/ArticleDigitalisationCourriersSenegal"),
);
const ArticleLogicielGestionCourrierSenegal = lazy(
  () => import("@/pages/articles/ArticleLogicielGestionCourrierSenegal"),
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
            path="/case-study/teliman-tracking-fleeti"
            element={<CaseStudyTelimanTrackingFleeti />}
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
          <Route
            path="/article/agence-web-dakar-comment-choisir-2026"
            element={<ArticleAgenceWebDakar2026 />}
          />
          <Route
            path="/article/prix-creation-site-web-senegal-guide-complet"
            element={<ArticlePrixSiteWebSenegalGuide />}
          />
          <Route
            path="/article/seo-local-senegal-google-business-profile-plan-action"
            element={<ArticleSeoLocalSenegalGBP />}
          />
          <Route
            path="/article/optimisation-vitesse-site-seo-conversions"
            element={<ArticleVitesseSiteSeoConversions />}
          />
          <Route
            path="/article/refonte-site-web-dakar-seo-2026"
            element={<ArticleRefonteSiteWebDakar2026 />}
          />
          <Route
            path="/article/maintenance-site-web-business-senegal"
            element={<ArticleMaintenanceSiteWebBusiness />}
          />
          <Route
            path="/article/seo-ecommerce-senegal-guide-2026"
            element={<ArticleSeoEcommerceSenegal2026 />}
          />
          <Route
            path="/article/prix-maintenance-informatique-senegal-2026"
            element={<ArticlePrixMaintenanceInformatiqueSenegal />}
          />
          <Route
            path="/article/automatisation-whatsapp-ventes-senegal-2026"
            element={<ArticleAutomatisationWhatsappVentesSenegal />}
          />
          <Route
            path="/article/seo-local-senegal-guide-2026"
            element={<ArticleSeoLocalSenegal2026 />}
          />
          <Route
            path="/article/prix-site-web-senegal-2026"
            element={<ArticlePrixSiteWebSenegal2026 />}
          />
          <Route
            path="/article/wordpress-vs-nextjs-seo"
            element={<ArticleWordpressVsNextjsSeo />}
          />
          <Route
            path="/article/checklist-audit-seo-30-minutes"
            element={<ArticleChecklistAuditSeo30Min />}
          />

          <Route
            path="/article/developpement-application-mobile-dakar"
            element={<ArticleDeveloppementAppMobileDakar />}
          />
          <Route
            path="/article/creer-boutique-en-ligne-senegal"
            element={<ArticleCrerBoutiqueEnLigneSenegal />}
          />
          <Route
            path="/article/developpeur-freelance-dakar-embaucher"
            element={<ArticleDeveloppeurFreelanceDakar />}
          />
          <Route
            path="/article/application-gestion-sur-mesure-senegal"
            element={<ArticleApplicationGestionSurMesureSenegal />}
          />
          <Route
            path="/article/creer-site-web-professionnel-dakar"
            element={<ArticleCreerSiteWebProfessionnelDakar />}
          />
          <Route
            path="/article/digitalisation-courriers-services-senegal"
            element={<ArticleDigitalisationCourriersSenegal />}
          />
          <Route
            path="/article/logiciel-gestion-courrier-administration-senegal"
            element={<ArticleLogicielGestionCourrierSenegal />}
          />

          {/* FR only */}
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
