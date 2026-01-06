<script setup lang="ts">
import imgMoi from '@/assets/img/moi3.jpg'
import imgVoit from '@/assets/img/moi2.jpg'
import imgSport from '@/assets/img/IMG-20250530-WA0050.jpg'
const images = {
  me: imgMoi,
  setup: imgVoit,
  hobby: imgSport
};
</script>

<template>
  <section id="about" class="py-24 bg-white dark:bg-slate-900 overflow-hidden">
    <div class="container mx-auto px-6 md:px-12">

      <div class="flex flex-col md:flex-row items-center gap-16">

        <div class="w-full md:w-1/2 space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold">
            <span class="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            À propos de moi
          </div>

          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Plus qu'un simple codeur, <br>
            <span class="text-indigo-600">un créateur de solutions.</span>
          </h2>

          <div class="text-slate-600 dark:text-slate-400 text-lg space-y-4 leading-relaxed">
            <p class="text-justify">
              Passionnée par le <strong class="text-slate-800 dark:text-slate-200">développement web et les bases de données</strong>,
              je suis actuellement étudiant en BUT Informatique avec une vision clair : <span class="text-indigo-500 font-medium">créer des solutions digitales innovantes et performantes</span>.
            </p>
            <p class="text-justify">
              Mon parcours m'a permis de développer une expertise technique solide tout en cultivant une approche créative et orientée résultats. Je m'efforce constamment d'apprendre, d'expérimenter et de repousser les limites de ce qui est possible.
            </p>
            <p class="text-justify">
              Au-delà de l’écran, le sport occupe une place importante dans ma vie : le cyclisme m’enseigne la persévérance, tandis que le sport automobile nourrit mon goût du défi et de la précision. Ces valeurs, je cherche à les retranscrire dans mes projets : rigueur, constance et dépassement de soi.
            </p>
            <p class="text-justify">
              Mon objectif est d’évoluer dans un environnement où la technologie n’est pas une fin, mais un levier pour améliorer la performance, la communication et l’innovation au sein des organisations.
            </p>
          </div>

          <div class="flex gap-6 pt-4">
            <div>
              <span class="block text-3xl font-bold text-slate-900 dark:text-white">3+</span>
              <span class="text-sm text-slate-500">Années d'études</span>
            </div>
            <div>
              <span class="block text-3xl font-bold text-slate-900 dark:text-white">6+</span>
              <span class="text-sm text-slate-500">Projets réalisés</span>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/2 relative">
          <div class="absolute -top-10 -right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>

          <div class="grid grid-cols-2 gap-4">

            <div class="space-y-4 mt-8">
              <img
                :src="images.me"
                alt="Mon portrait"
                class="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
              />
            </div>

            <div class="space-y-4">
              <img
                :src="images.setup"
                alt="Mon setup"
                class="w-full h-40 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
              <img
                :src="images.hobby"
                alt="Mon hobby"
                class="w-full h-48 object-cover rounded-2xl shadow-lg rotate-[2deg] hover:rotate-0 transition-transform duration-500"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>
<style scoped></style>
