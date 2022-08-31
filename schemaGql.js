import {gql} from "apollo-server-core";

const typeDefs = gql`
        type Query{
            users : [User]
            user(id:ID!) : User
            quotes : [Quote]
            iquote(by:ID!):[Quote]
        }
        
        type User{
            id : ID
            firstName:String
            lastName:String
            email:String 
            password:String
            quotes:[Quote]
        }
        
        type Quote{
            name : String
            by: ID
        }
`

export default typeDefs;