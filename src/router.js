import { createWebHistory, createRouter } from 'vue-router'
import HomeView from "./views/home/HomeView.vue";
import GeneratePDF from './views/PDF/GeneratePDF.vue';

const routes =[
    {path: '/', component: HomeView },
    {path: '/PDF/generate', component: GeneratePDF, name: 'Generate-PDF'}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;