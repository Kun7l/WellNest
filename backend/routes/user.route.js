import express from "express";
const router = express.Router();

import { userRegister , userLogin , userProfile , userProfileUpdate , userLogOut} from "../controllers/user.controller.js";

import authUser from "../middleware/auth.js";

router.post("/register" , userRegister);
router.post("/login" , userLogin);
router.get("/profile" , authUser , userProfile);
router.post("/profile/update" , userProfileUpdate);
router.get("/logout" , userLogOut);


export default router;