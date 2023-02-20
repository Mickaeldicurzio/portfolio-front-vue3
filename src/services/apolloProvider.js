import { apolloClient } from './apolloClient'
import { createApolloProvider } from "@vue/apollo-option";

export const apolloProvider = new createApolloProvider({
    defaultClient: apolloClient,
})