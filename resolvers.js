import {quotes, users} from "./fakedb.js";
import mongoose from "mongoose";


/*-------------------------Create Random ID-----------------------------*/
import {randomBytes} from 'crypto';

const User = mongoose.model("User")
import bcrypt from 'bcryptjs';


const resolvers = {
    Query:{
        users: ()=>users,
        user: (_,args)=>users.find(user => user._id == args._id),
        quotes: ()=>quotes,
        iquote: (_,args)=> quotes.filter(quote => quote.by == args.by)
    },
    User:{
        quotes: (ur)=> quotes.filter(quote=> quote.by == ur._id)
    },
     Mutation:{
         signupUserDummy:(_,{userNew})=>{
            const _id = randomBytes(5).toString("hex")
             users.push({
                 _id,
                 ...userNew
             })
             return users.find(user => user._id == _id);
         },
         signupUser: async (_,{userNew})=>{
            const user =  await User.findOne({email : userNew.email});
             if(user){
                 throw new Error("User already exist with that email")
             }
          const hashedPassword =  await bcrypt.hash(userNew.password,12);

            const newUser = new User({
                 ...user,
                 password : hashedPassword
             });
             return await newUser.save();
         }
     }
}

export default resolvers;