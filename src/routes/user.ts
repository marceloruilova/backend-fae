import { Router,Request,Response } from "express";
import {UserController} from "../controller/UserController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

  const router = Router();

  //Get all users
  router.get('/', function(req,res){
    res.json({'message' : 'Ping Successfull'});
  });
  // Get one user
 /* router.get(
    "/:id([0-9]+)",
    User.one
  );

  //Create a new user
  router.post("/", User.save);

  //Edit one user
  /*router.patch(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    UserController.editUser
  );*/

  //Delete one user
 /* router.delete(
    "/:id([0-9]+)",
    User.remove
  );*/

export default router;