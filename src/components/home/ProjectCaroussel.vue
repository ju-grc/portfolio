<script setup lang="ts">
import { RouterLink } from 'vue-router';

import imgNDI from '@/assets/img/projets/ndi25/NUIT INFO 2025.png'

import imgCapitalWars from '@/assets/img/projets/capitalwars/capital-wars.png'

const projects = [
  {
    id: 1,
    title: "Nuit de l'Info 2025",
    desc: "Application interactive développée en moins de 15h lors de la nuit de l'info. Challenge intensif axé sur la collaboration, l'implémentation rapide de features front-end et l'intégration continue.",
    image: imgNDI,
    tags: ["Vue.js", "HTML"]
  },
  {
    id: 2,
    title: "API Gestion de Critiques de Jus",
    desc: "Architecture complète séparant le backend (API Platform) du frontend. Gestion sécurisée des utilisateurs, CRUD complet sur les critiques et optimisation des requêtes API.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Symfony", "API Platform", "Vue.js"]
  },
  {
    id: 3,
    title: "Capital Wars - Jeu de gestion",
    desc: "Jeu de simulation économique où le joueur gère le budget d'une entreprise. Implémentation de logique métier complexe, gestion de tours de jeu et persistance des données en base SQL.",
    image: imgCapitalWars,
    tags: ["Symfony", "MySQL"]
  }
];
</script>

<template>
  <section id="projects-preview" class="py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden">
    <div class="container mx-auto px-6">

      <div class="flex justify-between items-end mb-10 px-2">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Projets <span class="text-indigo-600">Récents</span>
          </h2>
        </div>

        <RouterLink
          to="/projects"
          class="hidden md:flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
        >
          Tout voir
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </RouterLink>
      </div>

      <div class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth no-scrollbar">

        <div
          v-for="project in projects"
          :key="project.id"
          class="flex-shrink-0 w-80 md:w-96 snap-center bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
        >

          <RouterLink
            :key="project.id"
            :to="'/project/' + project.id"
          >

            <div class="h-48 overflow-hidden relative">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span class="text-white font-medium border border-white px-4 py-2 rounded-full backdrop-blur-sm">Voir détails</span>
              </div>
            </div>

            <div class="p-6">
              <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">{{ project.title }}</h3>
              <p class="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                {{ project.desc }}
              </p>

              <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="px-2 py-1 text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-md"
                  >
                    {{ tag }}
                  </span>
              </div>
            </div>
          </RouterLink>

        </div>

        <RouterLink
          to="/projects"
          class="flex-shrink-0 w-64 snap-center flex flex-col items-center justify-center bg-indigo-50 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-indigo-200 dark:border-slate-700 hover:border-indigo-500 hover:bg-indigo-100 dark:hover:bg-slate-800 transition-all duration-300 group"
        >
          <div class="w-16 h-16 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform mb-4">
            <svg class="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m17 7H3"></path>
            </svg>
          </div>
          <span class="text-lg font-bold text-indigo-900 dark:text-white">Voir plus de projets</span>
          <span class="text-sm text-indigo-600/70 dark:text-slate-400 mt-1">Explorer tout le portfolio</span>
        </RouterLink>

        <div class="w-2 flex-shrink-0"></div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
