import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../redux/user.slice.js";
import axios from "axios";

const ProtectedRoute = ({children}) => {
   const token = localStorage.getItem("token");
   const navigate = useNavigate();
   const dispatch = useDispatch();

   useEffect(()=>{
    
     if(!token){
        navigate("/login");
     };

     const getUser = async () =>{
      try{
        const response = await axios.get("http://localhost:3000/user/profile" , {
          headers : {
            Authorization : `Bearer ${token}`
          }
        });
        dispatch(setUser(response.data.user));
      } 
      catch(error){
        localStorage.removeItem("token");
        navigate("/login");
      }
     }
     getUser();

   } , [token])
  
    return (
    <>
        {children}
    </>
  )
}

export default ProtectedRoute;