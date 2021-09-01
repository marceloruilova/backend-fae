import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Prescription} from "../entity/Prescription";

export class PrescriptionController {

    private prescriptionRepository = getRepository(Prescription);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.prescriptionRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.prescriptionRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.prescriptionRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let prescriptionToRemove = await this.prescriptionRepository.findOne(request.params.id);
        await this.prescriptionRepository.remove(prescriptionToRemove);
    }

}