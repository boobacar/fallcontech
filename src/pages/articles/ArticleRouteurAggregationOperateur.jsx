import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ArticleRouteurAggregationOperateur = () => {
  const path = "/article/routeur-agregation-operateur";
  const title = "Routeur d'agrégation : équiper un opérateur ou un réseau étendu";
  const description =
    "Capacité de commutation, redondance des cartes de contrôle, EVPN, FlexE : comment choisir et dimensionner un routeur d'agrégation pour opérateurs et grands réseaux.";

  const specs = [
    "Châssis 3U · 8 emplacements de cartes",
    "Capacité de commutation 2,4 Tbit/s · 453 Mpps",
    "2× cartes IPU-1T2 (contrôle & commutation, redondance 1:1)",
    "Cartes 10×10GbE SFP+ (CR5D00EAGF70) · 40GE/100GE en option",
    "SR, EVPN, FlexE, horodatage 1588v2",
    "Alimentation AC redondante 1+1",
  ];

  const faq = [
    {
      q: "Quelle différence entre un switch et un routeur d'agrégation ?",
      a: "Un switch relie des équipements à l'intérieur d'un même réseau local et se contente souvent d'empiler des ports. Un routeur d'agrégation achemine le trafic entre des réseaux différents, tient une table de routage étendue, agrège des dizaines de liens à grande capacité de commutation et gère des fonctions opérateur comme EVPN, FlexE et la redondance des cartes de contrôle. On empile des switches pour la densité ; on choisit un routeur d'agrégation pour le débit, la convergence et la fiabilité.",
    },
    {
      q: "Faut-il prévoir la redondance dès le départ ?",
      a: "Oui, dès que le réseau porte du trafic critique. Deux cartes de contrôle et de commutation synchronisées évitent qu'une panne matérielle coupe tout le trafic le temps d'une intervention. Ajouter la redondance plus tard coûte plus cher en heures d'indisponibilité qu'en matériel, et impose une nouvelle fenêtre de migration.",
    },
    {
      q: "Combien de cartes faut-il pour démarrer ?",
      a: "Le point de départ dépend de vos liens actifs et de votre marge de croissance. Un châssis 8 emplacements laisse de la place pour les cartes d'interface 10×10GbE, les cartes de contrôle et les options 40GE/100GE. Nous partons de votre débit réel et de votre nombre d'interfaces, puis réservons l'espace nécessaire aux prochaines cartes.",
    },
    {
      q: "L'équipement s'intègre-t-il à un réseau existant en fibre optique ?",
      a: "Oui. Les cartes 10×10GbE SFP+ et les options 40GE/100GE dialoguent avec les liens fibre optique déjà en place. Les fonctions SR, EVPN et FlexE permettent de s'insérer dans une architecture multi-sites et dans un datacenter sans reconstruire le réseau. L'horodatage 1588v2 assure la synchronisation lorsque les services en dépendent.",
    },
    {
      q: "Comment se déroule une migration sans coupure ?",
      a: "Nous préparons la configuration hors production, nous testons les protocoles et les règles de redondance, puis nous basculons le trafic par étapes en gardant un retour arrière possible. La migration est planifiée dans une fenêtre négociée et la supervision est en place avant le basculement.",
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
            mainEntity: faq.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          },
        ]}
      />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs
            items={[
              { label: "Accueil", to: "/" },
              { label: "Ressources", to: "/resources" },
              { label: "Routeur d'agrégation" },
            ]}
          />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <p className="lead">
            Tout réseau qui grandit finit par se heurter à la même limite : le trafic arrive de partout, mais rien ne le
            rassemble proprement. Des dizaines de liens, plusieurs sites, des milliers d'abonnés et un datacenter à
            interconnecter. Le routeur d'agrégation est l'équipement qui tient cette charge, dans un opérateur comme
            dans un grand réseau d'entreprise.
          </p>

          <section>
            <h2>L'agrégation de trafic, et pourquoi les switches empilés ne suffisent pas</h2>
            <p>
              L'agrégation de trafic consiste à rassembler dans un même équipement les flux venus de nombreuses
              sources : abonnés, antennes, agences, serveurs, interconnexions vers un datacenter. Ce point de
              rassemblement doit à la fois encaisser le débit, tenir une table de routage étendue, appliquer des règles
              de qualité de service et survivre à la panne d'un composant.
            </p>
            <p>
              Empiler des switches est séduisant au départ : on multiplie les ports et on relie les étages entre eux.
              Mais un empilement ne fournit pas une réelle capacité de commutation, ne gère pas les fonctions
              attendues d'un routeur opérateur et dépend souvent d'un seul plan de contrôle. Le jour où un lien sature
              ou qu'une carte tombe, l'ensemble vacille. Le routeur d'agrégation, lui, place un vrai cœur de réseau au
              bon endroit : il route, il commute à grande échelle et il reste en service quand un élément lâche.
            </p>
          </section>

          <section>
            <h2>La redondance 1:1 des cartes de contrôle : ce qui se passe réellement</h2>
            <p>
              C'est souvent le point que l'on sous-estime à l'achat, et c'est pourtant la vraie raison d'investir dans
              ce type de matériel. Le châssis embarque deux cartes de contrôle et de commutation, synchronisées en
              permanence. Les deux connaissent à tout instant l'état du réseau, la table de routage et les sessions en
              cours.
            </p>
            <p>
              Si une carte tombe — panne matérielle, incident d'alimentation, défaut logiciel — la seconde prend le
              relais immédiatement. Pas de redémarrage complet, pas de reconstruction du routage, pas d'interruption
              pour les utilisateurs. Vous perdez une carte, pas le réseau. C'est exactement la différence entre une
              nuit d'astreinte et une intervention planifiée : la redondance des cartes de contrôle transforme un
              incident grave en simple remplacement de matériel.
            </p>
            <p>
              La même logique s'applique à l'alimentation : deux blocs AC redondants en 1+1 garantissent que la panne
              d'une source électrique ne coupe pas l'agrégation.
            </p>
          </section>

          <section>
            <h2>Fiche technique du routeur d'agrégation disponible</h2>
            <p>
              Nous proposons un routeur d'agrégation opérateur au format 3U, modulaire, prévu pour la collecte et
              l'agrégation de trafic à forte densité. Voici sa configuration, telle qu'elle est livrée :
            </p>
            <ul>
              {specs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Concrètement : la capacité de commutation de 2,4 Tbit/s avec 453 Mpps absorbe la charge d'un point
              d'agrégation opérateur. Les deux cartes IPU-1T2 assurent le contrôle et la commutation en redondance
              1:1. Les cartes 10×10GbE SFP+ (CR5D00EAGF70) offrent la densité d'interfaces 10 Gbit/s, et les options
              40GE/100GE permettent de monter vers le cœur ou vers un datacenter. Les fonctions SR, EVPN et FlexE
              couvrent le routage de segments, l'interconnexion multi-sites et le découpage de bande passante, tandis
              que l'horodatage 1588v2 synchronise le réseau à l'échelle de la nanoseconde.
            </p>
          </section>

          <section>
            <h2>Les cas d'usage</h2>
            <ul>
              <li>
                <strong>Agrégation d'abonnés :</strong> un fournisseur d'accès Internet rassemble les liens issus de
                ses points de présence et de ses accès avant de les porter vers le cœur de réseau.
              </li>
              <li>
                <strong>Collecte de trafic entre plusieurs sites :</strong> une banque, une mine ou un groupe
                multi-sites raccorde ses agences et ses sites distants sur un même point d'agrégation avant de les
                router.
              </li>
              <li>
                <strong>Interconnexion vers un datacenter :</strong> un hébergeur ou un intégrateur relie ses baies, ses
                liens de transit et ses clients avec des interfaces 10GE, 40GE ou 100GE.
              </li>
              <li>
                <strong>Montée en capacité d'un réseau existant :</strong> un réseau étendu déjà en service sature son
                équipement actuel ; le châssis modulaire prend le relais sans repenser toute l'architecture.
              </li>
            </ul>
          </section>

          <section>
            <h2>Comment on dimensionne</h2>
            <p>
              Un dimensionnement sérieux ne part pas du matériel, il part de votre réseau. Nous appliquons toujours la
              même méthode :
            </p>
            <ul>
              <li>
                <strong>Mesurer le débit actuel :</strong> débit réel aux heures de pointe, pas seulement la capacité
                théorique des liens.
              </li>
              <li>
                <strong>Estimer la marge de croissance :</strong> trois à cinq ans d'augmentation du trafic selon votre
                marché et vos projets.
              </li>
              <li>
                <strong>Qualifier le type de trafic :</strong> voix, données, vidéo, sauvegardes, trafic d'abonnés — la
                qualité de service et l'horodatage n'ont pas la même importance partout.
              </li>
              <li>
                <strong>Compter les interfaces :</strong> nombre de liens fibre optique, débit par lien, besoins en
                10GE, 40GE ou 100GE.
              </li>
            </ul>
            <p>
              C'est pourquoi nous raisonnons en cartes et non en ports isolés. Une carte d'interface regroupe plusieurs
              ports avec une capacité et un rôle précis ; le nombre d'emplacements libres détermine votre croissance
              future. Choisir son châssis sur le seul nombre de ports du jour, c'est se condamner à racheter du
              matériel dès la première vague d'extension.
            </p>
          </section>

          <section>
            <h2>Licences et options</h2>
            <p>
              Un équipement opérateur se chiffre en deux temps. D'un côté le matériel : châssis, cartes de contrôle,
              cartes d'interface et optiques. De l'autre les licences et fonctions logicielles, rattachées au numéro
              de série de l'équipement et chiffrées séparément au devis selon les fonctions que vous activez.
            </p>
            <p>
              Cette séparation est une bonne nouvelle : elle vous laisse activer uniquement ce que votre réseau
              utilise, puis ajouter des fonctions plus tard sans changer de châssis. Nous détaillons systématiquement ce
              qui est inclus dans la configuration et ce qui relève d'une licence, pour que vous sachiez exactement ce
              que vous achetez.
            </p>
          </section>

          <section>
            <h2>Ce que nous prenons en charge</h2>
            <ul>
              <li>
                <strong>Audit du réseau existant :</strong> topologie, débits, points de fragilité et goulots
                d'étranglement.
              </li>
              <li>
                <strong>Dimensionnement :</strong> choix des cartes, des interfaces et des options en fonction de vos
                mesures.
              </li>
              <li>
                <strong>Migration sans coupure :</strong> préparation, tests et bascule par étapes, avec retour arrière
                prévu.
              </li>
              <li>
                <strong>Configuration :</strong> routage, EVPN, FlexE, qualité de service, synchronisation 1588v2 et
                redondance.
              </li>
              <li>
                <strong>Supervision :</strong> remontée des alarmes, suivi des interfaces et des cartes.
              </li>
              <li>
                <strong>Documentation :</strong> remise de la configuration et de l'architecture déployée.
              </li>
            </ul>
            <p>
              Ce travail s'inscrit dans notre offre de <Link to="/services/reseau-cablage-informatique-senegal">réseau
              et câblage informatique au Sénégal</Link>, avec livraison depuis Dakar et accompagnement des opérateurs,
              fournisseurs d'accès Internet, hébergeurs et grands réseaux d'Afrique de l'Ouest.
            </p>
          </section>

          <section>
            <h2>Les erreurs classiques</h2>
            <ul>
              <li>
                <strong>Une capacité sous-dimensionnée :</strong> choisir la capacité pour le trafic du jour et buter
                sur la première hausse.
              </li>
              <li>
                <strong>Aucune redondance :</strong> économiser une carte de contrôle et payer chaque panne en heures
                d'indisponibilité.
              </li>
              <li>
                <strong>Une migration non testée :</strong> basculer en production une configuration jamais éprouvée
                hors fenêtre.
              </li>
              <li>
                <strong>Des licences oubliées :</strong> découvrir au moment de la mise en service qu'une fonction
                essentielle dépend d'une licence non prévue.
              </li>
            </ul>
          </section>

          <section>
            <h2>Questions fréquentes</h2>
            <div className="not-prose grid gap-4">
              {faq.map((item) => (
                <div key={item.q} className="bg-card border border-border rounded-xl p-5">
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="not-prose mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
            <p className="text-slate-800 font-medium mb-2">Un projet d'agrégation ou de montée en capacité ?</p>
            <p className="text-slate-700">
              Fallcon Tech audite votre réseau, dimensionne l'équipement et accompagne la migration. Consultez la{" "}
              <Link to="/boutique/routeur-netengine-8000-m8">fiche du routeur d'agrégation NetEngine 8000 M8</Link> ou
              présentez-nous votre besoin.
            </p>
          </div>
          <div className="not-prose mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-blue-600"
            >
              Demander un devis
            </Link>
            <a
              href="https://wa.me/221774837576"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-medium hover:bg-secondary"
            >
              Parler sur WhatsApp
            </a>
            <Link
              to="/boutique/routeur-netengine-8000-m8"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-medium hover:bg-secondary"
            >
              Voir la fiche produit
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleRouteurAggregationOperateur;
