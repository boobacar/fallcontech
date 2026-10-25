/**
 * Articles « matériel » : usage réel de chaque équipement du stock Fallcon Tech.
 * Chaque article décrit un problème concret, l’usage correspondant, et surtout
 * ce que l’équipement ne sait pas faire — pour ne jamais promettre au-delà
 * de ce que la machine et ses licences permettent.
 */

export const hardwareArticles = {
  "/article/netengine-8000-m1a-usages-reels": {
    kicker: "Routeur",
    title: "NetEngine 8000 M1A : quatre usages réels, et les problèmes qu’il résout",
    description:
      "VPN IPsec, routeur de bordure BGP, serveur d’accès PPPoE, cœur de campus : quatre usages concrets du NetEngine 8000 M1A, avec ce qu’il fait et ce qu’il ne fait pas.",
    product: "/boutique/routeur-netengine-8000-m1a",
    productLabel: "NetEngine 8000 M1A",
    intro:
      "Un routeur d’opérateur dans une entreprise, c’est d’abord une réponse à un symptôme : le réseau sature, la connexion tombe, les accès distants sont bricolés, ou chaque nouveau site impose une nouvelle boîte noire. Le NetEngine 8000 M1A est un châssis 1U de 16 ports 10GE, 12 ports GE optiques et 4 ports GE cuivre, avec un logiciel VRP complet : IPsec, BGP, MPLS, VXLAN, qualité de service hiérarchique. Voici quatre situations où il change réellement quelque chose, et trois où il ne sert à rien.",
    sections: [
      {
        h2: "Le problème de départ : la box de l’opérateur ne route pas, elle dépanne",
        paras: [
          "Une entreprise de vingt à deux cents personnes fonctionne presque toujours derrière l’équipement fourni par son fournisseur d’accès. Cet équipement fait trois choses : il donne une adresse aux postes, il traduit les adresses vers l’extérieur, et il diffuse du Wi-Fi. Il ne fait pas de politique de routage, il ne sait pas basculer proprement d’un lien à l’autre, il ne sait pas segmenter un réseau, et il ne tient pas la charge dès qu’on lui demande de chiffrer du trafic.",
          "Le M1A prend sa place, ou s’installe derrière lui. Ce n’est pas un boîtier plus puissant : c’est un routeur avec un système d’exploitation réseau, dans lequel on écrit des règles qui survivent aux changements d’opérateur et aux années.",
        ],
      },
      {
        h2: "Usage 1 — Passerelle VPN IPsec pour un siège et ses agences",
        paras: [
          "Le besoin est simple à énoncer : les collaborateurs doivent accéder au système d’information depuis chez eux ou depuis une agence, sans qu’un serveur soit exposé sur internet. La réponse classique — ouvrir un port et publier un bureau à distance — revient à laisser une porte ouverte avec une serrure dont tout le monde connaît le modèle.",
          "Le M1A chiffre le trafic en matériel : IPsec avec IKEv2, AES-256, SHA-256. Chaque agence établit un tunnel vers le siège, chaque télétravailleur obtient un accès nominatif. Ce que ça change en exploitation : le serveur n’est plus joignable depuis internet, il n’est joignable que depuis le tunnel ; la révocation d’un salarié se fait en désactivant un compte, pas en changeant un mot de passe partagé ; et le journal indique qui s’est connecté, quand, depuis quelle adresse.",
          "Sur un M1A, on parle de plusieurs centaines de tunnels simultanés sans que la machine bronche, parce que le chiffrement est fait par le matériel et non par le processeur principal. C’est la différence entre un routeur et un serveur Linux qui fait du strongSwan : à cinquante mégaoctets par seconde, le second s’écroule, le premier continue.",
        ],
      },
      {
        h2: "Usage 2 — Routeur de bordure BGP pour un hébergeur ou un FAI local",
        paras: [
          "Un fournisseur d’accès local, un hébergeur, ou une entreprise qui possède ses propres adresses IP publiques a besoin d’annoncer ses préfixes à ses transitaires. C’est le rôle de BGP. Et dès qu’on a deux transitaires, la question de la bascule devient vitale : si l’un tombe, le trafic doit passer par l’autre, sans intervention.",
          "Le M1A tient ce rôle : sessions BGP avec plusieurs opérateurs, annonce de préfixes, sélection de la meilleure route, et bascule automatique en cas de perte des sessions. Il sait aussi faire du filtrage de préfixes, ce qui évite les fuites de routes — l’erreur classique qui, en 2008 puis en 2021, a rendu des pans entiers d’internet injoignables pendant des heures.",
          "Concrètement, l’entreprise cesse de dépendre d’un seul lien : deux opérateurs, deux chemins, une seule adresse publique annoncée. Les utilisateurs ne voient rien, sauf le jour où l’un des deux liens meurt.",
        ],
      },
      {
        h2: "Usage 3 — Serveur d’accès multi-services : PPPoE, IPoE, LNS",
        paras: [
          "C’est l’usage le moins connu et le plus spécifique. Un opérateur qui fournit de l’accès à des abonnés — un immeuble, un campus, un quartier en fibre ou en radio — doit authentifier chaque abonné, lui attribuer une adresse, limiter son débit et le déconnecter proprement. Cette fonction s’appelle un serveur d’accès, ou BNG. Le M1A peut tenir ce rôle à petite échelle : terminaison de sessions PPPoE ou IPoE, authentification par serveur RADIUS, pool d’adresses, et qualité de service par abonné.",
          "Pour un opérateur local qui démarre, c’est la différence entre un réseau bricolé avec des routeurs domestiques et une offre dont on peut facturer les débits annoncés. Attention cependant : pour l’authentification, il faut un serveur RADIUS, et pour la facturation, un système de gestion. Le routeur ne fait pas la facturation.",
        ],
      },
      {
        h2: "Usage 4 — Cœur de réseau de campus, d’hôpital ou d’usine",
        paras: [
          "Un site de plusieurs bâtiments avec des flux séparés — bureaux, caméras, machines industrielles, Wi-Fi invités — a besoin d’un cœur qui tienne plusieurs segments sans mélanger les flux. Le M1A fait du VXLAN, du MPLS et de la qualité de service hiérarchique : on peut isoler chaque usage, garantir un débit aux applications critiques et laisser le reste se débrouiller.",
          "L’intérêt dans un hôpital ou une usine est mesurable : une imagerie médicale ou un automate ne doivent pas subir la congestion provoquée par une sauvegarde ou une vidéo. Avec une file de priorité stricte, le flux critique passe devant, toujours, même quand le lien est saturé.",
        ],
      },
      {
        h2: "Ce que le M1A ne fait pas",
        paras: [
          "Il ne remplace pas un pare-feu. Il filtre par listes d’accès, il chiffre, il journalise des flux — mais il n’a ni moteur antivirus réseau, ni prévention d’intrusion, ni analyse de réputation. Ceux qui vendent un routeur comme « pare-feu nouvelle génération » vendent une fonction que la machine n’exerce pas.",
          "Il ne fournit pas d’alimentation par câble réseau : aucun port PoE. Il ne fait pas de Wi-Fi. Il ne remplace pas un switch d’accès, même s’il commute. Et il est bruyant : c’est un équipement de salle technique, pas de bureau.",
          "Enfin, ses performances dépendent des licences activées. Un M1A sans licence de fonctions avancées route, mais ne fait pas de VXLAN ni de qualité de service avancée. C’est la première chose à vérifier sur une unité d’occasion : le relevé de licences, pas la référence du carton.",
        ],
      },
      {
        h2: "Comment le dimensionner sans se tromper",
        paras: [
          "Trois chiffres suffisent : le nombre de sites à relier, le débit agrégé à écouler, et le nombre d’utilisateurs simultanés sur les accès distants. Un site de cinquante personnes tient sur un lien de cent mégaoctets ; le M1A, avec ses 16 ports 10GE, est largement au-delà. On le choisit pour sa fiabilité et ses fonctions, pas pour sa capacité brute.",
          "Le second point est l’alimentation : une seule alimentation sur le modèle de base. Pour un site critique, il faut une seconde source, un onduleur, et un test de bascule. Un routeur redondant sans alimentation redondante est une illusion de disponibilité.",
        ],
      },
    ],
    faq: [
      {
        q: "Un M1A peut-il remplacer le routeur de mon opérateur ?",
        a: "Techniquement oui, si vous avez les informations de connexion (PPPoE, IP fixe, VLAN de collecte). En pratique, on l’installe souvent derrière l’équipement de l’opérateur, en coupure, pour garder la main sur le routage sans toucher au lien. Les deux montages fonctionnent ; le second évite une coupure de service.",
      },
      {
        q: "Faut-il une licence pour utiliser le VPN IPsec ?",
        a: "Sur les unités que nous vendons, les fonctions de base et l’IPsec sont actives, et le relevé de licences est fourni. Sur une autre unité, il faut vérifier le fichier de licence avant l’achat : c’est un contrôle de dix minutes qui évite une mauvaise surprise.",
      },
      {
        q: "Combien de tunnels VPN simultanés ?",
        a: "Plusieurs centaines sur ce modèle, très au-delà des besoins d’une entreprise. La limite pratique vient rarement du routeur : elle vient du débit du lien et du serveur d’authentification.",
      },
      {
        q: "Est-ce que ça consomme beaucoup d’électricité ?",
        a: "Comptez quelques centaines de watts selon la configuration et le trafic. C’est un équipement de salle technique : il suppose une climatisation correcte et une alimentation stabilisée.",
      },
      {
        q: "Peut-on l’utiliser pour faire du Wi-Fi ?",
        a: "Non. Il route et commute, mais n’émet pas de radio. Le Wi-Fi se traite avec des bornes séparées, reliées au routeur par un réseau dédié — ce qui est d’ailleurs préférable pour isoler les invités.",
      },
    ],
    cta: "Vous avez plusieurs sites à relier ou un lien opérateur à sécuriser ?",
  },

  "/article/netengine-8000-m14-bng-operateur": {
    kicker: "Routeur opérateur",
    title: "NetEngine 8000 M14 : à quoi sert un BNG de 32 000 abonnés",
    description:
      "Le NetEngine 8000 M14 est un routeur de bordure opérateur avec fonction BNG et 32 000 abonnés licenciés. Ce que cela change pour un FAI, un hébergeur ou un laboratoire.",
    product: "/boutique/routeur-netengine-8000-m14",
    productLabel: "NetEngine 8000 M14",
    intro:
      "Le M14 n’est pas un routeur d’entreprise plus gros que les autres. C’est un châssis de bordure opérateur, avec deux unités de traitement 2,4 Tbit/s, vingt ports 10GE MACsec et — c’est ce qui compte ici — une licence BNG permanente pour 32 000 abonnés. Comprendre ce que fait cette licence demande d’abord de comprendre ce que fait un BNG.",
    sections: [
      {
        h2: "Un BNG, c’est le guichet d’entrée de chaque abonné",
        paras: [
          "Quand un abonné fibre ou radio se connecte, il ne « reçoit » pas simplement internet. Il est authentifié, on vérifie qu’il paie, on lui attribue une adresse, on applique le débit de son contrat, on compte sa consommation, et on le déconnecte à la fin. Le BNG — Broadband Network Gateway — est l’équipement qui fait ce travail à l’entrée du réseau de l’opérateur.",
          "Sans BNG, un opérateur qui grandit se retrouve avec des routeurs d’accès bricolés, des adresses attribuées à la main et aucune prise sur les débits. Avec un BNG, il vend des offres : 10 mégaoctets, 50, 100, avec ou sans engagement, et il peut le prouver.",
        ],
      },
      {
        h2: "32 000 abonnés : ce que ça représente vraiment",
        paras: [
          "C’est le chiffre qui donne sa valeur à cette machine. Une licence BNG se vend chez le constructeur au nombre d’abonnés simultanés, et son prix grimpe vite. Une unité qui arrive avec 32 000 abonnés déjà licenciés évite au repreneur d’ouvrir ce dossier.",
          "Concrètement, 32 000 abonnés couvrent un opérateur régional naissant, un réseau d’immeubles, un campus, ou un fournisseur d’accès qui revend de la capacité à des petits opérateurs locaux. Pour un acteur qui a déjà un BNG saturé, c’est aussi une capacité de secours immédiate.",
        ],
      },
      {
        h2: "2,4 Tbit/s et vingt ports 10GE MACsec",
        paras: [
          "Deux unités de traitement IPU-1T2-A, en maître et esclave, donnent une capacité de commutation de 2,4 Tbit/s. Deux cartes PIC CR5D00LAXF91 apportent chacune dix ports 10GE avec chiffrement MACsec, soit vingt liaisons 10 gigabit capables de chiffrer au niveau de la couche 2.",
          "MACsec mérite une phrase : c’est le chiffrement lien par lien, entre deux équipements directement connectés. Il protège le trafic sur la fibre, là où IPsec protégerait le trafic entre deux réseaux. Pour un opérateur qui transporte du trafic d’entreprise entre deux sites, c’est un argument commercial.",
        ],
      },
      {
        h2: "Les licences perpétuelles changent l’économie du projet",
        paras: [
          "Cette unité porte une licence permanente : Foundation, Core & Aggregation, BNG, et 32 000 abonnés. « Permanent » signifie qu’il n’y a pas d’abonnement annuel à renouveler pour conserver ces fonctions.",
          "Cela ne veut pas dire que tout est gratuit : le support constructeur, les mises à jour logicielles majeures et les pièces détachées neuves restent à la charge de l’exploitant. Mais la fonction elle-même est acquise, et c’est l’essentiel dans un business plan.",
        ],
      },
      {
        h2: "Où le placer dans un réseau",
        paras: [
          "Trois positions ont du sens. En bordure de réseau d’accès, pour terminer les sessions des abonnés. En agrégation, pour concentrer plusieurs points de présence. Ou en laboratoire, pour valider des configurations avant de les appliquer en production — c’est l’usage le plus sous-estimé : une machine de ce type permet de tester un plan de migration, un changement de version ou une politique de qualité de service sans risquer le réseau commercial.",
          "L’alimentation est à prévoir : le châssis accepte deux modules AC, et une seule source n’est pas une configuration acceptable en production.",
        ],
      },
      {
        h2: "Ce que le M14 ne fait pas",
        paras: [
          "Il ne fournit pas de support constructeur. Une panne matérielle se répare avec des pièces d’occasion, pas avec une intervention Huawei sous contrat. C’est acceptable pour un laboratoire ou un opérateur qui sait ce qu’il fait ; ce ne l’est pas pour un service de crise.",
          "Il ne remplace pas un pare-feu, ni un switch d’accès, ni un système de facturation. Et il ne crée pas de clients : il permet de les servir proprement une fois qu’ils existent.",
        ],
      },
    ],
    faq: [
      {
        q: "Qu’est-ce qu’un BNG en termes simples ?",
        a: "C’est l’équipement qui authentifie chaque abonné, lui donne une adresse, applique son débit et compte sa consommation. C’est le guichet d’entrée du réseau d’un fournisseur d’accès.",
      },
      {
        q: "Les 32 000 abonnés sont-ils inclus définitivement ?",
        a: "Oui, la licence est permanente et le relevé console le confirme : Foundation, Core & Aggregation, BNG et 32 ressources de 1 000 abonnés. Le support et les mises à jour majeures ne sont en revanche pas inclus.",
      },
      {
        q: "Peut-on l’utiliser dans un laboratoire de formation ?",
        a: "C’est un excellent usage : VRP complet, BNG, MPLS, EVPN, MACsec. Une machine réelle vaut mieux que dix simulateurs pour former des ingénieurs. La licence reste attachée au numéro de série de la machine.",
      },
      {
        q: "Est-ce que le matériel est neuf ?",
        a: "Non. Cette unité a été mise en service, puis réinitialisée en configuration d’usine et testée sous tension. Les licences sont actives et vérifiées en console ; l’état est décrit sans arrondi.",
      },
      {
        q: "Quelle garantie ?",
        a: "Une garantie atelier de trois mois sur le matériel, pas une garantie constructeur. Le détail figure sur la fiche produit.",
      },
    ],
    cta: "Vous exploitez un réseau d’accès et cherchez de la capacité BNG ?",
  },

  "/article/usg6625e-pare-feu-entreprise": {
    kicker: "Sécurité",
    title: "USG6625E : ce qu’un pare-feu d’entreprise fait vraiment",
    description:
      "Segmentation, règles, NAT, VPN SSL et journalisation : ce que fait un USG6625E, ce qu’il ne fait pas sans abonnement, et les erreurs qui rendent un pare-feu inutile.",
    product: "/boutique/pare-feu-usg6625e",
    productLabel: "USG6625E-AC",
    intro:
      "Un pare-feu mal configuré donne l’impression de protéger. Il est là, il clignote, il coûte. Et pourtant tout passe. La différence entre un pare-feu utile et un boîtier décoratif ne tient pas au modèle, mais à trois décisions : ce qu’on sépare, ce qu’on autorise, et ce qu’on journalise.",
    sections: [
      {
        h2: "Le problème : tout le monde sur le même réseau",
        paras: [
          "Dans beaucoup d’organisations, les postes, les serveurs, les caméras, l’imprimante du comptable et le Wi-Fi des visiteurs partagent le même réseau. Un poste infecté peut alors atteindre le serveur de facturation ; un visiteur connecté au Wi-Fi peut scanner les caméras ; une caméra compromise sert de porte d’entrée.",
          "Le premier travail d’un pare-feu n’est pas de bloquer internet. C’est de découper le réseau en zones et d’écrire qui a le droit de parler à qui. Le filtrage vers l’extérieur vient après.",
        ],
      },
      {
        h2: "Segmentation : quatre zones suffisent dans la plupart des cas",
        paras: [
          "Bureaux, serveurs, équipements techniques (caméras, imprimantes, automates), invités. Chaque zone a ses règles : les bureaux accèdent aux serveurs sur les ports métier, les serveurs ne sortent que pour les mises à jour, les caméras ne parlent qu’à l’enregistreur, les invités n’atteignent qu’internet.",
          "C’est peu spectaculaire, et c’est exactement ce qui limite la casse le jour où un poste est compromis. Un rançongiciel qui chiffre un poste ne peut pas atteindre le serveur de fichiers s’il n’a pas la règle.",
        ],
      },
      {
        h2: "NAT, publication de services et VPN",
        paras: [
          "Le pare-feu traduit les adresses internes vers l’extérieur, publie les services qui doivent l’être — messagerie, site web — et surtout protège ce qui ne doit pas l’être. Publier un bureau à distance directement sur internet reste l’une des causes d’intrusion les plus fréquentes.",
          "Le VPN SSL embarqué gère une centaine d’utilisateurs simultanés sur ce modèle. Les accès distants passent par un portail authentifié, et non par des ports ouverts sur chaque serveur. C’est plus simple à expliquer à un dirigeant : il n’y a qu’une porte, elle est gardée.",
        ],
      },
      {
        h2: "Ce que ce pare-feu ne fait pas — et qu’il faut dire",
        paras: [
          "Les unités que nous proposons n’ont aucun abonnement de sécurité actif. Pas de moteur antivirus réseau, pas de prévention d’intrusion, pas de filtrage d’URL par catégories, pas de sandbox. Ces fonctions existent chez le constructeur sous forme d’abonnements, et sans abonnement elles sont désactivées.",
          "Cela ne rend pas l’équipement inutile : le filtrage par règles, le NAT, la segmentation, le VPN et la journalisation fonctionnent. Mais appeler cela un « pare-feu nouvelle génération » serait un abus de langage, et le client s’en apercevrait à la première attaque.",
          "Un antivirus sur les postes, une sauvegarde testée et une sensibilisation des utilisateurs couvrent une partie de ce que l’abonnement apporterait. Ce n’est pas équivalent, c’est complémentaire.",
        ],
      },
      {
        h2: "Les erreurs qui annulent un pare-feu",
        paras: [
          "La règle « tout autoriser » en bas de politique, ajoutée un soir pour débloquer un service et jamais retirée. Le NAT qui s’applique aussi au trafic VPN, ce qui casse le tunnel entre deux sites. Le journal désactivé, qui rend toute investigation impossible. Et l’absence de sauvegarde de la configuration : le jour où la machine meurt, il faut tout réécrire.",
          "Une politique de filtrage se documente : qui a demandé l’ouverture, pour quel service, pendant combien de temps. C’est ce document qui permet de fermer les règles six mois plus tard, quand plus personne ne se souvient pourquoi elles existent.",
        ],
      },
      {
        h2: "Où le placer et comment le dimensionner",
        paras: [
          "En coupure entre le lien opérateur et le réseau interne, ou derrière le routeur si celui-ci fait déjà le NAT. Le débit compte moins que le nombre de sessions simultanées : un site de cent personnes tient largement sur ce modèle.",
          "Deux alimentations redondantes sont présentes sur cette gamme, ce qui permet de brancher deux sources. Sans onduleur, la redondance d’alimentation ne sert à rien.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il une licence pour que le pare-feu fonctionne ?",
        a: "Non pour les fonctions de base : filtrage, NAT, routage, VPN, journalisation. Les fonctions de sécurité avancées (IPS, antivirus réseau, filtrage URL, sandbox) sont des abonnements séparés, non inclus sur nos unités.",
      },
      {
        q: "Peut-on remplacer la box de l’opérateur par ce pare-feu ?",
        a: "Il se place plutôt derrière, en coupure, pour garder le lien opérateur tel quel et ne pas dépendre d’un équipement dont vous ne maîtrisez pas la configuration.",
      },
      {
        q: "Combien d’utilisateurs VPN simultanés ?",
        a: "Une centaine en SSL VPN sur ce modèle, ce qui couvre les besoins d’une PME ou d’une administration moyenne. Au-delà, il faut un concentrateur dédié.",
      },
      {
        q: "Un pare-feu suffit-il à protéger une entreprise ?",
        a: "Non. Il couvre le réseau, pas les postes, pas les sauvegardes, pas les mots de passe, pas les erreurs humaines. C’est une brique, pas une stratégie.",
      },
      {
        q: "Que se passe-t-il si la machine tombe en panne ?",
        a: "Sans unité de secours, le réseau s’arrête. C’est pourquoi nous recommandons soit une seconde unité préconfigurée, soit une procédure de contournement documentée, avec la configuration sauvegardée hors de la machine.",
      },
    ],
    cta: "Vous voulez segmenter votre réseau sans acheter un abonnement de sécurité inutile ?",
  },

  "/article/fusionserver-2288x-v5-usages-reels": {
    kicker: "Serveur",
    title: "FusionServer 2288X V5 : ce qu’un vrai serveur change dans une PME",
    description:
      "Virtualisation, fichiers, sauvegarde, supervision, vidéosurveillance : les usages concrets d’un FusionServer 2288X V5 à 25 baies, et les limites à connaître avant d’acheter.",
    product: "/boutique/serveur-huawei-2288x-v5",
    productLabel: "FusionServer Pro 2288X V5",
    intro:
      "Beaucoup de PME appellent « serveur » un ordinateur de bureau posé dans un placard, allumé en permanence, sur lequel tout le monde enregistre ses fichiers. Ça fonctionne jusqu’au jour où le disque meurt, où personne ne sait ce qui est sauvegardé, et où l’entreprise découvre qu’elle n’a aucune copie. Un serveur rack n’est pas une question de puissance : c’est une question de disques remplaçables, d’alimentation redondante et de gestion à distance.",
    sections: [
      {
        h2: "Le problème : le « serveur » qui n’en est pas un",
        paras: [
          "Un poste de bureau n’a pas de disques à chaud, pas de RAID matériel, pas d’alimentation redondante, pas de carte de gestion. Quand il tombe, il faut aller sur place, ouvrir, et souvent réinstaller. Et sa capacité de stockage est figée à l’achat.",
          "Le 2288X V5 est un 2U avec vingt-cinq baies, deux processeurs Xeon Silver 4210 (dix cœurs chacun), 128 Go de mémoire et deux alimentations de 900 W. C’est le socle sur lequel on empile les services sans tout reconstruire à chaque besoin nouveau.",
        ],
      },
      {
        h2: "Usage 1 — Virtualisation légère : plusieurs serveurs dans un seul",
        paras: [
          "Un hyperviseur — Proxmox, Hyper-V — permet de faire tourner plusieurs machines virtuelles sur la même machine physique : un contrôleur de domaine, un serveur de fichiers, une application de gestion, une supervision. Chacune est isolée, sauvegardable séparément, redémarrable sans toucher aux autres.",
          "Avec deux processeurs de dix cœurs et 128 Go de mémoire, on héberge confortablement une dizaine de machines virtuelles de taille modeste. C’est le bon dimensionnement pour une PME de vingt à cent personnes : suffisamment pour ne pas saturer, pas assez pour justifier trois serveurs physiques.",
          "Attention à une limite réelle : cette génération de serveurs est certifiée par VMware jusqu’à ESXi 7.0 Update 3. Ne promettez pas ESXi 8 ou 9 sur ce matériel. Proxmox, lui, fonctionne sans cette contrainte.",
        ],
      },
      {
        h2: "Usage 2 — Serveur de fichiers et de gestion documentaire",
        paras: [
          "Partages réseau, droits par service, historique des versions, quotas : c’est l’usage le plus simple et le plus rentable. Vingt-cinq baies permettent de commencer avec huit disques et d’ajouter du stockage sans changer de machine — ce qu’un poste de bureau ne permet pas.",
          "En RAID avec une baie de secours, un disque peut mourir sans interrompre le service. Ce n’est pas de la sauvegarde : c’est de la disponibilité. La différence est expliquée plus bas, et elle vaut d’être répétée au client.",
        ],
      },
      {
        h2: "Usage 3 — Cible de sauvegarde et test de restauration",
        paras: [
          "Un serveur dédié à la sauvegarde change la nature du projet : on y stocke les copies des postes, des serveurs et des applications, et surtout on y teste les restaurations. Une restauration testée une fois par mois vaut mieux que dix copies jamais relues.",
          "Avec vingt-cinq baies, on peut garder plusieurs générations de copies et une copie hors ligne sur disque débranché — la seule qui résiste vraiment à un rançongiciel qui chiffre tout ce qui est monté.",
        ],
      },
      {
        h2: "Usage 4 — Supervision, vidéosurveillance, téléphonie",
        paras: [
          "Zabbix ou Prometheus pour surveiller les équipements, un enregistreur vidéo pour les caméras IP, un serveur de téléphonie pour un standard interne : ce sont trois charges typiques qui tournent très bien sur cette machine, chacune dans sa machine virtuelle.",
          "Pour la vidéosurveillance, la contrainte n’est pas le processeur mais le stockage et l’écriture continue. Vingt-cinq baies, c’est la possibilité de tenir des mois d’enregistrement selon le nombre de caméras et la définition — à calculer avant de promettre une durée de rétention.",
        ],
      },
      {
        h2: "RAID n’est pas sauvegarde",
        paras: [
          "Le RAID protège d’une panne de disque. Il ne protège ni d’une suppression, ni d’un chiffrement par rançongiciel, ni d’un incendie, ni d’un vol. Une entreprise peut avoir un RAID parfait et perdre toutes ses données en dix minutes.",
          "La règle qui tient : trois copies, sur deux supports différents, dont une hors du site. Un serveur comme celui-ci sert de socle à cette organisation ; il ne la remplace pas.",
        ],
      },
      {
        h2: "Ce qu’il ne faut pas attendre de cette machine",
        paras: [
          "Pas de calcul GPU : ce n’est pas un serveur d’intelligence artificielle. Pas de garantie constructeur : c’est du matériel d’occasion, avec une garantie atelier. Pas de silence : un 2U de ce type s’entend, et se place en local technique climatisé.",
          "La consommation compte aussi : deux alimentations de 900 W ne signifient pas 1 800 W consommés en permanence, mais sur une année, l’électricité et la climatisation pèsent plus lourd que le prix d’achat d’occasion. C’est un calcul à faire avant d’installer la machine dans un bureau.",
        ],
      },
    ],
    faq: [
      {
        q: "Combien de machines virtuelles peut-on faire tourner ?",
        a: "Une dizaine de machines modestes (contrôleur de domaine, fichiers, gestion, supervision, sauvegarde) tiennent confortablement sur 2× 10 cœurs et 128 Go. Au-delà, il faut regarder la charge réelle, pas le nombre de VM.",
      },
      {
        q: "Peut-on installer VMware ESXi 8 ?",
        a: "Non. Cette génération est certifiée jusqu’à ESXi 7.0 Update 3. Pour du 8, il faut une génération plus récente. Proxmox ou Hyper-V ne posent pas cette limite.",
      },
      {
        q: "Les disques sont-ils inclus ?",
        a: "Les unités décrites sont configurées avec huit disques SAS de 600 Go. Vérifiez la configuration exacte de l’unité qui vous intéresse : elle est indiquée sur la fiche produit.",
      },
      {
        q: "Quelle consommation électrique ?",
        a: "Elle dépend de la charge et du nombre de disques. Prévoyez une alimentation stabilisée, une protection onduleur et une climatisation : c’est un serveur de salle technique, pas un boîtier de bureau.",
      },
      {
        q: "Est-ce adapté à une petite structure ?",
        a: "Oui, à condition d’avoir un local technique correct. Pour cinq postes, un NAS et une sauvegarde cloud coûtent souvent moins cher. Le serveur se justifie à partir du moment où plusieurs services doivent tourner chez vous.",
      },
    ],
    cta: "Vous voulez sortir vos fichiers et vos applications du « PC qui sert de serveur » ?",
  },

  "/article/cloudengine-s5735-switch-acces-entreprise": {
    kicker: "Réseau",
    title: "CloudEngine S5735 : le switch qui tient un site, et ce qu’il impose",
    description:
      "VLAN, routage inter-VLAN, uplinks 10GE : ce que change un switch manageable comme le CloudEngine S5735, et pourquoi l’absence de PoE doit être anticipée.",
    product: "/boutique/switch-s5735-s24t4x",
    productLabel: "CloudEngine S5735",
    intro:
      "Un switch non manageable coûte 30 000 francs et fait passer des câbles. Le jour où deux services doivent être séparés, où une boucle fait tomber tout le réseau, ou où l’on veut brancher un cœur en 10 gigabit, il faut tout reprendre. Un switch d’accès manageable ne se justifie pas par sa vitesse : il se justifie par ce qu’il permet d’organiser.",
    sections: [
      {
        h2: "Le problème : un réseau plat, sans séparation ni visibilité",
        paras: [
          "Sur un switch non manageable, tout le monde est dans le même domaine de diffusion : les postes, les caméras, l’imprimante, le serveur, la borne Wi-Fi. Un poste qui diffuse mal inonde tout le monde ; une boucle de câble fait tomber le site entier ; et personne ne sait quel port consomme quoi.",
          "Un switch manageable apporte trois choses immédiatement : des VLAN pour séparer, du spanning-tree pour survivre aux boucles, et des compteurs par port pour comprendre ce qui se passe.",
        ],
      },
      {
        h2: "VLAN : séparer sans multiplier les câbles",
        paras: [
          "Un VLAN est un réseau logique à l’intérieur du même switch. Les postes restent sur le VLAN bureaux, les caméras sur un VLAN technique, les invités sur un VLAN isolé. Chacun ne voit que ce qu’il doit voir.",
          "C’est la brique de base de toute segmentation sérieuse. Sans VLAN sur le switch d’accès, la segmentation reste théorique : le pare-feu peut avoir des zones, si tout arrive sur le même port, il ne peut rien séparer.",
        ],
      },
      {
        h2: "Quatre ports 10GE : le détail qui évite un goulot",
        paras: [
          "Vingt-quatre ports gigabit pour les postes, quatre ports 10 gigabit pour les liaisons montantes. C’est le bon dosage pour un site : les postes n’ont pas besoin de 10G, les liens entre switchs et vers le cœur, si.",
          "Ces quatre ports permettent aussi d’agréger deux liens (LACP) pour doubler la capacité ou tenir une panne de câble, et de raccorder un serveur en 10G sans acheter un switch dédié.",
        ],
      },
      {
        h2: "Routage inter-VLAN : un switch de niveau 3",
        paras: [
          "Le S5735 fait du routage de niveau 3. Concrètement, il peut faire circuler le trafic entre deux VLAN sans remonter jusqu’au routeur, ce qui évite de saturer le lien vers le cœur pour des échanges internes.",
          "Cela ne remplace pas un pare-feu : router entre deux VLAN n’est pas filtrer entre deux zones. Le switch route, le pare-feu contrôle. Les deux ont leur place, dans cet ordre.",
        ],
      },
      {
        h2: "Pas de PoE : à savoir avant de promettre",
        paras: [
          "Ces modèles ne fournissent pas d’alimentation par le câble réseau. Une borne Wi-Fi, une caméra IP ou un téléphone qui attend le PoE ne démarrera pas branché dessus.",
          "Trois solutions : choisir un switch PoE pour la partie qui en a besoin, utiliser des injecteurs PoE, ou alimenter les équipements par leur propre adaptateur. La troisième est la plus mauvaise en exploitation : une multiprise dans un faux plafond est une panne qui attend son heure.",
        ],
      },
      {
        h2: "Les erreurs classiques au déploiement",
        paras: [
          "Le trunk mal configuré, qui fait passer tous les VLAN sur un port d’accès et provoque des fuites entre réseaux. La boucle de câble sans spanning-tree, qui met le site à genoux en quelques secondes. Le switch empilé dans un placard non ventilé, qui chauffe et redémarre l’été.",
          "Et l’absence de sauvegarde de configuration : un switch d’accès bien configuré représente une journée de travail. La configuration doit être exportée et datée, comme celle du pare-feu.",
        ],
      },
    ],
    faq: [
      {
        q: "Quelle différence entre S5735-L et S5735-S ?",
        a: "Les deux offrent 24 ports gigabit et 4 ports 10GE. Le S5735-S est destiné à un usage plus exigeant, avec des alimentations modules et une gamme de fonctions légèrement supérieure. Pour un site classique, les deux conviennent.",
      },
      {
        q: "Peut-on alimenter des caméras en PoE ?",
        a: "Pas avec ces modèles. Il faut un switch PoE, des injecteurs, ou une alimentation locale par caméra. À décider avant l’achat, pas après.",
      },
      {
        q: "Faut-il un switch manageable pour dix postes ?",
        a: "Pas nécessairement, mais dès qu’il y a un serveur, des caméras ou un Wi-Fi invités, la séparation devient utile. Le surcoût est faible au regard d’une journée d’arrêt.",
      },
      {
        q: "Le switch peut-il remplacer le routeur ?",
        a: "Il route entre VLAN, mais il ne fait ni NAT complet, ni VPN, ni filtrage de sécurité. Il complète le routeur, il ne le remplace pas.",
      },
      {
        q: "Comment savoir s’il est neuf ?",
        a: "Les unités de ce lot sont en cartons d’origine, jamais déployées, avec numéros de série relevés. La fiche produit donne la référence et le série de chaque unité.",
      },
    ],
    cta: "Vous structurez le réseau d’un nouveau site ?",
  },

  "/article/cartes-osn-wdm-spares-operateur": {
    kicker: "Transmission",
    title: "Cartes OSN et WDM : pourquoi un spare vaut plus que son prix",
    description:
      "TN12WSMD901, TN13OBU103, ODX0480T1 : ce que font ces cartes dans un réseau optique, pourquoi l’immobilisation coûte plus cher que la pièce, et comment vérifier la compatibilité.",
    product: "/boutique/carte-optique-tn12wsmd901",
    productLabel: "TN12WSMD901",
    intro:
      "Dans un réseau optique, la panne n’est pas une question de confort : une carte qui tombe coupe des liaisons entières, parfois des milliers d’abonnés. Et la pièce neuve arrive rarement en quelques jours. C’est là que le spare prend sa valeur — pas celle du composant, celle de l’heure d’indisponibilité évitée.",
    sections: [
      {
        h2: "Le problème : le délai d’usine, pas le prix de la carte",
        paras: [
          "Un opérateur qui exploite un châssis OSN en production dépend de son fournisseur pour la moindre carte. Commande, fabrication, expédition, dédouanement : le délai se compte souvent en semaines, parfois en mois sur des références anciennes.",
          "Pendant ce temps, la liaison est dégradée ou coupée. Les pénalités de service, la mauvaise presse et les clients qui partent coûtent en général beaucoup plus que la carte elle-même. C’est ce calcul qui rend le marché du spare légitime.",
        ],
      },
      {
        h2: "TN12WSMD901 : le routeur de longueurs d’onde",
        paras: [
          "Cette carte est un module de commutation de longueurs d’onde, avec neuf ports. Dans un système WDM, elle permet d’insérer, d’extraire ou de faire passer une longueur d’onde sans démonter tout le multiplexage. C’est la brique qui rend un réseau optique reconfigurable à distance, au lieu d’être figé à la conception.",
          "En exploitation, elle sert surtout à deux choses : ajouter un client sans toucher au reste du spectre, et rediriger une longueur d’onde en cas de panne de fibre sur un tronçon.",
        ],
      },
      {
        h2: "TN13OBU103 : remettre du niveau avant la ligne",
        paras: [
          "L’OBU est une unité d’amplification placée en sortie de multiplexeur, juste avant la fibre de ligne. Elle compense les pertes du multiplexage et redonne de la puissance aux canaux qui viennent d’être réunis.",
          "Sans elle, le budget optique se réduit comme une peau de chagrin : au bout de quelques dizaines de kilomètres, le récepteur d’en face ne distingue plus le signal du bruit. C’est une carte peu spectaculaire et difficile à remplacer en urgence.",
        ],
      },
      {
        h2: "ODX0480T1 : le transpondeur qui fait le pont",
        paras: [
          "Un transpondeur convertit un signal client — Ethernet, Fibre Channel, SDH selon les modèles — en une longueur d’onde propre au système WDM, et inversement. C’est lui qui permet de transporter des flux hétérogènes sur une même fibre.",
          "Ces cartes sont en général déployées par paires, une à chaque extrémité. Une seule qui manque, et la liaison ne se rétablit pas, même si tout le reste du châssis fonctionne.",
        ],
      },
      {
        h2: "Les optiques : le consommable qu’on oublie",
        paras: [
          "Les modules SFP+ 10G (comme l’OSX010N01) sont les pièces qui tombent le plus souvent, parce qu’ils chauffent, se manipulent mal et vieillissent. Ils coûtent peu à l’unité et bloquent une liaison entière quand ils lâchent.",
          "Constituer une réserve de modules, c’est la mesure la moins chère d’un plan de continuité optique. Deux ou trois pièces d’avance couvrent la majorité des incidents.",
        ],
      },
      {
        h2: "Vérifier la compatibilité avant d’acheter",
        paras: [
          "Quatre points à contrôler : le châssis et le sous-rack acceptent-ils cette référence ; la version logicielle du système la reconnaît-elle ; la bande et la longueur d’onde correspondent-elles au plan de fréquences ; et le type de port correspond-il au besoin.",
          "Un numéro de pièce identique peut exister en plusieurs variantes. La référence complète, la révision et le numéro de série sont les seules informations qui valent. Une photo d’étiquette ne suffit pas à garantir la compatibilité.",
        ],
      },
      {
        h2: "Ce qu’il faut demander au vendeur",
        paras: [
          "Un rapport de test, la traçabilité de la carte, et une garantie atelier écrite. Une carte optique qui a passé dix ans dans une baie climatisée n’a pas la même espérance de vie qu’une carte stockée dans un carton humide.",
          "Demandez aussi si la carte a été testée sur un châssis réel, ou seulement contrôlée visuellement. La différence se paie au moment du montage.",
        ],
      },
    ],
    faq: [
      {
        q: "Ces cartes sont-elles compatibles avec tous les châssis OSN ?",
        a: "Non. La compatibilité dépend du sous-rack, de la version logicielle et de la génération du système. Il faut vérifier la référence complète et le châssis cible avant toute commande.",
      },
      {
        q: "Pourquoi acheter une carte d’occasion plutôt qu’une neuve ?",
        a: "Pour le délai. Une carte disponible immédiatement remet une liaison en service le jour même ; une carte neuve peut prendre des semaines. Sur un réseau en production, ce délai pèse plus que l’écart de prix.",
      },
      {
        q: "Les modules optiques sont-ils inclus ?",
        a: "Non, ils sont listés séparément. Les SFP+ 10G sont proposés à l’unité, ce qui permet de constituer une réserve sans acheter une carte complète.",
      },
      {
        q: "Quelle garantie sur ce type de matériel ?",
        a: "Une garantie atelier de trois mois, avec test sur banc. Ce n’est pas une garantie constructeur et cela doit être dit clairement.",
      },
      {
        q: "Comment savoir si la carte est réellement testée ?",
        a: "Demandez le rapport de test avec la référence testée, la date et le résultat. Un vendeur sérieux le fournit ; sinon, considérez la carte comme non testée.",
      },
    ],
    cta: "Vous exploitez un réseau optique et cherchez des spares disponibles immédiatement ?",
  },
};
