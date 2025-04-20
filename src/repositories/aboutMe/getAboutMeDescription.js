import gql from "graphql-tag";

export const GET_ABOUT_ME_DESCRIPTION= gql`query getAboutMeDescription ($locale: I18NLocaleCode!) {
  aboutMeDescription: aboutMe (locale: $locale) {
    title
    description
    profilePicture {
      url
    }
  }
}

`