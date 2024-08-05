/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory,createWebHashHistory  } from 'vue-router'
import routes from './routes'

const router = createRouter({
    history: createWebHistory(),
    routes
})

// // Workaround for https://github.com/vitejs/vite/issues/11804
// router.onError((err, to) => {
//     if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
//         if (!localStorage.getItem('vuetify:dynamic-reload')) {
//             console.log('Reloading page to fix dynamic import error')
//             localStorage.setItem('vuetify:dynamic-reload', 'true')
//             location.assign(to.fullPath)
//         } else {
//             console.error('Dynamic import error, reloading page did not fix it', err)
//         }
//     } else {
//         console.error(err)
//     }
// })
router.onError((err,to) => {
    console.log(
        'route in error',
        {err,to}
    )
})
router.beforeEach((to,from,next)=>{
    if ( !router.hasRoute(to.name) ){
        next({name: '404'})
    }
    if ( to.meta.title ){
        document.title = to.meta.title
    };
    next();
})

// router.isReady().then(() => {
//     localStorage.removeItem('vuetify:dynamic-reload')
// })

export default router
