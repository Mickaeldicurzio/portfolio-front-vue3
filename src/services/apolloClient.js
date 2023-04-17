
import {ApolloClient,ApolloLink, InMemoryCache, createHttpLink} from "@apollo/client/core";

// function getHeaders() {
//     const headers = []
//     headers["Authorization"] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjgxNzM1MDIxLCJleHAiOjE2ODQzMjcwMjF9.OVEsr0n0uaYFf60r5yct0XpTpe3WeZGVsNninUOTI9Y`;
//     headers["Content-Type"] = "application/json";
//     return headers;
// }


// Create a http link:
const httpLink = new createHttpLink({
    uri: process.env.VUE_APP_STRAPI_BASE_URL + "/graphql",
    fetch: (uri, options) => {
        return fetch(uri, options);
    },
});

const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjgxNzM1MDIxLCJleHAiOjE2ODQzMjcwMjF9.OVEsr0n0uaYFf60r5yct0XpTpe3WeZGVsNninUOTI9Y`
    operation.setContext({
        headers: {
            authorization: token ? `Bearer ${token}` : null
        }
    })

    return forward(operation)
})
//
// export const apolloClient = new ApolloClient({
//     // You should use an absolute URL here
//     uri: process.env.VUE_APP_STRAPI_BASE_URL + '/graphql',
//     cache: new InMemoryCache(),
// })

// Create the apollo client
export const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: authMiddleware.concat(httpLink),
    defaultOptions: {
        query: {
            errorPolicy: "all",
        },
        mutate: {
            errorPolicy: "all",
        },
    },
});
