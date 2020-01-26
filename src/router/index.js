import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Archived from "../views/Archived.vue";
import Favourites from "../views/Favourites.vue";
import Trashed from "../views/Trashed.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/archived",
    name: "archived",
    component: Archived
  },
  {
    path: "/favourites",
    name: "favourites",
    component: Favourites
  },
  {
    path: "/trashed",
    name: "trashed",
    component: Trashed
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
