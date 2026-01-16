<script setup lang="ts">
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { projects } from '@/data/projects';

const categories = ["Tous", "Web", "Data", "Système"];
const activeCategory = ref("Tous");


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
        <RouterLink
          v-for="project in filteredProjects"
          :key="project.id"
          :to="'/project/' + project.id"
          class="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:border-indigo-500/30 transition-all duration-300 group flex flex-col h-full cursor-pointer"
        >

          <div class="relative h-48 overflow-hidden">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div v-else class="w-full h-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
              Pas d'image
            </div>

            <div class="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-600 uppercase tracking-wider shadow-sm">
              {{ project.category }}
            </div>
          </div>

          <div class="p-6 flex-1 flex flex-col">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 transition-colors">
              {{ project.title }}
            </h3>

            <p class="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1">
              {{ project.shortDescription || project.description }}
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

            <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <span class="text-indigo-600 dark:text-indigo-400 text-sm font-semibold group-hover:underline">En savoir plus →</span>
            </div>

          </div>
        </RouterLink>
      </TransitionGroup>

      <div v-if="filteredProjects.length === 0" class="text-center py-20">
        <p class="text-xl text-slate-500">Aucun projet trouvé dans cette catégorie pour le moment.</p>
      </div>

    </div>
  </div>
</template>

<style scoped>
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
