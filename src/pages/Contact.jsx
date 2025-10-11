import React, { useRef, useState } from "react";
import SEO from "@/components/SEO";
import { useI18n } from "@/i18n";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { confettiBurst } from "@/lib/confetti";

const Contact = () => {
  const { t } = useI18n();
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
        title: t('contact.toast.missing.title'),
        description: t('contact.toast.missing.description'),
        variant: "destructive",
      });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: t('contact.toast.invalidEmail.title'),
        description: t('contact.toast.invalidEmail.description'),
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
      if (!r.ok) throw new Error(data?.error || 'send_error');
      toast({ title: t('contact.toast.sent.title'), description: t('contact.toast.sent.description') });
      // Confetti au milieu de la page
      confettiBurst();
      setFormData({ name: "", email: "", whatsapp: "", businessType: "", goal: "", message: "" });
    } catch (err) {
      toast({
        title: t('contact.toast.failed.title'),
        description: t('contact.toast.failed.description'),
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
    { icon: MapPin, title: t('contact.info.address'), details: "HLM Shelter II, Dakar" },
    { icon: Mail, title: t('contact.info.email'), details: "info@fallcontech.com" },
    { icon: Phone, title: t('contact.info.phone'), details: "+221 77 626 00 20 / +221 77 483 75 76" },
  ];

  const waUrl = `https://wa.me/221776260020?text=${encodeURIComponent(
    t('contact.schedule.waMessage')
  )}`;

  return (
    <>
      <SEO
        path="/contact"
        title={t('contact.seo.title')}
        description={t('contact.seo.description')}
      />

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">{t('contact.heroTitle')}</h1>
            <p className="text-xl text-foreground/80">{t('contact.lead')}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulaire */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="bg-card rounded-3xl shadow-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">{t('contact.form.title')}</h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">{t('contact.form.name')}</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-blue-500 focus:outline-none transition-colors" placeholder={t('contact.form.namePlaceholder')} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">{t('contact.form.email')}</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-blue-500 focus:outline-none transition-colors" placeholder={t('contact.form.emailPlaceholder')} />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-foreground mb-2">{t('contact.form.whatsapp')}</label>
                    <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-blue-500 focus:outline-none transition-colors" placeholder={t('contact.form.whatsappPlaceholder')} />
                  </div>
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-foreground mb-2">{t('contact.form.businessType')}</label>
                    <select id="businessType" name="businessType" value={formData.businessType} onChange={handleChange} className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-blue-500 focus:outline-none transition-colors">
                      <option value="">{t('contact.form.businessTypePlaceholder')}</option>
                      <option value="clinic">{t('contact.form.businessTypes.clinic')}</option>
                      <option value="retail">{t('contact.form.businessTypes.retail')}</option>
                      <option value="services">{t('contact.form.businessTypes.services')}</option>
                      <option value="startup">{t('contact.form.businessTypes.startup')}</option>
                      <option value="other">{t('contact.form.businessTypes.other')}</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="goal" className="block text-sm font-medium text-foreground mb-2">{t('contact.form.goal')}</label>
                    <select id="goal" name="goal" value={formData.goal} onChange={handleChange} required className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-blue-500 focus:outline-none transition-colors">
                      <option value="">{t('contact.form.goalPlaceholder')}</option>
                      <option value="website">{t('contact.form.goals.website')}</option>
                      <option value="redesign">{t('contact.form.goals.redesign')}</option>
                      <option value="automation">{t('contact.form.goals.automation')}</option>
                      <option value="mvp">{t('contact.form.goals.mvp')}</option>
                      <option value="maintenance">{t('contact.form.goals.maintenance')}</option>
                      <option value="consultation">{t('contact.form.goals.consultation')}</option>
                    </select>
                  </div>
                  <Button type="submit" disabled={loading} className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg py-6">
                    <Send className="mr-2" size={20} /> {loading ? t('contact.form.sending') : t('contact.form.submit')}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Colonne droite */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-8">
              <div className="bg-card rounded-3xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold mb-4">{t('contact.schedule.title')}</h2>
                <p className="text-foreground/80 mb-6">{t('contact.schedule.description')}</p>
                <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-6">
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2">
                    <MessageCircle size={20} /> {t('common.cta.whatsapp')}
                  </a>
                </Button>
              </div>

              <div className="bg-card rounded-3xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">{t('contact.info.title')}</h2>
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
