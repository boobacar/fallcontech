import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function CaseStudyLayout({
  path,
  seoTitle,
  seoDescription,
  title,
  subtitle,
  eyebrow,
  image,
  imageAlt,
  tags = [],
  challenge,
  solution,
  features = [],
  outcomes = [],
  stack = [],
  gallery = [],
  externalUrl,
}) {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://fallcontech.com";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: seoTitle,
    description: seoDescription,
    image: `${siteUrl}${image}`,
    author: { "@type": "Organization", name: "Fallcon Tech" },
    publisher: { "@type": "Organization", name: "Fallcon Tech" },
    mainEntityOfPage: `${siteUrl}${path}`,
  };

  return (
    <>
      <SEO path={path} title={seoTitle} description={seoDescription} image={image} type="article" jsonLd={jsonLd} />

      <section className="case-hero">
        <div className="site-shell">
          <Link to="/work" className="case-back"><ArrowLeft size={17} /> Retour aux références</Link>
          <div className="case-hero-grid">
            <div className="case-hero-copy">
              <p className="overline">{eyebrow}</p>
              <h1>{title}</h1>
              <p className="case-lead">{subtitle}</p>
              <div className="case-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
            <figure className="case-hero-media">
              <img src={image} alt={imageAlt} />
            </figure>
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="site-shell case-story-grid">
          <article>
            <span className="case-index">01 · CONTEXTE</span>
            <h2>Le besoin</h2>
            <p>{challenge}</p>
          </article>
          <article>
            <span className="case-index">02 · RÉPONSE</span>
            <h2>Le système livré</h2>
            <p>{solution}</p>
          </article>
        </div>
      </section>

      <section className="case-section case-section-muted">
        <div className="site-shell case-capability-grid">
          <div className="case-section-heading">
            <p className="overline">Périmètre fonctionnel</p>
            <h2>Des fonctions conçues autour du travail réel.</h2>
          </div>
          <ol className="case-feature-list">
            {features.map((feature, index) => (
              <li key={feature}><span>{String(index + 1).padStart(2, "0")}</span><p>{feature}</p><Check size={17} /></li>
            ))}
          </ol>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="case-section">
          <div className="site-shell">
            <div className="case-section-heading case-gallery-heading">
              <p className="overline">Interfaces</p>
              <h2>Quelques vues du dispositif.</h2>
            </div>
            <div className={`case-gallery case-gallery-${gallery.length}`}>
              {gallery.map((item) => (
                <figure key={item.src}><img src={item.src} alt={item.alt} loading="lazy" decoding="async" /></figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="case-outcomes">
        <div className="site-shell case-outcomes-grid">
          <div>
            <p className="overline overline-light">Apports du projet</p>
            <h2>Ce que le dispositif rend possible.</h2>
          </div>
          <ul>{outcomes.map((outcome) => <li key={outcome}><Check size={18} /><span>{outcome}</span></li>)}</ul>
        </div>
      </section>

      <section className="case-section">
        <div className="site-shell case-closing-grid">
          <div>
            <p className="overline">Socle technique</p>
            <div className="case-stack">{stack.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
          <div className="case-cta">
            <h2>Un processus similaire doit être mieux structuré ?</h2>
            <div className="case-cta-actions">
              <Link to="/contact" className="button button-primary">Demander une étude <ArrowRight size={17} /></Link>
              {externalUrl && <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="button button-secondary">Voir le site <ExternalLink size={16} /></a>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
