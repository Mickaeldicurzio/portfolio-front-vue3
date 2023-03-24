import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../views/HomePage'
import ArticlesList from "@/views/Articles/ArticlesList/ArticlesList";
import ArticleFullPage from "@/views/Articles/ArticleFull/ArticleFull";
import ExperiencesFull from "@/views/Experiences/ExperiencesFull";
import AboutMe from "@/views/AboutMe/AboutMe";
import ProjectsList from "@/views/Projects/ProjectsList/ProjectsList";

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
        component: ProjectsList
    },
    {
        path: '/contact',
        name: 'contact',
        component: ProjectsList
    },
]

const router = new createRouter({
    history: createWebHistory(),
    routes
})

export default router
