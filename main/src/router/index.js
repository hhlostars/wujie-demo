import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/vue2",
      name: "vue2",
      component: () => import("../views/Vue2.vue"),
    },
    {
      path: "/vue2/:pathMatch(.*)*", // 匹配 /vue2 及其所有子路径
      component: () => import("../views/Vue2.vue"),
    },
    {
      path: "/vue3",
      name: "vue3",
      component: () =>
        import("../views/Vue3.vue").catch(() => {
          console.log("vue3 error");
        }),
    },
    {
      path: "/vue3/:pathMatch(.*)*", // 匹配 /vue2 及其所有子路径
      component: () => import("../views/Vue3.vue"),
    },
    {
      path: "/react",
      name: "react",
      component: () => import("../views/React.vue"),
    },
  ],
});

export default router
