import imgNDI from '@/assets/img/projets/ndi25/NUIT INFO 2025.png';
import imgGrabastar from '@/assets/img/projets/grabastar/4.jpg';
import imgCapitalWars from '@/assets/img/projets/capitalwars/capital-wars.png';
import imgPrivateBin from '@/assets/img/projets/privatebin/privatebin_0.png';

export const projects = [
  {
    id: 1,
    title: "Nuit de l'Info 2025",
    category: "Web",
    shortDescription: "Application interactive développée en moins de 15h lors du hackathon national.",
    image: imgNDI,
    techs: ["Vue 3", "Tailwind", "Vite"],
    githubLink: "https://github.com/Yota02/Ndi-2026",
    demoLink: "https://yota02.github.io/Ndi-2026/#/",
  },
  {
    id: 2,
    title: "API Gestion de Critiques de Jus",
    category: "Data",
    shortDescription: "Architecture complète séparant le backend (API Platform) du frontend.",
    image: "", // Mets une image par défaut ou gère le cas vide
    techs: ["Symfony", "APIPlatform", "Vue.js"],
    githubLink: "https://gitlabinfo.iutmontp.univ-montp2.fr/critiquedujujus/",
    demoLink: "#",
  },
  {
    id: 3,
    title: "Capital Wars - Jeux de gestion",
    category: "Web",
    description: "Jeu de simulation économique où le joueur gère le budget d'une entreprise. Implémentation de logique métier complexe, gestion de tours de jeu et persistance des données en base SQL.",
    image: imgCapitalWars,
    techs: ["Symfony", "JavaScript", "MySQL"],
    githubLink: "https://github.com/Yota02/Capital-Wars",
    demoLink: "#",
  },
  {
    id: 4,
    title: "Grabastar",
    category: "Web",
    description: "Conception d'un service d'avatars centralisé inspiré de Gravatar. Gestion des profils utilisateurs, traitement et upload d'images, et système de récupération d'avatar via hachage d'email.",
    image: imgGrabastar,
    techs: ["Symfony", "HTML", "CSS"],
    githubLink: "https://gitlabinfo.iutmontp.univ-montp2.fr/web3a-turpin/grabastar",
    demoLink: "https://webinfo.iutmontp.univ-montp2.fr/~turpinb/grabastar/public/",
  },
  {
    id: 5,
    title: "Installation de PrivateBin",
    category: "Système",
    description: "Déploiement et sécurisation d'une instance de partage de code chiffré (Pastebin). Configuration serveur, automatisation des tâches via Bash et durcissement de l'environnement PHP.",
    image: imgPrivateBin,
    techs: ["PHP", "Bash", "JavaScript"],
    githubLink: null,
    demoLink: null,
  },
  {
    id: 6,
    title: "Interface de gestion commerciale",
    category: "Web",
    description: "Développement d'une solution type ERP pour la gestion d'entreprise : module de facturation, fichier clients, suivi des stocks et tableaux de bord dynamiques pour le suivi comptable.",
    image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    techs: ["JavaScript (JQuery)", "PHP", "SQL"],
    githubLink: null,
    demoLink: null,
  }
];
