import { GET_PROJECTS_SLIDES } from "@/repositories/projects/getProjectsSlides";
import { GET_PROJECTS_CARDS } from "@/repositories/projects/getProjectsCards";
import { GET_PROJECTS_LOGOS } from "@/repositories/projects/getProjectsLogos";
import { GET_PROJECT_BY_ID } from "@/repositories/projects/getProjectById";
import { GET_NEXT_PROJECT_WITH_EXCLUDE_ID } from "@/repositories/projects/getNextProjectWithExcludeId";

export const projectRepository = {
    GET_PROJECTS_SLIDES,
    GET_PROJECTS_CARDS,
    GET_PROJECTS_LOGOS,
    GET_PROJECT_BY_ID,
    GET_NEXT_PROJECT_WITH_EXCLUDE_ID
}