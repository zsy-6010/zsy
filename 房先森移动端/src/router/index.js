import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/ZhzDesign",
  },

  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/ZhzDesign",
    name: "ZhzDesign",
    component: () => import("../views/ZhzDesign.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
