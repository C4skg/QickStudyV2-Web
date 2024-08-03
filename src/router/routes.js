import { components } from "vuetify/dist/vuetify-labs.js";

const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        name: "home",
        component: () => import("@/pages/home.vue"),
    },
    {
        path: "/user",
        children: [
            {
                path: "/login",
                name: "login",
                component: () => import("@/pages/user/login.vue"),
            },
            {
                path: "/register",
                name: "register",
                component: () => import("@/pages/user/register.vue"),
            }
        ]
    }
]
export default routes;