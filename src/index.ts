import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import {User} from "./entity/User";
import {Hce} from "./entity/Hce";
import {Vital} from "./entity/Vital";

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    // insert new data for test

    //insert vital
    const vital1=new Vital();
    vital1.date="08/05";
    vital1.temperature="5";
    vital1.tensionArterial="8";
    await connection.manager.save(vital1);

    //insert hces
    const hce1 = new Hce();
    hce1.firstName = "John.jpg";
    hce1.lastName = "John.jpg";
    hce1.vitals=vital1;
    await connection.manager.save(hce1);

    const hce2 = new Hce();
    hce2.firstName = "jpg";
    hce2.lastName = "jpg";
    await connection.manager.save(hce2);
    //insert user
    const user = new User();
    user.firstName = "Pepe";
    user.lastName="pepe";
    user.age=2;
    user.historialelectronico = [hce1,hce2];
    await connection.manager.save(user);

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
