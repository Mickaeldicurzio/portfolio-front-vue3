
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
    const token = `da7cbb446a03ba1ca0ce14d1a71dba46073619d2634798bd94397b2d8bcb7bf8c58affa26ec95c14d179e58a52373d2c324ce5e10478dadf978aa1212aab8c6bd5137bda844c6f368ea5ec42c43d6503d3cbbea19a56e5bff2fc92731065aa13a059a3c22a628068f14d8d493a0339649174ceae538cbc062691bd5e121e2bcf`
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
