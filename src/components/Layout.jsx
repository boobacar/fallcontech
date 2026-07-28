import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import logoUrl from "@/assets/logo.webp";

const navLinks = [
  { path: "/services", label: "Solutions" },
  { path: "/work", label: "Références" },
  { path: "/about", label: "Cabinet" },
  { path: "/resources", label: "Analyses" },
];

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.documentElement.lang = "fr";
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <div className="site-root">
      <header className="site-header">
        <div className="site-shell header-inner">
          <Link to="/" className="brand" aria-label="Fallcon Tech — Accueil">
            <img src={logoUrl} alt="" />
            <span><strong>Fallcon</strong> Tech<small>Transformation numérique</small></span>
          </Link>

          <nav className="desktop-nav" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={location.pathname === link.path.split("#")[0] ? "active" : ""}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link to="/contact" className="header-cta">Demander une étude <ArrowUpRight size={15} /></Link>
          <button className="menu-button" onClick={() => setIsMenuOpen((open) => !open)} aria-label="Ouvrir le menu" aria-expanded={isMenuOpen}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-nav">
            <div className="site-shell">
              {navLinks.map((link) => <Link key={link.path} to={link.path}>{link.label}</Link>)}
              <Link to="/contact" className="button button-primary">Demander une étude</Link>
            </div>
          </div>
        )}
      </header>

      <main>{location.pathname.startsWith("/article/") && (
        <div className="article-context">
          <div className="site-shell">
            <span>Un enjeu similaire dans votre organisation ?</span>
            <Link to="/contact">Demander une étude <ArrowUpRight size={15} /></Link>
          </div>
        </div>
      )}{children}</main>

      <footer className="site-footer">
        <div className="site-shell footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand brand-footer">
              <img src={logoUrl} alt="" />
              <span><strong>Fallcon</strong> Tech<small>Transformation numérique</small></span>
            </Link>
            <p>Nous concevons des systèmes numériques fiables pour les organisations qui ont des opérations, des données et des responsabilités à maîtriser.</p>
            <span className="location-label">Dakar · Sénégal</span>
          </div>
          <div>
            <h2>Solutions</h2>
            <ul>
              <li><Link to="/solutions/gestion-courrier-ged">Courrier & GED</Link></li>
              <li><Link to="/solutions/applications-metier">Applications métier</Link></li>
              <li><Link to="/solutions/digitalisation-administrations">Digitalisation administrative</Link></li>
              <li><Link to="/solutions/infrastructure-cybersecurite">Infrastructure & cybersécurité</Link></li>
            </ul>
          </div>
          <div>
            <h2>Secteurs</h2>
            <ul>
              <li><Link to="/solutions/digitalisation-administrations">Administrations</Link></li>
              <li><Link to="/secteurs/sante">Santé</Link></li>
              <li><Link to="/secteurs/transport-logistique">Transport & logistique</Link></li>
              <li><Link to="/secteurs/ong-projets">ONG & programmes</Link></li>
              <li><Link to="/secteurs/education-formation">Éducation</Link></li>
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li><a href="mailto:info@fallcontech.com">info@fallcontech.com</a></li>
              <li><a href="tel:+221774837576">+221 77 483 75 76</a></li>
              <li><Link to="/contact">Présenter un besoin</Link></li>
            </ul>
          </div>
        </div>
        <div className="site-shell footer-bottom">
          <span>© {new Date().getFullYear()} Fallcon Tech.</span>
          <span>Conception, ingénierie et accompagnement au Sénégal.</span>
        </div>
      </footer>

      <a className="whatsapp-button" href="https://wa.me/221774837576?text=Bonjour%20Fallcon%20Tech%2C%20je%20souhaite%20vous%20présenter%20un%20besoin%20de%20transformation%20numérique." target="_blank" rel="noopener noreferrer" aria-label="Contacter Fallcon Tech sur WhatsApp">
        <MessageCircle size={21} /><span>WhatsApp</span>
      </a>
    </div>
  );
}
