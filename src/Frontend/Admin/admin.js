/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


require('./bootstrap');

import VueRouter from 'vue-router';
import {router} from "./routes";
import VueSpinners from 'vue-spinners'
import authorization from "./Models/_auth";
const auth = new authorization();

window.Vue = require('vue');

Vue.use(VueRouter);
Vue.use(VueSpinners);
Vue.prototype.$auth = auth;

require('./components');

Vue.component('admin', require('./components/Admin.vue').default);

/**
 * Middleware to check authentication
 */

// router.beforeEach((to, from, next) => {
//     if(to.meta.requiresAuth)
//     {
//         if(window.sessionStorage.getItem('logged'))
//         {
//             if(window.localStorage.getItem('dashboard'))
//             {
//                 if(window.localStorage.getItem('prev-url'))
//                 {
//                     const prev = {
//                         name: window.localStorage.getItem('prev-url')
//                     }
//                     window.localStorage.removeItem('prev-url')
//                     next(prev)
//                 }
//                 else
//                     next()
//             }
//             else
//             {
//                 window.localStorage.setItem('dashboard', true)
//                 if(!window.localStorage.getItem('prev-url'))
//                     window.localStorage.setItem('prev-url', to.name)
//                 window.location.reload()
//             }
//         }
//         else {
//             window.localStorage.setItem('prev-url', to.name)
//             next({path: '/'})
//         }
//     }
//     else {
//         if(window.sessionStorage.getItem('logged'))
//         {
//             if(window.localStorage.getItem('dashboard'))
//             {
//                 if(window.localStorage.getItem('prev-url'))
//                 {
//                     const prev = {
//                         name: window.localStorage.getItem('prev-url')
//                     }
//                     window.localStorage.removeItem('prev-url')
//                     next(prev)
//                 }
//                 else
//                     next({path: '/dashboard'})
//             }
//             else
//             {
//                 window.localStorage.setItem('dashboard', true)
//                 window.localStorage.setItem('prev-url', to.name)
//                 window.location.reload()
//             }
//         }
//         else {
//             if(window.localStorage.getItem('dashboard'))
//             {
//                 window.localStorage.removeItem('dashboard')
//                 window.location.reload()
//             }
//             else {
//                 next()
//             }
//         }
//     }
// })

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const admin = new Vue({
    el: '#admin',
    router: router
});
