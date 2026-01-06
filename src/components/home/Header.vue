<script setup lang="ts">
import { RouterLink } from 'vue-router';

import pdfCV from '@/assets/docs/CV_Garcia_Julien.pdf'
</script>

<template>
  <header class="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-slate-50 dark:bg-slate-950">

    <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>


    <div class="relative z-10 text-center max-w-3xl space-y-6">

      <span class="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 text-sm font-semibold tracking-wide mb-2">
        👋 Salut, moi c'est
      </span>

      <h1 class="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
        Julien Garcia <br class="hidden md:block" />
        <span class="inline-block text-transparent bg-clip-text bg-[linear-gradient(to_right,#4f46e5,#06b6d4)]">
          Développement web & Analyse des données
        </span>
      </h1>

      <p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">

      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <a
          :href="pdfCV"
          target="_blank"
          class="px-8 py-3.5 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/30 transform hover:-translate-y-1"
        >
          Voir mon CV (PDF)
        </a>

        <RouterLink
          to="/#contact"
          class="px-8 py-3.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
        >
          Me contacter
        </RouterLink>
      </div>

    </div>

    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>

  </header>
</template>

<style scoped></style>
