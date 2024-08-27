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
            title: "QickStudy 平台"
        }
    },
    {
        path: "/user",
        children: [
            {
                //用户主页
                path: "/user/:userId?",
                name: "user.home",
                component: () => import("@/pages/user/home.vue"),
                meta: {
                    title: "",
                }
            },
            {
                path: "/user/login",
                name: "login",
                component: () => import("@/pages/user/login.vue"),
                meta: {
                    title: "登录"
                }
            },
            {
                path: "/user/register",
                name: "register",
                component: () => import("@/pages/user/register.vue"),
                meta: {
                    title: "注册"
                }
            },
            {
                path: "/user/remember",
                name: "remember",
                component: () => import("@/pages/user/remember.vue"),
                meta: {
                    title: "重置密码"
                }
            }
        ]
    },
    {
        path: "/error",
        children: [
            {
                path: "/404",
                name: "404",
                component: () => import("@/pages/error/404.vue"),
                meta: {
                    title: "404 - 页面不存在"
                }
            },
            {
                path: "/500",
                name: "500",
                component: () => import("@/pages/error/500.vue"),
                meta: {
                    title: "500 - 服务器错误"
                }
            }
        ]
    }
]
export default routes;