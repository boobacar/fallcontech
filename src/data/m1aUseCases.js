/**
 * Série « M1A par secteur » : un article par type d’organisation.
 * Même structure que hardwareArticles, mais l’angle est le métier du client,
 * pas la fiche technique. Aucun chiffre inventé, aucun cas client fictif :
 * les scénarios sont décrits comme des situations typiques, pas comme des références.
 */

export const m1aUseCases = {
  "/article/m1a-banque-microfinance-agences": {
    kicker: "Banque & microfinance",
    title: "M1A pour une banque ou une microfinance : tenir chaque agence, même quand le lien tombe",
    description:
      "Guichet, caisse, conformité : ce qu’un routeur NetEngine 8000 M1A change dans un réseau d’agences bancaires ou de microfinance, entre continuité, VPN et cloisonnement.",
    product: "/boutique/routeur-netengine-8000-m1a",
    productLabel: "NetEngine 8000 M1A",
    intro:
      "Dans une agence bancaire, l’informatique n’a pas le droit d’être « en dégradé ». Un guichet qui ne peut plus consulter un solde, une caisse qui n’encaisse plus, un comité de crédit qui ne voit pas les pièces du dossier : l’arrêt se compte en minutes et se retrouve en fin de mois. Le réseau d’agences est donc le premier équipement à traiter sérieusement, avant même le logiciel.",
    sections: [
      {
        h2: "Le problème : un réseau d’agences construit par empilement",
        paras: [
          "La plupart des réseaux d’agences se sont construits par couches : une box opérateur à l’ouverture, un switch non manageable quand les postes se sont multipliés, un routeur ajouté pour le VPN, une seconde box quand la direction s’est plainte des coupures. Personne n’a jamais redessiné l’ensemble.",
          "Le résultat est fragile : quand le lien tombe, le guichet s’arrête ; quand un poste est compromis, il atteint le serveur central ; et quand la direction demande pourquoi l’agence de Thiès rame, personne n’a de mesure à montrer.",
        ],
      },
      {
        h2: "Usage 1 — Deux opérateurs, une bascule invisible",
        paras: [
          "Le M1A gère deux liens WAN et bascule de l’un à l’autre selon la disponibilité réelle, pas selon l’état d’une interface. Une sonde vérifie que le chemin fonctionne de bout en bout ; quand il ne répond plus, le trafic part sur le second lien.",
          "Pour une agence, cela veut dire que la caisse continue de fonctionner pendant une coupure de l’opérateur principal. Les sessions applicatives en cours sont interrompues, mais le service reprend sans qu’un technicien se déplace.",
          "Le second lien n’a pas besoin d’être aussi rapide : il sert quelques heures par mois. C’est ce qui rend l’investissement supportable sur un réseau de dix ou vingt agences.",
        ],
      },
      {
        h2: "Usage 2 — Un tunnel par agence, et des profils par métier",
        paras: [
          "Chaque agence établit un tunnel IPsec vers le siège ou vers le datacenter. Le serveur central n’est jamais exposé sur internet : il n’est joignable que depuis les tunnels, et seulement sur les ports métier.",
          "Sur le routeur, on distingue les profils : le guichet accède à l’application de caisse, le chargé de crédit au dossier, la direction à la supervision. Ce n’est pas du contrôle pour le plaisir : c’est ce qui limite les dégâts le jour où un poste d’agence est infecté.",
        ],
      },
      {
        h2: "Usage 3 — Le guichet prioritaire, la sauvegarde patiente",
        paras: [
          "Les remontées de sauvegarde, les mises à jour et les transferts de fichiers n’ont pas la même urgence qu’un encaissement. La qualité de service hiérarchique du M1A permet de réserver une part du lien aux flux critiques et de laisser le reste se partager le surplus.",
          "En pratique, on évite le scénario classique : la sauvegarde nocturne qui déborde sur l’ouverture, et le premier client de la journée qui attend devant un écran figé.",
        ],
      },
      {
        h2: "Usage 4 — Un point de collecte pour la supervision",
        paras: [
          "Le routeur expose des compteurs par interface, par tunnel et par classe de service. Ces métriques alimentent une supervision centralisée : on voit quelles agences sont dégradées avant que le téléphone ne sonne.",
          "C’est aussi la preuve à opposer à un opérateur : quand la direction conteste une facture ou un niveau de service, une courbe de disponibilité datée vaut mieux qu’une impression.",
        ],
      },
      {
        h2: "Ce que le M1A ne règle pas dans une banque",
        paras: [
          "Il ne fait pas de protection avancée. Un réseau bancaire a besoin d’un pare-feu avec politique écrite, d’une journalisation conservée et, selon les exigences du régulateur, de dispositifs que ce routeur ne fournit pas. Le M1A transporte et filtre par listes d’accès ; il ne remplace ni une UTM sous abonnement, ni un dispositif de détection.",
          "Il ne remplace pas non plus le contrôle d’accès applicatif : l’authentification des conseillers, les habilitations et la traçabilité des opérations se jouent dans le logiciel métier, pas dans le routeur.",
        ],
      },
      {
        h2: "Ce qu’il faut prévoir avant de déployer",
        paras: [
          "Un plan d’adressage par agence, deux liens chez deux opérateurs distincts, une alimentation protégée par onduleur, et un accès de secours pour administrer le routeur si le VPN tombe. Ce dernier point est souvent oublié : un routeur mal configuré peut couper l’accès à distance qui servirait à le réparer.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il deux abonnements internet dans chaque agence ?",
        a: "C’est la condition de la continuité. Les deux liens peuvent être de débits différents, et le second peut être un lien 4G pour les agences secondaires. Sans second lien, le routeur ne peut pas basculer.",
      },
      {
        q: "Le routeur remplace-t-il le pare-feu de l’agence ?",
        a: "Non. Il filtre par listes d’accès et chiffre les tunnels, mais il n’a pas de fonctions de sécurité avancées. Dans une banque, le pare-feu reste nécessaire, avec une politique documentée.",
      },
      {
        q: "Combien de temps prend le basculement ?",
        a: "Quelques secondes pour la reprise du trafic. Les sessions en cours sont coupées, les transactions doivent être relancées par l’application, ce qui suppose que le logiciel métier sait gérer une coupure.",
      },
      {
        q: "Peut-on garder les adresses IP existantes ?",
        a: "Oui, le plan d’adressage interne est indépendant de l’opérateur. C’est même l’un des intérêts : changer de fournisseur d’accès ne change pas les adresses des postes.",
      },
      {
        q: "Est-ce adapté à une petite structure de deux agences ?",
        a: "Techniquement oui, économiquement c’est à arbitrer : pour deux sites, un routeur plus simple peut suffire. Le M1A se justifie à partir du moment où la continuité et le nombre de tunnels deviennent critiques.",
      },
    ],
    cta: "Vous avez des agences à interconnecter avec une vraie continuité ?",
  },

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

  "/article/m1a-hotel-residence-wifi-invites": {
    kicker: "Hôtellerie",
    title: "M1A dans un hôtel : le Wi-Fi client séparé, et une réception qui ne tombe jamais",
    description:
      "Wi-Fi invités, caisse, caméras et accès staff : comment un NetEngine 8000 M1A sépare les réseaux d’un hôtel ou d’une résidence et garantit le débit promis aux clients.",
    product: "/boutique/routeur-netengine-8000-m1a",
    productLabel: "NetEngine 8000 M1A",
    intro:
      "Un hôtel vend du confort, et depuis quelques années le Wi-Fi fait partie de la note. Une chambre où la connexion rame se retrouve dans les avis, et un avis négatif coûte plus cher qu’un routeur. Le problème n’est presque jamais la puissance de l’abonnement : c’est que le réseau des clients, celui de la réception et celui des caméras sont mélangés.",
    sections: [
      {
        h2: "Le problème : le Wi-Fi client et la caisse sur le même réseau",
        paras: [
          "Dans beaucoup d’établissements, la borne Wi-Fi est branchée sur le même switch que la caisse et le poste de la réception. Un client qui télécharge un film partage la bande passante avec le terminal de paiement.",
          "Pire, le réseau invité donne parfois accès au réseau interne : un client curieux peut voir les partages de la réception, ou l’interface d’administration des caméras.",
        ],
      },
      {
        h2: "Usage 1 — Un réseau invité réellement isolé",
        paras: [
          "Le M1A crée un VLAN dédié aux clients, avec pour seule destination internet. Aucune route vers la réception, la caisse ou les caméras. C’est une règle explicite, pas une option laissée au hasard de la configuration.",
          "C’est aussi ce qui permet de répondre sereinement à un client qui demande « est-ce que je peux accéder à mon NAS depuis la chambre ? » : non, et c’est volontaire.",
        ],
      },
      {
        h2: "Usage 2 — Le débit promis, tenu",
        paras: [
          "La qualité de service permet de plafonner le débit par client ou par borne, et de réserver une part du lien aux flux de l’établissement : caisse, terminal de paiement, téléphonie, caméras.",
          "Résultat concret : un client qui regarde une vidéo ne fait plus tomber l’encaissement. Et quand le lien est saturé le soir, la réception reste prioritaire.",
        ],
      },
      {
        h2: "Usage 3 — Deux liens pour ne pas perdre la caisse",
        paras: [
          "Un hôtel sans connexion ne peut plus encaisser par carte ni enregistrer un client dans le système. Le second lien, basculé automatiquement, couvre la panne de l’opérateur principal.",
          "La bascule se fait en quelques secondes. Les réservations en cours sont interrompues, mais la réception reprend son travail sans attendre un technicien.",
        ],
      },
      {
        h2: "Usage 4 — Accès pour le personnel et la maintenance",
        paras: [
          "Le gérant veut consulter les caméras depuis chez lui, le technicien doit pouvoir intervenir à distance, le prestataire de ménage n’a besoin de rien. Trois profils, trois règles, un seul équipement.",
          "Les accès sont nominatifs et révocables : le jour où un salarié part, son accès disparaît sans qu’on change tous les mots de passe.",
        ],
      },
      {
        h2: "Ce que le M1A ne fait pas dans un hôtel",
        paras: [
          "Il n’émet pas de Wi-Fi et ne gère pas de portail captif. Les bornes, la page d’accueil et les codes de chambre sont des équipements et logiciels séparés.",
          "Il ne remplace pas un système de gestion hôtelière, ni la téléphonie, ni la télévision. Il fournit le réseau sur lequel ces services s’appuient — ce qui est déjà beaucoup quand il est bien fait.",
          "Enfin, il ne règle pas la couverture : un routeur ne compense pas des bornes mal placées ou un bâtiment aux murs épais.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il changer les bornes Wi-Fi existantes ?",
        a: "Pas forcément. On commence par mesurer la couverture et vérifier que les bornes supportent plusieurs réseaux (SSID) et le VLAN. Si elles ne le font pas, elles devront être remplacées.",
      },
      {
        q: "Peut-on facturer le Wi-Fi aux clients ?",
        a: "Oui, avec un portail captif et un système de codes. Ce n’est pas le routeur qui facture : il fournit le réseau et les règles d’accès.",
      },
      {
        q: "Les caméras doivent-elles être sur un réseau séparé ?",
        a: "Oui. Les caméras et l’enregistreur n’ont aucune raison de communiquer avec les clients ou la réception, sauf pour la visualisation par le gérant, qui passe par une règle explicite.",
      },
      {
        q: "Que se passe-t-il en cas de coupure internet ?",
        a: "La caisse et la réception basculent sur le second lien si l’établissement en a un. Sans second lien, le routeur ne peut pas inventer de la connectivité : il alerte et journalise l’incident.",
      },
      {
        q: "Est-ce adapté à une résidence meublée de dix appartements ?",
        a: "Oui, et c’est même un bon cas d’usage : un réseau invité isolé, un accès gestionnaire, et un débit maîtrisé par appartement si les bornes le permettent.",
      },
    ],
    cta: "Vous équipez un hôtel, une résidence ou un espace de coworking ?",
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

  "/article/m1a-ong-bureaux-terrain": {
    kicker: "ONG",
    title: "M1A pour une ONG : relier des bureaux terrain sans dépendre d’un seul opérateur",
    description:
      "Bureaux régionaux, missions, liens instables : comment un NetEngine 8000 M1A donne à une ONG un réseau commun entre siège et terrain, avec des liens différents selon les sites.",
    product: "/boutique/routeur-netengine-8000-m1a",
    productLabel: "NetEngine 8000 M1A",
    intro:
      "Une ONG a un problème que peu d’entreprises connaissent : ses sites n’ont pas les mêmes liens. Le siège a la fibre, le bureau régional a un lien radio correct, la base terrain a une 4G capricieuse, et certains jours rien du tout. Le réseau doit accepter cette hétérogénéité sans imposer une architecture unique.",
    sections: [
      {
        h2: "Le problème : chaque bureau invente sa solution",
        paras: [
          "Quand il n’y a pas de standard, chaque bureau achète son routeur, crée ses partages et bricole ses accès. Le siège finit avec autant de configurations que de sites, et personne ne sait qui peut accéder à quoi.",
          "Le second problème est la rotation : les équipes changent souvent, et les accès ouverts pour un volontaire restent actifs longtemps après son départ.",
        ],
      },
      {
        h2: "Usage 1 — Un modèle unique, des liens adaptés",
        paras: [
          "Le même routeur peut être déployé au siège et dans les bureaux, avec des configurations adaptées au lien disponible : fibre, radio, 4G, voire satellite en dernier recours.",
          "Le tunnel IPsec s’établit dès qu’un lien existe. Sur une 4G instable, il se rétablit automatiquement quand la connexion revient, sans intervention locale.",
        ],
      },
      {
        h2: "Usage 2 — Accès aux applications de gestion de projet",
        paras: [
          "Les équipes ont besoin des mêmes outils partout : suivi de projet, collecte de données, comptabilité, rapports bailleurs. Un réseau privé entre les sites évite de publier ces applications sur internet.",
          "Pour les bases terrain sans lien stable, la synchronisation se fait par lots, et le routeur priorise ces remontées quand le lien est disponible.",
        ],
      },
      {
        h2: "Usage 3 — Séparer les consultants et les partenaires",
        paras: [
          "Une ONG travaille avec des consultants, des partenaires locaux, parfois des bailleurs qui veulent accéder à des rapports. Un réseau invité isolé et des accès nominatifs évitent d’ouvrir le système d’information à tout le monde.",
        ],
      },
      {
        h2: "Usage 4 — Un inventaire réseau qui survit aux départs",
        paras: [
          "Comptes nominatifs, tunnels documentés, plan d’adressage écrit : le jour où le responsable informatique quitte la structure, le successeur trouve un réseau compréhensible. C’est une considération très concrète dans les organisations où les équipes tournent.",
        ],
      },
      {
        h2: "Ce que le M1A ne fait pas pour une ONG",
        paras: [
          "Il ne rend pas un lien satellite rapide. Sur certains sites, la contrainte est physique, et aucun équipement ne compense une latence de six cents millisecondes.",
          "Il ne protège pas les postes, ne gère pas les téléphones, ne remplace pas une sauvegarde. Et il ne dispense pas d’une politique d’accès écrite : sans elle, le meilleur routeur reste une boîte bien configurée autour d’un désordre.",
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on mélanger fibre, 4G et satellite sur le même réseau ?",
        a: "Oui, chaque site utilise le lien dont il dispose et établit son tunnel. Les performances diffèrent, la logique de réseau reste la même.",
      },
      {
        q: "Comment gérer un site sans technicien sur place ?",
        a: "Configuration standardisée, accès distant sécurisé, et procédure de remise en état simple : débrancher, rebrancher, vérifier les diodes. C’est ce qui évite d’envoyer quelqu’un à six heures de route.",
      },
      {
        q: "Est-ce que cela remplace un accès VPN par utilisateur ?",
        a: "Non, les deux sont complémentaires : le tunnel relie les sites, le VPN par utilisateur donne accès aux personnes en déplacement.",
      },
      {
        q: "Quel budget prévoir pour un petit bureau ?",
        a: "Cela dépend du lien et du nombre d’équipements. Le routeur reste la partie la plus chère : pour un bureau de trois personnes, un équipement plus simple suffit souvent.",
      },
      {
        q: "Peut-on l’utiliser pour des formations internes ?",
        a: "Oui, et c’est un bon usage : le routeur sert de banc d’essai pour former les équipes locales aux bases du réseau, sans toucher à la production.",
      },
    ],
    cta: "Vous reliez un siège et des bureaux terrain ?",
  },

  "/article/m1a-administration-interconnexion-sites": {
    kicker: "Secteur public",
    title: "M1A dans une administration : interconnecter des sites sans exposer les données",
    description:
      "Siège, directions régionales, services déconcentrés : comment un NetEngine 8000 M1A relie des sites publics avec des règles d’accès claires et une journalisation exploitable.",
    product: "/boutique/routeur-netengine-8000-m1a",
    productLabel: "NetEngine 8000 M1A",
    intro:
      "Une administration ne choisit pas son réseau comme une entreprise : elle hérite de sites, de marchés et d’équipements hétérogènes. Le siège a souvent un réseau correct, les directions régionales moins, et les services déconcentrés parfois seulement une connexion partagée avec une autre structure. L’enjeu est de faire tenir cet ensemble sans exposer les dossiers.",
    sections: [
      {
        h2: "Le problème : des sites reliés par des pratiques, pas par une architecture",
        paras: [
          "Quand chaque direction régionale gère son accès à sa manière, le siège se retrouve avec des accès non tracés, des partages ouverts et des sauvegardes locales que personne ne vérifie.",
          "Le second écueil est la dépendance à un prestataire unique : si l’opérateur ou l’intégrateur disparaît, la documentation aussi.",
        ],
      },
      {
        h2: "Usage 1 — Un tunnel par site, un plan d’adressage commun",
        paras: [
          "Chaque direction régionale reçoit un tunnel vers le siège ou vers le centre de données. Les adresses internes suivent un plan unique, ce qui permet de savoir où se trouve un poste à partir de son adresse.",
          "L’intérêt n’est pas seulement technique : c’est ce qui rend possible un inventaire et une politique d’accès homogènes.",
        ],
      },
      {
        h2: "Usage 2 — Accès aux applications métier, rien de plus",
        paras: [
          "Un agent régional a besoin de l’application de gestion, pas du serveur de fichiers du siège ni de l’annuaire complet. Les règles du routeur limitent chaque site aux flux nécessaires.",
          "C’est la traduction technique du principe de moindre privilège, et c’est aussi ce qui limite la casse en cas d’intrusion sur un poste régional.",
        ],
      },
      {
        h2: "Usage 3 — Journalisation et preuve",
        paras: [
          "Le routeur conserve l’historique des connexions entre sites et des changements de configuration. En cas d’incident, on peut reconstituer ce qui s’est passé, quand, et depuis quel site.",
          "Cette traçabilité est souvent une exigence interne autant qu’une bonne pratique : elle permet de répondre à un audit sans reconstituer l’histoire de mémoire.",
        ],
      },
      {
        h2: "Usage 4 — Continuité sur les sites critiques",
        paras: [
          "Sur les sites où le service public ne peut pas s’arrêter — état civil, paierie, plateau de prise en charge —, un second lien et une bascule automatique évitent la file d’attente devant un guichet fermé.",
        ],
      },
      {
        h2: "Ce que le M1A ne fait pas dans le public",
        paras: [
          "Il ne vaut pas conformité réglementaire. Les exigences de sécurité applicables à une administration dépendent des textes et des autorités de contrôle : un routeur ne les satisfait pas à lui seul.",
          "Il ne remplace ni un pare-feu, ni une solution de journalisation centralisée, ni un dispositif de sauvegarde. Il fournit le transport et une partie de la traçabilité.",
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on réutiliser les équipements existants ?",
        a: "Souvent oui : le routeur s’insère dans l’existant et remplace la brique d’interconnexion. Les switchs et bornes peuvent rester s’ils tiennent la charge et supportent les VLAN.",
      },
      {
        q: "Comment gérer les marchés publics et la réversibilité ?",
        a: "En exigeant la documentation, les configurations et les accès dans le marché. Techniquement, le routeur facilite la réversibilité : une configuration exportée se rejoue sur un équipement équivalent.",
      },
      {
        q: "Les agents peuvent-ils travailler à distance ?",
        a: "Oui, avec des accès nominatifs et un VPN par utilisateur. C’est un choix d’organisation autant que de technique, et il doit être encadré par une politique écrite.",
      },
      {
        q: "Que se passe-t-il si un site tombe ?",
        a: "Le siège continue de fonctionner ; le site isolé perd l’accès aux applications centrales. La bascule sur un second lien couvre les sites critiques.",
      },
      {
        q: "Est-ce que cela convient à une collectivité locale ?",
        a: "Oui, à partir de plusieurs sites à relier. Pour une mairie unique, un équipement plus simple suffit.",
      },
    ],
    cta: "Vous devez interconnecter des sites publics ou déconcentrés ?",
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

  "/article/m1a-immeuble-partage-internet": {
    kicker: "Immobilier",
    title: "M1A dans un immeuble : partager internet équitablement entre locataires",
    description:
      "Un seul abonnement, plusieurs locataires : comment un NetEngine 8000 M1A garantit un débit par lot, isole les réseaux et rend le partage facturable.",
    product: "/boutique/routeur-netengine-8000-m1a",
    productLabel: "NetEngine 8000 M1A",
    intro:
      "Partager une connexion entre plusieurs locataires paraît simple jusqu’au premier conflit : celui qui télécharge en permanence, celui qui travaille en visioconférence, et celui qui paie autant que les autres pour un débit divisé par cinq. Sans règle technique, la discussion revient chaque mois.",
    sections: [
      {
        h2: "Le problème : un routeur domestique pour vingt appartements",
        paras: [
          "Un immeuble équipé d’un routeur grand public partage une seule file d’attente. Le premier arrivé prend la bande passante, et personne ne peut dire qui consomme quoi.",
          "Le second problème est la sécurité : tous les appartements sont sur le même réseau. Un locataire peut voir les appareils des autres, parfois leurs partages.",
        ],
      },
      {
        h2: "Usage 1 — Un réseau par lot, une seule sortie",
        paras: [
          "Le M1A crée un VLAN par appartement ou par étage, avec une sortie internet commune. Chaque locataire conserve son propre réseau, ses objets connectés et sa confidentialité.",
          "Le gestionnaire garde un point de contrôle unique : une seule box à superviser, un seul abonnement, et la possibilité de couper un lot sans toucher aux autres.",
        ],
      },
      {
        h2: "Usage 2 — Un débit garanti par lot",
        paras: [
          "Le partage équitable n’est pas une intention, c’est une configuration : un plafond par lot, une priorité pour les usages temps réel, et un surplus redistribué quand la bande est libre.",
          "C’est ce qui permet d’écrire dans le bail « 20 Mbit/s garantis » et de le tenir, au lieu de promettre « internet haut débit » sans engagement.",
        ],
      },
      {
        h2: "Usage 3 — Facturer le service proprement",
        paras: [
          "Chaque lot correspond à une interface et à des compteurs. On peut mesurer la consommation, la facturer au forfait ou l’inclure dans les charges, avec une base chiffrée plutôt qu’une répartition au prorata des appartements.",
          "Attention à la limite légale : revendre de l’accès internet à des tiers contre paiement est une activité régulée dans plusieurs pays, dont le Sénégal. Le montage doit être vérifié avant de facturer, l’exploitant de l’immeuble n’étant pas nécessairement autorisé à se comporter en fournisseur d’accès.",
        ],
      },
      {
        h2: "Usage 4 — Caméras et parties communes séparées",
        paras: [
          "Caméras, interphone, badgeuse et éclairage connecté vivent sur un réseau technique distinct. Un locataire ne peut pas les atteindre, et une caméra compromise n’ouvre pas la porte aux appartements.",
        ],
      },
      {
        h2: "Ce que le M1A ne fait pas dans un immeuble",
        paras: [
          "Il n’émet pas de Wi-Fi. Les appartements ont besoin de leurs propres bornes, ou d’un réseau câblé jusqu’à chaque lot.",
          "Il ne gère pas la facturation locative : il fournit des compteurs, pas un système de quittancement.",
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on garantir un débit à chaque appartement ?",
        a: "Oui, jusqu’à la capacité totale du lien. Si dix lots exigent 20 Mbit/s simultanément, il faut un lien de 200 Mbit/s : le routeur répartit, il n’ajoute pas de bande passante.",
      },
      {
        q: "Faut-il un câblage neuf ?",
        a: "Pas toujours : si l’immeuble a un câblage correct et un local technique, on peut réutiliser l’existant. Le Wi-Fi de chaque lot reste à la charge du locataire ou du bailleur.",
      },
      {
        q: "Est-ce légal de revendre l’internet aux locataires ?",
        a: "C’est une question réglementaire, pas technique. Au Sénégal, la fourniture d’accès à des tiers contre paiement relève d’une autorisation. Faites valider le montage avant de facturer.",
      },
      {
        q: "Comment gérer un locataire qui abuse ?",
        a: "Le plafond par lot rend l’abus impossible : le locataire sature son propre débit, pas celui des autres. C’est la meilleure réponse à ce conflit.",
      },
      {
        q: "Peut-on ajouter des lots plus tard ?",
        a: "Oui, un VLAN et un profil de débit s’ajoutent sans interrompre les autres. Le routeur tient plusieurs dizaines de lots.",
      },
    ],
    cta: "Vous gérez un immeuble ou une résidence à équiper ?",
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

  "/article/m1a-cabinet-avocats-reseau": {
    kicker: "Avocats",
    title: "M1A dans un cabinet d’avocats : dossiers confidentiels, avocats en déplacement",
    description:
      "Secret professionnel, dossiers clients, avocats au palais et stagiaires : comment un NetEngine 8000 M1A cloisonne le réseau d’un cabinet d’avocats sans compliquer le travail.",
    product: "/boutique/routeur-netengine-8000-m1a",
    productLabel: "NetEngine 8000 M1A",
    intro:
      "Un cabinet d’avocats héberge des informations que personne d’autre ne doit voir : dossiers en cours, pièces de procédure, correspondances, négociations. Le risque n’est pas théorique — il vient rarement d’un piratage sophistiqué, et presque toujours d’un accès trop large : le stagiaire qui voit tout, la salle de réunion en Wi-Fi ouvert, la clé USB qui circule, ou le serveur exposé pour permettre le télétravail.",
    sections: [
      {
        h2: "Le problème : un plateau partagé et un seul réseau",
        paras: [
          "Beaucoup de cabinets partagent leurs locaux : plusieurs avocats, parfois plusieurs structures, un secrétariat commun, une connexion unique. Tout le monde arrive sur le même réseau, et le serveur de dossiers est visible de chaque poste.",
          "Le second point faible est le déplacement. Un avocat qui doit consulter une pièce depuis le palais ou de chez lui finit souvent par demander qu’on « ouvre un accès » — ce qui veut dire exposer un service sur internet, parfois sans mot de passe solide.",
        ],
      },
      {
        h2: "Usage 1 — Un accès distant nominatif, révocable",
        paras: [
          "Le M1A établit un tunnel chiffré pour chaque avocat qui travaille hors du cabinet. L’accès au serveur de dossiers passe par ce tunnel, jamais par un port ouvert sur internet.",
          "Ce que ça change concrètement : quand un collaborateur quitte le cabinet, on désactive son compte et l’accès disparaît. On ne change pas le mot de passe du serveur pour tout le monde un vendredi soir.",
        ],
      },
      {
        h2: "Usage 2 — Séparer les structures qui partagent le plateau",
        paras: [
          "Quand deux cabinets ou deux associés partagent une connexion, le routeur crée un réseau distinct par structure, avec des règles entre les deux : accès commun à l’imprimante et à internet, aucun accès aux dossiers de l’autre.",
          "C’est la traduction technique du secret professionnel : le réseau ne décide pas de la déontologie, mais il empêche les fuites accidentelles entre confrères qui partagent les mêmes murs.",
        ],
      },
      {
        h2: "Usage 3 — Le Wi-Fi des clients, séparé du reste",
        paras: [
          "Une salle de réunion où les clients se connectent ne doit pas donner accès au serveur de dossiers, ni à l’imprimante du secrétariat, ni aux caméras. Un réseau invité isolé, limité à internet, suffit.",
          "C’est aussi un argument d’image : un cabinet qui annonce un Wi-Fi client séparé montre qu’il prend la confidentialité au sérieux.",
        ],
      },
      {
        h2: "Usage 4 — La continuité au moment où elle compte",
        paras: [
          "Les délais de procédure ne se suspendent pas pendant une panne internet. Un second lien, basculé automatiquement, permet de consulter une pièce ou de déposer un document pendant une coupure de l’opérateur principal.",
          "La bascule prend quelques secondes ; les sessions en cours sont interrompues, ce qui suppose de rouvrir le document — un désagrément, pas un arrêt.",
        ],
      },
      {
        h2: "Ce que le M1A ne fait pas dans un cabinet",
        paras: [
          "Il ne chiffre pas les disques du serveur et ne gère pas les droits d’accès aux dossiers : cela se joue dans le système de gestion documentaire et dans les comptes utilisateurs.",
          "Il ne remplace ni une sauvegarde, ni une politique de mots de passe, ni la sensibilisation aux pièces jointes. Un dossier peut fuir par un mail, sans qu’aucun équipement réseau n’y puisse rien.",
          "Enfin, il ne vaut pas conformité déontologique : le secret professionnel reste une obligation personnelle de l’avocat, que le réseau aide à respecter mais ne satisfait pas à sa place.",
        ],
      },
      {
        h2: "Ce qu’il faut prévoir",
        paras: [
          "Un plan d’adressage simple, un compte par personne — jamais un compte partagé « cabinet » —, une sauvegarde testée du serveur de dossiers, et un onduleur. Un cabinet de cinq à quinze personnes se déploie en une journée.",
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
        a: "Oui, avec un réseau par structure et des règles strictes entre les deux. C’est un montage courant et le routeur est précisément l’équipement qui le rend propre.",
      },
      {
        q: "Les avocats peuvent-ils travailler depuis chez eux ?",
        a: "Oui, par tunnel nominatif. L’accès est limité aux dossiers utiles et se révoque immédiatement en cas de départ.",
      },
      {
        q: "Faut-il un second lien internet ?",
        a: "C’est recommandé dès que le cabinet dépend d’un serveur de dossiers ou de la messagerie pour tenir des délais. Le second lien peut être plus lent : il sert quelques heures par mois.",
      },
      {
        q: "Est-ce adapté à un avocat seul ?",
        a: "Un avocat seul a rarement besoin de ce niveau d’équipement. Un routeur plus simple et une sauvegarde correcte suffisent ; le M1A devient pertinent dès qu’il y a plusieurs collaborateurs et un serveur.",
      },
    ],
    cta: "Vous équipez un cabinet d’avocats ?",
  },

  "/article/m1a-etude-notariale-reseau": {
    kicker: "Notariat",
    title: "M1A dans une étude notariale : accueil du public, minutaire et continuité",
    description:
      "Une étude reçoit du public et conserve des actes : comment un NetEngine 8000 M1A sépare l’accueil du réseau métier et évite qu’une panne reporte une signature.",
    product: "/boutique/routeur-netengine-8000-m1a",
    productLabel: "NetEngine 8000 M1A",
    intro:
      "Une étude notariale a deux contraintes que peu d’organisations cumulent : elle reçoit du public toute la journée, et elle conserve des actes dont la perte ou l’indisponibilité n’est pas rattrapable. Le réseau doit donc à la fois accueillir des inconnus et protéger un patrimoine documentaire.",
    sections: [
      {
        h2: "Le problème : la salle d’attente sur le même réseau que le minutaire",
        paras: [
          "Les clients attendent, consultent leur téléphone, demandent le Wi-Fi. Dans beaucoup d’études, ce Wi-Fi est celui du bureau : il donne accès au réseau où se trouvent les actes, les dossiers et l’imprimante qui imprime les expéditions.",
          "Le second point de fragilité est l’organisation interne : clercs, formalistes, comptabilité et direction partagent souvent les mêmes accès, alors qu’ils n’ont pas besoin de voir les mêmes choses.",
        ],
      },
      {
        h2: "Usage 1 — Un réseau d’accueil réellement séparé",
        paras: [
          "Le M1A isole le Wi-Fi des clients sur un réseau dédié, avec internet pour seul accès. Aucune route vers les serveurs, les imprimantes ou les scanners de l’étude.",
          "C’est la mesure la plus simple à expliquer à un client qui demande le code Wi-Fi, et la plus efficace contre un incident : un téléphone infecté dans la salle d’attente ne peut pas atteindre le minutaire.",
        ],
      },
      {
        h2: "Usage 2 — Des accès par fonction, pas par commodité",
        paras: [
          "Chaque service accède à ce dont il a besoin : l’accueil à la prise de rendez-vous, les clercs aux dossiers en préparation, la comptabilité à ses outils, la direction à l’ensemble. Les règles sont écrites et datées.",
          "L’intérêt n’est pas administratif : c’est ce qui limite les dégâts le jour où un poste est compromis ou qu’un mot de passe circule.",
        ],
      },
      {
        h2: "Usage 3 — Le rendez-vous de signature ne saute pas",
        paras: [
          "Un client s’est déplacé, un confrère est présent, l’acte doit être finalisé : une coupure internet à ce moment-là n’est pas acceptable. Le second lien et la bascule automatique couvrent la panne de l’opérateur principal.",
          "La bascule ne protège pas de tout : si l’application est hébergée chez un prestataire inaccessible, le routeur ne peut pas la remplacer. C’est pourquoi nous demandons toujours où sont hébergées les applications critiques avant de promettre une continuité.",
        ],
      },
      {
        h2: "Usage 4 — Une annexe ou un second office",
        paras: [
          "Certaines études ont une annexe, un dépôt ou un second office dans une autre ville. Un tunnel entre les deux permet de consulter les dossiers sans les dupliquer, ou de partager un même système de gestion.",
          "Quand les deux bâtiments sont proches et en visibilité directe, un faisceau radio remplace le tunnel : le lien ne dépend plus d’internet.",
        ],
      },
      {
        h2: "Ce que le M1A ne fait pas dans une étude",
        paras: [
          "Il ne conserve pas vos actes. La conservation, l’archivage et la sauvegarde relèvent d’un serveur, d’une procédure et de copies hors site — pas d’un routeur. Un acte perdu ne se reconstitue pas avec un équipement réseau.",
          "Il ne remplace pas un coffre-fort numérique ni un dispositif de signature électronique. Il transporte et cloisonne ; il ne scelle rien.",
          "Il ne vaut pas conformité aux obligations professionnelles du notariat : celles-ci dépendent des textes applicables et de l’organisation interne de l’étude.",
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on donner le Wi-Fi aux clients sans risque ?",
        a: "Oui, sur un réseau invité isolé qui ne donne accès qu’à internet. C’est un réglage explicite : sans lui, un client connecté peut voir les équipements du bureau.",
      },
      {
        q: "Les clercs peuvent-ils travailler à distance ?",
        a: "Oui, avec un accès nominatif limité aux dossiers en préparation. Les actes authentiques et les pièces sensibles peuvent rester hors de portée à distance, selon l’organisation retenue.",
      },
      {
        q: "Que se passe-t-il si internet tombe pendant une signature ?",
        a: "Le second lien prend le relais en quelques secondes si l’étude en a un. Sans second lien, seules les applications hébergées localement continuent de fonctionner.",
      },
      {
        q: "Faut-il un routeur pour une petite étude ?",
        a: "Dès qu’il y a un serveur de dossiers, un accueil du public et plusieurs postes, la séparation devient utile. Pour une étude de deux personnes sans serveur, un équipement plus simple suffit.",
      },
      {
        q: "Est-ce que cela sauvegarde les actes ?",
        a: "Non, et il faut le dire clairement. La sauvegarde est un sujet distinct, avec des copies testées et une copie hors site. Le routeur ne fait que transporter.",
      },
    ],
    cta: "Vous équipez une étude notariale ?",
  },

  "/article/m1a-cabinet-comptable-reseau": {
    kicker: "Comptabilité",
    title: "M1A dans un cabinet comptable : tenir la période fiscale sans saturer le réseau",
    description:
      "Télétransmissions, dépôt de pièces, collaborateurs en clientèle : comment un NetEngine 8000 M1A priorise les flux d’un cabinet comptable pendant les échéances.",
    product: "/boutique/routeur-netengine-8000-m1a",
    productLabel: "NetEngine 8000 M1A",
    intro:
      "Un cabinet comptable vit à deux vitesses : des semaines calmes, et des périodes où tout doit être déposé en même temps. Le réseau n’est pas un sujet le reste de l’année ; il devient critique le jour où quinze collaborateurs télétransmettent et où le portail clients reçoit des dizaines de pièces.",
    sections: [
      {
        h2: "Le problème : la même bande passante pour tout",
        paras: [
          "Dans un cabinet, le trafic n’est pas homogène : télétransmissions, téléchargement de pièces clients, sauvegardes, visioconférences avec les clients, messagerie. Sans priorité, le plus volumineux gagne — et ce n’est jamais la déclaration à déposer avant minuit.",
          "Le second problème est l’accès aux dossiers par portefeuille : un collaborateur ne devrait pas pouvoir consulter les dossiers d’un autre, alors que le serveur est souvent ouvert à tous.",
        ],
      },
      {
        h2: "Usage 1 — Priorité aux télétransmissions",
        paras: [
          "La qualité de service réserve une bande aux flux de déclaration et de messagerie, et laisse les téléchargements et sauvegardes utiliser le reste. En période d’échéance, cela évite qu’un dépôt volumineux bloque une transmission urgente.",
          "C’est un réglage qui ne coûte rien en temps normal et qui sauve une journée deux fois par mois.",
        ],
      },
      {
        h2: "Usage 2 — Séparer les portefeuilles au niveau réseau",
        paras: [
          "Le routeur peut isoler des groupes de travail sur des réseaux distincts, avec des règles d’accès croisées limitées. Cela ne remplace pas les droits du logiciel comptable, mais cela empêche un poste compromis d’un pôle d’atteindre les dossiers d’un autre.",
          "Pour les cabinets qui hébergent plusieurs entités — un cabinet principal et une structure de conseil, par exemple —, la séparation évite les mélanges.",
        ],
      },
      {
        h2: "Usage 3 — Collaborateurs en clientèle",
        paras: [
          "Un collaborateur chez un client doit pouvoir consulter une pièce ou valider un document. Un tunnel nominatif remplace les clés USB et les envois par messagerie personnelle, qui sont les deux premières causes de fuite de données dans les cabinets.",
        ],
      },
      {
        h2: "Usage 4 — L’accueil des clients qui déposent des pièces",
        paras: [
          "Un client qui vient déposer des justificatifs a parfois besoin d’une connexion. Un réseau invité isolé, limité à internet, évite de lui donner accès au réseau du cabinet.",
        ],
      },
      {
        h2: "Ce que le M1A ne fait pas dans un cabinet comptable",
        paras: [
          "Il ne remplace pas la GED, ni le contrôle de cohérence, ni la piste d’audit : ces fonctions sont dans le logiciel métier.",
          "Il ne garantit pas la conservation légale des documents. Les durées de conservation et les modalités d’archivage relèvent des obligations professionnelles et fiscales, pas de l’équipement réseau.",
          "Il ne protège pas contre un rançongiciel entré par une pièce jointe : la sauvegarde testée et la segmentation restent les deux mesures qui limitent la casse.",
        ],
      },
      {
        h2: "Ce qu’il faut prévoir",
        paras: [
          "Un débit montant suffisant — les télétransmissions et les dépôts de pièces montent autant qu’ils descendent —, un second lien si les échéances sont critiques, et une sauvegarde dont la restauration est testée avant la période fiscale, pas pendant.",
        ],
      },
    ],
    faq: [
      {
        q: "Quel débit faut-il pour un cabinet de dix personnes ?",
        a: "Le débit descendant compte moins que le montant : télétransmettre et déposer des pièces consomme de l’envoi. Un lien symétrique ou à fort débit montant change réellement le quotidien.",
      },
      {
        q: "Peut-on prioriser les déclarations ?",
        a: "Oui, par classe de service : les flux de déclaration et de messagerie passent devant les téléchargements et les sauvegardes. Cela se règle une fois et s’ajuste ensuite.",
      },
      {
        q: "Les collaborateurs peuvent-ils travailler depuis chez eux ?",
        a: "Oui, avec un accès nominatif. C’est aussi un moyen de supprimer les envois de fichiers par messagerie personnelle, qui échappent à toute traçabilité.",
      },
      {
        q: "Faut-il séparer les dossiers par collaborateur sur le réseau ?",
        a: "Le réseau peut isoler des groupes, mais la séparation fine par dossier se fait dans le logiciel et le système de fichiers. Les deux niveaux sont complémentaires.",
      },
      {
        q: "Est-ce utile hors période fiscale ?",
        a: "Oui, pour l’accès distant, la séparation des réseaux et la continuité. La priorité de flux est simplement moins visible le reste de l’année.",
      },
    ],
    cta: "Vous équipez un cabinet comptable ou de conseil ?",
  },
};
