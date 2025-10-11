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
const ArticleBooking = lazy(() => import("@/pages/articles/ArticleBooking"));
const ArticleWhatsapp = lazy(() => import("@/pages/articles/ArticleWhatsapp"));
const ArticleMvp = lazy(() => import("@/pages/articles/ArticleMvp"));
const ArticleSeo = lazy(() => import("@/pages/articles/ArticleSeo"));
const ArticleMobile = lazy(() => import("@/pages/articles/ArticleMobile"));
const ArticleStack = lazy(() => import("@/pages/articles/ArticleStack"));

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
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
