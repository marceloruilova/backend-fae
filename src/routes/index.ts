import { Router, Request, Response } from "express";
import auth from "./auth";
import user from "./user";
import patient from "./patient";
import hce from "./hce";
import evolution from "./evolution";

const routes = Router();

//routes.use("/auth", auth);
routes.use('/user',user);
routes.use('/patient',patient);
routes.use('/hce',hce);
routes.use('/evolution',evolution);

export default routes;