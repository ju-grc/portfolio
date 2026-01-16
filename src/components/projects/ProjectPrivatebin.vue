<script setup lang="ts">
import { ref } from 'vue';

import imgPrivateBin from '@/assets/img/projets/privatebin/privatebin_0.png';
import imgPrivateBinInterface from '@/assets/img/projets/privatebin/interface.png';

interface GalleryItem {
  src: string;
  caption: string;
}

interface StackItem {
  name: string;
  icon: string;
}

const gallery: GalleryItem[] = [
  { src: imgPrivateBinInterface, caption: "Interface personnalisée CibleWeb" },
];

const stack: StackItem[] = [
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Bash / Shell', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
  { name: 'Linux (Ubuntu)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Apache', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
];

const competences = [
  "Administration Linux",
  "Sécurité (Chiffrement, Zero Knowledge)",
  "Déploiement Automatisé",
  "Documentation Technique",
  "Configuration Apache"
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
        <span class="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-bold rounded-full">SYSTÈME</span>
      </div>
      <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
        Installation de PrivateBin
      </h1>

      <div class="w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl mb-8 border border-slate-200 dark:border-slate-800">
        <img :src="imgPrivateBin" alt="Interface PrivateBin" class="w-full h-full object-cover" />
      </div>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

      <div class="lg:col-span-2 space-y-16">

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span class="text-indigo-600">#</span> Contexte & Objectifs
          </h2>

          <div class="prose dark:prose-invert text-slate-600 dark:text-slate-300 text-lg leading-relaxed space-y-4">
            <p>
              Durant mon stage de 2ème année au sein de l'équipe technique de la société <strong>CibleWeb</strong>, j'ai été chargé de mettre en place une solution sécurisée de partage de notes et de textes confidentiels pour les équipes internes et les clients.
            </p>
            <p>
              L'entreprise avait besoin d'une alternative souveraine aux services publics comme <em>Pastebin</em> pour échanger des tokens, des mots de passe ou des configurations sensibles. Après analyse, <strong>PrivateBin</strong> a été retenu pour ses atouts majeurs :
            </p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Open source et auto-hébergeable.</li>
              <li><strong>Zero Knowledge</strong> : Chiffrement côté client (le serveur ne voit jamais les données en clair).</li>
              <li>Aucune base de données requise (stockage fichier plat).</li>
              <li>Destruction automatique des données après lecture.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
            <span class="text-indigo-600">#</span> Déploiement & Configuration
          </h2>

          <div class="relative border-l-2 border-indigo-200 dark:border-indigo-900 ml-3 space-y-12">

            <div class="relative pl-8">
              <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950"></span>
              <h3 class="text-xl font-bold text-indigo-600 mb-2">Phase 1 : Préparation</h3>
              <p class="text-slate-600 dark:text-slate-400">
                Analyse approfondie de la documentation officielle, préparation de l'environnement serveur (VM Ubuntu) et définition de la politique de sécurité (HTTPS strict, restriction d'IP).
              </p>
            </div>

            <div class="relative pl-8">
              <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950"></span>
              <h3 class="text-xl font-bold text-indigo-600 mb-4">Phase 2 : Installation</h3>

              <div class="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-300 shadow-xl overflow-x-auto border border-slate-700">
                <div class="flex gap-2 mb-3">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div class="space-y-1">
                  <p><span class="text-green-400">user@server:~$</span> cd /var/www/html/</p>
                  <p><span class="text-green-400">user@server:/var/www/html$</span> sudo git clone https://github.com/PrivateBin/PrivateBin.git privatebin</p>
                  <p class="text-slate-500 italic">Cloning into 'privatebin'...</p>
                  <p class="text-slate-500 italic">remote: Enumerating objects: 14731, done.</p>
                  <p class="mt-2"><span class="text-green-400">user@server:/var/www/html$</span> sudo chown -R www-data:www-data privatebin</p>
                  <p><span class="text-green-400">user@server:/var/www/html$</span> sudo chmod -R 750 privatebin</p>

                  <p class="mt-4 text-slate-500"># Configuration initiale</p>
                  <p><span class="text-green-400">user@server:...$</span> sudo cp privatebin/cfg/conf.sample.php privatebin/cfg/conf.php</p>
                  <p><span class="text-green-400">user@server:...$</span> sudo nano privatebin/cfg/conf.php</p>
                </div>
              </div>

              <div class="mt-4 bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800">
                <h4 class="font-bold text-indigo-800 dark:text-indigo-300 mb-2">⚙️ Modifications apportées :</h4>
                <ul class="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-1">
                  <li>Limitation conservation : <strong>7 jours max</strong>.</li>
                  <li>Auto-destruction après lecture activée par défaut.</li>
                  <li>Chiffrement forcé en <strong>AES-256</strong>.</li>
                  <li>Politique de mot de passe stricte pour les notes protégées.</li>
                </ul>
              </div>
            </div>

            <div class="relative pl-8">
              <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950"></span>
              <h3 class="text-xl font-bold text-indigo-600 mb-4">Phase 3 : Personnalisation (UI/UX)</h3>
              <p class="text-slate-600 dark:text-slate-400 mb-4">
                Pour renforcer l'adoption de l'outil, j'ai créé un thème CSS personnalisé aligné sur la charte graphique de CibleWeb. Cela a permis de donner un aspect "outil maison" rassurant pour les utilisateurs.
              </p>

              <div class="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-300 shadow-xl overflow-x-auto border border-slate-700 mb-6">
                <div class="space-y-1">
                  <p><span class="text-green-400">user@server:~$</span> cd /var/www/html/privatebin/css/</p>
                  <p><span class="text-green-400">user@server:.../css$</span> sudo mkdir custom</p>
                  <p><span class="text-green-400">user@server:.../css$</span> sudo nano custom/enterprise-theme.css</p>
                </div>
              </div>

              <div
                v-for="(image, idx) in gallery"
                :key="idx"
                class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm group cursor-zoom-in hover:shadow-lg transition-all"
                @click="openLightbox(image.src)"
              >
                <img
                  :src="image.src"
                  class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Thème personnalisé"
                />
                <p class="p-2 text-center text-sm text-slate-500 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700">
                  {{ image.caption }}
                </p>
              </div>
            </div>

          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="text-indigo-600">#</span> Bilan du projet
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                🛠️ Technique
              </h3>
              <ul class="space-y-3 text-slate-600 dark:text-slate-300">
                <li><strong class="text-indigo-600 dark:text-indigo-400">Admin Linux :</strong> Gestion avancée des droits (chmod/chown) et sécurisation système.</li>
                <li><strong class="text-indigo-600 dark:text-indigo-400">Infra :</strong> Méthodologie de déploiement structurée (planification > tests > prod).</li>
                <li><strong class="text-indigo-600 dark:text-indigo-400">Apache :</strong> Configuration des VirtualHosts et réécriture d'URL.</li>
              </ul>
            </div>

            <div class="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                🤝 Humain
              </h3>
              <ul class="space-y-3 text-slate-600 dark:text-slate-300">
                <li><strong class="text-indigo-600 dark:text-indigo-400">Vulgarisation :</strong> Former des utilisateurs non-techniques à des concepts de sécurité.</li>
                <li><strong class="text-indigo-600 dark:text-indigo-400">Autonomie :</strong> Prise de décisions techniques en responsabilité totale.</li>
                <li><strong class="text-indigo-600 dark:text-indigo-400">Adaptabilité :</strong> Recherche rapide de solutions face aux imprévus.</li>
              </ul>
            </div>
          </div>

          <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-800">
            <h3 class="font-bold text-indigo-800 dark:text-indigo-300 mb-2">💡 Contribution Personnelle</h3>
            <p class="text-slate-700 dark:text-slate-300">
              Projet réalisé <strong>individuellement</strong>. J'ai été responsable de l'intégralité du cycle de vie du projet : de l'analyse des besoins initiaux jusqu'à la formation finale des utilisateurs, en passant par l'installation technique et la rédaction de la documentation utilisateur.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="text-indigo-600">#</span> Compétences Acquises
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
              <span>📅 Date</span> <span class="font-medium text-slate-900 dark:text-white">Fév - Mars 2025</span>
            </li>
            <li class="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
              <span>👥 Équipe</span> <span class="font-medium text-slate-900 dark:text-white">Individuel</span>
            </li>
            <li class="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
              <span>🏢 Contexte</span> <span class="font-medium text-slate-900 dark:text-white">Stage CibleWeb</span>
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
            <a href="https://privatebin.info/" target="_blank" class="flex justify-center items-center gap-2 w-full py-3 bg-slate-900 text-white text-center rounded-xl hover:bg-slate-700 transition font-semibold shadow-lg shadow-slate-900/20">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Site Officiel PrivateBin
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
