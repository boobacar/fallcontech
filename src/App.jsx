import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Work from "@/pages/Work";
import About from "@/pages/About";
import Pricing from "@/pages/Pricing";
import Resources from "@/pages/Resources";
import Contact from "@/pages/Contact";
import CaseStudyClinic from "@/pages/case-studies/CaseStudyClinic";
import CaseStudyTelimanShare from "@/pages/case-studies/CaseStudyTelimanShare";
import CaseStudyWhatsapp from "@/pages/case-studies/CaseStudyWhatsapp";
import ArticleBooking from "@/pages/articles/ArticleBooking";
import ArticleWhatsapp from "@/pages/articles/ArticleWhatsapp";
import ArticleMvp from "@/pages/articles/ArticleMvp";
import ArticleSeo from "@/pages/articles/ArticleSeo";
import ArticleMobile from "@/pages/articles/ArticleMobile";
import ArticleStack from "@/pages/articles/ArticleStack";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
