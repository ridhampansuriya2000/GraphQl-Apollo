import {quotes, users} from "./fakedb";

const resolvers = {
    Query:{
        users: ()=>users,
        user: (_,args)=>users.find(user => user.id == args.id),
        quotes: ()=>quotes,
        iquote: (_,args)=> quotes.filter(quote => quote.by == args.by)
    },
    User:{
        quotes: (ur)=> quotes.filter(quote=> quote.by == ur.id)
    }
}

export default resolvers;