import { App } from "vue";

/**
 * @description 按钮权限限制
 * @param el 目标元素
 * @param binding 绑定对象
 * @author wanxy420 <1335994390@qq.com>
 * @date 2023-01-09 09:00:28
 */
const auth = (app: App) => {
  app.directive("lnAuth", {
    mounted(el: any, binding: any) {
      if (!app.config.globalProperties.$_has(binding.value)) {
        el.parentNode.removeChild(el);
      }
    },
  });
  app.config.globalProperties.$_has = (value: any) => {
    let isExist = false;
    var btnPermsArr = ["user:add", "user:edit", "user:del"];
    if (btnPermsArr.includes(value)) {
      isExist = true;
    }
    return isExist;
  };
};

export { auth };
