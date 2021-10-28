import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import routes from "./routes";
import {validate} from "class-validator";
import {Patient} from "./entity/Patient";
import {Hce} from "./entity/Hce";
import {Evolution} from "./entity/Evolution";
import {Vital} from "./entity/Vital";
import {Doctor} from "./entity/Doctor";
import {Odontology} from "./entity/Odontology";
import { Inventory } from "./entity/Inventory";
import { Prescription } from "./entity/Prescription";
import { Info } from "./entity/Info";
import { User } from "./entity/User";

createConnection().then(async connection => {

    // create express app
    const app = express();
    var cors = require('cors');
    app.use(bodyParser.json());
    app.use(cors());
    // register express routes from defined application routes
    //app.use("/",routes);

    app.use("/",routes);
    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    // insert new data for test
    
    const timeElapsed = new Date();
    const today = timeElapsed.toISOString().substring(0,10);
/*
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
    prescription.medicine=["Amoxilina 5gramos","Tabletas 3"];
    prescription.notes="nada";
    prescription.prescribing_doctor=doctor;
    await connection.manager.save(prescription);

    const prescription2=new Prescription();
    prescription2.medicine=["Amoxilina 5gramos","Tabletas 3"];
    prescription.notes="nada";
    prescription2.prescribing_doctor=doctor;
    await connection.manager.save(prescription2);

    //insert odontology
    const odontology=new Odontology();
    odontology.actual_disease="Gripe";
    odontology.odontogram="5";
    odontology.prescription=prescription;
    odontology.record="La madre tiene menopausia";
    await connection.manager.save(odontology);

    const odontology2=new Odontology();
    odontology2.actual_disease="Ninguna";
    odontology2.prescription=prescription2;
    odontology2.odontogram="7";
    odontology2.record="Padre enfermo";
    await connection.manager.save(odontology2);

    //insert evolution
    const evolution=new Evolution();
    evolution.establishment="Ginecologia";
    evolution.initial_observations="Ginecologia";
    evolution.month=timeElapsed.getMonth().toString();
    evolution.year=timeElapsed.getFullYear().toString();
    evolution.mc="Ginecologia";
    evolution.prescription=prescription;
    await connection.manager.save(evolution);
    
    const evolution2=new Evolution();
    evolution2.establishment="Ginecologia";
    evolution2.initial_observations="Ginecologia";
    evolution2.month=timeElapsed.getMonth().toString();
    evolution2.year=timeElapsed.getFullYear().toString();
    evolution2.mc="Ginecologia";
    evolution2.prescription=prescription2;
    await connection.manager.save(evolution2);

    //insert vital
    const vital1=new Vital();
    vital1.especiality="Odontología";
    vital1.attention_hour="07:20";
    vital1.attention_date=today;
    vital1.temperature_end=70.5;
    vital1.temperature_start=65.8;
    vital1.sistolica=120;
    vital1.diastolica=115;
    vital1.fc_end=11.5;
    vital1.fc_start=9.5;
    vital1.fr_end=8.8;
    vital1.fr_start=6.9;
    vital1.spo2=8.6;
    vital1.height=1.75;
    vital1.weight=85;
    vital1.pc=6.8;
    await connection.manager.save(vital1);

    const vital2=new Vital();
    vital2.especiality="Ginecologia";
    vital2.attention_hour="07:20";
    vital2.attention_date=today;
    vital2.temperature_end=7.5;
    vital2.temperature_start=5.8;
    vital2.sistolica=115;
    vital2.diastolica=130;
    vital2.fc_end=6.5;
    vital2.fc_start=5.5;
    vital2.fr_end=7.8;
    vital2.fr_start=5.9;
    vital2.spo2=8.6;
    vital2.height=1.75;
    vital2.weight=85;
    vital2.pc=6.8;
    await connection.manager.save(vital2);
    
    //insert hces
    const hce1 = new Hce();
    hce1.evolution=[evolution,evolution2];
    hce1.odontology=[odontology,odontology2];
    hce1.vital=[vital1,vital2];
    await connection.manager.save(hce1);

    //insert info
    const info = new Info();
    info.secondName="1134010697";
    info.secondSurname = "Pepe";
    info.age=2;
    info.gender='M';
    info.e_mail="pepe@gmail.com";
    await connection.manager.save(info);

    //insert patient
    const patient = new Patient();
    patient.ci="1133011697";
    patient.firstName = "Pepe";
    patient.surName = "torres";
    patient.appointment_hour="07:01";
    patient.appointment_date=today;
    patient.type="ISSFA";
    patient.asigned_speciality="Ginecologia";
    patient.electronic_history=hce1;
    patient.info=info;
    
    const errors = await validate(patient);
    if (errors.length > 0) {
        throw new Error(`Validation failed!`);
    } else {
        await connection.manager.save(patient);
    }
*/
    console.log("Express server has started on port 3000. Open http://localhost:3000/ to see results");

}).catch(error => console.log(error));
