import Vue from 'vue';
import VueRouter from 'vue-router';
import {getAppRouting} from './apps/imports';
import {getPluginAppRouting} from './apps/plugin-app-imports';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes:
        [
            ...getAppRouting(),
            ...getPluginAppRouting(),
            {
                path: '/',
                component: Vue.component('welcome', () => import('./components/Pages/Login.vue')),
                name: 'login',
                meta: {
                    requiresAuth: false
                }
            },
            {
                path: '/dashboard',
                component: Vue.component('dashboard', () => import('./components/Pages/Dashboard.vue')),
                name: 'dashboard',
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/permissions',
                component: Vue.component('permissions', () => import('./components/Pages/Permissions.vue')),
                name: 'permissions',
                meta: {
                    requiresAuth: true
                }
            },

        ],
    base: '/admin/',
});
