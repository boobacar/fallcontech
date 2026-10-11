import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ArticleCommentChoisirLogicielGestionSenegal = () => {
  const path = "/article/comment-choisir-logiciel-gestion-senegal";
  const title = "Comment choisir un logiciel de gestion au Sénégal";
  const description =
    "Grille de décision pour choisir un logiciel de gestion au Sénégal : 6 critères qui comptent, familles de solutions, coût complet sur 3 ans et 8 questions à poser.";

  const faq = [
    {
      q: "Faut-il choisir le logiciel le plus réputé du marché ?",
      a: "Non. Un logiciel réputé ailleurs n'est pas une preuve d'adaptation à vos processus. Le bon point de départ est votre façon de vendre, de stocker, de facturer et de payer, puis la recherche d'un outil qui la suit. Un outil populaire mais mal adapté oblige vos équipes à le contourner.",
    },
    {
      q: "Quel budget prévoir pour un logiciel de gestion au Sénégal ?",
      a: "Un module de gestion simple, avec stocks, factures et clients, démarre à 1 500 000 F CFA, et une plateforme complète multi-modules démarre à 3 000 000 F CFA. Le budget réel se lit sur le coût complet sur 3 ans, jamais sur le seul prix de lancement.",
    },
    {
      q: "Le logiciel doit-il fonctionner hors ligne ?",
      a: "Cela dépend de la qualité de connexion sur chaque site de travail. Si vos équipes opèrent dans des zones instables, le mode hors ligne est une condition de continuité : le logiciel doit permettre de continuer à travailler puis de synchroniser automatiquement, sans créer de doublons dans les données.",
    },
    {
      q: "Quand un développement sur mesure est-il préférable ?",
      a: "Lorsqu'aucun outil existant n'épouse votre processus et que ce processus représente un avantage réel pour votre activité. Le sur mesure s'adapte exactement à votre façon de travailler, en échange d'une préparation plus poussée du périmètre et des règles de gestion.",
    },
    {
      q: "L'obligation de facture électronique est-elle déjà en vigueur ?",
      a: "La loi de finances 2025 a introduit cette obligation dans le Code général des impôts, à l'article 447. Le format et le calendrier de bascule doivent être fixés par arrêté ministériel, et aucune date officielle n'est publiée à ce jour. Il est donc prudent de choisir un outil capable d'émettre des factures dans un format structuré.",
    },
  ];

  return (
    <>
      <SEO
        path={path}
        title={`${title} | Fallcon Tech`}
        description={description}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />
      <section className="py-12 gradient-bg"><div className="container mx-auto px-4">
        <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8"><ArrowLeft className="mr-2" size={20} />Retour aux ressources</Link>
        <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Choisir un logiciel de gestion" }]} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}><h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1></motion.div>
      </div></section>
      <article className="py-16 bg-background"><div className="container mx-auto px-4 max-w-3xl prose prose-lg">
        <p className="lead">« Quel est le meilleur logiciel de gestion ? » La question paraît naturelle, mais elle mène souvent à une décision coûteuse. Un logiciel n'est ni bon ni mauvais dans l'absolu : il est adapté ou non à vos processus. La bonne question est donc : quel outil correspond à la façon dont votre entreprise vend, stocke, facture et paie ? Voici une grille de décision, sans classement et sans marque.</p>

        <h2>Pourquoi « le meilleur logiciel » n'existe pas</h2>
        <p>Deux entreprises du même secteur peuvent avoir des besoins opposés. Une boutique qui encaisse au comptoir n'a pas les mêmes contraintes qu'un grossiste qui livre sur plusieurs sites. Un atelier qui facture à la tâche ne fonctionne pas comme un commerce qui gère des variantes et des dates de péremption.</p>
        <p>Un logiciel populaire ailleurs n'est donc pas une preuve de bon choix chez vous. Ce qui compte, c'est la correspondance entre l'outil et vos processus réels. C'est pourquoi une grille de décision — et non un classement — est le bon point de départ.</p>

        <h2>Les 6 critères qui décident vraiment</h2>
        <p>Avant de comparer quoi que ce soit, répondez à ces six questions : elles orientent à elles seules le choix de la famille de solutions.</p>

        <h3>1. Le processus métier réel : ventes, stock, facturation, paie</h3>
        <p>Décrivez précisément ce que vos équipes font chaque jour : vente au comptoir, en ligne, à crédit, par commande ; variantes de produits, lots, dates de péremption ; facturation à l'unité, au forfait ou au temps passé. La paie fait-elle partie du besoin ? Un outil qui ne suit pas votre processus réel oblige vos équipes à le contourner.</p>

        <h3>2. Le nombre d'utilisateurs et de sites</h3>
        <p>Un outil utilisé par une seule personne dans un local ne se conçoit pas comme un outil partagé par plusieurs équipes sur plusieurs sites. Dès qu'il y a plusieurs utilisateurs, il faut des droits par rôle et une consolidation des chiffres, et décider si les données des différents sites sont communes ou séparées.</p>

        <h3>3. La connexion Internet disponible</h3>
        <p>Tous les lieux de travail n'ont pas la même connexion. Si le logiciel dépend entièrement du réseau, une coupure peut bloquer la caisse. Évaluez la connexion réelle sur chaque site, pas seulement au siège.</p>

        <h3>4. Le besoin de fonctionner hors ligne</h3>
        <p>Si vos équipes travaillent dans des zones où la connexion est instable, le mode hors ligne est une condition de continuité, pas un luxe. Le logiciel doit permettre de continuer à vendre, puis de synchroniser automatiquement dès le retour du réseau. Un mode hors ligne mal conçu crée des doublons : exigez qu'il soit testé avant la mise en service.</p>

        <h3>5. L'intégration du paiement mobile money</h3>
        <p>Le paiement mobile money est courant dans le commerce sénégalais. Encaisser directement dans le logiciel simplifie le rapprochement entre une vente et son règlement. Cette intégration demande des tests de bout en bout : elle doit figurer au périmètre, pas être ajoutée après coup.</p>

        <h3>6. La propriété et la réversibilité des données</h3>
        <p>Vos données vous appartiennent. Deux points doivent être écrits avant de signer : la réversibilité, c'est-à-dire votre capacité à récupérer l'intégralité de vos informations dans un format exploitable, et la propriété du code, qui définit qui peut faire évoluer l'outil et à quelles conditions. Un outil dont on ne peut pas sortir les données vous rend dépendant de votre prestataire.</p>

        <h2>Les familles de solutions et pour qui chacune convient</h2>

        <h3>Le logiciel de caisse et de stock</h3>
        <p>C'est la solution la plus simple : encaisser, suivre le stock, éditer un ticket ou une facture. Elle convient aux boutiques, restaurants, ateliers et points de vente qui veulent sortir du cahier et du fichier partagé. Un module simple, avec stocks, factures et clients, démarre à 1 500 000 F CFA.</p>

        <h3>La gestion commerciale</h3>
        <p>Dès que plusieurs personnes vendent, encaissent et facturent, le besoin s'élargit : catalogue, remises, devis, bons de livraison, suivi des règlements et relances. Elle convient aux entreprises qui partagent les mêmes données en temps réel, avec des droits par rôle. Son budget se situe entre les deux points de départ annoncés ici.</p>

        <h3>La plateforme complète multi-modules</h3>
        <p>Quand l'entreprise veut piloter l'ensemble de son activité au même endroit, on passe à une plateforme complète : ventes, stocks, facturation, comptabilité, RH et tableaux de bord. Elle démarre à 3 000 000 F CFA. Chaque module doit alimenter les autres en données justes, avec des rôles distincts : c'est ce qui distingue une vraie plateforme d'une collection d'outils séparés.</p>

        <h3>Le développement sur mesure</h3>
        <p>Quand aucun outil existant n'épouse votre processus et que celui-ci représente un avantage réel pour votre activité, le développement sur mesure devient pertinent : l'outil est construit autour de votre façon de travailler. En contrepartie, le projet demande un périmètre écrit avec soin.</p>

        <h2>Calculer le coût complet sur 3 ans</h2>
        <p>Un logiciel ne se lit pas comme un achat en magasin : son prix d'appel ne dit rien du coût réel. Cinq postes composent le coût complet et doivent tous être additionnés sur trois ans.</p>
        <ul>
          <li>L'acquisition : la mise en place initiale, avec la reprise des données existantes.</li>
          <li>L'hébergement : serveur, sauvegardes et surveillance, que le logiciel soit chez vous ou hébergé.</li>
          <li>La maintenance : corrections, mises à jour de sécurité et disponibilité de l'outil.</li>
          <li>La formation : une équipe formée utilise l'outil, une équipe laissée seule le contourne.</li>
          <li>Les évolutions : une nouvelle règle commerciale, un nouveau site, un nouveau document à produire.</li>
        </ul>
        <p>Additionnez ces postes sur trois ans, puis comparez le total au coût actuel du désordre : heures perdues à ressaisir, écarts de stock, factures oubliées. Le retour sur investissement observé est généralement inférieur à 12 mois, lorsque le logiciel remplace un travail manuel coûteux.</p>

        <h2>La conformité à anticiper : la facture électronique</h2>
        <p>Un projet de gestion doit aussi intégrer la réglementation. La loi de finances 2025 a introduit l'obligation de facture électronique dans le Code général des impôts, à son article 447. Le format et le calendrier de bascule doivent être fixés par arrêté ministériel ; aucune date officielle n'est publiée à ce jour.</p>
        <p>Concrètement, une entreprise ne peut donc pas encore figer de date de mise en conformité, mais elle a intérêt à choisir un outil capable d'émettre des factures dans un format structuré et de conserver les pièces. Anticiper coûte moins cher que corriger dans l'urgence.</p>
        <p>Les sanctions sont prévues : l'amende pour non-respect est de 25 % du montant de la TVA, plafonnée à 5 000 000 FCFA par facture (article 671 IV du CGI). Pour mémoire, le taux normal de la TVA est de 18 %. Un logiciel qui ne produit pas de factures structurées fragilise vos obligations fiscales dès que le calendrier officiel sera publié.</p>

        <h2>Les signaux d'alerte dans un devis</h2>
        <p>Les mauvaises surprises d'un projet viennent rarement de la technique : elles viennent d'un devis trop vague. Quatre signaux doivent vous alerter.</p>
        <ul>
          <li>Des données non exportables : le devis ne mentionne pas la réversibilité, et vous ignorez dans quel format vous pourrez récupérer vos informations.</li>
          <li>Un code non livré : le prestataire reste seul propriétaire du code, et vous ne pouvez faire évoluer l'outil qu'avec lui, à ses conditions.</li>
          <li>Un périmètre flou : les modules et les écrans ne sont pas listés, et les délais ne sont rattachés à aucun lot précis.</li>
          <li>Pas de plan de reprise : rien n'est prévu pour sauvegarder les données ni repartir en cas d'incident grave ou de changement de prestataire.</li>
        </ul>
        <p>Un document qui ne traite pas ces quatre points n'est pas encore un devis : c'est une estimation. Demandez les précisions par écrit avant de vous engager.</p>

        <h2>La liste de contrôle : 8 questions avant de signer</h2>
        <ol>
          <li>Quels modules et quels documents sont inclus dans le périmètre écrit ?</li>
          <li>Combien d'utilisateurs et de sites le prix couvre-t-il ?</li>
          <li>Comment le logiciel fonctionne-t-il hors ligne, et comment la synchronisation est-elle testée ?</li>
          <li>Le paiement mobile money est-il intégré et testé de bout en bout ?</li>
          <li>Dans quel format puis-je récupérer l'intégralité de mes données, et à quel moment ?</li>
          <li>Qui détient le code, et à quelles conditions puis-je le faire évoluer ?</li>
          <li>Que couvre la maintenance annuelle : hébergement, sauvegardes, mises à jour, corrections ?</li>
          <li>Quel est le plan de reprise en cas d'incident grave ou de changement de prestataire ?</li>
        </ol>
        <p>Si un prestataire élude une de ces questions, c'est déjà une information. Un fournisseur sérieux répond par écrit, sans détour.</p>

        <h2>Questions fréquentes</h2>
        {faq.map((f, i) => (
          <div key={i}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}

        <p>Vous voulez appliquer cette grille à votre entreprise ? Décrivez votre activité : nous vous répondons avec un périmètre écrit, un coût complet sur trois ans et un plan de reprise. Pour situer les budgets, consultez les fourchettes détaillées dans <Link to="/article/prix-logiciel-gestion-senegal">le prix d'un logiciel de gestion au Sénégal</Link>.</p>
        <div className="not-prose mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-blue-500 transition-colors">Demander un devis</Link>
          <Link to="/services/logiciel-sur-mesure-senegal" className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary/10 transition-colors">Voir le sur-mesure</Link>
        </div>
      </div></article>
    </>
  );
};

export default ArticleCommentChoisirLogicielGestionSenegal;
