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
  ,
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
