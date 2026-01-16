<script setup lang="ts">
import { ref } from 'vue';

import imgCapitalwars from '@/assets/img/projets/capitalwars/capital-wars.png'
import imgHome from '@/assets/img/projets/capitalwars/capital-wars.png';
import imgLogin from '@/assets/img/projets/capitalwars/login.png';
import imgDashboard from '@/assets/img/projets/capitalwars/dashboard.png';
import imgLobby from '@/assets/img/projets/capitalwars/lobby.png';

interface GalleryItem {
  src: string;
  caption: string;
  description?: string;
}

interface StackItem {
  name: string;
  icon: string;
}

const gallery: GalleryItem[] = [
  {
    src: imgHome,
    caption: "Page d'Accueil",
    description: "Point d'entrée de l'application Capital Wars, présentant le jeu et permettant l'accès rapide."
  },
  {
    src: imgLogin,
    caption: "Authentification Sécurisée",
    description: "Portail de connexion pour les étudiants (Joueurs) et les professeurs (Arbitres)."
  },
  {
    src: imgLobby,
    caption: "Lobby & Gestion de Partie",
    description: "Interface d'attente synchronisée. Les équipes attendent ici que l'arbitre valide le passage au tour suivant (Année N+1)."
  },
  {
    src: imgDashboard,
    caption: "Tableau de Bord Décisionnel",
    description: "Le cœur du jeu : interface permettant de saisir les décisions stratégiques (Prix, Pub, Embauche) et de visualiser les rapports financiers (Bilan, Compte de résultat)."
  },
];

const stack: StackItem[] = [
  { name: 'Symfony 7', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg' },
  { name: 'Twig', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'SCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' }
];

const competences = [
  "Intégration d'interfaces complexes (Tableaux de données)",
  "UX/UI pour Jeux Sérieux (Serious Game)",
  "Gestion de formulaires Symfony complexes",
  "Travail collaboratif (Semestre)",
  "Architecture MVC"
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
      </div>
      <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
        Capital Wars
      </h1>

      <div class="w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl mb-8 border border-slate-200 dark:border-slate-800 relative group">
        <img :src="imgCapitalwars" alt="Capital Wars Dashboard" class="w-full h-full object-cover object-top" />
      </div>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

      <div class="lg:col-span-2 space-y-16">

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span class="text-green-600">#</span> Le Projet : Simulation EXIGE
          </h2>

          <div class="prose dark:prose-invert text-slate-600 dark:text-slate-300 text-lg leading-relaxed space-y-4">
            <p>
              <strong>Capital Wars</strong> est la digitalisation du jeu de simulation d'entreprise "EXIGE". Développé sur un semestre entier, ce projet a pour but de permettre à des étudiants de s'affronter sur un marché virtuel concurrentiel.
            </p>
            <p>
              Les équipes dirigent des entreprises fabriquant des appareils électriques. Elles doivent prendre des décisions cruciales à chaque "tour" (année) :
              fixation des prix, budget publicité, gestion des ressources humaines (embauches, salaires), et investissements en R&D pour optimiser les coûts de production.
            </p>
            <p class="text-sm italic border-l-4 border-green-500 pl-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-r-lg">
              Le défi technique était de transformer un manuel de jeu dense (gestion de bilans, comptes de résultats, amortissements) en une application web fluide et intuitive.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
            <span class="text-green-600">#</span> UI & Frontend Design
          </h2>

          <div class="relative border-l-2 border-green-200 dark:border-green-900 ml-3 space-y-12">

            <div class="relative pl-8">
              <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-600 border-4 border-white dark:border-slate-950"></span>
              <h3 class="text-xl font-bold text-green-600 mb-2">Ergonomie & Visualisation de Données</h3>
              <p class="text-slate-600 dark:text-slate-400 mb-4">
                En tant que responsable de l'interface, mon rôle était de rendre lisibles des données financières complexes. Le jeu génère des <strong>Comptes de Résultat</strong> et des <strong>Bilans</strong> détaillés à chaque tour.
              </p>
              <ul class="list-disc list-inside text-slate-600 dark:text-slate-400 ml-4">
                <li>Design de tableaux de bord clairs pour la prise de décision rapide.</li>
                <li>Création de formulaires dynamiques pour la saisie des décisions (Marketing, RH, Production).</li>
                <li>Utilisation de <strong>Twig</strong> pour le templating avancé et l'héritage de layouts.</li>
              </ul>
            </div>

            <div class="relative pl-8">
              <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-600 border-4 border-white dark:border-slate-950"></span>
              <h3 class="text-xl font-bold text-green-600 mb-4">Le "Hub" Central</h3>
              <p class="text-slate-600 dark:text-slate-400">
                J'ai conçu la page "Lobby" et le Dashboard principal. L'enjeu était de gérer les différents états du jeu :
                <em>En attente des joueurs</em>, <em>Tour en cours</em>, <em>Calcul des résultats</em>. L'interface guide l'utilisateur à travers ces phases sans confusion.
              </p>
            </div>

          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="text-green-600">#</span> Immersion dans le jeu
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="(image, idx) in gallery"
              :key="idx"
              class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all group cursor-zoom-in"
              @click="openLightbox(image.src)"
            >
              <div class="h-48 overflow-hidden relative">
                <img
                  :src="image.src"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  :alt="image.caption"
                />
              </div>
              <div class="p-4">
                <h4 class="font-bold text-slate-900 dark:text-white mb-2">{{ image.caption }}</h4>
                <p class="text-sm text-slate-600 dark:text-slate-400">{{ image.description }}</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="text-green-600">#</span> Bilan
          </h2>

          <div class="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-4">Apprentissages</h3>
            <ul class="space-y-3 text-slate-600 dark:text-slate-300">
              <li class="flex gap-3">
                <span class="text-2xl">🎨</span>
                <div>
                  <strong class="text-green-600 dark:text-green-400 block">Intégration Web</strong>
                  Traduction d'un besoin fonctionnel complexe (règles de gestion strictes) en une interface utilisateur simple et efficace.
                </div>
              </li>
              <li class="flex gap-3">
                <span class="text-2xl">🧩</span>
                <div>
                  <strong class="text-green-600 dark:text-green-400 block">Symfony & Twig</strong>
                  Utilisation poussée du moteur de template pour gérer l'affichage conditionnel des données selon l'état de la partie.
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="text-green-600">#</span> Compétences Validées
          </h2>
          <div class="flex flex-wrap gap-3">
            <span v-for="skill in competences" :key="skill" class="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-medium border border-slate-200 dark:border-slate-700">
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
              <span>📂 Type</span> <span class="font-medium text-slate-900 dark:text-white">Projet Semestre</span>
            </li>
            <li class="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
              <span>⏱️ Période</span> <span class="font-medium text-slate-900 dark:text-white">Sept 25 - Jan 26</span>
            </li>
            <li class="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
              <span>👨‍💻 Rôle</span> <span class="font-medium text-slate-900 dark:text-white">Frontend Lead</span>
            </li>
          </ul>

          <h3 class="font-bold text-slate-900 dark:text-white mb-4 text-lg">Stack Technique</h3>
          <div class="flex flex-wrap gap-2 mb-8">
            <div v-for="tech in stack" :key="tech.name" class="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">
              <img :src="tech.icon" :alt="tech.name" class="w-5 h-5" />
              <span class="text-sm font-medium text-slate-700 dark:text-slate-200">{{ tech.name }}</span>
            </div>
          </div>

          <div class="flex flex-col gap-3">
            <a href="https://dev.capitalwars.rlbrt.fr/" target="_blank" class="flex justify-center items-center gap-2 w-full py-3 bg-slate-900 text-white text-center rounded-xl hover:bg-slate-700 transition font-semibold shadow-lg shadow-slate-900/20">
              Accéder à Capital Wars
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
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
        </div>
      </Transition>
    </Teleport>
  </article>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
@keyframes zoomIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
.animate-zoom { animation: zoomIn 0.3s ease-out forwards; }
</style>
