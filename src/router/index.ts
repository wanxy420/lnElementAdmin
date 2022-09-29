import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// 默认静态路由

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    name: "login",
    path: "/login",
    component: () => import("../views/login/index.vue"),
    meta: {
      isTabs: false,
      title: "登录",
    },
  },
  {
    name: "home",
    path: "/home",
    component: () => import("../views/home/index.vue"),
    meta: {
      isTabs: false,
      title: "首页",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
