import React, { useState } from "react";
import "../pages/css/register.css";
import { Navigate, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import {Loader2} from "lucide-react";
import {useDispatch} from "react-redux";
import {setUser} from "../redux/user.slice.js";


const Register = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setmobileNumber] = useState();
  const [password, setPassword] = useState("");
  const [dob, setdob] = useState(new Date());
  const [height, setheight] = useState(130);
  const [weight, setweight] = useState(50);
  const [next, setnext] = useState(true);
  const [mobileNumberErrorMessage, setmobileNumberErrorMessage] = useState("");
  const notify = (message) => toast(message);

  const [loading , setLoading] = useState(false);

  // to handle register
  const handleRegister = async (e) => {

    e.preventDefault();
    
   try{
    setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/user/register",
        {
          name: name,
          email: email,
          mobile_number: mobileNumber,
          password: password,
          dob: dob,
          height: height,
          weight: weight,
          age: getAge(dob),
          bmi: ((weight / height ** 2) * 10000).toFixed(2),
        },
        { withCredentials: true }
      );

      if(response.status == 201){
        localStorage.setItem("token" ,response.data.token);
        dispatch(setUser(response.data.user));
        notify(response?.data?.message);
        navigate("/");
      }
   }
   catch(error){
    notify(error?.response?.data?.message);
   }

   finally{
    setLoading(false);
   }
      
    }

  // to go to next page of register
  const handleNext = (e) => {
    e.preventDefault();
    if (mobileNumber.toString().length == 10) {
      setnext(false);
    } else {
      setmobileNumberErrorMessage("Enter valid 10-digit number");
    }
  };

  //Function to calculate age
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  //to toggle to login if alread have an account
  const toggleForm = () => {
    navigate("/login");
  };

  return (
    <div className="register-page">
      {next ? (
        <form onSubmit={handleNext} className={"form"}>
          <h2 className={"header"}>Register</h2>
          <div className={"formGroup"}>
            <label className={"label"}>Name</label>
            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={"input"}
              required
            />
          </div>
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
            <label className={"label"}>Mobile Number</label>
            <br />
            <input
              placeholder=""
              type="number"
              value={mobileNumber}
              onChange={(e) => setmobileNumber(e.target.value)}
              className={"input"}
              required
            />
            <p style={{ color: "red", margin: "0px" }}>
              {mobileNumberErrorMessage}
            </p>
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
            <button type="submit" className={"button"}>
              Next
            </button>
          </div>
          <div className="formGroup">
            <p onClick={toggleForm} className={"toggle"}>
              Already have an account? Login here.
            </p>
          </div>
        </form>
      ) : (
        <form onSubmit={handleRegister} className={"form"}>
          <h2>You're almost done!</h2>
          <div className={"formGroup"}>
            <label className={"label"}>Date of birth</label>
            <br />
            <input
              type="date"
              value={dob}
              onChange={(e) => setdob(e.target.value)}
              className={"input"}
              required
            />
          </div>

          <div className={"formGroup"}>
            <label className={"label"}>Height</label>
            <p style={{ margin: "10px 0 0 0 " }}>{height + " " + "cm"}</p>
            <input
              type="range"
              min="100"
              max="250"
              id="myRange"
              value={height}
              onChange={(e) => setheight(e.target.value)}
              className={"input"}
              required
            />
          </div>
          <div className={"formGroup"}>
            <label className={"label"}>Weight</label>
            <p style={{ margin: "10px 0 0 0 " }}>{weight + " " + "Kgs"}</p>
            <input
              type="range"
              min="1"
              max="300"
              id="myRange"
              value={weight}
              onChange={(e) => setweight(e.target.value)}
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
                  <Loader2/>Please wait
                </button>
              ) : 
              (
                <button type="submit" className={"button"}>
                  Create account
                </button>
              )
            }
          </div>
        </form>
      )}
    </div>
  );
};

export default Register;
