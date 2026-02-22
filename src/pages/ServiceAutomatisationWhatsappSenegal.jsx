import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

export default function ServiceAutomatisationWhatsappSenegal() {
  const faq = [
    { q: "Que peut-on automatiser sur WhatsApp ?", a: "Relances prospects, suivi clients, rappels de rendez-vous, réponses FAQ et notifications métier." },
    { q: "Est-ce connecté à un CRM ?", a: "Oui, nous connectons WhatsApp à vos formulaires, CRM et pipelines commerciaux." },
    { q: "Est-ce utile pour une PME ?", a: "Oui, c’est souvent un levier rapide pour gagner du temps et augmenter les conversions." },
  ];
  return (
    <>
      <SEO
        path="/services/automatisation-whatsapp-senegal"
        title="Automatisation WhatsApp Business au Sénégal | Fallcon Tech"
        description="Automatisation WhatsApp au Sénégal : relances clients, messages ciblés, workflows CRM et intégrations sur mesure pour PME et commerces."
        jsonLd={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }}
      />
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Automatisation WhatsApp au Sénégal</h1>
        <p className="text-foreground/80 mb-8">Nous mettons en place des workflows WhatsApp orientés vente, support et fidélisation pour réduire la charge manuelle.</p>
        <h2 className="text-2xl font-semibold mb-3">Cas d’usage</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Relances automatiques de prospects</li>
          <li>Suivi des demandes depuis le site web</li>
          <li>Notifications de commandes / rendez-vous</li>
          <li>Segmentation et scripts de réponse</li>
        </ul>
        <Link to="/contact" className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg">Automatiser mon WhatsApp</Link>
      </section>
    </>
  );
}
