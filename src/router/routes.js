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
            transition: 'slide-left'
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
                    transition: 'slide-right'
                }
            }
        ]
    }
]
export default routes;