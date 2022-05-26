import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: () => import("./components/pages/Index.vue"),
            props: true,
        },
        {
            path: "/about",
            component: () => import("./components/pages/About.vue"),
            props: true,
        },
        {
            path: "/users",
            component: () => import("./components/pages/users/Index.vue"),
            props: true,
        },
        {
            path: "/users/:id",
            component: () => import("./components/pages/users/Id.vue"),
            props: true,
        },
    ],
});

export default router;
