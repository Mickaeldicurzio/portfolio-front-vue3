import ApolloClient from 'apollo-boost'

export const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: 'http://localhost:1337/graphql'
})