import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from "./views/home/HomeView.vue";

const routes =[
    {path: '/', component: HomeView },
    {path: '/PDF/generate', component: null, name: 'Generate-PDF'}
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })