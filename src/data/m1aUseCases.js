/**
 * Série « M1A par secteur » : un article par type d’organisation.
 * Même structure que hardwareArticles, mais l’angle est le métier du client,
 * pas la fiche technique. Aucun chiffre inventé, aucun cas client fictif :
 * les scénarios sont décrits comme des situations typiques, pas comme des références.
 */

export const m1aUseCases = {
  "/article/m1a-clinique-hopital-reseau-medical": {
    kicker: "Santé",
    title: "M1A dans une clinique : imagerie, dossier patient et caméras sur le même réseau",
    description:
      "Pourquoi une clinique a besoin de séparer imagerie, dossier patient, caméras et Wi-Fi invités — et comment un NetEngine 8000 M1A y répond sans dégrader les flux critiques.",
    product: "/boutique/routeur-netengine-8000-m1a",
    productLabel: "NetEngine 8000 M1A",
    intro:
      "Une clinique de trente lits fait circuler trois types de trafic qui n’ont rien en commun : des images médicales lourdes, un dossier patient qui doit répondre instantanément au chevet, et de la vidéosurveillance qui écrit en continu. Les mettre sur le même réseau sans hiérarchie, c’est garantir que l’un des trois se dégrade aux heures de pointe.",
    sections: [
      {
        h2: "Le problème : la radiologie sature la consultation",
        paras: [
          "Une seule acquisition d’imagerie peut peser plus que toute une journée de dossiers patients. Quand le lien entre le service d’imagerie et le serveur est saturé par un transfert, c’est le poste de consultation qui ralentit — et l’attente se voit en salle d’attente.",
          "Le réflexe est d’acheter plus de bande passante. C’est parfois la bonne réponse, souvent la mauvaise : le problème n’est pas le débit total, c’est l’absence de priorité.",
        ],
      },
      {
        h2: "Usage 1 — Quatre réseaux logiques sur un seul équipement",
        paras: [
          "Le M1A sépare le trafic par VLAN et applique des politiques différentes : imagerie, dossier patient, administratif, caméras et invités. Chaque zone ne voit que ce qu’elle doit voir, et le routeur applique les règles entre zones.",
          "L’intérêt immédiat est double : un poste administratif compromis n’atteint pas l’imagerie, et une caméra défaillante ne noie pas le réseau médical.",
        ],
      },
      {
        h2: "Usage 2 — Priorité stricte aux flux de soin",
        paras: [
          "La qualité de service hiérarchique permet de réserver une bande aux flux critiques : consultation du dossier, validation d’ordonnance, transmission d’un examen. Les sauvegardes et les mises à jour passent après, même si elles sont volumineuses.",
          "C’est ce réglage, plus que la capacité du lien, qui fait la différence au moment où le service est plein.",
        ],
      },
      {
        h2: "Usage 3 — Un second lien pour les urgences",
        paras: [
          "Une clinique sans accès au dossier patient est une clinique à l’arrêt. Le M1A gère deux liens et bascule automatiquement : fibre principale, 4G ou second fournisseur en secours.",
          "Il faut être honnête sur la limite : la 4G ne remplace pas la fibre pour l’imagerie. Elle permet de continuer à consulter les dossiers et à prescrire, pas de transférer des examens lourds.",
        ],
      },
      {
        h2: "Usage 4 — Accès distant pour les praticiens, sans exposer le serveur",
        paras: [
          "Un médecin qui veut consulter un dossier depuis chez lui n’a pas besoin d’un accès complet au réseau. Un tunnel nominatif, limité à l’application concernée, suffit — et se révoque en une minute quand le praticien quitte la structure.",
        ],
      },
      {
        h2: "Ce que le M1A ne fait pas — et ce que la santé impose",
        paras: [
          "Il ne chiffre pas les données au repos et ne gère pas les habilitations métier. La conformité au secret médical se joue dans le logiciel, dans les comptes utilisateurs et dans les procédures.",
          "Il ne protège pas contre un rançongiciel entré par une pièce jointe. Sur ce point, la sauvegarde testée et la segmentation sont les deux mesures qui limitent réellement la casse.",
          "Enfin, il n’est pas un dispositif médical : aucun flux de dispositif connecté ne doit dépendre de fonctions non validées par le constructeur. Les équipements biomédicaux restent sur un réseau dédié, avec leurs propres règles.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il un routeur dédié pour l’imagerie ?",
        a: "Pas nécessairement : la séparation par VLAN et la priorité de flux suffisent dans la plupart des cliniques. Un lien dédié devient pertinent quand les volumes d’imagerie dépassent la capacité du lien commun.",
      },
      {
        q: "Le Wi-Fi des patients peut-il être sur le même équipement ?",
        a: "Oui, sur un VLAN isolé, avec interdiction d’accès aux réseaux médicaux. C’est même l’usage qui protège le plus vite : aujourd’hui, beaucoup de cliniques laissent les patients sur le réseau interne.",
      },
      {
        q: "Combien de temps pour basculer sur le second lien ?",
        a: "Quelques secondes. Les sessions en cours sont interrompues : le dossier doit être rouvert, ce qui reste acceptable comparé à un arrêt complet.",
      },
      {
        q: "Est-ce que cela remplace un pare-feu ?",
        a: "Non. Le routeur filtre et segmente, mais les fonctions de sécurité avancées relèvent d’un pare-feu avec abonnement. Les deux sont complémentaires.",
      },
      {
        q: "Peut-on commencer petit et étendre ?",
        a: "Oui. On déploie d’abord la segmentation et la bascule, puis on ajoute les accès distants et la supervision. Le matériel supporte la montée en charge sans être remplacé.",
      },
    ],
    cta: "Vous équipez une clinique ou un cabinet médical ?",
  },

  "/article/m1a-ecole-universite-campus": {
    kicker: "Éducation",
    title: "M1A dans une école : un campus, plusieurs réseaux, un seul point de contrôle",
    description:
      "Salles informatiques, Wi-Fi élèves, administration et laboratoire réseau : comment un NetEngine 8000 M1A structure le réseau d’un établissement scolaire ou d’une université.",
    product: "/boutique/routeur-netengine-8000-m1a",
    productLabel: "NetEngine 8000 M1A",
    intro:
      "Un établissement scolaire a une particularité : il héberge des utilisateurs qui n’ont aucune intention de respecter les règles, et qui sont souvent plus à l’aise avec le réseau que l’équipe qui l’administre. Le réseau doit donc être simple à expliquer, difficile à contourner et capable de tenir une salle de quarante postes qui démarre en même temps.",
    sections: [
      {
        h2: "Le problème : un seul réseau pour tout le monde",
        paras: [
          "Dans beaucoup d’établissements, les postes de la salle informatique, les ordinateurs de l’administration, les caméras et le Wi-Fi des élèves partagent le même réseau. Un élève qui installe un partage sauvage expose l’ensemble ; une salle qui télécharge en masse sature le lien pendant les cours.",
          "Le premier chantier n’est donc pas le filtrage, c’est la séparation. Sans elle, toute règle de filtrage peut être contournée en changeant simplement de prise réseau.",
        ],
      },
      {
        h2: "Usage 1 — Séparer élèves, enseignants et administration",
        paras: [
          "Trois VLAN, trois politiques : les élèves accèdent aux ressources pédagogiques et à internet filtré ; les enseignants ont accès aux outils de classe ; l’administration garde son réseau à part, avec les dossiers et la comptabilité.",
          "Le routeur applique les règles entre ces réseaux. Un élève ne peut pas atteindre le serveur administratif, même s’il débranche son poste et se branche sur une autre prise du même VLAN.",
        ],
      },
      {
        h2: "Usage 2 — Tenir la charge d’une salle qui démarre",
        paras: [
          "Quarante postes qui s’allument en même temps, un professeur qui projette une vidéo, une mise à jour qui se télécharge : le lien est saturé en quelques secondes. La qualité de service permet de garantir un débit minimal à la classe en cours et de brider les transferts de fond.",
          "C’est aussi ce qui rend le filtrage crédible : un filtrage qui ralentit tout le monde finit désactivé par l’équipe technique.",
        ],
      },
      {
        h2: "Usage 3 — Un laboratoire réseau qui sert vraiment",
        paras: [
          "Un M1A dans un établissement, c’est aussi un support pédagogique. VRP, VLAN, routage, VPN, listes d’accès : les étudiants manipulent un routeur d’opérateur, pas un simulateur.",
          "Pour une école qui prépare aux certifications, c’est un argument d’attractivité concret : les élèves sortent avec une expérience sur du matériel qu’ils retrouveront en entreprise.",
        ],
      },
      {
        h2: "Usage 4 — Relier un second site ou une annexe",
        paras: [
          "Beaucoup d’établissements ont deux bâtiments, parfois séparés par une rue. Un tunnel entre les deux évite de payer deux abonnements indépendants et permet de partager le serveur de fichiers et la sortie internet.",
          "Quand les bâtiments sont proches et en visibilité directe, un faisceau radio remplace le tunnel : le routeur se contente alors de router sur un lien privé.",
        ],
      },
      {
        h2: "Ce que le M1A ne fait pas dans une école",
        paras: [
          "Il ne filtre pas par catégories de sites et ne produit pas de rapport d’usage par salle. Ce travail demande un pare-feu avec filtrage d’URL sous abonnement, ou une passerelle dédiée.",
          "Il ne gère pas le Wi-Fi : les bornes et le portail captif sont des équipements séparés. Le routeur fournit le réseau et les règles, pas la radio.",
          "Enfin, il ne bloque pas les données mobiles des élèves : aucun équipement de l’établissement ne peut filtrer un forfait 4G personnel.",
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on filtrer les sites sans acheter un abonnement ?",
        a: "Pas par catégories. On peut bloquer des adresses et des plages, ce qui est fastidieux et contournable. Un filtrage sérieux suppose une passerelle ou un pare-feu avec base de catégories à jour.",
      },
      {
        q: "Les élèves peuvent-ils contourner la séparation ?",
        a: "Ils peuvent essayer de brancher un routeur personnel ou de créer un partage Wi-Fi. La parade est technique et organisationnelle : contrôle des prises, désactivation des ports inutilisés, et règles claires.",
      },
      {
        q: "Combien de postes peut-on mettre derrière un M1A ?",
        a: "Bien plus qu’une école n’en compte : la limite pratique vient du lien internet et du switch d’accès, pas du routeur.",
      },
      {
        q: "Est-ce utile pour un établissement de cinquante élèves ?",
        a: "Si l’établissement a une salle informatique et un serveur, oui. Pour un petit cours privé sans infrastructure, un équipement plus simple suffit.",
      },
      {
        q: "Peut-on l’utiliser comme support de formation ?",
        a: "Oui, c’est l’un des meilleurs usages : un vrai routeur avec VRP permet de manipuler BGP, VXLAN ou la qualité de service, ce qu’un simulateur ne rend jamais complètement.",
      },
    ],
    cta: "Vous structurez le réseau d’un établissement scolaire ou d’un campus ?",
  },

  "/article/m1a-industrie-usine-ot-it": {
    kicker: "Industrie",
    title: "M1A dans une usine : séparer les automates du réseau bureautique",
    description:
      "Automates, supervision, caméras et bureaux : comment un NetEngine 8000 M1A cloisonne l’OT et l’IT dans une usine ou un site logistique, sans toucher aux machines.",
    product: "/boutique/routeur-netengine-8000-m1a",
    productLabel: "NetEngine 8000 M1A",
    intro:
      "Dans une usine, le réseau qui fait tourner les machines n’a pas les mêmes contraintes que celui des bureaux. Un automate ne tolère ni latence ni coupure, et il n’a souvent aucune protection : il est plus vieux que le pare-feu, parfois plus vieux que le service informatique. Le mélanger au réseau bureautique est la faute la plus fréquente, et la plus coûteuse.",
    sections: [
      {
        h2: "Le problème : l’OT branché sur la même prise que la comptabilité",
        paras: [
          "Quand un automate, un superviseur ou un écran de production partage le réseau des postes, trois choses deviennent possibles : un poste infecté atteint l’automate, une mise à jour bureautique sature le lien de production, et une panne réseau bureautique arrête la ligne.",
          "Les constructeurs de machines le disent depuis des années : l’OT doit être cloisonné. Mais dans les faits, le câble le plus court va souvent du switch de l’atelier au switch du bureau.",
        ],
      },
      {
        h2: "Usage 1 — Deux mondes, deux réseaux",
        paras: [
          "Le M1A crée une zone OT distincte de la zone IT. Les flux autorisés sont listés un par un : le superviseur lit les automates, la maintenance accède à un port précis, la collecte de production remonte vers un serveur unique. Tout le reste est refusé.",
          "Ce cloisonnement ne demande aucune modification des automates : ils continuent de parler à qui ils parlaient, mais uniquement à travers le routeur.",
        ],
      },
      {
        h2: "Usage 2 — Priorité absolue à la production",
        paras: [
          "La qualité de service réserve une bande aux flux industriels. Le transfert d’un fichier CAO, la sauvegarde ou la vidéo de formation passent après les ordres de fabrication.",
          "Sur un site où la connexion internet est mutualisée entre l’atelier et les bureaux, c’est ce qui empêche une réunion en visioconférence de faire ralentir une ligne.",
        ],
      },
      {
        h2: "Usage 3 — Relier un site secondaire ou un entrepôt",
        paras: [
          "Un tunnel entre l’usine et l’entrepôt permet de partager la gestion de stock et les expéditions sans exposer les serveurs. Le même routeur tient les deux côtés si les volumes restent raisonnables.",
          "Quand les deux bâtiments sont proches, un faisceau radio ou une fibre privée remplace le tunnel et supprime la dépendance à internet.",
        ],
      },
      {
        h2: "Usage 4 — Journaliser sans espionner",
        paras: [
          "Le routeur journalise les connexions entre zones : qui a tenté de joindre un automate, à quelle heure, depuis quelle adresse. C’est exactement ce qu’il faut pour comprendre un incident de production sans instrumenter les machines.",
          "Ce n’est pas de la surveillance des personnes : ce sont des flux entre équipements, et c’est ce qui rend la mesure acceptable auprès des équipes.",
        ],
      },
      {
        h2: "Ce que le M1A ne fait pas sur un site industriel",
        paras: [
          "Il n’est pas un pare-feu industriel certifié et ne remplace pas une passerelle OT conçue pour les protocoles industriels (Modbus, Profinet, Ethernet/IP). Il cloisonne au niveau IP, ce qui est déjà l’essentiel, mais l’inspection des protocoles industriels relève d’un équipement dédié.",
          "Il ne protège pas un automate qui n’a pas de mot de passe. Le cloisonnement limite l’exposition ; il ne corrige pas une machine conçue sans sécurité.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il arrêter la production pour installer le routeur ?",
        a: "Non si l’insertion se fait en coupure planifiée sur un arrêt court, ou pendant un changement d’équipe. Une intervention en production sans fenêtre d’arrêt se prépare : sauvegarde des configurations, plan de retour arrière, et test avant bascule.",
      },
      {
        q: "Les automates doivent-ils changer d’adresse ?",
        a: "Pas nécessairement. On peut conserver le plan d’adressage existant et cloisonner par zone. Un changement d’adressage sur des machines anciennes est souvent plus risqué que le gain attendu.",
      },
      {
        q: "Peut-on garder l’accès du constructeur de la machine ?",
        a: "Oui, par une règle temporaire et journalisée, limitée à une adresse et à une plage horaire. C’est préférable à un accès permanent ouvert « au cas où ».",
      },
      {
        q: "Le routeur résiste-t-il à l’atelier ?",
        a: "Il se place en armoire électrique ou en salle technique, pas au pied d’une presse. Les contraintes de poussière, de chaleur et de vibration se traitent par le local, pas par l’équipement.",
      },
      {
        q: "Est-ce utile pour un simple atelier de dix personnes ?",
        a: "Si l’atelier a des automates et un réseau bureautique, oui. Sinon, un switch manageable et un pare-feu suffisent souvent.",
      },
    ],
    cta: "Vous devez cloisonner la production et les bureaux ?",
  },

  "/article/m1a-fai-hebergeur-bgp-bras": {
    kicker: "FAI & hébergement",
    title: "M1A pour un FAI local : annoncer ses préfixes et servir ses abonnés",
    description:
      "BGP multi-opérateurs, bascule de transit et terminaison d’abonnés : ce qu’un NetEngine 8000 M1A apporte à un fournisseur d’accès local ou à un hébergeur qui grandit.",
    product: "/boutique/routeur-netengine-8000-m1a",
    productLabel: "NetEngine 8000 M1A",
    intro:
      "Un petit opérateur traverse toujours le même moment : le réseau fonctionne, les clients augmentent, et l’équipement qui tenait tout commence à devenir le point unique de panne. Le M1A est un routeur d’opérateur, pas un routeur d’entreprise. C’est exactement pour ce moment-là qu’il est fait.",
    sections: [
      {
        h2: "Le problème : un seul transitaire, un seul routeur",
        paras: [
          "Tant qu’un opérateur n’a qu’un transitaire et un routeur, chaque incident fournisseur coupe tous ses clients. Et quand il en ajoute un second, il découvre que la bascule manuelle ne tient pas : quelqu’un doit être réveillé la nuit pour changer une route.",
          "Le second problème est l’adressage. Sans plan clair, chaque nouveau client ajoute une exception, et la moindre migration devient un exercice périlleux.",
        ],
      },
      {
        h2: "Usage 1 — BGP avec deux transitaires",
        paras: [
          "Le routeur tient plusieurs sessions BGP, annonce les préfixes de l’opérateur et choisit la meilleure route selon les attributs. Quand une session tombe, le trafic bascule sur l’autre sans intervention.",
          "Il permet aussi de filtrer ce qui est annoncé et ce qui est accepté : c’est la protection de base contre une fuite de routes, qui peut rendre un opérateur injoignable pendant des heures.",
        ],
      },
      {
        h2: "Usage 2 — Terminer les abonnés (PPPoE et IPoE)",
        paras: [
          "Le M1A peut terminer des sessions PPPoE ou IPoE, authentifier les abonnés auprès d’un serveur RADIUS, attribuer les adresses et appliquer un profil de débit.",
          "Pour un opérateur qui vend de l’accès en immeuble ou en quartier, c’est ce qui transforme un réseau partagé en offre facturable : chaque abonné a un identifiant, un débit et une trace.",
          "La limite est à connaître : le routeur ne fait pas la facturation ni la gestion client. Il s’interface avec un système de gestion, qui reste à prévoir.",
        ],
      },
      {
        h2: "Usage 3 — Qualité de service par abonné",
        paras: [
          "Sans politique de débit, un abonné qui télécharge sature le lien de tout l’immeuble. La qualité de service hiérarchique applique un plafond par abonné et une priorité pour la voix et la visioconférence.",
          "C’est ce qui permet de vendre plusieurs niveaux d’offre sur la même infrastructure, au lieu d’un débit unique que tout le monde subit.",
        ],
      },
      {
        h2: "Usage 4 — Un labo avant la production",
        paras: [
          "Avant de changer une politique de routage ou de migrer un plan d’adressage, on teste sur une seconde unité. Le M1A supporte les mêmes fonctions que les routeurs de bordure de gamme supérieure, ce qui rend les répétitions crédibles.",
        ],
      },
      {
        h2: "Ce que le M1A ne fait pas pour un opérateur",
        paras: [
          "Il ne fournit ni support constructeur ni pièces neuves sous contrat. Pour un service de production critique, il faut soit une unité de secours, soit un contrat de maintenance tiers.",
          "Il ne remplace pas un châssis de cœur : sur des débits très élevés et un nombre important de clients, un M14 ou une gamme supérieure est nécessaire. Le M1A est un routeur de bordure et d’agrégation, pas un cœur de réseau national.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il un numéro d’AS et des adresses publiques ?",
        a: "Oui, pour faire du BGP il faut un numéro d’autonome et des préfixes attribués par un registre régional. Sans cela, on peut utiliser le routeur en agrégation interne, pas en bordure publique.",
      },
      {
        q: "Combien d’abonnés peut-on terminer ?",
        a: "Cela dépend des profils de débit et du trafic, pas d’un chiffre unique. Le M1A est dimensionné pour un opérateur local ou régional ; au-delà, un châssis plus large est nécessaire.",
      },
      {
        q: "Peut-on démarrer sans RADIUS ?",
        a: "Techniquement oui, avec des comptes locaux, mais ce n’est pas tenable : la gestion des abonnés, des suspensions et de la facturation demande un serveur d’authentification.",
      },
      {
        q: "Est-ce que cela remplace un pare-feu pour mes clients entreprises ?",
        a: "Non. Si vous vendez de la connectivité à des entreprises, elles attendent un filtrage : c’est un service distinct, avec un pare-feu dédié.",
      },
      {
        q: "Quelle redondance prévoir ?",
        a: "Deux alimentations, deux liens de transit et, idéalement, une seconde unité préconfigurée. Le routeur seul ne fait pas de haute disponibilité sans un second équipement.",
      },
    ],
    cta: "Vous exploitez un réseau d’accès et préparez la montée en charge ?",
  },

  "/article/m1a-site-isole-chantier-mine": {
    kicker: "Sites isolés",
    title: "M1A sur un site isolé : chantier, mine ou base logistique",
    description:
      "Quand le seul lien est une 4G ou un satellite, un NetEngine 8000 M1A organise le partage, priorise les flux critiques et tient malgré les coupures.",
    product: "/boutique/routeur-netengine-8000-m1a",
    productLabel: "NetEngine 8000 M1A",
    intro:
      "Sur un chantier, une mine ou une base logistique, le réseau n’a pas de fibres à disposition. Le lien est une 4G, parfois un satellite, souvent les deux, et il tombe. Le rôle du routeur n’est pas d’améliorer ce lien : il est de décider qui passe en premier quand il n’y a presque rien à partager.",
    sections: [
      {
        h2: "Le problème : tout le monde attend le même lien étroit",
        paras: [
          "Sur un site isolé, la connexion sert à la fois à la production, à la paie, à la téléphonie, aux caméras et au confort des équipes. Sans priorité, c’est le plus gros consommateur qui gagne, et ce n’est jamais l’application critique.",
        ],
      },
      {
        h2: "Usage 1 — Deux liens hétérogènes, une seule sortie",
        paras: [
          "Le M1A gère une 4G et un satellite en parallèle, avec des métriques différentes. Le satellite prend le relais quand la 4G tombe, et le trafic revient automatiquement quand elle revient.",
          "Les liens n’ont pas besoin d’être équivalents : le routeur sait router par l’un ou par l’autre selon la destination ou la politique définie.",
        ],
      },
      {
        h2: "Usage 2 — Priorités : production d’abord, confort ensuite",
        paras: [
          "Ordres de fabrication, transmissions de sécurité, téléphonie : ces flux passent devant. Les mises à jour, la vidéo et la navigation personnelle attendent.",
          "C’est la différence entre un site où « internet ne marche pas » et un site où les équipes savent que certains usages sont volontairement limités.",
        ],
      },
      {
        h2: "Usage 3 — Un réseau local propre, même sans internet",
        paras: [
          "Le routeur continue de faire son travail quand le lien est coupé : le réseau local fonctionne, le serveur de fichiers reste accessible, la badgeuse enregistre, les caméras continuent d’écrire.",
          "Cela suppose que les applications critiques soient hébergées localement. C’est un choix d’architecture à assumer : sur un site isolé, le cloud n’est pas une stratégie de continuité.",
        ],
      },
      {
        h2: "Usage 4 — Accès du siège pour superviser",
        paras: [
          "Un tunnel permanent, ou établi à la demande, permet au siège de consulter l’état du site sans envoyer quelqu’un. Sur un chantier, cela évite des déplacements dont le coût dépasse largement celui de l’équipement.",
        ],
      },
      {
        h2: "Ce que le M1A ne fait pas sur un site isolé",
        paras: [
          "Il ne compense pas la latence d’un satellite. Certaines applications métier, conçues pour un réseau local, resteront inutilisables à distance, quel que soit l’équipement.",
          "Il ne protège pas contre le vol, la poussière ou la chaleur : sur un chantier, l’équipement doit être dans une armoire fermée, alimentée correctement et protégée de la foudre.",
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on faire du VPN sur une 4G instable ?",
        a: "Oui. Le tunnel se rétablit automatiquement quand le lien revient. Les sessions en cours sont interrompues, ce qui doit être accepté par les applications utilisées.",
      },
      {
        q: "Faut-il un groupe électrogène pour le routeur ?",
        a: "Un onduleur couvre les microcoupures ; au-delà, c’est l’alimentation du site qui est en cause. Un routeur qui redémarre à chaque coupure ne sert à rien.",
      },
      {
        q: "Quelle différence avec un routeur 4G du commerce ?",
        a: "Le routeur du commerce fait passer tout le monde par une seule file, sans politique ni journal. Le M1A hiérarchise, cloisonne et permet de superviser — ce qui change tout dès qu’il y a vingt personnes sur le site.",
      },
      {
        q: "Peut-on héberger une application métier sur le site ?",
        a: "Oui, et c’est souvent la seule façon de tenir pendant les coupures. Cela suppose un serveur local et une sauvegarde qui remonte quand le lien le permet.",
      },
      {
        q: "Combien de temps pour installer ?",
        a: "Une journée pour un site simple, davantage si le local technique, l’alimentation et le câblage doivent être repris.",
      },
    ],
    cta: "Vous équipez un chantier, une mine ou une base isolée ?",
  },


  "/article/m1a-cabinets-avocats-notaires-comptables": {
    kicker: "Professions libérales",
    title: "M1A pour un cabinet d’avocats, une étude notariale ou un cabinet comptable",
    description:
      "Confidentialité, accueil du public, délais : ce qu’un NetEngine 8000 M1A change dans un cabinet juridique ou comptable, et les limites qu’il faut annoncer.",
    product: "/boutique/routeur-netengine-8000-m1a",
    productLabel: "NetEngine 8000 M1A",
    intro:
      "Un cabinet d’avocats, une étude notariale et un cabinet comptable exercent trois métiers différents, avec la même contrainte : ils détiennent des informations que personne d’autre ne doit voir, ils reçoivent du public, et ils travaillent sous délai. C’est cette combinaison — confidentialité, accueil, échéance — qui rend leur réseau plus délicat qu’il n’y paraît.",
    sections: [
      {
        h2: "Le problème commun : un réseau ouvert autour d’informations fermées",
        paras: [
          "Dans beaucoup de cabinets, le serveur de dossiers est visible de chaque poste, le Wi-Fi de la salle d’attente est celui du bureau, et l’accès à distance se règle par un port ouvert « pour dépanner ». Ce n’est pas de la négligence : c’est l’empilement de solutions prises un jour de besoin.",
          "Le risque vient rarement d’une attaque sophistiquée. Il vient d’un accès trop large : le stagiaire qui voit les dossiers de tous les associés, la clé USB qui circule, le client connecté au mauvais réseau, ou un poste compromis qui atteint le serveur parce que rien ne l’en empêche.",
        ],
      },
      {
        h2: "Ce qui change d’un métier à l’autre",
        paras: [
          "Chez les avocats, le point sensible est le plateau partagé : plusieurs avocats, parfois plusieurs structures, un secrétariat commun et une seule connexion. Le réseau doit séparer des confrères qui partagent les mêmes murs, sans les empêcher de partager l’imprimante.",
          "Chez les notaires, c’est l’accueil du public : des clients attendent, demandent le Wi-Fi, et le réseau qui le fournit donne parfois accès au minutaire. S’y ajoute une contrainte de rendez-vous : un acte qui devait être signé ne se reporte pas parce qu’un opérateur est en panne.",
          "Chez les comptables, c’est le rythme : des semaines calmes, puis des périodes où tout doit être télétransmis en même temps. Le trafic montant compte autant que le descendant, et un téléchargement mal placé peut retarder une déclaration.",
        ],
      },
      {
        h2: "Usage 1 — Un accès distant nominatif, révocable",
        paras: [
          "Le M1A établit un tunnel chiffré pour chaque personne qui travaille hors du cabinet : avocat au palais, clerc en déplacement, collaborateur chez un client. L’accès au serveur de dossiers passe par ce tunnel, jamais par un port exposé sur internet.",
          "Ce que ça change en pratique : quand quelqu’un quitte le cabinet, on désactive son compte et l’accès disparaît. On ne change pas le mot de passe du serveur pour tout le monde un vendredi soir, et on ne laisse pas traîner un accès ouvert « au cas où ».",
        ],
      },
      {
        h2: "Usage 2 — Séparer les structures et les portefeuilles",
        paras: [
          "Quand deux cabinets ou deux associés partagent une connexion, le routeur crée un réseau distinct par structure, avec des règles entre les deux : accès commun à internet et à l’imprimante, aucun accès aux dossiers de l’autre.",
          "Dans un cabinet comptable qui héberge plusieurs entités, la même logique s’applique : un pôle ne voit pas les dossiers de l’autre. Le réseau ne remplace pas les droits du logiciel métier, mais il empêche un poste compromis d’un pôle d’atteindre les données de l’autre.",
        ],
      },
      {
        h2: "Usage 3 — Le réseau d’accueil, isolé du reste",
        paras: [
          "Un client qui attend, un client qui vient déposer des pièces, un confrère en réunion : tous demandent parfois une connexion. Un réseau invité séparé, limité à internet, évite de leur donner accès aux serveurs, aux imprimantes et aux caméras.",
          "C’est la mesure la plus simple à expliquer, et l’une des plus efficaces : un téléphone infecté dans la salle d’attente ne peut pas atteindre le dossier d’un client.",
        ],
      },
      {
        h2: "Usage 4 — Priorité et continuité au moment où ça compte",
        paras: [
          "Les délais ne se suspendent pas pendant une panne : procédure à déposer, acte à signer, déclaration à transmettre. Un second lien, basculé automatiquement, couvre la panne de l’opérateur principal en quelques secondes.",
          "La qualité de service complète le dispositif : les flux de télétransmission et de messagerie passent devant les téléchargements et les sauvegardes. C’est un réglage invisible le reste du temps, et décisif le jour de l’échéance.",
        ],
      },
      {
        h2: "Ce que le M1A ne fait pas dans un cabinet",
        paras: [
          "Il ne chiffre pas les disques du serveur et ne gère pas les droits d’accès aux dossiers : cela se joue dans le système de gestion documentaire et dans les comptes utilisateurs.",
          "Il ne conserve pas vos actes et ne garantit pas la conservation légale des documents. L’archivage, la sauvegarde et les durées de conservation relèvent d’un serveur, d’une procédure et de copies hors site — pas d’un routeur.",
          "Enfin, il ne vaut pas conformité déontologique. Le secret professionnel et les obligations propres à chaque profession restent des responsabilités personnelles, que le réseau aide à respecter mais ne satisfait pas à leur place.",
        ],
      },
      {
        h2: "Ce qu’il faut prévoir",
        paras: [
          "Un compte par personne, jamais un compte partagé « cabinet ». Une sauvegarde du serveur de dossiers, avec une restauration testée. Un onduleur. Et un plan d’adressage simple, écrit, pour que le successeur du responsable informatique comprenne le réseau.",
          "Un cabinet de cinq à quinze personnes se déploie en une journée, hors préparation des accès.",
        ],
      },
    ],
    faq: [
      {
        q: "Un routeur suffit-il à protéger le secret professionnel ?",
        a: "Non. Il limite les chemins d’accès et chiffre les connexions, mais le secret dépend d’abord des comptes nominatifs, des droits dans le logiciel et du comportement des utilisateurs.",
      },
      {
        q: "Peut-on partager une connexion entre deux cabinets ?",
        a: "Oui, avec un réseau par structure et des règles strictes entre les deux. C’est un montage courant, et le routeur est précisément l’équipement qui le rend propre.",
      },
      {
        q: "Les collaborateurs peuvent-ils travailler depuis chez eux ?",
        a: "Oui, par tunnel nominatif, limité aux dossiers utiles. L’accès se révoque immédiatement en cas de départ.",
      },
      {
        q: "Que se passe-t-il si internet tombe pendant une signature ou une échéance ?",
        a: "Le second lien prend le relais en quelques secondes si le cabinet en a un. Sans second lien, seules les applications hébergées localement continuent de fonctionner.",
      },
      {
        q: "Est-ce adapté à un professionnel seul ?",
        a: "Rarement nécessaire. Un routeur plus simple et une sauvegarde correcte suffisent ; le M1A devient pertinent dès qu’il y a plusieurs collaborateurs, un serveur et des accès distants.",
      },
      {
        q: "Faut-il un débit particulier pour un cabinet comptable ?",
        a: "Oui : le débit montant compte autant que le descendant, parce que télétransmettre et déposer des pièces consomme de l’envoi.",
      },
    ],
    cta: "Vous équipez un cabinet d’avocats, une étude ou un cabinet comptable ?",
  },

  "/article/m1a-organisations-multisites": {
    kicker: "Multi-sites",
    title: "M1A pour une banque, une administration ou une ONG : interconnecter des sites",
    description:
      "Siège, agences, directions régionales ou bureaux terrain : comment un NetEngine 8000 M1A relie des sites hétérogènes avec un plan d’adressage unique et des accès maîtrisés.",
    product: "/boutique/routeur-netengine-8000-m1a",
    productLabel: "NetEngine 8000 M1A",
    intro:
      "Une banque avec ses agences, une administration avec ses directions régionales, une ONG avec ses bureaux terrain : trois organisations différentes, un même problème. Le siège décide, les sites exécutent, et le réseau qui les relie s’est construit par empilement — un routeur ici, une box là, des accès ouverts pour dépanner.",
    sections: [
      {
        h2: "Le problème : chaque site invente sa solution",
        paras: [
          "Sans standard, chaque site achète son équipement, crée ses partages et bricole ses accès. Le siège finit avec autant de configurations que de sites, et personne ne sait qui peut accéder à quoi.",
          "S’y ajoute la question des départs : les comptes ouverts pour un agent, un volontaire ou un prestataire restent actifs longtemps après leur passage. Le réseau n’est plus un plan, c’est une archive de décisions oubliées.",
        ],
      },
      {
        h2: "Usage 1 — Un tunnel par site et un plan d’adressage unique",
        paras: [
          "Chaque site établit un tunnel chiffré vers le siège ou vers le centre de données. Les adresses internes suivent un plan unique : le troisième bloc identifie le site, ce qui permet de savoir d’où vient un poste en lisant son adresse.",
          "L’intérêt dépasse la technique : c’est ce qui rend possible un inventaire, une politique d’accès homogène et une migration d’opérateur sans tout réécrire.",
        ],
      },
      {
        h2: "Usage 2 — Le moindre privilège, site par site",
        paras: [
          "Une agence n’a pas besoin de voir tout le système d’information : elle a besoin de son application métier, de sa messagerie et de ses impressions. Les règles du routeur limitent chaque site aux flux nécessaires, et listent explicitement ce qui est autorisé.",
          "C’est ce qui limite la casse le jour où un poste de site est compromis : l’attaquant n’hérite pas du réseau entier, il hérite d’un segment.",
        ],
      },
      {
        h2: "Usage 3 — Journaliser et pouvoir prouver",
        paras: [
          "Le routeur conserve l’historique des connexions entre sites et des changements de configuration. En cas d’incident, on peut reconstituer ce qui s’est passé, quand, et depuis quel site.",
          "Cette traçabilité sert autant en interne qu’en audit : elle évite de reconstituer l’histoire de mémoire, et elle permet de répondre à un régulateur ou à un bailleur avec des faits datés.",
        ],
      },
      {
        h2: "Usage 4 — La continuité là où elle compte",
        paras: [
          "Toutes les agences n’ont pas la même criticité. Une agence qui encaisse, un guichet d’état civil ou un bureau qui transmet des rapports financiers ne peuvent pas s’arrêter une heure. Un second lien et une bascule automatique couvrent ces sites-là en priorité.",
          "Les sites secondaires peuvent se contenter d’un lien unique : la continuité se dimensionne par criticité, pas par principe.",
        ],
      },
      {
        h2: "Ce qui change selon l’organisation",
        paras: [
          "Dans une banque ou une microfinance, la contrainte est réglementaire et opérationnelle : chaque agence doit tenir ses délais, et la séparation des rôles doit être démontrable. Le routeur apporte la continuité et la trace, pas la conformité — celle-ci se joue dans les procédures et les contrôles.",
          "Dans une administration, la contrainte est contractuelle : les marchés publics exigent une documentation et une réversibilité. Une configuration exportée et documentée se rejoue sur un équipement équivalent, ce qui protège l’organisation en fin de marché.",
          "Dans une ONG, la contrainte est matérielle : les sites n’ont pas les mêmes liens. Fibre au siège, radio en région, 4G ou satellite sur le terrain. Le même routeur s’adapte, et le tunnel se rétablit seul quand le lien revient.",
        ],
      },
      {
        h2: "Ce que le M1A ne fait pas",
        paras: [
          "Il ne fournit pas de conformité réglementaire : les exigences applicables à une banque ou à une administration dépendent des textes et des autorités de contrôle.",
          "Il ne remplace ni un pare-feu, ni une sauvegarde centralisée, ni un système de gestion des identités. Il transporte, cloisonne et journalise une partie des flux.",
          "Il ne rend pas rapide un lien satellite : sur certains sites, la latence est physique et aucun équipement ne la compense.",
        ],
      },
      {
        h2: "Ce qu’il faut prévoir",
        paras: [
          "Un plan d’adressage écrit, un modèle de configuration par type de site, deux liens sur les sites critiques, et une procédure de remise en état simple pour les sites sans technicien — débrancher, rebrancher, vérifier les diodes.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il un routeur dans chaque site ?",
        a: "Oui, pour terminer le tunnel et appliquer les règles localement. Un modèle plus petit suffit pour les sites de deux ou trois postes.",
      },
      {
        q: "Peut-on mélanger fibre, 4G et satellite ?",
        a: "Oui. Chaque site utilise le lien dont il dispose ; la logique de réseau reste la même, seules les performances changent.",
      },
      {
        q: "Comment gérer un site sans informaticien ?",
        a: "Configuration standardisée, accès distant sécurisé et procédure de remise en état élémentaire. C’est ce qui évite d’envoyer quelqu’un à six heures de route pour rebrancher un câble.",
      },
      {
        q: "Que se passe-t-il si le siège tombe ?",
        a: "Les sites perdent l’accès aux applications centrales. C’est pourquoi, au-delà d’une quinzaine de sites, l’architecture est revue avec un second point de regroupement.",
      },
      {
        q: "Les agents peuvent-ils travailler à distance ?",
        a: "Oui, avec des accès nominatifs et un VPN par utilisateur, encadrés par une politique écrite.",
      },
      {
        q: "Est-ce adapté à une organisation de deux sites ?",
        a: "Techniquement oui. Économiquement, un routeur plus simple peut suffire tant que la criticité reste faible ; le M1A se justifie quand le nombre de sites ou les exigences de continuité augmentent.",
      },
    ],
    cta: "Vous interconnectez un siège et des sites distants ?",
  },

  "/article/m1a-hotels-residences-immeubles": {
    kicker: "Hébergement & immobilier",
    title: "M1A pour un hôtel, une résidence ou un immeuble : partager la connexion sans la subir",
    description:
      "Wi-Fi invités, caisse, caméras et locataires : comment un NetEngine 8000 M1A garantit un débit par utilisateur ou par lot et isole chaque réseau.",
    product: "/boutique/routeur-netengine-8000-m1a",
    productLabel: "NetEngine 8000 M1A",
    intro:
      "Partager une connexion entre plusieurs utilisateurs paraît simple jusqu’au premier conflit : celui qui télécharge en permanence, celui qui travaille en visioconférence, et celui qui paie autant que les autres pour un débit divisé par cinq. Sans règle technique, la discussion revient chaque mois — et dans un hôtel, elle finit dans les avis.",
    sections: [
      {
        h2: "Le problème : un routeur grand public pour plusieurs dizaines d’utilisateurs",
        paras: [
          "Un immeuble de vingt lots ou un hôtel de trente chambres équipé d’un routeur domestique partage une seule file d’attente. Le premier arrivé prend la bande passante, et personne ne peut dire qui consomme quoi.",
          "Le second problème est la sécurité : tout le monde est sur le même réseau. Un client peut voir les appareils des autres, parfois les partages de la réception, et l’interface des caméras.",
        ],
      },
      {
        h2: "Usage 1 — Un réseau par client, par lot ou par chambre",
        paras: [
          "Le M1A crée un réseau logique par usage : invités, réception ou gestion, caméras, et — dans un immeuble — un réseau par lot ou par étage. Chacun ne voit que ce qu’il doit voir.",
          "Le gestionnaire garde un point de contrôle unique : une seule sortie internet à superviser, et la possibilité de couper un lot sans toucher aux autres.",
        ],
      },
      {
        h2: "Usage 2 — Un débit garanti, pas un débit espéré",
        paras: [
          "Le partage équitable n’est pas une intention, c’est une configuration : un plafond par utilisateur ou par lot, une priorité pour les usages temps réel, et un surplus redistribué quand la bande est libre.",
          "C’est ce qui permet d’écrire « 20 Mbit/s garantis » dans un bail ou une offre, et de le tenir — au lieu de promettre « internet haut débit » sans engagement.",
        ],
      },
      {
        h2: "Usage 3 — La réception et la gestion prioritaires",
        paras: [
          "La caisse, le terminal de paiement, la téléphonie et les caméras passent devant le confort des clients. Un client qui regarde une vidéo ne doit pas empêcher l’encaissement.",
          "Ce réglage se remarque surtout le soir, quand le lien est saturé : c’est là qu’un établissement perd de l’argent sans comprendre pourquoi.",
        ],
      },
      {
        h2: "Usage 4 — Deux liens pour ne pas fermer la caisse",
        paras: [
          "Un hôtel sans connexion ne peut plus encaisser par carte ni enregistrer un client. Un immeuble sans connexion perd la supervision et les caméras. Le second lien, basculé automatiquement, couvre la panne de l’opérateur principal.",
          "La bascule prend quelques secondes ; les sessions en cours sont interrompues, ce qui est acceptable comparé à un arrêt complet.",
        ],
      },
      {
        h2: "Ce qui change selon le cas",
        paras: [
          "Un hôtel a besoin de codes d’accès par chambre ou par séjour, d’une page d’accueil aux couleurs de l’établissement et d’une durée de validité. Ces fonctions relèvent d’un portail captif, pas du routeur, qui fournit le réseau et les règles.",
          "Une résidence meublée a besoin d’un réseau par appartement, d’un accès gestionnaire et d’une facturation simple : le routeur fournit les compteurs, pas les quittances.",
          "Un immeuble doit arbitrer entre partage et facturation. Attention à la limite légale : revendre de l’accès internet à des tiers contre paiement est une activité régulée au Sénégal. Le montage doit être vérifié avant de facturer, l’exploitant n’étant pas nécessairement autorisé à se comporter en fournisseur d’accès.",
        ],
      },
      {
        h2: "Ce que le M1A ne fait pas",
        paras: [
          "Il n’émet pas de Wi-Fi : les bornes, la couverture et le portail captif sont des équipements et logiciels séparés. Un routeur ne compense pas des bornes mal placées.",
          "Il ne gère pas la facturation, ni la réservation, ni la télévision. Il fournit le réseau sur lequel ces services s’appuient.",
          "Il ne transforme pas un lien saturé en lien rapide : il répartit la bande disponible, il n’en ajoute pas.",
        ],
      },
      {
        h2: "Ce qu’il faut prévoir",
        paras: [
          "Un câblage correct jusqu’aux bornes ou aux lots, un local technique ventilé, un onduleur, et un débit total cohérent avec la somme des garanties annoncées. Pour vingt lots à 10 Mbit/s garantis, il faut pouvoir tenir 200 Mbit/s à l’entrée.",
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on garantir un débit à chaque chambre ou appartement ?",
        a: "Oui, jusqu’à la capacité totale du lien. Le routeur répartit ; il n’ajoute pas de bande passante.",
      },
      {
        q: "Faut-il changer les bornes Wi-Fi existantes ?",
        a: "Pas forcément. On vérifie d’abord qu’elles supportent plusieurs réseaux et le VLAN. Sinon, elles devront être remplacées.",
      },
      {
        q: "Le Wi-Fi client peut-il donner accès à la caisse ?",
        a: "Non, et c’est tout l’intérêt du montage : un réseau invité isolé n’a qu’une destination, internet.",
      },
      {
        q: "Est-ce légal de revendre l’internet aux locataires ?",
        a: "C’est une question réglementaire. Au Sénégal, la fourniture d’accès à des tiers contre paiement relève d’une autorisation : faites valider le montage avant de facturer.",
      },
      {
        q: "Comment régler le cas d’un utilisateur qui abuse ?",
        a: "Le plafond par utilisateur rend l’abus impossible : il sature son propre débit, pas celui des autres.",
      },
      {
        q: "Peut-on ajouter des lots ou des chambres plus tard ?",
        a: "Oui, un réseau et un profil de débit s’ajoutent sans interrompre les autres. Le routeur tient plusieurs dizaines de segments.",
      },
    ],
    cta: "Vous équipez un hôtel, une résidence ou un immeuble ?",
  },
};
