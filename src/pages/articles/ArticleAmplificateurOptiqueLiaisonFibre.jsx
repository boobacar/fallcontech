import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ArticleAmplificateurOptiqueLiaisonFibre = () => {
  const path = "/article/amplificateur-optique-liaison-fibre";
  const title = "Amplificateur optique : allonger une liaison fibre optique";
  const description =
    "Pourquoi un amplificateur optique EDFA allonge une liaison fibre : bande C, gain ajustable, DWDM, budget optique et choix entre amplificateur et répéteur en ligne.";

  const faq = [
    {
      q: "Quelle distance peut-on atteindre avec un amplificateur optique ?",
      a: "Il n'y a pas de chiffre unique : tout dépend du budget optique du lien — type de fibre, atténuation par kilomètre, épissures, connecteurs, puis sensibilité du récepteur en face. Sur fibre monomode classique, chaque section sans amplification se compte souvent en dizaines de kilomètres, et un amplificateur placé en chemin repousse cette limite. Nous calculons la distance atteignable pour votre liaison précise.",
    },
    {
      q: "Amplificateur optique ou répéteur : que choisir ?",
      a: "Un répéteur électrique convertit la lumière en signal électrique, régénère les données, puis reconvertit en lumière : chaque point est un équipement actif à alimenter et à superviser. Un amplificateur optique amplifie la lumière directement, sans conversion ni retransmission de trames. Sur une liaison longue distance ou un backbone, il simplifie le chemin et allonge la portée à moindre coût d'exploitation. Le choix se tranche à l'étude.",
    },
    {
      q: "Où placer un amplificateur optique dans une liaison ?",
      a: "Trois positions reviennent : en tête de liaison, pour donner de la puissance dès le départ ; en milieu de parcours, entre deux sections de fibre, pour compenser l'atténuation avant qu'elle ne devienne critique ; après un multiplexeur, pour remettre à niveau les longueurs d'onde qui viennent d'être réunies. Le bon emplacement se déduit du calcul du budget optique, pas d'une règle fixe.",
    },
    {
      q: "Un amplificateur optique augmente-t-il le débit de la liaison ?",
      a: "Non. Il ne change ni le débit ni la capacité : il relance la puissance optique et la garde au-dessus du seuil de bruit sur une distance plus longue. La capacité dépend des équipements d'émission et de réception et du nombre de longueurs d'onde transportées. L'amplificateur sert à porter ces canaux plus loin, pas à en augmenter le nombre par lui-même.",
    },
    {
      q: "Comment savoir si ma liaison a besoin d'un amplificateur ?",
      a: "On mesure et on calcule avant d'acheter. Le budget optique additionne l'atténuation de la fibre sur la distance, les pertes des connecteurs et des épissures, puis compare le total à la puissance d'émission et à la sensibilité du récepteur. Si la marge restante devient trop faible, l'amplification devient nécessaire. Transmettez-nous la distance, le type de fibre et les équipements en place : nous calculons.",
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
              { label: "Amplificateur optique" },
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
            Une <strong>liaison optique</strong> ne s'interrompt pas au bout de quelques
            kilomètres par manque de technologie : elle s'interrompt parce que la lumière
            faiblit. Plus le signal parcourt de fibre, plus il s'atténue, et passé un certain
            seuil le récepteur en face ne distingue plus les bits du bruit. La méthode
            classique consiste à installer un <strong>répéteur</strong> tous les quarante à
            quatre-vingts kilomètres : convertir la lumière, régénérer, reconvertir. Cela fonctionne, mais chaque point devient un équipement actif à alimenter et à superviser. Un <strong>amplificateur optique</strong>, notamment un
            <strong> EDFA</strong> en bande C, apporte une autre réponse : amplifier la lumière
            elle-même, sur place.
          </p>

          <section>
            <h2>Le problème concret : la lumière s'affaiblit avec la distance</h2>
            <p>
              La fibre optique atténue la lumière de façon régulière. Sur une fibre monomode
              courante, chaque kilomètre coûte une fraction de <strong>puissance optique</strong>,
              à laquelle s'ajoutent les pertes des connecteurs et des épissures. Sur un{" "}
              <strong>réseau métropolitain</strong>, ces pertes restent gérables ; sur un{" "}
              <strong>backbone</strong> entre deux villes ou deux sites industriels éloignés,
              elles finissent par dépasser ce que le récepteur peut tolérer.
            </p>
            <p>
              La conséquence est connue des <strong>opérateurs</strong> et des{" "}
              <strong>fournisseurs d'accès Internet</strong> : pour aller plus loin, il faut
              relancer le signal. Un <strong>répéteur</strong> électrique tous les quarante à
              quatre-vingts kilomètres alourdit le projet : chaque site impose un local, une
              alimentation, une supervision et de la maintenance, donc autant de causes de
              panne supplémentaires sur une liaison qui n'avait jusque-là qu'une fibre à gérer.
            </p>
          </section>

          <section>
            <h2>Ce qu'un amplificateur EDFA fait — et ne fait pas</h2>
            <p>
              L'<strong>amplification optique</strong> agit sur la lumière sans la convertir.
              Le signal entre par un port d'entrée, traverse un milieu dopé qui lui restitue de
              l'énergie, et ressort renforcé par le port de sortie. Aucune conversion
              électrique, aucune lecture du contenu : la lumière ressort plus puissante.
            </p>
            <p>
              Ce point mérite d'être dit nettement : on le confond souvent avec un répéteur. L'<strong>EDFA</strong> ne corrige pas une erreur, ne répare pas
              une trame abîmée et ne retransmet rien. Il ne fait qu'une chose : rendre à la
              lumière de la puissance. Si le signal arrive déjà dégradé, l'amplifier n'apporte
              rien. C'est pourquoi la propreté des connecteurs et le calcul du budget optique
              passent avant l'achat d'une carte.
            </p>
          </section>

          <section>
            <h2>Pourquoi la bande C et le gain ajustable comptent en exploitation</h2>
            <p>
              Un amplificateur optique travaille sur une plage de longueurs d'onde. La{" "}
              <strong>bande C</strong>, autour de 1529 à 1561 nanomètres, est la plage de
              référence des systèmes de transport actuels. C'est là que le{" "}
              <strong>DWDM</strong>, le <strong>multiplexage en longueur d'onde</strong>,
              répartit des dizaines de canaux distincts sur une même fibre. Un amplificateur en
              bande C amplifie donc plusieurs longueurs d'onde d'un seul coup, sans
              démultiplexer le signal.
            </p>
            <p>
              Le <strong>gain optique</strong> ajustable répond à un besoin réel
              d'exploitation. Selon la distance entre deux nœuds, le nombre de canaux actifs et
              le niveau reçu, la puissance à restituer change. Avec un gain réglable, on égalise les canaux : quand on ajoute
              ou retire une longueur d'onde en service, le verrouillage de gain et le contrôle
              des transitoires évitent que les canaux voisins ne décrochent.
            </p>
          </section>

          <section>
            <h2>Fiche technique de l'équipement disponible</h2>
            <p>
              Nous disposons d'une carte amplificateur optique Huawei, neuve, jamais déployée :
            </p>
            <ul>
              <li>Huawei TN13OAU (OAU1) — carte amplificateur optique, neuf, jamais déployé</li>
              <li>Amplificateur optique C-band (EDFA) · 1529–1561 nm</li>
              <li>Gain ajustable, verrouillage de gain, contrôle des transitoires</li>
              <li>Ports optiques LC/UPC (IN / OUT / MON)</li>
              <li>Compatible OptiX OSN 6800 / 8800 / 9800 · occupe 1 slot</li>
              <li>Allonge une liaison sans régénération électrique (transmission longue distance)</li>
              <li>Code carte Huawei TN13OAU / OAU1 — référence confirmée au devis avec le numéro de série</li>
            </ul>
            <p>
              Comme tous nos équipements, le tarif est établi{" "}
              <strong>sur devis</strong>, après vérification de la compatibilité avec votre
              châssis et de la disponibilité.
            </p>
          </section>

          <section>
            <h2>Où il se place dans un schéma</h2>
            <p>
              Un amplificateur optique ne se pose pas au hasard : sa position découle du budget
              optique. Trois emplacements reviennent.
            </p>
            <ul>
              <li>
                <strong>En tête de liaison</strong>, juste après l'émetteur : il donne de la
                puissance au signal dès le départ, avant que la fibre n'en consomme.
              </li>
              <li>
                <strong>Entre deux sections de fibre</strong>, en milieu de parcours : il
                compense l'atténuation accumulée pour que le signal reste au-dessus du seuil
                de bruit jusqu'au nœud suivant, là où il remplace une régénération
                intermédiaire.
              </li>
              <li>
                <strong>Avant et après un multiplexeur</strong> : à l'entrée, on amplifie les
                canaux qui viennent d'être réunis ; en sortie, côté réception, un
                préamplificateur remet le signal à niveau avant de le démultiplexer.
              </li>
            </ul>
          </section>

          <section>
            <h2>Avec quels équipements il se combine</h2>
            <p>
              Un amplificateur seul ne fait pas un réseau de transport. Il s'intègre à un
              ensemble : des <strong>multiplexeurs</strong> qui réunissent ou séparent les
              longueurs d'onde, un <strong>booster</strong> en émission, un
              <strong> préamplificateur</strong> en réception, et un{" "}
              <strong>châssis OptiX OSN</strong> qui héberge les cartes et les alimente. La carte occupe un emplacement et se gère avec le reste du nœud : c'est la cohérence de l'ensemble qui fait tenir la liaison.
            </p>
          </section>

          <section>
            <h2>Ce que nous prenons en charge</h2>
            <p>
              Fallcon Tech accompagne un projet de liaison optique de bout en bout, à Dakar
              comme dans le reste de l'Afrique de l'Ouest :
            </p>
            <ul>
              <li>
                <strong>Étude du budget optique</strong> : puissance d'émission, atténuation de
                la fibre, sensibilité du récepteur et marge disponible.
              </li>
              <li>
                <strong>Calcul des pertes</strong> : connecteurs, épissures et longueur de
                fibre, pour savoir où placer l'amplification.
              </li>
              <li>
                <strong>Choix des cartes</strong> : fonction attendue, compatibilité du châssis
                et emplacement libre.
              </li>
              <li>
                <strong>Test de la liaison</strong> : mesure de la puissance reçue et
                vérification du gain avant mise en service.
              </li>
              <li>
                <strong>Mise en service</strong> : réglage du gain, vérification des canaux et
                continuité du trafic.
              </li>
              <li>
                <strong>Documentation remise</strong> : schéma de la liaison, valeurs mesurées
                et réglages retenus.
              </li>
            </ul>
          </section>

          <section>
            <h2>Les erreurs classiques à éviter</h2>
            <ul>
              <li>
                <strong>Saturer l'amplificateur</strong> en entrant une puissance trop élevée,
                ce qui déforme les canaux au lieu de les renforcer.
              </li>
              <li>
                <strong>Négliger le calcul des pertes</strong>, en croyant que la distance
                seule détermine les besoins alors que les connecteurs et les épissures pèsent
                lourd.
              </li>
              <li>
                <strong>Nettoyer mal les connecteurs</strong> : une poussière sur une face
                LC/UPC suffit à dégrader le signal et à faire croire à une panne de carte.
              </li>
              <li>
                <strong>Oublier la puissance maximale d'entrée</strong> de l'amplificateur,
                surtout quand plusieurs canaux s'additionnent après un multiplexeur.
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
              Vous reliez deux sites distants en fibre optique ?
            </p>
            <p className="text-slate-700">
              Fallcon Tech étudie votre budget optique, calcule les pertes, choisit les cartes
              et vous remet la documentation de la liaison. Découvrez l'équipement sur notre
              fiche{" "}
              <Link to="/boutique/carte-optique-tn13oau">
                carte optique Huawei TN13OAU (OAU1)
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
              Demander une étude de liaison
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

export default ArticleAmplificateurOptiqueLiaisonFibre;
