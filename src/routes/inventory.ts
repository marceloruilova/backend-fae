import { Router,Request,Response } from "express";
import { InventoryController} from "../controller/InventoryController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

  const router = Router();
  
  //Get all users
  router.get("/",
  InventoryController.all);

  // Get one user
  router.get(
    "/:id([0-9]+)",
    InventoryController.one
  );

  //Create a new user
  router.post("/", 
  InventoryController.save );

  //Edit one user
/*  router.patch(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    UserController.editUser
  );*/

  //Delete one user
  router.delete(
    "/:id([0-9]+)",
    InventoryController.remove
  );

  export default router;