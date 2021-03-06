import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  }
  , {
    path: "/gmx-xiu",
    name: "Gmx-xiu",
    component: () => import("../views/Gmx-xiu.vue"),
  },
  {
    path: "/gmx-fang",
    name: "Gmx-fang",
    component: () => import("../views/Gmx-fang.vue"),
  },
  {
    path: "/gmx-xgt",
    name: "Gmx-xgt",
    component: () => import("../views/Gmx-xgt.vue"),
  },
  {
    path: "/gmx-xgt1",
    name: "Gmx-xgt1",
    component: () => import("../views/Gmx-xgt1.vue"),
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
  {
    path: "/zy-baojia",
    name: "Zy-baojia",
    component: () => import("../views/Zy-baojia.vue"),
  },
  {
    path: "/zy-yuyue",
    name: "Zy-yuyue",
    component: () => import("../views/Zy-yuyue.vue"),
  },
  {
    path: "/zy-lianxi",
    name: "Zy-lianxi",
    component: () => import("../views/Zy-lianxi.vue"),
  },
  {
    path: "/zy-about",
    name: "Zy-about",
    component: () => import("../views/Zy-about.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
