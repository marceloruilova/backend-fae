import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Prescription} from "../entity/Prescription";

export class PrescriptionController {


    static async all(request: Request, response: Response, next: NextFunction) {
        let prescriptionRepository = getRepository(Prescription);
        const aux=await prescriptionRepository.find();
        return response.send(aux);
   }

    static async one(request: Request, response: Response, next: NextFunction) {
        let prescriptionRepository = getRepository(Prescription);
        return response.send(prescriptionRepository.findOne(request.params.id));
    }

    static async savecie(request: Request, response: Response, next: NextFunction) {
        let prescriptionRepository = getRepository(Prescription);
        let aux=await prescriptionRepository.findOne(request.body.prescriptionid,{relations:["prescribing_doctor"]})
        aux.cie10=request.body.prescribing_doctor[0];
        return response.send(await prescriptionRepository.save(aux));
    }

    static async remove(request: Request, response: Response, next: NextFunction) {
        let prescriptionRepository = getRepository(Prescription);
        let prescriptionToRemove = await prescriptionRepository.findOne(request.params.id);
        await prescriptionRepository.remove(prescriptionToRemove);
    }

}