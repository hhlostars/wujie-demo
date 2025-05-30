import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from "vue-router";

import App from './App.vue'
import routes from './router'

if (window.__POWERED_BY_WUJIE__) {
  let instance;
  window.__WUJIE_MOUNT = () => {
    const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes,
    });
    instance = createApp(App);

    instance.use(createPinia());
    instance.use(router);

    instance.mount("#app");
  };
  window.__WUJIE_UNMOUNT = () => {
    instance.unmount();
  };
} else {
  const app = createApp(App);
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  });
  app.use(createPinia());
  app.use(router);

  app.mount("#app");
}
