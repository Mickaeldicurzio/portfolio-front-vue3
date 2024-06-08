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
    const token = `1abe063e112f584d3f70fc58525ba75b59b55191b2ac974f3f4d0dc5ac156082ff61cfd55834c746ad8f03c4e3e87f838df0fe0906ab4c8d8d1c5d87b4e159009ad223d3d8b2abaeb77e8357a15dcbc38b4c6c5b035bf11ad265fe45122808195b84b51c175b06dedbc4b3302e182d3377ca3f0b902984a4d9d5e15d65f6e05e`
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
