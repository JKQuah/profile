import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Gallery from '../views/Gallery.vue'
// import Contact from '../views/Contact.vue'
// import Example from '../views/Component.vue';
import PageNotFound from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About
  // },
  // {
  //   path: '/gallery',
  //   name: 'Gallery',
  //   component: Gallery
  // },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: Contact
  // },
  // {
  //   path: '/ui_component',
  //   name: 'Example',
  //   component: Example
  // },
  { 
    path: '/page-not-found', 
    name: 'PageNotFound',
    component: PageNotFound 
  },
  { 
    path: "/:catchAll(.*)",
    redirect: '/page-not-found' 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
