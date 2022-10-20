import { App } from "vue";

function auth(app: App) {
  app.directive("hasPermission", {
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
}

export { auth };
