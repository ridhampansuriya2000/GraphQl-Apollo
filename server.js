import {ApolloServer, gql} from "apollo-server";


import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core";

import typeDefs from "./schemaGql.js";

import mongoose from "mongoose";
import {MONGO_URI} from "./config.js";

mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("connected",()=>{
    console.log('Connected to mongodb')
});

mongoose.connection.on("error",(err)=>{
    console.log('error connecting',err)
});

import "./Models/Quotes.js";
import "./Models/User.js";


import resolvers from "./resolvers.js";

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

