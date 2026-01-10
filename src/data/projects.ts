import imgNDI from '@/assets/img/projets/ndi25/NUIT INFO 2025.png';
import imgGrabastar from '@/assets/img/projets/grabastar/4.jpg';
import imgCapitalWars from '@/assets/img/projets/capitalwars/capital-wars.png';
import imgPrivateBin from '@/assets/img/projets/privatebin/privatebin_0.png';
import imgGestionCom from '@/assets/img/projets/gestioncom/interface.jpeg';

export const projects = [
  {
    id: 1,
    title: "Nuit de l'Info 2025",
    category: "Web",
    shortDescription: "Application interactive développée en moins de 15h lors du hackathon national.",
    image: imgNDI,
    techs: ["Vue 3", "Tailwind", "Vite"],
  },
  {
    id: 2,
    title: "API Gestion de Critiques de Jus",
    category: "Data",
    shortDescription: "Architecture complète séparant le backend (API Platform) du frontend.",
    image: "",
    techs: ["Symfony", "APIPlatform", "Vue.js"],
  },
  {
    id: 3,
    title: "Capital Wars - Jeux de gestion",
    category: "Web",
    description: "Jeu de simulation économique où le joueur gère le budget d'une entreprise. Implémentation de logique métier complexe, gestion de tours de jeu et persistance des données en base SQL.",
    image: imgCapitalWars,
    techs: ["Symfony", "JavaScript", "MySQL"],
  },
  {
    id: 4,
    title: "Grabastar",
    category: "Web",
    description: "Conception d'un service d'avatars centralisé inspiré de Gravatar. Gestion des profils utilisateurs, traitement et upload d'images, et système de récupération d'avatar via hachage d'email.",
    image: imgGrabastar,
    techs: ["Symfony", "HTML", "CSS"],
  },
  {
    id: 5,
    title: "Installation de PrivateBin",
    category: "Système",
    description: "Déploiement et sécurisation d'une instance de partage de code chiffré (Pastebin). Configuration serveur, automatisation des tâches via Bash et durcissement de l'environnement PHP.",
    image: imgPrivateBin,
    techs: ["PHP", "Bash", "JavaScript"],
  },
  {
    id: 6,
    title: "Interface de gestion commerciale",
    category: "Web",
    description: "Développement d'une solution type ERP pour la gestion d'entreprise : module de facturation, fichier clients, suivi des stocks et tableaux de bord dynamiques pour le suivi comptable.",
    image: imgGestionCom,
    techs: ["JavaScript (JQuery)", "PHP", "SQL"],
  },
  {
    id: 7,
    title: "Site E-Commerce",
    category: "Web",
    description: "Conception d'une plateforme e-commerce complète en PHP natif (architecture MVC). Intègre un back-office d'administration, une gestion sécurisée des utilisateurs.",
    image: "",
    techs: ["PHP", "SQL", "HTML/CSS"],
  }
];
