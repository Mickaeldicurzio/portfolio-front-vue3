import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../views/HomePage'
import ArticlesList from "@/views/Articles/ArticlesList";
import ArticleFullPage from "@/views/Articles/ArticleFullPage";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/articles',
        name: 'articles',
        component: ArticlesList
    },
    {
        path: '/article/:id',
        name: 'articleFull',
        component: ArticleFullPage
    },
]

const router = new createRouter({
    history: createWebHistory(),
    routes
})

export default router
