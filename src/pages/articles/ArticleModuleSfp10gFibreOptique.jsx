import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ArticleModuleSfp10gFibreOptique = () => {
  const path = "/article/module-sfp-10g-fibre-optique";
  const title = "Module SFP+ 10G : relier deux équipements en fibre optique";
  const description =
    "Guide pratique du module SFP+ 10G en fibre optique : branchement, choix monomode ou multimode, portée 10 km, connecteurs et nettoyage soigneux des liens 10 Gbit/s.";

  const faq = [
    {
      q: "SFP+ ou SFP : quelle différence ?",
      a: "La forme et le logement sont les mêmes, mais le débit diffère. Un SFP se limite en général au gigabit (1 Gbit/s), alors qu'un SFP+ monte à 10 Gbit/s. Un SFP+ se branche dans un port SFP+ prévu pour ce débit ; le mettre dans un port SFP classique ne suffit pas à obtenir 10 Gbit/s. Avant d'acheter, vérifiez donc que le port de votre switch ou de votre serveur est bien un port SFP+.",
    },
    {
      q: "Comment savoir si le module est compatible avec mon switch ?",
      a: "On croise quatre éléments : le type de port (SFP+ et non SFP), le débit attendu (10 Gbit/s), la portée prévue (ici 10 km) et le type de fibre installée. Sur un équipement Huawei, la référence du module se retrouve dans la liste des modules supportés. Sur un autre constructeur, la compatibilité dépend de ce constructeur : le module peut être reconnu, partiellement reconnu ou refusé. Le plus sûr est de nous indiquer le modèle exact de l'équipement et sa version logicielle avant l'achat.",
    },
    {
      q: "Faut-il de la fibre monomode ou multimode ?",
      a: "Cela dépend de la distance à couvrir et de la fibre déjà posée. Le multimode convient aux courtes distances à l'intérieur d'un bâtiment ou d'un datacenter ; le monomode porte beaucoup plus loin et reste la référence dès qu'on relie deux sites. Ce module étant un module monomode, il s'installe sur une fibre monomode. Le câblage existant impose donc souvent la réponse : on adapte le module à la fibre en place, pas l'inverse.",
    },
    {
      q: "Combien de modules faut-il pour une liaison ?",
      a: "Deux, un à chaque extrémité du lien. Si vous branchez un switch d'étage sur un switch de baie, il faut un module côté baie et un module côté étage. Beaucoup d'équipes prévoient en plus un module de réserve : un module optique reste la pièce la plus susceptible de tomber sur un lien 10 Gbit/s, et l'avoir sous la main évite une coupure prolongée.",
    },
    {
      q: "Peut-on utiliser ce module sur deux équipements de marques différentes ?",
      a: "Techniquement, un module SFP+ 10G monomode 1310 nm communique avec un autre module de mêmes caractéristiques de l'autre côté du lien, quelle que soit la marque des équipements. La réserve porte sur l'équipement hôte : chaque constructeur gère sa propre liste de modules acceptés. On vérifie donc séparément les deux extrémités avant de valider la liaison.",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <>
      <SEO
        path={path}
        title={`${title} | Fallcon Tech`}
        description={description}
        type="article"
        jsonLd={jsonLd}
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
              { label: "Module SFP+ 10G" },
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
            Relier deux équipements à 10 Gbit/s sur une longue distance ne se fait pas avec
            un câble cuivre. C'est le rôle du <strong>module SFP+ 10G</strong> : un petit
            <strong> transceiver</strong> optique qui transforme un port d'équipement en
            <strong> liaison fibre</strong>. C'est la brique la plus recherchée d'une gamme
            optique, et aussi celle sur laquelle on se trompe le plus souvent, faute de
            savoir quoi regarder avant d'acheter. Ce guide reprend la méthode, du
            branchement au choix du bon module selon la distance et le type de fibre.
          </p>

          <section>
            <h2>Un module SFP+, c'est quoi et où ça se branche ?</h2>
            <p>
              Un <strong>module optique</strong> SFP+ se présente comme un petit boîtier
              métallique qu'on enfiche dans une cage prévue à cet effet sur l'équipement.
              À une extrémité, un connecteur électrique se branche dans le
              <strong> switch</strong>, le routeur, le pare-feu ou la carte réseau d'un
              <strong> serveur</strong>. À l'autre extrémité, deux fibres optiques
              arrivent, avec un connecteur <strong>LC duplex</strong> : une fibre pour
              émettre, une pour recevoir.
            </p>
            <p>
              Le module fait la conversion entre le signal électrique de l'équipement et le
              signal lumineux qui circule dans la <strong>fibre optique</strong>. On le
              trouve aussi bien sur un switch de <strong>baie de brassage</strong> que dans
              une <strong>baie de datacenter</strong>, sur un serveur de virtualisation ou
              sur un routeur opérateur. Pour un technicien débutant, la règle est simple :
              partout où un port est étiqueté SFP ou SFP+, un module peut s'y loger, et la
              fibre relie les deux extrémités de la liaison.
            </p>
            <p>
              Un module se vend à l'unité, mais il travaille toujours par paire : un module
              à chaque bout de la fibre. La <strong>liaison fibre</strong> ne fonctionne que
              si les deux extrémités se comprennent, avec des caractéristiques compatibles
              de part et d'autre.
            </p>
          </section>

          <section>
            <h2>Les questions à se poser avant d'acheter un SFP+ 10G</h2>
            <p>
              Avant de commander, on déroule une petite méthode. Cinq points suffisent à
              éviter le module qui ne rentre pas, ou qui rentre mais ne monte pas.
            </p>

            <h3>1. Quel débit ?</h3>
            <p>
              Un port SFP classique plafonne en général au gigabit, alors qu'un port
              <strong> SFP+ 10G</strong> vise <strong>10 Gbit/s</strong>. Vérifiez d'abord
              que le port de votre équipement est bien un port SFP+, et non un port SFP ou
              SFP28. Le bon module doit correspondre au débit que l'équipement et votre
              projet exigent.
            </p>

            <h3>2. Quelle distance ?</h3>
            <p>
              C'est le critère qui décide de tout. En pratique, le <strong>multimode</strong>
              convient aux courtes distances à l'intérieur d'un bâtiment ou d'un centre de
              données — de l'ordre de quelques centaines de mètres selon la qualité de la
              fibre. Le <strong>monomode</strong>, lui, porte sur plusieurs kilomètres et
              souvent bien plus, ce qui en fait le choix par défaut dès qu'on relie deux
              bâtiments ou deux points éloignés. Ces repères sont ceux du marché : la
              portée exacte dépend ensuite du module et de la fibre installée.
            </p>

            <h3>3. Quelle fibre ?</h3>
            <p>
              On ne mélange pas les deux familles. Un module <strong>fibre optique
              monomode</strong> ne fonctionne que sur une fibre monomode ; un module
              multimode, que sur du multimode. Comme le câblage est le plus souvent déjà
              posé, c'est lui qui impose le type de module. On regarde donc le marquage des
              cordons et des tubes avant de choisir.
            </p>

            <h3>4. Quel connecteur ?</h3>
            <p>
              L'usage courant en 10G est le <strong>LC duplex</strong>, avec deux fibres
              dans un même connecteur. Le format du connecteur doit correspondre à celui des
              cordons et des prises installées. Un module avec le bon débit mais le mauvais
              connecteur ne se branchera pas.
            </p>

            <h3>5. Quelle compatibilité avec l'équipement hôte ?</h3>
            <p>
              Chaque constructeur gère sa propre liste de modules acceptés. Un module
              peut fonctionner sur un équipement, être partiellement reconnu sur un autre,
              ou refusé. Le réflexe est donc de noter le modèle exact de l'équipement et sa
              version logicielle, et de vérifier la référence du module avant d'acheter.
              C'est un point sur lequel nous accompagnons systématiquement nos clients.
            </p>
          </section>

          <section>
            <h2>Ce qui distingue le module disponible</h2>
            <p>
              Le module en stock chez Fallcon Tech est un <strong>module optique SFP+
              10G</strong> à <strong>1310 nm</strong>, conçu pour la <strong>fibre
              monomode</strong>. Sa <strong>portée 10 km</strong> en fait un module de type
              LR, le format le plus courant pour relier deux points d'un même site ou deux
              sites proches dans une ville. Le connecteur est un <strong>LC duplex</strong>,
              et le module embarque le <strong>diagnostic numérique (DDM)</strong>.
            </p>
            <p>
              Concrètement, cela en fait le module polyvalent d'un réseau d'entreprise : une
              <strong> interconnexion de bâtiments</strong>, un <strong>uplink 10G</strong>
              entre deux switches ou le raccordement d'un serveur passent sans problème dès
              lors que la distance reste dans les 10 km du lien monomode et que les deux
              extrémités sont compatibles.
            </p>
          </section>

          <section>
            <h2>Le diagnostic numérique (DDM), un atout en exploitation</h2>
            <p>
              Le DDM permet de lire, depuis la supervision de l'équipement, la
              <strong> puissance d'émission</strong>, la <strong>puissance reçue</strong>,
              la température et la tension du module. L'intérêt est pratique : on suit l'état
              d'un lien sans se déplacer. Une puissance reçue qui baisse lentement sur
              plusieurs semaines oriente vers une fibre ou un connecteur encrassé, parfois
              avant que la liaison ne tombe.
            </p>
            <p>
              C'est un vrai gain pour une équipe qui exploite plusieurs liens en
              <strong> datacenter</strong> ou entre sites : on localise une faute
              naissante — un connecteur sale, un cordon fatigué — pendant qu'il reste du
              temps, au lieu de découvrir le problème le jour de la panne. Le DDM aide au
              diagnostic, mais il ne remplace pas la vérification de compatibilité avec
              l'équipement hôte : ce sont deux sujets distincts.
            </p>
          </section>

          <section>
            <h2>Fiche technique de l'équipement disponible</h2>
            <p>
              Le matériel proposé est neuf, jamais utilisé, et disponible en <strong>4
              unités</strong>. Voici ses caractéristiques, telles que fournies par le
              constructeur :
            </p>
            <ul>
              <li>
                <strong>Huawei OSX010N01</strong> — module optique SFP+ 10G, neuf, jamais
                utilisé, 4 unités disponibles
              </li>
              <li>Module optique SFP+ 10G · 1310 nm</li>
              <li>Débit 8,5 – 11,1 Gbit/s avec CDR</li>
              <li>Portée 10 km sur fibre monomode · LC duplex</li>
              <li>Puissance d'émission −6,0 à −1,0 dBm · sensibilité −14,4 dBm</li>
              <li>Diagnostic numérique (DDM) · 0 °C à 70 °C</li>
              <li>Référence Huawei OSX010N01 · P/N 34060613</li>
            </ul>
            <p>
              Comme pour tous nos équipements, le tarif est communiqué
              <strong> sur devis</strong>, après vérification de la disponibilité et de la
              compatibilité avec votre projet.
            </p>
          </section>

          <section>
            <h2>Les cas d'usage concrets</h2>
            <ul>
              <li>
                <strong>Relier un switch de baie à un switch d'étage</strong> : deux
                modules et un cordon optique suffisent pour monter un
                <strong> uplink 10G</strong> entre le cœur du réseau et un étage éloigné,
                sans tirer de cuivre sur toute la distance.
              </li>
              <li>
                <strong>Relier deux bâtiments</strong> : c'est le cas typique du monomode.
                Deux sièges séparés par quelques centaines de mètres ou quelques kilomètres
                se raccordent en 10 Gbit/s par la fibre, avec un module à chaque extrémité.
              </li>
              <li>
                <strong>Brancher un serveur en 10 Gbit/s</strong> : une carte réseau SFP+
                côté serveur, un module, et le serveur rejoint le switch en 10G. Utile pour
                un serveur de fichiers, de virtualisation ou de sauvegarde.
              </li>
              <li>
                <strong>Faire un uplink entre deux switches</strong> : au lieu d'empiler
                des liens cuivre saturés, on relie deux switches en fibre optique et on
                garde de la marge pour la croissance du trafic.
              </li>
            </ul>
          </section>

          <section>
            <h2>Nettoyer les connecteurs : la première cause de liaison qui ne monte pas</h2>
            <p>
              C'est le point que l'on oublie le plus souvent, et pourtant la
              <strong> propreté des connecteurs</strong> explique une grande partie des
              liaisons qui ne montent pas. Une poussière invisible à l'œil nu, un résidu de
              gras du bout des doigts ou une trace sur le ferrul suffisent à atténuer le
              signal, voire à empêcher la liaison de s'établir. Sur une
              <strong> fibre optique monomode</strong>, le cœur de la fibre est minuscule :
              la moindre saleté compte.
            </p>
            <p>
              La méthode est simple et systématique. On nettoie chaque connecteur avant de
              le brancher, avec un nettoyeur adapté — cassette de nettoyage ou stylo —, et
              on souffle sans jamais toucher le ferrul avec les doigts. On protège les
              connecteurs non utilisés par des capuchons, et on ne branche pas un cordon
              posé à même le sol. Après le montage, une lecture DDM confirme que la
              puissance reçue est correcte et que la liaison travaille dans de bonnes
              conditions.
            </p>
            <p>
              Le réflexe vaut pour tout le monde : un lien 10 Gbit/s qui reste plat alors que
              les modules sont bons se dépanne d'abord par le nettoyage, avant de mettre en
              cause le matériel.
            </p>
          </section>

          <section>
            <h2>Ce que nous prenons en charge</h2>
            <p>
              Fallcon Tech accompagne les opérateurs, les intégrateurs, les installateurs et
              les entreprises qui montent ou réparent une <strong>liaison fibre</strong>, à
              Dakar comme dans le reste du <strong>Sénégal</strong> et en Afrique de
              l'Ouest :
            </p>
            <ul>
              <li>
                <strong>Vérification de la compatibilité</strong> avec l'équipement hôte
                (switch, routeur, serveur, carte OSN) avant l'achat.
              </li>
              <li>
                <strong>Choix du module selon la distance</strong> et le type de fibre
                installée, monomode ou multimode.
              </li>
              <li>
                <strong>Mise en service et test de la liaison</strong> : montage, nettoyage
                des connecteurs et contrôle des puissances en DDM.
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
            <p className="text-slate-800 font-medium mb-2">
              Vous montez une liaison 10 Gbit/s à Dakar ou au Sénégal ?
            </p>
            <p className="text-slate-700">
              Fallcon Tech vérifie la compatibilité avec vos équipements, choisit le module
              adapté à votre distance et vous accompagne jusqu'au test de la liaison.
              Retrouvez le matériel sur la fiche
              <Link to="/boutique/module-optique-osx010n01-sfp">
                {" "}
                module optique Huawei OSX010N01
              </Link>
              , puis notre offre{" "}
              <Link to="/services/reseau-cablage-informatique-senegal">
                réseau et câblage informatique au Sénégal
              </Link>
              .
            </p>
          </div>

          <div className="not-prose mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Demander un devis
            </Link>
            <a
              href="https://wa.me/221774837576"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-medium transition-colors hover:bg-muted"
            >
              Parler sur WhatsApp
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleModuleSfp10gFibreOptique;
