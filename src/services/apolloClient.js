import {ApolloClient, ApolloLink, InMemoryCache, createHttpLink} from "@apollo/client/core";
import { useI18n } from 'vue-i18n';

// Create a http link:
const httpLink = new createHttpLink({
    uri: process.env.VUE_APP_STRAPI_BASE_URL + "/graphql",
    fetch: (uri, options) => {
        return fetch(uri, options);
    },
});

const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    const token = process.env.VUE_APP_STRAPI_TOKKEN
    operation.setContext({
        headers: {
            authorization: token ? `Bearer ${token}` : null,
        },
    })

    operation.variables['locale'] = localStorage.getItem('currentLocale') ?? useI18n().locale.value

    return forward(operation)
})

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
