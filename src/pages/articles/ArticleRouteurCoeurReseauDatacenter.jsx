import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ArticleRouteurCoeurReseauDatacenter = () => {
  const path = "/article/routeur-coeur-reseau-datacenter";
  const title = "Routeur cœur de réseau : jusqu'à 7,2 Tbit/s pour un datacenter";
  const description = "Routeur cœur de réseau pour datacenter et grands opérateurs : capacité 7,2 Tbit/s, 20 ports 10GbE, MACsec, redondance 1:1 et haute disponibilité du service.";
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
            mainEntity: [
              {
                "@type": "Question",
                name: "Un routeur cœur de réseau est-il nécessaire pour une entreprise ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Il devient nécessaire dès que plusieurs sites, salles serveurs ou un datacenter doivent échanger un très gros volume de trafic avec une exigence de continuité. Une entreprise à site unique, au trafic modéré, s'en passe : un routeur d'agrégation suffit. Le critère est le volume à transporter et le coût d'une interruption, pas la taille de l'entreprise.",
                },
              },
              {
                "@type": "Question",
                name: "Que faut-il prévoir en plus du châssis ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Les cartes d'interface et les optiques adaptées à vos distances, les licences Huawei (capacité 10GE, MACsec, transport SRv6) attachées au numéro de série, l'alimentation et sa protection, le refroidissement du local, la configuration, les tests de bascule et la supervision. Le châssis seul ne transporte aucun trafic : c'est l'ensemble configuré et licencié qui fait le service.",
                },
              },
              {
                "@type": "Question",
                name: "Quelle est la différence entre un cœur de réseau et un routeur d'agrégation ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le routeur d'agrégation collecte le trafic de proximité et le remonte : moins d'interfaces, moins d'emplacements de cartes, redondance souvent partielle. Le cœur de réseau relie les grands nœuds entre eux : capacité très élevée, châssis à nombreux emplacements et redondance complète sur l'alimentation, le contrôle et la commutation. L'un rassemble, l'autre transporte.",
                },
              },
              {
                "@type": "Question",
                name: "Le MACsec ralentit-il le trafic ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Non. Le MACsec chiffre et contrôle l'intégrité des liaisons entre équipements directement dans le matériel, au débit de la ligne : pas de latence perceptible, aucun effet sur le débit utile des ports 10GbE. Cette protection sécurise la liaison, pas le trafic utilisateur de bout en bout.",
                },
              },
              {
                "@type": "Question",
                name: "Que se passe-t-il si une carte ou une alimentation tombe en panne ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Avec une redondance 1:1, la bascule est automatique : l'élément de secours prend le relais sans intervention et sans coupure de service. Le trafic continue de circuler et vous remplacez la pièce défectueuse sans interrompre l'exploitation, donc en heures ouvrées.",
                },
              },
            ],
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
              { label: "Routeur cœur de réseau" },
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
            Faire circuler un très gros volume de trafic entre plusieurs sites,
            plusieurs salles serveurs ou un datacenter ne s'improvise pas. Opérateurs,
            hébergeurs, intégrateurs, banques, mines et grands groupes se heurtent au
            même mur : le trafic augmente, les liens se multiplient, et la moindre
            interruption se voit immédiatement. C'est là qu'intervient le{" "}
            <strong>routeur cœur de réseau</strong>.
          </p>

          <h2>Le cœur de réseau, et en quoi il diffère d'un routeur d'agrégation</h2>
          <p>
            Le <strong>routeur d'agrégation</strong> collecte le trafic de proximité —
            liens d'accès, sites secondaires — et le remonte vers le reste du réseau.
            Le <strong>cœur de réseau</strong>, lui, occupe le niveau le plus élevé :
            il relie entre eux les grands nœuds, points de présence, salles serveurs
            et datacenters. Sa mission n'est pas de rassembler le trafic, mais de le
            transporter, en très grande quantité et sans interruption.
          </p>
          <ul>
            <li>
              <strong>Le débit.</strong> Un cœur de réseau affiche une capacité en
              térabits par seconde, contre quelques centaines de gigabits ou moins
              pour un équipement d'agrégation.
            </li>
            <li>
              <strong>Le nombre de cartes.</strong> Là où l'agrégation se contente de
              quelques emplacements, un châssis de cœur en compte une dizaine et plus,
              complétés au rythme de la croissance.
            </li>
            <li>
              <strong>La redondance de bout en bout.</strong> Sur un cœur de réseau,
              le contrôle, la commutation et l'alimentation sont doublés : un
              composant qui tombe ne doit pas faire tomber le service.
            </li>
          </ul>

          <h2>Trois raisons d'investir dans ce niveau d'équipement</h2>
          <ol>
            <li>
              <strong>La croissance du trafic.</strong> Accès mobiles, services en
              ligne, échanges entre sites, sauvegardes centralisées, vidéo : la
              consommation double et redouble, jusqu'à saturer l'équipement
              d'agrégation.
            </li>
            <li>
              <strong>L'exigence de continuité de service.</strong> Une banque qui
              coupe ses transactions, un hébergeur qui rend ses serveurs
              inaccessibles, une mine dont les échanges d'exploitation s'arrêtent :
              l'interruption coûte en exploitation, en réputation et parfois en
              sécurité.
            </li>
            <li>
              <strong>La sécurité des liaisons entre sites.</strong> Quand le trafic
              traverse une fibre louée, un faisceau radio ou un opérateur tiers, il
              peut être intercepté. Le chiffrement des liaisons entre équipements
              répond directement à ce risque.
            </li>
          </ol>

          <h2>Ce que le MACsec change concrètement</h2>
          <p>
            Le <strong>MACsec</strong> est souvent mal compris. On croit qu'il chiffre
            le trafic pour l'utilisateur final, de bout en bout. Son rôle est autre :
            il protège <strong>la liaison entre deux équipements</strong>. Il chiffre les échanges sur chaque segment et
            vérifie que rien n'a été modifié en chemin.
          </p>
          <p>
            Imaginez deux sites reliés par une fibre. Si quelqu'un branche un
            équipement d'écoute, sans MACsec il lit tout ce qui passe ; avec MACsec,
            il ne reçoit que du contenu illisible. Un paquet altéré est détecté et
            rejeté. La protection s'applique segment par segment, exactement là où le
            trafic est exposé. Ce chiffrement se fait dans le matériel, au débit de la
            ligne : aucun effet sur le débit utile des liens 10GbE. C'est la
            protection la plus directe pour des <strong>liaisons entre sites</strong>,
            invisible pour les applications.
          </p>

          <h2>Fiche technique de l'équipement disponible</h2>
          <p>
            Nous disposons d'une unité neuve de Huawei NetEngine 8000 M14, routeur de
            cœur de réseau et de bordure de datacenter : neuf, jamais mis en service,
            emballage d'origine, garantie atelier.
          </p>
          <ul>
            <li>
              <strong>Châssis 5U · 14 emplacements · capacité jusqu'à 7,2 Tbit/s / 1117 Mpps selon configuration.</strong>{" "}
              Le format 5U tient dans une baie standard ; les 14 emplacements laissent
              de la marge pour ajouter des cartes.
            </li>
            <li>
              <strong>2× cartes IPU-1T2-A (redondance 1:1 · commutation système 2,4 Tbit/s).</strong>{" "}
              Les deux cartes de contrôle et de commutation se suppléent : si l'une
              s'arrête, l'autre prend le relais.
            </li>
            <li>
              <strong>2× PIC CR5D00LAXF91 : 10× 10GE/GE SFP+ chacune, soit 20 ports 10GbE SFP+ (MACsec).</strong>{" "}
              Vingt ports 10GbE exploitables immédiatement, compatibles avec le
              chiffrement des liaisons.
            </li>
            <li>
              <strong>3× optiques SFP+ 10G LR incluses (1310 nm, monomode, 10 km, connecteur LC).</strong>{" "}
              Trois liaisons optiques monomodes jusqu'à 10 km sont fournies.
            </li>
            <li>
              <strong>2× alimentation AC redondante · ventilation intégrée.</strong>{" "}
              Les deux alimentations se suppléent et la ventilation est intégrée au
              châssis.
            </li>
            <li>
              <strong>Kit de mise à la terre et accessoires livrés.</strong>{" "}
              L'équipement arrive complet et prêt à être monté en baie.
            </li>
            <li>
              <strong>Licences Huawei (RTU 10GE, MACsec, SRv6) attachées au numéro de série et chiffrées au devis.</strong>{" "}
              Les fonctions logicielles sont liées au châssis ; nous chiffrons au
              devis celles dont votre réseau a réellement besoin.
            </li>
          </ul>
          <p>
            Conformément à notre politique, les prix ne sont pas affichés : chaque
            configuration est établie sur devis, et les licences sont chiffrées
            séparément.
          </p>

          <h2>Les cas d'usage</h2>
          <ul>
            <li>
              <strong>Bordure de datacenter :</strong> le routeur reçoit les liens des
              opérateurs et distribue le trafic vers les salles internes. Point
              névralgique, il lui faut capacité et redondance.
            </li>
            <li>
              <strong>Liaison entre deux salles serveurs :</strong> deux sites se
              comportent comme une seule infrastructure, avec des liens 10GbE chiffrés
              entre eux.
            </li>
            <li>
              <strong>Collecte de gros sites :</strong> usine, agence, entrepôt ou
              centre minier remontent leur trafic vers un point central sans
              saturation.
            </li>
            <li>
              <strong>Remplacement d'un équipement en fin de vie :</strong> un routeur
              limité en capacité ou en fonctions est remplacé par un châssis qui
              reprend la charge.
            </li>
          </ul>

          <h2>Ce que la redondance 1:1 change en exploitation</h2>
          <p>
            La redondance <strong>1:1</strong> n'est pas un détail : elle change le
            quotidien de l'exploitation. Quand un élément actif tombe en panne,
            l'élément de secours prend le relais <strong>automatiquement</strong>,
            sans intervention manuelle et sans coupure de service. Le trafic continue
            de circuler pendant la panne.
          </p>
          <p>
            La conséquence est directe : la <strong>maintenance sans coupure</strong>{" "}
            devient possible. Vous remplacez une carte ou intervenez sur une
            alimentation en plein jour, sans fenêtre nocturne ni interruption annoncée.
          </p>

          <h2>Ce que nous prenons en charge</h2>
          <p>
            Livrer un châssis ne fait pas un cœur de réseau qui fonctionne. Nous
            accompagnons le projet de bout en bout :
          </p>
          <ul>
            <li>
              <strong>Étude de la topologie :</strong> vos sites, vos liens et vos
              volumes de trafic déterminent la configuration adaptée.
            </li>
            <li>
              <strong>Plan de migration sans interruption :</strong> le passage vers
              le nouvel équipement est préparé pour limiter toute coupure.
            </li>
            <li>
              <strong>Configuration :</strong> adressage, routage, transport, liaisons
              chiffrées, selon votre réseau.
            </li>
            <li>
              <strong>Tests de bascule :</strong> nous provoquons volontairement des
              pannes pour vérifier que la redondance fonctionne.
            </li>
            <li>
              <strong>Supervision :</strong> les indicateurs du routeur remontent dans
              votre système d'exploitation.
            </li>
            <li>
              <strong>Documentation :</strong> configuration et procédures sont
              documentées et remises à votre équipe.
            </li>
          </ul>

          <h2>Les erreurs classiques</h2>
          <ul>
            <li>
              <strong>Acheter la capacité sans les licences.</strong> Un châssis neuf
              n'active pas toutes ses fonctions : sans les licences correspondantes,
              certains débits et certaines protections ne s'activent pas.
            </li>
            <li>
              <strong>Négliger le refroidissement et l'électricité.</strong> Un cœur
              de réseau chauffe et consomme : un local mal ventilé ou une alimentation
              mal protégée fait tomber le matériel le plus fiable.
            </li>
            <li>
              <strong>Migrer sans fenêtre de test.</strong> Basculer en production
              sans essai fait découvrir les problèmes au pire moment.
            </li>
            <li>
              <strong>Oublier la sauvegarde des configurations.</strong> Une
              configuration non sauvegardée demande des heures de reconstruction : la
              copie doit exister avant la mise en service.
            </li>
          </ul>

          <h2>Questions fréquentes</h2>
          <div className="not-prose grid gap-4">
            <div className="bg-card border border-border rounded-xl p-5">
              <h3>Un routeur cœur de réseau est-il nécessaire pour une entreprise ?</h3>
              <p>
                Il devient nécessaire dès que plusieurs sites, salles serveurs ou un
                datacenter doivent échanger un très gros volume de trafic avec une
                exigence de continuité. Une entreprise à site unique, au trafic
                modéré, s'en passe : un routeur d'agrégation suffit. Le critère est le
                volume à transporter et le coût d'une interruption, pas la taille de
                l'entreprise.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3>Que faut-il prévoir en plus du châssis ?</h3>
              <p>
                Les cartes d'interface et les optiques adaptées à vos distances, les
                licences Huawei (capacité 10GE, MACsec, transport SRv6) attachées au
                numéro de série, l'alimentation et sa protection, le refroidissement
                du local, la configuration, les tests de bascule et la supervision.
                Le châssis seul ne transporte aucun trafic : c'est l'ensemble
                configuré et licencié qui fait le service.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3>Quelle est la différence entre un cœur de réseau et un routeur d'agrégation ?</h3>
              <p>
                Le routeur d'agrégation collecte le trafic de proximité et le remonte :
                moins d'interfaces, moins d'emplacements de cartes, redondance souvent
                partielle. Le cœur de réseau relie les grands nœuds entre eux :
                capacité très élevée, châssis à nombreux emplacements et redondance
                complète sur l'alimentation, le contrôle et la commutation. L'un
                rassemble, l'autre transporte.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3>Le MACsec ralentit-il le trafic ?</h3>
              <p>
                Non. Le MACsec chiffre et contrôle l'intégrité des liaisons entre
                équipements directement dans le matériel, au débit de la ligne : pas
                de latence perceptible, aucun effet sur le débit utile des ports
                10GbE. Cette protection sécurise la liaison, pas le trafic utilisateur
                de bout en bout.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3>Que se passe-t-il si une carte ou une alimentation tombe en panne ?</h3>
              <p>
                Avec une redondance 1:1, la bascule est automatique : l'élément de
                secours prend le relais sans intervention et sans coupure de service.
                Le trafic continue de circuler et vous remplacez la pièce défectueuse
                sans interrompre l'exploitation, donc en heures ouvrées.
              </p>
            </div>
          </div>

          <div className="not-prose mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
            <p className="text-slate-800 font-medium mb-2">
              Un projet de cœur de réseau pour votre datacenter ?
            </p>
            <p className="text-slate-700">
              Fallcon Tech accompagne opérateurs, hébergeurs, intégrateurs, banques,
              mines et grands groupes en Afrique de l'Ouest : étude de la topologie,
              plan de migration sans interruption, configuration, tests de bascule,
              supervision et documentation. Découvrez la fiche de notre routeur cœur
              de réseau{" "}
              <Link to="/boutique/routeur-netengine-8000-m14">
                Huawei NetEngine 8000 M14
              </Link>{" "}
              ou notre offre{" "}
              <Link to="/services/infrastructure-cybersecurite-senegal">
                infrastructure et cybersécurité
              </Link>
              .
            </p>
          </div>
          <div className="not-prose mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90"
            >
              Demander un devis
            </Link>
            <a
              href="https://wa.me/221774837576"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-medium hover:bg-muted"
            >
              Parler sur WhatsApp
            </a>
            <Link
              to="/boutique/routeur-netengine-8000-m14"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-medium hover:bg-muted"
            >
              Voir la fiche produit
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleRouteurCoeurReseauDatacenter;
