import React, { useState, useEffect, useContext } from "react";
import "../pages/css/register.css";
import { Navigate, Link, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (res == 200) {
      navigate("/");
    } else {
      alert("error");
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
          <button type="submit" className={"button"}>
            Login
          </button>
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
