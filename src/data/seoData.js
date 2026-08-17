export const SITE_URL = "https://fallcontech.com";

const defaultImage = "/logo.png";

export const pageSeo = {
  "/": {
    title: "Transformation numérique Sénégal : développement web & logiciels | Fallcon Tech",
    description:
      "Fallcon Tech conçoit des sites web, applications métier, GED, logiciels de gestion et infrastructures sécurisées pour administrations, cliniques, ONG et entreprises au Sénégal.",
    priority: "1.0",
    changefreq: "weekly",
  },
  "/services": {
    title: "Solutions de transformation numérique Sénégal | Fallcon Tech",
    description:
      "GED, gestion du courrier, logiciels métier, digitalisation administrative, infrastructure et cybersécurité pour organisations au Sénégal.",
    priority: "0.95",
    changefreq: "weekly",
  },
  "/solutions/gestion-courrier-ged": {
    title: "Logiciel gestion du courrier (GEC) & GED Sénégal | Fallcon Tech",
    description: "Gestion électronique du courrier (GEC), registre numérique, parapheur électronique et archivage pour administrations, collectivités et entreprises au Sénégal.",
    priority: "0.98",
    changefreq: "weekly",
  },
  "/solutions/applications-metier": {
    title: "Développement logiciel métier sur mesure Sénégal | Fallcon Tech",
    description: "Applications métier sur mesure, portails internes, workflows et tableaux de bord pour organisations au Sénégal.",
    priority: "0.96",
    changefreq: "weekly",
  },
  "/solutions/digitalisation-administrations": {
    title: "Dématérialisation des procédures administratives Sénégal | Fallcon Tech",
    description: "Dématérialisation administrative au Sénégal : registres numériques, courriers, parapheur et circuits de validation pour administrations, mairies et collectivités locales.",
    priority: "0.98",
    changefreq: "weekly",
  },
  "/solutions/infrastructure-cybersecurite": {
    title: "Infrastructure informatique & cybersécurité Sénégal",
    description: "Audit, sauvegarde, supervision, contrôle d’accès et continuité informatique pour entreprises, ONG et administrations au Sénégal.",
    priority: "0.92",
    changefreq: "monthly",
  },
  "/secteurs/sante": {
    title: "Logiciel clinique & cabinet médical Sénégal | Fallcon Tech",
    description: "Dossier patient, rendez-vous, caisse, prescriptions, stocks et reporting pour cliniques et cabinets au Sénégal.",
    priority: "0.94",
    changefreq: "weekly",
  },
  "/secteurs/transport-logistique": {
    title: "Logiciel gestion flotte transport Sénégal | Fallcon Tech",
    description: "Véhicules, conducteurs, missions, maintenance, carburant, GPS et tableaux de bord pour flottes au Sénégal.",
    priority: "0.94",
    changefreq: "weekly",
  },
  "/secteurs/ong-projets": {
    title: "Logiciel suivi projets ONG Sénégal | Fallcon Tech",
    description: "Suivi de projets, bénéficiaires, activités, justificatifs et indicateurs pour ONG et programmes au Sénégal.",
    priority: "0.90",
    changefreq: "monthly",
  },
  "/secteurs/education-formation": {
    title: "Logiciel gestion école & formation Sénégal | Fallcon Tech",
    description: "Inscriptions, paiements, présences, dossiers et reporting pour écoles et centres de formation au Sénégal.",
    priority: "0.88",
    changefreq: "monthly",
  },
  "/services/creation-site-web-dakar": {
    title: "Création site web Dakar & Sénégal — dès 350 000 F CFA | Fallcon Tech",
    description:
      "Création de site web à Dakar et au Sénégal dès 350 000 F CFA : site professionnel mobile-first, SEO local, Core Web Vitals, Analytics et stratégie de conversion.",
    priority: "0.95",
    changefreq: "weekly",
  },
  "/services/agence-seo-senegal": {
    title: "Agence SEO Sénégal | Référencement Google à Dakar",
    description:
      "Agence SEO au Sénégal : audit technique, optimisation on-page, stratégie de contenus locale, Google Business Profile et suivi KPI.",
    priority: "0.95",
    changefreq: "weekly",
  },
  "/services/automatisation-whatsapp-senegal": {
    title: "Automatisation WhatsApp Business Sénégal | Relances & CRM",
    description:
      "Automatisation WhatsApp Business au Sénégal : relances prospects, rappels rendez-vous, workflows CRM et intégrations sur mesure.",
    priority: "0.90",
    changefreq: "weekly",
  },
  "/services/integration-paiement-mobile-money-machines": {
    title: "Intégration Wave Orange Money sur machine à pièces | Fallcon Tech Sénégal",
    description:
      "Intégration mobile money Wave, Orange Money ou Free Money sur distributeurs automatiques, machines de vente, bornes et équipements à monnayeur au Sénégal.",
    priority: "0.92",
    changefreq: "weekly",
  },
  "/services/developpeur-web-senegal": {
    title: "Développeur Web Sénégal | Sites, Apps & Plateformes Dakar",
    description:
      "Développeur web au Sénégal pour sites internet, applications métier, plateformes React, tableaux de bord, SEO technique et intégrations business.",
    priority: "0.94",
    changefreq: "weekly",
  },
  "/services/creation-site-internet-senegal": {
    title: "Création Site Internet Sénégal | Site Web Pro dès 350 000 F",
    description:
      "Création de site internet au Sénégal : site vitrine, site business ou landing page rapide, SEO-friendly, mobile-first, WhatsApp et devis clair.",
    priority: "0.94",
    changefreq: "weekly",
  },
  "/services/tarif-site-vitrine-senegal": {
    title: "Tarif Site Vitrine Sénégal | Prix dès 350 000 F CFA",
    description:
      "Tarif site vitrine au Sénégal : prix clair dès 350 000 F CFA, design mobile, SEO de base, formulaire, WhatsApp, mise en ligne et devis rapide.",
    priority: "0.90",
    changefreq: "weekly",
  },
  "/services/audit-seo-professionnel-senegal": {
    title: "Audit SEO professionnel Sénégal | Fallcon Tech Dakar",
    description:
      "Audit SEO professionnel au Sénégal : analyse de vos impressions, requêtes, pages et problèmes techniques pour transformer votre visibilité Google en clics et en contacts qualifiés.",
    priority: "0.90",
    changefreq: "weekly",
  },
  "/services/web-development-senegal": {
    title: "Web Development Company Senegal | Websites & Apps Dakar",
    description:
      "Web development company in Senegal: fast websites, React web apps, SEO setup, lead tracking and conversion-focused pages by Fallcon Tech Dakar.",
    priority: "0.93",
    changefreq: "weekly",
    lang: "en-SN",
  },
  "/services/mobile-app-development-senegal": {
    title: "Mobile App Development Senegal | Android & iOS Apps Dakar",
    description:
      "Mobile app development in Senegal for startups and businesses: MVP planning, React Native apps, dashboards, payments and WhatsApp integrations.",
    priority: "0.91",
    changefreq: "weekly",
    lang: "en-SN",
  },
  "/services/software-development-senegal": {
    title: "Software Development Senegal | Custom Business Apps Dakar",
    description:
      "Custom software development in Senegal: CRM, stock, billing, booking, dashboards, automation and secure internal platforms for growing companies.",
    priority: "0.91",
    changefreq: "weekly",
    lang: "en-SN",
  },
  "/work": {
    title: "Références logiciels métier & transformation numérique | Fallcon Tech",
    description:
      "Découvrez les logiciels métier, plateformes documentaires et sites institutionnels réalisés par Fallcon Tech au Sénégal.",
    priority: "0.85",
    changefreq: "monthly",
  },
  "/about": {
    title: "Cabinet de transformation numérique à Dakar | Fallcon Tech",
    description:
      "Fallcon Tech est un cabinet d’ingénierie numérique à Dakar spécialisé en GED, logiciels métier, santé, logistique et systèmes sécurisés.",
    priority: "0.82",
    changefreq: "monthly",
  },
  "/pricing": {
    title: "Formats d’intervention transformation numérique | Fallcon Tech",
    description:
      "Diagnostic, projet de transformation numérique et maintenance pour administrations, ONG et entreprises au Sénégal. Budget établi après cadrage.",
    priority: "0.72",
    changefreq: "monthly",
  },
  "/resources": {
    title: "Centre de ressources transformation numérique Sénégal | Fallcon Tech",
    description:
      "Guides sur la GED, le courrier, les logiciels métier, la cybersécurité, la sauvegarde et la transformation numérique au Sénégal.",
    priority: "0.78",
    changefreq: "weekly",
  },
  "/contact": {
    title: "Demander une étude de transformation numérique | Fallcon Tech",
    description:
      "Présentez votre besoin de GED, logiciel métier, digitalisation administrative, santé, logistique ou infrastructure à Fallcon Tech Dakar.",
    priority: "0.90",
    changefreq: "monthly",
  },
  "/case-study/clinic": {
    title: "Site Web de la Clinique Dentaire DABIA | Fallcon Tech",
    description:
      "Parcours patient, informations de soins, contact, rendez-vous et SEO local pour la Clinique Dentaire DABIA à Dakar.",
  },
  "/case-study/telimanshare": {
    title: "TelimanShare — plateforme documentaire sécurisée | Fallcon Tech",
    description:
      "Plateforme de partage documentaire avec droits d’accès, historique, recherche, versions et restauration de fichiers.",
  },
  "/case-study/whatsapp": {
    title: "Étude de cas automatisation WhatsApp Sénégal | Fallcon Tech",
    description:
      "Cas pratique d’automatisation WhatsApp : relances, qualification de prospects, suivi client et gain de temps opérationnel.",
  },
  "/case-study/miroir-foncier": {
    title: "Miroir Foncier — plateforme d’information foncière | Fallcon Tech",
    description:
      "Plateforme éditoriale structurée, responsive et performante pour rendre l’information foncière plus accessible.",
  },
  "/case-study/hg-cuisine": {
    title: "Étude de cas HG Cuisine | Site web restaurant Sénégal",
    description:
      "Projet HG Cuisine : présence web, catalogue, expérience mobile et parcours de contact pour un business de restauration.",
  },
  "/case-study/teliman-tracking-fleeti": {
    title: "Teliman Fleet Operations — pilotage de flotte | Fallcon Tech",
    description:
      "Tableau de bord métier pour consolider les données Fleeti, suivre la flotte, prioriser les alertes et piloter les opérations.",
  },
};

export const articleSeo = {
  "/article/agence-digitale-dakar-pme-seo-site-web-automatisation": ["Agence digitale Dakar : SEO, site web et automatisation PME", "Guide complet pour choisir une agence digitale à Dakar capable de créer un site web performant, améliorer le SEO local et automatiser la prospection WhatsApp des PME."],
  "/article/developpement-logiciel-sur-mesure-senegal-pme": ["Développement logiciel sur mesure Sénégal pour PME", "CRM, stock, facturation, courrier, RH ou dashboard : comment réussir un projet de logiciel sur mesure au Sénégal avec budget, étapes, sécurité et ROI."],
  "/article/google-ads-ou-seo-senegal-choisir": ["Google Ads ou SEO Sénégal : quel canal choisir ?", "Comparatif Google Ads vs SEO au Sénégal : coûts, délais, avantages, limites et stratégie mixte pour générer plus de prospects qualifiés."],
  "/article/landing-page-dakar-conversion-leads": ["Landing page Dakar : créer une page qui convertit", "Structure complète d’une landing page à Dakar : message, SEO, preuve, CTA WhatsApp, formulaire et suivi pour augmenter les leads qualifiés."],
  "/article/referencement-google-senegal-plan-90-jours": ["Référencement Google Sénégal : plan SEO 90 jours", "Plan SEO sur 90 jours pour améliorer le référencement Google au Sénégal : audit, pages services, contenu, maillage interne, Search Console et optimisation CTR."],
  "/article/digitalisation-courriers-services-senegal": ["Digitalisation des courriers au Sénégal : réussir sa transition digitale", "Registre numérique, workflow, GED, archivage et traçabilité : comment digitaliser les courriers entrants et sortants de votre service."],
  "/article/logiciel-gestion-courrier-administration-senegal": ["Logiciel de gestion de courrier au Sénégal : fonctionnalités et budget", "Checklist pour choisir ou développer une application de gestion de courrier adaptée aux administrations, services et PME sénégalaises."],
  "/article/creer-site-web-professionnel-dakar": ["Créer un site web professionnel à Dakar : guide complet 2026", "Types de sites, coûts réels, technologies, délais et critères pour choisir le bon prestataire web au Sénégal."],
  "/article/developpement-application-mobile-dakar": ["Développement application mobile à Dakar : guide complet 2026", "Coûts, technologies React Native, paiements Wave/Orange Money et étapes pour développer une app mobile à Dakar."],
  "/article/creer-boutique-en-ligne-senegal": ["Créer une boutique en ligne au Sénégal : guide complet 2026", "Lancer votre e-commerce avec Wave et Orange Money : technologies, coûts, livraison locale et SEO e-commerce."],
  "/article/developpeur-freelance-dakar-embaucher": ["Embaucher un développeur freelance à Dakar : guide 2026", "Tarifs réels, compétences à vérifier, contrat, signaux d’alarme et comparatif freelance vs agence à Dakar."],
  "/article/application-gestion-sur-mesure-senegal": ["Application de gestion sur mesure au Sénégal : pourquoi et comment", "CRM, stocks, facturation, RH : comment digitaliser votre PME sénégalaise avec une application adaptée à vos processus."],
  "/article/refonte-site-web-dakar-seo-2026": ["Refonte site web à Dakar : plan SEO + conversion en 2026", "Méthode terrain pour transformer un site lent en machine à leads avec SEO local, UX mobile et CTA orientés business."],
  "/article/maintenance-site-web-business-senegal": ["Maintenance site web business au Sénégal : éviter les pannes", "Checklist de maintenance proactive : sécurité, backups, monitoring et performances pour garantir la continuité."],
  "/article/seo-ecommerce-senegal-guide-2026": ["SEO e-commerce au Sénégal : guide 2026 pour plus de ventes", "Structurer catégories, fiches produits et maillage interne pour ranker sur Google et convertir plus de visiteurs."],
  "/article/prix-maintenance-informatique-senegal-2026": ["Prix maintenance informatique au Sénégal en 2026 : guide PME", "Tarifs, SLA, niveaux de service et critères de choix pour externaliser votre support IT sans risque."],
  "/article/automatisation-whatsapp-ventes-senegal-2026": ["Automatisation WhatsApp au Sénégal : convertir plus sans spam", "Playbook actionnable pour relances commerciales, qualification et closing avec WhatsApp Business au Sénégal."],
  "/article/optimisation-vitesse-site-seo-conversions": ["Site web lent : 12 optimisations qui boostent SEO et conversions", "Checklist pratique pour accélérer votre site, améliorer les Core Web Vitals et convertir plus de visiteurs."],
  "/article/seo-local-senegal-guide-2026": ["SEO local au Sénégal : guide complet 2026", "Méthode actionnable pour mieux ranker sur Google Maps et Google Search avec une vraie stratégie locale."],
  "/article/prix-site-web-senegal-2026": ["Combien coûte un site web professionnel en 2026 au Sénégal ?", "Tarifs réalistes, fourchettes de budget et facteurs qui influencent le coût d’un site performant."],
  "/article/wordpress-vs-nextjs-seo": ["WordPress vs Next.js : quel choix pour SEO et performance ?", "Comparatif simple pour choisir la stack adaptée à vos objectifs business et SEO."],
  "/article/checklist-audit-seo-30-minutes": ["Audit SEO en 30 minutes : checklist terrain", "Les contrôles essentiels pour détecter vite les erreurs qui bloquent votre trafic organique."],
  "/article/agence-web-dakar-comment-choisir-2026": ["Choisir une agence web à Dakar en 2026 : la checklist complète", "Découvrez notre méthode pas à pas pour sélectionner le bon partenaire web à Dakar. Critères, budget, livrables : tous nos conseils pour 2026."],
  "/article/prix-creation-site-web-senegal-guide-complet": ["Création site web Sénégal : Guide complet | FallConTech", "Créez un site web performant au Sénégal : découvrez les coûts réels, les étapes clés et les conseils d'experts. Demandez votre devis gratuit."],
  "/article/seo-local-senegal-google-business-profile-plan-action": ["SEO local Sénégal : Google Business Profile + plan d’action", "Méthode pratique pour améliorer votre visibilité locale : GBP, contenus géolocalisés, maillage interne et suivi KPI."],
  "/article/refonte-site-vitrine-seo-dakar": ["Refonte de site vitrine à Dakar : SEO local et conversions", "Checklist Core Web Vitals, balises locales et contenus qui génèrent des leads à Dakar et au Sénégal."],
  "/article/ecommerce-senegal-wave-orange": ["E-commerce au Sénégal : Wave, Orange Money, Free Money et logistique", "Stack paiement mobile, logistique locale, fiches produits SEO et automatisations WhatsApp."],
  "/article/workflows-whatsapp-crm-senegal": ["Workflows WhatsApp + CRM au Sénégal : relances et ventes", "Connecter WhatsApp Business, CRM et emails pour relances, paniers abandonnés et support client."],
  "/article/maintenance-wordpress-securite-senegal": ["Maintenance WordPress au Sénégal : sécurité, vitesse et backups", "Mises à jour sécurisées, Core Web Vitals, sauvegardes vérifiées et surveillance malware."],
  "/article/core-web-vitals-afrique": ["Core Web Vitals en Afrique : comment passer au vert", "LCP, CLS, INP sur mobile 3G/4G : optimisations performance adaptées aux marchés africains."],
  "/article/integrer-paiement-machine-eau-esp32-senegal": ["Intégrer Wave ou Orange Money sur une machine à pièces", "Architecture, sécurité et tests pour accepter Wave, Orange Money et Free Money sur un distributeur, une borne ou une machine à monnayeur."],
  "/article/developpement-iot-embarque-senegal-arduino-esp32": ["Développement IoT & embarqué au Sénégal : Arduino, ESP32", "Capteurs, contrôle, OTA et dashboards : comment démarrer un projet IoT fiable et évolutif."],
  "/article/passerelles-paiement-iot-wave-orange-free": ["Passerelles de paiement pour IoT : Wave, Orange Money, Free Money", "Comparatif et bonnes pratiques : sécurité, confirmations côté serveur, résilience et supervision."],
  "/article/telemetrie-maintenance-predictive-iot-senegal": ["Télémétrie & maintenance prédictive pour machines connectées", "Réduire les pannes avec la donnée : capteurs, alertes et historique exploitable."],
  "/article/booking-system-clinics-dakar": ["Système de réservation clinique à Dakar : comment choisir", "Les fonctionnalités essentielles pour la prise de rendez-vous en ligne dans une clinique ou un cabinet médical."],
  "/article/automating-follow-ups-whatsapp-senegal": ["Automatiser les suivis clients avec WhatsApp au Sénégal", "Guide étape par étape pour mettre en place des workflows d’engagement client automatisés."],
  "/article/idea-to-mvp-2-weeks": ["De l’idée au MVP en 2 semaines : à quoi s’attendre", "Le processus complet du prototypage rapide et du lancement de votre idée de startup."],
  "/article/seo-basics-senegalese-businesses": ["Les bases du SEO pour les entreprises sénégalaises", "Stratégies de SEO local pour un meilleur classement à Dakar et à travers le Sénégal."],
  "/article/why-mobile-first-design-matters-africa": ["Pourquoi le design Mobile-First est crucial en Afrique", "Statistiques et meilleures pratiques pour l’optimisation mobile sur les marchés émergents."],
  "/article/choosing-right-tech-stack": ["Choisir la bonne stack technique pour votre projet", "React vs WordPress, Firebase vs bases de données traditionnelles : ce qui fonctionne selon le besoin."],
  "/article/protection-electrique-pc-dakar-onduleur": ["Protection électrique PC & Mac : guide Dakar", "Onduleur vs régulateur : protéger votre matériel informatique des variations de tension au Sénégal."],
  "/article/internet-lent-fibre-dakar-solutions": ["Internet lent et fibre instable à Dakar : solutions", "Fibre Orange, Free, Starlink et backup 4G pour limiter les coupures internet en entreprise."],
  "/article/arnaques-wave-orange-money-senegal": ["Arnaques Wave & Orange Money au Sénégal : alerte sécurité", "Les méthodes d’arnaque mobile money au Sénégal et comment sécuriser vos comptes professionnels."],
  "/article/acheter-pc-portable-original-dakar": ["Où acheter son matériel informatique à Dakar ?", "Différencier un PC venant d’un ordinateur neuf original : guide d’achat informatique pour entreprises."],
  "/article/logiciel-gestion-stock-caisse-senegal": ["Logiciel de gestion & caisse pour commerces au Sénégal", "Gestion de stock, caisse, anti-vol et rapports automatiques : pourquoi quitter le cahier pour un logiciel POS."],
  "/article/comment-choisir-developpeur-web-dakar-senegal": ["Choisir un développeur web à Dakar : guide et conseils | FallConTech", "Découvrez comment choisir le développeur web idéal à Dakar. Freelance ou agence ? Junior ou senior ? Nos critères pour éviter les erreurs et réussir votre projet."],
  "/article/freelance-ou-agence-web-senegal-que-choisir": ["Freelance ou agence web au Sénégal : que choisir ?", "Avantages et inconvénients d’un freelance vs une agence digitale à Dakar : prix, délais et qualité."],
  "/article/role-informaticien-pme-dakar": ["Le vrai rôle d’un informaticien pour votre PME", "Pourquoi votre PME a besoin d’un informaticien orienté sécurité, stratégie, cloud et continuité."],
  "/article/cout-creation-site-web-senegal-prix": ["Combien coûte un site web au Sénégal en 2025 ?", "Estimations de prix pour site vitrine, e-commerce et application web à Dakar et au Sénégal."],
  "/article/support-informatique-dedie-dakar-importance": ["Support informatique dédié à Dakar : pourquoi c’est important", "Réduire les temps d’arrêt avec une équipe de support informatique dédiée pour votre entreprise à Dakar."],
  "/article/depannage-informatique-5-problemes-courants": ["Dépannage informatique : 5 problèmes courants en entreprise", "Pannes fréquentes, lenteurs, réseau, imprimantes et sécurité : comment diagnostiquer les problèmes IT courants."],
  "/article/pourquoi-informaticien-generaliste-dakar": ["Pourquoi choisir un informaticien généraliste à Dakar", "Un profil IT polyvalent peut gérer support, réseau, sécurité, cloud et stratégie numérique pour PME à Dakar."],
  "/article/maintenance-nettoyage-pc-senegal": ["Maintenance et nettoyage PC au Sénégal : guide pratique", "Nettoyage, mises à jour, sauvegarde et prévention des pannes pour prolonger la durée de vie des PC professionnels."],
  "/article/cybersecurite-pme-senegal": ["Cybersécurité PME Sénégal : priorités et erreurs à éviter", "Mots de passe, phishing, sauvegardes, antivirus, accès cloud et bonnes pratiques pour protéger une PME."],
  "/article/choisir-pc-professionnel-guide": ["Choisir un PC professionnel : guide pour entreprises", "Critères d’achat pour PC professionnel : processeur, RAM, stockage, garantie, usage métier et durabilité."],
  "/article/sauvegarde-donnees-entreprises": ["Sauvegarde données entreprise : méthode simple pour une protection fiable", "Protégez vos données professionnelles avec une stratégie de sauvegarde fiable. Découvrez notre méthode simple, cloud ou local, avec tests de restauration. Sécurisez votre activité dès maintenant."],
  "/article/developpement-web-professionnel-senegal": ["Développement web professionnel Sénégal : guide 2026", "Site vitrine, e-commerce, application métier : comment réussir un développement web professionnel au Sénégal — technologies, coûts, étapes et choix du bon prestataire à Dakar."],
  "/article/optimisation-seo-site-web-senegal": ["Optimiser son site web pour Google au Sénégal", "Vitesse, mobile, contenu, SEO local et maillage interne : la méthode pour optimiser votre site web et gagner des positions sur Google au Sénégal."],
  "/article/gestion-electronique-courrier-gec-senegal": ["Gestion électronique du courrier (GEC) : le guide complet", "Registre numérique, workflow, parapheur, archivage : comprendre la GEC et choisir un logiciel de gestion du courrier adapté aux administrations et entreprises au Sénégal."],
  "/article/digitalisation-services-publics-senegal": ["Digitalisation des services publics au Sénégal : enjeux et démarche", "Dématérialisation des procédures, état civil, courrier et dossiers : les enjeux et la méthode pour réussir la digitalisation d’une administration au Sénégal."],
  "/article/logiciel-clinique-dentaire-senegal": ["Logiciel clinique dentaire Sénégal : guide 2026", "Dossier patient, rendez-vous, caisse, prescriptions, stocks et reporting : comment choisir ou développer un logiciel pour votre clinique dentaire au Sénégal."],
  "/article/logiciel-gestion-flotte-senegal": ["Logiciel gestion flotte Sénégal : guide 2026", "Véhicules, conducteurs, missions, maintenance, carburant, GPS et tableaux de bord : comment piloter votre flotte au Sénégal."],
  "/article/refonte-site-internet-senegal": ["Refonte site internet Sénégal : quand et comment", "Signaux d’alerte, objectifs, budget et méthode : comment réussir la refonte de votre site internet au Sénégal sans perdre votre référencement."],
  "/article/automatisation-whatsapp-business-senegal": ["Automatisation WhatsApp Business Sénégal : guide complet", "Relances prospects, rappels de rendez-vous, notifications et support : comment automatiser WhatsApp Business au Sénégal sans spam."],
  "/article/dematerialisation-procedures-administratives-senegal": ["Dématérialisation des procédures administratives : le guide complet", "Registres numériques, formulaires, circuits de validation et suivi des délais : comment réussir la dématérialisation des procédures administratives au Sénégal."],
  "/article/parapheur-electronique-administration-senegal": ["Parapheur électronique : dématérialiser visas et signatures", "Circuit de visa, signature électronique, traçabilité et archivage : comprendre le parapheur électronique et l'adopter dans une administration ou une collectivité au Sénégal."],
  "/article/archivage-electronique-valeur-probante-senegal": ["Archivage électronique : valeur probante et bonnes pratiques", "Intégrité, horodatage, conservation à long terme : comprendre l'archivage électronique à valeur probante et l'appliquer dans une administration ou une entreprise au Sénégal."],
  "/article/logiciel-metier-mairie-collectivites-senegal": ["Logiciel métier mairie : digitaliser les services d'une collectivité", "Registres, courrier, délibérations, actes et circuits interservices : comment choisir ou développer un logiciel métier pour une mairie ou une collectivité locale au Sénégal."],
  "/article/dematerialisation-marches-publics-senegal": ["Dématérialisation des marchés publics : enjeux et outils", "Procédures électroniques, traçabilité, interopérabilité et conduite du changement : comprendre la dématérialisation des marchés publics et s'y préparer au Sénégal."],
  "/article/digitalisation-entreprise-pme-senegal": ["Digitalisation d'entreprise au Sénégal : par où commencer", "Processus, données, outils et conduite du changement : une méthode concrète pour digitaliser une entreprise ou une PME au Sénégal, sans tout refondre d'un coup."],
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function titleFromPath(path) {
  return path
    .split("/")
    .filter(Boolean)
    .pop()
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase()) || "Fallcon Tech";
}

export function getSeoForPath(path = "/") {
  const article = articleSeo[path];
  const base = article
    ? {
        title: `${article[0]} | Fallcon Tech`,
        description: article[1],
        type: "article",
        priority: "0.60",
        changefreq: "monthly",
      }
    : pageSeo[path] || {
        title: `${titleFromPath(path)} | Fallcon Tech`,
        description:
          "Fallcon Tech accompagne les entreprises au Sénégal avec création de site web, SEO local, automatisation, applications métier et IoT.",
        priority: path.startsWith("/case-study/") ? "0.70" : "0.50",
        changefreq: "monthly",
      };

  return {
    image: defaultImage,
    type: "website",
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    ...base,
    path,
    canonical: absoluteUrl(path),
    ogImage: absoluteUrl(base.image || defaultImage),
  };
}
