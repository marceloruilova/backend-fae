import {getRepository,LessThan} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Patient} from "../entity/Patient";

export class PatientController {

    static async all (request: Request, response: Response, next: NextFunction) {
        let patientRepository = getRepository(Patient);
        const aux=await patientRepository.find(
                                            {relations:
                                                [
                                                "info",
                                                "electronic_history",
                                                "electronic_history.vital",
                                                "electronic_history.evolution",
                                                "electronic_history.odontology",
                                            ]});
        return response.send(aux);
    }
    
    //get patients by date
    static async bydate(request: Request, response: Response, next: NextFunction) {
        const timeElapsed = new Date();
        const patientRepository = getRepository(Patient);
        
        const today = timeElapsed.toISOString().substring(0,10);
        const aux=await patientRepository.find({where:{appointment_date:today},relations:["electronic_history",
                                                                                            "electronic_history.vital",
                                                                                            "electronic_history.odontology",
                                                                                            "electronic_history.evolution"]});
        return response.send(aux);
    }

    static async one(request: Request, response: Response, next: NextFunction) {
        let patientRepository = getRepository(Patient);
        
        const aux=await patientRepository.findOne(request.params.id,
                                        {relations:
                                        [
                                        "electronic_history",
                                        "electronic_history.vital",
                                        "electronic_history.evolution",
                                        "electronic_history.odontology",
                                        ]});
        return response.send(aux);
    }

    static async save(request: Request, response: Response, next: NextFunction) {
        const patientRepository = getRepository(Patient);
        try{
            await patientRepository.save(request.body);
            return response.status(200).send(request.body);
        }catch(error){
            response.status(409).send(error);
            return;
        }
    }

    static async remove(request: Request, response: Response, next: NextFunction) {
        let patientRepository = getRepository(Patient);
        let patientToRemove = await patientRepository.findOne(request.params.id);
        await patientRepository.remove(patientToRemove);
    }

}