import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/js/app.js'
Vue.config.productionTip = false;

import http from "./http/http.js";
Vue.prototype.$http = http;
//全局引入http方法

import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
//全部引入vant

import axios from 'axios';
Vue.prototype.$axios=axios

import './assets/css/iconfont/iconfont.css'

import { Lazyload } from "vant";
Vue.use(Lazyload);
//在main.js引入懒加载的指令

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
//全部引入elemnt-ui

Vue.filter("filtime", (val) => {
  let lastime = new Date(val);
  let cretime = new Date();
  let newtime = cretime - lastime;
  var str = "";
  if (newtime >= 0 && newtime < 1000 * 60 * 30) {
    str = "30分钟";
  } else if (newtime >= 1000 * 60 * 30 && newtime < 1000 * 60 * 60) {
    str = "1小时";
  } else if (newtime >= 1000 * 60 * 60 && newtime < 1000 * 60 * 60 * 24) {
    str = "1天";
  } else if (
    newtime >= 1000 * 60 * 60 * 24 &&
    newtime < 1000 * 60 * 60 * 24 * 7
  ) {
    str = "7天";
  } else {
    str = "一个月";
  }
  return str + "前";
});
//定义全局过滤器 fitime 不加s 因为一次只能定义一个 需要多个 就在写一个 vue.filter

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
