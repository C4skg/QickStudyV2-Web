const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        name: "home",
        component: () => import("@/pages/home.vue")
    },
    {
        path: "/user",
        children: [
            {
                path: "/login",
                name: "login",
                component: () => import("@/pages/user/login.vue")
            }
        ]
    }
]
export default routes;