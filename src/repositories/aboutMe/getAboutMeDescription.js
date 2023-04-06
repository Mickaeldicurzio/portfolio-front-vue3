import gql from "graphql-tag";

export const GET_ABOUT_ME_DESCRIPTION= gql`query getAboutMeDescription {
  aboutMeDescription: aboutMe {
    data {
      attributes {
        title
        description
        profilePicture {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}

`