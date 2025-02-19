import userModel from "../models/user.model.js";
const userRegister = async(req, res) => {
    const {
    name,
    email,
    password,
    mobile_number,
    weight,
    height,
    age,
    dob,
    bmi,
  } = req.body;

  try{

    const isUserAlready = await userModel.findOne({email : email});
    if(isUserAlready){
        return res.status(400).json({message : "user already exist with same email"});
    }
    const hashedPassword = await userModel.hashPassword(password);
    const user = await userModel.create({
        name,
        email,
        mobile_number,
        password : hashedPassword,
        weight,
        height,
        age,
        dob,
        bmi,
    });
    const token = user.generateToken();
    return res.status(201).json({user , token , message : "user registered successfully"});
  }

  catch(error){
    console.log(error);
    return res.status(500).json({message : "internal server error"});
  }
};


const userLogin = async (req, res) => {
  const {email , password} = req.body;
  
  if(!email || !password){
    return res.status(404).json({message : "email and password is compulsory"});
  };

  try{

    const user = await userModel.findOne({email : email});
    if(!user){
        return res.status(401).json({message : "user with given email doesnt exist"});
    };

    const isPasswordCorrect = await user.verifyPassword(password);
    if(!isPasswordCorrect){
        return res.status(401).json({message : "password is incorrect"});
    };

    const token = user.generateToken();
    return res.status(200).json({message : "user login successfully" , user , token});

  }
  catch(error){
    return res.status(500).json({message : "internal server error"});
  }
};


const userProfile = (req, res) => {
   return res.status(200).json({user : req.user , message : "user profile found successfully"});
};


const userProfileUpdate = (req, res) => {
  res.send("user Profile Update");
};


const userLogOut = (req, res) => {
  res.send("user LogOut");
};

export { userRegister, userLogin, userProfile, userProfileUpdate, userLogOut };
