import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../views/HomePage'
import ArticlesList from "@/views/Articles/ArticlesList";
import ArticleFullPage from "@/views/Articles/ArticleFullPage";
import ExperiencesFull from "@/views/Experiences/ExperiencesFull";
import AboutMe from "@/views/AboutMe/AboutMe";
import ProjectsFull from "@/views/projects/ProjectsFull";

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
    {
        path: '/about-me',
        name: 'aboutMe',
        component: AboutMe
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectsFull
    },
    {
        path: '/contact',
        name: 'contact',
        component: ProjectsFull
    },
]

const router = new createRouter({
    history: createWebHistory(),
    routes
})

export default router
