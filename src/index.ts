import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import {User} from "./entity/User";
import {Hce} from "./entity/Hce";
import {Evolution} from "./entity/Evolution";
import {Vital} from "./entity/Vital";
import {Doctor} from "./entity/Doctor";
import {Odontology} from "./entity/Odontology";
import { Inventory } from "./entity/Inventory";
import { Prescription } from "./entity/Prescription";

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
    
   //insert inventory
   const inventory=new Inventory();
   inventory.due_date="08/05";
   inventory.name="5";
   inventory.presentation="3"
   inventory.stock="8";
   inventory.concentration="8";
   await connection.manager.save(inventory);   

    //insert prescription
    const prescription=new Prescription();
    prescription.cie10="08/05";
    prescription.disease="5";
    prescription.price="3"
    prescription.ticker_number="8";
    await connection.manager.save(prescription);

    //insert doctor
    const doctor=new Doctor();
    doctor.doctor_first_name="Marco";
    doctor.doctor_last_name="Ananit";
    doctor.especiality="Odontología";
    doctor.ci="1721515";
    doctor.title="Odontología";
    doctor.prescription=prescription;
    doctor.inventory=inventory;
    await connection.manager.save(doctor);
 
    //insert odontology
    const odontology=new Odontology();
    odontology.firstName="08/05";
    odontology.actual_disease="Gripe";
    odontology.odontogram="5";
    odontology.record="La madre tiene menopausia";
    odontology.prescribing_doctor=doctor;
    await connection.manager.save(odontology);

    const odontology2=new Odontology();
    odontology2.firstName="Persona";
    odontology2.actual_disease="Ninguna";
    odontology2.odontogram="7";
    odontology2.record="Padre enfermo";
    await connection.manager.save(odontology2);

    //insert evolution
    const evolution=new Evolution();
    evolution.firstName="08/05";
    evolution.lastName="5";
    evolution.prescribing_doctor=doctor;
    await connection.manager.save(evolution);
    //insert vital
    const vital1=new Vital();
    vital1.especiality="Odontología";
    vital1.date_time_with_timezone="5";
    vital1.attention_hour="3";
    vital1.temperature=5.5;
    vital1.arterial_tension=5.8;
    vital1.fc="5 to 8";
    vital1.fr="5 to 9";
    vital1.spo2=8.6;
    vital1.height=1.75;
    vital1.weight=85;
    vital1.pc=6.8;
    await connection.manager.save(vital1);

    const vital2=new Vital();
    vital2.especiality="Ginecologia";
    vital2.date_time_with_timezone="5";
    vital2.attention_hour="3";
    vital2.temperature=7.5;
    vital2.arterial_tension=5.8;
    vital2.fc="5 to 8";
    vital2.fr="5 to 9";
    vital2.spo2=8.6;
    vital2.height=1.75;
    vital2.weight=85;
    vital2.pc=6.8;
    await connection.manager.save(vital2);

    //insert hces
    const hce1 = new Hce();
    hce1.firstName = "Pepe";
    hce1.lastName = "Torres";
    hce1.odontology=odontology;
    hce1.vitals=vital1;
    hce1.evolution=[evolution];
    await connection.manager.save(hce1);

    const hce2 = new Hce();
    hce2.firstName = "Pablo";
    hce2.lastName = "Mecarito";
    hce2.odontology=odontology2;
    hce2.vitals=vital2;
    await connection.manager.save(hce2);

    //insert user
    const user = new User();
    user.firstName = "Pepe";
    user.lastName="Torres";
    user.age=2;
    user.gender='M';
    user.e_mail="pepe@gmail.com";
    user.appointment_hour=7;
    user.type="ISSFA";
    user.historialelectronico = [hce1,hce2];
    await connection.manager.save(user);

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
