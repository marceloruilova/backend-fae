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

    static async saveinfo(request: Request, response: Response, next: NextFunction) {
        let prescriptionRepository = getRepository(Prescription);
        let aux=await prescriptionRepository.findOne(request.body.prescriptionid,{relations:["info_prescription"]})
        aux.info_prescription=request.body.prescription.info_prescription;
        return response.send(await prescriptionRepository.save(aux));
    }

    static async savedoctor(request: Request, response: Response, next: NextFunction) {
        let prescriptionRepository = getRepository(Prescription);
        let aux=await prescriptionRepository.findOne(request.body.prescriptionid,{relations:["prescribing_doctor"]})
        aux.prescribing_doctor=request.body.prescribing_doctor;
        return response.send(await prescriptionRepository.save(aux));
    }

    static async remove(request: Request, response: Response, next: NextFunction) {
        let prescriptionRepository = getRepository(Prescription);
        let prescriptionToRemove = await prescriptionRepository.findOne(request.params.id);
        await prescriptionRepository.remove(prescriptionToRemove);
    }

}