import { Router,Request,Response } from "express";
import {UserController} from "../controller/UserController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

const router = Router();
  
//Get all users
router.get("/",
[checkJwt, checkRole(["ADMIN"])],
UserController.all);

// Get one user
router.get(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  UserController.one
);

//add new info to the prescription
router.post("/save",
[checkJwt, checkRole(["ADMIN"])],
UserController.save
);

  //Delete one user
  router.delete(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    UserController.remove
  );

export default router;