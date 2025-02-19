import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile_number: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  dob: {
    type: Date,
  },
  age: {
    type: Number,
  },
  bmi: {
    type: Number,
  },
} , {timestamps : true});


userSchema.statics.hashPassword = async function (password){
  return await bcrypt.hash(password , 10); 
}

userSchema.methods.verifyPassword = async function (password){
   return await bcrypt.compare(password , this.password);
}

userSchema.methods.generateToken = function (){
  const payload = {
    id : this._id,
  };
  return jwt.sign(payload , process.env.JWT_SECRET);
}

const userModel = mongoose.model("user", userSchema);

export default userModel;
