import { Router } from "express";
import {AuthController} from "../controller/AuthController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
const Auth=new AuthController();
//Login route
router.post("/login", Auth.login);

//Change my password
//router.post("/change-password", [checkJwt], AuthController.changePassword);

export default router;