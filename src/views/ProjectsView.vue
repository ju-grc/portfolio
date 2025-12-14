<script setup lang="ts">
import { ref, computed } from 'vue';
import Contact from '@/components/Contact.vue'; // On réutilise le footer contact

// 1. Catégories de filtres
const categories = ["Tous", "Web", "Data", "Système"];
const activeCategory = ref("Tous");

import imgNDI from '@/assets/img/projets/ndi25/NUIT INFO 2025.png'

import imgGrabastar from '@/assets/img/projets/grabastar/4.jpg'
import imgCapitalWars from '@/assets/img/projets/capitalwars/capital-wars.png'
import imgPrivateBin from '@/assets/img/projets/privatebin/privatebin_0.png'

// 2. Données des projets (Simulation)
const projects = [
  {
    id: 1,
    title: "Nuit de l'Info 2025",
    category: "Web",
    // Mise en avant du challenge temps limité et du travail d'équipe
    description: "Application interactive développée en moins de 15h lors de la nuit de l'info. Challenge intensif axé sur la collaboration, l'implémentation rapide de features front-end et l'intégration continue.",
    image: imgNDI,
    techs: ["Vue 3", "Tailwind", "Vite"],
    githubLink: "https://github.com/Yota02/Ndi-2026",
    demoLink: "https://yota02.github.io/Ndi-2026/#/"
  },
  {
    id: 2,
    title: "API Gestion de Critiques de Jus",
    category: "Data",
    description: "Architecture complète séparant le backend (API Platform) du frontend. Gestion sécurisée des utilisateurs, CRUD complet sur les critiques et optimisation des requêtes API.",
    image: "",
    techs: ["Symfony", "APIPlatform", "Vue.js"],
    githubLink: "https://gitlabinfo.iutmontp.univ-montp2.fr/critiquedujujus/",
    demoLink: "#",
  },
  {
    id: 3,
    title: "Grabastar",
    category: "Web",
    description: "Conception d'un service d'avatars centralisé inspiré de Gravatar. Gestion des profils utilisateurs, traitement et upload d'images, et système de récupération d'avatar via hachage d'email.",
    image: imgGrabastar,
    techs: ["Symfony", "HTML", "CSS"],
    githubLink: "https://gitlabinfo.iutmontp.univ-montp2.fr/web3a-turpin/grabastar",
    demoLink: "https://webinfo.iutmontp.univ-montp2.fr/~turpinb/grabastar/public/",
  },
  {
    id: 4,
    title: "Capital Wars - Jeux de gestion",
    category: "Web",
    description: "Jeu de simulation économique où le joueur gère le budget d'une entreprise. Implémentation de logique métier complexe, gestion de tours de jeu et persistance des données en base SQL.",
    image: imgCapitalWars,
    techs: ["Symfony", "JavaScript", "MySQL"],
    githubLink: "https://github.com/Yota02/Capital-Wars",
    demoLink: "#"
  },
  {
    id: 5,
    title: "Installation de PrivateBin",
    category: "Système",
    description: "Déploiement et sécurisation d'une instance de partage de code chiffré (Pastebin). Configuration serveur, automatisation des tâches via Bash et durcissement de l'environnement PHP.",
    image: imgPrivateBin,
    techs: ["PHP", "Bash", "JavaScript"],
    githubLink: null,
    demoLink: null
  },
  {
    id: 6,
    title: "Interface de gestion commerciale",
    category: "Web",
    description: "Développement d'une solution type ERP pour la gestion d'entreprise : module de facturation, fichier clients, suivi des stocks et tableaux de bord dynamiques pour le suivi comptable.",
    image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    techs: ["JavaScript (JQuery)", "PHP", "SQL"],
    githubLink: null,
    demoLink: null
  }
];

// 3. Logique de filtrage (Computed Property)
const filteredProjects = computed(() => {
  if (activeCategory.value === "Tous") {
    return projects;
  }
  return projects.filter(project => project.category === activeCategory.value);
});
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32">

    <div class="container mx-auto px-6 md:px-12">

      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Mes <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 inline-block">Réalisations</span>
        </h1>
        <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Une collection de mes projets académiques et personnels.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
            v-for="category in categories"
            :key="category"
            @click="activeCategory = category"
            class="px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border"
            :class="activeCategory === category
            ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/30'
            : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'"
        >
          {{ category }}
        </button>
      </div>

      <TransitionGroup
          name="list"
          tag="div"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20"
      >
        <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:border-indigo-500/30 transition-all duration-300 group flex flex-col h-full"
        >

          <div class="relative h-48 overflow-hidden">
            <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-600 uppercase tracking-wider shadow-sm">
              {{ project.category }}
            </div>
          </div>

          <div class="p-6 flex-1 flex flex-col">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 transition-colors">
              {{ project.title }}
            </h3>

            <p class="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mb-6">
              <span
                  v-for="tech in project.techs"
                  :key="tech"
                  class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded"
              >
                {{ tech }}
              </span>
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">

              <a
                  v-if="project.githubLink"
                  :href="project.githubLink"
                  target="_blank"
                  class="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.04-.015-2.04-3.33.72-4.035-1.41-4.035-1.41-.54-1.38-1.335-1.755-1.335-1.755-1.085-.735.09-.72.09-.72 1.2.075 1.83 1.245 1.83 1.245 1.05 1.785 2.76 1.275 3.435.975.105-.75.405-1.275.75-1.575-2.655-.3-5.445-1.335-5.445-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z"/></svg>
                Code
              </a>

              <a
                  v-if="project.demoLink"
                  :href="project.demoLink"
                  target="_blank"
                  class="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                Voir le live
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>

            </div>
          </div>
        </div>
      </TransitionGroup>

      <div v-if="filteredProjects.length === 0" class="text-center py-20">
        <p class="text-xl text-slate-500">Aucun projet trouvé dans cette catégorie pour le moment.</p>
      </div>

    </div>

    <Contact />
  </div>
</template>

<style scoped>
/* Petite animation pour l'apparition des cartes lors du filtrage */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>