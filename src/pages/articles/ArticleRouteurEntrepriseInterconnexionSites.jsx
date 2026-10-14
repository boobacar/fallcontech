import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ArticleRouteurEntrepriseInterconnexionSites = () => {
  const path = "/article/routeur-entreprise-interconnexion-sites";
  const title = "Routeur d'entreprise : interconnecter vos sites sans coupure";
  const description =
    "Box ou routeur professionnel ? VPN site à site, QoS, BGP et redondance : voici comment interconnecter vos agences et votre dépôt sans interrompre le service.";

  const faq = [
    {
      q: "Un routeur professionnel est-il utile pour une PME à un seul site ?",
      a: "Pas toujours. Une entreprise qui travaille sur un seul site, sans serveur à exposer et sans besoin de prioriser le trafic, se contente souvent d'une box opérateur correctement configurée. Le routeur professionnel prend tout son sens dès qu'il y a plusieurs sites, un second lien à gérer, des services à publier ou une exigence de continuité de service.",
    },
    {
      q: "Quelle différence entre un routeur et un pare-feu ?",
      a: "Le routeur achemine le trafic entre des réseaux et choisit le meilleur chemin, y compris vers un autre site. Le pare-feu, lui, filtre ce qui a le droit de passer. Les deux fonctions sont complémentaires : un routeur d'entreprise sait router et filtrer, mais un pare-feu dédié reste plus fin pour contrôler les applications et inspecter le trafic. Dans un réseau multi-sites, on les associe souvent.",
    },
    {
      q: "Qu'est-ce qu'un VPN site à site et en quoi diffère-t-il d'un MPLS ?",
      a: "Un VPN site à site relie deux réseaux par un tunnel chiffré qui traverse Internet : il est rapide à déployer et ne dépend pas d'un transport opérateur dédié. Un MPLS est un transport opéré par un fournisseur, avec des débits garantis et une isolation forte, mais plus long à mettre en place et facturé séparément. Beaucoup d'entreprises combinent les deux : MPLS entre les sites critiques, VPN site à site en complément ou en secours.",
    },
    {
      q: "À quoi sert la QoS sur un routeur d'entreprise ?",
      a: "La QoS, ou qualité de service, classe le trafic par priorité. La voix, les paiements en caisse et les applications métier passent avant les mises à jour, les sauvegardes et la navigation personnelle. Même lorsque la liaison est saturée, les usages sensibles restent fluides au lieu de subir une file d'attente commune.",
    },
    {
      q: "Comment assurer la continuité de service si le lien principal tombe ?",
      a: "En prévoyant un second lien, sur une technologie différente si possible, et en laissant le routeur basculer automatiquement dès qu'il détecte que le principal est hors service. Sans cette redondance, une coupure de fibre optique ou une panne chez le fournisseur arrête tous les sites d'un coup.",
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
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          },
        ]}
      />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link
            to="/resources"
            className="inline-flex items-center text-primary hover:text-blue-500 mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Retour aux ressources
          </Link>
          <Breadcrumbs
            items={[
              { label: "Accueil", to: "/" },
              { label: "Ressources", to: "/resources" },
              { label: "Routeur d'entreprise" },
            ]}
          />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
          </motion.div>
        </div>
      </section>
      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <p>
            Ouvrir une agence, un dépôt ou une deuxième boutique change la donne
            technique. La box installée par le fournisseur d'accès était suffisante pour
            un seul lieu ; elle ne relie pas plusieurs sites entre eux, ne garantit aucun
            débit à une application métier et n'offre aucune reprise automatique quand le
            lien tombe. À partir de deux ou trois lieux, la question n'est plus « comment
            se connecter à Internet ? » mais « comment faire tenir un réseau multi-sites
            fiable ? ». C'est précisément le rôle du <strong>routeur d'entreprise</strong>.
          </p>

          <h2>La box opérateur et le routeur professionnel : deux métiers différents</h2>
          <p>
            Une box opérateur est conçue pour un logement : quelques ordinateurs, une
            connexion partagée, un wifi, un filtrage de base. Elle sait traduire les
            adresses d'un petit réseau local, pas construire une politique de routage
            entre des sites. Elle n'a ni mémoire de plusieurs chemins, ni priorisation
            fine du trafic, ni reprise automatique sur un second opérateur.
          </p>
          <p>
            Un <strong>routeur professionnel</strong> travaille autrement. Il connaît
            plusieurs routes vers une même destination et choisit la meilleure en
            permanence, échange ses itinéraires avec les autres routeurs du réseau
            (protocole <strong>BGP</strong> entre sites ou avec les opérateurs),
            hiérarchise le trafic par application, et réagit en quelques secondes à la
            disparition d'un lien. Il encaisse aussi des débits qu'aucune box ne tient :
            fibres optiques agrégées, flux voix, sauvegardes et visioconférence sur la
            même liaison.
          </p>
          <p>
            La différence n'est donc pas une question de marque ni de prix, mais de
            fonctions : sans ces briques, un réseau multi-sites s'arrête au premier
            incident.
          </p>

          <h2>Quatre usages concrets de l'interconnexion de sites</h2>

          <h3>1. Relier plusieurs sites en VPN site à site avec un débit garanti</h3>
          <p>
            Une agence distante doit accéder au même système de gestion, à la même
            messagerie et aux mêmes dossiers que le siège, sans repartir d'un serveur
            local à maintenir. Le <strong>VPN site à site</strong> crée un tunnel chiffré
            permanent entre deux routeurs : les deux réseaux se comportent comme un seul,
            à distance. Le siège peut aussi ouvrir des tunnels vers chaque franchisé, avec
            des droits séparés, sans exposer le réseau interne à tout le monde.
          </p>

          <h3>2. Donner la priorité à la voix et à la caisse (QoS)</h3>
          <p>
            Quand une grosse sauvegarde ou une mise à jour logicielle sature la liaison,
            c'est l'appel du client qui coupe et l'encaissement qui traîne. La{" "}
            <strong>QoS</strong> règle cela : on déclare la voix, la téléphonie sur IP et
            les terminaux de caisse comme prioritaires, et tout le reste patiente. Sur
            une ligne pleine, le trafic sensible reste fluide au lieu de subir le même
            embouteillage que le reste.
          </p>

          <h3>3. Basculer sur un second lien quand le principal tombe</h3>
          <p>
            La <strong>redondance</strong> est ce qui distingue un réseau exploité d'un
            réseau subi. On raccorde deux liaisons au routeur, idéalement de technologies
            différentes ou de fournisseurs différents, et le routeur surveille les deux.
            Dès que le principal devient injoignable, il bascule sur le second sans
            intervention : la continuité de service tient le temps de la réparation. Un
            seul lien sans secours, c'est l'arrêt de toute l'activité à la moindre
            coupure de fibre optique.
          </p>

          <h3>4. Exposer des services tout en gardant les réseaux étanches</h3>
          <p>
            Certains services doivent être accessibles de l'extérieur (portail, serveur de
            fichiers, accès à distance pour les équipes en déplacement), tandis que
            d'autres — gestion, caisse, caméras — ne doivent jamais l'être. Un routeur
            d'entreprise segmente les réseaux : invités, bureautique, caisse, vidéo et
            administration vivent séparés. Une fuite sur un poste de la zone invités ne
            donne pas accès aux terminaux de paiement.
          </p>

          <h2>Ce que le matériel disponible permet</h2>
          <p>
            Pour ces usages, nous disposons du <strong>Huawei NetEngine 8000 M1A</strong>,
            un routeur d'entreprise et de site. Voici ses caractéristiques, reprises
            telles quelles, avec ce qu'elles changent en exploitation :
          </p>
          <ul>
            <li>
              <strong>Châssis 1U compact · 442 × 220 × 44,5 mm · 4,5 kg (5,8 kg emballé)</strong>{" "}
              : un <strong>routeur 1U</strong> peu profond qui se glisse dans une baie
              déjà installée, même dans une armoire peu encombrée.
            </li>
            <li>
              <strong>Capacité de commutation jusqu'à 352 Gbit/s · 72 Mpps</strong> : de la
              marge pour agréger plusieurs liens en fibre optique et absorber les pics du
              siège comme d'un point de présence.
            </li>
            <li>
              <strong>
                Interfaces : jusqu'à 16× 10GE SFP+, plus GE optiques (SFP) et cuivre (RJ45)
                selon la configuration
              </strong>{" "}
              : des liens 10 Gbit/s pour les artères entre sites et des ports GE pour le
              cuivre, la voix et la gestion. La configuration exacte de chaque unité est
              confirmée au devis.
            </li>
            <li>
              <strong>
                SRv6, EVPN, FlexE, Port Slicing, télémétrie en service et horodatage 1588v2
              </strong>{" "}
              : les fonctions qui séparent un routeur d'entreprise d'un équipement de
              gamme inférieure — segmentation, transport, mesure fine du réseau et
              synchronisation précise de l'horloge. La <strong>télémétrie</strong> remonte
              l'état réel des liens en continu, au lieu d'attendre une panne pour agir.
            </li>
            <li>
              <strong>
                Alimentation AC 100–240 V (environ 75 W) · ventilateurs redondants 2+1
                remplaçables à chaud
              </strong>{" "}
              : on remplace un ventilateur sans éteindre le routeur, donc sans interrompre
              la continuité de service.
            </li>
          </ul>
          <p>
            Les unités disponibles sont neuves et n'ont jamais été mises en service :
            onze exemplaires fabriqués en juin 2021, dans leur emballage d'origine, livrés
            avec notre garantie atelier depuis Dakar. Les licences Huawei (RTU) sont
            attachées au numéro de série et chiffrées séparément au devis. Le prix est
            établi sur devis selon la configuration et les licences réellement utiles.
          </p>

          <h2>Quand ce routeur est le bon choix, et quand il ne l'est pas</h2>
          <p>
            <strong>Le bon choix</strong> : plusieurs sites à relier (siège, agences,
            dépôt, franchises, campus), un besoin de prioriser la voix et la caisse, un
            second lien à gérer pour la continuité de service, des services à exposer tout
            en cloisonnant les réseaux, ou encore un réseau opérateur à faire tourner en
            accès et agrégation sur la fibre déjà déployée.
          </p>
          <p>
            <strong>Surdimensionné, soyons honnêtes</strong> : une PME à un seul site,
            avec une poignée de postes, aucune interconnexion et aucun besoin de
            priorisation n'a pas besoin d'un tel équipement. Une box opérateur bien
            configurée, complétée par un pare-feu dédié si les services exposés le
            justifient, suffit largement. Installer un routeur opérateur là où il n'y a
            qu'une ligne et trois ordinateurs, c'est payer une complexité inutile. Nous le
            disons au client avant de le vendre.
          </p>

          <h2>Ce que nous prenons en charge</h2>
          <p>
            Nous ne livrons pas un châssis nu. Chaque projet comprend :
          </p>
          <ul>
            <li>
              <strong>L'étude de la topologie</strong> : combien de sites, quels liens,
              quels débits réels, quels services doivent se parler.
            </li>
            <li>
              <strong>Le plan d'adressage</strong> : découpage des réseaux, plages réservées,
              cohérence entre le siège et les sites distants.
            </li>
            <li>
              <strong>La configuration des tunnels et des routes</strong> : VPN site à site,
              routes statiques ou dynamiques, échanges BGP là où c'est justifié.
            </li>
            <li>
              <strong>La priorisation du trafic</strong> : règles QoS pour la voix, la
              caisse et les applications métier.
            </li>
            <li>
              <strong>La journalisation et la supervision</strong> : journaux exploitables,
              remontée des alertes, suivi de l'état des liens avant que le client ne s'en
              aperçoive.
            </li>
            <li>
              <strong>La documentation remise au client</strong> : schéma du réseau,
              adressage, règles, procédures de secours — pour que le réseau ne dépende pas
              d'une seule personne.
            </li>
          </ul>

          <h2>Les erreurs classiques</h2>
          <ul>
            <li>
              <strong>Un seul lien sans secours.</strong> Une coupure de fibre optique
              arrête tous les sites d'un coup ; sans second lien, aucune continuité de
              service n'est possible.
            </li>
            <li>
              <strong>Des règles ouvertes.</strong> Autoriser largement « pour que ça
              marche » transforme le réseau en porte ouverte : chaque flux exposé doit
              répondre à un besoin identifié.
            </li>
            <li>
              <strong>Aucune supervision.</strong> On découvre la panne par un appel du
              client au lieu d'une alerte. Sans télémétrie ni remontée d'état, le routeur
              reste une boîte muette.
            </li>
            <li>
              <strong>Une configuration non documentée.</strong> Si une seule personne
              connaît les tunnels, les routes et les règles, son absence bloque toute
              intervention.
            </li>
          </ul>

          <h2>Questions fréquentes</h2>
          <div className="not-prose grid gap-4">
            {faq.map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>

          <div className="not-prose mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
            <p className="text-slate-800 font-medium mb-2">
              Un réseau multi-sites à interconnecter sans coupure ?
            </p>
            <p className="text-slate-700">
              Fallcon Tech étudie votre topologie, configure les tunnels et les routes,
              priorise la voix et la caisse, puis vous remet la documentation complète.
              Consultez la fiche produit du{" "}
              <Link to="/boutique/routeur-netengine-8000-m1a">
                routeur NetEngine 8000 M1A
              </Link>{" "}
              ou découvrez notre offre{" "}
              <Link to="/services/reseau-cablage-informatique-senegal">
                réseau et câblage informatique
              </Link>
              .
            </p>
          </div>
          <div className="not-prose mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90"
            >
              Parler à un expert
            </Link>
            <a
              href="https://wa.me/221774837576"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-medium hover:bg-muted"
            >
              Écrire sur WhatsApp
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleRouteurEntrepriseInterconnexionSites;
