import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },

  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  }, {
    path: "/gmx-xiu",
    name: "Gmx-xiu",
    component: () => import("../views/Gmx-xiu.vue"),
  },
  {
    path: "/gmx-fang",
    name: "Gmx-fang",
    component: () => import("../views/Gmx-fang.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
