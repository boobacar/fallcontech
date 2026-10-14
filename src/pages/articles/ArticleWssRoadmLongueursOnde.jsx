import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ArticleWssRoadmLongueursOnde = () => {
  const path = "/article/wss-roadm-longueurs-onde";
  const title = "WSS et ROADM : ajouter ou retirer des longueurs d'onde";
  const description =
    "WSS et nœud ROADM expliqués simplement : ajouter, retirer ou rediriger une longueur d'onde à distance, sans intervention sur site, pour un réseau DWDM souple.";

  // Source unique de vérité : la FAQ visible et le JSON-LD affichent exactement le même contenu.
  const faq = [
    {
      q: "Qu'est-ce qu'un ROADM en termes simples ?",
      a: "Un ROADM est un nœud optique qui laisse passer un grand nombre de longueurs d'onde dans une fibre, et qui permet d'en ajouter, d'en retirer ou d'en rediriger une en particulier — sans toucher aux autres. Au lieu d'un point où l'on branche ou débranche physiquement des câbles, c'est un carrefour qui se reconfigure à distance, par commande, depuis un poste d'exploitation.",
    },
    {
      q: "Faut-il un WSS pour démarrer un réseau optique ?",
      a: "Non, pas pour relier deux sites : un simple multiplexeur fixe, sans partie active, suffit pour transporter plusieurs longueurs d'onde sur un lien point à point. Le WSS devient nécessaire dès que l'on veut un nœud que l'on reconfigurer sans se déplacer : ajouter un client, retirer un flux ou changer une route à distance. On peut donc démarrer en point à point, puis introduire un ROADM à base de WSS lorsqu'un nœud urbain ou régional doit devenir souple.",
    },
    {
      q: "Peut-on ajouter une longueur d'onde sans couper le trafic existant ?",
      a: "Oui, c'est exactement l'intérêt d'un nœud à base de WSS. Une insertion se prépare : on vérifie la grille de fréquences, la puissance, puis on égalise les niveaux avec l'atténuation par longueur d'onde. Le nouveau canal est mis en service sans interrompre ceux qui passent déjà par le nœud, ce qui évite une coupure de service pour l'ensemble des clients du lien.",
    },
    {
      q: "À quoi sert l'atténuation par longueur d'onde ?",
      a: "Chaque canal n'arrive pas avec la même puissance selon la distance parcourue et le chemin emprunté. L'atténuation par longueur d'onde (0 à 15 dB sur cette carte) permet de ramener tous les canaux à un niveau comparable avant l'amplification. Sans cette égalisation, un canal trop fort sature l'amplificateur et dégrade les canaux voisins.",
    },
    {
      q: "Quels prérequis faut-il prévoir pour intégrer la carte ?",
      a: "Trois éléments comptent : un châssis compatible (ici un nœud ROADM OptiX OSN 6800 ou 8800, en T16, T32 ou T64), un plan de fréquences documenté, et une chaîne de supervision pour suivre les puissances et les alarmes. La carte occupe deux emplacements adjacents du châssis et se raccorde en LC/PC, avec surveillance des performances optiques en service.",
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
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "WSS et ROADM" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <p className="lead">
            Sur un réseau optique, la ressource la plus précieuse n'est pas la fibre : c'est le nombre de longueurs
            d'onde qu'on sait y faire circuler, et la souplesse avec laquelle on les ajoute, les retire ou les
            redirige. Le WSS et le nœud ROADM sont les deux pièces qui rendent cela possible sans envoyer un
            technicien sur le site. Voici comment ils travaillent ensemble.
          </p>

          <section>
            <h2>Le principe de départ : le multiplexage en longueur d'onde</h2>
            <p>
              Une fibre optique ne transporte pas un seul signal : elle en transporte plusieurs en même temps, à
              condition qu'ils utilisent des couleurs de lumière différentes. Le{" "}
              <strong>multiplexage en longueur d'onde</strong> (WDM) consiste exactement à cela — envoyer plusieurs
              « couleurs » dans la même fibre, chacune portant un trafic indépendant, puis les séparer à l'arrivée.
            </p>
            <p>
              Quand l'espacement entre ces couleurs est resserré, on parle de <strong>DWDM</strong> (multiplexage
              dense) : les canaux sont alors si proches qu'on en aligne des dizaines dans une seule fibre. C'est le
              socle du <strong>transport optique</strong> moderne, sur lequel s'appuient les couches <strong>OTN</strong>{" "}
              et les services des opérateurs. Un <strong>réseau métropolitain</strong> et un <strong>backbone</strong>{" "}
              reposent tous deux sur ce principe : beaucoup de longueurs d'onde, pour beaucoup de clients, sur un
              nombre limité de fibres.
            </p>
            <p>
              Le point sensible n'est pas d'y faire entrer plusieurs couleurs : c'est de pouvoir modifier la
              répartition. Tant que l'on n'a que des multiplexeurs fixes, chaque changement — un client de plus, un
              flux à déplacer — se traduit par une intervention sur site. C'est là que le WSS entre en jeu.
            </p>
          </section>

          <section>
            <h2>Ce qu'un WSS fait réellement, et pourquoi « sélectif » est le mot important</h2>
            <p>
              Un <strong>WSS</strong> (commutateur sélectif en longueur d'onde, wavelength selective switch) n'est pas
              un simple mélangeur de couleurs. Un multiplexeur ordinaire combine ou sépare des longueurs d'onde selon
              un plan figé. Le WSS, lui, <strong>choisit</strong> : il prend le signal en entrée, le décompose canal
              par canal, et dirige chaque longueur d'onde vers le port de sortie que l'on décide — isolément, sans
              affecter les autres.
            </p>
            <p>
              C'est cette sélectivité qui change tout. Le mot « sélectif » signifie que chaque canal peut être{" "}
              <strong>ajouté</strong> localement, <strong>extrait</strong> pour desservir un client, ou{" "}
              <strong>redirigé</strong> vers une autre direction, indépendamment de ses voisins. On peut donc
              reconfigurer une longueur d'onde sans interrompre celles qui transitent déjà par le nœud.
            </p>
            <p>
              Concrètement, la carte disponible travaille en <strong>bande C</strong> — la plus répandue sur les
              réseaux WDM en exploitation — et ne traite pas une seule couleur : elle en gère un grand nombre à la
              fois, comme le détaille sa fiche technique plus bas.
            </p>
          </section>

          <section>
            <h2>Ce qu'un nœud ROADM permet en exploitation</h2>
            <p>
              Rassembler des WSS dans un châssis donne un <strong>nœud optique</strong> dit <strong>ROADM</strong>{" "}
              (reconfigurable optical add/drop multiplexer) : un carrefour optique qui se reconfigure par commande,
              à distance. Pour un <strong>opérateur</strong>, un <strong>fournisseur d'accès Internet</strong>, un
              intégrateur ou un exploitant de réseau métropolitain, cela se traduit par des gestes d'exploitation
              simples :
            </p>
            <ul>
              <li>
                <strong>Ajouter un client</strong> sur un lien DWDM déjà en service, en insérant une longueur d'onde
                dédiée à son trafic, sans reposer de fibre.
              </li>
              <li>
                <strong>Retirer un client</strong> proprement : on libère la longueur d'onde et on la réaffecte
                ailleurs, sans toucher au matériel des autres.
              </li>
              <li>
                <strong>Rediriger un flux</strong> vers un autre chemin, par exemple pour délester une route
                encombrée ou contourner un segment en travaux.
              </li>
              <li>
                <strong>Reconfigurer à distance</strong> : la modification est appliquée depuis le poste
                d'exploitation, sans déplacement sur site ni coupure du trafic passant.
              </li>
              <li>
                <strong>Faire évoluer la capacité</strong> en ajoutant de nouvelles longueurs d'onde sur
                l'infrastructure existante, plutôt qu'en posant une nouvelle fibre.
              </li>
            </ul>
            <p>
              C'est ce qui distingue un réseau réellement souple d'un réseau figé : le délai et le coût d'un
              changement ne dépendent plus d'un déplacement, mais d'une opération de configuration.
            </p>
          </section>

          <section>
            <h2>Fiche technique de l'équipement disponible</h2>
            <p>
              La carte ci-dessous est le cœur d'un nœud ROADM à WSS. Elle est neuve, n'a jamais été déployée et
              reste dans son emballage d'origine ; trois unités sont disponibles.
            </p>
            <p>
              <strong>Huawei TN12WSMD901 (WSMD9)</strong> — carte WSS 9 ports :
            </p>
            <ul>
              <li>Carte WSS 9 ports de multiplexage/démultiplexage sélectif · double largeur, occupe 2 slots</li>
              <li>Bande C 196,05 – 192,10 THz · espacement de canaux 50 GHz</li>
              <li>80 canaux optiques · jusqu'à 40 longueurs d'onde ajoutées/extraites</li>
              <li>Compatible grille flexible · atténuation par longueur d'onde (0–15 dB)</li>
              <li>Ports optiques LC/PC (AM/DM) · surveillance des performances optiques en service</li>
              <li>Pour nœuds ROADM OptiX OSN 6800 / 8800 (T16 / T32 / T64)</li>
              <li>Référence Huawei 03030SVJ</li>
            </ul>
            <p>
              L'<strong>atténuation par canal</strong> réglable (0 à 15 dB) mérite une explication : elle permet
              d'égaliser les niveaux entre longueurs d'onde qui n'ont pas parcouru la même distance. Sans cette
              égalisation, un canal trop puissant peut saturer l'amplificateur et dégrader l'ensemble du spectre.
              L'<strong>espacement de 50 GHz</strong>, lui, détermine le nombre de canaux que l'on peut aligner dans
              la bande C — d'où les 80 canaux de la carte, et jusqu'à 40 longueurs d'onde ajoutées ou extraites au
              niveau du nœud.
            </p>
          </section>

          <section>
            <h2>Les cas d'usage</h2>
            <ul>
              <li>
                <strong>Nœud intermédiaire sur un réseau métropolitain.</strong> Une ville dispose de plusieurs
                sites à relier : un nœud ROADM à WSS permet d'ajouter ou de retirer les longueurs d'onde de chaque
                site au fur et à mesure, sans redéployer de fibre entre les points de présence.
              </li>
              <li>
                <strong>Cœur de réseau régional (backbone).</strong> Sur un axe longue distance, le nœud reconfigurable
                autorise le redimensionnement des routes et la réaffectation des capacités entre régions selon le
                trafic.
              </li>
              <li>
                <strong>Extension d'un réseau existant.</strong> Un réseau DWDM déjà en service gagne de la souplesse
                là où il n'avait que des multiplexeurs fixes : on introduit la sélectivité au nœud, sans reconstruire
                l'ensemble.
              </li>
              <li>
                <strong>Protection par chemin alternatif.</strong> En redirigeant une longueur d'onde vers un second
                chemin lorsque le principal défaille, le nœud contribue à une reprise rapide — un critère décisif
                pour les exploitants de réseau.
              </li>
            </ul>
          </section>

          <section>
            <h2>Les prérequis matériels et d'exploitation</h2>
            <ul>
              <li>
                <strong>Un châssis compatible.</strong> La carte se monte dans un nœud ROADM OptiX OSN 6800 ou 8800
                (T16 / T32 / T64), et occupe deux emplacements adjacents.
              </li>
              <li>
                <strong>Un plan de longueurs d'onde documenté.</strong> Fréquences attribuées, puissance cible par
                canal, client associé : sans ce document, toute modification devient une opération à risque sur un
                réseau en service.
              </li>
              <li>
                <strong>Une chaîne de supervision.</strong> La carte assure la surveillance des performances optiques
                en service ; encore faut-il centraliser les alarmes et les niveaux pour agir avant qu'un défaut de
                puissance ne devienne une panne de service.
              </li>
              <li>
                <strong>Une cohérence de grille.</strong> La compatibilité grille flexible et l'espacement de 50 GHz
                doivent correspondre au réseau en place, afin que les longueurs d'onde existantes et nouvelles
                cohabitent sans interférence.
              </li>
              <li>
                <strong>Des cordons et connecteurs adaptés.</strong> Les ports optiques sont en LC/PC (AM/DM) ; il
                faut prévoir le raccordement correspondant, et si besoin une atténuation complémentaire.
              </li>
            </ul>
          </section>

          <section>
            <h2>Ce que nous prenons en charge</h2>
            <ul>
              <li>
                <strong>La conception du plan de longueurs d'onde</strong> : attribution des canaux, chevauchement
                avec l'existant, bilan de puissance et marges.
              </li>
              <li>
                <strong>L'intégration au châssis</strong> : vérification de la compatibilité du nœud, choix et
                validation des emplacements, raccordement des ports optiques.
              </li>
              <li>
                <strong>La configuration</strong> du nœud et de la carte : paramètres de la grille, atténuation par
                longueur d'onde, égalisation des niveaux entre canaux.
              </li>
              <li>
                <strong>Les tests de puissance et de bascule</strong> après mise en service : mesure des niveaux par
                canal, vérification du trafic passant, essai de redirection vers un chemin alternatif.
              </li>
              <li>
                <strong>La documentation du réseau</strong> : plan de fréquences à jour, schéma des routes, procédure
                d'exploitation, pour que les prochaines modifications restent maîtrisées.
              </li>
            </ul>
            <p>
              Nous intervenons pour des opérateurs, fournisseurs d'accès Internet, intégrateurs, hébergeurs et
              exploitants de réseaux métropolitains et de backbone, en Afrique de l'Ouest comme à l'international.
            </p>
          </section>

          <section>
            <h2>Les erreurs classiques</h2>
            <ul>
              <li>
                <strong>Un plan de fréquences non documenté.</strong> On ajoute une longueur d'onde sur un canal déjà
                utilisé, et l'incident touche un client qui n'était pas concerné.
              </li>
              <li>
                <strong>La saturation du nœud.</strong> Continuer d'ajouter des canaux sans tenir compte de la
                capacité d'ajout/extraction ni de la puissance disponible finit par dégrader l'ensemble du spectre.
              </li>
              <li>
                <strong>Oublier la marge d'atténuation.</strong> Négliger l'égalisation par longueur d'onde, c'est
                accepter des écarts de niveau qui rendent la liaison fragile dès la première dérive.
              </li>
              <li>
                <strong>Reconfigurer sans tester.</strong> Modifier une route à distance sans mesurer ensuite les
                puissances par canal ni vérifier la bascule, c'est découvrir le problème en production.
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
            <p className="text-slate-800 font-medium mb-2">Un nœud optique à équiper ou un réseau à rendre souple ?</p>
            <p className="text-slate-700">
              Fallcon Tech vous accompagne de la conception du plan de longueurs d'onde aux tests de puissance et de
              bascule. Consultez la{" "}
              <Link to="/boutique/carte-optique-tn12wsmd901">fiche de la carte WSS TN12WSMD901</Link> ou découvrez notre
              offre <Link to="/services/reseau-cablage-informatique-senegal">réseau et câblage informatique</Link>.
              Prix sur devis.
            </p>
          </div>
          <div className="not-prose mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-blue-600"
            >
              Demander une étude
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
              to="/boutique/carte-optique-tn12wsmd901"
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

export default ArticleWssRoadmLongueursOnde;
