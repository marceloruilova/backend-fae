import { Router,Request,Response } from "express";
import { PrescriptionController} from "../controller/PrescriptionController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

  const router = Router();
  
  //Get all users
  router.get("/",
  PrescriptionController.all);

  // Get one user
  router.get(
    "/:id([0-9]+)",
    PrescriptionController.one
  );

  //add a new doctor to the prescription
  router.post("/savecie", 
  PrescriptionController.savecie
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
    PrescriptionController.remove
  );

  export default router;