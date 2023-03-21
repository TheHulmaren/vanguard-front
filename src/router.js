import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./components/views/HomeView.vue";
import CrewsView from "./components/views/CrewsView.vue";
import PortfolioListView from "./components/views/PortfolioListView.vue";
import PortfolioDetail from "./components/views/PortfolioDetail.vue";

const subtitleTable={
  '/': 'Home',
  "/our-crews": 'Our Crews',
  '/our-portfolios': 'Our Portfolios',
}

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/our-crews",
    component: CrewsView,
  },
  {
    path: "/our-portfolios",
    component: PortfolioListView,
  },
  {
    path: "/our-portfolios/:id",
    component: PortfolioDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to)=>{
  document.getElementById('subtitleText').innerHTML = subtitleTable[to.path] ? subtitleTable[to.path] : 'Web Artistry'
})

export default router;
