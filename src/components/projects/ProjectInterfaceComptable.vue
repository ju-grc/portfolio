<script setup lang="ts">
import { ref } from 'vue';

import gestioncom from '@/assets/img/projets/gestioncom/interface.jpeg';
import imgInterface from '@/assets/img/projets/gestioncom/interface_dashboard.png';
import imgExcel from '@/assets/img/projets/gestioncom/import_export.png';

interface GalleryItem {
  src: string;
  caption: string;
}

interface StackItem {
  name: string;
  icon: string;
}

const gallery: GalleryItem[] = [
  { src: imgInterface, caption: "Tableau de bord et suivi des paiements" },
  { src: imgExcel, caption: "Module d'import/export Excel" },
];

const stack: StackItem[] = [
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'JQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
];

const competences = [
  "Développement Full Stack",
  "Sécurité (Chiffrement RSA)",
  "Manipulation de fichiers (Excel/PDF)",
  "Modélisation de données (UML/SQL)",
  "Architecture MVC (Modulaire)"
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
        <span class="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm font-bold rounded-full">Web</span>
        <span class="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-bold rounded-full">ERP / CRM</span>
      </div>
      <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
        Interface de Gestion Commerciale
      </h1>

      <div class="w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl mb-8 border border-slate-200 dark:border-slate-800">
        <img :src="gestioncom" alt="Interface de gestion" class="w-full h-full object-cover" />
      </div>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

      <div class="lg:col-span-2 space-y-16">

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span class="text-cyan-600">#</span> Contexte & Objectifs
          </h2>

          <div class="prose dark:prose-invert text-slate-600 dark:text-slate-300 text-lg leading-relaxed space-y-4">
            <p>
              Dans le cadre d’un projet personnel ambitieux, j'ai conçu et développé une application web complète permettant à une PME de gérer l'intégralité de ses activités commerciales et comptables de manière centralisée.
            </p>
            <p>
              L’objectif principal était de proposer une solution sur mesure capable de remplacer les fichiers Excel dispersés et complexes utilisés jusqu'alors. L'application devait automatiser la génération de factures, fiabiliser le suivi client et offrir un accès sécurisé aux données sensibles.
            </p>
            <p>
              Ce module a été pensé pour être intégrable à terme dans un CRM ou un ERP plus global. Les contraintes principales imposées étaient la <strong>simplicité d’utilisation</strong>, le strict <strong>respect des règles comptables</strong>, une interface intuitive et l'utilisation d'une base de données relationnelle robuste.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div class="bg-cyan-50 dark:bg-cyan-900/10 p-4 rounded-xl border border-cyan-100 dark:border-cyan-800">
                <h4 class="font-bold text-cyan-800 dark:text-cyan-400 mb-2">🎯 Périmètre fonctionnel</h4>
                <ul class="list-disc list-inside text-sm space-y-1">
                  <li>Gestion CRUD Clients, Devis, Factures.</li>
                  <li>Suivi des règlements et impayés.</li>
                  <li>Tableaux de bord statistiques.</li>
                  <li>Import / Export Excel massif.</li>
                </ul>
              </div>
              <div class="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <h4 class="font-bold text-slate-800 dark:text-slate-300 mb-2">⚙️ Contraintes techniques</h4>
                <ul class="list-disc list-inside text-sm space-y-1">
                  <li>Interface sécurisée (Authentification).</li>
                  <li>Protection des données bancaires (IBAN).</li>
                  <li>Base de données relationnelle MySQL.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
            <span class="text-cyan-600">#</span> Méthodologie & Réalisation
          </h2>

          <div class="relative border-l-2 border-cyan-200 dark:border-cyan-900 ml-3 space-y-16">

            <div class="relative pl-8">
              <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-600 border-4 border-white dark:border-slate-950"></span>
              <h3 class="text-xl font-bold text-cyan-600 mb-3">Phase 1 : Analyse et Conception</h3>
              <p class="text-slate-600 dark:text-slate-400 mb-4 text-justify">
                J'ai commencé par recueillir les besoins d'un client fictif à travers un cahier des charges détaillé. Cette étape cruciale m’a permis de définir clairement les attentes fonctionnelles et techniques avant d'écrire la moindre ligne de code. Cette phase s'est traduite par :
              </p>
              <ul class="list-disc list-inside text-slate-600 dark:text-slate-400 ml-4 space-y-2">
                <li>
                  <strong>Modélisation UML :</strong> Création de diagrammes de cas d’utilisation pour définir les rôles, diagrammes de classes pour la structure des objets et diagrammes de séquences pour les interactions complexes.
                </li>
                <li>
                  <strong>Base de Données :</strong> Conception du modèle relationnel (MCD/MLD) sous MySQL, avec une attention particulière à la normalisation des données.
                </li>
                <li>
                  <strong>Architecture :</strong> Choix d’un environnement full-stack basé sur PHP, HTML/CSS, JavaScript et MySQL pour garantir performance et facilité de déploiement.
                </li>
              </ul>
            </div>

            <div class="relative pl-8">
              <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-600 border-4 border-white dark:border-slate-950"></span>
              <h3 class="text-xl font-bold text-cyan-600 mb-3">Phase 2 : Développement itératif</h3>
              <p class="text-slate-600 dark:text-slate-400 mb-4 text-justify">
                Le développement de l’application s’est déroulé de manière itérative, alternant phases de maquettage, codage et tests unitaires.
              </p>

              <div class="space-y-4">
                <div class="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h4 class="font-bold text-slate-800 dark:text-white mb-2">📊 Tableau de bord dynamique</h4>
                  <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Développement d'une page d'accueil centralisant les informations critiques : données du compte, coordonnées bancaires de l'entreprise et alertes sur le suivi des paiements en retard.
                  </p>
                </div>

                <div class="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h4 class="font-bold text-slate-800 dark:text-white mb-2">🔄 Interopérabilité Excel (Import/Export)</h4>
                  <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    L'un des défis majeurs était de permettre une interaction fluide avec Excel.
                  </p>
                  <ul class="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>
                      <strong>Export :</strong> Génération de fichiers <code>.xlsx</code> via JavaScript. Les données sont extraites du DOM HTML, converties via <code>XLSX.utils.aoa_to_sheet</code> et téléchargées par l'utilisateur.
                    </li>
                    <li>
                      <strong>Import :</strong> Upload de fichiers via AJAX (FormData). Côté serveur, <strong>PHPExcel</strong> analyse le fichier, mappe les colonnes et insère les données en base avec une requête <code>INSERT IGNORE</code> pour gérer les doublons sans erreur.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="relative pl-8">
              <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-600 border-4 border-white dark:border-slate-950"></span>
              <h3 class="text-xl font-bold text-cyan-600 mb-3">Phase 3 : Sécurité & Chiffrement RSA</h3>

              <p class="text-slate-600 dark:text-slate-400 mb-4 text-justify">
                Dans le cadre de la gestion comptable, certaines informations (IBAN, BIC, Mandats) sont critiques. Pour garantir leur <strong>confidentialité</strong> (seules les personnes autorisées peuvent lire) et leur <strong>intégrité</strong> (pas de modification illicite), j'ai mis en place un chiffrement asymétrique RSA.
              </p>

              <div class="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border-l-4 border-cyan-500 mb-6">
                <p class="text-sm text-slate-700 dark:text-slate-300 italic">
                  "Même en cas de fuite de la base de données, les informations restent illisibles sans la clé privée stockée sécurisément sur le serveur."
                </p>
              </div>

              <div class="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm shadow-xl overflow-x-auto border border-slate-700 relative group mb-4">
                <div class="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                  <span class="text-blue-400 text-xs font-bold">SecurityService.php</span>
                  <div class="flex gap-1.5">
                    <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                </div>

                <div class="text-gray-300 leading-relaxed">
                  <p><span class="text-blue-400">function</span> <span class="text-yellow-200">chiffrer</span>(<span class="text-orange-300">$chaine</span>) {</p>
                  <p class="pl-4 mt-2"><span class="text-gray-500">// 1. Chargement de la clé publique</span></p>
                  <p class="pl-4"><span class="text-orange-300">$public_key</span> = <span class="text-blue-300">openssl_pkey_get_public</span>(<span class="text-green-300">'file://./chiffrement/pb.pem'</span>);</p>

                  <p class="pl-4 mt-2"><span class="text-gray-500">// 2. Chiffrement asymétrique (RSA)</span></p>
                  <p class="pl-4"><span class="text-blue-300">openssl_public_encrypt</span>(<span class="text-orange-300">$chaine</span>, <span class="text-orange-300">$chaineChiffree</span>, <span class="text-orange-300">$public_key</span>);</p>

                  <p class="pl-4 mt-2"><span class="text-gray-500">// 3. Encodage Base64 pour stockage propre en BDD</span></p>
                  <p class="pl-4"><span class="text-purple-400">return</span> <span class="text-blue-300">base64_encode</span>(<span class="text-orange-300">$chaineChiffree</span>);</p>
                  <p>}</p>
                </div>
              </div>

              <p class="text-slate-600 dark:text-slate-400 text-sm">
                Le déchiffrement s'effectue automatiquement à l'affichage via <code>openssl_private_decrypt</code>, rendant la sécurité transparente pour l'utilisateur final.
              </p>
            </div>

          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="text-cyan-600">#</span> Bilan & Enseignements
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div class="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                🛠️ Technique
              </h3>
              <ul class="space-y-4 text-slate-600 dark:text-slate-300 text-sm">
                <li>
                  <strong class="block text-cyan-700 dark:text-cyan-400">Développement Full Stack</strong>
                  Création d’une application complète, de la modélisation de la base de données à l’interface utilisateur.
                </li>
                <li>
                  <strong class="block text-cyan-700 dark:text-cyan-400">Modélisation de données</strong>
                  Construction d’un schéma relationnel solide, normalisation des tables et écriture de requêtes SQL avancées.
                </li>
                <li>
                  <strong class="block text-cyan-700 dark:text-cyan-400">Génération de documents</strong>
                  Création de documents PDF à la volée avec FPDF et manipulation de feuilles Excel.
                </li>
                <li>
                  <strong class="block text-cyan-700 dark:text-cyan-400">Sécurité Applicative</strong>
                  Mise en place de sessions PHP, gestion des rôles et cryptographie RSA.
                </li>
              </ul>
            </div>

            <div class="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                🤝 Humain & Gestion
              </h3>
              <ul class="space-y-4 text-slate-600 dark:text-slate-300 text-sm">
                <li>
                  <strong class="block text-cyan-700 dark:text-cyan-400">Autonomie</strong>
                  Ce projet m'a appris à prendre des décisions techniques importantes et à m'auto-former sur des concepts complexes (cryptographie).
                </li>
                <li>
                  <strong class="block text-cyan-700 dark:text-cyan-400">Gestion du temps</strong>
                  Organisation rigoureuse pour respecter les 10 semaines de délai tout en garantissant la qualité du code.
                </li>
                <li>
                  <strong class="block text-cyan-700 dark:text-cyan-400">Communication Technique</strong>
                  La rédaction du cahier des charges et de la documentation m'a appris à vulgariser des choix techniques.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="text-cyan-600">#</span> Aperçu du projet
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="(image, idx) in gallery"
              :key="idx"
              class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm group cursor-zoom-in hover:shadow-lg transition-all"
              @click="openLightbox(image.src)"
            >
              <img
                :src="image.src"
                class="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                :alt="image.caption"
              />
              <p class="p-2 text-center text-sm text-slate-500 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700">
                {{ image.caption }}
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="text-cyan-600">#</span> Compétences Validées
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
              <span>📂 Type</span> <span class="font-medium text-slate-900 dark:text-white">Projet Éducatif</span>
            </li>
            <li class="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
              <span>⏱️ Durée</span> <span class="font-medium text-slate-900 dark:text-white">10 Semaines</span>
            </li>
            <li class="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
              <span>🎯 Contexte</span> <span class="font-medium text-slate-900 dark:text-white">Module ERP</span>
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
              🔒 Code Privé
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
