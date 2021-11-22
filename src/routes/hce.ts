import { Router,Request,Response } from "express";
import { HceController } from "../controller/HceController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

  const router = Router();
  
  //Get all hces
  router.get("/",
  HceController.all);

  // Get one hce
  router.get(
    "/:id([0-9]+)",
    HceController.one
  );

  //Create a new hce
  router.post("/", 
  HceController.save
  );

  //Create a new vital
  router.post("/vital", 
  HceController.savevital
  );

  //Create a new evolution
  router.post("/evolucion", 
  HceController.saveevol
  );

  //Create a new evolution
  router.post("/odontologia", 
  HceController.saveodon
  );

  //Edit one hce
/*  router.patch(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    UserController.editUser
  );*/

  //Delete one hce
  router.delete(
    "/:id([0-9]+)",
    HceController.remove
  );

  export default router;