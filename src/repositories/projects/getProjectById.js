import gql from "graphql-tag";

export const GET_PROJECT_BY_ID = gql`query  GetProjectById ($id: ID!, $locale: String!){
  project(documentId : $id) {
    documentId
    title
    projectDate
    link
    description
    languages (sort: ["name:asc"]) {
      name
      category {
        CategoryName
        priority
      }
      logo {
        url
      }
    }
    company {
      name
      logo {
        url
      }
    }
    galerie {
      url
    }
    localizations (filters: {locale: {eq: $locale}}) {
      documentId
      localizations {
        documentId
      }
      title
      description
      locale
    }
  }
}`