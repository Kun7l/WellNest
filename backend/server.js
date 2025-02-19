
import express from "express";
const app = express();

import cors from "cors";
import dotenv from "dotenv";
import connectToDb from "./db/db.js";
import userRouter from "./routes/user.route.js";


dotenv.config({});
//Connect to database
connectToDb();


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended : true}));

const corsOption = {
    origin : "http://localhost:5173",
    credentials : true,
};
app.use(cors(corsOption));



app.get("/" , (req,res)=>{
    res.send('Hello');
});

app.use("/user" , userRouter);







const PORT = 3000;
app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`);
})

