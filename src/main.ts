import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Hero from './views/Hero.vue'
import { createRouter, createWebHistory } from 'vue-router'
import About from './views/About.vue'
import Project from './views/Project.vue'
import Contact from './views/Contact.vue'
import 'primeicons/primeicons.css'
import 'devicon'
// Simple Icons (si) + others
import {
  SiReact,
  SiReactquery,
  SiTypescript,
  SiVuedotjs,
  SiTailwindcss,
  SiJavascript,
  SiLaravel,
  SiExpress,
  SiNodedotjs,
  SiMysql,
  SiPhp,
  SiPostman,
  SiFirebase,
  SiFigma,
  SiCanva,
  SiAseprite,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
} from 'oh-vue-icons/icons'
import { addIcons, OhVueIcon } from 'oh-vue-icons'

// Add all icons
addIcons(
  SiReact,
  SiTypescript,
  SiVuedotjs,
  SiTailwindcss,
  SiJavascript,
  SiLaravel,
  SiExpress,
  SiNodedotjs,
  SiMysql,
  SiPhp,
  SiPostman,
  SiFirebase,
  SiFigma,
  SiCanva,
  SiAseprite,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
)

const routes = [
  {
    name: 'hero',
    path: '/',
    component: Hero,
    meta: {
      title: 'Home',
    },
  },
  {
    name: 'contact',
    path: '/contact',
    component: Contact,
    meta: {
      title: 'Contact',
    },
  },
  {
    name: 'projects',
    path: '/Projects',
    component: Project,
    meta: {
      title: 'Projects',
    },
  },
  {
    name: 'about',
    path: '/About',
    component: About,
    meta: {
      title: 'About',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// router.beforeEach((to, from, next) => {
//   let dynamicTitle = ''
//   if (to.meta.title) {
//     dynamicTitle = to.meta.title as string
//   }
//   document.title = `${dynamicTitle}`
//   next()
// })

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.use(router)

app.mount('#app')
