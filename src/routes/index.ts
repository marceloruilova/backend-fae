import { Router } from "express";
import auth from "./auth";
import user from "./user";
import patient from "./patient";
import hce from "./hce";
import evolution from "./evolution";
import prescription from "./prescription";
import doctor from "./doctor";
import inventory from "./inventory";

const routes = Router();

routes.use("/auth", auth);
routes.use('/user',user);
routes.use('/patient',patient);
routes.use('/hce',hce);
routes.use('/evolution',evolution);
routes.use('/prescription',prescription);
routes.use('/doctor',doctor);
routes.use('/inventory',inventory);

export default routes;