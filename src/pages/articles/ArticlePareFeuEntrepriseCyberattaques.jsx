import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ArticlePareFeuEntrepriseCyberattaques = () => {
  const path = "/article/pare-feu-entreprise-cyberattaques";
  const title = "Pare-feu d'entreprise : comment il bloque les cyberattaques";
  const description =
    "Comment un pare-feu d'entreprise bloque concrètement rançongiciels, hameçonnage et intrusions, et les fonctions à vérifier pour protéger vos données au Sénégal.";
  const faq = [
    {
      q: "Un pare-feu suffit-il à protéger une entreprise ?",
      a: "Non. Un pare-feu est la pièce centrale du périmètre, mais il ne remplace ni les sauvegardes, ni les mises à jour, ni la vigilance des équipes. Il filtre ce qui entre et sort du réseau et journalise les événements ; il ne corrige pas un mot de passe partagé ni un poste non mis à jour. La protection vient de l'ensemble : pare-feu, sauvegarde testée, contrôle des accès et sensibilisation.",
    },
    {
      q: "Faut-il un pare-feu quand on a déjà un antivirus ?",
      a: "Oui, les deux agissent à des endroits différents. L'antivirus surveille un poste de travail déjà allumé ; le pare-feu surveille le réseau entier, y compris les serveurs, les caméras et les objets connectés qui n'ont pas d'antivirus. Un rançongiciel peut traverser un poste protégé et se propager vers les serveurs de fichiers : c'est là que le pare-feu et la segmentation réseau font la différence.",
    },
    {
      q: "Quelle différence entre un routeur opérateur et un vrai pare-feu ?",
      a: "Le routeur distribue la connexion Internet ; il ne décide pas finement quels flux sont autorisés. Un pare-feu applique des règles par zone, par service et par utilisateur, inspecte le contenu des flux, journalise les connexions et gère les tunnels VPN. Le routeur fait passer le trafic ; le pare-feu choisit ce qui a le droit de passer.",
    },
    {
      q: "Quelles fonctions faut-il regarder avant de choisir ?",
      a: "Le filtrage applicatif, la prévention d'intrusion et l'antivirus réseau pour bloquer les attaques connues, le VPN site à site et le VPN distant pour relier les agences et les télétravailleurs, la segmentation réseau pour séparer les services sensibles, la journalisation pour comprendre un incident et la haute disponibilité pour éviter la coupure. Ces fonctions se dimensionnent sur le débit avec inspection activée, pas sur le débit brut.",
    },
    {
      q: "Combien de temps prend la mise en service d'un pare-feu ?",
      a: "Pour un site unique, la mise en service se compte souvent en une à deux journées après l'audit de l'existant : relevé du réseau, plan d'adressage, rédaction des règles, migration sans coupure puis contrôle de la journalisation. Un déploiement multi-sites ou avec VPN et redondance demande davantage de préparation, car chaque agence ajoute des règles et des tunnels à tester.",
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
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Pare-feu d'entreprise" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
          </motion.div>
        </div>
      </section>
      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <p>
            La plupart des dirigeants ont déjà entendu parler de rançongiciel et de hameçonnage sans savoir précisément à quel moment un <strong>pare-feu entreprise</strong> entre en jeu. On imagine souvent une simple boîte qui filtre Internet, alors qu'il s'agit du point de contrôle qui décide, flux par flux, ce qui a le droit d'entrer et de sortir de votre réseau. Cet article explique, en mots simples et sans jargon, comment un <strong>pare-feu Dakar</strong> protège concrètement une activité, à travers des scénarios d'attaque réels racontés étape par étape.
          </p>

          <section>
            <h2>Ce qu'un pare-feu fait vraiment, et ce qu'il ne fait pas</h2>
            <p>
              Un pare-feu se place entre votre réseau interne et le monde extérieur. Il examine chaque connexion qui cherche à franchir cette frontière et applique une règle : autoriser, refuser, journaliser. Il distingue les zones du réseau, par exemple les postes de travail, les serveurs, le Wi-Fi invité et les caméras, et empêche qu'une zone compromise parle librement aux autres. C'est ce que l'on appelle la <strong>segmentation réseau</strong> et le <strong>contrôle des accès</strong>. Un pare-feu moderne ajoute le filtrage applicatif, la prévention d'intrusion, un antivirus réseau, les tunnels <strong>VPN site à site</strong> pour relier les agences et une <strong>journalisation</strong> détaillée des événements.
            </p>
            <p>
              Il ne fait pas tout, et il faut le dire clairement. Un pare-feu ne corrige pas un logiciel non mis à jour, ne devine pas qu'un collaborateur a communiqué son mot de passe, ne sauvegarde pas vos données et ne remplace pas la vigilance humaine. Il est la digue du périmètre, pas la totalité de la <strong>sécurité réseau entreprise</strong>. Bien configuré, il réduit fortement la surface d'attaque ; mal configuré, il donne une illusion de sécurité.
            </p>
          </section>

          <section>
            <h2>Quatre scénarios d'attaque, étape par étape</h2>

            <h3>Scénario 1 : l'attaque par rançongiciel</h3>
            <p>
              Un poste ouvre une pièce jointe piégée reçue par courriel. Un <strong>rançongiciel</strong> (<strong>ransomware</strong>) s'installe, chiffre les fichiers locaux puis cherche à atteindre les serveurs de fichiers partagés pour les chiffrer à leur tour. Sans séparation, il se propage de poste en poste. Le pare-feu intervient à deux moments : d'abord en limitant la communication entre le poste de travail et les serveurs sensibles, grâce à la segmentation, ce qui ralentit ou bloque la propagation ; ensuite en coupant la communication sortante vers le serveur de commande de l'attaquant, souvent situé à l'étranger. La <strong>journalisation</strong> garde la trace de ces tentatives et aide à identifier le poste d'origine.
            </p>

            <h3>Scénario 2 : le hameçonnage avec vol de mots de passe</h3>
            <p>
              Un message imitant un fournisseur connu invite à se reconnecter à un espace de travail. Le collaborateur saisit son identifiant et son mot de passe sur un faux site, parfaitement imité. L'attaquant récupère les identifiants et tente de se connecter aux services internes depuis l'extérieur. Ici, le filtrage d'adresses suspectes et le <strong>contrôle des accès</strong> du pare-feu peuvent refuser une connexion entrante inattendue. Sur le <strong>phishing</strong>, l'appareil ne remplace pas la sensibilisation des équipes, mais l'<strong>IPS</strong> (prévention d'intrusion) et l'antivirus réseau détectent souvent le lien malveillant et bloquent la jonction avec le serveur qui héberge la fausse page.
            </p>

            <h3>Scénario 3 : l'intrusion par un service exposé</h3>
            <p>
              Un ancien service de télémaintenance reste ouvert vers Internet. Un scanner automatisé repère le port, teste des milliers de mots de passe et finit par entrer. Une fois à l'intérieur, l'attaquant explore le réseau à la recherche de données. Le pare-feu bloque cette intrusion en n'exposant que les services réellement nécessaires et en restreignant l'accès à certaines adresses. L'intrusion par un service oublié est l'une des plus fréquentes : le filtrage par zone la rend beaucoup plus difficile.
            </p>

            <h3>Scénario 4 : l'exfiltration de données par un poste infecté</h3>
            <p>
              Un poste est infecté par un logiciel discret qui, chaque nuit, envoie des fichiers vers un serveur extérieur. Rien ne se voit au quotidien. Le pare-feu repère un volume de trafic inhabituel vers une destination inconnue et peut bloquer la sortie. C'est la <strong>protection des données</strong> au sens concret : contrôler non seulement ce qui entre, mais aussi ce qui sort. Sans cette surveillance, la fuite peut durer des mois sans être détectée.
            </p>
          </section>

          <section>
            <h2>Pourquoi un antivirus installé sur les postes ne suffit pas</h2>
            <p>
              Un antivirus protège un poste, au moment où il est allumé et pour autant que ses signatures soient à jour. Il ne voit ni les serveurs de fichiers, ni les caméras de surveillance, ni les systèmes d'accès, ni les imprimantes réseau, qui n'ont pourtant pas d'antivirus. Il ne voit pas non plus le trafic qui traverse le réseau entre deux machines internes. L'<strong>antivirus réseau</strong> intégré à un pare-feu inspecte les flux qui circulent entre les zones et entre les sites, ce que l'antivirus de poste ne peut pas faire. Les deux se complètent : le poste protège la machine, le pare-feu protège le périmètre et les échanges.
            </p>
          </section>

          <section>
            <h2>Les fonctions à regarder quand on choisit</h2>
            <ul>
              <li><strong>Filtrage applicatif :</strong> autoriser ou bloquer une application, pas seulement un port, pour qu'un service détourné ne serve pas d'ouverture.</li>
              <li><strong>IPS (prévention d'intrusion) :</strong> détecter et arrêter les attaques connues en temps réel, avec des bases de signatures maintenues à jour.</li>
              <li><strong>Antivirus réseau :</strong> analyser les fichiers et flux qui traversent le périmètre, sur des machines qui n'ont pas de protection locale.</li>
              <li><strong>VPN site à site et VPN distant :</strong> chiffrer les liaisons entre le siège et les agences et donner un accès sûr aux télétravailleurs.</li>
              <li><strong>Segmentation réseau :</strong> séparer les postes, les serveurs, le Wi-Fi invité, les caméras et les objets connectés.</li>
              <li><strong>Journalisation :</strong> conserver et exporter les journaux, pour comprendre un incident et prouver ce qui s'est passé.</li>
              <li><strong>Haute disponibilité :</strong> prévoir deux équipements ou une bascule, pour que la protection ne devienne pas elle-même un point de panne.</li>
            </ul>
            <p>
              Le critère de dimensionnement est le débit avec inspection activée, jamais le débit brut affiché sur la fiche commerciale : un appareil annoncé à 20 Gbit/s peut tomber à 10 Gbit/s lorsque l'IPS et l'antivirus réseau sont en marche, ce qui reste largement au-dessus des liens opérateurs disponibles au Sénégal et en Afrique de l'Ouest.
            </p>
          </section>

          <section>
            <h2>Fiche technique de l'équipement disponible</h2>
            <p>
              Fallcon Tech propose un pare-feu nouvelle génération neuf, adapté au périmètre d'une entreprise, d'une administration ou d'un centre de données.
            </p>
            <ul>
              <li>Huawei USG6625E-AC (HiSecEngine NGFW)</li>
              <li>16× GE RJ45 + 6× GE SFP + 6× 10GE SFP+ (référence constructeur 02352RQN)</li>
              <li>Débit pare-feu 20 Gbit/s · 10 Gbit/s avec IPS et antivirus activés</li>
              <li>VPN IPsec 15 Gbit/s · SSL VPN 100 utilisateurs (2 000 en option)</li>
              <li>8 millions de sessions simultanées · 200 000 nouvelles sessions par seconde</li>
              <li>16 Go de mémoire · 1U rackable · 442 × 420 × 43,6 mm (7,6 kg)</li>
              <li>2 unités en stock, numéros de série consécutifs (paire redondante possible)</li>
              <li>État : neuf, jamais mis en service, emballage d'origine, garantie atelier</li>
            </ul>
            <p>
              Les licences Huawei des fonctions avancées sont chiffrées séparément au devis. Retrouvez la fiche complète sur la page <Link to="/boutique/pare-feu-usg6625e">pare-feu USG6625E</Link>.
            </p>
          </section>

          <section>
            <h2>Pour quelles organisations ce type d'équipement est dimensionné</h2>
            <p>
              Un pare-feu d'entreprise de ce niveau s'adresse aux organisations qui ont plusieurs zones à protéger, parfois plusieurs sites, et un lien Internet qui ne doit pas s'arrêter. On le retrouve typiquement chez une PME multi-sites qui veut relier son siège et ses agences, dans une administration qui doit séparer les services et prouver la traçabilité des accès, dans une clinique soumise au secret des <strong>données de santé</strong>, chez un opérateur ou un hébergeur qui protège plusieurs clients sur un même équipement. Ces contextes partagent les mêmes besoins : segmentation, tunnels chiffrés, journalisation et continuité. La <strong>cybersécurité Sénégal</strong> et, plus largement, la <strong>cybersécurité Afrique de l'Ouest</strong>, exigent aujourd'hui ce niveau de rigueur sur le périmètre, surtout lorsque les données clients et les paiements transitent par le réseau.
            </p>
          </section>

          <section>
            <h2>Comment se passe la mise en service</h2>
            <ul>
              <li><strong>Audit de l'existant :</strong> relevé des liens, des serveurs, des applications et des accès externes, pour partir du réseau réel et non d'un schéma théorique.</li>
              <li><strong>Plan d'adressage et de règles :</strong> découpage en zones, choix des adresses, rédaction des règles de filtrage et des tunnels VPN, validés avec vos équipes.</li>
              <li><strong>Migration sans coupure :</strong> bascule depuis l'ancien équipement pendant une plage calme, avec retour arrière prévu en cas d'imprévu.</li>
              <li><strong>Journalisation et supervision :</strong> centralisation des journaux, alertes sur les événements importants, conservation des traces.</li>
              <li><strong>Formation des équipes :</strong> remise des procédures, transfert des connaissances pour gérer les règles courantes et savoir réagir à un incident.</li>
            </ul>
            <p>
              C'est le moment de remplacer une <strong>ancienne génération de pare-feu</strong> arrivée en fin de support : un appareil dont on ne met plus à jour les signatures protège moins qu'il ne le laisse croire.
            </p>
          </section>

          <section>
            <h2>Les erreurs classiques à éviter</h2>
            <ul>
              <li><strong>Les règles ouvertes « pour que ça marche » :</strong> on autorise tout pour résoudre un problème et l'ouverture reste. Peu de règles, bien justifiées, valent mieux qu'une liste jamais revue.</li>
              <li><strong>L'absence de journalisation :</strong> sans journaux, impossible de comprendre une attaque ni de savoir ce qui a été touché.</li>
              <li><strong>Les signatures non mises à jour :</strong> l'IPS et l'antivirus réseau perdent leur efficacité s'ils s'appuient sur des bases anciennes.</li>
              <li><strong>Un pare-feu non redondé :</strong> un seul équipement devient un point de panne unique, et la coupure de sécurité se transforme en coupure d'activité.</li>
              <li><strong>Une configuration jamais testée :</strong> des règles que l'on croit actives mais qui ne filtrent pas sont plus dangereuses que pas de règle du tout.</li>
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
            <p className="text-slate-800 font-medium mb-2">Sécuriser votre périmètre réseau</p>
            <p className="text-slate-700">
              Un <strong>pare-feu entreprise</strong> bien configuré, c'est un réseau qui filtre, qui journalise et qui ne s'arrête pas. Fallcon Tech accompagne les entreprises, les administrations et les cliniques du Sénégal dans l'audit de leur réseau et la mise en service de leur protection. Consultez la fiche du{" "}
              <Link to="/boutique/pare-feu-usg6625e">pare-feu USG6625E</Link>, découvrez notre offre{" "}
              <Link to="/services/infrastructure-cybersecurite-senegal">infrastructure et cybersécurité au Sénégal</Link>{" "}
              ou <Link to="/contact">parlez-nous directement de votre projet</Link>.
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
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticlePareFeuEntrepriseCyberattaques;
