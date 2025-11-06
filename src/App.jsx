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
const CaseStudyClinic = lazy(() => import("@/pages/case-studies/CaseStudyClinic"));
const CaseStudyTelimanShare = lazy(() => import("@/pages/case-studies/CaseStudyTelimanShare"));
const CaseStudyWhatsapp = lazy(() => import("@/pages/case-studies/CaseStudyWhatsapp"));
const CaseStudyMiroirFoncier = lazy(() => import("@/pages/case-studies/CaseStudyMiroirFoncier"));
const ArticleBooking = lazy(() => import("@/pages/articles/ArticleBooking"));
const ArticleWhatsapp = lazy(() => import("@/pages/articles/ArticleWhatsapp"));
const ArticleMvp = lazy(() => import("@/pages/articles/ArticleMvp"));
const ArticleSeo = lazy(() => import("@/pages/articles/ArticleSeo"));
const ArticleMobile = lazy(() => import("@/pages/articles/ArticleMobile"));
const ArticleStack = lazy(() => import("@/pages/articles/ArticleStack"));
const ArticlePaymentMachine = lazy(() => import("@/pages/articles/ArticlePaymentMachine"));
const ArticleIoTEmbedded = lazy(() => import("@/pages/articles/ArticleIoTEmbedded"));
const ArticlePaymentGatewaysIoT = lazy(() => import("@/pages/articles/ArticlePaymentGatewaysIoT"));
const ArticleTelemetry = lazy(() => import("@/pages/articles/ArticleTelemetry"));
// EN articles
const ArticlePaymentMachineEn = lazy(() => import("@/pages/articles/en/ArticlePaymentMachineEn"));
const ArticleIoTEmbeddedEn = lazy(() => import("@/pages/articles/en/ArticleIoTEmbeddedEn"));
const ArticlePaymentGatewaysIoTEn = lazy(() => import("@/pages/articles/en/ArticlePaymentGatewaysIoTEn"));
const ArticleTelemetryEn = lazy(() => import("@/pages/articles/en/ArticleTelemetryEn"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="px-4 py-10 text-center text-sm text-muted-foreground">Chargement…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-study/clinic" element={<CaseStudyClinic />} />
          <Route
            path="/case-study/telimanshare"
            element={<CaseStudyTelimanShare />}
          />
          <Route path="/case-study/whatsapp" element={<CaseStudyWhatsapp />} />
          <Route path="/case-study/miroir-foncier" element={<CaseStudyMiroirFoncier />} />
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
          {/* English versions */}
          <Route
            path="/en/article/esp32-water-vending-mobile-payments-senegal"
            element={<ArticlePaymentMachineEn />}
          />
          <Route
            path="/en/article/iot-embedded-development-senegal-arduino-esp32"
            element={<ArticleIoTEmbeddedEn />}
          />
          <Route
            path="/en/article/payment-gateways-iot-wave-orange-free"
            element={<ArticlePaymentGatewaysIoTEn />}
          />
          <Route
            path="/en/article/iot-telemetry-predictive-maintenance-senegal"
            element={<ArticleTelemetryEn />}
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
