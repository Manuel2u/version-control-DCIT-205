import mongoose from "mongoose"

const DB_URI = () => {
    if (process.env.NODE_ENV === "development"){
        return process.env.DEV_MONGO_URI
    }else if (process.env.NODE_ENV === "test"){
        return process.env.TEST_MONGO_URI
    }
}

const DB_CONNECT = async () => {
    const MONGO_URI = DB_URI()

    try{
        mongoose.connect(MONGO_URI, {autoIndex : true})
        console.log("DB connected Succesfully")

    }catch(err){
        console.log(err)
        process.exit()
    }
}

export default DB_CONNECT