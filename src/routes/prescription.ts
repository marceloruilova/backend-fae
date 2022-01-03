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

  //add new info to the prescription
  router.post("/saveinfo", 
  PrescriptionController.saveinfo
  );

  //Delete one user
  router.delete(
    "/:id([0-9]+)",
    PrescriptionController.remove
  );

  export default router;