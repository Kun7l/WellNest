import mongoose from "mongoose";

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
    unique: true,
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
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
