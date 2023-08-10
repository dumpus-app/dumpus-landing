import { ViteSSG } from 'vite-ssg';
import '@/assets/css/style.css';
import App from './App.vue';
import { routes } from './router';

// createApp(App).use(router).mount('#app');

export const createApp = ViteSSG(App, {
    routes,
    scrollBehavior: (to, _, savedPosition) => {
        if (savedPosition) return savedPosition;

        if (to.hash) return { el: to.hash, behavior: 'smooth' };

        return { top: 0 };
    },
});
