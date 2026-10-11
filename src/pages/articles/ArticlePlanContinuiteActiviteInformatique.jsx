import React from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ArticlePlanContinuiteActiviteInformatique = () => {
  const path = "/article/plan-continuite-activite-informatique";
  const title = "Plan de continuité informatique : la méthode en 7 étapes";
  const description = "Un plan de continuité informatique n'est pas un contrat de maintenance. Voici la méthode en 7 étapes pour préserver salaires, facturation et dossiers clients.";
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
                name: "Qu'est-ce qu'un plan de continuité informatique ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "C'est un ensemble de dispositions qui permettent à l'entreprise de continuer à travailler pendant un incident informatique, puis de repartir normalement. Il décrit les scénarios à couvrir, les priorités, les moyens de secours et les procédures à appliquer.",
                },
              },
              {
                "@type": "Question",
                name: "Quelle différence entre un plan de continuité et un plan de reprise d'activité ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le plan de continuité vise à maintenir l'activité pendant l'incident, par exemple grâce à un mode dégradé ou à un serveur de secours. Le plan de reprise décrit la remise en état des systèmes après un incident majeur. Les deux se complètent dans un même document de référence.",
                },
              },
              {
                "@type": "Question",
                name: "Une sauvegarde suffit-elle à assurer la continuité ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Non. Une sauvegarde n'est utile que si l'on sait la restaurer. Il faut définir la fréquence des copies, les conserver à l'écart du système principal et tester régulièrement une restauration complète.",
                },
              },
              {
                "@type": "Question",
                name: "Que désignent le RTO et le RPO ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le RTO est le délai maximal pendant lequel une activité peut rester arrêtée sans conséquence grave. Le RPO est la perte de données maximale acceptable entre la dernière sauvegarde exploitable et l'incident. Ces deux repères se fixent par activité, jamais par principe général.",
                },
              },
              {
                "@type": "Question",
                name: "À quelle fréquence faut-il tester le plan ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le plan doit être testé régulièrement et après tout changement important, comme un nouveau serveur, un nouveau logiciel ou une réorganisation. Un test de restauration et une répétition des procédures de reprise valent mieux qu'un long document jamais appliqué.",
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
              { label: "Continuité informatique" },
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
            Une panne de serveur, une coupure de courant, une connexion Internet qui
            tombe, un rançongiciel ou le départ d'un salarié qui détenait seul les
            accès : les interruptions informatiques n'ont pas toutes la même origine,
            mais elles posent toutes la même question. Combien de temps l'entreprise
            peut-elle continuer à travailler, et que faut-il faire dans les premières
            heures ? Un plan de continuité informatique répond à cette question avant
            que l'incident ne survienne, et non pendant qu'il se produit.
          </p>

          <h2>Ce qu'est un plan de continuité informatique, et ce qu'il n'est pas</h2>
          <p>
            Un <strong>plan de continuité d'activité (PCA)</strong> est un ensemble de
            dispositions qui permettent de maintenir le travail essentiel pendant un
            incident informatique. Un <strong>plan de reprise d'activité (PRA)</strong>{" "}
            décrit, lui, la remise en état des systèmes après un incident majeur. Le
            premier cherche à faire tenir l'activité, le second à la redémarrer. Les
            deux se lisent ensemble dans un même document de référence.
          </p>
          <p>
            Ce plan n'est <strong>pas un simple contrat de maintenance</strong> : un
            prestataire qui intervient vite ne remplace ni l'organisation interne, ni
            les priorités, ni les moyens de secours. Il n'est <strong>pas non plus une
            sauvegarde isolée</strong> : posséder une copie des données ne dit rien de
            la façon dont l'entreprise redémarrera, ni de ce qu'elle fera pendant
            l'arrêt. Le plan est un mode d'emploi écrit à l'avance, testé, et connu de
            plusieurs personnes.
          </p>

          <h2>Les cinq scénarios à couvrir</h2>
          <p>
            Un plan utile part de situations concrètes, pas de principes abstraits.
            Cinq scénarios couvrent l'essentiel des interruptions rencontrées par une
            petite ou moyenne entreprise :
          </p>
          <ul>
            <li>
              <strong>Panne d'un serveur</strong> : le matériel ou son disque cesse de
              fonctionner et les applications métier deviennent inaccessibles.
            </li>
            <li>
              <strong>Coupure de courant</strong> : l'activité s'arrête brutalement,
              avec un risque pour les fichiers en cours d'écriture.
            </li>
            <li>
              <strong>Coupure de la connexion Internet</strong> : la messagerie, la
              facturation en ligne et l'accès aux données externalisées sont coupés.
            </li>
            <li>
              <strong>Cyberattaque ou rançongiciel</strong> : les fichiers sont
              chiffrés ou volés, et l'entreprise ne doit surtout pas compter sur un
              paiement pour repartir.
            </li>
            <li>
              <strong>Erreur humaine ou départ d'un salarié qui détenait seul les
              accès</strong> : une suppression malencontreuse ou des identifiants
              détenus par une seule personne bloquent l'activité.
            </li>
          </ul>
          <p>
            Pour chaque scénario, le plan doit répondre à trois questions : que se
            passe-t-il concrètement, qui agit, et par quoi commence-t-on ?
          </p>

          <h2>La méthode en 7 étapes</h2>
          <ol>
            <li>
              <strong>Inventorier les systèmes et les données.</strong> Listez les
              serveurs, postes, applications, comptes en ligne et jeux de données
              utilisés, en précisant qui s'en sert et où ils sont hébergés. Sans cette
              liste, aucune priorité n'est possible.
            </li>
            <li>
              <strong>Classer par criticité.</strong> Séparez ce qui peut attendre une
              journée de ce qui ne le peut pas. La paie, la facturation et l'accès aux
              dossiers clients ne se traitent pas comme la messagerie interne ou un
              outil de consultation ponctuelle.
            </li>
            <li>
              <strong>Fixer le RTO et le RPO par activité.</strong> Le{" "}
              <strong>RTO (délai maximal d'interruption acceptable)</strong> est le
              temps pendant lequel une activité peut rester arrêtée sans conséquence
              grave. Le <strong>RPO (perte de données maximale acceptable)</strong> est
              la quantité de travail qui peut être perdue entre la dernière sauvegarde
              exploitable et l'incident. Ces repères se décident activité par activité.
            </li>
            <li>
              <strong>Choisir les moyens.</strong> Selon les priorités retenues :
              sauvegardes complètes et incrémentales, serveur de secours ou
              environnement de repli, onduleur pour absorber les micro-coupures, et
              éventuellement une seconde liaison Internet. Chaque moyen répond à un
              scénario précis, pas à tous à la fois.
            </li>
            <li>
              <strong>Rédiger les procédures de reprise.</strong> Écrivez, pas à pas et
              en langage simple, ce qu'il faut faire pour redémarrer chaque service
              critique : qui contacte qui, comment restaurer une sauvegarde, comment
              basculer sur le mode dégradé.
            </li>
            <li>
              <strong>Désigner les responsables et l'astreinte.</strong> Nommez un
              responsable du plan et des suppléants. Organisez une{" "}
              <strong>astreinte</strong>, c'est-à-dire une personne joignable en dehors
              des heures ouvrées, avec une montée en charge si elle ne répond pas.
            </li>
            <li>
              <strong>Tester et mettre à jour périodiquement.</strong> Un plan non
              testé n'existe que sur le papier. Répétez les procédures, restaurez une
              sauvegarde pour de vrai, puis corrigez le document après chaque
              changement d'organisation ou de système.
            </li>
          </ol>

          <h2>Les erreurs classiques</h2>
          <ul>
            <li>
              <strong>Une sauvegarde jamais testée.</strong> On croit être protégé,
              puis on découvre au pire moment que la restauration échoue.
            </li>
            <li>
              <strong>Un seul détenteur des accès.</strong> Si une seule personne
              connaît les identifiants et les procédures, son absence suffit à tout
              bloquer.
            </li>
            <li>
              <strong>Un matériel de secours non configuré.</strong> Un serveur de
              repli rangé sans système à jour ni données récentes ne sert à rien le
              jour où on en a besoin.
            </li>
            <li>
              <strong>Une procédure écrite mais jamais répétée.</strong> Un document
              que personne n'a appliqué ne résiste pas au stress d'une panne réelle.
            </li>
          </ul>

          <h2>Le cas des salaires, de la facturation et des dossiers clients</h2>
          <p>
            Toutes les activités ne se valent pas face à un arrêt. Trois d'entre elles
            doivent repartir en premier, car leur interruption se voit tout de suite :
          </p>
          <ul>
            <li>
              <strong>Les salaires.</strong> La paie a une échéance et engage la
              confiance de l'équipe. Elle doit pouvoir être préparée même si le reste
              du système est indisponible.
            </li>
            <li>
              <strong>La facturation.</strong> Sans facturation, pas d'encaissement :
              l'activité tourne à vide. Le plan doit prévoir un mode dégradé
              permettant d'émettre et de suivre les factures.
            </li>
            <li>
              <strong>Les dossiers clients.</strong> Ces données sont souvent le
              patrimoine le plus difficile à reconstituer. Leur sauvegarde et leur
              accès doivent figurer parmi les priorités les plus élevées.
            </li>
          </ul>
          <p>
            Concrètement, cela signifie que la paie, la facturation et les dossiers
            clients bénéficient des protections les plus strictes : sauvegardes plus
            fréquentes, copies conservées à l'écart du système principal, et procédures
            de reprise testées en priorité.
          </p>

          <h2>Liste de contrôle en 10 points pour une PME</h2>
          <ol>
            <li>La liste des systèmes, applications et données critiques est écrite.</li>
            <li>Chaque activité est classée selon son urgence en cas d'arrêt.</li>
            <li>Le RTO et le RPO sont définis pour les activités essentielles.</li>
            <li>Les données sont sauvegardées selon un rythme défini et régulier.</li>
            <li>Une copie des sauvegardes est conservée à l'écart du système principal.</li>
            <li>Une restauration complète a déjà été réellement testée.</li>
            <li>Aucun accès critique n'est détenu par une seule personne.</li>
            <li>Un responsable du plan et des suppléants sont désignés.</li>
            <li>Les procédures de reprise sont écrites et connues de l'équipe.</li>
            <li>Le plan est relu et mis à jour après chaque changement important.</li>
          </ol>

          <h2>Questions fréquentes</h2>
          <div className="not-prose grid gap-4">
            <div className="bg-card border border-border rounded-xl p-5">
              <h3>Qu'est-ce qu'un plan de continuité informatique ?</h3>
              <p>
                C'est un ensemble de dispositions qui permettent à l'entreprise de
                continuer à travailler pendant un incident informatique, puis de
                repartir normalement. Il décrit les scénarios à couvrir, les priorités,
                les moyens de secours et les procédures à appliquer.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3>Quelle différence entre un plan de continuité et un plan de reprise d'activité ?</h3>
              <p>
                Le plan de continuité vise à maintenir l'activité pendant l'incident,
                par exemple grâce à un mode dégradé ou à un serveur de secours. Le plan
                de reprise décrit la remise en état des systèmes après un incident
                majeur. Les deux se complètent dans un même document de référence.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3>Une sauvegarde suffit-elle à assurer la continuité ?</h3>
              <p>
                Non. Une sauvegarde n'est utile que si l'on sait la restaurer. Il faut
                définir la fréquence des copies, les conserver à l'écart du système
                principal et tester régulièrement une restauration complète.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3>Que désignent le RTO et le RPO ?</h3>
              <p>
                Le RTO est le délai maximal pendant lequel une activité peut rester
                arrêtée sans conséquence grave. Le RPO est la perte de données maximale
                acceptable entre la dernière sauvegarde exploitable et l'incident. Ces
                deux repères se fixent par activité, jamais par principe général.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3>À quelle fréquence faut-il tester le plan ?</h3>
              <p>
                Le plan doit être testé régulièrement et après tout changement
                important, comme un nouveau serveur, un nouveau logiciel ou une
                réorganisation. Un test de restauration et une répétition des
                procédures de reprise valent mieux qu'un long document jamais
                appliqué.
              </p>
            </div>
          </div>

          <div className="not-prose mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
            <p className="text-slate-800 font-medium mb-2">
              Besoin de structurer votre continuité informatique ?
            </p>
            <p className="text-slate-700">
              Fallcon Tech accompagne les entreprises et les administrations dans la
              mise en place de leurs sauvegardes, de leurs serveurs de secours et de
              leurs procédures de reprise. Découvrez notre offre{" "}
              <Link to="/services/infrastructure-cybersecurite-senegal">
                infrastructure et cybersécurité
              </Link>{" "}
              ou consultez notre guide{" "}
              <Link to="/article/sauvegarde-donnees-entreprises">
                sauvegarde des données en entreprise
              </Link>
              .
            </p>
          </div>
          <div className="not-prose mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90"
            >
              Parler à un expert
            </Link>
            <Link
              to="/services/infrastructure-cybersecurite-senegal"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-medium hover:bg-muted"
            >
              Voir l'offre infrastructure
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticlePlanContinuiteActiviteInformatique;
