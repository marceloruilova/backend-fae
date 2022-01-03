import { Router } from "express";
import {AuthController} from "../controller/AuthController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

const router = Router();
//Login route
router.post("/login", AuthController.login);

//Login route
router.post("/register", 
[checkJwt, checkRole(["ADMIN"])],AuthController.register);

//Change my password
router.post("/change-password", [checkJwt], AuthController.changePassword);

export default router;