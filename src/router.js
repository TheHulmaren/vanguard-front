import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./components/views/HomeView.vue";
import CrewsView from "./components/views/CrewsView.vue";
import PortfolioListView from "./components/views/PortfolioListView.vue";
import PortfolioDetail from "./components/views/PortfolioDetail.vue";
import ContactView from "./components/views/ContactView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
    meta: { title: "Vanguard - Home", subtitle: "Home" },
  },
  {
    path: "/our-crews",
    component: CrewsView,
    meta: { title: "Vanguard - Our Crews", subtitle: "Crews" },
  },
  {
    path: "/our-portfolios",
    component: PortfolioListView,
    meta: { title: "Vanguard - Our Portfolios", subtitle: "Our Portfolios" },
  },
  {
    path: "/our-portfolios/:id",
    component: PortfolioDetail,
    meta: { title: "Vanguard - Our Portfolios", subtitle: "In Detail" },
  },
  {
    path: "/contact-us",
    component: ContactView,
    meta: { title: "Vanguard - Contact Us", subtitle: "Contact Us" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title || "Vanguard";
  document.getElementById("subtitleText").innerHTML =
    to.meta.subtitle || "Web Art";
});

export default router;
