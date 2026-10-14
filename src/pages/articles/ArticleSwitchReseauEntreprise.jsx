import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ArticleSwitchReseauEntreprise = () => {
  const path = "/article/switch-reseau-entreprise";
  const title = "Switch réseau d'entreprise : VLAN, débit et redondance";
  const description =
    "Pourquoi un switch réseau administrable structure une entreprise : VLAN, segmentation des flux, débit, uplinks 10G, redondance d'alimentation et empilement.";

  const faq = [
    {
      q: "Quelle différence entre un switch et un routeur ?",
      a: "Un switch relie les équipements d'un même réseau local et dirige le trafic entre eux. Un routeur fait communiquer votre réseau avec l'extérieur, par exemple Internet ou un autre site. Dans une entreprise, les deux travaillent ensemble : le routeur ou le pare-feu gère la sortie, le switch administrable organise l'intérieur.",
    },
    {
      q: "Ai-je vraiment besoin de VLAN dans une petite entreprise ?",
      a: "Oui, dès qu'il y a des postes invités, des caméras ou de la caisse. Un VLAN invité empêche un visiteur de voir vos données, et un VLAN séparé pour les caméras et la téléphonie évite qu'ils saturent le trafic des postes. Même sur une petite structure, la séparation des flux limite les risques et simplifie le dépannage.",
    },
    {
      q: "Faut-il de la fibre et un uplink 10G si le réseau est petit ?",
      a: "Ce n'est pas obligatoire au départ, mais c'est une bonne réserve de croissance. Un uplink 10G sur fibre évite le point de saturation le jour où vous reliez un serveur, un stockage ou un second bâtiment. Le câblage réseau et la baie de brassage sont pensés dès le départ pour accueillir cette évolution sans tout refaire.",
    },
    {
      q: "PoE est-il nécessaire pour les caméras et les points d'accès ?",
      a: "PoE est utile quand vous ne voulez pas tirer une alimentation électrique vers chaque caméra IP ou point d'accès. Selon le site, on prévoit soit un switch PoE, soit des injecteurs sur les liens concernés. Cette décision se prend pendant l'étude, en fonction des distances et du nombre d'équipements.",
    },
    {
      q: "Combien coûte l'installation d'un switch administrable ?",
      a: "Chez Fallcon Tech, le prix est établi sur devis après étude du site. Le montant dépend du nombre de prises, du câblage à reprendre, du nombre de VLAN et des équipements associés. Contactez-nous avec un plan de vos locaux et la liste de vos besoins pour recevoir une proposition adaptée.",
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
              { label: "Switch réseau" },
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
            Un réseau d'entreprise qui grandit se heurte au même obstacle :
            l'empilement de boîtiers grand public ajoutés au fil des besoins. Un
            <strong> switch réseau administrable</strong> change la donne : au lieu de
            simplement faire passer les données, il les organise, les sépare et les
            sécurise. Voici comment il structure un réseau d'entreprise.
          </p>

          <section>
            <h2>Un switch, à quoi ça sert exactement ?</h2>
            <p>
              Un <strong>switch réseau</strong> relie vos équipements à l'intérieur d'un
              même réseau local. Il transmet les données d'un poste uniquement à la machine
              concernée, en s'appuyant sur l'adresse matérielle de chaque appareil. Le
              trafic est dirigé vers son destinataire, pas diffusé à tout le monde.
            </p>
            <p>
              Un <strong>switch non administrable</strong> assure ce travail de base sans
              configuration : on branche, ça fonctionne. La difficulté apparaît dès que le
              réseau se complexifie. Tout se retrouve sur un réseau plat, sans cloisonnement
              ni visibilité : n'importe quelle prise libre donne accès à l'ensemble du
              réseau, et le moindre incident devient une chasse au trésor.
            </p>
            <p>
              Un <strong>switch administrable</strong> corrige ces limites : il se
              configure, se surveille et se cloisonne. C'est la pièce maîtresse d'un
              <strong> réseau d'entreprise</strong>, celle qui accueille le
              <strong> Wi-Fi professionnel</strong>, les <strong>caméras IP</strong>, la
              <strong> téléphonie IP</strong> et les <strong>points d'accès</strong> sans
              que tout se marche dessus.
            </p>
          </section>

          <section>
            <h2>Les quatre apports concrets d'un switch administrable</h2>

            <h3>1. Le VLAN : séparer les flux</h3>
            <p>
              Un <strong>VLAN</strong> est un réseau logique distinct qui vit sur le même
              matériel physique. On crée par exemple un VLAN pour les postes de travail, un
              pour les invités, un pour les caméras IP, un pour la téléphonie et un pour les
              serveurs. Cette <strong>segmentation réseau</strong> isole chaque flux : un
              incident dans une zone ne se propage pas mécaniquement aux autres.
            </p>

            <h3>2. Le débit et les uplinks 10G</h3>
            <p>
              Les postes de travail se contentent du gigabit, mais le cœur du réseau se
              sature vite. Un serveur de fichiers, un stockage partagé ou la sortie vers la
              <strong> fibre</strong> peuvent dépasser ce que le gigabit autorise. Un
              <strong> uplink 10G</strong> sur fibre, en SFP+, évite ce goulot d'étranglement
              et garde des marges pour la suite.
            </p>

            <h3>3. La redondance et les boucles maîtrisées</h3>
            <p>
              Un switch entreprise gère la <strong>redondance</strong>. Une alimentation
              double (1+1) permet de continuer à fonctionner si un module tombe. Côté
              câblage, des protocoles comme ERPS ou SEP prévoient des liens de secours sans
              créer de boucle qui paralyserait le réseau : la coupure d'un câble ne fait pas
              tomber l'entreprise.
            </p>

            <h3>4. L'empilement : plusieurs switches, un seul réseau</h3>
            <p>
              Quand un boîtier ne suffit plus, l'<strong>empilement</strong> (iStack) réunit
              plusieurs switches en un ensemble logique unique. Vous administrez plusieurs
              unités comme une seule, avec une configuration commune et une continuité de
              service. C'est la réponse propre à une entreprise qui s'étend.
            </p>
          </section>

          <section>
            <h2>Pourquoi la segmentation protège concrètement vos données</h2>
            <p>
              L'argument n'est pas théorique. Un visiteur qui se connecte au Wi-Fi invité
              partage, sur un réseau plat, le même espace que vos postes, vos caméras et
              votre serveur de caisse. Avec un <strong>VLAN invité</strong> isolé, il accède
              à Internet, mais pas à votre réseau interne : un poste invité ne peut pas
              atteindre le serveur de la caisse.
            </p>
            <p>
              Le raisonnement vaut pour le reste. Caméras IP et téléphonie IP dans leurs
              propres VLAN, un pic de trafic vidéo ne sature pas les postes, et un
              équipement compromis ne sert pas de point d'entrée. La
              <strong> séparation des flux</strong> devient un contrôle de sécurité simple :
              chaque flux reste chez lui.
            </p>
          </section>

          <section>
            <h2>Fiche technique de l'équipement disponible</h2>
            <p>
              Nous proposons un switch d'accès et d'agrégation de <strong>niveau 3</strong>,
              dimensionné pour un réseau d'entreprise exigeant :
            </p>
            <ul>
              <li>
                <strong>Huawei CloudEngine S5735-S24T4X</strong> — switch d'accès/agrégation
                de niveau 3
              </li>
              <li>24× 10/100/1000BASE-T (GE)</li>
              <li>4× 10GE SFP+ en uplink</li>
              <li>Capacité de commutation 336 Gbit/s · 96 Mpps (couche 3)</li>
              <li>2× emplacements d'alimentation AC/DC (redondance 1+1)</li>
              <li>SEP / ERPS, IPv6, empilement iStack</li>
              <li>Plusieurs unités disponibles — nous consulter</li>
            </ul>
            <p>
              Comme pour tous nos équipements, le tarif est communiqué <strong>sur devis</strong>
              , après vérification de la disponibilité et du projet.
            </p>
          </section>

          <section>
            <h2>Dimensionner le nombre de ports</h2>
            <p>
              Le bon réflexe n'est pas de compter les appareils d'aujourd'hui, mais ceux de
              demain. On inventorie tout ce qui se branche : postes, imprimantes réseau,
              points d'accès, caméras IP, téléphones IP, serveur ou stockage, arrivée de la
              fibre. On garde ensuite une réserve de croissance d'environ vingt à trente
              pour cent de ports libres, puis on vérifie les besoins en <strong>PoE</strong>.
            </p>
            <ul>
              <li>
                <strong>Bureau</strong> : un switch 24 ports couvre confortablement les postes,
                une imprimante partagée, quelques points d'accès et les prises de service.
              </li>
              <li>
                <strong>Clinique</strong> : accueil, salles de soins et caisse méritent leurs
                prises ; caméras et téléphonie se comptent à part, et les dossiers patients
                justifient une séparation stricte entre accueil, réseau soins et réseau
                technique.
              </li>
              <li>
                <strong>École</strong> : salles de classe, salle informatique, administration
                et Wi-Fi élèves se séparent en VLAN ; le nombre de points d'accès détermine
                souvent les uplinks nécessaires.
              </li>
              <li>
                <strong>Entrepôt</strong> : postes de gestion, terminaux et caméras
                s'éloignent : on pense les liaisons fibre et les points de raccordement avant
                de choisir le nombre de ports.
              </li>
            </ul>
          </section>

          <section>
            <h2>Avec quoi on l'associe</h2>
            <p>
              Un switch administrable donne sa pleine mesure sur des fondations propres :
              une <strong>baie de brassage</strong> où chaque prise est repérée, un
              <strong> câblage réseau</strong> de catégorie 6 pour tenir les débits, un
              <strong> pare-feu</strong> en amont pour filtrer et router la sortie, des
              <strong> points d'accès</strong> pensés avec le Wi-Fi professionnel, et un
              <strong> onduleur</strong> pour protéger les équipements actifs.
            </p>
          </section>

          <section>
            <h2>Ce que nous prenons en charge</h2>
            <p>
              Fallcon Tech accompagne un projet de réseau d'entreprise de bout en bout, à
              Dakar comme dans les régions :
            </p>
            <ul>
              <li>
                <strong>Étude du site</strong> : relevé des locaux, des besoins réels et des
                contraintes techniques.
              </li>
              <li>
                <strong>Plan d'adressage et de VLAN</strong> : découpage logique clair, écrit
                avant toute pose.
              </li>
              <li>
                <strong>Câblage et repérage</strong> : pose, étiquetage et organisation de la
                baie de brassage.
              </li>
              <li>
                <strong>Configuration</strong> : switch administrable, VLAN, redondance,
                points d'accès et interconnexions.
              </li>
              <li>
                <strong>Documentation remise</strong> : plan du réseau, adressage et mots de
                passe sous pli, procédures d'exploitation.
              </li>
              <li>
                <strong>Supervision</strong> : suivi de l'état des équipements et de la
                disponibilité du réseau.
              </li>
            </ul>
          </section>

          <section>
            <h2>Les erreurs classiques à éviter</h2>
            <ul>
              <li>
                <strong>Empiler des switches non administrables</strong> en cascade, jusqu'à
                ne plus savoir où va quel câble et perdre toute visibilité.
              </li>
              <li>
                <strong>Ne prévoir aucun VLAN invité</strong>, en laissant les visiteurs sur
                le même réseau que les postes et le serveur de caisse.
              </li>
              <li>
                <strong>N'établir aucune documentation</strong> : sans plan d'adressage ni
                repérage, chaque intervention devient une enquête.
              </li>
              <li>
                <strong>Oublier l'onduleur</strong>, au risque de couper le réseau et
                d'endommager les équipements actifs à la moindre coupure de courant.
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
              Vous préparez votre réseau d'entreprise à Dakar ?
            </p>
            <p className="text-slate-700">
              Fallcon Tech étudie votre site, dimensionne vos switches, segmente vos flux et
              vous remet la documentation. Découvrez l'équipement sur notre fiche
              <Link to="/boutique/switch-s5735-s24t4x"> switch CloudEngine S5735</Link>, puis
              notre offre <Link to="/services/reseau-cablage-informatique-senegal">réseau et
              câblage informatique au Sénégal</Link>.
            </p>
          </div>

          <div className="not-prose mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Demander une étude réseau
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

export default ArticleSwitchReseauEntreprise;
