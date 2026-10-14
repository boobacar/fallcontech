import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ArticleModuleOptiqueAccordableBandeC = () => {
  const path = "/article/module-optique-accordable-bande-c";
  const title = "Module optique accordable : changer de longueur d'onde à distance";
  const description = "Module optique accordable TXFP bande C : pourquoi un seul module suffit pour tous les canaux d'un réseau DWDM et simplifie la gestion du stock de rechange.";

  // Source unique de vérité : la FAQ visible et le JSON-LD affichent exactement le même contenu.
  const faq = [
    {
      q: "Module accordable ou module fixe : quelle différence en pratique ?",
      a: "Un module fixe n'émet que sur la fréquence prévue en usine : il faut donc une référence différente par canal. Un module accordable se règle sur n'importe quelle position de la grille 50 GHz de la bande C. La différence se voit au magasin : un seul type de pièce de rechange couvre tous vos canaux.",
    },
    {
      q: "Puis-je changer la longueur d'onde d'un canal déjà en service ?",
      a: "Oui : la longueur d'onde se règle depuis la gestion de la carte hôte, sans remplacer le matériel. À condition que la nouvelle fréquence soit libre dans votre plan de fréquences, acceptée par le multiplexeur du site et sans effet sur les canaux voisins. Sur un lien en production, les niveaux se contrôlent avant et après.",
    },
    {
      q: "Un seul module de rechange suffit-il pour tout un réseau ?",
      a: "Un module accordable couvre toutes les longueurs d'onde de la bande C : une seule référence remplace la collection de modules fixes qu'il fallait conserver. En pratique, on garde une ou deux unités d'avance selon le nombre de nœuds et la criticité des liens.",
    },
    {
      q: "La portée de 40 km est-elle garantie sur n'importe quelle fibre ?",
      a: "Elle suppose une fibre monomode en bon état, avec peu d'épissures et des connecteurs propres : c'est le budget optique du lien qui décide. Au-delà, ou sur une liaison très atténuée, il faut ajouter de l'amplification ou une régénération.",
    },
    {
      q: "Comment vérifier que le module est compatible avec notre équipement ?",
      a: "Trois éléments suffisent : la carte de ligne hôte, le plan de fréquences et le budget optique de la liaison. Nous demandons la référence de votre carte et, quand il est disponible, le numéro de série du module, afin de confirmer au devis la référence livrée.",
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
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          },
        ]}
      />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Module optique accordable" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <p className="lead">
            Sur un réseau de transport optique, chaque canal occupe une longueur d'onde précise. Tant que les modules sont fixés sur une seule fréquence, il faut une référence de rechange par canal. Un module accordable supprime la contrainte : la même pièce prend n'importe quelle position de la grille.
          </p>

          <section>
            <h2>Le casse-tête des pièces de rechange sur un réseau DWDM</h2>
            <p>
              Le <strong>multiplexage en longueur d'onde</strong> (DWDM) fait circuler plusieurs canaux sur une même
              fibre : chacun voyage sur sa propre couleur. C'est ainsi que l'on transporte beaucoup de trafic sans poser
              de nouvelles fibres.
            </p>
            <p>
              Un <strong>module optique</strong> à longueur d'onde fixe n'émet que sur la fréquence pour laquelle il a
              été fabriqué. Un réseau de trente ou quarante canaux impose donc autant de références en réserve.
            </p>
            <p>
              Le vrai problème surgit à la panne : si la référence absente du magasin est celle du module qui tombe, il faut la sourcer et l'importer. Le canal client reste coupé pendant ce temps.
            </p>
          </section>

          <section>
            <h2>Ce que change un module accordable dans l'exploitation</h2>
            <p>
              Un module accordable se règle sur la longueur d'onde voulue au lieu d'être figé en usine.
            </p>
            <ul>
              <li>
                <strong>Un seul type de pièce en stock.</strong> Une même référence couvre toute la bande C, au lieu
                d'une référence par canal.
              </li>
              <li>
                <strong>Reconfigurer une liaison sans changer de matériel.</strong> Quand un canal change de position
                dans le plan de fréquences, le module se réajuste au lieu d'être remplacé.
              </li>
              <li>
                <strong>Dépanner plus vite.</strong> Le technicien part avec le module d'avance de sa caisse, sans attendre la bonne référence.
              </li>
              <li>
                <strong>Réduire les références mortes.</strong> Le module reste utile quelle que soit l'évolution du plan de fréquences.
              </li>
            </ul>
          </section>

          <section>
            <h2>Plage d'accord, grille 50 GHz et portée 40 km, en langage clair</h2>
            <p>
              <strong>La plage d'accord</strong> est la fenêtre dans laquelle le module choisit sa couleur. Elle
              s'exprime en nanomètres quand les documents techniques raisonnent en fréquences : plus elle est large,
              plus la pièce remplace de modules fixes.
            </p>
            <p>
              <strong>La grille 50 GHz</strong> est l'espacement entre deux canaux voisins. Le module doit se caler sur
              n'importe laquelle de ces positions : c'est ce qui garantit que deux canaux ne se marchent pas dessus et
              que le multiplexeur du site sépare les couleurs.
            </p>
            <p>
              <strong>La portée</strong> est la distance couverte avec un signal exploitable. Elle dépend de la
              <strong> fibre monomode</strong> et du budget optique (atténuation, épissures, connecteurs) : elle se vérifie liaison par liaison. Le réglage se commande depuis la gestion de la carte hôte, sans déplacement sur site.
            </p>
          </section>

          <section>
            <h2>Fiche technique du module disponible</h2>
            <p>
              Trois unités neuves, jamais utilisées, du module Huawei ODX0480T1 : caractéristiques reprises telles quelles.
            </p>
            <ul>
              <li>
                <strong>Module optique TXFP accordable bande C · 10G</strong> : la nature de la pièce ; TXFP désigne un
                module compact à longueur d'onde réglable, 10G le débit.
              </li>
              <li>
                <strong>Débit 9,95 – 11,3 Gbit/s · grille 50 GHz</strong> : la plage de débit acceptée, du 10 Gigabit
                Ethernet aux conteneurs du transport <strong>OTN</strong>.
              </li>
              <li>
                <strong>Portée 40 km sur fibre monomode · LC duplex</strong> : la distance visée et le connecteur optique à deux voies.
              </li>
              <li>
                <strong>Plage d'accord 1529,16 – 1560,61 nm</strong> : l'étendue de la bande C dans laquelle régler la longueur d'onde.
              </li>
              <li>
                <strong>Puissance d'émission −1 à +2 dBm · sensibilité −16 dBm</strong> : ce que le module injecte dans la fibre et le niveau minimal qu'il sait lire.
              </li>
              <li>
                <strong>S'insère dans les cartes de ligne Huawei OSN 8800 (NS2, ND2, NQ2, NO2)</strong> : les cartes
                hôtes compatibles ; toute autre carte doit être vérifiée.
              </li>
              <li>
                <strong>Référence Huawei ODX0480T1 · P/N 34060568</strong> : la référence et le code pièce
                constructeur, à rappeler pour tout échange.
              </li>
              <li>
                <strong>État : neuf, jamais utilisé · 3 unités disponibles.</strong>
              </li>
            </ul>
            <p>
              Le prix n'est pas affiché : notre politique est le devis.
            </p>
          </section>

          <section>
            <h2>Les cas d'usage concrets</h2>
            <ul>
              <li>
                <strong>Mettre en service un nouveau canal.</strong> Un client de plus se raccorde sur un lien existant : on choisit une longueur d'onde libre et on règle le module.
              </li>
              <li>
                <strong>Remplacer un module défectueux sans attendre une pièce précise.</strong> Le technicien sort le
                module d'avance, en sélectionne la couleur depuis la gestion, et le canal repart.
              </li>
              <li>
                <strong>Migrer un réseau ou revoir son plan de fréquences :</strong> un module accordable suit le
                changement au lieu d'être remplacé.
              </li>
              <li>
                <strong>Constituer un stock de secours (spare) raisonnable :</strong> une ou deux unités remplacent la collection de modules fixes.
              </li>
            </ul>
          </section>

          <section>
            <h2>Ce qu'il faut vérifier avant d'acheter</h2>
            <p>
              <strong>La carte de ligne hôte.</strong> Le module s'insère dans la carte, et c'est la carte qui dialogue
              avec la gestion et applique le réglage. Une référence prévue pour une autre carte peut ne pas être
              exploitable.
            </p>
            <p>
              <strong>Le plan de fréquences existant.</strong> La longueur d'onde visée doit être libre ou prévue par
              votre architecture, compatible avec les multiplexeurs en place et sans empiéter sur un canal voisin.
            </p>
            <p>
              <strong>L'atténuation de la liaison.</strong> Distance, épissures et connecteurs composent le budget
              optique : sur une liaison courte, un atténuateur peut être nécessaire pour rester dans la plage de réception d'en face.
            </p>
            <p>
              C'est pourquoi nous vérifions la référence, et le numéro de série quand il est disponible, avant le devis : deux modules qui se ressemblent peuvent différer sur la carte hôte acceptée. La pièce proposée est ainsi décrite précisément.
            </p>
          </section>

          <section>
            <h2>Ce que nous prenons en charge</h2>
            <ul>
              <li>
                <strong>Lecture du plan de longueurs d'onde</strong> : canaux utilisés, fréquences libres, positions à
                réserver.
              </li>
              <li>
                <strong>Vérification de compatibilité</strong> : carte de ligne hôte, famille d'équipement, débit,
                connecteur, couverture de la couleur visée.
              </li>
              <li>
                <strong>Configuration du canal</strong> : réglage de la longueur d'onde prévue par votre plan de
                fréquences, à la mise en service.
              </li>
              <li>
                <strong>Test de puissance et de qualité</strong> : niveaux en émission et en réception, marge
                disponible, état de la liaison après réglage.
              </li>
              <li>
                <strong>Documentation</strong> : relevé des canaux, des longueurs d'onde et des niveaux mesurés, remis après l'intervention.
              </li>
            </ul>
          </section>

          <section>
            <h2>Les erreurs classiques</h2>
            <ul>
              <li>
                <strong>Acheter un module sans vérifier la carte de ligne.</strong> La pièce arrive, ne s'insère pas ou n'est pas reconnue, et le chantier prend une semaine de retard.
              </li>
              <li>
                <strong>Modifier une longueur d'onde en exploitation sans contrôler l'impact sur les autres
                canaux.</strong> Le réglage peut tomber sur une fréquence occupée ou faire basculer les niveaux chez les voisins.
              </li>
              <li>
                <strong>Négliger le nettoyage des connecteurs.</strong> Une poussière sur un connecteur LC suffit à faire perdre plusieurs décibels.
              </li>
              <li>
                <strong>Ne pas documenter les canaux utilisés.</strong> Sans relevé des longueurs d'onde en service, la
                prochaine intervention devient une enquête.
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
            <p className="text-slate-800 font-medium mb-2">Un module à remplacer ou un canal à mettre en service ?</p>
            <p className="text-slate-700">
              Fallcon Tech accompagne les opérateurs, fournisseurs d'accès Internet, intégrateurs, hébergeurs et
              directions des systèmes d'information qui relient leurs sites en fibre, à Dakar et en Afrique de l'Ouest. Consultez la{" "}
              <Link to="/boutique/module-optique-odx0480t1-txfp">fiche du module ODX0480T1</Link> ou découvrez notre
              offre <Link to="/services/reseau-cablage-informatique-senegal">réseau et câblage informatique</Link>. Prix
              sur devis.
            </p>
          </div>
          <div className="not-prose mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90"
            >
              Demander un devis
            </Link>
            <a
              href="https://wa.me/221774837576"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-medium hover:bg-card"
            >
              Parler sur WhatsApp
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleModuleOptiqueAccordableBandeC;
