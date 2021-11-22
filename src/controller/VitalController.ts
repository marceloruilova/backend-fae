import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Vital} from "../entity/Vital";

export class VitalController {

    private vitalRepository = getRepository(Vital);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.vitalRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.vitalRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.vitalRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let vitalToRemove = await this.vitalRepository.findOne(request.params.id);
        await this.vitalRepository.remove(vitalToRemove);
    }

}