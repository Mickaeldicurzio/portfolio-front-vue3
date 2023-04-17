import gql from "graphql-tag";

export const REGISTER_USER = gql`mutation {
  register(input: { username: "username", email: "email", password: "password" }) {
    jwt
    user {
      username
      email
    }
  }
}
`