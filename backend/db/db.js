import mongoose from "mongoose";

function connectToDb(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{console.log("database connected successfully")})
    .catch((error)=>{console.log(`error in connecting database : ${error}`)})
}

export default connectToDb;