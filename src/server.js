import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express();
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))
//Parses JSON body	Handles JSON API requests
app.use(express.json({limit: "16kb"}))
//Parses form data	Handles HTML form submissions slug or registration or login
app.use(express.urlencoded({
    extended:true,
    limit : "16kb"
}))
app.use(cookieParser()) 



export {app}






