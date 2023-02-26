import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    
    username : {
        type : String
    },
    
    email : {
        type : String
    },
    
    password : {
        type : String
    },
    
    
})

export default mongoose.model("User", userSchema)