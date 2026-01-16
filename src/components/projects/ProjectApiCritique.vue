<script setup lang="ts">
import { ref } from 'vue';

import imgAPI from '@/assets/img/projets/critiquejus/api.png';
import imgSwagger from '@/assets/img/projets/critiquejus/swagger_ui.png';
import imgJson from '@/assets/img/projets/critiquejus/json_response.png';
import imgFront from '@/assets/img/projets/critiquejus/front_mobile.png';

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
    src: imgSwagger,
    caption: "Documentation Swagger (OpenAPI)",
    description: "Interface auto-générée par API Platform listant tous les endpoints disponibles (GET, POST, PUT, DELETE) pour les Jus et les Critiques."
  },
  {
    src: imgJson,
    caption: "Réponse JSON standardisée",
    description: "Exemple de réponse au format JSON-LD (Hydra) incluant la pagination et les relations entre entités."
  },
  {
    src: imgFront,
    caption: "Intégration Frontend (Vue.js)",
    description: "Aperçu rapide de l'application cliente consommant l'API pour afficher les cartes de jus."
  },
];

const stack: StackItem[] = [
  { name: 'Symfony', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg' },
  { name: 'PHP 8', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'JWT', icon: 'https://jwt.io/img/pic_logo.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' }
];

const competences = [
  "Conception API REST (Niveau 3 Richardson)",
  "Sérialisation & Groupes de données",
  "Sécurité API (JWT & Voters)",
  "Architecture API First",
  "Documentation OpenAPI"
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
        <span class="px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-full">DATA</span>
        <span class="px-3 py-1 bg-sky-100 text-sky-700 text-sm font-bold rounded-full">Backend API</span>
      </div>
      <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
        API Gestion de Critiques de Jus
      </h1>

      <div class="w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl mb-8 border border-slate-200 dark:border-slate-800 bg-slate-900 flex items-center justify-center relative group">
        <img :src="imgAPI" alt="Documentation API" class="w-full h-full object-cover opacity-90" />
      </div>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

      <div class="lg:col-span-2 space-y-16">

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span class="text-sky-500">#</span> Contexte : API Rest
          </h2>

          <div class="prose dark:prose-invert text-slate-600 dark:text-slate-300 text-lg leading-relaxed space-y-4">
            <p>
              Ce projet vise à créer une architecture robuste séparant totalement la logique métier (Backend) de l'interface utilisateur (Frontend). L'objectif était de développer une <strong>API REST</strong> complète permettant de gérer une base de données de Jus de fruits et les critiques associées.
            </p>
            <p>
              Contrairement à un site classique rendu par le serveur (Twig), ici Symfony ne renvoie que de la <strong>donnée brute (JSON-LD)</strong>. C'est le socle technique idéal pour alimenter ensuite une application mobile ou une SPA (Single Page Application).
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
            <span class="text-sky-500">#</span> Architecture Backend
          </h2>

          <div class="relative border-l-2 border-sky-200 dark:border-sky-900 ml-3 space-y-12">

            <div class="relative pl-8">
              <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-sky-500 border-4 border-white dark:border-slate-950"></span>
              <h3 class="text-xl font-bold text-sky-600 dark:text-sky-400 mb-2">Puissance d'API Platform</h3>
              <p class="text-slate-600 dark:text-slate-400 mb-4">
                Au lieu d'écrire manuellement chaque contrôleur, j'ai utilisé <strong>API Platform</strong> pour exposer mes entités Doctrine. Cela permet de générer automatiquement des endpoints standardisés, paginés et documentés.
              </p>

              <div class="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm shadow-xl overflow-x-auto border border-slate-700 mb-4">
                <div class="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                  <span class="text-yellow-400 text-xs font-bold">src/Entity/Critique.php</span>
                </div>
                <div class="text-gray-300 leading-relaxed">
                  <p><span class="text-purple-400">#[ApiResource(</span></p>
                  <p class="pl-4"><span class="text-sky-300">normalizationContext:</span> ['groups' => ['read:critique']],</p>
                  <p class="pl-4"><span class="text-sky-300">denormalizationContext:</span> ['groups' => ['write:critique']],</p>
                  <p class="pl-4"><span class="text-sky-300">security:</span> "is_granted('ROLE_USER')"</p>
                  <p><span class="text-purple-400">)]</span></p>
                  <p><span class="text-purple-400">class</span> <span class="text-yellow-200">Critique</span> {</p>
                  <p class="pl-4 text-gray-500">// Propriétés exposées via les groupes...</p>
                  <p>}</p>
                </div>
              </div>
            </div>

            <div class="relative pl-8">
              <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-sky-500 border-4 border-white dark:border-slate-950"></span>
              <h3 class="text-xl font-bold text-sky-600 dark:text-sky-400 mb-2">Sérialisation & Sécurité</h3>
              <ul class="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li><strong>Groupes de sérialisation :</strong> Contrôle précis des données envoyées. Par exemple, l'endpoint <code>GET /jus</code> n'affiche pas l'email des auteurs des critiques pour protéger la vie privée.</li>
                <li><strong>JWT (Json Web Token) :</strong> Authentification stateless. L'utilisateur reçoit un token à la connexion qu'il doit renvoyer à chaque requête.</li>
                <li><strong>Voters :</strong> Logique conditionnelle fine. <em>"Un utilisateur ne peut modifier ou supprimer que sa propre critique."</em></li>
              </ul>
            </div>

            <div class="relative pl-8">
              <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-4 border-white dark:border-slate-950"></span>
              <h3 class="text-xl font-bold text-green-600 mb-2">Consommation Frontend</h3>
              <p class="text-slate-600 dark:text-slate-400">
                Bien que le cœur du projet soit l'API, j'ai réalisé une interface légère avec <strong>Vue.js</strong>. Elle effectue des requêtes AJAX (via Fetch/Axios) pour récupérer la liste des jus et permet de poster une critique dynamiquement sans recharger la page.
              </p>
            </div>

          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="text-sky-500">#</span> Documentation & Tests
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="(image, idx) in gallery"
              :key="idx"
              class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all group cursor-zoom-in"
              @click="openLightbox(image.src)"
            >
              <img
                :src="image.src"
                class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                :alt="image.caption"
              />
              <p class="p-3 text-center text-sm font-medium text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-slate-700">
                {{ image.caption }}
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="text-sky-500">#</span> Bilan Technique
          </h2>

          <div class="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
            <ul class="space-y-4 text-slate-600 dark:text-slate-300">
              <li class="flex gap-3">
                <span class="text-2xl">🔌</span>
                <div>
                  <strong class="text-sky-600 dark:text-sky-400 block">Interopérabilité</strong>
                  Création d'un système ouvert capable de dialoguer avec n'importe quel client (Web, Mobile, Logiciel tiers).
                </div>
              </li>
              <li class="flex gap-3">
                <span class="text-2xl">🛡️</span>
                <div>
                  <strong class="text-sky-600 dark:text-sky-400 block">Sécurité par Design</strong>
                  Protection des endpoints sensibles et gestion stricte des droits d'accès aux ressources.
                </div>
              </li>
              <li class="flex gap-3">
                <span class="text-2xl">📚</span>
                <div>
                  <strong class="text-sky-600 dark:text-sky-400 block">Documentation Automatisée</strong>
                  Utilisation des standards OpenAPI (Swagger) pour fournir une documentation claire et testable aux développeurs.
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="text-sky-500">#</span> Compétences Validées
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
              <span>📂 Type</span> <span class="font-medium text-slate-900 dark:text-white">Projet Universitaire</span>
            </li>
            <li class="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
              <span>👥 Équipe</span> <span class="font-medium text-slate-900 dark:text-white">Binôme</span>
            </li>
            <li class="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
              <span>⚙️ Tech</span> <span class="font-medium text-slate-900 dark:text-white">API REST</span>
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
            <a href="https://webinfo.iutmontp.univ-montp2.fr/~garciaj/CritiqueDuJujus/public/api" target="_blank" class="flex justify-center items-center gap-2 w-full py-3 bg-sky-500 text-white text-center rounded-xl hover:bg-sky-600 transition font-semibold shadow-lg shadow-sky-500/30">
              Voir la Documentation API
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
            <span class="text-xs text-center text-slate-400">Accès Public (Swagger UI)</span>
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
