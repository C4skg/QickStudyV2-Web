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
        meta: {
            title: "首页"
        }
    },
    {
        path: "/user",
        children: [
            {
                path: "/login",
                name: "login",
                component: () => import("@/pages/user/login.vue"),
                meta: {
                    title: "登录"
                }
            },
            {
                path: "/register",
                name: "register",
                component: () => import("@/pages/user/register.vue"),
                meta: {
                    title: "注册"
                }
            },
            {
                path: "/remember",
                name: "remember",
                component: () => import("@/pages/user/remember.vue"),
                meta: {
                    title: "重置密码"
                }
            }
        ]
    }
]
export default routes;