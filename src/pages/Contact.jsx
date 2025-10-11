import React, { useRef, useState } from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { confettiBurst } from "@/lib/confetti";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    businessType: "",
    goal: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.goal) {
      toast({
        title: "Informations manquantes",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email invalide",
        description: "Veuillez entrer une adresse email valide.",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(data?.error || "Erreur d'envoi");
      toast({ title: "Message envoyé ✅", description: "Nous revenons vers vous sous 24h ouvrées." });
      // Confetti au milieu de la page
      confettiBurst();
      setFormData({ name: "", email: "", whatsapp: "", businessType: "", goal: "", message: "" });
    } catch (err) {
      toast({
        title: "Échec de l'envoi",
        description: "Un problème est survenu. Vous pouvez aussi nous écrire à info@fallcontech.com.",
        variant: "destructive",
      });
      const subject = encodeURIComponent(`Contact — ${formData.name || ''} (${formData.goal || ''})`)
      const body = encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nType: ${formData.businessType}\nObjectif: ${formData.goal}\n\nMessage:\n${formData.message}`
      )
      window.open(`mailto:info@fallcontech.com?subject=${subject}&body=${body}`, '_blank')
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: MapPin, title: "Adresse", details: " Shelter II, Dakar" },
    { icon: Mail, title: "Email", details: "info@fallcontech.com" },
    { icon: Phone, title: "Téléphone", details: "+221 77 626 00 20 / +221 77 483 75 76" },
  ];

  const waUrl = `https://wa.me/221776260020?text=${encodeURIComponent(
    "Bonjour, je souhaite planifier un appel de 15 minutes pour discuter de mon projet."
  )}`;

  return (
    <>
      <SEO
        path="/contact"
        title="Contact — Consultation gratuite (Dakar, Sénégal)"
        description="Expliquez votre projet: site web, SEO, automatisations. Réponse rapide et créneaux flexibles via WhatsApp."
      />

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Construisons Quelque Chose d'Incroyable</h1>
            <p className="text-xl text-foreground/80">Réservez une consultation gratuite de 15 minutes ou envoyez-nous un message</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulaire */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="bg-card rounded-3xl shadow-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Envoyez-nous un message</h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Nom *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-blue-500 focus:outline-none transition-colors" placeholder="Votre nom complet" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-blue-500 focus:outline-none transition-colors" placeholder="votre@email.com" />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-foreground mb-2">Numéro WhatsApp</label>
                    <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-blue-500 focus:outline-none transition-colors" placeholder="+221 77 XXX XX XX" />
                  </div>
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-foreground mb-2">Type d'entreprise</label>
                    <select id="businessType" name="businessType" value={formData.businessType} onChange={handleChange} className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-blue-500 focus:outline-none transition-colors">
                      <option value="">Sélectionnez votre type d'entreprise</option>
                      <option value="clinic">Clinique/Santé</option>
                      <option value="retail">Commerce de détail/E-commerce</option>
                      <option value="services">Services professionnels</option>
                      <option value="startup">Startup/Tech</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="goal" className="block text-sm font-medium text-foreground mb-2">Objectif du projet *</label>
                    <select id="goal" name="goal" value={formData.goal} onChange={handleChange} required className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-blue-500 focus:outline-none transition-colors">
                      <option value="">De quoi avez-vous besoin ?</option>
                      <option value="website">Nouveau site web</option>
                      <option value="redesign">Refonte de site web</option>
                      <option value="automation">Automatisation/Intégration</option>
                      <option value="mvp">Développement de MVP</option>
                      <option value="maintenance">Maintenance/Support</option>
                      <option value="consultation">Simple exploration</option>
                    </select>
                  </div>
                  <Button type="submit" disabled={loading} className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg py-6">
                    <Send className="mr-2" size={20} /> {loading ? "Envoi..." : "Envoyer le message"}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Colonne droite */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-8">
              <div className="bg-card rounded-3xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold mb-4">Planifier un Appel</h2>
                <p className="text-foreground/80 mb-6">
                  Vous préférez parler ? Planifiez votre appel directement via WhatsApp et nous vous proposons des créneaux.
                </p>
                <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-6">
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2">
                    <MessageCircle size={20} /> Planifier via WhatsApp
                  </a>
                </Button>
              </div>

              <div className="bg-card rounded-3xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Infos Contact</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="bg-background p-3 rounded-xl"><info.icon className="text-blue-500" size={24} /></div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-muted-foreground">{info.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
