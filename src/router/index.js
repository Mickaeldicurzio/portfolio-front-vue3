import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(`../views/HomePage`)
    },
    {
        path: '/articles',
        name: 'articles',
        component: () => import(`@/views/Articles/ArticlesList/ArticlesList`)
    },
    {
        path: '/article/:id',
        name: 'articleFull',
        component: () => import(`@/views/Articles/ArticleFull/ArticleFull`)
    },
    {
        path: '/expriences',
        name: 'experiences',
        component: () => import(`@/views/Experiences/ExperiencesFull`)
    },
    {
        path: '/about-me',
        name: 'aboutMe',
        component: () => import(`@/views/AboutMe/AboutMe`)
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import(`@/views/Projects/ProjectsList/ProjectsList`)
    },
    {
        path: '/project/:id',
        name: 'projectFull',
        component: () => import(`@/views/Projects/ProjectFull/ProjectFull`)
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import(`@/views/Projects/ProjectsList/ProjectsList`)
    },
]

const router = new createRouter({
    history: createWebHistory(),
    routes
})

export default router
