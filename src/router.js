import { createRouter, createWebHistory } from 'vue-router'
import AboutRoute from './components/routes/AboutRoute.vue'
import HomeRoute from './components/routes/HomeRoute.vue'
import ProjectsRoute from './components/routes/ProjectsRoute.vue'
import NowRoute from './components/routes/NowRoute.vue'
import ResumeRoute from './components/routes/ResumeRoute.vue'

const routes = [
  { path: '/', component: HomeRoute },
  { path: '/projects', component: ProjectsRoute },
  { path: '/resume', component: ResumeRoute },
  { path: '/about', component: AboutRoute },
  { path: '/now', component: NowRoute },
  { path: '/:catchAll(.*)', component: HomeRoute },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router