import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ProjectDetailView from '@/views/ProjectDetailView.vue'
import ApprentissagesView from '@/views/ApprentissagesView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/project/:id',
      component: ProjectDetailView,
      name: 'project-detail'
    },
    {
      path: '/apprentissages',
      component: ApprentissagesView,
      name: 'apprentissages'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // 1. Si il y a un hash (ex: #contact), on scrolle vers l'élément de manière fluide
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    // 2. Si on utilise les boutons "précédent/suivant" du navigateur, on garde la position
    if (savedPosition) {
      return savedPosition
    }
    // 3. Sinon, on remonte tout en haut (ex: changement de page standard)
    return { top: 0 }
  }
})

export default router
