import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Hce} from "../entity/Hce";

export class HceController {

    private hceRepository = getRepository(Hce);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.hceRepository.find({ relations: ["vitals"] });
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.hceRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.hceRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let hceToRemove = await this.hceRepository.findOne(request.params.id);
        await this.hceRepository.remove(hceToRemove);
    }

}