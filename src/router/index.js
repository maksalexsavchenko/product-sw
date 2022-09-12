import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/pages/main/MainPage";

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
