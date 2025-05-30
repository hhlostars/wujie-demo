import "./assets/main.css";

import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";
import WujieVue from "wujie-vue3";
import hostMap from "./hostMap";
import lifecycles from "./lifecycle";
import App from "./App.vue";
import router from "./router";

const { setupApp, preloadApp, bus } = WujieVue;
// 在 xxx-sub 路由下子应用将激活路由同步给主应用，主应用跳转对应路由高亮菜单栏
// bus.$on("sub-route-change", (name, path) => {
//   console.log('监听到事件', name, path);

//   const mainName = `${name}-sub`;
//   const mainPath = `/${name}-sub${path}`;
//   const currentName = router.currentRoute.value.name;
//   const currentPath = router.currentRoute.value.path;
//   if (mainName === currentName && mainPath !== currentPath) {
//     router.push({ path: mainPath });
//   }
// });

const app = createApp(App);
app.use(WujieVue);
app.use(createPinia());
app.use(ElementPlus);
app.use(router);
const isProduction = process.env.NODE_ENV === "production";
console.log("isProduction", isProduction);

const attrs = isProduction ? { src: hostMap("//localhost:8000/") } : {};
const props = {
  jump: (name) => {
    router.push({ name });
  },
};
setupApp({
  name: "vue2",
  url: hostMap("//localhost:7200/"),
  attrs,
  exec: true,
  alive: false,
  props,
  // degrade,
  ...lifecycles,
  sync: true,
  syncUrlDirect: true,
});

setupApp({
  name: "vue3",
  url: hostMap("//localhost:5174/"),
  attrs,
  exec: true,
  alive: false,
  props,
  // degrade,
  ...lifecycles,
  sync: true,
  syncUrlDirect: true,
  plugins: [
    {
      patchElementHook(element, iframeWindow) {
        if (element.nodeName === "STYLE") {
          element.insertAdjacentElement = function (_position, ele) {
            iframeWindow.document.head.appendChild(ele);
          };
        }
      },
    },
  ],
});

app.mount("#app");
