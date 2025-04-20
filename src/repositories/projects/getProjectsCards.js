import gql from "graphql-tag";

export const GET_PROJECTS_CARDS = gql`query GetProjectsCards ($selectedCompanies: [ID], $selectedLanguages: [ID], $locale: I18NLocaleCode!){
          projectsCards: projects(sort: "projectDate:desc", locale: $locale, filters: { 
            languages: { documentId: { in: $selectedLanguages } },
            company: { documentId: { in: $selectedCompanies } }
          }) {
              documentId
              title
              link
              galerie {
                alternativeText
                url
              }
              languages (sort: "name:asc") {
                documentId,
                name
                logo {
                  documentId,
                  url
                }
              }
              company {
                documentId,
                logo {
                  url
                }
              }
          }
      }`