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
    const token = `688209d543f41bd974fca2a30e1d5a91ede724ca608d990c70d1ab36d3d0d1cba3eaf36604f3101896f4bf6ef6b7d6e4e8e2449eda065fd837aa14e75443c813dbc9600d7747f7095a03b7dd3458a1cad06de41e9f6e15dd4c2c96b7f5426d43114267c26f6e8f68fa98ce1e6cae156e10959739120a891d548778b46d969ac4`
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
