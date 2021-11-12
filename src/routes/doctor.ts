import { Router,Request,Response } from "express";
import { DoctorController} from "../controller/DoctorController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

  const router = Router();
  
  //Get all users
  router.get("/",
  DoctorController.all);

  // Get one user
  router.get(
    "/:id([0-9]+)",
    DoctorController.one
  );

  //Create a new user
  router.post("/", 
  DoctorController.save
  );

  //Edit one user
/*  router.patch(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    UserController.editUser
  );*/

  //Delete one user
  router.delete(
    "/:id([0-9]+)",
    DoctorController.remove
  );

  export default router;