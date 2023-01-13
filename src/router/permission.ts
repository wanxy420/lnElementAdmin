import router from "./index";
import { getMenu } from "@/api/login";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import useStore from "@/store";

const viteComponent = import.meta.glob("../views/**/*.vue");

NProgress.configure({
  easing: "ease",
  speed: 500,
  showSpinner: true,
  trickleSpeed: 200,
  minimum: 0.3,
});

// 路由前置守卫
router.beforeEach((to, from, next) => {
  const { home } = useStore();
  NProgress.start();
  if (home.isAsyncRouter && to.name !== "login") {
    getRouters().then(() => {
      document.title = to.meta.title as string;
      home.isAsyncRouter = false;
      next({ ...to, replace: true });
    });
  } else {
    if (to.path === "/home") {
      document.title = to.meta.title as string;
      next({ path: getFirstMenu(home.leftMenuList), replace: true });
    }
    document.title = to.meta.title as string;
    next();
  }
});

// 路由后置守卫
router.afterEach(() => {
  NProgress.done();
});

// 递归获取首个打开菜单
const getFirstMenu = (arr: any) => {
  if (arr[0]?.children) {
    getFirstMenu(arr[0].children);
  } else {
    return arr[0]?.path;
  }
};

// 获取路由数据
const getRouters = () => {
  return new Promise((resolve) => {
    // 请求路由数据
    getMenu().then((res: any) => {
      // 处理路由数据
      const { home } = useStore();
      home.leftMenuList = res.data;
      let data = handlerRouterDate(res.data);
      // 添加路由
      data.forEach((item: any) => {
        router.addRoute("home", item);
      });
      // 返回成功
      resolve(11);
    });
  });
};

// 处理路由数据
const handlerRouterDate = (data: any) => {
  let routerData = <any>[];
  data.forEach((item: any) => {
    if (item.children) {
      let temp = handlerRouterDate(item.children);
      temp.forEach((sub: any) => {
        if (sub.path != "-") {
          routerData.push(sub);
        }
      });
    }
    if (item.path != "-") {
      routerData.push(handlerRouterItem(item));
    }
  });

  return routerData;
};

// 处理单个路由数据
const handlerRouterItem = (item: routerData) => {
  return {
    name: item.name,
    path: item.path,
    component: viteComponent[`../views/${item.component}.vue`],
    meta: {
      keepAlive: true,
      isTabs: true,
      title: item.title,
    },
  };
};
