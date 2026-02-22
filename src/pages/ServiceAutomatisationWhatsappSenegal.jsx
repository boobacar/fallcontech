import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServiceAutomatisationWhatsappSenegal() {
  const faq = [
    { q: "Que peut-on automatiser sur WhatsApp ?", a: "Relances prospects, suivi clients, rappels de rendez-vous, réponses FAQ et notifications métier." },
    { q: "Est-ce connecté à un CRM ?", a: "Oui, nous connectons WhatsApp à vos formulaires, CRM et pipelines commerciaux." },
    { q: "Est-ce utile pour une PME ?", a: "Oui, c’est souvent un levier rapide pour gagner du temps et augmenter les conversions." },
  ];

  const features = [
    "Relances automatiques prospects",
    "Scénarios messages clients",
    "Connexion formulaires site + WhatsApp",
    "Intégration CRM et pipelines",
    "Suivi de performance des workflows",
  ];
  const outcomes = ["Gain de temps opérationnel", "Réponse plus rapide", "Hausse du taux de conversion"];

  return (
    <>
      <SEO
        path="/services/automatisation-whatsapp-senegal"
        title="Automatisation WhatsApp Business au Sénégal | Fallcon Tech"
        description="Automatisation WhatsApp au Sénégal : relances clients, messages ciblés, workflows CRM et intégrations sur mesure pour PME et commerces."
        jsonLd={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }}
      />

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="vt-title text-5xl md:text-6xl font-bold mb-6 gradient-text">Automatisation WhatsApp au Sénégal</h1>
            <p className="text-xl text-foreground/80">Automatisez vos relances et votre support client pour vendre plus avec moins d’effort.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6"><MessageCircle className="text-primary-foreground" size={30} /></div>
                <h2 className="text-3xl font-bold mb-4">Cas d’usage</h2>
                <p className="text-xl text-muted-foreground mb-8">Workflows WhatsApp orientés vente, fidélisation et service client.</p>
                <ul className="space-y-3 mb-8">{features.map((f, i) => <li key={i} className="flex items-start gap-3"><CheckCircle2 className="text-blue-500 flex-shrink-0 mt-1" size={20} /><span>{f}</span></li>)}</ul>
                <Button asChild><Link to="/contact">Automatiser mon WhatsApp <ArrowRight className="ml-2" size={18} /></Link></Button>
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
