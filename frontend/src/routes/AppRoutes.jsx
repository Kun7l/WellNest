import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProtectedRoute from "../pages/ProtectedRoute.jsx"

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<NotFound/>} />  
      </Routes>
    </Router>
  );
}
