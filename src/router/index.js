import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/pages/main/MainPage";
import HowToUsePage from "@/pages/how-to-use/HowToUsePage";
import TermsOfUsePage from "@/pages/terms-of-use/TermsOfUsePage";
import TermsOfUsePrint from "@/pages/terms-of-use/TermsOfUsePrint";

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
  {
    path: '/terms-of-use',
    name: 'Terms of use',
    component: TermsOfUsePage
  },
  {
    path: '/print',
    name: 'Print',
    component: TermsOfUsePrint
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
