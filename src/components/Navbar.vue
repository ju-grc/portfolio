<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const links = [
  { name: 'Accueil', path: '/' },
  { name: 'Projets', path: '/projects' },
  { name: 'Contact', path: '/#contact' },
];

const isActive = (path: string) => {
  if (path.includes('#')) {
    return route.hash === '#contact';
  }
  if (path === '/') {
    return route.path === '/' && !route.hash;
  }
  return route.path.startsWith(path);
};
</script>

<template>
  <nav
    class="fixed top-6 left-1/2 transform -translate-x-1/2 z-50
           w-[90%] max-w-lg
           bg-white/70 dark:bg-slate-900/70
           backdrop-blur-md border border-slate-200 dark:border-slate-700
           rounded-full px-6 py-3 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50
           flex justify-between items-center
           transition-all duration-300 hover:bg-white/90 dark:hover:bg-slate-900/90"
  >
    <RouterLink to="/" class="text-slate-900 dark:text-white font-bold text-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
      GJ.
    </RouterLink>

    <div class="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
      <RouterLink
        v-for="link in links"
        :key="link.name"
        :to="link.path"
        class="relative group transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
        :class="{ 'text-indigo-600 dark:text-indigo-400': isActive(link.path) }"
      >
        {{ link.name }}

        <span
          class="absolute -bottom-1 left-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 ease-out"
          :class="isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'"
        ></span>
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped></style>
