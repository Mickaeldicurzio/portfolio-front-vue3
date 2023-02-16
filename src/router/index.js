import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../Views/HomePage'


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
]

const router = new createRouter({
    history: createWebHistory(),
    routes
})

export default router
