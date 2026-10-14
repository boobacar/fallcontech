import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ArticleBoosterOptiqueEmetteur = () => {
  const path = "/article/booster-optique-emetteur";
  const title = "Booster optique : amplifier le signal en sortie d'émetteur";
  const description =
    "Booster optique en bande C : rôle, placement en tête de liaison, gain 23 dB et budget optique. Carte Huawei TN13OBU103 pour réseaux DWDM OptiX OSN 6800 / 8800.";

  const specs = [
    "Carte Optical Booster Unit (OBU) C-band · gain typique 23 dB",
    "Sortie maximale +20 dBm · entrée maximale −3 dBm",
    "Ports optiques LC/PC (IN / OUT / MON)",
    "Compatible OptiX OSN 6800 / 8800 / 9800 · occupe 1 slot",
    "Amplifie le signal C-band multiplexé en sortie d'émetteur, avant la fibre de ligne",
    "Référence Huawei 03030SVP · code carte TN13OBU103",
  ];

  const faq = [
    {
      q: "Quelle différence entre un booster et un amplificateur de ligne ?",
      a: "Le booster travaille au tout début de la liaison, juste après l'émetteur, avant que la lumière n'entre dans la fibre de ligne : il relève le niveau au départ du span. L'amplificateur de ligne, lui, se place en cours de route, pour compenser l'affaiblissement déjà accumulé. Le booster agit sur un signal propre et puissant, l'amplificateur de ligne sur un signal déjà affaibli. Les deux se complètent, mais ne se remplacent pas.",
    },
    {
      q: "Peut-on brancher un booster sur n'importe quelle fibre ?",
      a: "Non. Trois conditions doivent être réunies : le signal doit être dans la bonne bande spectrale, ici la bande C, donc issu d'un multiplexage en longueur d'onde ; le niveau au port IN doit rester sous la limite de la carte ; et les connecteurs doivent correspondre. Un signal déjà trop puissant en entrée abîmerait la carte. Avant tout raccordement, on mesure le niveau réel disponible.",
    },
    {
      q: "À quoi servent les trois ports IN, OUT et MON ?",
      a: "Le port IN reçoit le signal multiplexé venant de l'émetteur, le port OUT renvoie le signal amplifié vers la fibre de ligne, et le port MON prélève une petite fraction de la puissance de sortie pour la surveillance, sans perturber le trafic. Relié à un analyseur de spectre ou à la supervision du nœud, il sert à contrôler le niveau pendant la mise en service.",
    },
    {
      q: "Pourquoi ne pas simplement amplifier plus loin sur la liaison ?",
      a: "Parce qu'amplifier un signal affaibli revient à amplifier aussi le bruit qui s'y est mélangé. Plus on attend, plus le rapport signal sur bruit s'est dégradé. En relevant le niveau dès la sortie de l'émetteur, on injecte une lumière forte et propre dans la fibre de ligne : le signal s'atténue ensuite normalement, mais il part avec une vraie marge.",
    },
    {
      q: "Comment vérifier que mon lien a besoin d'un booster ?",
      a: "On part du budget optique : distance et atténuation de la fibre, pertes des connecteurs et des épissures, marge de sécurité, sensibilité du récepteur en face. Si le total des pertes laisse trop peu de marge à l'arrivée, c'est le départ qui manque de puissance. Nous mesurons le niveau réel en sortie d'émetteur et le confrontons au dimensionnement du lien.",
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
              { label: "Booster optique" },
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
            Sur une liaison en fibre optique, la lumière s'affaiblit : chaque épissure, chaque connecteur et chaque
            mètre de câble lui retire un peu de puissance. Quand le budget optique devient trop court, le signal arrive
            trop faible au bout de la liaison. Le booster optique répond à ce problème, à une condition : le placer au
            bon endroit.
          </p>

          <section>
            <h2>Booster, préamplificateur et amplificateur de ligne : trois rôles distincts</h2>
            <p>
              L'amplification optique regroupe plusieurs fonctions que l'on confond souvent. Le <strong>booster</strong>{" "}
              agit en sortie d'émetteur, juste avant la fibre de ligne : il relève le niveau au tout début de la
              liaison. Le <strong>préamplificateur</strong> fait l'inverse, juste avant le récepteur, en fin de liaison,
              pour rendre un signal faible lisible. L'<strong>amplificateur de ligne</strong>, lui, se place
              en cours de route, entre deux tronçons, pour compenser l'atténuation accumulée.
            </p>
            <p>
              L'image la plus simple est celle d'un signal qui doit partir fort : mieux vaut s'élancer avec de bonnes
              réserves que de tenter de les reconstituer en pleine course. Un booster donne ces réserves dès le départ.
              On ne peut donc pas se contenter d'amplifier plus loin : le bon placement est le cœur de la fonction.
            </p>
          </section>

          <section>
            <h2>Pourquoi le placement en tête de liaison change tout</h2>
            <p>
              Un signal transmis se charge de bruit tout au long de son parcours. À la sortie de l'émetteur, la lumière
              est propre ; après plusieurs dizaines de kilomètres, le signal s'est affaibli tandis que le bruit, lui,
              ne disparaît pas. Le rapport signal sur bruit s'est dégradé. Amplifier à ce moment-là revient à amplifier
              les deux ensemble : on gagne en puissance, mais pas en qualité.
            </p>
            <p>
              En tête de liaison, la logique s'inverse. On amplifie un signal encore propre et on l'injecte avec une
              puissance de sortie élevée. Il s'atténuera ensuite normalement, mais il part avec une
              marge de sécurité confortable, que ce soit sur un réseau métropolitain dense ou sur une liaison longue
              distance entre deux villes. Cette marge permet de tenir sans régénération électrique intermédiaire, avec
              de la réserve pour les épissures et le vieillissement du câble.
            </p>
          </section>

          <section>
            <h2>Gain, puissance de sortie, puissance d'entrée : lire les chiffres</h2>
            <p>
              Trois valeurs résument l'action d'un booster. Le <strong>gain</strong> est le facteur d'amplification :
              un gain typique de 23 dB signifie que le signal ressort environ deux cents fois plus puissant qu'il n'est
              entré. La <strong>puissance de sortie</strong> maximale fixe le plafond délivré vers la fibre de ligne ;
              la <strong>puissance d'entrée</strong> maximale fixe la limite à ne jamais dépasser.
            </p>
            <p>
              Avec un gain typique de 23 dB et une sortie maximale de +20 dBm, la carte s'adresse à des liaisons qui
              réclament un signal plus fort en sortie d'émetteur. La contrepartie est une limite d'entrée
              stricte : au-delà de la valeur indiquée, le signal arrive trop puissant pour l'étage d'amplification.
              Dépasser cette limite ne fait pas « plus fort » : cela sature puis abîme la carte. Un signal excessif en
              entrée se ramène dans la plage avec un atténuateur optique, jamais en forçant le booster.
            </p>
          </section>

          <section>
            <h2>Fiche technique de la carte disponible</h2>
            <p>
              Nous proposons une carte booster optique neuve, jamais déployée, dans son emballage d'origine :
            </p>
            <ul>
              {specs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Concrètement : la carte amplifie un signal C-band déjà multiplexé en sortie d'émetteur, juste avant
              l'injection dans la fibre de ligne. Ses trois ports optiques LC/PC couvrent l'entrée, la sortie et la
              surveillance. Elle se monte dans un emplacement d'un châssis OptiX OSN, et trois unités sont disponibles.
            </p>
          </section>

          <section>
            <h2>Avec quels équipements il se combine</h2>
            <p>Un booster s'insère dans une chaîne cohérente :</p>
            <ul>
              <li>
                <strong>Les multiplexeurs :</strong> en amont, un multiplexeur en longueur d'onde rassemble plusieurs
                canaux en un signal DWDM, en bande C, que le booster amplifie.
              </li>
              <li>
                <strong>Les amplificateurs de ligne :</strong> plus loin, ils compensent l'atténuation des tronçons
                intermédiaires lorsque la liaison est longue.
              </li>
              <li>
                <strong>Les modules optiques :</strong> les interfaces de l'émetteur et du récepteur fixent la bande de
                travail et le niveau attendu.
              </li>
              <li>
                <strong>Les châssis OSN 6800, 8800 et 9800 :</strong> les plateformes de transport qui accueillent la
                carte.
              </li>
              <li>
                <strong>Les atténuateurs et cordons LC/PC :</strong> pour respecter la limite d'entrée et raccorder les
                ports IN, OUT et MON.
              </li>
            </ul>
          </section>

          <section>
            <h2>Ce que nous prenons en charge</h2>
            <ul>
              <li>
                <strong>Calcul du budget optique :</strong> distance, atténuation de la fibre et pertes des connecteurs,
                jusqu'à la marge finale sur le récepteur.
              </li>
              <li>
                <strong>Choix des cartes :</strong> référence, emplacement et compatibilité avec la version logicielle
                du châssis cible.
              </li>
              <li>
                <strong>Test de puissance :</strong> mesure du niveau réel en sortie d'émetteur et contrôle du spectre
                via le port de surveillance.
              </li>
              <li>
                <strong>Mise en service :</strong> raccordement, vérification des niveaux et validation du lien une fois
                la carte en place.
              </li>
              <li>
                <strong>Documentation :</strong> remise des mesures, des niveaux relevés et de la configuration du nœud.
              </li>
            </ul>
            <p>
              Ce travail s'inscrit dans notre offre de{" "}
              <Link to="/services/reseau-cablage-informatique-senegal">
                réseau et câblage informatique au Sénégal
              </Link>
              , et accompagnement d'un opérateur, d'un fournisseur d'accès Internet, d'un
              intégrateur, d'un hébergeur ou d'un grand réseau privé en fibre du Sénégal et d'Afrique de l'Ouest.
            </p>
          </section>

          <section>
            <h2>Les erreurs classiques</h2>
            <ul>
              <li>
                <strong>Brancher le booster dans le mauvais sens :</strong> inverser l'entrée et la sortie dégrade la
                transmission et peut exposer la carte.
              </li>
              <li>
                <strong>Dépasser la puissance d'entrée maximale :</strong> un signal trop fort en entrée sature l'étage
                d'amplification et l'abîme ; la limite se respecte avec un atténuateur.
              </li>
              <li>
                <strong>Oublier le port de surveillance MON :</strong> c'est se priver de la mesure de puissance de
                sortie et piloter à l'aveugle, sans moyen de vérifier le spectre.
              </li>
              <li>
                <strong>Des connecteurs mal nettoyés :</strong> une poussière sur un connecteur LC/PC suffit à créer une
                perte ou une réflexion qui fausse tout le budget optique.
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
            <p className="text-slate-800 font-medium mb-2">Un départ de liaison à renforcer ?</p>
            <p className="text-slate-700">
              Fallcon Tech calcule le budget optique de votre liaison, dimensionne la carte et accompagne la mise en
              service. Consultez la{" "}
              <Link to="/boutique/carte-optique-tn13obu103">
                fiche de la carte booster optique TN13OBU103
              </Link>{" "}
              pour votre projet.
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
              to="/boutique/carte-optique-tn13obu103"
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

export default ArticleBoosterOptiqueEmetteur;
