<script setup lang="ts">
import { ref } from 'vue';

const competences = ref([
  {
    id: 2,
    isOpen: false,
    title: "Compétence 2 - Optimiser des applications",
    description: "Cette compétence concerne la sélection et l'utilisation d'algorithmes adaptés pour résoudre efficacement des problèmes complexes.",
    acs: [
      "AC1: Choisir des structures de données complexes adaptées au problème",
      "AC2: Utiliser des techniques algorithmiques adaptées pour des problèmes complexes",
      "AC3: Comprendre les enjeux et moyens de sécurisation des données et du code",
      "AC4: Évaluer l'impact environnemental et sociétal des solutions proposées"
    ],
    projects: [
      {
        title: "Développement d’un algorithme de chiffrement des données (RSA)",
        content: `Dans le cadre de mon stage, j’ai été chargé d’implémenter un algorithme de chiffrement RSA dans le but de sécuriser les données sensibles des clients de l’entreprise. Ce projet m’a permis de mobiliser l’ensemble des apprentissages critiques associés à la compétence "sélection et utilisation d'algorithmes adaptés pour résoudre efficacement des problèmes complexes".

Tout d’abord, le choix des structures de données a été déterminant pour garantir l’efficacité et la robustesse du chiffrement. J’ai utilisé des structures adaptées telles que les grands entiers (pour les clés), des paires de clés publiques/uniques. Ce choix, réfléchi et justifié, relève de l’AC1.

Ensuite, le développement de l’algorithme m’a permis de mettre en œuvre des techniques algorithmiques avancées (AC2), notamment :
- la génération de grands nombres premiers,
- l’exponentiation modulaire,
- et le calcul de l’inverse modulaire via l’algorithme d’Euclide étendu.

Ces éléments sont essentiels au bon fonctionnement de l’algorithme RSA, qui repose sur des fondements mathématiques solides et une logique algorithmique rigoureuse.

Ce projet m’a aussi permis de me confronter directement aux enjeux de la sécurité informatique (AC3). En plus du chiffrement, j’ai intégré des mécanismes de validation des entrées pour éviter les injections SQL, protégé les clés contre les fuites potentielles, et suivi les bonnes pratiques en matière de développement sécurisé.

Enfin, j’ai également pris en compte les aspects environnementaux et sociétaux (AC4). L’algorithme ayant un coût computationnel élevé, j’ai optimisé les traitements pour réduire la consommation de ressources (temps CPU, mémoire), et ainsi limiter l’impact environnemental. Sur le plan sociétal, la sécurisation des données client contribue à renforcer la protection de la vie privée, un enjeu majeur dans notre société numérique.

Ainsi, ce projet a été une occasion concrète d’appliquer et de valider la compétence visée, à travers un travail complet allant de l’analyse du besoin à l’implémentation, en passant par l’optimisation et la sécurisation du code.`,
        link: "/project/6"
      }
    ]
  },
  {
    id: 3,
    isOpen: false,
    title: "Compétence 3 - Administrer des systèmes informatiques communicants complexes",
    description: "Cette compétence concerne le déploiement et la gestion de services dans une architecture réseau.",
    acs: [
      "AC1: Concevoir et développer des applications communicantes",
      "AC2: Utiliser des serveurs et des services réseaux virtualisés",
      "AC3: Sécuriser les services et données d'un système"
    ],
    projects: [
      {
        title: "TP - Développement d’applications communicantes en C avec l’API Socket",
        content: `Dans le cadre des travaux pratiques du module réseau, j’ai conçu plusieurs applications client-serveur en langage C, en utilisant l’API socket avec le protocole TCP/IP. Ces applications permettaient d’établir une communication fiable entre deux machines pour l’échange de messages textuels ou de fichiers.

Ce travail m’a permis de valider l’AC1, car il m’a donné l’opportunité de maîtriser la création de sockets, la gestion des connexions multiples via select() et la structuration des échanges réseau. J’ai également implémenté des mécanismes de détection et gestion des erreurs réseau, et respecté les normes liées au protocole TCP pour garantir une communication fiable et structurée.`,
        link: null
      },
      {
        title: "Sécurisation de l’authentification utilisateur",
        content: `Lors d’un projet de développement d’un site web en PHP, j’ai mis en place un système d’authentification sécurisé. Pour cela, j’ai utilisé un mécanisme de hachage des mots de passe avec ajout de sel et poivre avant stockage en base de données.

J’ai également veillé à la sécurité des sessions en régénérant les identifiants de session et en configurant les cookies avec les options HttpOnly et Secure.

Cette mise en œuvre m’a permis de valider l’AC3 en assurant la protection des données sensibles des utilisateurs face à des menaces courantes telles que le vol de mots de passe, les attaques par force brute ou le vol de session. J’ai appliqué les bonnes pratiques de sécurité web et suivi les recommandations de l’OWASP.`,
        link: "/project/7"
      }
    ]
  },
  {
    id: 4,
    isOpen: false,
    title: "Compétence 4 - Gérer des données de l’information",
    description: "Cette compétence concerne l'optimisation des bases de données et leur intégration dans des applications tout en garantissant la sécurité.",
    acs: [
      "AC1: Optimiser les modèles de données de l'entreprise",
      "AC2: Assurer la confidentialité des données (intégrité et sécurité)",
      "AC3: Organiser la restitution de données à travers la programmation et la visualisation",
      "AC4: Manipuler des données hétérogènes"
    ],
    projects: [
      {
        title: "Développement d'un site E-Commerce",
        content: `Réalisation d'un site de e-commerce proposant des produits de notre choix, sans restrictions particulières. L’objectif pédagogique de ce projet était de mettre en œuvre les techniques apprises en cours tout en respectant les critères de notation établis, notamment la gestion des produits via un MVC.

Cette réalisation m'a permis de travailler sur l'AC2 en mettant en œuvre des mécanisme de securité comme le hachage de mot de passe, la préparation de requêtes SQL limitant les injections de tous type.

Également, ce travail m'a permis de développer l'AC1 en créant une interface qui simplifie les opérations CRUD (Create, Read, Update, Delete) et en implémentant des mise en cache pour réduire la charge sur la base de données. Ce qui a impliqué les compétences CE4.01, CE4.02 et CE4.04 en respectant les règlementations sur le respect de la vie privé, en assurant la cohérence et la qualité du code et pour finir en respectant les enjeux économiques, sociétaux et écologiques de l'utilisation du stockage de données.`,
        link: "/project/7"
      },
      {
        title: "Interface de gestion commerciale et comptable",
        content: `Réalisation d’une application web destinée à centraliser la gestion des activités commerciales et comptables d'une entreprise fictive. L'objectif pédagogique de ce projet était de structurer, exploiter et restituer efficacement des données commerciales (factures, paiements) à travers une interface claire et fonctionnelle, tout en appliquant les bonnes pratiques de développement et de visualisation.

Cette réalisation m’a permis de valider l’AC3 en mettant en place des tableaux de bord dynamiques et interactifs pour les utilisateurs. Ces tableaux affichaient des indicateurs clés (Nom de compte, informations bancaires, paiement, etc.) sous forme de tableaux et de visualisations créés avec la librairie DataTables de JavaScript.

J’ai également développé des fonctionnalités de filtres, tris et exports (PDF, CSV) permettant une restitution personnalisée et exploitable des données. J’ai également mobilisé l’AC4 en traitant des données hétérogènes provenant de différentes sources comme des fichiers Excel transmis par les commerciaux et des informations saisies directement via l'interface utilisateur. Cela m’a amené à implémenter des mécanismes de nettoyage, validation, formatage et transformation des données pour assurer leur intégration dans la base de données de manière cohérente.`,
        link: "/project/6"
      }
    ]
  }
]);

const toggleCompetence = (id: number) => {
  const competence = competences.value.find(c => c.id === id);
  if (competence) {
    competence.isOpen = !competence.isOpen;
  }
};
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32">

    <div class="container mx-auto px-6 md:px-12 pb-20">

      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Portfolio <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">d'Apprentissage</span>
        </h1>
        <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Validation des compétences du BUT Informatique (Niveau 2) à travers mes projets et expériences.
          <br><span class="text-sm opacity-70">(Cliquez sur une compétence pour voir les détails)</span>
        </p>
      </div>

      <div class="space-y-6">

        <section
          v-for="comp in competences"
          :key="comp.id"
          class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300"
          :class="{ 'shadow-xl ring-2 ring-indigo-500/10': comp.isOpen }"
        >
          <div
            @click="toggleCompetence(comp.id)"
            class="cursor-pointer p-6 md:p-8 flex items-start justify-between gap-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
          >
            <div class="flex-1">
              <h2 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-4">
                <span class="w-10 h-10 rounded-lg bg-indigo-600 text-white flex-shrink-0 flex items-center justify-center text-lg font-bold shadow-lg shadow-indigo-500/30">
                  {{ comp.id }}
                </span>
                {{ comp.title.split(' - ')[1] }}
              </h2>
              <p class="mt-2 text-slate-500 dark:text-slate-400 italic md:ml-14">
                {{ comp.description }}
              </p>
            </div>

            <div class="flex-shrink-0 mt-2">
              <svg
                class="w-6 h-6 text-slate-400 transition-transform duration-300"
                :class="{ 'rotate-180 text-indigo-600': comp.isOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div v-show="comp.isOpen" class="border-t border-slate-100 dark:border-slate-800">
            <div class="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-12">

              <div class="lg:col-span-4">
                <div class="bg-slate-50 dark:bg-slate-950/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <h3 class="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <svg class="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Apprentissages Critiques
                  </h3>
                  <ul class="space-y-3">
                    <li
                      v-for="(ac, idx) in comp.acs"
                      :key="idx"
                      class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-3 border-l-2 border-indigo-200 dark:border-indigo-800"
                    >
                      <strong class="text-indigo-600 dark:text-indigo-400">{{ ac.split(':')[0] }}:</strong>
                      {{ ac.split(':')[1] }}
                    </li>
                  </ul>
                </div>
              </div>

              <div class="lg:col-span-8 space-y-10">

                <div
                  v-for="(projet, idx) in comp.projects"
                  :key="idx"
                  class="relative pl-0 md:pl-8 border-l-0 md:border-l border-slate-200 dark:border-slate-800"
                >
                  <div class="hidden md:block absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>

                  <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-4">
                    {{ projet.title }}
                  </h3>

                  <div class="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 whitespace-pre-line mb-6 text-sm md:text-base">
                    {{ projet.content }}
                  </div>

                  <div v-if="projet.link">
                    <RouterLink
                      :to="projet.link"
                      class="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      Voir le projet détaillé
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </RouterLink>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </section>

      </div>

    </div>
  </div>
</template>
