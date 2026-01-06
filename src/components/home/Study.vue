<script setup lang="ts">
const education = [
  {
    id: 1,
    degree: 'Licence 3 MTS & Double Diplomation',
    school: 'IAE Montpellier',
    year: 'Septembre 2025 - Mai 2026',
    status: 'current',
    desc: 'Management des Technologies et Sciences en e-learning. Double cursus visant à acquérir une double compétence technique et managériale.',
    tags: ['Management', 'Stratégie', 'E-learning']
  },
  {
    id: 2,
    degree: 'BUT Informatique',
    school: 'IUT de Montpellier',
    year: '2022 - 2026',
    status: 'current',
    desc: 'Spécialisation IAMSI (Intégration d\'Applications et Management des Systèmes d\'Information).',
    tags: ['WEB', 'SI', 'Data']
  },
  {
    id: 3,
    degree: 'BAC Technologique STI2D',
    school: 'Lycée Jean Moulin Béziers',
    year: '2020 - 2022',
    status: 'completed',
    desc: 'Option SIN (Systèmes d\'Information et Numérique). Premiers pas dans la programmation, l\'architecture réseau et les systèmes embarqués.',
    tags: ['SIN', 'Arduino', 'Réseaux']
  }
];
</script>

<template>
  <section id="education" class="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">

    <div class="container mx-auto px-6 md:px-12 max-w-5xl">

      <div class="mb-16 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Mon Parcours <span class="text-indigo-600">Académique</span>
        </h2>
      </div>

      <div class="relative">

        <div class="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-slate-300 dark:bg-slate-700 z-0 rounded-full"></div>

        <div class="space-y-12 relative z-10">

          <div
            v-for="(item, index) in education"
            :key="item.id"
            class="relative flex flex-col md:flex-row items-center justify-between group"
            :class="{ 'md:flex-row-reverse': index % 2 !== 0 }"
          >

            <div class="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-slate-900 z-20 flex items-center justify-center shadow-lg"
                 :class="item.status === 'current' ? 'bg-indigo-600' : 'bg-slate-200 dark:bg-slate-700'">
              <div class="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>

            <div class="w-full md:w-5/12 pl-20 md:pl-0 md:text-right mb-2 md:mb-0"
                 :class="{ 'md:text-left md:!pl-12': index % 2 !== 0, 'md:!pr-12': index % 2 === 0 }">
        <span class="inline-block px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          {{ item.year }}
        </span>
            </div>

            <div class="w-full md:w-5/12 pl-16 md:pl-0">
              <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
                <h3 class="text-xl font-bold text-slate-800 dark:text-white">{{ item.degree }}</h3>
                <p class="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-2">{{ item.school }}</p>
                <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{{ item.desc }}</p>

                <div class="flex flex-wrap gap-2 mt-3">
                  <span v-for="tag in item.tags" :key="tag" class="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">#{{ tag }}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
</template>
