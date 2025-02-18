const userRegister = (req,res) =>{
    const {name , email , password , mobile_number , weight , height , age , dob} = req.body;
    res.send("hello");
}

const userLogin = (req,res) =>{
    res.send("Login");
}

const userProfile = (req,res) =>{
    res.send("user Profile");
}

const userProfileUpdate = (req , res) =>{
    res.send("user Profile Update");
}

const userLogOut = (req,res)=>{
    res.send("user LogOut");
}

export {userRegister , userLogin , userProfile , userProfileUpdate , userLogOut};