import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ArticleServeurEntrepriseDakar = () => {
  const path = "/article/serveur-entreprise-dakar";
  const title = "Serveur rack d'entreprise : à quoi il sert vraiment";
  const description =
    "Serveur d'entreprise à Dakar : à quoi il sert vraiment, ses usages concrets, la redondance et comment trancher entre serveur sur site et le cloud au Sénégal.";

  // Source unique de vérité : la FAQ visible et le JSON-LD affichent exactement le même contenu.
  const faq = [
    {
      question: "Un serveur est-il encore utile avec le cloud ?",
      answer:
        "Oui, et les deux se complètent souvent. Un serveur sur site garde vos applications métier et vos données chez vous, accessibles même quand la connexion est faible ou coupée, et sans coût récurrent par utilisateur. Le cloud reste utile pour la messagerie, la sauvegarde déportée et les outils collaboratifs : l'approche la plus fréquente est mixte.",
    },
    {
      question: "Faut-il une salle climatisée ?",
      answer:
        "Il faut une pièce technique ventilée et tempérée, pas une salle blanche. Un local dédié, à l'abri de la poussière et du soleil, avec climatisation et alimentation protégée, suffit pour un serveur rack : la chaleur est le premier facteur de panne prématurée des disques et des alimentations.",
    },
    {
      question: "Quelle différence avec un ordinateur très puissant ?",
      answer:
        "Un poste de travail puissant reste conçu pour une personne. Un serveur d'entreprise sert plusieurs utilisateurs en permanence : mémoire ECC qui corrige les erreurs, baies de disques remplaçables à chaud, alimentations redondantes, cartes réseau multiples et gestion à distance. C'est cette conception, plus que la puissance du processeur, qui évite les arrêts d'activité.",
    },
    {
      question: "Combien de temps prend l'installation ?",
      answer:
        "Le montage en baie, le système et la virtualisation, puis un premier serveur de fichiers et sa sauvegarde prennent quelques jours. La migration des données existantes et la formation des équipes s'étalent ensuite selon le volume à reprendre.",
    },
    {
      question: "Que se passe-t-il si un disque tombe en panne ?",
      answer:
        "Avec une grappe RAID, les données restent disponibles même si un disque cesse de fonctionner : le serveur continue de tourner sur les disques restants. On remplace le disque à chaud, sans éteindre la machine, et la grappe se reconstruit seule. Sans RAID, la même panne arrête l'activité et impose une restauration depuis la dernière sauvegarde.",
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
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          },
        ]}
      />
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-primary hover:text-blue-500 mb-8">
            <ArrowLeft className="mr-2" size={20} />Retour aux ressources
          </Link>
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Ressources", to: "/resources" }, { label: "Serveur d'entreprise" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <p className="lead">
            Un serveur d'entreprise n'est pas simplement un ordinateur plus gros posé dans un coin. C'est la machine
            qui héberge les applications, les fichiers et les bases de données dont dépend le travail quotidien de vos
            équipes. Voici à quoi il sert réellement.
          </p>

          <section>
            <h2>Un serveur d'entreprise, dit simplement</h2>
            <p>
              Un serveur d'entreprise est un ordinateur conçu pour rendre un service en permanence à plusieurs
              utilisateurs en même temps. Il ne travaille pas pour celui qui est assis devant lui, mais pour tous les
              postes du réseau qui s'y connectent.
            </p>
            <p>
              <strong>La différence avec un ordinateur très puissant.</strong> Un poste de travail haut de gamme reste
              pensé pour un seul utilisateur : un disque, une alimentation, un système grand public, aucune gestion à
              distance. Un serveur ajoute ce qui manque : mémoire ECC qui détecte et corrige les erreurs, baies de
              disques remplaçables à chaud, alimentations redondantes, plusieurs cartes réseau et une gestion matérielle
              indépendante du système.
            </p>
            <p>
              <strong>La différence avec un abonnement cloud.</strong> Avec un abonnement cloud, vous louez de la
              capacité sur la machine de quelqu'un d'autre : vous payez chaque mois, vos données résident hors de vos
              locaux et votre travail dépend de la connexion Internet. Avec un serveur chez vous, vous achetez la machine
              une fois, vos données restent sur site et l'activité continue même quand le réseau est perturbé.
            </p>
          </section>

          <section>
            <h2>Les six usages concrets d'un serveur</h2>
            <ul>
              <li>
                <strong>L'hébergement applicatif.</strong> Votre logiciel de gestion, votre solution de caisse ou votre
                dossier patient informatisé tourne sur le serveur et s'ouvre depuis chaque poste autorisé, avec les
                mêmes données au même moment.
              </li>
              <li>
                <strong>La base de données.</strong> C'est le cœur des applications métier : elle centralise les
                clients, les dossiers, les stocks et les opérations, et empêche deux personnes de modifier la même
                information au même instant.
              </li>
              <li>
                <strong>Le partage de fichiers et la gestion électronique de documents.</strong> Dossiers, contrats,
                factures et archives cessent d'être éparpillés sur les disques de chacun. Ils sont rangés au même
                endroit, avec des droits d'accès par service.
              </li>
              <li>
                <strong>Les sauvegardes.</strong> Le serveur est l'endroit naturel où l'on planifie et où l'on vérifie
                la sauvegarde de l'organisation, seul moyen réel de se relever après une panne ou une erreur humaine.
              </li>
              <li>
                <strong>La virtualisation.</strong> Sur une seule machine physique, on fait tourner plusieurs serveurs
                logiques indépendants : un pour les fichiers, un pour la base de données, un pour la messagerie
                interne. Cela remplace plusieurs machines par une seule et isole les services.
              </li>
              <li>
                <strong>La supervision.</strong> Le serveur surveille le réseau, les équipements et l'usage des
                ressources, ce qui permet de détecter une panne ou un disque saturé avant qu'ils ne bloquent le travail.
              </li>
            </ul>
          </section>

          <section>
            <h2>Pourquoi la redondance évite les arrêts d'activité</h2>
            <p>
              La valeur d'un serveur tient moins à sa vitesse qu'à sa capacité à continuer de fonctionner quand un
              composant lâche.
            </p>
            <ul>
              <li>
                <strong>Les alimentations redondantes.</strong> Deux blocs se partagent la charge. Si l'un tombe en
                panne, l'autre prend seul le relais sans éteindre le serveur. C'est cette{" "}
                <strong>redondance alimentation</strong> qui se double d'une protection électrique : chaque bloc branché
                sur une source différente, derrière un onduleur.
              </li>
              <li>
                <strong>Les disques montés en RAID.</strong> Les données sont réparties et dupliquées sur plusieurs
                disques. Un disque peut cesser de fonctionner sans interrompre le service ni faire perdre
                d'information.
              </li>
              <li>
                <strong>Les baies remplaçables à chaud.</strong> Un disque se retire et se remet en place sans éteindre
                la machine : un remplacement de routine ne devient pas une intervention à programmer en dehors des
                heures de travail.
              </li>
            </ul>
            <p>
              C'est l'ensemble de ces éléments qui produit la <strong>haute disponibilité</strong> : un matériel qui
              survit à la panne d'un composant. Dans une organisation où l'on ne peut pas arrêter l'accueil pendant deux
              jours, ce n'est pas un luxe.
            </p>
          </section>

          <section>
            <h2>Fiche technique de l'équipement disponible</h2>
            <p>
              Un serveur rack configuré et révisé en atelier, prêt à recevoir vos applications métier et à être
              installé en salle serveur ou en datacenter.
            </p>
            <ul>
              <li>Rack 2U · 2 sockets · 24 baies 2,5 pouces</li>
              <li>2× Intel Xeon Silver 4210 (10 cœurs / 20 threads chacun)</li>
              <li>128 Go DDR4 ECC (configuration d'origine)</li>
              <li>8× 600 Go SAS 10K + RAID Broadcom MegaRAID 9460-8i / SAS3508</li>
              <li>2× 10GbE SFP+ · 2× 1GbE + 8× 1GbE intégrés</li>
              <li>2× alimentations 900 W redondantes</li>
              <li>Gestion BMC intégrée (iBMC)</li>
            </ul>
            <p>
              Huawei 2288X V5 (FusionServer Pro), <strong>garantie atelier</strong>. La configuration exacte s'ajuste
              selon vos usages.
            </p>
          </section>

          <section>
            <h2>Pour quelles organisations ?</h2>
            <ul>
              <li>
                <strong>Les PME de 10 à 200 postes</strong> qui veulent arrêter de gérer chaque ordinateur comme une
                île : un serveur met les fichiers, la base de données et les applications au même endroit.
              </li>
              <li>
                <strong>Les cliniques et les structures de santé</strong> où le dossier patient informatisé, les
                rendez-vous et la caisse doivent rester accessibles à plusieurs services, avec des données
                confidentielles qui ne sortent pas de l'établissement.
              </li>
              <li>
                <strong>Les écoles et les établissements de formation</strong> qui gèrent inscriptions, notes, emplois
                du temps et comptes pour plusieurs centaines de personnes.
              </li>
              <li>
                <strong>Les administrations et les collectivités</strong> engagées dans la dématérialisation de leurs
                procédures et le traitement de volumes importants de dossiers.
              </li>
              <li>
                <strong>Les ONG et les projets de développement</strong> qui doivent conserver et restituer des données
                de terrain, souvent avec un accès Internet limité.
              </li>
              <li>
                <strong>Les hébergeurs locaux et les prestataires informatiques</strong> qui ont besoin d'une machine
                fiable pour héberger les applications de leurs clients.
              </li>
            </ul>
          </section>

          <section>
            <h2>Serveur sur site ou cloud : comment trancher</h2>
            <p>Ce n'est pas une question de principe mais de situation. Trois critères suffisent à décider.</p>
            <ul>
              <li>
                <strong>La qualité de la connexion Internet.</strong> Si le réseau est lent, instable ou souvent coupé,
                une application hébergée à l'extérieur devient inutilisable plusieurs fois par jour. Un serveur sur
                site garde le travail possible en local.
              </li>
              <li>
                <strong>La confidentialité des données.</strong> Certaines données — dossiers de patients, dossiers
                administratifs, informations financières — gagnent à rester physiquement dans vos locaux, sous votre
                contrôle direct. Un serveur dans votre salle serveur vous laisse maître de qui y accède.
              </li>
              <li>
                <strong>Le budget de fonctionnement.</strong> Un abonnement cloud se paie indéfiniment, souvent par
                utilisateur, et grimpe avec la croissance. Une machine que vous possédez se paie une fois et ne dépend
                plus d'un coût récurrent pour le même usage.
              </li>
            </ul>
            <p>
              Dans la pratique, la réponse est souvent mixte : le serveur pour le cœur métier et les données sensibles,
              le cloud pour la messagerie et la sauvegarde déportée.
            </p>
          </section>

          <section>
            <h2>Ce que nous prenons en charge</h2>
            <ul>
              <li>
                <strong>Le choix de la configuration</strong> selon vos applications, le nombre de postes et le volume
                de données.
              </li>
              <li>
                <strong>L'installation en baie</strong> avec l'alimentation protégée, le câblage réseau et
                l'aménagement de la salle serveur.
              </li>
              <li>
                <strong>Le système et la virtualisation</strong> : socle logiciel, serveurs virtuels séparés par usage
                et droits d'accès par profil.
              </li>
              <li>
                <strong>Un plan de sauvegarde testé</strong>, avec vérification réelle des restaurations : une
                sauvegarde que l'on n'a jamais restaurée n'est pas une sauvegarde.
              </li>
              <li>
                <strong>La supervision</strong> de la machine, des disques, du réseau et des services, avec alertes en
                cas d'anomalie.
              </li>
              <li>
                <strong>La migration des données existantes</strong> depuis les postes, les disques externes ou les
                anciens serveurs, sans perte d'historique.
              </li>
              <li>
                <strong>La formation</strong> des équipes et du référent interne, pour que le quotidien reste entre vos
                mains.
              </li>
            </ul>
            <p>
              L'ensemble s'inscrit dans une démarche de <strong>continuité d'activité</strong> : savoir ce qui doit
              continuer de tourner et comment repartir après un incident.
            </p>
          </section>

          <section>
            <h2>Les erreurs classiques</h2>
            <ul>
              <li>
                <strong>Ne pas avoir de sauvegarde testée.</strong> Elle existe sur le papier, personne ne l'a jamais
                restaurée, et le jour de la panne on découvre qu'elle est incomplète.
              </li>
              <li>
                <strong>Faire tourner l'essentiel sur un seul disque.</strong> Sans RAID, la panne d'un seul composant
                suffit à arrêter la structure et à imposer une restauration complète.
              </li>
              <li>
                <strong>Oublier l'onduleur.</strong> Micro-coupures et variations de tension abîment les alimentations
                et les disques, et peuvent corrompre une base de données en pleine écriture.
              </li>
              <li>
                <strong>Installer le serveur dans un bureau sans climatisation.</strong> La chaleur accélère l'usure des
                disques et des alimentations. Un serveur rack a sa place dans une pièce technique ventilée, pas sous un
                bureau au soleil.
              </li>
            </ul>
          </section>

          <section>
            <h2>Questions fréquentes</h2>
            <div className="not-prose grid gap-4">
              {faq.map((item) => (
                <div key={item.question} className="bg-card border border-border rounded-xl p-5">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="not-prose mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
            <p className="text-slate-800 font-medium mb-2">Vous voulez équiper votre organisation ?</p>
            <p className="text-slate-700">
              Fallcon Tech vous accompagne du choix de la configuration à la mise en service : installation en baie,
              virtualisation, plan de sauvegarde testé, supervision et migration de vos données. Consultez la{" "}
              <Link to="/boutique/serveur-huawei-2288x-v5">fiche du serveur rack disponible</Link> ou découvrez notre
              offre <Link to="/services/infrastructure-cybersecurite-senegal">infrastructure et cybersécurité</Link>.
              Prix sur devis.
            </p>
          </div>
          <div className="not-prose mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90"
            >
              Demander une étude
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

export default ArticleServeurEntrepriseDakar;
