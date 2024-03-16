import { type RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'homepage',
        component: () => import('./views/Homepage.vue'),
    },
    {
        path: '/legal/terms',
        name: 'terms',
        component: () => import('./views/legal/Terms.vue'),
    },
    {
        path: '/legal/privacy',
        name: 'privacy',
        component: () => import('./views/legal/Privacy.vue'),
    },
    {
        path: '/legal/data-deletion',
        name: 'data-deletion',
        component: () => import('./views/legal/DataDeletion.vue'),
    },
    {
        path: '/help',
        name: 'help',
        component: () => import('./views/Help.vue'),
    },
];
