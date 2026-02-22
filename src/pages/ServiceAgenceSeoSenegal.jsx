import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServiceAgenceSeoSenegal() {
  const faq = [
    { q: "En combien de temps voit-on des résultats SEO ?", a: "Les premiers signaux arrivent souvent entre 4 et 8 semaines, avec une progression continue ensuite." },
    { q: "Faites-vous le SEO local Dakar ?", a: "Oui, optimisation Google Business Profile, pages locales, contenus ciblés et maillage interne." },
    { q: "Travaillez-vous sur des sites existants ?", a: "Oui, audit, correction technique, optimisation on-page et plan éditorial sur site existant." },
  ];

  const features = [
    "Audit technique complet",
    "Optimisation titles, metas, structure Hn",
    "Maillage interne orienté conversion",
    "Plan éditorial local Sénégal",
    "Reporting hebdo GSC + GA4",
  ];
  const outcomes = ["Hausse impressions", "Hausse CTR", "Plus de leads SEO"];

  return (
    <>
      <SEO
        path="/services/agence-seo-senegal"
        title="Agence SEO au Sénégal | Référencement Google avec Fallcon Tech"
        description="Agence SEO au Sénégal : audit technique, optimisation on-page, stratégie de contenus et SEO local pour augmenter vos clics Google qualifiés."
        jsonLd={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }}
      />

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="vt-title text-5xl md:text-6xl font-bold mb-6 gradient-text">Agence SEO au Sénégal</h1>
            <p className="text-xl text-foreground/80">Nous transformons votre visibilité Google en trafic qualifié et demandes clients.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6"><TrendingUp className="text-primary-foreground" size={30} /></div>
                <h2 className="text-3xl font-bold mb-4">Notre méthode SEO</h2>
                <p className="text-xl text-muted-foreground mb-8">Approche complète: technique, contenu, local et conversion.</p>
                <ul className="space-y-3 mb-8">{features.map((f, i) => <li key={i} className="flex items-start gap-3"><CheckCircle2 className="text-blue-500 flex-shrink-0 mt-1" size={20} /><span>{f}</span></li>)}</ul>
                <Button asChild><Link to="/contact">Lancer ma stratégie SEO <ArrowRight className="ml-2" size={18} /></Link></Button>
              </div>
              <div className="bg-primary/5 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-bold text-2xl mb-6 text-primary">Résultats attendus</h3>
                <div className="space-y-4">{outcomes.map((o, i) => <div key={i} className="bg-card rounded-xl p-4 shadow-md"><p className="font-semibold text-blue-600">{o}</p></div>)}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-primary">FAQ</h2>
          <div className="space-y-6">{faq.map((f, i) => <div key={i} className="bg-card rounded-xl p-6 shadow-md"><h3 className="font-semibold text-lg mb-2">{f.q}</h3><p className="text-muted-foreground">{f.a}</p></div>)}</div>
        </div>
      </section>
    </>
  );
}
