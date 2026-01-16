<script setup lang="ts">
import { ref } from 'vue';

import imgNDI from '@/assets/img/projets/ndi25/NUIT INFO 2025.png';
import pdfSujet from '@/assets/docs/La Nuit de l’Info 2025 - Sujet.pdf';
import imgNDIAccueil from '@/assets/img/projets/ndi25/accueil.png';
import imgNDISobriete from '@/assets/img/projets/ndi25/sobriete.png';
import imgNDIlaser from '@/assets/img/projets/ndi25/laser.png';

const gallery = [
  { src: imgNDIAccueil, caption: "Page d'accueil du Village Numérique" },
  { src: imgNDISobriete, caption: "Page sobriété numérique" },
  { src: imgNDIlaser, caption: "Mini jeux laser game" }
];

const stack = [
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
];

const competences = [
  "Développement sous contrainte de temps (15h)",
  "Collaboration Agile (Git) & Travail en équipe",
  "Intégration Web",
  "Green IT & Sobriété numérique",
  "Culture Générale & Sensibilisation"
];

const isLightboxOpen = ref(false);
const currentImage = ref('');

const openLightbox = (imgSrc: string) => {
  currentImage.value = imgSrc;
  isLightboxOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
  currentImage.value = '';
  document.body.style.overflow = 'auto';
};
</script>

<template>
  <article>
    <header class="mb-12">
      <div class="flex flex-wrap gap-3 mb-4">
        <span class="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm font-bold rounded-full">WEB</span>
        <span class="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-bold rounded-full">Hackathon</span>
      </div>
      <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
        Nuit de l'Info 2025
      </h1>

      <div class="w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl mb-8">
        <img :src="imgNDI" alt="Bannière Nuit de l'info" class="w-full h-full object-cover" />
      </div>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

      <div class="lg:col-span-2 space-y-16">

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span class="text-indigo-600">#</span> Le Sujet : Village Numérique Résistant
          </h2>

          <div class="prose dark:prose-invert text-slate-600 dark:text-slate-300 text-lg leading-relaxed space-y-4">
            <p>
              Le thème de cette année, <strong>"Le Village Numérique Résistant"</strong>, nous invitait à imaginer comment les établissements scolaires peuvent tenir tête aux géants du Web ("Big Tech") à la manière de David contre Goliath.
            </p>
            <p>
              L'objectif était de concevoir une application Web ludique et engageante pour promouvoir la démarche <strong>NIRD</strong> (Numérique Inclusif, Responsable et Durable). Il fallait aider les élèves et enseignants à reprendre le pouvoir sur leurs outils numériques.
            </p>

            <div class="mt-6">
              <a
                :href="pdfSujet"
                target="_blank"
                class="inline-flex items-center gap-2 px-5 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
              >
                <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                Voir le sujet officiel (PDF)
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
            <span class="text-indigo-600">#</span> Déroulement de la nuit
          </h2>

          <div class="relative border-l-2 border-indigo-200 dark:border-indigo-900 ml-3 space-y-10">
            <div class="relative pl-8">
              <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950"></span>
              <h3 class="text-xl font-bold text-indigo-600 mb-1">18h - 20h : Brainstorming</h3>
              <p class="text-slate-600 dark:text-slate-400">
                Lors du lancement de l’événement, nous avons pris connaissance du thème et des défis proposés. Une première session de brainstorming a permis de générer des idées et de définir un concept original autour du sujet. Pour mener à bien ce projet, nous avons adopté une méthodologie agile en nous concentrant sur une organisation claire et une communication efficace au sein de l'équipe.
              </p>
              <p class="text-slate-600 dark:text-slate-400">
                Chaque membre de l'équipe s'est vu attribuer une mission spécifique :
              </p>
              <ul>
                <li class="text-slate-600 dark:text-slate-400"> ● Création d'un chatbot</li>
                <li class="text-slate-600 dark:text-slate-400"> ● Génération des images</li>
                <li class="text-slate-600 dark:text-slate-400"> ● Jeux laser game</li>
                <li class="text-slate-600 dark:text-slate-400"> ● Pages principales du site</li>
              </ul>
            </div>
            <div class="relative pl-8">
              <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950"></span>
              <h3 class="text-xl font-bold text-indigo-600 mb-1">20h - 05h : Développement Intensif</h3>
              <p class="text-slate-600 dark:text-slate-400">
                Une fois les idées principales définies et les rôles attribués, nous avons rapidement élaboré un prototype fonctionnel de l’application. Cette étape nous a permis de visualiser la structure globale du site, d’organiser les différentes sections (accueil, contenus éducatifs, quiz, animations) et de tester l’ergonomie de l’interface utilisateur. L’objectif était de valider notre concept initial tout en identifiant les éventuelles contraintes techniques ou ergonomiques.
              </p>
              <br>
              <p class="text-slate-600 dark:text-slate-400">
                Le projet a été construit par étapes, avec des sessions de tests régulières pour garantir la qualité du code et la cohérence fonctionnelle. Grâce à Vue.js, nous avons pu rapidement construire une application web dynamique avec une navigation fluide entre les sections éducatives, les jeux et les animations visuelles.
              </p>
            </div>
            <div class="relative pl-8">
              <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950"></span>
              <h3 class="text-xl font-bold text-indigo-600 mb-1">05h - 08h : Finitions & Livraison</h3>
              <p class="text-slate-600 dark:text-slate-400">
                Merge final, résolution des conflits Git et déploiement. Fatigués mais fiers !
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="text-indigo-600">#</span> Galerie
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="(image, idx) in gallery"
              :key="idx"
              class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm group cursor-zoom-in"
              @click="openLightbox(image.src)"
            >
              <img
                :src="image.src"
                class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Capture projet"
              />
              <p class="p-2 text-center text-sm text-slate-500 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700">
                {{ image.caption }}
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="text-indigo-600">#</span> Ma Contribution
          </h2>

          <div class="space-y-6">

            <div class="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800">
              <h3 class="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">🌿 Page "Sobriété Numérique"</h3>
              <p class="text-slate-700 dark:text-slate-300 mb-4">
                J'ai entièrement conçu et développé la page dédiée à la sensibilisation. Elle explique de manière pédagogique les impacts du numérique (pollution, consommation) et les bonnes pratiques NIRD.
              </p>
              <a
                href="https://yota02.github.io/Ndi-2026/#/sobriete-numerique"
                target="_blank"
                class="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold hover:underline"
              >
                Voir la page Sobriété
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
            </div>

            <div class="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800">
              <h3 class="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">🎨 Design & UI (CSS Natif)</h3>
              <p class="text-slate-700 dark:text-slate-300">
                Pour la page d'accueil, j'ai fait le choix technique de <strong>ne pas utiliser de framework CSS</strong> (comme Tailwind) mais de tout réaliser en <strong>CSS3 pur</strong>.
                <br><br>
                Cela m'a permis d'avoir un contrôle total sur l'identité visuelle, de créer des animations fluides sur mesure, et surtout de garantir un code ultra-léger, en parfaite cohérence avec le thème de la sobriété numérique.
              </p>
            </div>

          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="text-indigo-600">#</span> Bilan & Compétences
          </h2>

          <div class="mb-6 text-lg text-slate-600 dark:text-slate-300">
            <p>
              Cette nuit m'a appris que <strong>l'organisation est aussi importante que le code</strong>. Face à la fatigue, c'est la rigueur du Git Flow et la communication qui nous ont sauvés. J'ai aussi découvert concrètement les contraintes de l'éco-conception.
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <span
              v-for="skill in competences"
              :key="skill"
              class="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-medium border border-slate-200 dark:border-slate-700"
            >
              ✅ {{ skill }}
            </span>
          </div>
        </section>

      </div>

      <div class="lg:col-span-1 space-y-8">

        <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg sticky top-32">
          <h3 class="font-bold text-slate-900 dark:text-white mb-4 text-lg">Fiche Technique</h3>
          <ul class="space-y-3 text-slate-600 dark:text-slate-400 mb-8">
            <li class="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
              <span>📅 Date</span> <span class="font-medium text-slate-900 dark:text-white">4 - 5 Déc. 2025</span>
            </li>
            <li class="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
              <span>⏱️ Durée</span> <span class="font-medium text-slate-900 dark:text-white">15 heures</span>
            </li>
            <li class="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
              <span>👥 Équipe</span> <span class="font-medium text-slate-900 dark:text-white">10 pers.</span>
            </li>
          </ul>

          <h3 class="font-bold text-slate-900 dark:text-white mb-4 text-lg">Stack Technique</h3>
          <div class="flex flex-wrap gap-2 mb-8">
            <div
              v-for="tech in stack"
              :key="tech.name"
              class="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm"
            >
              <img :src="tech.icon" :alt="tech.name" class="w-5 h-5" />
              <span class="text-sm font-medium text-slate-700 dark:text-slate-200">{{ tech.name }}</span>
            </div>
          </div>

          <div class="flex flex-col gap-3">
            <a href="https://github.com/Yota02/Ndi-2026" target="_blank" class="flex justify-center items-center gap-2 w-full py-3 bg-slate-900 text-white text-center rounded-xl hover:bg-slate-700 transition font-semibold shadow-lg shadow-slate-900/20">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.04-.015-2.04-3.33.72-4.035-1.41-4.035-1.41-.54-1.38-1.335-1.755-1.335-1.755-1.085-.735.09-.72.09-.72 1.2.075 1.83 1.245 1.83 1.245 1.05 1.785 2.76 1.275 3.435.975.105-.75.405-1.275.75-1.575-2.655-.3-5.445-1.335-5.445-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z"/></svg>
              Voir le Repo
            </a>
            <a href="https://yota02.github.io/Ndi-2026/#/" target="_blank" class="flex justify-center items-center gap-2 w-full py-3 bg-indigo-600 text-white text-center rounded-xl hover:bg-indigo-700 transition font-semibold shadow-lg shadow-indigo-500/30">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              Voir le Live
            </a>
          </div>
        </div>
      </div>

    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="isLightboxOpen"
          class="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          @click="closeLightbox"
        >
          <button
            class="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
            @click.stop="closeLightbox"
          >
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <img
            :src="currentImage"
            class="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain animate-zoom"
            @click.stop
            alt="Image en grand"
          />

          <p class="absolute bottom-6 text-white/80 text-center w-full px-4 font-medium">
            Cliquez n'importe où pour fermer
          </p>
        </div>
      </Transition>
    </Teleport>
  </article>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes zoomIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.animate-zoom {
  animation: zoomIn 0.3s ease-out forwards;
}
</style>
