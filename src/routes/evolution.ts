import { Router,Request,Response } from "express";
import {EvolutionController} from "../controller/EvolutionController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

  const router = Router();
  
  //Get all users
  router.get("/",
  EvolutionController.all);

  // Get one user
  router.get(
    "/:id([0-9]+)",
    EvolutionController.one
  );

  // Get one patient bydate
  router.get(
    "/bymonth",
    EvolutionController.bymonth
  );

  //Create a new user
  router.post("/", 
  EvolutionController.save
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
    EvolutionController.remove
  );

  export default router;