import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./router/permission";
import { createPinia } from "pinia";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
// 引入所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
app.use(createPinia());
app.use(ElementPlus);
setTimeout(() => {
  app.mount("#app");
}, 500);

console.log(
  [
    "%c---------------------------",
    "          Wxy420           ",
    "",
    "     1335994390@qq.com           ",
    "",
    "---------------------------",
  ].join("\n"),
  "color:#FD802E;font-size:20px"
);
