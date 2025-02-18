import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Oops!</h1>
      <h5>404 Page Not Found</h5>
      <button onClick={handleHome}>Home</button>
    </div>
  );
}

export default NotFound;
