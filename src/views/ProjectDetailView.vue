<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import Contact from '@/components/Contact.vue';

import ProjectNDI from '@/components/projects/ProjectNDI.vue';
import ProjectPrivatebin from '@/components/projects/ProjectPrivatebin.vue';
import ProjectInterfaceComptable from "@/components/projects/ProjectInterfaceComptable.vue";
import Projectecommerce from "@/components/projects/Projectecommerce.vue";

const route = useRoute();
const projectId = Number(route.params.id);

const projectComponent = computed(() => {
  switch (projectId) {
    case 1: return ProjectNDI;
    // case 2: return ProjectCritiqueJus;
    // case 3: return ProjectGrabastar;
    // case 4: return ProjectCapital;
    case 5: return ProjectPrivatebin;
    case 6: return ProjectInterfaceComptable;
    case 7: return Projectecommerce;
    default: return null;
  }
});
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32">

    <div class="container mx-auto px-6 md:px-12 pb-20">

      <RouterLink to="/projects" class="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 mb-8 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Retour aux réalisations
      </RouterLink>

      <component :is="projectComponent" v-if="projectComponent" />

      <div v-else class="text-center py-20 border-2 border-dashed border-slate-300 rounded-3xl">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Projet en cours de rédaction 🏗️</h2>
        <p class="text-slate-500 mt-2">Le détail de ce projet arrive bientôt.</p>
      </div>

    </div>

    <Contact />
  </div>
</template>
