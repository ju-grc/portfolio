<script setup lang="ts">
import { ref } from 'vue';

import imgHome from '@/assets/img/projets/grabastar/4.jpg';
import imgProfile from '@/assets/img/projets/grabastar/profile_upload.png';
import imgAdmin from '@/assets/img/projets/grabastar/admin_users.png';

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
    caption: "Page d'Accueil (Landing Page)",
    description: "Conception complète de l'identité visuelle : Hero section accrocheuse, explication du concept en 3 étapes et design responsive soigné."
  },
  {
    src: imgProfile,
    caption: "Espace Gestion de Profil",
    description: "Interface utilisateur pour l'upload d'avatar. Gestion des états (avatar par défaut / avatar personnalisé) et feedback visuel immédiat."
  },
  {
    src: imgAdmin,
    caption: "Interface d'Administration",
    description: "Tableau de bord permettant aux administrateurs de gérer les utilisateurs inscrits."
  },
];

const stack: StackItem[] = [
  { name: 'Symfony 6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg' },
  { name: 'PHP 8', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Twig', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3 Custom', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' }
];

const competences = [
  "Développement Symfony Avancé",
  "Création de Commandes Console",
  "Intégration Web & UI Design",
  "Gestion de fichiers (Upload sécurisé)",
  "Travail en équipe (4 personnes)"
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
        Grabastar
      </h1>

      <div class="w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl mb-8 border border-slate-200 dark:border-slate-800 relative group">
        <img :src="imgHome" alt="Grabastar Accueil" class="w-full h-full object-cover" />
      </div>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

      <div class="lg:col-span-2 space-y-16">

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span class="text-purple-600">#</span> Le Projet : Un Gravatar Open Source
          </h2>

          <div class="prose dark:prose-invert text-slate-600 dark:text-slate-300 text-lg leading-relaxed space-y-4">
            <p>
              Réalisé en équipe de 4 étudiants dans le cadre du module "Programmation Avancée Web", <strong>Grabastar</strong> est un service centralisé de gestion d'avatars, inspiré du célèbre <em>Gravatar</em>.
            </p>
            <p>
              L'objectif était de créer une application capable d'associer une image de profil à une adresse email et de la servir publiquement via une API simple basée sur le hash de l'email.
            </p>

            <div class="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-xl border border-purple-100 dark:border-purple-800 mt-4">
              <h4 class="font-bold text-purple-800 dark:text-purple-400 mb-2">🎯 Fonctionnalités clés :</h4>
              <ul class="list-disc list-inside text-sm space-y-1">
                <li>Inscription et gestion de profil (Changement MDP, Email).</li>
                <li>Upload, redimensionnement et suppression d'avatar.</li>
                <li><strong>API Publique :</strong> Accès à l'avatar via <code>/avatar/{hash_sha256}</code>.</li>
                <li>Système de rôles (Utilisateur / Administrateur).</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
            <span class="text-purple-600">#</span> Ma Contribution : Front & CLI
          </h2>

          <div class="relative border-l-2 border-purple-200 dark:border-purple-900 ml-3 space-y-12">

            <div class="relative pl-8">
              <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-600 border-4 border-white dark:border-slate-950"></span>
              <h3 class="text-xl font-bold text-purple-600 mb-2">Design & Intégration Frontend</h3>
              <p class="text-slate-600 dark:text-slate-400 mb-4">
                J'ai pris en charge l'intégralité du développement Frontend. Mon objectif était de créer une interface moderne, rassurante et explicite ("L'identité visuelle que vous méritez").
              </p>
              <ul class="list-disc list-inside text-slate-600 dark:text-slate-400 ml-4 mb-4">
                <li>Utilisation avancée de <strong>Twig</strong> (Templates, Macros, Héritage).</li>
                <li>Design responsive sans framework CSS lourd (CSS Custom).</li>
                <li>Mise en place de feedbacks utilisateurs (Flash messages, validation JS).</li>
              </ul>
            </div>

            <div class="relative pl-8">
              <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-600 border-4 border-white dark:border-slate-950"></span>
              <h3 class="text-xl font-bold text-purple-600 mb-4">Commandes Personnalisées Symfony</h3>
              <p class="text-slate-600 dark:text-slate-400 mb-4">
                Côté Backend, je me suis occupé de l'automatisation via la <strong>Console Symfony</strong>. J'ai développé des commandes permettant d'administrer le site directement depuis le terminal serveur, un atout majeur pour la maintenance.
              </p>

              <div class="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm shadow-xl overflow-x-auto border border-slate-700 relative group mb-4">
                <div class="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                  <span class="text-gray-400 text-xs font-bold">Terminal - Serveur</span>
                  <div class="flex gap-1.5">
                    <div class="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
                  </div>
                </div>

                <div class="text-gray-300 leading-relaxed">
                  <p class="mb-2"><span class="text-green-400">user@grabastar:~$</span> php bin/console app:create-user</p>

                  <p class="text-cyan-300 font-bold mb-2">Création d'un nouvel utilisateur</p>
                  <p class="mb-1">Email : <span class="text-white">admin@grabastar.fr</span></p>
                  <p class="mb-1">Mot de passe : <span class="text-gray-500">*******</span></p>
                  <p class="mb-1">Rôle [ROLE_USER] : <span class="text-white">ROLE_ADMIN</span></p>

                  <p class="mt-2 text-green-400 font-bold">[OK] L'utilisateur admin@grabastar.fr a été créé avec succès !</p>
                </div>
              </div>

              <p class="text-sm text-slate-500 italic">
                Cette commande utilise le <code>UserPasswordHasherInterface</code> pour sécuriser le mot de passe avant l'insertion en base, garantissant la même sécurité que via le formulaire web.
              </p>
            </div>

          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="text-purple-600">#</span> Interface & Design
          </h2>
          <div class="grid grid-cols-1 gap-8">
            <div
              v-for="(image, idx) in gallery"
              :key="idx"
              class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all group cursor-zoom-in"
              @click="openLightbox(image.src)"
            >
              <div class="flex flex-col md:flex-row h-full">
                <div class="md:w-3/5 h-64 md:h-auto overflow-hidden relative border-r border-slate-100 dark:border-slate-700">
                  <img
                    :src="image.src"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    :alt="image.caption"
                  />
                  <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                </div>
                <div class="p-6 md:w-2/5 flex flex-col justify-center">
                  <h4 class="font-bold text-xl text-slate-900 dark:text-white mb-3">{{ image.caption }}</h4>
                  <p class="text-slate-600 dark:text-slate-400 leading-relaxed">{{ image.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="text-purple-600">#</span> Bilan
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-4">🛠️ Technique</h3>
              <ul class="space-y-3 text-slate-600 dark:text-slate-300 text-sm">
                <li><strong class="text-purple-600 dark:text-purple-400">Symfony :</strong> Compréhension approfondie de l'architecture MVC et de l'injection de dépendances.</li>
                <li><strong class="text-purple-600 dark:text-purple-400">CLI :</strong> Capacité à étendre les fonctionnalités du framework via la console.</li>
              </ul>
            </div>

            <div class="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-4">🤝 Humain</h3>
              <ul class="space-y-3 text-slate-600 dark:text-slate-300 text-sm">
                <li><strong class="text-purple-600 dark:text-purple-400">Collaboration :</strong> Gestion des conflits Git et répartition des tâches backend/frontend dans une équipe de 4.</li>
                <li><strong class="text-purple-600 dark:text-purple-400">Rigueur :</strong> Respect d'un cahier des charges strict (sécurité des fichiers, droits d'accès).</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="text-purple-600">#</span> Compétences Validées
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
              <span>👥 Équipe</span> <span class="font-medium text-slate-900 dark:text-white">4 Étudiants</span>
            </li>
            <li class="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
              <span>📅 Année</span> <span class="font-medium text-slate-900 dark:text-white">2025</span>
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
            <a href="https://webinfo.iutmontp.univ-montp2.fr/~turpinb/grabastar/public/" target="_blank" class="flex justify-center items-center gap-2 w-full py-3 bg-purple-600 text-white text-center rounded-xl hover:bg-purple-700 transition font-semibold shadow-lg shadow-purple-500/30">
              Voir le site Live
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
            <span class="text-xs text-center text-slate-400">Accès public</span>
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
