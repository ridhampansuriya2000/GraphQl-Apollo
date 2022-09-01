import {quotes, users} from "./fakedb.js";

/*-------------------------Create Random ID-----------------------------*/
import {randomBytes} from 'crypto';

const resolvers = {
    Query:{
        users: ()=>users,
        user: (_,args)=>users.find(user => user.id == args.id),
        quotes: ()=>quotes,
        iquote: (_,args)=> quotes.filter(quote => quote.by == args.by)
    },
    User:{
        quotes: (ur)=> quotes.filter(quote=> quote.by == ur.id)
    },
     Mutation:{
         signupUserDummy:(_,{userNew})=>{
            const id = randomBytes(5).toString("hex")
             users.push({
                 id,
                 ...userNew
             })
             return users.find(user => user.id == id);
         }
     }
}

export default resolvers;