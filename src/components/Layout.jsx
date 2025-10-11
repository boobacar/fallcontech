import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import logoUrl from "@/assets/logo.webp";
import { useI18n } from "@/i18n";
import { initVisualEffects } from "@/lib/enhanceEffects";
import { confettiBurst } from "@/lib/confetti";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, locale, setLocale } = useI18n();

  useEffect(() => {
    initVisualEffects();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: t('common.nav.home') },
    { path: "/services", label: t('common.nav.services') },
    { path: "/work", label: t('common.nav.work') },
    { path: "/about", label: t('common.nav.about') },
    { path: "/pricing", label: t('common.nav.pricing') },
    { path: "/resources", label: t('common.nav.resources') },
    { path: "/contact", label: t('common.nav.contact') },
  ];

  const siteUrl =
    import.meta.env.VITE_SITE_URL ||
    (typeof window !== "undefined" ? window.location.origin : "");
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fallcon Tech",
    url: siteUrl || undefined,
    logo: `${siteUrl}/assets/logo.webp`,
    email: "info@fallcontech.com",
    telephone: "+221 77 626 00 20",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dakar",
      addressCountry: "SN",
    },
  };
  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Fallcon Tech",
    url: siteUrl || undefined,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/resources?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="scroll-progress fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none">
        <div className="scroll-progress__bar h-full"></div>
      </div>
      {/* SVG filters globales */}
      <svg width="0" height="0" className="absolute -z-10" aria-hidden>
        <filter id="hoverDisplace">
          <feTurbulence type="fractalNoise" baseFrequency="0.01 0.02" numOctaves="2" seed="2" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      {/* Site-wide defaults + structured data */}
      <SEO path={location.pathname} jsonLd={[orgJsonLd, webSiteJsonLd]} />
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? "bg-background/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 relative">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
              <img
                src={logoUrl}
                alt="Fallcon Tech"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-md object-contain"
              />
              <span className="whitespace-nowrap tracking-tight bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Fallcon Tech
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                    location.pathname === link.path
                      ? "text-blue-500"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-5 w-px bg-foreground/20 mx-1" />
              <div className="flex items-center gap-1 text-xs">
                <button
                  aria-label="Français"
                  className={`px-2 py-1 rounded ${
                    locale === 'fr'
                      ? 'bg-foreground/10 text-foreground'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                  onClick={() => setLocale('fr')}
                >
                  FR
                </button>
                <button
                  aria-label="English"
                  className={`px-2 py-1 rounded ${
                    locale === 'en'
                      ? 'bg-foreground/10 text-foreground'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                  onClick={() => setLocale('en')}
                >
                  EN
                </button>
              </div>
              <Button asChild>
                <Link to="/contact">{t('common.cta.planCall')}</Link>
              </Button>
            </div>

            <div className="flex items-center gap-2">
              {/* Mobile language switcher (always visible) */}
              <div className="md:hidden flex items-center gap-1 text-xs mr-1">
                <button
                  aria-label="Français"
                  className={`px-2 py-1 rounded ${
                    locale === 'fr' ? 'bg-foreground/10 text-foreground' : 'text-foreground/70'
                  }`}
                  onClick={() => setLocale('fr')}
                >
                  FR
                </button>
                <button
                  aria-label="English"
                  className={`px-2 py-1 rounded ${
                    locale === 'en' ? 'bg-foreground/10 text-foreground' : 'text-foreground/70'
                  }`}
                  onClick={() => setLocale('en')}
                >
                  EN
                </button>
              </div>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-foreground">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <>
                {/* Backdrop under the header to dim content */}
                <motion.div
                  className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMenuOpen(false)}
                />

                {/* Dropdown panel positioned below header */}
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute left-0 right-0 top-full z-50 md:hidden border-t border-secondary bg-background/95 backdrop-blur-md shadow-xl"
                >
                  <div className="px-4 pb-4 pt-3 max-h-[calc(100vh-64px)] overflow-y-auto">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`block py-2 text-sm font-medium transition-colors hover:text-blue-500 ${
                          location.pathname === link.path
                            ? "text-blue-500"
                            : "text-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        className={`px-2 py-1 rounded text-xs ${
                          locale === 'fr' ? 'bg-foreground/10 text-foreground' : 'text-foreground/70'
                        }`}
                        onClick={() => setLocale('fr')}
                      >
                        FR
                      </button>
                      <button
                        className={`px-2 py-1 rounded text-xs ${
                          locale === 'en' ? 'bg-foreground/10 text-foreground' : 'text-foreground/70'
                        }`}
                        onClick={() => setLocale('en')}
                      >
                        EN
                      </button>
                    </div>
                    <Button asChild className="w-full mt-4">
                      <Link to="/contact">{t('common.cta.planCall')}</Link>
                    </Button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      <main className="flex-1 pt-20">{children}</main>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-bold">Fallcon Tech</span>
              <p className="mt-4 text-muted-foreground text-sm">{t('common.blurb')}</p>
            </div>

            <div>
              <span className="font-semibold text-primary-foreground">{t('common.footer.services')}</span>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/services"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('common.footer.links.webDesign')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('common.footer.links.automations')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('common.footer.links.mvpDev')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-semibold text-primary-foreground">{t('common.footer.company')}</span>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('common.nav.about')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/work"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('common.nav.work')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('common.nav.resources')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-semibold text-primary-foreground">{t('common.footer.contact')}</span>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>HLM Shelter II, Dakar</li>
                <li>info@fallcontech.com</li>
                <li>+221 77 626 00 20</li>
                <li>+221 77 483 75 76</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-secondary text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Fallcon Tech. {t('common.footer.copy')}</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/221776260020"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110"
        aria-label={t('common.aria.whatsappChat')}
        onClick={() => confettiBurst({ particleCount: 40, spread: 50 })}
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
};

export default Layout;
