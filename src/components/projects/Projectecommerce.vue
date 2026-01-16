<script setup lang="ts">
import { ref } from 'vue';

import imgHome from '@/assets/img/projets/ecommerce/home_page.png';
import imgLogin from '@/assets/img/projets/ecommerce/login_page.png';
import imgAccount from '@/assets/img/projets/ecommerce/account_page.png';
import imgAdmin from '@/assets/img/projets/ecommerce/admin_page.png';

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
    caption: "Page d'accueil et liste des produits",
    description: "Interface principale affichant les déguisements avec nom, prix et visuel. Le bouton d'ajout au panier témoigne de l'intégration UI prévue."
  },
  {
    src: imgLogin,
    caption: "Interface de Connexion/Inscription",
    description: "Formulaire sécurisé permettant l'accès aux fonctionnalités client et administrateur."
  },
  {
    src: imgAccount,
    caption: "Page Mon Compte",
    description: "Espace utilisateur. Note : Une erreur d'affichage sur l'historique des commandes a été identifiée lors de la conception backend."
  },
  {
    src: imgAdmin,
    caption: "Back-office Administrateur",
    description: "Interface CRUD complète permettant de modifier les utilisateurs et supprimer des comptes."
  },
];

const stack: StackItem[] = [
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

const competences = [
  "Architecture MVC",
  "Sécurité (Hachage & Salage)",
  "Base de données Relationnelle",
  "Déploiement Serveur (SFTP/SSH)",
  "Travail en équipe (GitLab)"
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
        Site E-Commerce : Déguisements pour animaux
      </h1>

      <div class="w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl mb-8 border border-slate-200 dark:border-slate-800">

      </div>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

      <div class="lg:col-span-2 space-y-16">

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span class="text-indigo-600">#</span> Contexte & Enjeux
          </h2>

          <div class="prose dark:prose-invert text-slate-600 dark:text-slate-300 text-lg leading-relaxed space-y-4">
            <p>
              Ce projet a été réalisé dans le cadre du module de développement Web à l’IUT de Montpellier. L'objectif était de concevoir, en équipe de trois, un site de e-commerce fonctionnel pour mettre en pratique les compétences acquises : <strong>PHP/MySQL</strong>, architecture <strong>MVC</strong>, versionnage <strong>Git</strong> et déploiement serveur.
            </p>
            <p>
              Nous avons choisi le thème des <em>"Déguisements pour animaux"</em>. Le projet imposait une rigueur professionnelle, de la gestion du dépôt GitLab à la soutenance technique sans support visuel.
            </p>

            <div class="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800 mt-4">
              <h4 class="font-bold text-indigo-800 dark:text-indigo-400 mb-2">🎯 Objectifs Pédagogiques :</h4>
              <ul class="list-disc list-inside text-sm space-y-1">
                <li>Conception MVC en PHP natif (sans framework).</li>
                <li>Modélisation et interaction avec une base MySQL.</li>
                <li>Déploiement sur environnement Linux distant (SSH/SFTP).</li>
                <li>Collaboration technique via GitLab.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
            <span class="text-indigo-600">#</span> Déroulement du projet
          </h2>

          <div class="relative border-l-2 border-indigo-200 dark:border-indigo-900 ml-3 space-y-12">

            <div class="relative pl-8">
              <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950"></span>
              <h3 class="text-xl font-bold text-indigo-600 mb-2">Phase 1 : Organisation</h3>
              <p class="text-slate-600 dark:text-slate-400 mb-2">
                Planification détaillée et configuration de l'environnement de travail collaboratif.
              </p>
              <ul class="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 ml-4">
                <li>Configuration du dépôt GitLab et des droits SSH.</li>
                <li>Hébergement initial sur le serveur universitaire (webinfo).</li>
                <li>Répartition des tâches Backend / Frontend / Base de données.</li>
              </ul>
            </div>

            <div class="relative pl-8">
              <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950"></span>
              <h3 class="text-xl font-bold text-indigo-600 mb-2">Phase 2 : Développement</h3>
              <p class="text-slate-600 dark:text-slate-400">
                Implémentation des fonctionnalités clés : listing dynamique des produits depuis la BDD, pages de détails, et création d'un back-office administrateur pour la gestion du catalogue (CRUD Produits).
              </p>
            </div>

            <div class="relative pl-8">
              <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950"></span>
              <h3 class="text-xl font-bold text-indigo-600 mb-4">Phase 3 : Interface & Résultats</h3>

              <div class="grid grid-cols-1 gap-6">
                <div
                  v-for="(image, idx) in gallery"
                  :key="idx"
                  class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all group cursor-zoom-in"
                  @click="openLightbox(image.src)"
                >
                  <div class="flex flex-col md:flex-row h-full">
                    <div class="md:w-1/2 h-48 md:h-auto overflow-hidden">
                      <img
                        :src="image.src"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        :alt="image.caption"
                      />
                    </div>
                    <div class="p-4 md:w-1/2 flex flex-col justify-center">
                      <h4 class="font-bold text-slate-900 dark:text-white mb-2">{{ image.caption }}</h4>
                      <p class="text-sm text-slate-600 dark:text-slate-400">{{ image.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span class="text-indigo-600">#</span> Focus Technique : Sécurité
          </h2>

          <p class="text-slate-600 dark:text-slate-400 mb-4">
            Pour sécuriser les comptes utilisateurs, j'ai implémenté une classe <code>MotDePasse</code> robuste combinant <strong>sel (salt)</strong> et <strong>poivre (pepper)</strong>.
            L'utilisation conjointe de <code>hash_hmac</code> (avec une clé secrète serveur) et de <code>password_hash</code> (Bcrypt) rend les attaques par force brute extrêmement coûteuses.
          </p>

          <div class="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm shadow-xl overflow-x-auto border border-slate-700 relative group mb-4">
            <div class="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
              <span class="text-blue-400 text-xs font-bold">App/PAP/Lib/MotDePasse.php</span>
              <div class="flex gap-1.5">
                <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
            </div>

            <div class="text-gray-300 leading-relaxed">
              <p><span class="text-purple-400">class</span> <span class="text-yellow-200">MotDePasse</span> {</p>
              <p class="pl-4 mt-2"><span class="text-gray-500">// Secret serveur (Pepper)</span></p>
              <p class="pl-4"><span class="text-purple-400">private static string</span> <span class="text-orange-300">$poivre</span> = <span class="text-green-300">"Xy9Ez..."</span>;</p>

              <p class="pl-4 mt-2"><span class="text-purple-400">public static function</span> <span class="text-yellow-200">hacher</span>(<span class="text-purple-400">string</span> <span class="text-orange-300">$mdpClair</span>): <span class="text-purple-400">string</span> {</p>
              <p class="pl-8"><span class="text-gray-500">// 1. Ajout du poivre via HMAC SHA-256</span></p>
              <p class="pl-8"><span class="text-orange-300">$mdpPoivre</span> = <span class="text-blue-300">hash_hmac</span>(<span class="text-green-300">"sha256"</span>, <span class="text-orange-300">$mdpClair</span>, <span class="text-yellow-200">self</span>::<span class="text-orange-300">$poivre</span>);</p>
              <p class="pl-8"><span class="text-gray-500">// 2. Hachage avec sel aléatoire (Bcrypt par défaut)</span></p>
              <p class="pl-8"><span class="text-orange-300">$mdpHache</span> = <span class="text-blue-300">password_hash</span>(<span class="text-orange-300">$mdpPoivre</span>, <span class="text-blue-300">PASSWORD_DEFAULT</span>);</p>
              <p class="pl-8"><span class="text-purple-400">return</span> <span class="text-orange-300">$mdpHache</span>;</p>
              <p class="pl-4">}</p>
              <p>}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="text-indigo-600">#</span> Bilan & Apprentissages
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-4">🛠️ Technique</h3>
              <ul class="space-y-3 text-slate-600 dark:text-slate-300 text-sm">
                <li><strong class="text-indigo-600 dark:text-indigo-400">Backend PHP :</strong> Maîtrise de la structure MVC et de la gestion des sessions utilisateurs.</li>
                <li><strong class="text-indigo-600 dark:text-indigo-400">Frontend :</strong> Création d'un design cohérent pour une navigation intuitive.</li>
              </ul>
            </div>

            <div class="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-4">🧠 Humain</h3>
              <ul class="space-y-3 text-slate-600 dark:text-slate-300 text-sm">
                <li><strong class="text-indigo-600 dark:text-indigo-400">Adaptabilité :</strong> Capacité à trouver des solutions alternatives (workarounds) face aux bugs backend.</li>
                <li><strong class="text-indigo-600 dark:text-indigo-400">Travail en équipe :</strong> Coordination via Git pour fusionner les fonctionnalités front et back.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="text-indigo-600">#</span> Compétences Validées
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
              <span>👥 Équipe</span> <span class="font-medium text-slate-900 dark:text-white">3 Étudiants</span>
            </li>
            <li class="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
              <span>📍 Lieu</span> <span class="font-medium text-slate-900 dark:text-white">IUT Montpellier</span>
            </li>
          </ul>

          <h3 class="font-bold text-slate-900 dark:text-white mb-4 text-lg">Stack Technique</h3>
          <div class="flex flex-wrap gap-2 mb-8">
            <div v-for="tech in stack" :key="tech.name" class="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">
              <img :src="tech.icon" :alt="tech.name" class="w-5 h-5" />
              <span class="text-sm font-medium text-slate-700 dark:text-slate-200">{{ tech.name }}</span>
            </div>
          </div>

          <div class="flex flex-col gap-3 opacity-50 cursor-not-allowed">
            <span class="flex justify-center items-center gap-2 w-full py-3 bg-slate-100 dark:bg-slate-800 text-slate-500 text-center rounded-xl font-semibold border border-slate-200 dark:border-slate-700">
              🔒 Code Privé (Scolaire)
            </span>
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
