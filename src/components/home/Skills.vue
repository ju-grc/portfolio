<script setup lang="ts">
const skillCategories = [
  {
    title: "Frontend & UI",
    icon: "🎨",
    description: "Création d'interfaces réactives et modernes.",
    skills: [
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ]
  },
  {
    title: "Backend & Data",
    icon: "⚙️",
    description: "Logique serveur et gestion de bases de données.",
    skills: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Symfony", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    ]
  },
  {
    title: "Outils & DevOps",
    icon: "🛠️",
    description: "Workflow, versioning et déploiement.",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Jetbrains", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    ]
  }
];
</script>

<template>
  <section id="skills" class="py-24 bg-white dark:bg-slate-900 relative">

    <div class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

    <div class="container mx-auto px-6 md:px-12 relative z-10">

      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Mon <span class="inline-block text-transparent bg-clip-text bg-[linear-gradient(to_right,#4f46e5,#06b6d4)]">Arsenal Technique</span>
        </h2>
        <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Une sélection des outils et technologies que j'utilise au quotidien pour donner vie à mes projets.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div
          v-for="(category, index) in skillCategories"
          :key="category.title"
          class="group bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
        >
          <div class="flex items-center gap-4 mb-6">
            <span class="text-4xl bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-sm">{{ category.icon }}</span>
            <div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{ category.title }}</h3>
              <p class="text-sm text-slate-500 dark:text-slate-400">{{ category.description }}</p>
            </div>
          </div>

          <div class="flex flex-wrap gap-3">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md cursor-default"
            >
              <img :src="skill.icon" :alt="skill.name" class="w-6 h-6" />
              <span class="font-medium text-slate-700 dark:text-slate-200 text-sm">{{ skill.name }}</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>
