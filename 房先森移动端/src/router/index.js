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
  },
  {
    path: "/zy-baojia",
    name: "Zy-baojia",
    component: () => import("../views/Zy-baojia.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
