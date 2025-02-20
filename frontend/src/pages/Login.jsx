import React, { useState, useEffect, useContext } from "react";
import "../pages/css/register.css";
import { Navigate, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import {Loader2} from "lucide-react"
import {useDispatch} from "react-redux";
import {setUser} from "../redux/user.slice.js";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading , setLoading] = useState(false);

  const notify = (message) => toast(message);
 
  const handleLogin = async (e) => {
    e.preventDefault();

    try{
      setLoading(true);
      const response = await axios.post("http://localhost:3000/user/login" , {email : email , password : password} , {withCredentials : true});
      if(response.status == 200){
        localStorage.setItem("token" , response.data.token);
        dispatch(setUser(response.data.user));
        notify(response.data.message);
        navigate("/");
      }
    }
    catch(error){
      notify(error?.response?.data?.message);
    }
    finally{
      setLoading(false);
    }
  };

  const toggleForm = () => {
    navigate("/register");
  };

  return (
    <div className={"login-page container"}>
      <form onSubmit={handleLogin} className={"form"}>
        <h2 className={"header"}>Login</h2>
        <div className={"formGroup"}>
          <label className={"label"}>Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={"input"}
            required
          />
        </div>
        <div className={"formGroup"}>
          <label className={"label"}>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={"input"}
            required
          />
        </div>
        <br />
        
        <div className="formGroup">
          {
            loading ? 
            (
              <button className={"button"}>
                <Loader2 className = "animate-spin"/> Please Wait
              </button>
            ) : 
            (
              <button type="submit" className={"button"}>
                Login
              </button>
            )
          }
        </div>

        <div className="formGroup">
          <p onClick={toggleForm} className={"toggle"}>
            Don't have an account? Register here.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
