
import { Router } from "express";
import {PatientController} from "../controller/PatientController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";
import {corsWithOptions,corsWithoutOptions} from './cors'

  const router = Router();
  
  //Get all users
  router.get("/",corsWithOptions,
    PatientController.all);

  // Get one user
  router.get(
    "/:id([0-9]+)",
    PatientController.one
  );

  // Get one patient bydate
  router.put(
    "/update",
    PatientController.update
  );

  // Get one patient bydate
  router.get(
    "/bydate",
    PatientController.bydate
  );

  //Create a new user
  router.post("/", 
    PatientController.save
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
    PatientController.remove
  );

  export default router;