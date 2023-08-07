import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'homepage',
        component: function () {
            return import('../views/Homepage.vue');
        },
    },
    {
        path: '/legal/terms',
        name: 'terms',
        component: function () {
            return import('../views/legal/Terms.vue');
        },
    },
    {
        path: '/legal/privacy',
        name: 'terms',
        component: function () {
            return import('../views/legal/Privacy.vue');
        },
    },
    {
        path: '/help',
        name: 'help',
        component: function () {
            return import('../views/Help.vue');
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
