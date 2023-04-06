import ApolloClient from 'apollo-boost'


export const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: process.env.VUE_APP_STRAPI_BASE_URL + '/graphql'
})
