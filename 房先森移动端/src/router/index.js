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

    path: "/ZsqRaiders",
    name: "zsqRaiders",
    component: () => import("../views/ZsqRaiders.vue"),
  },
  {

    path: "/Zsqdaikuan",
    name: "zsqdaikuan",
    component: () => import("../views/Zsqdaikuan.vue"),
  },
  {
    path: "/Zsqliucheng",
    name: "Zsqliucheng",
    component: () => import("../views/Zsqliucheng.vue"),
  },

  {
    path: "/ZhzDesign",
    name: "ZhzDesign",
    component: () => import("../views/ZhzDesign.vue"),
  },
  {
    path: "/Zhzlives",
    name: "Zhzlives",
    component: () => import("../views/Zhzlives.vue"),
  },
  {
    path: "/ZhzDesignx",
    name: "ZhzDesignx",
    component: () => import("../views/ZhzDesignx.vue"),
  },
  {
    path: "/Zhzlivesx",
    name: "Zhzlivesx",
    component: () => import("../views/Zhzlivesx.vue"),
  },

];

const router = new VueRouter({
  routes,
});

export default router;
