import express from "express"
import dotenv from "dotenv"
import DB_CONNECT from "./config/dbconnection"
dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()

app.listen(PORT, async()=>{
    await DB_CONNECT()
    console.log(`server listening on port ${PORT}`)
})