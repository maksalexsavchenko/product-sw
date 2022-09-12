import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/pages/main/MainPage";
import HowToUse from "@/pages/how-to-use/HowToUse";

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/how-to-use',
    name: 'How to use',
    component: HowToUse
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
