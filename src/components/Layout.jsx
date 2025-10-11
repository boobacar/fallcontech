import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import logoUrl from "@/assets/logo.png";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
    { path: "/", label: "Accueil" },
    { path: "/services", label: "Services" },
    { path: "/work", label: "Projets" },
    { path: "/about", label: "À Propos" },
    { path: "/pricing", label: "Tarifs" },
    { path: "/resources", label: "Ressources" },
    { path: "/contact", label: "Contact" },
  ];

  const siteUrl = import.meta.env.VITE_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '');
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fallcon Tech",
    url: siteUrl || undefined,
    logo: `${siteUrl}/assets/logo.png`,
    email: "info@fallcontech.com",
    telephone: "+221 77 626 00 20",
    address: { "@type": "PostalAddress", addressLocality: "Dakar", addressCountry: "SN" },
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
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <img
                src={logoUrl}
                alt="Fallcon Tech"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-md object-contain"
              />
              <span className="whitespace-nowrap tracking-tight bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Fallcon Tech
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
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
              <Button asChild>
                <Link to="/contact">Planifier un appel</Link>
              </Button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
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
                    <Button asChild className="w-full mt-4">
                      <Link to="/contact">Planifier un appel</Link>
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
              <p className="mt-4 text-muted-foreground text-sm">
                Sites web modernes et automatisations pour la croissance de
                votre entreprise au Sénégal.
              </p>
            </div>

            <div>
              <span className="font-semibold text-primary-foreground">
                Services
              </span>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/services"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Conception de sites Web
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Automatisations
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Développement de MVP
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-semibold text-primary-foreground">
                Entreprise
              </span>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-blue-400 transition-colors"
                  >
                    À Propos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/work"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Projets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Ressources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-semibold text-primary-foreground">
                Contact
              </span>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>HLM Shelter II, Dakar</li>
                <li>info@fallcontech.com</li>
                <li>+221 77 626 00 20</li>
                <li>+221 77 483 75 76</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-secondary text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Fallcon Tech. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/221776260020"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110"
        aria-label="Discuter sur WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
};

export default Layout;
