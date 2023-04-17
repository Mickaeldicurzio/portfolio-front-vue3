import gql from "graphql-tag";

export const LOGIN_USER = gql`mutation {
  login(input: { identifier: "mickael.dicurzio@gmail.com", password: "" }) {
    jwt
  }
}
`