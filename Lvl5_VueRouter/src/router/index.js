import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import OurPetsView from "@/views/OurPetsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth",
            };
        } else {
            return { top: 0 };
        }
    },
    routes: [
        {
            path: "/",
            name: "main",
            component: MainView,
        },
        {
            path: "/pets",
            name: "pets",
            component: () => import("../views/OurPetsView.vue"),
        },
        {
            path: "/:notFound(.*)",
            name: "notFound",
            component: () => import("../views/NotFoundView.vue"),
        },
    ],
});

export default router;
