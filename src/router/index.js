import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/pages/main/MainPage";
import HowToUsePage from "@/pages/how-to-use/HowToUsePage";

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/how-to-use',
    name: 'How to use',
    component: HowToUsePage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
