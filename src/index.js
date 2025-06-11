import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js"

dotenv.config({
    path:"./env"
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is Running at Port ${process.env.PORT} and MongoDb connected `);
        
    })
})
.catch((err)=>{
    console.log("MongoDb Connection Failed With app ||", err);
    
});


