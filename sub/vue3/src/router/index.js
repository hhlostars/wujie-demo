import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    redirect: "/vue3home",
  },
  {
    path: "/vue3home",
    name: "vue3home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
    children: [
      {
        path: "aboutchild1",
        name: "aboutchild1",
        component: () => import("../views/About1.vue"),
      },
      {
        path: "aboutchild2",
        name: "aboutchild2",
        component: () => import("../views/About2.vue"),
      },
    ],
  },
  {
    path: "/detail",
    name: "detail",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Detail.vue"),
  },
];

export default routes;
