import React from "react";
import { Box, Toolbar } from "@mui/material";
import SideBar from "../components/SideBar";
import BasicCard from "../components/Card";

import { useSelector } from "react-redux";
import { Weight } from "lucide-react";

const drawerWidth = 240;

export default function Home() {
  const {userData} = useSelector((store)=>store.user);
  return (
    <Box sx={{ display: "flex", width: "100%", height: "100vh" }}>
      {/* Sidebar */}
      <SideBar name={userData.name}/>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column", // Ensures vertical stacking
          textAlign: "center",
        }}
      >
        <Toolbar />
        <BasicCard width={"100%"}  impParameters={userData.weight}/>
      </Box>
    </Box>
  );
}
