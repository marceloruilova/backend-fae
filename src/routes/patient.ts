
/*export const Patient=[{
    method: "get",
    route: "/patients",
    controller: PatientController,
    action: "all"
},{
    method: "get",
    route: "/patients/date",
    controller: PatientController,
    action: "bydate"
}, {
    method: "get",
    route: "/patients/:id",
    controller: PatientController,
    action: "one"
}, {
    method: "post",
    route: "/patients",
    controller: PatientController,
    action: "save"
}, {
    method: "delete",
    route: "/patients/:id",
    controller: PatientController,
    action: "remove"
}]
*/ 
import { Router,Request,Response } from "express";
import {PatientController} from "../controller/PatientController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

  const router = Router();
  
  //Get all users
  router.get("/",
    PatientController.all);

  // Get one user
  router.get(
    "/:id([0-9]+)",
    PatientController.one
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