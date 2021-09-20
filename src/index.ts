import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import {validate} from "class-validator";
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
    var cors = require('cors');
    app.use(bodyParser.json());
    app.use(cors());
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
    
    const timeElapsed = new Date();
    const today = timeElapsed.toISOString().substring(0,10);

    //insert inventory
   const inventory=new Inventory();
   inventory.due_date="08/05";
   inventory.name="5";
   inventory.presentation="3"
   inventory.stock="8";
   inventory.concentration="8";
   await connection.manager.save(inventory);   

    //insert doctor
    const doctor=new Doctor();
    doctor.doctor_first_name="Marco";
    doctor.doctor_last_name="Ananit";
    doctor.especiality="Odontología";
    doctor.ci="1721515";
    doctor.title="Odontología";
    doctor.inventory=inventory;
    await connection.manager.save(doctor);
 
    //insert prescription
    const prescription=new Prescription();
    prescription.cie10="08/05";
    prescription.disease="5";
    prescription.price="3"
    prescription.prescribing_doctor=doctor;
    prescription.ticker_number="8";
    await connection.manager.save(prescription);

    const prescription2=new Prescription();
    prescription2.cie10="08/05";
    prescription2.disease="5";
    prescription2.price="3"
    prescription2.prescribing_doctor=doctor;
    prescription2.ticker_number="8";
    await connection.manager.save(prescription2);

    //insert odontology
    const odontology=new Odontology();
    odontology.firstName="08/05";
    odontology.actual_disease="Gripe";
    odontology.odontogram="5";
    odontology.prescription=prescription;
    odontology.record="La madre tiene menopausia";
    await connection.manager.save(odontology);

    const odontology2=new Odontology();
    odontology2.firstName="Persona";
    odontology2.actual_disease="Ninguna";
    odontology2.prescription=prescription2;
    odontology2.odontogram="7";
    odontology2.record="Padre enfermo";
    await connection.manager.save(odontology2);

    //insert evolution
    const evolution=new Evolution();
    evolution.firstName="08/05";
    evolution.lastName="5";
    evolution.prescription=prescription;
    await connection.manager.save(evolution);
    
    const evolution2=new Evolution();
    evolution2.firstName="08/05";
    evolution2.lastName="5";
    evolution2.prescription=prescription2;
    await connection.manager.save(evolution2);

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
    hce1.odontology=odontology;
    hce1.vitals=vital1;
    hce1.evolution=[evolution2];
    await connection.manager.save(hce1);

    const hce2 = new Hce();
    hce2.odontology=odontology2;
    hce2.vitals=vital2;
    hce2.evolution=[evolution];
    await connection.manager.save(hce2);

    //insert user
    const user = new User();
    user.ci="1124542607";
    user.firstName = "Pepe";
    user.lastName="Torres";
    user.age=2;
    user.gender='M';
    user.e_mail="pepe@gmail.com";
    user.appointment_hour="07:00";
    user.appointment_date=today;
    user.type="ISSFA";
    user.asigned_speciality="Ginecologia";
    user.historialelectronico = [hce1,hce2];
    const errors = await validate(user);
    if (errors.length > 0) {
        throw new Error(`Validation failed!`); 
    } else {
        await connection.manager.save(user);
    }

    console.log("Express server has started on port 3000. Open http://localhost:3000/ to see results");

}).catch(error => console.log(error));
