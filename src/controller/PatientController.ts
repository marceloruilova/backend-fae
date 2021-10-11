import {getRepository,LessThan} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Patient} from "../entity/Patient";

export class PatientController {

    static async all (request: Request, response: Response, next: NextFunction) {
        let patientRepository = getRepository(Patient);
        const aux=await patientRepository.find(
                                            {relations:
                                                ["vitals",
                                                "electronic_history",
                                                "electronic_history.evolution",
                                                "electronic_history.odontology",
                                                "electronic_history.evolution.prescription",
                                                "electronic_history.odontology.prescription",
                                                "electronic_history.evolution.prescription.prescribing_doctor",
                                                "electronic_history.odontology.prescription.prescribing_doctor",
                                            ]});
        return response.send(aux);
    }
    
    //get patients by date
    static async bydate(request: Request, response: Response, next: NextFunction) {
        const timeElapsed = new Date();
        let patientRepository = getRepository(Patient);
        
        const today = timeElapsed.toISOString().substring(0,10);
        const aux=await patientRepository.find({where:{appointment_date:today}});
        return response.send(aux);
    }

    static async one(request: Request, response: Response, next: NextFunction) {
        let patientRepository = getRepository(Patient);
        
        const aux=await patientRepository.findOne(request.params.id,
                                        {relations:
                                        ["vitals",
                                        "electronic_history",
                                        "electronic_history.evolution",
                                        "electronic_history.odontology",
                                        "electronic_history.evolution.prescription",
                                        "electronic_history.odontology.prescription",
                                        "electronic_history.evolution.prescription.prescribing_doctor",
                                        "electronic_history.odontology.prescription.prescribing_doctor",
                                        ]});
        return response.send(aux);
    }

    static async save(request: Request, response: Response, next: NextFunction) {
        let patientRepository = getRepository(Patient);
        return response.send(patientRepository.save(request.body));
    }

    static async remove(request: Request, response: Response, next: NextFunction) {
        let patientRepository = getRepository(Patient);
        let patientToRemove = await patientRepository.findOne(request.params.id);
        await patientRepository.remove(patientToRemove);
    }

}