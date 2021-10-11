import { Router, Request, Response } from "express";
import auth from "./auth";
import user from "./user";
import patient from "./patient";

const routes = Router();

//routes.use("/auth", auth);
routes.use('/user',user);
routes.use('/patient',patient);

export default routes;