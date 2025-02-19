import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const authUser = async (req,res,next) =>{
    const token = req.headers?.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({message : "user is unauthorized"});
    }

    try{
        const payload =  jwt.verify(token , process.env.JWT_SECRET);  
        const user = await userModel.findById(payload.id);
        if(!user){
            return res.status(401).json({message : "user is unauthorized"});  
        }

        req.user = user;
        return next();

    }
    catch(error){
        return res.status(401).json({message : "user is unauthorized"});
    }

}

export default authUser;