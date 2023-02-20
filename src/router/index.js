import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../Views/HomePage'
import ArticlesList from "@/Views/Articles/ArticlesList";
import ArticleFullPage from "@/Views/Articles/ArticleFullPage";

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
