import React, { useState } from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import imgBooking from "@/assets/articles/online-reservation-system.png";
import imgWhatsapp from "@/assets/articles/whatsapp-automation.webp";
import imgMvp from "@/assets/articles/mvp-development-for-startups.png";
import imgSeo from "@/assets/articles/seo.png";
import imgMobile from "@/assets/articles/mobile-first-design.png";
import imgStack from "@/assets/articles/stack.png";

const Resources = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleDownload = (e) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email Requis",
        description:
          "Veuillez entrer votre email pour télécharger la checklist.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Email Invalide",
        description: "Veuillez entrer une adresse email valide.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "🚧 Téléchargement Bientôt Disponible !",
      description:
        "Cette fonctionnalité n'est pas encore implémentée, mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochain message ! 🚀",
    });

    setEmail("");
  };

  const blogPosts = [
    {
      title:
        "Comment choisir un système de réservation pour les cliniques à Dakar",
      excerpt:
        "Les fonctionnalités essentielles dont chaque cabinet médical a besoin pour la prise de rendez-vous en ligne.",
      category: "Santé",
      readTime: "5 min de lecture",
      link: "/article/booking-system-clinics-dakar",
    },
    {
      title: "Automatiser les suivis clients avec WhatsApp au Sénégal",
      excerpt:
        "Guide étape par étape pour mettre en place des workflows d'engagement client automatisés.",
      category: "Automatisation",
      readTime: "7 min de lecture",
      link: "/article/automating-follow-ups-whatsapp-senegal",
    },
    {
      title: "De l'idée au MVP en 2 semaines : à quoi s'attendre",
      excerpt:
        "Le processus complet du prototypage rapide et du lancement de votre idée de startup.",
      category: "Startups",
      readTime: "6 min de lecture",
      link: "/article/idea-to-mvp-2-weeks",
    },
    {
      title: "Les bases du SEO pour les entreprises sénégalaises",
      excerpt:
        "Stratégies de SEO local pour un meilleur classement à Dakar et à travers le Sénégal.",
      category: "SEO",
      readTime: "8 min de lecture",
      link: "/article/seo-basics-senegalese-businesses",
    },
    {
      title: "Pourquoi le design Mobile-First est crucial en Afrique",
      excerpt:
        "Statistiques et meilleures pratiques pour l'optimisation mobile sur les marchés émergents.",
      category: "Design",
      readTime: "5 min de lecture",
      link: "/article/why-mobile-first-design-matters-africa",
    },
    {
      title: "Choisir la bonne stack technique pour votre projet",
      excerpt:
        "React vs WordPress, Firebase vs bases de données traditionnelles—qu'est-ce qui fonctionne le mieux ?",
      category: "Développement",
      readTime: "10 min de lecture",
      link: "/article/choosing-right-tech-stack",
    },
  ];

  return (
    <>
      <SEO
        path="/resources"
        title="Guides & Ressources — Développement Web au Sénégal"
        description="Guides pratiques, SEO local, automatisations WhatsApp et checklists pour réussir en ligne au Sénégal."
      />

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Ressources & Guides
            </h1>
            <p className="text-xl text-foreground/80">
              Outils gratuits, checklists et conseils pour vous aider à réussir
              en ligne
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-card rounded-3xl shadow-2xl p-8 md:p-12 mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary p-4 rounded-2xl">
                <FileText className="text-primary-foreground" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold">
                  Checklist de Lancement de Site Web
                </h2>
                <p className="text-muted-foreground">Édition Sénégal</p>
              </div>
            </div>

            <p className="text-foreground/80 mb-6">
              Obtenez notre checklist complète couvrant tout, de
              l'enregistrement du domaine à la configuration SEO, spécialement
              conçue pour les entreprises au Sénégal.
            </p>

            <form onSubmit={handleDownload} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Adresse Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg py-6"
              >
                <Download className="mr-2" size={20} />
                Télécharger la Checklist Gratuite
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Derniers Articles
            </h2>
            <p className="text-xl text-foreground/80">
              Guides pratiques et aperçus pour développer votre activité en
              ligne
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => {
              const slug = post.link.split("/").pop();
              const map = {
                "booking-system-clinics-dakar": imgBooking,
                "automating-follow-ups-whatsapp-senegal": imgWhatsapp,
                "idea-to-mvp-2-weeks": imgMvp,
                "seo-basics-senegalese-businesses": imgSeo,
                "why-mobile-first-design-matters-africa": imgMobile,
                "choosing-right-tech-stack": imgStack,
              };
              const img = map[slug];
              return (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <Link to={post.link}>
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src={img}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-500">
                          {post.category}
                        </span>
                      </div>
                    </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                      <span className="text-blue-500 font-semibold text-sm flex items-center gap-1">
                        Lire Plus <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );})}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
