import express from "express"
const app = express(); //instance of application
import mongoose from 'mongoose';
import {restaurantRoutes} from "./routers/restaurant.router.js"
import { userRoutes } from "./routers/user.router.js";
import cors from 'cors'

mongoose.connect('mongodb+srv://ec022434:VCQ1KykaaubOoENV@cluster82.x5mqvwy.mongodb.net/') //returns a promise
.then(()=>{
    console.log("DB connected");
    
})
.catch((err)=>{
    console.log("DB failed" , err);
})

app.use(express.json()) //body parsing middleware becoz by default req.body is undefined
app.use(cors({origin:"*"}));

app.get('/' , (req,res)=>{
    res.send("Welcome to Rooot route")
})

restaurantRoutes(app);
userRoutes(app)

const PORT = 8080;
app.listen(PORT,()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
})


//





