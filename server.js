import {ApolloServer, gql} from "apollo-server";


import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core";
import resolvers from "./resolvers";
import typeDefs from "./schemaGql";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

server.listen().then(({url})=>{
    console.log(`server is running at ${url}`)
})