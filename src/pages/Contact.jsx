import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, Send } from "lucide-react";
import SEO from "@/components/SEO";
import { useToast } from "@/components/ui/use-toast";

const initialForm = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  organizationType: "",
  need: "",
  budget: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (event) => setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.need) {
      toast({ title: "Informations manquantes", description: "Merci de renseigner votre nom, votre e-mail et le besoin principal.", variant: "destructive" });
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          whatsapp: formData.phone,
          businessType: formData.organizationType,
          goal: formData.need,
          message: `Organisation: ${formData.organization}\nBudget: ${formData.budget}\n\n${formData.message}`,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data?.error || "send_error");
      toast({ title: "Demande transmise", description: "Nous reviendrons vers vous pour qualifier le contexte et la prochaine étape." });
      setFormData(initialForm);
    } catch {
      toast({ title: "Envoi automatique indisponible", description: "Votre application e-mail va s’ouvrir avec les informations préparées.", variant: "destructive" });
      const subject = encodeURIComponent(`Demande d'étude — ${formData.organization || formData.name}`);
      const body = encodeURIComponent(Object.entries(formData).map(([key, value]) => `${key}: ${value}`).join("\n"));
      window.open(`mailto:info@fallcontech.com?subject=${subject}&body=${body}`, "_blank");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        path="/contact"
        title="Demander une étude de transformation numérique | Fallcon Tech"
        description="Présentez votre besoin de GED, logiciel métier, digitalisation administrative, santé, logistique ou infrastructure à Fallcon Tech Dakar."
      />
      <section className="contact-page">
        <div className="site-shell contact-page-grid">
          <div className="contact-intro">
            <p className="overline">Demande d’étude</p>
            <h1>Parlons du problème avant de parler de la solution.</h1>
            <p className="contact-lead">Décrivez le processus, les utilisateurs concernés et les difficultés actuelles. Nous vous répondrons avec une première lecture du besoin et la prochaine étape recommandée.</p>

            <div className="contact-details">
              <a href="mailto:info@fallcontech.com"><Mail size={19} /><span><small>E-mail</small>info@fallcontech.com</span></a>
              <a href="tel:+221774837576"><Phone size={19} /><span><small>Téléphone</small>+221 77 483 75 76</span></a>
              <div><MapPin size={19} /><span><small>Implantation</small>Dakar, Sénégal</span></div>
            </div>

            <div className="contact-expectation">
              <strong>Ce que vous recevrez au premier échange</strong>
              <ul>
                <li>Qualification du problème et des parties prenantes</li>
                <li>Identification des risques et dépendances</li>
                <li>Proposition d’une étape de diagnostic ou de cadrage</li>
              </ul>
            </div>
          </div>

          <form className="institutional-form" onSubmit={handleSubmit}>
            <div className="form-heading"><span>01</span><div><h2>Présentez votre contexte</h2><p>Les champs marqués d’un astérisque sont requis.</p></div></div>
            <div className="form-grid">
              <label>Nom et prénom *<input name="name" value={formData.name} onChange={handleChange} required placeholder="Votre nom" /></label>
              <label>Organisation<input name="organization" value={formData.organization} onChange={handleChange} placeholder="Nom de la structure" /></label>
              <label>E-mail professionnel *<input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="nom@organisation.sn" /></label>
              <label>Téléphone / WhatsApp<input name="phone" value={formData.phone} onChange={handleChange} placeholder="+221 …" /></label>
              <label>Type d’organisation
                <select name="organizationType" value={formData.organizationType} onChange={handleChange}>
                  <option value="">Sélectionner</option>
                  <option value="administration">Administration publique</option>
                  <option value="etablissement-public">Établissement ou agence publique</option>
                  <option value="entreprise">Entreprise privée</option>
                  <option value="sante">Clinique ou structure de santé</option>
                  <option value="ong">ONG ou programme</option>
                  <option value="education">École ou organisme de formation</option>
                  <option value="autre">Autre organisation</option>
                </select>
              </label>
              <label>Besoin principal *
                <select name="need" value={formData.need} onChange={handleChange} required>
                  <option value="">Sélectionner</option>
                  <option value="courrier-ged">Gestion électronique du courrier / GED</option>
                  <option value="application-metier">Application métier sur mesure</option>
                  <option value="digitalisation">Digitalisation d’une procédure administrative</option>
                  <option value="sante">Système de gestion clinique</option>
                  <option value="flotte">Gestion de flotte ou logistique</option>
                  <option value="infrastructure">Infrastructure, sauvegarde ou cybersécurité</option>
                  <option value="audit">Audit et feuille de route</option>
                </select>
              </label>
              <label className="form-wide">Budget indicatif
                <select name="budget" value={formData.budget} onChange={handleChange}>
                  <option value="">À définir / je ne sais pas encore</option>
                  <option value="moins-2m">Moins de 2 millions FCFA</option>
                  <option value="2-5m">2 à 5 millions FCFA</option>
                  <option value="5-15m">5 à 15 millions FCFA</option>
                  <option value="15-30m">15 à 30 millions FCFA</option>
                  <option value="plus-30m">Plus de 30 millions FCFA</option>
                </select>
              </label>
              <label className="form-wide">Contexte et difficulté actuelle
                <textarea name="message" value={formData.message} onChange={handleChange} rows="6" placeholder="Décrivez brièvement la procédure actuelle, les utilisateurs concernés, les outils utilisés et le résultat attendu." />
              </label>
            </div>
            <button className="button button-primary form-submit" type="submit" disabled={loading}>
              <Send size={17} /> {loading ? "Transmission…" : "Transmettre la demande"} <ArrowRight size={17} />
            </button>
            <p className="form-note">Vos informations sont utilisées uniquement pour répondre à cette demande.</p>
          </form>
        </div>
      </section>
    </>
  );
}
