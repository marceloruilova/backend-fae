import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Doctor} from "../entity/Doctor";

export class DoctorController {

    private doctorRepository = getRepository(Doctor);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.doctorRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.doctorRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.doctorRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let doctorToRemove = await this.doctorRepository.findOne(request.params.id);
        await this.doctorRepository.remove(doctorToRemove);
    }

}