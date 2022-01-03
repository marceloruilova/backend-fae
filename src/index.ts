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
import { User } from "./entity/User";
import { InfoPrcrptn } from "./entity/InfoPrcrptn";

createConnection().then(async connection => {

    // create express app
    const app = express();
    var https = require('https');
    var cors =require('cors')
    var http = require('http');
    var fs = require('fs');
    app.use(bodyParser.json());
    app.use(cors());
    // register express routes from defined application routes
    app.use("/",routes);
    // setup express app here
    // ...
    
    app.set('secPort',3443);
    app.set('Port',3000);
    
    /**
     * Create HTTPS server.
     */ 
     
    var options = {
      key: fs.readFileSync('./src/certificates/ia.key'),
      cert: fs.readFileSync('./src/certificates/ia.crt')
    };
    
    var secureServer = https.createServer(options,app);
    var server = http.createServer(app);
    /**
     * Listen on provided port, on all network interfaces.
     */
    server.listen(3000)
    
    secureServer.listen(app.get('secPort'), () => {
       console.log('Server listening on port '+app.get('secPort'));
    });

    // start express server

    // insert new data for test
    
    const timeElapsed = new Date();
    const timeElapsed2 = new Date(0);
    const today = timeElapsed.toISOString().substring(0,10);
    const today2 = timeElapsed2.toISOString().substring(0,10);
/*
    //insert inventory
   const inventory=new Inventory();
   inventory.due_date=today;
   inventory.name="Paracetamol";
   inventory.presentation="Capsulas"
   inventory.stock=8;
   inventory.concentration="250mg";
   await connection.manager.save(inventory);  

   const inventory2=new Inventory();
   inventory2.due_date=today;
   inventory2.name="Amocilina";
   inventory2.presentation="Crema"
   inventory2.stock=4;
   inventory2.concentration="none";
   await connection.manager.save(inventory2);   

    //insert doctor
    const doctor=new Doctor();
    doctor.doctor_first_name="Marco";
    doctor.doctor_last_name="Ananit";
    doctor.ci="1721515";
    await connection.manager.save(doctor);
 
    const infoprescription=new InfoPrcrptn();
    infoprescription.price=5.2;
    infoprescription.cie10={code:"A00",disease:"mocos"};
    infoprescription.ticket_number="4";
    infoprescription.cie10={code:"A00",disease:"Colera"};
    await connection.manager.save(infoprescription);
  
    const infoprescription2=new InfoPrcrptn();
    infoprescription2.price=5.2;
    infoprescription2.cie10={code:"B05",disease:"mocos"};
    infoprescription2.ticket_number="4";
    infoprescription2.cie10={code:"A00",disease:"Colera"};
    await connection.manager.save(infoprescription2);

    //insert prescription
    const prescription=new Prescription();
    prescription.medicine=["Amoxilina 5gramos","Tabletas 3"];
    prescription.notes="nada";
    prescription.prescribing_doctor=doctor;
    prescription.info_prescription=infoprescription2;
    await connection.manager.save(prescription);

    const prescription2=new Prescription();
    prescription2.medicine=["Amoxilina 5gramos","Tabletas 3"];
    prescription2.notes="nada";
    prescription2.prescribing_doctor=doctor;
    prescription2.info_prescription=infoprescription;
    await connection.manager.save(prescription2);

    //insert odontology
    const odontology=new Odontology();
    odontology.actual_disease="Gripe";
    odontology.odontogram="5";
    odontology.record="La madre tiene menopausia";
    await connection.manager.save(odontology);

    const odontology2=new Odontology();
    odontology2.actual_disease="Ninguna";
    odontology2.odontogram="7";
    odontology2.record="Padre enfermo";
    await connection.manager.save(odontology2);

    //insert evolution
    const evolution=new Evolution();
    evolution.establishment="Ginecologia";
    evolution.month=timeElapsed.getMonth().toString();
    evolution.year=timeElapsed.getFullYear().toString();
    evolution.mc="Ginecologia";
    evolution.enf="Ginecologia";
    evolution.qx="Ginecologia";
    evolution.alergies="Ginecologia";
    evolution.objective="Ginecologia";
    evolution.subjective="Ginecologia";
    evolution.prescription=prescription;
    await connection.manager.save(evolution);
    
    const evolution2=new Evolution();
    evolution2.establishment="Ginecologia";
    evolution2.month=timeElapsed.getMonth().toString();
    evolution2.year=timeElapsed.getFullYear().toString();
    evolution2.mc="Ginecologia";
    evolution2.enf="Ginecologia";
    evolution2.qx="Ginecologia";
    evolution2.alergies="Ginecologia";
    evolution2.objective="Ginecologia";
    evolution2.subjective="Ginecologia";
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
    vital2.attention_date=today2;
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
    hce1.evolution=[evolution];
    hce1.odontology=[odontology,odontology2];
    hce1.vital=[vital1,vital2];
    await connection.manager.save(hce1);

    //insert patient
    const patient = new Patient();
    patient.ci="1113776688";
    patient.firstName = "Pepe";
    patient.surName = "torres";
    patient.age = 15;
    patient.gender = "M";
    patient.appointment_hour="09:00";
    patient.appointment_date=today;
    patient.type="IESS";
    patient.asigned_speciality="Rayos X";
    patient.electronic_history=hce1;
    
    const errors = await validate(patient);
    if (errors.length > 0) {
        throw new Error(`Validation failed!`);
    } else {
        await //connection.manager.save(patient);
    }*/


}).catch(error => console.log(error));
