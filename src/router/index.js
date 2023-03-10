import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../views/HomePage'
import ArticlesList from "@/views/Articles/ArticlesList";
import ArticleFullPage from "@/views/Articles/ArticleFullPage";
import ExperiencesFull from "@/views/Experiences/ExperiencesFull";

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
    {
        path: '/expriences',
        name: 'experiences',
        component: ExperiencesFull
    },
]

const router = new createRouter({
    history: createWebHistory(),
    routes
})

export default router
